(window.webpackJsonp=window.webpackJsonp||[]).push([[53,23,33],{1008:function(t,e,r){"use strict";r.r(e);var o={components:{TopNavigation:r(706).default},data:function(){return{}},created:function(){}},n=r(19),l=r(20),c=r.n(l),h=r(270),d=r(702),v=r(268),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TopNavigation",{attrs:{active:"Guias",description:"Guias básicos de como plantar, como cuidar do jardim e da horta. Como cuidar do lixo da sua casa e ajudar o meio ambiente."}}),t._v(" "),r("v-container",{staticClass:"text-center mb-6 mt-2"},[r("v-avatar",{staticClass:"mb-6 mt-3",attrs:{size:"100",color:"primary"}},[r("v-icon",{attrs:{color:"white",size:"50"}},[t._v("mdi-library")])],1),t._v(" "),r("h4",{staticClass:"mb-0"},[t._v("Guias")])],1),t._v(" "),r("div",{staticClass:"mb-6"},[r("Menu",{attrs:{section:"Guias"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{TopNavigation:r(706).default,Menu:r(739).default}),c()(component,{VAvatar:h.a,VContainer:d.a,VIcon:v.a})},706:function(t,e,r){"use strict";r.r(e);var o=r(56),n=(r(31),r(71),r(101),r(8),r(55),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:"https://cultivarbrasil.com"+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var t=this.links||[];return["Cultivar Brasil"].concat(Object(o.a)(t.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Site/aplicativo em português focado no Brasil com o objetivo de fortalecer a independência alimentar através do aprendizado coletivo e ferramentas que ajudam no cultivo"},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),l=r(19),c=r(20),h=r.n(c),d=r(710),v=r(711),m=r(712),f=r(270),O=r(227),S=r(268),_=r(695),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-4"},[r("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":"",elevation:"0"}},["/"!==t.$route.path?r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.replace(t.previousPage)}}},[r("v-icon",[t._v(" mdi-arrow-left ")])],1):r("v-app-bar-nav-icon",{on:{click:t.toggleDrawer}}),t._v(" "),"/"===t.$route.path?r("v-app-bar-title",{on:{click:function(e){return t.$store.dispatch("showPortal")}}},[r("small",[t._v("Cultivar")])]):r("v-app-bar-title",[r("small",[t._v(t._s(t.active))])]),t._v(" "),r("v-spacer"),t._v(" "),r("a",{on:{click:function(e){return t.$store.dispatch("showPortal")}}},[t.$auth.user?r("User",{attrs:{size:"25"}}):r("v-avatar",{attrs:{color:"white",size:"25"}},[r("v-icon",{attrs:{color:"primary",dark:""}},[t._v(" mdi-account ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{User:r(416).default}),h()(component,{VAppBar:d.a,VAppBarNavIcon:v.a,VAppBarTitle:m.a,VAvatar:f.a,VBtn:O.a,VIcon:S.a,VSpacer:_.a})},707:function(t,e,r){var content=r(708);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("a9b20584",content,!0,{sourceMap:!1})},708:function(t,e,r){var o=r(17)(!1);o.push([t.i,".v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:70px}.v-item-group.v-bottom-navigation .v-btn{height:inherit!important;background-color:transparent!important;min-width:80px!important}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#f5f5f5}.theme--dark.v-app-bar.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-app-bar.v-toolbar{border-radius:0}.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{border-radius:60px 0}.v-app-bar:not([data-booted=true]){transition:none!important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar.v-app-bar--hide-shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:opacity .4s cubic-bezier(.4,0,.2,1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}.v-app-bar-title__content,.v-app-bar-title__placeholder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-app-bar-title__content{position:absolute}",""]),t.exports=o},710:function(t,e,r){"use strict";r(11),r(8),r(9),r(4),r(15),r(10),r(16);var o=r(1),n=(r(179),r(27),r(707),r(676)),l=r(432),c=r(180),h=r(228),d=r(135),v=r(41),m=r(0),f=r(5);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(f.a)(n.a,h.a,d.a,v.a,Object(c.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e.a=_.extend({name:"v-app-bar",directives:{Scroll:l.b},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return h.a.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return S(S({},n.a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return n.a.options.computed.computedContentHeight.call(this);var t=this.dense?48:56;return t+(this.computedOriginalHeight-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){return 1.25+.25*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=n.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:n.a.options.computed.isCollapsed.call(this)},isProminent:function(){return n.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return S(S({},n.a.options.computed.styles.call(this)),{},{fontSize:Object(m.g)(this.computedFontSize,"rem"),marginTop:Object(m.g)(this.computedMarginTop),transform:"translateY(".concat(Object(m.g)(this.computedTransform),")"),left:Object(m.g)(this.computedLeft),right:Object(m.g)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=n.a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=n.a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},711:function(t,e,r){"use strict";r(11),r(8),r(9),r(4),r(15),r(10),r(16);var o=r(1),n=(r(86),r(34)),l=r(227),c=r(2);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var r=e.slots,o=e.listeners,c=e.props,data=e.data,h=Object.assign(data,{staticClass:"v-app-bar__nav-icon ".concat(data.staticClass||"").trim(),props:d(d({},c),{},{icon:!0}),on:o}),v=r().default;return t(l.a,h,v||[t(n.a,"$menu")])}})},712:function(t,e,r){"use strict";var o=r(110),n=r(0),l=r(303),base=Object(o.a)("VAppBar","v-app-bar-title","v-app-bar");e.a=base.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,r=Object(l.easeInOutCubic)(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(n.g)(t+(e-t)*r),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}})},739:function(t,e,r){"use strict";r.r(e);var menu=r(306),o={props:{section:{type:String,default:null},showDescription:{type:Boolean,default:!1}},data:function(){return{url:null,menu:menu.a}}},n=r(19),l=r(20),c=r.n(l),h=r(227),d=r(268),v=r(271),m=r(170),f=r(272),O=r(273),S=r(54),_=r(275),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{staticClass:"mb-8",attrs:{nav:""}},[t._l(Object.keys(t.menu),(function(e){return[t.section?t._e():r("v-subheader",{key:e+"-subheader"},[t._v(t._s(e))]),t._v(" "),t._l(t.menu[e],(function(o){return["Sobre"==o.title||"Colabore"==o.title||o.role&&(!t.$auth.user||t.$auth.user.role!==o.role)||t.section&&t.section!==e?t._e():r("v-list-item",{key:o.title,staticClass:"primary",attrs:{dark:"",color:"primary",to:o.to}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{attrs:{dark:""}},[t._v(t._s(o.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"subtitle-1"},[r("strong",[t._v(t._s(o.title))])]),t._v(" "),t.showDescription?r("div",[r("small",[t._v(t._s(o.description))])]):t._e()],1),t._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)]}))]}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VIcon:d.a,VList:v.a,VListItem:m.a,VListItemAction:f.a,VListItemAvatar:O.a,VListItemContent:S.b,VListItemTitle:S.d,VSubheader:_.a})}}]);