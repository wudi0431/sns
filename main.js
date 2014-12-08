 require.config({//第一块，配置
    baseUrl: '',
    paths: {
        jquery: 'vendor/jquery/jquery-2.1.0',
        avalon: "vendor/avalon/avalon",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        text: 'vendor/require/text',
        domReady: 'vendor/require/domReady',
        css: 'vendor/require/css.js',
        socket:'vendor/socket-io/socket.io-1.2.1',
        server:'server-config',
        websocket:'vendor/websocket/WebSocketEx',
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



require(['avalon','server','websocket','underscore'], function(avalon,server,WebSocketEx,_) {//第二块，添加根VM（处理共用部分）
   
    var model =avalon.define({
        $id: "root",  
        websocket:"",
        txt:"",
        defcolor:"",
        defuid:0,
        atid:0,
        contbg:"",
        msgdata:{},
        rootmsg:[],
        othermsg:[],
        rightmsg:[],
        sengmsg:[],
        userLogin:{"appkey":"ABCDEFG","channel":"1","username":"wiiiky@yeah.net","password":"123456"},
        historymsg:{"type":"2","data":{"before":"0","count":"10"}},
         gotoall:function(){
        	alert(111);
        },
        chanelchange:function(id){
        	alert(id);
        },
         selectmsg:function(id){
         	alert(id);
        	model.atid=id;
        	var elm =avalon(this);
        	
        	model.contbg='#d8d8d8';
        	model.txt=getusrName(model.msgdata.alldata,id);
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
               	 model.msgdata=formatdata(parsedata.data); 
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
   

    
});
 
 function formatdata(data){
 	var rootdata=[],otherdata=[],curdata=[];
 	curdata=data;
 	for (var i = 0; i < curdata.length; i++) {
 		if(curdata[i].atroot===0){
 			rootdata.push(curdata[i]);
 			curdata.splice(i,1);
 			i--;
 		}
 	}
 	for (var i = 0; i < curdata.length; i++) {
 		for (var j = 0; j < rootdata.length; j++) {
 			if(rootdata[j].atroot===curdata[i].mid){
 				rootdata.push(curdata[i]);
 			}else{
 				otherdata.push(curdata[i]);
 			}
 		}
 	}
 	return{
 		root:rootdata,
 		other:otherdata,
 		alldata:rootdata=rootdata.concat(otherdata)
 	}
 	
 }
 function getusrName(data,id){
 	var name="";
 	for (var i = 0; i < data.length; i++) {
 		if(data[i].mid===id){
 			name='@'+decodeURIComponent(data[i].username)+"：";
 		}
 	}
 	return name;
 }
 