(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732,991],{31403:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,11419)),Promise.resolve().then(n.bind(n,20460)),Promise.resolve().then(n.bind(n,84333)),Promise.resolve().then(n.bind(n,40789)),Promise.resolve().then(n.bind(n,93227)),Promise.resolve().then(n.bind(n,72839)),Promise.resolve().then(n.bind(n,641)),Promise.resolve().then(n.bind(n,84864)),Promise.resolve().then(n.bind(n,20554)),Promise.resolve().then(n.bind(n,52059)),Promise.resolve().then(n.bind(n,4955)),Promise.resolve().then(n.bind(n,585)),Promise.resolve().then(n.bind(n,86084)),Promise.resolve().then(n.bind(n,46004)),Promise.resolve().then(n.bind(n,99289)),Promise.resolve().then(n.bind(n,53433)),Promise.resolve().then(n.bind(n,70767))},53433:(e,t,n)=>{"use strict";n.d(t,{default:()=>d});var r=n(57437),o=n(49354),s=n(6575),i=n(2265),l=n(231),a=n.n(l);function d(e){let{categoryName:t,categoryDescription:n}=e,l=(0,i.useRef)(null),[d,c]=(0,i.useState)("none");return t=null!=t?t:"All",n=null!=n?n:"Everything that moves me, all at once.",(0,r.jsx)("section",{ref:l,className:(0,o.cn)("relative","w-full","py-12","md:py-24","lg:py-32","xl:py-48"),children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center text-center overflow-clip",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-purple-600 to-white transition-opacity duration-1000 ease-in-out ".concat("leadership"===d?"opacity-100":"opacity-0")}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-orange-600 to-white transition-opacity duration-1000 ease-in-out ".concat("cloud-computing"===d?"opacity-100":"opacity-0")}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-blue-400 to-white transition-opacity duration-1000 ease-in-out ".concat("code"===d?"opacity-100":"opacity-0")}),(0,r.jsxs)("div",{className:"z-10 flex flex-col items-center gap-2",children:[(0,r.jsxs)("h1",{className:"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none",children:[t," Blog Posts"]}),(0,r.jsx)("p",{className:"mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400",children:n}),(0,r.jsxs)("div",{className:"w-full max-w-sm flex flex-row gap-2 items-center justify-center z-10 mt-2",children:[(0,r.jsx)(a(),{href:"/posts/tags/code",children:(0,r.jsx)(s.z,{onMouseEnter:()=>c("code"),onMouseLeave:()=>c("none"),children:"Code"})}),(0,r.jsx)(a(),{href:"/posts/tags/cloud-computing",children:(0,r.jsx)(s.z,{onMouseEnter:()=>c("cloud-computing"),onMouseLeave:()=>c("none"),children:"Cloud Computing"})}),(0,r.jsx)(a(),{href:"/posts/tags/leadership",children:(0,r.jsx)(s.z,{onMouseEnter:()=>c("leadership"),onMouseLeave:()=>c("none"),children:"Leadership"})})]})]})]})})}},6575:(e,t,n)=>{"use strict";n.d(t,{z:()=>c});var r=n(57437),o=n(2265),s=n(92974);let i=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r};var a=n(49354);let d=((e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return l(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:s}=t,a=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],r=null==s?void 0:s[e];if(null===t)return null;let l=i(t)||i(r);return o[e][l]}),d=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return l(e,a,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...s,...d}[t]):({...s,...d})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)})("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=o.forwardRef((e,t)=>{let{className:n,variant:o,size:i,asChild:l=!1,...c}=e,u=l?s.g7:"button";return(0,r.jsx)(u,{className:(0,a.cn)(d({variant:o,size:i,className:n})),ref:t,...c})});c.displayName="Button"},92974:(e,t,n)=>{"use strict";n.d(t,{g7:()=>s});var r=n(2265),o=n(57437),s=r.forwardRef((e,t)=>{let{children:n,...s}=e,l=r.Children.toArray(n),d=l.find(a);if(d){let e=d.props.children,n=l.map(t=>t!==d?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,o.jsx)(i,{...s,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,o.jsx)(i,{...s,ref:t,children:n})});s.displayName="Slot";var i=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...e)=>{s(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...s}:"className"===r&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,e):e})}return r.Children.count(n)>1?r.Children.only(null):null});i.displayName="SlotClone";var l=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function a(e){return r.isValidElement(e)&&e.type===l}}},e=>{var t=t=>e(e.s=t);e.O(0,[411,173,376,231,663,130,215,744],()=>t(31403)),_N_E=e.O()}]);