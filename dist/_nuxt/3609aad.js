(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{719:function(t,e,n){"use strict";n.r(e);var menu=n(297),r={props:{section:{type:String,default:null},showDescription:{type:Boolean,default:!1}},data:function(){return{url:null,menu:menu.a}}},o=n(19),l=n(20),c=n.n(l),v=n(221),m=n(257),_=n(258),d=n(163),h=n(259),f=n(260),V=n(91),w=n(263),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"mb-8",attrs:{nav:""}},[t._l(Object.keys(t.menu),(function(e){return[t.section?t._e():n("v-subheader",{key:e+"-subheader"},[t._v(t._s(e))]),t._v(" "),t._l(t.menu[e],(function(r){return["Sobre"==r.title||"Colabore"==r.title||r.role&&(!t.$auth.user||t.$auth.user.role!==r.role)||t.section&&t.section!==e?t._e():n("v-list-item",{key:r.title,staticClass:"primary",attrs:{dark:"",color:"primary",to:r.to}},[n("v-list-item-avatar",{attrs:{color:"primary"}},[n("v-icon",{attrs:{dark:""}},[t._v(t._s(r.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"subtitle-1"},[n("strong",[t._v(t._s(r.title))])]),t._v(" "),t.showDescription?n("div",[n("small",[t._v(t._s(r.description))])]):t._e()],1),t._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)]}))]}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:m.a,VList:_.a,VListItem:d.a,VListItemAction:h.a,VListItemAvatar:f.a,VListItemContent:V.b,VListItemTitle:V.d,VSubheader:w.a})}}]);