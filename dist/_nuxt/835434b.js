(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{713:function(t,e,n){var content=n(720);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("50788f08",content,!0,{sourceMap:!1})},720:function(t,e,n){var r=n(17)(!1);r.push([t.i,".v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:70px}.v-item-group.v-bottom-navigation .v-btn{height:inherit!important;background-color:transparent!important;min-width:80px!important}.v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},721:function(t){t.exports=JSON.parse('["Debate","Dúvida","Ideia","Pedido","Reclamação","Sugestão"]')},747:function(t,e,n){"use strict";n(11),n(8),n(9),n(15),n(10),n(16);var r=n(25),o=n(1),l=(n(4),n(57),n(93),n(305),n(43),n(33),n(39),n(67),n(181),n(183),n(713),n(677)),c=(n(71),n(86),n(91)),h=n(72),d=n(0);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=f(f({},l.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),I=l.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:l.a.options.props.menuProps.type,default:function(){return v}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},l.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.n)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=l.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},v),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=l.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.s.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.s.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.s.backspace&&t!==d.s.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,l.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(h.a)(input.data,{attrs:{"aria-activedescendant":Object(d.m)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.m)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=l.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?l.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.s.home,d.s.end].includes(e)||l.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){l.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){l.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){l.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}});function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=I.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return l.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=I.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(t,e){var n=this,r=l.a.options.methods.genChipSelection.call(this,t,e);return this.multiple&&(r.componentOptions.listeners=S(S({},r.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),r},onChipInput:function(t){l.a.options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.s.home,d.s.end].includes(e)||l.a.options.methods.onKeyDown.call(this,t),this.multiple&&e===d.s.left&&0===this.$refs.input.selectionStart?this.updateSelf():e===d.s.enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();I.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():(I.options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){l.a.options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this,e=this.internalValue.slice(),n=this.selectedItems.findIndex((function(e){return t.getText(e)===t.internalSearch}));if(n>-1){var o="object"===Object(r.a)(e[n])?Object.assign({},e[n]):e[n];e.splice(n,1),e.push(o)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this,e=this.getMenuIndex();if(!(e<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(e){return t.internalSearch===t.getText(e)})),o=n>-1&&"object"===Object(r.a)(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var l=this.internalValue.slice();l.splice(n,1),this.setValue(l)}if(e>-1)return this.internalSearch=null;this.selectItem(o),this.internalSearch=null}},onPaste:function(t){var e;if(this.multiple&&!this.searchIsDirty){var n=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(t.preventDefault(),l.a.options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,I.options.methods.clearableCallback.call(this)}}})},836:function(t,e,n){"use strict";n.r(e);n(8),n(15),n(16);var r=n(25),o=n(1),l=n(30),c=(n(87),n(4),n(10),n(11),n(9),n(39),n(67),n(71),n(26),n(68),n(721)),h=n(84);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={components:{ValidationObserver:h.a,ValidationProvider:h.b},props:{conversation:{type:Object,default:function(){return null}}},data:function(){return{categories:c,dialog:!1,tags:[],form:{subject:"",message:"",tags:[],species:[]}}},computed:{species:function(){return this.$store.state.species}},created:function(){var t=this;this.conversation&&Object.keys(this.form).forEach((function(e){t.conversation[e]&&("species"===e?t.form.species=t.species.filter((function(n){return t.conversation[e].includes(n.id)})):t.form[e]=t.conversation[e])})),this.loadTags()},methods:{loadTags:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/v1/conversations/tags");case 2:t.tags=e.sent;case 3:case"end":return e.stop()}}),e)})))()},save:function(){var t=this,form=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.form);form.species=this.form.species.map((function(t){return"object"===Object(r.a)(t)?t.id:t})),this.conversation?this.$axios.$patch("/v1/conversations/"+this.conversation._id,form).then((function(e){t.$notifier.success("Conversa salva!"),t.$emit("change",e),t.dialog=!1})):this.$axios.$post("/v1/conversations",form).then((function(e){t.$notifier.success("Conversa iniciada!"),t.$router.replace("/ferramentas/comunidade/"+e._id),t.$emit("change",e)}))},removeSpecie:function(t){this.form.species=this.form.species.filter((function(e){return e.id!==t}))}}},f=m,v=n(19),I=n(20),x=n.n(I),S=n(270),y=n(227),O=n(277),D=n(124),j=n(276),_=n(747),w=n(691),C=n(692),V=n(268),k=n(91),$=n(693),P=n(676),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{fullscreen:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[t.conversation?n("v-btn",t._g(t._b({attrs:{small:"",fab:"",bottom:"",right:"",fixed:"",dark:"",color:"primary"}},"v-btn",o,!1),r),[n("v-icon",{attrs:{dark:""}},[t._v("mdi-pencil")])],1):n("div",{staticClass:"text-center"},[n("v-btn",t._g(t._b({attrs:{dark:"",color:"primary",large:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v("mdi-chat-plus")]),t._v(" Comece uma conversa\n      ")],1),t._v(" "),n("v-btn",t._g(t._b({attrs:{fab:"",bottom:"",right:"",fixed:"",color:"green",dark:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{dark:""}},[t._v("mdi-chat-plus")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("span",[t._v("Comece um novo assunto")])],1),t._v(" "),n("v-card-text",{staticClass:"pt-6"},[n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.validate,o=e.invalid;return[n("v-form",{on:{submit:function(e){e.preventDefault(),r().then(t.save)}}},[n("div",{staticClass:"mb-6"},[n("validation-provider",{attrs:{name:"assunto",rules:"required|max:140"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{name:"name",label:"Qual o assunto dessa conversa?",outlined:"",counter:"",maxlength:"140","error-messages":r},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})]}}],null,!0)}),t._v(" "),n("validation-provider",{attrs:{name:"detalhe"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-textarea",{attrs:{name:"name",label:"Detalhe sua questão",outlined:"","error-messages":r},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})]}}],null,!0)}),t._v(" "),n("v-combobox",{attrs:{items:t.tags,label:"Palavras chave (#hashtags)",outlined:"",multiple:"",chips:"","small-chips":"","deletable-chips":""},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}}),t._v(" "),n("v-combobox",{attrs:{items:t.species,"item-text":"name",label:"Espécies relacionadas",outlined:"",multiple:"",chips:"","hide-details":"auto","small-chips":"","deletable-chips":""},scopedSlots:t._u([{key:"selection",fn:function(data){return[n("v-chip",t._b({key:JSON.stringify(data.item),attrs:{"input-value":data.selected,disabled:data.disabled},on:{click:function(e){return t.removeSpecie(data.item.id)}}},"v-chip",data.attrs,!1),[n("v-avatar",{staticClass:"accent white--text",attrs:{left:""}},[data.item.images?n("CachedImage",{attrs:{title:data.item.name,src:data.item.images[0],thumb:""}}):t._e()],1),t._v("\n                  "+t._s(data.item.name)+"\n                ")],1)]}}],null,!0),model:{value:t.form.species,callback:function(e){t.$set(t.form,"species",e)},expression:"form.species"}})],1),t._v(" "),n("div",{staticClass:"text-right"},[n("Save",{attrs:{invalid:o,block:!1,label:t.conversation?"Salvar conversa":"Iniciar conversa"}})],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{CachedImage:n(301).default,Save:n(157).default}),x()(component,{VAvatar:S.a,VBtn:y.a,VCard:O.a,VCardText:D.c,VChip:j.a,VCombobox:_.a,VDialog:w.a,VForm:C.a,VIcon:V.a,VTextField:k.a,VTextarea:$.a,VToolbar:P.a})}}]);