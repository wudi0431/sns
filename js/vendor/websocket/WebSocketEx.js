define(function() {
	function WebSocketEx(uri, protocol, onopen, onclose, onmessage, onerror) {

		this.uri = uri;
		this.protocol = protocol;
		this.onmessage = onmessage;
		this.onopen = onopen;
		this.onclose = onclose;
		this.onerror = onerror;
		this.websocket = null;
		this.send = function(msg) {
//			readyState表示连接有四种状态：
//			CONNECTING (0)：表示还没建立连接；
//			OPEN (1)： 已经建立连接，可以进行通讯；
//			CLOSING (2)：通过关闭握手，正在关闭连接；
//			CLOSED (3)：连接已经关闭或无法打开；
			 if(websocket && websocket.readyState==1){ 
				websocket.send(msg);  
			}else{ 
				throw Error('not readyState'); 
			} 
			
		}
		var support = "MozWebSocket" in window ? 'MozWebSocket' : ("WebSocket" in window ? 'WebSocket' : null);

		if (support != null) {
			//using native websocket
			var ws;

			if (protocol && protocol.length > 0)
				ws = new window[support](uri, protocol);
			else
				ws = new window[support](uri);

			ws.onmessage = this.onmessage;

			ws.onopen = this.onopen;

			ws.onclose = this.onclose;

			ws.onerror = this.onerror;

			websocket = ws;

			return;
		} else {
			console.log("Your browser cannot support WebSocket!");
		} 
	}
   return WebSocketEx;
});