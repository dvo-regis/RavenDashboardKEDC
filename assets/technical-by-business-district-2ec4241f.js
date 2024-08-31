import{j as e,r as d,P as B}from"./index-33b2785e.js";import{B as K}from"./Breadcrumb-ac18a331.js";import{P as N}from"./PageContainer-3bff8604.js";import{m as T}from"./mapbox-gl-fd1563e7.js";import{D as C}from"./DashboardCard-56d2437b.js";import{C as R,_ as D}from"./react-apexcharts.min-b420d1b8.js";import{B as P}from"./BlankCard-904d32fe.js";import{u as j,B as w,T as S,G as i,O as F,S as H,s as L}from"./index.esm-77ed05ce.js";import{C as E}from"./Chip-53e51d90.js";import{S as I}from"./Stack-3c2152a3.js";import{A as J}from"./Avatar-5877fa00.js";import{b as W}from"./Button-5375a383.js";import"./CustomSelect-091296db.js";import"./Grow-2601ff12.js";import"./ButtonBase-49a1dc58.js";import"./Card-4e02e502.js";import"./styled-c3323930.js";const x=({title:a,value:l,chartData:t,stateName:r})=>{const m=j();m.palette.secondary.main;const o=(p=>{if(p.length<2)return"0%";const s=p[p.length-2],n=p[p.length-1];return s===0?"N/A":`${((n-s)/s*100).toFixed(2)}%`})(t),c={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:70,sparkline:{enabled:!0}},colors:["#3B80B2","#599BC8","#77ADD2","#97BEDC","#B3CEE6","#e4e9ec","#e4e9ec","#e4e9ec","#b8c0c6"],plotOptions:{bar:{borderRadius:4,columnWidth:"50%",distributed:!0,endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,position:"top",style:{fontSize:"10px",colors:["#304758"],fontWeight:700},offsetY:-20},legend:{show:!1},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:["Apr","May","Jun","Jul"],labels:{show:!0,style:{fontSize:"10px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{theme:m.palette.mode==="dark"?"dark":"light",y:{formatter:function(p){return formatNumber(p)}}},title:{text:"",align:"center",style:{fontSize:"12px",fontWeight:"bold",color:"#263238",padding:"10px"}}},f=[{name:"",data:t}];return e.jsx(P,{children:e.jsxs(R,{sx:{p:"30px"},children:[e.jsxs(w,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(S,{variant:"h6",children:a}),e.jsx(E,{label:r||"Select a state",size:"small"})]}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsxs(i,{item:!0,xs:12,children:[e.jsx(S,{variant:"h4",mt:3,fontWeight:600,children:l}),e.jsxs(I,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[e.jsx(J,{sx:{bgcolor:"success.light",width:20,height:20},children:o.startsWith("-")?e.jsx(F,{width:16,color:"#39b69a"}):e.jsx(H,{width:16,color:"#39b69a"})}),e.jsx(S,{variant:"subtitle2",color:"textSecondary",children:o})]})]}),e.jsxs(i,{item:!0,xs:12,children:[e.jsx(S,{mb:2,variant:"subtitle2",whiteSpace:"nowrap",fontWeight:600,textAlign:"center",children:"Previous 4 Months"}),e.jsx(w,{mt:2,children:e.jsx(D,{options:c,series:f,type:"bar",height:"70px"})})]})]})]})})},g={"NG018.1":{name:"Jigawa North",metrics:{avgSupplyHours:[2.5,3,3.5,4],durationInterruptions:[1,1.2,1.1,1.3],turnaroundTime:[.5,.6,.7,.8],dailyInterruptions:[1,1.5,1.2,1.7],faults:[5,6,5,7],feeders:[3,4,3,4]}},"NG018.2":{name:"Jigawa South",metrics:{avgSupplyHours:[2.5,3,3.5,4],durationInterruptions:[1,1.2,1.1,1.3],turnaroundTime:[.5,.6,.7,.8],dailyInterruptions:[1,1.5,1.2,1.7],faults:[5,6,5,7],feeders:[3,4,3,4]}},"NG020.1":{name:"Kano Central",metrics:{avgSupplyHours:[5,5.5,6,6.5],durationInterruptions:[1.5,1.8,1.6,2],turnaroundTime:[1,1.2,1.3,1.4],dailyInterruptions:[2,2.5,2.3,2.7],faults:[8,9,10,11],feeders:[5,6,5,7]}},"NG020.2":{name:"Kano South",metrics:{avgSupplyHours:[5,5.5,6,6.5],durationInterruptions:[1.5,1.8,1.6,2],turnaroundTime:[1,1.2,1.3,1.4],dailyInterruptions:[2,2.5,2.3,2.7],faults:[8,9,10,11],feeders:[5,6,5,7]}},"NG020.3":{name:"Kano North",metrics:{avgSupplyHours:[5,5.5,6,6.5],durationInterruptions:[1.5,1.8,1.6,2],turnaroundTime:[1,1.2,1.3,1.4],dailyInterruptions:[2,2.5,2.3,2.7],faults:[8,9,10,11],feeders:[5,6,5,7]}},"NG020.4":{name:"Kano Industrial",metrics:{avgSupplyHours:[5,5.5,6,6.5],durationInterruptions:[1.5,1.8,1.6,2],turnaroundTime:[1,1.2,1.3,1.4],dailyInterruptions:[2,2.5,2.3,2.7],faults:[8,9,10,11],feeders:[5,6,5,7]}},"NG020.5":{name:"Kano East",metrics:{avgSupplyHours:[5,5.5,6,6.5],durationInterruptions:[1.5,1.8,1.6,2],turnaroundTime:[1,1.2,1.3,1.4],dailyInterruptions:[2,2.5,2.3,2.7],faults:[8,9,10,11],feeders:[5,6,5,7]}},"NG021.1":{name:"Katsina South",metrics:{avgSupplyHours:[3,3.5,4,4.5],durationInterruptions:[1.2,1.5,1.3,1.7],turnaroundTime:[.8,1,1.1,1.2],dailyInterruptions:[1.5,2,1.7,2.3],faults:[6,7,8,9],feeders:[4,5,4,6]}},"NG021.2":{name:"Katsina Central",metrics:{avgSupplyHours:[3,3.5,4,4.5],durationInterruptions:[1.2,1.5,1.3,1.7],turnaroundTime:[.8,1,1.1,1.2],dailyInterruptions:[1.5,2,1.7,2.3],faults:[6,7,8,9],feeders:[4,5,4,6]}},"NG021.3":{name:"Katsina North",metrics:{avgSupplyHours:[3,3.5,4,4.5],durationInterruptions:[1.2,1.5,1.3,1.7],turnaroundTime:[.8,1,1.1,1.2],dailyInterruptions:[1.5,2,1.7,2.3],faults:[6,7,8,9],feeders:[4,5,4,6]}}};T.accessToken="pk.eyJ1IjoiZHZvLXJlZ2lzIiwiYSI6ImNseXNsdzYzZTBsMTYycnM2bXY5dDh2M2sifQ.w7XKnvlxVxtWiYIFEVbz2g";const V=({selectedBusinessDistrict:a,onBusinessDistrictClick:l})=>{const[t,r]=d.useState(null),m=j(),h=m.palette.primary.main,o=d.useRef(null),c=d.useRef(null),f=8.582,p=12.075;return d.useEffect(()=>{if(!c.current){console.log("Initializing map...");const s=new T.Map({container:o.current,style:"mapbox://styles/dvo-regis/clyssb5i7002301pc2fajh6kt",center:[f,p],zoom:6.6});c.current=s,c.current.scrollZoom.disable(),s.touchZoomRotate.enable(),s.touchZoomRotate.enableRotation(),s.dragRotate.enable(),s.boxZoom.enable(),s.keyboard.enable(),s.on("load",()=>{console.log("Map loaded"),s.addSource("states",{type:"geojson",data:"/assets/map-data/KEDCBUSINESSDISTRICTS.geojson"}),s.addLayer({id:"states-layer",type:"fill",source:"states",paint:{"fill-color":"#888888","fill-opacity":.5}}),s.on("click","states-layer",n=>{if(console.log("Map clicked",n),n.features.length>0){const u=n.features[0],y=u.properties.BusinessDistrict1Pcod;if(console.log("Selected feature",u),y){const k=g[y]||{name:"Unknown",metrics:{}};r(k),l(k.name),s.setPaintProperty("states-layer","fill-color",["case",["==",["get","BusinessDistrict1Pcod"],y],h,"#888888"])}else console.error("Selected property code is undefined")}}),s.on("mouseenter","states-layer",()=>{s.getCanvas().style.cursor="pointer"}),s.on("mouseleave","states-layer",()=>{s.getCanvas().style.cursor=""})})}return()=>{console.log("Cleaning up map initialization effect")}},[m,h,l]),d.useEffect(()=>{if(!c.current)return;console.log("Updating map layer for selectedBusinessDistrict:",a);const s=c.current,n=()=>{const u=Object.keys(g).find(y=>g[y].name===a);u?(console.log("Setting fill color for selectedPcod:",u),s.setPaintProperty("states-layer","fill-color",["case",["==",["get","BusinessDistrict1Pcod"],u],h,"#888888"])):(console.log("Resetting fill color"),s.setPaintProperty("states-layer","fill-color","#888888"))};s.isStyleLoaded()?n():s.once("styledata",n)},[a,h]),d.useEffect(()=>{if(console.log("Selected business district changed:",a),a){const s=Object.values(g).find(n=>n.name===a);r(s),console.log("District data:",s)}else r(null)},[a]),e.jsx(C,{title:"Technical Performance By Business District",subtitle:"Select a business district",children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(w,{className:"rounded-bars",bgcolor:"#f7f8f9",height:350,ref:o})}),t&&e.jsxs(e.Fragment,{children:[e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsx(x,{title:"Average Supply Hours",value:`${t.metrics.avgSupplyHours[t.metrics.avgSupplyHours.length-1].toFixed(2)} Hrs`,chartData:t.metrics.avgSupplyHours,stateName:t.name})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsx(x,{title:"Interruption Duration",value:`${t.metrics.durationInterruptions[t.metrics.durationInterruptions.length-1].toFixed(2)} Hrs`,chartData:t.metrics.durationInterruptions,stateName:t.name})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsx(x,{title:"Turnaround Time",value:`${t.metrics.turnaroundTime[t.metrics.turnaroundTime.length-1].toFixed(2)} Hrs`,chartData:t.metrics.turnaroundTime,stateName:t.name})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsx(x,{title:"Daily Interruptions",value:`${t.metrics.dailyInterruptions[t.metrics.dailyInterruptions.length-1]} Times`,chartData:t.metrics.dailyInterruptions,stateName:t.name})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsx(x,{title:"Faults",value:`${t.metrics.faults[t.metrics.faults.length-1].toLocaleString()}`,chartData:t.metrics.faults,stateName:t.name})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsx(x,{title:"Feeders",value:`${t.metrics.feeders[t.metrics.feeders.length-1]}`,chartData:t.metrics.feeders,stateName:t.name})})]})]})})},z=()=>{const a=j();a.palette.primary.main,a.palette.grey[100];const l={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:200,width:"100%"},colors:["#3B80B2","#599BC8","#77ADD2","#97BEDC","#B3CEE6"],plotOptions:{bar:{borderRadius:3,columnWidth:"60%",barHeight:"60%",distributed:!0,endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(r){return r+" MW"},position:"top",style:{fontSize:"10px",colors:["#304758"],fontWeight:700},offsetY:-20},legend:{show:!1},grid:{padding:{top:0,right:0,bottom:0,left:0},show:!1},xaxis:{categories:[["11KV","Dr Bala"],["11KV","Noman'S Land"],["11KV","T/Wada"],["11KV","Abuja"],["11KV","Yusuf"]],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!0}},yaxis:{labels:{show:!1,formatter:function(r){return r+"mw"}}},tooltip:{theme:a.palette.mode==="dark"?"dark":"light"}},t=[{name:"",data:[4.2,4,3.8,3.5,3.4]}];return e.jsx(C,{title:"Top 5 Peak Loaded Feeders",children:e.jsx(e.Fragment,{children:e.jsx(D,{options:l,series:t,type:"bar",height:"280px"})})})},M=()=>{const a=j();a.palette.primary.main,a.palette.grey[100];const l={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:200,width:"100%"},colors:["#3B80B2","#599BC8","#77ADD2","#97BEDC","#B3CEE6"],plotOptions:{bar:{borderRadius:3,columnWidth:"60%",barHeight:"60%",distributed:!0,endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(r){return r+" MW"},position:"top",style:{fontSize:"10px",colors:["#304758"],fontWeight:700},offsetY:-20},legend:{show:!1},grid:{padding:{top:0,right:0,bottom:0,left:0},show:!1},xaxis:{categories:[["11KV","Dr Bala"],["11KV","Noman'S Land"],["11KV","T/Wada"],["11KV","Abuja"],["11KV","Yusuf"]],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!0}},yaxis:{labels:{show:!1,formatter:function(r){return r+"mw"}}},tooltip:{theme:a.palette.mode==="dark"?"dark":"light"}},t=[{name:"",data:[2.2,2,1.8,1.5,1.4]}];return e.jsx(C,{title:"Lowest 5 Peak Loaded Feeders",children:e.jsx(e.Fragment,{children:e.jsx(D,{options:l,series:t,type:"bar",height:"280px"})})})},b=L(W)(({theme:a})=>({borderRadius:0,"&:first-of-type":{borderTopLeftRadius:a.shape.borderRadius,borderBottomLeftRadius:a.shape.borderRadius},"&:last-of-type":{borderTopRightRadius:a.shape.borderRadius,borderBottomRightRadius:a.shape.borderRadius},"&:not(:first-of-type)":{marginLeft:"-1px"}})),v=({onFilterChange:a,selectedState:l,selectedBusinessDistrict:t})=>{const[r,m]=d.useState(l),[h,o]=d.useState(t);d.useEffect(()=>{m(l),console.log("Selected state updated in filter:",l)},[l]),d.useEffect(()=>{o(t),console.log("Selected business district updated in filter:",t)},[t]);const c=n=>{const u=r===n?"":n;m(u),a(u),console.log("State button clicked:",n,"New state:",u)},f=n=>{const u=h===n?"":n;o(u),a(u),console.log("Business district button clicked:",n,"New business district:",u)},p=e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:r==="Kano"?"contained":"outlined",onClick:()=>c("Kano"),children:"Kano"}),e.jsx(b,{variant:r==="Katsina"?"contained":"outlined",onClick:()=>c("Katsina"),children:"Katsina"}),e.jsx(b,{variant:r==="Jigawa"?"contained":"outlined",onClick:()=>c("Jigawa"),children:"Jigawa"})]}),s={Kano:["Kano Central","Kano East","Kano Industrial","Kano North","Kano South"],Katsina:["Katsina Central","Katsina North","Katsina South"],Jigawa:["Jigawa North","Jigawa South"]};return e.jsx(I,{direction:"row",children:r?e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"contained",onClick:()=>c(r),children:r}),s[r].map(n=>e.jsx(b,{variant:h===n?"contained":"outlined",onClick:()=>f(n),children:n},n))]}):p})};v.propTypes={onFilterChange:B.func.isRequired,selectedState:B.string.isRequired,selectedBusinessDistrict:B.string.isRequired};const G=[{to:"/",title:"Home"},{title:"State"},{title:"Technical By Business District"}],ie=()=>{const[a,l]=d.useState(""),[t,r]=d.useState(""),m=o=>{if(o==="Kano"||o==="Katsina"||o==="Jigawa")l(o),r("");else{r(o);const c=Object.keys(g).find(f=>Object.keys(g[f].businessDistricts).includes(o));l(c)}},h=o=>{r(o);const c=Object.keys(g).find(f=>Object.keys(g[f].businessDistricts).includes(o));l(c)};return e.jsxs(N,{title:"Technical By Business District",description:"this is Charts page",children:[e.jsx(K,{title:"Technical By Business District",items:G}),e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(v,{onFilterChange:m,selectedState:a,selectedBusinessDistrict:t})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(V,{selectedBusinessDistrict:t,onBusinessDistrictClick:h})}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(z,{})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(M,{})})]})})]})]})};export{ie as default};
