define(["avalon", "text!./rightchar.html",'server','websocket'], function(avalon, rightchar,server,WebSocketEx) {

    avalon.templateCache.rightchar = rightchar
    avalon.define({
        $id: "leftset",
        username: "司徒正美"
    })
    avalon.vmodels.root.rightpage = "rightchar"
      
      function connectSocketServer() { 
            var websocket = new WebSocketEx('ws://'+server.remote_ip+':'+server.remote_port+'/chatserver',"", function () {
               websocket.send('{\"appkey\":\"ABCDEFG\",\"channel\":\"1\",\"username\":\"wiiiky@yeah.net\",\"password\":\"123456\"}');
				websocket.send('{\"type\":2,\"data\":{\"before\":"0",\"count\":10}}');
				alert('open')
                ws = websocket;
            }, function () {
               	alert('close');
            }, function (evt) {
                alert(evt.data);
				ws.onclose();
            }, function (evt) {
                 alert('error' + evt.data);
            });
        }

        function sendMessage() {
            if (ws) {
                var messageBox = document.getElementById('messageBox');
                ws.send(messageBox.value);
                messageBox.value = "";
            }
        }
    
      
     
      
      
      
      
      
      
      //connectSocketServer(); 
})
