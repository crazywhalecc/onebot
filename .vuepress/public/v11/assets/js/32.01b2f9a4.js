(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{387:function(t,e,s){"use strict";s.r(e);var a=s(25),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"正向-websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正向-websocket"}},[t._v("#")]),t._v(" 正向 WebSocket")]),t._v(" "),s("p",[t._v("CQHTTP 在启动时开启一个 WebSocket 服务器，监听配置文件指定的 IP 和端口，接受路径为 "),s("code",[t._v("/api")]),t._v("（或 "),s("code",[t._v("/api/")]),t._v("）、"),s("code",[t._v("/event")]),t._v("（或 "),s("code",[t._v("/event/")]),t._v("）、"),s("code",[t._v("/")]),t._v(" 的连接请求。连接建立后，将一直保持连接（用户可主动断开连接），并根据路径的不同，提供 API 调用或事件推送服务。通过 WebSocket 消息发送的数据全部使用 JSON 格式。")]),t._v(" "),s("h2",{attrs:{id:"api-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-接口"}},[t._v("#")]),t._v(" "),s("code",[t._v("/api")]),t._v(" 接口")]),t._v(" "),s("p",[t._v("连接此接口后，向 CQHTTP 发送如下结构的 JSON 对象，即可调用相应的 API：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"send_private_msg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10001000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"echo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这里的 "),s("code",[t._v("action")]),t._v(" 参数用于指定要调用的 API，具体参考 "),s("RouterLink",{attrs:{to:"/specs/api/"}},[t._v("API")]),t._v("；"),s("code",[t._v("params")]),t._v(" 用于传入参数，如果要调用的 API 不需要参数，则可以不加；"),s("code",[t._v("echo")]),t._v(" 字段是可选的，类似于 "),s("a",{attrs:{href:"https://www.jsonrpc.org/specification",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON RPC"),s("OutboundLink")],1),t._v(" 的 "),s("code",[t._v("id")]),t._v(" 字段，用于唯一标识一次请求，可以是任何类型的数据，CQHTTP 将会在调用结果中原样返回。")],1),t._v(" "),s("p",[t._v("客户端向 CQHTTP 发送 JSON 之后，CQHTTP 会往回发送一个调用结果，结构和 "),s("RouterLink",{attrs:{to:"/specs/communication/http.html#响应"}},[t._v("HTTP 的响应")]),t._v(" 相似，（除了包含请求中传入的 "),s("code",[t._v("echo")]),t._v(" 字段外）唯一的区别在于，通过 HTTP 调用 API 时，HTTP 状态码反应的错误情况被移动到响应 JSON 的 "),s("code",[t._v("retcode")]),t._v(" 字段，例如，HTTP 返回 404 的情况，对应到 WebSocket 的回复，是：")],1),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"failed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"retcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"echo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("下面是 "),s("code",[t._v("retcode")]),t._v(" 和 HTTP 状态码的对照：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("code",[t._v("retcode")])]),t._v(" "),s("th",[t._v("HTTP 接口中的状态码")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1400")]),t._v(" "),s("td",[t._v("400")])]),t._v(" "),s("tr",[s("td",[t._v("1401")]),t._v(" "),s("td",[t._v("401")])]),t._v(" "),s("tr",[s("td",[t._v("1403")]),t._v(" "),s("td",[t._v("403")])]),t._v(" "),s("tr",[s("td",[t._v("1404")]),t._v(" "),s("td",[t._v("404")])])])]),t._v(" "),s("p",[t._v("实际上 "),s("code",[t._v("1401")]),t._v(" 和 "),s("code",[t._v("1403")]),t._v(" 并不会真的返回，因为如果建立连接时鉴权失败，连接会直接断开，根本不可能进行到后面的 API 调用阶段。")]),t._v(" "),s("h2",{attrs:{id:"event-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-接口"}},[t._v("#")]),t._v(" "),s("code",[t._v("/event")]),t._v(" 接口")]),t._v(" "),s("p",[t._v("连接此接口后，CQHTTP 会在收到事件后推送至客户端，推送的格式和 "),s("RouterLink",{attrs:{to:"/specs/communication/http-post.html#上报"}},[t._v("HTTP POST 的上报")]),t._v(" 完全一致，事件的具体内容见 "),s("RouterLink",{attrs:{to:"/specs/event/"}},[t._v("事件")]),t._v("。")],1),t._v(" "),s("p",[t._v("与 HTTP POST 不同的是，WebSocket 推送不会对数据进行签名（即 HTTP POST 中的 "),s("code",[t._v("X-Signature")]),t._v(" 请求头在这里没有等价的东西），并且也不会处理响应数据。如果对事件进行处理的时候需要调用接口，请使用 "),s("a",{attrs:{href:"#api-%E6%8E%A5%E5%8F%A3"}},[s("code",[t._v("/api")]),t._v(" 接口")]),t._v(" 或使用 HTTP 调用 API。")]),t._v(" "),s("p",[t._v("此外，这个接口和 HTTP POST 不冲突，如果启用了正向 WebSocket，同时也配置了 HTTP POST 的上报地址，CQHTTP 会先通过 HTTP POST 上报，在处理完它的响应后，向所有已连接了 "),s("code",[t._v("/event")]),t._v(" 的 WebSocket 客户端推送事件。")]),t._v(" "),s("h2",{attrs:{id:"接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" "),s("code",[t._v("/")]),t._v(" 接口")]),t._v(" "),s("p",[t._v("在一条连接上同时提供 "),s("code",[t._v("/api")]),t._v(" 和 "),s("code",[t._v("/event")]),t._v(" 的服务，使用方式参考上面。")]),t._v(" "),s("h2",{attrs:{id:"相关配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关配置"}},[t._v("#")]),t._v(" 相关配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("配置项名称")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("ws.enable")])]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("是否启用正向 WebSocket")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ws.host")])]),t._v(" "),s("td",[s("code",[t._v("0.0.0.0")])]),t._v(" "),s("td",[t._v("WebSocket 服务器监听的 IP")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ws.port")])]),t._v(" "),s("td",[s("code",[t._v("6700")])]),t._v(" "),s("td",[t._v("WebSocket 服务器监听的端口")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);