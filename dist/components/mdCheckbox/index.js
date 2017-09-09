/*!
* Vue Material v8.8.8
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(c){if(o[c])return o[c].exports;var n=o[c]={i:c,l:!1,exports:{}};return e[c].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,c){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:c})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=454)})({0:function(e,t){e.exports=function(e,t,o,c,n){var r,d=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,d=e.default);var a="function"==typeof d?d.options:d;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),c&&(a._scopeId=c);var s;if(n?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},a._ssrRegister=s):o&&(s=o),s){var u=a.functional,l=u?a.render:a.beforeCreate;u?a.render=function(e,t){return s.call(t),l(e,t)}:a.beforeCreate=l?[].concat(l,s):[s]}return{esModule:r,exports:d,options:a}}},1:function(e,t,o){"use strict";function c(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||c(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return c(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},159:function(e,t,o){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function n(e){e.component("md-checkbox",d.default),e.material.styles.push(a.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=o(160),d=c(r),i=o(164),a=c(i);e.exports=t.default},160:function(e,t,o){function c(e){o(161)}var n=o(0)(o(162),o(163),c,null,null);e.exports=n.exports},161:function(e,t){},162:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=o(1),n=(function(e){return e&&e.__esModule?e:{default:e}})(c);t.default={name:"md-checkbox",props:{name:String,value:[String,Boolean],id:String,disabled:Boolean},mixins:[n.default],data:function(){return{checked:this.value||!1}},computed:{classes:function(){return{"md-checked":this.checked,"md-disabled":this.disabled}}},watch:{value:function(){this.checked=!!this.value}},methods:{toggleCheck:function(e){this.disabled||(this.checked=!this.checked,this.$emit("change",this.checked,e),this.$emit("input",this.checked,e))}}},e.exports=t.default},163:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"md-checkbox",class:[e.themeClass,e.classes]},[o("div",{staticClass:"md-checkbox-container",attrs:{tabindex:"0"},on:{click:function(t){t.stopPropagation(),e.toggleCheck(t)}}},[o("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled,tabindex:"-1"},domProps:{value:e.value,checked:e.checked}}),e._v(" "),o("md-ink-ripple",{attrs:{"md-disabled":e.disabled}})],1),e._v(" "),e.$slots.default?o("label",{staticClass:"md-checkbox-label",attrs:{for:e.id||e.name},on:{click:function(t){t.preventDefault(),e.toggleCheck(t)}}},[e._t("default")],2):e._e()])},staticRenderFns:[]}},164:function(e,t){e.exports=".THEME_NAME.md-checkbox.md-checked .md-checkbox-container{background-color:ACCENT-COLOR;border-color:ACCENT-COLOR}.THEME_NAME.md-checkbox.md-checked .md-checkbox-container:after{border-color:ACCENT-CONTRAST}.THEME_NAME.md-checkbox .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-checkbox .md-ripple{opacity:.26}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container{background-color:PRIMARY-COLOR;border-color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container:after{border-color:PRIMARY-CONTRAST}.THEME_NAME.md-checkbox.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container{background-color:WARN-COLOR;border-color:WARN-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container:after{border-color:WARN-CONTRAST}.THEME_NAME.md-checkbox.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-checkbox.md-disabled.md-checked .md-checkbox-container{background-color:rgba(0,0,0,0.26);border-color:transparent}.THEME_NAME.md-checkbox.md-disabled:not(.md-checked) .md-checkbox-container{border-color:rgba(0,0,0,0.26)}\n"},454:function(e,t,o){e.exports=o(159)}})}));