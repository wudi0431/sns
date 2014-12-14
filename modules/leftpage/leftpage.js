define(["avalon", "text!./leftpage.html"], function(avalon, leftpage) {

    avalon.templateCache.leftpage = leftpage
    var leftmodel = avalon.define({
        $id: "leftpage",
        isfirstcurrent:true,
         iscurrent:false,
        gotoall:function(cont){   
        	if(cont==2){
        		leftmodel.iscurrent=true;
        		leftmodel.isfirstcurrent=false;
        		if(avalon.templateCache.grouppage){
        			avalon.vmodels.root.midpage='grouppage';
        		}else{
        			require(['./modules/grouppage/grouppage'], function() {//第三块，加载其他模块
			        avalon.log("加载其他完毕")
			     });
        		}
        		
        	}else if(cont==1){
        		leftmodel.iscurrent=false;
        		leftmodel.isfirstcurrent=true;
        		avalon.vmodels.root.midpage='midpage';
        	}
        	
        }
    })
    avalon.vmodels.root.leftpage = "leftpage"
      
})
