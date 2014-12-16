define(["avalon", "text!../../../modules/rightpage/rightpage.html",'server','websocket','base','jquery'], function(avalon, rightpage,server,WebSocketEx,base,$) {

    avalon.templateCache.rightpage = rightpage;
    var model= avalon.vmodels.root;  
    var rightmodel =avalon.define({
        $id: "rightpage", 
        wst:"",
        txt:"",
        placeholder:"添加你的回复",
        defcolor:"",
        defuid:0,
        atid:0,  
        current: -1,
        showCurrent:false,
        oldcurrent:-1, 
        connectSocketServer:function(){
        	model.titlemsg='官方频组';
        	model.userLogin.$model.channel="1";
               rightmodel.wst = new WebSocketEx('ws://'+server.remote_ip+':'+server.remote_port+'/chatserver',"", function () {
               rightmodel.wst.send(JSON.stringify(model.userLogin.$model)); 
            }, function () {
               	//alert('close');
            }, function (evt) { 
            	var parsedata = JSON.parse(evt.data); 
                parsedata.type===7 && rightmodel.wst.send(JSON.stringify(model.historymsg.$model));
                if(parsedata.type===7){
                	rightmodel.defcolor=parsedata.data.color;
                	rightmodel.defuid=parsedata.data.uid;
                }
               if(parsedata.type && (parsedata.type===3 )){
               	 model.msgdata=base.formatdata(parsedata.data); 
               	  model.rootmsg=model.msgdata.root.sort(function(a,b){
               	  	return a.time-b.time;
               	  });
               	 model.othermsg=model.msgdata.other.sort(function(a,b){
               	  	return a.time-b.time;
               	  });
               	 model.rightmsg=model.msgdata.alldata.sort(function(a,b){
               	  	return a.time-b.time;
               	  });;
               	
               	
               }else if(parsedata.type && (parsedata.type===1 )){
               	var curdata=parsedata.data;
               	  model.msgdata.alldata.push(curdata[0]);
               	 model.rightmsg.push(curdata[0]);
               	 base.upGroupData(parsedata.data,model);
                     
               }
				rightmodel.wst.onclose();
            }, function (evt) {
                 alert('error' + evt.data);
            });
         
        },
        selectmsg:function(id,color,index){
         	rightmodel.current = index;
         	  $("#textmsg").focus();
         	   $("#textmsg").text("");
         	  $("#textmsg").css('text-indent','72px');
         	if(rightmodel.oldcurrent===index && rightmodel.oldcurrent!=-1){
         		rightmodel.showCurrent=true;
         		rightmodel.oldcurrent = -1; 
         	}else{
         		rightmodel.showCurrent=false;  
         		rightmodel.oldcurrent = index;
         	}
         	
         	rightmodel.showCurrent= !rightmodel.showCurrent;
         	if(!rightmodel.showCurrent){ 
         		rightmodel.atid=0; 
         		rightmodel.txt="";
         		$("#textmsg").text("");
         		$("#ptextmsg").text(rightmodel.placeholder).css('color','');
         		$("#textmsg").css('text-indent','0px');
         	}else{
         		rightmodel.atid=id;
        		rightmodel.defcolor=color; 
        		rightmodel.txt=base.getusrName(model.msgdata.alldata,id); 
        		$("#ptextmsg").text(rightmodel.txt).css('color','#434a49');
        		 
         	}
         	model.mcurrent = -1;
         	model.othercurrent = -1;
        	
        }, 
        sendMessage:function(e){  
        	if(rightmodel.txt!=""){ 
        		var sendparm ={
					"type":1,
					"id":Date.now(), 		//# 客户端设置
					"data":{
						"mtype":0,			//# 该字段0表示文本消息，1表示图片，目前只支持0
						"msg":rightmodel.txt,		//# 具体消息内容，如果是图片则是一个url
						"at":rightmodel.atid,				//# at的消息id，0表示没有at,消息id大于0
					}
				}
        	rightmodel.wst.send(JSON.stringify(sendparm)); 
        	rightmodel.txt=""; 
        	rightmodel.atid=0; 
        	$("#textmsg").text("");
        	 $("#ptextmsg").text(rightmodel.placeholder).css('color','');
        	 $("#textmsg").css('text-indent','0px');
        	}
        	
        },
        cleardeftxt:function(){
        	   $("#textmsg").focus();  
	     	  if(!rightmodel.showCurrent){
	     	  	 $("#ptextmsg").text("").css('color','');
	     	  }else{ 
	    		$("#textmsg").text("");
   
        	}	
        },
        keydowngettext:function(e){ 
                 $("#textmsg").focus();  
		     	  if(e.which===13){
		     	    rightmodel.txt+=  $("#textmsg").text();
		    	    rightmodel.atid=~~ $("#textmsg").attr('atid');
		    		rightmodel.sendMessage(); 
		    		  $("#ptextmsg").text("").css('color',''); 
		     	  }  
        },
        sendmsgstart:function(){
        	 rightmodel.txt+= $("#textmsg").text();
    	    rightmodel.atid=~~$("#textmsg").attr('atid');
    		rightmodel.sendMessage();   
    		$("#ptextmsg").text(rightmodel.placeholder).css('color','');
    		$("#textmsg").text("");
        }
    })
    avalon.vmodels.root.rightpage = "rightpage"
    
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
 
})
