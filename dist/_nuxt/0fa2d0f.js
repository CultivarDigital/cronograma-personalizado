(window.webpackJsonp=window.webpackJsonp||[]).push([[64,11,37,38],{1046:function(t,e,r){"use strict";r.r(e);var o=r(19),n=r(20),l=r.n(n),c=r(663),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("TopNavigation",{attrs:{active:"Termos de uso"}}),t._v(" "),r("TermsOfUse")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{TopNavigation:r(669).default,TermsOfUse:r(426).default}),l()(component,{VContainer:c.a})},666:function(t,e,r){"use strict";r.r(e);var o=r(31),n=(r(88),r(28),r(66),r(4),r(57),r(38),r(43),r(674),r(400),r(82),r(675)),l=r.n(n),c=r(150),h=r.n(c),d={props:{raw:{type:Boolean,default:!1},src:{type:String,default:null,required:null},title:{type:String,default:null},thumb:{type:Boolean,default:!1},size:{type:String,default:null},cssClass:{type:String,default:null},contain:{type:Boolean,default:!1},ignoreCache:{type:Boolean,default:!1}},data:function(){return{url:null}},created:function(){this.load()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.src){e.next=16;break}if(r=t.src.replace("/images","/thumbs"),!t.thumb){e.next=6;break}return e.next=5,t.loadURL(r);case 5:t.url=e.sent;case 6:if(t.url){e.next=14;break}return e.next=9,t.loadURL(t.src);case 9:if(t.url=e.sent,t.thumb||t.url||!t.$nuxt.isOffline){e.next=14;break}return e.next=13,t.loadURL(r);case 13:t.url=e.sent;case 14:if(t.url){e.next=16;break}return e.abrupt("return",t.src);case 16:case"end":return e.stop()}}),e)})))()},loadURL:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=l.a.MD5(t).toString(),r.next=3,e.getLocalItem(o);case 3:if(!(n=r.sent)||e.ignoreCache){r.next=8;break}return r.abrupt("return",URL.createObjectURL(n));case 8:return r.prev=8,r.next=11,e.cacheUrl(t);case 11:return r.abrupt("return",r.sent);case 14:return r.prev=14,r.t0=r.catch(8),r.abrupt("return",null);case 17:case"end":return r.stop()}}),r,null,[[8,14]])})))()},cacheUrl:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,c,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t,t.startsWith("http")||t.startsWith("/_nuxt/")||(o="https://www.cultivarbrasil.com"+t),r.next=4,h.a.get(o,{responseType:"arraybuffer"});case 4:return n=r.sent,c=new Blob([n.data],{type:"image/jpg"}),d=l.a.MD5(t).toString(),r.next=9,e.setLocalItem(d,c);case 9:return r.abrupt("return",URL.createObjectURL(c));case 10:case"end":return r.stop()}}),r)})))()}}},v=r(19),f=r(20),m=r.n(f),O=r(209),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.raw&&t.url?r("img",{key:t.src,class:t.cssClass,staticStyle:{"max-width":"100%"},attrs:{src:t.url,width:t.size,height:t.size,alt:t.title,title:t.title}}):t.url?r("v-img",{key:t.src,class:t.cssClass,attrs:{src:t.url,width:t.size,height:t.size,alt:t.title,title:t.title,contain:t.contain,fluid:""}}):t._e()}),[],!1,null,null,null);e.default=component.exports;m()(component,{VImg:O.a})},668:function(t,e,r){"use strict";r.r(e);var o={props:{id:{type:String,default:null},user:{type:Object,default:null},size:{type:String,default:null},color:{type:String,default:"primary"},iconColor:{type:String,default:null},thumb:{type:Boolean,default:!1}},data:function(){return{dialog:!1,profile:null}},computed:{sameUser:function(){return this.$auth.user&&this.profile&&this.profile._id&&this.$auth.user.id===this.profile._id}},watch:{"$auth.user":function(){this.setProfile()}},created:function(){this.setProfile()},methods:{setProfile:function(){this.user?this.profile=this.user:this.profile=this.$auth.user},userClicked:function(){console.log(this.profile),this.dialog=!0}}},n=r(19),l=r(20),c=r.n(l),h=r(261),d=r(221),v=r(265),f=r(122),m=r(652),O=r(268),S=r(257),_=r(656),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-inline-block pointer"},[t.profile&&t.profile.picture?r("v-avatar",{attrs:{size:t.size,color:t.color},on:{click:t.userClicked}},[r("CachedImage",{attrs:{avatar:"",title:t.profile.name,alt:t.profile.name,src:t.profile.picture,size:t.size,color:t.color,thumb:t.thumb}})],1):r("v-avatar",{attrs:{color:t.color,size:t.size},on:{click:t.userClicked}},[r("v-icon",{attrs:{color:t.iconColor,size:t.size/2,dark:""}},[t._v(" mdi-account ")])],1),t._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("div",{staticClass:"text-center pt-6 px-3"},[t.profile&&t.profile.picture?r("v-avatar",{staticClass:"mr-3",attrs:{size:"64"}},[r("CachedImage",{attrs:{avatar:"",title:t.profile.name,alt:t.profile.name,src:t.profile.picture,size:"64",thumb:""}})],1):r("v-avatar",{attrs:{color:"primary",size:"64"}},[r("v-icon",{attrs:{size:"32",dark:""}},[t._v(" mdi-account ")])],1),t._v(" "),r("h5",{staticClass:"text-h5"},[t._v(t._s(t.profile.name))]),t._v(" "),t.profile.region?r("p",{staticClass:"text-subtitle"},[t.profile.city&&t.profile.uf?r("small",[t._v("\n            ("+t._s([t.profile.city,t.profile.uf].join(" - "))+")\n          ")]):t.profile.region?r("small",[t._v("("+t._s(t.profile.region)+")")]):t._e()]):t._e(),t._v(" "),t.profile.bio?r("p",[t._v(t._s(t.profile.bio))]):t._e(),t._v(" "),r("p",[t.sameUser?r("v-btn",{on:{click:function(e){return t.$store.dispatch("showPortal")}}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-account-edit")]),t._v(" Editar perfil\n          ")],1):t._e()],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Fechar ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{CachedImage:r(666).default}),c()(component,{VAvatar:h.a,VBtn:d.a,VCard:v.a,VCardActions:f.a,VDialog:m.a,VDivider:O.a,VIcon:S.a,VSpacer:_.a})},669:function(t,e,r){"use strict";r.r(e);var o=r(54),n=(r(30),r(67),r(98),r(7),r(53),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:this.apiURL+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/"},apiURL:function(){return"https://www.cultivarbrasil.com"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var t=this.links||[];return["Cultivar Brasil"].concat(Object(o.a)(t.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Cultive plantas em casa, tenha mais saúde, economize e melhore sua renda com este App incrível!"},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),l=r(19),c=r(20),h=r.n(c),d=r(683),v=r(684),f=r(685),m=r(261),O=r(221),S=r(257),_=r(656),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-4"},[o("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},["/"!==t.$route.path?o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.replace(t.previousPage)}}},[o("v-icon",[t._v(" mdi-arrow-left ")])],1):o("v-app-bar-nav-icon",{on:{click:t.toggleDrawer}}),t._v(" "),"/"===t.$route.path?o("v-spacer"):t._e(),t._v(" "),"/"===t.$route.path?o("img",{attrs:{title:"Cultivar Brasil",src:r(670),width:"28"}}):o("v-app-bar-title",[o("strong",[o("small",[t._v(t._s(t.active))])])]),t._v(" "),o("v-spacer"),t._v(" "),o("a",{on:{click:function(e){return t.$store.dispatch("showPortal")}}},[t.$auth.user?o("User",{attrs:{size:"25"}}):o("v-avatar",{attrs:{color:"white",size:"25"}},[o("v-icon",{attrs:{color:"primary",dark:""}},[t._v(" mdi-account ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{User:r(668).default}),h()(component,{VAppBar:d.a,VAppBarNavIcon:v.a,VAppBarTitle:f.a,VAvatar:m.a,VBtn:O.a,VIcon:S.a,VSpacer:_.a})},670:function(t,e,r){t.exports=r.p+"img/cultivar-logo-branca.a4b3bbe.png"},671:function(t,e,r){var content=r(672);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("a9b20584",content,!0,{sourceMap:!1})},672:function(t,e,r){var o=r(17)(!1);o.push([t.i,".v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:70px}.v-item-group.v-bottom-navigation .v-btn{height:inherit!important;background-color:transparent!important;min-width:80px!important}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#f5f5f5}.theme--dark.v-app-bar.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-app-bar.v-toolbar{border-radius:0}.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{border-radius:60px 0}.v-app-bar:not([data-booted=true]){transition:none!important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar.v-app-bar--hide-shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:opacity .4s cubic-bezier(.4,0,.2,1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}.v-app-bar-title__content,.v-app-bar-title__placeholder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-app-bar-title__content{position:absolute}",""]),t.exports=o},676:function(t,e){},683:function(t,e,r){"use strict";r(10),r(7),r(8),r(4),r(15),r(9),r(16);var o=r(1),n=(r(172),r(25),r(671),r(637)),l=r(416),c=r(173),h=r(222),d=r(129),v=r(39),f=r(0),m=r(5);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(m.a)(n.a,h.a,d.a,v.a,Object(c.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e.a=_.extend({name:"v-app-bar",directives:{Scroll:l.b},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return h.a.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return S(S({},n.a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return n.a.options.computed.computedContentHeight.call(this);var t=this.dense?48:56;return t+(this.computedOriginalHeight-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){return 1.25+.25*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=n.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:n.a.options.computed.isCollapsed.call(this)},isProminent:function(){return n.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return S(S({},n.a.options.computed.styles.call(this)),{},{fontSize:Object(f.g)(this.computedFontSize,"rem"),marginTop:Object(f.g)(this.computedMarginTop),transform:"translateY(".concat(Object(f.g)(this.computedTransform),")"),left:Object(f.g)(this.computedLeft),right:Object(f.g)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=n.a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=n.a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},684:function(t,e,r){"use strict";r(10),r(7),r(8),r(4),r(15),r(9),r(16);var o=r(1),n=(r(83),r(33)),l=r(221),c=r(2);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var r=e.slots,o=e.listeners,c=e.props,data=e.data,h=Object.assign(data,{staticClass:"v-app-bar__nav-icon ".concat(data.staticClass||"").trim(),props:d(d({},c),{},{icon:!0}),on:o}),v=r().default;return t(l.a,h,v||[t(n.a,"$menu")])}})},685:function(t,e,r){"use strict";var o=r(107),n=r(0),l=r(292),base=Object(o.a)("VAppBar","v-app-bar-title","v-app-bar");e.a=base.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,r=Object(l.easeInOutCubic)(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(n.g)(t+(e-t)*r),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}})}}]);