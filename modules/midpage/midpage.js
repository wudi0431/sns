define(["avalon", "text!./midpage.html",'base'], function(avalon, midpage,base) {

    avalon.templateCache.midpage = midpage
    var model=avalon.vmodels.root;
    var rightmodel=avalon.vmodels.rightpage;
    var midmdel= avalon.define({
        $id: "midpage", 
        ishouwbg:false,
        chanelchange:function(rid,at,mid,msg,index,cont){
        	midmdel.ishouwbg=false;
        	if(cont==1){
        		 model.othercurrent = -1;
        		 model.mcurrent = index; 
        		 
        	}else{
        		model.mcurrent = -1;
        		 model.othercurrent = index; 
        	} 
        	model.titlemsg=msg;
             rightmodel.current = -1;
             rightmodel.oldcurrent=-1;
             rightmodel.showCurrent=false; 
             rightmodel.atid=0; 
         	 rightmodel.txt="";
             $("#ptextmsg").text(midmdel.placeholder);
        	 model.rightmsg = base.getRootMsg(model.msgdata.alldata,rid,at,mid);
        },
         seeAllmsg:function(){
         	model.titlemsg='查看所有消息';
         	midmdel.ishouwbg=!midmdel.ishouwbg;
        	 model.rightmsg = model.msgdata.alldata;
        	 model.mcurrent = -1;
        	 model.othercurrent = -1;
        	 rightmodel.current = -1;
        	 rightmodel.txt="";
         	 rightmodel.atid=0;
        }, 
    })
    avalon.vmodels.root.midpage = "midpage"
      
})
