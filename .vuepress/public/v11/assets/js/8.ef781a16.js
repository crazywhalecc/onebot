(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{363:function(_,v,t){"use strict";t.r(v);var e=t(25),o=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"更新日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新日志"}},[_._v("#")]),_._v(" 更新日志")]),_._v(" "),t("h2",{attrs:{id:"v11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v11"}},[_._v("#")]),_._v(" v11")]),_._v(" "),t("h3",{attrs:{id:"新增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("事件")]),_._v("：新增群消息撤回和好友消息撤回事件")]),_._v(" "),t("li",[t("strong",[_._v("API")]),_._v("：新增 "),t("code",[_._v("get_msg")]),_._v(" "),t("code",[_._v("get_forward_msg")]),_._v(" "),t("code",[_._v("set_group_name")]),_._v(" API")]),_._v(" "),t("li",[t("strong",[_._v("消息段")]),_._v("：新增回复消息段")]),_._v(" "),t("li",[t("strong",[_._v("消息段")]),_._v("：新增合并转发、合并转发节点、合并转发自定义节点消息段")]),_._v(" "),t("li",[t("strong",[_._v("消息段")]),_._v("：新增 XML 和 JSON 消息段")]),_._v(" "),t("li",[t("strong",[_._v("消息段")]),_._v("：新增戳一戳消息段")])]),_._v(" "),t("h3",{attrs:{id:"变更"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变更"}},[_._v("#")]),_._v(" 变更")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("通信")]),_._v("：反向 WebSocket 请求头的 "),t("code",[_._v("Authorization")]),_._v(" 中，"),t("code",[_._v("Token")]),_._v(" 改为 "),t("code",[_._v("Bearer")]),_._v("，与 HTTP 和正向 WebSocket 一致")]),_._v(" "),t("li",[t("strong",[_._v("事件")]),_._v("：修改请求事件，"),t("code",[_._v("comment")]),_._v(" 字段不再对特殊字符转义，内容总是原始的纯文本字符串")]),_._v(" "),t("li",[t("strong",[_._v("API")]),_._v("：修改 "),t("code",[_._v("get_record")]),_._v(" API，移除 "),t("code",[_._v("full_path")]),_._v(" 参数，返回值改为总是绝对路径")]),_._v(" "),t("li",[t("strong",[_._v("API")]),_._v("：修改 "),t("code",[_._v("get_version_info")]),_._v(" API 的响应数据")]),_._v(" "),t("li",[t("strong",[_._v("API")]),_._v("：修改 "),t("code",[_._v("set_restart_plugin")]),_._v(" API 为 "),t("code",[_._v("set_restart")])]),_._v(" "),t("li",[t("strong",[_._v("API")]),_._v("：修改 "),t("code",[_._v("clean_data_dir")]),_._v(" API 为 "),t("code",[_._v("clean_cache")]),_._v("，移除 "),t("code",[_._v("data_dir")]),_._v(" 参数")]),_._v(" "),t("li",[t("strong",[_._v("消息段")]),_._v("：修改图片和语音消息段，不再支持使用相对 "),t("code",[_._v("data/image")]),_._v(" 和 "),t("code",[_._v("data/record")]),_._v(" 的相对路径发送新图片，对于在事件中收到的图片和语音，仍然可以直接使用收到的 "),t("code",[_._v("file")]),_._v(" 参数值发送")]),_._v(" "),t("li",[t("strong",[_._v("消息段")]),_._v("：修改图片和语音消息段，新增 "),t("code",[_._v("proxy")]),_._v(" 参数，用于指定是否通过代理下载图片和语音文件")]),_._v(" "),t("li",[t("strong",[_._v("消息段")]),_._v("：修改图片消息段，新增 "),t("code",[_._v("type")]),_._v(" 参数，用于表示闪照")]),_._v(" "),t("li",[t("strong",[_._v("其它")]),_._v("：不再将 "),t("code",[_._v("data")]),_._v(" 目录暴露给用户，CQHTTP 实现可自行决定图片、语音等文件的存放位置")])]),_._v(" "),t("h3",{attrs:{id:"移除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移除"}},[_._v("#")]),_._v(" 移除")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("事件")]),_._v("：移除讨论组消息事件")]),_._v(" "),t("li",[t("strong",[_._v("API")]),_._v("：移除 "),t("code",[_._v("send_discuss_msg")]),_._v(" "),t("code",[_._v("set_discuss_leave")]),_._v(" API")]),_._v(" "),t("li",[t("strong",[_._v("API")]),_._v("：移除 "),t("code",[_._v("clean_plugin_log")]),_._v(" API")]),_._v(" "),t("li",[t("strong",[_._v("消息段")]),_._v("：移除 "),t("code",[_._v("rich")]),_._v(" 富文本消息段，使用 XML 和 JSON 消息段替代")])]),_._v(" "),t("h2",{attrs:{id:"v10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v10"}},[_._v("#")]),_._v(" v10")]),_._v(" "),t("ul",[t("li",[_._v("修改原 CQHTTP 插件 v4.15 文档的表述，形成通用的 CQHTTP 标准")]),_._v(" "),t("li",[_._v("相比原 CQHTTP 插件，移除了数据文件获取接口、隐藏 API "),t("code",[_._v(".check_update")]),_._v("、所有试验性 API、"),t("code",[_._v("get_status")]),_._v(" API 只保留 "),t("code",[_._v("online")]),_._v(" 和 "),t("code",[_._v("good")]),_._v(" 两个必选字段")])])])}),[],!1,null,null,null);v.default=o.exports}}]);