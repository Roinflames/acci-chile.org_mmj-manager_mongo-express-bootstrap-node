"use strict";define("formCommon/bi/errors.json",[],function(){return{FORM_SUBMIT_FAILURE:{errorCode:101027,severity:"error",params:{p1:"componentId",p2:"componentType",p3:"errorDesc",p4:"response"}},FORM_SUBMIT_FINAL_FALLBACK:{errorCode:101028,severity:"fatal",params:{p1:"componentId",p2:"componentType",p3:"errorDesc",p4:"response"}},FORM_SUBMIT_INVALID_EMAIL:{errorCode:101029,severity:"error",params:{p1:"email"}}}}),define("formCommon/bi/errors",["formCommon/bi/errors.json","lodash","utils"],function(e,t,s){return t.forEach(e,function(e,t){e.errorName=t}),s.logger.register("forms","error",e),e}),define("formCommon/bi/events.json",[],function(){return{FORM_SUBMIT:{eventId:100,adapter:"ugc-viewer",params:{c1:"componentId",c2:"componentType"}},FORM_SUBMIT_SUCCESS:{eventId:367,adapter:"ugc-viewer",params:{component_id:"componentId",component_type:"componentType"}}}}),define("formCommon/bi/events",["formCommon/bi/events.json","utils"],function(e,t){return t.logger.register("components","event",e),e}),define("formCommon/mixins/formMixin",["lodash","santaProps","core","utils","formCommon/bi/errors","formCommon/bi/events","reactDOM","react"],function(e,t,s,i,o,r,n,a){function p(e,t,s,i,o,r,n,a,p,l,c){return c?{metaSiteId:r||"dc853130-4fb2-464f-878d-3b6667dc4f97",to:[{address:s,name:s}],bcc:i?{address:i,name:i}:null,from:{address:e,name:t},contactPhone:a,contactAddress:l,formSubject:p,formMessage:n}:{to:[{address:s,personal:s}],bcc:i?[{address:i||"n/a",personal:i||"n/a"}]:[],cc:[],from:{address:e,personal:t},subject:o,metaSiteId:r||"dc853130-4fb2-464f-878d-3b6667dc4f97",plainTextMessage:"n/a"}}function l(t,s,i){var o=new Date,r={todayDate:"<%=todayDay%> <%=todayMonthName%>, <%=todayYear%>",singleField:'<li style="list-style: none; margin: 0 0 5px 0; padding: 0;"><b><%=fieldKey%></b> <%=fieldValue%></li>',outerMessage:'<ul style="list-style: none; margin: 0; padding: 0;"><li style="list-style: none; margin: 0 0 5px 0; padding: 0;"><b><%=title%></b></li><li style="list-style: none; margin: 0 0 15px 0; padding: 0;"><%=via%> <%=websiteUrl%></li><li style="list-style: none; margin: 0 0 5px 0; padding: 0;"><b><%=details%></b></li><li style="list-style: none; margin: 0 0 25px 0; padding: 0;"><ul style="margin: 0 0 0 20px; padding: 0;"><%=fields%></ul></li><li style="list-style: none; margin: 0 0 15px 0; padding: 0;"><b><%=sentOn%></b> <%=dateToday%></li><li style="list-style: none; margin: 0; padding: 0;"><%=thanks%></li></ul>'};return e.template(r.outerMessage)({title:this.translatedKeys.title,via:this.translatedKeys.via,websiteUrl:s,details:this.translatedKeys.details,fields:e.reduce(t,function(t,s,i){return t+e.template(r.singleField)({fieldKey:i,fieldValue:s})},""),sentOn:this.translatedKeys.sentOn,dateToday:e.template(r.todayDate)({todayDay:o.getDate(),todayMonthName:U.getMonthName(o.getMonth()),todayYear:o.getFullYear()}),thanks:this.translatedKeys["thanks"+(i?"_premium":"")]})}function c(){var e,t,s=this.props.isPremiumUser,i=this.getFormFields.call(this),o=this.props.compData.toEmailAddress,r=this.props.compData.bccEmailAddress,n=this.getInputName(),a=this.props.metaSiteId,c=this.props.isExperimentOpen("sendContactFormEmailsViaPong");if(i.newModel){var d=function(e){return(i.data.getAll(e)[0]||{}).value};t=i.data.displayed,e=p(d("email"),n,o,r,this.translatedKeys["subject"+(s?"_premium":"")]+" "+d("email"),a,d("message"),d("phone"),d("subject"),d("address"),c)}else t=i,e=p(this.state.email.value,n,o,r,this.translatedKeys["subject"+(s?"_premium":"")]+" "+(i.email||i.Email||i[this.props.compData.emailFieldLabel]),a,this.state.message&&this.state.message.value,this.state.phone&&this.state.phone.value,this.state.subject&&this.state.subject.value,this.state.address&&this.state.address.value,c);return c?(e.fields=t,e):(e.htmlMessage=l.call(this,t,this.props.externalBaseUrl||"",s),e)}function d(e,t){var s=t?D:C;if(!e){var o=window.location.protocol+"//"+window.location.hostname,r=F.getCookie(x);return"{{site}}{{service}}{{secured}}?accept=json&contentType=json&appUrl={{site}}{{cookie}}".replace(/\{\{site\}\}/g,o).replace("{{service}}",s).replace("{{cookie}}",r).replace("{{secured}}","Secured")}var n=i.urlUtils.parseUrl(e);return n.protocol+"//"+n.host+s+"?accept=json&contentType=json&appUrl="+n.protocol+"//"+n.hostname}function m(){return B+C+"?accept=json&contentType=json&appUrl="+B}function u(e,t,i,o){var r=s.activityTypes[e];r&&s.activityService.reportActivity(new r(i,t,o))}function h(e){return e.ignoreActivityReport||e.isTemplate}function y(){var e=this.props.compData.successMessage||this.translatedKeys.successMessage;this.showMessage(e)}function f(){var t=this.props.compData.link;if(t){var s=i.linkRenderer.renderLink(t,this.props.linkRenderInfo,this.props.rootNavigationInfo),o=i.wixUrlParser.parseUrl(this.props.linkRenderInfo,i.linkRenderer.getLinkUrlFromLinkProps(s));if(o){var r=t.anchorDataId;e.assign(o,{anchorData:r}),o.pageId===this.props.rootNavigationInfo.pageId?r&&this.props.scrollToAnchor(r):this.props.navigateToPage(o)}}}function g(e){this.props.reportBI(r.FORM_SUBMIT_SUCCESS,{componentId:this.props.id,componentType:this.props.structure.componentType}),this.setState({mailSent:!0}),"message"===this.props.compData.onSubmitBehavior?y.call(this):f.call(this),h(this.props)||u(e,this.getFieldsForActivityReporting(),this.props.activityInfo,this.getFieldLabels()),v.call(this),this.isBusy=!1}function b(t,s){this.shouldSubmitFallbackRequest&&e.includes(_,s)?(this.props.reportBI(o.FORM_SUBMIT_FAILURE,{componentId:this.props.id,componentType:this.props.structure.componentType,errorDesc:"Unspecified error occurred, possibly a connection problem, fallback activated",response:JSON.stringify(t)}),M.call(this)):(this.props.reportBI(o.FORM_SUBMIT_FINAL_FALLBACK,{componentId:this.props.id,componentType:this.props.structure.componentType,errorDesc:"Error occurred in Fallback Request",response:JSON.stringify(t)}),this.setState({mailSent:!1}),this.showMessage(this.translatedKeys.error,!0),this.isBusy=!1)}function v(){this.setState(this.getCleanFormState())}function T(e){return e?3e4:8e3}function I(){if(this.shouldBlockSubmit&&this.shouldBlockSubmit())this.blockSubmit(n.findDOMNode(this));else{var e=this.props.compData.toEmailAddress;if(e&&"a33012eff368a577d48f52f310c92140"!==e||this.props.reportBI(o.FORM_SUBMIT_INVALID_EMAIL,{email:e}),!this.isBusy&&this.isFormValid()){this.shouldSubmitFallbackRequest=!0,this.isBusy=!0,"message"===this.props.compData.onSubmitBehavior&&this.showMessage(this.translatedKeys.submitting),this.props.reportBI(r.FORM_SUBMIT,{componentId:this.props.id,componentType:this.props.structure.componentType});var t=this.props.isExperimentOpen("sendContactFormEmailsViaPong"),s=this.props.isExperimentOpen("longer_timeouts_pong"),i=c.call(this);k.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",url:d(this.props.externalBaseUrl||"",t),data:JSON.stringify(i),success:g.bind(this,this.getActivityName()),error:b.bind(this),timeout:T(s)})}}}function M(){this.shouldSubmitFallbackRequest=!1;var e=c.call(this);k.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",url:m(),data:JSON.stringify(e),success:g.bind(this,this.getActivityName()),error:b.bind(this)})}function R(e,t){return i.wixUserApi.getLanguage(e,t).toLowerCase()||"en"}var S=s.compMixins,F=i.cookieUtils,U=i.dateTimeUtils,k=i.ajaxLibrary,x="wixClient",C="/_api/wix-common-services-webapp/notification/invoke",B="https://fallback.wix.com",D="/_api/crm-inbox-server/pong/message",_=["abort","timeout"];return{mixins:[S.skinBasedComp,S.timeoutsMixin],propTypes:{id:t.Types.Component.id.isRequired,structure:t.Types.Component.structure.isRequired,compData:t.Types.Component.compData.isRequired,rootNavigationInfo:t.Types.Component.rootNavigationInfo.isRequired,shouldResetComponent:t.Types.RenderFlags.shouldResetComponent.isRequired,cookie:t.Types.RequestModel.cookie.isRequired,currentUrl:t.Types.currentUrl.isRequired,isMobileView:t.Types.isMobileView.isRequired,isPremiumUser:t.Types.isPremiumUser.isRequired,isTemplate:t.Types.isTemplate.isRequired,metaSiteId:t.Types.RendererModel.metaSiteId.isRequired,externalBaseUrl:t.Types.PublicModel.externalBaseUrl,scrollToAnchor:t.Types.scrollToAnchor.isRequired,navigateToPage:t.Types.navigateToPage.isRequired,reportBI:t.Types.reportBI.isRequired,linkRenderInfo:t.Types.Link.linkRenderInfo.isRequired,activityInfo:t.Types.Activity.activityInfo,ignoreActivityReport:a.PropTypes.bool,isExperimentOpen:t.Types.isExperimentOpen},getInitialState:function(){return this.shouldResetFields=this.props.shouldResetComponent,this.translatedKeys=this.getLangKeys(R(this.props.cookie,this.props.currentUrl)),this.translatedKeys.submitting="…",e.merge(this.getFormInitialState(),{$mob:this.props.isMobileView?"mobile":"desktop",$dir:this.props.compData.textDirection||"left"})},showMessage:function(e,t){this.setState({notifications:{message:e,error:!!t}})},componentWillReceiveProps:function(e){var t=this.props.shouldResetComponent;t&&t!==this.shouldResetFields&&v.call(this),this.shouldResetFields=t,this.setState({$mob:e.isMobileView?"mobile":"desktop",$dir:e.compData.textDirection||"left"})},getSkinProperties:function(){return this.state.notifications.message&&this.registerReLayout(),e.merge(this.getFormSkinProperties(this.translatedKeys),{"":{style:{height:"inherit"}},submit:{onClick:I.bind(this),children:this.props.compData.submitButtonLabel||"Send"}})}}}),define("formCommon",["formCommon/mixins/formMixin"],function(e){return{formMixin:e}});
//# sourceMappingURL=formCommon.min.js.map