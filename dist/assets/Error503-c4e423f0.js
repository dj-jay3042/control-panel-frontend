import{u as t,r as o,s as i,a as l,b as e,j as c,L as n}from"./index-e51da9aa.js";const d=()=>{const a=t();o.useEffect(()=>{a(i("Error 503"))});const s=l(r=>r.themeConfig.theme==="dark"||r.themeConfig.isDarkMode);return e("div",{className:"relative flex min-h-screen items-center justify-center overflow-hidden",children:e("div",{className:"px-6 py-16 text-center font-semibold before:container before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0)_50.73%)] before:aspect-square before:opacity-10 md:py-20",children:c("div",{className:"relative",children:[e("img",{src:s?"/assets/images/error/503-dark.svg":"/assets/images/error/503-light.svg",alt:"503",className:"mx-auto w-full max-w-xs object-cover md:max-w-xl"}),e("p",{className:"mt-5 text-base dark:text-white",children:"Service Unavailable!"}),e(n,{to:"/",className:"btn btn-gradient mx-auto !mt-7 w-max border-0 uppercase shadow-none",children:"Home"})]})})})};export{d as default};