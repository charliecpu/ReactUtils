(function(w,D){typeof exports=="object"&&typeof module<"u"?D(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],D):(w=typeof globalThis<"u"?globalThis:w||self,D(w["package name"]={},w.React))})(this,function(w,D){"use strict";var te={VITE_API_URL:"https://recordkeeperapi2.azurewebsites.net/api/",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const P=e=>{let o;const a=new Set,S=(i,t)=>{const r=typeof i=="function"?i(o):i;if(!Object.is(r,o)){const f=o;o=t??(typeof r!="object"||r===null)?r:Object.assign({},o,r),a.forEach(_=>_(o,f))}},s=()=>o,m={setState:S,getState:s,getInitialState:()=>h,subscribe:i=>(a.add(i),()=>a.delete(i)),destroy:()=>{(te?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},h=o=e(S,s,m);return m},ne=e=>e?P(e):P;function re(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b={exports:{}},j={},V={exports:{}},x={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H;function oe(){if(H)return x;H=1;var e=D;function o(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var a=typeof Object.is=="function"?Object.is:o,S=e.useState,s=e.useEffect,c=e.useLayoutEffect,O=e.useDebugValue;function y(t,r){var f=r(),_=S({inst:{value:f,getSnapshot:r}}),d=_[0].inst,p=_[1];return c(function(){d.value=f,d.getSnapshot=r,m(d)&&p({inst:d})},[t,f,r]),s(function(){return m(d)&&p({inst:d}),t(function(){m(d)&&p({inst:d})})},[t]),O(f),f}function m(t){var r=t.getSnapshot;t=t.value;try{var f=r();return!a(t,f)}catch{return!0}}function h(t,r){return r()}var i=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:y;return x.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:i,x}var C={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function ue(){return z||(z=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=D,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function a(l){{for(var n=arguments.length,E=new Array(n>1?n-1:0),u=1;u<n;u++)E[u-1]=arguments[u];S("error",l,E)}}function S(l,n,E){{var u=o.ReactDebugCurrentFrame,v=u.getStackAddendum();v!==""&&(n+="%s",E=E.concat([v]));var L=E.map(function(g){return String(g)});L.unshift("Warning: "+n),Function.prototype.apply.call(console[l],console,L)}}function s(l,n){return l===n&&(l!==0||1/l===1/n)||l!==l&&n!==n}var c=typeof Object.is=="function"?Object.is:s,O=e.useState,y=e.useEffect,m=e.useLayoutEffect,h=e.useDebugValue,i=!1,t=!1;function r(l,n,E){i||e.startTransition!==void 0&&(i=!0,a("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var u=n();if(!t){var v=n();c(u,v)||(a("The result of getSnapshot should be cached to avoid an infinite loop"),t=!0)}var L=O({inst:{value:u,getSnapshot:n}}),g=L[0].inst,R=L[1];return m(function(){g.value=u,g.getSnapshot=n,f(g)&&R({inst:g})},[l,u,n]),y(function(){f(g)&&R({inst:g});var M=function(){f(g)&&R({inst:g})};return l(M)},[l]),h(u),u}function f(l){var n=l.getSnapshot,E=l.value;try{var u=n();return!c(E,u)}catch{return!0}}function _(l,n,E){return n()}var d=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p=!d,T=p?_:r,A=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:T;C.useSyncExternalStore=A,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),C}var q;function k(){return q||(q=1,process.env.NODE_ENV==="production"?V.exports=oe():V.exports=ue()),V.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F;function ie(){if(F)return j;F=1;var e=D,o=k();function a(h,i){return h===i&&(h!==0||1/h===1/i)||h!==h&&i!==i}var S=typeof Object.is=="function"?Object.is:a,s=o.useSyncExternalStore,c=e.useRef,O=e.useEffect,y=e.useMemo,m=e.useDebugValue;return j.useSyncExternalStoreWithSelector=function(h,i,t,r,f){var _=c(null);if(_.current===null){var d={hasValue:!1,value:null};_.current=d}else d=_.current;_=y(function(){function T(u){if(!A){if(A=!0,l=u,u=r(u),f!==void 0&&d.hasValue){var v=d.value;if(f(v,u))return n=v}return n=u}if(v=n,S(l,u))return v;var L=r(u);return f!==void 0&&f(v,L)?v:(l=u,n=L)}var A=!1,l,n,E=t===void 0?null:t;return[function(){return T(i())},E===null?void 0:function(){return T(E())}]},[i,t,r,f]);var p=s(h,_[0],_[1]);return O(function(){d.hasValue=!0,d.value=p},[p]),m(p),p},j}var B={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J;function ae(){return J||(J=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=D,o=k();function a(i,t){return i===t&&(i!==0||1/i===1/t)||i!==i&&t!==t}var S=typeof Object.is=="function"?Object.is:a,s=o.useSyncExternalStore,c=e.useRef,O=e.useEffect,y=e.useMemo,m=e.useDebugValue;function h(i,t,r,f,_){var d=c(null),p;d.current===null?(p={hasValue:!1,value:null},d.current=p):p=d.current;var T=y(function(){var E=!1,u,v,L=function(I){if(!E){E=!0,u=I;var W=f(I);if(_!==void 0&&p.hasValue){var G=p.value;if(_(G,W))return v=G,G}return v=W,W}var pe=u,N=v;if(S(pe,I))return N;var K=f(I);return _!==void 0&&_(N,K)?N:(u=I,v=K,K)},g=r===void 0?null:r,R=function(){return L(t())},M=g===null?void 0:function(){return L(g())};return[R,M]},[t,r,f,_]),A=T[0],l=T[1],n=s(i,A,l);return O(function(){p.hasValue=!0,p.value=n},[n]),m(n),n}B.useSyncExternalStoreWithSelector=h,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),B}process.env.NODE_ENV==="production"?b.exports=ie():b.exports=ae();var se=b.exports;const ce=re(se);var Y={VITE_API_URL:"https://recordkeeperapi2.azurewebsites.net/api/",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:fe}=D,{useSyncExternalStoreWithSelector:le}=ce;let Q=!1;const de=e=>e;function Se(e,o=de,a){(Y?"production":void 0)!=="production"&&a&&!Q&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Q=!0);const S=le(e.subscribe,e.getState,e.getServerState||e.getInitialState,o,a);return fe(S),S}const X=e=>{(Y?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const o=typeof e=="function"?ne(e):e,a=(S,s)=>Se(o,S,s);return Object.assign(a,o),a},_e=e=>e?X(e):X,U="userstore";async function Z(e,o,a){const S=ee(e).postData,s=await S("login",{username:o,password:a});if(!s)throw new Error("Failed to login");return s}const $=e=>_e(o=>{const a=sessionStorage.getItem(U);return{...a?JSON.parse(a):{username:"",role:"",isLoggedIn:!1},logout:()=>{const s={username:"",role:"",isLoggedIn:!1};sessionStorage.setItem(U,JSON.stringify(s)),o(s)},login:async(s,c)=>{const y={...await Z(e,s,c),isLoggedIn:!0};sessionStorage.setItem(U,JSON.stringify(y)),o(y)}}});function ee(e){async function o(c){return c=e+c,await(await fetch(c,{headers:{Authorization:`Bearer ${s()}`}})).json()}async function a(c){return c=e+c,await(await fetch(c,{method:"DELETE",headers:{Authorization:`Bearer ${s()}`}})).json()}async function S(c,O){return c=e+c,await(await fetch(c,{method:"POST",body:JSON.stringify(O),headers:{"Content-Type":"application/json",Authorization:`Bearer ${s()}`}})).json()}function s(){return $(e)(O=>O.sessionkey)}return{fetchData:o,deleteData:a,postData:S}}w.createAPI=ee,w.loginUser=Z,w.useUserStore=$,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});
