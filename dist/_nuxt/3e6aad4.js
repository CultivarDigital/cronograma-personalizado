(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{938:function(e,r,t){"use strict";t.r(r);var o=t(78),n={components:{ValidationObserver:o.a,ValidationProvider:o.b},layout:"front",data:function(){return{loading:!1,form:{email:"",password:"",password_confirmation:""}}},methods:{register:function(){var e=this;this.loading=!0,this.form.password&&this.form.password===this.form.password_confirmation?this.$firebase.register(this.form.email,this.form.password).then((function(){e.$notifier.success("Seja bem vindo!"),e.$emit("registered")})).catch(this.$notifier.firebaseError):this.$notifier.error("As senhas devem ser iguais"),this.loading=!1}}},l=t(22),d=t(21),f=t.n(d),m=t(253),c=t(664),v=t(654),h=t(87),component=Object(l.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-container",{staticClass:"mt-3"},[t("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(r){var o=r.validate,n=r.invalid;return[t("p",{staticClass:"text-center mb-6"},[e._v("\n      Já possúi uma conta?\n      "),t("v-btn",{attrs:{color:"primary",to:"/login"}},[e._v(" ENTRE ")])],1),e._v(" "),t("v-form",{on:{submit:function(r){r.preventDefault(),o().then(e.register)}}},[t("validation-provider",{attrs:{name:"e-mail",rules:"required|min:4"},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.errors;return[t("v-text-field",{attrs:{outlined:"",label:"Qual seu email?","error-messages":o},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"senha",rules:"required|min:4"},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.errors;return[t("v-text-field",{attrs:{outlined:"",type:"password",label:"Vamos criar uma senha pra você?","error-messages":o},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"confirmação da senha",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.errors;return[t("v-text-field",{attrs:{outlined:"",type:"password",label:"Confirme sua senha","error-messages":o},model:{value:e.form.password_confirmation,callback:function(r){e.$set(e.form,"password_confirmation",r)},expression:"form.password_confirmation"}})]}}],null,!0)}),e._v(" "),t("Save",{attrs:{invalid:n,loading:e.loading,label:"Cadastrar"}})],1)]}}])})],1)}),[],!1,null,null,null);r.default=component.exports;f()(component,{Save:t(150).default}),f()(component,{VBtn:m.a,VContainer:c.a,VForm:v.a,VTextField:h.a})}}]);