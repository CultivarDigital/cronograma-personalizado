(window.webpackJsonp=window.webpackJsonp||[]).push([[47,9,39,40],{1033:function(t,e,r){"use strict";r.r(e);var o=r(30),n=(r(88),{data:function(){return{summary:null}},created:function(){this.load()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/v1/messages/summary");case 2:t.summary=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}}),l=r(21),c=r(22),d=r.n(c),h=(r(9),r(11),r(7),r(4),r(15),r(8),r(16),r(103)),v=r(1),f=(r(25),r(915),r(252)),m=r(19),_=r(14),O=r(39),y=r(342),x=r(93),S=r(5),w=r(0),j=["aria-atomic","aria-label","aria-live","role","title"];function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var B=Object(S.a)(m.a,Object(x.b)(["left","bottom"]),_.a,O.a,y.a).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(w.g)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(w.o)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(f.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],r=[Object(w.o)(this)],o=this.$attrs,n=(o["aria-atomic"],o["aria-label"],o["aria-live"],o.role,o.title,Object(h.a)(o,j));return this.inline&&this.left?r.unshift(e):r.push(e),t("span",{staticClass:"v-badge",attrs:n,class:this.classes},r)}}),C=r(221),$=r(267),P=r(258),R=r(162),z=r(259),V=r(260),T=r(91),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TopNavigation",{attrs:{active:"Chat"}}),t._v(" "),t.summary?r("v-list",{attrs:{subheader:"",dense:""}},[t._l(t.summary,(function(e){return[r("v-list-item",{key:e.latest._id,staticClass:"py-2",class:e.unread>0?"grey lighten-3":"",attrs:{to:"/chat/"+e.latest.user._id}},[r("v-list-item-avatar",[r("User",{attrs:{user:e.latest.user,thumb:"",size:"40"}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.latest.user.name)}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"body-2 pt-2"},[t._v("\n            "+t._s(e.latest.message)+"\n          ")])],1),t._v(" "),r("v-list-item-action",[r("v-badge",{attrs:{bordered:"",color:"error",icon:"mdi-lock",overlap:"",content:e.unread,value:e.unread>0}},[r("v-btn",{attrs:{rounded:"",color:"primary"}},[r("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1),t._v(" "),r("v-divider",{key:"divider-"+e.latest._id})]}))],2):t._e(),t._v(" "),t.summary&&0===t.summary.length?r("div",{staticClass:"text-center"},[r("p",[t._v("Nenhuma conversa encontrada!")])]):t._e(),t._v(" "),r("div",{staticClass:"text-center mb-6"},[r("v-btn",{attrs:{to:"/clientes",large:"",color:"secondary"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-account-multiple")]),t._v("\n      Ver lista de clientes\n    ")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{TopNavigation:r(664).default,User:r(662).default}),d()(component,{VBadge:B,VBtn:C.a,VDivider:$.a,VIcon:f.a,VList:P.a,VListItem:R.a,VListItemAction:z.a,VListItemAvatar:V.a,VListItemContent:T.b,VListItemSubtitle:T.c,VListItemTitle:T.d})},660:function(t,e,r){"use strict";r.r(e);var o=r(30),n=(r(88),r(28),r(81),r(4),r(55),r(38),r(43),r(667),r(399),r(82),r(668)),l=r.n(n),c=r(149),d=r.n(c),h={props:{raw:{type:Boolean,default:!1},src:{type:String,default:null,required:null},title:{type:String,default:null},thumb:{type:Boolean,default:!1},size:{type:String,default:null},cssClass:{type:String,default:null},contain:{type:Boolean,default:!1},ignoreCache:{type:Boolean,default:!1}},data:function(){return{url:null}},created:function(){this.load()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.src){e.next=16;break}if(r=t.src.replace("/images","/thumbs"),!t.thumb){e.next=6;break}return e.next=5,t.loadURL(r);case 5:t.url=e.sent;case 6:if(t.url){e.next=14;break}return e.next=9,t.loadURL(t.src);case 9:if(t.url=e.sent,t.thumb||t.url||!t.$nuxt.isOffline){e.next=14;break}return e.next=13,t.loadURL(r);case 13:t.url=e.sent;case 14:if(t.url){e.next=16;break}return e.abrupt("return",t.src);case 16:case"end":return e.stop()}}),e)})))()},loadURL:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=l.a.MD5(t).toString(),r.next=3,e.getLocalItem(o);case 3:if(!(n=r.sent)||e.ignoreCache){r.next=8;break}return r.abrupt("return",URL.createObjectURL(n));case 8:return r.prev=8,r.next=11,e.cacheUrl(t);case 11:return r.abrupt("return",r.sent);case 14:return r.prev=14,r.t0=r.catch(8),r.abrupt("return",null);case 17:case"end":return r.stop()}}),r,null,[[8,14]])})))()},cacheUrl:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,c,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t,t.startsWith("http")||t.startsWith("/_nuxt/")||(o="https://cronograma-personalizado-backend.cultivardigital.com.br"+t),r.next=4,d.a.get(o,{responseType:"arraybuffer"});case 4:return n=r.sent,c=new Blob([n.data],{type:"image/jpg"}),h=l.a.MD5(t).toString(),r.next=9,e.setLocalItem(h,c);case 9:return r.abrupt("return",URL.createObjectURL(c));case 10:case"end":return r.stop()}}),r)})))()}}},v=r(21),f=r(22),m=r.n(f),_=r(209),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.raw&&t.url?r("img",{key:t.src,class:t.cssClass,staticStyle:{"max-width":"100%"},attrs:{src:t.url,width:t.size,height:t.size,alt:t.title,title:t.title}}):t.url?r("v-img",{key:t.src,class:t.cssClass,attrs:{src:t.url,width:t.size,height:t.size,alt:t.title,title:t.title,contain:t.contain,fluid:""}}):t._e()}),[],!1,null,null,null);e.default=component.exports;m()(component,{VImg:_.a})},662:function(t,e,r){"use strict";r.r(e);var o={props:{id:{type:String,default:null},user:{type:Object,default:null},size:{type:String,default:"48"},color:{type:String,default:"primary"},iconColor:{type:String,default:null},thumb:{type:Boolean,default:!1}},data:function(){return{dialog:!1,profile:null}},computed:{sameUser:function(){return this.$auth.user&&this.profile&&this.profile._id&&this.$auth.user.id===this.profile._id}},watch:{"$auth.user":function(){this.setProfile()}},created:function(){this.setProfile()},methods:{setProfile:function(){this.user?this.profile=this.user:this.profile=this.$auth.user},userClicked:function(){console.log(this.profile),this.dialog=!0}}},n=r(21),l=r(22),c=r.n(l),d=r(261),h=r(221),v=r(266),f=r(170),m=r(648),_=r(267),O=r(252),y=r(651),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-inline-block pointer"},[t.profile&&t.profile.picture?r("v-avatar",{attrs:{size:t.size,color:t.color},on:{click:t.userClicked}},[r("CachedImage",{attrs:{avatar:"",title:t.profile.name,alt:t.profile.name,src:t.profile.picture,size:t.size,color:t.color,thumb:t.thumb}})],1):r("v-avatar",{attrs:{color:t.color,size:t.size},on:{click:t.userClicked}},[r("v-icon",{attrs:{color:t.iconColor,size:t.size/2,dark:""}},[t._v(" mdi-account ")])],1),t._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("div",{staticClass:"text-center pt-6 px-3"},[t.profile&&t.profile.picture?r("v-avatar",{staticClass:"mr-3",attrs:{size:"64"}},[r("CachedImage",{attrs:{avatar:"",title:t.profile.name,alt:t.profile.name,src:t.profile.picture,size:"64",thumb:""}})],1):r("v-avatar",{attrs:{color:"primary",size:"64"}},[r("v-icon",{attrs:{size:"32",dark:""}},[t._v(" mdi-account ")])],1),t._v(" "),r("h5",{staticClass:"text-h5"},[t._v(t._s(t.profile.name))]),t._v(" "),t.profile.region?r("p",{staticClass:"text-subtitle"},[t.profile.city&&t.profile.uf?r("small",[t._v("\n            ("+t._s([t.profile.city,t.profile.uf].join(" - "))+")\n          ")]):t.profile.region?r("small",[t._v("("+t._s(t.profile.region)+")")]):t._e()]):t._e(),t._v(" "),t.profile.bio?r("p",[t._v(t._s(t.profile.bio))]):t._e(),t._v(" "),r("p",[t.sameUser?r("v-btn",{on:{click:function(e){return t.$store.dispatch("showPortal")}}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-account-edit")]),t._v(" Editar perfil\n          ")],1):r("v-btn",{attrs:{to:"/chat/"+t.profile.id}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-send")]),t._v(" Enviar mensagem\n          ")],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Fechar ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{CachedImage:r(660).default}),c()(component,{VAvatar:d.a,VBtn:h.a,VCard:v.a,VCardActions:f.a,VDialog:m.a,VDivider:_.a,VIcon:O.a,VSpacer:y.a})},663:function(t,e,r){t.exports=r.p+"img/logo.97df656.png"},664:function(t,e,r){"use strict";r.r(e);var o=r(52),n=(r(31),r(66),r(98),r(11),r(56),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:this.apiURL+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/"},apiURL:function(){return"https://cronograma-personalizado-backend.cultivardigital.com.br"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var t=this.links||[];return["Cronograma Personalizado"].concat(Object(o.a)(t.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Sistema de gerenciamento de cronograma personalizado de personal hair stylist."},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),l=r(21),c=r(22),d=r.n(c),h=r(673),v=r(674),f=r(675),m=r(261),_=r(221),O=r(252),y=r(651),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-4"},[o("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},["/"!==t.$route.path?o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.replace(t.previousPage)}}},[o("v-icon",[t._v(" mdi-arrow-left ")])],1):o("v-app-bar-nav-icon",{on:{click:t.toggleDrawer}}),t._v(" "),"/"===t.$route.path?o("v-spacer"):t._e(),t._v(" "),"/"===t.$route.path?o("img",{attrs:{title:"Cronograma Personalizado",src:r(663),width:"28"}}):o("v-app-bar-title",[o("strong",[o("small",[t._v(t._s(t.active))])])]),t._v(" "),o("v-spacer"),t._v(" "),o("a",{on:{click:function(e){return t.$store.dispatch("showPortal")}}},[t.$auth.user?o("User",{attrs:{size:"25"}}):o("v-avatar",{attrs:{color:"white",size:"25"}},[o("v-icon",{attrs:{color:"primary",dark:""}},[t._v(" mdi-account ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{User:r(662).default}),d()(component,{VAppBar:h.a,VAppBarNavIcon:v.a,VAppBarTitle:f.a,VAvatar:m.a,VBtn:_.a,VIcon:O.a,VSpacer:y.a})},665:function(t,e,r){var content=r(666);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("a9b20584",content,!0,{sourceMap:!1})},666:function(t,e,r){var o=r(17)(!1);o.push([t.i,".v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:70px}.v-item-group.v-bottom-navigation .v-btn{height:inherit!important;background-color:transparent!important;min-width:80px!important}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#f5f5f5}.theme--dark.v-app-bar.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-app-bar.v-toolbar{border-radius:0}.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{border-radius:60px 0}.v-app-bar:not([data-booted=true]){transition:none!important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar.v-app-bar--hide-shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:opacity .4s cubic-bezier(.4,0,.2,1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}.v-app-bar-title__content,.v-app-bar-title__placeholder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-app-bar-title__content{position:absolute}",""]),t.exports=o},669:function(t,e){},673:function(t,e,r){"use strict";r(9),r(11),r(7),r(4),r(15),r(8),r(16);var o=r(1),n=(r(171),r(25),r(665),r(631)),l=r(400),c=r(173),d=r(222),h=r(128),v=r(39),f=r(0),m=r(5);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(m.a)(n.a,d.a,h.a,v.a,Object(c.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e.a=y.extend({name:"v-app-bar",directives:{Scroll:l.b},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return d.a.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return O(O({},n.a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return n.a.options.computed.computedContentHeight.call(this);var t=this.dense?48:56;return t+(this.computedOriginalHeight-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){return 1.25+.25*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=n.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:n.a.options.computed.isCollapsed.call(this)},isProminent:function(){return n.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return O(O({},n.a.options.computed.styles.call(this)),{},{fontSize:Object(f.g)(this.computedFontSize,"rem"),marginTop:Object(f.g)(this.computedMarginTop),transform:"translateY(".concat(Object(f.g)(this.computedTransform),")"),left:Object(f.g)(this.computedLeft),right:Object(f.g)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=n.a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=n.a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},674:function(t,e,r){"use strict";r(9),r(11),r(7),r(4),r(15),r(8),r(16);var o=r(1),n=(r(83),r(35)),l=r(221),c=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var r=e.slots,o=e.listeners,c=e.props,data=e.data,d=Object.assign(data,{staticClass:"v-app-bar__nav-icon ".concat(data.staticClass||"").trim(),props:h(h({},c),{},{icon:!0}),on:o}),v=r().default;return t(l.a,d,v||[t(n.a,"$menu")])}})},675:function(t,e,r){"use strict";var o=r(107),n=r(0),l=r(290),base=Object(o.a)("VAppBar","v-app-bar-title","v-app-bar");e.a=base.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,r=Object(l.easeInOutCubic)(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(n.g)(t+(e-t)*r),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}})},915:function(t,e,r){var content=r(916);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("5276b867",content,!0,{sourceMap:!1})},916:function(t,e,r){var o=r(17)(!1);o.push([t.i,'.v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:70px}.v-item-group.v-bottom-navigation .v-btn{height:inherit!important;background-color:transparent!important;min-width:80px!important}.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=o}}]);