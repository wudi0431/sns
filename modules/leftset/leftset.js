define(["avalon", "text!./leftset.html"], function(avalon, leftset) {

    avalon.templateCache.leftset = leftset
    avalon.define({
        $id: "leftset",
        username: "司徒正美",
        gotoall:function(){
        	alert(111);
        }
    })
    avalon.vmodels.root.leftpage = "leftset"
      
})
