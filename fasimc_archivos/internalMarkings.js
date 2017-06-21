"use strict";define("internalMarkings/wixAdsDesktop/wixAdsDesktop",["lodash","utils","core","react","santaProps"],function(e,i,s,o,t){function r(i){var s=i,o=["smallMusa","smallLogo","face","cap","spacer","emphasis","adFooterBox","siteBanner","bigMusa","txt","shd","wrapper","logoDot"];return e.forEach(o,function(e){s=s.split(e).join("wixAds_"+e)}),s||""}function n(i,s,o,t){var r=e.map(o,function(e){return e.name+"='"+e.escaped+"'"}).join(" ");i.push("<"+s+" "+r+(t?"/":"")+">")}function p(e,i){e.push("</"+i+">")}function a(e,i){e.push(i)}function l(e){var i=[];return u(e,{start:n.bind(null,i),end:p.bind(null,i),chars:a.bind(null,i)}),i.join("")}function d(){return this.props.isFacebookSite&&this.props.premiumFeatures.length>0}var u=i.htmlParser;return{displayName:"WixAdsDesktop",mixins:[s.compMixins.skinBasedComp],propTypes:{isZoomOpened:t.Types.isZoomOpened.isRequired,isFacebookSite:t.Types.isFacebookSite.isRequired,isAndroidOldBrowser:t.Types.mobile.isAndroidOldBrowser.isRequired,openPopup:t.Types.popup.open.isRequired,premiumFeatures:t.Types.RendererModel.premiumFeatures.isRequired,adData:o.PropTypes.shape({topLabel:o.PropTypes.string,topContent:o.PropTypes.string,footerLabel:o.PropTypes.string,adUrl:o.PropTypes.string})},statics:{useSantaTypes:!0},getInitialState:function(){return this.onAdClick=this.onPreviewAdClick||this.onViewerAdClick,{$viewerState:"desktop",$appType:this.props.isFacebookSite?"facebook":""}},getSkinProperties:function(){return{desktopWADTop:{onClick:this.onAdClick,style:{visibility:this.props.isZoomOpened||d.call(this)?"hidden":"visible"}},desktopWADTopLabel:{dangerouslySetInnerHTML:{__html:r(l(this.props.adData.topLabel))}},desktopWADTopContent:{dangerouslySetInnerHTML:{__html:r(l(this.props.adData.topContent))}},desktopWADBottom:{onClick:this.onAdClick,style:{visibility:this.props.isZoomOpened||d.call(this)?"hidden":"visible",display:"block !important"}},desktopWADBottomContent:{className:this.classSet({nativeAndroid:this.props.isAndroidOldBrowser}),dangerouslySetInnerHTML:{__html:r(l(this.props.adData.footerLabel))}}}},onViewerAdClick:function(){this.props.openPopup(this.props.adData.adUrl,"_blank")}}}),define("internalMarkings/wixAdsMobile/wixAdsMobile",["lodash","utils","core","react","santaProps"],function(e,i,s,o,t){return{displayName:"WixAdsMobile",mixins:[s.compMixins.skinBasedComp],propTypes:{isWixAdsAllowed:t.Types.RenderFlags.isWixAdsAllowed.isRequired,isZoomOpened:t.Types.isZoomOpened.isRequired,isMobileDevice:t.Types.Device.isMobileDevice.isRequired,isPortrait:t.Types.mobile.isPortrait.isRequired,isPremiumUser:t.Types.isPremiumUser.isRequired,staticMediaUrl:t.Types.ServiceTopology.staticMediaUrl.isRequired,currentUrl:t.Types.currentUrl.isRequired,navigateToUrl:t.Types.Navigation.href.isRequired,adData:o.PropTypes.shape({footerLabel:o.PropTypes.string,adUrl:o.PropTypes.string})},statics:{useSantaTypes:!0},getInitialState:function(){return this._onClickHandler=this.onClickOverridenHandler||this.onAdClick,{$viewerState:"mobile"}},shouldShowMobileWixAds:function(){var s=e(this.props.currentUrl.query).keys().find(function(e){return"showmobileview"===e.toLowerCase()}),o=i.stringUtils.isTrue(this.props.currentUrl.query[s]),t=this.props.isWixAdsAllowed,r=this.props.isZoomOpened,n=!this.props.isMobileDevice||this.props.isPortrait(),p=!this.props.isPremiumUser&&t&&n&&!r;return o||p},getSkinProperties:function(){var e=this.shouldShowMobileWixAds(),i={display:e?"block":"none"};return{"":{style:{height:e?30:0}},mobileAd:{onClick:this._onClickHandler,style:i},mobileAdLink:{},mobileAdImg:{style:{height:e?30:0},src:this.props.staticMediaUrl+"/"+this.props.adData.footerLabel}}},onAdClick:function(){this.props.navigateToUrl(this.props.adData.adUrl)}}}),define("internalMarkings",["internalMarkings/wixAdsDesktop/wixAdsDesktop","internalMarkings/wixAdsMobile/wixAdsMobile"],function(e,i){return{wixAdsDesktop:e,wixAdsMobile:i}});
//# sourceMappingURL=internalMarkings.min.js.map