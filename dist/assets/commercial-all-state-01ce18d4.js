import{j as t}from"./index-aea85b90.js";import{B as b}from"./Breadcrumb-36d57edb.js";import{P as y}from"./PageContainer-cdf59eb8.js";import{_ as l,C as d}from"./react-apexcharts.min-c37c62d3.js";import{E as f}from"./EnergyComparisonAllStatesDashboardWidgetCard-c462b033.js";import{u as c,T as s,G as a,S as m,O as j}from"./index.esm-70a918d3.js";import{B as h}from"./BlankCard-b0a455f2.js";import{S as p}from"./Stack-10fb171d.js";import{A as x}from"./Avatar-22d95f36.js";import"./CustomSelect-f91b0cb3.js";import"./Grow-26c1c19e.js";import"./ButtonBase-33b8aab6.js";import"./Card-0f775ac0.js";import"./styled-d61d15ba.js";const S=()=>{const e=c(),o=e.palette.primary.main,r=e.palette.secondary.main,i=e.palette.error.main,n={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:350},plotOptions:{bar:{borderRadius:4,columnWidth:"45%",endingShape:"rounded",grouped:!0,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,position:"top",style:{fontSize:"12px",colors:[e.palette.mode==="dark"?"#fff":"#000"]},offsetY:-20,formatter:function(u){return u.toFixed(0)}},legend:{show:!0},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:["Kano","Katsina","Jigawa"],axisBorder:{show:!1}},yaxis:{tickAmount:3,labels:{show:!0,style:{colors:e.palette.mode==="dark"?"#fff":"#adb0bb"}}},tooltip:{theme:e.palette.mode==="dark"?"dark":"light"}},g=[{name:"Delivered",data:[1273,375,124],color:o},{name:"Billed",data:[934,253,76],color:r},{name:"Collected",data:[500,109,46],color:i}];return t.jsx(f,{title:"Energy Comparison",sx:{height:"250px"},children:t.jsx(l,{options:n,series:g,type:"bar",height:"345px"})})},w=()=>{const e=c(),o=e.palette.primary.main;e.palette.secondary.main;const r=e.palette.error.main,i={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:350},plotOptions:{bar:{borderRadius:4,columnWidth:"45%",endingShape:"rounded",grouped:!0,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,style:{fontSize:"12px",colors:[e.palette.mode==="dark"?"#fff":"#000"]},offsetY:-20},legend:{show:!0},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:["Kano","Katsina","Jigawa"],axisBorder:{show:!1}},yaxis:{tickAmount:2,labels:{show:!0,style:{colors:e.palette.mode==="dark"?"#fff":"#adb0bb"}}},tooltip:{theme:e.palette.mode==="dark"?"dark":"light"}},n=[{name:"Revenue Billed Per Customer",data:[118,55,35],color:o},{name:"Collections Per Customer",data:[189,88,56],color:r}];return t.jsx(f,{title:"Billings and Collections",sx:{height:"450px"},children:t.jsx(l,{options:i,series:n,type:"bar",height:"330px"})})},C=()=>{const e=c(),o=e.palette.primary.main,r=e.palette.secondary.main,i={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1}},colors:[o,r],plotOptions:{bar:{borderRadius:3,columnWidth:"65%",endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,style:{fontSize:"10px",colors:[e.palette.mode==="dark"?"#fff":"#000"]},offsetY:-20},legend:{show:!0,position:"bottom"},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:["Kano","Katsina","Jigawa"],labels:{style:{fontSize:"10px",fontWeight:600}}},yaxis:{show:!1},tooltip:{theme:e.palette.mode==="dark"?"dark":"light"}},n=[{name:"Actuals",data:[61,43,60]},{name:"Targets",data:[100,100,100]}];return t.jsx(h,{children:t.jsxs(d,{sx:{p:"25px"},children:[t.jsx(s,{variant:"h5",children:"Collection Efficiency"}),t.jsxs(a,{container:!0,spacing:3,children:[t.jsxs(a,{item:!0,xs:5,sx:{paddingRight:"10px"},children:[t.jsx(s,{variant:"h4",mt:3,fontWeight:600,children:"58%"}),t.jsx(s,{variant:"subtitle2",fontSize:"12px",color:"textSecondary",children:"(last month)"}),t.jsxs(p,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[t.jsx(x,{sx:{bgcolor:"error.light",width:20,height:20},children:t.jsx(m,{width:16,color:"#FA896B"})}),t.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"+2.5%"})]})]}),t.jsx(a,{item:!0,xs:7,children:t.jsx(l,{options:i,series:n,type:"bar",height:"125px"})})]})]})})},k=()=>{const e=c(),o=e.palette.primary.main,r=e.palette.secondary.main,i={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1}},colors:[o,r],plotOptions:{bar:{borderRadius:3,columnWidth:"65%",endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,style:{fontSize:"10px",colors:[e.palette.mode==="dark"?"#fff":"#000"]},offsetY:-20},legend:{show:!0,position:"bottom"},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:["Kano","Katsina","Jigawa"],labels:{style:{fontSize:"10px",fontWeight:600}}},yaxis:{show:!1},tooltip:{theme:e.palette.mode==="dark"?"dark":"light"}},n=[{name:"Actuals",data:[73,68,61]},{name:"Targets",data:[100,100,100]}];return t.jsx(h,{children:t.jsxs(d,{sx:{p:"25px"},children:[t.jsx(s,{variant:"h5",children:"Billing Efficiency"}),t.jsxs(a,{container:!0,spacing:3,children:[t.jsxs(a,{item:!0,xs:5,sx:{paddingRight:"10px"},children:[t.jsx(s,{variant:"h4",mt:3,fontWeight:600,children:"71%"}),t.jsx(s,{variant:"subtitle2",fontSize:"12px",color:"textSecondary",children:"(last month)"}),t.jsxs(p,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[t.jsx(x,{sx:{bgcolor:"error.light",width:20,height:20},children:t.jsx(j,{width:16,color:"#FA896B"})}),t.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"-4%"})]})]}),t.jsx(a,{item:!0,xs:7,children:t.jsx(l,{options:i,series:n,type:"bar",height:"125px"})})]})]})})},A=()=>{const e=c(),o=e.palette.primary.main,r=e.palette.secondary.main,i={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1}},colors:[o,r],plotOptions:{bar:{borderRadius:3,columnWidth:"65%",endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,style:{fontSize:"10px",colors:[e.palette.mode==="dark"?"#fff":"#000"]},offsetY:-20},legend:{show:!0,position:"bottom"},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:["Kano","Katsina","Jigawa"],labels:{style:{fontSize:"10px",fontWeight:600}}},yaxis:{show:!1},tooltip:{theme:e.palette.mode==="dark"?"dark":"light"}},n=[{name:"Actuals",data:[63,63,62]},{name:"Targets",data:[100,100,100]}];return t.jsx(h,{children:t.jsxs(d,{sx:{p:"25px"},children:[t.jsx(s,{variant:"h5",children:"Customer Response Rate"}),t.jsxs(a,{container:!0,spacing:3,children:[t.jsxs(a,{item:!0,xs:5,sx:{paddingRight:"10px"},children:[t.jsx(s,{variant:"h4",mt:3,fontWeight:600,children:"63%"}),t.jsx(s,{variant:"subtitle2",fontSize:"12px",color:"textSecondary",children:"(last month)"}),t.jsxs(p,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[t.jsx(x,{sx:{bgcolor:"error.light",width:20,height:20},children:t.jsx(m,{width:16,color:"#FA896B"})}),t.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"0%"})]})]}),t.jsx(a,{item:!0,xs:7,children:t.jsx(l,{options:i,series:n,type:"bar",height:"125px"})})]})]})})},v=()=>{const e=c(),o=e.palette.primary.main,r=e.palette.secondary.main,i={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1}},colors:[o,r],plotOptions:{bar:{borderRadius:3,columnWidth:"65%",endingShape:"rounded",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,style:{fontSize:"10px",colors:[e.palette.mode==="dark"?"#fff":"#000"]},offsetY:-20},legend:{show:!0,position:"bottom"},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:["Kano","Katsina","Jigawa"],labels:{style:{fontSize:"10px",fontWeight:600}}},yaxis:{show:!1},tooltip:{theme:e.palette.mode==="dark"?"dark":"light"}},n=[{name:"Actuals",data:[56,71,63]},{name:"Targets",data:[12,10,10]}];return t.jsx(h,{children:t.jsxs(d,{sx:{p:"25px"},children:[t.jsx(s,{variant:"h5",children:"ATCC"}),t.jsxs(a,{container:!0,spacing:3,children:[t.jsxs(a,{item:!0,xs:5,sx:{paddingRight:"10px"},children:[t.jsx(s,{variant:"h4",mt:3,fontWeight:600,children:"59%"}),t.jsx(s,{variant:"subtitle2",fontSize:"12px",color:"textSecondary",children:"(last month)"}),t.jsxs(p,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[t.jsx(x,{sx:{bgcolor:"error.light",width:20,height:20},children:t.jsx(m,{width:16,color:"#FA896B"})}),t.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"+4%"})]})]}),t.jsx(a,{item:!0,xs:7,children:t.jsx(l,{options:i,series:n,type:"bar",height:"125px"})})]})]})})},W=[{to:"/",title:"Home"},{title:"State"},{title:"Commercial All State:"}],G=()=>t.jsxs(y,{title:"Commercial All State",description:"this is Charts page",children:[t.jsx(b,{title:"Commercial All State",items:W}),t.jsx(a,{container:!0,spacing:3,children:t.jsx(a,{item:!0,xs:12,lg:12,children:t.jsxs(a,{container:!0,spacing:3,children:[t.jsx(a,{item:!0,xs:12,lg:8,children:t.jsxs(a,{container:!0,spacing:3,direction:"column",children:[t.jsx(a,{item:!0,style:{height:"500px"},children:t.jsx(S,{})}),t.jsx(a,{item:!0,style:{height:"500px"},children:t.jsx(w,{})})]})}),t.jsx(a,{item:!0,xs:12,lg:4,children:t.jsxs(a,{container:!0,spacing:3,children:[t.jsx(a,{item:!0,xs:12,children:t.jsx(v,{})}),t.jsx(a,{item:!0,xs:12,children:t.jsx(k,{})}),t.jsx(a,{item:!0,xs:12,children:t.jsx(C,{})}),t.jsx(a,{item:!0,xs:12,children:t.jsx(A,{})})]})})]})})})]});export{G as default};
