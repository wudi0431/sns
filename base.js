define(function() {
	var winWidth = 0;
	var winHeight = 0;

	/*
	     获取窗口宽度
	 * */
	function getWindow(model) {

		//获取窗口宽度
		if (window.innerWidth)

			winWidth = window.innerWidth;

		else if ((document.body) && (document.body.clientWidth))

			winWidth = document.body.clientWidth;

		//获取窗口高度

		if (window.innerHeight)

			winHeight = window.innerHeight;

		else if ((document.body) && (document.body.clientHeight))

			winHeight = document.body.clientHeight;

		//通过深入Document内部对body进行检测，获取窗口大小

		if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)

		{

			winHeight = document.documentElement.clientHeight;

			winWidth = document.documentElement.clientWidth;

		}
		model.rightwidth = (winWidth - 590) + 'px';
		model.middenheight = (winHeight - 130) + 'px';
		model.msginfoheight = (winHeight - 66) + 'px';
		model.mainheight = (winHeight) + 'px';

	}

	/*
	      格式化 数据 进行分组
	 * */
	function formatdata(data) { //
			var rootdata = [],
				otherdata = [],
				curdata = [];;
			var len = data.length;
			data = data.sort(function(a, b) {
				return a.atroot - b.atroot;
			});
			for (var i = 0; i < len; i++) {
				if (data[i].at === 0 && data[i].atroot === 0) {
					rootdata.push(data[i]);
				} else {
					otherdata.push(data[i]);
				}
			}
			var rlen = rootdata.length;
			var olen = otherdata.length;
			otherdata = otherdata.sort(function(a, b) {
				return a.time - b.time;
			});
			for (var i = 0; i < olen; i++) {
				var nextdata = otherdata[i + 1] ? otherdata[i + 1] : 0;
				if (nextdata) {
					if (otherdata[i].atroot === nextdata.atroot) {
						otherdata.splice(i, 1);
						i--;
						olen--;
					}

				} else {

					for (var k = 0; k < olen; k++) {
						if (otherdata[k].atroot === otherdata[i].atroot) {
							if (otherdata[k].time > otherdata[i].time) {
								otherdata.push(otherdata[k]);
							} else {
								otherdata.push(otherdata[i]);

							}
							otherdata.splice(k, 1);
							k--;
							olen--;
						}
					}



				}
			}

			for (var i = 0; i < rlen; i++) {

				for (var j = 0; j < otherdata.length; j++) {
					if (rootdata[i] && rootdata[i].mid == otherdata[j].atroot) {
						rootdata.splice(i, 1);
						i--;
						rlen--;
					}
				}
			}
			return {
				root: rootdata,
				other: otherdata,
				alldata: data
			}

		}
		/*
		     获得 用户名称
		* */

	function getusrName(data, id) {
			var name = "";
			for (var i = 0; i < data.length; i++) {
				if (data[i].mid === id) {
					name = '@' + decodeURIComponent(data[i].username) + "：";
				}
			}
			return name;
		}
		/*
		       获得 分组信息
		  * */

	function getRootMsg(data, rid, at, mid) {
			var rootMsg = [];
			for (var i = 0; i < data.length; i++) {
				if (data[i].atroot === 0 && data[i].at === 0) {
					if (data[i].mid == mid) {
						rootMsg.push(data[i]);
					} else if (data[i].mid == rid) {
						rootMsg.push(data[i]);
					}
				} else if (data[i].atroot === rid) {
					rootMsg.push(data[i]);
				}
			}


			return rootMsg;
		}
		/*
		      格式化时间
		  * */

	function changeTime(time) {
			var t = parseInt((Date.now() - time * 1000) / 1000 / 60);
			var h = Math.floor(t / 60);
			var m = parseInt(t % 60);
			var s = parseInt(t / 60);
			if (h == 0 && m != 0) {
				return m + '分钟';
			} else if (h > 0) {
				return h + '小时';
			} else if (s > 0 && h == 0 && m == 0) {
				return s + '秒';
			} else if (s <= 0 && h <=0 && m <= 0) {
				return s;
			}
		}
		/*
		      发送消息 和收到消息 更新分组
		  * */

	function upGroupData(data, model) {
		var root = model.msgdata.root;
		var other = model.msgdata.other;
		for (var i = 0; i < data.length; i++) {
			if (data[i].at === 0 && data[i].atroot === 0) {
				root.push(data[i]);
			} else {
				root = getArry(data[i], root)
				other = getArry(data[i], other)
			}
		}

		function getArry(curdata, ary) {
			for (var k = 0, len = ary.length; k < len; k++) {
				if (ary[k].mid === curdata.at) {
					if (curdata.time > ary[k].time) {
						ary.push(curdata);
						ary.splice(k, 1);
						k--;
						len--;
					}
				}
			}

			return ary;
		}


		model.rootmsg = model.msgdata.root = root;
		model.othermsg = model.msgdata.other = other;

	}
	return {
		getWindow: getWindow,
		formatdata: formatdata,
		getusrName: getusrName,
		getRootMsg: getRootMsg,
		changeTime: changeTime,
		upGroupData: upGroupData
	}

});