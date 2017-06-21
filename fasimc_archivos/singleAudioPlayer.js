"use strict";define("singleAudioPlayer",["lodash","react","reactDOM","core","santaProps","audioCommon"],function(t,e,i,s,o,a){var n=s.compMixins,r=function(t){return 0===t?0:Math.ceil(t/20)},u=function(t){return 20*t},l=function(t){var e=t/1e3,i=Math.floor(e/60),s=Math.floor(e%60);return(i<10?"0"+i:i)+":"+(s<10?"0"+s:s)},h=function(t,e,i){var s=(t.nativeEvent.offsetX?t.nativeEvent.offsetX:t.nativeEvent.layerX)/e;return Math.ceil(s*i)},c=function(t,e){"unmuted"===e?t.muteAudio():t.unmuteAudio()};return{displayName:"SingleAudioPlayer",mixins:[n.skinBasedComp,n.skinInfo,a.audioMixin],statics:{useSantaTypes:!0},propTypes:{compData:o.Types.Component.compData.isRequired,compProp:o.Types.Component.compProp.isRequired,styleId:o.Types.Component.styleId.isRequired},getInitialState:function(){return this.audioVolume=this.props.compProp.volume,this.autoPlay=this.props.compProp.autoplay,{$playerState:"waiting",$device:this.getDeviceState(),$isduration:"duration",$isMuted:"unmuted",trackDuration:"00:00",trackPositionLabel:"00:00",progressPosition:0,volumeBars:r(this.props.compProp.volume),dragging:!1,$heightChanged:!1}},finishedPlayingAudio:function(){this.isAudioPlaying=!1,this.props.compProp.loop?this.initiatePlay():(this.initiatePause(),this.setState({$playerState:"repeat"}))},whileLoadingHandler:function(t){var e=l(t);this.setState({trackDuration:e})},whilePlayingHandler:function(t){var e=l(t),i=t/this.getAudioDuration()*100;this.setState({trackPositionLabel:e,progressPosition:i})},getProgressBarWidth:function(){return i.findDOMNode(this.refs.progressbar).offsetWidth},resetTrackPosition:function(){this.setState({trackPositionLabel:"00:00",progressPosition:0})},movingProgressbarHandle:function(t){var e=this.getProgressBarWidth(),i=this.getSkinExports("barSpaceLeft").barSpaceLeft,s=this.getSkinExports("barSpaceRight").barSpaceRight,o=this.props.style.width,a=t.pageX,n=this.getAudioDuration(),r=a<i||a>o-s,u=h(t,e,n);r||(this.setState({trackPositionLabel:l(u),progressPosition:u/n*100}),this.seekAudio(u))},stoppedMovingProgressbarHandle:function(t){var e=this.getProgressBarWidth(),i=this.getAudioDuration(),s=h(t,e,i);this.setState({trackPositionLabel:l(s),progressPosition:s/i*100}),this.seekAudio(s)},callSeek:function(t){var e=this.getProgressBarWidth(),i=this.getAudioDuration(),s=h(t,e,i);this.seekAudio(s)},buildVolumeScale:function(){var i=this.props.styleId,s=this.state.volumeBars;return t.times(5,function(t){return e.DOM.li({className:t<s?i+"_on":i+"_off",onClick:this.setNonPersistentVolume,"data-index":t+1},e.DOM.div({className:i+"_colorBlock"}),e.DOM.div({className:i+"_colorBlank"}))}.bind(this))},callToggleMute:function(){c(this,this.state.$isMuted),"unmuted"===this.state.$isMuted?this.setState({$isMuted:"muted"}):this.setState({$isMuted:"unmuted"})},getTargetIndex:function(t){return t.getAttribute("data-index")},setNonPersistentVolume:function(t){var e=this.getTargetIndex(t.currentTarget);this.setState({volumeBars:e}),this.setVolume(u(e))},updateComponentHeight:function(t){return this.getSkinExports(t+"Height")[t+"Height"]},getSkinProperties:function(){return this.autoPlay=this.props.compProp.autoplay,this.updateAudioObject(),{"":{style:{height:this.updateComponentHeight(this.getDeviceState())}},sep:{children:" - "},sep2:{children:" / "},artistLabel:{children:this.props.compData.artist},trackLabel:{children:this.props.compData.track},playBtn:{onClick:this.initiatePlay},pauseBtn:{onClick:this.initiatePause},repeatBtn:{onClick:this.initiatePlay},bar:{onClick:this.callSeek},slider:{onClick:this.callSeek,style:{width:this.state.progressPosition+"%"}},handle:{onDrag:this.movingProgressbarHandle,onDragEnd:this.stoppedMovingProgressbarHandle,style:{cursor:"pointer",left:this.state.progressPosition+"%"},draggable:!0},volumeBtn:{onClick:this.callToggleMute},volumeScale:{children:this.buildVolumeScale()},trackDuration:{children:this.state.trackDuration},trackPosition:{children:this.state.trackPositionLabel}}}}});
//# sourceMappingURL=singleAudioPlayer.min.js.map