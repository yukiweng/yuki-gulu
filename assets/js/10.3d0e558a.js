(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(t,e,n){"use strict";var s=n(7),a=n(4),r=n(64),i=n(13),o=n(5),u=n(20),c=n(99),l=n(30),f=n(3),h=n(21),d=n(41).f,p=n(19).f,v=n(8).f,g=n(146).trim,m=a.Number,_=m.prototype,N="Number"==u(h(_)),y=function(t){var e,n,s,a,r,i,o,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=g(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+c}for(i=(r=c.slice(2)).length,o=0;o<i;o++)if((u=r.charCodeAt(o))<48||u>a)return NaN;return parseInt(r,s)}return+c};if(r("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var E,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(N?f((function(){_.valueOf.call(n)})):"Number"!=u(n))?c(new m(y(e)),n,I):y(e)},C=s?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;C.length>b;b++)o(m,E=C[b])&&!o(I,E)&&v(I,E,p(m,E));I.prototype=_,_.constructor=I,i(a,"Number",I)}},145:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},146:function(t,e,n){var s=n(17),a="["+n(145)+"]",r=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),o=function(t){return function(e){var n=String(s(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},156:function(t,e,n){},157:function(t,e,n){},158:function(t,e,n){},171:function(t,e,n){"use strict";var s=n(156);n.n(s).a},172:function(t,e,n){"use strict";var s=n(157);n.n(s).a},173:function(t,e,n){"use strict";var s=n(158);n.n(s).a},178:function(t,e,n){"use strict";n(62),n(42),n(63);var s={name:"g-layout",data:function(){return{layoutClass:{hasSider:!1,parentIsLayout:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"g-sider"==e.$options.name&&(t.layoutClass.hasSider=!0)})),"g-layout"==this.$parent.$options.name&&(this.layoutClass.parentIsLayout=!0)}},a=(n(171),n(29)),r=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"739c6ca4",null);e.a=r.exports},179:function(t,e,n){"use strict";n(143);var s={name:"g-header",props:{height:{type:[String,Number],default:100}}},a=n(29),r=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header",style:"height:"+this.height+"px"},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},180:function(t,e,n){"use strict";var s={name:"g-content"},a=(n(172),n(29)),r=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"4d9c73a4",null);e.a=r.exports},181:function(t,e,n){"use strict";n(143);var s={name:"g-footer",props:{height:{type:[String,Number],default:100}}},a=n(29),r=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer",style:"height:"+this.height+"px"},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},182:function(t,e,n){"use strict";n(143);var s={name:"g-sider",data:function(){return{show:!0}},props:{width:{type:[String,Number],default:200},deleteButton:{type:Boolean,default:!1}},methods:{remove:function(){this.show=!this.show}}},a=(n(173),n(29)),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"sider",style:"width:"+t.width+"px"},[t.deleteButton?n("g-icon",{staticClass:"close",attrs:{name:"delete"},nativeOn:{click:function(e){return t.remove(e)}}}):t._e(),t._v(" "),t._t("default")],2):t._e()}),[],!1,null,"43dd104a",null);e.a=r.exports},227:function(t,e,n){},338:function(t,e,n){"use strict";var s=n(227);n.n(s).a},364:function(t,e,n){"use strict";n.r(e);var s=n(178),a=n(179),r=n(180),i=n(181),o=n(182),u={components:{"g-layout":s.a,"g-header":a.a,"g-content":r.a,"g-footer":i.a,"g-sider":o.a}},c=(n(338),n(29)),l=Object(c.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("g-layout",{staticClass:"layoutDemo"},[e("g-sider",{staticClass:"siderDemo"},[this._v("sider")]),this._v(" "),e("g-layout",[e("g-header",{staticClass:"headerDemo"},[this._v("header")]),this._v(" "),e("g-content",{staticClass:"contentDemo"},[this._v("content")]),this._v(" "),e("g-footer",{staticClass:"footerDemo"},[this._v("footer")])],1)],1)],1)}),[],!1,null,"7c4a180a",null);e.default=l.exports}}]);