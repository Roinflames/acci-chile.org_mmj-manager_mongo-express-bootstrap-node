"use strict";define("itunesButton",["lodash","react","core","utils","santaProps"],function(e,o,r,t,s){function n(e,r){var t={parentConst:o.DOM.a,target:e.openIn};return r.downloadUrl&&(t.href=r.downloadUrl),t}function p(e,o,r){return"userLang"===e?t.wixUserApi.getLanguage(o,r):e}function i(o,r,t,s){var n=a(s);return o=p(o,r,t),e.includes(l,o)||(o="en"),n.replace(u,o.toUpperCase())}function a(e){return t.media.getMediaUrl(e,c)}var u="{{langCode}}",c="itunesButton/iTunesBtn_"+u+".svg",l=["da","de","en","es","fr","it","jp","ko","nl","no","pl","pt","ru","sv","tr"];return{displayName:"ItunesButton",mixins:[r.compMixins.skinBasedComp],propTypes:{compData:s.Types.Component.compData.isRequired,compProp:s.Types.Component.compProp.isRequired,cookie:s.Types.RequestModel.cookie.isRequired,currentUrl:s.Types.currentUrl.isRequired,santaBase:s.Types.santaBase.isRequired,serviceTopology:s.Types.ServiceTopology.serviceTopology},static:{useSantaTypes:!0},getSkinProperties:function(){return{downloadButton:n(this.props.compProp,this.props.compData),itunesImg:{src:i(this.props.compProp.language,this.props.cookie,this.props.currentUrl,this.props.serviceTopology)}}}}});
//# sourceMappingURL=itunesButton.min.js.map