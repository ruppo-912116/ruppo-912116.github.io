(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4772:function(e,t,r){Promise.resolve().then(r.t.bind(r,7442,23)),Promise.resolve().then(r.bind(r,415)),Promise.resolve().then(r.bind(r,6692))},415:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var s=r(6546),n=r(8488),i=r(9268),l=()=>{let[e,t]=(0,i.useState)("light");return(0,i.useEffect)(()=>{localStorage.theme&&(t(localStorage.theme),document.documentElement.classList.add(localStorage.theme))},[]),(0,s.jsx)("button",{onClick:()=>{"light"===e?(t("dark"),document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(t("light"),document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},className:"px-2 rounded bg-primary text-white",children:"Toogle"})};function o(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-house",...e,children:[(0,s.jsx)("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),(0,s.jsx)("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]})}function a(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-presentation",...e,children:[(0,s.jsx)("path",{d:"M2 3h20"}),(0,s.jsx)("path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}),(0,s.jsx)("path",{d:"m7 21 5-5 5 5"})]})}function c(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,className:"lucide lucide-briefcase",children:[(0,s.jsx)("path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}),(0,s.jsx)("rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"})]})}function d(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,className:"lucide lucide-contact",children:[(0,s.jsx)("path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"}),(0,s.jsx)("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}),(0,s.jsx)("circle",{cx:"12",cy:"10",r:"2"}),(0,s.jsx)("line",{x1:"8",x2:"8",y1:"2",y2:"4"}),(0,s.jsx)("line",{x1:"16",x2:"16",y1:"2",y2:"4"})]})}function h(){let e=(0,n.useRouter)(),t=[{title:"Home",icon:(0,s.jsx)(o,{}),handleClick:()=>e.push("#home")},{title:"Projects",icon:(0,s.jsx)(a,{}),handleClick:()=>e.push("#projects")},{title:"Works",icon:(0,s.jsx)(c,{}),handleClick:()=>e.push("#works")},{title:"Contact Me",icon:(0,s.jsx)(d,{}),handleClick:()=>e.push("#contacts")}];function r(e){let{children:t,title:r,handleOnClick:n}=e;return(0,s.jsxs)("div",{className:"flex gap-1 items-center cursor-pointer hover:text-gray-500",onClick:n,children:[t,(0,s.jsx)("p",{className:"hidden sm:block",children:r})]})}return(0,s.jsxs)("div",{className:"fixed top-0 right-0 left-0 px-0 sm:px-4 bg-white dark:bg-neutral-dark h-16 md:mt-4 md:mx-40 flex justify-around sm:justify-between items-center",children:[(0,s.jsx)("h1",{className:"text-primary-light dark:text-neutral-light font-bold",children:"RUPAN"}),(0,s.jsxs)("div",{className:"flex gap-4 p-2 text-neutral-dark dark:text-neutral-light",children:[t.map(e=>(0,s.jsx)(r,{title:e.title,handleOnClick:e.handleClick,children:e.icon},"title")),(0,s.jsx)(l,{})]})]})}},6692:function(e,t,r){"use strict";r.d(t,{default:function(){return l}});var s=r(6546);function n(e){let{className:t,...r}=e;return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-link ".concat(t),...r,children:[(0,s.jsx)("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),(0,s.jsx)("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]})}var i=r(8488);function l(e){let{projectImage:t,title:r,description:l,link:o}=e,a=(0,i.useRouter)();return(0,s.jsx)("div",{className:"bg-white dark:bg-neutral-dark dark:border-solid dark:border-white dark:border-[1px] border-[#eaeaea] rounded-md flex flex-col border-[1px] p-2 h-[100%]",children:(0,s.jsxs)("div",{className:"px-4",children:[(0,s.jsxs)("div",{className:"flex gap-2 mb-2 text-neutral-dark dark:text-neutral-light items-center",children:[(0,s.jsx)(n,{className:"!w-5 !h-5 cursor-pointer",onClick:()=>a.push(o)}),(0,s.jsxs)("h1",{className:"font-bold text-lg",children:[r," "]})]}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-neutral-light",children:l})]})})}}},function(e){e.O(0,[174,471,724,744],function(){return e(e.s=4772)}),_N_E=e.O()}]);