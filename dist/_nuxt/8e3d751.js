(window.webpackJsonp=window.webpackJsonp||[]).push([[20,19],{682:function(e,t,n){"use strict";n.r(t);var r={props:{embed:{type:Object,default:function(){return null},required:!0}}},c=n(22),o=n(21),l=n.n(o),f=n(260),d=n(170),v=n(248),O=n(215),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.embed?n("div",["video"===e.embed.type&&e.embed.html?n("div",{staticClass:"mb-3",domProps:{innerHTML:e._s(e.embed.html)}}):n("v-card",{staticClass:"mb-3",attrs:{href:e.embed.url,target:"_blank",outlined:""}},[e.embed.thumbnail_url?n("v-img",{attrs:{src:e.embed.thumbnail_url}}):e._e(),e._v(" "),e.embed.title?n("v-card-title",[e._v(e._s(e.embed.title))]):e._e(),e._v(" "),e.embed.description?n("v-card-subtitle",[e._v("\n      "+e._s(e.embed.description)+"\n    ")]):e._e(),e._v(" "),e.embed.provider_name?n("v-card-text",[n("v-icon",{attrs:{left:"",size:"20"}},[e._v("\n        "+e._s("mdi-"+e.embed.provider_name.toLowerCase())+"\n      ")]),e._v("\n      "+e._s(e.embed.provider_name)+"\n    ")],1):e._e()],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:f.a,VCardSubtitle:d.b,VCardText:d.c,VCardTitle:d.d,VIcon:v.a,VImg:O.a})},691:function(e,t,n){"use strict";n.r(t);var r={props:{embeds:{type:Array,default:function(){return[]},required:!0}}},c=n(22),o=n(21),l=n.n(o),f=n(710),d=n(711),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",e._l(e.embeds,(function(embed,i){return n("v-col",{key:i,attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[n("Embed",{attrs:{embed:embed}})],1)})),1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{Embed:n(682).default}),l()(component,{VCol:f.a,VRow:d.a})},710:function(e,t,n){"use strict";n(11),n(7),n(15),n(16);var r=n(1),c=(n(4),n(25),n(9),n(28),n(81),n(398),n(38),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(43),n(36),n(8),n(82),n(397),n(2)),o=n(67),l=n(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],O=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),m=v.reduce((function(e,t){return e["offset"+Object(l.x)(t)]={type:[String,Number],default:null},e}),{}),y=v.reduce((function(e,t){return e["order"+Object(l.x)(t)]={type:[String,Number],default:null},e}),{}),j={col:Object.keys(O),offset:Object.keys(m),order:Object.keys(y)};function w(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var c=t.replace(e,"");r+="-".concat(c)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var h=new Map;t.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,c=t.children,l=(t.parent,"");for(var f in n)l+=String(n[f]);var d=h.get(l);return d||function(){var e,t;for(t in d=[],j)j[t].forEach((function(e){var r=n[e],c=w(t,e,r);c&&d.push(c)}));var c=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!c||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),h.set(l,d)}(),e(n.tag,Object(o.a)(data,{class:d}),c)}})},711:function(e,t,n){"use strict";n(11),n(7),n(15),n(16);var r=n(1),c=(n(4),n(36),n(62),n(30),n(9),n(28),n(81),n(398),n(38),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(43),n(8),n(397),n(2)),o=n(67),l=n(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],O=["start","end","center"];function m(e,t){return v.reduce((function(n,r){return n[e+Object(l.x)(r)]=t(),n}),{})}var y=function(e){return[].concat(O,["baseline","stretch"]).includes(e)},j=m("align",(function(){return{type:String,default:null,validator:y}})),w=function(e){return[].concat(O,["space-between","space-around"]).includes(e)},h=m("justify",(function(){return{type:String,default:null,validator:w}})),_=function(e){return[].concat(O,["space-between","space-around","stretch"]).includes(e)},S=m("alignContent",(function(){return{type:String,default:null,validator:_}})),C={align:Object.keys(j),justify:Object.keys(h),alignContent:Object.keys(S)},P={align:"align",justify:"justify",alignContent:"align-content"};function k(e,t,n){var r=P[e];if(null!=n){if(t){var c=t.replace(e,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;t.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},j),{},{justify:{type:String,default:null,validator:w}},h),{},{alignContent:{type:String,default:null,validator:_}},S),render:function(e,t){var n=t.props,data=t.data,c=t.children,l="";for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var e,t;for(t in d=[],C)C[t].forEach((function(e){var r=n[e],c=k(t,e,r);c&&d.push(c)}));d.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(e,"align-".concat(n.align),n.align),Object(r.a)(e,"justify-".concat(n.justify),n.justify),Object(r.a)(e,"align-content-".concat(n.alignContent),n.alignContent),e)),x.set(l,d)}(),e(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})}}]);