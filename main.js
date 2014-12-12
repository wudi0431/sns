 require.config({//第一块，配置
    baseUrl: '',
    paths: {
        jquery: 'vendor/jquery/jquery-2.1.0',
        emojis: 'vendor/jquery/jquery.emoji',
        avalon: "vendor/avalon/avalon",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        text: 'vendor/require/text',
        domReady: 'vendor/require/domReady',
        css: 'vendor/require/css.js',
        socket:'vendor/socket-io/socket.io-1.2.1',
        server:'server-config',
        websocket:'vendor/websocket/WebSocketEx',
        base:'base',
        underscore:'vendor/underscore/underscore'
    },
    priority: ['text', 'css'],
    shim: {
        jquery: {
            exports: "jQuery"
        },
        avalon: {
            exports: "avalon"
        }
    }
});



require(['avalon','server','websocket','base','jquery','emojis'], function(avalon,server,WebSocketEx,base,$,emojis) {//第二块，添加根VM（处理共用部分）
   
    var model =avalon.define({
        $id: "root",  
        websocket:"",
        txt:"",
        defcolor:"",
        defuid:0,
        atid:0, 
        rightwidth:0,
        msginfoheight:0,
        middenheight:0,
        msgdata:{},
        rootmsg:[],
        othermsg:[],
        rightmsg:[],
        sengmsg:[],
        current: -1,
        showCurrent:false,
        mcurrent: -1,
        userLogin:{"appkey":"ABCDEFG","channel":"1","username":"wiiiky@yeah.net","password":"123456"},
        historymsg:{"type":"2","data":{"before":"0","count":"10"}},
         gotoall:function(){
        	alert(111);
        },
        chanelchange:function(rid,at,mid,index){
             model.mcurrent = index;
             model.current = -1;
             model.showCurrent=false;
        	 model.rightmsg = base.getRootMsg(model.msgdata.alldata,rid,at,mid);
        },
         selectmsg:function(id,color,index){
         	model.current = index
         	model.showCurrent= !model.showCurrent;
         	if(!model.showCurrent){
         		model.txt="";
         		model.atid=0;
         	}else{
         		model.atid=id;
        		model.defcolor=color; 
        		model.txt=base.getusrName(model.msgdata.alldata,id);
         	}
         	model.mcurrent = -1;
        	
        },
        seeAllmsg:function(){
        	 model.rightmsg = model.msgdata.alldata;
        },
        connectSocketServer:function(){
               model.websocket = new WebSocketEx('ws://'+server.remote_ip+':'+server.remote_port+'/chatserver',"", function () {
               model.websocket.send(JSON.stringify(model.userLogin.$model)); 
            }, function () {
               	//alert('close');
            }, function (evt) { 
            	var parsedata = JSON.parse(evt.data); 
                parsedata.type===7 && model.websocket.send(JSON.stringify(model.historymsg.$model));
                if(parsedata.type===7){
                	model.defcolor=parsedata.data.color;
                	model.defuid=parsedata.data.uid;
                }
               if(parsedata.type && (parsedata.type===3 )){
               	 model.msgdata=base.formatdata(parsedata.data); 
               	  model.rootmsg=model.msgdata.root.sort(function(a,b){
               	  	return a.time-b.time;
               	  });
               	 model.othermsg=model.msgdata.other.sort(function(a,b){
               	  	return a.time-b.time;
               	  });;
               	 model.rightmsg=model.msgdata.alldata.sort(function(a,b){
               	  	return a.time-b.time;
               	  });;
               	
               	
               }else if(parsedata.type && (parsedata.type===1 )){
               	var curdata=parsedata.data;
               	  model.msgdata.alldata.push(curdata[0]);
               	 model.rightmsg.push(curdata[0]);
               	 base.upGroupData(parsedata.data,model);
                     
               }
				model.websocket.onclose();
            }, function (evt) {
                 alert('error' + evt.data);
            });
         
        },
        keydownsengmsg:function(e){
        	if(e.which===13){
        		model.sendMessage(); 
        	}  
        },
        sendMessage:function(e){  
        	if(model.txt!=""){ 
        		var sendparm ={
					"type":1,
					"id":Date.now(), 		//# 客户端设置
					"data":{
						"mtype":0,			//# 该字段0表示文本消息，1表示图片，目前只支持0
						"msg":model.txt,		//# 具体消息内容，如果是图片则是一个url
						"at":model.atid,				//# at的消息id，0表示没有at,消息id大于0
					}
				}
        	model.websocket.send(JSON.stringify(sendparm)); 
        	model.txt=""; 
        	}
        	
        }
    });
    avalon.scan(document.body)
    model.connectSocketServer();   
    base.getWindow(model);
    avalon.filters.dataFilter = function(str, args){//str为管道符之前计算得到的结果，默认框架会帮你传入，此方法必须返回一个值
          /* 具体逻辑 */ 
           var day =  parseInt((Date.now()- new Date (args*1000))/86400000);
           if(day >1 && day <=30){ 
           	   return day+'天前';
           }else if(day >30){
           	    return '一个月前';
           }else if(day<1){
           	var time = base.changeTime(args);
           	if(time<=0){
           		time=str;
           	}else{
           		time+'前';
           	}
           	   return time;
           } 
       }
    window.onresize=function(){
    	  base.getWindow(model);
    }
});
 

 