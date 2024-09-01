import{j as e,r as p,P as v}from"./index-aea85b90.js";import{B as I}from"./Breadcrumb-36d57edb.js";import{P as D}from"./PageContainer-cdf59eb8.js";import{m as B}from"./mapbox-gl-50cf9b1b.js";import{D as k}from"./DashboardCard-b9cb4657.js";import{C as F,_ as C}from"./react-apexcharts.min-c37c62d3.js";import{B as K}from"./BlankCard-b0a455f2.js";import{u as y,B as w,T as x,G as o,O as L,S as H,s as W}from"./index.esm-70a918d3.js";import{C as M}from"./Chip-b6998e96.js";import{S as P}from"./Stack-10fb171d.js";import{A as N}from"./Avatar-22d95f36.js";import{b as V}from"./Button-021ea796.js";import"./CustomSelect-f91b0cb3.js";import"./Grow-26c1c19e.js";import"./ButtonBase-33b8aab6.js";import"./Card-0f775ac0.js";import"./styled-d61d15ba.js";const h=({title:a,value:n,chartData:t,stateName:r})=>{const l=y();l.palette.secondary.main;const f=(i=>{if(i.length<2)return"0%";const s=i[i.length-2],c=i[i.length-1];return s===0?"N/A":`${((c-s)/s*100).toFixed(2)}%`})(t),d={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:70,sparkline:{enabled:!0}},colors:["#3B80B2","#599BC8","#77ADD2","#97BEDC","#B3CEE6","#e4e9ec","#e4e9ec","#e4e9ec","#b8c0c6"],plotOptions:{bar:{borderRadius:4,columnWidth:"50%",distributed:!0,endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:i=>i.toFixed(2),position:"top",style:{fontSize:"10px",colors:["#304758"],fontWeight:700},offsetY:-20},legend:{show:!1},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:["Apr","May","Jun","Jul"],labels:{show:!0,style:{fontSize:"10px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{theme:l.palette.mode==="dark"?"dark":"light",y:{formatter:i=>i.toFixed(2)}},title:{text:"",align:"center",style:{fontSize:"12px",fontWeight:"bold",color:"#263238",padding:"10px"}}},j=[{name:"",data:t}];return e.jsx(K,{children:e.jsxs(F,{sx:{p:"30px"},children:[e.jsxs(w,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(x,{variant:"h5",children:a}),e.jsx(M,{label:r||"Select a state",size:"small"})]}),e.jsxs(o,{container:!0,spacing:2,children:[e.jsxs(o,{item:!0,xs:12,children:[e.jsx(x,{variant:"h4",mt:3,fontWeight:600,children:n}),e.jsxs(P,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[e.jsx(N,{sx:{bgcolor:"success.light",width:20,height:20},children:f.startsWith("-")?e.jsx(L,{width:16,color:"#d32f2f"}):e.jsx(H,{width:16,color:"#39b69a"})}),e.jsx(x,{variant:"subtitle2",color:"textSecondary",children:f})]})]}),e.jsxs(o,{item:!0,xs:12,children:[e.jsx(x,{mb:2,variant:"subtitle2",whiteSpace:"nowrap",fontWeight:600,textAlign:"center",children:"Previous 4 Months"}),e.jsx(w,{mt:2,children:e.jsx(C,{options:d,series:j,type:"bar",height:"70px"})})]})]})]})})},b={NG018:{name:"Jigawa",avgSupplyHours:[10,12,14,16],durationInterruptions:[2,3,4,5],turnaroundTime:[5,6,7,8],dailyInterruptions:[12,14,16,18],energy:[74,78,70,82],feeders:[21,21,21,21]},NG020:{name:"Kano",avgSupplyHours:[20,22,24,26],durationInterruptions:[3,4,5,6],turnaroundTime:[7,8,9,10],dailyInterruptions:[16,18,20,22],energy:[150,210,220,230],feeders:[90,96,96,100]},NG021:{name:"Katsina",avgSupplyHours:[15,17,19,21],durationInterruptions:[4,5,6,7],turnaroundTime:[8,9,10,11],dailyInterruptions:[14,16,18,20],energy:[120,130,110,150],feeders:[60,60,62,64]}};B.accessToken="pk.eyJ1IjoiZHZvLXJlZ2lzIiwiYSI6ImNseXNsdzYzZTBsMTYycnM2bXY5dDh2M2sifQ.w7XKnvlxVxtWiYIFEVbz2g";const z=({selectedState:a,onStateClick:n})=>{const[t,r]=p.useState(null),l=y(),m=l.palette.primary.main,f=p.useRef(null),d=p.useRef(null),j=8.582,i=12.075;return p.useEffect(()=>{if(!d.current){console.log("Initializing map...");const s=new B.Map({container:f.current,style:"mapbox://styles/dvo-regis/clyssb5i7002301pc2fajh6kt",center:[j,i],zoom:6.6});d.current=s,d.current.scrollZoom.disable(),s.touchZoomRotate.enable(),s.touchZoomRotate.enableRotation(),s.dragRotate.enable(),s.boxZoom.enable(),s.keyboard.enable(),s.on("load",()=>{console.log("Map loaded"),s.addSource("states",{type:"geojson",data:"/assets/map-data/KEDC.geojson"}),s.addLayer({id:"states-layer",type:"fill",source:"states",paint:{"fill-color":"#888888","fill-opacity":.5}}),s.on("click","states-layer",c=>{if(console.log("Map clicked",c),c.features.length>0){const u=c.features[0],g=u.properties.admin1Pcod;if(console.log("Selected feature",u),g){const T=b[g]||{name:"Unknown",avgSupplyHours:[0,0,0,0],durationInterruptions:[0,0,0,0],turnaroundTime:[0,0,0,0],dailyInterruptions:[0,0,0,0],energy:[0,0,0,0],feeders:[0,0,0,0]};r(T),n(T.name),s.setPaintProperty("states-layer","fill-color",["case",["==",["get","admin1Pcod"],g],m,"#888888"])}else console.error("Selected property code is undefined")}}),s.on("mouseenter","states-layer",()=>{s.getCanvas().style.cursor="pointer"}),s.on("mouseleave","states-layer",()=>{s.getCanvas().style.cursor=""})})}return()=>{console.log("Cleaning up map initialization effect")}},[l,m,n]),p.useEffect(()=>{if(!d.current)return;console.log("Updating map layer for selectedState:",a);const s=d.current,c=()=>{const u=Object.keys(b).find(g=>b[g].name===a);u?(console.log("Setting fill color for selectedPcod:",u),s.setPaintProperty("states-layer","fill-color",["case",["==",["get","admin1Pcod"],u],m,"#888888"])):(console.log("Resetting fill color"),s.setPaintProperty("states-layer","fill-color","#888888"))};s.isStyleLoaded()?c():s.once("styledata",c)},[a,m]),p.useEffect(()=>{if(console.log("Selected state changed:",a),a){const s=Object.values(b).find(c=>c.name===a);r(s),console.log("State data:",s)}else r(null)},[a]),e.jsx(k,{title:"Technical Breakdown By State",subtitle:"Select a state",children:e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{item:!0,xs:12,children:e.jsx(w,{className:"rounded-bars",bgcolor:"#f7f8f9",height:350,ref:f})}),t&&e.jsxs(e.Fragment,{children:[e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(h,{title:"Average Supply Hours",value:`${t.avgSupplyHours[t.avgSupplyHours.length-1].toFixed(2)} Hrs`,chartData:t.avgSupplyHours,stateName:t.name})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(h,{title:"Duration of Interruptions",value:`${t.durationInterruptions[t.durationInterruptions.length-1].toFixed(2)} Hrs`,chartData:t.durationInterruptions,stateName:t.name})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(h,{title:"Turnaround Time",value:`${t.turnaroundTime[t.turnaroundTime.length-1].toFixed(2)} Hrs`,chartData:t.turnaroundTime,stateName:t.name})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(h,{title:"Daily Interruptions",value:`${t.dailyInterruptions[t.dailyInterruptions.length-1]} Times`,chartData:t.dailyInterruptions,stateName:t.name})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(h,{title:"Energy Delivered",value:`${t.energy[t.energy.length-1]} MW`,chartData:t.energy,stateName:t.name})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(h,{title:"Feeders",value:`${t.feeders[t.feeders.length-1]}`,chartData:t.feeders,stateName:t.name})})]})]})})},E=()=>{const a=y();a.palette.primary.main,a.palette.grey[100];const n={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:200,width:"100%"},colors:["#cc1c1c","#ff4545","#fc9798","#e9c4c3","#f2cbcb"],plotOptions:{bar:{borderRadius:3,columnWidth:"60%",barHeight:"60%",distributed:!0,endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(r){return r+" MW"},position:"top",style:{fontSize:"10px",colors:["#304758"],fontWeight:700},offsetY:-20},legend:{show:!1},grid:{padding:{top:0,right:0,bottom:0,left:0},show:!1},xaxis:{categories:[["11KV","Dr Bala"],["11KV","Noman'S Land"],["11KV","T/Wada"],["11KV","Abuja"],["11KV","Yusuf"]],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!0}},yaxis:{labels:{show:!1,formatter:function(r){return r+"mw"}}},tooltip:{theme:a.palette.mode==="dark"?"dark":"light"}},t=[{name:"",data:[4.2,4,3.8,3.5,3.4]}];return e.jsx(k,{title:"Top 5 Peak Loaded Feeders",children:e.jsx(e.Fragment,{children:e.jsx(C,{options:n,series:t,type:"bar",height:"280px"})})})},J=()=>{const a=y();a.palette.primary.main,a.palette.grey[100];const n={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:200,width:"100%"},colors:["#5bbea9","#74d2bb","#8cd9c4","#a6e2d4","#bfeae7"],plotOptions:{bar:{borderRadius:3,columnWidth:"60%",barHeight:"60%",distributed:!0,endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(r){return r+" MW"},position:"top",style:{fontSize:"10px",colors:["#304758"],fontWeight:700},offsetY:-20},legend:{show:!1},grid:{padding:{top:0,right:0,bottom:0,left:0},show:!1},xaxis:{categories:[["11KV","Dr Bala"],["11KV","Noman'S Land"],["11KV","T/Wada"],["11KV","Abuja"],["11KV","Yusuf"]],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!0}},yaxis:{labels:{show:!1,formatter:function(r){return r+"mw"}}},tooltip:{theme:a.palette.mode==="dark"?"dark":"light"}},t=[{name:"",data:[2.2,2,1.8,1.5,1.4]}];return e.jsx(k,{title:"Lowest 5 Peak Loaded Feeders",children:e.jsx(e.Fragment,{children:e.jsx(C,{options:n,series:t,type:"bar",height:"280px"})})})},S=W(V)(({theme:a})=>({borderRadius:0,"&:first-of-type":{borderTopLeftRadius:a.shape.borderRadius,borderBottomLeftRadius:a.shape.borderRadius},"&:last-of-type":{borderTopRightRadius:a.shape.borderRadius,borderBottomRightRadius:a.shape.borderRadius},"&:not(:first-of-type)":{marginLeft:"-1px"}})),R=({onFilterChange:a,selectedState:n})=>{const t=r=>{a(n===r?"":r)};return e.jsxs(P,{direction:"row",children:[e.jsx(S,{variant:n==="Kano"?"contained":"outlined",onClick:()=>t("Kano"),children:"Kano"}),e.jsx(S,{variant:n==="Katsina"?"contained":"outlined",onClick:()=>t("Katsina"),children:"Katsina"}),e.jsx(S,{variant:n==="Jigawa"?"contained":"outlined",onClick:()=>t("Jigawa"),children:"Jigawa"})]})};R.propTypes={onFilterChange:v.func.isRequired,selectedState:v.string.isRequired};const Y=[{to:"/",title:"Home"},{title:"State"},{title:"Technical by State"}],ie=()=>{const[a,n]=p.useState(""),t=l=>{n(l)},r=l=>{n(l)};return e.jsxs(D,{title:"Technical By State",description:"this is Charts page",children:[e.jsx(I,{title:"Technical by State",items:Y}),e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{item:!0,xs:12,children:e.jsx(R,{onFilterChange:r,selectedState:a})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(z,{selectedState:a,onStateClick:t})}),e.jsx(o,{item:!0,xs:12,children:e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(E,{})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(J,{})})]})})]})]})};export{ie as default};
