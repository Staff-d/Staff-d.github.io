(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{637:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,38173,23)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,10912)),Promise.resolve().then(t.bind(t,85025)),Promise.resolve().then(t.bind(t,11419)),Promise.resolve().then(t.bind(t,20460)),Promise.resolve().then(t.bind(t,84333)),Promise.resolve().then(t.bind(t,40789)),Promise.resolve().then(t.bind(t,93227)),Promise.resolve().then(t.bind(t,72839)),Promise.resolve().then(t.bind(t,641)),Promise.resolve().then(t.bind(t,84864)),Promise.resolve().then(t.bind(t,20554)),Promise.resolve().then(t.bind(t,52059)),Promise.resolve().then(t.bind(t,4955)),Promise.resolve().then(t.bind(t,585)),Promise.resolve().then(t.bind(t,86084)),Promise.resolve().then(t.bind(t,46004)),Promise.resolve().then(t.bind(t,60600)),Promise.resolve().then(t.bind(t,99289)),Promise.resolve().then(t.bind(t,46889)),Promise.resolve().then(t.bind(t,70767)),Promise.resolve().then(t.bind(t,43421))},10912:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let n=t(55592);function l(e){let{reason:r,children:t}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(r);return t}},85025:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return s}});let n=t(57437),l=t(54887),i=t(98011),o=t(35759);function s(e){let{moduleIds:r}=e;if("undefined"!=typeof window)return null;let t=i.workAsyncStorage.getStore();if(void 0===t)return null;let s=[];if(t.reactLoadableManifest&&r){let e=t.reactLoadableManifest;for(let t of r){if(!e[t])continue;let r=e[t].files;s.push(...r)}}return 0===s.length?null:(0,n.jsx)(n.Fragment,{children:s.map(e=>{let r=t.assetPrefix+"/_next/"+(0,o.encodeURIPath)(e);return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style"},e):((0,l.preload)(r,{as:"script",fetchPriority:"low"}),null)})})}},43421:(e,r,t)=>{"use strict";t.d(r,{Avatar:()=>g,AvatarFallback:()=>y,AvatarImage:()=>P});var n=t(57437),l=t(2265),i=globalThis?.document?l.useLayoutEffect:()=>{};t(54887);var o=t(92974),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=l.forwardRef((e,t)=>{let{asChild:l,...i}=e,s=l?o.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(s,{...i,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),a="Avatar",[u,d]=function(e,r=[]){let t=[],i=()=>{let r=t.map(e=>l.createContext(e));return function(t){let n=t?.[e]||r;return l.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return i.scopeName=e,[function(r,i){let o=l.createContext(i),s=t.length;t=[...t,i];let a=r=>{let{scope:t,children:i,...a}=r,u=t?.[e]?.[s]||o,d=l.useMemo(()=>a,Object.values(a));return(0,n.jsx)(u.Provider,{value:d,children:i})};return a.displayName=r+"Provider",[a,function(t,n){let a=n?.[e]?.[s]||o,u=l.useContext(a);if(u)return u;if(void 0!==i)return i;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:n})=>{let l=t(e)[`__scope${n}`];return{...r,...l}},{});return l.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(i,...r)]}(a),[f,c]=u(a),m=l.forwardRef((e,r)=>{let{__scopeAvatar:t,...i}=e,[o,a]=l.useState("idle");return(0,n.jsx)(f,{scope:t,imageLoadingStatus:o,onImageLoadingStatusChange:a,children:(0,n.jsx)(s.span,{...i,ref:r})})});m.displayName=a;var p="AvatarImage",h=l.forwardRef((e,r)=>{let{__scopeAvatar:t,src:o,onLoadingStatusChange:a=()=>{},...u}=e,d=c(p,t),f=function(e,r){let[t,n]=l.useState("idle");return i(()=>{if(!e){n("error");return}let t=!0,l=new window.Image,i=e=>()=>{t&&n(e)};return n("loading"),l.onload=i("loaded"),l.onerror=i("error"),l.src=e,r&&(l.referrerPolicy=r),()=>{t=!1}},[e,r]),t}(o,u.referrerPolicy),m=function(e){let r=l.useRef(e);return l.useEffect(()=>{r.current=e}),l.useMemo(()=>(...e)=>r.current?.(...e),[])}(e=>{a(e),d.onImageLoadingStatusChange(e)});return i(()=>{"idle"!==f&&m(f)},[f,m]),"loaded"===f?(0,n.jsx)(s.img,{...u,ref:r,src:o}):null});h.displayName=p;var v="AvatarFallback",b=l.forwardRef((e,r)=>{let{__scopeAvatar:t,delayMs:i,...o}=e,a=c(v,t),[u,d]=l.useState(void 0===i);return l.useEffect(()=>{if(void 0!==i){let e=window.setTimeout(()=>d(!0),i);return()=>window.clearTimeout(e)}},[i]),u&&"loaded"!==a.imageLoadingStatus?(0,n.jsx)(s.span,{...o,ref:r}):null});b.displayName=v;var w=t(49354);let g=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(m,{ref:r,className:(0,w.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...l})});g.displayName=m.displayName;let P=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(h,{ref:r,className:(0,w.cn)("aspect-square h-full w-full",t),...l})});P.displayName=h.displayName;let y=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(b,{ref:r,className:(0,w.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...l})});y.displayName=b.displayName},46889:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});let n={src:"/_next/static/media/portrait-ico.778fd454.webp",height:40,width:40,blurDataURL:"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQAgCdASoIAAgAAkA4JZQCdAYoBq/vgMQAAP7wtzlmwMZIBbacP0p6GgvWnNNUx/Dqx9cXaql7ZQlsew4Tk3Teva7iKcUKvtksRGcAAAA=",blurWidth:8,blurHeight:8}},92974:(e,r,t)=>{"use strict";t.d(r,{g7:()=>i});var n=t(2265),l=t(57437),i=n.forwardRef((e,r)=>{let{children:t,...i}=e,s=n.Children.toArray(t),u=s.find(a);if(u){let e=u.props.children,t=s.map(r=>r!==u?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(o,{...i,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,l.jsx)(o,{...i,ref:r,children:t})});i.displayName="Slot";var o=n.forwardRef((e,r)=>{let{children:t,...l}=e;if(n.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let l=e[n],i=r[n];/^on[A-Z]/.test(n)?l&&i?t[n]=(...e)=>{i(...e),l(...e)}:l&&(t[n]=l):"style"===n?t[n]={...l,...i}:"className"===n&&(t[n]=[l,i].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?function(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}(r,e):e})}return n.Children.count(t)>1?n.Children.only(null):null});o.displayName="SlotClone";var s=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function a(e){return n.isValidElement(e)&&e.type===s}}},e=>{var r=r=>e(e.s=r);e.O(0,[411,173,376,231,66,130,215,744],()=>r(637)),_N_E=e.O()}]);