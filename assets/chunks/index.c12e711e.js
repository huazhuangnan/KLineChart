import{_ as d,u as c,j as p,z as u,x as _,o as g,b as h,w as v,k as s,p as w,m}from"./framework.fbdba653.js";import{r as x,i as b,g as k,d as z,C}from"./genData.3b5ed221.js";const f=n=>(w("data-v-1e02975b"),n=n(),m(),n),y={class:"button-box"},S=f(()=>s("div",{id:"language-chart",style:{height:"450px"}},null,-1)),L={__name:"index",setup(n){const{isDark:i}=c();x("zh-HK",{time:"時間：",open:"開：",high:"高：",low:"低：",close:"收：",volume:"成交量："});let e;const r=()=>{window.addEventListener("resize",()=>{e.resize()})};p(()=>{e=b("language-chart"),e.applyNewData(k()),e.setStyles(i.value?"dark":"light"),window.addEventListener("resize",r)}),u(()=>{window.removeEventListener("resize",r),z("language-chart")}),_(i,a=>{a?e.setStyles("dark"):e.setStyles("light")});function o(a){e.setLocale(a)}return(a,t)=>(g(),h(C,null,{default:v(()=>[s("div",y,[s("button",{onClick:t[0]||(t[0]=l=>o("zh-CN"))},"简体中文"),s("button",{onClick:t[1]||(t[1]=l=>o("en-US"))},"English"),s("button",{onClick:t[2]||(t[2]=l=>o("zh-HK"))},"繁体中文")]),S]),_:1}))}},I=d(L,[["__scopeId","data-v-1e02975b"]]);export{I as C};
