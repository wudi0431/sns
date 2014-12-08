define(["avalon", "text!./middlelist.html"], function(avalon, middlelist) {

    avalon.templateCache.middlelist = middlelist
    avalon.define({
        $id: "leftset",
        username: "司徒正美"
    })
    avalon.vmodels.root.middlepage = "middlelist"
      
})
