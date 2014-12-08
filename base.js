
define(function(){
	var winWidth = 0;

     var winHeight = 0;
	function getWindow(model){ //函数：获取尺寸 
		 
	//获取窗口宽度
	if (window.innerWidth)

		winWidth = window.innerWidth;

	else if ((document.body) && (document.body.clientWidth))

		winWidth = document.body.clientWidth;

	//获取窗口高度

	if (window.innerHeight)

		winHeight = window.innerHeight;

	else if ((document.body) && (document.body.clientHeight))

		winHeight = document.body.clientHeight;

	//通过深入Document内部对body进行检测，获取窗口大小

	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)

	{

		winHeight = document.documentElement.clientHeight;

		winWidth = document.documentElement.clientWidth;

	}
	model.rightwidth=(winWidth-590)+'px';
    model.middenheight=(winHeight-130)+'px';
    model.msginfoheight=(winHeight-66)+'px';
	
}

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
 		var flag=false;
 		for (var j = 0; j < rootdata.length; j++) {
 			if(rootdata[j].atroot===curdata[i].at){
 				rootdata.push(curdata[i]);
 				curdata.splice(i,1);
 				flag=true;
 			}
 		}
 		
 		if(otherdata.length===0){
 			otherdata.push(curdata[i]);
 		}
 		for (var k = 0; k < otherdata.length; k++) {
 			if(otherdata[k].atroot !=curdata[i].atroot){
 				otherdata.push(curdata[i]);
 			}else{
 				curdata.splice(i,1);
 				flag=true;
 			}
 		}
 		
 		if(flag){
 			i--
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
 function getRootMsg(data,id){
 	var rootMsg=[];
 	for (var i = 0; i < data.length; i++) {
 		if(data[i].atroot===id){
 			rootMsg.push(data[i]);
 		}
 	}
 	return rootMsg;
 }
 		
	
	return {
		getWindow :getWindow,
		formatdata:formatdata,
		getusrName:getusrName,
		getRootMsg:getRootMsg
	}
	
});
