import{r as p,aK as st,aR as _,b as I,C as $,_ as v,g as F,a as lt,j as V}from"./index-33b2785e.js";import{$ as ut,a9 as X,g as ct,a as dt,s as pt,d as ft,e as vt,a7 as Et,a8 as ht,c as K,a5 as mt,b as xt,u as gt}from"./index.esm-77ed05ce.js";function Ut(...e){return e.reduce((o,a)=>a==null?o:function(...n){o.apply(this,n),a.apply(this,n)},()=>{})}function Lt(e,o=166){let a;function r(...n){const t=()=>{e.apply(this,n)};clearTimeout(a),a=setTimeout(t,o)}return r.clear=()=>{clearTimeout(a)},r}function yt(e){return e&&e.ownerDocument||document}function Gt(e){return yt(e).defaultView||window}let j=0;function Tt(e){const[o,a]=p.useState(e),r=e||o;return p.useEffect(()=>{o==null&&(j+=1,a(`mui-${j}`))},[o]),r}const A=st["useId".toString()];function Ft(e){if(A!==void 0){const o=A();return e??o}return Tt(e)}function jt({controlled:e,default:o,name:a,state:r="value"}){const{current:n}=p.useRef(e!==void 0),[t,i]=p.useState(o),s=n?e:t,l=p.useCallback(c=>{n||i(c)},[]);return[s,l]}const bt=e=>{let o;return e<1?o=5.11916*e**2:o=4.5*Math.log(e+1)+2,(o/100).toFixed(2)},q=bt,H={disabled:!1};var St=function(o){return o.scrollTop},P="unmounted",y="exited",T="entering",N="entered",L="exiting",E=function(e){ut(o,e);function o(r,n){var t;t=e.call(this,r,n)||this;var i=n,s=i&&!i.isMounting?r.enter:r.appear,l;return t.appearStatus=null,r.in?s?(l=y,t.appearStatus=T):l=N:r.unmountOnExit||r.mountOnEnter?l=P:l=y,t.state={status:l},t.nextCallback=null,t}o.getDerivedStateFromProps=function(n,t){var i=n.in;return i&&t.status===P?{status:y}:null};var a=o.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(n){var t=null;if(n!==this.props){var i=this.state.status;this.props.in?i!==T&&i!==N&&(t=T):(i===T||i===N)&&(t=L)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var n=this.props.timeout,t,i,s;return t=i=s=n,n!=null&&typeof n!="number"&&(t=n.exit,i=n.enter,s=n.appear!==void 0?n.appear:i),{exit:t,enter:i,appear:s}},a.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===T){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:_.findDOMNode(this);i&&St(i)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===y&&this.setState({status:P})},a.performEnter=function(n){var t=this,i=this.props.enter,s=this.context?this.context.isMounting:n,l=this.props.nodeRef?[s]:[_.findDOMNode(this),s],c=l[0],d=l[1],h=this.getTimeouts(),O=s?h.appear:h.enter;if(!n&&!i||H.disabled){this.safeSetState({status:N},function(){t.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:T},function(){t.props.onEntering(c,d),t.onTransitionEnd(O,function(){t.safeSetState({status:N},function(){t.props.onEntered(c,d)})})})},a.performExit=function(){var n=this,t=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:_.findDOMNode(this);if(!t||H.disabled){this.safeSetState({status:y},function(){n.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:L},function(){n.props.onExiting(s),n.onTransitionEnd(i.exit,function(){n.safeSetState({status:y},function(){n.props.onExited(s)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},a.setNextCallback=function(n){var t=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,t.nextCallback=null,n(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},a.onTransitionEnd=function(n,t){this.setNextCallback(t);var i=this.props.nodeRef?this.props.nodeRef.current:_.findDOMNode(this),s=n==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}n!=null&&setTimeout(this.nextCallback,n)},a.render=function(){var n=this.state.status;if(n===P)return null;var t=this.props,i=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var s=I(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return $.createElement(X.Provider,{value:null},typeof i=="function"?i(n,s):$.cloneElement($.Children.only(i),s))},o}($.Component);E.contextType=X;E.propTypes={};function R(){}E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:R,onEntering:R,onEntered:R,onExit:R,onExiting:R,onExited:R};E.UNMOUNTED=P;E.EXITED=y;E.ENTERING=T;E.ENTERED=N;E.EXITING=L;const Ct=E,Rt=e=>e.scrollTop;function W(e,o){var a,r;const{timeout:n,easing:t,style:i={}}=e;return{duration:(a=i.transitionDuration)!=null?a:typeof n=="number"?n:n[o.mode]||0,easing:(r=i.transitionTimingFunction)!=null?r:typeof t=="object"?t[o.mode]:t,delay:i.transitionDelay}}function Nt(e){return ct("MuiPaper",e)}dt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Pt=["className","component","elevation","square","variant"],Dt=e=>{const{square:o,elevation:a,variant:r,classes:n}=e,t={root:["root",r,!o&&"rounded",r==="elevation"&&`elevation${a}`]};return vt(t,Nt,n)},kt=pt("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,o[a.variant],!a.square&&o.rounded,a.variant==="elevation"&&o[`elevation${a.elevation}`]]}})(({theme:e,ownerState:o})=>{var a;return v({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},o.variant==="elevation"&&v({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${F("#fff",q(o.elevation))}, ${F("#fff",q(o.elevation))})`},e.vars&&{backgroundImage:(a=e.vars.overlays)==null?void 0:a[o.elevation]}))}),_t=p.forwardRef(function(o,a){const r=lt({props:o,name:"MuiPaper"}),{className:n,component:t="div",elevation:i=1,square:s=!1,variant:l="elevation"}=r,c=I(r,Pt),d=v({},r,{component:t,elevation:i,square:s,variant:l}),h=Dt(d);return V.jsx(kt,v({as:t,ownerState:d,className:ft(h.root,n),ref:a},c))}),At=_t,$t=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function qt(e){var o;const{elementType:a,externalSlotProps:r,ownerState:n,skipResolvingSlotProps:t=!1}=e,i=I(e,$t),s=t?{}:Et(r,n),{props:l,internalRef:c}=ht(v({},i,{externalSlotProps:s})),d=K(c,s==null?void 0:s.ref,(o=e.additionalProps)==null?void 0:o.ref);return mt(a,v({},l,{ref:d}),n)}const It=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function G(e){return`scale(${e}, ${e**2})`}const Ot={entering:{opacity:1,transform:G(1)},entered:{opacity:1,transform:"none"}},U=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),z=p.forwardRef(function(o,a){const{addEndListener:r,appear:n=!0,children:t,easing:i,in:s,onEnter:l,onEntered:c,onEntering:d,onExit:h,onExited:O,onExiting:B,style:w,timeout:g="auto",TransitionComponent:J=Ct}=o,Q=I(o,It),Y=xt(),M=p.useRef(),b=gt(),D=p.useRef(null),Z=K(D,t.ref,a),S=u=>m=>{if(u){const x=D.current;m===void 0?u(x):u(x,m)}},tt=S(d),et=S((u,m)=>{Rt(u);const{duration:x,delay:k,easing:f}=W({style:w,timeout:g,easing:i},{mode:"enter"});let C;g==="auto"?(C=b.transitions.getAutoHeightDuration(u.clientHeight),M.current=C):C=x,u.style.transition=[b.transitions.create("opacity",{duration:C,delay:k}),b.transitions.create("transform",{duration:U?C:C*.666,delay:k,easing:f})].join(","),l&&l(u,m)}),nt=S(c),ot=S(B),it=S(u=>{const{duration:m,delay:x,easing:k}=W({style:w,timeout:g,easing:i},{mode:"exit"});let f;g==="auto"?(f=b.transitions.getAutoHeightDuration(u.clientHeight),M.current=f):f=m,u.style.transition=[b.transitions.create("opacity",{duration:f,delay:x}),b.transitions.create("transform",{duration:U?f:f*.666,delay:U?x:x||f*.333,easing:k})].join(","),u.style.opacity=0,u.style.transform=G(.75),h&&h(u)}),at=S(O),rt=u=>{g==="auto"&&Y.start(M.current||0,u),r&&r(D.current,u)};return V.jsx(J,v({appear:n,in:s,nodeRef:D,onEnter:et,onEntered:nt,onEntering:tt,onExit:it,onExited:at,onExiting:ot,addEndListener:rt,timeout:g==="auto"?null:g},Q,{children:(u,m)=>p.cloneElement(t,v({style:v({opacity:0,transform:G(.75),visibility:u==="exited"&&!s?"hidden":void 0},Ot[u],w,t.props.style),ref:Z},m))}))});z.muiSupportAuto=!0;const Ht=z;export{Ht as G,At as P,Ct as T,qt as a,Gt as b,Ut as c,Lt as d,Ft as e,St as f,W as g,yt as o,Rt as r,jt as u};
