(window.webpackJsonp=window.webpackJsonp||[]).push([[39,26,29],{1014:function(e,t,n){"use strict";n.r(t);n(93),n(4);var r={computed:{species:function(){return this.$store.state.species},specie:function(){var e=this;return this.species.find((function(t){return t.id===e.$route.params.id}))}}},c=n(19),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.specie&&e.specie.id?n("div",[n("Specie",{attrs:{specie:e.specie,parent:{title:"Catálogo de espécies",url:"/ferramentas/catalogo-de-especies"}}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Specie:n(837).default})},706:function(e,t,n){"use strict";n.r(t);var r=n(56),c=(n(31),n(71),n(101),n(8),n(55),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:"https://cultivarbrasil.com"+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var e=this.links||[];return["Cultivar Brasil"].concat(Object(r.a)(e.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Site/aplicativo em português focado no Brasil com o objetivo de fortalecer a independência alimentar através do aprendizado coletivo e ferramentas que ajudam no cultivo"},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),o=n(19),l=n(20),v=n.n(l),_=n(710),m=n(711),d=n(712),h=n(270),f=n(227),C=n(268),y=n(695),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-4"},[n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":"",elevation:"0"}},["/"!==e.$route.path?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.replace(e.previousPage)}}},[n("v-icon",[e._v(" mdi-arrow-left ")])],1):n("v-app-bar-nav-icon",{on:{click:e.toggleDrawer}}),e._v(" "),"/"===e.$route.path?n("v-app-bar-title",{on:{click:function(t){return e.$store.dispatch("showPortal")}}},[n("small",[e._v("Cultivar")])]):n("v-app-bar-title",[n("small",[e._v(e._s(e.active))])]),e._v(" "),n("v-spacer"),e._v(" "),n("a",{on:{click:function(t){return e.$store.dispatch("showPortal")}}},[e.$auth.user?n("User",{attrs:{size:"25"}}):n("v-avatar",{attrs:{color:"white",size:"25"}},[n("v-icon",{attrs:{color:"primary",dark:""}},[e._v(" mdi-account ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{User:n(416).default}),v()(component,{VAppBar:_.a,VAppBarNavIcon:m.a,VAppBarTitle:d.a,VAvatar:h.a,VBtn:f.a,VIcon:C.a,VSpacer:y.a})},714:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{dialog:!1}},methods:{confirm:function(){this.dialog=!1,this.$emit("confirm")},cancel:function(){this.dialog=!1,this.$emit("cancel")}}},c=n(19),o=n(20),l=n.n(o),v=n(227),_=n(277),m=n(124),d=n(691),h=n(268),f=n(695),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":function(t){e.removeComment=null}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,c=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"","x-small":""}},"v-btn",c,!1),r),[n("v-icon",{attrs:{dark:""}},[e._v("mdi-delete")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("\n      Tem certeza que deseja excluír?\n    ")]),e._v(" "),n("v-card-text",[e._v(" Esta alteração não pode ser desfeita ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:e.cancel}},[e._v(" Não ")]),e._v(" "),n("v-btn",{attrs:{color:"green",text:""},on:{click:e.confirm}},[e._v(" Sim ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:v.a,VCard:_.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:d.a,VIcon:h.a,VSpacer:f.a})},715:function(e,t,n){"use strict";n.r(t);var r=n(30),c=(n(87),{props:{target:{type:String,default:null},conversation:{type:String,default:null}},data:function(){return{comments:null}},created:function(){this.loadComments()},methods:{loadComments:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/v1/comments",{params:{target:e.target||e.$route.path}});case 2:e.comments=t.sent;case 3:case"end":return t.stop()}}),t)})))()},commentSaved:function(e){this.loadComments(),this.$emit("change",e)},remove:function(e){var t=this;this.$axios.$delete("/v1/comments/"+e._id,{params:{target:this.target||this.$route.path}}).then((function(){t.loadComments(),t.$emit("change",e)}))}}}),o=n(19),l=n(20),v=n.n(l),_=n(279),m=n(271),d=n(170),h=n(272),f=n(54),C=n(273),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-divider",{staticClass:"my-2"}),e._v(" "),n("v-list",{attrs:{subheader:"",dense:""}},[e._l(e.comments,(function(t){return[n("v-list-item",{key:t.id},[n("v-list-item-avatar",[n("User",{attrs:{user:t.user,thumb:"",size:"40"}})],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.user.name)}}),e._v(" "),n("div",{directives:[{name:"linkify",rawName:"v-linkify"}],staticClass:"body-2 pt-2"},[e._v(e._s(t.message))]),e._v(" "),t.embeds.length?n("div",{staticClass:"pt-2 w-100"},[n("EmbedGallery",{attrs:{embeds:t.embeds}})],1):e._e(),e._v(" "),t.images.length?n("div",{staticClass:"pt-2"},[n("Gallery",{attrs:{images:t.images}})],1):e._e(),e._v(" "),t.members.length?n("div",{staticClass:"pt-2"},e._l(t.members,(function(e){return n("User",{key:e.id,staticClass:"mr-1 mb-1",attrs:{user:e,thumb:"",size:"32","icon-color":"white"}})})),1):e._e(),e._v(" "),t.species.length?n("div",{staticClass:"pt-2"},e._l(t.species,(function(e){return n("SpecieChip",{key:e,attrs:{value:e}})})),1):e._e()],1),e._v(" "),n("v-list-item-action",[n("v-list-item-action-text",[n("small",{staticClass:"font-weight-light",attrs:{title:e.$moment(t.createdAt).format("DD/MM/YYYY h:mm:ss")}},[e._v("\n              "+e._s(e.$moment(t.createdAt).fromNow(!0))+"\n            ")])]),e._v(" "),e.$auth.user&&t.user._id===e.$auth.user.id?n("div",[n("Remove",{on:{confirm:function(n){return e.remove(t)}}})],1):e._e()],1)],1),e._v(" "),n("v-divider",{key:"divider-"+t._id,staticClass:"my-2"})]})),e._v(" "),n("CommentForm",{attrs:{target:e.target,conversation:e.conversation},on:{change:e.commentSaved}})],2)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{User:n(416).default,EmbedGallery:n(725).default,Gallery:n(717).default,SpecieChip:n(716).default,Remove:n(714).default,CommentForm:n(728).default}),v()(component,{VDivider:_.a,VList:m.a,VListItem:d.a,VListItemAction:h.a,VListItemActionText:f.a,VListItemAvatar:C.a,VListItemContent:f.b,VListItemTitle:f.d})},837:function(e,t,n){"use strict";n.r(t);n(93),n(4),n(33);var r={props:{specie:{type:Object,default:function(){return null},required:!0},parent:{type:Object,default:null,required:!0}},computed:{species:function(){return this.$store.state.species},companionSpecies:function(){return this.specie.companion_species?this.specie.companion_species:[]}},methods:{specieByName:function(e){return this.species.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}}},c=n(19),o=n(20),l=n.n(o),v=n(722),_=n(702),m=n(723),d=n(1004),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.specie?n("div",[n("TopNavigation",{attrs:{links:[[e.parent.title,e.parent.url]],active:e.specie.name,description:e.specie.description,img:"https://cultivarbrasil.com"+(e.specie.images&&e.specie.images.length?e.specie.images[0].url:"/cultivar-cover.jpeg")}}),e._v(" "),n("v-container",{attrs:{fluid:""}},[n("h3",[e._v(e._s(e.specie.name))]),e._v(" "),n("p",[e._v(e._s(e.specie.scientific_name))]),e._v(" "),e.specie.images&&e.specie.images.length?n("p",{staticClass:"text-center"},[n("CachedImage",{attrs:{src:e.specie.images[0],raw:"","css-class":"rounded"}})],1):e._e()]),e._v(" "),n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("tbody",[e.specie.scientific_name?n("tr",[n("td",[e._v("Nome científico:")]),e._v(" "),n("th",[e._v(e._s(e.specie.scientific_name))])]):e._e(),e._v(" "),e.specie.popular_names?n("tr",[n("td",[e._v("Nomes populares:")]),e._v(" "),n("th",[e._v(e._s(e.specie.popular_names.join(", ")))])]):e._e(),e._v(" "),e.specie.family?n("tr",[n("td",[e._v("Família:")]),e._v(" "),n("th",[e._v(e._s(e.specie.family))])]):e._e(),e._v(" "),e.specie.synonymy&&e.specie.synonymy.length?n("tr",[n("td",[e._v("Sinonímia:")]),e._v(" "),n("th",[e._v(e._s(e.specie.synonymy.join(", ")))])]):e._e(),e._v(" "),e.specie.categories&&e.specie.categories.length?n("tr",[n("td",[e._v("Categoria:")]),e._v(" "),n("th",[e._v(e._s(e.specie.categories.join(", ")))])]):e._e(),e._v(" "),e.specie.climate&&e.specie.climate.length?n("tr",[n("td",[e._v("Clima:")]),e._v(" "),n("th",[e._v(e._s(e.specie.climate.join(", ")))])]):e._e(),e._v(" "),e.specie.origin&&e.specie.origin.length?n("tr",[n("td",[e._v("Origem:")]),e._v(" "),n("th",[e._v(e._s(e.specie.origin.join(", ")))])]):e._e(),e._v(" "),e.specie.height&&e.specie.height.length?n("tr",[n("td",[e._v("Altura:")]),e._v(" "),n("th",[e._v(e._s(e.specie.height.join(", ")))])]):e._e(),e._v(" "),e.specie.cycle&&e.specie.cycle.length?n("tr",[n("td",[e._v("Ciclo:")]),e._v(" "),n("th",[e._v(e._s(e.specie.cycle.join(", ")))])]):e._e(),e._v(" "),e.specie.harvest_time?n("tr",[n("td",[e._v("Tempo de colheita:")]),e._v(" "),n("th",[e._v(e._s(e.specie.harvest_time))])]):e._e(),e._v(" "),e.specie.spacing?n("tr",[n("td",[e._v("Espaçamento:")]),e._v(" "),n("th",[e._v(e._s(e.specie.spacing))])]):e._e(),e._v(" "),e._l(e.specie.additional_fields,(function(t){return[t.content?n("tr",{key:t.name},[n("td",[e._v(e._s(t.name)+":")]),e._v(" "),n("th",[e._v(e._s(t.content))])]):e._e()]})),e._v(" "),e.specie.medicinal&&(e.specie.medicinal.indications||e.specie.medicinal.properties||e.specie.medicinal.parts_used)?[e.specie.medicinal.indications?n("tr",[n("td",[e._v("Indicações:")]),e._v(" "),n("th",[e._v(e._s(e.specie.medicinal.indications.join(", ")))])]):e._e(),e._v(" "),e.specie.medicinal.properties?n("tr",[n("td",[e._v("Propriedades:")]),e._v(" "),n("th",[e._v(e._s(e.specie.medicinal.properties.join(", ")))])]):e._e(),e._v(" "),e.specie.medicinal.parts_used?n("tr",[n("td",[e._v("Partes utilizadas:")]),e._v(" "),n("th",[e._v(e._s(e.specie.medicinal.parts_used.join(", ")))])]):e._e()]:e._e(),e._v(" "),e.specie.warning?n("tr",[n("th",[n("strong",{staticClass:"text-warning"},[e._v("Alerta: "+e._s(e.specie.warning))])])]):e._e()],2)]},proxy:!0}],null,!1,452312205)}),e._v(" "),n("v-container",{attrs:{fluid:""}},[e.specie.planting_time?n("div",[n("h4",{staticClass:"mb-3 mt-3"},[e._v("Época e regiões para plantio:")]),e._v(" "),n("v-row",{staticClass:"plantio-table",attrs:{fluid:"","no-gutters":""}},[n("v-col",{staticClass:"{active: (currentRegion == 'Centro-oeste')}"},[n("p",{staticClass:"mb-0"},[e._v("C. Oeste")]),e._v(" "),n("p",[e._v(e._s(e.specie.planting_time["Centro-oeste"]))])]),e._v(" "),n("v-col",{staticClass:"{active: (currentRegion == 'Nordeste')}"},[n("p",{staticClass:"mb-0"},[e._v("Nordeste")]),e._v(" "),n("p",[e._v(e._s(e.specie.planting_time.Nordeste))])]),e._v(" "),n("v-col",{staticClass:"{active: (currentRegion == 'Norte')}"},[n("p",{staticClass:"mb-0"},[e._v("Norte")]),e._v(" "),n("p",[e._v(e._s(e.specie.planting_time.Norte))])]),e._v(" "),n("v-col",{staticClass:"{active: (currentRegion == 'Sudeste')}"},[n("p",{staticClass:"mb-0"},[e._v("Sudeste")]),e._v(" "),n("p",[e._v(e._s(e.specie.planting_time.Sudeste))])]),e._v(" "),n("v-col",{staticClass:"{active: (currentRegion == 'Sul')}"},[n("p",{staticClass:"mb-0"},[e._v("Sul")]),e._v(" "),n("p",[e._v(e._s(e.specie.planting_time.Sul))])])],1),e._v(" "),e.specie.planting_time&&Object.values(e.specie.planting_time).includes("*")?n("p",{staticClass:"text-right table-legend"},[n("small",[e._v("* Cultivo não recomendado.")])]):e._e(),e._v(" "),n("p",{staticClass:"text-justify"},[e._v(e._s(e.specie.planting_time_description))])],1):e._e(),e._v(" "),e.specie.description?n("p",{staticClass:"text-justify",domProps:{innerHTML:e._s(e.specie.description)}}):e._e(),e._v(" "),e.specie.use?n("div",[n("h4",{staticClass:"mb-3"},[e._v("Recomendações de aproveitamento")]),e._v(" "),n("p",{staticClass:"text-justify"},[e._v(e._s(e.specie.use))])]):e._e(),e._v(" "),e.specie.images&&e.specie.images.length?n("div",[n("h4",{staticClass:"mb-3"},[e._v("Fotos:")]),e._v(" "),n("Gallery",{attrs:{images:e.specie.images,alt:e.specie.name}})],1):e._e(),e._v(" "),e.specie.companion_species&&e.specie.companion_species.length?n("div",[n("h4",{staticClass:"mb-3 mt-3"},[e._v("Plantas companheiras:")]),e._v(" "),n("p",e._l(e.specie.companion_species,(function(e,t){return n("SpecieChip",{key:t,attrs:{value:e}})})),1)]):e._e()]),e._v(" "),n("Comments",{attrs:{target:"specie-"+e.specie.id}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports;l()(component,{TopNavigation:n(706).default,CachedImage:n(301).default,Gallery:n(717).default,SpecieChip:n(716).default,Comments:n(715).default}),l()(component,{VCol:v.a,VContainer:_.a,VRow:m.a,VSimpleTable:d.a})}}]);