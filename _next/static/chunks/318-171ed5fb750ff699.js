"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{1591:function(e,l,t){t.d(l,{default:function(){return m}});var s=t(7437),n=t(2265),a=t(7138),i=t(6648),r=t(6651),o=t(41),c=t(6765),d=t(5127);let x=[{label:"Home",href:"./"},{label:"About",href:"./about"},{label:"Information",href:"./information"},{label:"Gallery",href:"./gallery"},{label:"Contact",href:"./contact"}],u={open:{opacity:1,x:0,transition:{staggerChildren:.07,delayChildren:.2,type:"tween"}},closed:{opacity:0,x:"100%",transition:{staggerChildren:.05,staggerDirection:-1}}},h={open:{opacity:1,x:0,transition:{duration:.2,type:"spring",stiffness:120,damping:16}},closed:{opacity:0,x:"100%"}};function m(){let[e,l]=(0,n.useState)(!1);function t(){l(!e)}return(0,s.jsxs)("nav",{className:"sticky top-0 z-50 w-full bg-white shadow-md",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center max-w-screen-2xl mx-auto px-4",children:[(0,s.jsx)(a.default,{href:"./",children:(0,s.jsx)(i.default,{src:"./fwl-logo_crop.webp",alt:"Falling Walls Lab Wroclaw Logo",width:600,height:600,className:"h-12 w-auto"})}),(0,s.jsx)("ul",{className:"flex-1 flex justify-center items-center gap-16 max-xl:gap-8 max-md:hidden",children:x.map(e=>(0,s.jsx)(c.E.li,{className:"text-lg hover:text-red-600 cursor-pointer",whileTap:{scale:.9},children:(0,s.jsx)(a.default,{href:e.href,children:e.label})},e.label))}),(0,s.jsx)(c.E.button,{className:"text-white font-medium bg-red-600 px-3 py-2 my-2 mx-0 flex justify-end rounded-xl text-lg",onClick:()=>window.open("https://falling-walls.com/lab/apply/wroclaw/","_blank"),whileTap:{scale:.9},whileHover:{scale:1.05},children:"Apply Now"}),(0,s.jsx)("div",{onClick:t,className:"block md:hidden z-10",children:e?(0,s.jsx)(r.Z,{size:25}):(0,s.jsx)(o.Z,{size:25})})]}),(0,s.jsx)(d.M,{children:(0,s.jsx)(c.E.ul,{className:e?"fixed md:hidden w-[60%] top-14 right-0 bg-white shadow-xl rounded-bl-lg py-2":"hidden",variants:u,initial:!1,animate:e?"open":"closed",children:x.map(e=>(0,s.jsx)(c.E.li,{className:"px-8 py-4 rounded-xl cursor-pointer",variants:h,whileHover:{scale:1.01},whileTap:{scale:.9},children:(0,s.jsx)(a.default,{className:"font-montserrat leading-normal text-lg text-slate-gray hover:text-red-700 hover:border-b-[2px] hover:border-red-700 transition-colors duration-300 ease-in-out",href:e.href,onClick:t,children:e.label})},e.label))})})]})}},4236:function(e,l,t){t.d(l,{default:function(){return a}});var s=t(7437),n=t(2265);function a(e){let{posterurl:l}=e,[t,a]=(0,n.useState)(!1);return(0,s.jsx)("div",{className:"relative justify-center p-6 w-4/5 group",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("img",{src:l,alt:"poster",className:"shadow-lg shadow-red-300 rounded-xl transition duration-500 ease-in-out brightness-100 group-hover:brightness-50"}),t&&(0,s.jsx)("div",{className:"absolute inset-0 flex justify-center items-center",children:(0,s.jsx)("button",{className:"font-semibold bg-slate-200 p-3 rounded-lg",children:(0,s.jsxs)("div",{className:"flex gap-2 justify-center items-center pt-1",children:[(0,s.jsx)("img",{src:"./svgs/download.svg"}),(0,s.jsx)("p",{children:"Download Poster"})]})})})]})})}},4318:function(e,l,t){t.d(l,{default:function(){return d}});var s=t(7437),n=t(6765),a=t(5127),i=t(2265);t(6648),t(7138),t(1591);var r=t(4236);function o(e){let{winnerList:l}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" flex flex-col items-center justify-center md:py-10",children:[(0,s.jsx)("h2",{className:"uppercase text-3xl p-4 font-bold text-slate-500",children:0==l.length?null:1==l.length?"Winner":"Winners"}),l.map(e=>(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("div",{className:"mx-auto w-1/2  ",children:(0,s.jsx)("img",{src:e.photo,alt:"Winners photo",className:"w-full h-full rounded-full shadow-lg shadow-red-300 p-1 bg-red-600",loading:"lazy"})}),(0,s.jsx)("div",{className:"text-center text-xl p-2 font-semibold tracking-wide",children:e.name})]},e.name))]})})}function c(e){let{title:l,isActive:t,onClick:a}=e;return(0,s.jsxs)("button",{className:"relative px-4 md:px-10 py-2 mx-1 text-lg font-semibold focus:outline-none ".concat(t?" ":"text-gray-600"),onClick:a,children:[t?(0,s.jsx)(n.E.div,{className:"absolute inset-0 -z-10 bg-gray-300 rounded-lg",layoutId:"tab",transition:{type:"spring",stiffness:200,damping:20}}):null,(0,s.jsx)("span",{children:l})]})}function d(e){let{tabs:l}=e,[t,d]=(0,i.useState)(0);return(0,s.jsxs)("div",{className:"max-container ",children:[(0,s.jsx)("div",{className:"flex justify-center",children:l.map((e,l)=>(0,s.jsx)(c,{title:e.title,isActive:t===l,onClick:()=>{d(l)}},l))}),(0,s.jsx)(a.M,{mode:"wait",children:(0,s.jsx)(n.E.div,{className:"flex flex-col md:flex-row justify-center",initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},exit:{opacity:0},children:l[t].winners.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"w-full md:w-1/2",children:(0,s.jsx)(o,{winnerList:l[t].winners})}),(0,s.jsx)("div",{className:"flex justify-center w-full md:w-1/2 items-center",children:(0,s.jsx)(r.default,{posterurl:l[t].poster.url})})]}):(0,s.jsx)("div",{className:"flex justify-center w-full md:w-1/2 items-center",children:(0,s.jsx)(r.default,{posterurl:l[t].poster.url})})},t)})]})}}}]);