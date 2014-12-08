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
			websocket.send(msg);
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