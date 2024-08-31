import{r as p,_ as b,a as S,b as w,j as e,e as B,l as se,g as H,i as ne,P as K}from"./index-33b2785e.js";import{B as oe}from"./Breadcrumb-ac18a331.js";import{P as ae}from"./PageContainer-3bff8604.js";import{m as Y}from"./mapbox-gl-fd1563e7.js";import{D as V}from"./DashboardCard-56d2437b.js";import{C as ie,_ as z}from"./react-apexcharts.min-b420d1b8.js";import{B as re}from"./BlankCard-904d32fe.js";import{g as k,a as D,s as T,d as $,e as E,u as G,B as j,T as f,G as m,O as le,S as ce}from"./index.esm-77ed05ce.js";import{C as de}from"./Chip-53e51d90.js";import{S as X}from"./Stack-3c2152a3.js";import{A as ue}from"./Avatar-5877fa00.js";import{b as pe}from"./Button-5375a383.js";import"./CustomSelect-091296db.js";import"./Grow-2601ff12.js";import"./ButtonBase-49a1dc58.js";import"./Card-4e02e502.js";import"./styled-c3323930.js";const fe=p.createContext(),Q=fe;function ge(t){return k("MuiTable",t)}D("MuiTable",["root","stickyHeader"]);const he=["className","component","padding","size","stickyHeader"],ye=t=>{const{classes:s,stickyHeader:n}=t;return E({root:["root",n&&"stickyHeader"]},ge,s)},xe=T("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>b({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":b({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},s.stickyHeader&&{borderCollapse:"separate"})),L="table",me=p.forwardRef(function(s,n){const o=S({props:s,name:"MuiTable"}),{className:c,component:i=L,padding:l="normal",size:r="medium",stickyHeader:u=!1}=o,g=w(o,he),a=b({},o,{component:i,padding:l,size:r,stickyHeader:u}),d=ye(a),h=p.useMemo(()=>({padding:l,size:r,stickyHeader:u}),[l,r,u]);return e.jsx(Q.Provider,{value:h,children:e.jsx(xe,b({as:i,role:i===L?null:"table",ref:n,className:$(d.root,c),ownerState:a},g))})}),be=me,Ce=p.createContext(),W=Ce;function ve(t){return k("MuiTableBody",t)}D("MuiTableBody",["root"]);const je=["className","component"],Te=t=>{const{classes:s}=t;return E({root:["root"]},ve,s)},Re=T("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-row-group"}),Be={variant:"body"},_="tbody",Se=p.forwardRef(function(s,n){const o=S({props:s,name:"MuiTableBody"}),{className:c,component:i=_}=o,l=w(o,je),r=b({},o,{component:i}),u=Te(r);return e.jsx(W.Provider,{value:Be,children:e.jsx(Re,b({className:$(u.root,c),as:i,ref:n,role:i===_?null:"rowgroup",ownerState:r},l))})}),we=Se;function ke(t){return k("MuiTableCell",t)}const De=D("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),$e=De,Ee=["align","className","component","padding","scope","size","sortDirection","variant"],Ne=t=>{const{classes:s,variant:n,align:o,padding:c,size:i,stickyHeader:l}=t,r={root:["root",n,l&&"stickyHeader",o!=="inherit"&&`align${B(o)}`,c!=="normal"&&`padding${B(c)}`,`size${B(i)}`]};return E(r,ke,s)},Me=T("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,s[n.variant],s[`size${B(n.size)}`],n.padding!=="normal"&&s[`padding${B(n.padding)}`],n.align!=="inherit"&&s[`align${B(n.align)}`],n.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>b({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?se(H(t.palette.divider,1),.88):ne(H(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},s.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},s.variant==="body"&&{color:(t.vars||t).palette.text.primary},s.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},s.size==="small"&&{padding:"6px 16px",[`&.${$e.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},s.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},s.padding==="none"&&{padding:0},s.align==="left"&&{textAlign:"left"},s.align==="center"&&{textAlign:"center"},s.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},s.align==="justify"&&{textAlign:"justify"},s.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),Pe=p.forwardRef(function(s,n){const o=S({props:s,name:"MuiTableCell"}),{align:c="inherit",className:i,component:l,padding:r,scope:u,size:g,sortDirection:a,variant:d}=o,h=w(o,Ee),y=p.useContext(Q),v=p.useContext(W),J=v&&v.variant==="head";let N;l?N=l:N=J?"th":"td";let A=u;N==="td"?A=void 0:!A&&J&&(A="col");const O=d||v&&v.variant,U=b({},o,{align:c,component:N,padding:r||(y&&y.padding?y.padding:"normal"),size:g||(y&&y.size?y.size:"medium"),sortDirection:a,stickyHeader:O==="head"&&y&&y.stickyHeader,variant:O}),te=Ne(U);let F=null;return a&&(F=a==="asc"?"ascending":"descending"),e.jsx(Me,b({as:N,ref:n,className:$(te.root,i),"aria-sort":F,scope:A,ownerState:U},h))}),x=Pe;function ze(t){return k("MuiTableContainer",t)}D("MuiTableContainer",["root"]);const Ae=["className","component"],He=t=>{const{classes:s}=t;return E({root:["root"]},ze,s)},We=T("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,s)=>s.root})({width:"100%",overflowX:"auto"}),Ke=p.forwardRef(function(s,n){const o=S({props:s,name:"MuiTableContainer"}),{className:c,component:i="div"}=o,l=w(o,Ae),r=b({},o,{component:i}),u=He(r);return e.jsx(We,b({ref:n,as:i,className:$(u.root,c),ownerState:r},l))}),Ge=Ke;function Je(t){return k("MuiTableHead",t)}D("MuiTableHead",["root"]);const Oe=["className","component"],Ue=t=>{const{classes:s}=t;return E({root:["root"]},Je,s)},Fe=T("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-header-group"}),Le={variant:"head"},q="thead",_e=p.forwardRef(function(s,n){const o=S({props:s,name:"MuiTableHead"}),{className:c,component:i=q}=o,l=w(o,Oe),r=b({},o,{component:i}),u=Ue(r);return e.jsx(W.Provider,{value:Le,children:e.jsx(Fe,b({as:i,className:$(u.root,c),ref:n,role:i===q?null:"rowgroup",ownerState:r},l))})}),qe=_e;function Ie(t){return k("MuiTableRow",t)}const Ze=D("MuiTableRow",["root","selected","hover","head","footer"]),I=Ze,Ye=["className","component","hover","selected"],Ve=t=>{const{classes:s,selected:n,hover:o,head:c,footer:i}=t;return E({root:["root",n&&"selected",o&&"hover",c&&"head",i&&"footer"]},Ie,s)},Xe=T("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.head&&s.head,n.footer&&s.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${I.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${I.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:H(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:H(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),Z="tr",Qe=p.forwardRef(function(s,n){const o=S({props:s,name:"MuiTableRow"}),{className:c,component:i=Z,hover:l=!1,selected:r=!1}=o,u=w(o,Ye),g=p.useContext(W),a=b({},o,{component:i,hover:l,selected:r,head:g&&g.variant==="head",footer:g&&g.variant==="footer"}),d=Ve(a);return e.jsx(Xe,b({as:i,ref:n,className:$(d.root,c),role:i===Z?null:"row",ownerState:a},u))}),M=Qe,R=({title:t,value:s,chartData:n,unit:o,businessDistrictName:c})=>{const i=G(),r=(a=>{if(a.length<2)return"0%";const d=a[a.length-2],h=a[a.length-1];return d===0?"N/A":`${((h-d)/d*100).toFixed(2)}%`})(n),u={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:i.palette.mode==="dark"?"#fff":"#adb0bb",toolbar:{show:!1},height:120,sparkline:{enabled:!1}},colors:["#3B80B2","#599BC8","#77ADD2","#97BEDC"],plotOptions:{bar:{borderRadius:4,columnWidth:"50%",distributed:!0,endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(a){return`${a} ${o}`},style:{fontSize:"10px",colors:[i.palette.mode==="dark"?"#fff":"#304758"],fontWeight:700},offsetY:-20},legend:{show:!1},grid:{show:!1},xaxis:{categories:["July","June","May","April"],labels:{show:!0,style:{fontSize:"10px",colors:i.palette.mode==="dark"?"#fff":"#304758"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{theme:i.palette.mode==="dark"?"dark":"light",y:{formatter:function(a){return`${a} ${o}`}}}},g=[{name:"",data:n}];return e.jsx(re,{children:e.jsxs(ie,{sx:{p:"30px"},children:[e.jsxs(j,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(f,{variant:"h5",children:t}),e.jsx(de,{label:c||"All",size:"small"})]}),e.jsxs(m,{container:!0,spacing:2,children:[e.jsxs(m,{item:!0,xs:12,children:[e.jsx(f,{variant:"h4",mt:3,fontWeight:600,children:s}),e.jsxs(X,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[e.jsx(ue,{sx:{bgcolor:r.startsWith("-")?"error.light":"success.light",width:20,height:20},children:r.startsWith("-")?e.jsx(le,{width:16,color:"#d32f2f"}):e.jsx(ce,{width:16,color:"#39b69a"})}),e.jsx(f,{variant:"subtitle2",color:"textSecondary",children:r})]})]}),e.jsxs(m,{item:!0,xs:12,children:[e.jsx(f,{mb:2,variant:"subtitle2",fontWeight:600,textAlign:"center",children:"Past Four Months"}),e.jsx(j,{mt:2,children:e.jsx(z,{options:u,series:g,type:"bar",height:"120px"})})]})]})]})})},C={"NG018.1":{name:"Jigawa North",revenueRequired:[3e9,325e7,35e8,375e7],revenueBilled:[275e7,3e9,325e7,38e8],collections:[215e7,23e8,245e7,26e8],energyDelivered:[35,37.5,40,42.5],energyBilled:[30,32.5,35,37.5],energyCollected:[25,27.5,30,32.5],ATCC:[55,56,57,58],billingEfficiency:[60,61,62,63],collectionEfficiency:[65,66,67,68]},"NG018.2":{name:"Jigawa South",revenueRequired:[3e9,325e7,35e8,375e7],revenueBilled:[275e7,3e9,325e7,38e8],collections:[215e7,23e8,245e7,26e8],energyDelivered:[35,37.5,40,42.5],energyBilled:[30,32.5,35,37.5],energyCollected:[25,27.5,30,32.5],ATCC:[55,56,57,58],billingEfficiency:[60,61,62,63],collectionEfficiency:[65,66,67,68]},"NG020.1":{name:"Kano Central",revenueRequired:[1e9,12e8,13e8,14e8],revenueBilled:[95e7,1e9,105e7,15e8],collections:[7e8,73e7,76e7,79e7],energyDelivered:[20,22,24,26],energyBilled:[18,20,22,24],energyCollected:[16,18,20,22],ATCC:[60,61,62,63],billingEfficiency:[65,66,67,68],collectionEfficiency:[70,71,72,73]},"NG020.2":{name:"Kano South",revenueRequired:[1e9,12e8,13e8,14e8],revenueBilled:[95e7,1e9,105e7,15e8],collections:[7e8,73e7,76e7,79e7],energyDelivered:[20,22,24,26],energyBilled:[18,20,22,24],energyCollected:[16,18,20,22],ATCC:[60,61,62,63],billingEfficiency:[65,66,67,68],collectionEfficiency:[70,71,72,73]},"NG020.3":{name:"Kano North",revenueRequired:[1e9,12e8,13e8,14e8],revenueBilled:[95e7,1e9,105e7,15e8],collections:[7e8,73e7,76e7,79e7],energyDelivered:[20,22,24,26],energyBilled:[18,20,22,24],energyCollected:[16,18,20,22],ATCC:[60,61,62,63],billingEfficiency:[65,66,67,68],collectionEfficiency:[70,71,72,73]},"NG020.4":{name:"Kano Industrial",revenueRequired:[1e9,12e8,13e8,14e8],revenueBilled:[95e7,1e9,105e7,15e8],collections:[7e8,73e7,76e7,79e7],energyDelivered:[20,22,24,26],energyBilled:[18,20,22,24],energyCollected:[16,18,20,22],ATCC:[60,61,62,63],billingEfficiency:[65,66,67,68],collectionEfficiency:[70,71,72,73]},"NG020.5":{name:"Kano East",revenueRequired:[1e9,12e8,13e8,14e8],revenueBilled:[95e7,1e9,105e7,15e8],collections:[7e8,73e7,76e7,79e7],energyDelivered:[20,22,24,26],energyBilled:[18,20,22,24],energyCollected:[16,18,20,22],ATCC:[60,61,62,63],billingEfficiency:[65,66,67,68],collectionEfficiency:[70,71,72,73]},"NG021.1":{name:"Katsina South",revenueRequired:[2e9,22e8,24e8,26e8],revenueBilled:[18e8,19e8,2e9,27e8],collections:[135e7,145e7,155e7,165e7],energyDelivered:[40,44,48,52],energyBilled:[36,40,44,48],energyCollected:[32,36,40,44],ATCC:[50,51,52,53],billingEfficiency:[55,56,57,58],collectionEfficiency:[60,61,62,63]},"NG021.2":{name:"Katsina Central",revenueRequired:[2e9,22e8,24e8,26e8],revenueBilled:[18e8,19e8,2e9,27e8],collections:[135e7,145e7,155e7,165e7],energyDelivered:[40,44,48,52],energyBilled:[36,40,44,48],energyCollected:[32,36,40,44],ATCC:[50,51,52,53],billingEfficiency:[55,56,57,58],collectionEfficiency:[60,61,62,63]},"NG021.3":{name:"Katsina North",revenueRequired:[2e9,22e8,24e8,26e8],revenueBilled:[18e8,19e8,2e9,27e8],collections:[135e7,145e7,155e7,165e7],energyDelivered:[40,44,48,52],energyBilled:[36,40,44,48],energyCollected:[32,36,40,44],ATCC:[50,51,52,53],billingEfficiency:[55,56,57,58],collectionEfficiency:[60,61,62,63]}};Y.accessToken="pk.eyJ1IjoiZHZvLXJlZ2lzIiwiYSI6ImNseXNsdzYzZTBsMTYycnM2bXY5dDh2M2sifQ.w7XKnvlxVxtWiYIFEVbz2g";const et=({selectedBusinessDistrict:t,onBusinessDistrictClick:s})=>{const[n,o]=p.useState(null),c=G(),i=c.palette.primary.main,l=p.useRef(null),r=p.useRef(null),u=8.582,g=12.075;return p.useEffect(()=>{if(!r.current){const a=new Y.Map({container:l.current,style:"mapbox://styles/dvo-regis/clyssb5i7002301pc2fajh6kt",center:[u,g],zoom:6.6});r.current=a,r.current.scrollZoom.disable(),a.touchZoomRotate.enable(),a.touchZoomRotate.enableRotation(),a.dragRotate.enable(),a.boxZoom.enable(),a.keyboard.enable(),a.on("load",()=>{a.addSource("states",{type:"geojson",data:"/assets/map-data/KEDCBUSINESSDISTRICTS.geojson"}),a.addLayer({id:"states-layer",type:"fill",source:"states",paint:{"fill-color":"#888888","fill-opacity":.5}}),a.on("click","states-layer",d=>{if(d.features.length>0){const y=d.features[0].properties.BusinessDistrict1Pcod;if(y){const v=C[y]||{name:"Unknown",energyDelivered:[0,0,0,0],energyBilled:[0,0,0,0],energyCollected:[0,0,0,0],ATCC:[0,0,0,0],billingEfficiency:[0,0,0,0],collectionEfficiency:[0,0,0,0]};o(v),s(v.name),a.setPaintProperty("states-layer","fill-color",["case",["==",["get","BusinessDistrict1Pcod"],y],i,"#888888"])}else console.error("Selected property code is undefined")}}),a.on("mouseenter","states-layer",()=>{a.getCanvas().style.cursor="pointer"}),a.on("mouseleave","states-layer",()=>{a.getCanvas().style.cursor=""})})}return()=>{}},[c,i,s]),p.useEffect(()=>{if(!r.current)return;const a=r.current,d=()=>{const h=Object.keys(C).find(y=>C[y].name===t);h?a.setPaintProperty("states-layer","fill-color",["case",["==",["get","BusinessDistrict1Pcod"],h],i,"#888888"]):a.setPaintProperty("states-layer","fill-color","#888888")};a.isStyleLoaded()?d():a.once("styledata",d)},[t,i]),p.useEffect(()=>{if(t){const a=Object.values(C).find(d=>d.name===t);o(a)}else o(null)},[t]),e.jsx(V,{title:"Financial Breakdown By Business District",subtitle:"Select a business district",children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{item:!0,xs:12,children:e.jsx(j,{className:"rounded-bars",bgcolor:"#f7f8f9",height:350,ref:l})}),n&&e.jsxs(e.Fragment,{children:[e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(R,{title:"Energy Delivered",value:`${n.energyDelivered[n.energyDelivered.length-1]} GWh`,chartData:n.energyDelivered,unit:"GWh",businessDistrictName:n.name})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(R,{title:"Energy Billed",value:`${n.energyBilled[n.energyBilled.length-1]} GWh`,chartData:n.energyBilled,unit:"GWh",businessDistrictName:n.name})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(R,{title:"Energy Collected",value:`${n.energyCollected[n.energyCollected.length-1]} GWh`,chartData:n.energyCollected,unit:"GWh",businessDistrictName:n.name})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(R,{title:"ATCC",value:`${n.ATCC[n.ATCC.length-1]}%`,chartData:n.ATCC,unit:"%",businessDistrictName:n.name})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(R,{title:"Billing Efficiency",value:`${n.billingEfficiency[n.billingEfficiency.length-1]}%`,chartData:n.billingEfficiency,unit:"%",businessDistrictName:n.name})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(R,{title:"Collection Efficiency",value:`${n.collectionEfficiency[n.collectionEfficiency.length-1]}%`,chartData:n.collectionEfficiency,unit:"%",businessDistrictName:n.name})})]})]})})},P=T(pe)(({theme:t})=>({borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderBottomLeftRadius:t.shape.borderRadius},"&:last-of-type":{borderTopRightRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius},"&:not(:first-of-type)":{marginLeft:"-1px"}})),ee=({onFilterChange:t,selectedState:s,selectedBusinessDistrict:n})=>{const[o,c]=p.useState(s),[i,l]=p.useState(n);p.useEffect(()=>{c(s)},[s]),p.useEffect(()=>{l(n)},[n]);const r=d=>{const h=o===d?"":d;c(h),t(h)},u=d=>{const h=i===d?"":d;l(h),t(h)},g=e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:o==="Kano"?"contained":"outlined",onClick:()=>r("Kano"),children:"Kano"}),e.jsx(P,{variant:o==="Katsina"?"contained":"outlined",onClick:()=>r("Katsina"),children:"Katsina"}),e.jsx(P,{variant:o==="Jigawa"?"contained":"outlined",onClick:()=>r("Jigawa"),children:"Jigawa"})]}),a={Kano:["Kano Central","Kano East","Kano Industrial","Kano North","Kano South"],Katsina:["Katsina Central","Katsina North","Katsina South"],Jigawa:["Jigawa North","Jigawa South"]};return e.jsx(X,{direction:"row",children:o?e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:"contained",onClick:()=>r(o),children:o}),a[o].map(d=>e.jsx(P,{variant:i===d?"contained":"outlined",onClick:()=>u(d),children:d},d))]}):g})};ee.propTypes={onFilterChange:K.func.isRequired,selectedState:K.string.isRequired,selectedBusinessDistrict:K.string.isRequired};const tt=()=>{const t=G(),s=t.palette.primary.main;t.palette.grey[300];const n=(r,u,g)=>({chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:t.palette.mode==="dark"?"#fff":"#000",toolbar:{show:!1},height:100,sparkline:{enabled:!1}},colors:[r],plotOptions:{bar:{borderRadius:3,columnWidth:"95%",endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:a=>g==="percentage"?a+"%":g==="naira"?"₦"+a+"k":a.toFixed(2),style:{fontSize:"8px",colors:[t.palette.mode==="dark"?"#fff":"#000"]},offsetY:-20},xaxis:{categories:["July","June","May","April"],labels:{style:{fontSize:"8px",fontWeight:600,colors:[t.palette.mode==="dark"?"#fff":"#000"]}}},yaxis:{show:!1},tooltip:{theme:t.palette.mode==="dark"?"dark":"light"}}),o=[{name:"Customer Response Rate",data:[63,58,68,63]}],c=[{name:"Customer Response Metric",data:[1.6,1.55,1.65,1.6]}],i=[{name:"Revenue Billed Per Customer",data:[90,85,95,90]}],l=[{name:"Collections Per Customer",data:[144,139,149,144]}];return e.jsx(V,{title:"Customer Metrics",children:e.jsx(Ge,{children:e.jsxs(be,{"aria-label":"simple table",sx:{whiteSpace:"nowrap"},children:[e.jsx(qe,{children:e.jsxs(M,{children:[e.jsx(x,{sx:{pl:0},children:e.jsx(f,{variant:"subtitle2",fontWeight:600,children:"Metrics"})}),e.jsx(x,{children:e.jsx(f,{variant:"subtitle2",fontWeight:600,children:"Value"})}),e.jsx(x,{children:e.jsx(f,{variant:"subtitle2",fontWeight:600,children:"Trend (Past four Months)"})})]})}),e.jsxs(we,{children:[e.jsxs(M,{children:[e.jsx(x,{sx:{pl:0},children:e.jsxs(j,{children:[e.jsx(f,{variant:"subtitle2",fontWeight:600,children:"Customer Response Rate"}),e.jsx(f,{color:"textSecondary",fontSize:"12px",variant:"subtitle2",children:"Response"})]})}),e.jsx(x,{children:e.jsx(f,{color:"textSecondary",variant:"subtitle2",fontWeight:400,children:"63%"})}),e.jsx(x,{children:e.jsx(z,{options:n(s,o[0].data,"percentage"),series:o,type:"bar",height:"100px",width:"200px"})})]}),e.jsxs(M,{children:[e.jsx(x,{sx:{pl:0},children:e.jsxs(j,{children:[e.jsx(f,{variant:"subtitle2",fontWeight:600,children:"Customer Response Metric"}),e.jsx(f,{color:"textSecondary",fontSize:"12px",variant:"subtitle2",children:"Response"})]})}),e.jsx(x,{children:e.jsx(f,{color:"textSecondary",variant:"subtitle2",fontWeight:400,children:"1.60"})}),e.jsx(x,{children:e.jsx(z,{options:n(s,c[0].data,"decimal"),series:c,type:"bar",height:"100px",width:"200px"})})]}),e.jsxs(M,{children:[e.jsx(x,{sx:{pl:0},children:e.jsxs(j,{children:[e.jsx(f,{variant:"subtitle2",fontWeight:600,children:"Revenue Billed Per Customer ('000)"}),e.jsx(f,{color:"textSecondary",fontSize:"12px",variant:"subtitle2",children:"Billings"})]})}),e.jsx(x,{children:e.jsx(f,{color:"textSecondary",variant:"subtitle2",fontWeight:400,children:"90"})}),e.jsx(x,{children:e.jsx(z,{options:n(s,i[0].data,"naira"),series:i,type:"bar",height:"100px",width:"200px"})})]}),e.jsxs(M,{children:[e.jsx(x,{sx:{pl:0},children:e.jsxs(j,{children:[e.jsx(f,{variant:"subtitle2",fontWeight:600,children:"Collections Per Customer ('000)"}),e.jsx(f,{color:"textSecondary",fontSize:"12px",variant:"subtitle2",children:"Collections"})]})}),e.jsx(x,{children:e.jsx(f,{color:"textSecondary",variant:"subtitle2",fontWeight:400,children:"144"})}),e.jsx(x,{children:e.jsx(z,{options:n(s,l[0].data,"naira"),series:l,type:"bar",height:"100px",width:"200px"})})]})]})]})})})},st=[{to:"/",title:"Home"},{title:"State"},{title:"Commercial By Business District"}],Ct=()=>{const[t,s]=p.useState(""),[n,o]=p.useState(""),c=l=>{if(l==="Kano"||l==="Katsina"||l==="Jigawa")s(l),o("");else{o(l);const r=Object.keys(C).find(u=>Object.keys(C[u].businessDistricts).includes(l));s(r)}},i=l=>{o(l);const r=Object.keys(C).find(u=>Object.keys(C[u].businessDistricts).includes(l));s(r)};return e.jsxs(ae,{title:"Commercial By Business District",description:"this is Charts page",children:[e.jsx(oe,{title:"Commercial By Business District",items:st}),e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{item:!0,xs:12,children:e.jsx(ee,{onFilterChange:c,selectedState:t,selectedBusinessDistrict:n})}),e.jsx(m,{item:!0,xs:12,children:e.jsx(et,{selectedBusinessDistrict:n,onBusinessDistrictClick:i})}),e.jsx(m,{item:!0,xs:12,children:e.jsx(tt,{})})]})]})};export{Ct as default};
