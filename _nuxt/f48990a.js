(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{710:function(t,e,r){"use strict";r.r(e);var menu=r(297),n={props:{section:{type:String,default:null},showDescription:{type:Boolean,default:!1}},data:function(){return{url:null,menu:menu.a}}},o=r(19),l=r(22),c=r.n(l),v=r(221),m=r(257),_=r(258),d=r(163),h=r(259),f=r(260),V=r(91),w=r(263),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{staticClass:"mb-8",attrs:{nav:""}},[t._l(Object.keys(t.menu),(function(e){return[t.section?t._e():r("v-subheader",{key:e+"-subheader"},[t._v(t._s(e))]),t._v(" "),t._l(t.menu[e],(function(n){return["Sobre"==n.title||"Colabore"==n.title||n.role&&(!t.$auth.user||t.$auth.user.role!==n.role)||!(!n.required||t.$auth.user&&t.$auth.user[n.required])||t.section&&t.section!==e?t._e():r("v-list-item",{key:n.title,staticClass:"primary",attrs:{dark:"",color:"primary",to:n.to}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{attrs:{dark:""}},[t._v(t._s(n.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"subtitle-1"},[r("strong",[t._v(t._s(n.title))])]),t._v(" "),t.showDescription?r("div",[r("small",[t._v(t._s(n.description))])]):t._e()],1),t._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)]}))]}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:m.a,VList:_.a,VListItem:d.a,VListItemAction:h.a,VListItemAvatar:f.a,VListItemContent:V.b,VListItemTitle:V.d,VSubheader:w.a})}}]);