!
function e(t, n, r) {
	function o(a, s) {
		if (!n[a]) {
			if (!t[a]) {
				var u = "function" == typeof require && require;
				if (!s && u) return u(a, !0);
				if (i) return i(a, !0);
				var l = new Error("Cannot find module '" + a + "'");
				throw l.code = "MODULE_NOT_FOUND",
					l
			}
			var c = n[a] = {
				exports: {}
			};
			t[a][0].call(c.exports,
				function(e) {
					var n = t[a][1][e];
					return o(n ? n : e)
				},
				c, c.exports, e, t, n, r)
		}
		return n[a].exports
	}
	for (var i = "function" == typeof require && require,
		a = 0; a < r.length; a++) o(r[a]);
	return o
}({
	1: [
		function(e) {
			var t = new(e("./lib/emitter.js"));
			e("./public/s/scripts/lib/sockjs.min.js"),
				e("./public/s/scripts/lib/jquery.velocity.min.js"),
				e("./public/s/scripts/lib/svg4everybody.min.js"),
				e("./lib/jquery.attrchange.js"),
				e("./lib/jquery.setCursorEnd.js"),
				e("./lib/jquery.isOnScreen.js"),
				e("./lib/format.js"),
				e("./lib/swipe-events.js"),
				e("./lib/jquery.scrollToBottom.js"),
				e("./public/s/scripts/lib/jquery.alertbar.js"),
				e("./public/s/scripts/lib/jquery.modal.js"),
				e("./public/s/scripts/lib/jquery.multientry.js"),
				e("./public/s/scripts/lib/jquery.popover.js"),
				e("./public/s/scripts/lib/jquery.progressbar.js");
			var n = e("./interface/interface-client")(t);
			e("./localStorage/localStorage-client")(n),
				e("./socket/socket-client")(n),
				e("./calls-to-action/calls-to-action-client.js"),
				e("./dialogs/dialogs-client.js"),
				e("./dialogs/dialogs-listeners.js"),
				e("./client-init/client-init.js")(n),
				e("./id-generator/id-generator-client.js")(n),
				e("./client-entityloader/client-entityloader.js")(n),
				e("./webview-embed/webview-client.js"),
				e("./ui/infinite.js"),
				e("./ui/hide-scroll.js"),
				e("./ui/user-area.js"),
				e("./ui/chat.js"),
				e("./ui/chat-area.js"),
				e("./translation/translation-client.js").translateAll(),
				e("./email/email-client.js"),
				e("./http/notifications-client.js"),
				e("./authorizer/authorizer-client.js"),
				e("./http/seo-client.js"),
				e("./http/roomGeneralSettings-client.js"),
				e("./http/userProfile-client.js"),
				e("./embed/embed-client.js")(n),
				e("./embed/embed-config.js"),
				e("./irc/irc-client.js"),
				e("./anti-abuse/anti-abuse-client.js"),
				e("./twitter/twitter-client.js"),
				e("./threader/threader-client.js"),
				e("./customization/customization-client.js"),
				e("./http/logout-client.js"),
				e("./facebook/facebook-client.js"),
				e("./google/google-client.js"),
				e("./github/github-client.js"),
				e("./persona/persona-client.js"),
				e("./push-notification/push-notification-client.js"),
				e("./phonegap/phonegap-client.js"),
				e("./ui/guest-settings.js"),
				e("./ui/quicknotify.js"),
				e("./ui/load-indicator.js"),
				e("./ui/appcache.js"),
				e("./ui/error-notify.js"),
				e("./ui/columns.js"),
				e("./ui/chat-threads.js"),
				e("./ui/compose.js"),
				e("./ui/notify-ticker.js"),
				e("./ui/browser-notify.js"),
				e("./ui/panes.js"),
				e("./ui/thread.js"),
				e("./ui/thread-area.js"),
				e("./ui/person.js"),
				e("./ui/people-area.js"),
				e("./ui/info-area.js"),
				e("./ui/room-area.js"),
				e("./ui/search.js"),
				e("./ui/follow-room.js"),
				e("./ui/oauth-listener.js"),
				e("./ui/conf-area.js"),
				e("./ui/pref-area.js"),
				e("./ui/noroom-area.js"),
				e("./ui/persona.js"),
				e("./ui/message-menu.js"),
				e("./ui/room-notifications.js"),
				e("./ui/google-analytics.js"),
				e("./ui/workarounds.js"),
				e("./client-init/boot.js")(n)
		}, {
			"./anti-abuse/anti-abuse-client.js": 2,
			"./authorizer/authorizer-client.js": 3,
			"./calls-to-action/calls-to-action-client.js": 5,
			"./client-entityloader/client-entityloader.js": 9,
			"./client-init/boot.js": 12,
			"./client-init/client-init.js": 13,
			"./customization/customization-client.js": 17,
			"./dialogs/dialogs-client.js": 18,
			"./dialogs/dialogs-listeners.js": 19,
			"./email/email-client.js": 20,
			"./embed/embed-client.js": 21,
			"./embed/embed-config.js": 22,
			"./facebook/facebook-client.js": 23,
			"./github/github-client.js": 24,
			"./google/google-client.js": 25,
			"./http/logout-client.js": 26,
			"./http/notifications-client.js": 27,
			"./http/roomGeneralSettings-client.js": 28,
			"./http/seo-client.js": 29,
			"./http/userProfile-client.js": 30,
			"./id-generator/id-generator-client.js": 31,
			"./interface/interface-client": 32,
			"./irc/irc-client.js": 33,
			"./lib/emitter.js": 35,
			"./lib/format.js": 37,
			"./lib/jquery.attrchange.js": 39,
			"./lib/jquery.isOnScreen.js": 40,
			"./lib/jquery.scrollToBottom.js": 41,
			"./lib/jquery.setCursorEnd.js": 42,
			"./lib/swipe-events.js": 44,
			"./localStorage/localStorage-client": 49,
			"./persona/persona-client.js": 60,
			"./phonegap/phonegap-client.js": 61,
			"./public/s/scripts/lib/jquery.alertbar.js": 62,
			"./public/s/scripts/lib/jquery.modal.js": 64,
			"./public/s/scripts/lib/jquery.multientry.js": 65,
			"./public/s/scripts/lib/jquery.popover.js": 66,
			"./public/s/scripts/lib/jquery.progressbar.js": 67,
			"./public/s/scripts/lib/jquery.velocity.min.js": 68,
			"./public/s/scripts/lib/sockjs.min.js": 69,
			"./public/s/scripts/lib/svg4everybody.min.js": 70,
			"./push-notification/push-notification-client.js": 71,
			"./socket/socket-client": 72,
			"./threader/threader-client.js": 73,
			"./translation/translation-client.js": 75,
			"./twitter/twitter-client.js": 76,
			"./ui/appcache.js": 77,
			"./ui/browser-notify.js": 78,
			"./ui/chat-area.js": 79,
			"./ui/chat-threads.js": 80,
			"./ui/chat.js": 81,
			"./ui/columns.js": 82,
			"./ui/compose.js": 83,
			"./ui/conf-area.js": 84,
			"./ui/error-notify.js": 86,
			"./ui/follow-room.js": 87,
			"./ui/google-analytics.js": 88,
			"./ui/guest-settings.js": 89,
			"./ui/hide-scroll.js": 90,
			"./ui/infinite.js": 91,
			"./ui/info-area.js": 92,
			"./ui/load-indicator.js": 93,
			"./ui/message-menu.js": 94,
			"./ui/noroom-area.js": 95,
			"./ui/notify-ticker.js": 96,
			"./ui/oauth-listener.js": 97,
			"./ui/panes.js": 98,
			"./ui/people-area.js": 99,
			"./ui/person.js": 100,
			"./ui/persona.js": 101,
			"./ui/pref-area.js": 102,
			"./ui/quicknotify.js": 103,
			"./ui/room-area.js": 105,
			"./ui/room-notifications.js": 108,
			"./ui/search.js": 110,
			"./ui/thread-area.js": 112,
			"./ui/thread.js": 113,
			"./ui/user-area.js": 114,
			"./ui/workarounds.js": 115,
			"./webview-embed/webview-client.js": 116
		}
	],
	2: [
		function(e) {
			function t(e, t) {
				for (var n in t)
					if (n === e && 1 === t[n]) return !0;
				return !1
			}
			var n = e("../lib/formField.js");
			libsb.on("config-show",
					function(e, t) {
						var r = e.room;
						r.params || (r.params = {}),
							r.params.antiAbuse || (r.params.antiAbuse = {}),
							r.params.antiAbuse.block || (r.params.antiAbuse.block = {
								english: !1
							}),
							r.params.antiAbuse.customPhrases || (r.params.antiAbuse.customPhrases = []),
							"boolean" != typeof r.params.antiAbuse.spam && (r.params.antiAbuse.spam = !0);
						var o = r.params.antiAbuse,
							i = $("<div>").append(n("Spam control", "toggle", "spam-control", o.spam), n("Blocked words list", "check", "blocklists", [
								["list-en-strict", "English abusive words", o.block.english]
							]), n("Custom blocked phrases/word", "area", "block-custom", o.customPhrases.join("\n")), n("", "info", "spam-control-helper-text", "One phrase/word each line"));
						e.spam = {
								text: "Spam control",
								html: i,
								prio: 600
							},
							t()
					},
					500),
				libsb.on("config-save",
					function(e, t) {
						e.params.antiAbuse = {
								spam: $("#spam-control").is(":checked"),
								block: {
									english: $("#list-en-strict").is(":checked")
								},
								customPhrases: $("#block-custom").val().split("\n").map(function(e) {
									return e.trim().toLowerCase()
								})
							},
							t()
					},
					500),
				libsb.on("text-menu",
					function(e, n) {
						if ("owner" !== e.role) return n();
						var r;
						libsb.emit("getTexts", {
								ref: e.target.id.substring(5),
								to: currentState.roomName
							},
							function(o, i) {
								r = i.results[0];
								var a = e.target,
									s = $(a).find(".chat-message").text();
								t("hidden", r.labels) ? e.items.unhidemessage = {
										prio: 500,
										text: "Unhide Message",
										action: function() {
											libsb.emit("edit-up", {
													to: currentState.roomName,
													labels: {
														hidden: 0
													},
													text: s,
													ref: a.id.substring(5),
													cookie: !1
												}),
												$(a).removeClass("chat-label-hidden")
										}
									} : e.items.hidemessage = {
										prio: 500,
										text: "Hide Message",
										action: function() {
											libsb.emit("edit-up", {
													to: currentState.roomName,
													labels: {
														hidden: 1
													},
													text: s,
													ref: a.id.substring(5),
													cookie: !1
												}),
												$(a).addClass("chat-label-hidden")
										}
									},
									t("abusive", r.labels) && (e.items.markasnotabusive = {
										prio: 500,
										text: "Mark as not abusive",
										action: function() {
											libsb.emit("edit-up", {
												to: currentState.roomName,
												labels: {
													abusive: 0
												},
												text: s,
												ref: a.id.substring(5),
												cookie: !1
											})
										}
									}),
									n()
							})
					},
					500)
		}, {
			"../lib/formField.js": 36
		}
	],
	3: [
		function(e) {
			var t = e("../lib/formField.js"),
				n = e("./handleAuthErrors.js");
			libsb.on("config-show",
					function(e, n) {
						var r = e.room,
							o = !1,
							i = !1,
							a = !1,
							s = !1,
							u = !1,
							l = !1;
						r.guides || (r.guides = {}),
							r.guides.authorizer || (r.guides.authorizer = {}),
							r.guides.authorizer.readLevel || (r.guides.authorizer.readLevel = "guest"),
							r.guides.authorizer.writeLevel || (r.guides.authorizer.writeLevel = "guest");
						var c = r.guides.authorizer.readLevel,
							d = r.guides.authorizer.writeLevel;
						switch (c) {
							case "guest":
								o = !0;
								break;
							case "registered":
								a = !0;
								break;
							case "follower":
								u = !0
						}
						switch (d) {
							case "guest":
								i = !0;
								break;
							case "registered":
								s = !0;
								break;
							case "follower":
								l = !0
						}
						var f = $("<div>").append(t("Who can post messages?", "radio", "authorizer-write", [
							["authorizer-post-guest", "Anyone (Public)", i],
							["authorizer-post-users", "Logged in users", s],
							["authorizer-post-followers", "Followers", l]
						]));
						e.authorizer = {
								html: f,
								text: "Permissions",
								prio: 700
							},
							n()
					},
					500),
				libsb.on("config-save",
					function(e, t) {
						var n = {
								guest: "guest",
								users: "registered",
								followers: "follower"
							},
							r = "guest",
							o = n[$('input:radio[name="authorizer-write"]:checked').attr("id").substring(16)];
						e.guides || (e.guides = {}),
							e.guides.authorizer = {
								readLevel: r,
								writeLevel: o
							},
							t()
					},
					500),
				libsb.on("error-dn",
					function(e, t) {
						"ERR_NOT_ALLOWED" === e.message && n(e),
							t()
					},
					1e3)
		}, {
			"../lib/formField.js": 36,
			"./handleAuthErrors.js": 4
		}
	],
	4: [
		function(e, t) {
			t.exports = function(e) {
				var t = e.action,
					n = e.requiredRole,
					r = e.currentRole,
					o = "Unknown Authorization Error! You are not allowed to perfom this action :( ";
				switch (t) {
					case "admit":
						o = "You are not authorized to admit a user to this room. Your role needs to be: <b>" + n + "</b> to perform this 			action. Your current role is: <b>" + r + "</b>";
						break;
					case "expel":
						o = "You are not authorized to expel a user from this room. Your role needs to be: <b>" + n + "</b> to 			perform this action. Your current role is: <b>" + r + "</b>";
						break;
					case "back":
						o = "You are not authorized to read messages in this room. Your role needs to be: <b>" + n + "</b> to perform this 			action.	Your current role is: <b>" + r + "</b>";
						break;
					case "edit":
						o = "You are not authorized to edit messages in this room. Your role needs to be: <b>" + n + "</b> to perform this 			action.	Your current role is: <b>" + r + "</b>";
						break;
					case "join":
						o = "Guests cannot follow rooms! Please sign in.";
						break;
					case "getTexts":
						o = "You are not authorized to view messages in this room. Your role needs to be: <b>" + n + "</b> to 			perform this action. Your current role is: <b>" + r + "</b>";
						break;
					case "getThreads":
						o = "You are not authorized to view message threads in this room. Your role needs to be: <b>" + n + "</b> 			to perform this action. Your current role is: <b>" + r + "</b>";
						break;
					case "getRooms":
						o = "You are not authorized to view the room(s) info you requested. Your role is: <b>" + r + "</b>, You need 			to be a: <b>" + n + "</b> to perform this action";
						break;
					case "getUsers":
						o = "You are not authorized to view the user(s) info you requested. Your role is: <b>" + r + "</b>, You need 			to be a: <b>" + n + "</b> to perform this action";
						break;
					case "room":
						o = "You are not authorized to save this room! Your role is: <b>" + r + "</b>, You need 			to be a: <b>" + n + "</b> to perform this action";
						break;
					case "text":
						o = "Message not sent . Your role needs to be: <b>" + n + "</b> to chat in this room. 			Your current role is: <b>" + r + "</b>";
						break;
					case "user":
						o = "You are not authorized to save this user account! Your role is: <b>" + r + "</b>, Your role needs 			to be: <p>" + n + "</b> to perform this action";
						break;
					default:
						o = "Unknown Authorization Error! You are not allowed to perfom this action :( "
				}
				$("<div>").html(o).alertbar({
					type: "error"
				})
			}
		}, {}
	],
	5: [
		function(e) {
			var t = e("../ui/desktopnotify.js"),
				n = e("./showNotification.js"),
				r = $(".user-area"),
				o = $(".follow-button"),
				i = $(".tab-threads");
			$(".chat-input").on("click",
					function() {
						/ ^guest - /.test(libsb.user.id) && "normal" === window.currentState.mode && n([r, ".meta-button-back"], "signIn")
					}), libsb.on("text-up", function(e, t) {
					return "normal" !== window.currentState.mode ? t() : (/ ^ guest - /.test(libsb.user.id) ? n([r, ".meta-button-back"], "signIn") : n(o, "followRoom"), void t())
				}, 800), libsb.on("user-dn", function(e, t) {
						return / ^ guest - /.test(e.from) && / (normal | conf | pref) /.test(window.currentState.mode) ? (n([r, ".meta-button-back"], "choosePic"), void t()) : t()
					},
					800),
				libsb.on("navigate",
					function(e, r) {
						var o;
						e && e.old && e.old.mode !== e.mode && "pref" === e.mode && (o = t.supported(), o && "granted" !== o.permission && n(".list-item-notification-settings", "desktopNotifications")),
							r()
					},
					100),
				libsb.on("init-dn",
					function(e, t) {
						e.user && !/^guest-/.test(e.user.id) && "normal" === window.currentState.mode && libsb.emit("getUsers", {
									memberOf: currentState.roomName,
									ref: libsb.user.id
								},
								function(e, t) {
									t.results && 0 === t.results.length && n(o, "followRoom")
								}),
							t()
					},
					500),
				libsb.on("navigate",
					function(e, t) {
						e && "chat-area" === e.source && e.old && e.time && e.time !== e.old.time && "normal" === window.currentState.mode && n([i, ".meta-button-back"], "browseArchives"),
							t()
					},
					100)
		}, {
			"../ui/desktopnotify.js": 85,
			"./showNotification.js": 7
		}
	],
	6: [
		function(e, t) {
			t.exports = {
				signIn: "Sign in to Scrollback to pick a nickname.",
				choosePic: "Choose a profile picture and change your preferences in Account Settings.",
				desktopNotifications: "Turn on desktop notifications to get notified when someone mentions you.",
				followRoom: "Follow this room to stay updated with the latest discussions.",
				browseArchives: "Did you know that you can browse the archives by discussion?"
			}
		}, {}
	],
	7: [
		function(e, t) {
			function n(e) {
				e ? (a = !0, l[0] && o(l[0].origin, l[0].name)) : a = !1
			}

			function r(e, t) {
				var n, r, o = $(e);
				if (!a) return void l.push({
					origin: e,
					name: t
				});
				if (libsb.user && o.length && o.is(":visible") && t && (libsb.user.params || (libsb.user.params = {}), r = libsb.user.params.shownActions || [], !(r.indexOf(t) > -1))) {
					n = $("<div>").addClass("popover-calls-to-action info").append($("<div>").addClass("popover-content").text(i[t]), $("<div>").addClass("popover-got-it").text(s[u] + "!").on("click",
							function() {
								$.popover("dismiss")
							})).popover({
							origin: $(e)
						}),
						u++,
						u >= s.length && (u = 0);
					for (var c = 0,
						d = l.length; d > c; c++) l[c] && l[c].name === t && l.splice(c, 1);
					r.push(t),
						libsb.user.params.shownActions = r,
						libsb.emit("user-up", {
							user: libsb.user
						})
				}
			}

			function o(e, t) {
				var n = e;
				if (e instanceof Array && e.length) {
					n = e[0];
					for (var o = 0; o < e.length; o++)
						if (e[o] = $(e[o]), e[o].isOnScreen()) {
							n = e[o];
							break
						}
				}
				setTimeout(function() {
						r(n, t)
					},
					1e3)
			}
			var i = e("./notification-strings-en.js"),
				a = !0,
				s = ["Got it", "Cool", "Awesome", "Great", "Impressive"],
				u = 0,
				l = [];
			$(applicationCache).on("checking downloading progress",
					function() {
						n(!1)
					}),
				$(applicationCache).on("cached noupdate updateready error",
					function() {
						n(!0)
					}),
				$(document).on("alertbarInited modalInited popoverInited",
					function() {
						n(!1)
					}),
				$(document).on("alertbarDismissed modalDismissed popoverDismissed",
					function() {
						n(!0)
					}),
				t.exports = o
		}, {
			"./notification-strings-en.js": 6
		}
	],
	8: [
		function(e, t) {
			t.exports = {
				server: {
					protocol: "https:",
					host: "//scrollback.io"
				},
				pushNotification: {
					gcm: {
						senderID: "73969137499"
					}
				},
				localStorage: {
					version: 1.17
				},
				errorception: {
					id: "544a512e5609fb8d7d000332"
				},
				analytics: {
					id: "UA-45130412-1"
				}
			}
		}, {}
	],
	9: [
		function(e, t) {
			var n = window.currentState;
			t.exports = function(e) {
				e.on("navigate",
					function(t, r) {
						function o() {
							r()
						}["normal", "conf"].indexOf(t.mode) >= 0 && (!t.old || t.roomName != t.old.roomName || t.connectionStatus && t.connectionStatus != t.old.connectionStatus) ? e.getRooms({
								ref: t.roomName
							},
							function(n, r) {
								return n ? (void 0, o(n)) : r && r.results && r.results.length ? (t.room = r.results[0], o()) : void e.emit("getUsers", {
										ref: t.roomName,
										source: "loader"
									},
									function(e, n) {
										return n.results && n.results.length ? t.mode = "profile" : (t.room = null, "online" == t.connectionStatus && (t.mode = "noroom")),
											o()
									})
							}) : (t.room = n.room, o())
					},
					998)
			}
		}, {}
	],
	10: [
		function(e, t) {
			var n = [];
			t.exports = function() {
				return {
					enQueue: function(e) {
						n.push(e)
					},
					processAll: function() {
						for (; n.length;) n.shift()()
					}
				}
			}
		}, {}
	],
	11: [
		function(e, t) {
			function n(e) {
				var t = !1,
					n = [];
				e.on("init-dn",
						function(e, r) {
							t = !0,
								n.forEach(function(e) {
									e()
								}),
								r()
						},
						1e3),
					e.on("init-up",
						function(t, n) {
							return e.hasBooted ? n() : void r.enQueue(n)
						},
						1e3),
					e.on("back-up",
						function(e, r) {
							return t ? r() : void n.push(r)
						},
						1e3),
					e.on("navigate",
						function(t, n) {
							return "boot" == t.source ? n() : e.hasBooted ? void n() : ["socket"].indexOf(t.source) >= 0 ? r.enQueue(n) : n(new Error("BOOT_NOT_COMPLETE"))
						},
						1e3),
					e.on("navigate",
						function(e, n) {
							"online" != e.connectionStatus && (t = !1),
								n()
						},
						500)
			}
			var r = e("./actionQueue.js")();
			t.exports = function(e) {
				n(e)
			}
		}, {
			"./actionQueue.js": 10
		}
	],
	12: [
		function(e, t) {
			function n(e) {
				$(function() {
					var t = {};
					t = r.parse(window.location.pathname, window.location.search),
						t.platform && (t.phonegap = !0),
						t.embed && delete t.embed,
						t.source = "boot",
						t.connectionStatus = "connecting",
						e.emit("navigate", t,
							function(t) {
								return t ? void 0 : (e.hasBooted = !0, void o.processAll())
							})
				})
			}
			var r = e("../lib/url-utils.js"),
				o = e("./actionQueue.js")();
			t.exports = function(e) {
				n(e)
			}
		}, {
			"../lib/url-utils.js": 45,
			"./actionQueue.js": 10
		}
	],
	13: [
		function(e, t) {
			t.exports = function(t) {
				e("./boot-manager.js")(t),
					e("./state-manager.js")(t),
					e("./history-manager.js")(t),
					e("./view-manager.js")(t)
			}
		}, {
			"./boot-manager.js": 11,
			"./history-manager.js": 14,
			"./state-manager.js": 15,
			"./view-manager.js": 16
		}
	],
	14: [
		function(e, t) {
			function n(e) {
				switch (e.mode) {
					case "conf":
						document.title = (s.tab ? s.tab.charAt(0).toUpperCase() + s.tab.slice(1) : "Room") + " settings" + (s.roomName ? " - " + s.roomName : "");
						break;
					case "pref":
						document.title = "Account settings - " + (i.user ? i.user.id : "Scrollback");
						break;
					case "search":
						document.title = "Results for " + e.query + " - Scrollback";
						break;
					case "home":
						document.title = "My rooms on Scrollback";
						break;
					default:
						document.title = e.roomName ? e.roomName + " on Scrollback" : "Scrollback.io"
				}
			}

			function r(e) {
				var t, n, r = location.pathname + location.search,
					o = "pushState";
				if (e && "object" == typeof e) {
					if (n = $.extend({},
						e, !0), t = a.build(n), r !== t)(["boot", "socket"].indexOf(n.source) >= 0 || 1 === Object.keys(e.changes).length && e.changes.time) && (o = "replaceState");
					else if (!e.changes.view) return;
					delete n.old,
						delete n.changes,
						delete n.connectionStatus,
						history[o](n, null, t)
				}
			}

			function o(e, t) {
				return s.embed ? t() : (n(e), "history" == e.source ? t() : (r(e), void t()))
			}
			var i, a = e("../lib/url-utils.js"),
				s = window.currentState;
			t.exports = function(e) {
				i = e,
					i.on("navigate", o, 200),
					$(window).on("popstate",
						function() {
							if (s && !s.embed && "state" in history && null !== history.state) {
								var e, t = {};
								for (e in history.state) history.state.hasOwnProperty(e) && "old" !== e && "changes" !== e && (t[e] = history.state[e]);
								t.connectionStatus = s.connectionStatus ? s.connectionStatus : "connecting",
									t.source = "history",
									i.emit("navigate", t)
							}
						})
			}
		}, {
			"../lib/url-utils.js": 45
		}
	],
	15: [
		function(e, t) {
			function n(e, t) {
				return e.time = e.query ? null : e.time,
					e.mode = e.mode || (e.query ? "search" : e.roomName ? "normal" : "home"),
					e.tab = e.tab || "people",
					t()
			}

			function r(e, t) {
				return e.old = $.extend(!0, {},
						a),
					e.changes = {},
					s.forEach(function(t) {
						return "undefined" == typeof e[t] ? void("undefined" != typeof e.old[t] && (e[t] = e.old[t])) : void(e[t] != e.old[t] && (e.changes[t] = e[t]))
					}),
					t()
			}

			function o(e, t) {
				return s.forEach(function(t) {
						return "undefined" == typeof e[t] ? void("undefined" != typeof e.old[t] && (a[t] = e.old[t])) : void(null === e[t] ? delete a[t] : a[t] = e[t])
					}),
					t()
			}
			var i, a = window.currentState = {},
				s = ["roomName", "room", "view", "theme", "embed", "minimize", "mode", "tab", "thread", "query", "text", "time", "dialog", "roomStatus", "connectionStatus", "phonegap", "platform", "webview"];
			t.exports = function(e) {
				i = e,
					i.on("navigate", r, 999),
					i.on("navigate", o, 700),
					i.on("navigate", n, 750),
					i.on("room-dn",
						function(e, t) {
							e.room.id === a.roomName && (a.room = e.room),
								t()
						},
						100)
			}
		}, {}
	],
	16: [
		function(e, t) {
			function n(e, t) {
				var n;
				"boot" === e.source && $("body").addClass(e.phonegap ? "media-phonegap" : "media-normal"),
					e.old && (n = $("body").attr("class").trim() || "", e.connectionStatus !== e.old.connectionStatus && (n = n.replace(/\bstate-\S+/g, ""), n += "online" === e.connectionStatus ? " state-online" : " state-offline"), e.mode !== e.old.mode && (n = n.replace(/\bmode-\S+/g, ""), e.mode && (n += " mode-" + e.mode)), e.view !== e.old.view && (n = n.replace(/\bview-\S+/g, ""), e.view && (n += " view-" + e.view)), e.tab !== e.old.tab && e.tab && ("pref" === e.mode || "conf" === e.mode ? ($(".list-item.current, .list-view.current").removeClass("current"), $(".list-item-" + e.tab + "-settings, .list-view-" + e.tab + "-settings").addClass("current")) : ($(".tab.current").removeClass("current"), $(".tab-" + e.tab).addClass("current"))), $("body").attr("class", n)),
					t()
			}
			window.currentState;
			t.exports = function() {
				libsb.on("navigate", n, 500)
			}
		}, {}
	],
	17: [
		function() {
			$(function() {
				libsb.on("navigate",
						function(t, n) {
							t.old && t.roomName !== t.old.roomName && e.applyCss(),
								n()
						},
						700),
					libsb.on("room-dn",
						function(t, n) {
							e.applyCss(),
								n()
						},
						100);
				var e = {
					setCss: function(e) {
						var t, n = $.extend({},
							window.currentState.room);
						n && "string" == typeof e && (n.guides || (n.guides = {}), n.guides.customization || (n.guides.customization = {}), n.guides.customization.css = e.replace("<", "\\3c").replace(">", "\\3e"), t = {
								to: window.currentState.roomName,
								room: n
							},
							libsb.emit("room-up", t))
					},
					applyCss: function() {
						var e, t = window.currentState.room;
						$("#scrollback-custom-style").remove(),
							t && t.guides && t.guides.customization && (e = t.guides.customization, e && e.css && $("<style>").text(e.css).attr("id", "scrollback-custom-style").appendTo("head"))
					}
				};
				window.customStyle = e
			})
		}, {}
	],
	18: [
		function() {
			function e(e, t) {
				libsb.emit(e + "-dialog", t,
					function(t, n) {
						var r, o, i, a = $("<form>").addClass(e + "-dialog dialog");
						if (n.title && $("<h1>").addClass("dialog-title").text(n.title).appendTo(a), n.description && $("<p>").addClass("dialog-description").html(n.description).appendTo(a), Object.keys(n.buttons).length) {
							r = $("<div>").addClass("dialog-buttons");
							for (var s in n.buttons) "string" == typeof n.buttons[s].text && "function" == typeof n.buttons[s].action && $("<a>").text(n.buttons[s].text).on("click", n.buttons[s].action).addClass("button " + s).appendTo(r);
							r.appendTo(a)
						}
						if (n.content && n.content.length) {
							o = $("<div>").addClass("dialog-content");
							for (var u = 0,
								l = n.content.length; l > u; u++) o.append(n.content[u]);
							o.appendTo(a)
						}
						n.action && "string" == typeof n.action.text && "function" == typeof n.action.action && (i = $("<input>").attr({
								type: "submit",
								value: n.action.text
							}).addClass("button dialog-action dialog-action-" + n.action.text.replace(/ /g, "-").toLowerCase()).appendTo(a)),
							a.on("submit",
								function(e) {
									e.preventDefault(),
										n.action.action.apply(i, [e])
								}),
							a.modal({
								dismiss: "boolean" == typeof n.dismiss ? n.dismiss : !0
							}).find("input[type=text]:not(disabled)").eq(0).focus()
					})
			}
			libsb.on("navigate",
					function(t, n) {
						if ("dialog" === t.source || "dialog" in t.changes && "modal-dismiss" !== t.source) {
							if (!t.dialog) return $.modal("dismiss"),
								n();
							e(t.dialog, {
								title: null,
								description: null,
								buttons: {},
								content: [],
								action: null,
								dismiss: !0
							})
						}
						n()
					},
					100),
				$(document).on("modalDismissed",
					function() {
						libsb.emit("navigate", {
							dialog: null,
							source: "modal-dismiss"
						})
					})
		}, {}
	],
	19: [
		function(e) {
			function t(e, t) {
				var n = $(t),
					r = n.data("errorMsg") || $();
				return e ? (n.addClass("error"), r = $("<div>").addClass("error").append($("<div>").addClass("popover-content").text(e)).popover({
					origin: n
				}), n.data("errorMsg", r), $(document).off("modalDismissed.errorentry").on("modalDismissed.errorentry",
					function() {
						r.popover("dismiss")
					}), n.off("change.errorentry input.errorentry paste.errorentry").on("change.errorentry input.errorentry paste.errorentry",
					function() {
						r.popover("dismiss"),
							$(this).removeClass("error")
					}), void n.focus()) : (n.removeClass("error"), void r.popover("dismiss"))
			}

			function n(e, t) {
				libsb.emit("getRooms", {
						ref: e
					},
					function(n, r) {
						return r && r.results && r.results.length ? t(!0) : void libsb.emit("getUsers", {
								ref: e
							},
							function(e, n) {
								return t(n && n.results && n.results.length ? !0 : !1)
							})
					})
			}

			function r(e, r, o, i) {
				var a, s = $(e),
					l = $(r),
					c = s.val();
				return c = "string" == typeof c ? c.toLowerCase().trim() : "",
					a = u(c),
					a.isValid ? (l.addClass("working"), void n(c,
						function(n) {
							l.removeClass("working"),
								n ? t(c + " is not available. May be try another?", e) : (t(!1), "function" == typeof i && i(c))
						})) : t(o + " " + a.error, e)
			}

			function o(e, n, o) {
				r(e, n, "Room",
					function(n) {
						var r = "We could not create the room. Please refresh the page and try again.";
						return n ? void libsb.emit("room-up", {
								to: n,
								room: {
									id: n,
									description: "",
									params: {},
									guides: {}
								}
							},
							function(n) {
								return n ? t(r, e) : ("function" == typeof o && o(), void libsb.emit("navigate", {
									dialog: null
								}))
							}) : t(r, e)
					})
			}

			function i(e, n, o) {
				r(e, n, "User",
					function(n) {
						var r = "We could not create your account. Please refresh the page and try again.";
						return n && libsb.user && libsb.user.identities ? void libsb.emit("user-up", {
								user: {
									id: n,
									identities: libsb.user.identities,
									picture: libsb.user.picture,
									params: {
										pictures: libsb.user.params.pictures
									},
									guides: {}
								}
							},
							function(n) {
								return n ? t(r, e) : ("function" == typeof o && (a = o), void libsb.emit("navigate", {
									dialog: null
								}))
							}) : t(r, e)
					})
			}
			var a, s, u = e("../lib/validate.js");
			libsb.on("init-dn",
					function(e, t) {
						s = e.auth && e.user.identities && !e.user.id && e.resource == libsb.resource ? !0 : !1,
							/(createroom|signup)/.test(window.currentState.dialog) ? libsb.emit("navigate", {
								dialog: window.currentState.dialog,
								source: "dialog"
							}) : s && libsb.emit("navigate", {
								dialog: "signup"
							}),
							t()
					},
					100),
				libsb.on("user-dn",
					function(e, t) {
						"function" == typeof a && (a(), a = null),
							t()
					},
					100),
				libsb.on("createroom-dialog",
					function(e, n) {
						var a = "noroom" === window.currentState.mode ? window.currentState.roomName : "";
						if (/^guest-/.test(libsb.user.id)) {
							if (!s) return e.title = "Create a new room",
								e.description = "<b>Step 1:</b> Sign in to scrollback",
								e.content = ["<p><b>Step 2:</b> Choose a room name</p>", "<input type='text' id='createroom-dialog-room' value='" + a + "' disabled>"],
								void libsb.emit("auth", e,
									function() {
										n()
									});
							e.title = "Create a new room",
								e.content = ["<p><b>Step 1:</b> Choose a username</p>", "<input type='text' id='createroom-dialog-user' autofocus>", "<p><b>Step 2:</b> Choose a room name</p>", "<input type='text' id='createroom-dialog-room' value='" + a + "' autofocus>"],
								e.action = {
									text: "Sign up & create room",
									action: function() {
										var e = $("#createroom-dialog-user"),
											n = $("#createroom-dialog-room"),
											a = e.val(),
											s = n.val(),
											u = this;
										return a = "string" == typeof a ? a.toLowerCase().trim() : "",
											s = "string" == typeof s ? s.toLowerCase().trim() : "",
											a ? a === s ? t("User and room names cannot be the same", e) : void r(n, u, "Room",
												function() {
													i(e, u,
														function() {
															o(n, u)
														})
												}) : t("User name cannot be empty", e)
									}
								},
								s = !1
						} else e.title = "Create a new room",
							e.description = "Choose a room name",
							e.content = ["<input type='text' id='createroom-dialog-room' value='" + a + "' autofocus>"],
							e.action = {
								text: "Create room",
								action: function() {
									o("#createroom-dialog-room", this)
								}
							};
						n()
					},
					100),
				libsb.on("signup-dialog",
					function(e, t) {
						if (/^guest-/.test(libsb.user.id)) {
							if (!s) return e.title = "Sign up for scrollback",
								void libsb.emit("auth", e,
									function() {
										t()
									});
							e.title = "Finish sign up",
								e.description = "Choose a username",
								e.content = ["<input type='text' id='signup-dialog-user' autofocus>", "<p>Be creative. People in Scrollback will know you by this name.</p>"],
								e.action = {
									text: "Create account",
									action: function() {
										i("#signup-dialog-user", this)
									}
								},
								s = !1
						} else e.title = "You're already signed in!",
							e.description = "Sign out to sign up for a new account";
						t()
					},
					100)
		}, {
			"../lib/validate.js": 46
		}
	],
	20: [
		function(e) {
			var t = e("../lib/formField.js");
			libsb.on("pref-show",
					function(e, n) {
						var r = e.user,
							o = $("<div>");
						switch (r.params.email || (r.params.email = {}), "undefined" == typeof r.params.email.notifications && (r.params.email.notifications = !0), "undefined" == typeof r.params.email.frequency && (r.params.email.frequency = "daily"), o.append(t("Mention notifications via email", "toggle", "mention", r.params.email.notifications)), r.params.email.frequency) {
							case "daily":
								o.append(t("Email digest frequency", "radio", "email-freq", [
									["email-freq-daily", "Daily", !0],
									["email-freq-never", "Never"]
								]));
								break;
							case "never":
								o.append(t("Email digest frequency", "radio", "email-freq", [
									["email-freq-daily", "Daily"],
									["email-freq-never", "Never", !0]
								]));
								break;
							default:
								o.append(t("Email digest frequency", "radio", "email-freq", [
									["email-freq-daily", "Daily", !0],
									["email-freq-never", "Never"]
								]))
						}
						e.email = {
								text: "Email",
								html: o,
								prio: 900
							},
							n()
					},
					500),
				libsb.on("pref-save",
					function(e, t) {
						e.params.email = {
								frequency: $('input:radio[name="email-freq"]:checked').next().text().toLowerCase(),
								notifications: $("#mention").is(":checked")
							},
							t()
					},
					500)
		}, {
			"../lib/formField.js": 36
		}
	],
	21: [
		function(e, t) {
			function n() {
				window.open(v.stripQueryParam(window.location.href, "embed"), "_blank")
			}

			function r() {
				f = Math.random() * Math.random(),
					h = d.origin.protocol + "//" + d.origin.host,
					window.parent.postMessage(JSON.stringify({
						type: "domain-challenge",
						token: f
					}), h),
					setTimeout(function() {
							if (!y)
								for (y = !0, S = !1, x = !0; C.length;) C.shift()()
						},
						1e3)
			}

			function o(e) {
				if (m = d.origin.host, p = d.origin.path, !x)
					for (S = e.token == f ? !0 : !1, y = !0; C.length;) C.shift()()
			}

			function i(e) {
				try {
					e = JSON.parse(e)
				} catch (t) {
					e = {}
				}
				return e
			}

			function a(e) {
				$("body").addClass("embed"),
					e.theme && ("dark" == e.theme ? $("body").addClass("theme-" + e.theme) : ($("body").removeClass("theme-dark"), $("body").addClass("theme-" + e.theme))),
					e.minimize && $("body").addClass("toast-minimized"),
					e && e.form && $("body").addClass("embed-" + e.form)
			}

			function s(e, t) {
				"embed" === e.source && e.embed && "toast" === e.embed.form && e.hasOwnProperty("minimize") && (e.minimize ? ($("body").addClass("toast-minimized"), window.parent.postMessage("minimize", h)) : ($("body").removeClass("toast-minimized"), window.parent.postMessage("maximize", h))),
					t()
			}

			function u(e, t) {
				var n = [];
				n.push("\n" + e + " {");
				for (var r in t)
					if (t[r] instanceof Array)
						for (var o = 0,
							i = t[r].length; i > o; o++) n.push(r + ":" + t[r][o] + "!important;");
					else n.push(r + ":" + t[r] + "!important;");
				return n.push("}"),
					n.join("\n")
			}

			function l(e) {
				var t, n, r = [];
				e && (e.titlebarColor && (t = new g(e.titlebarColor), n = t.luma < 65 ? "#fff" : "#333", t.saturation > 10 && r.push(u(".custom-titlebar-sb-color", {
					color: n,
					fill: n
				})), r.push(u(".custom-titlebar-bg", {
					"background-color": e.titlebarColor
				})), r.push(u(".custom-titlebar-fg", {
					color: n,
					fill: n
				})), r.push(u(".custom-titlebar-stroke", {
					stroke: n
				}))), e.titlebarImage && r.push(u(".custom-titlebar-image", {
					"background-image": "url('" + e.titlebarImage + "')",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"background-size": ["100%", "cover"]
				})), r.length && $("head").append($("<style>").text(r.join(" "))))
			}
			var c, d, f, m, p, h, g = e("../lib/color.js"),
				b = e("../lib/url-utils.js"),
				v = e("../lib/stringUtils.js"),
				y = !1,
				w = !1,
				S = !1,
				x = !1,
				C = [],
				E = [];
			t.exports = function(e) {
				$(function() {
					$(".embed-action-fullview").on("click", n),
						$(".title-bar").on("click",
							function(t) {
								$("body").hasClass("toast-minimized") ? e.emit("navigate", {
									minimize: !1,
									source: "embed",
									event: "minimize-bar"
								}) : (t.target === t.currentTarget || $(t.target).closest(".embed-action-minimize").length) && e.emit("navigate", {
									minimize: !0,
									view: "normal",
									source: "embed",
									event: "title-bar"
								})
							})
				});
				var t = b.parse(window.location.pathname, window.location.search);
				d = t.embed,
					window.parent !== window ? d ? (c = d.nick, a(d), d.origin ? (window.onmessage = function(e) {
							var t = e.data;
							t = i(t),
								"domain-response" == t.type && o(t)
						},
						r(d.origin)) : (y = !0, S = !1)) : (y = !0, S = !1) : (m = location.hostname, p = location.path, S = !0, y = !0),
					l(d),
					e.on("navigate",
						function(e, t) {
							function r() {
								var r;
								"boot" == e.source && (w = !0, e.embed = d, navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/) && navigator.userAgent.match(/Safari/) && d && "toast" === d.form && $(document).on("click",
										function(e) {
											$(e.target).closest(".title-bar, .minimize-bar").length || (e.stopPropagation(), n())
										})),
									e.room && "object" === e.room && (r = e.room.guides, e.old && e.old.roomName && e.roomName == e.old.roomName || r && r.http && r.http.allowedDomains && r.http.allowedDomains.length && (S && -1 != r.http.allowedDomains.indexOf(m) || (e.room = "embed-disallowed"))),
									t()
							}
							"boot" == e.source ? y ? r() : C.push(function() {
								r()
							}) : r()
						},
						997),
					e.on("init-up",
						function(n, r) {
							function o() {
								n.origin = {
										domain: m,
										path: p,
										verified: S
									},
									t && (n.suggestedNick = n.suggestedNick || c || ""),
									r()
							}
							e.hasBooted ? o() : E.push(o)
						},
						500),
					e.on("navigate", s, 500)
			}
		}, {
			"../lib/color.js": 34,
			"../lib/stringUtils.js": 43,
			"../lib/url-utils.js": 45
		}
	],
	22: [
		function(e) {
			function t() {
				var e = '<script>window.scrollback = %s;(function(d,s,h,e){e=d.createElement(s);e.async=1;e.src=(location.protocol === "https:" ? "https:" : "http:") + "//' + window.location.host + '/client.min.js";d.getElementsByTagName(s)[0].parentNode.appendChild(e);}(document,"script"));</script>',
					t = {
						room: window.currentState.roomName,
						titlebarColor: a,
						form: o,
						minimize: i
					};
				return r(e, JSON.stringify(t))
			}

			function n() {
				return "mailto:?body=" + encodeURIComponent(t()) + "&subject=" + encodeURIComponent("Embed Code for room: " + window.currentState.roomName)
			}

			function r(e) {
				var t = [].slice.call(arguments, 1),
					n = 0;
				return e.replace(/%s/g,
					function() {
						return t[n++]
					})
			}
			var o, i, a, s = e("../lib/formField.js");
			libsb.on("config-show",
				function(e, r) {
					var u, l, c, d, f, m, p, h, g, b = "https://" + window.location.host + "/" + window.currentState.roomName;
					o = "toast",
						i = !1,
						l = $("<input>").addClass("embed-input-url").attr({
							readonly: !0,
							type: "url"
						}).val(b).on("click",
							function() {
								$(this).select()
							}),
						u = $("<div>").append(s("Room URL", "", "embed-room-url", l)),
						c = $("<div>").addClass("embed-share").append($("<a>").attr({
							href: "https://plus.google.com/share?url=" + b,
							target: "_blank"
						}).addClass("googleplus embed-share-button").text("Google+"), $("<a>").attr({
							href: "https://www.facebook.com/sharer/sharer.php?u=" + b,
							target: "_blank"
						}).addClass("facebook embed-share-button").text("Facebook"), $("<a>").attr({
							href: "https://twitter.com/intent/tweet?url=" + b,
							target: "_blank"
						}).addClass("twitter embed-share-button").text("Twitter")),
						u.append(s("Share room on", "", "share-embed", c)),
						d = $("<img>").attr("src", "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=http://sb.lk/" + window.currentState.roomName),
						u.append(s("QR code", "", "embed-qr-code", d)),
						u.append($("<h3>").text("Embed options")),
						f = s("Titlebar background color", "text", "embed-titlebar-color", ""),
						f.find("input").attr({
							type: "color",
							placeholder: "#33ccaa"
						}).on("keydown paste input change",
							function() {
								var e = $(this);
								a = e.val() || "",
									a.toLowerCase(),
									/(^#[0-9a-f]{6}$)|(^#[0-9a-f]{3}$)/i.test(a) ? (h.text(t()), e.removeClass("error")) : e.addClass("error")
							}),
						u.append(f),
						p = s("Start widget minimized", "check", "embed-minimized-check", [
							["", "", i]
						]),
						p.find("[name='embed-minimized-check']").on("change",
							function() {
								i = $(this).is(":checked"),
									h.text(t())
							}),
						u.append(p),
						m = s("Widget appearance", "radio", "embed-form-options", [
							["embed-form-toast", "Toast", !0],
							["embed-form-canvas", "Canvas"]
						]),
						m.find("[name='embed-form-options']").on("change",
							function() {
								o = $("[name='embed-form-options']:checked").attr("id"),
									o = "string" == typeof o && o.length > 11 ? o.toLowerCase().substring(11) : "toast",
									h.text(t())
							}),
						u.append(m),
						h = $("<textarea>").addClass("embed-code").attr("readonly", !0).text(t()).on("click",
							function() {
								this.select()
							}),
						g = $("<div>").append($("<p>").text("Place the following code just before the closing '</head>' tag."), h, $("<p>").append($("<a>").attr({
							href: n(),
							target: "_blank"
						}).addClass("button secondary").text("Email to developer")), $("<p>").append($("<a>").attr({
							href: "https://github.com/scrollback/scrollback/wiki/Embed-Options",
							target: "_blank"
						}).text("Know more about Embed options"))),
						u.append(s("Embed code", "", "embed-code", g)),
						e.embed = {
							text: "Share & Embed",
							html: u,
							prio: 400
						},
						r()
				},
				500)
		}, {
			"../lib/formField.js": 36
		}
	],
	23: [
		function(e) {
			function t(e, t) {
				e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var n = new RegExp("[\\?&]" + e + "=([^&#]*)"),
					r = n.exec(t);
				return null === r ? null : decodeURIComponent(r[1].replace(/\+/g, " "))
			}

			function n() {
				var e = window.open("https:" + r.server.host + "/r/facebook/login", "_blank", "location=no");
				if (currentState.phonegap) var n = setInterval(function() {
						e.executeScript({
								code: "window.location.href;"
							},
							function(r) {
								var o = r[0],
									i = t("code", o);
								if (null !== i) {
									var a = {
										command: "signin",
										auth: {
											facebook: {
												code: i
											}
										}
									};
									$(window).trigger("phonegapmsg", [a]),
										clearInterval(n),
										e.close()
								}
							})
					},
					100)
			}
			var r = e("../client-config.js");
			$(".js-phonegap-fb-login").click(n),
				libsb.on("auth",
					function(e, t) {
						e.buttons.facebook = {
								text: "Facebook",
								prio: 100,
								action: n
							},
							t()
					},
					600)
		}, {
			"../client-config.js": 8
		}
	],
	24: [
		function() {
			libsb.on("user-menu",
				function(e, t) {
					e.items.reportissue = {
							text: "Report Issue",
							prio: 600,
							action: function() {
								window.open("https://github.com/scrollback/scrollback/issues", "_blank")
							}
						},
						t()
				},
				1e3)
		}, {}
	],
	25: [
		function(e) {
			function t(e, t) {
				e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var n = new RegExp("[\\?&]" + e + "=([^&#]*)"),
					r = n.exec(t);
				return null === r ? null : decodeURIComponent(r[1].replace(/\+/g, " "))
			}

			function n() {
				var e = window.open("https:" + r.server.host + "/r/google/login", "_blank", "location=no");
				if (currentState.phonegap) var n = setInterval(function() {
						e.executeScript({
								code: "window.location.href;"
							},
							function(r) {
								var o = r[0],
									i = t("code", o);
								if (null !== i) {
									var a = {
										command: "signin",
										auth: {
											google: {
												code: i
											}
										}
									};
									$(window).trigger("phonegapmsg", [a]),
										clearInterval(n),
										e.close()
								}
							})
					},
					100)
			}
			var r = e("../client-config.js");
			$(".js-phonegap-google-login").click(n),
				libsb.on("auth",
					function(e, t) {
						e.buttons.google = {
								text: "Google",
								prio: 100,
								action: n
							},
							t()
					},
					700)
		}, {
			"../client-config.js": 8
		}
	],
	26: [
		function() {
			libsb.on("user-menu",
				function(e, t) {
					return /^guest-/.test(libsb.user.id) ? t() : (e.items.logout = {
							text: "Logout",
							prio: 1e3,
							action: function() {
								libsb.logout()
							}
						},
						void t())
				},
				1e3)
		}, {}
	],
	27: [
		function(e) {
			var t = e("../ui/desktopnotify.js"),
				n = e("../lib/formField.js");
			libsb.on("pref-show",
					function(e, r) {
						var o = e.user,
							i = $("<div>"),
							a = o.params.notifications;
						a || (a = {}),
							"boolean" != typeof a.sound && (a.sound = !1);
						var s = n("Sound notifications ", "toggle", "sound-notification", a.sound);
						if (i.append(s), t.supported()) {
							("boolean" != typeof a.desktop || "granted" !== t.supported().permission) && (a.desktop = !1);
							var u = n("Desktop notifications ", "toggle", "desktop-notification", a.desktop);
							i.append(u),
								u.find("#desktop-notification").on("change",
									function() {
										$(this).is(":checked") && t.request(),
											"denied" === t.supported().permission && ($(this).attr("checked", !1), $("<div>").text("Permission for desktop notifications denied!").alertbar({
												type: "error",
												id: "desktopnotify-err-perm-denied"
											}))
									})
						}
						e.notification = {
								text: "Notifications",
								html: i,
								prio: 800
							},
							r()
					},
					500),
				libsb.on("pref-save",
					function(e, t) {
						e.params.notifications = {
								sound: $("#sound-notification").is(":checked"),
								desktop: $("#desktop-notification").is(":checked")
							},
							t()
					},
					500)
		}, {
			"../lib/formField.js": 36,
			"../ui/desktopnotify.js": 85
		}
	],
	28: [
		function(e) {
			var t = e("../lib/formField.js");
			libsb.on("config-show",
					function(e, n) {
						var r = $("<div>").append(t("Description", "area", "description", e.room.description));
						e.general = {
								text: "General settings",
								html: r,
								prio: 900
							},
							n()
					},
					500),
				libsb.on("config-save",
					function(e, t) {
						var n = $("#description").val();
						e.description = n,
							t()
					},
					500)
		}, {
			"../lib/formField.js": 36
		}
	],
	29: [
		function(e) {
			var t = e("../lib/formField.js");
			libsb.on("config-show",
					function(e, n) {
						var r = e.room;
						r.params.http || (r.params.http = {
							seo: !0
						});
						var o = $("<div>").append(t("Allow search engines to index room", "toggle", "allow-index", r.params.http.seo));
						e.seo = {
								text: "Search visibility",
								html: o,
								prio: 500
							},
							n()
					},
					500),
				libsb.on("config-save",
					function(e, t) {
						e.params.http || (e.params.http = {}),
							e.params.http.seo = $("#allow-index").is(":checked"),
							t()
					},
					500)
		}, {
			"../lib/formField.js": 36
		}
	],
	30: [
		function(e) {
			var t = e("../lib/formField.js"),
				n = "",
				r = [];
			libsb.on("init-dn",
					function(e, t) {
						n = e.user.picture,
							r = e.user.params.pictures,
							r || /^guest-/.test(e.user.id) || (r = [n]),
							t()
					},
					800),
				libsb.on("user-dn",
					function(e, t) {
						n = e.user.picture,
							r = e.user.params.pictures,
							r || (r = [n]),
							t()
					},
					800),
				libsb.on("user-up",
					function(e, t) {
						e.user.picture = n,
							r && (e.user.params.pictures = r),
							t()
					},
					100),
				libsb.on("pref-show",
					function(e, n) {
						var o, i, a, s;
						a = e.user ? e.user.description : "",
							s = e.user ? e.user.picture : "";
						var u = [];
						e.user.params && !e.user.params.pictures && (e.user.params.pictures = r),
							e.user.params && e.user.params.pictures && e.user.params.pictures.forEach(function(t) {
								var n = $("<div>").append($("<img>").attr("src", t)).addClass("pref-user-avatar").data("url", t);
								t === e.user.picture && n.addClass("current"),
									u.push(n)
							}),
							o = t("Picture", null, "picture-list", u),
							i = t("About me", "area", "pref-about-me", a),
							e.profile = {
								text: "Profile",
								html: $("<div>").append(o, i),
								prio: 1e3
							},
							n()
					},
					500),
				$(document).on("click", ".pref-user-avatar",
					function(e) {
						var t = $(e.target).closest(".pref-user-avatar");
						$(".pref-user-avatar.current").removeClass("current"),
							t.addClass("current")
					}),
				libsb.on("pref-save",
					function(e, t) {
						void 0,
						e.description = $("#pref-about-me").val(),
							e.identities = libsb.user.identities,
							n = e.picture = $(".pref-user-avatar.current").data("url"),
							t()
					},
					500)
		}, {
			"../lib/formField.js": 36
		}
	],
	31: [
		function(e, t) {
			function n(e, t) {
				e.id || (e.id = r.uid()),
					t()
			}
			var r = e("../lib/generate.js"),
				o = ["join-up", "part-up", "away-up", "back-up", "text-up", "init-up", "admit-up", "expel-up", "user-up", "room-up"];
			t.exports = function() {
				o.forEach(function(e) {
					libsb.on(e, n, "validation")
				})
			}
		}, {
			"../lib/generate.js": 38
		}
	],
	32: [
		function(e, t) {
			function n() {
				k.emit("logout")
			}

			function r(e) {
				var t = {
					user: "",
					rooms: [],
					occupantOf: [],
					memberOf: [],
					isConnected: !1,
					hasBooted: !1,
					connect: s,
					disconnect: u,
					resource: j.uid(),
					getTexts: l,
					getThreads: m,
					getOccupants: c,
					getMembers: d,
					getRooms: f,
					getUsers: p,
					enter: h,
					leave: g,
					join: b,
					part: v,
					say: y,
					admit: w,
					expel: S,
					logout: n
				};
				for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
			}

			function o(e) {
				var t = A.get("user", !1),
					n = A.get("occupantOf", !1),
					r = A.get("memberOf", !1);
				null !== t && (e.user = t),
					null !== n && (e.occupantOf = n),
					null !== r && (e.memberOf = r)
			}

			function i(e, t) {
				k.isConnected = !0,
					t()
			}

			function a(e, t) {
				k.isConnected = !1,
					k.isInited = !1,
					t()
			}

			function s() {
				k.emit("connection-requested")
			}

			function u() {
				k.emit("disconnect")
			}

			function l(e, t) {
				k.emit("getTexts", e, t)
			}

			function c(e, t) {
				k.emit("getUsers", {
						occupantOf: e
					},
					t)
			}

			function d(e, t) {
				k.emit("getUsers", {
						memberOf: e
					},
					t)
			}

			function f(e, t) {
				k.emit("getRooms", e, t)
			}

			function m(e, t) {
				k.emit("getThreads", e, t)
			}

			function p(e, t) {
				k.emit("getUsers", e, t)
			}

			function h(e, t) {
				k.emit("back-up", {
						to: e
					},
					t)
			}

			function g(e, t) {
				k.emit("away-up", {
						to: e
					},
					t)
			}

			function b(e, t) {
				k.emit("join-up", {
						to: e
					},
					t)
			}

			function v(e, t) {
				k.emit("part-up", {
						to: e
					},
					t)
			}

			function y(e, t, n, r) {
				var o = {
					to: e,
					text: t,
					from: k.user.id,
					time: (new Date).getTime()
				};
				/^\/me /.test(t) && (o.text = t.replace(/^\/me /, ""), o.labels = {
						action: 1
					}),
					n && (o.threads = [{
						id: n,
						score: 1
					}]),
					k.emit("text-up", o, r)
			}

			function w(e, t, n) {
				k.emit("admit-up", {
						to: e,
						ref: t
					},
					n)
			}

			function S(e, t, n) {
				k.emit("expel-up", {
						to: e,
						ref: t
					},
					n)
			}

			function x(e, t) {
				k.session = e.session,
					k.memberOf = e.memberOf,
					k.occupantOf = e.occupantOf,
					k.isInited = !0,
					e.user.id ? k.user = e.user : (k.user.identities = e.user.identities, k.user.picture = e.user.picture, k.user.params = k.user.params || {},
						k.user.params.pictures = e.user.params.pictures),
					t()
			}

			function C(e, t) {
				return e.from !== k.user.id ? t() : (0 === k.occupantOf.filter(function(t) {
					return t ? t.id === e.to : void 0
				}).length && k.occupantOf.push(e.room), void t())
			}

			function E(e, t) {
				return e.from !== k.user.id ? t() : (k.occupantOf = k.occupantOf.filter(function(t) {
					return t && t.id !== e.to ? t : void 0
				}), void t())
			}

			function T(e, t) {
				return e.from !== k.user.id ? t() : (0 === k.memberOf.filter(function(t) {
					return t ? t.id === e.to : void 0
				}).length && k.memberOf.push(e.room), void t())
			}

			function O(e, t) {
				return e.from !== k.user.id ? t() : (k.memberOf = k.memberOf.filter(function(t) {
					return t && t.id !== e.to ? t : void 0
				}), void t())
			}

			function N(e, t) {
				var n, r, o, i = !0;
				if (e.from === k.user.id) {
					for (o = 0, r = k.memberOf.length; r > o; o++)
						if (k.memberOf[o].id === e.to) {
							n = $.extend(!0, {},
									e.room),
								k.memberOf[o] = n,
								k.memberOf[o].role = "owner",
								i = !1;
							break
						}
					i && (n = $.extend(!0, {},
						e.room), n.role = "owner", k.memberOf.push(n))
				}
				t()
			}
			var k, j = e("../lib/generate.js"),
				A = e("../localStorage/spaceManager.js");
			t.exports = function(e) {
				return k = e,
					window.libsb = k,
					r(k),
					o(k),
					k.on("init-dn", x, 999),
					k.on("back-dn", C, 1e3),
					k.on("away-dn", E, 1e3),
					k.on("join-dn", T, 1e3),
					k.on("part-dn", O, 1e3),
					k.on("room-dn", N, 1e3),
					k.on("connected", i, 1e3),
					k.on("disconnected", a, 1e3),
					k
			}
		}, {
			"../lib/generate.js": 38,
			"../localStorage/spaceManager.js": 55
		}
	],
	33: [
		function(e) {
			var t = e("../lib/formField.js");
			libsb.on("config-show",
					function(e, n) {
						var r = e.room,
							o = $("<div>"),
							i = "",
							a = "",
							s = {},
							u = !0;
						r.params.irc && r.params.irc.server && r.params.irc.channel && (i = r.params.irc.server, a = r.params.irc.channel, u = r.params.irc.enabled);
						var l = t("", "", "irc-message-text", ""),
							c = t("", "info", "irc-message-text", ""),
							d = c.find("#irc-message-text"),
							f = t("", "error", "irc-message-text", ""),
							m = f.find("#irc-message-text");
						if (o.append(t("Enable IRC", "check", "irc-enable-check", [
							["irc-enable", "", u]
						]), t("IRC server", "text", "irc-server", i), t("IRC channel", "text", "irc-channel", a), l), r.params.irc) {
							var p = r.params.irc;
							p.error ? (s.type = "error", s.value = null, m.text("ERR_CONNECTED_OTHER_ROOM" === r.params.irc.error ? "This IRC account is already linked with another scrollback room. You can't use it until they unlink." : "Error in saving, please try again after some time"), l.replaceWith(f), l = f) : p.server && p.channel && p.pending && p.enabled ? (s.type = "info", s.value = null, $.get("/r/irc/" + r.id,
								function(e) {
									"ERR_NOT_CONNECTED" !== e ? (d.text('The IRC channel operator needs to type "/invite ' + e + " " + r.params.irc.channel + '" in the IRC channel to complete the process.'), l.replaceWith(c), l = c) : (m.text("An error occured while connecting to the IRC channel. Please try again later."), l.replaceWith(f), l = f)
								})) : r.params.irc.server && r.params.irc.channel && r.params.irc.enabled ? (d.text("Connected to IRC channel: " + r.params.irc.channel), l.replaceWith(c), l = c) : (d.text("Not connected :-("), l.replaceWith(c), l = c)
						}
						e.irc = {
								text: "IRC integration",
								html: o,
								prio: 800,
								notify: s
							},
							n()
					},
					500),
				libsb.on("config-save",
					function(e, t) {
						var n = $("#irc-server").val(),
							r = $("#irc-channel").val();
						n && r || (n = "", r = ""),
							e.params.irc = {
								server: n,
								channel: r,
								enabled: $("#irc-enable").is(":checked")
							},
							t()
					},
					500),
				libsb.on("room-dn",
					function(e, t) {
						var n = e.room,
							r = n.params && n.params.irc;
						e.user.id === libsb.user.id && r && r.pending && !r.error && r.channel && r.server && r.enabled && $.get("/r/irc/" + n.id,
								function(e) {
									var t = "Something went wrong while connecting to IRC server";
									"ERR_NOT_CONNECTED" !== e && (t = 'The IRC channel operator needs to type "/invite ' + e + " " + n.params.irc.channel + '" in the IRC channel to complete the process.'),
										$("<div>").text(t).alertbar({
											type: "info",
											id: "irc-info-message"
										})
								}),
							t()
					},
					500)
		}, {
			"../lib/formField.js": 36
		}
	],
	34: [
		function(e, t) {
			function n(e) {
				var t, r, o, i, a, s, u, l, c, d, f = {};
				if (!1 == this instanceof n) return new n(e);
				if (e || 4 === e.length || 7 === e.length) {
					if (4 === e.length && (e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
						function(e, t, n, r) {
							return "#" + t + t + n + n + r + r
						})), f.hex = e, t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e), f.red = parseInt(t[1], 16), f.green = parseInt(t[2], 16), f.blue = parseInt(t[3], 16), r = f.red / 255, o = f.green / 255, i = f.blue / 255, l = Math.max(r, o, i), c = Math.min(r, o, i), u = (l + c) / 2, d = l - c, l === c) a = s = 0;
					else {
						switch (s = u > .5 ? d / (2 - l - c) : d / (l + c), l) {
							case r:
								a = (o - i) / d + (i > o ? 6 : 0);
								break;
							case o:
								a = (i - r) / d + 2;
								break;
							case i:
								a = (r - o) / d + 4
						}
						a /= 6
					}
					f.hue = Math.round(360 * a),
						f.saturation = Math.round(100 * s),
						f.luma = Math.round(100 * u);
					for (var m in f) f.hasOwnProperty(m) && Object.defineProperty(this, m, {
						value: f[m],
						writable: !1,
						enumerable: !0
					})
				}
			}
			t.exports = n
		}, {}
	],
	35: [
		function(e, t) {
			function n(e, t, r, o) {
				r < e.length ? (i && void 0, e[r].fn(t,
					function(i) {
						return i ? o ? o(i, t) : void 0 : n(e, t, r + 1, o)
					})) : o && o(null, t)
			}

			function r() {
				this.handlers = {}
			}
			var o = {
					antiflood: 1e3,
					validation: 900,
					loader: 850,
					sudo: 825,
					appLevelValidation: 812,
					authentication: 800,
					authorization: 700,
					antiabuse: 600,
					modifier: 500,
					gateway: 400,
					webGateway: 350,
					cache: 300,
					storage: 200,
					watcher: 100
				},
				i = !1;
			r.prototype.on = function(e, t, n) {
					var r, a, s, u, l, c, d = 0;
					if (i && (u = new Error, u.stack && (a = u.stack.split("\n")[2], s = a.lastIndexOf("/"), a = e + " handler at " + a.substring(s + 1))), !n) throw new Error("INVALID_PARAMETERS");
					if ("string" == typeof n && (n = o[n]), "function" != typeof t) throw new Error("INVALID_LISTENER");
					if (this.handlers[e] || (this.handlers[e] = []), c = this.handlers[e].length, l = {
							fn: t,
							priority: n
						},
						a && (l.line = a), c && n < this.handlers[e][c - 1].priority) this.handlers[e].push(l);
					else {
						for (r = 0; c > r && (d = r, !(this.handlers[e][r].priority <= n)); r++);
						this.handlers[e].splice(d, 0, l)
					}
				},
				r.prototype.emit = function(e, t, r) {
					this.handlers[e] ? n(this.handlers[e], t, 0, r) : r && r(null, t)
				},
				t.exports = r
		}, {}
	],
	36: [
		function(e, t) {
			var n = function(e, t, n, r) {
				var o, i;
				switch (t) {
					case "area":
						o = $("<textarea>").attr({
							id: n,
							name: n
						}).val(r);
						break;
					case "text":
						o = $("<input>").attr({
							type: "text",
							id: n,
							name: n
						}).val(r);
						break;
					case "check":
						if (o = $("<div>"), r instanceof Array)
							for (i = 0; i < r.length; i++) $("<div>").addClass("check-item").append($("<input>").attr({
								type: "checkbox",
								id: r[i][0],
								value: r[i][0],
								name: n,
								checked: r[i][2] === !0
							}), $("<label>").attr({
								"for": r[i][0]
							}).text(r[i][1])).appendTo(o);
						break;
					case "radio":
						if (o = $("<div>"), r instanceof Array)
							for (i = 0; i < r.length; i++) $("<div>").addClass("radio-item").append($("<input>").attr({
								type: "radio",
								id: r[i][0],
								value: r[i][0],
								name: n,
								checked: r[i][2] === !0
							}), $("<label>").attr({
								"for": r[i][0]
							}).text(r[i][1])).appendTo(o);
						break;
					case "toggle":
						o = $("<div>").addClass("switch-container").append($("<input>").addClass("switch").attr({
							type: "checkbox",
							id: n,
							name: n,
							checked: r
						}), $("<label>").attr({
							"for": n
						}));
						break;
					case "multientry":
						o = $.multientry("create").multientry("add", r).attr({
							id: n
						});
						break;
					case "info":
						o = $("<p>").attr({
							id: n
						}).addClass("tip info").text(r);
						break;
					case "success":
						o = $("<p>").attr({
							id: n
						}).addClass("tip success").text(r);
						break;
					case "warning":
						o = $("<p>").attr({
							id: n
						}).addClass("tip warning").text(r);
						break;
					case "error":
						o = $("<p>").attr({
							id: n
						}).addClass("tip error").text(r);
						break;
					default:
						o = $("<div>").attr({
							id: n
						}).html(r)
				}
				return $("<div>").addClass("settings-item").append($("<div>").addClass("settings-label").text(e), $("<div>").addClass("settings-action").append(o))
			};
			t.exports = n
		}, {}
	],
	37: [
		function() {
			window.format = {
				friendlyTime: function(e, t) {
					var n = new Date(parseInt(e, 10)),
						r = new Date(t),
						o = t - e,
						i = 6e4,
						a = 60 * i,
						s = 24 * a,
						u = Math.round(o / i),
						l = Math.round(o / s),
						c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
						d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
						f = "";
					if (isNaN(n.getTime()) || isNaN(r.getTime())) return "Sometime";
					if (l > 6) f += d[n.getMonth()] + " " + n.getDate(),
						f = (n.getFullYear() !== r.getFullYear() ? n.getFullYear() + " " : "") + f;
					else {
						if (1 > u) return "Just now";
						if (15 > u) return u + " minute" + (u > 1 ? "s" : "") + " ago";
						f = f || l > 1 ? c[n.getDay()] : n.getDay() != r.getDay() ? "Yesterday" : ""
					}
					return (f ? f + " at " : "") + n.getHours() + ":" + (n.getMinutes() < 10 ? "0" : "") + n.getMinutes()
				},
				htmlToText: function(e) {
					return e && "string" == typeof e ? e.replace(/<[^>]*>/g,
						function(e) {
							return /^<br/.test(e) || /^<p/.test(e) || /^<div/.test(e) || /^<\/p/.test(e) || /^<\/div/.test(e) ? "\n" : " "
						}).replace(/\ +/, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ").replace(/&#(\d+);/g,
						function(e, t) {
							return String.fromCharCode(t)
						}) : ""
				},
				textToHtml: function(e) {
					return e && "string" == typeof e ? e.replace(/&/g, "&#38").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/"/g, "&#34").replace(/'/g, "&#39;").replace(/(?:\r\n|\r|\n)/g, "<br />") : ""
				},
				linkify: function(e) {
					if ("string" == typeof e) {
						for (var t, n, r, o, i, a, s = /\b(https?\:\/\/)?([\w.\-]*@)?((?:[a-z0-9\-]+)(?:\.[a-z0-9\-]+)*(?:\.[a-z]{2,4}))(:[0-9]{1,4})?((?:\/|\?)\S*)?\b/gi,
							u = "",
							l = 0; null !== (t = s.exec(e));) u += e.substring(l, t.index),
							n = t[1],
							r = t[2],
							o = t[3] || "",
							i = t[4] || "",
							a = t[5] || "",
							n = n || (r ? "mailto:" : "http://"),
							r = r || "",
							l = s.lastIndex,
							u += "<a rel='nofollow' target='_blank' href='" + n + r + o + a + "'>" + t[0] + "</a>";
						return u += e.substring(l)
					}
				},
				sanitize: function(e) {
					return e = e.trim().replace(/[^a-zA-Z0-9]/g, "-").replace(/^-+|-+$/, ""),
						e.length < 3 && (e += Array(4 - e.length).join("-")),
						e = e.substring(0, 32)
				}
			}
		}, {}
	],
	38: [
		function(e, t) {
			"use strict";

			function n(e) {
				for (var t, n, r, o = ""; t = o.length, e > t;) 2 > t ? o = i[Math.floor(i.length * Math.random())] : (n = o.substr(t - 2), r = a[n] ? a[n][t == e - 1 ? "e" : "m"] : [], r.length ? o += r[Math.floor(r.length * Math.random())] : o = o.substr(0, t - 3));
				return o.toLowerCase()
			}

			function r(e) {
				var t, r = [];
				for (t = 0; e > t; t++) r.push(n(1 + Math.floor(3 * Math.random() + 3 * Math.random() + 3 * Math.random())) + (e - 1 > t && Math.random() < .1 ? "," : ""));
				return r[0] = r[0][0].toUpperCase() + r[0].substr(1),
					r.join(" ") + (Math.random() < .1 ? Math.random() < .3 ? "!" : "?" : ".")
			}

			function o(e) {
				var t, n = [];
				for (t = 0; e > t; t++) n.push(r(4 + Math.floor(10 * Math.random())));
				return n.join(" ")
			}
			var i = ["TH", "OF", "AN", "IN", "TO", "CO", "BE", "HE", "RE", "HA", "WA", "FO", "WH", "MA", "WI", "ON", "HI", "PR", "ST", "NO", "IS", "IT", "SE", "WE", "AS", "CA", "DE", "SO", "MO", "SH", "DI", "AL", "AR", "LI", "WO", "FR", "PA", "ME", "AT", "SU", "BU", "SA", "FI", "NE", "CH", "PO", "HO", "DO", "OR", "UN", "LO", "EX", "BY", "FA", "LA", "LE", "PE", "MI", "SI", "YO", "TR", "BA", "GO", "BO", "GR", "TE", "EN", "OU", "RA", "AC", "FE", "PL", "CL", "SP", "BR", "EV", "TA", "DA", "AB", "TI", "RO", "MU", "EA", "NA", "SC", "AD", "GE", "YE", "AF", "AG", "UP", "AP", "DR", "US", "PU", "CE", "IF", "RI", "VI", "IM", "AM", "KN", "OP", "CR", "OT", "JU", "QU", "TW", "GA", "VA", "VE", "PI", "GI", "BI", "FL", "BL", "EL", "JO", "FU", "HU", "CU", "RU", "OV", "MY", "OB", "KE", "EF", "PH", "CI", "KI", "NI", "SL", "EM", "SM", "VO", "MR", "WR", "ES", "DU", "TU", "AU", "NU", "GU", "OW", "SY", "JA", "OC", "EC", "ED", "ID", "JE", "AI", "EI", "SK", "OL", "GL", "EQ", "LU", "AV", "SW", "AW", "EY", "TY"],
				a = {
					TH: {
						m: ["E", "A", "I", "O", "R"],
						e: ["E", "O"]
					},
					AN: {
						m: ["D", "T", "Y", "C", "S", "G", "N", "I", "O", "E", "A", "K"],
						e: ["D", "T", "Y", "S", "G", "O", "E", "A", "K"]
					},
					IN: {
						m: ["G", "T", "E", "D", "S", "C", "A", "I", "K", "V", "U", "N", "F"],
						e: ["G", "T", "E", "D", "S", "A", "K"]
					},
					IO: {
						m: ["N", "U", "R"],
						e: ["N", "U", "R"]
					},
					EN: {
						m: ["T", "C", "D", "S", "E", "I", "G", "O", "N", "A"],
						e: ["T", "D", "S", "E", "G", "O", "A"]
					},
					TI: {
						m: ["O", "N", "C", "V", "M", "L", "E", "T", "S", "A", "R", "F"],
						e: ["N", "C", "M", "L", "E", "T", "S", "A", "R", "F"]
					},
					FO: {
						m: ["R", "U", "O", "L"],
						e: ["R", "U", "O", "L"]
					},
					HE: {
						m: ["R", "N", "Y", "S", "M", "I", "A", "L", "D", "T"],
						e: ["R", "N", "Y", "S", "M", "A", "L", "D", "T"]
					},
					HA: {
						m: ["T", "D", "V", "N", "S", "R", "P", "L"],
						e: ["T", "D", "N", "S", "R", "L"]
					},
					HI: {
						m: ["S", "N", "C", "M", "L", "P", "G", "T", "R", "E"],
						e: ["S", "N", "C", "M", "L", "P", "G", "T", "R", "E"]
					},
					TE: {
						m: ["R", "D", "N", "S", "M", "L", "E", "C", "A"],
						e: ["R", "D", "N", "S", "M", "L", "E", "A"]
					},
					AT: {
						m: ["I", "E", "T", "H", "U", "O", "C"],
						e: ["E", "H", "O"]
					},
					ER: {
						m: ["E", "S", "I", "A", "N", "Y", "T", "V", "M", "R", "O", "L", "G", "F", "C"],
						e: ["E", "S", "A", "N", "Y", "T", "M"]
					},
					AL: {
						m: ["L", "S", "I", "T", "E", "U", "O", "M", "K", "F", "A"],
						e: ["L", "S", "T", "E", "F"]
					},
					WA: {
						m: ["S", "Y", "R", "T", "N", "L"],
						e: ["S", "Y", "R", "T", "N", "L"]
					},
					VE: {
						m: ["R", "N", "L", "S", "D"],
						e: ["R", "N", "L", "S", "D"]
					},
					CO: {
						m: ["N", "M", "U", "R", "L", "V", "S", "O"],
						e: ["N", "M", "U", "R", "L", "O"]
					},
					RE: {
						m: ["S", "A", "D", "N", "E", "C", "L", "T", "P", "M", "V", "G", "F", "Q"],
						e: ["S", "A", "D", "N", "E", "L", "T", "P", "M"]
					},
					IT: {
						m: ["H", "I", "Y", "E", "S", "T", "A", "U"],
						e: ["H", "Y", "E", "S", "A"]
					},
					WI: {
						m: ["T", "L", "N", "S"],
						e: ["T", "L", "N", "S"]
					},
					ME: {
						m: ["N", "R", "D", "T", "S", "M", "A"],
						e: ["N", "R", "D", "T", "S", "M", "A"]
					},
					NC: {
						m: ["E", "I", "H", "T", "R", "O", "L"],
						e: ["E", "H", "T"]
					},
					ON: {
						m: ["S", "E", "T", "G", "A", "D", "L", "C", "V", "O", "I", "F"],
						e: ["S", "E", "T", "G", "A", "D", "O"]
					},
					PR: {
						m: ["O", "E", "I", "A"],
						e: ["E", "A"]
					},
					AR: {
						m: ["E", "T", "D", "Y", "S", "I", "R", "L", "M", "K", "G", "A", "O", "N", "C"],
						e: ["E", "T", "D", "Y", "S", "M", "K", "A", "N"]
					},
					ES: {
						m: ["S", "T", "E", "I", "P", "U", "C"],
						e: ["S", "T", "E"]
					},
					EV: {
						m: ["E", "I"],
						e: ["E"]
					},
					ST: {
						m: ["A", "R", "I", "E", "O", "U", "S"],
						e: ["A", "E", "O", "S"]
					},
					EA: {
						m: ["R", "S", "T", "D", "L", "C", "N", "V", "M", "K"],
						e: ["R", "S", "T", "D", "L", "N", "M"]
					},
					IV: {
						m: ["E", "I", "A"],
						e: ["E"]
					},
					EC: {
						m: ["T", "O", "I", "E", "A", "U", "R", "H"],
						e: ["T", "E", "H"]
					},
					NO: {
						m: ["T", "W", "R", "U", "N", "M"],
						e: ["T", "W", "R", "U", "N", "M"]
					},
					OU: {
						m: ["T", "L", "R", "N", "S", "G", "P", "B"],
						e: ["T", "L", "R", "N", "S", "P"]
					},
					PE: {
						m: ["R", "N", "C", "A", "D", "T", "O"],
						e: ["R", "N", "A", "D", "T"]
					},
					IL: {
						m: ["L", "E", "I", "Y", "D", "A"],
						e: ["L", "E", "Y", "D"]
					},
					IS: {
						m: ["T", "H", "S", "I", "E", "C", "M"],
						e: ["T", "H", "S", "E", "M"]
					},
					MA: {
						m: ["N", "T", "L", "K", "D", "S", "I", "G"],
						e: ["N", "T", "L", "D", "S"]
					},
					AV: {
						m: ["E", "I", "A"],
						e: ["E"]
					},
					OM: {
						m: ["E", "P", "M", "I", "A"],
						e: ["E"]
					},
					IC: {
						m: ["A", "H", "E", "I", "T", "K", "U", "S"],
						e: ["H", "E", "T", "K", "S"]
					},
					GH: {
						m: ["T"],
						e: ["T"]
					},
					DE: {
						m: ["R", "N", "S", "D", "A", "V", "P", "T", "M", "L", "F"],
						e: ["R", "N", "S", "D", "A", "P", "T", "M", "L"]
					},
					AI: {
						m: ["N", "D", "R", "L", "T"],
						e: ["N", "D", "R", "L", "T"]
					},
					CT: {
						m: ["I", "E", "U", "S", "O"],
						e: ["E", "S", "O"]
					},
					IG: {
						m: ["H", "N", "I"],
						e: ["H", "N"]
					},
					ID: {
						m: ["E"],
						e: ["E"]
					},
					OR: {
						m: ["E", "T", "M", "D", "S", "K", "I", "Y", "L", "G", "A", "R", "N", "C"],
						e: ["E", "T", "M", "D", "S", "K", "Y", "A", "N"]
					},
					OV: {
						m: ["E", "I"],
						e: ["E"]
					},
					UL: {
						m: ["D", "T", "A", "L"],
						e: ["D", "T", "L"]
					},
					YO: {
						m: ["U"],
						e: ["U"]
					},
					BU: {
						m: ["T", "S", "R", "I"],
						e: ["T", "S", "R"]
					},
					RA: {
						m: ["T", "N", "L", "C", "I", "M", "D", "S", "R", "P", "G", "B"],
						e: ["T", "N", "L", "M", "D", "S", "R"]
					},
					FR: {
						m: ["O", "E", "A"],
						e: ["E", "A"]
					},
					RO: {
						m: ["M", "U", "V", "P", "N", "W", "S", "O", "L", "D", "C", "B", "A", "T", "G"],
						e: ["M", "U", "P", "N", "W", "O", "L", "D", "T"]
					},
					WH: {
						m: ["I", "E", "O", "A"],
						e: ["E", "O"]
					},
					OT: {
						m: ["H", "E", "T", "I"],
						e: ["H", "E"]
					},
					BL: {
						m: ["E", "I", "Y", "O", "A"],
						e: ["E", "Y"]
					},
					NT: {
						m: ["E", "I", "S", "R", "O", "A", "L", "Y", "U", "H"],
						e: ["E", "S", "O", "A", "Y", "H"]
					},
					UN: {
						m: ["D", "T", "I", "C", "G"],
						e: ["D", "T", "G"]
					},
					TR: {
						m: ["A", "I", "O", "E", "U", "Y"],
						e: ["A", "E", "Y"]
					},
					HO: {
						m: ["U", "W", "S", "R", "L", "O", "M", "T", "P", "N", "D"],
						e: ["U", "W", "R", "L", "O", "M", "T", "P", "N", "D"]
					},
					AC: {
						m: ["T", "E", "K", "H", "C", "R", "I"],
						e: ["T", "E", "K", "H"]
					},
					TU: {
						m: ["R", "D", "A", "T"],
						e: ["R", "T"]
					},
					WE: {
						m: ["R", "L", "E", "V", "S", "N", "A"],
						e: ["R", "L", "E", "S", "N", "A"]
					},
					CA: {
						m: ["L", "N", "T", "R", "U", "S", "M", "P"],
						e: ["L", "N", "T", "R", "S", "M"]
					},
					SH: {
						m: ["E", "O", "I", "A"],
						e: ["E", "O"]
					},
					UR: {
						m: ["E", "N", "T", "S", "I", "A", "Y", "R", "P", "C"],
						e: ["E", "N", "T", "S", "A", "Y"]
					},
					IE: {
						m: ["S", "N", "D", "T", "W", "V", "R", "L", "F"],
						e: ["S", "N", "D", "T", "W", "R", "L"]
					},
					PA: {
						m: ["R", "T", "S", "N", "L", "I", "C"],
						e: ["R", "T", "S", "N", "L"]
					},
					TO: {
						m: ["R", "O", "N", "W", "P", "M", "L"],
						e: ["R", "O", "N", "W", "P", "M", "L"]
					},
					EE: {
						m: ["N", "D", "T", "M", "S", "R", "P", "L", "K"],
						e: ["N", "D", "T", "M", "S", "R", "P", "L", "K"]
					},
					LI: {
						m: ["N", "T", "S", "C", "K", "G", "E", "F", "Z", "V", "O", "M", "A"],
						e: ["N", "T", "S", "C", "G", "E", "F", "M", "A"]
					},
					RI: {
						m: ["N", "E", "C", "T", "S", "G", "A", "V", "O", "P", "M", "L", "D", "B"],
						e: ["N", "E", "C", "T", "S", "G", "A", "P", "M", "L", "D"]
					},
					UG: {
						m: ["H", "G"],
						e: ["H"]
					},
					AM: {
						m: ["E", "P", "I", "O", "A"],
						e: ["E"]
					},
					ND: {
						m: ["E", "I", "S", "A", "U", "O"],
						e: ["E", "S", "O"]
					},
					US: {
						m: ["E", "T", "I", "S", "L", "H"],
						e: ["E", "T", "S", "H"]
					},
					LL: {
						m: ["Y", "E", "O", "I", "S", "A"],
						e: ["Y", "E", "S"]
					},
					AS: {
						m: ["T", "S", "E", "I", "U", "O", "K", "H"],
						e: ["T", "S", "E", "O", "H"]
					},
					TA: {
						m: ["T", "N", "L", "I", "R", "K", "B", "G", "C"],
						e: ["T", "N", "L", "R"]
					},
					LE: {
						m: ["S", "D", "A", "T", "C", "R", "N", "M", "G", "V", "F"],
						e: ["S", "D", "A", "T", "R", "N", "M"]
					},
					MO: {
						m: ["R", "S", "V", "T", "U", "D"],
						e: ["R", "T", "U", "D"]
					},
					WO: {
						m: ["R", "U"],
						e: ["R", "U"]
					},
					MI: {
						m: ["N", "L", "S", "T", "C", "G"],
						e: ["N", "L", "S", "T", "C", "G"]
					},
					AB: {
						m: ["L", "O", "I"],
						e: []
					},
					EL: {
						m: ["L", "Y", "I", "E", "F", "O", "A", "T", "S", "P", "D"],
						e: ["L", "Y", "E", "F", "T", "S", "D"]
					},
					IA: {
						m: ["L", "N", "T"],
						e: ["L", "N", "T"]
					},
					NA: {
						m: ["L", "T", "R", "N", "M"],
						e: ["L", "T", "R", "N", "M"]
					},
					SS: {
						m: ["I", "E", "U", "O", "A"],
						e: ["E", "O"]
					},
					AG: {
						m: ["E", "A", "O"],
						e: ["E", "O"]
					},
					TT: {
						m: ["E", "L", "I"],
						e: ["E"]
					},
					NE: {
						m: ["D", "S", "W", "R", "E", "Y", "V", "T", "L", "C", "A"],
						e: ["D", "S", "W", "R", "E", "Y", "T", "L", "A"]
					},
					PL: {
						m: ["A", "E", "I", "Y", "O"],
						e: ["E", "Y"]
					},
					LA: {
						m: ["T", "N", "R", "S", "C", "Y", "W", "I", "B"],
						e: ["T", "N", "R", "S", "Y", "W"]
					},
					OS: {
						m: ["T", "E", "S", "I"],
						e: ["T", "E", "S"]
					},
					CE: {
						m: ["S", "N", "R", "D", "P", "L", "I"],
						e: ["S", "N", "R", "D", "P", "L"]
					},
					DI: {
						m: ["S", "N", "T", "D", "F", "E", "C", "A", "V", "R"],
						e: ["S", "N", "T", "D", "F", "E", "C", "A", "R"]
					},
					BE: {
						m: ["R", "E", "C", "T", "L", "F", "S", "I", "G", "D", "A"],
						e: ["R", "E", "T", "L", "S", "D", "A"]
					},
					AP: {
						m: ["P", "E", "A"],
						e: ["E"]
					},
					SI: {
						m: ["O", "N", "D", "T", "S", "G", "C", "B", "V", "M", "A"],
						e: ["N", "D", "T", "S", "G", "C", "M", "A"]
					},
					NI: {
						m: ["N", "T", "S", "C", "Z", "O", "G", "F"],
						e: ["N", "T", "S", "C", "G", "F"]
					},
					OW: {
						m: ["N", "E", "S", "I", "A"],
						e: ["N", "E", "S"]
					},
					SO: {
						m: ["N", "M", "U", "L", "C", "R"],
						e: ["N", "M", "U", "L", "R"]
					},
					AK: {
						m: ["E", "I"],
						e: ["E"]
					},
					CH: {
						m: ["E", "A", "I", "O", "U", "R"],
						e: ["E", "O"]
					},
					EM: {
						m: ["E", "S", "P", "O", "B", "A", "I"],
						e: ["E", "S"]
					},
					IM: {
						m: ["E", "P", "I", "A", "S", "M"],
						e: ["E", "S"]
					},
					SE: {
						m: ["D", "N", "L", "S", "R", "E", "C", "T", "V", "A"],
						e: ["D", "N", "L", "S", "R", "E", "T", "A"]
					},
					NS: {
						m: ["T", "I", "E"],
						e: ["T", "E"]
					},
					PO: {
						m: ["S", "R", "N", "L", "W", "T", "I"],
						e: ["R", "N", "L", "W", "T"]
					},
					EI: {
						m: ["R", "N", "G", "T"],
						e: ["R", "N", "G", "T"]
					},
					EX: {
						m: ["P", "T", "I", "C", "A"],
						e: ["T"]
					},
					KI: {
						m: ["N"],
						e: ["N"]
					},
					UC: {
						m: ["H", "T", "K", "E"],
						e: ["H", "T", "K", "E"]
					},
					AD: {
						m: ["E", "I", "Y", "V", "M", "D"],
						e: ["E", "Y"]
					},
					GR: {
						m: ["E", "A", "O"],
						e: ["E", "A"]
					},
					IR: {
						m: ["E", "S", "T", "L", "I"],
						e: ["E", "S", "T"]
					},
					NG: {
						m: ["E", "S", "L", "T", "R", "I"],
						e: ["E", "S"]
					},
					OP: {
						m: ["E", "P", "L"],
						e: ["E"]
					},
					SP: {
						m: ["E", "O", "I", "A"],
						e: ["E"]
					},
					OL: {
						m: ["D", "L", "I", "O", "E", "U"],
						e: ["D", "L", "E"]
					},
					DA: {
						m: ["Y", "T", "R", "N"],
						e: ["Y", "T", "R", "N"]
					},
					NL: {
						m: ["Y"],
						e: ["Y"]
					},
					TL: {
						m: ["Y", "E"],
						e: ["Y", "E"]
					},
					LO: {
						m: ["W", "N", "O", "S", "C", "V", "U", "T", "R", "P", "G"],
						e: ["W", "N", "O", "U", "T", "R", "P"]
					},
					BO: {
						m: ["U", "T", "R", "O", "D", "A"],
						e: ["U", "T", "R", "O", "D"]
					},
					RS: {
						m: ["T", "E", "O", "I"],
						e: ["T", "E", "O"]
					},
					FE: {
						m: ["R", "E", "W", "L", "C", "A"],
						e: ["R", "E", "W", "L", "A"]
					},
					FI: {
						m: ["R", "N", "C", "E", "L", "G"],
						e: ["R", "N", "C", "E", "L", "G"]
					},
					SU: {
						m: ["R", "C", "P", "B", "M", "L", "A"],
						e: ["R", "P", "M", "L"]
					},
					GE: {
						m: ["N", "T", "S", "R", "D"],
						e: ["N", "T", "S", "R", "D"]
					},
					MP: {
						m: ["L", "O", "A", "T", "R", "E"],
						e: ["T", "E"]
					},
					UA: {
						m: ["L", "T", "R"],
						e: ["L", "T", "R"]
					},
					OO: {
						m: ["K", "D", "L", "T", "R", "N", "M"],
						e: ["K", "D", "L", "T", "R", "N", "M"]
					},
					RT: {
						m: ["I", "H", "A", "E", "Y", "U", "S"],
						e: ["H", "A", "E", "Y", "S"]
					},
					SA: {
						m: ["I", "M", "Y", "N", "L"],
						e: ["M", "Y", "N", "L"]
					},
					CR: {
						m: ["E", "I", "O", "A"],
						e: ["E", "A"]
					},
					FF: {
						m: ["E", "I"],
						e: ["E"]
					},
					IK: {
						m: ["E"],
						e: ["E"]
					},
					MB: {
						m: ["E"],
						e: ["E"]
					},
					KE: {
						m: ["D", "N", "T", "S", "R", "E"],
						e: ["D", "N", "T", "S", "R", "E"]
					},
					FA: {
						m: ["C", "R", "M", "I"],
						e: ["R", "M"]
					},
					CI: {
						m: ["A", "T", "E", "S", "P", "N"],
						e: ["A", "T", "E", "S", "P", "N"]
					},
					EQ: {
						m: ["U"],
						e: []
					},
					AF: {
						m: ["T", "F"],
						e: ["T", "F"]
					},
					ET: {
						m: ["T", "I", "H", "E", "Y", "W", "S", "A"],
						e: ["H", "E", "Y", "S", "A"]
					},
					AY: {
						m: ["S", "E"],
						e: ["S"]
					},
					MU: {
						m: ["S", "N", "L", "C"],
						e: ["S", "N", "L"]
					},
					UE: {
						m: ["S", "N"],
						e: ["S", "N"]
					},
					HR: {
						m: ["O", "E", "I"],
						e: ["E"]
					},
					TW: {
						m: ["O", "E"],
						e: ["O", "E"]
					},
					GI: {
						m: ["N", "V", "O", "C"],
						e: ["N", "C"]
					},
					OI: {
						m: ["N"],
						e: ["N"]
					},
					VI: {
						m: ["N", "D", "S", "C", "T", "O", "L", "E"],
						e: ["N", "D", "S", "C", "T", "L", "E"]
					},
					CU: {
						m: ["L", "R", "T", "S"],
						e: ["L", "R", "T", "S"]
					},
					FU: {
						m: ["L", "R", "N"],
						e: ["L", "R", "N"]
					},
					ED: {
						m: ["I", "U", "E"],
						e: ["E"]
					},
					QU: {
						m: ["I", "E", "A"],
						e: ["E"]
					},
					UT: {
						m: ["I", "H", "E"],
						e: ["H", "E"]
					},
					RC: {
						m: ["H", "E"],
						e: ["H", "E"]
					},
					OF: {
						m: ["F", "T"],
						e: ["F", "T"]
					},
					CL: {
						m: ["E", "A", "U", "O"],
						e: ["E"]
					},
					FT: {
						m: ["E"],
						e: ["E"]
					},
					IZ: {
						m: ["E", "A"],
						e: ["E"]
					},
					PP: {
						m: ["E", "O", "R", "L"],
						e: ["E"]
					},
					RG: {
						m: ["E", "A"],
						e: ["E"]
					},
					DU: {
						m: ["C", "S", "R", "A"],
						e: ["S", "R"]
					},
					RM: {
						m: ["A", "S", "I", "E"],
						e: ["S", "E"]
					},
					YE: {
						m: ["A", "S", "D"],
						e: ["A", "S", "D"]
					},
					RL: {
						m: ["Y", "D"],
						e: ["Y", "D"]
					},
					DO: {
						m: ["W", "N", "M", "E"],
						e: ["W", "N", "M"]
					},
					AU: {
						m: ["T", "S"],
						e: ["T", "S"]
					},
					EP: {
						m: ["T", "O", "E", "A"],
						e: ["T", "E"]
					},
					BA: {
						m: ["S", "C", "R", "N", "L"],
						e: ["S", "R", "N", "L"]
					},
					JU: {
						m: ["S"],
						e: ["S"]
					},
					RD: {
						m: ["S", "E", "I"],
						e: ["S", "E"]
					},
					RU: {
						m: ["S", "N", "C"],
						e: ["S", "N"]
					},
					OG: {
						m: ["R", "I"],
						e: []
					},
					BR: {
						m: ["O", "I", "E", "A"],
						e: ["E", "A"]
					},
					EF: {
						m: ["O", "F", "U", "T", "E"],
						e: ["F", "T", "E"]
					},
					KN: {
						m: ["O", "E"],
						e: ["O", "E"]
					},
					LS: {
						m: ["O"],
						e: ["O"]
					},
					GA: {
						m: ["N", "I", "T", "R"],
						e: ["N", "T", "R"]
					},
					PI: {
						m: ["N", "T", "R", "E", "C"],
						e: ["N", "T", "R", "E", "C"]
					},
					YI: {
						m: ["N"],
						e: ["N"]
					},
					BI: {
						m: ["L", "T", "N"],
						e: ["L", "T", "N"]
					},
					IB: {
						m: ["L", "I", "E"],
						e: ["E"]
					},
					UB: {
						m: ["L"],
						e: []
					},
					VA: {
						m: ["L", "T", "R", "N"],
						e: ["L", "T", "R", "N"]
					},
					OC: {
						m: ["K", "I", "E", "C", "A"],
						e: ["K", "E"]
					},
					IF: {
						m: ["I", "F", "E", "T"],
						e: ["F", "E", "T"]
					},
					RN: {
						m: ["I", "E", "M", "A"],
						e: ["E", "A"]
					},
					RR: {
						m: ["I", "E", "Y", "O"],
						e: ["E", "Y"]
					},
					SC: {
						m: ["H", "R", "O", "I", "A"],
						e: ["H"]
					},
					TC: {
						m: ["H"],
						e: ["H"]
					},
					CK: {
						m: ["E"],
						e: ["E"]
					},
					DG: {
						m: ["E"],
						e: ["E"]
					},
					DR: {
						m: ["E", "O", "I", "A"],
						e: ["E", "A"]
					},
					MM: {
						m: ["E", "U", "I"],
						e: ["E"]
					},
					NN: {
						m: ["E", "O", "I"],
						e: ["E", "O"]
					},
					OD: {
						m: ["E", "Y", "U"],
						e: ["E", "Y"]
					},
					RV: {
						m: ["E", "I"],
						e: ["E"]
					},
					UD: {
						m: ["E", "I"],
						e: ["E"]
					},
					XP: {
						m: ["E"],
						e: ["E"]
					},
					JE: {
						m: ["C"],
						e: []
					},
					UM: {
						m: ["B", "E"],
						e: ["E"]
					},
					EG: {
						m: ["A", "R", "I", "E"],
						e: ["E"]
					},
					DL: {
						m: ["Y", "E"],
						e: ["Y", "E"]
					},
					PH: {
						m: ["Y", "O", "I", "E"],
						e: ["Y", "O", "E"]
					},
					SL: {
						m: ["Y", "A"],
						e: ["Y"]
					},
					GO: {
						m: ["V", "T", "O"],
						e: ["T", "O"]
					},
					CC: {
						m: ["U", "O", "E"],
						e: ["E"]
					},
					LU: {
						m: ["T", "S", "M", "E", "D"],
						e: ["T", "S", "M", "E"]
					},
					OA: {
						m: ["T", "R", "D"],
						e: ["T", "R", "D"]
					},
					PU: {
						m: ["T", "R", "L", "B"],
						e: ["T", "R", "L"]
					},
					UI: {
						m: ["T", "R", "L"],
						e: ["T", "R", "L"]
					},
					YS: {
						m: ["T"],
						e: ["T"]
					},
					ZA: {
						m: ["T"],
						e: ["T"]
					},
					HU: {
						m: ["S", "R", "N", "M"],
						e: ["S", "R", "N", "M"]
					},
					MR: {
						m: ["S"],
						e: ["S"]
					},
					OE: {
						m: ["S"],
						e: ["S"]
					},
					SY: {
						m: ["S"],
						e: ["S"]
					},
					EO: {
						m: ["R", "P"],
						e: ["R", "P"]
					},
					TY: {
						m: ["P"],
						e: []
					},
					UP: {
						m: ["P", "O"],
						e: []
					},
					FL: {
						m: ["O", "E"],
						e: ["E"]
					},
					LM: {
						m: ["O"],
						e: []
					},
					NF: {
						m: ["O"],
						e: []
					},
					RP: {
						m: ["O"],
						e: []
					},
					OH: {
						m: ["N"],
						e: []
					},
					NU: {
						m: ["M"],
						e: ["M"]
					},
					XA: {
						m: ["M"],
						e: ["M"]
					},
					OB: {
						m: ["L"],
						e: []
					},
					VO: {
						m: ["L"],
						e: ["L"]
					},
					DM: {
						m: ["I"],
						e: []
					},
					GN: {
						m: ["I"],
						e: []
					},
					LD: {
						m: ["I", "E"],
						e: ["E"]
					},
					PT: {
						m: ["I"],
						e: []
					},
					SK: {
						m: ["I", "E"],
						e: ["E"]
					},
					WR: {
						m: ["I"],
						e: []
					},
					JO: {
						m: ["H"],
						e: []
					},
					LT: {
						m: ["H", "E"],
						e: ["H", "E"]
					},
					YT: {
						m: ["H"],
						e: ["H"]
					},
					UF: {
						m: ["F"],
						e: ["F"]
					},
					BJ: {
						m: ["E"],
						e: []
					},
					DD: {
						m: ["E"],
						e: ["E"]
					},
					EY: {
						m: ["E"],
						e: []
					},
					GG: {
						m: ["E"],
						e: ["E"]
					},
					GL: {
						m: ["E", "A"],
						e: ["E"]
					},
					GU: {
						m: ["E"],
						e: ["E"]
					},
					HT: {
						m: ["E"],
						e: ["E"]
					},
					LV: {
						m: ["E"],
						e: ["E"]
					},
					MS: {
						m: ["E"],
						e: ["E"]
					},
					NM: {
						m: ["E"],
						e: ["E"]
					},
					NV: {
						m: ["E"],
						e: ["E"]
					},
					OK: {
						m: ["E"],
						e: ["E"]
					},
					PM: {
						m: ["E"],
						e: ["E"]
					},
					RK: {
						m: ["E"],
						e: ["E"]
					},
					SW: {
						m: ["E"],
						e: ["E"]
					},
					TM: {
						m: ["E"],
						e: ["E"]
					},
					XC: {
						m: ["E"],
						e: ["E"]
					},
					ZE: {
						m: ["D"],
						e: ["D"]
					},
					AW: {
						m: ["A"],
						e: []
					},
					SM: {
						m: ["A"],
						e: []
					}
				};
			t.exports = {
				uid: function(e) {
					var t, n = "";
					for (e = e || 32, t = 0; e > t; t++) n += (36 * Math.random() | 0).toString(36);
					return n
				},
				names: n,
				sentence: r,
				paragraph: o
			}
		}, {}
	],
	39: [
		function() {
			!
			function(e) {
				var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
					n = "onpropertychange" in document.body,
					r = function() {
						var t = e("<div>"),
							n = !1;
						return t.on("DOMAttrModified",
								function() {
									n = !0
								}),
							t.attr("class", "foo"),
							n
					}();
				e.fn.attrchange = function(e) {
					var o, i;
					if ("function" == typeof e) return t ? (o = {
							subtree: !1,
							attributes: !0
						},
						i = new t(function(t) {
							t.forEach(function(t) {
								e.call(t.target, t.attributeName)
							})
						}), this.each(function() {
							i.observe(this, o)
						})) : r ? this.on("DOMAttrModified",
						function(t) {
							e.call(this, t.attrName)
						}) : n ? this.on("propertychange",
						function(t) {
							e.call(this, t.propertyName)
						}) : void 0
				}
			}(jQuery)
		}, {}
	],
	40: [
		function() {
			!
			function(e) {
				var t = e(window);
				e.fn.isOnScreen = function(e, n, r) {
					if (!(this.length < 1)) {
						var o = this.length > 1 ? this.eq(0) : this,
							i = o.get(0),
							a = t.width(),
							s = t.height(),
							u = n === !0 ? i.offsetWidth * i.offsetHeight : !0;
						if (r = r ? r : "both", "function" == typeof i.getBoundingClientRect) {
							var l = i.getBoundingClientRect(),
								c = l.top >= 0 && l.top < s,
								d = l.bottom > 0 && l.bottom <= s,
								f = l.left >= 0 && l.left < a,
								m = l.right > 0 && l.right <= a,
								p = e ? c || d : c && d,
								h = e ? f || m : f && m;
							if ("both" === r) return u && p && h;
							if ("vertical" === r) return u && p;
							if ("horizontal" === r) return u && h
						} else {
							var g = t.scrollTop(),
								b = g + s,
								v = t.scrollLeft(),
								y = v + a,
								w = o.offset(),
								S = w.top,
								x = S + o.height(),
								C = w.left,
								E = C + o.width(),
								T = e === !0 ? x : S,
								O = e === !0 ? S : x,
								N = e === !0 ? E : C,
								k = e === !0 ? C : E;
							if ("both" === r) return !!u && b >= O && T >= g && y >= k && N >= v;
							if ("vertical" === r) return !!u && b >= O && T >= g;
							if ("horizontal" === r) return !!u && y >= k && N >= v
						}
					}
				}
			}(jQuery)
		}, {}
	],
	41: [
		function() {
			!
			function(e) {
				e.fn.scrollToBottom = function() {
					var t = e(this);
					return e.fn.velocity ? t.children().last().velocity("scroll", {
							duration: 150,
							container: t
						}) : t.get(0).scrollTop = t.get(0).scrollHeight,
						this
				}
			}(jQuery)
		}, {}
	],
	42: [
		function() {
			!
			function(e) {
				e.fn.setCursorEnd = function() {
					var e, t;
					return document.createRange ? (e = document.createRange(), e.selectNodeContents(this[0]), e.collapse(!1), t = window.getSelection(), t.removeAllRanges(), t.addRange(e)) : document.selection && (e = document.body.createTextRange(), e.moveToElementText(this[0]), e.collapse(!1), e.select()),
						this
				}
			}(jQuery)
		}, {}
	],
	43: [
		function(e, t) {
			t.exports = {
				hashCode: function(e) {
					var t, n = 0;
					if (0 === e.length) return n;
					for (var r = 0; r < e.length; r++) t = e.charCodeAt(r),
						n = (n << 5) - n + t,
						n &= n;
					return n
				},
				stripQueryParam: function(e, t) {
					var n, r, o = e.split("?");
					if (o.length >= 2) {
						n = encodeURIComponent(t) + "=",
							r = o[1].split(/[&]/g);
						for (var i = r.length; i-- > 0;) - 1 !== r[i].lastIndexOf(n, 0) && r.splice(i, 1);
						return e = o[0] + "?" + r.join("&"),
							e.replace(/[?&]$/, "")
					}
					return e
				}
			}
		}, {}
	],
	44: [
		function() {
			$(function() {
				var e = 1e3,
					t = 500,
					n = 20,
					r = $("body"),
					o = 0,
					i = 0,
					a = 0,
					s = "onpointerup" in document,
					u = s ? "pointerdown" : "touchstart",
					l = s ? "pointermove" : "touchmove",
					c = s ? "pointerup" : "touchend";
				r.bind(u,
					function(e) {
						a = (new Date).getTime(),
							o = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
							i = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY
					}).bind(c,
					function() {
						a = 0,
							o = 0,
							i = 0
					}).bind(l,
					function(r) {
						var s = r.originalEvent.touches ? r.originalEvent.touches[0].pageX : r.pageX,
							u = r.originalEvent.touches ? r.originalEvent.touches[0].pageY : r.pageY,
							l = 0 === o ? 0 : Math.abs(s - o),
							c = 0 === i ? 0 : Math.abs(u - i),
							d = (new Date).getTime();
						0 !== a && e > d - a && l > c && t > l && l > n && (s > o ? $.event.trigger({
							type: "swiperight",
							time: new Date
						}) : o > s && $.event.trigger({
							type: "swipeleft",
							time: new Date
						}), a = 0, o = 0)
					})
			})
		}, {}
	],
	45: [
		function(e, t) {
			function n(e, t) {
				var n = {};
				return /^\//.test(e) && (e = e.substr(1, e.length)),
					/^\?/.test(t) && (t = t.substr(1, t.length)),
					t.split("&").map(function(e) {
						var t;
						e && (t = e.split("="), "q" === t[0] ? n.query = t[1] : n[t[0]] = t[1])
					}),
					n.mode = "normal",
					e = e.split("/"),
					"me" == e[0] ? "edit" == e[1] ? (n.mode = "pref", n.tab || (n.tab = "profile")) : n.mode = "home" : (n.roomName = o(e[0]).sanitized, "edit" == e[1] ? (n.mode = "conf", n.tab || (n.tab = "general")) : (n.mode = "normal", e[1] && (n.thread = e[1] || ""))),
					n.time && (n.time = new Date(n.time).getTime()),
					n.view || (n.view = "normal"),
					a.forEach(function(e) {
						if (n[e] && (n[e] = decodeURIComponent(n[e]), i.indexOf(e) >= 0)) try {
							n[e] = JSON.parse(n[e])
						} catch (e) {
							n[e] = null
						}
					}),
					n
			}

			function r(e) {
				var t, n = [];
				switch (e.mode) {
					case "conf":
						t = "/" + (e.roomName ? e.roomName + "/edit" : "me");
						break;
					case "pref":
						t = "/me/edit";
						break;
					case "search":
						t = e.roomName ? "/" + e.roomName : "",
							n.push("q=" + encodeURIComponent(e.query));
						break;
					case "home":
						t = "/me";
						break;
					default:
						t = e.roomName ? "/" + e.roomName + (e.thread ? "/" + e.thread : "") : ""
				}
				return e.time && n.push("time=" + new Date(e.time).toISOString()),
					a.forEach(function(t) {
						var r = e[t];
						i.indexOf(t) >= 0 && (r = JSON.stringify(e[t])),
							t in e && null !== r && "undefined" != typeof r && n.push(t + "=" + encodeURIComponent(r))
					}),
					t + (n.length ? "?" + n.join("&") : "")
			}
			var o = e("../lib/validate.js"),
				i = ["webview", "embed"],
				a = ["tab", "dialog", "platform", "webview", "embed"];
			t.exports = {
				build: r,
				parse: n
			}
		}, {
			"../lib/validate.js": 46
		}
	],
	46: [
		function(e, t) {
			var n = function(e) {
				var t = "string" == typeof e ? e : "",
					n = "scrollback",
					r = ["img", "css", "sdk"],
					o = {
						isValid: !0,
						sanitized: t,
						error: !1
					};
				return t = t.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/^-+|-+$/, "").trim(),
					/^[0-9]*$/.test(t) && (t = ""),
					t ? t.length < 3 ? t += Array(4 - t.length).join("-") : r.forEach(function(e) {
						t === e && (t = n, o.error = "name cannot be a reserved word")
					}) : t = n,
					t = t.substring(0, 32),
					o.sanitized = t,
					"string" != typeof e ? o.error = "name is of invalid type!" : "" === e ? o.error = "name cannot be empty!" : /[^0-9a-z\-]/.test(e) ? o.error = "name can contain only lowercase letters, digits and hyphens (-)!" : e.length < 3 ? o.error = "name must be at least 3 characters long!" : e.length > 32 ? o.error = "name cannot be longer than 32 characters!" : /^[^a-z0-9]/.test(e) ? o.error = "name must start with a lower case letter or number!" : /^[0-9]+$/.test(e) ? o.error = "name cannot contain only numbers!" : e !== t && (o.error = "name is invalid!"),
					o.error && (o.isValid = !1),
					o
			};
			t.exports = n
		}, {}
	],
	47: [
		function(e, t) {
			"use strict";

			function n(e) {
				this.d = e || []
			}
			n.prototype.find = function(e, t, n, r) {
					var o;
					return "undefined" == typeof n ? this.find(e, t, 0, this.d.length) : t ? n >= r ? n : (o = (n + r) / 2 | 0, this.d[o] && this.d[o][e] < t ? this.find(e, t, o + 1, r) : this.d[o - 1] && this.d[o - 1][e] >= t ? this.find(e, t, n, o - 1) : o) : r
				},
				n.prototype.put = function(e, t) {
					if (t.length) {
						for (var n = t[0][e], r = t[t.length - 1][e], o = this.find(e, n), i = this.find(e, r); this.d[o - 1] && this.d[o - 1][e] == n;) o--;
						for (; this.d[i] && this.d[i][e] == r;) i++;
						(!this.d[o - 1] && this.d[o] && "result-start" != this.d[o].type || this.d[o - 1] && "result-end" != this.d[o - 1].type && "result-start" == t[0].type) && t.shift(), (!this.d[i] && this.d[i - 1] && "result-end" != this.d[i - 1].type || this.d[i] && "result-start" != this.d[i].type && "result-end" == t[t.length - 1].type) && t.pop(), [].splice.apply(this.d, [o, i - o].concat(t))
					}
				},
				n.prototype.get = function(e, t) {
					function n(e, t, n) {
						function r() {
							return "result-start" === i.type ? s ? (m.push({
								type: "missing",
								endTime: i.time
							}), 0) : null : "result-end" === i.type ? s ? a && "result-start" === a.type ? (m.push({
								type: "missing",
								startTime: i.time,
								endTime: a.time
							}), 1) : (m.push({
								type: "missing",
								startTime: i.time
							}), 0) : null : (m.push(i), 0)
						}

						function o() {
							return "result-start" === i.type ? s ? c && "result-end" === c.type ? (m.push({
								type: "missing",
								startTime: c.time,
								endTime: i.time
							}), -1) : (m.push({
								type: "missing",
								startTime: i.time
							}), 0) : null : "result-end" === i.type ? s ? (m.push({
								type: "missing",
								startTime: i.time
							}), 0) : null : (m.push(i), 0)
						}
						var i, a, c, d, f, m = [];
						for (d = e; d >= 0 && u > d && m.length < t; d += n) {
							if (i = l.d[d], a = l.d[d + 1], c = l.d[d - 1], f = 0, "object" != typeof i) throw new Error("ArrayCache contains non-object");
							if (f = n > 0 ? r() : o(), null === f) return null;
							d += f
						}
						return 0 > n ? m.reverse() : m
					}
					if (!t.hasOwnProperty(e)) throw new Error("ERR_ARRAYCACHE_INDEX_MISMATCH");
					var r, o = t[e],
						i = Math.max(0, t.before || 0),
						a = Math.max(0, t.after || 0),
						s = t.partials || !1,
						u = this.d.length,
						l = this;
					if (r = o ? this.find(e, o) : u, i) {
						for (; this.d[r] && this.d[r][e] == o;) r++;
						return n(r - 1, i, -1)
					}
					if (a) {
						for (; this.d[r] && this.d[r][e] == o;) r--;
						return n(r + 1, a, 1)
					}
					return null
				},
				t.exports = n
		}, {}
	],
	48: [
		function(e, t) {
			function n(e) {
				for (var t = e.length,
					n = e[t - 1].time, r = t - 1; r > 0; r--)
					if ("text" === e[r].type) {
						n = e[r].time;
						break
					}
				return n
			}

			function r(e, t, n) {
				var r;
				e.forEach(function(e) {
					r = a.cache[t].find(n, e.time),
						e && a.cache[t].d[r] && e.id === a.cache[t].d[r].id && (a.cache[t].d[r] = e)
				})
			}
			var o = e("./spaceManager.js"),
				i = e("./ArrayCache.js");
			window.backTimes = {};
			var a;
			t.exports = {
				cache: {},
				saveArrayCache: function(e) {
					o.set(e, this.cache[e].d)
				},
				loadArrayCache: function(e) {
					var t = o.get(e);
					this.cache[e] = new i(null !== t ? t : [])
				},
				start: function(e, t, n, r) {
					var o = {
						type: "result-start",
						time: n,
						endType: e
					};
					if (this.loadArrayCache(t), "begin" === r) try {
						"result-start" !== this.cache[t][0].type && this.cache[t].d.unshift(o)
					} catch (i) {
						this.cache[t].d.unshift(o)
					} else try {
						"result-start" !== this.cache[t].d[this.cache[t].d.length - 1].type && this.cache[t].d.push(o)
					} catch (i) {
						this.cache[t].d.push(o)
					}
					this.saveArrayCache(t)
				},
				end: function(e, t, n, r) {
					var o = {
							type: "result-end",
							time: n,
							endType: e
						},
						i = {
							type: "result-start",
							time: n,
							endType: e
						};
					if (this.loadArrayCache(t), "begin" === r) try {
						"result-end" !== this.cache[t][0].type && this.cache[t].d.unshift(o)
					} catch (a) {
						this.cache[t].d.unshift(o)
					} else try {
						var s = this.cache[t].d[this.cache[t].d.length - 1];
						"result-start" === s.type ? (this.cache[t].d.pop(), this.cache[t].push(i)) : "result-end" !== s.type && this.cache[t].d.push(o)
					} catch (a) {}
					this.saveArrayCache(t)
				},
				generateLSKey: function() {
					var e = Array.prototype.slice.call(arguments, 0);
					if (e) {
						var t = e.map(function(e) {
							return "string" == typeof e ? e.toLowerCase() : void 0
						});
						return t.join("_")
					}
				},
				updateArrayCache: function(e, t, o) {
					var i = this.cache[e].d,
						s = n(i);
					a = this,
						"undefined" != typeof s && libsb.emit("getTexts", {
								to: t,
								updateTime: s,
								after: 256
							},
							function(t, n) {
								r(n.results, e, o)
							})
				}
			}
		}, {
			"./ArrayCache.js": 47,
			"./spaceManager.js": 55
		}
	],
	49: [
		function(e, t) {
			t.exports = function() {
				var t = e("./arrayCacheOps.js"),
					n = e("./objCacheOps.js"),
					r = e("../client-config.js");
				e("./textsCaching.js")(t),
					e("./threadsCaching.js")(t),
					e("./occupantCaching.js")(t),
					e("./roomsCaching.js")(n),
					e("./usersCaching.js")(n),
					e("./sessionCaching.js")(n),
					e("./quick-settings.js")(n);
				var o = "version" + r.localStorage.version;
				if (localStorage.hasOwnProperty(o)) void 0;
				else {
					void 0;
					for (var i in localStorage) "session" !== i && delete localStorage[i];
					localStorage[o] = !0
				}
			}
		}, {
			"../client-config.js": 8,
			"./arrayCacheOps.js": 48,
			"./objCacheOps.js": 50,
			"./occupantCaching.js": 51,
			"./quick-settings.js": 52,
			"./roomsCaching.js": 53,
			"./sessionCaching.js": 54,
			"./textsCaching.js": 56,
			"./threadsCaching.js": 57,
			"./usersCaching.js": 58
		}
	],
	50: [
		function(e, t) {
			var n, r = e("./spaceManager.js"),
				o = {},
				i = {},
				a = {},
				s = !1,
				u = !1;
			"undefined" == typeof window && (s = !0, u = !0),
				t.exports = {
					rooms: {},
					populateMembers: function(e) {
						var t;
						n = this,
							libsb.emit("getUsers", {
									memberOf: e,
									noCache: !0
								},
								function(r, o) {
									t = o.results,
										n.putMembers(e, t, !0),
										n.deletePersistence(),
										n.saveUsers(),
										s = !0
								})
					},
					populateOccupants: function(e) {
						var t;
						libsb.emit("getUsers", {
								occupantOf: e,
								noCache: !0
							},
							function(r, o) {
								t = o.results,
									n.putOccupants(e, t, !0),
									n.deletePersistence(),
									n.saveUsers(),
									u = !0
							})
					},
					hasKnowledgeOf: function(e, t) {
						switch (e) {
							case "occupants":
								if (!o.hasOwnProperty(t)) return !1;
								break;
							case "members":
								if (!a.hasOwnProperty(t)) return !1
						}
						return !0
					},
					getMembers: function(e, t, n) {
						var r = [];
						if (this.loadUsers(), "undefined" != typeof e) {
							if (null !== t) / ^guest - /.test(t) && (r = []), r = a.hasOwnProperty(e) && a[e].hasOwnProperty(t) ? [a[e][t]] : [];
							else {
								var o = a[e];
								for (var i in o) r.push(a[e][i])
							}
							n(s === !0 ? r : null)
						}
					},
					getOccupants: function(e, t, n) {
						var r = [];
						if (this.loadUsers(), null !== t) r = o[e].hasOwnProperty(t) ? [i[t.id]] : [];
						else
							for (var a in o[e]) r.push(i[a]);
						n(u === !0 ? r : null)
					},
					putMembers: function(e, t, n) {
						"string" == typeof e && (n === !0 && delete a[e], t instanceof Array || (t = [t]), t.forEach(function(t) {
							a.hasOwnProperty(e) ? a[e][t.id] = t : (a[e] = {}, a[e][t.id] = t)
						}), this.saveUsers())
					},
					putOccupants: function(e, t, n) {
						"string" == typeof e && (n === !0 && delete o[e], t instanceof Array || (t = "undefined" != typeof t ? [t] : []), t.forEach(function(t) {
							i.hasOwnProperty(t) || (i[t.id] = t), o.hasOwnProperty(e) || (o[e] = {}), o[e][t.id] = !0
						}), this.saveUsers())
					},
					removeMembers: function(e, t) {
						t instanceof Array || (t = [t]), t.forEach(function(t) {
							delete a[e][t.id]
						}), this.saveUsers()
					},
					removeOccupants: function(e, t) {
						t instanceof Array || (t = [t]), t.forEach(function(t) {
							delete o[e][t.id]
						}), this.saveUsers()
					},
					loadUsers: function() {
						var e;
						e = r.get("roomOccupantList"), null !== e && (o = e), e = r.get("roomMemberList"), null !== e && (a = e), e = r.get("globalOccupantList"), null !== e && (i = e)
					},
					saveUsers: function() {
						r.set("roomOccupantList", o), r.set("roomMemberList", a), r.set("globalOccupantList", i)
					},
					saveRooms: function() {
						r.set("rooms", this.rooms)
					},
					loadRooms: function() {
						var e = r.get("rooms");
						null !== e && (this.rooms = e)
					},
					deletePersistence: function() {
						r.clear("roomOccupantList", "roomMemberList", "globalOccupantList")
					},
					delRoomTimeOut: function(e) {
						var t = 10;
						clearTimeout(window.timeoutMapping[e]), window.timeoutMapping[e] = setTimeout(function() {
							this.cache && this.cache.rooms && (delete this.cache.rooms[e], this.save())
						}, 60 * t * 1e3)
					}
				}
		}, {
			"./spaceManager.js ": 55
		}
	],
	51: [
		function(e, t) {
			t.exports = function(e) {
				libsb.on("back - dn ", function(t, n) {
					if (t.from !== libsb.user.id) return n();
					window.backTimes[t.to] = t.time;
					var r, o = e.generateLSKey(t.to, "texts "),
						i = e.generateLSKey(t.to, "threads "),
						a = t.to,
						s = new RegExp(a + " (_. + ) ? _texts ");
					for (r in localStorage) s.test(r) && e.loadArrayCache(r);
					e.loadArrayCache(i), e.loadArrayCache(o);
					var u = e.cache[o].d,
						l = u[u.length - 1],
						c = l ? l.time : null;
					e.end("time ", o, c);
					for (r in e.cache) s.test(r) && e.end("time ", r, c);
					n()
				}, 1e3), libsb.on("back - dn ", function(t, n) {
					if (t.from !== libsb.user.id) return n();
					var r = e.generateLSKey(t.to, "texts ");
					e.start("time ", r, t.time);
					var o = t.to,
						i = new RegExp(o + " (_. + ) ? _texts ");
					for (var a in e.cache) i.test(a) && e.start("time ", a, t.time);
					e.updateArrayCache(r, t.to, "time "), n()
				}, 500), libsb.on("away - dn ", function(t, n) {
					if (t.from !== libsb.user.id) return n();
					var r = e.generateLSKey(t.to, "texts ");
					e.end("time ", r, t.time);
					var o = t.to,
						i = new RegExp(o + " (_. + ) ? _texts ");
					for (var a in e.cache) i.test(a) && e.end("time ", a, t.time);
					n()
				}, 500)
			}
		}, {}
	],
	52: [
		function(e, t) {
			var n = e(". / spaceManager.js "),
				r = ["shownActions ", "notifications "];
			t.exports = function() {
				libsb.on("user - up ", function(e, t) {
					var o = n.get("quick - settings ", !1);
					o || (o = {}), r.forEach(/^guest-/.test(e.user.id) ? function(t) {
						libsb.user.params || (libsb.user.params = {}), e.user.params[t] && (libsb.user.params[t] = e.user.params[t], o[t] = libsb.user.params[t])
					} : function(t) {
						!e.user.params[t] && o[t] && (e.user.params[t] = o[t])
					}), n.set("quick - settings ", o, !1), t()
				}, 100), libsb.on("user - dn ", function(e, t) {
					var o = {};
					libsb.user.params || (libsb.user.params = {}), r.forEach(function(t) {
						e.user.params[t] && (o[t] = e.user.params[t])
					}), n.set("user ", libsb.user, !1), n.set("quick - settings ", o, !1), t()
				}, 100), libsb.on("init - dn ", function(e, t) {
					var o = n.get("quick - settings ", !1);
					return o || (o = {}), libsb.user.params || (libsb.user.params = {}), e.user.id ? (r.forEach(function(t) {
						e.user.params[t] ? o[t] = e.user.params[t] : o[t] && (e.user.params[t] = o[t])
					}), n.set("user ", libsb.user, !1), n.set("quick - settings ", o, !1), void t()) : t()
				}, 1e3)
			}
		}, {
			". / spaceManager.js ": 55
		}
	],
	53: [
		function(e, t) {
			t.exports = function(e) {
				e.loadRooms(), libsb.on("room - dn ", function(t, n) {
					var r = t.room;
					e.rooms = e.rooms || {}, e.rooms[r.id] = r, e.saveRooms(), e.delRoomTimeOut(r.id), n()
				}, 500), libsb.on("getRooms ", function(t, n) {
					if (t.cachedRoom === !1) return n();
					if (!t.hasOwnProperty("hasMember ")) {
						if (!t.ref) return n();
						var r = e.rooms || {};
						return r.hasOwnProperty(t.ref) && (t.results = [r[t.ref]]), n()
					}
					return libsb.isInited === !0 ? n() : void libsb.on("init - dn ", function(e, t) {
						setTimeout(function() {
							return n()
						}, 0), t()
					}, 100)
				}, 400), libsb.on("getRooms ", function(t, n) {
					if (!t.ref) return n();
					var r = {};
					r = e.rooms || {}, t.results && t.results.forEach(function(t) {
						r[t.id] = t, e.delRoomTimeOut(t.id)
					}), e.rooms = r, e.saveRooms(), n()
				}, 8)
			}
		}, {}
	],
	54: [
		function(e, t) {
			var n = e(".. / lib / generate "),
				r = e(". / spaceManager.js ");
			window.timeoutMapping = {};
			var o = r.get("user ", !1);
			null !== o && (libsb.user = o), t.exports = function(e) {
				libsb.on("init - up ", function(e, t) {
					var o;
					return localStorage.hasOwnProperty("session ") && (libsb.session = o = r.get("session ", !1)), o || (o = "web: //" + n.uid(), libsb.session = o, r.set("session", o, !1)), e.session = o, t()
				}, "validation"), libsb.on("user-dn", function(e, t) {
					libsb.user = e.user, t()
				}, 1e3), libsb.on("init-dn", function(t, n) {
					if (t.auth && !t.user.id) return n();
					var o = t.user;
					o.id && (libsb.user = o);
					var i = t.occupantOf,
						a = t.memberOf,
						s = {};
					localStorage.hasOwnProperty("rooms") && (s = JSON.parse(localStorage.rooms)), t.occupantOf.forEach(function(t) {
						s[t.id] = t, e.delRoomTimeOut(t.id)
					}), t.memberOf.forEach(function(t) {
						s[t.id] = t, e.delRoomTimeOut(t.id)
					}), r.set("user", o, !1), r.set("occupantOf", i, !1), r.set("memberOf", a, !1), r.set("rooms", s, !1), n()
				}, 500), libsb.on("logout", function(e, t) {
					delete libsb.session, delete libsb.user, localStorage.clear(), t()
				}, 10)
			}
		}, {
			"../lib/generate": 38,
			"./spaceManager.js": 55
		}
	],
	55: [
		function(e, t) {
			var n, r = e("underscore");
			n = "undefined" == typeof window ? {} : window.localStorage;
			var o = {};
			n.hasOwnProperty("LRU") && (o = JSON.parse(n.LRU)), t.exports = {
				backOffVal: 1,
				set: function(e, t, r) {
					t = "string" != typeof t ? JSON.stringify(t) : t;
					try {
						n[e] = t
					} catch (o) {
						this.clear(), this.set(e, t)
					}
					r !== !1 && this.touch(e)
				},
				get: function(e, t) {
					if (t !== !1 && this.touch(e), !n.hasOwnProperty(e)) return null;
					try {
						return JSON.parse(n[e])
					} catch (r) {
						return n[e]
					}
				},
				touch: function(e) {
					o[e] = (new Date).getTime();
					try {
						n.LRU = JSON.stringify(o)
					} catch (t) {
						this.clear(), this.touch(e)
					}
				},
				clear: function() {
					if (arguments.length > 0) {
						var e = Array.prototype.slice.call(arguments, 0);
						return void e.forEach(function(e) {
							delete n[e]
						})
					}
					var t = this;
					1 / 0 === t.backOffVal && (t.backOffVal = 1), r.times(t.backOffVal, function() {
						var e, r = 1 / 0;
						for (var i in o) o[i] < r && (r = o[i], e = i);
						1 / 0 != r && (delete o[e], delete n[e]), t.backOffVal = 2 * t.backOffVal
					})
				}
			}
		}, {
			underscore: 59
		}
	],
	56: [
		function(e, t) {
			t.exports = function(e) {
				libsb.on("getTexts", function(t, n) {
					var r;
					if (t.hasOwnProperty("ref") && !t.hasOwnProperty("time")) return n();
					if (t.hasOwnProperty("updateTime")) return n();
					if (r = t.thread ? e.generateLSKey(t.to, t.thread, "texts") : e.generateLSKey(t.to, "texts"), e.cache.hasOwnProperty(r) || e.loadArrayCache(r), !e.cache[r].d.length) return n();
					if (null === t.time && "online" === currentState.connectionStatus) return n();
					if ("online" !== currentState.connectionStatus && (t.partials = !0), t.thread) return n();
					var o = e.cache[r].get("time", t);
					return o && o.length ? (t.results = o, t.resultSource = "localStorage", n()) : n()
				}, 200), libsb.on("getTexts", function(t, n) {
					var r = t.results;
					if (!t.results || !t.results.length || "localStorage" == t.resultSource) return n();
					if (r = t.results.slice(0), r && r.length > 0) {
						t.before ? (r.length === t.before && r.unshift({
							type: "result-start",
							time: r[0].time,
							endtype: "limit"
						}), r.push({
							type: "result-end",
							endtype: "time",
							time: t.time
						})) : t.after && (r.length === t.after && r.push({
							type: "result-end",
							time: r[r.length - 1].time,
							endtype: "limit"
						}), r.unshift({
							type: "result-start",
							endtype: "time",
							time: t.time
						}));
						var o = e.generateLSKey(t.to, "texts");
						if (e.cache.hasOwnProperty(o) || e.loadArrayCache(o), e.cache[o].put("time", r), t.thread) {
							var i = e.generateLSKey(t.to, t.thread, "texts");
							e.cache.hasOwnProperty(i) || e.loadArrayCache(i), e.cache[i].put("time", r), e.saveArrayCache(i)
						}
						e.saveArrayCache(o)
					}
					n()
				}, 8), libsb.on("text-dn", function(t, n) {
					var r = e.generateLSKey(t.to, "texts");
					e.loadArrayCache(r);
					var o = e.cache[r].d[e.cache[r].length - 1];
					if (o && "result-end" === o.type && e.start("time", r, window.backTimes[t.to]), e.cache[r].d.push(t), e.saveArrayCache(r), t.threads && t.threads.forEach(function(n) {
						r = e.generateLSKey(t.to, n.id, "texts"), e.loadArrayCache(r), o = e.cache[r].d[e.cache[r].length - 1], o && "result-end" !== o.type || e.start("time", r, window.backTimes[t.to]), e.cache[r].d.push(t), e.saveArrayCache(r)
					}), t.labels && t.labels.hasOwnProperty("startOfThread") && 1 === t.labels.startOfThread) {
						var i = e.generateLSKey(t.to, "threads");
						e.loadArrayCache(i);
						var a = e.cache[i].d[e.cache[i].d.length - 1];
						a && "result-end" !== a.type || e.start("startTime", i, window.backTimes[t.to]);
						var s = t.threads[0];
						s.startTime = t.time, e.cache[i].d.push(s), e.saveArrayCache(i)
					}
					n()
				}, 500)
			}
		}, {}
	],
	57: [
		function(e, t) {
			t.exports = function(e) {
				libsb.on("getThreads", function(t, n) {
					if (t.hasOwnProperty("ref") && !t.hasOwnProperty("time")) return n();
					if (t.hasOwnProperty("q") || t.hasOwnProperty("noCache") || t.hasOwnProperty("updateTime")) return n();
					t.hasOwnProperty("time") && (t.startTime = t.time);
					var r = e.generateLSKey(t.to, "threads");
					if (e.cache.hasOwnProperty(r) || e.loadArrayCache(r), !e.cache[r].d.length) return n();
					if (null === t.time && "online" !== currentState.connectionStatus) return n();
					"online" !== currentState.connectionStatus && (t.partials = !0);
					var o = e.cache[r].get("startTime", t);
					return o && o.length ? (t.results = o, t.resultSource = "localStorage", n()) : n()
				}, 200), libsb.on("getThreads", function(t, n) {
					if (!t.results || "localStorage" === t.resultSource) return n();
					var r = t.results.slice(0);
					if (r && r.length > 0) {
						t.before ? (r.length === t.before && r.unshift({
							type: "result-start",
							startTime: r[0].startTime,
							endtype: "limit"
						}), r.push({
							type: "result-end",
							endtype: "time",
							startTime: t.time
						})) : t.after && (r.length === t.after && r.push({
							type: "result-end",
							startTime: r[r.length - 1].startTime,
							endtype: "limit"
						}), r.unshift({
							type: "result-start",
							endtype: "time",
							startTime: t.time
						}));
						var o = e.generateLSKey(t.to, "threads");
						e.cache.hasOwnProperty(o) || e.loadArrayCache(o), e.cache[o].put("startTime", r), e.saveArrayCache(o)
					}
					n()
				}, 8)
			}
		}, {}
	],
	58: [
		function(e, t) {
			t.exports = function(e) {
				libsb.on("getUsers", function(t, n) {
					if (t.noCache && t.noCache === !0) return n();
					if (t.hasOwnProperty("memberOf")) {
						if (!e.hasKnowledgeOf("members", t.memberOf)) return n();
						t.hasOwnProperty("ref") ? e.getMembers(t.memberOf, t.ref, function(e) {
							return null === e ? n() : (t.results = e, t.resultSource = "localStorage", void n())
						}) : e.getMembers(t.memberOf, null, function(e) {
							return null === e ? n() : (t.results = e, t.resultSource = "localStorage", void n())
						})
					} else if (t.hasOwnProperty("occupantOf")) {
						if (!e.hasKnowledgeOf("occupants", t.occupantOf)) return n();
						e.getOccupants(t.occupantOf, null, function(e) {
							return null === e ? n() : (t.results = e, t.resultSource = "localStorage", void n())
						})
					} else t.hasOwnProperty("ref"), n()
				}, 100), libsb.on("getUsers", function(t, n) {
					return t.resultSource && "localStorage" === t.resultSource ? n() : (t.hasOwnProperty("memberOf") ? e.putMembers(t.memberOf, t.results) : t.hasOwnProperty("occupantOf") && e.putOccupants(t.occupantOf, t.results), void n())
				}, 8), libsb.on("join-dn", function(t, n) {
					var r = $.extend({}, t.user);
					r.role = t.role, e.putMembers(t.to, r), n()
				}, 900), libsb.on("part-dn", function(t, n) {
					var r = $.extend({}, t.user);
					r.role = t.role, e.removeMembers(t.to, r), n()
				}, 900), libsb.on("away-dn", function(t, n) {
					t.from === libsb.user.id && e.saveUsers(), e.removeOccupants(t.to, t.user), n()
				}, 900), libsb.on("back-dn", function(t, n) {
					t.from === libsb.user.id ? (e.populateMembers(t.to), e.populateOccupants(t.to), e.loadUsers(), "undefined" == typeof t.user ? (t.user = libsb.user, libsb.emit("getUsers", {
						memberOf: t.to,
						ref: t.from
					}, function(r, o) {
						var i;
						o.results && o.results[0] && (i = o.results[0].role), t.user.role = i, e.putOccupants(t.to, t.user), n()
					})) : (e.putOccupants(t.to, t.user), n())) : (e.putOccupants(t.to, t.user), n())
				}, 900), libsb.on("room-dn", function(t, n) {
					var r;
					t.from === libsb.user.id && (r = $.extend(!0, {}, libsb.user), r.role = "owner", e.putMembers(t.to, r)), n()
				}, 100), libsb.on("init-dn", function(t, n) {
					e.deletePersistence(), e.populateMembers(currentState.roomName), e.populateOccupants(currentState.roomName), n()
				}, 500)
			}
		}, {}
	],
	59: [
		function(e, t, n) {
			(function() {
				var e = this,
					r = e._,
					o = Array.prototype,
					i = Object.prototype,
					a = Function.prototype,
					s = o.push,
					u = o.slice,
					l = o.concat,
					c = i.toString,
					d = i.hasOwnProperty,
					f = Array.isArray,
					m = Object.keys,
					p = a.bind,
					h = function(e) {
						return e instanceof h ? e : this instanceof h ? void(this._wrapped = e) : new h(e)
					};
				"undefined" != typeof n ? ("undefined" != typeof t && t.exports && (n = t.exports = h), n._ = h) : e._ = h, h.VERSION = "1.7.0";
				var g = function(e, t, n) {
					if (void 0 === t) return e;
					switch (null == n ? 3 : n) {
						case 1:
							return function(n) {
								return e.call(t, n)
							};
						case 2:
							return function(n, r) {
								return e.call(t, n, r)
							};
						case 3:
							return function(n, r, o) {
								return e.call(t, n, r, o)
							};
						case 4:
							return function(n, r, o, i) {
								return e.call(t, n, r, o, i)
							}
					}
					return function() {
						return e.apply(t, arguments)
					}
				};
				h.iteratee = function(e, t, n) {
					return null == e ? h.identity : h.isFunction(e) ? g(e, t, n) : h.isObject(e) ? h.matches(e) : h.property(e)
				}, h.each = h.forEach = function(e, t, n) {
					if (null == e) return e;
					t = g(t, n);
					var r, o = e.length;
					if (o === +o)
						for (r = 0; o > r; r++) t(e[r], r, e);
					else {
						var i = h.keys(e);
						for (r = 0, o = i.length; o > r; r++) t(e[i[r]], i[r], e)
					}
					return e
				}, h.map = h.collect = function(e, t, n) {
					if (null == e) return [];
					t = h.iteratee(t, n);
					for (var r, o = e.length !== +e.length && h.keys(e), i = (o || e).length, a = Array(i), s = 0; i > s; s++) r = o ? o[s] : s, a[s] = t(e[r], r, e);
					return a
				};
				var b = "Reduce of empty array with no initial value";
				h.reduce = h.foldl = h.inject = function(e, t, n, r) {
					null == e && (e = []), t = g(t, r, 4);
					var o, i = e.length !== +e.length && h.keys(e),
						a = (i || e).length,
						s = 0;
					if (arguments.length < 3) {
						if (!a) throw new TypeError(b);
						n = e[i ? i[s++] : s++]
					}
					for (; a > s; s++) o = i ? i[s] : s, n = t(n, e[o], o, e);
					return n
				}, h.reduceRight = h.foldr = function(e, t, n, r) {
					null == e && (e = []), t = g(t, r, 4);
					var o, i = e.length !== +e.length && h.keys(e),
						a = (i || e).length;
					if (arguments.length < 3) {
						if (!a) throw new TypeError(b);
						n = e[i ? i[--a] : --a]
					}
					for (; a--;) o = i ? i[a] : a, n = t(n, e[o], o, e);
					return n
				}, h.find = h.detect = function(e, t, n) {
					var r;
					return t = h.iteratee(t, n), h.some(e, function(e, n, o) {
						return t(e, n, o) ? (r = e, !0) : void 0
					}), r
				}, h.filter = h.select = function(e, t, n) {
					var r = [];
					return null == e ? r : (t = h.iteratee(t, n), h.each(e, function(e, n, o) {
						t(e, n, o) && r.push(e)
					}), r)
				}, h.reject = function(e, t, n) {
					return h.filter(e, h.negate(h.iteratee(t)), n)
				}, h.every = h.all = function(e, t, n) {
					if (null == e) return !0;
					t = h.iteratee(t, n);
					var r, o, i = e.length !== +e.length && h.keys(e),
						a = (i || e).length;
					for (r = 0; a > r; r++)
						if (o = i ? i[r] : r, !t(e[o], o, e)) return !1;
					return !0
				}, h.some = h.any = function(e, t, n) {
					if (null == e) return !1;
					t = h.iteratee(t, n);
					var r, o, i = e.length !== +e.length && h.keys(e),
						a = (i || e).length;
					for (r = 0; a > r; r++)
						if (o = i ? i[r] : r, t(e[o], o, e)) return !0;
					return !1
				}, h.contains = h.include = function(e, t) {
					return null == e ? !1 : (e.length !== +e.length && (e = h.values(e)), h.indexOf(e, t) >= 0)
				}, h.invoke = function(e, t) {
					var n = u.call(arguments, 2),
						r = h.isFunction(t);
					return h.map(e, function(e) {
						return (r ? t : e[t]).apply(e, n)
					})
				}, h.pluck = function(e, t) {
					return h.map(e, h.property(t))
				}, h.where = function(e, t) {
					return h.filter(e, h.matches(t))
				}, h.findWhere = function(e, t) {
					return h.find(e, h.matches(t))
				}, h.max = function(e, t, n) {
					var r, o, i = -1 / 0,
						a = -1 / 0;
					if (null == t && null != e) {
						e = e.length === +e.length ? e : h.values(e);
						for (var s = 0, u = e.length; u > s; s++) r = e[s], r > i && (i = r)
					} else t = h.iteratee(t, n), h.each(e, function(e, n, r) {
						o = t(e, n, r), (o > a || o === -1 / 0 && i === -1 / 0) && (i = e, a = o)
					});
					return i
				}, h.min = function(e, t, n) {
					var r, o, i = 1 / 0,
						a = 1 / 0;
					if (null == t && null != e) {
						e = e.length === +e.length ? e : h.values(e);
						for (var s = 0, u = e.length; u > s; s++) r = e[s], i > r && (i = r)
					} else t = h.iteratee(t, n), h.each(e, function(e, n, r) {
						o = t(e, n, r), (a > o || 1 / 0 === o && 1 / 0 === i) && (i = e, a = o)
					});
					return i
				}, h.shuffle = function(e) {
					for (var t, n = e && e.length === +e.length ? e : h.values(e), r = n.length, o = Array(r), i = 0; r > i; i++) t = h.random(0, i), t !== i && (o[i] = o[t]), o[t] = n[i];
					return o
				}, h.sample = function(e, t, n) {
					return null == t || n ? (e.length !== +e.length && (e = h.values(e)), e[h.random(e.length - 1)]) : h.shuffle(e).slice(0, Math.max(0, t))
				}, h.sortBy = function(e, t, n) {
					return t = h.iteratee(t, n), h.pluck(h.map(e, function(e, n, r) {
						return {
							value: e,
							index: n,
							criteria: t(e, n, r)
						}
					}).sort(function(e, t) {
						var n = e.criteria,
							r = t.criteria;
						if (n !== r) {
							if (n > r || void 0 === n) return 1;
							if (r > n || void 0 === r) return -1
						}
						return e.index - t.index
					}), "value")
				};
				var v = function(e) {
					return function(t, n, r) {
						var o = {};
						return n = h.iteratee(n, r), h.each(t, function(r, i) {
							var a = n(r, i, t);
							e(o, r, a)
						}), o
					}
				};
				h.groupBy = v(function(e, t, n) {
					h.has(e, n) ? e[n].push(t) : e[n] = [t]
				}), h.indexBy = v(function(e, t, n) {
					e[n] = t
				}), h.countBy = v(function(e, t, n) {
					h.has(e, n) ? e[n] ++ : e[n] = 1
				}), h.sortedIndex = function(e, t, n, r) {
					n = h.iteratee(n, r, 1);
					for (var o = n(t), i = 0, a = e.length; a > i;) {
						var s = i + a >>> 1;
						n(e[s]) < o ? i = s + 1 : a = s
					}
					return i
				}, h.toArray = function(e) {
					return e ? h.isArray(e) ? u.call(e) : e.length === +e.length ? h.map(e, h.identity) : h.values(e) : []
				}, h.size = function(e) {
					return null == e ? 0 : e.length === +e.length ? e.length : h.keys(e).length
				}, h.partition = function(e, t, n) {
					t = h.iteratee(t, n);
					var r = [],
						o = [];
					return h.each(e, function(e, n, i) {
						(t(e, n, i) ? r : o).push(e)
					}), [r, o]
				}, h.first = h.head = h.take = function(e, t, n) {
					return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : u.call(e, 0, t)
				}, h.initial = function(e, t, n) {
					return u.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
				}, h.last = function(e, t, n) {
					return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
				}, h.rest = h.tail = h.drop = function(e, t, n) {
					return u.call(e, null == t || n ? 1 : t)
				}, h.compact = function(e) {
					return h.filter(e, h.identity)
				};
				var y = function(e, t, n, r) {
					if (t && h.every(e, h.isArray)) return l.apply(r, e);
					for (var o = 0, i = e.length; i > o; o++) {
						var a = e[o];
						h.isArray(a) || h.isArguments(a) ? t ? s.apply(r, a) : y(a, t, n, r) : n || r.push(a)
					}
					return r
				};
				h.flatten = function(e, t) {
					return y(e, t, !1, [])
				}, h.without = function(e) {
					return h.difference(e, u.call(arguments, 1))
				}, h.uniq = h.unique = function(e, t, n, r) {
					if (null == e) return [];
					h.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = h.iteratee(n, r));
					for (var o = [], i = [], a = 0, s = e.length; s > a; a++) {
						var u = e[a];
						if (t) a && i === u || o.push(u), i = u;
						else if (n) {
							var l = n(u, a, e);
							h.indexOf(i, l) < 0 && (i.push(l), o.push(u))
						} else h.indexOf(o, u) < 0 && o.push(u)
					}
					return o
				}, h.union = function() {
					return h.uniq(y(arguments, !0, !0, []))
				}, h.intersection = function(e) {
					if (null == e) return [];
					for (var t = [], n = arguments.length, r = 0, o = e.length; o > r; r++) {
						var i = e[r];
						if (!h.contains(t, i)) {
							for (var a = 1; n > a && h.contains(arguments[a], i); a++);
							a === n && t.push(i)
						}
					}
					return t
				}, h.difference = function(e) {
					var t = y(u.call(arguments, 1), !0, !0, []);
					return h.filter(e, function(e) {
						return !h.contains(t, e)
					})
				}, h.zip = function(e) {
					if (null == e) return [];
					for (var t = h.max(arguments, "length").length, n = Array(t), r = 0; t > r; r++) n[r] = h.pluck(arguments, r);
					return n
				}, h.object = function(e, t) {
					if (null == e) return {};
					for (var n = {}, r = 0, o = e.length; o > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
					return n
				}, h.indexOf = function(e, t, n) {
					if (null == e) return -1;
					var r = 0,
						o = e.length;
					if (n) {
						if ("number" != typeof n) return r = h.sortedIndex(e, t), e[r] === t ? r : -1;
						r = 0 > n ? Math.max(0, o + n) : n
					}
					for (; o > r; r++)
						if (e[r] === t) return r;
					return -1
				}, h.lastIndexOf = function(e, t, n) {
					if (null == e) return -1;
					var r = e.length;
					for ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)); --r >= 0;)
						if (e[r] === t) return r;
					return -1
				}, h.range = function(e, t, n) {
					arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
					for (var r = Math.max(Math.ceil((t - e) / n), 0), o = Array(r), i = 0; r > i; i++, e += n) o[i] = e;
					return o
				};
				var w = function() {};
				h.bind = function(e, t) {
					var n, r;
					if (p && e.bind === p) return p.apply(e, u.call(arguments, 1));
					if (!h.isFunction(e)) throw new TypeError("Bind must be called on a function");
					return n = u.call(arguments, 2), r = function() {
						if (!(this instanceof r)) return e.apply(t, n.concat(u.call(arguments)));
						w.prototype = e.prototype;
						var o = new w;
						w.prototype = null;
						var i = e.apply(o, n.concat(u.call(arguments)));
						return h.isObject(i) ? i : o
					}
				}, h.partial = function(e) {
					var t = u.call(arguments, 1);
					return function() {
						for (var n = 0, r = t.slice(), o = 0, i = r.length; i > o; o++) r[o] === h && (r[o] = arguments[n++]);
						for (; n < arguments.length;) r.push(arguments[n++]);
						return e.apply(this, r)
					}
				}, h.bindAll = function(e) {
					var t, n, r = arguments.length;
					if (1 >= r) throw new Error("bindAll must be passed function names");
					for (t = 1; r > t; t++) n = arguments[t], e[n] = h.bind(e[n], e);
					return e
				}, h.memoize = function(e, t) {
					var n = function(r) {
						var o = n.cache,
							i = t ? t.apply(this, arguments) : r;
						return h.has(o, i) || (o[i] = e.apply(this, arguments)), o[i]
					};
					return n.cache = {}, n
				}, h.delay = function(e, t) {
					var n = u.call(arguments, 2);
					return setTimeout(function() {
						return e.apply(null, n)
					}, t)
				}, h.defer = function(e) {
					return h.delay.apply(h, [e, 1].concat(u.call(arguments, 1)))
				}, h.throttle = function(e, t, n) {
					var r, o, i, a = null,
						s = 0;
					n || (n = {});
					var u = function() {
						s = n.leading === !1 ? 0 : h.now(), a = null, i = e.apply(r, o), a || (r = o = null)
					};
					return function() {
						var l = h.now();
						s || n.leading !== !1 || (s = l);
						var c = t - (l - s);
						return r = this, o = arguments, 0 >= c || c > t ? (clearTimeout(a), a = null, s = l, i = e.apply(r, o), a || (r = o = null)) : a || n.trailing === !1 || (a = setTimeout(u, c)), i
					}
				}, h.debounce = function(e, t, n) {
					var r, o, i, a, s, u = function() {
						var l = h.now() - a;
						t > l && l > 0 ? r = setTimeout(u, t - l) : (r = null, n || (s = e.apply(i, o), r || (i = o = null)))
					};
					return function() {
						i = this, o = arguments, a = h.now();
						var l = n && !r;
						return r || (r = setTimeout(u, t)), l && (s = e.apply(i, o), i = o = null), s
					}
				}, h.wrap = function(e, t) {
					return h.partial(t, e)
				}, h.negate = function(e) {
					return function() {
						return !e.apply(this, arguments)
					}
				}, h.compose = function() {
					var e = arguments,
						t = e.length - 1;
					return function() {
						for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
						return r
					}
				}, h.after = function(e, t) {
					return function() {
						return --e < 1 ? t.apply(this, arguments) : void 0
					}
				}, h.before = function(e, t) {
					var n;
					return function() {
						return --e > 0 ? n = t.apply(this, arguments) : t = null, n
					}
				}, h.once = h.partial(h.before, 2), h.keys = function(e) {
					if (!h.isObject(e)) return [];
					if (m) return m(e);
					var t = [];
					for (var n in e) h.has(e, n) && t.push(n);
					return t
				}, h.values = function(e) {
					for (var t = h.keys(e), n = t.length, r = Array(n), o = 0; n > o; o++) r[o] = e[t[o]];
					return r
				}, h.pairs = function(e) {
					for (var t = h.keys(e), n = t.length, r = Array(n), o = 0; n > o; o++) r[o] = [t[o], e[t[o]]];
					return r
				}, h.invert = function(e) {
					for (var t = {}, n = h.keys(e), r = 0, o = n.length; o > r; r++) t[e[n[r]]] = n[r];
					return t
				}, h.functions = h.methods = function(e) {
					var t = [];
					for (var n in e) h.isFunction(e[n]) && t.push(n);
					return t.sort()
				}, h.extend = function(e) {
					if (!h.isObject(e)) return e;
					for (var t, n, r = 1, o = arguments.length; o > r; r++) {
						t = arguments[r];
						for (n in t) d.call(t, n) && (e[n] = t[n])
					}
					return e
				}, h.pick = function(e, t, n) {
					var r, o = {};
					if (null == e) return o;
					if (h.isFunction(t)) {
						t = g(t, n);
						for (r in e) {
							var i = e[r];
							t(i, r, e) && (o[r] = i)
						}
					} else {
						var a = l.apply([], u.call(arguments, 1));
						e = new Object(e);
						for (var s = 0, c = a.length; c > s; s++) r = a[s], r in e && (o[r] = e[r])
					}
					return o
				}, h.omit = function(e, t, n) {
					if (h.isFunction(t)) t = h.negate(t);
					else {
						var r = h.map(l.apply([], u.call(arguments, 1)), String);
						t = function(e, t) {
							return !h.contains(r, t)
						}
					}
					return h.pick(e, t, n)
				}, h.defaults = function(e) {
					if (!h.isObject(e)) return e;
					for (var t = 1, n = arguments.length; n > t; t++) {
						var r = arguments[t];
						for (var o in r) void 0 === e[o] && (e[o] = r[o])
					}
					return e
				}, h.clone = function(e) {
					return h.isObject(e) ? h.isArray(e) ? e.slice() : h.extend({}, e) : e
				}, h.tap = function(e, t) {
					return t(e), e
				};
				var S = function(e, t, n, r) {
					if (e === t) return 0 !== e || 1 / e === 1 / t;
					if (null == e || null == t) return e === t;
					e instanceof h && (e = e._wrapped), t instanceof h && (t = t._wrapped);
					var o = c.call(e);
					if (o !== c.call(t)) return !1;
					switch (o) {
						case "[object RegExp]":
						case "[object String]":
							return "" + e == "" + t;
						case "[object Number]":
							return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
						case "[object Date]":
						case "[object Boolean]":
							return +e === +t
					}
					if ("object" != typeof e || "object" != typeof t) return !1;
					for (var i = n.length; i--;)
						if (n[i] === e) return r[i] === t;
					var a = e.constructor,
						s = t.constructor;
					if (a !== s && "constructor" in e && "constructor" in t && !(h.isFunction(a) && a instanceof a && h.isFunction(s) && s instanceof s)) return !1;
					n.push(e), r.push(t);
					var u, l;
					if ("[object Array]" === o) {
						if (u = e.length, l = u === t.length)
							for (; u-- && (l = S(e[u], t[u], n, r)););
					} else {
						var d, f = h.keys(e);
						if (u = f.length, l = h.keys(t).length === u)
							for (; u-- && (d = f[u], l = h.has(t, d) && S(e[d], t[d], n, r)););
					}
					return n.pop(), r.pop(), l
				};
				h.isEqual = function(e, t) {
						return S(e, t, [], [])
					},
					h.isEmpty = function(e) {
						if (null == e) return !0;
						if (h.isArray(e) || h.isString(e) || h.isArguments(e)) return 0 === e.length;
						for (var t in e)
							if (h.has(e, t)) return !1;
						return !0
					},
					h.isElement = function(e) {
						return !(!e || 1 !== e.nodeType)
					},
					h.isArray = f ||
					function(e) {
						return "[object Array]" === c.call(e)
					},
					h.isObject = function(e) {
						var t = typeof e;
						return "function" === t || "object" === t && !!e
					},
					h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
						function(e) {
							h["is" + e] = function(t) {
								return c.call(t) === "[object " + e + "]"
							}
						}),
					h.isArguments(arguments) || (h.isArguments = function(e) {
						return h.has(e, "callee")
					}),
					"function" != typeof / . / && (h.isFunction = function(e) {
						return "function" == typeof e || !1
					}),
					h.isFinite = function(e) {
						return isFinite(e) && !isNaN(parseFloat(e))
					},
					h.isNaN = function(e) {
						return h.isNumber(e) && e !== +e
					},
					h.isBoolean = function(e) {
						return e === !0 || e === !1 || "[object Boolean]" === c.call(e)
					},
					h.isNull = function(e) {
						return null === e
					},
					h.isUndefined = function(e) {
						return void 0 === e
					},
					h.has = function(e, t) {
						return null != e && d.call(e, t)
					},
					h.noConflict = function() {
						return e._ = r,
							this
					},
					h.identity = function(e) {
						return e
					},
					h.constant = function(e) {
						return function() {
							return e
						}
					},
					h.noop = function() {},
					h.property = function(e) {
						return function(t) {
							return t[e]
						}
					},
					h.matches = function(e) {
						var t = h.pairs(e),
							n = t.length;
						return function(e) {
							if (null == e) return !n;
							e = new Object(e);
							for (var r = 0; n > r; r++) {
								var o = t[r],
									i = o[0];
								if (o[1] !== e[i] || !(i in e)) return !1
							}
							return !0
						}
					},
					h.times = function(e, t, n) {
						var r = Array(Math.max(0, e));
						t = g(t, n, 1);
						for (var o = 0; e > o; o++) r[o] = t(o);
						return r
					},
					h.random = function(e, t) {
						return null == t && (t = e, e = 0),
							e + Math.floor(Math.random() * (t - e + 1))
					},
					h.now = Date.now ||
					function() {
						return (new Date).getTime()
					};
				var x = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;",
						"'": "&#x27;",
						"`": "&#x60;"
					},
					C = h.invert(x),
					E = function(e) {
						var t = function(t) {
								return e[t]
							},
							n = "(?:" + h.keys(e).join("|") + ")",
							r = RegExp(n),
							o = RegExp(n, "g");
						return function(e) {
							return e = null == e ? "" : "" + e,
								r.test(e) ? e.replace(o, t) : e
						}
					};
				h.escape = E(x),
					h.unescape = E(C),
					h.result = function(e, t) {
						if (null == e) return void 0;
						var n = e[t];
						return h.isFunction(n) ? e[t]() : n
					};
				var T = 0;
				h.uniqueId = function(e) {
						var t = ++T + "";
						return e ? e + t : t
					},
					h.templateSettings = {
						evaluate: /<%([\s\S]+?)%>/g,
						interpolate: /<%=([\s\S]+?)%>/g,
						escape: /<%-([\s\S]+?)%>/g
					};
				var O = /(.)^/,
					N = {
						"'": "'",
						"\\": "\\",
						"\r": "r",
						"\n": "n",
						"\u2028": "u2028",
						"\u2029": "u2029"
					},
					k = /\\|'|\r|\n|\u2028|\u2029/g,
					j = function(e) {
						return "\\" + N[e]
					};
				h.template = function(e, t, n) {
						!t && n && (t = n),
							t = h.defaults({},
								t, h.templateSettings);
						var r = RegExp([(t.escape || O).source, (t.interpolate || O).source, (t.evaluate || O).source].join("|") + "|$", "g"),
							o = 0,
							i = "__p+='";
						e.replace(r,
								function(t, n, r, a, s) {
									return i += e.slice(o, s).replace(k, j),
										o = s + t.length,
										n ? i += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? i += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (i += "';\n" + a + "\n__p+='"),
										t
								}),
							i += "';\n",
							t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
							i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
						try {
							var a = new Function(t.variable || "obj", "_", i)
						} catch (s) {
							throw s.source = i,
								s
						}
						var u = function(e) {
								return a.call(this, e, h)
							},
							l = t.variable || "obj";
						return u.source = "function(" + l + "){\n" + i + "}",
							u
					},
					h.chain = function(e) {
						var t = h(e);
						return t._chain = !0,
							t
					};
				var A = function(e) {
					return this._chain ? h(e).chain() : e
				};
				h.mixin = function(e) {
						h.each(h.functions(e),
							function(t) {
								var n = h[t] = e[t];
								h.prototype[t] = function() {
									var e = [this._wrapped];
									return s.apply(e, arguments),
										A.call(this, n.apply(h, e))
								}
							})
					},
					h.mixin(h),
					h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
						function(e) {
							var t = o[e];
							h.prototype[e] = function() {
								var n = this._wrapped;
								return t.apply(n, arguments),
									"shift" !== e && "splice" !== e || 0 !== n.length || delete n[0],
									A.call(this, n)
							}
						}),
					h.each(["concat", "join", "slice"],
						function(e) {
							var t = o[e];
							h.prototype[e] = function() {
								return A.call(this, t.apply(this._wrapped, arguments))
							}
						}),
					h.prototype.value = function() {
						return this._wrapped
					},
					"function" == typeof define && define.amd && define("underscore", [],
						function() {
							return h
						})
			}).call(this)
		}, {}
	],
	60: [
		function() {
			libsb.on("auth",
				function(e, t) {
					e.buttons.persona = {
							text: "Email",
							prio: 200,
							action: function() {
								navigator.id.watch({
										onlogin: function(e) {
											var t = {};
											t.auth = {
													browserid: e
												},
												libsb.emit("init-up", t,
													function() {})
										},
										onlogout: function() {}
									}),
									navigator.id.request()
							}
						},
						t()
				},
				500)
		}, {}
	],
	61: [
		function(e) {
			var t = e("../client-config.js");
			libsb.on("navigate",
				function(e, n) {
					var r;
					e.phonegap && "boot" === e.source && (r = new RegExp("(^https?:" + t.server.host + ")(($)|(/)).*"), window.openExternal = function(e) {
								return window.open(e.href, "_system"), !1
							},
							$(document).on("click", "a[href]",
								function(e) {
									r.test(this.href) || (e.preventDefault(), window.openExternal(this))
								})),
						n()
				},
				500)
		}, {
			"../client-config.js": 8
		}
	],
	62: [
		function(e) {
			var t = e("./jquery.lace.js");
			t("alertbar", {
				type: "info",
				parent: "body"
			}, {
				init: function() {
					var e = this,
						t = e.settings,
						n = t.id ? $("#" + t.id) : $(),
						r = $(".alert-container"),
						o = $("<div>").addClass("alert-bar " + t.type),
						i = o.append($(e.element).addClass("alert-content"), $("<span>").addClass("alert-remove")).attr("id", t.id || "alert-bar-" + (new Date).getTime());
					r.length || (r = $("<div>").addClass("alert-container"), r.appendTo(t.parent)),
						n.length && n.hasClass("alert-bar") && n.remove(),
						i.appendTo(r),
						i.find(".alert-remove").on("click",
							function() {
								e.dismiss()
							}),
						t.timeout && "number" == typeof t.timeout && setTimeout(function() {
								e.dismiss()
							},
							t.timeout),
						$.event.trigger("alertbarInited", [$(e.element)])
				},
				dismiss: function(e) {
					var t = e ? $(e) : this.element ? $(this.element).closest(".alert-bar") : $(".alert-bar"),
						n = $(".alert-container"),
						r = function() {
							n.children().length || n.remove(),
								$.event.trigger("alertbarDismissed", [t])
						};
					t.length && ($.fn.velocity ? t.velocity({
							opacity: 0
						},
						150).velocity({
							height: 0,
							paddingTop: 0,
							paddingBottom: 0,
							marginTop: 0,
							marginBottom: 0
						},
						150,
						function() {
							t.remove(),
								r()
						}) : (t.remove(), r()))
				}
			})
		}, {
			"./jquery.lace.js": 63
		}
	],
	63: [
		function(e, t) {
			function n(e, t, n) {
				!
				function(r, o, i, a) {
					function s(n, o) {
						this.element = n,
							this.settings = r.extend({},
								t, o),
							this._defaults = t,
							this._name = e,
							n && this.init()
					}
					r.extend(s.prototype, n),
						r.fn[e] = function(t) {
							var n, o, i = arguments;
							return t === a || "object" == typeof t ? this.each(function() {
								r.data(this, "plugin_" + e) || r.data(this, "plugin_" + e, new s(this, t))
							}) : "string" != typeof t || "init" === t || /^_/.test(t) ? void 0 : (this.each(function() {
								o = r.data(this, "plugin_" + e),
									o instanceof s && "function" == typeof o[t] && (n = o[t].apply(o, Array.prototype.slice.call(i, 1))),
									"destroy" === t && r.data(this, "plugin_" + e, null)
							}), n !== a ? n : this)
						},
						r[e] = function(t, o) {
							var i = r(t ? t : "<div>"),
								a = arguments;
							return o || "string" != typeof t || "function" != typeof n[t] ? i[e](o) : n[t].apply(new s, Array.prototype.slice.call(a, 1))
						}
				}(jQuery, window, document)
			}
			"function" == typeof define && define.amd ? define(function() {
				return n
			}) : "undefined" != typeof t && t.exports ? t.exports = n : (window.registerPlugin = n, window.require = function(e) {
				return "./jquery.lace.js" === e ? n : function() {}
			})
		}, {}
	],
	64: [
		function(e) {
			var t = e("./jquery.lace.js");
			t("modal", {
				dismiss: !0,
				backdrop: !0,
				parent: "body"
			}, {
				init: function() {
					var e = this,
						t = e.settings,
						n = $(e.element).addClass("modal"),
						r = t.backdrop ? $("<div>").addClass("backdrop") : null;
					e.dismiss(!0,
						function() {
							n.find(".modal-remove").on("click", e.dismiss),
								n.appendTo(t.parent),
								n.css({
									"margin-top": n.outerHeight() / -2,
									"margin-left": n.outerWidth() / -2
								}),
								r && (t.dismiss && r.on("click", e.dismiss), r.appendTo(t.parent)),
								$(document).on("keydown.modal",
									function(n) {
										27 === n.keyCode && t.dismiss && e.dismiss()
									}),
								$.event.trigger("modalInited", [$(e.element)])
						})
				},
				dismiss: function(e, t) {
					var n = $(".modal, .backdrop"),
						r = function(t) {
							var r = e === !0 ? "previousModalDismissed" : "modalDismissed";
							return $.event.trigger(r, [n]),
								$(document).off("keydown.modal"),
								t()
						};
					return t = "function" == typeof t ? t : function() {},
						n.length ? void($.fn.velocity ? (n.not(".modal").velocity("fadeOut", 150), n.not(".backdrop").velocity({
								opacity: 0,
								scale: e === !0 ? "120%" : "70%"
							},
							150,
							function() {
								n.remove(),
									r(t)
							})) : (n.remove(), r(t))) : t()
				}
			})
		}, {
			"./jquery.lace.js": 63
		}
	],
	65: [
		function(e) {
			var t = e("./jquery.lace.js");
			t("multientry", null, {
				init: function() {
					var e = this;
					$(document).off("blur.multientry").on("blur.multientry", ".multientry",
							function() {
								e.add($(this), $(this).children().last().text())
							}).off("keydown.multientryitem").on("keydown.multientryitem", ".multientry .item",
							function(t) {
								13 === t.keyCode || 32 === t.keyCode || 188 === t.keyCode ? (t.preventDefault(), e.add($(this).parent(".multientry"), $(this).text())) : 8 === t.keyCode && $(this).text().match(/^\s*$/) && (t.preventDefault(), $(this).text($(this).prev().find(".item-text").text()), $(this).prev().remove(), $.fn.setCursorEnd && $(this).setCursorEnd())
							}).off("paste.multientryitem").on("paste.multientryitem", ".multientry .item",
							function(t) {
								t.preventDefault();
								var n = t.originalEvent.clipboardData.getData("Text");
								e.add($(this).parent(".multientry"), n)
							}).off("click.multientryremove").on("click.multientryremove", ".multientry .item-remove",
							function() {
								e.remove($(this).parent().text())
							}).off("click.multientry").on("click.multientry", ".multientry",
							function() {
								$(this).children().last().focus()
							}),
						$.event.trigger("multientryInited", [$(e.element)])
				},
				create: function() {
					return $("<div>").addClass("multientry").append($("<span>").addClass("item").attr({
						contenteditable: !0
					})).multientry()
				},
				add: function(e, t) {
					var n = $(e && t ? e : this.element ? this.element : ".multientry");
					!t && ("string" == typeof e || e instanceof Array) && (t = e),
						t && (t instanceof Array || (t = t.split(/[\s,]+/)), t = t.join(" ").replace(/(?:\r\n|\r|\n)/g, " ").split(/[\s,]+/), t = t.filter(function(e, t, n) {
							return n.indexOf(e) === t
						}), t.forEach(function(e) {
							e.match(/^\s*$/) || $("<span>").addClass("item done").append($("<span>").addClass("item-text").text(e.trim())).append($("<span>").addClass("item-remove")).insertBefore(n.children().last().empty())
						}), $.event.trigger("multientryElementAdded", [n, t]))
				},
				remove: function(e, t) {
					var n = $(e && t ? e : this.element ? this.element : ".multientry");
					!t && ("string" == typeof e || e instanceof Array) && (t = e),
						t && (t instanceof Array || (t = t.split(/[\s,]+/)), t.forEach(function(e) {
							e.match(/^\s*$/) || n.find(".item-text").filter(function() {
								return $(this).text().trim() === e.trim()
							}).parent(".item").remove()
						}), $.event.trigger("multientryElementRemoved", [n, t]))
				},
				items: function(e) {
					for (var t = $(e ? e : this.element ? this.element : ".multientry"), n = t.find(".item-text"), r = new Array(n.length), o = 0; o < n.length; o++) r[o] = $(n[o]).text();
					return r
				}
			})
		}, {
			"./jquery.lace.js": 63
		}
	],
	66: [
		function(e) {
			var t = e("./jquery.lace.js");
			t("popover", {
				parent: "body"
			}, {
				init: function() {
					var e, t, n, r, o, i, a, s, u, l, c, d, f = this,
						m = f.settings,
						p = $(f.settings.origin),
						h = $(f.element).addClass("popover-body"),
						g = "",
						b = (new Date).getTime();
					p.length && (p.data("popover") || (h.data("id", b), h.data("origin", p), p.data("popover", h), e = $(window).height(), t = $(window).width(), n = p.offset(), r = p.outerHeight(), o = p.outerWidth(), u = n.top - $(document).scrollTop() + r / 2, l = e - u, c = n.left - $(document).scrollLeft() + o / 2, d = t - c, $(document).on("click.popover-" + b,
						function(e) {
							$(e.target).closest(h).length || f.dismiss()
						}).on("keydown.popover-" + b,
						function(e) {
							27 === e.keyCode && f.dismiss()
						}), h.appendTo(m.parent), a = h.outerWidth(!0), i = h.outerHeight(!0), s = a - h.outerWidth(), n.left < 0 || n.left > t ? (g += " arrow-y popover-origin-outside", i / 2 >= u ? g += " arrow-top" : i / 2 >= l && (g += " arrow-bottom"), n.left < 0 ? (g += " popover-right", c = 0) : (g += " popover-left", c = t - a)) : n.top < 0 || n.top > e ? (g += " arrow-x popover-origin-outside", o / 2 > c ? g += " arrow-left" : o / 2 > d && (g += " arrow-right"), n.top < 0 ? (g += " popover-bottom", u = 0) : (g += " popover-top", u = e - i)) : (g += " arrow-x", a / 2 >= c ? (g += " arrow-left", c = o / 2) : a / 2 >= d ? (g += " arrow-right", c = t - o / 2 - a) : c -= a / 2, i >= l ? (g += " popover-top", u = u - r - i) : (g += " popover-bottom", u = e >= r ? u : e / 2), u += r / 2), h.addClass(g).css({
						top: u,
						left: c
					}), $.event.trigger("popoverInited", [$(f.element)])))
				},
				dismiss: function(e) {
					var t, n, r = e ? $(e) : this.element ? $(this.element).closest(".popover-body") : $(".popover-body"),
						o = function() {
							$.event.trigger("popoverDismissed", [r])
						};
					if (r.length) {
						for (var i = 0,
							a = r.length; a > i; i++) t = r.eq(i),
							n = t.data("id"),
							$(document).off("click.popover-" + n + " keydown.popover-" + n),
							$(t.data("origin")).data("popover", !1);
						$.fn.velocity ? r.velocity("fadeOut", 150,
							function() {
								r.remove(),
									o()
							}) : (r.remove(), o())
					}
				}
			})
		}, {
			"./jquery.lace.js": 63
		}
	],
	67: [
		function(e) {
			var t = e("./jquery.lace.js");
			t("progressbar", {
				parent: "body"
			}, {
				init: function() {
					var e = this.settings,
						t = $(this.element);
					t.removeClass("loading").addClass("progressbar").width(0).appendTo(e.parent),
						t.data("progressbarInterval", setInterval(function() {
								var e = parseInt(t.width() / t.parent().width() * 100) || 0;
								e += (100 - Math.round(e).toFixed(2)) * Math.random() * .5,
									t.width(e + "%")
							},
							1e3)),
						$.event.trigger("progressbarInited", [t])
				},
				set: function(e, t) {
					var n = e && t ? $(e) : this.element ? $(this.element).closest(".progressbar") : $(".progressbar");
					t || "number" != typeof e && !/^[0-9]+%$/.test(e) || (t = e),
						t = parseInt(t),
						isNaN(t) || (clearInterval(n.data("progressbarInterval")), n.removeClass("loading").width(t + "%"), $.event.trigger("progressbarSet", [n, t]))
				},
				dismiss: function(e) {
					var t = e ? $(e) : this.element ? $(this.element).closest(".progressbar") : $(".progressbar");
					t.length && (this.set(100), setTimeout(function() {
							t.remove(),
								$.event.trigger("progressbarDismissed", [t])
						},
						500))
				}
			})
		}, {
			"./jquery.lace.js": 63
		}
	],
	68: [
		function(e, t) {
			!
			function(e, n, r, o) {
				function i(e) {
					for (var t = -1,
						n = e ? e.length : 0, r = []; ++t < n;) {
						var o = e[t];
						o && r.push(o)
					}
					return r
				}

				function a(e) {
					var t = b.data(e, d);
					return null === t ? o : t
				}

				function s(e) {
					return function(t) {
						return Math.round(t * e) * (1 / e)
					}
				}

				function u(e, t) {
					var n = e;
					return g.isString(e) ? v.Easings[e] || (n = !1) : n = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? y.apply(null, e) : !1,
						n === !1 && (n = v.Easings[v.defaults.easing] ? v.defaults.easing : m),
						n
				}

				function l(e) {
					if (e)
						for (var t = (new Date).getTime(), n = 0, r = v.State.calls.length; r > n; n++)
							if (v.State.calls[n]) {
								var i = v.State.calls[n],
									s = i[0],
									u = i[2],
									d = i[3];
								d || (d = v.State.calls[n][3] = t - 16);
								for (var f = Math.min((t - d) / u.duration, 1), m = 0, p = s.length; p > m; m++) {
									var b = s[m],
										y = b.element;
									if (a(y)) {
										var w = !1;
										u.display && "none" !== u.display && S.setPropertyValue(y, "display", u.display),
											u.visibility && "hidden" !== u.visibility && S.setPropertyValue(y, "visibility", u.visibility);
										for (var x in b)
											if ("element" !== x) {
												var C, E = b[x],
													T = g.isString(E.easing) ? v.Easings[E.easing] : E.easing;
												if (C = 1 === f ? E.endValue : E.startValue + (E.endValue - E.startValue) * T(f), E.currentValue = C, S.Hooks.registered[x]) {
													var O = S.Hooks.getRoot(x),
														N = a(y).rootPropertyValueCache[O];
													N && (E.rootPropertyValue = N)
												}
												var k = S.setPropertyValue(y, x, E.currentValue + (0 === parseFloat(C) ? "" : E.unitType), E.rootPropertyValue, E.scrollData);
												S.Hooks.registered[x] && (a(y).rootPropertyValueCache[O] = S.Normalizations.registered[O] ? S.Normalizations.registered[O]("extract", null, k[1]) : k[1]),
													"transform" === k[0] && (w = !0)
											}
										u.mobileHA && a(y).transformCache.translate3d === o && (a(y).transformCache.translate3d = "(0px, 0px, 0px)", w = !0),
											w && S.flushTransformCache(y)
									}
								}
								u.display && "none" !== u.display && (v.State.calls[n][2].display = !1),
									u.visibility && "hidden" !== u.visibility && (v.State.calls[n][2].visibility = !1),
									u.progress && u.progress.call(i[1], i[1], f, Math.max(0, d + u.duration - t), d),
									1 === f && c(n)
							}
					v.State.isTicking && h(l)
				}

				function c(e, t) {
					if (!v.State.calls[e]) return !1;
					for (var n = v.State.calls[e][0], r = v.State.calls[e][1], i = v.State.calls[e][2], s = v.State.calls[e][4], u = !1, l = 0, c = n.length; c > l; l++) {
						var d = n[l].element;
						if (t || i.loop || ("none" === i.display && S.setPropertyValue(d, "display", i.display), "hidden" === i.visibility && S.setPropertyValue(d, "visibility", i.visibility)), (b.queue(d)[1] === o || !/\.velocityQueueEntryFlag/i.test(b.queue(d)[1])) && a(d)) {
							a(d).isAnimating = !1,
								a(d).rootPropertyValueCache = {};
							var f = !1;
							b.each(a(d).transformCache,
									function(e, t) {
										var n = /^scale/.test(e) ? 1 : 0;
										new RegExp("^\\(" + n + "[^.]").test(t) && (f = !0, delete a(d).transformCache[e])
									}),
								i.mobileHA && (f = !0, delete a(d).transformCache.translate3d),
								f && S.flushTransformCache(d),
								S.Values.removeClass(d, ":animating")
						}
						t || !i.complete || i.loop || l !== c - 1 || i.complete.call(r, r),
							s && s(r),
							i.queue !== !1 && b.dequeue(d, i.queue)
					}
					v.State.calls[e] = !1;
					for (var m = 0,
						p = v.State.calls.length; p > m; m++)
						if (v.State.calls[m] !== !1) {
							u = !0;
							break
						}
					u === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
				}
				var d = "velocity",
					f = 400,
					m = "swing",
					p = function() {
						if (r.documentMode) return r.documentMode;
						for (var e = 7; e > 4; e--) {
							var t = r.createElement("div");
							if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null,
								e
						}
						return o
					}(),
					h = n.requestAnimationFrame ||
					function() {
						var e = 0;
						return n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame ||
							function(t) {
								var n, r = (new Date).getTime();
								return n = Math.max(0, 16 - (r - e)),
									e = r + n,
									setTimeout(function() {
											t(r + n)
										},
										n)
							}
					}(),
					g = {
						isString: function(e) {
							return "string" == typeof e
						},
						isArray: Array.isArray ||
							function(e) {
								return "[object Array]" === Object.prototype.toString.call(e)
							},
						isFunction: function(e) {
							return "[object Function]" === Object.prototype.toString.call(e)
						},
						isNode: function(e) {
							return e && e.nodeType
						},
						isNodeList: function(e) {
							return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== o && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
						},
						isWrapped: function(e) {
							return e && (e.jquery || n.Zepto && n.Zepto.zepto.isZ(e))
						},
						isSVG: function(e) {
							return n.SVGElement && e instanceof SVGElement
						}
					},
					b = n.jQuery || e.Velocity && e.Velocity.Utilities;
				if (!b) throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");
				if (e.Velocity !== o && !e.Velocity.Utilities) throw new Error("Velocity: Namespace is occupied.");
				if (7 >= p) {
					if (n.jQuery) return void(n.jQuery.fn.velocity = n.jQuery.fn.animate);
					throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")
				}
				if (8 === p && !n.jQuery) throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");
				var v = e.Velocity = e.velocity = {
					State: {
						isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
						isAndroid: /Android/i.test(navigator.userAgent),
						isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
						isChrome: n.chrome,
						prefixElement: r.createElement("div"),
						prefixMatches: {},
						scrollAnchor: null,
						scrollPropertyLeft: null,
						scrollPropertyTop: null,
						isTicking: !1,
						calls: []
					},
					CSS: {},
					Utilities: n.jQuery,
					Sequences: {},
					Easings: {},
					Promise: n.Promise,
					defaults: {
						queue: "",
						duration: f,
						easing: m,
						begin: null,
						complete: null,
						progress: null,
						display: null,
						loop: !1,
						delay: !1,
						mobileHA: !0,
						_cacheValues: !0
					},
					animate: function() {},
					mock: !1,
					version: {
						major: 0,
						minor: 7,
						patch: 0
					},
					debug: !1
				};
				n.pageYOffset !== o ? (v.State.scrollAnchor = n, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
				var y = function() {
						function e(e, t) {
							return 1 - 3 * t + 3 * e
						}

						function t(e, t) {
							return 3 * t - 6 * e
						}

						function n(e) {
							return 3 * e
						}

						function r(r, o, i) {
							return ((e(o, i) * r + t(o, i)) * r + n(o)) * r
						}

						function o(r, o, i) {
							return 3 * e(o, i) * r * r + 2 * t(o, i) * r + n(o)
						}
						return function(e, t, n, i) {
							function a(t) {
								for (var i = t,
									a = 0; 8 > a; ++a) {
									var s = o(i, e, n);
									if (0 === s) return i;
									var u = r(i, e, n) - t;
									i -= u / s
								}
								return i
							}
							if (4 !== arguments.length) return !1;
							for (var s = 0; 4 > s; ++s)
								if ("number" != typeof arguments[s] || isNaN(arguments[s]) || !isFinite(arguments[s])) return !1;
							return e = Math.min(e, 1),
								n = Math.min(n, 1),
								e = Math.max(e, 0),
								n = Math.max(n, 0),
								function(o) {
									return e === t && n === i ? o : r(a(o), t, i)
								}
						}
					}(),
					w = function() {
						function e(e) {
							return -e.tension * e.x - e.friction * e.v
						}

						function t(t, n, r) {
							var o = {
								x: t.x + r.dx * n,
								v: t.v + r.dv * n,
								tension: t.tension,
								friction: t.friction
							};
							return {
								dx: o.v,
								dv: e(o)
							}
						}

						function n(n, r) {
							var o = {
									dx: n.v,
									dv: e(n)
								},
								i = t(n, .5 * r, o),
								a = t(n, .5 * r, i),
								s = t(n, r, a),
								u = 1 / 6 * (o.dx + 2 * (i.dx + a.dx) + s.dx),
								l = 1 / 6 * (o.dv + 2 * (i.dv + a.dv) + s.dv);
							return n.x = n.x + u * r,
								n.v = n.v + l * r,
								n
						}
						return function r(e, t, o) {
							var i, a, s, u = {
									x: -1,
									v: 0,
									tension: null,
									friction: null
								},
								l = [0],
								c = 0,
								d = 1e-4,
								f = .016;
							for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, o = o || null, u.tension = e, u.friction = t, i = null !== o, i ? (c = r(e, t), a = c / o * f) : a = f; s = n(s || u, a), l.push(1 + s.x), c += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
							return i ?
								function(e) {
									return l[e * (l.length - 1) | 0]
								} : c
						}
					}();
				!
				function() {
					v.Easings.linear = function(e) {
							return e
						},
						v.Easings.swing = function(e) {
							return .5 - Math.cos(e * Math.PI) / 2
						},
						v.Easings.spring = function(e) {
							return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
						},
						v.Easings.ease = y(.25, .1, .25, 1),
						v.Easings["ease-in"] = y(.42, 0, 1, 1),
						v.Easings["ease-out"] = y(0, 0, .58, 1),
						v.Easings["ease-in-out"] = y(.42, 0, .58, 1);
					var e = {};
					b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"],
							function(t, n) {
								e[n] = function(e) {
									return Math.pow(e, t + 2)
								}
							}),
						b.extend(e, {
							Sine: function(e) {
								return 1 - Math.cos(e * Math.PI / 2)
							},
							Circ: function(e) {
								return 1 - Math.sqrt(1 - e * e)
							},
							Elastic: function(e) {
								return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
							},
							Back: function(e) {
								return e * e * (3 * e - 2)
							},
							Bounce: function(e) {
								for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
								return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
							}
						}),
						b.each(e,
							function(e, t) {
								v.Easings["easeIn" + e] = t,
									v.Easings["easeOut" + e] = function(e) {
										return 1 - t(1 - e)
									},
									v.Easings["easeInOut" + e] = function(e) {
										return .5 > e ? t(2 * e) / 2 : 1 - t(-2 * e + 2) / 2
									}
							})
				}();
				var S = v.CSS = {
					RegEx: {
						valueUnwrap: /^[A-z]+\((.*)\)$/i,
						wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
						valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
					},
					Hooks: {
						templates: {
							color: ["Red Green Blue Alpha", "255 255 255 1"],
							backgroundColor: ["Red Green Blue Alpha", "255 255 255 1"],
							borderColor: ["Red Green Blue Alpha", "255 255 255 1"],
							borderTopColor: ["Red Green Blue Alpha", "255 255 255 1"],
							borderRightColor: ["Red Green Blue Alpha", "255 255 255 1"],
							borderBottomColor: ["Red Green Blue Alpha", "255 255 255 1"],
							borderLeftColor: ["Red Green Blue Alpha", "255 255 255 1"],
							outlineColor: ["Red Green Blue Alpha", "255 255 255 1"],
							fill: ["Red Green Blue Alpha", "255 255 255 1"],
							stroke: ["Red Green Blue Alpha", "255 255 255 1"],
							stopColor: ["Red Green Blue Alpha", "255 255 255 1"],
							textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
							boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
							clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
							backgroundPosition: ["X Y", "0% 0%"],
							transformOrigin: ["X Y Z", "50% 50% 0px"],
							perspectiveOrigin: ["X Y", "50% 50%"]
						},
						registered: {},
						register: function() {
							var e, t, n;
							if (p)
								for (e in S.Hooks.templates) {
									t = S.Hooks.templates[e],
										n = t[0].split(" ");
									var r = t[1].match(S.RegEx.valueSplit);
									"Color" === n[0] && (n.push(n.shift()), r.push(r.shift()), S.Hooks.templates[e] = [n.join(" "), r.join(" ")])
								}
							for (e in S.Hooks.templates) {
								t = S.Hooks.templates[e],
									n = t[0].split(" ");
								for (var o in n) {
									var i = e + n[o],
										a = o;
									S.Hooks.registered[i] = [e, a]
								}
							}
						},
						getRoot: function(e) {
							var t = S.Hooks.registered[e];
							return t ? t[0] : e
						},
						cleanRootPropertyValue: function(e, t) {
							return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.Hooks.RegEx.valueUnwrap)[1]),
								S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]),
								t
						},
						extractValue: function(e, t) {
							var n = S.Hooks.registered[e];
							if (n) {
								var r = n[0],
									o = n[1];
								return t = S.Hooks.cleanRootPropertyValue(r, t),
									t.toString().match(S.RegEx.valueSplit)[o]
							}
							return t
						},
						injectValue: function(e, t, n) {
							var r = S.Hooks.registered[e];
							if (r) {
								var o, i, a = r[0],
									s = r[1];
								return n = S.Hooks.cleanRootPropertyValue(a, n),
									o = n.toString().match(S.RegEx.valueSplit),
									o[s] = t,
									i = o.join(" ")
							}
							return n
						}
					},
					Normalizations: {
						registered: {
							clip: function(e, t, n) {
								switch (e) {
									case "name":
										return "clip";
									case "extract":
										var r;
										return S.RegEx.wrappedValueAlreadyExtracted.test(n) ? r = n : (r = n.toString().match(S.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : n),
											r;
									case "inject":
										return "rect(" + n + ")"
								}
							},
							opacity: function(e, t, n) {
								if (8 >= p) switch (e) {
									case "name":
										return "filter";
									case "extract":
										var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
										return n = r ? r[1] / 100 : 1;
									case "inject":
										return t.style.zoom = 1,
											parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
								} else switch (e) {
									case "name":
										return "opacity";
									case "extract":
										return n;
									case "inject":
										return n
								}
							}
						},
						register: function() {
							function e(e) {
								var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
									r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
								return e = e.replace(n,
										function(e, t, n, r) {
											return t + t + n + n + r + r
										}),
									t = r.exec(e),
									t ? "rgb(" + (parseInt(t[1], 16) + " " + parseInt(t[2], 16) + " " + parseInt(t[3], 16)) + ")" : "rgb(0 0 0)"
							}
							var t = ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"];
							9 >= p || v.State.isGingerbread || (t = t.concat(["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]));
							for (var n = 0,
								r = t.length; r > n; n++) !
								function() {
									var e = t[n];
									S.Normalizations.registered[e] = function(t, n, r) {
										switch (t) {
											case "name":
												return "transform";
											case "extract":
												return a(n).transformCache[e] === o ? /^scale/i.test(e) ? 1 : 0 : a(n).transformCache[e].replace(/[()]/g, "");
											case "inject":
												var i = !1;
												switch (e.substr(0, e.length - 1)) {
													case "translate":
														i = !/(%|px|em|rem|\d)$/i.test(r);
														break;
													case "scal":
													case "scale":
														v.State.isAndroid && a(n).transformCache[e] === o && (r = 1),
															i = !/(\d)$/i.test(r);
														break;
													case "skew":
														i = !/(deg|\d)$/i.test(r);
														break;
													case "rotate":
														i = !/(deg|\d)$/i.test(r)
												}
												return i || (a(n).transformCache[e] = "(" + r + ")"),
													a(n).transformCache[e]
										}
									}
								}();
							for (var i = ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], n = 0, s = i.length; s > n; n++) !
								function() {
									var t = i[n];
									S.Normalizations.registered[t] = function(n, r, i) {
										switch (n) {
											case "name":
												return t;
											case "extract":
												var a;
												if (S.RegEx.wrappedValueAlreadyExtracted.test(i)) a = i;
												else {
													var s, u = {
														aqua: "rgb(0, 255, 255);",
														black: "rgb(0, 0, 0)",
														blue: "rgb(0, 0, 255)",
														fuchsia: "rgb(255, 0, 255)",
														gray: "rgb(128, 128, 128)",
														green: "rgb(0, 128, 0)",
														lime: "rgb(0, 255, 0)",
														maroon: "rgb(128, 0, 0)",
														navy: "rgb(0, 0, 128)",
														olive: "rgb(128, 128, 0)",
														purple: "rgb(128, 0, 128)",
														red: "rgb(255, 0, 0)",
														silver: "rgb(192, 192, 192)",
														teal: "rgb(0, 128, 128)",
														white: "rgb(255, 255, 255)",
														yellow: "rgb(255, 255, 0)"
													};
													/^[A-z]+$/i.test(i) ? s = u[i] !== o ? u[i] : u.black : /^#([A-f\d]{3}){1,2}$/i.test(i) ? s = e(i) : /^rgba?\(/i.test(i) || (s = u.black),
														a = (s || i).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
												}
												return 8 >= p || 3 !== a.split(" ").length || (a += " 1"),
													a;
											case "inject":
												return 8 >= p ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
										}
									}
								}()
						}
					},
					Names: {
						camelCase: function(e) {
							return e.replace(/-(\w)/g,
								function(e, t) {
									return t.toUpperCase()
								})
						},
						SVGAttribute: function(e) {
							var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y1";
							return (p || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"),
								new RegExp("^(" + t + ")$", "i").test(e)
						},
						prefixCheck: function(e) {
							if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
							for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = t.length; r > n; n++) {
								var o;
								if (o = 0 === n ? e : t[n] + e.replace(/^\w/,
									function(e) {
										return e.toUpperCase()
									}), g.isString(v.State.prefixElement.style[o])) return v.State.prefixMatches[e] = o, [o, !0]
							}
							return [e, !1]
						}
					},
					Values: {
						isCSSNullValue: function(e) {
							return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
						},
						getUnitType: function(e) {
							return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
						},
						getDisplayType: function(e) {
							var t = e.tagName.toString().toLowerCase();
							return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block"
						},
						addClass: function(e, t) {
							e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
						},
						removeClass: function(e, t) {
							e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
						}
					},
					getPropertyValue: function(e, t, r, i) {
						function s(e, t) {
							function r() {
								l && S.setPropertyValue(e, "display", "none")
							}
							var u = 0;
							if (8 >= p) u = b.css(e, t);
							else {
								var l = !1;
								if (/^(width|height)$/.test(t) && 0 === S.getPropertyValue(e, "display") && (l = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e))), !i) {
									if ("height" === t && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
										var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);
										return r(),
											c
									}
									if ("width" === t && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
										var d = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);
										return r(),
											d
									}
								}
								var f;
								f = a(e) === o ? n.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = n.getComputedStyle(e, null),
									p && "borderColor" === t && (t = "borderTopColor"),
									u = 9 === p && "filter" === t ? f.getPropertyValue(t) : f[t], ("" === u || null === u) && (u = e.style[t]),
									r()
							}
							if ("auto" === u && /^(top|right|bottom|left)$/i.test(t)) {
								var m = s(e, "position");
								("fixed" === m || "absolute" === m && /top|left/i.test(t)) && (u = b(e).position()[t] + "px")
							}
							return u
						}
						var u;
						if (S.Hooks.registered[t]) {
							var l = t,
								c = S.Hooks.getRoot(l);
							r === o && (r = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])),
								S.Normalizations.registered[c] && (r = S.Normalizations.registered[c]("extract", e, r)),
								u = S.Hooks.extractValue(l, r)
						} else if (S.Normalizations.registered[t]) {
							var d, f;
							d = S.Normalizations.registered[t]("name", e),
								"transform" !== d && (f = s(e, S.Names.prefixCheck(d)[0]), S.Values.isCSSNullValue(f) && S.Hooks.templates[t] && (f = S.Hooks.templates[t][1])),
								u = S.Normalizations.registered[t]("extract", e, f)
						}
						return /^[\d-]/.test(u) || (u = a(e) && a(e).isSVG && S.Names.SVGAttribute(t) ? /^(height|width)$/i.test(t) ? e.getBBox()[t] : e.getAttribute(t) : s(e, S.Names.prefixCheck(t)[0])),
							S.Values.isCSSNullValue(u) && (u = 0),
							v.debug >= 2 && void 0,
							u
					},
					setPropertyValue: function(e, t, r, o, i) {
						var s = t;
						if ("scroll" === t) i.container ? i.container["scroll" + i.direction] = r : "Left" === i.direction ? n.scrollTo(r, i.alternateValue) : n.scrollTo(i.alternateValue, r);
						else if (S.Normalizations.registered[t] && "transform" === S.Normalizations.registered[t]("name", e)) S.Normalizations.registered[t]("inject", e, r),
							s = "transform",
							r = a(e).transformCache[t];
						else {
							if (S.Hooks.registered[t]) {
								var u = t,
									l = S.Hooks.getRoot(t);
								o = o || S.getPropertyValue(e, l),
									r = S.Hooks.injectValue(u, r, o),
									t = l
							}
							if (S.Normalizations.registered[t] && (r = S.Normalizations.registered[t]("inject", e, r), t = S.Normalizations.registered[t]("name", e)), s = S.Names.prefixCheck(t)[0], 8 >= p) try {
								e.style[s] = r
							} catch (c) {
								v.debug && void 0
							} else a(e) && a(e).isSVG && S.Names.SVGAttribute(t) ? e.setAttribute(t, r) : e.style[s] = r;
							v.debug >= 2 && void 0
						}
						return [s, r]
					},
					flushTransformCache: function(e) {
						function t(t) {
							return parseFloat(S.getPropertyValue(e, t))
						}
						var n = "";
						if ((p || v.State.isAndroid && !v.State.isChrome) && a(e).isSVG) {
							var r = {
								translate: [t("translateX"), t("translateY")],
								skewX: [t("skewX")],
								skewY: [t("skewY")],
								scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
								rotate: [t("rotateZ"), 0, 0]
							};
							b.each(a(e).transformCache,
								function(e) {
									/ ^translate /
									i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"),
										r[e] && (n += e + "(" + r[e].join(" ") + ") ", delete r[e])
								})
						} else {
							var o, i;
							b.each(a(e).transformCache,
									function(t) {
										return o = a(e).transformCache[t],
											"transformPerspective" === t ? (i = o, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(n += t + o + " "))
									}),
								i && (n = "perspective" + i + " " + n)
						}
						S.setPropertyValue(e, "transform", n)
					}
				};
				S.Hooks.register(),
					S.Normalizations.register(),
					v.animate = function() {
						function e() {
							return n ? N.promise || null : s
						}

						function t() {
							function e() {
								function e(e) {
									var r = o,
										i = o,
										a = o;
									return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) ? a = e[1] : (g.isString(e[1]) || g.isArray(e[1])) && (i = u(e[1], n.duration), e[2] !== o && (a = e[2]))) : r = e,
										i = i || n.easing,
										g.isFunction(r) && (r = r.call(t, E, C)),
										g.isFunction(a) && (a = a.call(t, E, C)), [r || 0, i, a]
								}

								function c(e, t) {
									var n, r;
									return r = (t || 0).toString().toLowerCase().replace(/[%A-z]+$/,
											function(e) {
												return n = e,
													""
											}),
										n || (n = S.Values.getUnitType(e)), [r, n]
								}

								function d() {
									var e = {
											parent: t.parentNode,
											position: S.getPropertyValue(t, "position"),
											fontSize: S.getPropertyValue(t, "fontSize")
										},
										n = e.position === _.lastPosition && e.parent === _.lastParent,
										o = e.fontSize === _.lastFontSize && e.parent === _.lastParent;
									_.lastParent = e.parent,
										_.lastPosition = e.position,
										_.lastFontSize = e.fontSize,
										null === _.remToPxRatio && (_.remToPxRatio = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16);
									var i = {
											overflowX: null,
											overflowY: null,
											boxSizing: null,
											width: null,
											minWidth: null,
											maxWidth: null,
											height: null,
											minHeight: null,
											maxHeight: null,
											paddingLeft: null
										},
										s = {},
										u = 10;
									if (s.remToPxRatio = _.remToPxRatio, p && !a(t).isSVG) var l = /^auto$/i.test(t.currentStyle.width),
										c = /^auto$/i.test(t.currentStyle.height);
									n && o || (a(t).isSVG || (i.overflowX = S.getPropertyValue(t, "overflowX"), i.overflowY = S.getPropertyValue(t, "overflowY"), i.boxSizing = S.getPropertyValue(t, "boxSizing"), i.minWidth = S.getPropertyValue(t, "minWidth"), i.maxWidth = S.getPropertyValue(t, "maxWidth") || "none", i.minHeight = S.getPropertyValue(t, "minHeight"), i.maxHeight = S.getPropertyValue(t, "maxHeight") || "none", i.paddingLeft = S.getPropertyValue(t, "paddingLeft")), i.width = S.getPropertyValue(t, "width", null, !0), i.height = S.getPropertyValue(t, "height", null, !0)),
										n ? (s.percentToPxRatioWidth = _.lastPercentToPxWidth, s.percentToPxRatioHeight = _.lastPercentToPxHeight) : (a(t).isSVG || (S.setPropertyValue(t, "overflowX", "hidden"), S.setPropertyValue(t, "overflowY", "hidden"), S.setPropertyValue(t, "boxSizing", "content-box"), S.setPropertyValue(t, "minWidth", u + "%"), S.setPropertyValue(t, "maxWidth", u + "%"), S.setPropertyValue(t, "minHeight", u + "%"), S.setPropertyValue(t, "maxHeight", u + "%")), S.setPropertyValue(t, "width", u + "%"), S.setPropertyValue(t, "height", u + "%")),
										o ? s.emToPxRatio = _.lastEmToPx : a(t).isSVG || S.setPropertyValue(t, "paddingLeft", u + "em"),
										n || (s.percentToPxRatioWidth = _.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(t, "width", null, !0)) || 1) / u, s.percentToPxRatioHeight = _.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(t, "height", null, !0)) || 1) / u),
										o || (s.emToPxRatio = _.lastEmToPx = (parseFloat(S.getPropertyValue(t, "paddingLeft")) || 1) / u);
									for (var d in i) null !== i[d] && S.setPropertyValue(t, d, i[d]);
									return a(t).isSVG || (p ? (l && S.setPropertyValue(t, "width", "auto"), c && S.setPropertyValue(t, "height", "auto")) : (S.setPropertyValue(t, "height", "auto"), i.height !== S.getPropertyValue(t, "height", null, !0) && S.setPropertyValue(t, "height", i.height), S.setPropertyValue(t, "width", "auto"), i.width !== S.getPropertyValue(t, "width", null, !0) && S.setPropertyValue(t, "width", i.width))),
										v.debug >= 1 && void 0,
										s
								}
								if (n.begin && 0 === E && n.begin.call(h, h), "scroll" === k) {
									var f, m, x, T = /^x$/i.test(n.axis) ? "Left" : "Top",
										O = parseFloat(n.offset) || 0;
									n.container ? n.container.jquery || g.isNode(n.container) ? (n.container = n.container[0] || n.container, f = n.container["scroll" + T], x = f + b(t).position()[T.toLowerCase()] + O) : n.container = null : (f = v.State.scrollAnchor[v.State["scrollProperty" + T]], m = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === T ? "Top" : "Left")]], x = b(t).offset()[T.toLowerCase()] + O),
										s = {
											scroll: {
												rootPropertyValue: !1,
												startValue: f,
												currentValue: f,
												endValue: x,
												unitType: "",
												easing: n.easing,
												scrollData: {
													container: n.container,
													direction: T,
													alternateValue: m
												}
											},
											element: t
										}
								} else if ("reverse" === k) {
									if (!a(t).tweensContainer) return void b.dequeue(t, n.queue);
									"none" === a(t).opts.display && (a(t).opts.display = "block"),
										"hidden" === a(t).opts.visibility && (a(t).opts.visibility = "visible"),
										a(t).opts.loop = !1,
										a(t).opts.begin = null,
										a(t).opts.complete = null,
										w.easing || delete n.easing,
										w.duration || delete n.duration,
										n = b.extend({},
											a(t).opts, n);
									var j = b.extend(!0, {},
										a(t).tweensContainer);
									for (var A in j)
										if ("element" !== A) {
											var $ = j[A].startValue;
											j[A].startValue = j[A].currentValue = j[A].endValue,
												j[A].endValue = $,
												w && (j[A].easing = n.easing)
										}
									s = j
								} else if ("start" === k) {
									var j;
									a(t).tweensContainer && a(t).isAnimating === !0 && (j = a(t).tweensContainer);
									for (var I in y) {
										var P = e(y[I]),
											M = P[0],
											L = P[1],
											D = P[2];
										I = S.Names.camelCase(I);
										var H = S.Hooks.getRoot(I),
											V = !1;
										if (a(t).isSVG || S.Names.prefixCheck(H)[1] !== !1 || S.Normalizations.registered[H] !== o) {
											(n.display && "none" !== n.display || n.visibility && "hidden" !== n.visibility) && /opacity|filter/.test(I) && !D && 0 !== M && (D = 0),
												n._cacheValues && j && j[I] ? (D === o && (D = j[I].endValue + j[I].unitType), V = a(t).rootPropertyValueCache[H]) : S.Hooks.registered[I] ? D === o ? (V = S.getPropertyValue(t, H), D = S.getPropertyValue(t, I, V)) : V = S.Hooks.templates[H][1] : D === o && (D = S.getPropertyValue(t, I));
											var F, q, U, Y;
											F = c(I, D),
												D = F[0],
												U = F[1],
												F = c(I, M),
												M = F[0].replace(/^([+-\/*])=/,
													function(e, t) {
														return Y = t,
															""
													}),
												q = F[1],
												D = parseFloat(D) || 0,
												M = parseFloat(M) || 0;
											var B;
											if ("%" === q && (/^(fontSize|lineHeight)$/.test(I) ? (M /= 100, q = "em") : /^scale/.test(I) ? (M /= 100, q = "") : /(Red|Green|Blue)$/i.test(I) && (M = M / 100 * 255, q = "")), /[\/*]/.test(Y)) q = U;
											else if (U !== q && 0 !== D)
												if (0 === M) q = U;
												else {
													B = B || d();
													var G = /margin|padding|left|right|width|text|word|letter/i.test(I) || /X$/.test(I) ? "x" : "y";
													switch (U) {
														case "%":
															D *= "x" === G ? B.percentToPxRatioWidth : B.percentToPxRatioHeight;
															break;
														case "em":
															D *= B.emToPxRatio;
															break;
														case "rem":
															D *= B.remToPxRatio;
															break;
														case "px":
													}
													switch (q) {
														case "%":
															D *= 1 / ("x" === G ? B.percentToPxRatioWidth : B.percentToPxRatioHeight);
															break;
														case "em":
															D *= 1 / B.emToPxRatio;
															break;
														case "rem":
															D *= 1 / B.remToPxRatio;
															break;
														case "px":
													}
												}
											switch (Y) {
												case "+":
													M = D + M;
													break;
												case "-":
													M = D - M;
													break;
												case "*":
													M = D * M;
													break;
												case "/":
													M = D / M
											}
											s[I] = {
													rootPropertyValue: V,
													startValue: D,
													currentValue: D,
													endValue: M,
													unitType: q,
													easing: L
												},
												v.debug && void 0
										} else v.debug && void 0
									}
									s.element = t
								}
								s.element && (S.Values.addClass(t, ":animating"), R.push(s), a(t).tweensContainer = s, a(t).opts = n, a(t).isAnimating = !0, E === C - 1 ? (v.State.calls.length > 1e4 && (v.State.calls = i(v.State.calls)), v.State.calls.push([R, h, n, null, N.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, l())) : E++)
							}
							var t = this,
								n = b.extend({},
									v.defaults, w),
								s = {};
							if (a(t) === o && b.data(t, d, {
								isSVG: g.isSVG(t),
								isAnimating: !1,
								computedStyle: null,
								tweensContainer: null,
								rootPropertyValueCache: {},
								transformCache: {}
							}), parseFloat(n.delay) && n.queue !== !1 && b.queue(t, n.queue,
								function(e) {
									v.velocityQueueEntryFlag = !0,
										setTimeout(e, parseFloat(n.delay))
								}), v.mock === !0) n.duration = 1;
							else switch (n.duration.toString().toLowerCase()) {
								case "fast":
									n.duration = 200;
									break;
								case "normal":
									n.duration = f;
									break;
								case "slow":
									n.duration = 600;
									break;
								default:
									n.duration = parseFloat(n.duration) || 1
							}
							n.easing = u(n.easing, n.duration),
								n.begin && !g.isFunction(n.begin) && (n.begin = null),
								n.progress && !g.isFunction(n.progress) && (n.progress = null),
								n.complete && !g.isFunction(n.complete) && (n.complete = null),
								n.display && (n.display = n.display.toString().toLowerCase(), "auto" === n.display && (n.display = v.CSS.Values.getDisplayType(t))),
								n.visibility && (n.visibility = n.visibility.toString().toLowerCase()),
								n.mobileHA = n.mobileHA && v.State.isMobile && !v.State.isGingerbread,
								n.queue === !1 ? n.delay ? setTimeout(e, n.delay) : e() : b.queue(t, n.queue,
									function(t) {
										return "clearQueue" === t ? (N.promise && N.resolver(h), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
									}),
								"" !== n.queue && "fx" !== n.queue || "inprogress" === b.queue(t)[0] || b.dequeue(t)
						}
						var n, s, m, h, y, w, x = arguments[0] && (b.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
						if (g.isWrapped(this) ? (n = !1, m = 0, h = this, s = this) : (n = !0, m = 1, h = x ? arguments[0].elements : arguments[0]), h = g.isWrapped(h) ? [].slice.call(h) : h) {
							x ? (y = arguments[0].properties, w = arguments[0].options) : (y = arguments[m], w = arguments[m + 1]);
							var C = g.isArray(h) || g.isNodeList(h) ? h.length : 1,
								E = 0;
							if ("stop" !== y && !b.isPlainObject(w)) {
								var T = m + 1;
								w = {};
								for (var O = T; O < arguments.length; O++) !g.isArray(arguments[O]) && /^\d/.test(arguments[O]) ? w.duration = parseFloat(arguments[O]) : g.isString(arguments[O]) || g.isArray(arguments[O]) ? w.easing = arguments[O] : g.isFunction(arguments[O]) && (w.complete = arguments[O])
							}
							var N = {
								promise: null,
								resolver: null,
								rejecter: null
							};
							n && v.Promise && (N.promise = new v.Promise(function(e, t) {
								N.resolver = e,
									N.rejecter = t
							}));
							var k;
							switch (y) {
								case "scroll":
									k = "scroll";
									break;
								case "reverse":
									k = "reverse";
									break;
								case "stop":
									var j = [];
									return b.each(v.State.calls,
											function(e, t) {
												t !== !1 && b.each(g.isNode(t[1]) ? [t[1]] : t[1],
													function(t, n) {
														b.each(g.isNode(h) ? [h] : h,
															function(t, r) {
																if (r === n) {
																	if (a(r) && b.each(a(r).tweensContainer,
																		function(e, t) {
																			t.endValue = t.currentValue
																		}), w === !0 || g.isString(w)) {
																		var o = g.isString(w) ? w : "";
																		b.each(b.queue(r, o),
																				function(e, t) {
																					g.isFunction(t) && t("clearQueue")
																				}),
																			b.queue(r, o, [])
																	}
																	j.push(e)
																}
															})
													})
											}),
										b.each(j,
											function(e, t) {
												c(t, !0)
											}),
										N.promise && N.resolver(h),
										e();
								default:
									if (!b.isPlainObject(y) || b.isEmptyObject(y)) {
										if (g.isString(y) && v.Sequences[y]) {
											var A = w.duration;
											return w.backwards === !0 && (h = (h.jquery ? [].slice.call(h) : h).reverse()),
												b.each(h,
													function(e, t) {
														parseFloat(w.stagger) ? w.delay = parseFloat(w.stagger) * e : g.isFunction(w.stagger) && (w.delay = w.stagger.call(t, e, C)),
															w.drag && (w.duration = parseFloat(A) || (/^(callout|transition)/.test(y) ? 1e3 : f), w.duration = Math.max(w.duration * (w.backwards ? 1 - e / C : (e + 1) / C), .75 * w.duration, 200)),
															v.Sequences[y].call(t, t, w || {},
																e, C, h, N.promise ? N : o)
													}),
												e()
										}
										var $ = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered sequence. Aborting.";
										return N.promise ? N.rejecter(new Error($)) : void 0,
											e()
									}
									k = "start"
							}
							var _ = {
									lastParent: null,
									lastPosition: null,
									lastFontSize: null,
									lastPercentToPxWidth: null,
									lastPercentToPxHeight: null,
									lastEmToPx: null,
									remToPxRatio: null
								},
								R = [];
							b.each(g.isNode(h) ? [h] : h,
								function(e, n) {
									g.isNode(n) && t.call(n)
								});
							var I, P = b.extend({},
								v.defaults, w);
							if (P.loop = parseInt(P.loop), I = 2 * P.loop - 1, P.loop)
								for (var M = 0; I > M; M++) {
									var L = {
										delay: P.delay
									};
									P.complete && M === I - 1 && (L.complete = P.complete),
										v.animate(h, "reverse", L)
								}
							return e()
						}
					};
				var x = n.jQuery || n.Zepto;
				x && (x.fn.velocity = v.animate, x.fn.velocity.defaults = v.defaults),
					"undefined" != typeof define && define.amd ? define(function() {
						return v
					}) : "undefined" != typeof t && t.exports && (t.exports = v),
					b.each(["Down", "Up"],
						function(e, t) {
							v.Sequences["slide" + t] = function(e, n) {
								var r = b.extend({},
										n),
									o = {
										height: null,
										marginTop: null,
										marginBottom: null,
										paddingTop: null,
										paddingBottom: null,
										overflow: null,
										overflowX: null,
										overflowY: null
									},
									i = r.begin,
									a = r.complete,
									s = !1;
								null !== r.display && (r.display = "Down" === t ? r.display || "auto" : r.display || "none"),
									r.begin = function() {
										function n() {
											o.height = parseFloat(v.CSS.getPropertyValue(e, "height")),
												e.style.height = "auto",
												v.CSS.getPropertyValue(e, "height") === o.height && (s = !0),
												v.CSS.setPropertyValue(e, "height", o.height + "px")
										}
										if ("Down" === t) {
											o.overflow = [v.CSS.getPropertyValue(e, "overflow"), 0],
												o.overflowX = [v.CSS.getPropertyValue(e, "overflowX"), 0],
												o.overflowY = [v.CSS.getPropertyValue(e, "overflowY"), 0],
												e.style.overflow = "hidden",
												e.style.overflowX = "visible",
												e.style.overflowY = "hidden",
												n();
											for (var r in o)
												if (!/^overflow/.test(r)) {
													var a = v.CSS.getPropertyValue(e, r);
													"height" === r && (a = parseFloat(a)),
														o[r] = [a, 0]
												}
										} else {
											n();
											for (var r in o) {
												var a = v.CSS.getPropertyValue(e, r);
												"height" === r && (a = parseFloat(a)),
													o[r] = [0, a]
											}
											e.style.overflow = "hidden",
												e.style.overflowX = "visible",
												e.style.overflowY = "hidden"
										}
										i && i.call(e, e)
									},
									r.complete = function(e) {
										var n = "Down" === t ? 0 : 1;
										s === !0 ? o.height[n] = "auto" : o.height[n] += "px";
										for (var r in o) e.style[r] = o[r][n];
										a && a.call(e, e)
									},
									v.animate(e, o, r)
							}
						}),
					b.each(["In", "Out"],
						function(e, t) {
							v.Sequences["fade" + t] = function(e, n, r, o) {
								var i = b.extend({},
										n),
									a = {
										opacity: "In" === t ? 1 : 0
									};
								r !== o - 1 && (i.complete = i.begin = null),
									null !== i.display && (i.display = i.display || ("In" === t ? "auto" : "none")),
									v.animate(this, a, i)
							}
						})
			}(window.jQuery || window.Zepto || window, window, document)
		}, {}
	],
	69: [
		function(require, module, exports) {
			var JSON;
			JSON || (JSON = {}),
				function() {
					function str(e, t) {
						var n, r, o, i, a, s = gap,
							u = t[e];
						switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)), "function" == typeof rep && (u = rep.call(t, e, u)), typeof u) {
							case "string":
								return quote(u);
							case "number":
								return isFinite(u) ? String(u) : "null";
							case "boolean":
							case "null":
								return String(u);
							case "object":
								if (!u) return "null";
								if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(u)) {
									for (i = u.length, n = 0; i > n; n += 1) a[n] = str(n, u) || "null";
									return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]",
										gap = s,
										o
								}
								if (rep && "object" == typeof rep)
									for (i = rep.length, n = 0; i > n; n += 1) "string" == typeof rep[n] && (r = rep[n], o = str(r, u), o && a.push(quote(r) + (gap ? ": " : ":") + o));
								else
									for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (o = str(r, u), o && a.push(quote(r) + (gap ? ": " : ":") + o));
								return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}",
									gap = s,
									o
						}
					}

					function quote(e) {
						return escapable.lastIndex = 0,
							escapable.test(e) ? '"' + e.replace(escapable,
								function(e) {
									var t = meta[e];
									return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
								}) + '"' : '"' + e + '"'
					}

					function f(e) {
						return 10 > e ? "0" + e : e
					}
					"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
							return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
						},
						String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
							return this.valueOf()
						});
					var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
						escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
						gap, indent, meta = {
							"\b": "\\b",
							"	": "\\t",
							"\n": "\\n",
							"\f": "\\f",
							"\r": "\\r",
							'"': '\\"',
							"\\": "\\\\"
						},
						rep;
					"function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
							var r;
							if (gap = "", indent = "", "number" == typeof n)
								for (r = 0; n > r; r += 1) indent += " ";
							else "string" == typeof n && (indent = n);
							if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
								"": e
							});
							throw new Error("JSON.stringify")
						}),
						"function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
							function walk(e, t) {
								var n, r, o = e[t];
								if (o && "object" == typeof o)
									for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
								return reviver.call(e, t, o)
							}
							var j;
							if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx,
								function(e) {
									return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
								})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
								"function" == typeof reviver ? walk({
										"": j
									},
									"") : j;
							throw new SyntaxError("JSON.parse")
						})
				}(),
				SockJS = function() {
					var e = document,
						t = window,
						n = {},
						r = function() {};
					r.prototype.addEventListener = function(e, t) {
							this._listeners || (this._listeners = {}),
								e in this._listeners || (this._listeners[e] = []);
							var r = this._listeners[e]; - 1 === n.arrIndexOf(r, t) && r.push(t)
						},
						r.prototype.removeEventListener = function(e, t) {
							if (this._listeners && e in this._listeners) {
								var r = this._listeners[e],
									o = n.arrIndexOf(r, t);
								return -1 !== o ? void(r.length > 1 ? this._listeners[e] = r.slice(0, o).concat(r.slice(o + 1)) : delete this._listeners[e]) : void 0
							}
						},
						r.prototype.dispatchEvent = function(e) {
							var t = e.type,
								n = Array.prototype.slice.call(arguments, 0);
							if (this["on" + t] && this["on" + t].apply(this, n), this._listeners && t in this._listeners)
								for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].apply(this, n)
						};
					var o = function(e, t) {
						if (this.type = e, "undefined" != typeof t)
							for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n])
					};
					o.prototype.toString = function() {
						var e = [];
						for (var t in this)
							if (this.hasOwnProperty(t)) {
								var n = this[t];
								"function" == typeof n && (n = "[function]"),
									e.push(t + "=" + n)
							}
						return "SimpleEvent(" + e.join(", ") + ")"
					};
					var i = function(e) {
						var t = this;
						t._events = e || [],
							t._listeners = {}
					};
					i.prototype.emit = function(e) {
							var t = this;
							if (t._verifyType(e), !t._nuked) {
								var n = Array.prototype.slice.call(arguments, 1);
								if (t["on" + e] && t["on" + e].apply(t, n), e in t._listeners)
									for (var r = 0; r < t._listeners[e].length; r++) t._listeners[e][r].apply(t, n)
							}
						},
						i.prototype.on = function(e, t) {
							var n = this;
							n._verifyType(e),
								n._nuked || (e in n._listeners || (n._listeners[e] = []), n._listeners[e].push(t))
						},
						i.prototype._verifyType = function(e) {
							var t = this; - 1 === n.arrIndexOf(t._events, e) && n.log("Event " + JSON.stringify(e) + " not listed " + JSON.stringify(t._events) + " in " + t)
						},
						i.prototype.nuke = function() {
							var e = this;
							e._nuked = !0;
							for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
							e._listeners = {}
						};
					var a = "abcdefghijklmnopqrstuvwxyz0123456789_";
					n.random_string = function(e, t) {
							t = t || a.length;
							var n, r = [];
							for (n = 0; e > n; n++) r.push(a.substr(Math.floor(Math.random() * t), 1));
							return r.join("")
						},
						n.random_number = function(e) {
							return Math.floor(Math.random() * e)
						},
						n.random_number_string = function(e) {
							var t = ("" + (e - 1)).length,
								r = Array(t + 1).join("0");
							return (r + n.random_number(e)).slice(-t)
						},
						n.getOrigin = function(e) {
							e += "/";
							var t = e.split("/").slice(0, 3);
							return t.join("/")
						},
						n.isSameOriginUrl = function(e, n) {
							return n || (n = t.location.href),
								e.split("/").slice(0, 3).join("/") === n.split("/").slice(0, 3).join("/")
						},
						n.getParentDomain = function(e) {
							if (/^[0-9.]*$/.test(e)) return e;
							if (/^\[/.test(e)) return e;
							if (!/[.]/.test(e)) return e;
							var t = e.split(".").slice(1);
							return t.join(".")
						},
						n.objectExtend = function(e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
							return e
						};
					var s = "_jp";
					n.polluteGlobalNamespace = function() {
							s in t || (t[s] = {})
						},
						n.closeFrame = function(e, t) {
							return "c" + JSON.stringify([e, t])
						},
						n.userSetCode = function(e) {
							return 1e3 === e || e >= 3e3 && 4999 >= e
						},
						n.countRTO = function(e) {
							var t;
							return t = e > 100 ? 3 * e : e + 200
						},
						n.log = function() {
							t.console && console.log && console.log.apply && console.log.apply(console, arguments)
						},
						n.bind = function(e, t) {
							return e.bind ? e.bind(t) : function() {
								return e.apply(t, arguments)
							}
						},
						n.flatUrl = function(e) {
							return -1 === e.indexOf("?") && -1 === e.indexOf("#")
						},
						n.amendUrl = function(t) {
							var r = e.location;
							if (!t) throw new Error("Wrong url for SockJS");
							if (!n.flatUrl(t)) throw new Error("Only basic urls are supported in SockJS");
							return 0 === t.indexOf("//") && (t = r.protocol + t),
								0 === t.indexOf("/") && (t = r.protocol + "//" + r.host + t),
								t = t.replace(/[/] + $ /,
									"")
						},
						n.arrIndexOf = function(e, t) {
							for (var n = 0; n < e.length; n++)
								if (e[n] === t) return n;
							return -1
						},
						n.arrSkip = function(e, t) {
							var r = n.arrIndexOf(e, t);
							if (-1 === r) return e.slice();
							var o = e.slice(0, r);
							return o.concat(e.slice(r + 1))
						},
						n.isArray = Array.isArray ||
						function(e) {
							return {}.toString.call(e).indexOf("Array") >= 0
						},
						n.delay = function(e, t) {
							return "function" == typeof e && (t = e, e = 0),
								setTimeout(t, e)
						};
					var u, l = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
						c = {
							"\x00": "\\u0000",
							"": "\\u0001",
							"": "\\u0002",
							"": "\\u0003",
							"": "\\u0004",
							"": "\\u0005",
							"": "\\u0006",
							"": "\\u0007",
							"\b": "\\b",
							"	": "\\t",
							"\n": "\\n",
							"": "\\u000b",
							"\f": "\\f",
							"\r": "\\r",
							"": "\\u000e",
							"": "\\u000f",
							"": "\\u0010",
							"": "\\u0011",
							"": "\\u0012",
							"": "\\u0013",
							"": "\\u0014",
							"": "\\u0015",
							"": "\\u0016",
							"": "\\u0017",
							"": "\\u0018",
							"": "\\u0019",
							"": "\\u001a",
							"": "\\u001b",
							"": "\\u001c",
							"": "\\u001d",
							"": "\\u001e",
							"": "\\u001f",
							'"': '\\"',
							"\\": "\\\\",
							"": "\\u007f",
							"": "\\u0080",
							"": "\\u0081",
							"": "\\u0082",
							"": "\\u0083",
							"": "\\u0084",
							"": "\\u0085",
							"": "\\u0086",
							"": "\\u0087",
							"": "\\u0088",
							"": "\\u0089",
							"": "\\u008a",
							"": "\\u008b",
							"": "\\u008c",
							"": "\\u008d",
							"": "\\u008e",
							"": "\\u008f",
							"": "\\u0090",
							"": "\\u0091",
							"": "\\u0092",
							"": "\\u0093",
							"": "\\u0094",
							"": "\\u0095",
							"": "\\u0096",
							"": "\\u0097",
							"": "\\u0098",
							"": "\\u0099",
							"": "\\u009a",
							"": "\\u009b",
							"": "\\u009c",
							"": "\\u009d",
							"": "\\u009e",
							"": "\\u009f",
							"­": "\\u00ad",
							"؀": "\\u0600",
							"؁": "\\u0601",
							"؂": "\\u0602",
							"؃": "\\u0603",
							"؄": "\\u0604",
							"܏": "\\u070f",
							"឴": "\\u17b4",
							"឵": "\\u17b5",
							"‌": "\\u200c",
							"‍": "\\u200d",
							"‎": "\\u200e",
							"‏": "\\u200f",
							"\u2028": "\\u2028",
							"\u2029": "\\u2029",
							"‪": "\\u202a",
							"‫": "\\u202b",
							"‬": "\\u202c",
							"‭": "\\u202d",
							"‮": "\\u202e",
							" ": "\\u202f",
							"⁠": "\\u2060",
							"⁡": "\\u2061",
							"⁢": "\\u2062",
							"⁣": "\\u2063",
							"⁤": "\\u2064",
							"⁥": "\\u2065",
							"⁦": "\\u2066",
							"⁧": "\\u2067",
							"⁨": "\\u2068",
							"⁩": "\\u2069",
							"⁪": "\\u206a",
							"⁫": "\\u206b",
							"⁬": "\\u206c",
							"⁭": "\\u206d",
							"⁮": "\\u206e",
							"⁯": "\\u206f",
							"﻿": "\\ufeff",
							"￰": "\\ufff0",
							"￱": "\\ufff1",
							"￲": "\\ufff2",
							"￳": "\\ufff3",
							"￴": "\\ufff4",
							"￵": "\\ufff5",
							"￶": "\\ufff6",
							"￷": "\\ufff7",
							"￸": "\\ufff8",
							"￹": "\\ufff9",
							"￺": "\\ufffa",
							"￻": "\\ufffb",
							"￼": "\\ufffc",
							"�": "\\ufffd",
							"￾": "\\ufffe",
							"￿": "\\uffff"
						},
						d = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
						f = JSON && JSON.stringify ||
						function(e) {
							return l.lastIndex = 0,
								l.test(e) && (e = e.replace(l,
									function(e) {
										return c[e]
									})),
								'"' + e + '"'
						},
						m = function(e) {
							var t, n = {},
								r = [];
							for (t = 0; 65536 > t; t++) r.push(String.fromCharCode(t));
							return e.lastIndex = 0,
								r.join("").replace(e,
									function(e) {
										return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4),
											""
									}),
								e.lastIndex = 0,
								n
						};
					n.quote = function(e) {
						var t = f(e);
						return d.lastIndex = 0,
							d.test(t) ? (u || (u = m(d)), t.replace(d,
								function(e) {
									return u[e]
								})) : t
					};
					var p = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
					n.probeProtocols = function() {
							for (var e = {},
								t = 0; t < p.length; t++) {
								var n = p[t];
								e[n] = E[n] && E[n].enabled()
							}
							return e
						},
						n.detectProtocols = function(e, t, n) {
							var r = {},
								o = [];
							t || (t = p);
							for (var i = 0; i < t.length; i++) {
								var a = t[i];
								r[a] = e[a]
							}
							var s = function(e) {
								var t = e.shift();
								r[t] ? o.push(t) : e.length > 0 && s(e)
							};
							return n.websocket !== !1 && s(["websocket"]),
								r["xhr-streaming"] && !n.null_origin ? o.push("xhr-streaming") : !r["xdr-streaming"] || n.cookie_needed || n.null_origin ? s(["iframe-eventsource", "iframe-htmlfile"]) : o.push("xdr-streaming"),
								r["xhr-polling"] && !n.null_origin ? o.push("xhr-polling") : !r["xdr-polling"] || n.cookie_needed || n.null_origin ? s(["iframe-xhr-polling", "jsonp-polling"]) : o.push("xdr-polling"),
								o
						};
					var h = "_sockjs_global";
					n.createHook = function() {
							var e = "a" + n.random_string(8);
							if (!(h in t)) {
								var r = {};
								t[h] = function(e) {
									return e in r || (r[e] = {
											id: e,
											del: function() {
												delete r[e]
											}
										}),
										r[e]
								}
							}
							return t[h](e)
						},
						n.attachMessage = function(e) {
							n.attachEvent("message", e)
						},
						n.attachEvent = function(n, r) {
							"undefined" != typeof t.addEventListener ? t.addEventListener(n, r, !1) : (e.attachEvent("on" + n, r), t.attachEvent("on" + n, r))
						},
						n.detachMessage = function(e) {
							n.detachEvent("message", e)
						},
						n.detachEvent = function(n, r) {
							"undefined" != typeof t.addEventListener ? t.removeEventListener(n, r, !1) : (e.detachEvent("on" + n, r), t.detachEvent("on" + n, r))
						};
					var g = {},
						b = !1,
						v = function() {
							for (var e in g) g[e](),
								delete g[e]
						},
						y = function() {
							b || (b = !0, v())
						};
					n.attachEvent("unload", y),
						n.unload_add = function(e) {
							var t = n.random_string(8);
							return g[t] = e,
								b && n.delay(v),
								t
						},
						n.unload_del = function(e) {
							e in g && delete g[e]
						},
						n.createIframe = function(t, r) {
							var o, i, a = e.createElement("iframe"),
								s = function() {
									clearTimeout(o);
									try {
										a.onload = null
									} catch (e) {}
									a.onerror = null
								},
								u = function() {
									a && (s(), setTimeout(function() {
											a && a.parentNode.removeChild(a),
												a = null
										},
										0), n.unload_del(i))
								},
								l = function(e) {
									a && (u(), r(e))
								},
								c = function(e, t) {
									try {
										a && a.contentWindow && a.contentWindow.postMessage(e, t)
									} catch (n) {}
								};
							return a.src = t,
								a.style.display = "none",
								a.style.position = "absolute",
								a.onerror = function() {
									l("onerror")
								},
								a.onload = function() {
									clearTimeout(o),
										o = setTimeout(function() {
												l("onload timeout")
											},
											2e3)
								},
								e.body.appendChild(a),
								o = setTimeout(function() {
										l("timeout")
									},
									15e3),
								i = n.unload_add(u), {
									post: c,
									cleanup: u,
									loaded: s
								}
						},
						n.createHtmlfile = function(e, r) {
							var o, i, a, u = new ActiveXObject("htmlfile"),
								l = function() {
									clearTimeout(o)
								},
								c = function() {
									u && (l(), n.unload_del(i), a.parentNode.removeChild(a), a = u = null, CollectGarbage())
								},
								d = function(e) {
									u && (c(), r(e))
								},
								f = function(e, t) {
									try {
										a && a.contentWindow && a.contentWindow.postMessage(e, t)
									} catch (n) {}
								};
							u.open(),
								u.write('<html><script>document.domain="' + document.domain + '";</script></html>'),
								u.close(),
								u.parentWindow[s] = t[s];
							var m = u.createElement("div");
							return u.body.appendChild(m),
								a = u.createElement("iframe"),
								m.appendChild(a),
								a.src = e,
								o = setTimeout(function() {
										d("timeout")
									},
									15e3),
								i = n.unload_add(c), {
									post: f,
									cleanup: c,
									loaded: l
								}
						};
					var w = function() {};
					w.prototype = new i(["chunk", "finish"]),
						w.prototype._start = function(e, r, o, i) {
							var a = this;
							try {
								a.xhr = new XMLHttpRequest
							} catch (s) {}
							if (!a.xhr) try {
									a.xhr = new t.ActiveXObject("Microsoft.XMLHTTP")
								} catch (s) {}(t.ActiveXObject || t.XDomainRequest) && (r += (-1 === r.indexOf("?") ? "?" : "&") + "t=" + +new Date),
								a.unload_ref = n.unload_add(function() {
									a._cleanup(!0)
								});
							try {
								a.xhr.open(e, r, !0)
							} catch (u) {
								return a.emit("finish", 0, ""),
									void a._cleanup()
							}
							if (i && i.no_credentials || (a.xhr.withCredentials = "true"), i && i.headers)
								for (var l in i.headers) a.xhr.setRequestHeader(l, i.headers[l]);
							a.xhr.onreadystatechange = function() {
									if (a.xhr) {
										var e = a.xhr;
										switch (e.readyState) {
											case 3:
												try {
													var t = e.status,
														n = e.responseText
												} catch (e) {}
												1223 === t && (t = 204),
													n && n.length > 0 && a.emit("chunk", t, n);
												break;
											case 4:
												var t = e.status;
												1223 === t && (t = 204),
													a.emit("finish", t, e.responseText),
													a._cleanup(!1)
										}
									}
								},
								a.xhr.send(o)
						},
						w.prototype._cleanup = function(e) {
							var t = this;
							if (t.xhr) {
								if (n.unload_del(t.unload_ref), t.xhr.onreadystatechange = function() {},
									e) try {
									t.xhr.abort()
								} catch (r) {}
								t.unload_ref = t.xhr = null
							}
						},
						w.prototype.close = function() {
							var e = this;
							e.nuke(),
								e._cleanup(!0)
						};
					var S = n.XHRCorsObject = function() {
						var e = this,
							t = arguments;
						n.delay(function() {
							e._start.apply(e, t)
						})
					};
					S.prototype = new w;
					var x = n.XHRLocalObject = function(e, t, r) {
						var o = this;
						n.delay(function() {
							o._start(e, t, r, {
								no_credentials: !0
							})
						})
					};
					x.prototype = new w;
					var C = n.XDRObject = function(e, t, r) {
						var o = this;
						n.delay(function() {
							o._start(e, t, r)
						})
					};
					C.prototype = new i(["chunk", "finish"]),
						C.prototype._start = function(e, t, r) {
							var o = this,
								i = new XDomainRequest;
							t += (-1 === t.indexOf("?") ? "?" : "&") + "t=" + +new Date;
							var a = i.ontimeout = i.onerror = function() {
								o.emit("finish", 0, ""),
									o._cleanup(!1)
							};
							i.onprogress = function() {
									o.emit("chunk", 200, i.responseText)
								},
								i.onload = function() {
									o.emit("finish", 200, i.responseText),
										o._cleanup(!1)
								},
								o.xdr = i,
								o.unload_ref = n.unload_add(function() {
									o._cleanup(!0)
								});
							try {
								o.xdr.open(e, t),
									o.xdr.send(r)
							} catch (s) {
								a()
							}
						},
						C.prototype._cleanup = function(e) {
							var t = this;
							if (t.xdr) {
								if (n.unload_del(t.unload_ref), t.xdr.ontimeout = t.xdr.onerror = t.xdr.onprogress = t.xdr.onload = null, e) try {
									t.xdr.abort()
								} catch (r) {}
								t.unload_ref = t.xdr = null
							}
						},
						C.prototype.close = function() {
							var e = this;
							e.nuke(),
								e._cleanup(!0)
						},
						n.isXHRCorsCapable = function() {
							return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : t.XDomainRequest && e.domain ? 2 : L.enabled() ? 3 : 4
						};
					var E = function(e, r, o) {
						if (this === t) return new E(e, r, o);
						var i, a = this;
						a._options = {
								devel: !1,
								debug: !1,
								protocols_whitelist: [],
								info: void 0,
								rtt: void 0
							},
							o && n.objectExtend(a._options, o),
							a._base_url = n.amendUrl(e),
							a._server = a._options.server || n.random_number_string(1e3),
							a._options.protocols_whitelist && a._options.protocols_whitelist.length ? i = a._options.protocols_whitelist : (i = "string" == typeof r && r.length > 0 ? [r] : n.isArray(r) ? r : null, i && a._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')),
							a._protocols = [],
							a.protocol = null,
							a.readyState = E.CONNECTING,
							a._ir = Y(a._base_url),
							a._ir.onfinish = function(e, t) {
								a._ir = null,
									e ? (a._options.info && (e = n.objectExtend(e, a._options.info)), a._options.rtt && (t = a._options.rtt), a._applyInfo(e, t, i), a._didClose()) : a._didClose(1002, "Can't connect to server", !0)
							}
					};
					E.prototype = new r,
						E.version = "0.3.4",
						E.CONNECTING = 0,
						E.OPEN = 1,
						E.CLOSING = 2,
						E.CLOSED = 3,
						E.prototype._debug = function() {
							this._options.debug && n.log.apply(n, arguments)
						},
						E.prototype._dispatchOpen = function() {
							var e = this;
							e.readyState === E.CONNECTING ? (e._transport_tref && (clearTimeout(e._transport_tref), e._transport_tref = null), e.readyState = E.OPEN, e.dispatchEvent(new o("open"))) : e._didClose(1006, "Server lost session")
						},
						E.prototype._dispatchMessage = function(e) {
							var t = this;
							t.readyState === E.OPEN && t.dispatchEvent(new o("message", {
								data: e
							}))
						},
						E.prototype._dispatchHeartbeat = function() {
							var e = this;
							e.readyState === E.OPEN && e.dispatchEvent(new o("heartbeat", {}))
						},
						E.prototype._didClose = function(e, t, r) {
							var i = this;
							if (i.readyState !== E.CONNECTING && i.readyState !== E.OPEN && i.readyState !== E.CLOSING) throw new Error("INVALID_STATE_ERR");
							i._ir && (i._ir.nuke(), i._ir = null),
								i._transport && (i._transport.doCleanup(), i._transport = null);
							var a = new o("close", {
								code: e,
								reason: t,
								wasClean: n.userSetCode(e)
							});
							if (!n.userSetCode(e) && i.readyState === E.CONNECTING && !r) {
								if (i._try_next_protocol(a)) return;
								a = new o("close", {
									code: 2e3,
									reason: "All transports failed",
									wasClean: !1,
									last_event: a
								})
							}
							i.readyState = E.CLOSED,
								n.delay(function() {
									i.dispatchEvent(a)
								})
						},
						E.prototype._didMessage = function(e) {
							var t = this,
								n = e.slice(0, 1);
							switch (n) {
								case "o":
									t._dispatchOpen();
									break;
								case "a":
									for (var r = JSON.parse(e.slice(1) || "[]"), o = 0; o < r.length; o++) t._dispatchMessage(r[o]);
									break;
								case "m":
									var r = JSON.parse(e.slice(1) || "null");
									t._dispatchMessage(r);
									break;
								case "c":
									var r = JSON.parse(e.slice(1) || "[]");
									t._didClose(r[0], r[1]);
									break;
								case "h":
									t._dispatchHeartbeat()
							}
						},
						E.prototype._try_next_protocol = function(t) {
							var r = this;
							for (r.protocol && (r._debug("Closed transport:", r.protocol, "" + t), r.protocol = null), r._transport_tref && (clearTimeout(r._transport_tref), r._transport_tref = null);;) {
								var o = r.protocol = r._protocols.shift();
								if (!o) return !1;
								if (E[o] && E[o].need_body === !0 && (!e.body || "undefined" != typeof e.readyState && "complete" !== e.readyState)) return r._protocols.unshift(o),
									r.protocol = "waiting-for-load",
									n.attachEvent("load",
										function() {
											r._try_next_protocol()
										}), !0;
								if (E[o] && E[o].enabled(r._options)) {
									var i = E[o].roundTrips || 1,
										a = (r._options.rto || 0) * i || 5e3;
									r._transport_tref = n.delay(a,
										function() {
											r.readyState === E.CONNECTING && r._didClose(2007, "Transport timeouted")
										});
									var s = n.random_string(8),
										u = r._base_url + "/" + r._server + "/" + s;
									return r._debug("Opening transport:", o, " url:" + u, " RTO:" + r._options.rto),
										r._transport = new E[o](r, u, r._base_url), !0
								}
								r._debug("Skipping transport:", o)
							}
						},
						E.prototype.close = function(e, t) {
							var r = this;
							if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
							return r.readyState !== E.CONNECTING && r.readyState !== E.OPEN ? !1 : (r.readyState = E.CLOSING, r._didClose(e || 1e3, t || "Normal closure"), !0)
						},
						E.prototype.send = function(e) {
							var t = this;
							if (t.readyState === E.CONNECTING) throw new Error("INVALID_STATE_ERR");
							return t.readyState === E.OPEN && t._transport.doSend(n.quote("" + e)), !0
						},
						E.prototype._applyInfo = function(t, r, o) {
							var i = this;
							i._options.info = t,
								i._options.rtt = r,
								i._options.rto = n.countRTO(r),
								i._options.info.null_origin = !e.domain;
							var a = n.probeProtocols();
							i._protocols = n.detectProtocols(a, o, t)
						};
					var T = E.websocket = function(e, r) {
						var o = this,
							i = r + "/websocket";
						i = "https" === i.slice(0, 5) ? "wss" + i.slice(5) : "ws" + i.slice(4),
							o.ri = e,
							o.url = i;
						var a = t.WebSocket || t.MozWebSocket;
						o.ws = new a(o.url),
							o.ws.onmessage = function(e) {
								o.ri._didMessage(e.data)
							},
							o.unload_ref = n.unload_add(function() {
								o.ws.close()
							}),
							o.ws.onclose = function() {
								o.ri._didMessage(n.closeFrame(1006, "WebSocket connection broken"))
							}
					};
					T.prototype.doSend = function(e) {
							this.ws.send("[" + e + "]")
						},
						T.prototype.doCleanup = function() {
							var e = this,
								t = e.ws;
							t && (t.onmessage = t.onclose = null, t.close(), n.unload_del(e.unload_ref), e.unload_ref = e.ri = e.ws = null)
						},
						T.enabled = function() {
							return !!t.WebSocket || !!t.MozWebSocket
						},
						T.roundTrips = 2;
					var O = function() {};
					O.prototype.send_constructor = function(e) {
							var t = this;
							t.send_buffer = [],
								t.sender = e
						},
						O.prototype.doSend = function(e) {
							var t = this;
							t.send_buffer.push(e),
								t.send_stop || t.send_schedule()
						},
						O.prototype.send_schedule_wait = function() {
							var e, t = this;
							t.send_stop = function() {
									t.send_stop = null,
										clearTimeout(e)
								},
								e = n.delay(25,
									function() {
										t.send_stop = null,
											t.send_schedule()
									})
						},
						O.prototype.send_schedule = function() {
							var e = this;
							if (e.send_buffer.length > 0) {
								var t = "[" + e.send_buffer.join(",") + "]";
								e.send_stop = e.sender(e.trans_url, t,
										function(t, n) {
											e.send_stop = null,
												t === !1 ? e.ri._didClose(1006, "Sending error " + n) : e.send_schedule_wait()
										}),
									e.send_buffer = []
							}
						},
						O.prototype.send_destructor = function() {
							var e = this;
							e._send_stop && e._send_stop(),
								e._send_stop = null
						};
					var N = function(t, r, o) {
							var i = this;
							if (!("_send_form" in i)) {
								var a = i._send_form = e.createElement("form"),
									s = i._send_area = e.createElement("textarea");
								s.name = "d",
									a.style.display = "none",
									a.style.position = "absolute",
									a.method = "POST",
									a.enctype = "application/x-www-form-urlencoded",
									a.acceptCharset = "UTF-8",
									a.appendChild(s),
									e.body.appendChild(a)
							}
							var a = i._send_form,
								s = i._send_area,
								u = "a" + n.random_string(8);
							a.target = u,
								a.action = t + "/jsonp_send?i=" + u;
							var l;
							try {
								l = e.createElement('<iframe name="' + u + '">')
							} catch (c) {
								l = e.createElement("iframe"),
									l.name = u
							}
							l.id = u,
								a.appendChild(l),
								l.style.display = "none";
							try {
								s.value = r
							} catch (d) {
								n.log("Your browser is seriously broken. Go home! " + d.message)
							}
							a.submit();
							var f = function() {
								l.onerror && (l.onreadystatechange = l.onerror = l.onload = null, n.delay(500,
									function() {
										l.parentNode.removeChild(l),
											l = null
									}), s.value = "", o(!0))
							};
							return l.onerror = l.onload = f,
								l.onreadystatechange = function() {
									"complete" == l.readyState && f()
								},
								f
						},
						k = function(e) {
							return function(t, n, r) {
								var o = new e("POST", t + "/xhr_send", n);
								return o.onfinish = function(e) {
										r(200 === e || 204 === e, "http status " + e)
									},
									function(e) {
										r(!1, e)
									}
							}
						},
						j = function(t, r) {
							var o, i, a = e.createElement("script"),
								s = function(e) {
									i && (i.parentNode.removeChild(i), i = null),
										a && (clearTimeout(o), a.parentNode.removeChild(a), a.onreadystatechange = a.onerror = a.onload = a.onclick = null, a = null, r(e), r = null)
								},
								u = !1,
								l = null;
							if (a.id = "a" + n.random_string(8), a.src = t, a.type = "text/javascript", a.charset = "UTF-8", a.onerror = function() {
									l || (l = setTimeout(function() {
											u || s(n.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
										},
										1e3))
								},
								a.onload = function() {
									s(n.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
								},
								a.onreadystatechange = function() {
									if (/loaded|closed/.test(a.readyState)) {
										if (a && a.htmlFor && a.onclick) {
											u = !0;
											try {
												a.onclick()
											} catch (e) {}
										}
										a && s(n.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
									}
								},
								"undefined" == typeof a.async && e.attachEvent)
								if (/opera/i.test(navigator.userAgent)) i = e.createElement("script"),
									i.text = "try{var a = document.getElementById('" + a.id + "'); if(a)a.onerror();}catch(x){};",
									a.async = i.async = !1;
								else {
									try {
										a.htmlFor = a.id,
											a.event = "onclick"
									} catch (c) {}
									a.async = !0
								}
								"undefined" != typeof a.async && (a.async = !0),
								o = setTimeout(function() {
										s(n.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
									},
									35e3);
							var d = e.getElementsByTagName("head")[0];
							return d.insertBefore(a, d.firstChild),
								i && d.insertBefore(i, d.firstChild),
								s
						},
						A = E["jsonp-polling"] = function(e, t) {
							n.polluteGlobalNamespace();
							var r = this;
							r.ri = e,
								r.trans_url = t,
								r.send_constructor(N),
								r._schedule_recv()
						};
					A.prototype = new O,
						A.prototype._schedule_recv = function() {
							var e = this,
								t = function(t) {
									e._recv_stop = null,
										t && (e._is_closing || e.ri._didMessage(t)),
										e._is_closing || e._schedule_recv()
								};
							e._recv_stop = $(e.trans_url + "/jsonp", j, t)
						},
						A.enabled = function() {
							return !0
						},
						A.need_body = !0,
						A.prototype.doCleanup = function() {
							var e = this;
							e._is_closing = !0,
								e._recv_stop && e._recv_stop(),
								e.ri = e._recv_stop = null,
								e.send_destructor()
						};
					var $ = function(e, r, o) {
							var i = "a" + n.random_string(6),
								a = e + "?c=" + escape(s + "." + i),
								u = 0,
								l = function(e) {
									switch (u) {
										case 0:
											delete t[s][i],
												o(e);
											break;
										case 1:
											o(e),
												u = 2;
											break;
										case 2:
											delete t[s][i]
									}
								},
								c = r(a, l);
							t[s][i] = c;
							var d = function() {
								t[s][i] && (u = 1, t[s][i](n.closeFrame(1e3, "JSONP user aborted read")))
							};
							return d
						},
						_ = function() {};
					_.prototype = new O,
						_.prototype.run = function(e, t, n, r, o) {
							var i = this;
							i.ri = e,
								i.trans_url = t,
								i.send_constructor(k(o)),
								i.poll = new Q(e, r, t + n, o)
						},
						_.prototype.doCleanup = function() {
							var e = this;
							e.poll && (e.poll.abort(), e.poll = null)
						};
					var R = E["xhr-streaming"] = function(e, t) {
						this.run(e, t, "/xhr_streaming", rt, n.XHRCorsObject)
					};
					R.prototype = new _,
						R.enabled = function() {
							return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
						},
						R.roundTrips = 2,
						R.need_body = !0;
					var I = E["xdr-streaming"] = function(e, t) {
						this.run(e, t, "/xhr_streaming", rt, n.XDRObject)
					};
					I.prototype = new _,
						I.enabled = function() {
							return !!t.XDomainRequest
						},
						I.roundTrips = 2;
					var P = E["xhr-polling"] = function(e, t) {
						this.run(e, t, "/xhr", rt, n.XHRCorsObject)
					};
					P.prototype = new _,
						P.enabled = R.enabled,
						P.roundTrips = 2;
					var M = E["xdr-polling"] = function(e, t) {
						this.run(e, t, "/xhr", rt, n.XDRObject)
					};
					M.prototype = new _,
						M.enabled = I.enabled,
						M.roundTrips = 2;
					var L = function() {};
					L.prototype.i_constructor = function(e, t, r) {
							var o = this;
							o.ri = e,
								o.origin = n.getOrigin(r),
								o.base_url = r,
								o.trans_url = t;
							var i = r + "/iframe.html";
							o.ri._options.devel && (i += "?t=" + +new Date),
								o.window_id = n.random_string(8),
								i += "#" + o.window_id,
								o.iframeObj = n.createIframe(i,
									function(e) {
										o.ri._didClose(1006, "Unable to load an iframe (" + e + ")")
									}),
								o.onmessage_cb = n.bind(o.onmessage, o),
								n.attachMessage(o.onmessage_cb)
						},
						L.prototype.doCleanup = function() {
							var e = this;
							if (e.iframeObj) {
								n.detachMessage(e.onmessage_cb);
								try {
									e.iframeObj.iframe.contentWindow && e.postMessage("c")
								} catch (t) {}
								e.iframeObj.cleanup(),
									e.iframeObj = null,
									e.onmessage_cb = e.iframeObj = null
							}
						},
						L.prototype.onmessage = function(e) {
							var t = this;
							if (e.origin === t.origin) {
								var n = e.data.slice(0, 8),
									r = e.data.slice(8, 9),
									o = e.data.slice(9);
								if (n === t.window_id) switch (r) {
									case "s":
										t.iframeObj.loaded(),
											t.postMessage("s", JSON.stringify([E.version, t.protocol, t.trans_url, t.base_url]));
										break;
									case "t":
										t.ri._didMessage(o)
								}
							}
						},
						L.prototype.postMessage = function(e, t) {
							var n = this;
							n.iframeObj.post(n.window_id + e + (t || ""), n.origin)
						},
						L.prototype.doSend = function(e) {
							this.postMessage("m", e)
						},
						L.enabled = function() {
							var e = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
							return ("function" == typeof t.postMessage || "object" == typeof t.postMessage) && !e
						};
					var D, H = function(e, r) {
							parent !== t ? parent.postMessage(D + e + (r || ""), "*") : n.log("Can't postMessage, no parent window.", e, r)
						},
						V = function() {};
					V.prototype._didClose = function(e, t) {
							H("t", n.closeFrame(e, t))
						},
						V.prototype._didMessage = function(e) {
							H("t", e)
						},
						V.prototype._doSend = function(e) {
							this._transport.doSend(e)
						},
						V.prototype._doCleanup = function() {
							this._transport.doCleanup()
						},
						n.parent_origin = void 0,
						E.bootstrap_iframe = function() {
							var r;
							D = e.location.hash.slice(1);
							var o = function(e) {
								if (e.source === parent && ("undefined" == typeof n.parent_origin && (n.parent_origin = e.origin), e.origin === n.parent_origin)) {
									var o = e.data.slice(0, 8),
										i = e.data.slice(8, 9),
										a = e.data.slice(9);
									if (o === D) switch (i) {
										case "s":
											var s = JSON.parse(a),
												u = s[0],
												l = s[1],
												c = s[2],
												d = s[3];
											if (u !== E.version && n.log('Incompatibile SockJS! Main site uses: "' + u + '", the iframe: "' + E.version + '".'), !n.flatUrl(c) || !n.flatUrl(d)) return void n.log("Only basic urls are supported in SockJS");
											if (!n.isSameOriginUrl(c) || !n.isSameOriginUrl(d)) return void n.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([t.location.href, c, d]) + ")");
											r = new V,
												r._transport = new V[l](r, c, d);
											break;
										case "m":
											r._doSend(a);
											break;
										case "c":
											r && r._doCleanup(),
												r = null
									}
								}
							};
							n.attachMessage(o),
								H("s")
						};
					var F = function(e, t) {
						var r = this;
						n.delay(function() {
							r.doXhr(e, t)
						})
					};
					F.prototype = new i(["finish"]),
						F.prototype.doXhr = function(e, t) {
							var r = this,
								o = (new Date).getTime(),
								i = new t("GET", e + "/info"),
								a = n.delay(8e3,
									function() {
										i.ontimeout()
									});
							i.onfinish = function(e, t) {
									if (clearTimeout(a), a = null, 200 === e) {
										var n = (new Date).getTime() - o,
											i = JSON.parse(t);
										"object" != typeof i && (i = {}),
											r.emit("finish", i, n)
									} else r.emit("finish")
								},
								i.ontimeout = function() {
									i.close(),
										r.emit("finish")
								}
						};
					var q = function(t) {
						var r = this,
							o = function() {
								var e = new L;
								e.protocol = "w-iframe-info-receiver";
								var n = function(t) {
										if ("string" == typeof t && "m" === t.substr(0, 1)) {
											var n = JSON.parse(t.substr(1)),
												o = n[0],
												i = n[1];
											r.emit("finish", o, i)
										} else r.emit("finish");
										e.doCleanup(),
											e = null
									},
									o = {
										_options: {},
										_didClose: n,
										_didMessage: n
									};
								e.i_constructor(o, t, t)
							};
						e.body ? o() : n.attachEvent("load", o)
					};
					q.prototype = new i(["finish"]);
					var U = function() {
						var e = this;
						n.delay(function() {
							e.emit("finish", {},
								2e3)
						})
					};
					U.prototype = new i(["finish"]);
					var Y = function(e) {
							if (n.isSameOriginUrl(e)) return new F(e, n.XHRLocalObject);
							switch (n.isXHRCorsCapable()) {
								case 1:
									return new F(e, n.XHRLocalObject);
								case 2:
									return new F(e, n.XDRObject);
								case 3:
									return new q(e);
								default:
									return new U
							}
						},
						B = V["w-iframe-info-receiver"] = function(e, t, r) {
							var o = new F(r, n.XHRLocalObject);
							o.onfinish = function(t, n) {
								e._didMessage("m" + JSON.stringify([t, n])),
									e._didClose()
							}
						};
					B.prototype.doCleanup = function() {};
					var G = E["iframe-eventsource"] = function() {
						var e = this;
						e.protocol = "w-iframe-eventsource",
							e.i_constructor.apply(e, arguments)
					};
					G.prototype = new L,
						G.enabled = function() {
							return "EventSource" in t && L.enabled()
						},
						G.need_body = !0,
						G.roundTrips = 3;
					var z = V["w-iframe-eventsource"] = function(e, t) {
						this.run(e, t, "/eventsource", Z, n.XHRLocalObject)
					};
					z.prototype = new _;
					var X = E["iframe-xhr-polling"] = function() {
						var e = this;
						e.protocol = "w-iframe-xhr-polling",
							e.i_constructor.apply(e, arguments)
					};
					X.prototype = new L,
						X.enabled = function() {
							return t.XMLHttpRequest && L.enabled()
						},
						X.need_body = !0,
						X.roundTrips = 3;
					var W = V["w-iframe-xhr-polling"] = function(e, t) {
						this.run(e, t, "/xhr", rt, n.XHRLocalObject)
					};
					W.prototype = new _;
					var J = E["iframe-htmlfile"] = function() {
						var e = this;
						e.protocol = "w-iframe-htmlfile",
							e.i_constructor.apply(e, arguments)
					};
					J.prototype = new L,
						J.enabled = function() {
							return L.enabled()
						},
						J.need_body = !0,
						J.roundTrips = 3;
					var K = V["w-iframe-htmlfile"] = function(e, t) {
						this.run(e, t, "/htmlfile", nt, n.XHRLocalObject)
					};
					K.prototype = new _;
					var Q = function(e, t, n, r) {
						var o = this;
						o.ri = e,
							o.Receiver = t,
							o.recv_url = n,
							o.AjaxObject = r,
							o._scheduleRecv()
					};
					Q.prototype._scheduleRecv = function() {
							var e = this,
								t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject),
								n = 0;
							t.onmessage = function(t) {
									n += 1,
										e.ri._didMessage(t.data)
								},
								t.onclose = function(n) {
									e.poll = t = t.onmessage = t.onclose = null,
										e.poll_is_closing || ("permanent" === n.reason ? e.ri._didClose(1006, "Polling error (" + n.reason + ")") : e._scheduleRecv())
								}
						},
						Q.prototype.abort = function() {
							var e = this;
							e.poll_is_closing = !0,
								e.poll && e.poll.abort()
						};
					var Z = function(e) {
						var t = this,
							r = new EventSource(e);
						r.onmessage = function(e) {
								t.dispatchEvent(new o("message", {
									data: unescape(e.data)
								}))
							},
							t.es_close = r.onerror = function(e, i) {
								var a = i ? "user" : 2 !== r.readyState ? "network" : "permanent";
								t.es_close = r.onmessage = r.onerror = null,
									r.close(),
									r = null,
									n.delay(200,
										function() {
											t.dispatchEvent(new o("close", {
												reason: a
											}))
										})
							}
					};
					Z.prototype = new r,
						Z.prototype.abort = function() {
							var e = this;
							e.es_close && e.es_close({}, !0)
						};
					var et, tt = function() {
							if (void 0 === et)
								if ("ActiveXObject" in t) try {
									et = !!new ActiveXObject("htmlfile")
								} catch (e) {} else et = !1;
							return et
						},
						nt = function(e) {
							var r = this;
							n.polluteGlobalNamespace(),
								r.id = "a" + n.random_string(6, 26),
								e += (-1 === e.indexOf("?") ? "?" : "&") + "c=" + escape(s + "." + r.id);
							var i, a = tt() ? n.createHtmlfile : n.createIframe;
							t[s][r.id] = {
									start: function() {
										i.loaded()
									},
									message: function(e) {
										r.dispatchEvent(new o("message", {
											data: e
										}))
									},
									stop: function() {
										r.iframe_close({},
											"network")
									}
								},
								r.iframe_close = function(e, n) {
									i.cleanup(),
										r.iframe_close = i = null,
										delete t[s][r.id],
										r.dispatchEvent(new o("close", {
											reason: n
										}))
								},
								i = a(e,
									function() {
										r.iframe_close({},
											"permanent")
									})
						};
					nt.prototype = new r,
						nt.prototype.abort = function() {
							var e = this;
							e.iframe_close && e.iframe_close({},
								"user")
						};
					var rt = function(e, t) {
						var n = this,
							r = 0;
						n.xo = new t("POST", e, null),
							n.xo.onchunk = function(e, t) {
								if (200 === e)
									for (;;) {
										var i = t.slice(r),
											a = i.indexOf("\n");
										if (-1 === a) break;
										r += a + 1;
										var s = i.slice(0, a);
										n.dispatchEvent(new o("message", {
											data: s
										}))
									}
							},
							n.xo.onfinish = function(e, t) {
								n.xo.onchunk(e, t),
									n.xo = null;
								var r = 200 === e ? "network" : "permanent";
								n.dispatchEvent(new o("close", {
									reason: r
								}))
							}
					};
					return rt.prototype = new r,
						rt.prototype.abort = function() {
							var e = this;
							e.xo && (e.xo.close(), e.dispatchEvent(new o("close", {
								reason: "user"
							})), e.xo = null)
						},
						E.getUtils = function() {
							return n
						},
						E.getIframeTransport = function() {
							return L
						},
						E
				}(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("sockjs", [],
					function() {
						return SockJS
					})
		}, {}
	],
	70: [
		function() {
			!
			function(e, t, n, r, o) {
				function i(t, n) {
					if (n) {
						var r = n.getAttribute("viewBox"),
							o = e.createDocumentFragment(),
							i = n.cloneNode(!0);
						for (r && t.setAttribute("viewBox", r); i.childNodes.length;) o.appendChild(i.childNodes[0]);
						t.appendChild(o)
					}
				}

				function a() {
					var t = this,
						n = e.createElement("x"),
						r = t.s;
					n.innerHTML = t.responseText,
						t.onload = function() {
							r.splice(0).map(function(e) {
								i(e[0], n.querySelector("#" + e[1].replace(/(\W)/g, "\\$1")))
							})
						},
						t.onload()
				}

				function s() {
					for (var o; o = t[0];) {
						var u = o.parentNode,
							l = o.getAttribute("xlink:href").split("#"),
							c = l[0],
							d = l[1];
						if (u.removeChild(o), c.length) {
							var f = r[c] = r[c] || new XMLHttpRequest;
							f.s || (f.s = [], f.open("GET", c), f.onload = a, f.send()),
								f.s.push([u, d]),
								4 === f.readyState && f.onload()
						} else i(u, e.getElementById(d))
					}
					n(s)
				}
				o && s()
			}(document, document.getElementsByTagName("use"), window.requestAnimationFrame || window.setTimeout, {},
				/Trident\/[567]\b/.test(navigator.userAgent))
		}, {}
	],
	71: [
		function(e) {
			function t() {
				s = window.plugins && window.plugins.pushNotification,
					s && "undefined" != typeof device && ("android" == device.platform || "Android" == device.platform) && (void 0, s.register(r, i, {
						senderID: d.pushNotification.gcm.senderID,
						ecb: "onNotificationGCM"
					}))
			}

			function n(e, t) {
				return (s = window.plugins && window.plugins.pushNotification) ? (l = libsb.user, c = localStorage.phonegapRegId, s.unregister(o, i, {
					senderID: d.pushNotification.gcm.senderID
				}), void t()) : t()
			}

			function r(e) {
				void 0,
				u = localStorage.phonegapRegId,
					a(u)
			}

			function o(e) {
				void 0,
				delete localStorage.phonegapRegId
			}

			function i(e) {
				void 0
			}

			function a(e) {
				if ("undefined" != typeof device) {
					var t = libsb.user;
					"undefined" != typeof e && "undefined" != typeof t && window.plugins && window.plugins.uniqueDeviceID && (t && "undefined" == typeof t.params.pushNotifications && (libsb.user.params.pushNotifications = {
						devices: []
					}), window.plugins.uniqueDeviceID.get(function(n) {
						var r = {
								deviceName: device.model,
								type: "GCM",
								registrationId: e,
								uuid: n,
								enabled: !0
							},
							o = t && t.params.pushNotifications && t.params.pushNotifications.devices ? t.params.pushNotifications.devices : [];
						o = o.filter(function(e) {
								return e.hasOwnProperty("uuid") && e.uuid !== r.uuid
							}),
							o.push(r),
							t.params.pushNotifications.devices = o,
							libsb.emit("user-up", {
								user: t
							})
					}))
				}
			}
			var s, u, l, c, d = e("../client-config.js");
			document.addEventListener("deviceready", t, !1),
				libsb.on("logout", n, 500),
				window.onNotificationGCM = function(e) {
					switch (e.event) {
						case "registered":
							e.regid.length > 0 && (void 0, localStorage.phonegapRegId = e.regid);
							break;
						case "message":
							void 0;
							var t = e.payload.threadId,
								n = {
									roomName: e.payload.roomName,
									mode: "normal"
								};
							"" !== t && (n.thread = t.id),
								e.foreground ? void 0 : setTimeout(e.coldstart ?
									function() {
										libsb.emit("navigate", n)
									} : function() {
										libsb.emit("navigate", n)
									});
							break;
						case "error":
							void 0;
							break;
						default:
							void 0
					}
				},
				libsb.on("init-dn",
					function(e, t) {
						a(localStorage.phonegapRegId),
							t()
					},
					100),
				libsb.on("pref-save",
					function(e, t) {
						var n = libsb.user.params;
						e.params.pushNotifications = n && n.hasOwnProperty("pushNotifications") ? n.pushNotifications : {
								devices: []
							},
							t()
					},
					500)
		}, {
			"../client-config.js": 8
		}
	],
	72: [
		function(e, t) {
			"use strict";

			function n(e) {
				libsb.isInited ? x.send(e) : k.push(function() {
					x.send(e)
				})
			}

			function r() {
				x = new SockJS(E.server.protocol + E.server.host + "/socket"),
					x.onclose = i,
					x.onopen = function() {
						T = 1,
							S.emit("init-up", {},
								function(e) {
									e ? void 0 : libsb.isInited = !0,
										S.emit("navigate", {
												connectionStatus: "online",
												source: "socket"
											},
											function(e) {
												e && void 0
											})
								})
					},
					x.onmessage = s
			}

			function o(e, t) {
				x.close(),
					t()
			}

			function i() {
				void 0,
				1 === T && S.emit("navigate", {
							connectionStatus: "offline",
							source: "connection"
						},
						function(e) {
							e && void 0
						}),
					180 > T ? T *= 2 : T = 180,
					setTimeout(r, 1e3 * T)
			}

			function a(e, t) {
				return e.results ? t() : libsb.isInited ? (e.id || (e.id = C.uid()), e.session = libsb.session, e.resource = libsb.resource, n(JSON.stringify(e)), O[e.id] = t, void(O[e.id].query = e)) : (e.results = [], t())
			}

			function s(e) {
				var t;
				try {
					t = JSON.parse(e.data)
				} catch (n) {
					S.emit("error", n)
				}
				"error" == t.type ? (N[t.id] && (N[t.id](t), delete N[t.id]), S.emit("error-dn", t)) : -1 != ["getTexts", "getThreads", "getUsers", "getRooms", "getSessions"].indexOf(t.type) ? O[t.id] && (O[t.id].query.results = t.results, O[t.id](), delete O[t.id]) : (N[t.id] && (N[t.id](t), delete N[t.id]), S.emit(t.type + "-dn", t))
			}

			function u(e, t) {
				return function(n) {
					var r;
					if ("error" === n.type) return t(n);
					for (r in e) delete e[r];
					for (r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
					t()
				}
			}

			function l(e, t) {
				var n;
				for (n in e) delete e[n];
				for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
				return libsb.user && libsb.user.id && (e.from = libsb.user.id),
					e.time = (new Date).getTime(),
					e.session = localStorage.hasOwnProperty("session") ? localStorage.session : libsb.session,
					e.resource = libsb.resource,
					e
			}

			function c(e, t) {
				var r = l(e, {
					type: "join",
					to: e.to,
					id: e.id,
					role: e.role
				});
				n(JSON.stringify(r)),
					N[r.id] = u(r, t)
			}

			function d(e, t) {
				var r = l(e, {
					type: "part",
					to: e.to,
					id: e.id
				});
				n(JSON.stringify(r)),
					N[r.id] = u(r, t)
			}

			function f(e, t) {
				var r = l(e, {
					type: "back",
					to: e.to,
					id: e.id
				});
				n(JSON.stringify(r)),
					N[r.id] = u(r, t)
			}

			function m(e, t) {
				var r = l(e, {
					type: "away",
					to: e.to,
					id: e.id
				});
				n(JSON.stringify(r)),
					N[r.id] = u(r, t)
			}

			function p(e, t) {
				var r = l(e, {
					to: e.to,
					type: "text",
					text: e.text,
					from: e.from,
					threads: e.threads,
					id: e.id,
					labels: e.labels || {},
					mentions: e.mentions || [],
					origin: e.origin
				});
				n(JSON.stringify(r)),
					N[r.id] = u(r, t)
			}

			function h(e, t) {
				var r = l(e, {
					to: e.to,
					type: "edit",
					id: e.id,
					ref: e.ref,
					labels: e.labels,
					text: e.text
				});
				n(JSON.stringify(r)),
					N[r.id] = u(r, t)
			}

			function g(e, t) {
				var n, r = {
					type: "init",
					to: "me",
					id: e.id,
					origin: e.origin
				};
				r.session = e.session,
					e.auth && (r.auth = e.auth),
					e.suggestedNick && (r.suggestedNick = e.suggestedNick),
					n = l(e, r),
					x.send(JSON.stringify(n)),
					N[n.id] = u(n, t)
			}

			function b(e, t) {
				var r = l(e, {
					type: "admit",
					to: e.to,
					ref: e.ref,
					id: e.id,
					role: e.role
				});
				n(JSON.stringify(r)),
					N[r.id] = u(r, t)
			}

			function v(e, t) {
				var r = l(e, {
					type: "expel",
					to: e.to,
					ref: e.ref,
					id: e.id
				});
				n(JSON.stringify(r)),
					N[r.id] = u(r, t)
			}

			function y(e, t) {
				var r;
				return e.user.params || (e.user.params = {}),
					e.user.guides || (e.user.guides = {}),
					r = l(e, {
						type: "user",
						to: "me",
						user: e.user,
						id: e.id
					}),
					/^guest-/.test(e.user.id) ? t() : (n(JSON.stringify(r)), void(N[r.id] = u(r, t)))
			}

			function w(e, t) {
				var r = l(e, {
					type: "room",
					to: e.to,
					room: e.room,
					id: e.id
				});
				n(JSON.stringify(r)),
					N[r.id] = u(r, t)
			}
			var S, x, C = e("../lib/generate.js"),
				E = e("../client-config.js"),
				T = 1,
				O = {},
				N = {},
				k = [];
			t.exports = function(e) {
					S = e,
						r(),
						S.on("disconnect", o, 1e3),
						S.on("init-up", g, 10),
						S.on("text-up", p, 10),
						S.on("edit-up", h, 10),
						S.on("back-up", f, 10),
						S.on("away-up", m, 10),
						S.on("nick-up", g, 10),
						S.on("join-up", c, 10),
						S.on("part-up", d, 10),
						S.on("admit-up", b, 10),
						S.on("expel-up", v, 10),
						S.on("user-up", y, 10),
						S.on("room-up", w, 10),
						S.on("getTexts",
							function(e, t) {
								e.type = "getTexts",
									a(e, t)
							},
							10),
						S.on("getThreads",
							function(e, t) {
								e.type = "getThreads",
									a(e, t)
							},
							10),
						S.on("getUsers",
							function(e, t) {
								e.type = "getUsers",
									a(e, t)
							},
							10),
						S.on("getRooms",
							function(e, t) {
								e.type = "getRooms",
									a(e, t)
							},
							10)
				},
				libsb.on("inited",
					function(e, t) {
						for (; k.length;) k.splice(0, 1)[0]();
						t()
					},
					500)
		}, {
			"../client-config.js": 8,
			"../lib/generate.js": 38
		}
	],
	73: [
		function(e) {
			var t = e("../lib/formField.js");
			libsb.on("config-show",
					function(e, n) {
						var r = e.room;
						r.params.threader || (r.params.threader = {
							enabled: !0
						});
						var o = $("<div>").append(t("Automatically group text into discussions", "toggle", "threader-allow-threading", r.params.threader.enabled));
						e.threader = {
								text: "Discussions",
								html: o,
								prio: 400
							},
							n()
					},
					500),
				libsb.on("config-save",
					function(e, t) {
						e.params.threader || (e.params.threader = {}),
							e.params.threader.enabled = $("#threader-allow-threading").is(":checked"),
							t()
					},
					500)
		}, {
			"../lib/formField.js": 36
		}
	],
	74: [
		function(e, t) {
			var n = {
				"Account settings": "Account settings",
				"All discussions": "All discussions",
				"All rooms": "All rooms",
				Cancel: "Cancel",
				"Choose a username": "Choose a username",
				"Configure room": "Configure room",
				"Create room": "Create room",
				Done: "Done",
				"Enter a room name": "Enter a room name",
				"Go back as guest": "Go back as guest",
				"Just a sec...": "Just a sec...",
				"Profiles are coming soon!": "Profiles are coming soon!",
				"Room settings": "Room settings",
				Search: "Search",
				"Sign in to get started": "Sign in to get started",
				"Sign in with Facebook": "Sign in with Facebook",
				"Sign in": "Sign in",
				"Sign in and create room": "Sign in and create room",
				"This room doesn't exist yet :-(": "This room doesn't exist yet :-(",
				"This room": "This room",
				"Type to search...": "Type to search...",
				"You are not following any rooms :-(": "You are not following any rooms :-(",
				"View room": "View room",
				"Who is": "Who is",
				"You need to sign in first to create a room": "You need to sign in first to create a room",
				"You've been signed out": "You've been signed out"
			};
			t.exports = n
		}, {}
	],
	75: [
		function(e, t) {
			var n = function(t) {
				var n = e("./strings.js");
				this.data = t ? $.extend(n, t) : n
			};
			n.prototype.translateString = function(e) {
					return this.data[e] || e
				},
				n.prototype.translate = function(e) {
					var t = this,
						n = $(e);
					return n.each(function() {
							var e, n, r, o = $(this),
								i = /(^[aA-zZ\-]+)(::)(.+$)/,
								a = o.attr("data-string");
							i.test(a) ? (e = i.exec(a), n = e[1], r = t.translateString(e[3]), o.attr(n, r)) : (r = t.translateString(a), o.text(r))
						}),
						n
				},
				n.prototype.translateAll = function() {
					var e = this;
					$(function() {
						var t = $("[data-string]");
						e.translate(t)
					})
				},
				t.exports = new n
		}, {
			"./strings.js": 74
		}
	],
	76: [
		function(e) {
			var t, n = e("../lib/formField.js");
			libsb.on("config-show",
					function(e, r) {
						var o = $("<div>"),
							i = e.room,
							a = i.params.twitter;
						a || (a = {}),
							t = a.username;
						var s = n("Hashtags", "multientry", "twitter-hashtags", a.tags),
							u = $("<a>").addClass("button twitter").attr("id", "twitter-account"),
							l = n("", "", "twitter-text", u),
							c = n("", "info", "twitter-message-text", ""),
							d = c.find("#twitter-message-text"),
							f = function() {
								t ? (u.removeClass("twitter-signed-out"), u.addClass("twitter-signed-in"), u.text("Remove account"), l.find(".settings-label").text("Signed in as " + t), d.empty()) : (u.removeClass("twitter-signed-in"), u.addClass("twitter-signed-out"), u.text("Sign in to Twitter"), l.find(".settings-label").text("Not signed in"), d.text("Please sign in to Twitter to watch hashtags"))
							};
						u.on("click",
								function() {
									u.hasClass("twitter-signed-out") ? window.open("../r/twitter/login", "mywin", "left=20,top=20,width=500,height=500,toolbar=1,resizable=0") : u.hasClass("twitter-signed-in") && (t = void 0, f())
								}),
							$(window).on("message",
								function(e) {
									void 0;
									var n, r = "scrollback.io",
										o = -1 !== e.originalEvent.origin.indexOf(r, e.originalEvent.origin.length - r.length);
									n = e.originalEvent.data,
										void 0;
									try {
										n = JSON.parse(e.originalEvent.data)
									} catch (e) {
										return
									}
									o && n.twitter && (t = n.twitter.username, f())
								}),
							f(),
							o.append(s, l, c),
							e.twitter = {
								text: "Twitter integration",
								html: o,
								prio: 700
							},
							r()
					},
					500),
				libsb.on("config-save",
					function(e, n) {
						var r = $("#twitter-hashtags").multientry("items").join(" ");
						e.params.twitter = {}, (r || t) && (e.params.twitter = {
								tags: r,
								username: t
							}),
							n()
					},
					500),
				libsb.on("text-menu",
					function(e, t) {
						var n = $(e.target).find(".chat-message").text(),
							r = "https://twitter.com/home/?status=" + encodeURIComponent(n) + " via https://scrollback.io/" + encodeURIComponent(currentState.roomName);
						e.items.tweetmessage = {
								text: "Tweet this message",
								prio: 300,
								action: function() {
									window.open(r, "_blank")
								}
							},
							t()
					},
					500)
		}, {
			"../lib/formField.js": 36
		}
	],
	77: [
		function() {
			$(function() {
				var e = $("<div>").html("Scrollback has been updated. <a class='appcache-reload-page'>Reload to start using the new version</a>.");
				$(applicationCache).on("updateready",
						function() {
							applicationCache.status === applicationCache.UPDATEREADY && e.alertbar({
								type: "info",
								id: "appcache-updateready-notify"
							})
						}),
					e.on("click", ".appcache-reload-page",
						function() {
							location.reload()
						})
			})
		}, {}
	],
	78: [
		function(e) {
			var t = e("../ui/desktopnotify.js"),
				n = function() {
					var e, t, n, r, o = !1,
						i = !1,
						a = function() {
							var e, t = "data:audio/wav;base64,UklGRnQGAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YU8GAACBgIF/gn2Cf4B+gn5+fYJ/gIF/gH+BfX6AfXt5fXx7e3x9fH1+f4CAfnx9f3t9gIB9en2Dfn58fYKDgIJ9hnh7hIZ8gYR6fHyCe4GCioF+gH93foWCgoJ5gHx5gniAeYJ0dneCgXN1jn1+fI1zfHp8dYiCe3qIhHpmfXqMeZJ0ACb/AAD//wAAQ/8A3pYANv/qYek5OGp3tICeexjYUkWgYMzzAB//hDyVcX2Yi5ppXLNsXYKEZ3l7aHGTn1pnlZlwVpuUgqOKgIOMYIpsoXVydJKdc296kZl3h3OAcoV6ao6Be298ipCFhIFxk3yIeXNuh4eHiYh/c3h1eJCUenCCfH9yeZSKcHR7eH9ugYl+eImFfWxuhX1uiIx+gYZmg355hHlzgXl1dIeWdGmciXpteYWMc3GOfntye5Khh1+beoaFgmJ5k4KUe3CXim2GdJaFYXmec1GomG97b4mZcnCIbX6EbX6LbWd1e4B0d4x6cXuKcoKMdoB5eZt9doh0e32Ag5CSgnOEkIWBgX6AeYqRenJ9hoKDhIR6gIBte42DeHuFhm18g35we4x9dnmBgHp+bniBfIF2eYB3fYV3dX+FdIOCf3Z7foF8e4mAfHuCdn+Lc3WKhXyEhnt7goF4foSDhH17f4uFfnp/io90c4OBfHuCg4JyhIxycH2JgnuDiHl8hH98dIODdIKBeIZ8fHeCiXx+f3SIf3V7eYSCdHuCgnh6hIFzioV3gYuAeXl9e4V7e3+JgnV6gIJ7hIiCe3yIinx9hYGAhX17h4OBfICFfIiFfHh9hn93gnp2hYR6foF4dn9/dX1/eX9/dHN+goB3eoF8fHt6f316fIF6gIF8eH2Cgnt/goV6iHx3iIR6f4CDg3uGg3yAiIN9g4B/gn+CgX59hn96fn+FfX59f4SCgIR7foJ7fYGAfoF6f4F5fHyDfXmFfnt5hIB5fn1/fX1+gHl9foN8fYGCfoCGen6AgoB/gH9/g3p8fYWGfXqDhH17gIOCfn+CeoCDg3p6fIGFfXp/gYR9dYN/gX57e359foJ9foGAf357gICAfIJ7fn16hoV6fXyAgX+Bfn5+gnl5gYSBfH19e4h7fISEeIB+gH+Ed3+Cf3p6hX2Af3qAfX5/fn98f4GBgHt3gYZ/fX99gHx8gH97hoR3gX5/g3l+g31/g315f4N8fX+AgX6Af35+gH6AgX97foCCfX99gn1+gYF7gIR9en+DgH59f319gYB8fn1/f32Be3uCgXx+fYR/fH2Cf31+foKEfHyBg31/fn5/goJ7gIaAfX9/gn+Bgn56g4J/goF/foB/gIB/fn+Bf3uAgn96f398gIB/fnyAgHx9fn5+f3p+gnx9f3x/f398f399gH9/fn6Df3yBf39/gIB9f4F/gYF+f4CCfoF/f4KCgICAf4KAg4B+f4KCfX59goN9fYB/gIB6gH99fICAfX1/gnx7fYB/gXx9fn5/fn99fX5+fX5+fn5/f39/gX5/gnx+gIF/foCCfn2Af4J+foGBgX9/f4CCfIGAgYF/f36AgYB+gIGAgH2AgX99gH9/gH2Af3+AfXx9gHx+fHyAfX5+fH2Agnt7f35/fX9/f39/fXp+gH5+goB9f39/gn59gX+Af31/gIB/f39/gH6AgICBfoCEf4B+f4KBf4B/gYGDfn+Af4B/fn59foF+foKBfn9+fHyAfn5+fn+BeX+Fg3N7hX58gH+Afn6FdHuIgnh+g4B6e4iGeHqFhXh7g3+Af36Ag4SAeX+Een1+g4V7en6Ef3+AgX9/f4B+fHx+foJ/fH6ChHx9foGBg3t5foJ/f3x+fYF+f31+gICBgX5/f4F+fn5/fX59fn9+gIOAf3+Af4B9fn9+gX9+gX+BfoGBgIB/f31/gn+CfIB/fYF+f36Bf35/foB/f398gX+Af31/f4CBf358gIKAfn9+gn2Af35+gn99f36Bf31+f3+Af399f4CBfoCAfX+BfX+AgH6AgH9+gIZ9fYJ/iIB3fIt/dISBgHx/f4OFf32AgX53fIOCe4KBfn2Ben57f3t4f4N9gH6BgYKAgHl/gn1/f4N/f36DgoCBfoJ+eX17gH18e4F/fYB+hX6Dg4OBgIB8fHt+f39+fX9/foKBgIGEf31/gX6AgoGDfoCEf32BAA==";
							return function() {
								e || (e = $("<div>").attr("id", "notify-sound").css({
										display: "none"
									}).appendTo("body")),
									e.append('<audio autoplay><source src="' + t + '" type="audio/wav"><embed hidden="true" autostart="true" loop="false" src="' + t + '"></audio>')
							}
						}();
					return $(window).on("focus",
							function() {
								t && (document.title = t, t = null),
									n && clearInterval(n),
									o = !0,
									i = !1
							}).on("blur",
							function() {
								o = !1
							}),
						o = document.hasFocus(),
						function(s, u, l) {
							o || (t || (t = document.title), e = s, i || (clearInterval(n), n = setInterval(function() {
									document.title = document.title === t ? e : t,
										i = !0
								},
								1e3)), u && r && (clearTimeout(r), r = null), l && !r && (a(), r = setTimeout(function() {
									r = null
								},
								3e4)))
						}
				}();
			libsb.on("text-dn",
				function(e, r) {
					var o = libsb.user && libsb.user.params && libsb.user.params.notifications && "boolean" == typeof libsb.user.params.notifications.sound ? libsb.user.params.notifications.sound : !0;
					libsb.user && e.mentions && e.mentions.indexOf(libsb.user.id) > -1 ? (n(e.text, !0, o), libsb.user.params.notifications.desktop && t.show({
							title: "New mention on " + e.to,
							body: (e.from ? e.from.replace(/^guest-/, "") + ": " : "") + e.text,
							icon: "/s/img/scrollback.png",
							tag: e.id,
							action: function() {
								libsb.emit("navigate", {
									room: e.to,
									time: e.time
								})
							}
						})) : n(e.text, !1, o),
						r()
				},
				100)
		}, {
			"../ui/desktopnotify.js": 85
		}
	],
	79: [
		function(e, t) {
			function n(e) {
				var t, n;
				return e ? (e = e.split("-"), t = e[0], n = e[1], t = parseInt(t) || null, {
					time: t,
					id: n
				}) : {
					time: null,
					id: ""
				}
			}
			var r = e("./chat.js"),
				o = {},
				i = null;
			$(function() {
					function e(e) {
						t.reset(e + "-" || null)
					}
					var t = $(".chat-area"),
						a = $(".chat-area-container"),
						s = $(".chat-position"),
						u = $(".chat-scroll-to-bottom"),
						l = "",
						c = "",
						d = null;
					t.infinite({
							scrollSpace: 2e3,
							fillSpace: 1e3,
							itemHeight: 50,
							startIndex: d,
							debug: !0,
							getItems: function(e, t, o, i, a) {
								function s() {
									libsb.getTexts(u,
										function(n, i) {
											var s = i.results.slice(0, i.results.length);
											if (n) throw n;
											if (i.to !== currentState.roomName) return a([]);
											if (!e && "0" === s.length) return a([!1]);
											0 === o ? (s.length < t && s.unshift(!1), i.time && s.length && s[s.length - 1].time === i.time && s.pop()) : 0 === t && (s.length < o && s.push(!1), s.length && s[0].time == i.time && s.splice(0, 1));
											var u = s.map(function(e) {
												return e && r.render(null, e)
											});
											a(u)
										})
								}
								var u = {
									to: l,
									before: t,
									after: o
								};
								return l ? (e = n(e), u.time = e.time, e.id && "missing" !== e.id && (u.before ? u.before++ : u.after && u.after++), c && (u.thread = c), e.time || t ? void("undefined" == typeof libsb.user ? libsb.on("navigate",
									function(e, t) {
										e.connectionStatus !== e.old.connectionStatus && "online" === e.connectionStatus && s(),
											t()
									},
									700) : s()) : a([!1])) : a([])
							}
						}),
						libsb.on("text-dn",
							function(n, o) {
								var i = $("#chat-" + n.id),
									a = r.render(null, n);
								if (n.to !== window.currentState.roomName) return o();
								if (n.threads && n.threads.length && window.currentState.thread) {
									for (var s = 0; s < n.threads.length && n.threads[s].id != window.currentState.thread; s++);
									if (s >= n.threads.length) return o()
								} else if (window.currentState.thread) return o();
								i.length && i.remove(),
									t.data("lower-limit") ? t.addBelow(a) : n.from == libsb.user.id && e(null),
									o()
							},
							100),
						libsb.on("text-up",
							function(e, n) {
								if (libsb.getOccupants(window.currentState.roomName,
									function(t, n) {
										function r(t) {
											(/^@[a-z][a-z0-9\_\-\(\)]{2,32}[:,]?$/i.test(t) || /^[a-z][a-z0-9\_\-\(\)]{2,32}:$/i.test(t)) && (t = t.replace(/[@:,]/g, "").toLowerCase(), e.mentions.push(o.indexOf("guest-" + t) > -1 ? "guest-" + t : t))
										}
										var o = [];
										if (n.results && n.results.length)
											for (var i in n.results) o.push(n.results[i].id);
										e.mentions = [],
											e.text.split(" ").map(r)
									}), t.data("lower-limit")) {
									var o = r.render(null, e);
									t.addBelow(o),
										t.scrollToBottom()
								}
								n()
							},
							90),
						libsb.on("init-dn",
							function(t, n) {
								e(d || null),
									n()
							},
							100),
						u.on("click",
							function() {
								libsb.emit("navigate", {
									time: null,
									source: "chat-area-scroll-to-bottom"
								})
							}),
						libsb.on("navigate",
							function(t, n) {
								var r = !1;
								return t.old && t.time !== t.old.time && (t.time ? (u.addClass("visible"), s.addClass("visible").text(format.friendlyTime(t.time, (new Date).getTime())), setTimeout(function() {
											u.removeClass("visible")
										},
										3e3), setTimeout(function() {
											s.removeClass("visible")
										},
										1e3)) : setTimeout(function() {
											u.removeClass("visible")
										},
										500)),
									"chat-area" == t.source ? n() : ("boot" == t.source ? (l = t.roomName || currentState.roomName, c = t.thread || currentState.thread, d = t.time || (t.thread ? 1 : d), r = !0) : (t.roomName && null === t.room ? (r = !0, l = currentState.roomName) : t.roomName && t.roomName !== t.old.roomName && (l = t.roomName, r = !0), t.old && t.time != t.old.time && (d = t.time, r = !0), "undefined" != typeof t.thread && t.old && t.thread != t.old.thread && (c = t.thread, d = c ? 1 : null, r = !0), /^conf-/.test(t.source) && (r = !0)), r && e(d), void n())
							},
							200),
						o.getPosition = function() {
							var e = t[0].scrollHeight - (t.scrollTop() + t.height());
							return this.value || (this.value = e),
								e
						},
						o.setPosition = function(e) {
							a.css({
									bottom: e
								}),
								0 === o.getPosition.value && t.scrollTop(t[0].scrollHeight)
						},
						o.setRoom = function(e) {
							l = e,
								t.find(".chat").remove(),
								t.scroll()
						},
						t.on("scroll",
							function() {
								i && clearTimeout(i),
									i = setTimeout(function() {
											for (var e = t.find(".chat-item"), r = n(e.eq(0).data("index")).time, a = t.offset().top, s = 0; s < e.length; s++)
												if (e.eq(s).offset().top - a > 0) {
													r = n(e.eq(s).data("index")).time;
													break
												}
											o.getPosition.value = o.getPosition(),
												0 === o.getPosition.value && (r = null),
												i = null,
												libsb.emit("navigate", {
													time: r,
													source: "chat-area"
												})
										},
										500)
							}),
						setInterval(function() {
								$(".chat-timestamp").each(function() {
									var e = n($(this).parent().data("index")).time;
									$(this).empty().text(format.friendlyTime(e, (new Date).getTime()))
								})
							},
							6e4)
				}),
				t.exports = o
		}, {
			"./chat.js": 81
		}
	],
	80: [
		function() {
			$(function() {
				var e, t, n, r, o, i = $(".chat-area"),
					a = $(".chat-conv-dot"),
					s = $(".chat-entry"),
					u = function(e) {
						var t = $(".chat-conv-line"),
							n = $(".chat-item-dot, .chat-conv-dot"),
							r = function() {
								t.remove(),
									n.removeClass("faded pulsed"),
									"function" == typeof e && e()
							};
						t.length ? t.velocity("stop").velocity({
								top: t.offset().top + t.height(),
								opacity: 0
							},
							150, r) : r()
					},
					l = function() {
						var e = $(".chat-conv-line"),
							t = $(".chat-item-dot"),
							n = $("[data-thread=" + r + "]").find(t).add(a),
							o = i.offset().left,
							s = n.first().offset().top,
							u = $(document).height() - a.offset().top - a.height() / 2,
							l = i.offset().top;
						t.not(n).removeClass("pulsed").addClass("faded"),
							n.removeClass("faded").addClass("pulsed"),
							a.addClass("pulsed"),
							e.length || (e = $("<div>").addClass("chat-conv-line").attr("data-mode", "normal search").css({
								opacity: 0
							}), e.appendTo("body")),
							e.css({
								left: o,
								bottom: u
							}).velocity("stop").velocity({
									top: l > s ? l : s,
									opacity: 1
								},
								300)
					},
					c = function() {
						!r || "normal" !== window.currentState.view && window.currentState.view || "normal" !== window.currentState.mode && "search" !== window.currentState.mode ? u() : l()
					},
					d = function(e) {
						var t = $("body").attr("class").replace(/conv-\d+/g, "").trim();
						"string" == typeof e && "new" !== e ? (r = e, t += " conv-" + e.substr(-1)) : r = null,
							$("body").attr("class", t)
					},
					f = function(e) {
						n = null,
							$(".chat-item").removeClass("current").data("selected", !1),
							e !== !0 ? u(d) : d()
					};
				libsb.on("navigate",
						function(e, t) {
							!e.old || e.old.view === e.view && e.old.thread === e.thread && e.old.mode === e.mode && e.old.roomName === e.roomName || (u(), e.old.thread !== e.thread && d(e.thread), e.old.roomName !== e.roomName && (r = null), setTimeout(function() {
										c()
									},
									1e3)),
								t()
						},
						50),
					i.on("scroll",
						function() {
							clearTimeout($(this).data("lineTimer")),
								$(this).data("lineTimer", setTimeout(function() {
										c()
									},
									300))
						}),
					$(window).on("resize",
						function() {
							u(),
								clearTimeout($(this).data("lineTimer")),
								$(this).data("lineTimer", setTimeout(function() {
										c()
									},
									1e3))
						}),
					$(document).on("keydown",
						function(e) {
							27 === e.keyCode && f()
						}),
					$.fn.selectMsg = function(e) {
						if (this.length) {
							if (this.data("selected")) return f(),
								this;
							if (t = r, f(!0), n = this.attr("id"), d(this.attr("data-thread")), this.addClass("current").data("selected", !0), $.fn.velocity && (this.offset().top - i.offset().top < 0 || this.offset().top > i.height()) && this.velocity("scroll", {
								duration: 150,
								container: i
							}), this.hasClass("chat-item-long") && this.scrollTop(0), r && t === r || c(), "online" != window.currentState.connectionStatus) return this;
							var a = this.find(".chat-nick").text(),
								u = format.htmlToText(s.html()),
								l = !1;
							return /^@\S+[\s+{1}]?/.test(u) ? (u = u.replace(/^@\S+[\s+{1}]?/, ""), l = !0) : u = u.replace(/@\S+[\s+{1}]?$/, ""),
								u.indexOf("@" + a) < 0 && libsb.user && libsb.user.id !== a && libsb.user.id !== "guest-" + a && (u = l ? "@" + a + (u ? " " + u : "") : (u ? u + " " : "") + "@" + a),
								u = format.textToHtml(u), (!s.text().trim() || s.text().indexOf(o) > -1 && !e) && (o = format.htmlToText(u), s.html(u ? u + "&nbsp;" : ""), "ontouchstart" in document || (s.focus(), $.fn.setCursorEnd && s.setCursorEnd())),
								this
						}
					},
					$(document).on("click", ".chat-item",
						function() {
							$(".chat-item").not(this).removeClass("active"),
								$(this).toggleClass("active").selectMsg()
						}),
					$(document).on("keydown",
						function(e) {
							var t, n;
							(38 === e.keyCode || 40 === e.keyCode) && ($(".chat-item.current").length ? (t = $(".chat-item.current"), 38 === e.keyCode && t.prevAll(":visible").first().length ? (e.preventDefault(), n = t.prevAll(":visible").first()) : 40 === e.keyCode && (e.preventDefault(), t.nextAll(":visible").first().length ? n = t.nextAll(":visible").first() : f()), n && n.selectMsg()) : (t = $(".chat-item:visible").last(), e.target === s.get(0) && t.length && 38 === e.keyCode && (e.preventDefault(), t.selectMsg())))
						}),
					libsb.on("text-up",
						function(t, n) {
							var i = $(".chat-item.current");
							i.length && r && (t.labels || (t.labels = {}), t.labels.manualThreaded = 1, t.threads = [{
									id: r,
									score: 1
								}]),
								e = t.id,
								o = null,
								n()
						},
						500),
					libsb.on("text-dn",
						function(t, n) {
							(t.id && t.id === e || libsb.user && t.mentions && t.mentions.length && t.mentions.indexOf(libsb.user.id) > -1 || e && e.mentions && e.mentions.length && e.mentions.indexOf(t.from) > -1 || r && t.threads && t.threads.length && t.threads[0].id === r) && $("#chat-" + t.id).selectMsg(!0),
								n()
						},
						50),
					$(document).on("click", ".chat-conv-dot-wrap, .js-new-discussion", f)
			})
		}, {}
	],
	81: [
		function(e, t) {
			var n, r = {};
			$(function() {
					var e = $(".chat-item").eq(0);
					r.render = function(t, r, o) {
						if (o = o ? !0 : !1, t = t || e.clone(!1), "missing" === r.type) t = $("<div>").addClass("chat-item-missing"),
							t.attr("data-index", (r.endTime || r.startTime || 0) + "-missing");
						else {
							if (t.find(".chat-nick").text(r.from.replace(/^guest-/, "")), t.find(".chat-message").html(format.linkify(format.textToHtml(r.text || ""))), t.find(".chat-timestamp").text(format.friendlyTime(r.time, (new Date).getTime())), t.attr("data-index", r.time + "-" + r.id), t.attr("id", "chat-" + r.id), r.threads && r.threads.length) {
								for (var i in r.threads)
									if (window.currentState.thread && window.currentState.thread === r.threads[i].id && "new" !== r.threads[i].id) {
										t.attr("data-thread", r.threads[i].id);
										break
									}!t.attr("data-thread") && r.threads[0].id && "new" !== r.threads[0].id && t.attr("data-thread", r.threads[0].id),
									t.attr("data-thread") && t.addClass("conv-" + t.attr("data-thread").substr(-1))
							}
							if (r.labels) {
								for (var a in r.labels) 1 === r.labels[a] && t.addClass("chat-label-" + a);
								if (r.text) {
									var s, u = $(".chat-area"),
										l = u.width(),
										c = r.text.split("\n"),
										d = 0;
									l = l > 360 ? l : 360,
										s = l / (.6 * parseInt(u.css("font-size"), 10)),
										c.forEach(function(e) {
											d += Math.ceil(e.length / s)
										}),
										d > 4 && t.addClass("chat-item-long")
								}
								n && r.time - n > 18e4 && t.addClass("chat-item-timestamp-shown"),
									n = r.time
							}("undefined" == typeof t || null === t) && void 0
						}
						return t
					}
				}),
				t.exports = r
		}, {}
	],
	82: [
		function() {
			$(function() {
				$(".rooms-button").on("click",
						function() {
							"rooms" === window.currentState.view ? libsb.emit("navigate", {
								view: "meta",
								source: "rooms-button"
							}) : libsb.emit("navigate", {
								view: "rooms",
								source: "rooms-button"
							})
						}),
					$(".meta-button-back").on("click",
						function() {
							"meta" === window.currentState.view ? libsb.emit("navigate", {
								view: "normal",
								source: "meta-button"
							}) : libsb.emit("navigate", {
								view: "meta",
								source: "meta-button"
							})
						}),
					$(document).on("click", ".list-item, .thread-item",
						function() {
							libsb.emit("navigate", {
								view: "normal",
								source: "meta"
							})
						}),
					$(document).on("swipeleft",
						function() {
							"rooms" === window.currentState.view ? libsb.emit("navigate", {
								view: "meta",
								source: "swipe-left"
							}) : libsb.emit("navigate", {
								view: "normal",
								source: "swipe-left"
							})
						}),
					$(document).on("swiperight",
						function() {
							"meta" !== window.currentState.view || window.currentState.embed && window.currentState.embed.form ? libsb.emit("navigate", {
								view: "meta",
								source: "swipe-right"
							}) : libsb.emit("navigate", {
								view: "rooms",
								source: "swipe-right"
							})
						})
			})
		}, {}
	],
	83: [
		function(e) {
			var t = e("./chat-area.js");
			$(function() {
				var e = $(".chat-entry"),
					n = $(".chat-placeholder"),
					r = $(".chat-input"),
					o = $(".chat-conv-dot"),
					i = !1,
					a = function() {
						var n = format.htmlToText(e.html()).trim();
						if (e.empty(), n) {
							window.currentState && window.currentState.roomName && libsb.say(window.currentState.roomName, n, window.currentState.thread),
								t.setPosition(r.outerHeight());
							var o = $("body").attr("class").replace(/conv-\d+/g, "");
							$("body").attr("class", o)
						}
					},
					s = function(t) {
						libsb.user && libsb.user.id && !e.text().trim() ? ("string" != typeof t && (t = "Reply as " + libsb.user.id.replace(/^guest-/, ""), window.currentState.thread || (t += " or <a class='text-button js-new-discussion'>start a discussion</a>")), n.html(t)) : n.empty()
					};
				document.hasFocus() && e.focus(),
					s(),
					libsb.on("init-dn",
						function(e, t) {
							s(),
								t()
						},
						10),
					libsb.on("navigate",
						function(t, n) {
							t.old && (t.old.roomName !== t.roomName && e.empty(), t.old.thread !== t.thread && s()),
								n()
						},
						50),
					$(window).on("resize",
						function() {
							t.setPosition(r.outerHeight())
						}),
					$(document).on("keydown",
						function(e) {
							27 === e.keyCode && (i = !1, s())
						}),
					r.on("click",
						function(t) {
							$(t.target).closest(".js-new-discussion").length ? (i = !0, s("Type discussion title"), o.addClass("animating"), setTimeout(function() {
										o.removeClass("animating")
									},
									500)) : $(t.target).closest(".chat-conv-dot-wrap").length && (i = !1, s()),
								e.focus()
						}),
					libsb.on("text-up",
						function(e, t) {
							i && (e.labels || (e.labels = {}), e.labels.manualThreaded = 1, e.threads = [{
									id: "new",
									score: 1
								}]),
								i = !1,
								t()
						},
						300),
					e.on("paste",
						function() {
							setTimeout(function() {
									var t = format.htmlToText(e.html());
									e.html(format.textToHtml(t)).scrollTop(e[0].scrollHeight),
										$.fn.setCursorEnd && e.setCursorEnd()
								},
								5)
						}),
					e.on("DOMSubtreeModified input paste",
						function() {
							t.setPosition(r.outerHeight()),
								s()
						}),
					e.on("keypress",
						function(e) {
							13 !== e.which || e.shiftKey || (e.preventDefault(), a())
						}),
					libsb.on("navigate",
						function(t, r) {
							var o = "";
							t.old && t.old.connectionStatus != t.connectionStatus && ("online" == t.connectionStatus ? (s(), e.attr("contenteditable", !0), e.data("text") && e.data("text").room === window.currentState.roomName && (o = e.data("text").content || "", e.text(o).data("text", null))) : (o = e.text(), e.data("text", {
									room: window.currentState.roomName,
									content: o
								}).attr("contenteditable", !1).empty(), n.text("Cannot send messages while offline."))),
								r()
						},
						600),
					$(".chat-send").on("click", a)
			})
		}, {
			"./chat-area.js": 79
		}
	],
	84: [
		function(e) {
			function t(e) {
				var t;
				i = null,
					$(".conf-area").empty(),
					a = a || {},
					t = {
						mode: a.mode && "noroom" !== a.mode ? a.mode : "normal",
						tab: a.tab || "info",
						source: e
					},
					libsb.emit("navigate", t),
					a = null
			}

			function n(e) {
				var t = {
					room: e
				};
				libsb.emit("config-show", t,
					function(e, t) {
						delete t.room,
							i = t,
							s(t)
					})
			}

			function r() {
				setTimeout(function() {
						libsb.emit("navigate", {
							mode: "normal",
							tab: "info",
							source: "conf-cancel"
						})
					},
					0)
			}

			function o() {
				var e = !1;
				return libsb.memberOf && libsb.memberOf.forEach(function(t) {
						t.id == currentState.roomName && "owner" == t.role && (e = !0)
					}),
					e
			}
			var i, a, s = e("./render-settings.js");
			$(function() {
					$(".configure-button").on("click",
							function() {
								libsb.emit("navigate", {
									mode: "conf",
									tab: "general",
									source: "configure-button",
									roomName: window.currentState.roomName
								})
							}),
						$(".conf-save").on("click",
							function() {
								var e = $(this);
								"conf" === currentState.mode && (e.addClass("working"), e.attr("disabled", !0), libsb.emit("config-save", {
										id: window.currentState.roomName,
										description: "",
										identities: [],
										params: {},
										guides: {}
									},
									function(n, r) {
										var o = {
											to: currentState.roomName,
											room: r
										};
										libsb.emit("room-up", o,
											function(n, r) {
												if (e.removeClass("working"), e.attr("disabled", !1), n);
												else {
													for (var o in r.room.params)
														if (r.room.params.hasOwnProperty(o) && r.room.params[o].error) return;
													t("conf-save")
												}
											})
									}))
							}),
						$(".conf-cancel").on("click",
							function() {
								"conf" === window.currentState.mode && t("conf-cancel")
							})
				}),
				libsb.on("navigate",
					function(e, t) {
						if (e.old && e.old.mode !== e.mode && "conf" === e.mode) {
							if (a = e.old, !o()) return r(),
								t();
							libsb.getRooms({
									ref: currentState.roomName,
									hasMember: libsb.user.id
								},
								function(e, o) {
									return !e && o.results && o.results.length ? n(o.results[0]) : (r(), t())
								})
						}
						return t()
					},
					500)
		}, {
			"./render-settings.js": 104
		}
	],
	85: [
		function(e, t) {
			var n = {
				supported: function() {
					var e, t;
					if ("webkitNotifications" in window) switch (e = "webkit", webkitNotifications.checkPermission()) {
						case "0":
							t = "granted";
							break;
						case "2":
							t = "denied";
							break;
						default:
							t = "default"
					} else {
						if (!("Notification" in window)) return !1;
						e = "html5",
							Notification.permission ? t = Notification.permission : Notification.permissionLevel && (t = Notification.permissionLevel())
					}
					return {
						type: e,
						permission: t
					}
				},
				request: function() {
					var e = this.supported();
					"granted" !== e.permission && "denied" !== e.permission && ("webkit" === e.type ? webkitNotifications.requestPermission() : "html5" === e.type && Notification.requestPermission())
				},
				show: function(e) {
					var t, n = this.supported();
					"granted" === n.permission ? "webkit" === n.type ? (t = webkitNotifications.createNotification(e.icon, e.title, e.body), t.show(), t.onclick = e.action) : "html5" === n.type && (t = new Notification(e.title, {
						dir: "auto",
						lang: "en-US",
						body: e.body,
						tag: e.tag,
						icon: e.icon
					}), t.onclick = e.action) : this.request()
				}
			};
			t.exports = n
		}, {}
	],
	86: [
		function() {
			$(function() {
				var e;
				libsb.on("error-dn",
						function(t, n) {
							switch (t.message) {
								case "ERR_IRC_NOT_CONNECTED":
									e = "We are having some issues with irc. Please try again after some time"
							}
							e && $("<div>").text(e).alertbar({
									type: "error"
								}),
								n()
						},
						500),
					libsb.on("disconnected",
						function(e, t) {
							libsb.emit("navigate", {
									mode: "offline"
								}),
								t()
						},
						900),
					$(".offline-view-reconnect").on("click",
						function() {
							location.reload()
						})
			})
		}, {}
	],
	87: [
		function() {
			$(function() {
				function e(e) {
					e ? (n.addClass("role-follower"), r.attr("data-tooltip", "Unfollow " + window.currentState.roomName)) : (n.removeClass("role-follower"), r.attr("data-tooltip", "Follow " + window.currentState.roomName))
				}

				function t(t, n) {
					return libsb.emit("getUsers", {
								memberOf: window.currentState.roomName,
								ref: libsb.user.id
							},
							function(t, n) {
								var r, o = n.results;
								o && o.length ? (r = n.results[0], e(!r || "follower" !== r.role && "member" !== r.role ? !1 : !0)) : e(!1)
							}),
						n ? n() : void 0
				}
				var n = $("body"),
					r = $(".follow-button"),
					o = $(".follow-room-action");
				o.on("click",
						function() {
							n.hasClass("role-follower") ? libsb.part(window.currentState.roomName) : libsb.join(window.currentState.roomName),
								n.toggleClass("role-follower")
						}),
					libsb.on("navigate",
						function(e, n) {
							return e.roomName && null === e.room ? n() : ("normal" === e.mode && e.roomName !== e.old.roomName && "object" == typeof e.room && t(), void n())
						},
						600),
					libsb.on("init-dn",
						function(e, n) {
							t(),
								n()
						},
						100),
					libsb.on("join-dn",
						function(t, n) {
							"join" === t.type && t.to === window.currentState.roomName && t.from === libsb.user.id && e(!0),
								n()
						},
						100),
					libsb.on("part-dn",
						function(t, n) {
							"part" === t.type && t.to === window.currentState.roomName && t.from === libsb.user.id && e(!1),
								n()
						},
						100),
					libsb.on("back-dn",
						function(e, n) {
							t(),
								n()
						},
						100),
					libsb.on("room-dn",
						function(e, n) {
							e.to === currentState.roomName && e.from === libsb.user && t(),
								n()
						},
						50)
			})
		}, {}
	],
	88: [
		function() {
			!
			function() {
				var e;
				"_gaq" in window && (e = ["roomName", "thread", "mode", "dialog", "tab", "query"], libsb.on("navigate",
					function(t, n) {
						return t.old ? (e.forEach(function(e) {
							t.old[e] !== t[e] && _gaq.push(["_trackEvent", e, t[e]])
						}), void n()) : n()
					},
					500))
			}()
		}, {}
	],
	89: [
		function() {
			function e(e, t) {
				var n = libsb.user.params.notifications && "boolean" == typeof libsb.user.params.notifications[t] ? libsb.user.params.notifications[t] : !0;
				e.items["guest-" + t + "-notification-" + (n ? "disable" : "enable")] = {
					text: (n ? "Disable " : "Enable ") + t + " notifications",
					prio: 500,
					action: function() {
						var e = $.extend(!0, {},
							libsb.user);
						e.params.notifications ? e.params.notifications[t] = !e.params.notifications[t] : (e.params.notifications = {},
								e.params.notifications[t] = !1),
							e.params.notifications.desktop = !1,
							libsb.emit("user-up", {
									user: e
								},
								function() {})
					}
				}
			}
			libsb.on("user-menu",
				function(t, n) {
					return /^guest-/.test(libsb.user.id) ? (e(t, "sound"), void n()) : n()
				},
				500)
		}, {}
	],
	90: [
		function() {
			$(function() {
				var e, t, n;
				e = $("<div></div>").css({
						width: "100px",
						height: "100px",
						overflow: "auto"
					}).appendTo(document.body),
					t = $("<div></div>").appendTo(e),
					n = t.innerWidth() - t.height(101).innerWidth(),
					e.remove(),
					$("<style>").attr("type", "text/css").html(".hide-scroll { overflow-y: scroll; margin-right: -" + n + "px; }").appendTo("head")
			})
		}, {}
	],
	91: [
		function() {
			!
			function(e) {
				e.fn.infinite = function(t) {
						var n = t.scrollSpace || 1e3,
							r = t.fillSpace || 200,
							o = t.itemHeight || 20,
							i = t.maxReq || 32,
							a = t.startIndex,
							s = t.getItems;
						"function" != typeof s && void 0,
							e(this).data("options", t),
							e(this).empty(),
							e(this).each(function() {
								function t() {
									p = b.scrollTop(),
										h = b.height(),
										C = b.data("upper-limit"),
										E = b.data("lower-limit"),
										g = b.prop("scrollHeight"),
										a = b.data("index")
								}

								function u() {
									var e, t;
									t = C ? 0 : Math.max(n, v.height() + n - p),
										t != v.height() && (p += t - v.height(), v.height(t), b.scrollTop(p)),
										e = E ? 0 : Math.max(n, w.height() + n + h + p - g),
										e != w.height() && w.height(e)
								}

								function l() {
									var e, t, n, r = y.children();
									if (0 === r.length) return 1;
									for (e = r.eq(0).offset().left, t = 1, n = r.size(); n > t && r.eq(t).offset().left != e; t++);
									return n > t ? t : 1
								}

								function c() {
									var e, t, n = p + y.offset().top - b.offset().top,
										u = p - n,
										c = n + y.height() - (p + h),
										m = [];
									u > r && (m = m.concat(f(u - r, "above"))),
										c > r && (m = m.concat(f(c - r, "below"))),
										r > u && !S.above && !C && (S.above = !0, e = l(), t = Math.min(i, Math.ceil((r - u) / o / e) * e), s(y.children().eq(0).data("index") || a, t, 0, m,
											function(e) {
												S.above = !1,
													d(e, "above")
											})),
										r > c && !S.below && !E && (S.below = !0, e = l(), s(y.children().eq(-1).data("index") || a, 0, Math.min(i, Math.ceil((r - c) / o / e) * e), m,
											function(e) {
												S.below = !1,
													d(e, "below")
											}))
								}

								function d(e, t) {
									var n, r = 0;
									e[0] === !1 && "above" == t && (C = !0, b.data("upper-limit", !0).children(".infinite-above").addClass("upper-limit"), e.shift()),
										e[e.length - 1] === !1 && "below" == t && (E = !0, b.data("lower-limit", !0).children(".infinite-below").addClass("lower-limit"), e.pop()),
										0 !== e.length && ("above" == t && y.children().eq(0).data("index") === e[e.length - 1].data("index") ? e.pop() : "below" == t && y.children().eq(-1).data("index") === e[0].data("index") && e.shift(), 0 !== e.length && ("above" == t ? (n = y.children().eq(0), y.prepend(e), r = n.size() ? n.offset().top - e[0].offset().top : y.height(), v.height(v.height() > r ? v.height() - r : 0)) : (n = y.children().eq(-1), y.append(e), r = n.size() ? e[e.length - 1].offset().top + e[e.length - 1].height() - (n.offset().top + n.height()) : y.height(), w.height(Math.max(0, w.height() - r))), o = y.height() / y.children().size() || 1, m()))
								}

								function f(t, n) {
									function r(e) {
										var r;
										return r = "above" == n ? -a.offset().top + e.offset().top + e.outerHeight() : -e.offset().top + (a.offset().top + a.outerHeight()),
											r > t ? !0 : (s.push(e[0]), u = r, !1)
									}
									var o, i, a, s = [],
										u = 0,
										l = y.children();
									if ("above" == n)
										for (a = y.children().eq(0), C = !1, b.data("upper-limit", !1).children(".infinite-above").removeClass("upper-limit"), o = 0, i = l.size() - 1; i > o && !r(l.eq(o)); o++);
									else
										for (a = y.children().eq(-1), E = !1, b.data("lower-limit", !1).children(".infinite-below").removeClass("lower-limit"), o = l.size() - 1; o > 0 && !r(l.eq(o)); o--);
									return 0 === s.length ? [] : ("above" == n ? v.height(v.height() + u) : w.height(w.height() + u), e(s).remove(), s)
								}

								function m() {
									b.is(":visible") && (t(), u(), c())
								}
								var p, h, g, b = e(this),
									v = e("<div>").addClass("infinite-above").appendTo(b),
									y = e("<div>").addClass("infinite-items").appendTo(b),
									w = e("<div>").addClass("infinite-below").appendTo(b),
									S = {},
									x = null,
									C = !1,
									E = !1;
								b.data("update-infinite", m),
									b.scroll(function() {
										x && clearTimeout(x),
											x = setTimeout(m, 200)
									}),
									e(window).resize(m),
									t(),
									b.scrollTop((g - h) / 2)
							})
					},
					e.fn.reset = function(t) {
						var n = e(this);
						n.find(".infinite-items").empty(),
							n.data("lower-limit", !1).children(".infinite-above").removeClass("upper-limit").height("inherit"),
							n.data("upper-limit", !1).children(".infinite-below").removeClass("lower-limit").height("inherit"),
							void 0 !== typeof t && n.data("index", t),
							n.scrollTop((n.prop("scrollHeight") - n.height()) / 2),
							n.data("update-infinite")()
					},
					e.fn.addBelow = function(t) {
						var n = e(this),
							r = n.data("lower-limit") && n.scrollTop() - n[0].scrollHeight + n.height() === 0;
						n.find(".infinite-items").append(t),
							r && n.scrollTop(n[0].scrollHeight),
							n.data("update-infinite")()
					},
					e.fn.addAbove = function(t) {
						var n = e(this);
						n.find(".infinite-items").prepend(t),
							n.data("update-infinite")()
					}
			}(jQuery)
		}, {}
	],
	92: [
		function() {
			var e = {};
			$(function() {
					var t = $(".pane-info").eq(0);
					e.render = function(e) {
							t.find(".info-title").text(e.id),
								t.find(".info-description").html(format.textToHtml(e.description || "This room has no description."))
						},
						libsb.on("init-dn",
							function(e, t) {
								currentState.embed && currentState.embed.form && libsb.enter(window.location.pathname.split("/")[1]),
									t()
							},
							600)
				}),
				libsb.on("room-dn",
					function(t, n) {
						t.room.id === currentState.roomName && e.render(t.room),
							n()
					},
					600),
				libsb.on("navigate",
					function(t, n) {
						t.old && t.roomName == t.old.roomName && t.old.connectionStatus == t.connectionStatus || e.render(t.room && "string" != typeof t.room ? t.room : {
								id: t.roomName,
								description: "Currently offline."
							}),
							"info" == t.tab ? $(".pane-info").addClass("current") : $(".pane-info").removeClass("current"),
							n()
					},
					600)
		}, {}
	],
	93: [
		function() {
			$(function() {
				$.fn.attrchange ? $("body").attrchange(function() {
					$("body").attr("class") && $("body").attr("class").match(/mode-/) && $.progressbar("dismiss")
				}) : setTimeout(function() {
						$.progressbar("dismiss")
					},
					300)
			})
		}, {}
	],
	94: [
		function(e) {
			var t = e("./showmenu.js");
			$(function() {
				$(document).click(".chat-area",
					function(e) {
						var n = $(e.target).closest(".chat-item").get(0),
							r = $(n).find(".chat-more").get(0);
						if (e.target === r) {
							var o = n ? n.id : "",
								i = "registered";
							o && (/^guest-/.test(libsb.user.id) ? i = "guest" : libsb.memberOf.forEach(function(e) {
								e.id === currentState.roomName && "owner" === e.role && (i = "owner")
							}), libsb.emit("text-menu", {
									origin: r,
									items: {},
									role: i,
									target: n
								},
								function(e, n) {
									delete n.role,
										delete n.target,
										t("text-menu", n)
								}))
						}
					})
			})
		}, {
			"./showmenu.js": 111
		}
	],
	95: [
		function() {
			libsb.on("navigate",
				function(e, t) {
					"profile" === e.mode && $("#profile-view-name").text(e.roomName),
						t()
				},
				100)
		}, {}
	],
	96: [
		function() {
			$(function() {
				var e, t = [],
					n = function() {
						var n = $(".title-bar"),
							r = $(".minimize-ticker"),
							o = n.attr("class").replace(/(has-messages)+(-\d+)?/g, "").trim();
						if (n.attr("class", o), clearInterval(e), t.length)
							if (window.currentState.minimize) {
								var i = 0,
									a = function() {
										r.text(t[i]),
											i++,
											i >= t.length && (i = 0)
									};
								a(),
									e = setInterval(a, 1500),
									n.addClass("has-messages has-messages-" + t.length)
							} else t = []
					};
				libsb.on("text-dn",
						function(e, r) {
							window.currentState.minimize && e.from && e.text && e.to === window.currentState.roomName && (t.push(e.from.replace(/^guest-/, "") + ": " + e.text), t.length > 3 && (t = t.splice(Math.max(t.length - 3, 1))), n()),
								r()
						},
						100),
					libsb.on("navigate",
						function(e, t) {
							e.old && e.minimize !== e.old.minimize && n(),
								t()
						},
						100)
			})
		}, {}
	],
	97: [
		function() {
			function e(e) {
				t || (delete e.command, t = !0, /^guest-/.test(libsb.user.id) ? libsb.emit("init-up", e,
					function() {
						t = !1
					}) : t = !1)
			}
			var t = !1;
			$(window).on("message",
					function(t) {
						var n, r = t.originalEvent.data;
						if (t.originalEvent.origin === "https://" + location.host) {
							if ("string" == typeof r) try {
								n = JSON.parse(r)
							} catch (o) {
								return void void 0
							} else n = r;
							r.command && "signin" == r.command && e(n)
						}
					}),
				$(window).on("phonegapmsg",
					function(t, n) {
						e(n)
					})
		}, {}
	],
	98: [
		function() {
			$(function() {
				$(document).on("click", ".tab",
						function() {
							var e = $(this).attr("class").match(/\btab-([a-z\-]+)\b/);
							e && (e = e[1], libsb.emit("navigate", {
								tab: e,
								source: "tabs"
							}))
						}),
					$(document).on("click", ".list-item",
						function() {
							var e = $(this).attr("class").match(/\blist-item-([a-z\-]+)-settings\b/);
							e && (e = e[1], libsb.emit("navigate", {
								tab: e
							}))
						}),
					libsb.on("navigate",
						function(e, t) {
							e.tab !== e.old.tab && e.tab && "normal" == e.mode && ($(".tab.current").removeClass("current"), $(".tab-" + e.tab).addClass("current")),
								t()
						},
						100)
			})
		}, {}
	],
	99: [
		function(e) {
			var t = e("./person.js"),
				n = {};
			$(function() {
				function e(e) {
					r(function() {
						i.reset(e)
					})
				}

				function r(e) {
					var t = {},
						n = [];
					libsb.getUsers({
							memberOf: s
						},
						function(r, o) {
							var i, u, l = o.results;
							if (l = l.map(function(e) {
								return $.extend({},
									e)
							}))
								for (i = 0, u = l.length; u > i; i++) t[l[i].id] = l[i],
									t[l[i].id].score = "owner" == l[i].role ? 6 : 1;
							libsb.getUsers({
									occupantOf: s
								},
								function(r, o) {
									var i, s, u, l = o.results;
									if (l = l.map(function(e) {
										return $.extend({},
											e)
									}))
										for (s = 0, u = l.length; u > s; s++) t[l[s].id] ? t[l[s].id].score += 3 : (t[l[s].id] = l[s], t[l[s].id].score = 3),
											t[l[s].id].status = "online";
									for (i in t) t.hasOwnProperty(i) && n.push(t[i]);
									n.sort(function(e, t) {
											return e.score !== t.score ? -(e.score - t.score) : e.id < t.id ? -1 : 1
										}),
										a = n,
										e()
								})
						})
				}

				function o(t) {
					libsb.on(t,
						function(t, n) {
							t.to === s && e(),
								n()
						},
						100)
				}
				var i = $(".pane-people-wrap"),
					a = [],
					s = "";
				["join-dn", "part-dn", "away-dn", "back-dn", "user-dn"].forEach(o),
					i.infinite({
						scrollSpace: 2e3,
						fillSpace: 500,
						itemHeight: 100,
						startIndex: 0,
						getItems: function(e, n, r, o, i) {
							var s, u, l, c = [];
							if (n) {
								if ("undefined" == typeof e) return i([!1]);
								s = e - n,
									u = e
							} else("undefined" == typeof e || 0 > e) && (e = 0),
								s = e,
								u = e + r;
							for (0 > s && (s = 0), u >= a.length && (u = a.length - 1), l = s; u >= l; l++) "undefined" != typeof a[l] && c.push(t.render(null, a[l], l));
							n ? c.length < n && c.unshift(!1) : r && c.length < r && c.push(!1),
								i(c)
						}
					}),
					libsb.on("navigate",
						function(t, n) {
							var r, o = !1;
							return "people-area" == t.source ? n() : (s = t.roomName, t.old ? (r = $(".pane-people"), "people" === t.tab ? (r.addClass("current"), t.tab != t.old.tab && (o = !0)) : r.removeClass("current"), "boot" == t.source && (o = !0), t.old.connectionStatus != t.connectionStatus && (o = !0), t.roomName != t.old.roomName && (o = !0)) : o = !0, o && e(), void n())
						},
						400),
					n.setBottom = function(e) {
						var t = i.scrollTop() + i.height() == i[0].scrollHeight;
						i.css({
								bottom: e
							}),
							t && i.scrollTop(i[0].scrollHeight)
					},
					n.setRoom = function(e) {
						s = e,
							i.reset()
					}
			})
		}, {
			"./person.js": 100
		}
	],
	100: [
		function(e, t) {
			var n = {};
			$(function() {
					var e = $(".person").eq(0);
					n.render = function(t, n, r) {
						return t = t || e.clone(!1),
							t.find(".person-avatar").attr({
								src: n.picture
							}),
							t.find(".person-name").text(n.id.replace(/^guest-/, "")),
							t.attr("data-index", r),
							"online" !== n.status && t.addClass("offline"),
							t
					}
				}),
				t.exports = n
		}, {}
	],
	101: [
		function() {
			!
			function() {
				$(document).on("click", ".button.persona",
					function() {
						navigator.id.watch({
								onlogin: function(e) {
									var t = {};
									t.auth = {
											browserid: e
										},
										libsb.emit("init-up", t,
											function() {})
								},
								onlogout: function() {}
							}),
							navigator.id.request()
					})
			}()
		}, {}
	],
	102: [
		function(e) {
			function t(e) {
				var t;
				r = null,
					$(".pref-area").empty(),
					o = o || {},
					t = {
						mode: o.mode || "home",
						tab: o.tab || "info",
						source: e
					},
					libsb.emit("navigate", t),
					o = null
			}

			function n() {
				libsb.emit("getUsers", {
						ref: "me"
					},
					function(e, t) {
						var n = t.results[0];
						n.params || (n.params = {}),
							n.guides || (n.guides = {});
						var o = {
							user: n
						};
						libsb.emit("pref-show", o,
							function(e, t) {
								delete t.user,
									r = t,
									i(t, n)
							})
					})
			}
			var r, o, i = e("./render-settings.js");
			$(function() {
					$(".conf-save").on("click",
							function() {
								if ("pref" === window.currentState.mode) {
									var e = {
										id: libsb.user.id,
										description: "",
										identities: libsb.user.identities || libsb.user.identities,
										params: libsb.user.params || {},
										guides: libsb.user.guides || {}
									};
									libsb.emit("pref-save", e,
										function(e, n) {
											libsb.emit("user-up", {
													user: n
												},
												function() {
													t("conf-save")
												})
										})
								}
							}),
						$(".conf-cancel").on("click",
							function() {
								"pref" === window.currentState.mode && t("conf-cancel")
							})
				}),
				libsb.on("navigate",
					function(e, t) {
						if (e.old && e.old.mode !== e.mode && "pref" === e.mode && (o = e.old, !r)) {
							if (!libsb.user || !libsb.user.id || /guest-/.test(libsb.user.id)) return libsb.emit("navigate", {
									mode: "home"
								}),
								t();
							libsb.isInited === !0 ? n() : libsb.on("init-dn",
								function(e, t) {
									n(),
										t()
								},
								100)
						}
						t()
					},
					500),
				libsb.on("user-menu",
					function(e, t) {
						return "pref" === window.currentState.mode || /^guest-/.test(libsb.user.id) ? t() : (e.items.userpref = {
								text: "Account settings",
								prio: 300,
								action: function() {
									libsb.emit("navigate", {
										mode: "pref",
										tab: "profile",
										view: "meta"
									})
								}
							},
							void t())
					},
					1e3)
		}, {
			"./render-settings.js": 104
		}
	],
	103: [
		function(e, t) {
			var n = {
				show: function(e) {
					var t, n = this,
						r = $(".quick-notification-container");
					return e.type || (e.type = "info"),
						e.id || (e.id = "quick-notification-" + (new Date).getTime()),
						t = $("#" + e.id),
						r.length || (r = $("<div>").addClass("quick-notification-container"), r.appendTo(".main-area")),
						t.length && t.hasClass("quick-notification-item") && n.hide(t),
						t = $("<div>").addClass("quick-notification-item " + e.type).attr("id", e.id).text(e.text),
						t.appendTo(r),
						"number" == typeof e.timeout && setTimeout(function() {
								n.hide(t)
							},
							e.timeout),
						t
				},
				hide: function(e) {
					var t, n = $(".notify-container");
					t = $(e ? e : ".quick-notification-item"),
						t.hasClass("quick-notification-item") && t.velocity("fadeOut", 150,
							function() {
								$(this).remove(),
									n.children().length || n.remove()
							})
				}
			};
			t.exports = n
		}, {}
	],
	104: [
		function(e, t) {
			function n(e) {
				var t = $("<div>"),
					n = $("<div>"),
					o = [];
				for (var i in e) o.push([e[i].prio, i, e[i]]);
				o.sort(function(e, t) {
					return t[0] - e[0]
				});
				for (var a = 0; a < o.length; a++) o[a][2].notify && o[a][2].notify.type && t.find(".list-item-" + o[a][1] + "-settings").addClass(o[a][2].notify.type),
					$("<a>").addClass("list-item list-item-" + o[a][1] + "-settings ").text(o[a][2].text).appendTo(t),
					$(o[a][2].html).addClass("list-view list-view-" + o[a][1] + "-settings ").appendTo(n);
				switch (currentState.mode) {
					case "pref":
						$(".meta-pref").empty().append(t),
							$(".pref-area").empty().append(n);
						break;
					case "conf":
						$(".meta-conf").empty().append(t),
							$(".conf-area").empty().append(n)
				}
				r(currentState.room), ("pref" === currentState.mode || "conf" === currentState.mode) && ($(".list-item.current, .list-view.current").removeClass("current"), $(".list-item-" + currentState.tab + "-settings, .list-view-" + currentState.tab + "-settings").addClass("current"))
			}

			function r(e) {
				var t;
				if (e && e.params) return Object.keys(e.params).forEach(function(n) {
						e.params[n] && e.params[n].error && (t = n, $(".list-item-" + n + "-settings").addClass("error"))
					}),
					t
			}
			libsb.on("room-dn",
					function(e, t) {
						var r, o = e.room,
							i = !1;
						if (!o.params) return t();
						for (var a in o.params) o.params[a].error && (i = !0, r = a);
						i && libsb.emit("config-show", {
									room: e.room
								},
								function(e, t) {
									delete t.room,
										n(t),
										$(".list-item-" + r + "-settings").addClass("error"),
										libsb.emit("navigate", {
											tab: r
										})
								}),
							t()
					},
					500),
				t.exports = n
		}, {}
	],
	105: [
		function(e) {
			function t(e) {
				a[e] !== r && ("online" == window.currentState.connectionStatus ? (a[e] = r, libsb.enter(e,
					function(t) {
						var n;
						t && (a[e] = o),
							n = s.indexOf(e),
							n >= 0 && s.splice(n, 1)
					})) : (a[e] = i, s.indexOf(e) < 0 && s.push(e)))
			}

			function n() {}
			var r = 1,
				o = 0,
				i = 2,
				a = {},
				s = [];
			libsb.on("user-menu",
					function(e, t) {
						return "home" === window.currentState.mode || window.currentState.embed || /^guest-/.test(libsb.user.id) ? t() : (e.items.homefeed = {
								text: "My rooms",
								prio: 100,
								action: function() {
									libsb.emit("navigate", {
										mode: "home",
										view: "normal",
										source: "user-menu"
									})
								}
							},
							void t())
					},
					1e3),
				$(function() {
					function r(e) {
						$("[data-room]").removeClass("current"),
							$("[data-room=" + e + "]").addClass("current")
					}

					function o() {
						f.container.empty(),
							libsb.emit("getRooms", {
									featured: !0
								},
								function(e, t) {
									if (t && t.results && t.results.length)
										for (var n = 0,
											r = t.results.length; r > n; n++) f.add(t.results[n])
								})
					}

					function i() {
						var e = window.currentState.roomName;
						v.clear(),
							e && libsb.emit("getRooms", {
									ref: e
								},
								function(e, t) {
									t && t.results && t.results.length && v.add(t.results[0])
								}),
							libsb.occupantOf && libsb.occupantOf.forEach(function(e) {
								v.add(e)
							}),
							libsb.memberOf && libsb.memberOf.forEach(function(e) {
								v.add(e)
							}),
							r(e)
					}
					var a = e("../lib/validate.js"),
						u = e("./room-card.js"),
						l = e("./room-item.js"),
						c = e("./rooms"),
						d = c(".js-area-rooms", l.render, "room-item"),
						f = c(".js-area-home-feed-featured", u.render, "room-card-featured"),
						m = c(".js-area-home-feed-mine", u.render, "room-card-mine"),
						p = $(".room-header"),
						h = $("#home-go-to-room-form"),
						g = $("#home-go-to-room-entry"),
						b = $(".js-create-room"),
						v = {
							add: function(e) {
								var n = !1;
								n = "home" === window.currentState.mode ? m.add(e) : d.add(e),
									n && t(e.id)
							},
							remove: function(e) {
								var t = !1;
								t = "home" === window.currentState.mode ? m.remove(e) : d.remove(e),
									t && n(e.id)
							},
							clear: function() {
								for (var e = d.container.add(m.container), t = e.find("[data-room]"), r = 0, o = t.length; o > r; r++) n(t.eq(r).attr("data-room"));
								return e.empty()
							}
						};
					libsb.on("navigate",
							function(e, t) {
								e.old && (e.old.connectionStatus !== e.connectionStatus || e.old.roomName !== e.roomName && "room-area" !== e.source || e.old.mode !== e.mode) && (i(), o()),
									t()
							},
							500),
						libsb.on("init-dn",
							function(e, n) {
								for (i(), o(); s.length;) t(s[0]),
									s = s.slice(1);
								n()
							},
							500),
						$(document).on("click", "[data-room]",
							function() {
								var e = $(this).attr("data-room");
								e && (r(e), libsb.emit("navigate", {
									roomName: e,
									mode: "normal",
									view: "normal",
									source: "room-area",
									query: null,
									thread: null,
									time: null
								}))
							}),
						g.on("keydown paste",
							function() {
								$(this).removeClass("error")
							}),
						h.on("submit",
							function(e) {
								var t, n = g.val();
								return n = "string" == typeof n ? n.toLowerCase().trim() : "",
									t = a(n),
									e.preventDefault(),
									t.isValid ? void(n ? libsb.emit("navigate", {
										roomName: n,
										mode: "normal",
										view: "normal",
										source: "room-list",
										query: null,
										thread: null,
										time: null
									}) : g.addClass("error").focus()) : void g.addClass("error")
							}),
						p.on("click",
							function() {
								libsb.emit("navigate", {
									mode: "home",
									view: "normal",
									source: "room-header"
								})
							}),
						b.on("click",
							function() {
								libsb.emit("navigate", {
									dialog: "createroom"
								})
							})
				}),
				libsb.on("room-dn",
					function(e, t) {
						setTimeout(function() {
								e.old && e.old.id || libsb.emit("navigate", {
										mode: "conf",
										tab: "embed",
										time: null,
										roomName: e.room.id
									}),
									t()
							},
							0)
					},
					100)
		}, {
			"../lib/validate.js": 46,
			"./room-card.js": 106,
			"./room-item.js": 107,
			"./rooms": 109
		}
	],
	106: [
		function(e, t) {
			function n(e) {
				var t = r.hashCode(e);
				return 0 > t && (t >>>= 1),
					t % 10
			}
			var r = e("../lib/stringUtils.js"),
				o = {},
				i = $(".card-item-wrap").eq(0);
			o.render = function(e, t) {
					var r, o;
					return t = t || i.clone(!1),
						e && e.id ? (o = e.id, t = t || i.clone(!1), t.addClass("color-" + n(o)), r = t.find(".card-item"), r.attr("data-room", o), r.find(".card-header-title").text(o), r.find(".card-content-summary").text(e.description || "This room has no description."), t) : void 0
				},
				t.exports = o
		}, {
			"../lib/stringUtils.js": 43
		}
	],
	107: [
		function(e, t) {
			var n = {},
				r = $(".room-item").eq(0);
			n.render = function(e, t) {
					var n = e.id;
					return t = t || r.clone(!1),
						t.find(".room-name").text(n),
						t.attr("data-room", n),
						window.currentState.roomName === n && ($(".room-item.current").removeClass("current"), t.addClass("current")),
						t
				},
				t.exports = n
		}, {}
	],
	108: [
		function() {
			function e(e, t) {
				var n, r = $("[data-room='" + e + "']"),
					o = r.find(".js-room-notifications-counter");
				if (r.length && o.length) {
					if ("remove" === t) return void o.removeClass("mentioned").text("");
					for (var i = 0,
						a = o.length; a > i && !(n = parseInt(o.eq(i).text(), 10) || 0); i++);
					n++,
					n && o.text(n),
						t && o.addClass(t)
				}
			}
			libsb.on("text-dn",
					function(t, n) {
						t.to !== window.currentState.roomName && (libsb.user && t.mentions && t.mentions.indexOf(libsb.user.id) > -1 ? e(t.to, "mentioned") : e(t.to)),
							n()
					},
					1e3),
				libsb.on("navigate",
					function(t, n) {
						t.roomName !== t.old.roomName && e(t.roomName, "remove"),
							n()
					},
					500)
		}, {}
	],
	109: [
		function(e, t) {
			function n(e, t, n) {
				if ("function" != typeof t) throw new Error("Invalid render function passed!");
				if (this.prefix = n, this.container = $(e), !this.container.length) throw new Error("Container does not exist!");
				this.render = function(e) {
						var n = t(e);
						return n.attr("id", this.prefix + "-" + e.id),
							n.attr("data-room", e.id),
							n
					},
					this.getElement = function(e) {
						return this.container.find("#" + this.prefix + "-" + e.id)
					}
			}
			n.prototype = {
					container: this.container,
					add: function(e) {
						return e && e.id ? this.getElement(e).length ? !1 : (this.container.append(this.render(e)), !0) : !1
					},
					remove: function(e) {
						var t;
						return e && e.id ? (t = this.getElement(e), t.length ? (t.remove(), !0) : !1) : !1
					}
				},
				t.exports = function(e, t, r) {
					return new n(e, t, r)
				}
		}, {}
	],
	110: [
		function() {
			$(function() {
				var e = $(".search-entry"),
					t = $(".search-bar"),
					n = function() {
						$("body").addClass("search-focus"),
							t.velocity({
									opacity: [1, 0],
									translateY: [0, "-100%"]
								},
								300,
								function() {
									e.focus().data("search-ready", !0)
								})
					},
					r = function() {
						t.velocity({
								opacity: [0, 1],
								translateY: ["-100%", 0]
							},
							300,
							function() {
								$("body").removeClass("search-focus"),
									e.data("search-ready", !1)
							})
					};
				$(".search-button").on("click", n),
					$(document).on("click",
						function(t) {
							t.target !== $(".search-button")[0] && t.target !== e[0] && e.data("search-ready") && r()
						}),
					$(".search-entry").keypress(function(t) {
						13 == t.which && (r(), t.preventDefault(), libsb.emit("navigate", {
							view: "meta",
							mode: "search",
							tab: "search-local",
							query: e.val()
						}))
					})
			})
		}, {}
	],
	111: [
		function(e, t) {
			var n = function(e, t) {
				var n, r, o, i, a = $("<div>"),
					s = [];
				if ("string" == typeof t.title && $("<div>").addClass("popover-section popover-title").text(t.title).appendTo(a), "object" == typeof t.buttons && !$.isEmptyObject(t.buttons)) {
					o = $("<div>").addClass("popover-section popover-buttons");
					for (var u in t.buttons) i = t.buttons[u],
						s.push([i.prio, i, u]);
					s.sort(function(e, t) {
							return e[0] - t[0]
						}),
						s.forEach(function(e) {
							"string" == typeof e[1].text && "function" == typeof e[1].action && $("<a>").addClass("button " + e[2].toLowerCase().replace(" ", "-")).text(e[1].text).on("click",
								function() {
									$.popover("dismiss"),
										e[1].action()
								}).appendTo(o)
						}),
						o.appendTo(a)
				}
				if ("object" == typeof t.items && !$.isEmptyObject(t.items)) {
					n = $("<div>").addClass("popover-section").append("<ul>"),
						s = [];
					for (var l in t.items) r = t.items[l],
						s.push([r.prio, r, l]);
					s.sort(function(e, t) {
							return e[0] - t[0]
						}),
						s.forEach(function(e) {
							"string" == typeof e[1].text && "function" == typeof e[1].action && $("<li>").append($("<a>").addClass(e[2].toLowerCase().replace(" ", "-")).text(e[1].text)).on("click",
								function() {
									$.popover("dismiss"),
										e[1].action()
								}).appendTo(n.find("ul"))
						}),
						n.appendTo(a)
				}
				return a.addClass(e).popover({
					origin: t.origin
				})
			};
			t.exports = n
		}, {}
	],
	112: [
		function(e) {
			var t = e("./thread.js"),
				n = {};
			!
			function() {
				function e(e, n) {
					n(e.map(function(e) {
						return e && t.render(null, e, d.indexOf(e))
					}))
				}

				function r(e, n) {
					n(e.map(function(e) {
						return e && t.render(null, e, e.startTime)
					}))
				}

				function o(t, n, r, o) {
					function i(t, n) {
						for (a = t; n >= a; a++) "undefined" != typeof d[a] && c.push(d[a]);
						e(c, o)
					}
					var a, s, u, l = {},
						c = [];
					if (t || (t = 0), n) {
						if (0 === t) return o([!1]);
						s = t - n,
							0 > s && (s = 0),
							u = t
					} else s = t,
						0 === s && (s = 1),
						u = t + r;
					return u < d.length ? i(s, u) : d.length <= 1 || d[d.length - 1] !== !1 ? (l.pos = d.length - 1, l.after = u - l.pos + 1, "search-local" === currentState.tab && (l.to = currentState.roomName || ""), l.q = currentState.query, void libsb.getThreads(l,
						function(e, t) {
							var n = t.results;
							d = d.concat(n),
								t.results.length < l.after && d[d.length - 1] !== !1 && d.push(!1),
								i(s, u)
						})) : i(s, d.length - 1)
				}

				function i(e, t, n, o) {
					var i = {
						before: t,
						after: n
					};
					return !e && n ? o([!1]) : (i.to = s, i.time = e || null, void libsb.getThreads(i,
						function(i, a) {
							var s = a.results;
							if (i) throw i;
							return a.to !== currentState.roomName ? o([]) : e || 0 !== s.length ? (t ? s.length < t && s.unshift(!1) : n && s.length < n && s.push(!1), void r(s, o)) : o([!1])
						}))
				}
				var a, s = "",
					u = null,
					l = "",
					c = "",
					d = [],
					f = null;
				libsb.on("navigate",
						function(e, t) {
							var n = !1;
							return e.mode && (c = e.mode),
								"search" == currentState.mode && $(".tab-" + e.tab).addClass("current"),
								e.roomName && null === e.room ? t() : "thread-area" == e.source ? t() : (e.old ? e.roomName && e.roomName != s ? (s = e.roomName, n = !0) : e.old && e.old.query != e.query ? (n = !0, l = e.query || "") : e.tab != e.old.tab && "threads" == e.tab && (n = !0) : (s = e.roomName, n = !0), ["search-local", "search-global", "threads"].indexOf(e.tab) >= 0 ? ($(".pane-threads").addClass("current"), n && ("search" == currentState.mode ? (d.splice(0, d.length), d[0] = !1, a.reset(0)) : a.reset(u)), void t()) : (d = [!1], $(".pane-threads").removeClass("current"), t()))
						},
						200),
					n.setBottom = function(e) {
						var t = a.scrollTop() + a.height() == a[0].scrollHeight;
						a.css({
								bottom: e
							}),
							t && a.scrollTop(a[0].scrollHeight)
					},
					n.setRoom = function(e) {
						s = e,
							a.find(".chat").remove(),
							a.scroll()
					},
					$(function() {
						a = $(".thread-item-container"),
							window.thread = a,
							a.infinite({
								scrollSpace: 2e3,
								fillSpace: 1e3,
								itemHeight: 100,
								startIndex: f,
								getItems: function(e, t, n, r, a) {
									"search" == currentState.mode ? ($(".search-caption").text('Results for "' + currentState.query + '"'), $(".search-back").text("Back to " + currentState.roomName), o(e, t, n, a)) : "threads" == currentState.tab ? i(e, t, n, a) : a([])
								}
							}),
							libsb.on("init-dn",
								function(e, t) {
									a.reset(),
										t()
								},
								100),
							$(".search-back").click(function(e) {
								libsb.emit("navigate", {
										mode: "normal",
										tab: "threads",
										thread: "",
										q: "",
										time: null
									}),
									e.stopImmediatePropagation()
							}),
							a.click(function(e) {
								e.preventDefault();
								var t = $(e.target).closest(".thread-item");
								t.length && libsb.emit("navigate", {
									source: "thread-area",
									time: null,
									thread: t.attr("id").split("-")[1]
								})
							}),
							$(".thread-all-discussions").click(function(e) {
								e.preventDefault(),
									libsb.emit("navigate", {
										source: "thread-area",
										time: null,
										thread: ""
									})
							})
					}),
					libsb.on("text-dn",
						function(e, n) {
							var r, o, i, s = null;
							if (e.labels.startOfThread && a.data("lower-limit")) {
								for (o = 0, i = e.threads.length; i > o; o++)
									if (0 === e.threads[o].id.indexOf(e.id)) {
										s = e.threads[o];
										break
									}
								s && (r = t.render(null, s, s.startTime), r && (a.addBelow(r), a.scrollHeight - (a.height() + a.scrollTop()) < 50 && a.scrollToBottom()))
							}
							n()
						},
						100),
					libsb.on("navigate",
						function(e, t) {
							e.old && e.thread !== e.old.thread && ($(".thread-item.current").removeClass("current"), e.thread ? $("#thread-" + e.thread).addClass("current") : $(".thread-all-discussions").addClass("current")),
								t()
						},
						1)
			}()
		}, {
			"./thread.js": 113
		}
	],
	113: [
		function(e, t) {
			var n = {};
			$(function() {
					var e = $(".thread-item-container .thread-item").eq(0);
					n.render = function(t, n, r) {
						var o = n.title || "";
						return t = t || e.clone(!1),
							"missing" == n.type ? t = $("<div>").addClass("thread-item-missing").attr("data-index", r) : (t.find(".thread-title").text(o.replace(/-/g, " ").trim()), t.find(".thread-snippet").html(""), t.find(".timestamp").html(format.friendlyTime(n.startTime, (new Date).getTime())), t.attr("id", "thread-" + n.id), t.attr("data-index", r), t.addClass("conv-" + n.id.substr(-1)), n.id === window.currentState.thread && t.addClass("current")),
							t
					}
				}),
				t.exports = n
		}, {}
	],
	114: [
		function(e) {
			var t = e("./showmenu.js");
			$(function() {
				function e() {
					var e = !1;
					libsb.memberOf && libsb.memberOf.forEach(function(t) {
							t.id === window.currentState.roomName && "owner" === t.role && (e = !0)
						}),
						e ? $("body").addClass("role-owner") : $("body").removeClass("role-owner")
				}

				function n() {
					libsb && libsb.user && libsb.user.id && (/^guest-/.test(libsb.user.id) ? $("body").removeClass("role-user").addClass("role-guest") : $("body").removeClass("role-guest").addClass("role-user"), r.attr("src", libsb.user.picture), o.text(libsb.user.id.replace(/^guest-/, "")))
				}
				var r = $(".sb-avatar"),
					o = $(".sb-user"),
					i = $("#room-title");
				$(document).on("click", ".js-has-user-menu",
						function() {
							currentState.hasOwnProperty("webview") || libsb.emit("user-menu", {
									origin: $(this),
									buttons: {},
									items: {},
									title: /^guest-/.test(libsb.user.id) ? "Sign in to Scrollback with" : null
								},
								function(e, n) {
									t("user-menu", n)
								})
						}),
					libsb.on("user-menu",
						function(e, t) {
							return /^guest-/.test(libsb.user.id) ? void libsb.emit("auth", e,
								function() {
									t()
								}) : t()
						},
						100),
					libsb.on("init-dn",
						function(t, r) {
							return t.auth && !t.user.id ? r() : (e(), n(), void r())
						},
						100),
					libsb.on("back-dn",
						function(t, r) {
							e(),
								n(),
								r()
						},
						100),
					libsb.on("user-dn",
						function(e, t) {
							r.attr("src", e.user.picture),
								t()
						},
						100),
					libsb.on("navigate",
						function(t, r) {
							t && t.old && t.roomName && t.roomName !== t.old.roomName && (i.text(t.roomName), e()),
								"boot" === t.source && n(),
								r()
						},
						100),
					libsb.on("room-dn",
						function(t, n) {
							t.to === currentState.roomName && e(),
								n()
						},
						25),
					libsb.on("logout",
						function(e, t) {
							libsb.emit("navigate", {
									dialog: "logout"
								}),
								t()
						},
						100),
					libsb.on("logout-dialog",
						function(e, t) {
							e.title = "You've been signed out!",
								e.action = {
									text: "Go back as guest",
									action: function() {
										libsb.emit("navigate", {
												dialog: null
											},
											function() {
												window.location.reload()
											})
									}
								},
								e.dismiss = !1,
								t()
						},
						500)
			})
		}, {
			"./showmenu.js": 111
		}
	],
	115: [
		function() {
			!
			function() {
				navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/) && navigator.userAgent.match(/Safari/) && $("body").css({
					cursor: "pointer"
				})
			}()
		}, {}
	],
	116: [
		function() {
			libsb.on("navigate",
					function(e, t) {
						"boot" === e.source && e.hasOwnProperty("webview") && $("body").addClass("webview-true webview"),
							t()
					},
					600),
				libsb.on("init-up",
					function(e, t) {
						if (currentState.hasOwnProperty("webview")) {
							var n = currentState.webview;
							n.hasOwnProperty("nick") && (e.suggestedNick = n.nick)
						}
						t()
					},
					500)
		}, {}
	]
}, {}, [1]);