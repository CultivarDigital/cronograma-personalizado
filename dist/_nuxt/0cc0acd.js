(window.webpackJsonp=window.webpackJsonp||[]).push([[47,32,34,36],{1029:function(e,t,r){"use strict";r.r(t);r(9),r(4),r(26),r(80),r(93);var o=r(917),n={computed:{species:function(){var e=this;return this.$store.state.species.filter((function(t){if(t.planting_time){if(!e.currentRegion)return!0;if("ano todo"===t.planting_time[e.currentRegion])return!0;if("*"===t.planting_time[e.currentRegion])return!1;var r=t.planting_time[e.currentRegion].split("-"),n=o.find((function(e){return e.code===r[0]})).number,c=o.find((function(e){return e.code===r[1]})).number;if(n<=c){if(e.currentMonth.number>=n&&e.currentMonth.number<=c)return!0}else if(e.currentMonth.number>=n&&e.currentMonth.number<=12&&e.currentMonth.number>=1&&e.currentMonth.number<=c)return!0;return!1}return!1}))},currentMonth:function(){var e=(new Date).getMonth()+1;return o.find((function(t){return t.number===e}))}}},c=r(19),l=r(20),d=r.n(l),h=r(701),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("TopNavigation",{attrs:{links:[["Ferramentas","/ferramentas"]],active:"O que plantar em "+e.currentMonth.name.toLowerCase(),description:e.currentMonth.description}}),e._v(" "),r("v-container",[r("div",{staticClass:"text-center"},[r("h3",{staticClass:"text-center mb-3"},[e._v(e._s(e.currentMonth.name))]),e._v(" "),r("p",[e._v(e._s(e.currentMonth.description))]),e._v(" "),r("p",[e._v("\n        Confira abaixo algumas sugestões para este mês no\n        "),r("strong",[e._v(e._s(e.currentRegion||"Brasil"))]),e._v(":\n      ")])])]),e._v(" "),r("Species",{attrs:{species:e.species,parent:"/ferramentas/o-que-plantar-esse-mes"}})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{TopNavigation:r(706).default,Species:r(839).default}),d()(component,{VContainer:h.a})},705:function(e,t,r){"use strict";r.r(t);var o={props:{id:{type:String,default:null},user:{type:Object,default:null},size:{type:String,default:null},color:{type:String,default:"primary"},iconColor:{type:String,default:null},thumb:{type:Boolean,default:!1}},computed:{profile:function(){return this.user?this.user:this.$auth.user}},methods:{userClicked:function(){this.$auth.user&&this.profile&&this.profile._id&&this.$auth.user.id!==this.profile._id?console.log(this.profile):this.$store.dispatch("showPortal")}}},n=r(19),c=r(20),l=r.n(c),d=r(271),h=r(267),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-inline-block"},[e.profile&&e.profile.picture?r("v-avatar",{attrs:{size:e.size,color:e.color},on:{click:e.userClicked}},[r("CachedImage",{attrs:{avatar:"",title:e.profile.name,alt:e.profile.name,src:e.profile.picture,size:e.size,color:e.color,thumb:e.thumb}})],1):r("v-avatar",{attrs:{color:e.color,size:e.size},on:{click:e.userClicked}},[r("v-icon",{attrs:{color:e.iconColor,size:e.size/2,dark:""}},[e._v(" mdi-account ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{CachedImage:r(416).default}),l()(component,{VAvatar:d.a,VIcon:h.a})},706:function(e,t,r){"use strict";r.r(t);var o=r(55),n=(r(31),r(70),r(101),r(8),r(54),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:"https://cultivarbrasil.com"+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var e=this.links||[];return["Cultivar Brasil"].concat(Object(o.a)(e.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Cultive plantas em casa, tenha mais saúde, economize e melhore sua renda com este App incrível!"},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),c=r(19),l=r(20),d=r.n(l),h=r(711),m=r(712),v=r(713),f=r(271),O=r(227),S=r(267),_=r(694),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mb-4"},[o("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},["/"!==e.$route.path?o("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.replace(e.previousPage)}}},[o("v-icon",[e._v(" mdi-arrow-left ")])],1):o("v-app-bar-nav-icon",{on:{click:e.toggleDrawer}}),e._v(" "),"/"===e.$route.path?o("v-spacer"):e._e(),e._v(" "),"/"===e.$route.path?o("img",{attrs:{title:"Cultivar Brasil",src:r(707),width:"28"}}):o("v-app-bar-title",[o("strong",[o("small",[e._v(e._s(e.active))])])]),e._v(" "),o("v-spacer"),e._v(" "),o("a",{on:{click:function(t){return e.$store.dispatch("showPortal")}}},[e.$auth.user?o("User",{attrs:{size:"25"}}):o("v-avatar",{attrs:{color:"white",size:"25"}},[o("v-icon",{attrs:{color:"primary",dark:""}},[e._v(" mdi-account ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{User:r(705).default}),d()(component,{VAppBar:h.a,VAppBarNavIcon:m.a,VAppBarTitle:v.a,VAvatar:f.a,VBtn:O.a,VIcon:S.a,VSpacer:_.a})},707:function(e,t,r){e.exports=r.p+"img/cultivar-logo-branca.a4b3bbe.png"},708:function(e,t,r){var content=r(709);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("a9b20584",content,!0,{sourceMap:!1})},709:function(e,t,r){var o=r(17)(!1);o.push([e.i,".v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:70px}.v-item-group.v-bottom-navigation .v-btn{height:inherit!important;background-color:transparent!important;min-width:80px!important}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#f5f5f5}.theme--dark.v-app-bar.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-app-bar.v-toolbar{border-radius:0}.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{border-radius:60px 0}.v-app-bar:not([data-booted=true]){transition:none!important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar.v-app-bar--hide-shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:opacity .4s cubic-bezier(.4,0,.2,1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}.v-app-bar-title__content,.v-app-bar-title__placeholder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-app-bar-title__content{position:absolute}",""]),e.exports=o},711:function(e,t,r){"use strict";r(11),r(8),r(9),r(4),r(15),r(10),r(16);var o=r(1),n=(r(179),r(27),r(708),r(675)),c=r(432),l=r(180),d=r(228),h=r(134),m=r(41),v=r(0),f=r(5);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _=Object(f.a)(n.a,d.a,h.a,m.a,Object(l.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));t.a=_.extend({name:"v-app-bar",directives:{Scroll:c.b},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return d.a.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return S(S({},n.a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var e=this.computedScrollThreshold;return Math.max((e-this.currentScroll)/e,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return n.a.options.computed.computedContentHeight.call(this);var e=this.dense?48:56;return e+(this.computedOriginalHeight-e)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){return 1.25+.25*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var e=n.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(e+=parseInt(this.extensionHeight)),e},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var e=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?e:-e},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:n.a.options.computed.isCollapsed.call(this)},isProminent:function(){return n.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return S(S({},n.a.options.computed.styles.call(this)),{},{fontSize:Object(v.g)(this.computedFontSize,"rem"),marginTop:Object(v.g)(this.computedMarginTop),transform:"translateY(".concat(Object(v.g)(this.computedTransform),")"),left:Object(v.g)(this.computedLeft),right:Object(v.g)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(e){this.isActive=!e||0!==this.currentScroll},hideOnScroll:function(e){this.isActive=!e||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var e=n.a.options.methods.genBackground.call(this);return e.data=this._b(e.data||{},e.tag,{style:{opacity:this.computedOpacity}}),e},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(e){var t=n.a.options.render.call(this,e);return t.data=t.data||{},this.canScroll&&(t.data.directives=t.data.directives||[],t.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t}})},712:function(e,t,r){"use strict";r(11),r(8),r(9),r(4),r(15),r(10),r(16);var o=r(1),n=(r(85),r(35)),c=r(227),l=r(2);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=l.a.extend({name:"v-app-bar-nav-icon",functional:!0,render:function(e,t){var r=t.slots,o=t.listeners,l=t.props,data=t.data,d=Object.assign(data,{staticClass:"v-app-bar__nav-icon ".concat(data.staticClass||"").trim(),props:h(h({},l),{},{icon:!0}),on:o}),m=r().default;return e(c.a,d,m||[e(n.a,"$menu")])}})},713:function(e,t,r){"use strict";var o=r(110),n=r(0),c=r(301),base=Object(o.a)("VAppBar","v-app-bar-title","v-app-bar");t.a=base.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var e=this.width,t=this.contentWidth,r=Object(c.easeInOutCubic)(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(n.g)(e+(t-e)*r),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var e=this.$refs.placeholder.getBoundingClientRect();this.width=e.width,this.left=e.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(e){return e("div",{class:"v-toolbar__title v-app-bar-title"},[e("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),e("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}})},839:function(e,t,r){"use strict";r.r(t);var o={props:{species:{type:Array,default:function(){return null},required:!0},parent:{type:String,default:null,required:!0}}},n=r(19),c=r(20),l=r.n(c),d=r(227),h=r(267),m=r(268),v=r(170),f=r(269),O=r(270),S=r(92),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.species&&e.species.length?r("v-list",{attrs:{subheader:""}},e._l(e.species,(function(t){return r("v-list-item",{key:t.id,attrs:{to:e.parent+"/"+t.id}},[r("v-list-item-avatar",{attrs:{rounded:"lg"}},[r("CachedImage",{attrs:{src:t.images[0],thumb:""}})],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n          "+e._s(t.name)+"\n        ")]),e._v(" "),t.scientific_name?r("v-list-item-subtitle",[e._v("\n          "+e._s(t.scientific_name)+"\n        ")]):e._e()],1),e._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{icon:"","x-small":""}},[r("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("mdi-chevron-right")])],1)],1)],1)})),1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{CachedImage:r(416).default}),l()(component,{VBtn:d.a,VIcon:h.a,VList:m.a,VListItem:v.a,VListItemAction:f.a,VListItemAvatar:O.a,VListItemContent:S.b,VListItemSubtitle:S.c,VListItemTitle:S.d})},917:function(e){e.exports=JSON.parse('[{"number":1,"code":"jan","name":"Janeiro","description":"Esse é o mês mais quente do ano. Basta lembrar que é exatamente nessa época onde as pessoas começam de fato a aproveitar o verão. Se você vai começar a cultivar uma planta, evite aquelas que preferem climas mais frios porque elas não irão resistir. É melhor cultivar as plantas mais resistentes ao calor."},{"number":2,"code":"fev","name":"Fevereiro","description":"Esse mês o verão ainda está em alta e por esse motivo as plantas mais resistentes à temperaturas elevadas ganham destaque. Além das que citamos mais acima, você também pode cultivar chicória, feijão, crisântemos, rabanetes, beterraba, ervilhas,  entre outras."},{"number":3,"code":"mar","name":"Março","description":"No mês de março a temperatura começa a ficar mais amena com a chegada do outono. Esse mês chove em algumas localidades e por esse motivo, você pode alternar entre plantas que se adaptam bem em climas mais quentes, mas que não tenham restrições com chuvas mais constantes. Alguns exemplos de plantas que podem ser cultivadas nesse período é a cebola, repolho, trevo de quatro folhas, amarílis, amores-perfeitos, cravos, papoulas, coentros, agrião, favas, aipo, nabos, alho, morangos entre outras."},{"number":4,"code":"abr","name":"Abril","description":"Abril é começo do outono então você já pode abusar das espécies que gostam daquele cultivo feito à meia sombra. Alguns exemplos de plantas para esse mês é basicamente as mesmas frutas de março como morangos, beterraba, espargos, alface, couves das diversas variações, lentilhas, espinafres, favas e nabos."},{"number":5,"code":"mai","name":"Maio","description":"Maio é quando o ano começa a se preparar para as chuvas e nesse mês você pode cultivar plantas como o alho, aveia, batata, centeio, cevada, trigo, entre outras."},{"number":6,"code":"jun","name":"Junho","description":"Para o mês de junho, plantas como as macieiras e as pereiras caem muito bem, pois são plantas que resistem à chuvas e também ao sol forte. Dependendo do local onde essas plantas forem cultivadas, pode ocorrer um desses dois climas então é sempre bom ter uma planta mais resistente."},{"number":7,"code":"jul","name":"Julho","description":"Julho é praticamente o mês que começa o inverno e nesse caso já indicamos plantas que gostam de chuvas ou tem uma boa resistência a elas como é o caso da alface, ervilha, rabanetes, fava, repolho, entre outros."},{"number":8,"code":"ago","name":"Agosto","description":"Se você mora no sul do país, esse mês é bem chuvoso por essa região. Essa grande quantidade de chuva acaba se espalhando por boa parte do Brasil então para garantir é indicado sempre ter plantinhas que gostam de climas mais amenos. Nesse caso você poderá plantar alcachofras, melão, aipo, cebola, pimentão, morango, melancia, tomate, entre outros."},{"number":9,"code":"set","name":"Setembro","description":"É o mês mais frio do ano e será quando você vai aproveitar para plantar espécies como a beterraba, alface, melancia, couves, espinafres, cenoura, entre outros."},{"number":10,"code":"out","name":"Outubro","description":"Com a chegada das chuvas na primavera a umidade aumenta e a temperatura abaixa. Nesse mês o mais indicado é o cultivo de espécies que se adaptam bem em climas mais frios."},{"number":11,"code":"nov","name":"Novembro","description":"Em novembro a temperatura começa a subir e se preparar para a chegada do verão. Nesse mês plantas como beterraba, melão, feijão, pimentões, brócolis, agrião, pepino, entre outras devem ser cultivadas."},{"number":12,"code":"dez","name":"Dezembro","description":"Nesse mês o  sol do verão já começa a dar os ar das graças então preferivelmente cultive plantas como a cenoura, pepino, roseiras, lírios, feijão, brócolis, abóbora, repolho, beterraba, entre outras."}]')}}]);