import{e as R,_ as m,r as x,a as M,b as w,j as p}from"./index-33b2785e.js";import{a as E,g as U,s as $,T as v,d as F,e as A}from"./index.esm-77ed05ce.js";import{u as D,f as W}from"./CustomSelect-091296db.js";import{S as z}from"./Stack-3c2152a3.js";function B(e){return U("MuiFormControlLabel",e)}const H=E("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),t=H,I=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],G=e=>{const{classes:o,disabled:l,labelPlacement:n,error:a,required:r}=e,d={root:["root",l&&"disabled",`labelPlacement${R(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return A(d,B,o)},J=$("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${t.label}`]:o.label},o.root,o[`labelPlacement${R(l.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>m({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),K=$("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${t.error}`]:{color:(e.vars||e).palette.error.main}})),O=x.forwardRef(function(o,l){var n,a;const r=M({props:o,name:"MuiFormControlLabel"}),{className:d,componentsProps:k={},control:i,disabled:P,disableTypography:q,label:j,labelPlacement:S="end",required:h,slotProps:T={}}=r,N=w(r,I),b=D(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=h??i.props.required,L={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(L[c]=r[c])});const _=W({props:r,muiFormControl:b,states:["error"]}),f=m({},r,{disabled:y,labelPlacement:S,required:u,error:_.error}),C=G(f),g=(a=T.typography)!=null?a:k.typography;let s=j;return s!=null&&s.type!==v&&!q&&(s=p.jsx(v,m({component:"span"},g,{className:F(C.label,g==null?void 0:g.className),children:s}))),p.jsxs(J,m({className:F(C.root,d),ownerState:f,ref:l},N,{children:[x.cloneElement(i,L),u?p.jsxs(z,{display:"block",children:[s,p.jsxs(K,{ownerState:f,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):s]}))}),Z=O;export{Z as F};
