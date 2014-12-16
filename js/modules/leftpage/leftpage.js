define(["avalon", "text!../../../modules/leftpage/leftpage.html"], function(avalon, leftpage) {

    avalon.templateCache.leftpage = leftpage;
    var leftmodel = avalon.define({
        $id: "leftpage",
        isfirstcurrent:true,
         iscurrent:false,
        gotoall:function(cont){   
        	if(cont==2){
        		leftmodel.iscurrent=true;
        		leftmodel.isfirstcurrent=false;
        		avalon.vmodels.rightpage.wst.onclose();
        		if(avalon.templateCache.grouppage){
        			avalon.vmodels.root.midpage='grouppage';
        			avalon.vmodels.grouppage.init();
        		}else{
        			require(['./modules/grouppage/grouppage'], function() {//第三块，加载其他模块
			        avalon.log("加载其他完毕");
			        avalon.vmodels.root.midpage='grouppage';
			     });
        		}
        		
        	}else if(cont==1){
        		leftmodel.iscurrent=false;
        		leftmodel.isfirstcurrent=true;
        		avalon.vmodels.root.midpage='midpage';
        		avalon.vmodels.grouppage.gwst && avalon.vmodels.grouppage.gwst.onclose()
        		avalon.vmodels.grouppage.cwst && avalon.vmodels.grouppage.cwst.onclose()
        		avalon.vmodels.rightpage.connectSocketServer();  
        	}
        	
        }
    })
    avalon.vmodels.root.leftpage = "leftpage"
      
})
