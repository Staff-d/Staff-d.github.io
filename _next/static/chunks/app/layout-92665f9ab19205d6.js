(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{99883:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.t.bind(t,45384,23)),Promise.resolve().then(t.bind(t,25361)),Promise.resolve().then(t.t.bind(t,63275,23))},25361:(e,r,t)=>{"use strict";t.d(r,{default:()=>s});var n=t(57437),l=t(2265),i=t(6575);let o="cookie-banner-seen";function s(){let[e,r]=(0,l.useState)(!1);(0,l.useEffect)(()=>{r(null===window.localStorage.getItem(o))},[r]);let t=(0,l.useCallback)(()=>{window.localStorage.setItem(o,new Date().toISOString()),r(!1)},[r]);return e?(0,n.jsx)("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-gray-900 dark:bg-gray-800",children:(0,n.jsxs)("div",{className:"container px-4 py-2 mx-auto flex items-center justify-between",children:[(0,n.jsx)("p",{className:"text-gray-300 dark:text-gray-400",children:"This site uses functional cookies only."}),(0,n.jsx)(i.z,{variant:"outline",onClick:t,children:"Good to know!"})]})}):null}},6575:(e,r,t)=>{"use strict";t.d(r,{z:()=>c});var n=t(57437),l=t(2265),i=t(92974);let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,l="";if("string"==typeof r||"number"==typeof r)l+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(l&&(l+=" "),l+=n);else for(t in r)r[t]&&(l&&(l+=" "),l+=t)}return l}(e))&&(n&&(n+=" "),n+=r);return n};var a=t(49354);let u=((e,r)=>t=>{var n;if((null==r?void 0:r.variants)==null)return s(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:l,defaultVariants:i}=r,a=Object.keys(l).map(e=>{let r=null==t?void 0:t[e],n=null==i?void 0:i[e];if(null===r)return null;let s=o(r)||o(n);return l[e][s]}),u=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return s(e,a,null==r?void 0:null===(n=r.compoundVariants)||void 0===n?void 0:n.reduce((e,r)=>{let{class:t,className:n,...l}=r;return Object.entries(l).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...u}[r]):({...i,...u})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)})("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,r)=>{let{className:t,variant:l,size:o,asChild:s=!1,...c}=e,d=s?i.g7:"button";return(0,n.jsx)(d,{className:(0,a.cn)(u({variant:l,size:o,className:t})),ref:r,...c})});c.displayName="Button"},49354:(e,r,t)=>{"use strict";t.d(r,{cn:()=>i});var n=t(44839),l=t(96164);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,l.m6)((0,n.W)(r))}},63275:()=>{},45384:e=>{e.exports={style:{fontFamily:"'wixForDisplay', 'wixForDisplay Fallback'"},className:"__className_4eb141",variable:"__variable_4eb141"}},92974:(e,r,t)=>{"use strict";t.d(r,{g7:()=>i});var n=t(2265),l=t(57437),i=n.forwardRef((e,r)=>{let{children:t,...i}=e,s=n.Children.toArray(t),u=s.find(a);if(u){let e=u.props.children,t=s.map(r=>r!==u?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(o,{...i,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,l.jsx)(o,{...i,ref:r,children:t})});i.displayName="Slot";var o=n.forwardRef((e,r)=>{let{children:t,...l}=e;if(n.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let l=e[n],i=r[n];/^on[A-Z]/.test(n)?l&&i?t[n]=(...e)=>{i(...e),l(...e)}:l&&(t[n]=l):"style"===n?t[n]={...l,...i}:"className"===n&&(t[n]=[l,i].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?function(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}(r,e):e})}return n.Children.count(t)>1?n.Children.only(null):null});o.displayName="SlotClone";var s=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function a(e){return n.isValidElement(e)&&e.type===s}}},e=>{var r=r=>e(e.s=r);e.O(0,[193,411,231,130,215,744],()=>r(99883)),_N_E=e.O()}]);