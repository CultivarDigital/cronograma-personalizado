(window.webpackJsonp=window.webpackJsonp||[]).push([[48,11,18,36,39],{1031:function(e,t,r){"use strict";r.r(t);r(41),r(7),r(4),r(36),r(62),r(28),r(293),r(32),r(98);var n=r(913),o=r.n(n),l={data:function(){return{filters:{category:null,origin:null,climate:null,height:null,stratum:null,cycle:null},per_page:15,page:1}},computed:{filtersOptions:function(){return this.$store.state.species_filters},paginatedList:function(){return this.$route.query.save_offline?this.species:this.species.slice(0,this.page*this.per_page)},species:function(){var e=this,t=this.$store.state.species;return t=t.filter((function(t){var r=e.includes(t.categories,"category")&&e.includes(t.stratum,"stratum")&&e.includes(t.cycle,"cycle")&&e.includes(t.climate,"climate")&&e.includes(t.origin,"origin")&&e.includes(t.height,"height");if(e.filters.search){var n=o()(e.filters.search).toLowerCase();return o()(t.name+t.scientific_name+t.popular_names.join("")).toLowerCase().includes(n)}return r})),t}},methods:{includes:function(e,filter){return!this.filters[filter]||e&&e.includes(this.filters[filter])},applyFilters:function(){this.page=1},paginate:function(){this.page+=1}}},c=r(19),d=r(22),f=r.n(d),h=r(659),m=r(1019),v=r(263),_=r(87),y=r(698),k=r.n(y),w=r(101),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("TopNavigation",{attrs:{links:[["Ferramentas","/ferramentas"]],active:"Catálogo de espécies",description:"Veja as espécies mais cultivadas na sua região"}}),e._v(" "),e.filtersOptions?r("v-container",{attrs:{fluid:""}},[r("div",{staticClass:"filters"},[r("DropdownSelect",{attrs:{options:e.filtersOptions.specie_categories,label:"Categoria","no-item":"Todas as categorias"},on:{input:e.applyFilters},model:{value:e.filters.category,callback:function(t){e.$set(e.filters,"category",t)},expression:"filters.category"}}),e._v(" "),r("DropdownSelect",{attrs:{options:e.filtersOptions.specie_origin,label:"Origem","no-item":"Todas as origens"},on:{input:e.applyFilters},model:{value:e.filters.origin,callback:function(t){e.$set(e.filters,"origin",t)},expression:"filters.origin"}}),e._v(" "),r("DropdownSelect",{attrs:{options:e.filtersOptions.specie_climate,label:"Clima","no-item":"Todos os climas"},on:{input:e.applyFilters},model:{value:e.filters.climate,callback:function(t){e.$set(e.filters,"climate",t)},expression:"filters.climate"}}),e._v(" "),r("DropdownSelect",{attrs:{options:e.filtersOptions.specie_height,label:"Altura","no-item":"Todas as alturas"},on:{input:e.applyFilters},model:{value:e.filters.height,callback:function(t){e.$set(e.filters,"height",t)},expression:"filters.height"}}),e._v(" "),r("DropdownSelect",{attrs:{options:e.filtersOptions.specie_stratum,label:"Estrato",description:"Luminosidade","no-item":"Todas as luminosidades"},on:{input:e.applyFilters},model:{value:e.filters.stratum,callback:function(t){e.$set(e.filters,"stratum",t)},expression:"filters.stratum"}}),e._v(" "),r("DropdownSelect",{attrs:{options:e.filtersOptions.specie_cycle,label:"Ciclo",description:"Tempo","no-item":"Todos os ciclos"},on:{input:e.applyFilters},model:{value:e.filters.cycle,callback:function(t){e.$set(e.filters,"cycle",t)},expression:"filters.cycle"}}),e._v(" "),r("v-text-field",{staticClass:"mt-3",attrs:{placeholder:"Buscar","append-icon":"mdi-magnify",outlined:"","hide-details":"true",dense:""},model:{value:e.filters.search,callback:function(t){e.$set(e.filters,"search",t)},expression:"filters.search"}})],1)]):e._e(),e._v(" "),r("v-subheader",{staticClass:"justify-center"},[e.species.length>1?r("span",[e._v("\n      "+e._s(e.species.length)+" espécies encontradas\n    ")]):1==e.species.length?r("span",[e._v(" Uma espécie encontrada ")]):r("span",[e._v("Nenhuma espécie encontrada")])]),e._v(" "),r("Species",{attrs:{species:e.paginatedList,parent:"/ferramentas/catalogo-de-especies"}}),e._v(" "),e.paginatedList.length!==e.species.length?r("v-skeleton-loader",{directives:[{name:"intersect",rawName:"v-intersect",value:e.paginate,expression:"paginate"}],attrs:{type:"list-item-avatar-two-line@3"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{TopNavigation:r(665).default,DropdownSelect:r(876).default,Species:r(809).default}),f()(component,{VContainer:h.a,VSkeletonLoader:m.a,VSubheader:v.a,VTextField:_.a}),k()(component,{Intersect:w.a})},662:function(e,t,r){"use strict";r.r(t);var n=r(31),o=(r(88),r(28),r(77),r(4),r(56),r(38),r(43),r(669),r(399),r(82),r(670)),l=r.n(o),c=r(150),d=r.n(c),f={props:{raw:{type:Boolean,default:!1},src:{type:String,default:null,required:null},title:{type:String,default:null},thumb:{type:Boolean,default:!1},size:{type:String,default:null},cssClass:{type:String,default:null},contain:{type:Boolean,default:!1},ignoreCache:{type:Boolean,default:!1}},data:function(){return{url:null}},created:function(){this.load()},methods:{load:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.src){t.next=16;break}if(r=e.src.replace("/images","/thumbs"),!e.thumb){t.next=6;break}return t.next=5,e.loadURL(r);case 5:e.url=t.sent;case 6:if(e.url){t.next=14;break}return t.next=9,e.loadURL(e.src);case 9:if(e.url=t.sent,e.thumb||e.url||!e.$nuxt.isOffline){t.next=14;break}return t.next=13,e.loadURL(r);case 13:e.url=t.sent;case 14:if(e.url){t.next=16;break}return t.abrupt("return",e.src);case 16:case"end":return t.stop()}}),t)})))()},loadURL:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=l.a.MD5(e).toString(),r.next=3,t.getLocalItem(n);case 3:if(!(o=r.sent)||t.ignoreCache){r.next=8;break}return r.abrupt("return",URL.createObjectURL(o));case 8:return r.prev=8,r.next=11,t.cacheUrl(e);case 11:return r.abrupt("return",r.sent);case 14:return r.prev=14,r.t0=r.catch(8),r.abrupt("return",null);case 17:case"end":return r.stop()}}),r,null,[[8,14]])})))()},cacheUrl:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e,e.startsWith("http")||e.startsWith("/_nuxt/")||(n="http://localhost:5000"+e),r.next=4,d.a.get(n,{responseType:"arraybuffer"});case 4:return o=r.sent,c=new Blob([o.data],{type:"image/jpg"}),f=l.a.MD5(e).toString(),r.next=9,t.setLocalItem(f,c);case 9:return r.abrupt("return",URL.createObjectURL(c));case 10:case"end":return r.stop()}}),r)})))()}}},h=r(19),m=r(22),v=r.n(m),_=r(209),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.raw&&e.url?r("img",{key:e.src,class:e.cssClass,staticStyle:{"max-width":"100%"},attrs:{src:e.url,width:e.size,height:e.size,alt:e.title,title:e.title}}):e.url?r("v-img",{key:e.src,class:e.cssClass,attrs:{src:e.url,width:e.size,height:e.size,alt:e.title,title:e.title,contain:e.contain,fluid:""}}):e._e()}),[],!1,null,null,null);t.default=component.exports;v()(component,{VImg:_.a})},664:function(e,t,r){"use strict";r.r(t);var n={props:{id:{type:String,default:null},user:{type:Object,default:null},size:{type:String,default:"48"},color:{type:String,default:"primary"},iconColor:{type:String,default:null},thumb:{type:Boolean,default:!1}},data:function(){return{dialog:!1,profile:null}},computed:{sameUser:function(){return this.$auth.user&&this.profile&&this.profile._id&&this.$auth.user.id===this.profile._id}},watch:{"$auth.user":function(){this.setProfile()}},created:function(){this.setProfile()},methods:{setProfile:function(){this.user?this.profile=this.user:this.profile=this.$auth.user},userClicked:function(){console.log(this.profile),this.dialog=!0}}},o=r(19),l=r(22),c=r.n(l),d=r(261),f=r(221),h=r(265),m=r(122),v=r(648),_=r(268),y=r(257),k=r(652),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-inline-block pointer"},[e.profile&&e.profile.picture?r("v-avatar",{attrs:{size:e.size,color:e.color},on:{click:e.userClicked}},[r("CachedImage",{attrs:{avatar:"",title:e.profile.name,alt:e.profile.name,src:e.profile.picture,size:e.size,color:e.color,thumb:e.thumb}})],1):r("v-avatar",{attrs:{color:e.color,size:e.size},on:{click:e.userClicked}},[r("v-icon",{attrs:{color:e.iconColor,size:e.size/2,dark:""}},[e._v(" mdi-account ")])],1),e._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("div",{staticClass:"text-center pt-6 px-3"},[e.profile&&e.profile.picture?r("v-avatar",{staticClass:"mr-3",attrs:{size:"64"}},[r("CachedImage",{attrs:{avatar:"",title:e.profile.name,alt:e.profile.name,src:e.profile.picture,size:"64",thumb:""}})],1):r("v-avatar",{attrs:{color:"primary",size:"64"}},[r("v-icon",{attrs:{size:"32",dark:""}},[e._v(" mdi-account ")])],1),e._v(" "),r("h5",{staticClass:"text-h5"},[e._v(e._s(e.profile.name))]),e._v(" "),e.profile.region?r("p",{staticClass:"text-subtitle"},[e.profile.city&&e.profile.uf?r("small",[e._v("\n            ("+e._s([e.profile.city,e.profile.uf].join(" - "))+")\n          ")]):e.profile.region?r("small",[e._v("("+e._s(e.profile.region)+")")]):e._e()]):e._e(),e._v(" "),e.profile.bio?r("p",[e._v(e._s(e.profile.bio))]):e._e(),e._v(" "),r("p",[e.sameUser?r("v-btn",{on:{click:function(t){return e.$store.dispatch("showPortal")}}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-account-edit")]),e._v(" Editar perfil\n          ")],1):r("v-btn",{attrs:{to:"/mensagens/"+e.profile._id}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-send")]),e._v(" Enviar mensagem\n          ")],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Fechar ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{CachedImage:r(662).default}),c()(component,{VAvatar:d.a,VBtn:f.a,VCard:h.a,VCardActions:m.a,VDialog:v.a,VDivider:_.a,VIcon:y.a,VSpacer:k.a})},665:function(e,t,r){"use strict";r.r(t);var n=r(52),o=(r(30),r(66),r(98),r(11),r(57),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:this.apiURL+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/"},apiURL:function(){return"http://localhost:5000"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var e=this.links||[];return["Cronograma Personalizado"].concat(Object(n.a)(e.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Sistema de gerenciamento de cronograma personalizado de personal hair stylist."},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),l=r(19),c=r(22),d=r.n(c),f=r(678),h=r(679),m=r(680),v=r(261),_=r(221),y=r(257),k=r(652),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-4"},[n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},["/"!==e.$route.path?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.replace(e.previousPage)}}},[n("v-icon",[e._v(" mdi-arrow-left ")])],1):n("v-app-bar-nav-icon",{on:{click:e.toggleDrawer}}),e._v(" "),"/"===e.$route.path?n("v-spacer"):e._e(),e._v(" "),"/"===e.$route.path?n("img",{attrs:{title:"Cronograma Personalizado",src:r(666),width:"28"}}):n("v-app-bar-title",[n("strong",[n("small",[e._v(e._s(e.active))])])]),e._v(" "),n("v-spacer"),e._v(" "),n("a",{on:{click:function(t){return e.$store.dispatch("showPortal")}}},[e.$auth.user?n("User",{attrs:{size:"25"}}):n("v-avatar",{attrs:{color:"white",size:"25"}},[n("v-icon",{attrs:{color:"primary",dark:""}},[e._v(" mdi-account ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{User:r(664).default}),d()(component,{VAppBar:f.a,VAppBarNavIcon:h.a,VAppBarTitle:m.a,VAvatar:v.a,VBtn:_.a,VIcon:y.a,VSpacer:k.a})},666:function(e,t,r){e.exports=r.p+"img/logo.97df656.png"},672:function(e,t){},698:function(e,t){e.exports=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.directives=component.exports.options.directives),t.directives=t.directives||{},e)t.directives[i]=t.directives[i]||e[i]}},809:function(e,t,r){"use strict";r.r(t);var n={props:{species:{type:Array,default:function(){return null},required:!0},parent:{type:String,default:null,required:!0}}},o=r(19),l=r(22),c=r.n(l),d=r(221),f=r(257),h=r(258),m=r(163),v=r(259),_=r(260),y=r(91),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.species&&e.species.length?r("v-list",{attrs:{subheader:""}},e._l(e.species,(function(t){return r("v-list-item",{key:t.id,attrs:{to:e.parent+"/"+t.id}},[r("v-list-item-avatar",{attrs:{rounded:"lg"}},[r("CachedImage",{attrs:{src:t.images[0],thumb:""}})],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n          "+e._s(t.name)+"\n        ")]),e._v(" "),t.scientific_name?r("v-list-item-subtitle",[e._v("\n          "+e._s(t.scientific_name)+"\n        ")]):e._e()],1),e._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{icon:"","x-small":""}},[r("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("mdi-chevron-right")])],1)],1)],1)})),1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{CachedImage:r(662).default}),c()(component,{VBtn:d.a,VIcon:f.a,VList:h.a,VListItem:m.a,VListItemAction:v.a,VListItemAvatar:_.a,VListItemContent:y.b,VListItemSubtitle:y.c,VListItemTitle:y.d})},876:function(e,t,r){"use strict";r.r(t);var n={props:{value:{type:String,default:null},options:{type:Array,default:function(){return[]},required:!0},label:{type:String,default:null,required:!0},description:{type:String,default:null},noItem:{type:String,default:null,required:!0}}},o=r(19),l=r(22),c=r.n(l),d=r(221),f=r(257),h=r(258),m=r(163),v=r(91),_=r(274),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mb-2 mr-1 d-inline-block"},[r("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:e.value?"primary darken-1":"primary",dark:"",small:""}},"v-btn",o,!1),n),[e.value?r("span",[r("small",[e._v(e._s(e.label)+":")]),e._v(" "),r("strong",[e._v(e._s(e.value))])]):r("span",[e._v("\n          "+e._s(e.label)+" "),e.description?r("small",[e._v("("+e._s(e.description)+")")]):e._e()]),e._v(" "),r("v-icon",{attrs:{right:""}},[e._v(" mdi-chevron-down ")])],1)]}}])},[e._v(" "),r("v-list",[r("v-list-item",{on:{click:function(t){return e.$emit("input",null)}}},[e._v("\n        "+e._s(e.noItem)+"\n      ")]),e._v(" "),e._l(e.options,(function(option){return r("v-list-item",{key:option,on:{click:function(t){return e.$emit("input",option)}}},[r("v-list-item-title",[e._v(e._s(option))])],1)}))],2)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VList:h.a,VListItem:m.a,VListItemTitle:v.d,VMenu:_.a})},913:function(e,t,r){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),t=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"}}');function r(r,n){if("string"!=typeof r)throw new Error("slugify: string argument expected");var o=t[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},l=void 0===n.replacement?"-":n.replacement,c=void 0===n.trim||n.trim,d=r.normalize().split("").reduce((function(t,r){return t+(o[r]||e[r]||(r===l?" ":r)).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return n.strict&&(d=d.replace(/[^A-Za-z0-9\s]/g,"")),c&&(d=d.trim()),d=d.replace(/\s+/g,l),n.lower&&(d=d.toLowerCase()),d}return r.extend=function(t){Object.assign(e,t)},r},e.exports=n(),e.exports.default=n()}}]);