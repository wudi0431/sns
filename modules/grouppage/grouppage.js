define(["avalon", "text!./grouppage.html",'base'], function(avalon, grouppage,base) {

    avalon.templateCache.grouppage = grouppage
    var model=avalon.vmodels.root;
    var rightmodel=avalon.vmodels.rightpage;
    var midmdel= avalon.define({
        $id: "midpage", 
        chanelchange:function(rid,at,mid,index){
             midmdel.mcurrent = index;
             rightmodel.current = -1;
             rightmodel.oldcurrent=-1;
             rightmodel.showCurrent=false; 
             rightmodel.atid=0; 
         	 rightmodel.txt="";
             $("#ptextmsg").text(midmdel.placeholder);
        	 model.rightmsg = base.getRootMsg(model.msgdata.alldata,rid,at,mid);
        },
         seeAllmsg:function(){
        	 model.rightmsg = model.msgdata.alldata;
        	 model.mcurrent = -1;
        	 rightmodel.current = -1;
        	 rightmodel.txt="";
         	 rightmodel.atid=0;
        }, 
    })
    avalon.vmodels.root.midpage = "grouppage"
      
})
