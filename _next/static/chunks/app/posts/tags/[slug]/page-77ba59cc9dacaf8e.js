(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732,991],{4233:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,1419)),Promise.resolve().then(n.bind(n,5185)),Promise.resolve().then(n.bind(n,4333)),Promise.resolve().then(n.bind(n,789)),Promise.resolve().then(n.bind(n,3227)),Promise.resolve().then(n.bind(n,2839)),Promise.resolve().then(n.bind(n,641)),Promise.resolve().then(n.bind(n,4864)),Promise.resolve().then(n.bind(n,554)),Promise.resolve().then(n.bind(n,2059)),Promise.resolve().then(n.bind(n,3433))},3433:(e,t,n)=>{"use strict";n.d(t,{default:()=>d});var r=n(7437),o=n(9354),s=n(9226),i=n(2265),l=n(231),a=n.n(l);function d(e){let{categoryName:t,categoryDescription:n}=e,l=(0,i.useRef)(null),[d,c]=(0,i.useState)("none");return t=null!=t?t:"All",n=null!=n?n:"Everything that moves me, all at once.",(0,r.jsx)("section",{ref:l,className:(0,o.cn)("relative","w-full","py-12","md:py-24","lg:py-32","xl:py-48"),children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center text-center overflow-clip",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-purple-600 to-white transition-opacity duration-1000 ease-in-out ".concat("leadership"===d?"opacity-100":"opacity-0")}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-orange-600 to-white transition-opacity duration-1000 ease-in-out ".concat("cloud-computing"===d?"opacity-100":"opacity-0")}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-blue-400 to-white transition-opacity duration-1000 ease-in-out ".concat("code"===d?"opacity-100":"opacity-0")}),(0,r.jsxs)("div",{className:"z-10 flex flex-col items-center gap-2",children:[(0,r.jsxs)("h1",{className:"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none",children:[t," Blog Posts"]}),(0,r.jsx)("p",{className:"mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400",children:n}),(0,r.jsxs)("div",{className:"w-full max-w-sm flex flex-row gap-2 items-center justify-center z-10 mt-2",children:[(0,r.jsx)(a(),{href:"/posts/tags/code",children:(0,r.jsx)(s.z,{onMouseEnter:()=>c("code"),onMouseLeave:()=>c("none"),children:"Code"})}),(0,r.jsx)(a(),{href:"/posts/tags/cloud-computing",children:(0,r.jsx)(s.z,{onMouseEnter:()=>c("cloud-computing"),onMouseLeave:()=>c("none"),children:"Cloud Computing"})}),(0,r.jsx)(a(),{href:"/posts/tags/leadership",children:(0,r.jsx)(s.z,{onMouseEnter:()=>c("leadership"),onMouseLeave:()=>c("none"),children:"Leadership"})})]})]})]})})}},9226:(e,t,n)=>{"use strict";n.d(t,{z:()=>c});var r=n(7437),o=n(2265),s=n(2974);let i=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r};var a=n(9354);let d=((e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return l(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:s}=t,a=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],r=null==s?void 0:s[e];if(null===t)return null;let l=i(t)||i(r);return o[e][l]}),d=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return l(e,a,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...s,...d}[t]):({...s,...d})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)})("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=o.forwardRef((e,t)=>{let{className:n,variant:o,size:i,asChild:l=!1,...c}=e,u=l?s.g7:"button";return(0,r.jsx)(u,{className:(0,a.cn)(d({variant:o,size:i,className:n})),ref:t,...c})});c.displayName="Button"},9354:(e,t,n)=>{"use strict";n.d(t,{cn:()=>s});var r=n(4839),o=n(6164);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,r.W)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[173,231,623,330,130,215,744],()=>t(4233)),_N_E=e.O()}]);