"use strict";var i=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var y=(t,e)=>{for(var a in e)i(t,a,{get:e[a],enumerable:!0})},m=(t,e,a,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of g(e))!u.call(t,s)&&s!==a&&i(t,s,{get:()=>e[s],enumerable:!(r=f(e,s))||r.enumerable});return t};var h=t=>m(i({},"__esModule",{value:!0}),t);var x={};y(x,{copy2Clipboard:()=>l,default:()=>p});module.exports=h(x);function w(t,{insertAt:e}={}){if(!t||typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}w(`*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }:root{--sa-background: 210 40% 96%;--sa-foreground: 229 84% 5%}.dark{--sa-background: 229 84% 5%;--sa-foreground: 0 0 100%}::-webkit-scrollbar{width:0}.sa-z-10{z-index:10}.sa-flex{display:flex}.sa-w-fit{width:-moz-fit-content;width:fit-content}.sa-cursor-pointer{cursor:pointer}.sa-items-center{align-items:center}.sa-justify-center{justify-content:center}.sa-gap-2{gap:.5rem}.sa-rounded-sm{border-radius:.125rem}.sa-p-1{padding:.25rem}.sa-text-xs{font-size:.75rem;line-height:1rem}.sa-text-foreground{color:hsl(var(--sa-foreground))}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.hover\\:sa-scale-125:hover{--tw-scale-x: 1.25;--tw-scale-y: 1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}
`);var n=require("lucide-react"),d=require("react"),o=require("react/jsx-runtime");function l(t){return navigator.clipboard.writeText(t)}function p({className:t="",text:e,theme:a="light",onCopy:r}){let[s,c]=(0,d.useState)(!1);return(0,o.jsx)("div",{title:"Copy",className:`sa-z-10 sa-p-1 sa-rounded-sm sa-text-xs sa-cursor-pointer sa-flex sa-w-fit sa-justify-center sa-items-center sa-text-foreground sa-bg-muted ${a} ${t}`,onClick:()=>{l(e).then(()=>{r?.(e),c(!0),setTimeout(()=>{c(!1)},1e3)})},children:(0,o.jsx)("div",{className:"sa-flex sa-items-center sa-gap-2",children:s?(0,o.jsx)(n.CheckIcon,{size:14}):(0,o.jsx)(n.CopyIcon,{className:"sa-cursor-pointer hover:sa-scale-125",size:14})})})}0&&(module.exports={copy2Clipboard});
//# sourceMappingURL=index.js.map