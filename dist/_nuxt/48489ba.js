(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{889:function(t,n,e){"use strict";e.r(n);e(4),e(57),e(33);var r={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var n=this;this.loading=!0;for(var e=t.target.files||t.dataTransfer.files,i=0;i<e.length;i++){var r=e[i],o=new FormData;o.append("file",r,r.name),this.$axios.$post("/v1/uploads/images?prefix="+this.prefix,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){n.$emit("input",t.url),n.loading=!1})).catch((function(t){n.$notifier.apiError(t),n.loading=!1}))}},upload:function(){this.$refs["upload-image-input-"+this.inputId].click()}}},o=e(19),l=e(20),c=e.n(l),d=e(227),f=e(268),m=e(267),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"mb-6"},[e("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?e("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"20"}}):e("v-icon",[t._v("mdi-image")])],1),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-image-input-"+t.inputId,attrs:{accept:"image/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:m.a})}}]);