(window.webpackJsonp=window.webpackJsonp||[]).push([[43,27],{1032:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{conversation:null}},created:function(){this.load()},methods:{load:function(){var t=this;this.$axios.$get("/v1/conversations/"+this.$route.params.id).then((function(e){t.conversation=e}))}}},o=n(19),c=n(20),l=n.n(c),v=n(278),m=n(268),d=n(170),f=n(270),h=n(92),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopNavigation",{attrs:{links:[["Feramentas","/ferramentas"],["Comunidade","/ferramentas/comunidade"]],active:"Conversa"}}),t._v(" "),t.conversation?n("div",[n("v-list",{attrs:{subheader:"",dense:""}},[n("v-list-item",[n("v-list-item-avatar",[n("User",{attrs:{user:t.conversation.user,thumb:"",size:"40"}})],1),t._v(" "),n("v-list-item-content",[n("h2",{staticClass:"mb-3"},[t._v(t._s(t.conversation.subject))]),t._v(" "),t.conversation.message?n("p",{staticClass:"mb-3"},[t._v("\n            "+t._s(t.conversation.message)+"\n          ")]):t._e(),t._v(" "),t.conversation.tags&&t.conversation.tags.length?n("div",{staticClass:"mb-2"},t._l(t.conversation.tags,(function(e){return n("v-chip",{key:e,staticClass:"mr-1 mb-1",attrs:{small:"",color:"primary",to:"/ferramentas/comunidade?tag="+e}},[t._v(t._s(e))])})),1):t._e(),t._v(" "),t.conversation.species&&t.conversation.species.length?n("div",{staticClass:"mb-3"},t._l(t.conversation.species,(function(t){return n("SpecieChip",{key:t,attrs:{value:t,to:"/ferramentas/comunidade?specie="+t}})})),1):t._e(),t._v(" "),t.$auth.user&&t.$auth.user.id===t.conversation.user._id?n("ConversationForm",{attrs:{conversation:t.conversation},on:{change:t.load}}):t._e()],1)],1)],1),t._v(" "),n("Comments",{attrs:{target:"conversation-"+t.conversation._id,conversation:t.conversation._id}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{TopNavigation:n(706).default,User:n(705).default,SpecieChip:n(716).default,ConversationForm:n(840).default,Comments:n(715).default}),l()(component,{VChip:v.a,VList:m.a,VListItem:d.a,VListItemAvatar:f.a,VListItemContent:h.b})},706:function(t,e,n){"use strict";n.r(e);var r=n(55),o=(n(31),n(70),n(101),n(8),n(54),{props:{links:{type:Array,default:function(){return null}},active:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""},color:{type:String,default:"brown"}},head:function(){var meta=[{hid:"description",name:"description",content:this.pageDescription()},{hid:"og:description",name:"og:description",content:this.pageDescription()},{hid:"og:title",name:"og:title",content:this.pageTitle()},{hid:"og:url",name:"og:url",content:this.apiURL+this.$route.path}];return this.img&&meta.push({hid:"og:image",name:"og:image",content:this.img}),{title:this.pageTitle(),meta:meta}},computed:{previousPage:function(){return this.links&&this.links.length?this.links[this.links.length-1][1]:"/"},apiURL:function(){return"https://api.cultivarbrasil.com"}},created:function(){this.$store.dispatch("setPage",{name:this.active,title:this.pageTitle(),description:this.pageDescription(),links:this.links})},methods:{pageTitle:function(){var t=this.links||[];return["Cultivar Brasil"].concat(Object(r.a)(t.map((function(link){return link[0]}))),[this.active]).reverse().join(" | ")},pageDescription:function(){return this.description||"Cultive plantas em casa, tenha mais saúde, economize e melhore sua renda com este App incrível!"},toggleDrawer:function(){this.$store.dispatch("toggleDrawer",!this.$store.state.showDrawer)}}}),c=n(19),l=n(20),v=n.n(l),m=n(711),d=n(712),f=n(713),h=n(271),_=n(227),C=n(267),k=n(694),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-4"},[r("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},["/"!==t.$route.path?r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.replace(t.previousPage)}}},[r("v-icon",[t._v(" mdi-arrow-left ")])],1):r("v-app-bar-nav-icon",{on:{click:t.toggleDrawer}}),t._v(" "),"/"===t.$route.path?r("v-spacer"):t._e(),t._v(" "),"/"===t.$route.path?r("img",{attrs:{title:"Cultivar Brasil",src:n(707),width:"28"}}):r("v-app-bar-title",[r("strong",[r("small",[t._v(t._s(t.active))])])]),t._v(" "),r("v-spacer"),t._v(" "),r("a",{on:{click:function(e){return t.$store.dispatch("showPortal")}}},[t.$auth.user?r("User",{attrs:{size:"25"}}):r("v-avatar",{attrs:{color:"white",size:"25"}},[r("v-icon",{attrs:{color:"primary",dark:""}},[t._v(" mdi-account ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{User:n(705).default}),v()(component,{VAppBar:m.a,VAppBarNavIcon:d.a,VAppBarTitle:f.a,VAvatar:h.a,VBtn:_.a,VIcon:C.a,VSpacer:k.a})},707:function(t,e,n){t.exports=n.p+"img/cultivar-logo-branca.a4b3bbe.png"},714:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{dialog:!1}},methods:{confirm:function(){this.dialog=!1,this.$emit("confirm")},cancel:function(){this.dialog=!1,this.$emit("cancel")}}},o=n(19),c=n(20),l=n.n(c),v=n(227),m=n(275),d=n(124),f=n(690),h=n(267),_=n(694),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":function(e){t.removeComment=null}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{dark:""}},[t._v("mdi-delete")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v("\n      Tem certeza que deseja excluír?\n    ")]),t._v(" "),n("v-card-text",[t._v(" Esta alteração não pode ser desfeita ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:t.cancel}},[t._v(" Não ")]),t._v(" "),n("v-btn",{attrs:{color:"green",text:""},on:{click:t.confirm}},[t._v(" Sim ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:m.a,VCardActions:d.a,VCardText:d.c,VCardTitle:d.d,VDialog:f.a,VIcon:h.a,VSpacer:_.a})},715:function(t,e,n){"use strict";n.r(e);var r=n(30),o=(n(86),{props:{target:{type:String,default:null},conversation:{type:String,default:null}},data:function(){return{comments:null}},created:function(){this.loadComments()},methods:{loadComments:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/v1/comments",{params:{target:t.target||t.$route.path}});case 2:t.comments=e.sent;case 3:case"end":return e.stop()}}),e)})))()},commentSaved:function(t){this.loadComments(),this.$emit("change",t)},remove:function(t){var e=this;this.$axios.$delete("/v1/comments/"+t._id,{params:{target:this.target||this.$route.path}}).then((function(){e.loadComments(),e.$emit("change",t)}))}}}),c=n(19),l=n(20),v=n.n(l),m=n(277),d=n(268),f=n(170),h=n(269),_=n(92),C=n(270),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-divider",{staticClass:"my-2"}),t._v(" "),n("v-list",{attrs:{subheader:"",dense:""}},[t._l(t.comments,(function(e){return[n("v-list-item",{key:e.id},[n("v-list-item-avatar",[n("User",{attrs:{user:e.user,thumb:"",size:"40"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.user.name)}}),t._v(" "),n("div",{directives:[{name:"linkify",rawName:"v-linkify"}],staticClass:"body-2 pt-2"},[t._v(t._s(e.message))]),t._v(" "),e.embeds.length?n("div",{staticClass:"pt-2 w-100"},[n("EmbedGallery",{attrs:{embeds:e.embeds}})],1):t._e(),t._v(" "),e.images.length?n("div",{staticClass:"pt-2"},[n("Gallery",{attrs:{images:e.images}})],1):t._e(),t._v(" "),e.members.length?n("div",{staticClass:"pt-2"},t._l(e.members,(function(t){return n("User",{key:t.id,staticClass:"mr-1 mb-1",attrs:{user:t,thumb:"",size:"32","icon-color":"white"}})})),1):t._e(),t._v(" "),e.species.length?n("div",{staticClass:"pt-2"},t._l(e.species,(function(t){return n("SpecieChip",{key:t,attrs:{value:t}})})),1):t._e()],1),t._v(" "),n("v-list-item-action",[n("v-list-item-action-text",[n("small",{staticClass:"font-weight-light",attrs:{title:t.$moment(e.createdAt).format("DD/MM/YYYY h:mm:ss")}},[t._v("\n              "+t._s(t.$moment(e.createdAt).fromNow(!0))+"\n            ")])]),t._v(" "),t.$auth.user&&e.user._id===t.$auth.user.id?n("div",[n("Remove",{on:{confirm:function(n){return t.remove(e)}}})],1):t._e()],1)],1),t._v(" "),n("v-divider",{key:"divider-"+e._id,staticClass:"my-2"})]})),t._v(" "),n("CommentForm",{attrs:{target:t.target,conversation:t.conversation},on:{change:t.commentSaved}})],2)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{User:n(705).default,EmbedGallery:n(725).default,Gallery:n(717).default,SpecieChip:n(716).default,Remove:n(714).default,CommentForm:n(729).default}),v()(component,{VDivider:m.a,VList:d.a,VListItem:f.a,VListItemAction:h.a,VListItemActionText:_.a,VListItemAvatar:C.a,VListItemContent:_.b,VListItemTitle:_.d})},840:function(t,e,n){"use strict";n.r(e);n(8),n(15),n(16);var r=n(25),o=n(1),c=n(30),l=(n(86),n(4),n(10),n(11),n(9),n(39),n(66),n(70),n(26),n(67),n(721)),v=n(83);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{ValidationObserver:v.a,ValidationProvider:v.b},props:{conversation:{type:Object,default:function(){return null}}},data:function(){return{categories:l,dialog:!1,tags:[],form:{subject:"",message:"",tags:[],species:[]}}},computed:{species:function(){return this.$store.state.species}},created:function(){var t=this;this.conversation&&Object.keys(this.form).forEach((function(e){t.conversation[e]&&("species"===e?t.form.species=t.species.filter((function(n){return t.conversation[e].includes(n.id)})):t.form[e]=t.conversation[e])})),this.loadTags()},methods:{loadTags:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/v1/conversations/tags");case 2:t.tags=e.sent;case 3:case"end":return e.stop()}}),e)})))()},save:function(){var t=this,form=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.form);form.species=this.form.species.map((function(t){return"object"===Object(r.a)(t)?t.id:t})),this.conversation?this.$axios.$patch("/v1/conversations/"+this.conversation._id,form).then((function(e){t.$notifier.success("Conversa salva!"),t.$emit("change",e),t.dialog=!1})):this.$axios.$post("/v1/conversations",form).then((function(e){t.$notifier.success("Conversa iniciada!"),t.$router.replace("/ferramentas/comunidade/"+e._id),t.$emit("change",e)}))},removeSpecie:function(t){this.form.species=this.form.species.filter((function(e){return e.id!==t}))}}},f=d,h=n(19),_=n(20),C=n.n(_),k=n(271),x=n(227),y=n(275),$=n(124),V=n(278),w=n(860),O=n(690),j=n(691),S=n(267),D=n(90),T=n(692),I=n(675),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{fullscreen:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[t.conversation?n("v-btn",t._g(t._b({attrs:{small:"",fab:"",bottom:"",right:"",fixed:"",dark:"",color:"primary"}},"v-btn",o,!1),r),[n("v-icon",{attrs:{dark:""}},[t._v("mdi-pencil")])],1):n("div",{staticClass:"text-center"},[n("v-btn",t._g(t._b({attrs:{dark:"",color:"primary",large:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v("mdi-chat-plus")]),t._v(" Comece uma conversa\n      ")],1),t._v(" "),n("v-btn",t._g(t._b({attrs:{fab:"",bottom:"",right:"",fixed:"",color:"green",dark:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{dark:""}},[t._v("mdi-chat-plus")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("span",[t._v("Comece um novo assunto")])],1),t._v(" "),n("v-card-text",{staticClass:"pt-6"},[n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.validate,o=e.invalid;return[n("v-form",{on:{submit:function(e){e.preventDefault(),r().then(t.save)}}},[n("div",{staticClass:"mb-6"},[n("validation-provider",{attrs:{name:"assunto",rules:"required|max:140"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{name:"name",label:"Qual o assunto dessa conversa?",outlined:"",counter:"",maxlength:"140","error-messages":r},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})]}}],null,!0)}),t._v(" "),n("validation-provider",{attrs:{name:"detalhe"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-textarea",{attrs:{name:"name",label:"Detalhe sua questão",outlined:"","error-messages":r},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})]}}],null,!0)}),t._v(" "),n("v-combobox",{attrs:{items:t.tags,label:"Palavras chave (#hashtags)",outlined:"",multiple:"",chips:"","small-chips":"","deletable-chips":""},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}}),t._v(" "),n("v-combobox",{attrs:{items:t.species,"item-text":"name",label:"Espécies relacionadas",outlined:"",multiple:"",chips:"","hide-details":"auto","small-chips":"","deletable-chips":""},scopedSlots:t._u([{key:"selection",fn:function(data){return[n("v-chip",t._b({key:JSON.stringify(data.item),attrs:{"input-value":data.selected,disabled:data.disabled},on:{click:function(e){return t.removeSpecie(data.item.id)}}},"v-chip",data.attrs,!1),[n("v-avatar",{staticClass:"accent white--text",attrs:{left:""}},[data.item.images?n("CachedImage",{attrs:{title:data.item.name,src:data.item.images[0],thumb:""}}):t._e()],1),t._v("\n                  "+t._s(data.item.name)+"\n                ")],1)]}}],null,!0),model:{value:t.form.species,callback:function(e){t.$set(t.form,"species",e)},expression:"form.species"}})],1),t._v(" "),n("div",{staticClass:"text-right"},[n("Save",{attrs:{invalid:o,block:!1,label:t.conversation?"Salvar conversa":"Iniciar conversa"}})],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;C()(component,{CachedImage:n(416).default,Save:n(157).default}),C()(component,{VAvatar:k.a,VBtn:x.a,VCard:y.a,VCardText:$.c,VChip:V.a,VCombobox:w.a,VDialog:O.a,VForm:j.a,VIcon:S.a,VTextField:D.a,VTextarea:T.a,VToolbar:I.a})}}]);