"use strict";define("textCommon/utils/filterHtmlString",["lodash","xss"],function(t,e){function n(t,e,n){if("a"===t&&"href"===e){if(/^tel:[^A-Za-z]+$/i.test(n))return!0;if(/^ftp:\/\/[^\s]*$/.test(n))return!0}return!1}function i(t,i,o,s){return n(t,i,o)?o:e.safeAttrValue(t,i,o,s)}if(!e)return t.identity;var o=["style","class","dir","wix-comp"],s={iframe:["frameborder","height","width","src","marginheight","marginwidth","name","scrolling","longdesc"].concat(o)};return Object.freeze(s),function(){var n={strike:[],hatul:[],wline:[]},i=["color","background-color","font-size","font-family","font-style","text-decoration","line-height","text-shadow","direction","position","z-index","top","left"];t.assign(e.whiteList,n),e.whiteList.a.push("data-anchor"),e.whiteList.a.push("dataquery"),e.whiteList.a.push("data-content"),e.whiteList.a.push("data-no-physical-url"),e.whiteList.a.push("data-type"),e.whiteList.a.push("id"),t.forOwn(e.whiteList,function(t){t.push.apply(t,o)}),t.forEach(i,function(t){e.cssFilter.options.whiteList[t]=!0})}(),function(n,o){return o?t.assign(e.whiteList,s):delete e.whiteList.iframe,e(n,{stripIgnoreTagBody:!0,safeAttrValue:function(t,e,n,o){var s=i(t,e,n,o);return s||""}})}}),define("textCommon/mixins/textCompMixin",["lodash","react","core","santaProps","textCommon/utils/filterHtmlString"],function(t,e,n,i,o){return{propTypes:{reportBI:i.Types.reportBI,id:i.Types.Component.id.isRequired,skin:i.Types.Component.skin.isRequired,style:i.Types.Component.style.isRequired,structure:i.Types.Component.structure.isRequired,title:e.PropTypes.string},mixins:[n.compMixins.skinBasedComp],componentWillMount:function(){this.updateHTML(this.props)},updateHTML:function(t){this._componentHtml=o(t.compData.text||"",this.allowIframes),this.convertCompDataTextToHTML(t)},componentWillReceiveProps:function(t){this.updateHTML(t)},getRootStyle:function(e){var n=t.clone(e||{});return"hidden"!==(n["overflow-y"]||n.overflowY)&&(n.height="auto"),n},getSkinProperties:function(){this.lastScale=t.get(this,"props.structure.layout.scale")||1;var e,n=this.props.skin,i={"":{style:this.getRootStyle(this.props.style)}};e="wysiwyg.viewer.skins.WRichTextSkin"===n||"wysiwyg.viewer.skins.WRichTextClickableSkin"===n?i.richTextContainer={}:i[""],t.isString(this._componentHtml)?e.dangerouslySetInnerHTML={__html:this._componentHtml||""}:e.children=this._componentHtml,this.props.title&&(i[""].title=this.props.title);var o=t.get(this.props,["compProp","overrideAlignment"]);return o&&(e.className=this.classSet(t.zipObject(["override-"+o],[!0]))),i}}}),define("textCommon/mixins/textScaleMixin",["lodash","skins","fonts","santaProps","siteUtils","core"],function(t,e,n,i,o,s){function r(t,e){return o.mobileUtils.convertFontSizeToMobile(t,e)}function a(){var n=e.skins[this.props.skin]&&e.skins[this.props.skin].exports,i=t.find(n,function(e){var n=e.skin;return!t.isUndefined(this.getParamFromSkin("fnt",n).value)}.bind(this));return i&&this.getParamFromSkin("fnt",i.skin).value}function l(e){return t.get(e,["structure","layout","scale"])||1}var u=n.fontUtils;return{mixins:[s.compMixins.skinInfo],propTypes:{structure:i.Types.Component.structure,compTheme:i.Types.Component.theme,skin:i.Types.Component.skin,isMobileView:i.Types.isMobileView,fontsMap:i.Types.Fonts.fontsMap},componentWillMount:function(){this.lastScale=l(this.props)},componentWillReceiveProps:function(){this.lastScale=l(this.props)},fontGetter:function(t){var e=t.split("_")[1];return this.props.fontsMap[e]},getFontSize:function(t,e){var n={};if(this.props.isMobileView){var i=this.getDesktopFontSize(t);if(i){var o=e||this.props.structure.layout.scale;n.fontSize=r(i,o)+"px"}}return n},getDesktopFontSize:function(n){var i=this.props.compTheme,o=n||"fnt",s=t.get(i,["style","properties",o])||t.get(e,["skins",this.props.skin,"paramsDefaults",o])||a.call(this);if(s){var r=this.fontGetter(s)||s;return parseInt(u.parseFontStr(r).size,10)}}}}),define("textCommon/mixins/baseTextInput",["lodash","react","santaProps","core"],function(t,e,n,i){function o(t){return{$label:t.compProp.label?"hasLabel":"noLabel"}}function s(){var e=this.props.compProp,n=this.props.compData,i={type:n.textType,name:n.name||this.props.structure.nickname,value:this.state.value,onChange:this._handleChange,onBlur:this._handleBlur,onFocus:this._handleFocus,onClick:this._handleClick,onKeyDown:this._handleKeyDown,disabled:e.isDisabled,required:e.required,readOnly:e.readOnly,placeholder:e.placeholder,tabIndex:e.tabIndex};return"number"===i.type&&t.assign(i,{min:n.min,max:n.max}),n.pattern&&t.assign(i,{pattern:n.pattern}),n.maxLength&&t.assign(i,{maxLength:n.maxLength}),e.autoComplete&&"password"!==i.type&&(i.autoComplete="on"),i}var r=i.compMixins,a={style:{display:"none"}},l=function(t){return i.compMixins.validatableMixin.getPublicState(t)};return{mixins:[r.skinBasedComp,r.runTimeCompData,r.validatableMixin.validatable,r.compStateMixin(l)],propTypes:{compData:n.Types.Component.compData.isRequired,compProp:n.Types.Component.compProp.isRequired,structure:n.Types.Component.structure.isRequired,shouldResetComponent:n.Types.RenderFlags.shouldResetComponent,isPreset:e.PropTypes.bool,onChange:e.PropTypes.func,message:e.PropTypes.string},BASE_TEXT_BEHAVIORS:t.assign({},i.compMixins.validatableMixin.VALIDATABLE_BEHAVIORS),getInitialState:function(){return t.assign(l(),o(this.props),{value:this.props.compData.value})},componentWillReceiveProps:function(e){e.shouldResetComponent&&e.shouldResetComponent!==this.props.shouldResetComponent&&this.hideValidityIndication();var n=o(e);t.has(e.compData,"value")&&e.compData.value!==this.state.value&&(n.value=e.compData.value),this.setState(n)},_handleClick:function(t){this.props.isPreset&&t.target.select()},setCustomValidity:function(t){this.refs.input.setCustomValidity(t)},_handleChange:function(t){var e=t.target.value;e!==this.state.value&&(this.setState({value:e},function(){this.updateData({value:e})}.bind(this)),this.latestChangeEvent=t)},_handleBlur:function(t){this.props.onChange&&this.props.onChange(t),this.handleAction("blur",t),this.latestChangeEvent&&(this.handleAction("change",this.latestChangeEvent),this.latestChangeEvent=null),this.showValidityIndication()},_handleFocus:function(t){this.handleAction("focus",t)},_handleKeyDown:function(t){this.handleAction("keyPress",t)},getBaseTextInputSkinProperties:function(){var t=this.props.compProp;return{label:t.label?{children:t.label}:a,input:s.call(this),message:this.props.message?{children:this.props.message,style:{whiteSpace:"normal"}}:a}}}}),define("textCommon/utils/textTransforms",["lodash","siteUtils","coreUtils","color"],function(t,e,n,i){function o(t,e){var n="#000000"!==t.hexString()?t.clone():new i("#121212");return n.lightness(n.hslArray()[2]*(e||1)),n}function s(t){var e=parseFloat(t);if(!isNaN(e))return e}function r(e){if(e)return t.head(e.split(","))}function a(t){if(t)return new i(_.normalizeColorStr(t))}function l(t,e,n){var i=t.getAttribute("style")||"",o=i.replace(new RegExp("(?:(^|;)\\s*)"+e+"\\s*:\\s*(?:.*?)\\s*(?:;|$)"),"$1")+(""!==i&&";"!==i[i.length-1]?";":"")+e+":"+n;t.setAttribute("style",o)}function u(t,n,i){if(n.fontSize&&n.fontSize%1==0&&(t.style.fontSize||C(t,i))){var o=parseFloat(i.scale);l(t,"font-size",Math.round(e.mobileUtils.convertFontSizeToMobile(n.fontSize,o))+"px")}}function c(e,n,i){if(h(e),!p(e)){var o=C(e,i);o&&(t.includes(e.getAttribute("style"),"line-height")||l(e,"line-height",o.lineHeight))}}function p(e){return e&&t.includes(["ol","ul"],e.tagName.toLowerCase())}function h(t){if("a"===t.tagName.toLowerCase()){var e=d(t);if(e)m(e,"#0000FF");else{var n=t.ownerDocument.createElement("span");n.style.color="#0000FF",y(t,n)}}}function m(e,n){e.style.color=n,e.className=e.className.replace(/\bcolor_\d+\b/,""),t.isEmpty(e.className)&&e.removeAttribute("class")}function f(e){return!t.isEmpty(e.style.color)||e.className.match(/\bcolor_\d+\b/)}function d(t){var e=t.parentElement;return e&&"span"===e.tagName.toLowerCase()&&1===e.childNodes.length?f(e)?e:d(e):null}function g(t){for(var e=t.parentNode,n=0;n<e.childNodes.length;n++)if(e.childNodes[n]===t)return n}function y(t,e){var n=t.parentNode,i=g(t);e.appendChild(t),n.insertBefore(e,n.childNodes[i])}function v(t,e,n){if(e.color){var i=C(t,n);if(t.style.color||b(t,i,n)){var s=parseFloat(n.brightness);l(t,"color",o(e.color,s).rgbaString())}}}function x(t,e,n){var i=C(t,n);(t.style.color||b(t,i,n))&&l(t,"color",n.overrideColor.replace(/(^\d+,\d+,\d+,\d+$)/,"rgba($1)"))}function C(t,e){var n=/(?:\s|^)(font_\d+)(?:\s|$)/g.exec(t.className);if(n){var i=e.fontGetter&&e.fontGetter(n[1]);return i?_.parseFontStr(i):void 0}}function w(t){var e=/(?:\s|^)(color_\d+)(?:\s|$)/g.exec(t.className);if(e)return e[1]}function T(e){var n=/^{(color_\d+)}$/.exec(t.get(e,"color"));if(n)return n[1]}function b(t,e,n){var i=w(t)||T(e);if(i){var o=n.colorGetter&&n.colorGetter(i);return o||void 0}}function S(e,n){var i=C(e,n),o=b(e,i,n);return{fontSize:s(t.get(i,"size")),fontName:r(t.get(i,"family")),color:a(o)}}function M(e){var n=t(e.style).pick(["fontSize","fontFamily","color"]).omitBy(t.isEmpty).value();return{fontSize:s(n.fontSize),fontName:r(n.fontFamily),color:a(n.color)}}function k(e,n,i,o){var s=t.defaults(M(e),S(e,o),n);t.forEach(e.children,t.partial(k,t,s,i,o)),t.invokeMap(i,"call",null,e,s)}function L(t,e,n){k(t,{characterCount:t.textContent.length},e,n)}function A(e){var n=[];return e.overrideColor?n.push(t.partial(x,t,t,e)):e.brightness&&1!==parseFloat(e.brightness)&&n.push(t.partial(v,t,t,e)),e.scale&&n.push(t.partial(u,t,t,e)),e.fixMigratedStyle&&n.push(t.partial(c,t,t,e)),n}function F(){return I.document.createDocumentFragment().appendChild(I.document.createElement("div"))}function P(e,n){var i=A(n);if(0===i.length)return e;var o=F();return o.innerHTML=e,t.forEach(o.children,t.partial(L,t,i,n)),o.innerHTML}var _=n.cssUtils,I=n.fragment;return"undefined"!=typeof window&&window.addEventListener("message",function(e){"show-always"===e.data&&(window.showAlways=!window.showAlways,t.forEach(window.document.getElementsByClassName("text-info-n47t"),function(t){window.showAlways?t.classList.add("show-always"):t.classList.remove("show-always")}))}),{applyMobileAdjustments:P,applyTextStyleMigrationAdjustments:function(t,e){return P(t,{fontGetter:e,fixMigratedStyle:!0})}}}),define("textCommon/utils/textComponentsUtils",["lodash","coreUtils","textCommon/utils/textTransforms","experiment","textCommon/utils/filterHtmlString"],function(t,e,n,i,o){function s(e,n,i,s,r){var a=t.transform(n,function(t,e){t["#"+e.id]=e},{});return e.replace(/<a ([^>]*)dataquery="([^"]+)"([^>]*)>/g,function(e,n,l,u){var c=s?i(a[l],s,r):i(a[l]);return o("<a "+n+t.map(c,function(t,e){return e+'="'+t+'"'}).join(" ")+u+">")})}function r(t,e){return e.isMobileView?t=n.applyMobileAdjustments(t,e):t}function a(t,e){return n.applyTextStyleMigrationAdjustments(t,e)}function l(t){var e=u.getIncludedPatterns(i,t.isMobileView);return u.generateAnchorsInHtml(t.htmlContent,e)}var u=e.anchorTagsGenerator;return{convertDataQueryLinksIntoHtmlAnchors:s,mobileTextTransformIfNeeded:r,createImpliedLinks:l,applyTextStyleMigrationAdjustments:a}}),define("textCommon",["textCommon/mixins/textCompMixin","textCommon/mixins/textScaleMixin","textCommon/mixins/baseTextInput","textCommon/utils/textComponentsUtils"],function(t,e,n,i){return{textCompMixin:t,textScaleMixin:e,textComponentsUtils:i,baseTextInput:n}});
//# sourceMappingURL=textCommon.min.js.map