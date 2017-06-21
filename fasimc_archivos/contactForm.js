"use strict";define("contactForm",["lodash","santaProps","utils","formCommon","react","reactDOM"],function(e,t,i,r,n,s){function a(){var e=this.state.notifications;return{notifications:{className:this.classSet({error:e.error,success:!e.error}),children:[e.message]}}}function l(t,r,n){var s=i.validationUtils;return!(!t.hidden&&t.required)||(r===m.call(this)?s.isValidEmail(n):!e.isEmpty(n))}function o(e,t,i,r){return r?c(e,t,i):u.call(this,t,e[t])}function d(t){return e.reduce(e.keys(t),function(e,t){return"notification"===t?e:e&&t},!0)}function c(t,i,r){var n={},s=t[i];return s&&s.error&&(n[i]={error:!0},d(t)&&(n.notifications={error:!1,message:""})),n[i]=e.assign(n[i]||{},{hidden:s.hidden,required:s.required,value:r}),n}function u(e,t){var i={};return i[e]={error:!0,hidden:t.hidden,required:t.required,value:t.value},i.notifications={message:e===m.call(this)?this.props.errorMessage:this.props.validationErrorMessage,error:!0},i}function f(t){var i=t.target.id.replace(this.props.id,"");this.setState(e.assign(this.state[i],{error:!1}))}function p(t){var i=t.target.id.replace(this.props.id,"");this.setState(e.assign(this.state[i],{value:t.target.value}))}function h(t){var i=e.find(t,{fieldType:"message"})?t:t.concat({fieldType:"message",hidden:!1});return e.reduce(i,function(e,t){var i=!t.hidden,r=g(t);return e["$"+r]=i?r+"Hidden":"",e},{})}function m(){return g(e.find(this.props.orderedFields,{fieldType:"email"}))}function v(){return this.state[m.call(this)]}function y(){var t=e.find(this.props.orderedFields,{fieldType:"name"});return this.state[g(t)]}function g(e){return"message"===e.fieldType?"fieldMessage":"field"+(e.index+1)}function F(e){return"message"===e.fieldType?"label_fieldMessage":"label_field"+(e.index+1)}function b(e){return"message"===e.fieldType?"fieldMessageContainer":"field"+(e.index+1)+"Container"}function k(e,t){return t&&e.fieldLabel?e.fieldLabel+(e.required?" *":""):e.fieldLabel}function S(t,i){var r=this.state[t]||{},n={required:!!i.required,hidden:!i.hidden,hiddenField:!i.hidden};return e.merge(r,n),{skinId:t,name:i.fieldLabel,value:r.value,className:this.classSet(r),placeholder:k(i,this.props.isDynamicContactForm),onChange:p.bind(this),onClick:f.bind(this),"data-aid":i.fieldType+"Field"}}function T(){var e=this;return this.props.orderedFields.reduce(function(t,i){var r=g(i),n=S.call(e,r,i);return t.push(n)&&t},[])}function C(){var e=this;return this.props.orderedFields.reduce(function(t,i){var r=!i.hidden,n={skinId:F(i),className:e.classSet({hidden:r,hiddenField:r}),children:[i.fieldLabel],"data-aid":"label_"+i.fieldType};return t.push(n)&&t},[])}function E(){if("contactform.FieldAnimationSkin"!==this.props.skin)return[];var e=this;return this.props.orderedFields.reduce(function(t,i){var r={skinId:b(i),className:e.classSet({hiddenField:!i.hidden})};return t.push(r)&&t},[])}function N(t,i){return e.mergeWith(t,i,function(e,t,i){if("className"===i)return((e||"")+" "+(t||"")).trim()})}function x(e,t,i,r){var s=g({index:e}),a=n.createElement("span",N({id:F({index:e}),className:this.classSet({label:!0})},i)),l=n.createElement("div",{id:"field"+(e+1)+"-cover",className:this.classSet({"input-cover":!0})},[a]),o=n.createElement("input",N({id:s,ref:s,type:"text",required:"true",className:this.classSet({input:!0})},t));return n.createElement("label",N({id:b({index:e}),className:this.classSet({"input-container":!0})},r),[o,l])}function q(t,i,r){var s=g({index:t}),a=n.createElement("label",e.merge({id:F({index:t})},r),r.children[0]),l=n.createElement("input",e.merge({id:s,ref:s,type:"text"},i));return n.createElement("div",null,[a,l])}function M(t,i,r){var s=this.classSet({col:!0}),a=g({index:t}),l=n.createElement("label",e.merge({id:F({index:t}),className:s},r),r.children[0]),o=n.createElement("input",e.merge({id:a,ref:a,type:"text"},i)),d=n.createElement("div",{className:s},o);return n.createElement("li",{className:this.classSet({row:!0})},[l,d])}function w(e,t){var i=g({index:e});return n.createElement("input",N({id:i,ref:i,key:i,type:"text"},t))}function L(t){var i=this;return{"field1-hook":x.call(i,0,t[0].input,t[0].label,t[0].container),"field2-hook":x.call(i,1,t[1].input,t[1].label,t[1].container),"fieldN-hook":n.createElement("div",null,e.map(t.slice(2),function(e,r){var n=r+2;return x.call(i,n,t[n].input,t[n].label,t[n].container)}))}}function D(t){return{"field1-hook":w(0,t[0].input),"field2-hook":w(1,t[1].input),"fieldN-hook":n.createElement("div",null,e.map(t.slice(2),function(e,i){var r=i+2;return w(r,t[r].input)}))}}function I(t){return{"fieldN-hook":n.createElement("div",null,e.map(t,function(e,i){return w(i,t[i].input)}))}}function A(t){return{"fieldN-hook":n.createElement("div",null,e.map(t,function(e,i){return q(i,t[i].input,t[i].label)}))}}function O(t){var i=this;return{wrapper:{addChildrenBefore:e.map(t,function(e,r){return M.call(i,r,t[r].input,t[r].label)})}}}function R(e){var t=this;switch(t.props.skin){case"contactform.FieldAnimationSkin":return L.call(t,e);case"contactform.FullWidthButtonSkin":case"contactform.LineOnlySkin":return D(e);case"contactform.OverlappingButtonSkin":case"wysiwyg.viewer.skins.contactform.BasicContactFormSkin":case"wysiwyg.viewer.skins.contactform.DefaultContactForm":return I(e);case"wysiwyg.viewer.skins.contactform.VerticalForm":return A(e);case"wysiwyg.viewer.skins.contactform.VerticalFormLabelsLeft":return O.call(t,e);default:return{}}}function V(t){return"fieldMessage"===e.last(t).input.skinId}function B(e){return e.splice(-1)[0]}function P(){return e.zipWith(T.call(this),C.call(this),E.call(this),function(e,t,i){return{input:e,label:t,container:i}})}function W(t){var i={className:this.classSet({hiddenField:!0})};return{fieldMessage:e.get(t,"input",i),label_fieldMessage:e.get(t,"label",i),fieldMessageContainer:e.get(t,"container",i)}}function _(){return e.reduce(this.props.orderedFields,function(e,t){return t.hidden&&e.push({name:t.fieldType,label:t.fieldLabel,value:this.state[g(t)].value||""}),e}.bind(this),[])}function z(){return e.reduce(this.props.orderedFields,function(e,t){return t.hidden&&(e[t.fieldType]=this.state[g(t)].value||""),e}.bind(this),{})}return{displayName:"ContactForm",mixins:[r.formMixin],propTypes:{orderedFields:t.Types.ContactFormSantaTypes.orderedFields.isRequired,errorMessage:t.Types.ContactFormSantaTypes.errorMessage.isRequired,validationErrorMessage:t.Types.ContactFormSantaTypes.validationErrorMessage.isRequired,isDynamicContactForm:t.Types.ContactFormSantaTypes.isDynamicContactForm.isRequired,isExperimentOpen:t.Types.isExperimentOpen,skin:t.Types.Component.skin.isRequired,styleId:t.Types.Component.styleId},statics:{useSantaTypes:!0},componentWillReceiveProps:function(t){var i=h(this.props.orderedFields),r=h(t.orderedFields);e.isEqual(i,r)||this.setState(r)},getFormInitialState:function(){var t={mailSent:!1,notifications:{error:!1,message:"",hidden:!0,required:!1}},i=this.props.orderedFields.reduce(function(e,t){return e[g(t)]={error:!1,hidden:!t.hidden,required:!!t.required},e},t),r=h(this.props.orderedFields);return e.merge(i,r)},getCleanFormState:function(){return e.reduce(this.props.orderedFields,function(e,t){var i=g(t);return e[i]=e[i]||{},e[i].value="",e},{})},getActivityName:function(){return this.props.isDynamicContactForm?"DynamicContactFormActivity":"ContactFormActivity"},getFormFields:function(){var t=this,i=e.reduce(this.props.orderedFields,function(e,i){if(i.hidden){var r=i.fieldLabel,n=t.state[g(i)].value||"";e.displayed[r]=n,e.structured.push({type:i.fieldType,label:r,value:n})}return e},{displayed:{},structured:[]});return i.getAll=function(t){return e.filter(i.structured,{type:t})},{newModel:!0,data:i}},getFieldsForActivityReporting:function(){return this.props.isDynamicContactForm?_.call(this):z.call(this)},getFieldLabels:function(){return e(this.props.orderedFields).filter(function(t){return e.has(t,"fieldType")}).map(function(e){return{type:e.fieldType,label:e.fieldLabel}}).value()},isFormValid:function(){var t=this.state,i=e.clone(t),r=v.call(this),n=r.value,a=m.call(this),d=l.call(this,r,a,n);i=o.call(this,t,a,n,d);var c;return d&&(c=e.reduce(this.props.orderedFields,function(r,n){var a=g(n),d=s.findDOMNode(this.refs[a]).value,c=l.call(this,t[a],a.toLowerCase(),d);return i=e.assign(i,o.call(this,t,a,d,c)),r&&c}.bind(this),!0)),this.setState(i),c},getInputName:function(){var e=y.call(this).value;return this.props.isExperimentOpen("sendContactFormEmailsViaPong")?e||null:e||"n/a"},getLangKeys:function(e){return i.translations.contactFormTranslations[e]},getFormSkinProperties:function(){var t=P.call(this),i=V(t)?B(t):{},r=W.call(this,i),n=R.call(this,t),s=a.call(this);return e.assign(r,n,s,{privateMembers:t})}}});
//# sourceMappingURL=contactForm.min.js.map