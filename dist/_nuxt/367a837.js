(window.webpackJsonp=window.webpackJsonp||[]).push([[43,7,34,35],{667:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(88),r(28),r(81),r(4),r(55),r(38),r(43),r(677),r(396),r(82),r(678)),l=r.n(o),c=r(148),h=r.n(c),d={props:{raw:{type:Boolean,default:!1},src:{type:String,default:null,required:null},title:{type:String,default:null},thumb:{type:Boolean,default:!1},size:{type:String,default:null},cssClass:{type:String,default:null},contain:{type:Boolean,default:!1},ignoreCache:{type:Boolean,default:!1}},data:function(){return{url:null}},created:function(){this.load()},methods:{load:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.src){e.next=16;break}if(r=t.src.replace("/images","/thumbs"),!t.thumb){e.next=6;break}return e.next=5,t.loadURL(r);case 5:t.url=e.sent;case 6:if(t.url){e.next=14;break}return e.next=9,t.loadURL(t.src);case 9:if(t.url=e.sent,t.thumb||t.url||!t.$nuxt.isOffline){e.next=14;break}return e.next=13,t.loadURL(r);case 13:t.url=e.sent;case 14:if(t.url){e.next=16;break}return e.abrupt("return",t.src);case 16:case"end":return e.stop()}}),e)})))()},loadURL:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=l.a.MD5(t).toString(),r.next=3,e.getLocalItem(n);case 3:if(!(o=r.sent)||e.ignoreCache){r.next=8;break}return r.abrupt("return",URL.createObjectURL(o));case 8:return r.prev=8,r.next=11,e.cacheUrl(t);case 11:return r.abrupt("return",r.sent);case 14:return r.prev=14,r.t0=r.catch(8),r.abrupt("return",null);case 17:case"end":return r.stop()}}),r,null,[[8,14]])})))()},cacheUrl:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t,t.startsWith("http")||t.startsWith("/_nuxt/")||(n="https://cronograma-personalizado-backend.cultivardigital.com.br"+t),r.next=4,h.a.get(n,{responseType:"arraybuffer"});case 4:return o=r.sent,c=new Blob([o.data],{type:"image/jpg"}),d=l.a.MD5(t).toString(),r.next=9,e.setLocalItem(d,c);case 9:return r.abrupt("return",URL.createObjectURL(c));case 10:case"end":return r.stop()}}),r)})))()}}},v=r(22),f=r(21),m=r.n(f),S=r(215),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.raw&&t.url?r("img",{key:t.src,class:t.cssClass,staticStyle:{"max-width":"100%"},attrs:{src:t.url,width:t.size,height:t.size,alt:t.title,title:t.title}}):t.url?r("v-img",{key:t.src,class:t.cssClass,attrs:{src:t.url,width:t.size,height:t.size,alt:t.title,title:t.title,contain:t.contain,fluid:""}}):t._e()}),[],!1,null,null,null);e.default=component.exports;m()(component,{VImg:S.a})},669:function(t,e,r){"use strict";r.r(e);var n={props:{id:{type:String,default:null},user:{type:Object,default:null},size:{type:String,default:"48"},color:{type:String,default:"primary"},iconColor:{type:String,default:null},thumb:{type:Boolean,default:!1}},data:function(){return{dialog:!1,profile:null}},computed:{sameUser:function(){return this.$auth.user&&this.profile&&this.profile._id&&this.$auth.user.id===this.profile._id}},watch:{"$auth.user":function(){this.setProfile()}},created:function(){this.setProfile()},methods:{setProfile:function(){this.user?this.profile=this.user:this.profile=this.$auth.user}}},o=r(22),l=r(21),c=r.n(l),h=r(258),d=r(248),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-inline-block pointer"},[t.profile&&t.profile.picture?r("v-avatar",{attrs:{size:t.size,color:t.color}},[r("CachedImage",{attrs:{avatar:"",title:t.profile.name,alt:t.profile.name,src:t.profile.picture,size:t.size,color:t.color,thumb:t.thumb}})],1):r("v-avatar",{attrs:{color:t.color,size:t.size}},[r("v-icon",{attrs:{color:t.iconColor,size:t.size/2,dark:""}},[t._v(" mdi-account ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{CachedImage:r(667).default}),c()(component,{VAvatar:h.a,VIcon:d.a})},672:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB9SURBVHgB7ZHNDUZAEIbf9/umACXQgRK0oARdSDTgpoQV9CFK0MGW4OImOzbOhOxN4slkDvN3mIfV0DVQpAiATieB0i9rhgCUtLJuWx4BEQJYjng9rPp+DH2it9f+8MHSmPjJYF0U9qwufxFza4GwPienBxRuJm5kOLVXrR05JyHZA7pNawAAAABJRU5ErkJggg=="},673:function(t,e,r){var content=r(674);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("a9b20584",content,!0,{sourceMap:!1})},674:function(t,e,r){var n=r(17)(!1);n.push([t.i,".v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:70px}.v-item-group.v-bottom-navigation .v-btn{height:inherit!important;background-color:transparent!important;min-width:80px!important}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#f5f5f5}.theme--dark.v-app-bar.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-app-bar.v-toolbar{border-radius:0}.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{border-radius:60px 0}.v-app-bar:not([data-booted=true]){transition:none!important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar.v-app-bar--hide-shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:opacity .4s cubic-bezier(.4,0,.2,1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}.v-app-bar-title__content,.v-app-bar-title__placeholder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-app-bar-title__content{position:absolute}",""]),t.exports=n},675:function(t,e,r){"use strict";r.r(e);var n=r(52),o=(r(30),r(66),r(98),r(11),r(56),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:this.apiURL+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/dashboard"},apiURL:function(){return"https://cronograma-personalizado-backend.cultivardigital.com.br"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var t=this.links||[];return["Cronograma Personalizado"].concat(Object(n.a)(t.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Sistema de gerenciamento de cronograma personalizado de personal hair stylist."},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),l=r(22),c=r(21),h=r.n(c),d=r(684),v=r(685),f=r(658),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4"},[n("v-app-bar",{staticStyle:{"box-shadow":"none"},attrs:{app:"",color:"#fff","hide-on-scroll":""}},[n("v-app-bar-title",{staticClass:"primary--text"},[t._v(t._s(t.active))]),t._v(" "),n("v-spacer"),t._v(" "),n("a",{on:{click:t.toggleDrawer}},[n("img",{attrs:{src:r(672)}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VAppBar:d.a,VAppBarTitle:v.a,VSpacer:f.a})},679:function(t,e){},684:function(t,e,r){"use strict";r(9),r(11),r(7),r(4),r(15),r(8),r(16);var n=r(1),o=(r(173),r(25),r(673),r(642)),l=r(412),c=r(174),h=r(219),d=r(128),v=r(39),f=r(0),m=r(5);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=Object(m.a)(o.a,h.a,d.a,v.a,Object(c.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e.a=A.extend({name:"v-app-bar",directives:{Scroll:l.b},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return h.a.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return O(O({},o.a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return o.a.options.computed.computedContentHeight.call(this);var t=this.dense?48:56;return t+(this.computedOriginalHeight-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){return 1.25+.25*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=o.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:o.a.options.computed.isCollapsed.call(this)},isProminent:function(){return o.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return O(O({},o.a.options.computed.styles.call(this)),{},{fontSize:Object(f.g)(this.computedFontSize,"rem"),marginTop:Object(f.g)(this.computedMarginTop),transform:"translateY(".concat(Object(f.g)(this.computedTransform),")"),left:Object(f.g)(this.computedLeft),right:Object(f.g)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=o.a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},685:function(t,e,r){"use strict";var n=r(107),o=r(0),l=r(285),base=Object(n.a)("VAppBar","v-app-bar-title","v-app-bar");e.a=base.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,r=Object(l.easeInOutCubic)(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(o.g)(t+(e-t)*r),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}})},939:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(88),r(7),r(4),r(222),{data:function(){return{members:null}},computed:{membersWithCity:function(){return this.members?this.members.filter((function(t){return t.city&&t.uf})).length:0}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/v1/users/members");case 2:r=e.sent,t.members=r.sort((function(a,b){return new Date(b.createdAt)-new Date(a.createdAt)}));case 4:case"end":return e.stop()}}),e)})))()}}),l=r(22),c=r(21),h=r.n(c),d=r(253),v=r(664),f=r(261),m=r(248),S=r(255),O=r(162),A=r(91),y=r(257),x=r(254),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TopNavigation",{attrs:{active:"Clientes"}}),t._v(" "),t.members?r("div",[r("v-container",{staticClass:"text-center"},[r("strong",[t._v(t._s(t.members.length))]),t._v(" clientes encontrados\n    ")]),t._v(" "),r("v-list",[t._l(t.members,(function(e){return[r("v-divider",{key:"divider-"+e.id}),t._v(" "),r("v-list-item",{key:e.id,attrs:{click:""}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("User",{attrs:{user:e}})],1),t._v(" "),r("v-list-item-content",[r("div",[r("div",[r("strong",[t._v(t._s(e.name))])]),t._v(" "),e.city&&e.uf?r("div",[r("small",[r("strong",[t._v(t._s(e.city)+" - "+t._s(e.uf))])])]):t._e(),t._v(" "),r("small",[t._v(t._s(e.bio))])])]),t._v(" "),r("v-list-item-action-text",[r("v-btn",{attrs:{to:"/chat/"+e.id,icon:""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-send")])],1),t._v(" "),r("small",{staticClass:"font-weight-light",attrs:{title:"Cadastrado em "+t.$moment(e.createdAt).format("DD/MM/YYYY h:mm:ss")}},[t._v("\n              "+t._s(t.$moment(e.createdAt).fromNow(!0))+"\n            ")])],1)],1)]}))],2)],1):r("div",{staticClass:"text-center py-6"},[r("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"20"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{TopNavigation:r(675).default,User:r(669).default}),h()(component,{VBtn:d.a,VContainer:v.a,VDivider:f.a,VIcon:m.a,VList:S.a,VListItem:O.a,VListItemActionText:A.a,VListItemAvatar:y.a,VListItemContent:A.b,VProgressCircular:x.a})}}]);