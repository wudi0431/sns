 require.config({//第一块，配置
    baseUrl: './js/',
    paths: {
        jquery: 'vendor/jquery/jquery-2.1.0',
        //emojis: 'vendor/jquery/jquery.emoji',
        avalon: "vendor/avalon/avalon",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        text: 'vendor/require/text',
        domReady: 'vendor/require/domReady',
        css: 'vendor/require/css.js', 
        server:'confing/server-config',
        websocket:'vendor/websocket/WebSocketEx',
        base:'confing/base'
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



require(['avalon'], function(avalon) {//第二块，添加根VM（处理共用部分）
    avalon.templateCache.empty = " "
    var model =avalon.define({
        $id: "root",  
        leftpage: "empty",
        midpage: "empty",
        rightpage: "empty", 
        grouppage:"empty",
        userLogin:{"appkey":"ABCDEFG","channel":"1","username":"wiiiky@yeah.net","password":"123456"},
        historymsg:{"type":"2","data":{"before":"0","count":"10"}}, 
        msgdata:{},
        rootmsg:[],
        othermsg:[],
        rightmsg:[],
        sengmsg:[], 
        mcurrent: -1,
        othercurrent:-1,
        titlemsg:"官方频组",
        mouseenter:function(color){
        	var elm = avalon(this);
        	elm.css('background-color',color);
        },
        mouseleave:function(){
        	var elm = avalon(this);
        	elm.css('background-color',"");
        }
    });
    avalon.scan(document.body);  
     require(['./modules/leftpage/leftpage'], function() {//第三块，加载其他模块
        avalon.log("加载其他完毕")
    });
    require(['./modules/rightpage/rightpage'], function() {//第三块，加载其他模块
        avalon.log("加载其他完毕");
         avalon.vmodels.rightpage.connectSocketServer();  
         
    });
     require(['./modules/midpage/midpage'], function() {//第三块，加载其他模块
	        avalon.log("加载其他完毕")
	 });
     
      
    
    
});
 

 