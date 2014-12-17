define(["avalon", "text!../../../modules/grouppage/grouppage.html",'base','server','websocket'], function(avalon, grouppage,base,server,WebSocketEx) {

    avalon.templateCache.grouppage = grouppage
    var model=avalon.vmodels.root;
    var rightmodel=avalon.vmodels.rightpage;
    var groupmdel= avalon.define({
        $id: "grouppage",
        searchtxt:"",
        hot:{},
        channelid:"1",
        gwst:"",
        cwst:"", 
        channelLogin:{"appkey":"ABCDEFG","channel":"1","username":"wiiiky@yeah.net","password":"123456"},
        groupdata:{},
        searchdata:{},
        channelList:[], 
        toggleX:false, 
        gcurrent:-1,
        oldtime:0,
        init:function(){
        	  $.ajax({
		           type: "GET",
		           url:server.protocol+server.remote_ip+"/api/web/channel_list",
		           data:{"appkey":"ABCDEFG"},
		           dataType: "jsonp",
             	   jsonp: "callback", 
		           success: function(data){
		            grouppage.groupdata=data;
		             groupmdel.hot=data.data.hot;
		             groupmdel.channelList=data.data.list;
		          },
		           error:function(data){
		          	
		          }
	        });
        },
        initconnectSocketServer:function(){
        	   groupmdel.gwst = new WebSocketEx('ws://'+server.remote_ip+':'+server.remote_port+'/chatserver',"", function () {
               groupmdel.gwst.send(JSON.stringify(model.userLogin.$model)); 
            }, function () {
               	//alert('close');
            }, function (evt) { 
            	var parsedata = JSON.parse(evt.data); 
                parsedata.type===7 && groupmdel.gwst.send(JSON.stringify(model.historymsg.$model));
                if(parsedata.type===7){
                	rightmodel.defcolor=parsedata.data.color;
                	rightmodel.defuid=parsedata.data.uid;
                }
               if(parsedata.type && (parsedata.type===3 )){
               	 model.rightmsg=parsedata.data.sort(function(a,b){
               	  	return a.time-b.time;
               	  });
               }else if(parsedata.type && (parsedata.type===1 )){
               	var curdata=parsedata.data; 
               	 model.rightmsg.push(curdata[0]); 
               }
				groupmdel.gwst.onclose();
            }, function (evt) {
                 alert('error' + evt.data);
            }); 
       
        },
        search:function(e){
        	if(groupmdel.searchtxt!=""){
        		groupmdel.toggleX=true;
        	}
        	if(e.which===13 && groupmdel.searchtxt!=""){
        		  $.ajax({
		           type: "GET",
		           url:server.protocol+server.remote_ip+"/api/web/search_channel",
		           data:{"appkey":"ABCDEFG","keyword":groupmdel.searchtxt},
		           dataType: "jsonp",
             	   jsonp: "callback", 
		           success: function(data){
		           	 grouppage.searchdata=data; 
		             groupmdel.channelList=data.data;
		          },
		           error:function(data){
		          	
		          }
	        });
        	   
        	} 
        	
        },
        cleaersearch:function(){
        	groupmdel.searchtxt="";
    		groupmdel.toggleX=false; 
    	   $('#searchipt').focus();
        },  
        changeGroup:function(id,description,index){ 
        	  if(groupmdel.oldtime===0){
        	  	  groupmdel.oldtime= Date.now(); 
        	  }else{
        	  	var newtime= Date.now(); 
        	  	var chatime = newtime-groupmdel.oldtime;
        	  	console.log(chatime);
        	  	  if(chatime<1000){ 
        	  	  	  return false;
        	  	  }else{
        	  	  	 model.userLogin.$model.channel=id;
		        	  groupmdel.gcurrent=index;
		        	  model.titlemsg=decodeURIComponent(description);
		        	  if(groupmdel.gwst!="") groupmdel.gwst="";
		        	  if(groupmdel.cwst!="") groupmdel.cwst="";
		        	   groupmdel.cwst = new WebSocketEx('ws://'+server.remote_ip+':'+server.remote_port+'/chatserver',"", function () {
		               groupmdel.cwst.send(JSON.stringify(model.userLogin.$model)); 
		            }, function () {
		               	//alert('close');
		            }, function (evt) { 
		            	var parsedata = JSON.parse(evt.data); 
		                parsedata.type===7 && groupmdel.cwst.send(JSON.stringify(model.historymsg.$model));
		                if(parsedata.type===7){
		                	rightmodel.defcolor=parsedata.data.color;
		                	rightmodel.defuid=parsedata.data.uid;
		                }
		               if(parsedata.type && (parsedata.type===3 )){  
		               	 model.rightmsg=parsedata.data.sort(function(a,b){
		               	  	return a.time-b.time;
		               	  });
		               }else if(parsedata.type && (parsedata.type===1 )){
		               	var curdata=parsedata.data; 
		               	 model.rightmsg.push(curdata[0]); 
		               }
						groupmdel.cwst.onclose();
		            }, function (evt) {
		                 alert('error' + evt.data);
		            }); 
        	  	  	
        	  	  }
        	  } 
        	 
        	 
        }
    })
    avalon.vmodels.root.grouppage = "grouppage"
    groupmdel.init(); 
});

function callback(data){
	if(data.data.hot){
		avalon.vmodels.grouppage.groupdata=data;
		avalon.vmodels.grouppage.hot=data.data.hot;
		avalon.vmodels.grouppage.channelList=data.data.list; 
		avalon.vmodels.root.userLogin.$model.channel=data.data.hot.cid;
		avalon.vmodels.grouppage.initconnectSocketServer();
	}else{
		avalon.vmodels.grouppage.searchdata=data
		avalon.vmodels.grouppage.channelList=data.data;
	}
	
}

 