import{m as u,B as p,H as g,P as h,W as l,R as _,C as f,n as d}from"./index-8adf53f4.js";import{_ as v}from"./WebcamNozzleCrosshair-ba331bbe.js";import{l as w,m as b,q as S}from"./vuetify-f4a6879d.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-ff51454d.js";var C=Object.defineProperty,y=Object.getOwnPropertyDescriptor,n=(e,t,s,i)=>{for(var r=i>1?void 0:i?y(t,s):t,o=e.length-1,m;o>=0;o--)(m=e[o])&&(r=(i?m(t,s,r):m(r))||r);return i&&r&&C(t,s,r),r};let a=class extends u(p,g){constructor(){super(...arguments),this.isVisibleDocument=!0,this.isVisibleViewport=!1,this.status="connecting",this.statusMessage="",this.timer=null,this.request_start_time=performance.now(),this.time=0,this.request_time=0,this.request_time_smoothing=.2,this.currentFPS=null,this.fpsTimer=null,this.frames=0,this.aspectRatio=null}get webcamStyle(){var s,i,r;const t={transform:this.generateTransform((s=this.camSettings.flip_horizontal)!=null?s:!1,(i=this.camSettings.flip_vertical)!=null?i:!1,(r=this.camSettings.rotation)!=null?r:0),aspectRatio:1.7777777777777777,maxHeight:window.innerHeight-155+"px",maxWidth:"auto"};if(this.aspectRatio&&(t.aspectRatio=this.aspectRatio,t.maxWidth=(window.innerHeight-155)*this.aspectRatio+"px"),this.aspectRatio&&[90,270].includes(this.camSettings.rotation)){t.transform==="none"&&(t.transform="");const o=1/this.aspectRatio;t.transform+=" rotate("+this.camSettings.rotation+"deg) scale("+o+")"}return t}get fpsOutput(){return this.currentFPS===null?"--":this.currentFPS<10?"0"+this.currentFPS.toString():this.currentFPS}get showFpsCounter(){var t,s;return this.showFps?!((s=(t=this.camSettings.extra_data)==null?void 0:t.hideFps)!=null&&s):!1}get url(){var t;return this.convertUrl((t=this.camSettings)==null?void 0:t.snapshot_url,this.printerUrl)}get isVisible(){return this.isVisibleDocument&&this.isVisibleViewport}get showNozzleCrosshair(){var s,i;return((i=(s=this.camSettings.extra_data)==null?void 0:s.nozzleCrosshair)!=null?i:!1)&&this.status==="connected"}mounted(){document.addEventListener("visibilitychange",this.documentVisibilityChanged)}beforeDestroy(){document.removeEventListener("visibilitychange",this.documentVisibilityChanged),this.stopStream()}documentVisibilityChanged(){const t=document.visibilityState;this.isVisibleDocument=t==="visible"}viewportVisibilityChanged(t){this.isVisibleViewport=t}isVisibleChanged(t){if(t){this.startStream();return}this.stopStream()}refreshFrame(){if(!this.isVisible)return;this.timer!==null&&(window.clearTimeout(this.timer),this.timer=null);const t=new URL(this.url);t.searchParams.append("bypassCache",new Date().getTime().toString()),this.image.src=t.toString(),this.request_start_time=performance.now()}onLoad(){this.status!=="connected"&&(this.status="connected",this.statusMessage=""),this.frames++,this.aspectRatio===null&&(this.aspectRatio=this.image.naturalWidth/this.image.naturalHeight);const s=1e3/(this.camSettings.target_fps||10),i=performance.now()-this.request_start_time;this.request_time=this.request_time*this.request_time_smoothing+i*(1-this.request_time_smoothing);const r=Math.max(0,s-this.request_time);this.timer=window.setTimeout(this.refreshFrame,r)}onError(){this.status="error",this.statusMessage=this.$t("Panels.WebcamPanel.ErrorWhileConnecting",{url:this.url}).toString(),this.timer===null&&(this.timer=window.setTimeout(this.refreshFrame,1e3))}startStream(){this.isVisible&&(this.status!=="connected"&&(this.status="connecting",this.statusMessage=this.$t("Panels.WebcamPanel.ConnectingTo",{url:this.url}).toString()),this.clearTimers(),this.fpsTimer=window.setInterval(()=>{this.currentFPS=this.frames,this.frames=0},1e3),this.refreshFrame())}stopStream(){this.clearTimers()}clearTimers(){this.timer&&(window.clearTimeout(this.timer),this.timer=null),this.fpsTimer&&(window.clearTimeout(this.fpsTimer),this.fpsTimer=null,this.frames=0)}camSettingsChanged(){this.aspectRatio=null,this.stopStream(),this.status="connecting",this.startStream()}};n([h({required:!0})],a.prototype,"camSettings",2);n([h({default:null})],a.prototype,"printerUrl",2);n([h({default:!0})],a.prototype,"showFps",2);n([_("image")],a.prototype,"image",2);n([l("isVisible",{immediate:!0})],a.prototype,"isVisibleChanged",1);n([l("camSettings",{deep:!0})],a.prototype,"camSettingsChanged",1);a=n([f],a);var x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.viewportVisibilityChanged,expression:"viewportVisibilityChanged"}],staticClass:"d-flex justify-center webcamBackground"},[s("img",{directives:[{name:"show",rawName:"v-show",value:e.status==="connected",expression:"status === 'connected'"}],ref:"image",staticClass:"webcamImage",style:e.webcamStyle,attrs:{draggable:"false",alt:e.camSettings.name,src:"#"},on:{error:e.onError,load:e.onLoad}}),e.status==="connected"&&e.showFpsCounter?s("span",{staticClass:"webcamFpsOutput"},[e._v(" "+e._s(e.$t("Panels.WebcamPanel.FPS"))+": "+e._s(e.fpsOutput)+" ")]):e._e(),e.showNozzleCrosshair?s(v,{attrs:{webcam:e.camSettings}}):e._e(),e.status!=="connected"?s(w,[s(b,{staticClass:"_webcam_mjpegstreamer_output text-center d-flex flex-column justify-center align-center"},[e.status==="connecting"?s(S,{staticClass:"mb-3",attrs:{indeterminate:"",color:"primary"}}):e._e(),s("span",{staticClass:"mt-3"},[e._v(e._s(e.statusMessage))])],1)],1):e._e()],1)},V=[];const c={};var F=d(a,x,V,!1,P,"63b0a372",null,null);function P(e){for(let t in c)this[t]=c[t]}const W=function(){return F.exports}();export{W as default};