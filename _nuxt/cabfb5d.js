(window.webpackJsonp=window.webpackJsonp||[]).push([[25,9],{660:function(e,t,r){"use strict";r.r(t);var n=r(30),l=(r(88),r(28),r(81),r(4),r(55),r(38),r(43),r(667),r(399),r(82),r(668)),c=r.n(l),o=r(149),d=r.n(o),f={props:{raw:{type:Boolean,default:!1},src:{type:String,default:null,required:null},title:{type:String,default:null},thumb:{type:Boolean,default:!1},size:{type:String,default:null},cssClass:{type:String,default:null},contain:{type:Boolean,default:!1},ignoreCache:{type:Boolean,default:!1}},data:function(){return{url:null}},created:function(){this.load()},methods:{load:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.src){t.next=16;break}if(r=e.src.replace("/images","/thumbs"),!e.thumb){t.next=6;break}return t.next=5,e.loadURL(r);case 5:e.url=t.sent;case 6:if(e.url){t.next=14;break}return t.next=9,e.loadURL(e.src);case 9:if(e.url=t.sent,e.thumb||e.url||!e.$nuxt.isOffline){t.next=14;break}return t.next=13,e.loadURL(r);case 13:e.url=t.sent;case 14:if(e.url){t.next=16;break}return t.abrupt("return",e.src);case 16:case"end":return t.stop()}}),t)})))()},loadURL:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=c.a.MD5(e).toString(),r.next=3,t.getLocalItem(n);case 3:if(!(l=r.sent)||t.ignoreCache){r.next=8;break}return r.abrupt("return",URL.createObjectURL(l));case 8:return r.prev=8,r.next=11,t.cacheUrl(e);case 11:return r.abrupt("return",r.sent);case 14:return r.prev=14,r.t0=r.catch(8),r.abrupt("return",null);case 17:case"end":return r.stop()}}),r,null,[[8,14]])})))()},cacheUrl:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,o,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e,e.startsWith("http")||e.startsWith("/_nuxt/")||(n="https://cronograma-personalizado-backend.cultivardigital.com.br"+e),r.next=4,d.a.get(n,{responseType:"arraybuffer"});case 4:return l=r.sent,o=new Blob([l.data],{type:"image/jpg"}),f=c.a.MD5(e).toString(),r.next=9,t.setLocalItem(f,o);case 9:return r.abrupt("return",URL.createObjectURL(o));case 10:case"end":return r.stop()}}),r)})))()}}},h=r(21),m=r(22),v=r.n(m),x=r(209),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.raw&&e.url?r("img",{key:e.src,class:e.cssClass,staticStyle:{"max-width":"100%"},attrs:{src:e.url,width:e.size,height:e.size,alt:e.title,title:e.title}}):e.url?r("v-img",{key:e.src,class:e.cssClass,attrs:{src:e.url,width:e.size,height:e.size,alt:e.title,title:e.title,contain:e.contain,fluid:""}}):e._e()}),[],!1,null,null,null);t.default=component.exports;v()(component,{VImg:x.a})},669:function(e,t){},671:function(e,t,r){"use strict";r.r(t);var n={components:{VueEasyLightbox:r(692).a},props:{images:{type:Array,default:function(){return[]},required:!0},alt:{type:String,default:null},thumb:{type:Boolean,default:!0}},data:function(){return{visible:!1,index:0,apiURL:"https://cronograma-personalizado-backend.cultivardigital.com.br"}},methods:{showImg:function(e){this.index=e,this.visible=!0},handleHide:function(){this.visible=!1}}},l=r(21),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("div",e._l(e.images,(function(image,i){return r("div",{key:i,staticClass:"mr-1 mb-1 d-inline-block pointer",on:{click:function(){return e.showImg(i)}}},[r("CachedImage",{attrs:{src:image,thumb:e.thumb,size:"42","css-class":"rounded",title:e.alt,raw:""}})],1)})),0),e._v(" "),r("client-only",[r("vue-easy-lightbox",{attrs:{visible:e.visible,imgs:e.images.map((function(img){return e.apiURL+img})),index:e.index},on:{hide:e.handleHide}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CachedImage:r(660).default})}}]);