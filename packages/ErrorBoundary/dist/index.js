"use strict";var d=Object.create;var n=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var l=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty;var f=(o,r)=>{for(var e in r)n(o,e,{get:r[e],enumerable:!0})},c=(o,r,e,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of u(r))!p.call(o,t)&&t!==e&&n(o,t,{get:()=>r[t],enumerable:!(s=i(r,t))||s.enumerable});return o};var m=(o,r,e)=>(e=o!=null?d(l(o)):{},c(r||!o||!o.__esModule?n(e,"default",{value:o,enumerable:!0}):e,o)),S=o=>c(n({},"__esModule",{value:!0}),o);var y={};f(y,{default:()=>g});module.exports=S(y);var h=m(require("react")),E=require("react/jsx-runtime"),a=class extends h.default.Component{constructor(r){super(r),this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,e){console.error("ErrorBoundary caught an error",r,e)}render(){return this.state.hasError?(0,E.jsx)("h1",{children:"Something went wrong."}):this.props.children}},g=a;
//# sourceMappingURL=index.js.map