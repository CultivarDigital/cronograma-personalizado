(window.webpackJsonp=window.webpackJsonp||[]).push([[45,7,13,14,26,34,35],{665:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(88),r(28),r(81),r(4),r(55),r(38),r(43),r(675),r(394),r(82),r(676)),l=r.n(o),c=r(148),d=r.n(c),h={props:{raw:{type:Boolean,default:!1},src:{type:String,default:null,required:null},title:{type:String,default:null},thumb:{type:Boolean,default:!1},size:{type:String,default:null},cssClass:{type:String,default:null},contain:{type:Boolean,default:!1},ignoreCache:{type:Boolean,default:!1}},data:function(){return{url:null}},created:function(){this.load()},methods:{load:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.src){e.next=16;break}if(r=t.src.replace("/images","/thumbs"),!t.thumb){e.next=6;break}return e.next=5,t.loadURL(r);case 5:t.url=e.sent;case 6:if(t.url){e.next=14;break}return e.next=9,t.loadURL(t.src);case 9:if(t.url=e.sent,t.thumb||t.url||!t.$nuxt.isOffline){e.next=14;break}return e.next=13,t.loadURL(r);case 13:t.url=e.sent;case 14:if(t.url){e.next=16;break}return e.abrupt("return",t.src);case 16:case"end":return e.stop()}}),e)})))()},loadURL:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=l.a.MD5(t).toString(),r.next=3,e.getLocalItem(n);case 3:if(!(o=r.sent)||e.ignoreCache){r.next=8;break}return r.abrupt("return",URL.createObjectURL(o));case 8:return r.prev=8,r.next=11,e.cacheUrl(t);case 11:return r.abrupt("return",r.sent);case 14:return r.prev=14,r.t0=r.catch(8),r.abrupt("return",null);case 17:case"end":return r.stop()}}),r,null,[[8,14]])})))()},cacheUrl:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t,t.startsWith("http")||t.startsWith("/_nuxt/")||(n="https://cronograma-personalizado-backend.cultivardigital.com.br"+t),r.next=4,d.a.get(n,{responseType:"arraybuffer"});case 4:return o=r.sent,c=new Blob([o.data],{type:"image/jpg"}),h=l.a.MD5(t).toString(),r.next=9,e.setLocalItem(h,c);case 9:return r.abrupt("return",URL.createObjectURL(c));case 10:case"end":return r.stop()}}),r)})))()}}},f=r(22),v=r(21),m=r.n(v),O=r(215),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.raw&&t.url?r("img",{key:t.src,class:t.cssClass,staticStyle:{"max-width":"100%"},attrs:{src:t.url,width:t.size,height:t.size,alt:t.title,title:t.title}}):t.url?r("v-img",{key:t.src,class:t.cssClass,attrs:{src:t.url,width:t.size,height:t.size,alt:t.title,title:t.title,contain:t.contain,fluid:""}}):t._e()}),[],!1,null,null,null);e.default=component.exports;m()(component,{VImg:O.a})},667:function(t,e,r){"use strict";r.r(e);var n={props:{id:{type:String,default:null},user:{type:Object,default:null},size:{type:String,default:"48"},color:{type:String,default:"primary"},iconColor:{type:String,default:null},thumb:{type:Boolean,default:!1}},data:function(){return{dialog:!1,profile:null}},computed:{sameUser:function(){return this.$auth.user&&this.profile&&this.profile._id&&this.$auth.user.id===this.profile._id}},watch:{"$auth.user":function(){this.setProfile()}},created:function(){this.setProfile()},methods:{setProfile:function(){this.user?this.profile=this.user:this.profile=this.$auth.user}}},o=r(22),l=r(21),c=r.n(l),d=r(258),h=r(248),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-inline-block pointer"},[t.profile&&t.profile.picture?r("v-avatar",{attrs:{size:t.size,color:t.color}},[r("CachedImage",{attrs:{avatar:"",title:t.profile.name,alt:t.profile.name,src:t.profile.picture,size:t.size,color:t.color,thumb:t.thumb}})],1):r("v-avatar",{attrs:{color:t.color,size:t.size}},[r("v-icon",{attrs:{color:t.iconColor,size:t.size/2,dark:""}},[t._v(" mdi-account ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{CachedImage:r(665).default}),c()(component,{VAvatar:d.a,VIcon:h.a})},670:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB9SURBVHgB7ZHNDUZAEIbf9/umACXQgRK0oARdSDTgpoQV9CFK0MGW4OImOzbOhOxN4slkDvN3mIfV0DVQpAiATieB0i9rhgCUtLJuWx4BEQJYjng9rPp+DH2it9f+8MHSmPjJYF0U9qwufxFza4GwPienBxRuJm5kOLVXrR05JyHZA7pNawAAAABJRU5ErkJggg=="},671:function(t,e,r){var content=r(672);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("a9b20584",content,!0,{sourceMap:!1})},672:function(t,e,r){var n=r(17)(!1);n.push([t.i,".v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:70px}.v-item-group.v-bottom-navigation .v-btn{height:inherit!important;background-color:transparent!important;min-width:80px!important}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#f5f5f5}.theme--dark.v-app-bar.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-app-bar.v-toolbar{border-radius:0}.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{border-radius:60px 0}.v-app-bar:not([data-booted=true]){transition:none!important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar.v-app-bar--hide-shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:opacity .4s cubic-bezier(.4,0,.2,1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}.v-app-bar-title__content,.v-app-bar-title__placeholder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-app-bar-title__content{position:absolute}",""]),t.exports=n},673:function(t,e,r){"use strict";r.r(e);var n=r(52),o=(r(30),r(66),r(98),r(11),r(56),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:this.apiURL+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/dashboard"},apiURL:function(){return"https://cronograma-personalizado-backend.cultivardigital.com.br"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var t=this.links||[];return["Cronograma Personalizado"].concat(Object(n.a)(t.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Sistema de gerenciamento de cronograma personalizado de personal hair stylist."},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),l=r(22),c=r(21),d=r.n(c),h=r(682),f=r(683),v=r(656),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4"},[n("v-app-bar",{staticStyle:{"box-shadow":"none"},attrs:{app:"",color:"#fff","hide-on-scroll":""}},[n("v-app-bar-title",{staticClass:"primary--text"},[t._v(t._s(t.active))]),t._v(" "),n("v-spacer"),t._v(" "),n("a",{on:{click:t.toggleDrawer}},[n("img",{attrs:{src:r(670)}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAppBar:h.a,VAppBarTitle:f.a,VSpacer:v.a})},677:function(t,e){},682:function(t,e,r){"use strict";r(9),r(11),r(7),r(4),r(15),r(8),r(16);var n=r(1),o=(r(173),r(25),r(671),r(640)),l=r(410),c=r(174),d=r(219),h=r(128),f=r(39),v=r(0),m=r(5);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(m.a)(o.a,d.a,h.a,f.a,Object(c.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e.a=S.extend({name:"v-app-bar",directives:{Scroll:l.b},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return d.a.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return y(y({},o.a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return o.a.options.computed.computedContentHeight.call(this);var t=this.dense?48:56;return t+(this.computedOriginalHeight-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){return 1.25+.25*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=o.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:o.a.options.computed.isCollapsed.call(this)},isProminent:function(){return o.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return y(y({},o.a.options.computed.styles.call(this)),{},{fontSize:Object(v.g)(this.computedFontSize,"rem"),marginTop:Object(v.g)(this.computedMarginTop),transform:"translateY(".concat(Object(v.g)(this.computedTransform),")"),left:Object(v.g)(this.computedLeft),right:Object(v.g)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=o.a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},683:function(t,e,r){"use strict";var n=r(107),o=r(0),l=r(284),base=Object(n.a)("VAppBar","v-app-bar-title","v-app-bar");e.a=base.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,r=Object(l.easeInOutCubic)(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(o.g)(t+(e-t)*r),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}})},708:function(t,e,r){"use strict";r(11),r(7),r(15),r(16);var n=r(1),o=(r(4),r(25),r(9),r(28),r(81),r(396),r(38),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),r(409),r(43),r(36),r(8),r(82),r(395),r(2)),l=r(67),c=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=f.reduce((function(t,e){return t["offset"+Object(c.x)(e)]={type:[String,Number],default:null},t}),{}),O=f.reduce((function(t,e){return t["order"+Object(c.x)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(O)};function S(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var j=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:h(h(h(h({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in r)c+=String(r[d]);var h=j.get(c);return h||function(){var t,e;for(e in h=[],y)y[e].forEach((function(t){var n=r[t],o=S(e,t,n);o&&h.push(o)}));var o=h.some((function(t){return t.startsWith("col-")}));h.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),j.set(c,h)}(),t(r.tag,Object(l.a)(data,{class:h}),o)}})},709:function(t,e,r){"use strict";r(11),r(7),r(15),r(16);var n=r(1),o=(r(4),r(36),r(62),r(30),r(9),r(28),r(81),r(396),r(38),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),r(409),r(43),r(8),r(395),r(2)),l=r(67),c=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return f.reduce((function(r,n){return r[t+Object(c.x)(n)]=e(),r}),{})}var O=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:O}})),S=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},j=m("justify",(function(){return{type:String,default:null,validator:S}})),x=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},w=m("alignContent",(function(){return{type:String,default:null,validator:x}})),_={align:Object.keys(y),justify:Object.keys(j),alignContent:Object.keys(w)},A={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,r){var n=A[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var C=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},y),{},{justify:{type:String,default:null,validator:S}},j),{},{alignContent:{type:String,default:null,validator:x}},w),render:function(t,e){var r=e.props,data=e.data,o=e.children,c="";for(var d in r)c+=String(r[d]);var h=C.get(c);return h||function(){var t,e;for(e in h=[],_)_[e].forEach((function(t){var n=r[t],o=k(e,t,n);o&&h.push(o)}));h.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),C.set(c,h)}(),t(r.tag,Object(l.a)(data,{staticClass:"row",class:h}),o)}})},727:function(t,e,r){"use strict";r.r(e);var menu=r(289),n={props:{showDescription:{type:Boolean,default:!1}},data:function(){return{url:null,menu:menu.a}}},o=r(22),l=r(21),c=r.n(l),d=r(253),h=r(248),f=r(255),v=r(162),m=r(256),O=r(257),y=r(91),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{staticClass:"mb-8",attrs:{nav:""}},[t._l(t.menu,(function(e){return[(!e.role||t.$auth.user&&t.$auth.user.role===e.role)&&(!e.required||t.$auth.user&&t.$auth.user[e.required])?r("v-list-item",{key:e.title,staticClass:"primary",attrs:{dark:"",color:"primary",to:e.to}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{attrs:{dark:""}},[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"subtitle-1"},[r("strong",[t._v(t._s(e.title))])]),t._v(" "),t.showDescription?r("div",[r("small",[t._v(t._s(e.description))])]):t._e()],1),t._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1):t._e()]}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:h.a,VList:f.a,VListItem:v.a,VListItemAction:m.a,VListItemAvatar:O.a,VListItemContent:y.b,VListItemTitle:y.d})},743:function(t,e,r){t.exports=r.p+"img/bg-user.bdbbc05.png"},778:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{value:0}}},o=r(22),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Menu")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Menu:r(727).default})},779:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{value:0}}},o=r(22),l=r(21),c=r.n(l),d=r(260),h=r(708),f=r(662),v=r(709),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-center align-center mb-8"},[n("div",{staticClass:"d-flex justify-center align-center mr-3",style:"width: 67px; height: 67px; background-position: center; background: url("+r(743)+")"},[n("User",{attrs:{size:"53px"}})],1),t._v(" "),n("div",{staticClass:"primary--text",staticStyle:{"font-size":"24px"}},t._l(t.$auth.user.name.split(" ").filter((function(t){return t.length>3})).slice(0,2),(function(e){return n("p",{key:e,staticClass:"mb-0",staticStyle:{"line-height":"26px"}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),n("v-container",[n("v-row",[n("v-col",[n("v-card",{staticClass:"pa-4",attrs:{color:"#EE605E",dark:"",rounded:"lg"}},[n("p",{staticClass:"mb-6",staticStyle:{"line-height":"16px"}},[n("small",[t._v("Tratamentos da semana")])]),t._v(" "),n("p",{staticClass:"mb-0"},[n("strong",[t._v("Hidratação")])]),t._v(" "),n("p",{staticClass:"mb-0"},[n("strong",[t._v("Nutrição")])]),t._v(" "),n("p",{staticClass:"mb-0"},[n("strong",[t._v("Umectação")])])])],1),t._v(" "),n("v-col",[n("v-card",{staticClass:"font-weight-bold text-center pa-5",staticStyle:{"background-color":"rgba(123, 163, 162, 0.4)"},attrs:{elevation:"lg",dark:""}},[n("p",{staticClass:"mb-0",staticStyle:{"font-size":"14px"}},[t._v("Você está na")]),t._v(" "),n("p",{staticClass:"mb-0",staticStyle:{"font-size":"45px"}},[n("strong",[t._v("12ª")])]),t._v(" "),n("p",{staticClass:"mb-0",staticStyle:{"font-size":"14px"}},[n("strong",[t._v("Semana")])])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{User:r(667).default}),c()(component,{VCard:d.a,VCol:h.a,VContainer:f.a,VRow:v.a})},953:function(t,e,r){"use strict";r.r(e);var n=r(22),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$auth.user&&"admin"===t.$auth.user.role?r("div",[r("TopNavigation",{attrs:{active:"Dashboard"}}),t._v(" "),r("DashboardAdmin")],1):r("div",[r("TopNavigation",{attrs:{active:"Perfil"}}),t._v(" "),r("DashboardUser")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopNavigation:r(673).default,DashboardAdmin:r(778).default,DashboardUser:r(779).default})}}]);