(window.webpackJsonp=window.webpackJsonp||[]).push([[56,24,36],{1046:function(t,e,r){"use strict";r.r(e);var n=r(19),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TopNavigation",{attrs:{active:"Cultive alimentos saudáveis em casa!"}}),t._v(" "),r("WhatToDo"),t._v(" "),r("Menu")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopNavigation:r(706).default,WhatToDo:r(1016).default,Menu:r(741).default})},705:function(t,e,r){"use strict";r.r(e);var n={props:{id:{type:String,default:null},user:{type:Object,default:null},size:{type:String,default:null},color:{type:String,default:"primary"},iconColor:{type:String,default:null},thumb:{type:Boolean,default:!1}},computed:{profile:function(){return this.user?this.user:this.$auth.user}},methods:{userClicked:function(){this.$auth.user&&this.profile&&this.profile._id&&this.$auth.user.id!==this.profile._id?console.log(this.profile):this.$store.dispatch("showPortal")}}},o=r(19),l=r(20),c=r.n(l),h=r(271),v=r(267),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-inline-block"},[t.profile&&t.profile.picture?r("v-avatar",{attrs:{size:t.size,color:t.color},on:{click:t.userClicked}},[r("CachedImage",{attrs:{avatar:"",title:t.profile.name,alt:t.profile.name,src:t.profile.picture,size:t.size,color:t.color,thumb:t.thumb}})],1):r("v-avatar",{attrs:{color:t.color,size:t.size},on:{click:t.userClicked}},[r("v-icon",{attrs:{color:t.iconColor,size:t.size/2,dark:""}},[t._v(" mdi-account ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{CachedImage:r(416).default}),c()(component,{VAvatar:h.a,VIcon:v.a})},706:function(t,e,r){"use strict";r.r(e);var n=r(55),o=(r(31),r(70),r(101),r(8),r(54),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:this.apiURL+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/"},apiURL:function(){return"https://api.cultivarbrasil.com"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var t=this.links||[];return["Cultivar Brasil"].concat(Object(n.a)(t.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Cultive plantas em casa, tenha mais saúde, economize e melhore sua renda com este App incrível!"},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),l=r(19),c=r(20),h=r.n(c),v=r(711),d=r(712),m=r(713),f=r(271),_=r(227),k=r(267),y=r(694),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4"},[n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},["/"!==t.$route.path?n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.replace(t.previousPage)}}},[n("v-icon",[t._v(" mdi-arrow-left ")])],1):n("v-app-bar-nav-icon",{on:{click:t.toggleDrawer}}),t._v(" "),"/"===t.$route.path?n("v-spacer"):t._e(),t._v(" "),"/"===t.$route.path?n("img",{attrs:{title:"Cultivar Brasil",src:r(707),width:"28"}}):n("v-app-bar-title",[n("strong",[n("small",[t._v(t._s(t.active))])])]),t._v(" "),n("v-spacer"),t._v(" "),n("a",{on:{click:function(e){return t.$store.dispatch("showPortal")}}},[t.$auth.user?n("User",{attrs:{size:"25"}}):n("v-avatar",{attrs:{color:"white",size:"25"}},[n("v-icon",{attrs:{color:"primary",dark:""}},[t._v(" mdi-account ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{User:r(705).default}),h()(component,{VAppBar:v.a,VAppBarNavIcon:d.a,VAppBarTitle:m.a,VAvatar:f.a,VBtn:_.a,VIcon:k.a,VSpacer:y.a})},741:function(t,e,r){"use strict";r.r(e);var menu=r(306),n={props:{section:{type:String,default:null},showDescription:{type:Boolean,default:!1}},data:function(){return{url:null,menu:menu.a}}},o=r(19),l=r(20),c=r.n(l),h=r(227),v=r(267),d=r(268),m=r(170),f=r(269),_=r(270),k=r(92),y=r(273),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{staticClass:"mb-8",attrs:{nav:""}},[t._l(Object.keys(t.menu),(function(e){return[t.section?t._e():r("v-subheader",{key:e+"-subheader"},[t._v(t._s(e))]),t._v(" "),t._l(t.menu[e],(function(n){return["Sobre"==n.title||"Colabore"==n.title||n.role&&(!t.$auth.user||t.$auth.user.role!==n.role)||t.section&&t.section!==e?t._e():r("v-list-item",{key:n.title,staticClass:"primary",attrs:{dark:"",color:"primary",to:n.to}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{attrs:{dark:""}},[t._v(t._s(n.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"subtitle-1"},[r("strong",[t._v(t._s(n.title))])]),t._v(" "),t.showDescription?r("div",[r("small",[t._v(t._s(n.description))])]):t._e()],1),t._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)]}))]}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VIcon:v.a,VList:d.a,VListItem:m.a,VListItemAction:f.a,VListItemAvatar:_.a,VListItemContent:k.b,VListItemTitle:k.d,VSubheader:y.a})}}]);