(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11,22,24,26,31,32,35,39],{662:function(e,t,r){"use strict";r.r(t);var n=r(31),l=(r(88),r(28),r(77),r(4),r(56),r(38),r(43),r(669),r(399),r(82),r(670)),o=r.n(l),c=r(150),d=r.n(c),m={props:{raw:{type:Boolean,default:!1},src:{type:String,default:null,required:null},title:{type:String,default:null},thumb:{type:Boolean,default:!1},size:{type:String,default:null},cssClass:{type:String,default:null},contain:{type:Boolean,default:!1},ignoreCache:{type:Boolean,default:!1}},data:function(){return{url:null}},created:function(){this.load()},methods:{load:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.src){t.next=16;break}if(r=e.src.replace("/images","/thumbs"),!e.thumb){t.next=6;break}return t.next=5,e.loadURL(r);case 5:e.url=t.sent;case 6:if(e.url){t.next=14;break}return t.next=9,e.loadURL(e.src);case 9:if(e.url=t.sent,e.thumb||e.url||!e.$nuxt.isOffline){t.next=14;break}return t.next=13,e.loadURL(r);case 13:e.url=t.sent;case 14:if(e.url){t.next=16;break}return t.abrupt("return",e.src);case 16:case"end":return t.stop()}}),t)})))()},loadURL:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=o.a.MD5(e).toString(),r.next=3,t.getLocalItem(n);case 3:if(!(l=r.sent)||t.ignoreCache){r.next=8;break}return r.abrupt("return",URL.createObjectURL(l));case 8:return r.prev=8,r.next=11,t.cacheUrl(e);case 11:return r.abrupt("return",r.sent);case 14:return r.prev=14,r.t0=r.catch(8),r.abrupt("return",null);case 17:case"end":return r.stop()}}),r,null,[[8,14]])})))()},cacheUrl:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e,e.startsWith("http")||e.startsWith("/_nuxt/")||(n="http://localhost:5000"+e),r.next=4,d.a.get(n,{responseType:"arraybuffer"});case 4:return l=r.sent,c=new Blob([l.data],{type:"image/jpg"}),m=o.a.MD5(e).toString(),r.next=9,t.setLocalItem(m,c);case 9:return r.abrupt("return",URL.createObjectURL(c));case 10:case"end":return r.stop()}}),r)})))()}}},f=r(19),v=r(22),h=r.n(v),_=r(209),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.raw&&e.url?r("img",{key:e.src,class:e.cssClass,staticStyle:{"max-width":"100%"},attrs:{src:e.url,width:e.size,height:e.size,alt:e.title,title:e.title}}):e.url?r("v-img",{key:e.src,class:e.cssClass,attrs:{src:e.url,width:e.size,height:e.size,alt:e.title,title:e.title,contain:e.contain,fluid:""}}):e._e()}),[],!1,null,null,null);t.default=component.exports;h()(component,{VImg:_.a})},664:function(e,t,r){"use strict";r.r(t);var n={props:{id:{type:String,default:null},user:{type:Object,default:null},size:{type:String,default:"48"},color:{type:String,default:"primary"},iconColor:{type:String,default:null},thumb:{type:Boolean,default:!1}},data:function(){return{dialog:!1,profile:null}},computed:{sameUser:function(){return this.$auth.user&&this.profile&&this.profile._id&&this.$auth.user.id===this.profile._id}},watch:{"$auth.user":function(){this.setProfile()}},created:function(){this.setProfile()},methods:{setProfile:function(){this.user?this.profile=this.user:this.profile=this.$auth.user},userClicked:function(){console.log(this.profile),this.dialog=!0}}},l=r(19),o=r(22),c=r.n(o),d=r(261),m=r(221),f=r(265),v=r(122),h=r(648),_=r(268),k=r(257),y=r(652),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-inline-block pointer"},[e.profile&&e.profile.picture?r("v-avatar",{attrs:{size:e.size,color:e.color},on:{click:e.userClicked}},[r("CachedImage",{attrs:{avatar:"",title:e.profile.name,alt:e.profile.name,src:e.profile.picture,size:e.size,color:e.color,thumb:e.thumb}})],1):r("v-avatar",{attrs:{color:e.color,size:e.size},on:{click:e.userClicked}},[r("v-icon",{attrs:{color:e.iconColor,size:e.size/2,dark:""}},[e._v(" mdi-account ")])],1),e._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("div",{staticClass:"text-center pt-6 px-3"},[e.profile&&e.profile.picture?r("v-avatar",{staticClass:"mr-3",attrs:{size:"64"}},[r("CachedImage",{attrs:{avatar:"",title:e.profile.name,alt:e.profile.name,src:e.profile.picture,size:"64",thumb:""}})],1):r("v-avatar",{attrs:{color:"primary",size:"64"}},[r("v-icon",{attrs:{size:"32",dark:""}},[e._v(" mdi-account ")])],1),e._v(" "),r("h5",{staticClass:"text-h5"},[e._v(e._s(e.profile.name))]),e._v(" "),e.profile.region?r("p",{staticClass:"text-subtitle"},[e.profile.city&&e.profile.uf?r("small",[e._v("\n            ("+e._s([e.profile.city,e.profile.uf].join(" - "))+")\n          ")]):e.profile.region?r("small",[e._v("("+e._s(e.profile.region)+")")]):e._e()]):e._e(),e._v(" "),e.profile.bio?r("p",[e._v(e._s(e.profile.bio))]):e._e(),e._v(" "),r("p",[e.sameUser?r("v-btn",{on:{click:function(t){return e.$store.dispatch("showPortal")}}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-account-edit")]),e._v(" Editar perfil\n          ")],1):r("v-btn",{attrs:{to:"/mensagens/"+e.profile._id}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-send")]),e._v(" Enviar mensagem\n          ")],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Fechar ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{CachedImage:r(662).default}),c()(component,{VAvatar:d.a,VBtn:m.a,VCard:f.a,VCardActions:v.a,VDialog:h.a,VDivider:_.a,VIcon:k.a,VSpacer:y.a})},672:function(e,t){},674:function(e){e.exports=JSON.parse('["Debate","Dúvida","Ideia","Pedido","Reclamação","Sugestão"]')},675:function(e,t,r){"use strict";r.r(t);r(89),r(4),r(32);var n={props:{value:{type:[String,Object],default:null,required:!0},to:{type:String,default:null}},computed:{species:function(){return this.$store.state.species},link:function(){return this.specie&&this.specie.id?"/ferramentas/catalogo-de-especies/"+this.specie.id:null},specie:function(){var e=this;return this.$store.state.species.find((function(t){return t.id===e.value||t.name===e.value}))||this.value}}},l=r(19),o=r(22),c=r.n(o),d=r(261),m=r(269),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.specie?r("v-chip",{staticClass:"mr-1 mb-1",attrs:{to:e.to||e.link,color:"primary"},on:{click:function(t){return e.$emit("click",e.specie)}}},[e.specie&&e.specie.images?r("v-avatar",{staticClass:"accent white--text",attrs:{left:""}},[r("CachedImage",{attrs:{title:e.specie.name,src:e.specie.images[0],thumb:""}})],1):e._e(),e._v("\n  "+e._s(e.specie.name||e.specie)+"\n")],1):e._e()}),[],!1,null,null,null);t.default=component.exports;c()(component,{CachedImage:r(662).default}),c()(component,{VAvatar:d.a,VChip:m.a})},676:function(e,t,r){"use strict";r.r(t);var n={props:{embed:{type:Object,default:function(){return null},required:!0}}},l=r(19),o=r(22),c=r.n(o),d=r(265),m=r(122),f=r(257),v=r(209),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.embed?r("div",["video"===e.embed.type&&e.embed.html?r("div",{staticClass:"mb-3",domProps:{innerHTML:e._s(e.embed.html)}}):r("v-card",{staticClass:"mb-3",attrs:{href:e.embed.url,target:"_blank",outlined:""}},[e.embed.thumbnail_url?r("v-img",{attrs:{src:e.embed.thumbnail_url}}):e._e(),e._v(" "),e.embed.title?r("v-card-title",[e._v(e._s(e.embed.title))]):e._e(),e._v(" "),e.embed.description?r("v-card-subtitle",[e._v("\n      "+e._s(e.embed.description)+"\n    ")]):e._e(),e._v(" "),e.embed.provider_name?r("v-card-text",[r("v-icon",{attrs:{left:"",size:"20"}},[e._v("\n        "+e._s("mdi-"+e.embed.provider_name.toLowerCase())+"\n      ")]),e._v("\n      "+e._s(e.embed.provider_name)+"\n    ")],1):e._e()],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VIcon:f.a,VImg:v.a})},677:function(e,t,r){"use strict";r.r(t);var n={components:{VueEasyLightbox:r(700).a},props:{images:{type:Array,default:function(){return[]},required:!0},alt:{type:String,default:null},thumb:{type:Boolean,default:!0}},data:function(){return{visible:!1,index:0,apiURL:"http://localhost:5000"}},methods:{showImg:function(e){this.index=e,this.visible=!0},handleHide:function(){this.visible=!1}}},l=r(19),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("div",e._l(e.images,(function(image,i){return r("div",{key:i,staticClass:"mr-1 mb-1 d-inline-block pointer",on:{click:function(){return e.showImg(i)}}},[r("CachedImage",{attrs:{src:image,thumb:e.thumb,size:"42","css-class":"rounded",title:e.alt,raw:""}})],1)})),0),e._v(" "),r("client-only",[r("vue-easy-lightbox",{attrs:{visible:e.visible,imgs:e.images.map((function(img){return e.apiURL+img})),index:e.index},on:{hide:e.handleHide}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CachedImage:r(662).default})},681:function(e,t,r){"use strict";r.r(t);var n={props:{embeds:{type:Array,default:function(){return[]},required:!0}}},l=r(19),o=r(22),c=r.n(o),d=r(690),m=r(691),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",e._l(e.embeds,(function(embed,i){return r("v-col",{key:i,attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[r("Embed",{attrs:{embed:embed}})],1)})),1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{Embed:r(676).default}),c()(component,{VCol:d.a,VRow:m.a})},687:function(e,t,r){"use strict";r.r(t);r(82);var n={props:{value:{type:String,default:function(){return null}},icon:{type:String,default:function(){return"mdi-link-box-variant-outline"}}},data:function(){return{dialog:!1,loading:!1,oembed:null,url:null}},methods:{finish:function(e){this.oembed&&this.$emit("input",this.oembed),this.oembed=null,this.url=null,this.dialog=!1},loadOEmbed:function(){var e=this;this.url&&this.url.startsWith("http")&&(this.loading=!0,this.$axios.$get("/v1/uploads/oembed?url="+encodeURI(this.url)).then((function(t){e.oembed=t,e.loading=!1})).catch((function(t){e.loading=!1,e.$notifier.firebaseError(t)})))}}},l=r(19),o=r(22),c=r.n(o),d=r(221),m=r(265),f=r(648),v=r(257),h=r(256),_=r(87),k=r(633),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{fullscreen:""},on:{input:function(t){return e.$emit("change")}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,l=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"primary",icon:""}},"v-btn",l,!1),n),[r("v-icon",{attrs:{dark:""}},[e._v(e._s(e.icon))])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("span",[e._v("Adicionar link")])],1),e._v(" "),r("div",{staticClass:"pt-6 px-3"},[r("v-text-field",{attrs:{autocomplete:"off",name:"name",label:"Insira o link",placeholder:"http://",outlined:"","hide-details":"auto","prepend-inner-icon":"mdi-magnify"},on:{change:e.loadOEmbed},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),e._v(" "),e.loading?r("div",{staticClass:"pa-3 text-center"},[r("v-progress-circular",{attrs:{indeterminate:""}})],1):e.oembed?r("div",{staticClass:"pa-3"},[r("Embed",{attrs:{embed:e.oembed}}),e._v(" "),r("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"success",large:""},on:{click:e.finish}},[e._v("\n        Concluír\n      ")])],1):e.url&&e.url.startsWith("http")?r("div",{staticClass:"pa-3"},[r("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"success",large:""},on:{click:e.loadOEmbed}},[e._v("\n        Buscar\n      ")])],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{Embed:r(676).default}),c()(component,{VBtn:d.a,VCard:m.a,VDialog:f.a,VIcon:v.a,VProgressCircular:h.a,VTextField:_.a,VToolbar:k.a})},689:function(e,t,r){"use strict";r.r(t);var n=r(31),l=(r(88),r(7),r(4),r(36),r(62),{props:{comment:{type:String,default:null},target:{type:String,default:null},conversation:{type:String,default:null}},data:function(){return{members:[],form:{target:this.target,conversation:this.conversation,message:null,members:[],species:[],images:[],embeds:[]}}},computed:{species:function(){return this.$store.state.species},selectedMembers:function(){var e=this;return this.form.members&&this.form.members.length?this.members.filter((function(t){return e.form.members.includes(t.id)})):[]},selectedSpecies:function(){var e=this;return this.form.species&&this.form.species.length?this.species.filter((function(t){return e.form.species.includes(t.id)})):[]}},methods:{loadMembers:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.members.length){t.next=4;break}return t.next=3,e.$axios.$get("/v1/users/members");case 3:e.members=t.sent;case 4:case"end":return t.stop()}}),t)})))()},addImage:function(image){image&&this.form.images.push(image)},addUrl:function(embed){embed&&this.form.embeds.push(embed)},save:function(){var e=this;this.form.message&&this.$axios.$post("/v1/comments",this.form).then((function(t){e.$notifier.success("Comentário enviado!"),e.$emit("change",t),e.form.message=null,e.form.members=[],e.form.species=[],e.form.images=[],e.form.embeds=[]}))}}}),o=r(19),c=r(22),d=r.n(c),m=r(221),f=r(163),v=r(260),h=r(91),_=r(651),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"comment-form"},[r("v-list-item",{staticClass:"mb-1 pt-1"},[r("v-list-item-avatar",[r("User",{attrs:{thumb:"",size:"40"}})],1),e._v(" "),r("v-list-item-content",[e.$auth.user?r("div",[r("v-textarea",{attrs:{color:"primary",outlined:"",rows:"1","auto-grow":"","hide-details":"",placeholder:e.conversation?"Responda":"Comente o que achou"},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1):r("v-btn",{staticClass:"darken-1",attrs:{block:"",color:"primary",large:""},on:{click:function(t){return e.$store.dispatch("showPortal")}}},[e._v("\n        "+e._s(e.conversation?"Responda":"Comente o que achou")+"\n      ")]),e._v(" "),e.$auth.user?r("div",{staticClass:"w-100"},[r("div",[e.form.embeds.length?r("div",{staticClass:"pt-2"},[r("EmbedGallery",{attrs:{embeds:e.form.embeds}})],1):e._e(),e._v(" "),e.form.images.length?r("div",{staticClass:"pt-2"},[r("Gallery",{attrs:{images:e.form.images}})],1):e._e(),e._v(" "),e.form.members.length?r("div",{staticClass:"pt-2"},e._l(e.form.members,(function(t){return r("User",{key:t,staticClass:"mr-1 mb-1",attrs:{user:e.members.find((function(e){return e.id===t})),thumb:"",size:"32","icon-color":"white"}})})),1):e._e(),e._v(" "),e.form.species.length?r("div",{staticClass:"pt-2"},e._l(e.form.species,(function(e){return r("SpecieChip",{key:e,attrs:{value:e}})})),1):e._e(),e._v(" "),r("SelectMembers",{attrs:{items:e.members,"item-value":"id","item-text":"name",title:"Adicionar clientes"},on:{change:function(t){return e.loadMembers()}},model:{value:e.form.members,callback:function(t){e.$set(e.form,"members",t)},expression:"form.members"}}),e._v(" "),r("SelectSpecies",{attrs:{items:e.species},model:{value:e.form.species,callback:function(t){e.$set(e.form,"species",t)},expression:"form.species"}}),e._v(" "),r("UploadImage",{attrs:{prefix:"comments"},on:{input:e.addImage}}),e._v(" "),r("EmbedUrl",{attrs:{icon:"mdi-youtube"},on:{input:e.addUrl}}),e._v(" "),r("EmbedUrl",{on:{input:e.addUrl}})],1),e._v(" "),r("div",[r("v-btn",{staticClass:"mt-md-2",attrs:{color:"primary",block:"",large:"",disabled:!e.form.message||!e.form.message},on:{click:e.save}},[e._v("\n            "+e._s(e.conversation?"Enviar resposta":"Enviar comentário")+"\n          ")])],1)]):e._e()],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{User:r(664).default,EmbedGallery:r(681).default,Gallery:r(677).default,SpecieChip:r(675).default,SelectMembers:r(693).default,SelectSpecies:r(694).default,UploadImage:r(416).default,EmbedUrl:r(687).default}),d()(component,{VBtn:m.a,VListItem:f.a,VListItemAvatar:v.a,VListItemContent:h.b,VTextarea:_.a})},693:function(e,t,r){"use strict";r.r(t);r(28),r(293),r(7),r(4),r(36),r(62),r(41);var n=r(674),l={props:{value:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},itemText:{type:String,default:"text"},itemValue:{type:String,default:"value"},itemAvatar:{type:String,default:"picture"},itemIcon:{type:String,default:"mdi-account"},icon:{type:String,default:"mdi-account-plus-outline"},title:{type:String,default:"Selecionar"}},data:function(){return{categories:n,dialog:!1,options:[],search:""}},computed:{filteredItems:function(){var e=this,data=[];return this.search&&(data=this.items.filter((function(t){return t[e.itemText].toLowerCase().includes(e.search.toLowerCase())}))),data.slice(0,7)}}},o=r(19),c=r(22),d=r.n(c),m=r(221),f=r(265),v=r(657),h=r(648),_=r(268),k=r(257),y=r(209),x=r(258),C=r(163),V=r(259),I=r(260),S=r(262),$=r(91),w=r(87),L=r(633),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{fullscreen:""},on:{input:function(t){return e.$emit("change")}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,l=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"primary",icon:""}},"v-btn",l,!1),n),[r("v-icon",{attrs:{dark:""}},[e._v(e._s(e.icon))])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("span",[e._v(e._s(e.title))])],1),e._v(" "),r("div",{staticClass:"pt-6 px-3"},[r("v-text-field",{attrs:{autocomplete:"off",name:"name",placeholder:"Buscar",outlined:"","hide-details":"auto","prepend-inner-icon":"mdi-magnify"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),e.search?r("v-list",[r("v-list-item-group",{attrs:{multiple:""},on:{change:function(t){return e.$emit("input",e.options)}},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}},[e._l(e.filteredItems,(function(t){return[t?e._e():r("v-divider",{key:"divider-"+t[e.itemValue]}),e._v(" "),r("v-list-item",{key:t[e.itemValue],attrs:{value:t[e.itemValue]},scopedSlots:e._u([{key:"default",fn:function(n){var l=n.active;return[r("v-list-item-avatar",{attrs:{color:"primary"}},[t[e.itemAvatar]?r("v-img",{attrs:{src:t[e.itemAvatar]}}):r("v-icon",{attrs:{dark:""}},[e._v(e._s(e.itemIcon))])],1),e._v(" "),r("v-list-item-title",[e._v(" "+e._s(t[e.itemText])+" ")]),e._v(" "),r("v-list-item-action",[r("v-checkbox",{attrs:{"input-value":l,color:"deep-purple accent-4"}})],1)]}}],null,!0)})]}))],2)],1):r("p",{staticClass:"text-center pt-2"},[r("small",[e._v("Busque pelo nome acima")])]),e._v(" "),e.options.length?r("div",{staticClass:"pa-3"},[r("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"success",large:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n        Concluír\n      ")])],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCard:f.a,VCheckbox:v.a,VDialog:h.a,VDivider:_.a,VIcon:k.a,VImg:y.a,VList:x.a,VListItem:C.a,VListItemAction:V.a,VListItemAvatar:I.a,VListItemGroup:S.a,VListItemTitle:$.d,VTextField:w.a,VToolbar:L.a})},694:function(e,t,r){"use strict";r.r(t);r(28),r(293),r(7),r(4),r(36),r(62),r(32),r(41);var n=r(674),l={props:{value:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}}},data:function(){return{categories:n,dialog:!1,options:[],search:""}},computed:{filteredItems:function(){var e=this,data=this.items;return this.search&&(data=this.items.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())}))),data.slice(0,7)}}},o=r(19),c=r(22),d=r.n(c),m=r(221),f=r(265),v=r(657),h=r(648),_=r(268),k=r(257),y=r(258),x=r(163),C=r(259),V=r(260),I=r(262),S=r(91),$=r(87),w=r(633),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{fullscreen:""},on:{input:function(t){return e.$emit("change")}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,l=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"primary",icon:""}},"v-btn",l,!1),n),[r("v-icon",{attrs:{dark:""}},[e._v("mdi-sprout-outline")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("span",[e._v("Selecionar espécies")])],1),e._v(" "),r("div",{staticClass:"pt-6 px-3"},[r("v-text-field",{attrs:{autocomplete:"off",name:"name",placeholder:"Buscar espécie",outlined:"","hide-details":"auto","prepend-inner-icon":"mdi-magnify"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-list",[r("v-list-item-group",{attrs:{multiple:""},on:{change:function(t){return e.$emit("input",e.options)}},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}},[e._l(e.filteredItems,(function(t){return[t?e._e():r("v-divider",{key:"divider-"+t.id}),e._v(" "),r("v-list-item",{key:t.id,attrs:{value:t.id},scopedSlots:e._u([{key:"default",fn:function(n){var l=n.active;return[r("v-list-item-avatar",[t.images&&t.images.length?r("CachedImage",{attrs:{title:t.name,src:t.images[0],thumb:""}}):r("v-icon",{attrs:{dark:""}},[e._v("mdi-sprout")])],1),e._v(" "),r("v-list-item-title",[e._v(" "+e._s(t.name)+" ")]),e._v(" "),r("v-list-item-action",[r("v-checkbox",{attrs:{"input-value":l,color:"deep-purple accent-4"}})],1)]}}],null,!0)})]}))],2)],1),e._v(" "),e.options.length?r("div",{staticClass:"pa-3"},[r("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"success",large:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n        Concluír\n      ")])],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{CachedImage:r(662).default}),d()(component,{VBtn:m.a,VCard:f.a,VCheckbox:v.a,VDialog:h.a,VDivider:_.a,VIcon:k.a,VList:y.a,VListItem:x.a,VListItemAction:C.a,VListItemAvatar:V.a,VListItemGroup:I.a,VListItemTitle:S.d,VTextField:$.a,VToolbar:w.a})}}]);