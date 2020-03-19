(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{212:function(t,s,a){},323:function(t,s,a){"use strict";var n=a(212);a.n(n).a},383:function(t,s,a){"use strict";a.r(s);a(323);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"toast-提示框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toast-提示框"}},[t._v("#")]),t._v(" Toast 提示框")]),t._v(" "),a("p",[t._v("使用本组件前，请先引入plugin.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" plugin form "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$toast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("autoClose")]),t._v("默认为5秒后关闭，可自行设置时长"),a("br"),t._v("\n若无需自动关闭，则设置 "),a("code",[t._v("autoClose:false")])]),t._v(" "),a("p",[a("strong",[t._v("预览：")])]),t._v(" "),a("ClientOnly",[a("toast-demo-1")],1),t._v(" "),a("p",[a("strong",[t._v("代码：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<g-button @click=\"onClick\">上方弹出</g-button>\n\nmethods:{\n    onClick(){\n        this.$toast('3秒后自动关闭',{\n            autoClose:3\n        })\n    }\n}\n")])])]),a("h3",{attrs:{id:"位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位置"}},[t._v("#")]),t._v(" 位置")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("position")]),t._v("，支持三个位置 "),a("code",[t._v("top")]),t._v(" "),a("code",[t._v("middle")]),t._v(" "),a("code",[t._v("bottom")]),t._v("，默认"),a("code",[t._v("top")])]),t._v(" "),a("p",[a("strong",[t._v("预览：")])]),t._v(" "),a("ClientOnly",[a("toast-demo-2")],1),t._v(" "),a("p",[a("strong",[t._v("代码：")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$toast('上方弹出的信息')"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("上方弹出"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$toast('中间弹出的信息',{position:'middle'})"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("中间弹出"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$toast('下方弹出的信息',{position:'bottom'})"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("下方弹出"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"关闭按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭按钮"}},[t._v("#")]),t._v(" 关闭按钮")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("closeButton")]),t._v("，类型为对象"),a("br"),t._v("\n接受两个属性："),a("br"),t._v("\n按钮文本"),a("code",[t._v("text")]),a("br"),t._v("\n回调函数"),a("code",[t._v("callback")])]),t._v(" "),a("p",[a("strong",[t._v("预览：")])]),t._v(" "),a("ClientOnly",[a("toast-demo-3")],1),t._v(" "),a("p",[a("strong",[t._v("代码：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<g-button @click=\"onClick\">上方弹出</g-button>\n\nmethods:{\n    onClick(){\n        this.$toast('这是一条消息',{\n            closeButton:{\n                text:'好的',\n                callback:()=>{\n                    console.log('你看到消息啦')\n                }\n            }\n        })\n    }\n}\n")])])]),a("h3",{attrs:{id:"支持html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持html"}},[t._v("#")]),t._v(" 支持HTML")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("enableHtml")]),t._v("，默认为"),a("code",[t._v("false")])]),t._v(" "),a("p",[a("strong",[t._v("预览：")])]),t._v(" "),a("ClientOnly",[a("toast-demo-4")],1),t._v(" "),a("p",[a("strong",[t._v("代码：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<g-button @click="onClick">上方弹出</g-button>\nmethods:{\n    onClick(){\n        this.$toast(\'<span style="color:#B0D9BE">添加字体颜色</span>\',{enableHtml:true})\n    }\n}\n')])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);