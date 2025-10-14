const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DCjlu0RF.js","assets/ScrollDown-DZahL02r.js","assets/ScrollDown-CmVSJbFN.css","assets/Home-CjsWNQSh.css","assets/Work-BRttE5By.js","assets/index-CEAFoR6O.js","assets/index-CKcNCgKb.css","assets/Work-ByYqg456.css","assets/Entry-CKzlhFL4.js","assets/Entry-CXIPLmfc.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();const TS="modulepreload",bS=function(a){return"/"+a},Gv={},al=function(e,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),d=f?.nonce||f?.getAttribute("nonce");l=p(i.map(h=>{if(h=bS(h),h in Gv)return;Gv[h]=!0;const g=h.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":TS,g||(_.as="script"),_.crossOrigin="",_.href=h,d&&_.setAttribute("nonce",d),document.head.appendChild(_),g)return new Promise((x,E)=>{_.addEventListener("load",x),_.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function u(f){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=f,window.dispatchEvent(d),!d.defaultPrevented)throw f}return l.then(f=>{for(const d of f||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})};function v0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var md={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function AS(){if(Vv)return Bo;Vv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Bo.Fragment=e,Bo.jsx=i,Bo.jsxs=i,Bo}var kv;function RS(){return kv||(kv=1,md.exports=AS()),md.exports}var ln=RS(),gd={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function wS(){if(Xv)return St;Xv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(L,J,ye){this.props=L,this.context=J,this.refs=A,this.updater=ye||x}S.prototype.isReactComponent={},S.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=S.prototype;function P(L,J,ye){this.props=L,this.context=J,this.refs=A,this.updater=ye||x}var N=P.prototype=new y;N.constructor=P,E(N,S.prototype),N.isPureReactComponent=!0;var U=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},w=Object.prototype.hasOwnProperty;function I(L,J,ye,Te,Q,ve){return ye=ve.ref,{$$typeof:a,type:L,key:J,ref:ye!==void 0?ye:null,props:ve}}function X(L,J){return I(L.type,J,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===a}function C(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ye){return J[ye]})}var V=/\/+/g;function de(L,J){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):J.toString(36)}function ee(){}function ce(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ee,ee):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function me(L,J,ye,Te,Q){var ve=typeof L;(ve==="undefined"||ve==="boolean")&&(L=null);var Ae=!1;if(L===null)Ae=!0;else switch(ve){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(L.$$typeof){case a:case e:Ae=!0;break;case g:return Ae=L._init,me(Ae(L._payload),J,ye,Te,Q)}}if(Ae)return Q=Q(L),Ae=Te===""?"."+de(L,0):Te,U(Q)?(ye="",Ae!=null&&(ye=Ae.replace(V,"$&/")+"/"),me(Q,J,ye,"",function(_t){return _t})):Q!=null&&(D(Q)&&(Q=X(Q,ye+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(V,"$&/")+"/")+Ae)),J.push(Q)),1;Ae=0;var Le=Te===""?".":Te+":";if(U(L))for(var Be=0;Be<L.length;Be++)Te=L[Be],ve=Le+de(Te,Be),Ae+=me(Te,J,ye,ve,Q);else if(Be=_(L),typeof Be=="function")for(L=Be.call(L),Be=0;!(Te=L.next()).done;)Te=Te.value,ve=Le+de(Te,Be++),Ae+=me(Te,J,ye,ve,Q);else if(ve==="object"){if(typeof L.then=="function")return me(ce(L),J,ye,Te,Q);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function z(L,J,ye){if(L==null)return L;var Te=[],Q=0;return me(L,Te,"","",function(ve){return J.call(ye,ve,Q++)}),Te}function $(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(ye){(L._status===0||L._status===-1)&&(L._status=1,L._result=ye)},function(ye){(L._status===0||L._status===-1)&&(L._status=2,L._result=ye)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var W=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Ee(){}return St.Children={map:z,forEach:function(L,J,ye){z(L,function(){J.apply(this,arguments)},ye)},count:function(L){var J=0;return z(L,function(){J++}),J},toArray:function(L){return z(L,function(J){return J})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},St.Component=S,St.Fragment=i,St.Profiler=l,St.PureComponent=P,St.StrictMode=s,St.Suspense=p,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,St.__COMPILER_RUNTIME={__proto__:null,c:function(L){return H.H.useMemoCache(L)}},St.cache=function(L){return function(){return L.apply(null,arguments)}},St.cloneElement=function(L,J,ye){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Te=E({},L.props),Q=L.key,ve=void 0;if(J!=null)for(Ae in J.ref!==void 0&&(ve=void 0),J.key!==void 0&&(Q=""+J.key),J)!w.call(J,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&J.ref===void 0||(Te[Ae]=J[Ae]);var Ae=arguments.length-2;if(Ae===1)Te.children=ye;else if(1<Ae){for(var Le=Array(Ae),Be=0;Be<Ae;Be++)Le[Be]=arguments[Be+2];Te.children=Le}return I(L.type,Q,void 0,void 0,ve,Te)},St.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},St.createElement=function(L,J,ye){var Te,Q={},ve=null;if(J!=null)for(Te in J.key!==void 0&&(ve=""+J.key),J)w.call(J,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Q[Te]=J[Te]);var Ae=arguments.length-2;if(Ae===1)Q.children=ye;else if(1<Ae){for(var Le=Array(Ae),Be=0;Be<Ae;Be++)Le[Be]=arguments[Be+2];Q.children=Le}if(L&&L.defaultProps)for(Te in Ae=L.defaultProps,Ae)Q[Te]===void 0&&(Q[Te]=Ae[Te]);return I(L,ve,void 0,void 0,null,Q)},St.createRef=function(){return{current:null}},St.forwardRef=function(L){return{$$typeof:d,render:L}},St.isValidElement=D,St.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:$}},St.memo=function(L,J){return{$$typeof:h,type:L,compare:J===void 0?null:J}},St.startTransition=function(L){var J=H.T,ye={};H.T=ye;try{var Te=L(),Q=H.S;Q!==null&&Q(ye,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(Ee,W)}catch(ve){W(ve)}finally{H.T=J}},St.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},St.use=function(L){return H.H.use(L)},St.useActionState=function(L,J,ye){return H.H.useActionState(L,J,ye)},St.useCallback=function(L,J){return H.H.useCallback(L,J)},St.useContext=function(L){return H.H.useContext(L)},St.useDebugValue=function(){},St.useDeferredValue=function(L,J){return H.H.useDeferredValue(L,J)},St.useEffect=function(L,J,ye){var Te=H.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Te.useEffect(L,J)},St.useId=function(){return H.H.useId()},St.useImperativeHandle=function(L,J,ye){return H.H.useImperativeHandle(L,J,ye)},St.useInsertionEffect=function(L,J){return H.H.useInsertionEffect(L,J)},St.useLayoutEffect=function(L,J){return H.H.useLayoutEffect(L,J)},St.useMemo=function(L,J){return H.H.useMemo(L,J)},St.useOptimistic=function(L,J){return H.H.useOptimistic(L,J)},St.useReducer=function(L,J,ye){return H.H.useReducer(L,J,ye)},St.useRef=function(L){return H.H.useRef(L)},St.useState=function(L){return H.H.useState(L)},St.useSyncExternalStore=function(L,J,ye){return H.H.useSyncExternalStore(L,J,ye)},St.useTransition=function(){return H.H.useTransition()},St.version="19.1.1",St}var Wv;function qh(){return Wv||(Wv=1,gd.exports=wS()),gd.exports}var ne=qh();const _0=v0(ne);var vd={exports:{}},Io={},_d={exports:{}},yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function CS(){return qv||(qv=1,(function(a){function e(z,$){var W=z.length;z.push($);e:for(;0<W;){var Ee=W-1>>>1,L=z[Ee];if(0<l(L,$))z[Ee]=$,z[W]=L,W=Ee;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var $=z[0],W=z.pop();if(W!==$){z[0]=W;e:for(var Ee=0,L=z.length,J=L>>>1;Ee<J;){var ye=2*(Ee+1)-1,Te=z[ye],Q=ye+1,ve=z[Q];if(0>l(Te,W))Q<L&&0>l(ve,Te)?(z[Ee]=ve,z[Q]=W,Ee=Q):(z[Ee]=Te,z[ye]=W,Ee=ye);else if(Q<L&&0>l(ve,W))z[Ee]=ve,z[Q]=W,Ee=Q;else break e}}return $}function l(z,$){var W=z.sortIndex-$.sortIndex;return W!==0?W:z.id-$.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var p=[],h=[],g=1,v=null,_=3,x=!1,E=!1,A=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var $=i(h);$!==null;){if($.callback===null)s(h);else if($.startTime<=z)s(h),$.sortIndex=$.expirationTime,e(p,$);else break;$=i(h)}}function H(z){if(A=!1,U(z),!E)if(i(p)!==null)E=!0,w||(w=!0,de());else{var $=i(h);$!==null&&me(H,$.startTime-z)}}var w=!1,I=-1,X=5,D=-1;function C(){return S?!0:!(a.unstable_now()-D<X)}function V(){if(S=!1,w){var z=a.unstable_now();D=z;var $=!0;try{e:{E=!1,A&&(A=!1,P(I),I=-1),x=!0;var W=_;try{t:{for(U(z),v=i(p);v!==null&&!(v.expirationTime>z&&C());){var Ee=v.callback;if(typeof Ee=="function"){v.callback=null,_=v.priorityLevel;var L=Ee(v.expirationTime<=z);if(z=a.unstable_now(),typeof L=="function"){v.callback=L,U(z),$=!0;break t}v===i(p)&&s(p),U(z)}else s(p);v=i(p)}if(v!==null)$=!0;else{var J=i(h);J!==null&&me(H,J.startTime-z),$=!1}}break e}finally{v=null,_=W,x=!1}$=void 0}}finally{$?de():w=!1}}}var de;if(typeof N=="function")de=function(){N(V)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ce=ee.port2;ee.port1.onmessage=V,de=function(){ce.postMessage(null)}}else de=function(){y(V,0)};function me(z,$){I=y(function(){z(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(z){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var W=_;_=$;try{return z()}finally{_=W}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=_;_=z;try{return $()}finally{_=W}},a.unstable_scheduleCallback=function(z,$,W){var Ee=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Ee+W:Ee):W=Ee,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=W+L,z={id:g++,callback:$,priorityLevel:z,startTime:W,expirationTime:L,sortIndex:-1},W>Ee?(z.sortIndex=W,e(h,z),i(p)===null&&z===i(h)&&(A?(P(I),I=-1):A=!0,me(H,W-Ee))):(z.sortIndex=L,e(p,z),E||x||(E=!0,w||(w=!0,de()))),z},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(z){var $=_;return function(){var W=_;_=$;try{return z.apply(this,arguments)}finally{_=W}}}})(yd)),yd}var Yv;function DS(){return Yv||(Yv=1,_d.exports=CS()),_d.exports}var xd={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function US(){if(jv)return Vn;jv=1;var a=qh();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:h,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Vn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(p,h,null,g)},Vn.flushSync=function(p){var h=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=h,s.p=g,s.d.f()}},Vn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(p,h))},Vn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Vn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Vn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(p)},Vn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Vn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=d(h.as,h.crossOrigin);s.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(p)},Vn.requestFormReset=function(p){s.d.r(p)},Vn.unstable_batchedUpdates=function(p,h){return p(h)},Vn.useFormState=function(p,h,g){return f.H.useFormState(p,h,g)},Vn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Vn.version="19.1.1",Vn}var Zv;function y0(){if(Zv)return xd.exports;Zv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),xd.exports=US(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function LS(){if(Kv)return Io;Kv=1;var a=DS(),e=qh(),i=y0();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var c=r.return;if(c===null)break;var m=c.alternate;if(m===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===m.child){for(m=c.child;m;){if(m===r)return d(c),t;if(m===o)return d(c),n;m=m.sibling}throw Error(s(188))}if(r.return!==o.return)r=c,o=m;else{for(var M=!1,b=c.child;b;){if(b===r){M=!0,r=c,o=m;break}if(b===o){M=!0,o=c,r=m;break}b=b.sibling}if(!M){for(b=m.child;b;){if(b===r){M=!0,r=m,o=c;break}if(b===o){M=!0,o=m,r=c;break}b=b.sibling}if(!M)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ee?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case H:return"Suspense";case w:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case x:return"Portal";case N:return(t.displayName||"Context")+".Provider";case P:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var me=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},Ee=[],L=-1;function J(t){return{current:t}}function ye(t){0>L||(t.current=Ee[L],Ee[L]=null,L--)}function Te(t,n){L++,Ee[L]=t.current,t.current=n}var Q=J(null),ve=J(null),Ae=J(null),Le=J(null);function Be(t,n){switch(Te(Ae,n),Te(ve,t),Te(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?mv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=mv(n),t=gv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(Q),Te(Q,t)}function _t(){ye(Q),ye(ve),ye(Ae)}function qe(t){t.memoizedState!==null&&Te(Le,t);var n=Q.current,r=gv(n,t.type);n!==r&&(Te(ve,t),Te(Q,r))}function Ft(t){ve.current===t&&(ye(Q),ye(ve)),Le.current===t&&(ye(Le),No._currentValue=W)}var kt=Object.prototype.hasOwnProperty,Et=a.unstable_scheduleCallback,G=a.unstable_cancelCallback,Bn=a.unstable_shouldYield,Rt=a.unstable_requestPaint,pt=a.unstable_now,nt=a.unstable_getCurrentPriorityLevel,Xt=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,O=a.unstable_NormalPriority,T=a.unstable_LowPriority,ae=a.unstable_IdlePriority,xe=a.log,we=a.unstable_setDisableYieldValue,pe=null,ze=null;function Oe(t){if(typeof xe=="function"&&we(t),ze&&typeof ze.setStrictMode=="function")try{ze.setStrictMode(pe,t)}catch{}}var Ye=Math.clz32?Math.clz32:We,ut=Math.log,Ce=Math.LN2;function We(t){return t>>>=0,t===0?32:31-(ut(t)/Ce|0)|0}var rt=256,ot=4194304;function ke(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function yt(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var c=0,m=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~m,o!==0?c=ke(o):(M&=b,M!==0?c=ke(M):r||(r=b&~t,r!==0&&(c=ke(r))))):(b=o&~m,b!==0?c=ke(b):M!==0?c=ke(M):r||(r=o&~t,r!==0&&(c=ke(r)))),c===0?0:n!==0&&n!==c&&(n&m)===0&&(m=c&-c,r=n&-n,m>=r||m===32&&(r&4194048)!==0)?n:c}function ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Gt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var t=rt;return rt<<=1,(rt&4194048)===0&&(rt=256),t}function Ie(){var t=ot;return ot<<=1,(ot&62914560)===0&&(ot=4194304),t}function he(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Se(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ve(t,n,r,o,c,m){var M=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,ie=t.hiddenUpdates;for(r=M&~r;0<r;){var ge=31-Ye(r),Me=1<<ge;b[ge]=0,B[ge]=-1;var se=ie[ge];if(se!==null)for(ie[ge]=null,ge=0;ge<se.length;ge++){var ue=se[ge];ue!==null&&(ue.lane&=-536870913)}r&=~Me}o!==0&&Fe(t,o,0),m!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=m&~(M&~n))}function Fe(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ye(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function ht(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Ye(r),c=1<<o;c&n|t[o]&n&&(t[o]|=n),r&=~c}}function Kt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function dn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function F(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:Pv(t.type))}function K(t,n){var r=$.p;try{return $.p=t,n()}finally{$.p=r}}var re=Math.random().toString(36).slice(2),be="__reactFiber$"+re,Ue="__reactProps$"+re,Xe="__reactContainer$"+re,Je="__reactEvents$"+re,Ze="__reactListeners$"+re,tt="__reactHandles$"+re,at="__reactResources$"+re,Ke="__reactMarker$"+re;function je(t){delete t[be],delete t[Ue],delete t[Je],delete t[Ze],delete t[tt]}function vt(t){var n=t[be];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Xe]||r[be]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=xv(t);t!==null;){if(r=t[be])return r;t=xv(t)}return n}t=r,r=t.parentNode}return null}function Pt(t){if(t=t[be]||t[Xe]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function an(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function un(t){var n=t[at];return n||(n=t[at]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gt(t){t[Ke]=!0}var Wt=new Set,pi={};function Wn(t,n){R(t,n),R(t+"Capture",n)}function R(t,n){for(pi[t]=n,t=0;t<n.length;t++)Wt.add(n[t])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},le={};function j(t){return kt.call(le,t)?!0:kt.call(oe,t)?!1:Y.test(t)?le[t]=!0:(oe[t]=!0,!1)}function De(t,n,r){if(j(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Pe(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Re(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}var Ne,st;function $e(t){if(Ne===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Ne=n&&n[1]||"",st=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+t+st}var He=!1;function xt(t,n){if(!t||He)return"";He=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ue){var se=ue}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ue){se=ue}t.call(Me.prototype)}}else{try{throw Error()}catch(ue){se=ue}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ue){if(ue&&se&&typeof ue.stack=="string")return[ue.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),M=m[0],b=m[1];if(M&&b){var B=M.split(`
`),ie=b.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ie.length&&!ie[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===ie.length)for(o=B.length-1,c=ie.length-1;1<=o&&0<=c&&B[o]!==ie[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==ie[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==ie[c]){var ge=`
`+B[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=c);break}}}finally{He=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?$e(r):""}function Ut(t){switch(t.tag){case 26:case 27:case 5:return $e(t.type);case 16:return $e("Lazy");case 13:return $e("Suspense");case 19:return $e("SuspenseList");case 0:case 15:return xt(t.type,!1);case 11:return xt(t.type.render,!1);case 1:return xt(t.type,!0);case 31:return $e("Activity");default:return""}}function on(t){try{var n="";do n+=Ut(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lt(t){var n=Nt(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,m=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){o=""+M,m.call(this,M)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function hn(t){t._valueTracker||(t._valueTracker=lt(t))}function Bt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Nt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function In(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ea=/[\n"\\]/g;function rn(t){return t.replace(Ea,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ji(t,n,r,o,c,m,M,b){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Lt(n)):t.value!==""+Lt(n)&&(t.value=""+Lt(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Hn(t,M,Lt(n)):r!=null?Hn(t,M,Lt(r)):o!=null&&t.removeAttribute("value"),c==null&&m!=null&&(t.defaultChecked=!!m),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Lt(b):t.removeAttribute("name")}function tn(t,n,r,o,c,m,M,b){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),n!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||n!=null))return;r=r!=null?""+Lt(r):"",n=n!=null?""+Lt(n):r,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Hn(t,n,r){n==="number"&&In(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Tn(t,n,r,o){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Lt(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Cn(t,n,r){if(n!=null&&(n=""+Lt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Lt(r):""}function On(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(me(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Lt(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function zi(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mp(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Zi.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function gp(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&mp(t,c,o)}else for(var m in n)n.hasOwnProperty(m)&&mp(t,m,n[m])}function hc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var My=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ey=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return Ey.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var pc=null;function mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vr=null,kr=null;function vp(t){var n=Pt(t);if(n&&(t=n.stateNode)){var r=t[Ue]||null;e:switch(t=n.stateNode,n.type){case"input":if(ji(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+rn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var c=o[Ue]||null;if(!c)throw Error(s(90));ji(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Bt(o)}break e;case"textarea":Cn(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&Tn(t,!!r.multiple,n,!1)}}}var gc=!1;function _p(t,n,r){if(gc)return t(n,r);gc=!0;try{var o=t(n);return o}finally{if(gc=!1,(Vr!==null||kr!==null)&&($l(),Vr&&(n=Vr,t=kr,kr=Vr=null,vp(n),t)))for(n=0;n<t.length;n++)vp(t[n])}}function Ws(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Ue]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=!1;if(Ki)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){vc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{vc=!1}var Ta=null,_c=null,ml=null;function yp(){if(ml)return ml;var t,n=_c,r=n.length,o,c="value"in Ta?Ta.value:Ta.textContent,m=c.length;for(t=0;t<r&&n[t]===c[t];t++);var M=r-t;for(o=1;o<=M&&n[r-o]===c[m-o];o++);return ml=c.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function xp(){return!1}function Zn(t){function n(r,o,c,m,M){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(r=t[b],this[b]=r?r(m):m[b]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?vl:xp,this.isPropagationStopped=xp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Zn(or),Ys=g({},or,{view:0,detail:0}),Ty=Zn(Ys),yc,xc,js,yl=g({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(yc=t.screenX-js.screenX,xc=t.screenY-js.screenY):xc=yc=0,js=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Sp=Zn(yl),by=g({},yl,{dataTransfer:0}),Ay=Zn(by),Ry=g({},Ys,{relatedTarget:0}),Sc=Zn(Ry),wy=g({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=Zn(wy),Dy=g({},or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uy=Zn(Dy),Ly=g({},or,{data:0}),Mp=Zn(Ly),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Py[t])?!!n[t]:!1}function Mc(){return zy}var Fy=g({},Ys,{key:function(t){if(t.key){var n=Ny[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),By=Zn(Fy),Iy=g({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=Zn(Iy),Hy=g({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),Gy=Zn(Hy),Vy=g({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),ky=Zn(Vy),Xy=g({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wy=Zn(Xy),qy=g({},or,{newState:0,oldState:0}),Yy=Zn(qy),jy=[9,13,27,32],Ec=Ki&&"CompositionEvent"in window,Zs=null;Ki&&"documentMode"in document&&(Zs=document.documentMode);var Zy=Ki&&"TextEvent"in window&&!Zs,Tp=Ki&&(!Ec||Zs&&8<Zs&&11>=Zs),bp=" ",Ap=!1;function Rp(t,n){switch(t){case"keyup":return jy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function Ky(t,n){switch(t){case"compositionend":return wp(n);case"keypress":return n.which!==32?null:(Ap=!0,bp);case"textInput":return t=n.data,t===bp&&Ap?null:t;default:return null}}function Qy(t,n){if(Xr)return t==="compositionend"||!Ec&&Rp(t,n)?(t=yp(),ml=_c=Ta=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Tp&&n.locale!=="ko"?null:n.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Jy[t.type]:n==="textarea"}function Dp(t,n,r,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=ru(n,"onChange"),0<n.length&&(r=new _l("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var Ks=null,Qs=null;function $y(t){cv(t,0)}function xl(t){var n=an(t);if(Bt(n))return t}function Up(t,n){if(t==="change")return n}var Lp=!1;if(Ki){var Tc;if(Ki){var bc="oninput"in document;if(!bc){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),bc=typeof Np.oninput=="function"}Tc=bc}else Tc=!1;Lp=Tc&&(!document.documentMode||9<document.documentMode)}function Op(){Ks&&(Ks.detachEvent("onpropertychange",Pp),Qs=Ks=null)}function Pp(t){if(t.propertyName==="value"&&xl(Qs)){var n=[];Dp(n,Qs,t,mc(t)),_p($y,n)}}function ex(t,n,r){t==="focusin"?(Op(),Ks=n,Qs=r,Ks.attachEvent("onpropertychange",Pp)):t==="focusout"&&Op()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(Qs)}function nx(t,n){if(t==="click")return xl(n)}function ix(t,n){if(t==="input"||t==="change")return xl(n)}function ax(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:ax;function Js(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!kt.call(n,c)||!ii(t[c],n[c]))return!1}return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,n){var r=zp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zp(r)}}function Bp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Bp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=In(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=In(t.document)}return n}function Ac(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var rx=Ki&&"documentMode"in document&&11>=document.documentMode,Wr=null,Rc=null,$s=null,wc=!1;function Hp(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wc||Wr==null||Wr!==In(o)||(o=Wr,"selectionStart"in o&&Ac(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$s&&Js($s,o)||($s=o,o=ru(Rc,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=Wr)))}function lr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var qr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},Cc={},Gp={};Ki&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function ur(t){if(Cc[t])return Cc[t];if(!qr[t])return t;var n=qr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Gp)return Cc[t]=n[r];return t}var Vp=ur("animationend"),kp=ur("animationiteration"),Xp=ur("animationstart"),sx=ur("transitionrun"),ox=ur("transitionstart"),lx=ur("transitioncancel"),Wp=ur("transitionend"),qp=new Map,Dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dc.push("scrollEnd");function Ai(t,n){qp.set(t,n),Wn(n,[t])}var Yp=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var r=Yp.get(t);return r!==void 0?r:(n={value:t,source:n,stack:on(n)},Yp.set(t,n),n)}return{value:t,source:n,stack:on(n)}}var gi=[],Yr=0,Uc=0;function Sl(){for(var t=Yr,n=Uc=Yr=0;n<t;){var r=gi[n];gi[n++]=null;var o=gi[n];gi[n++]=null;var c=gi[n];gi[n++]=null;var m=gi[n];if(gi[n++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}m!==0&&jp(r,c,m)}}function Ml(t,n,r,o){gi[Yr++]=t,gi[Yr++]=n,gi[Yr++]=r,gi[Yr++]=o,Uc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lc(t,n,r,o){return Ml(t,n,r,o),El(t)}function jr(t,n){return Ml(t,null,null,n),El(t)}function jp(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var c=!1,m=t.return;m!==null;)m.childLanes|=r,o=m.alternate,o!==null&&(o.childLanes|=r),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(c=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,c&&n!==null&&(c=31-Ye(r),t=m.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=r|536870912),m):null}function El(t){if(50<bo)throw bo=0,If=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function ux(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,n,r,o){return new ux(t,n,r,o)}function Nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var r=t.alternate;return r===null?(r=ai(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Zp(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,r,o,c,m){var M=0;if(o=t,typeof t=="function")Nc(t)&&(M=1);else if(typeof t=="string")M=fS(t,r,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ai(31,r,n,c),t.elementType=D,t.lanes=m,t;case E:return cr(r.children,c,m,n);case A:M=8,c|=24;break;case S:return t=ai(12,r,n,c|2),t.elementType=S,t.lanes=m,t;case H:return t=ai(13,r,n,c),t.elementType=H,t.lanes=m,t;case w:return t=ai(19,r,n,c),t.elementType=w,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case N:M=10;break e;case P:M=9;break e;case U:M=11;break e;case I:M=14;break e;case X:M=16,o=null;break e}M=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ai(M,r,n,c),n.elementType=t,n.type=o,n.lanes=m,n}function cr(t,n,r,o){return t=ai(7,t,o,n),t.lanes=r,t}function Oc(t,n,r){return t=ai(6,t,null,n),t.lanes=r,t}function Pc(t,n,r){return n=ai(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Kr=[],Qr=0,bl=null,Al=0,vi=[],_i=0,fr=null,Ji=1,$i="";function dr(t,n){Kr[Qr++]=Al,Kr[Qr++]=bl,bl=t,Al=n}function Kp(t,n,r){vi[_i++]=Ji,vi[_i++]=$i,vi[_i++]=fr,fr=t;var o=Ji;t=$i;var c=32-Ye(o)-1;o&=~(1<<c),r+=1;var m=32-Ye(n)+c;if(30<m){var M=c-c%5;m=(o&(1<<M)-1).toString(32),o>>=M,c-=M,Ji=1<<32-Ye(n)+c|r<<c|o,$i=m+t}else Ji=1<<m|r<<c|o,$i=t}function zc(t){t.return!==null&&(dr(t,1),Kp(t,1,0))}function Fc(t){for(;t===bl;)bl=Kr[--Qr],Kr[Qr]=null,Al=Kr[--Qr],Kr[Qr]=null;for(;t===fr;)fr=vi[--_i],vi[_i]=null,$i=vi[--_i],vi[_i]=null,Ji=vi[--_i],vi[_i]=null}var qn=null,pn=null,Vt=!1,hr=null,Fi=!1,Bc=Error(s(519));function pr(t){var n=Error(s(418,""));throw no(mi(n,t)),Bc}function Qp(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[be]=t,n[Ue]=o,r){case"dialog":Ct("cancel",n),Ct("close",n);break;case"iframe":case"object":case"embed":Ct("load",n);break;case"video":case"audio":for(r=0;r<Ro.length;r++)Ct(Ro[r],n);break;case"source":Ct("error",n);break;case"img":case"image":case"link":Ct("error",n),Ct("load",n);break;case"details":Ct("toggle",n);break;case"input":Ct("invalid",n),tn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),hn(n);break;case"select":Ct("invalid",n);break;case"textarea":Ct("invalid",n),On(n,o.value,o.defaultValue,o.children),hn(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||pv(n.textContent,r)?(o.popover!=null&&(Ct("beforetoggle",n),Ct("toggle",n)),o.onScroll!=null&&Ct("scroll",n),o.onScrollEnd!=null&&Ct("scrollend",n),o.onClick!=null&&(n.onclick=su),n=!0):n=!1,n||pr(t)}function Jp(t){for(qn=t.return;qn;)switch(qn.tag){case 5:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:qn=qn.return}}function eo(t){if(t!==qn)return!1;if(!Vt)return Jp(t),Vt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||td(t.type,t.memoizedProps)),r=!r),r&&pn&&pr(t),Jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){pn=wi(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}pn=null}}else n===27?(n=pn,Ha(t.type)?(t=rd,rd=null,pn=t):pn=n):pn=qn?wi(t.stateNode.nextSibling):null;return!0}function to(){pn=qn=null,Vt=!1}function $p(){var t=hr;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),hr=null),t}function no(t){hr===null?hr=[t]:hr.push(t)}var Ic=J(null),mr=null,ea=null;function ba(t,n,r){Te(Ic,n._currentValue),n._currentValue=r}function ta(t){t._currentValue=Ic.current,ye(Ic)}function Hc(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Gc(t,n,r,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var m=c.dependencies;if(m!==null){var M=c.child;m=m.firstContext;e:for(;m!==null;){var b=m;m=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){m.lanes|=r,b=m.alternate,b!==null&&(b.lanes|=r),Hc(m.return,r,t),o||(M=null);break e}m=b.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(s(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),Hc(M,r,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function io(t,n,r,o){t=null;for(var c=n,m=!1;c!==null;){if(!m){if((c.flags&524288)!==0)m=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var b=c.type;ii(c.pendingProps.value,M.value)||(t!==null?t.push(b):t=[b])}}else if(c===Le.current){if(M=c.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}c=c.return}t!==null&&Gc(n,t,r,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gr(t){mr=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gn(t){return em(mr,t)}function wl(t,n){return mr===null&&gr(t),em(t,n)}function em(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},ea===null){if(t===null)throw Error(s(308));ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ea=ea.next=n;return r}var cx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},fx=a.unstable_scheduleCallback,dx=a.unstable_NormalPriority,bn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vc(){return{controller:new cx,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&fx(dx,function(){t.controller.abort()})}var ro=null,kc=0,Jr=0,$r=null;function hx(t,n){if(ro===null){var r=ro=[];kc=0,Jr=qf(),$r={status:"pending",value:void 0,then:function(o){r.push(o)}}}return kc++,n.then(tm,tm),n}function tm(){if(--kc===0&&ro!==null){$r!==null&&($r.status="fulfilled");var t=ro;ro=null,Jr=0,$r=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function px(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var nm=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&hx(t,n),nm!==null&&nm(t,n)};var vr=J(null);function Xc(){var t=vr.current;return t!==null?t:sn.pooledCache}function Cl(t,n){n===null?Te(vr,vr.current):Te(vr,n.pool)}function im(){var t=Xc();return t===null?null:{parent:bn._currentValue,pool:t}}var so=Error(s(460)),am=Error(s(474)),Dl=Error(s(542)),Wc={then:function(){}};function rm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ul(){}function sm(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Ul,Ul),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lm(t),t;default:if(typeof n.status=="string")n.then(Ul,Ul);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lm(t),t}throw oo=n,so}}var oo=null;function om(){if(oo===null)throw Error(s(459));var t=oo;return oo=null,t}function lm(t){if(t===so||t===Dl)throw Error(s(483))}var Aa=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Yt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=El(t),jp(t,null,r),n}return Ml(t,o,n,r),El(t)}function lo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,ht(t,r)}}function jc(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?c=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?c=m=n:m=m.next=n}else c=m=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Zc=!1;function uo(){if(Zc){var t=$r;if(t!==null)throw t}}function co(t,n,r,o){Zc=!1;var c=t.updateQueue;Aa=!1;var m=c.firstBaseUpdate,M=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,ie=B.next;B.next=null,M===null?m=ie:M.next=ie,M=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,b=ge.lastBaseUpdate,b!==M&&(b===null?ge.firstBaseUpdate=ie:b.next=ie,ge.lastBaseUpdate=B))}if(m!==null){var Me=c.baseState;M=0,ge=ie=B=null,b=m;do{var se=b.lane&-536870913,ue=se!==b.lane;if(ue?(zt&se)===se:(o&se)===se){se!==0&&se===Jr&&(Zc=!0),ge!==null&&(ge=ge.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var mt=t,ft=b;se=n;var $t=r;switch(ft.tag){case 1:if(mt=ft.payload,typeof mt=="function"){Me=mt.call($t,Me,se);break e}Me=mt;break e;case 3:mt.flags=mt.flags&-65537|128;case 0:if(mt=ft.payload,se=typeof mt=="function"?mt.call($t,Me,se):mt,se==null)break e;Me=g({},Me,se);break e;case 2:Aa=!0}}se=b.callback,se!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=c.callbacks,ue===null?c.callbacks=[se]:ue.push(se))}else ue={lane:se,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ge===null?(ie=ge=ue,B=Me):ge=ge.next=ue,M|=se;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ue=b,b=ue.next,ue.next=null,c.lastBaseUpdate=ue,c.shared.pending=null}}while(!0);ge===null&&(B=Me),c.baseState=B,c.firstBaseUpdate=ie,c.lastBaseUpdate=ge,m===null&&(c.shared.lanes=0),za|=M,t.lanes=M,t.memoizedState=Me}}function um(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function cm(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)um(r[t],n)}var es=J(null),Ll=J(0);function fm(t,n){t=la,Te(Ll,t),Te(es,n),la=t|n.baseLanes}function Kc(){Te(Ll,la),Te(es,es.current)}function Qc(){la=Ll.current,ye(es),ye(Ll)}var Ca=0,bt=null,Qt=null,yn=null,Nl=!1,ts=!1,_r=!1,Ol=0,fo=0,ns=null,mx=0;function gn(){throw Error(s(321))}function Jc(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!ii(t[r],n[r]))return!1;return!0}function $c(t,n,r,o,c,m){return Ca=m,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?jm:Zm,_r=!1,m=r(o,c),_r=!1,ts&&(m=hm(n,r,o,c)),dm(t),m}function dm(t){z.H=Hl;var n=Qt!==null&&Qt.next!==null;if(Ca=0,yn=Qt=bt=null,Nl=!1,fo=0,ns=null,n)throw Error(s(300));t===null||Dn||(t=t.dependencies,t!==null&&Rl(t)&&(Dn=!0))}function hm(t,n,r,o){bt=t;var c=0;do{if(ts&&(ns=null),fo=0,ts=!1,25<=c)throw Error(s(301));if(c+=1,yn=Qt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=Mx,m=n(r,o)}while(ts);return m}function gx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(bt.flags|=1024),n}function ef(){var t=Ol!==0;return Ol=0,t}function tf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function nf(t){if(Nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Nl=!1}Ca=0,yn=Qt=bt=null,ts=!1,fo=Ol=0,ns=null}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?bt.memoizedState=yn=t:yn=yn.next=t,yn}function xn(){if(Qt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var n=yn===null?bt.memoizedState:yn.next;if(n!==null)yn=n,Qt=t;else{if(t===null)throw bt.alternate===null?Error(s(467)):Error(s(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},yn===null?bt.memoizedState=yn=t:yn=yn.next=t}return yn}function af(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,ns===null&&(ns=[]),t=sm(ns,t,n),n=bt,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?jm:Zm),t}function Pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===N)return Gn(t)}throw Error(s(438,String(t)))}function rf(t){var n=null,r=bt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=af(),bt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=C;return n.index++,r}function na(t,n){return typeof n=="function"?n(t):n}function zl(t){var n=xn();return sf(n,Qt,t)}function sf(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var c=t.baseQueue,m=o.pending;if(m!==null){if(c!==null){var M=c.next;c.next=m.next,m.next=M}n.baseQueue=c=m,o.pending=null}if(m=t.baseState,c===null)t.memoizedState=m;else{n=c.next;var b=M=null,B=null,ie=n,ge=!1;do{var Me=ie.lane&-536870913;if(Me!==ie.lane?(zt&Me)===Me:(Ca&Me)===Me){var se=ie.revertLane;if(se===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Me===Jr&&(ge=!0);else if((Ca&se)===se){ie=ie.next,se===Jr&&(ge=!0);continue}else Me={lane:0,revertLane:ie.revertLane,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},B===null?(b=B=Me,M=m):B=B.next=Me,bt.lanes|=se,za|=se;Me=ie.action,_r&&r(m,Me),m=ie.hasEagerState?ie.eagerState:r(m,Me)}else se={lane:Me,revertLane:ie.revertLane,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},B===null?(b=B=se,M=m):B=B.next=se,bt.lanes|=Me,za|=Me;ie=ie.next}while(ie!==null&&ie!==n);if(B===null?M=m:B.next=b,!ii(m,t.memoizedState)&&(Dn=!0,ge&&(r=$r,r!==null)))throw r;t.memoizedState=m,t.baseState=M,t.baseQueue=B,o.lastRenderedState=m}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function of(t){var n=xn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,c=r.pending,m=n.memoizedState;if(c!==null){r.pending=null;var M=c=c.next;do m=t(m,M.action),M=M.next;while(M!==c);ii(m,n.memoizedState)||(Dn=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),r.lastRenderedState=m}return[m,o]}function pm(t,n,r){var o=bt,c=xn(),m=Vt;if(m){if(r===void 0)throw Error(s(407));r=r()}else r=n();var M=!ii((Qt||c).memoizedState,r);M&&(c.memoizedState=r,Dn=!0),c=c.queue;var b=vm.bind(null,o,c,t);if(po(2048,8,b,[t]),c.getSnapshot!==n||M||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,is(9,Fl(),gm.bind(null,o,c,r,n),null),sn===null)throw Error(s(349));m||(Ca&124)!==0||mm(o,n,r)}return r}function mm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=bt.updateQueue,n===null?(n=af(),bt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function gm(t,n,r,o){n.value=r,n.getSnapshot=o,_m(n)&&ym(t)}function vm(t,n,r){return r(function(){_m(n)&&ym(t)})}function _m(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!ii(t,r)}catch{return!0}}function ym(t){var n=jr(t,2);n!==null&&ui(n,t,2)}function lf(t){var n=Kn();if(typeof t=="function"){var r=t;if(t=r(),_r){Oe(!0);try{r()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function xm(t,n,r,o){return t.baseState=r,sf(t,Qt,typeof o=="function"?o:na)}function vx(t,n,r,o,c){if(Il(t))throw Error(s(485));if(t=n.action,t!==null){var m={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};z.T!==null?r(!0):m.isTransition=!1,o(m),r=n.pending,r===null?(m.next=n.pending=m,Sm(n,m)):(m.next=r.next,n.pending=r.next=m)}}function Sm(t,n){var r=n.action,o=n.payload,c=t.state;if(n.isTransition){var m=z.T,M={};z.T=M;try{var b=r(c,o),B=z.S;B!==null&&B(M,b),Mm(t,n,b)}catch(ie){uf(t,n,ie)}finally{z.T=m}}else try{m=r(c,o),Mm(t,n,m)}catch(ie){uf(t,n,ie)}}function Mm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Em(t,n,o)},function(o){return uf(t,n,o)}):Em(t,n,r)}function Em(t,n,r){n.status="fulfilled",n.value=r,Tm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Sm(t,r)))}function uf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Tm(n),n=n.next;while(n!==o)}t.action=null}function Tm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function bm(t,n){return n}function Am(t,n){if(Vt){var r=sn.formState;if(r!==null){e:{var o=bt;if(Vt){if(pn){t:{for(var c=pn,m=Fi;c.nodeType!==8;){if(!m){c=null;break t}if(c=wi(c.nextSibling),c===null){c=null;break t}}m=c.data,c=m==="F!"||m==="F"?c:null}if(c){pn=wi(c.nextSibling),o=c.data==="F!";break e}}pr(o)}o=!1}o&&(n=r[0])}}return r=Kn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:n},r.queue=o,r=Wm.bind(null,bt,o),o.dispatch=r,o=lf(!1),m=pf.bind(null,bt,!1,o.queue),o=Kn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,r=vx.bind(null,bt,c,m,r),c.dispatch=r,o.memoizedState=t,[n,r,!1]}function Rm(t){var n=xn();return wm(n,Qt,t)}function wm(t,n,r){if(n=sf(t,n,bm)[0],t=zl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(M){throw M===so?Dl:M}else o=n;n=xn();var c=n.queue,m=c.dispatch;return r!==n.memoizedState&&(bt.flags|=2048,is(9,Fl(),_x.bind(null,c,r),null)),[o,m,t]}function _x(t,n){t.action=n}function Cm(t){var n=xn(),r=Qt;if(r!==null)return wm(n,r,t);xn(),n=n.memoizedState,r=xn();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function is(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=af(),bt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Fl(){return{destroy:void 0,resource:void 0}}function Dm(){return xn().memoizedState}function Bl(t,n,r,o){var c=Kn();o=o===void 0?null:o,bt.flags|=t,c.memoizedState=is(1|n,Fl(),r,o)}function po(t,n,r,o){var c=xn();o=o===void 0?null:o;var m=c.memoizedState.inst;Qt!==null&&o!==null&&Jc(o,Qt.memoizedState.deps)?c.memoizedState=is(n,m,r,o):(bt.flags|=t,c.memoizedState=is(1|n,m,r,o))}function Um(t,n){Bl(8390656,8,t,n)}function Lm(t,n){po(2048,8,t,n)}function Nm(t,n){return po(4,2,t,n)}function Om(t,n){return po(4,4,t,n)}function Pm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function zm(t,n,r){r=r!=null?r.concat([t]):null,po(4,4,Pm.bind(null,n,t),r)}function cf(){}function Fm(t,n){var r=xn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Jc(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function Bm(t,n){var r=xn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Jc(n,o[1]))return o[0];if(o=t(),_r){Oe(!0);try{t()}finally{Oe(!1)}}return r.memoizedState=[o,n],o}function ff(t,n,r){return r===void 0||(Ca&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=Gg(),bt.lanes|=t,za|=t,r)}function Im(t,n,r,o){return ii(r,n)?r:es.current!==null?(t=ff(t,r,o),ii(t,n)||(Dn=!0),t):(Ca&42)===0?(Dn=!0,t.memoizedState=r):(t=Gg(),bt.lanes|=t,za|=t,n)}function Hm(t,n,r,o,c){var m=$.p;$.p=m!==0&&8>m?m:8;var M=z.T,b={};z.T=b,pf(t,!1,n,r);try{var B=c(),ie=z.S;if(ie!==null&&ie(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ge=px(B,o);mo(t,n,ge,li(t))}else mo(t,n,o,li(t))}catch(Me){mo(t,n,{then:function(){},status:"rejected",reason:Me},li())}finally{$.p=m,z.T=M}}function yx(){}function df(t,n,r,o){if(t.tag!==5)throw Error(s(476));var c=Gm(t).queue;Hm(t,c,n,W,r===null?yx:function(){return Vm(t),r(o)})}function Gm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:W},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vm(t){var n=Gm(t).next.queue;mo(t,n,{},li())}function hf(){return Gn(No)}function km(){return xn().memoizedState}function Xm(){return xn().memoizedState}function xx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=li();t=Ra(r);var o=wa(n,t,r);o!==null&&(ui(o,n,r),lo(o,n,r)),n={cache:Vc()},t.payload=n;return}n=n.return}}function Sx(t,n,r){var o=li();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Il(t)?qm(n,r):(r=Lc(t,n,r,o),r!==null&&(ui(r,t,o),Ym(r,n,o)))}function Wm(t,n,r){var o=li();mo(t,n,r,o)}function mo(t,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Il(t))qm(n,c);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var M=n.lastRenderedState,b=m(M,r);if(c.hasEagerState=!0,c.eagerState=b,ii(b,M))return Ml(t,n,c,0),sn===null&&Sl(),!1}catch{}finally{}if(r=Lc(t,n,c,o),r!==null)return ui(r,t,o),Ym(r,n,o),!0}return!1}function pf(t,n,r,o){if(o={lane:2,revertLane:qf(),action:o,hasEagerState:!1,eagerState:null,next:null},Il(t)){if(n)throw Error(s(479))}else n=Lc(t,r,o,2),n!==null&&ui(n,t,2)}function Il(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function qm(t,n){ts=Nl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Ym(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,ht(t,r)}}var Hl={readContext:Gn,use:Pl,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn},jm={readContext:Gn,use:Pl,useCallback:function(t,n){return Kn().memoizedState=[t,n===void 0?null:n],t},useContext:Gn,useEffect:Um,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Bl(4194308,4,Pm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Bl(4194308,4,t,n)},useInsertionEffect:function(t,n){Bl(4,2,t,n)},useMemo:function(t,n){var r=Kn();n=n===void 0?null:n;var o=t();if(_r){Oe(!0);try{t()}finally{Oe(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Kn();if(r!==void 0){var c=r(n);if(_r){Oe(!0);try{r(n)}finally{Oe(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Sx.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=Kn();return t={current:t},n.memoizedState=t},useState:function(t){t=lf(t);var n=t.queue,r=Wm.bind(null,bt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:cf,useDeferredValue:function(t,n){var r=Kn();return ff(r,t,n)},useTransition:function(){var t=lf(!1);return t=Hm.bind(null,bt,t.queue,!0,!1),Kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=bt,c=Kn();if(Vt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),sn===null)throw Error(s(349));(zt&124)!==0||mm(o,n,r)}c.memoizedState=r;var m={value:r,getSnapshot:n};return c.queue=m,Um(vm.bind(null,o,m,t),[t]),o.flags|=2048,is(9,Fl(),gm.bind(null,o,m,r,n),null),r},useId:function(){var t=Kn(),n=sn.identifierPrefix;if(Vt){var r=$i,o=Ji;r=(o&~(1<<32-Ye(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=Ol++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=mx++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:hf,useFormState:Am,useActionState:Am,useOptimistic:function(t){var n=Kn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=pf.bind(null,bt,!0,r),r.dispatch=n,[t,n]},useMemoCache:rf,useCacheRefresh:function(){return Kn().memoizedState=xx.bind(null,bt)}},Zm={readContext:Gn,use:Pl,useCallback:Fm,useContext:Gn,useEffect:Lm,useImperativeHandle:zm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:Bm,useReducer:zl,useRef:Dm,useState:function(){return zl(na)},useDebugValue:cf,useDeferredValue:function(t,n){var r=xn();return Im(r,Qt.memoizedState,t,n)},useTransition:function(){var t=zl(na)[0],n=xn().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:hf,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,n){var r=xn();return xm(r,Qt,t,n)},useMemoCache:rf,useCacheRefresh:Xm},Mx={readContext:Gn,use:Pl,useCallback:Fm,useContext:Gn,useEffect:Lm,useImperativeHandle:zm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:Bm,useReducer:of,useRef:Dm,useState:function(){return of(na)},useDebugValue:cf,useDeferredValue:function(t,n){var r=xn();return Qt===null?ff(r,t,n):Im(r,Qt.memoizedState,t,n)},useTransition:function(){var t=of(na)[0],n=xn().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:hf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var r=xn();return Qt!==null?xm(r,Qt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:rf,useCacheRefresh:Xm},as=null,go=0;function Gl(t){var n=go;return go+=1,as===null&&(as=[]),sm(as,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Vl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Km(t){var n=t._init;return n(t._payload)}function Qm(t){function n(Z,k){if(t){var te=Z.deletions;te===null?(Z.deletions=[k],Z.flags|=16):te.push(k)}}function r(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function c(Z,k){return Z=Qi(Z,k),Z.index=0,Z.sibling=null,Z}function m(Z,k,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<k?(Z.flags|=67108866,k):te):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function M(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,k,te,_e){return k===null||k.tag!==6?(k=Oc(te,Z.mode,_e),k.return=Z,k):(k=c(k,te),k.return=Z,k)}function B(Z,k,te,_e){var Qe=te.type;return Qe===E?ge(Z,k,te.props.children,_e,te.key):k!==null&&(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===X&&Km(Qe)===k.type)?(k=c(k,te.props),vo(k,te),k.return=Z,k):(k=Tl(te.type,te.key,te.props,null,Z.mode,_e),vo(k,te),k.return=Z,k)}function ie(Z,k,te,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==te.containerInfo||k.stateNode.implementation!==te.implementation?(k=Pc(te,Z.mode,_e),k.return=Z,k):(k=c(k,te.children||[]),k.return=Z,k)}function ge(Z,k,te,_e,Qe){return k===null||k.tag!==7?(k=cr(te,Z.mode,_e,Qe),k.return=Z,k):(k=c(k,te),k.return=Z,k)}function Me(Z,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Oc(""+k,Z.mode,te),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return te=Tl(k.type,k.key,k.props,null,Z.mode,te),vo(te,k),te.return=Z,te;case x:return k=Pc(k,Z.mode,te),k.return=Z,k;case X:var _e=k._init;return k=_e(k._payload),Me(Z,k,te)}if(me(k)||de(k))return k=cr(k,Z.mode,te,null),k.return=Z,k;if(typeof k.then=="function")return Me(Z,Gl(k),te);if(k.$$typeof===N)return Me(Z,wl(Z,k),te);Vl(Z,k)}return null}function se(Z,k,te,_e){var Qe=k!==null?k.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Qe!==null?null:b(Z,k,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case _:return te.key===Qe?B(Z,k,te,_e):null;case x:return te.key===Qe?ie(Z,k,te,_e):null;case X:return Qe=te._init,te=Qe(te._payload),se(Z,k,te,_e)}if(me(te)||de(te))return Qe!==null?null:ge(Z,k,te,_e,null);if(typeof te.then=="function")return se(Z,k,Gl(te),_e);if(te.$$typeof===N)return se(Z,k,wl(Z,te),_e);Vl(Z,te)}return null}function ue(Z,k,te,_e,Qe){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Z=Z.get(te)||null,b(k,Z,""+_e,Qe);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case _:return Z=Z.get(_e.key===null?te:_e.key)||null,B(k,Z,_e,Qe);case x:return Z=Z.get(_e.key===null?te:_e.key)||null,ie(k,Z,_e,Qe);case X:var At=_e._init;return _e=At(_e._payload),ue(Z,k,te,_e,Qe)}if(me(_e)||de(_e))return Z=Z.get(te)||null,ge(k,Z,_e,Qe,null);if(typeof _e.then=="function")return ue(Z,k,te,Gl(_e),Qe);if(_e.$$typeof===N)return ue(Z,k,te,wl(k,_e),Qe);Vl(k,_e)}return null}function mt(Z,k,te,_e){for(var Qe=null,At=null,it=k,dt=k=0,Ln=null;it!==null&&dt<te.length;dt++){it.index>dt?(Ln=it,it=null):Ln=it.sibling;var It=se(Z,it,te[dt],_e);if(It===null){it===null&&(it=Ln);break}t&&it&&It.alternate===null&&n(Z,it),k=m(It,k,dt),At===null?Qe=It:At.sibling=It,At=It,it=Ln}if(dt===te.length)return r(Z,it),Vt&&dr(Z,dt),Qe;if(it===null){for(;dt<te.length;dt++)it=Me(Z,te[dt],_e),it!==null&&(k=m(it,k,dt),At===null?Qe=it:At.sibling=it,At=it);return Vt&&dr(Z,dt),Qe}for(it=o(it);dt<te.length;dt++)Ln=ue(it,Z,dt,te[dt],_e),Ln!==null&&(t&&Ln.alternate!==null&&it.delete(Ln.key===null?dt:Ln.key),k=m(Ln,k,dt),At===null?Qe=Ln:At.sibling=Ln,At=Ln);return t&&it.forEach(function(Wa){return n(Z,Wa)}),Vt&&dr(Z,dt),Qe}function ft(Z,k,te,_e){if(te==null)throw Error(s(151));for(var Qe=null,At=null,it=k,dt=k=0,Ln=null,It=te.next();it!==null&&!It.done;dt++,It=te.next()){it.index>dt?(Ln=it,it=null):Ln=it.sibling;var Wa=se(Z,it,It.value,_e);if(Wa===null){it===null&&(it=Ln);break}t&&it&&Wa.alternate===null&&n(Z,it),k=m(Wa,k,dt),At===null?Qe=Wa:At.sibling=Wa,At=Wa,it=Ln}if(It.done)return r(Z,it),Vt&&dr(Z,dt),Qe;if(it===null){for(;!It.done;dt++,It=te.next())It=Me(Z,It.value,_e),It!==null&&(k=m(It,k,dt),At===null?Qe=It:At.sibling=It,At=It);return Vt&&dr(Z,dt),Qe}for(it=o(it);!It.done;dt++,It=te.next())It=ue(it,Z,dt,It.value,_e),It!==null&&(t&&It.alternate!==null&&it.delete(It.key===null?dt:It.key),k=m(It,k,dt),At===null?Qe=It:At.sibling=It,At=It);return t&&it.forEach(function(ES){return n(Z,ES)}),Vt&&dr(Z,dt),Qe}function $t(Z,k,te,_e){if(typeof te=="object"&&te!==null&&te.type===E&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case _:e:{for(var Qe=te.key;k!==null;){if(k.key===Qe){if(Qe=te.type,Qe===E){if(k.tag===7){r(Z,k.sibling),_e=c(k,te.props.children),_e.return=Z,Z=_e;break e}}else if(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===X&&Km(Qe)===k.type){r(Z,k.sibling),_e=c(k,te.props),vo(_e,te),_e.return=Z,Z=_e;break e}r(Z,k);break}else n(Z,k);k=k.sibling}te.type===E?(_e=cr(te.props.children,Z.mode,_e,te.key),_e.return=Z,Z=_e):(_e=Tl(te.type,te.key,te.props,null,Z.mode,_e),vo(_e,te),_e.return=Z,Z=_e)}return M(Z);case x:e:{for(Qe=te.key;k!==null;){if(k.key===Qe)if(k.tag===4&&k.stateNode.containerInfo===te.containerInfo&&k.stateNode.implementation===te.implementation){r(Z,k.sibling),_e=c(k,te.children||[]),_e.return=Z,Z=_e;break e}else{r(Z,k);break}else n(Z,k);k=k.sibling}_e=Pc(te,Z.mode,_e),_e.return=Z,Z=_e}return M(Z);case X:return Qe=te._init,te=Qe(te._payload),$t(Z,k,te,_e)}if(me(te))return mt(Z,k,te,_e);if(de(te)){if(Qe=de(te),typeof Qe!="function")throw Error(s(150));return te=Qe.call(te),ft(Z,k,te,_e)}if(typeof te.then=="function")return $t(Z,k,Gl(te),_e);if(te.$$typeof===N)return $t(Z,k,wl(Z,te),_e);Vl(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,k!==null&&k.tag===6?(r(Z,k.sibling),_e=c(k,te),_e.return=Z,Z=_e):(r(Z,k),_e=Oc(te,Z.mode,_e),_e.return=Z,Z=_e),M(Z)):r(Z,k)}return function(Z,k,te,_e){try{go=0;var Qe=$t(Z,k,te,_e);return as=null,Qe}catch(it){if(it===so||it===Dl)throw it;var At=ai(29,it,null,Z.mode);return At.lanes=_e,At.return=Z,At}finally{}}}var rs=Qm(!0),Jm=Qm(!1),yi=J(null),Bi=null;function Da(t){var n=t.alternate;Te(An,An.current&1),Te(yi,t),Bi===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(Bi=t)}function $m(t){if(t.tag===22){if(Te(An,An.current),Te(yi,t),Bi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Bi=t)}}else Ua()}function Ua(){Te(An,An.current),Te(yi,yi.current)}function ia(t){ye(yi),Bi===t&&(Bi=null),ye(An)}var An=J(0);function kl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||ad(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function mf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var gf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=li(),c=Ra(o);c.payload=n,r!=null&&(c.callback=r),n=wa(t,c,o),n!==null&&(ui(n,t,o),lo(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=li(),c=Ra(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=wa(t,c,o),n!==null&&(ui(n,t,o),lo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=li(),o=Ra(r);o.tag=2,n!=null&&(o.callback=n),n=wa(t,o,r),n!==null&&(ui(n,t,r),lo(n,t,r))}};function eg(t,n,r,o,c,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,m,M):n.prototype&&n.prototype.isPureReactComponent?!Js(r,o)||!Js(c,m):!0}function tg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&gf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ng(t){Xl(t)}function ig(t){console.error(t)}function ag(t){Xl(t)}function Wl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function rg(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function vf(t,n,r){return r=Ra(r),r.tag=3,r.payload={element:null},r.callback=function(){Wl(t,n)},r}function sg(t){return t=Ra(t),t.tag=3,t}function og(t,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var m=o.value;t.payload=function(){return c(m)},t.callback=function(){rg(n,r,o)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){rg(n,r,o),typeof c!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Ex(t,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&io(n,r,c,!0),r=yi.current,r!==null){switch(r.tag){case 13:return Bi===null?Gf():r.alternate===null&&mn===0&&(mn=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===Wc?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),kf(t,o,c)),!1;case 22:return r.flags|=65536,o===Wc?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),kf(t,o,c)),!1}throw Error(s(435,r.tag))}return kf(t,o,c),Gf(),!1}if(Vt)return n=yi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Bc&&(t=Error(s(422),{cause:o}),no(mi(t,r)))):(o!==Bc&&(n=Error(s(423),{cause:o}),no(mi(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=mi(o,r),c=vf(t.stateNode,o,c),jc(t,c),mn!==4&&(mn=2)),!1;var m=Error(s(520),{cause:o});if(m=mi(m,r),To===null?To=[m]:To.push(m),mn!==4&&(mn=2),n===null)return!0;o=mi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=vf(r.stateNode,o,t),jc(r,t),!1;case 1:if(n=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Fa===null||!Fa.has(m))))return r.flags|=65536,c&=-c,r.lanes|=c,c=sg(c),og(c,t,r,o),jc(r,c),!1}r=r.return}while(r!==null);return!1}var lg=Error(s(461)),Dn=!1;function Pn(t,n,r,o){n.child=t===null?Jm(n,null,r,o):rs(n,t.child,r,o)}function ug(t,n,r,o,c){r=r.render;var m=n.ref;if("ref"in o){var M={};for(var b in o)b!=="ref"&&(M[b]=o[b])}else M=o;return gr(n),o=$c(t,n,r,M,m,c),b=ef(),t!==null&&!Dn?(tf(t,n,c),aa(t,n,c)):(Vt&&b&&zc(n),n.flags|=1,Pn(t,n,o,c),n.child)}function cg(t,n,r,o,c){if(t===null){var m=r.type;return typeof m=="function"&&!Nc(m)&&m.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=m,fg(t,n,m,o,c)):(t=Tl(r.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(m=t.child,!bf(t,c)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:Js,r(M,o)&&t.ref===n.ref)return aa(t,n,c)}return n.flags|=1,t=Qi(m,o),t.ref=n.ref,t.return=n,n.child=t}function fg(t,n,r,o,c){if(t!==null){var m=t.memoizedProps;if(Js(m,o)&&t.ref===n.ref)if(Dn=!1,n.pendingProps=o=m,bf(t,c))(t.flags&131072)!==0&&(Dn=!0);else return n.lanes=t.lanes,aa(t,n,c)}return _f(t,n,r,o,c)}function dg(t,n,r){var o=n.pendingProps,c=o.children,m=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=m!==null?m.baseLanes|r:r,t!==null){for(c=n.child=t.child,m=0;c!==null;)m=m|c.lanes|c.childLanes,c=c.sibling;n.childLanes=m&~o}else n.childLanes=0,n.child=null;return hg(t,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,m!==null?m.cachePool:null),m!==null?fm(n,m):Kc(),$m(n);else return n.lanes=n.childLanes=536870912,hg(t,n,m!==null?m.baseLanes|r:r,r)}else m!==null?(Cl(n,m.cachePool),fm(n,m),Ua(),n.memoizedState=null):(t!==null&&Cl(n,null),Kc(),Ua());return Pn(t,n,c,r),n.child}function hg(t,n,r,o){var c=Xc();return c=c===null?null:{parent:bn._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&Cl(n,null),Kc(),$m(n),t!==null&&io(t,n,o,!0),null}function ql(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function _f(t,n,r,o,c){return gr(n),r=$c(t,n,r,o,void 0,c),o=ef(),t!==null&&!Dn?(tf(t,n,c),aa(t,n,c)):(Vt&&o&&zc(n),n.flags|=1,Pn(t,n,r,c),n.child)}function pg(t,n,r,o,c,m){return gr(n),n.updateQueue=null,r=hm(n,o,r,c),dm(t),o=ef(),t!==null&&!Dn?(tf(t,n,m),aa(t,n,m)):(Vt&&o&&zc(n),n.flags|=1,Pn(t,n,r,m),n.child)}function mg(t,n,r,o,c){if(gr(n),n.stateNode===null){var m=Zr,M=r.contextType;typeof M=="object"&&M!==null&&(m=Gn(M)),m=new r(o,m),n.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=gf,n.stateNode=m,m._reactInternals=n,m=n.stateNode,m.props=o,m.state=n.memoizedState,m.refs={},qc(n),M=r.contextType,m.context=typeof M=="object"&&M!==null?Gn(M):Zr,m.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(mf(n,r,M,o),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&gf.enqueueReplaceState(m,m.state,null),co(n,o,m,c),uo(),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){m=n.stateNode;var b=n.memoizedProps,B=yr(r,b);m.props=B;var ie=m.context,ge=r.contextType;M=Zr,typeof ge=="object"&&ge!==null&&(M=Gn(ge));var Me=r.getDerivedStateFromProps;ge=typeof Me=="function"||typeof m.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ge||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b||ie!==M)&&tg(n,m,o,M),Aa=!1;var se=n.memoizedState;m.state=se,co(n,o,m,c),uo(),ie=n.memoizedState,b||se!==ie||Aa?(typeof Me=="function"&&(mf(n,r,Me,o),ie=n.memoizedState),(B=Aa||eg(n,r,B,o,se,ie,M))?(ge||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),m.props=o,m.state=ie,m.context=M,o=B):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{m=n.stateNode,Yc(t,n),M=n.memoizedProps,ge=yr(r,M),m.props=ge,Me=n.pendingProps,se=m.context,ie=r.contextType,B=Zr,typeof ie=="object"&&ie!==null&&(B=Gn(ie)),b=r.getDerivedStateFromProps,(ie=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==Me||se!==B)&&tg(n,m,o,B),Aa=!1,se=n.memoizedState,m.state=se,co(n,o,m,c),uo();var ue=n.memoizedState;M!==Me||se!==ue||Aa||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof b=="function"&&(mf(n,r,b,o),ue=n.memoizedState),(ge=Aa||eg(n,r,ge,o,se,ue,B)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(ie||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,ue,B),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,ue,B)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),m.props=o,m.state=ue,m.context=B,o=ge):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return m=o,ql(t,n),o=(n.flags&128)!==0,m||o?(m=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:m.render(),n.flags|=1,t!==null&&o?(n.child=rs(n,t.child,null,c),n.child=rs(n,null,r,c)):Pn(t,n,r,c),n.memoizedState=m.state,t=n.child):t=aa(t,n,c),t}function gg(t,n,r,o){return to(),n.flags|=256,Pn(t,n,r,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:im()}}function Sf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=xi),t}function vg(t,n,r){var o=n.pendingProps,c=!1,m=(n.flags&128)!==0,M;if((M=m)||(M=t!==null&&t.memoizedState===null?!1:(An.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Vt){if(c?Da(n):Ua(),Vt){var b=pn,B;if(B=b){e:{for(B=b,b=Fi;B.nodeType!==8;){if(!b){b=null;break e}if(B=wi(B.nextSibling),B===null){b=null;break e}}b=B}b!==null?(n.memoizedState={dehydrated:b,treeContext:fr!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},B=ai(18,null,null,0),B.stateNode=b,B.return=n,n.child=B,qn=n,pn=null,B=!0):B=!1}B||pr(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return ad(b)?n.lanes=32:n.lanes=536870912,null;ia(n)}return b=o.children,o=o.fallback,c?(Ua(),c=n.mode,b=Yl({mode:"hidden",children:b},c),o=cr(o,c,r,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=xf(r),c.childLanes=Sf(t,M,r),n.memoizedState=yf,o):(Da(n),Mf(n,b))}if(B=t.memoizedState,B!==null&&(b=B.dehydrated,b!==null)){if(m)n.flags&256?(Da(n),n.flags&=-257,n=Ef(t,n,r)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),c=o.fallback,b=n.mode,o=Yl({mode:"visible",children:o.children},b),c=cr(c,b,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,rs(n,t.child,null,r),o=n.child,o.memoizedState=xf(r),o.childLanes=Sf(t,M,r),n.memoizedState=yf,n=c);else if(Da(n),ad(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var ie=M.dgst;M=ie,o=Error(s(419)),o.stack="",o.digest=M,no({value:o,source:null,stack:null}),n=Ef(t,n,r)}else if(Dn||io(t,n,r,!1),M=(r&t.childLanes)!==0,Dn||M){if(M=sn,M!==null&&(o=r&-r,o=(o&42)!==0?1:Kt(o),o=(o&(M.suspendedLanes|r))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,jr(t,o),ui(M,t,o),lg;b.data==="$?"||Gf(),n=Ef(t,n,r)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,pn=wi(b.nextSibling),qn=n,Vt=!0,hr=null,Fi=!1,t!==null&&(vi[_i++]=Ji,vi[_i++]=$i,vi[_i++]=fr,Ji=t.id,$i=t.overflow,fr=n),n=Mf(n,o.children),n.flags|=4096);return n}return c?(Ua(),c=o.fallback,b=n.mode,B=t.child,ie=B.sibling,o=Qi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ie!==null?c=Qi(ie,c):(c=cr(c,b,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=t.child.memoizedState,b===null?b=xf(r):(B=b.cachePool,B!==null?(ie=bn._currentValue,B=B.parent!==ie?{parent:ie,pool:ie}:B):B=im(),b={baseLanes:b.baseLanes|r,cachePool:B}),c.memoizedState=b,c.childLanes=Sf(t,M,r),n.memoizedState=yf,o):(Da(n),r=t.child,t=r.sibling,r=Qi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=r,n.memoizedState=null,r)}function Mf(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=ai(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ef(t,n,r){return rs(n,t.child,null,r),t=Mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function _g(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Hc(t.return,n,r)}function Tf(t,n,r,o,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=r,m.tailMode=c)}function yg(t,n,r){var o=n.pendingProps,c=o.revealOrder,m=o.tail;if(Pn(t,n,o.children,r),o=An.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_g(t,r,n);else if(t.tag===19)_g(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Te(An,o),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&kl(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Tf(n,!1,c,r,m);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&kl(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}Tf(n,!0,r,null,m);break;case"together":Tf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function aa(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(io(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=Qi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Qi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function Tx(t,n,r){switch(n.tag){case 3:Be(n,n.stateNode.containerInfo),ba(n,bn,t.memoizedState.cache),to();break;case 27:case 5:qe(n);break;case 4:Be(n,n.stateNode.containerInfo);break;case 10:ba(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(r&n.child.childLanes)!==0?vg(t,n,r):(Da(n),t=aa(t,n,r),t!==null?t.sibling:null);Da(n);break;case 19:var c=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(io(t,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return yg(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Te(An,An.current),o)break;return null;case 22:case 23:return n.lanes=0,dg(t,n,r);case 24:ba(n,bn,t.memoizedState.cache)}return aa(t,n,r)}function xg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)Dn=!0;else{if(!bf(t,r)&&(n.flags&128)===0)return Dn=!1,Tx(t,n,r);Dn=(t.flags&131072)!==0}else Dn=!1,Vt&&(n.flags&1048576)!==0&&Kp(n,Al,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Nc(o)?(t=yr(o,t),n.tag=1,n=mg(null,n,o,t,r)):(n.tag=0,n=_f(null,n,o,t,r));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=ug(null,n,o,t,r);break e}else if(c===I){n.tag=14,n=cg(null,n,o,t,r);break e}}throw n=ce(o)||o,Error(s(306,n,""))}}return n;case 0:return _f(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=yr(o,n.pendingProps),mg(t,n,o,c,r);case 3:e:{if(Be(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var m=n.memoizedState;c=m.element,Yc(t,n),co(n,o,null,r);var M=n.memoizedState;if(o=M.cache,ba(n,bn,o),o!==m.cache&&Gc(n,[bn],r,!0),uo(),o=M.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=m,n.memoizedState=m,n.flags&256){n=gg(t,n,o,r);break e}else if(o!==c){c=mi(Error(s(424)),n),no(c),n=gg(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pn=wi(t.firstChild),qn=n,Vt=!0,hr=null,Fi=!0,r=Jm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(to(),o===c){n=aa(t,n,r);break e}Pn(t,n,o,r)}n=n.child}return n;case 26:return ql(t,n),t===null?(r=Tv(n.type,null,n.pendingProps,null))?n.memoizedState=r:Vt||(r=n.type,t=n.pendingProps,o=ou(Ae.current).createElement(r),o[be]=n,o[Ue]=t,Fn(o,r,t),gt(o),n.stateNode=o):n.memoizedState=Tv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qe(n),t===null&&Vt&&(o=n.stateNode=Sv(n.type,n.pendingProps,Ae.current),qn=n,Fi=!0,c=pn,Ha(n.type)?(rd=c,pn=wi(o.firstChild)):pn=c),Pn(t,n,n.pendingProps.children,r),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Vt&&((c=o=pn)&&(o=Jx(o,n.type,n.pendingProps,Fi),o!==null?(n.stateNode=o,qn=n,pn=wi(o.firstChild),Fi=!1,c=!0):c=!1),c||pr(n)),qe(n),c=n.type,m=n.pendingProps,M=t!==null?t.memoizedProps:null,o=m.children,td(c,m)?o=null:M!==null&&td(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=$c(t,n,gx,null,null,r),No._currentValue=c),ql(t,n),Pn(t,n,o,r),n.child;case 6:return t===null&&Vt&&((t=r=pn)&&(r=$x(r,n.pendingProps,Fi),r!==null?(n.stateNode=r,qn=n,pn=null,t=!0):t=!1),t||pr(n)),null;case 13:return vg(t,n,r);case 4:return Be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=rs(n,null,o,r):Pn(t,n,o,r),n.child;case 11:return ug(t,n,n.type,n.pendingProps,r);case 7:return Pn(t,n,n.pendingProps,r),n.child;case 8:return Pn(t,n,n.pendingProps.children,r),n.child;case 12:return Pn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,ba(n,n.type,o.value),Pn(t,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,gr(n),c=Gn(c),o=o(c),n.flags|=1,Pn(t,n,o,r),n.child;case 14:return cg(t,n,n.type,n.pendingProps,r);case 15:return fg(t,n,n.type,n.pendingProps,r);case 19:return yg(t,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},t===null?(r=Yl(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Qi(t.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return dg(t,n,r);case 24:return gr(n),o=Gn(bn),t===null?(c=Xc(),c===null&&(c=sn,m=Vc(),c.pooledCache=m,m.refCount++,m!==null&&(c.pooledCacheLanes|=r),c=m),n.memoizedState={parent:o,cache:c},qc(n),ba(n,bn,c)):((t.lanes&r)!==0&&(Yc(t,n),co(n,null,null,r),uo()),c=t.memoizedState,m=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ba(n,bn,o)):(o=m.cache,ba(n,bn,o),o!==c.cache&&Gc(n,[bn],r,!0))),Pn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(t){t.flags|=4}function Sg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Cv(n)){if(n=yi.current,n!==null&&((zt&4194048)===zt?Bi!==null:(zt&62914560)!==zt&&(zt&536870912)===0||n!==Bi))throw oo=Wc,am;t.flags|=8192}}function jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,us|=n)}function _o(t,n){if(!Vt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function fn(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function bx(t,n,r){var o=n.pendingProps;switch(Fc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(n),null;case 1:return fn(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(bn),_t(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(eo(n)?ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$p())),fn(n),null;case 26:return r=n.memoizedState,t===null?(ra(n),r!==null?(fn(n),Sg(n,r)):(fn(n),n.flags&=-16777217)):r?r!==t.memoizedState?(ra(n),fn(n),Sg(n,r)):(fn(n),n.flags&=-16777217):(t.memoizedProps!==o&&ra(n),fn(n),n.flags&=-16777217),null;case 27:Ft(n),r=Ae.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return fn(n),null}t=Q.current,eo(n)?Qp(n):(t=Sv(c,o,r),n.stateNode=t,ra(n))}return fn(n),null;case 5:if(Ft(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return fn(n),null}if(t=Q.current,eo(n))Qp(n);else{switch(c=ou(Ae.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}t[be]=n,t[Ue]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Fn(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ra(n)}}return fn(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ae.current,eo(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,c=qn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[be]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||pv(t.nodeValue,r)),t||pr(n)}else t=ou(t).createTextNode(o),t[be]=n,n.stateNode=t}return fn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=eo(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[be]=n}else to(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),c=!1}else c=$p(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ia(n),n):(ia(n),null)}if(ia(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var m=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==c&&(o.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),jl(n,n.updateQueue),fn(n),null;case 4:return _t(),t===null&&Kf(n.stateNode.containerInfo),fn(n),null;case 10:return ta(n.type),fn(n),null;case 19:if(ye(An),c=n.memoizedState,c===null)return fn(n),null;if(o=(n.flags&128)!==0,m=c.rendering,m===null)if(o)_o(c,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(m=kl(t),m!==null){for(n.flags|=128,_o(c,!1),t=m.updateQueue,n.updateQueue=t,jl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Zp(r,t),r=r.sibling;return Te(An,An.current&1|2),n.child}t=t.sibling}c.tail!==null&&pt()>Ql&&(n.flags|=128,o=!0,_o(c,!1),n.lanes=4194304)}else{if(!o)if(t=kl(m),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,jl(n,t),_o(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Vt)return fn(n),null}else 2*pt()-c.renderingStartTime>Ql&&r!==536870912&&(n.flags|=128,o=!0,_o(c,!1),n.lanes=4194304);c.isBackwards?(m.sibling=n.child,n.child=m):(t=c.last,t!==null?t.sibling=m:n.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=pt(),n.sibling=null,t=An.current,Te(An,o?t&1|2:t&1),n):(fn(n),null);case 22:case 23:return ia(n),Qc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(fn(n),n.subtreeFlags&6&&(n.flags|=8192)):fn(n),r=n.updateQueue,r!==null&&jl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&ye(vr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ta(bn),fn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ax(t,n){switch(Fc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(bn),_t(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ft(n),null;case 13:if(ia(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));to()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(An),null;case 4:return _t(),null;case 10:return ta(n.type),null;case 22:case 23:return ia(n),Qc(),t!==null&&ye(vr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(bn),null;case 25:return null;default:return null}}function Mg(t,n){switch(Fc(n),n.tag){case 3:ta(bn),_t();break;case 26:case 27:case 5:Ft(n);break;case 4:_t();break;case 13:ia(n);break;case 19:ye(An);break;case 10:ta(n.type);break;case 22:case 23:ia(n),Qc(),t!==null&&ye(vr);break;case 24:ta(bn)}}function yo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){o=void 0;var m=r.create,M=r.inst;o=m(),M.destroy=o}r=r.next}while(r!==c)}}catch(b){nn(n,n.return,b)}}function La(t,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var m=c.next;o=m;do{if((o.tag&t)===t){var M=o.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,c=n;var B=r,ie=b;try{ie()}catch(ge){nn(c,B,ge)}}}o=o.next}while(o!==m)}}catch(ge){nn(n,n.return,ge)}}function Eg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{cm(n,r)}catch(o){nn(t,t.return,o)}}}function Tg(t,n,r){r.props=yr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){nn(t,n,o)}}function xo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(c){nn(t,n,c)}}function Ii(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){nn(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){nn(t,n,c)}else r.current=null}function bg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){nn(t,t.return,c)}}function Af(t,n,r){try{var o=t.stateNode;Yx(o,t.type,r,n),o[Ue]=n}catch(c){nn(t,t.return,c)}}function Ag(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function Rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=su));else if(o!==4&&(o===27&&Ha(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(wf(t,n,r),t=t.sibling;t!==null;)wf(t,n,r),t=t.sibling}function Zl(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Ha(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Zl(t,n,r),t=t.sibling;t!==null;)Zl(t,n,r),t=t.sibling}function Rg(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Fn(n,o,r),n[be]=t,n[Ue]=r}catch(m){nn(t,t.return,m)}}var sa=!1,vn=!1,Cf=!1,wg=typeof WeakSet=="function"?WeakSet:Set,Un=null;function Rx(t,n){if(t=t.containerInfo,$f=hu,t=Ip(t),Ac(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var M=0,b=-1,B=-1,ie=0,ge=0,Me=t,se=null;t:for(;;){for(var ue;Me!==r||c!==0&&Me.nodeType!==3||(b=M+c),Me!==m||o!==0&&Me.nodeType!==3||(B=M+o),Me.nodeType===3&&(M+=Me.nodeValue.length),(ue=Me.firstChild)!==null;)se=Me,Me=ue;for(;;){if(Me===t)break t;if(se===r&&++ie===c&&(b=M),se===m&&++ge===o&&(B=M),(ue=Me.nextSibling)!==null)break;Me=se,se=Me.parentNode}Me=ue}r=b===-1||B===-1?null:{start:b,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(ed={focusedElem:t,selectionRange:r},hu=!1,Un=n;Un!==null;)if(n=Un,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Un=t;else for(;Un!==null;){switch(n=Un,m=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,r=n,c=m.memoizedProps,m=m.memoizedState,o=r.stateNode;try{var mt=yr(r.type,c,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(mt,m),o.__reactInternalSnapshotBeforeUpdate=t}catch(ft){nn(r,r.return,ft)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)id(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":id(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Un=t;break}Un=n.return}}function Cg(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Na(t,r),o&4&&yo(5,r);break;case 1:if(Na(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(M){nn(r,r.return,M)}else{var c=yr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){nn(r,r.return,M)}}o&64&&Eg(r),o&512&&xo(r,r.return);break;case 3:if(Na(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{cm(t,n)}catch(M){nn(r,r.return,M)}}break;case 27:n===null&&o&4&&Rg(r);case 26:case 5:Na(t,r),n===null&&o&4&&bg(r),o&512&&xo(r,r.return);break;case 12:Na(t,r);break;case 13:Na(t,r),o&4&&Lg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=zx.bind(null,r),eS(t,r))));break;case 22:if(o=r.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||vn,c=sa;var m=vn;sa=o,(vn=n)&&!m?Oa(t,r,(r.subtreeFlags&8772)!==0):Na(t,r),sa=c,vn=m}break;case 30:break;default:Na(t,r)}}function Dg(t){var n=t.alternate;n!==null&&(t.alternate=null,Dg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&je(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var cn=null,Qn=!1;function oa(t,n,r){for(r=r.child;r!==null;)Ug(t,n,r),r=r.sibling}function Ug(t,n,r){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(pe,r)}catch{}switch(r.tag){case 26:vn||Ii(r,n),oa(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:vn||Ii(r,n);var o=cn,c=Qn;Ha(r.type)&&(cn=r.stateNode,Qn=!1),oa(t,n,r),Co(r.stateNode),cn=o,Qn=c;break;case 5:vn||Ii(r,n);case 6:if(o=cn,c=Qn,cn=null,oa(t,n,r),cn=o,Qn=c,cn!==null)if(Qn)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(r.stateNode)}catch(m){nn(r,n,m)}else try{cn.removeChild(r.stateNode)}catch(m){nn(r,n,m)}break;case 18:cn!==null&&(Qn?(t=cn,yv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Fo(t)):yv(cn,r.stateNode));break;case 4:o=cn,c=Qn,cn=r.stateNode.containerInfo,Qn=!0,oa(t,n,r),cn=o,Qn=c;break;case 0:case 11:case 14:case 15:vn||La(2,r,n),vn||La(4,r,n),oa(t,n,r);break;case 1:vn||(Ii(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Tg(r,n,o)),oa(t,n,r);break;case 21:oa(t,n,r);break;case 22:vn=(o=vn)||r.memoizedState!==null,oa(t,n,r),vn=o;break;default:oa(t,n,r)}}function Lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fo(t)}catch(r){nn(n,n.return,r)}}function wx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new wg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new wg),n;default:throw Error(s(435,t.tag))}}function Df(t,n){var r=wx(t);n.forEach(function(o){var c=Fx.bind(null,t,o);r.has(o)||(r.add(o),o.then(c,c))})}function ri(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],m=t,M=n,b=M;e:for(;b!==null;){switch(b.tag){case 27:if(Ha(b.type)){cn=b.stateNode,Qn=!1;break e}break;case 5:cn=b.stateNode,Qn=!1;break e;case 3:case 4:cn=b.stateNode.containerInfo,Qn=!0;break e}b=b.return}if(cn===null)throw Error(s(160));Ug(m,M,c),cn=null,Qn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ng(n,t),n=n.sibling}var Ri=null;function Ng(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ri(n,t),si(t),o&4&&(La(3,t,t.return),yo(3,t),La(5,t,t.return));break;case 1:ri(n,t),si(t),o&512&&(vn||r===null||Ii(r,r.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=Ri;if(ri(n,t),si(t),o&512&&(vn||r===null||Ii(r,r.return)),o&4){var m=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":m=c.getElementsByTagName("title")[0],(!m||m[Ke]||m[be]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=c.createElement(o),c.head.insertBefore(m,c.querySelector("head > title"))),Fn(m,o,r),m[be]=t,gt(m),o=m;break e;case"link":var M=Rv("link","href",c).get(o+(r.href||""));if(M){for(var b=0;b<M.length;b++)if(m=M[b],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(b,1);break t}}m=c.createElement(o),Fn(m,o,r),c.head.appendChild(m);break;case"meta":if(M=Rv("meta","content",c).get(o+(r.content||""))){for(b=0;b<M.length;b++)if(m=M[b],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(b,1);break t}}m=c.createElement(o),Fn(m,o,r),c.head.appendChild(m);break;default:throw Error(s(468,o))}m[be]=t,gt(m),o=m}t.stateNode=o}else wv(c,t.type,t.stateNode);else t.stateNode=Av(c,o,t.memoizedProps);else m!==o?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,o===null?wv(c,t.type,t.stateNode):Av(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Af(t,t.memoizedProps,r.memoizedProps)}break;case 27:ri(n,t),si(t),o&512&&(vn||r===null||Ii(r,r.return)),r!==null&&o&4&&Af(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ri(n,t),si(t),o&512&&(vn||r===null||Ii(r,r.return)),t.flags&32){c=t.stateNode;try{zi(c,"")}catch(ue){nn(t,t.return,ue)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Af(t,c,r!==null?r.memoizedProps:c)),o&1024&&(Cf=!0);break;case 6:if(ri(n,t),si(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ue){nn(t,t.return,ue)}}break;case 3:if(cu=null,c=Ri,Ri=lu(n.containerInfo),ri(n,t),Ri=c,si(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Fo(n.containerInfo)}catch(ue){nn(t,t.return,ue)}Cf&&(Cf=!1,Og(t));break;case 4:o=Ri,Ri=lu(t.stateNode.containerInfo),ri(n,t),si(t),Ri=o;break;case 12:ri(n,t),si(t);break;case 13:ri(n,t),si(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(zf=pt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Df(t,o)));break;case 22:c=t.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,ie=sa,ge=vn;if(sa=ie||c,vn=ge||B,ri(n,t),vn=ge,sa=ie,si(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||B||sa||vn||xr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){B=r=n;try{if(m=B.stateNode,c)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=B.stateNode;var Me=B.memoizedProps.style,se=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;b.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(ue){nn(B,B.return,ue)}}}else if(n.tag===6){if(r===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(ue){nn(B,B.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Df(t,r))));break;case 19:ri(n,t),si(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Df(t,o)));break;case 30:break;case 21:break;default:ri(n,t),si(t)}}function si(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Ag(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var c=r.stateNode,m=Rf(t);Zl(t,m,c);break;case 5:var M=r.stateNode;r.flags&32&&(zi(M,""),r.flags&=-33);var b=Rf(t);Zl(t,b,M);break;case 3:case 4:var B=r.stateNode.containerInfo,ie=Rf(t);wf(t,ie,B);break;default:throw Error(s(161))}}catch(ge){nn(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Og(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Na(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cg(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),xr(n);break;case 1:Ii(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Tg(n,n.return,r),xr(n);break;case 27:Co(n.stateNode);case 26:case 5:Ii(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function Oa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,m=n,M=m.flags;switch(m.tag){case 0:case 11:case 15:Oa(c,m,r),yo(4,m);break;case 1:if(Oa(c,m,r),o=m,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ie){nn(o,o.return,ie)}if(o=m,c=o.updateQueue,c!==null){var b=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)um(B[c],b)}catch(ie){nn(o,o.return,ie)}}r&&M&64&&Eg(m),xo(m,m.return);break;case 27:Rg(m);case 26:case 5:Oa(c,m,r),r&&o===null&&M&4&&bg(m),xo(m,m.return);break;case 12:Oa(c,m,r);break;case 13:Oa(c,m,r),r&&M&4&&Lg(c,m);break;case 22:m.memoizedState===null&&Oa(c,m,r),xo(m,m.return);break;case 30:break;default:Oa(c,m,r)}n=n.sibling}}function Uf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&ao(r))}function Lf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function Hi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pg(t,n,r,o),n=n.sibling}function Pg(t,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(t,n,r,o),c&2048&&yo(9,n);break;case 1:Hi(t,n,r,o);break;case 3:Hi(t,n,r,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(c&2048){Hi(t,n,r,o),t=n.stateNode;try{var m=n.memoizedProps,M=m.id,b=m.onPostCommit;typeof b=="function"&&b(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){nn(n,n.return,B)}}else Hi(t,n,r,o);break;case 13:Hi(t,n,r,o);break;case 23:break;case 22:m=n.stateNode,M=n.alternate,n.memoizedState!==null?m._visibility&2?Hi(t,n,r,o):So(t,n):m._visibility&2?Hi(t,n,r,o):(m._visibility|=2,ss(t,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&Uf(M,n);break;case 24:Hi(t,n,r,o),c&2048&&Lf(n.alternate,n);break;default:Hi(t,n,r,o)}}function ss(t,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var m=t,M=n,b=r,B=o,ie=M.flags;switch(M.tag){case 0:case 11:case 15:ss(m,M,b,B,c),yo(8,M);break;case 23:break;case 22:var ge=M.stateNode;M.memoizedState!==null?ge._visibility&2?ss(m,M,b,B,c):So(m,M):(ge._visibility|=2,ss(m,M,b,B,c)),c&&ie&2048&&Uf(M.alternate,M);break;case 24:ss(m,M,b,B,c),c&&ie&2048&&Lf(M.alternate,M);break;default:ss(m,M,b,B,c)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,c=o.flags;switch(o.tag){case 22:So(r,o),c&2048&&Uf(o.alternate,o);break;case 24:So(r,o),c&2048&&Lf(o.alternate,o);break;default:So(r,o)}n=n.sibling}}var Mo=8192;function os(t){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)zg(t),t=t.sibling}function zg(t){switch(t.tag){case 26:os(t),t.flags&Mo&&t.memoizedState!==null&&hS(Ri,t.memoizedState,t.memoizedProps);break;case 5:os(t);break;case 3:case 4:var n=Ri;Ri=lu(t.stateNode.containerInfo),os(t),Ri=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Mo,Mo=16777216,os(t),Mo=n):os(t));break;default:os(t)}}function Fg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Un=o,Ig(o,t)}Fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bg(t),t=t.sibling}function Bg(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&La(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):Eo(t);break;default:Eo(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Un=o,Ig(o,t)}Fg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:La(8,n,n.return),Kl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function Ig(t,n){for(;Un!==null;){var r=Un;switch(r.tag){case 0:case 11:case 15:La(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Un=o;else e:for(r=t;Un!==null;){o=Un;var c=o.sibling,m=o.return;if(Dg(o),o===r){Un=null;break e}if(c!==null){c.return=m,Un=c;break e}Un=m}}}var Cx={getCacheForType:function(t){var n=Gn(bn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},Dx=typeof WeakMap=="function"?WeakMap:Map,Yt=0,sn=null,wt=null,zt=0,jt=0,oi=null,Pa=!1,ls=!1,Nf=!1,la=0,mn=0,za=0,Sr=0,Of=0,xi=0,us=0,To=null,Jn=null,Pf=!1,zf=0,Ql=1/0,Jl=null,Fa=null,zn=0,Ba=null,cs=null,fs=0,Ff=0,Bf=null,Hg=null,bo=0,If=null;function li(){if((Yt&2)!==0&&zt!==0)return zt&-zt;if(z.T!==null){var t=Jr;return t!==0?t:qf()}return F()}function Gg(){xi===0&&(xi=(zt&536870912)===0||Vt?q():536870912);var t=yi.current;return t!==null&&(t.flags|=32),xi}function ui(t,n,r){(t===sn&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(ds(t,0),Ia(t,zt,xi,!1)),Se(t,r),((Yt&2)===0||t!==sn)&&(t===sn&&((Yt&2)===0&&(Sr|=r),mn===4&&Ia(t,zt,xi,!1)),Gi(t))}function Vg(t,n,r){if((Yt&6)!==0)throw Error(s(327));var o=!r&&(n&124)===0&&(n&t.expiredLanes)===0||ct(t,n),c=o?Nx(t,n):Vf(t,n,!0),m=o;do{if(c===0){ls&&!o&&Ia(t,n,0,!1);break}else{if(r=t.current.alternate,m&&!Ux(r)){c=Vf(t,n,!1),m=!1;continue}if(c===2){if(m=n,t.errorRecoveryDisabledLanes&m)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var b=t;c=To;var B=b.current.memoizedState.isDehydrated;if(B&&(ds(b,M).flags|=256),M=Vf(b,M,!1),M!==2){if(Nf&&!B){b.errorRecoveryDisabledLanes|=m,Sr|=m,c=4;break e}m=Jn,Jn=c,m!==null&&(Jn===null?Jn=m:Jn.push.apply(Jn,m))}c=M}if(m=!1,c!==2)continue}}if(c===1){ds(t,0),Ia(t,n,0,!0);break}e:{switch(o=t,m=c,m){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ia(o,n,xi,!Pa);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=zf+300-pt(),10<c)){if(Ia(o,n,xi,!Pa),yt(o,0,!0)!==0)break e;o.timeoutHandle=vv(kg.bind(null,o,r,Jn,Jl,Pf,n,xi,Sr,us,Pa,m,2,-0,0),c);break e}kg(o,r,Jn,Jl,Pf,n,xi,Sr,us,Pa,m,0,-0,0)}}break}while(!0);Gi(t)}function kg(t,n,r,o,c,m,M,b,B,ie,ge,Me,se,ue){if(t.timeoutHandle=-1,Me=n.subtreeFlags,(Me&8192||(Me&16785408)===16785408)&&(Lo={stylesheets:null,count:0,unsuspend:dS},zg(n),Me=pS(),Me!==null)){t.cancelPendingCommit=Me(Kg.bind(null,t,n,m,r,o,c,M,b,B,ge,1,se,ue)),Ia(t,m,M,!ie);return}Kg(t,n,m,r,o,c,M,b,B)}function Ux(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],m=c.getSnapshot;c=c.value;try{if(!ii(m(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,r,o){n&=~Of,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var m=31-Ye(c),M=1<<m;o[m]=-1,c&=~M}r!==0&&Fe(t,r,n)}function $l(){return(Yt&6)===0?(Ao(0),!1):!0}function Hf(){if(wt!==null){if(jt===0)var t=wt.return;else t=wt,ea=mr=null,nf(t),as=null,go=0,t=wt;for(;t!==null;)Mg(t.alternate,t),t=t.return;wt=null}}function ds(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Zx(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Hf(),sn=t,wt=r=Qi(t.current,null),zt=n,jt=0,oi=null,Pa=!1,ls=ct(t,n),Nf=!1,us=xi=Of=Sr=za=mn=0,Jn=To=null,Pf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ye(o),m=1<<c;n|=t[c],o&=~m}return la=n,Sl(),r}function Xg(t,n){bt=null,z.H=Hl,n===so||n===Dl?(n=om(),jt=3):n===am?(n=om(),jt=4):jt=n===lg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,wt===null&&(mn=1,Wl(t,mi(n,t.current)))}function Wg(){var t=z.H;return z.H=Hl,t===null?Hl:t}function qg(){var t=z.A;return z.A=Cx,t}function Gf(){mn=4,Pa||(zt&4194048)!==zt&&yi.current!==null||(ls=!0),(za&134217727)===0&&(Sr&134217727)===0||sn===null||Ia(sn,zt,xi,!1)}function Vf(t,n,r){var o=Yt;Yt|=2;var c=Wg(),m=qg();(sn!==t||zt!==n)&&(Jl=null,ds(t,n)),n=!1;var M=mn;e:do try{if(jt!==0&&wt!==null){var b=wt,B=oi;switch(jt){case 8:Hf(),M=6;break e;case 3:case 2:case 9:case 6:yi.current===null&&(n=!0);var ie=jt;if(jt=0,oi=null,hs(t,b,B,ie),r&&ls){M=0;break e}break;default:ie=jt,jt=0,oi=null,hs(t,b,B,ie)}}Lx(),M=mn;break}catch(ge){Xg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,ea=mr=null,Yt=o,z.H=c,z.A=m,wt===null&&(sn=null,zt=0,Sl()),M}function Lx(){for(;wt!==null;)Yg(wt)}function Nx(t,n){var r=Yt;Yt|=2;var o=Wg(),c=qg();sn!==t||zt!==n?(Jl=null,Ql=pt()+500,ds(t,n)):ls=ct(t,n);e:do try{if(jt!==0&&wt!==null){n=wt;var m=oi;t:switch(jt){case 1:jt=0,oi=null,hs(t,n,m,1);break;case 2:case 9:if(rm(m)){jt=0,oi=null,jg(n);break}n=function(){jt!==2&&jt!==9||sn!==t||(jt=7),Gi(t)},m.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:rm(m)?(jt=0,oi=null,jg(n)):(jt=0,oi=null,hs(t,n,m,7));break;case 5:var M=null;switch(wt.tag){case 26:M=wt.memoizedState;case 5:case 27:var b=wt;if(!M||Cv(M)){jt=0,oi=null;var B=b.sibling;if(B!==null)wt=B;else{var ie=b.return;ie!==null?(wt=ie,eu(ie)):wt=null}break t}}jt=0,oi=null,hs(t,n,m,5);break;case 6:jt=0,oi=null,hs(t,n,m,6);break;case 8:Hf(),mn=6;break e;default:throw Error(s(462))}}Ox();break}catch(ge){Xg(t,ge)}while(!0);return ea=mr=null,z.H=o,z.A=c,Yt=r,wt!==null?0:(sn=null,zt=0,Sl(),mn)}function Ox(){for(;wt!==null&&!Bn();)Yg(wt)}function Yg(t){var n=xg(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?eu(t):wt=n}function jg(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=pg(r,n,n.pendingProps,n.type,void 0,zt);break;case 11:n=pg(r,n,n.pendingProps,n.type.render,n.ref,zt);break;case 5:nf(n);default:Mg(r,n),n=wt=Zp(n,la),n=xg(r,n,la)}t.memoizedProps=t.pendingProps,n===null?eu(t):wt=n}function hs(t,n,r,o){ea=mr=null,nf(n),as=null,go=0;var c=n.return;try{if(Ex(t,c,n,r,zt)){mn=1,Wl(t,mi(r,t.current)),wt=null;return}}catch(m){if(c!==null)throw wt=c,m;mn=1,Wl(t,mi(r,t.current)),wt=null;return}n.flags&32768?(Vt||o===1?t=!0:ls||(zt&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=yi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Zg(n,t)):eu(n)}function eu(t){var n=t;do{if((n.flags&32768)!==0){Zg(n,Pa);return}t=n.return;var r=bx(n.alternate,n,la);if(r!==null){wt=r;return}if(n=n.sibling,n!==null){wt=n;return}wt=n=t}while(n!==null);mn===0&&(mn=5)}function Zg(t,n){do{var r=Ax(t.alternate,t);if(r!==null){r.flags&=32767,wt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){wt=t;return}wt=t=r}while(t!==null);mn=6,wt=null}function Kg(t,n,r,o,c,m,M,b,B){t.cancelPendingCommit=null;do tu();while(zn!==0);if((Yt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(m=n.lanes|n.childLanes,m|=Uc,Ve(t,r,m,M,b,B),t===sn&&(wt=sn=null,zt=0),cs=n,Ba=t,fs=r,Ff=m,Bf=c,Hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Bx(O,function(){return tv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=$.p,$.p=2,M=Yt,Yt|=4;try{Rx(t,n,r)}finally{Yt=M,$.p=c,z.T=o}}zn=1,Qg(),Jg(),$g()}}function Qg(){if(zn===1){zn=0;var t=Ba,n=cs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var o=$.p;$.p=2;var c=Yt;Yt|=4;try{Ng(n,t);var m=ed,M=Ip(t.containerInfo),b=m.focusedElem,B=m.selectionRange;if(M!==b&&b&&b.ownerDocument&&Bp(b.ownerDocument.documentElement,b)){if(B!==null&&Ac(b)){var ie=B.start,ge=B.end;if(ge===void 0&&(ge=ie),"selectionStart"in b)b.selectionStart=ie,b.selectionEnd=Math.min(ge,b.value.length);else{var Me=b.ownerDocument||document,se=Me&&Me.defaultView||window;if(se.getSelection){var ue=se.getSelection(),mt=b.textContent.length,ft=Math.min(B.start,mt),$t=B.end===void 0?ft:Math.min(B.end,mt);!ue.extend&&ft>$t&&(M=$t,$t=ft,ft=M);var Z=Fp(b,ft),k=Fp(b,$t);if(Z&&k&&(ue.rangeCount!==1||ue.anchorNode!==Z.node||ue.anchorOffset!==Z.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var te=Me.createRange();te.setStart(Z.node,Z.offset),ue.removeAllRanges(),ft>$t?(ue.addRange(te),ue.extend(k.node,k.offset)):(te.setEnd(k.node,k.offset),ue.addRange(te))}}}}for(Me=[],ue=b;ue=ue.parentNode;)ue.nodeType===1&&Me.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Me.length;b++){var _e=Me[b];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}hu=!!$f,ed=$f=null}finally{Yt=c,$.p=o,z.T=r}}t.current=n,zn=2}}function Jg(){if(zn===2){zn=0;var t=Ba,n=cs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var o=$.p;$.p=2;var c=Yt;Yt|=4;try{Cg(t,n.alternate,n)}finally{Yt=c,$.p=o,z.T=r}}zn=3}}function $g(){if(zn===4||zn===3){zn=0,Rt();var t=Ba,n=cs,r=fs,o=Hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?zn=5:(zn=0,cs=Ba=null,ev(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Fa=null),dn(r),n=n.stateNode,ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=$.p,$.p=2,z.T=null;try{for(var m=t.onRecoverableError,M=0;M<o.length;M++){var b=o[M];m(b.value,{componentStack:b.stack})}}finally{z.T=n,$.p=c}}(fs&3)!==0&&tu(),Gi(t),c=t.pendingLanes,(r&4194090)!==0&&(c&42)!==0?t===If?bo++:(bo=0,If=t):bo=0,Ao(0)}}function ev(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function tu(t){return Qg(),Jg(),$g(),tv()}function tv(){if(zn!==5)return!1;var t=Ba,n=Ff;Ff=0;var r=dn(fs),o=z.T,c=$.p;try{$.p=32>r?32:r,z.T=null,r=Bf,Bf=null;var m=Ba,M=fs;if(zn=0,cs=Ba=null,fs=0,(Yt&6)!==0)throw Error(s(331));var b=Yt;if(Yt|=4,Bg(m.current),Pg(m,m.current,M,r),Yt=b,Ao(0,!1),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(pe,m)}catch{}return!0}finally{$.p=c,z.T=o,ev(t,n)}}function nv(t,n,r){n=mi(r,n),n=vf(t.stateNode,n,2),t=wa(t,n,2),t!==null&&(Se(t,2),Gi(t))}function nn(t,n,r){if(t.tag===3)nv(t,t,r);else for(;n!==null;){if(n.tag===3){nv(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fa===null||!Fa.has(o))){t=mi(r,t),r=sg(2),o=wa(n,r,2),o!==null&&(og(r,o,n,t),Se(o,2),Gi(o));break}}n=n.return}}function kf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Dx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(Nf=!0,c.add(r),t=Px.bind(null,t,n,r),n.then(t,t))}function Px(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,sn===t&&(zt&r)===r&&(mn===4||mn===3&&(zt&62914560)===zt&&300>pt()-zf?(Yt&2)===0&&ds(t,0):Of|=r,us===zt&&(us=0)),Gi(t)}function iv(t,n){n===0&&(n=Ie()),t=jr(t,n),t!==null&&(Se(t,n),Gi(t))}function zx(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),iv(t,r)}function Fx(t,n){var r=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),iv(t,r)}function Bx(t,n){return Et(t,n)}var nu=null,ps=null,Xf=!1,iu=!1,Wf=!1,Mr=0;function Gi(t){t!==ps&&t.next===null&&(ps===null?nu=ps=t:ps=ps.next=t),iu=!0,Xf||(Xf=!0,Hx())}function Ao(t,n){if(!Wf&&iu){Wf=!0;do for(var r=!1,o=nu;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var m=0;else{var M=o.suspendedLanes,b=o.pingedLanes;m=(1<<31-Ye(42|t)+1)-1,m&=c&~(M&~b),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,ov(o,m))}else m=zt,m=yt(o,o===sn?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||ct(o,m)||(r=!0,ov(o,m));o=o.next}while(r);Wf=!1}}function Ix(){av()}function av(){iu=Xf=!1;var t=0;Mr!==0&&(jx()&&(t=Mr),Mr=0);for(var n=pt(),r=null,o=nu;o!==null;){var c=o.next,m=rv(o,n);m===0?(o.next=null,r===null?nu=c:r.next=c,c===null&&(ps=r)):(r=o,(t!==0||(m&3)!==0)&&(iu=!0)),o=c}Ao(t)}function rv(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var M=31-Ye(m),b=1<<M,B=c[M];B===-1?((b&r)===0||(b&o)!==0)&&(c[M]=Gt(b,n)):B<=n&&(t.expiredLanes|=b),m&=~b}if(n=sn,r=zt,r=yt(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&G(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||ct(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&G(o),dn(r)){case 2:case 8:r=et;break;case 32:r=O;break;case 268435456:r=ae;break;default:r=O}return o=sv.bind(null,t),r=Et(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&G(o),t.callbackPriority=2,t.callbackNode=null,2}function sv(t,n){if(zn!==0&&zn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(tu()&&t.callbackNode!==r)return null;var o=zt;return o=yt(t,t===sn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Vg(t,o,n),rv(t,pt()),t.callbackNode!=null&&t.callbackNode===r?sv.bind(null,t):null)}function ov(t,n){if(tu())return null;Vg(t,n,!0)}function Hx(){Kx(function(){(Yt&6)!==0?Et(Xt,Ix):av()})}function qf(){return Mr===0&&(Mr=q()),Mr}function lv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function uv(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function Gx(t,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var m=lv((c[Ue]||null).action),M=o.submitter;M&&(n=(n=M[Ue]||null)?lv(n.formAction):M.getAttribute("formAction"),n!==null&&(m=n,M=null));var b=new _l("action","action",null,o,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Mr!==0){var B=M?uv(c,M):new FormData(c);df(r,{pending:!0,data:B,method:c.method,action:m},null,B)}}else typeof m=="function"&&(b.preventDefault(),B=M?uv(c,M):new FormData(c),df(r,{pending:!0,data:B,method:c.method,action:m},m,B))},currentTarget:c}]})}}for(var Yf=0;Yf<Dc.length;Yf++){var jf=Dc[Yf],Vx=jf.toLowerCase(),kx=jf[0].toUpperCase()+jf.slice(1);Ai(Vx,"on"+kx)}Ai(Vp,"onAnimationEnd"),Ai(kp,"onAnimationIteration"),Ai(Xp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(sx,"onTransitionRun"),Ai(ox,"onTransitionStart"),Ai(lx,"onTransitionCancel"),Ai(Wp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function cv(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],c=o.event;o=o.listeners;e:{var m=void 0;if(n)for(var M=o.length-1;0<=M;M--){var b=o[M],B=b.instance,ie=b.currentTarget;if(b=b.listener,B!==m&&c.isPropagationStopped())break e;m=b,c.currentTarget=ie;try{m(c)}catch(ge){Xl(ge)}c.currentTarget=null,m=B}else for(M=0;M<o.length;M++){if(b=o[M],B=b.instance,ie=b.currentTarget,b=b.listener,B!==m&&c.isPropagationStopped())break e;m=b,c.currentTarget=ie;try{m(c)}catch(ge){Xl(ge)}c.currentTarget=null,m=B}}}}function Ct(t,n){var r=n[Je];r===void 0&&(r=n[Je]=new Set);var o=t+"__bubble";r.has(o)||(fv(n,t,2,!1),r.add(o))}function Zf(t,n,r){var o=0;n&&(o|=4),fv(r,t,o,n)}var au="_reactListening"+Math.random().toString(36).slice(2);function Kf(t){if(!t[au]){t[au]=!0,Wt.forEach(function(r){r!=="selectionchange"&&(Xx.has(r)||Zf(r,!1,t),Zf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[au]||(n[au]=!0,Zf("selectionchange",!1,n))}}function fv(t,n,r,o){switch(Pv(n)){case 2:var c=vS;break;case 8:c=_S;break;default:c=cd}r=c.bind(null,n,r,t),c=void 0,!vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function Qf(t,n,r,o,c){var m=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var b=o.stateNode.containerInfo;if(b===c)break;if(M===4)for(M=o.return;M!==null;){var B=M.tag;if((B===3||B===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;b!==null;){if(M=vt(b),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){o=m=M;continue e}b=b.parentNode}}o=o.return}_p(function(){var ie=m,ge=mc(r),Me=[];e:{var se=qp.get(t);if(se!==void 0){var ue=_l,mt=t;switch(t){case"keypress":if(gl(r)===0)break e;case"keydown":case"keyup":ue=By;break;case"focusin":mt="focus",ue=Sc;break;case"focusout":mt="blur",ue=Sc;break;case"beforeblur":case"afterblur":ue=Sc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Gy;break;case Vp:case kp:case Xp:ue=Cy;break;case Wp:ue=ky;break;case"scroll":case"scrollend":ue=Ty;break;case"wheel":ue=Wy;break;case"copy":case"cut":case"paste":ue=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Ep;break;case"toggle":case"beforetoggle":ue=Yy}var ft=(n&4)!==0,$t=!ft&&(t==="scroll"||t==="scrollend"),Z=ft?se!==null?se+"Capture":null:se;ft=[];for(var k=ie,te;k!==null;){var _e=k;if(te=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||te===null||Z===null||(_e=Ws(k,Z),_e!=null&&ft.push(wo(k,_e,te))),$t)break;k=k.return}0<ft.length&&(se=new ue(se,mt,null,r,ge),Me.push({event:se,listeners:ft}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",se&&r!==pc&&(mt=r.relatedTarget||r.fromElement)&&(vt(mt)||mt[Xe]))break e;if((ue||se)&&(se=ge.window===ge?ge:(se=ge.ownerDocument)?se.defaultView||se.parentWindow:window,ue?(mt=r.relatedTarget||r.toElement,ue=ie,mt=mt?vt(mt):null,mt!==null&&($t=u(mt),ft=mt.tag,mt!==$t||ft!==5&&ft!==27&&ft!==6)&&(mt=null)):(ue=null,mt=ie),ue!==mt)){if(ft=Sp,_e="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(ft=Ep,_e="onPointerLeave",Z="onPointerEnter",k="pointer"),$t=ue==null?se:an(ue),te=mt==null?se:an(mt),se=new ft(_e,k+"leave",ue,r,ge),se.target=$t,se.relatedTarget=te,_e=null,vt(ge)===ie&&(ft=new ft(Z,k+"enter",mt,r,ge),ft.target=te,ft.relatedTarget=$t,_e=ft),$t=_e,ue&&mt)t:{for(ft=ue,Z=mt,k=0,te=ft;te;te=ms(te))k++;for(te=0,_e=Z;_e;_e=ms(_e))te++;for(;0<k-te;)ft=ms(ft),k--;for(;0<te-k;)Z=ms(Z),te--;for(;k--;){if(ft===Z||Z!==null&&ft===Z.alternate)break t;ft=ms(ft),Z=ms(Z)}ft=null}else ft=null;ue!==null&&dv(Me,se,ue,ft,!1),mt!==null&&$t!==null&&dv(Me,$t,mt,ft,!0)}}e:{if(se=ie?an(ie):window,ue=se.nodeName&&se.nodeName.toLowerCase(),ue==="select"||ue==="input"&&se.type==="file")var Qe=Up;else if(Cp(se))if(Lp)Qe=ix;else{Qe=tx;var At=ex}else ue=se.nodeName,!ue||ue.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ie&&hc(ie.elementType)&&(Qe=Up):Qe=nx;if(Qe&&(Qe=Qe(t,ie))){Dp(Me,Qe,r,ge);break e}At&&At(t,se,ie),t==="focusout"&&ie&&se.type==="number"&&ie.memoizedProps.value!=null&&Hn(se,"number",se.value)}switch(At=ie?an(ie):window,t){case"focusin":(Cp(At)||At.contentEditable==="true")&&(Wr=At,Rc=ie,$s=null);break;case"focusout":$s=Rc=Wr=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,Hp(Me,r,ge);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Hp(Me,r,ge)}var it;if(Ec)e:{switch(t){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else Xr?Rp(t,r)&&(dt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(dt="onCompositionStart");dt&&(Tp&&r.locale!=="ko"&&(Xr||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Xr&&(it=yp()):(Ta=ge,_c="value"in Ta?Ta.value:Ta.textContent,Xr=!0)),At=ru(ie,dt),0<At.length&&(dt=new Mp(dt,t,null,r,ge),Me.push({event:dt,listeners:At}),it?dt.data=it:(it=wp(r),it!==null&&(dt.data=it)))),(it=Zy?Ky(t,r):Qy(t,r))&&(dt=ru(ie,"onBeforeInput"),0<dt.length&&(At=new Mp("onBeforeInput","beforeinput",null,r,ge),Me.push({event:At,listeners:dt}),At.data=it)),Gx(Me,t,ie,r,ge)}cv(Me,n)})}function wo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function ru(t,n){for(var r=n+"Capture",o=[];t!==null;){var c=t,m=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||m===null||(c=Ws(t,r),c!=null&&o.unshift(wo(t,c,m)),c=Ws(t,n),c!=null&&o.push(wo(t,c,m))),t.tag===3)return o;t=t.return}return[]}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function dv(t,n,r,o,c){for(var m=n._reactName,M=[];r!==null&&r!==o;){var b=r,B=b.alternate,ie=b.stateNode;if(b=b.tag,B!==null&&B===o)break;b!==5&&b!==26&&b!==27||ie===null||(B=ie,c?(ie=Ws(r,m),ie!=null&&M.unshift(wo(r,ie,B))):c||(ie=Ws(r,m),ie!=null&&M.push(wo(r,ie,B)))),r=r.return}M.length!==0&&t.push({event:n,listeners:M})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function hv(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(qx,"")}function pv(t,n){return n=hv(n),hv(t)===n}function su(){}function Jt(t,n,r,o,c,m){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zi(t,""+o);break;case"className":Pe(t,"class",o);break;case"tabIndex":Pe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(t,r,o);break;case"style":gp(t,o,m);break;case"data":if(n!=="object"){Pe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=pl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(n!=="input"&&Jt(t,n,"name",c.name,c,null),Jt(t,n,"formEncType",c.formEncType,c,null),Jt(t,n,"formMethod",c.formMethod,c,null),Jt(t,n,"formTarget",c.formTarget,c,null)):(Jt(t,n,"encType",c.encType,c,null),Jt(t,n,"method",c.method,c,null),Jt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=pl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=su);break;case"onScroll":o!=null&&Ct("scroll",t);break;case"onScrollEnd":o!=null&&Ct("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=pl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Ct("beforetoggle",t),Ct("toggle",t),De(t,"popover",o);break;case"xlinkActuate":Re(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Re(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Re(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Re(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Re(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Re(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Re(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Re(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Re(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":De(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=My.get(r)||r,De(t,r,o))}}function Jf(t,n,r,o,c,m){switch(r){case"style":gp(t,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?zi(t,o):(typeof o=="number"||typeof o=="bigint")&&zi(t,""+o);break;case"onScroll":o!=null&&Ct("scroll",t);break;case"onScrollEnd":o!=null&&Ct("scrollend",t);break;case"onClick":o!=null&&(t.onclick=su);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pi.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),m=t[Ue]||null,m=m!=null?m[r]:null,typeof m=="function"&&t.removeEventListener(n,m,c),typeof o=="function")){typeof m!="function"&&m!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,c);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):De(t,r,o)}}}function Fn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",t),Ct("load",t);var o=!1,c=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Jt(t,n,m,M,r,null)}}c&&Jt(t,n,"srcSet",r.srcSet,r,null),o&&Jt(t,n,"src",r.src,r,null);return;case"input":Ct("invalid",t);var b=m=M=c=null,B=null,ie=null;for(o in r)if(r.hasOwnProperty(o)){var ge=r[o];if(ge!=null)switch(o){case"name":c=ge;break;case"type":M=ge;break;case"checked":B=ge;break;case"defaultChecked":ie=ge;break;case"value":m=ge;break;case"defaultValue":b=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Jt(t,n,o,ge,r,null)}}tn(t,m,b,B,ie,M,c,!1),hn(t);return;case"select":Ct("invalid",t),o=M=m=null;for(c in r)if(r.hasOwnProperty(c)&&(b=r[c],b!=null))switch(c){case"value":m=b;break;case"defaultValue":M=b;break;case"multiple":o=b;default:Jt(t,n,c,b,r,null)}n=m,r=M,t.multiple=!!o,n!=null?Tn(t,!!o,n,!1):r!=null&&Tn(t,!!o,r,!0);return;case"textarea":Ct("invalid",t),m=c=o=null;for(M in r)if(r.hasOwnProperty(M)&&(b=r[M],b!=null))switch(M){case"value":o=b;break;case"defaultValue":c=b;break;case"children":m=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Jt(t,n,M,b,r,null)}On(t,o,c,m),hn(t);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(o=r[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Jt(t,n,B,o,r,null)}return;case"dialog":Ct("beforetoggle",t),Ct("toggle",t),Ct("cancel",t),Ct("close",t);break;case"iframe":case"object":Ct("load",t);break;case"video":case"audio":for(o=0;o<Ro.length;o++)Ct(Ro[o],t);break;case"image":Ct("error",t),Ct("load",t);break;case"details":Ct("toggle",t);break;case"embed":case"source":case"link":Ct("error",t),Ct("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in r)if(r.hasOwnProperty(ie)&&(o=r[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Jt(t,n,ie,o,r,null)}return;default:if(hc(n)){for(ge in r)r.hasOwnProperty(ge)&&(o=r[ge],o!==void 0&&Jf(t,n,ge,o,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(o=r[b],o!=null&&Jt(t,n,b,o,r,null))}function Yx(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,m=null,M=null,b=null,B=null,ie=null,ge=null;for(ue in r){var Me=r[ue];if(r.hasOwnProperty(ue)&&Me!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":B=Me;default:o.hasOwnProperty(ue)||Jt(t,n,ue,null,o,Me)}}for(var se in o){var ue=o[se];if(Me=r[se],o.hasOwnProperty(se)&&(ue!=null||Me!=null))switch(se){case"type":m=ue;break;case"name":c=ue;break;case"checked":ie=ue;break;case"defaultChecked":ge=ue;break;case"value":M=ue;break;case"defaultValue":b=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==Me&&Jt(t,n,se,ue,o,Me)}}ji(t,M,b,B,ie,ge,m,c);return;case"select":ue=M=b=se=null;for(m in r)if(B=r[m],r.hasOwnProperty(m)&&B!=null)switch(m){case"value":break;case"multiple":ue=B;default:o.hasOwnProperty(m)||Jt(t,n,m,null,o,B)}for(c in o)if(m=o[c],B=r[c],o.hasOwnProperty(c)&&(m!=null||B!=null))switch(c){case"value":se=m;break;case"defaultValue":b=m;break;case"multiple":M=m;default:m!==B&&Jt(t,n,c,m,o,B)}n=b,r=M,o=ue,se!=null?Tn(t,!!r,se,!1):!!o!=!!r&&(n!=null?Tn(t,!!r,n,!0):Tn(t,!!r,r?[]:"",!1));return;case"textarea":ue=se=null;for(b in r)if(c=r[b],r.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Jt(t,n,b,null,o,c)}for(M in o)if(c=o[M],m=r[M],o.hasOwnProperty(M)&&(c!=null||m!=null))switch(M){case"value":se=c;break;case"defaultValue":ue=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==m&&Jt(t,n,M,c,o,m)}Cn(t,se,ue);return;case"option":for(var mt in r)if(se=r[mt],r.hasOwnProperty(mt)&&se!=null&&!o.hasOwnProperty(mt))switch(mt){case"selected":t.selected=!1;break;default:Jt(t,n,mt,null,o,se)}for(B in o)if(se=o[B],ue=r[B],o.hasOwnProperty(B)&&se!==ue&&(se!=null||ue!=null))switch(B){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Jt(t,n,B,se,o,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in r)se=r[ft],r.hasOwnProperty(ft)&&se!=null&&!o.hasOwnProperty(ft)&&Jt(t,n,ft,null,o,se);for(ie in o)if(se=o[ie],ue=r[ie],o.hasOwnProperty(ie)&&se!==ue&&(se!=null||ue!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:Jt(t,n,ie,se,o,ue)}return;default:if(hc(n)){for(var $t in r)se=r[$t],r.hasOwnProperty($t)&&se!==void 0&&!o.hasOwnProperty($t)&&Jf(t,n,$t,void 0,o,se);for(ge in o)se=o[ge],ue=r[ge],!o.hasOwnProperty(ge)||se===ue||se===void 0&&ue===void 0||Jf(t,n,ge,se,o,ue);return}}for(var Z in r)se=r[Z],r.hasOwnProperty(Z)&&se!=null&&!o.hasOwnProperty(Z)&&Jt(t,n,Z,null,o,se);for(Me in o)se=o[Me],ue=r[Me],!o.hasOwnProperty(Me)||se===ue||se==null&&ue==null||Jt(t,n,Me,se,o,ue)}var $f=null,ed=null;function ou(t){return t.nodeType===9?t:t.ownerDocument}function mv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function td(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nd=null;function jx(){var t=window.event;return t&&t.type==="popstate"?t===nd?!1:(nd=t,!0):(nd=null,!1)}var vv=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(t){return _v.resolve(null).then(t).catch(Qx)}:vv;function Qx(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function yv(t,n){var r=n,o=0,c=0;do{var m=r.nextSibling;if(t.removeChild(r),m&&m.nodeType===8)if(r=m.data,r==="/$"){if(0<o&&8>o){r=o;var M=t.ownerDocument;if(r&1&&Co(M.documentElement),r&2&&Co(M.body),r&4)for(r=M.head,Co(r),M=r.firstChild;M;){var b=M.nextSibling,B=M.nodeName;M[Ke]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&M.rel.toLowerCase()==="stylesheet"||r.removeChild(M),M=b}}if(c===0){t.removeChild(m),Fo(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:o=r.charCodeAt(0)-48;else o=0;r=m}while(r);Fo(n)}function id(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":id(r),je(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Jx(t,n,r,o){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ke])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var m=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=wi(t.nextSibling),t===null)break}return null}function $x(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=wi(t.nextSibling),t===null))return null;return t}function ad(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function eS(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var rd=null;function xv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function Sv(t,n,r){switch(n=ou(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);je(t)}var Si=new Map,Mv=new Set;function lu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=$.d;$.d={f:tS,r:nS,D:iS,C:aS,L:rS,m:sS,X:lS,S:oS,M:uS};function tS(){var t=ua.f(),n=$l();return t||n}function nS(t){var n=Pt(t);n!==null&&n.tag===5&&n.type==="form"?Vm(n):ua.r(t)}var gs=typeof document>"u"?null:document;function Ev(t,n,r){var o=gs;if(o&&typeof n=="string"&&n){var c=rn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),Mv.has(c)||(Mv.add(c),t={rel:t,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Fn(n,"link",t),gt(n),o.head.appendChild(n)))}}function iS(t){ua.D(t),Ev("dns-prefetch",t,null)}function aS(t,n){ua.C(t,n),Ev("preconnect",t,n)}function rS(t,n,r){ua.L(t,n,r);var o=gs;if(o&&t&&n){var c='link[rel="preload"][as="'+rn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+rn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+rn(r.imageSizes)+'"]')):c+='[href="'+rn(t)+'"]';var m=c;switch(n){case"style":m=vs(t);break;case"script":m=_s(t)}Si.has(m)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Si.set(m,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Do(m))||n==="script"&&o.querySelector(Uo(m))||(n=o.createElement("link"),Fn(n,"link",t),gt(n),o.head.appendChild(n)))}}function sS(t,n){ua.m(t,n);var r=gs;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+rn(o)+'"][href="'+rn(t)+'"]',m=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=_s(t)}if(!Si.has(m)&&(t=g({rel:"modulepreload",href:t},n),Si.set(m,t),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Uo(m)))return}o=r.createElement("link"),Fn(o,"link",t),gt(o),r.head.appendChild(o)}}}function oS(t,n,r){ua.S(t,n,r);var o=gs;if(o&&t){var c=un(o).hoistableStyles,m=vs(t);n=n||"default";var M=c.get(m);if(!M){var b={loading:0,preload:null};if(M=o.querySelector(Do(m)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Si.get(m))&&sd(t,r);var B=M=o.createElement("link");gt(B),Fn(B,"link",t),B._p=new Promise(function(ie,ge){B.onload=ie,B.onerror=ge}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,uu(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:b},c.set(m,M)}}}function lS(t,n){ua.X(t,n);var r=gs;if(r&&t){var o=un(r).hoistableScripts,c=_s(t),m=o.get(c);m||(m=r.querySelector(Uo(c)),m||(t=g({src:t,async:!0},n),(n=Si.get(c))&&od(t,n),m=r.createElement("script"),gt(m),Fn(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(c,m))}}function uS(t,n){ua.M(t,n);var r=gs;if(r&&t){var o=un(r).hoistableScripts,c=_s(t),m=o.get(c);m||(m=r.querySelector(Uo(c)),m||(t=g({src:t,async:!0,type:"module"},n),(n=Si.get(c))&&od(t,n),m=r.createElement("script"),gt(m),Fn(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(c,m))}}function Tv(t,n,r,o){var c=(c=Ae.current)?lu(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=vs(r.href),r=un(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=vs(r.href);var m=un(c).hoistableStyles,M=m.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,M),(m=c.querySelector(Do(t)))&&!m._p&&(M.instance=m,M.state.loading=5),Si.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Si.set(t,r),m||cS(c,t,r,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_s(r),r=un(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function vs(t){return'href="'+rn(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function bv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function cS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Fn(n,"link",r),gt(n),t.head.appendChild(n))}function _s(t){return'[src="'+rn(t)+'"]'}function Uo(t){return"script[async]"+t}function Av(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+rn(r.href)+'"]');if(o)return n.instance=o,gt(o),o;var c=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gt(o),Fn(o,"style",c),uu(o,r.precedence,t),n.instance=o;case"stylesheet":c=vs(r.href);var m=t.querySelector(Do(c));if(m)return n.state.loading|=4,n.instance=m,gt(m),m;o=bv(r),(c=Si.get(c))&&sd(o,c),m=(t.ownerDocument||t).createElement("link"),gt(m);var M=m;return M._p=new Promise(function(b,B){M.onload=b,M.onerror=B}),Fn(m,"link",o),n.state.loading|=4,uu(m,r.precedence,t),n.instance=m;case"script":return m=_s(r.src),(c=t.querySelector(Uo(m)))?(n.instance=c,gt(c),c):(o=r,(c=Si.get(m))&&(o=g({},r),od(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),gt(c),Fn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uu(o,r.precedence,t));return n.instance}function uu(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,m=c,M=0;M<o.length;M++){var b=o[M];if(b.dataset.precedence===n)m=b;else if(m!==c)break}m?m.parentNode.insertBefore(t,m.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var cu=null;function Rv(t,n,r){if(cu===null){var o=new Map,c=cu=new Map;c.set(r,o)}else c=cu,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var m=r[c];if(!(m[Ke]||m[be]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(n)||"";M=t+M;var b=o.get(M);b?b.push(m):o.set(M,[m])}}return o}function wv(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function fS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Cv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Lo=null;function dS(){}function hS(t,n,r){if(Lo===null)throw Error(s(475));var o=Lo;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=vs(r.href),m=t.querySelector(Do(c));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=fu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=m,gt(m);return}m=t.ownerDocument||t,r=bv(r),(c=Si.get(c))&&sd(r,c),m=m.createElement("link"),gt(m);var M=m;M._p=new Promise(function(b,B){M.onload=b,M.onerror=B}),Fn(m,"link",r),n.instance=m}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=fu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function pS(){if(Lo===null)throw Error(s(475));var t=Lo;return t.stylesheets&&t.count===0&&ld(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&ld(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function fu(){if(this.count--,this.count===0){if(this.stylesheets)ld(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var du=null;function ld(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,du=new Map,n.forEach(mS,t),du=null,fu.call(t))}function mS(t,n){if(!(n.state.loading&4)){var r=du.get(t);if(r)var o=r.get(null);else{r=new Map,du.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<c.length;m++){var M=c[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),o=M)}o&&r.set(null,o)}c=n.instance,M=c.getAttribute("data-precedence"),m=r.get(M)||o,m===o&&r.set(null,c),r.set(M,c),this.count++,o=fu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),m?m.parentNode.insertBefore(c,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var No={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function gS(t,n,r,o,c,m,M,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=he(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=he(0),this.hiddenUpdates=he(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Dv(t,n,r,o,c,m,M,b,B,ie,ge,Me){return t=new gS(t,n,r,M,b,B,ie,Me),n=1,m===!0&&(n|=24),m=ai(3,null,null,n),t.current=m,m.stateNode=t,n=Vc(),n.refCount++,t.pooledCache=n,n.refCount++,m.memoizedState={element:o,isDehydrated:r,cache:n},qc(m),t}function Uv(t){return t?(t=Zr,t):Zr}function Lv(t,n,r,o,c,m){c=Uv(c),o.context===null?o.context=c:o.pendingContext=c,o=Ra(n),o.payload={element:r},m=m===void 0?null:m,m!==null&&(o.callback=m),r=wa(t,o,n),r!==null&&(ui(r,t,n),lo(r,t,n))}function Nv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function ud(t,n){Nv(t,n),(t=t.alternate)&&Nv(t,n)}function Ov(t){if(t.tag===13){var n=jr(t,67108864);n!==null&&ui(n,t,67108864),ud(t,67108864)}}var hu=!0;function vS(t,n,r,o){var c=z.T;z.T=null;var m=$.p;try{$.p=2,cd(t,n,r,o)}finally{$.p=m,z.T=c}}function _S(t,n,r,o){var c=z.T;z.T=null;var m=$.p;try{$.p=8,cd(t,n,r,o)}finally{$.p=m,z.T=c}}function cd(t,n,r,o){if(hu){var c=fd(o);if(c===null)Qf(t,n,o,pu,r),zv(t,o);else if(xS(c,t,n,r,o))o.stopPropagation();else if(zv(t,o),n&4&&-1<yS.indexOf(t)){for(;c!==null;){var m=Pt(c);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=ke(m.pendingLanes);if(M!==0){var b=m;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var B=1<<31-Ye(M);b.entanglements[1]|=B,M&=~B}Gi(m),(Yt&6)===0&&(Ql=pt()+500,Ao(0))}}break;case 13:b=jr(m,2),b!==null&&ui(b,m,2),$l(),ud(m,2)}if(m=fd(o),m===null&&Qf(t,n,o,pu,r),m===c)break;c=m}c!==null&&o.stopPropagation()}else Qf(t,n,o,null,r)}}function fd(t){return t=mc(t),dd(t)}var pu=null;function dd(t){if(pu=null,t=vt(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return pu=t,null}function Pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case Xt:return 2;case et:return 8;case O:case T:return 32;case ae:return 268435456;default:return 32}default:return 32}}var hd=!1,Ga=null,Va=null,ka=null,Oo=new Map,Po=new Map,Xa=[],yS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zv(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(t,n,r,o,c,m){return t===null||t.nativeEvent!==m?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:m,targetContainers:[c]},n!==null&&(n=Pt(n),n!==null&&Ov(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function xS(t,n,r,o,c){switch(n){case"focusin":return Ga=zo(Ga,t,n,r,o,c),!0;case"dragenter":return Va=zo(Va,t,n,r,o,c),!0;case"mouseover":return ka=zo(ka,t,n,r,o,c),!0;case"pointerover":var m=c.pointerId;return Oo.set(m,zo(Oo.get(m)||null,t,n,r,o,c)),!0;case"gotpointercapture":return m=c.pointerId,Po.set(m,zo(Po.get(m)||null,t,n,r,o,c)),!0}return!1}function Fv(t){var n=vt(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,K(t.priority,function(){if(r.tag===13){var o=li();o=Kt(o);var c=jr(r,o);c!==null&&ui(c,r,o),ud(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=fd(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);pc=o,r.target.dispatchEvent(o),pc=null}else return n=Pt(r),n!==null&&Ov(n),t.blockedOn=r,!1;n.shift()}return!0}function Bv(t,n,r){mu(t)&&r.delete(n)}function SS(){hd=!1,Ga!==null&&mu(Ga)&&(Ga=null),Va!==null&&mu(Va)&&(Va=null),ka!==null&&mu(ka)&&(ka=null),Oo.forEach(Bv),Po.forEach(Bv)}function gu(t,n){t.blockedOn===n&&(t.blockedOn=null,hd||(hd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,SS)))}var vu=null;function Iv(t){vu!==t&&(vu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){vu===t&&(vu=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(dd(o||r)===null)continue;break}var m=Pt(r);m!==null&&(t.splice(n,3),n-=3,df(m,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Fo(t){function n(B){return gu(B,t)}Ga!==null&&gu(Ga,t),Va!==null&&gu(Va,t),ka!==null&&gu(ka,t),Oo.forEach(n),Po.forEach(n);for(var r=0;r<Xa.length;r++){var o=Xa[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Xa.length&&(r=Xa[0],r.blockedOn===null);)Fv(r),r.blockedOn===null&&Xa.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],m=r[o+1],M=c[Ue]||null;if(typeof m=="function")M||Iv(r);else if(M){var b=null;if(m&&m.hasAttribute("formAction")){if(c=m,M=m[Ue]||null)b=M.formAction;else if(dd(c)!==null)continue}else b=M.action;typeof b=="function"?r[o+1]=b:(r.splice(o,3),o-=3),Iv(r)}}}function pd(t){this._internalRoot=t}_u.prototype.render=pd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=li();Lv(r,o,t,n,null,null)},_u.prototype.unmount=pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Lv(t.current,2,null,t,null,null),$l(),n[Xe]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var n=F();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Xa.length&&n!==0&&n<Xa[r].priority;r++);Xa.splice(r,0,t),r===0&&Fv(t)}};var Hv=e.version;if(Hv!=="19.1.1")throw Error(s(527,Hv,"19.1.1"));$.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var MS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{pe=yu.inject(MS),ze=yu}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",c=ng,m=ig,M=ag,b=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Dv(t,1,!1,null,null,r,o,c,m,M,b,null),t[Xe]=n.current,Kf(t),new pd(n)},Io.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,c="",m=ng,M=ig,b=ag,B=null,ie=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&(ie=r.formState)),n=Dv(t,1,!0,n,r??null,o,c,m,M,b,B,ie),n.context=Uv(null),r=n.current,o=li(),o=Kt(o),c=Ra(o),c.callback=null,wa(r,c,o),r=o,n.current.lanes=r,Se(n,r),Gi(n),t[Xe]=n.current,Kf(t),new _u(n)},Io.version="19.1.1",Io}var Qv;function NS(){if(Qv)return vd.exports;Qv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),vd.exports=LS(),vd.exports}var OS=NS();const PS=v0(OS);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var x0=a=>{throw TypeError(a)},zS=(a,e,i)=>e.has(a)||x0("Cannot "+i),Sd=(a,e,i)=>(zS(a,e,"read from private field"),i?i.call(a):e.get(a)),FS=(a,e,i)=>e.has(a)?x0("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,i),Jv="popstate";function BS(a={}){function e(s,l){let{pathname:u,search:f,hash:d}=s.location;return Ko("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:ar(l)}return HS(e,i,null,a)}function Dt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Mn(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IS(){return Math.random().toString(36).substring(2,10)}function $v(a,e){return{usr:a.state,key:a.key,idx:e}}function Ko(a,e,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?sr(e):e,state:i,key:e&&e.key||s||IS()}}function ar({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function sr(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function HS(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,d="POP",p=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let S=g(),y=S==null?null:S-h;h=S,p&&p({action:d,location:A.location,delta:y})}function _(S,y){d="PUSH";let P=Ko(A.location,S,y);h=g()+1;let N=$v(P,h),U=A.createHref(P);try{f.pushState(N,"",U)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(U)}u&&p&&p({action:d,location:A.location,delta:1})}function x(S,y){d="REPLACE";let P=Ko(A.location,S,y);h=g();let N=$v(P,h),U=A.createHref(P);f.replaceState(N,"",U),u&&p&&p({action:d,location:A.location,delta:0})}function E(S){return S0(S)}let A={get action(){return d},get location(){return a(l,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Jv,v),p=S,()=>{l.removeEventListener(Jv,v),p=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let y=E(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:x,go(S){return f.go(S)}};return A}function S0(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Dt(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:ar(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}var jo,e_=class{constructor(a){if(FS(this,jo,new Map),a)for(let[e,i]of a)this.set(e,i)}get(a){if(Sd(this,jo).has(a))return Sd(this,jo).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,e){Sd(this,jo).set(a,e)}};jo=new WeakMap;var GS=new Set(["lazy","caseSensitive","path","id","index","children"]);function VS(a){return GS.has(a)}var kS=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function XS(a){return kS.has(a)}function WS(a){return a.index===!0}function Qo(a,e,i=[],s={},l=!1){return a.map((u,f)=>{let d=[...i,String(f)],p=typeof u.id=="string"?u.id:d.join("-");if(Dt(u.index!==!0||!u.children,"Cannot specify children on an index route"),Dt(l||!s[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),WS(u)){let h={...u,...e(u),id:p};return s[p]=h,h}else{let h={...u,...e(u),id:p,children:void 0};return s[p]=h,u.children&&(h.children=Qo(u.children,e,d,s,l)),h}})}function $a(a,e,i="/"){return Wu(a,e,i,!1)}function Wu(a,e,i,s){let l=typeof e=="string"?sr(e):e,u=bi(l.pathname||"/",i);if(u==null)return null;let f=M0(a);YS(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let h=aM(u);d=nM(f[p],h,s)}return d}function qS(a,e){let{route:i,pathname:s,params:l}=a;return{id:i.id,pathname:s,params:l,data:e[i.id],loaderData:e[i.id],handle:i.handle}}function M0(a,e=[],i=[],s="",l=!1){let u=(f,d,p=l,h)=>{let g={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&p)return;Dt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let v=Xi([s,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(Dt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),M0(f.children,e,_,v,p)),!(f.path==null&&!f.index)&&e.push({path:v,score:eM(v,f.index),routesMeta:_})};return a.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let p of E0(f.path))u(f,d,!0,p)}),e}function E0(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=E0(s.join("/")),d=[];return d.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&d.push(...f),d.map(p=>a.startsWith("/")&&p===""?"/":p)}function YS(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:tM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var jS=/^:[\w-]+$/,ZS=3,KS=2,QS=1,JS=10,$S=-2,t_=a=>a==="*";function eM(a,e){let i=a.split("/"),s=i.length;return i.some(t_)&&(s+=$S),e&&(s+=KS),i.filter(l=>!t_(l)).reduce((l,u)=>l+(jS.test(u)?ZS:u===""?QS:JS),s)}function tM(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function nM(a,e,i=!1){let{routesMeta:s}=a,l={},u="/",f=[];for(let d=0;d<s.length;++d){let p=s[d],h=d===s.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=nc({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},g),_=p.route;if(!v&&h&&i&&!s[s.length-1].route.index&&(v=nc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:Xi([u,v.pathname]),pathnameBase:lM(Xi([u,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(u=Xi([u,v.pathnameBase]))}return f}function nc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=iM(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((h,{paramName:g,isOptional:v},_)=>{if(g==="*"){let E=d[_]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const x=d[_];return v&&!x?h[g]=void 0:h[g]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:f,pattern:a}}function iM(a,e=!1,i=!0){Mn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function aM(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function bi(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function rM({basename:a,pathname:e}){return e==="/"?a:Xi([a,e])}function sM(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?sr(a):a;return{pathname:i?i.startsWith("/")?i:oM(i,e):e,search:uM(s),hash:cM(l)}}function oM(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Md(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function T0(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Yh(a){let e=T0(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function jh(a,e,i,s=!1){let l;typeof a=="string"?l=sr(a):(l={...a},Dt(!l.pathname||!l.pathname.includes("?"),Md("?","pathname","search",l)),Dt(!l.pathname||!l.pathname.includes("#"),Md("#","pathname","hash",l)),Dt(!l.search||!l.search.includes("#"),Md("#","search","hash",l)));let u=a===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let v=e.length-1;if(!s&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}d=v>=0?e[v]:"/"}let p=sM(l,d),h=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(h||g)&&(p.pathname+="/"),p}var Xi=a=>a.join("/").replace(/\/\/+/g,"/"),lM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),uM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,cM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,ic=class{constructor(a,e,i,s=!1){this.status=a,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Jo(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var b0=["POST","PUT","PATCH","DELETE"],fM=new Set(b0),dM=["GET",...b0],hM=new Set(dM),pM=new Set([301,302,303,307,308]),mM=new Set([307,308]),Ed={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},gM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ho={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},vM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zh=a=>vM.test(a),_M=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),A0="remix-router-transitions",R0=Symbol("ResetLoaderData");function yM(a){const e=a.window?a.window:typeof window<"u"?window:void 0,i=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";Dt(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let s=a.hydrationRouteProperties||[],l=a.mapRouteProperties||_M,u={},f=Qo(a.routes,l,void 0,u),d,p=a.basename||"/";p.startsWith("/")||(p=`/${p}`);let h=a.dataStrategy||TM,g={...a.future},v=null,_=new Set,x=null,E=null,A=null,S=a.hydrationData!=null,y=$a(f,a.history.location,p),P=!1,N=null,U;if(y==null&&!a.patchRoutesOnNavigation){let F=Ei(404,{pathname:a.history.location.pathname}),{matches:K,route:re}=xu(f);U=!0,y=K,N={[re.id]:F}}else if(y&&!a.hydrationData&&Fe(y,f,a.history.location.pathname).active&&(y=null),y)if(y.some(F=>F.route.lazy))U=!1;else if(!y.some(F=>F.route.loader))U=!0;else{let F=a.hydrationData?a.hydrationData.loaderData:null,K=a.hydrationData?a.hydrationData.errors:null;if(K){let re=y.findIndex(be=>K[be.route.id]!==void 0);U=y.slice(0,re+1).every(be=>!ih(be.route,F,K))}else U=y.every(re=>!ih(re.route,F,K))}else{U=!1,y=[];let F=Fe(null,f,a.history.location.pathname);F.active&&F.matches&&(P=!0,y=F.matches)}let H,w={historyAction:a.history.action,location:a.history.location,matches:y,initialized:U,navigation:Ed,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||N,fetchers:new Map,blockers:new Map},I="POP",X=!1,D,C=!1,V=new Map,de=null,ee=!1,ce=!1,me=new Set,z=new Map,$=0,W=-1,Ee=new Map,L=new Set,J=new Map,ye=new Map,Te=new Set,Q=new Map,ve,Ae=null;function Le(){if(v=a.history.listen(({action:F,location:K,delta:re})=>{if(ve){ve(),ve=void 0;return}Mn(Q.size===0||re!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let be=Gt({currentLocation:w.location,nextLocation:K,historyAction:F});if(be&&re!=null){let Ue=new Promise(Xe=>{ve=Xe});a.history.go(re*-1),ct(be,{state:"blocked",location:K,proceed(){ct(be,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),Ue.then(()=>a.history.go(re))},reset(){let Xe=new Map(w.blockers);Xe.set(be,Ho),qe({blockers:Xe})}});return}return G(F,K)}),i){IM(e,V);let F=()=>HM(e,V);e.addEventListener("pagehide",F),de=()=>e.removeEventListener("pagehide",F)}return w.initialized||G("POP",w.location,{initialHydration:!0}),H}function Be(){v&&v(),de&&de(),_.clear(),D&&D.abort(),w.fetchers.forEach((F,K)=>Ye(K)),w.blockers.forEach((F,K)=>yt(K))}function _t(F){return _.add(F),()=>_.delete(F)}function qe(F,K={}){F.matches&&(F.matches=F.matches.map(Ue=>{let Xe=u[Ue.route.id],Je=Ue.route;return Je.element!==Xe.element||Je.errorElement!==Xe.errorElement||Je.hydrateFallbackElement!==Xe.hydrateFallbackElement?{...Ue,route:Xe}:Ue})),w={...w,...F};let re=[],be=[];w.fetchers.forEach((Ue,Xe)=>{Ue.state==="idle"&&(Te.has(Xe)?re.push(Xe):be.push(Xe))}),Te.forEach(Ue=>{!w.fetchers.has(Ue)&&!z.has(Ue)&&re.push(Ue)}),[..._].forEach(Ue=>Ue(w,{deletedFetchers:re,viewTransitionOpts:K.viewTransitionOpts,flushSync:K.flushSync===!0})),re.forEach(Ue=>Ye(Ue)),be.forEach(Ue=>w.fetchers.delete(Ue))}function Ft(F,K,{flushSync:re}={}){let be=w.actionData!=null&&w.navigation.formMethod!=null&&ei(w.navigation.formMethod)&&w.navigation.state==="loading"&&F.state?._isRedirect!==!0,Ue;K.actionData?Object.keys(K.actionData).length>0?Ue=K.actionData:Ue=null:be?Ue=w.actionData:Ue=null;let Xe=K.loaderData?f_(w.loaderData,K.loaderData,K.matches||[],K.errors):w.loaderData,Je=w.blockers;Je.size>0&&(Je=new Map(Je),Je.forEach((Ke,je)=>Je.set(je,Ho)));let Ze=ee?!1:Ve(F,K.matches||w.matches),tt=X===!0||w.navigation.formMethod!=null&&ei(w.navigation.formMethod)&&F.state?._isRedirect!==!0;d&&(f=d,d=void 0),ee||I==="POP"||(I==="PUSH"?a.history.push(F,F.state):I==="REPLACE"&&a.history.replace(F,F.state));let at;if(I==="POP"){let Ke=V.get(w.location.pathname);Ke&&Ke.has(F.pathname)?at={currentLocation:w.location,nextLocation:F}:V.has(F.pathname)&&(at={currentLocation:F,nextLocation:w.location})}else if(C){let Ke=V.get(w.location.pathname);Ke?Ke.add(F.pathname):(Ke=new Set([F.pathname]),V.set(w.location.pathname,Ke)),at={currentLocation:w.location,nextLocation:F}}qe({...K,actionData:Ue,loaderData:Xe,historyAction:I,location:F,initialized:!0,navigation:Ed,revalidation:"idle",restoreScrollPosition:Ze,preventScrollReset:tt,blockers:Je},{viewTransitionOpts:at,flushSync:re===!0}),I="POP",X=!1,C=!1,ee=!1,ce=!1,Ae?.resolve(),Ae=null}async function kt(F,K){if(typeof F=="number"){a.history.go(F);return}let re=nh(w.location,w.matches,p,F,K?.fromRouteId,K?.relative),{path:be,submission:Ue,error:Xe}=n_(!1,re,K),Je=w.location,Ze=Ko(w.location,be,K&&K.state);Ze={...Ze,...a.history.encodeLocation(Ze)};let tt=K&&K.replace!=null?K.replace:void 0,at="PUSH";tt===!0?at="REPLACE":tt===!1||Ue!=null&&ei(Ue.formMethod)&&Ue.formAction===w.location.pathname+w.location.search&&(at="REPLACE");let Ke=K&&"preventScrollReset"in K?K.preventScrollReset===!0:void 0,je=(K&&K.flushSync)===!0,vt=Gt({currentLocation:Je,nextLocation:Ze,historyAction:at});if(vt){ct(vt,{state:"blocked",location:Ze,proceed(){ct(vt,{state:"proceeding",proceed:void 0,reset:void 0,location:Ze}),kt(F,K)},reset(){let Pt=new Map(w.blockers);Pt.set(vt,Ho),qe({blockers:Pt})}});return}await G(at,Ze,{submission:Ue,pendingError:Xe,preventScrollReset:Ke,replace:K&&K.replace,enableViewTransition:K&&K.viewTransition,flushSync:je})}function Et(){Ae||(Ae=GM()),we(),qe({revalidation:"loading"});let F=Ae.promise;return w.navigation.state==="submitting"?F:w.navigation.state==="idle"?(G(w.historyAction,w.location,{startUninterruptedRevalidation:!0}),F):(G(I||w.historyAction,w.navigation.location,{overrideNavigation:w.navigation,enableViewTransition:C===!0}),F)}async function G(F,K,re){D&&D.abort(),D=null,I=F,ee=(re&&re.startUninterruptedRevalidation)===!0,Se(w.location,w.matches),X=(re&&re.preventScrollReset)===!0,C=(re&&re.enableViewTransition)===!0;let be=d||f,Ue=re&&re.overrideNavigation,Xe=re?.initialHydration&&w.matches&&w.matches.length>0&&!P?w.matches:$a(be,K,p),Je=(re&&re.flushSync)===!0;if(Xe&&w.initialized&&!ce&&LM(w.location,K)&&!(re&&re.submission&&ei(re.submission.formMethod))){Ft(K,{matches:Xe},{flushSync:Je});return}let Ze=Fe(Xe,be,K.pathname);if(Ze.active&&Ze.matches&&(Xe=Ze.matches),!Xe){let{error:un,notFoundMatches:gt,route:Wt}=q(K.pathname);Ft(K,{matches:gt,loaderData:{},errors:{[Wt.id]:un}},{flushSync:Je});return}D=new AbortController;let tt=Ns(a.history,K,D.signal,re&&re.submission),at=a.unstable_getContext?await a.unstable_getContext():new e_,Ke;if(re&&re.pendingError)Ke=[er(Xe).route.id,{type:"error",error:re.pendingError}];else if(re&&re.submission&&ei(re.submission.formMethod)){let un=await Bn(tt,K,re.submission,Xe,at,Ze.active,re&&re.initialHydration===!0,{replace:re.replace,flushSync:Je});if(un.shortCircuited)return;if(un.pendingActionResult){let[gt,Wt]=un.pendingActionResult;if(di(Wt)&&Jo(Wt.error)&&Wt.error.status===404){D=null,Ft(K,{matches:un.matches,loaderData:{},errors:{[gt]:Wt.error}});return}}Xe=un.matches||Xe,Ke=un.pendingActionResult,Ue=Td(K,re.submission),Je=!1,Ze.active=!1,tt=Ns(a.history,tt.url,tt.signal)}let{shortCircuited:je,matches:vt,loaderData:Pt,errors:an}=await Rt(tt,K,Xe,at,Ze.active,Ue,re&&re.submission,re&&re.fetcherSubmission,re&&re.replace,re&&re.initialHydration===!0,Je,Ke);je||(D=null,Ft(K,{matches:vt||Xe,...d_(Ke),loaderData:Pt,errors:an}))}async function Bn(F,K,re,be,Ue,Xe,Je,Ze={}){we();let tt=FM(K,re);if(qe({navigation:tt},{flushSync:Ze.flushSync===!0}),Xe){let je=await ht(be,K.pathname,F.signal);if(je.type==="aborted")return{shortCircuited:!0};if(je.type==="error"){if(je.partialMatches.length===0){let{matches:Pt,route:an}=xu(f);return{matches:Pt,pendingActionResult:[an.id,{type:"error",error:je.error}]}}let vt=er(je.partialMatches).route.id;return{matches:je.partialMatches,pendingActionResult:[vt,{type:"error",error:je.error}]}}else if(je.matches)be=je.matches;else{let{notFoundMatches:vt,error:Pt,route:an}=q(K.pathname);return{matches:vt,pendingActionResult:[an.id,{type:"error",error:Pt}]}}}let at,Ke=qu(be,K);if(!Ke.route.action&&!Ke.route.lazy)at={type:"error",error:Ei(405,{method:F.method,pathname:K.pathname,routeId:Ke.route.id})};else{let je=Ps(l,u,F,be,Ke,Je?[]:s,Ue),vt=await ae(F,je,Ue,null);if(at=vt[Ke.route.id],!at){for(let Pt of be)if(vt[Pt.route.id]){at=vt[Pt.route.id];break}}if(F.signal.aborted)return{shortCircuited:!0}}if(Nr(at)){let je;return Ze&&Ze.replace!=null?je=Ze.replace:je=l_(at.response.headers.get("Location"),new URL(F.url),p)===w.location.pathname+w.location.search,await T(F,at,!0,{submission:re,replace:je}),{shortCircuited:!0}}if(di(at)){let je=er(be,Ke.route.id);return(Ze&&Ze.replace)!==!0&&(I="PUSH"),{matches:be,pendingActionResult:[je.route.id,at,Ke.route.id]}}return{matches:be,pendingActionResult:[Ke.route.id,at]}}async function Rt(F,K,re,be,Ue,Xe,Je,Ze,tt,at,Ke,je){let vt=Xe||Td(K,Je),Pt=Je||Ze||p_(vt),an=!ee&&!at;if(Ue){if(an){let Ne=pt(je);qe({navigation:vt,...Ne!==void 0?{actionData:Ne}:{}},{flushSync:Ke})}let Re=await ht(re,K.pathname,F.signal);if(Re.type==="aborted")return{shortCircuited:!0};if(Re.type==="error"){if(Re.partialMatches.length===0){let{matches:st,route:$e}=xu(f);return{matches:st,loaderData:{},errors:{[$e.id]:Re.error}}}let Ne=er(Re.partialMatches).route.id;return{matches:Re.partialMatches,loaderData:{},errors:{[Ne]:Re.error}}}else if(Re.matches)re=Re.matches;else{let{error:Ne,notFoundMatches:st,route:$e}=q(K.pathname);return{matches:st,loaderData:{},errors:{[$e.id]:Ne}}}}let un=d||f,{dsMatches:gt,revalidatingFetchers:Wt}=i_(F,be,l,u,a.history,w,re,Pt,K,at?[]:s,at===!0,ce,me,Te,J,L,un,p,a.patchRoutesOnNavigation!=null,je);if(W=++$,!a.dataStrategy&&!gt.some(Re=>Re.shouldLoad)&&!gt.some(Re=>Re.route.unstable_middleware)&&Wt.length===0){let Re=rt();return Ft(K,{matches:re,loaderData:{},errors:je&&di(je[1])?{[je[0]]:je[1].error}:null,...d_(je),...Re?{fetchers:new Map(w.fetchers)}:{}},{flushSync:Ke}),{shortCircuited:!0}}if(an){let Re={};if(!Ue){Re.navigation=vt;let Ne=pt(je);Ne!==void 0&&(Re.actionData=Ne)}Wt.length>0&&(Re.fetchers=nt(Wt)),qe(Re,{flushSync:Ke})}Wt.forEach(Re=>{Ce(Re.key),Re.controller&&z.set(Re.key,Re.controller)});let pi=()=>Wt.forEach(Re=>Ce(Re.key));D&&D.signal.addEventListener("abort",pi);let{loaderResults:Wn,fetcherResults:R}=await xe(gt,Wt,F,be);if(F.signal.aborted)return{shortCircuited:!0};D&&D.signal.removeEventListener("abort",pi),Wt.forEach(Re=>z.delete(Re.key));let Y=Su(Wn);if(Y)return await T(F,Y.result,!0,{replace:tt}),{shortCircuited:!0};if(Y=Su(R),Y)return L.add(Y.key),await T(F,Y.result,!0,{replace:tt}),{shortCircuited:!0};let{loaderData:oe,errors:le}=c_(w,re,Wn,je,Wt,R);at&&w.errors&&(le={...w.errors,...le});let j=rt(),De=ot(W),Pe=j||De||Wt.length>0;return{matches:re,loaderData:oe,errors:le,...Pe?{fetchers:new Map(w.fetchers)}:{}}}function pt(F){if(F&&!di(F[1]))return{[F[0]]:F[1].data};if(w.actionData)return Object.keys(w.actionData).length===0?null:w.actionData}function nt(F){return F.forEach(K=>{let re=w.fetchers.get(K.key),be=Go(void 0,re?re.data:void 0);w.fetchers.set(K.key,be)}),new Map(w.fetchers)}async function Xt(F,K,re,be){Ce(F);let Ue=(be&&be.flushSync)===!0,Xe=d||f,Je=nh(w.location,w.matches,p,re,K,be?.relative),Ze=$a(Xe,Je,p),tt=Fe(Ze,Xe,Je);if(tt.active&&tt.matches&&(Ze=tt.matches),!Ze){ze(F,K,Ei(404,{pathname:Je}),{flushSync:Ue});return}let{path:at,submission:Ke,error:je}=n_(!0,Je,be);if(je){ze(F,K,je,{flushSync:Ue});return}let vt=a.unstable_getContext?await a.unstable_getContext():new e_,Pt=(be&&be.preventScrollReset)===!0;if(Ke&&ei(Ke.formMethod)){await et(F,K,at,Ze,vt,tt.active,Ue,Pt,Ke);return}J.set(F,{routeId:K,path:at}),await O(F,K,at,Ze,vt,tt.active,Ue,Pt,Ke)}async function et(F,K,re,be,Ue,Xe,Je,Ze,tt){we(),J.delete(F);let at=w.fetchers.get(F);pe(F,BM(tt,at),{flushSync:Je});let Ke=new AbortController,je=Ns(a.history,re,Ke.signal,tt);if(Xe){let He=await ht(be,new URL(je.url).pathname,je.signal,F);if(He.type==="aborted")return;if(He.type==="error"){ze(F,K,He.error,{flushSync:Je});return}else if(He.matches)be=He.matches;else{ze(F,K,Ei(404,{pathname:re}),{flushSync:Je});return}}let vt=qu(be,re);if(!vt.route.action&&!vt.route.lazy){let He=Ei(405,{method:tt.formMethod,pathname:re,routeId:K});ze(F,K,He,{flushSync:Je});return}z.set(F,Ke);let Pt=$,an=Ps(l,u,je,be,vt,s,Ue),gt=(await ae(je,an,Ue,F))[vt.route.id];if(je.signal.aborted){z.get(F)===Ke&&z.delete(F);return}if(Te.has(F)){if(Nr(gt)||di(gt)){pe(F,Ja(void 0));return}}else{if(Nr(gt))if(z.delete(F),W>Pt){pe(F,Ja(void 0));return}else return L.add(F),pe(F,Go(tt)),T(je,gt,!1,{fetcherSubmission:tt,preventScrollReset:Ze});if(di(gt)){ze(F,K,gt.error);return}}let Wt=w.navigation.location||w.location,pi=Ns(a.history,Wt,Ke.signal),Wn=d||f,R=w.navigation.state!=="idle"?$a(Wn,w.navigation.location,p):w.matches;Dt(R,"Didn't find any matches after fetcher action");let Y=++$;Ee.set(F,Y);let oe=Go(tt,gt.data);w.fetchers.set(F,oe);let{dsMatches:le,revalidatingFetchers:j}=i_(pi,Ue,l,u,a.history,w,R,tt,Wt,s,!1,ce,me,Te,J,L,Wn,p,a.patchRoutesOnNavigation!=null,[vt.route.id,gt]);j.filter(He=>He.key!==F).forEach(He=>{let xt=He.key,Ut=w.fetchers.get(xt),on=Go(void 0,Ut?Ut.data:void 0);w.fetchers.set(xt,on),Ce(xt),He.controller&&z.set(xt,He.controller)}),qe({fetchers:new Map(w.fetchers)});let De=()=>j.forEach(He=>Ce(He.key));Ke.signal.addEventListener("abort",De);let{loaderResults:Pe,fetcherResults:Re}=await xe(le,j,pi,Ue);if(Ke.signal.aborted)return;if(Ke.signal.removeEventListener("abort",De),Ee.delete(F),z.delete(F),j.forEach(He=>z.delete(He.key)),w.fetchers.has(F)){let He=Ja(gt.data);w.fetchers.set(F,He)}let Ne=Su(Pe);if(Ne)return T(pi,Ne.result,!1,{preventScrollReset:Ze});if(Ne=Su(Re),Ne)return L.add(Ne.key),T(pi,Ne.result,!1,{preventScrollReset:Ze});let{loaderData:st,errors:$e}=c_(w,R,Pe,void 0,j,Re);ot(Y),w.navigation.state==="loading"&&Y>W?(Dt(I,"Expected pending action"),D&&D.abort(),Ft(w.navigation.location,{matches:R,loaderData:st,errors:$e,fetchers:new Map(w.fetchers)})):(qe({errors:$e,loaderData:f_(w.loaderData,st,R,$e),fetchers:new Map(w.fetchers)}),ce=!1)}async function O(F,K,re,be,Ue,Xe,Je,Ze,tt){let at=w.fetchers.get(F);pe(F,Go(tt,at?at.data:void 0),{flushSync:Je});let Ke=new AbortController,je=Ns(a.history,re,Ke.signal);if(Xe){let Wt=await ht(be,new URL(je.url).pathname,je.signal,F);if(Wt.type==="aborted")return;if(Wt.type==="error"){ze(F,K,Wt.error,{flushSync:Je});return}else if(Wt.matches)be=Wt.matches;else{ze(F,K,Ei(404,{pathname:re}),{flushSync:Je});return}}let vt=qu(be,re);z.set(F,Ke);let Pt=$,an=Ps(l,u,je,be,vt,s,Ue),gt=(await ae(je,an,Ue,F))[vt.route.id];if(z.get(F)===Ke&&z.delete(F),!je.signal.aborted){if(Te.has(F)){pe(F,Ja(void 0));return}if(Nr(gt))if(W>Pt){pe(F,Ja(void 0));return}else{L.add(F),await T(je,gt,!1,{preventScrollReset:Ze});return}if(di(gt)){ze(F,K,gt.error);return}pe(F,Ja(gt.data))}}async function T(F,K,re,{submission:be,fetcherSubmission:Ue,preventScrollReset:Xe,replace:Je}={}){K.response.headers.has("X-Remix-Revalidate")&&(ce=!0);let Ze=K.response.headers.get("Location");Dt(Ze,"Expected a Location header on the redirect Response"),Ze=l_(Ze,new URL(F.url),p);let tt=Ko(w.location,Ze,{_isRedirect:!0});if(i){let an=!1;if(K.response.headers.has("X-Remix-Reload-Document"))an=!0;else if(Zh(Ze)){const un=S0(Ze,!0);an=un.origin!==e.location.origin||bi(un.pathname,p)==null}if(an){Je?e.location.replace(Ze):e.location.assign(Ze);return}}D=null;let at=Je===!0||K.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Ke,formAction:je,formEncType:vt}=w.navigation;!be&&!Ue&&Ke&&je&&vt&&(be=p_(w.navigation));let Pt=be||Ue;if(mM.has(K.response.status)&&Pt&&ei(Pt.formMethod))await G(at,tt,{submission:{...Pt,formAction:Ze},preventScrollReset:Xe||X,enableViewTransition:re?C:void 0});else{let an=Td(tt,be);await G(at,tt,{overrideNavigation:an,fetcherSubmission:Ue,preventScrollReset:Xe||X,enableViewTransition:re?C:void 0})}}async function ae(F,K,re,be){let Ue,Xe={};try{Ue=await AM(h,F,K,be,re,!1)}catch(Je){return K.filter(Ze=>Ze.shouldLoad).forEach(Ze=>{Xe[Ze.route.id]={type:"error",error:Je}}),Xe}if(F.signal.aborted)return Xe;for(let[Je,Ze]of Object.entries(Ue))if(PM(Ze)){let tt=Ze.result;Xe[Je]={type:"redirect",response:DM(tt,F,Je,K,p)}}else Xe[Je]=await CM(Ze);return Xe}async function xe(F,K,re,be){let Ue=ae(re,F,be,null),Xe=Promise.all(K.map(async tt=>{if(tt.matches&&tt.match&&tt.request&&tt.controller){let Ke=(await ae(tt.request,tt.matches,be,tt.key))[tt.match.route.id];return{[tt.key]:Ke}}else return Promise.resolve({[tt.key]:{type:"error",error:Ei(404,{pathname:tt.path})}})})),Je=await Ue,Ze=(await Xe).reduce((tt,at)=>Object.assign(tt,at),{});return{loaderResults:Je,fetcherResults:Ze}}function we(){ce=!0,J.forEach((F,K)=>{z.has(K)&&me.add(K),Ce(K)})}function pe(F,K,re={}){w.fetchers.set(F,K),qe({fetchers:new Map(w.fetchers)},{flushSync:(re&&re.flushSync)===!0})}function ze(F,K,re,be={}){let Ue=er(w.matches,K);Ye(F),qe({errors:{[Ue.route.id]:re},fetchers:new Map(w.fetchers)},{flushSync:(be&&be.flushSync)===!0})}function Oe(F){return ye.set(F,(ye.get(F)||0)+1),Te.has(F)&&Te.delete(F),w.fetchers.get(F)||gM}function Ye(F){let K=w.fetchers.get(F);z.has(F)&&!(K&&K.state==="loading"&&Ee.has(F))&&Ce(F),J.delete(F),Ee.delete(F),L.delete(F),Te.delete(F),me.delete(F),w.fetchers.delete(F)}function ut(F){let K=(ye.get(F)||0)-1;K<=0?(ye.delete(F),Te.add(F)):ye.set(F,K),qe({fetchers:new Map(w.fetchers)})}function Ce(F){let K=z.get(F);K&&(K.abort(),z.delete(F))}function We(F){for(let K of F){let re=Oe(K),be=Ja(re.data);w.fetchers.set(K,be)}}function rt(){let F=[],K=!1;for(let re of L){let be=w.fetchers.get(re);Dt(be,`Expected fetcher: ${re}`),be.state==="loading"&&(L.delete(re),F.push(re),K=!0)}return We(F),K}function ot(F){let K=[];for(let[re,be]of Ee)if(be<F){let Ue=w.fetchers.get(re);Dt(Ue,`Expected fetcher: ${re}`),Ue.state==="loading"&&(Ce(re),Ee.delete(re),K.push(re))}return We(K),K.length>0}function ke(F,K){let re=w.blockers.get(F)||Ho;return Q.get(F)!==K&&Q.set(F,K),re}function yt(F){w.blockers.delete(F),Q.delete(F)}function ct(F,K){let re=w.blockers.get(F)||Ho;Dt(re.state==="unblocked"&&K.state==="blocked"||re.state==="blocked"&&K.state==="blocked"||re.state==="blocked"&&K.state==="proceeding"||re.state==="blocked"&&K.state==="unblocked"||re.state==="proceeding"&&K.state==="unblocked",`Invalid blocker state transition: ${re.state} -> ${K.state}`);let be=new Map(w.blockers);be.set(F,K),qe({blockers:be})}function Gt({currentLocation:F,nextLocation:K,historyAction:re}){if(Q.size===0)return;Q.size>1&&Mn(!1,"A router only supports one blocker at a time");let be=Array.from(Q.entries()),[Ue,Xe]=be[be.length-1],Je=w.blockers.get(Ue);if(!(Je&&Je.state==="proceeding")&&Xe({currentLocation:F,nextLocation:K,historyAction:re}))return Ue}function q(F){let K=Ei(404,{pathname:F}),re=d||f,{matches:be,route:Ue}=xu(re);return{notFoundMatches:be,route:Ue,error:K}}function Ie(F,K,re){if(x=F,A=K,E=re||null,!S&&w.navigation===Ed){S=!0;let be=Ve(w.location,w.matches);be!=null&&qe({restoreScrollPosition:be})}return()=>{x=null,A=null,E=null}}function he(F,K){return E&&E(F,K.map(be=>qS(be,w.loaderData)))||F.key}function Se(F,K){if(x&&A){let re=he(F,K);x[re]=A()}}function Ve(F,K){if(x){let re=he(F,K),be=x[re];if(typeof be=="number")return be}return null}function Fe(F,K,re){if(a.patchRoutesOnNavigation)if(F){if(Object.keys(F[0].params).length>0)return{active:!0,matches:Wu(K,re,p,!0)}}else return{active:!0,matches:Wu(K,re,p,!0)||[]};return{active:!1,matches:null}}async function ht(F,K,re,be){if(!a.patchRoutesOnNavigation)return{type:"success",matches:F};let Ue=F;for(;;){let Xe=d==null,Je=d||f,Ze=u;try{await a.patchRoutesOnNavigation({signal:re,path:K,matches:Ue,fetcherKey:be,patch:(Ke,je)=>{re.aborted||a_(Ke,je,Je,Ze,l,!1)}})}catch(Ke){return{type:"error",error:Ke,partialMatches:Ue}}finally{Xe&&!re.aborted&&(f=[...f])}if(re.aborted)return{type:"aborted"};let tt=$a(Je,K,p);if(tt)return{type:"success",matches:tt};let at=Wu(Je,K,p,!0);if(!at||Ue.length===at.length&&Ue.every((Ke,je)=>Ke.route.id===at[je].route.id))return{type:"success",matches:null};Ue=at}}function Kt(F){u={},d=Qo(F,l,void 0,u)}function dn(F,K,re=!1){let be=d==null;a_(F,K,d||f,u,l,re),be&&(f=[...f],qe({}))}return H={get basename(){return p},get future(){return g},get state(){return w},get routes(){return f},get window(){return e},initialize:Le,subscribe:_t,enableScrollRestoration:Ie,navigate:kt,fetch:Xt,revalidate:Et,createHref:F=>a.history.createHref(F),encodeLocation:F=>a.history.encodeLocation(F),getFetcher:Oe,deleteFetcher:ut,dispose:Be,getBlocker:ke,deleteBlocker:yt,patchRoutes:dn,_internalFetchControllers:z,_internalSetRoutes:Kt,_internalSetStateDoNotUseOrYouWillBreakYourApp(F){qe(F)}},H}function xM(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function nh(a,e,i,s,l,u){let f,d;if(l){f=[];for(let h of e)if(f.push(h),h.route.id===l){d=h;break}}else f=e,d=e[e.length-1];let p=jh(s||".",Yh(f),bi(a.pathname,i)||a.pathname,u==="path");if(s==null&&(p.search=a.search,p.hash=a.hash),(s==null||s===""||s===".")&&d){let h=Kh(p.search);if(d.route.index&&!h)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!d.route.index&&h){let g=new URLSearchParams(p.search),v=g.getAll("index");g.delete("index"),v.filter(x=>x).forEach(x=>g.append("index",x));let _=g.toString();p.search=_?`?${_}`:""}}return i!=="/"&&(p.pathname=rM({basename:i,pathname:p.pathname})),ar(p)}function n_(a,e,i){if(!i||!xM(i))return{path:e};if(i.formMethod&&!zM(i.formMethod))return{path:e,error:Ei(405,{method:i.formMethod})};let s=()=>({path:e,error:Ei(400,{type:"invalid-body"})}),u=(i.formMethod||"get").toUpperCase(),f=N0(e);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!ei(u))return s();let v=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((_,[x,E])=>`${_}${x}=${E}
`,""):String(i.body);return{path:e,submission:{formMethod:u,formAction:f,formEncType:i.formEncType,formData:void 0,json:void 0,text:v}}}else if(i.formEncType==="application/json"){if(!ei(u))return s();try{let v=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:e,submission:{formMethod:u,formAction:f,formEncType:i.formEncType,formData:void 0,json:v,text:void 0}}}catch{return s()}}}Dt(typeof FormData=="function","FormData is not available in this environment");let d,p;if(i.formData)d=rh(i.formData),p=i.formData;else if(i.body instanceof FormData)d=rh(i.body),p=i.body;else if(i.body instanceof URLSearchParams)d=i.body,p=u_(d);else if(i.body==null)d=new URLSearchParams,p=new FormData;else try{d=new URLSearchParams(i.body),p=u_(d)}catch{return s()}let h={formMethod:u,formAction:f,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(ei(h.formMethod))return{path:e,submission:h};let g=sr(e);return a&&g.search&&Kh(g.search)&&d.append("index",""),g.search=`?${d}`,{path:ar(g),submission:h}}function i_(a,e,i,s,l,u,f,d,p,h,g,v,_,x,E,A,S,y,P,N){let U=N?di(N[1])?N[1].error:N[1].data:void 0,H=l.createURL(u.location),w=l.createURL(p),I;if(g&&u.errors){let ee=Object.keys(u.errors)[0];I=f.findIndex(ce=>ce.route.id===ee)}else if(N&&di(N[1])){let ee=N[0];I=f.findIndex(ce=>ce.route.id===ee)-1}let X=N?N[1].statusCode:void 0,D=X&&X>=400,C={currentUrl:H,currentParams:u.matches[0]?.params||{},nextUrl:w,nextParams:f[0].params,...d,actionResult:U,actionStatus:X},V=f.map((ee,ce)=>{let{route:me}=ee,z=null;if(I!=null&&ce>I?z=!1:me.lazy?z=!0:me.loader==null?z=!1:g?z=ih(me,u.loaderData,u.errors):SM(u.loaderData,u.matches[ce],ee)&&(z=!0),z!==null)return ah(i,s,a,ee,h,e,z);let $=D?!1:v||H.pathname+H.search===w.pathname+w.search||H.search!==w.search||MM(u.matches[ce],ee),W={...C,defaultShouldRevalidate:$},Ee=ac(ee,W);return ah(i,s,a,ee,h,e,Ee,W)}),de=[];return E.forEach((ee,ce)=>{if(g||!f.some(ye=>ye.route.id===ee.routeId)||x.has(ce))return;let me=u.fetchers.get(ce),z=me&&me.state!=="idle"&&me.data===void 0,$=$a(S,ee.path,y);if(!$){if(P&&z)return;de.push({key:ce,routeId:ee.routeId,path:ee.path,matches:null,match:null,request:null,controller:null});return}if(A.has(ce))return;let W=qu($,ee.path),Ee=new AbortController,L=Ns(l,ee.path,Ee.signal),J=null;if(_.has(ce))_.delete(ce),J=Ps(i,s,L,$,W,h,e);else if(z)v&&(J=Ps(i,s,L,$,W,h,e));else{let ye={...C,defaultShouldRevalidate:D?!1:v};ac(W,ye)&&(J=Ps(i,s,L,$,W,h,e,ye))}J&&de.push({key:ce,routeId:ee.routeId,path:ee.path,matches:J,match:W,request:L,controller:Ee})}),{dsMatches:V,revalidatingFetchers:de}}function ih(a,e,i){if(a.lazy)return!0;if(!a.loader)return!1;let s=e!=null&&a.id in e,l=i!=null&&i[a.id]!==void 0;return!s&&l?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!s&&!l}function SM(a,e,i){let s=!e||i.route.id!==e.route.id,l=!a.hasOwnProperty(i.route.id);return s||l}function MM(a,e){let i=a.route.path;return a.pathname!==e.pathname||i!=null&&i.endsWith("*")&&a.params["*"]!==e.params["*"]}function ac(a,e){if(a.route.shouldRevalidate){let i=a.route.shouldRevalidate(e);if(typeof i=="boolean")return i}return e.defaultShouldRevalidate}function a_(a,e,i,s,l,u){let f;if(a){let h=s[a];Dt(h,`No route found to patch children into: routeId = ${a}`),h.children||(h.children=[]),f=h.children}else f=i;let d=[],p=[];if(e.forEach(h=>{let g=f.find(v=>w0(h,v));g?p.push({existingRoute:g,newRoute:h}):d.push(h)}),d.length>0){let h=Qo(d,l,[a||"_","patch",String(f?.length||"0")],s);f.push(...h)}if(u&&p.length>0)for(let h=0;h<p.length;h++){let{existingRoute:g,newRoute:v}=p[h],_=g,[x]=Qo([v],l,[],{},!0);Object.assign(_,{element:x.element?x.element:_.element,errorElement:x.errorElement?x.errorElement:_.errorElement,hydrateFallbackElement:x.hydrateFallbackElement?x.hydrateFallbackElement:_.hydrateFallbackElement})}}function w0(a,e){return"id"in a&&"id"in e&&a.id===e.id?!0:a.index===e.index&&a.path===e.path&&a.caseSensitive===e.caseSensitive?(!a.children||a.children.length===0)&&(!e.children||e.children.length===0)?!0:a.children.every((i,s)=>e.children?.some(l=>w0(i,l))):!1}var r_=new WeakMap,C0=({key:a,route:e,manifest:i,mapRouteProperties:s})=>{let l=i[e.id];if(Dt(l,"No route found in manifest"),!l.lazy||typeof l.lazy!="object")return;let u=l.lazy[a];if(!u)return;let f=r_.get(l);f||(f={},r_.set(l,f));let d=f[a];if(d)return d;let p=(async()=>{let h=VS(a),v=l[a]!==void 0&&a!=="hasErrorBoundary";if(h)Mn(!h,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),f[a]=Promise.resolve();else if(v)Mn(!1,`Route "${l.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let _=await u();_!=null&&(Object.assign(l,{[a]:_}),Object.assign(l,s(l)))}typeof l.lazy=="object"&&(l.lazy[a]=void 0,Object.values(l.lazy).every(_=>_===void 0)&&(l.lazy=void 0))})();return f[a]=p,p},s_=new WeakMap;function EM(a,e,i,s,l){let u=i[a.id];if(Dt(u,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let g=s_.get(u);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let v=(async()=>{Dt(typeof a.lazy=="function","No lazy route function found");let _=await a.lazy(),x={};for(let E in _){let A=_[E];if(A===void 0)continue;let S=XS(E),P=u[E]!==void 0&&E!=="hasErrorBoundary";S?Mn(!S,"Route property "+E+" is not a supported property to be returned from a lazy route function. This property will be ignored."):P?Mn(!P,`Route "${u.id}" has a static property "${E}" defined but its lazy function is also returning a value for this property. The lazy route property "${E}" will be ignored.`):x[E]=A}Object.assign(u,x),Object.assign(u,{...s(u),lazy:void 0})})();return s_.set(u,v),v.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:v}}let f=Object.keys(a.lazy),d=[],p;for(let g of f){if(l&&l.includes(g))continue;let v=C0({key:g,route:a,manifest:i,mapRouteProperties:s});v&&(d.push(v),g===e&&(p=v))}let h=d.length>0?Promise.all(d).then(()=>{}):void 0;return h?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:h,lazyHandlerPromise:p}}async function o_(a){let e=a.matches.filter(l=>l.shouldLoad),i={};return(await Promise.all(e.map(l=>l.resolve()))).forEach((l,u)=>{i[e[u].route.id]=l}),i}async function TM(a){return a.matches.some(e=>e.route.unstable_middleware)?D0(a,()=>o_(a)):o_(a)}function D0(a,e){return bM(a,e,s=>s,NM,i);function i(s,l,u){if(u)return Promise.resolve(Object.assign(u.value,{[l]:{type:"error",result:s}}));{let{matches:f}=a,d=Math.min(f.findIndex(h=>h.route.id===l)||0,f.findIndex(h=>h.unstable_shouldCallHandler())||0),p=er(f,f[d].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:s}})}}}async function bM(a,e,i,s,l){let{matches:u,request:f,params:d,context:p}=a,h=u.flatMap(v=>v.route.unstable_middleware?v.route.unstable_middleware.map(_=>[v.route.id,_]):[]);return await U0({request:f,params:d,context:p},h,e,i,s,l)}async function U0(a,e,i,s,l,u,f=0){let{request:d}=a;if(d.signal.aborted)throw d.signal.reason??new Error(`Request aborted: ${d.method} ${d.url}`);let p=e[f];if(!p)return await i();let[h,g]=p,v,_=async()=>{if(v)throw new Error("You may only call `next()` once per middleware");try{return v={value:await U0(a,e,i,s,l,u,f+1)},v.value}catch(x){return v={value:await u(x,h,v)},v.value}};try{let x=await g(a,_),E=x!=null?s(x):void 0;return l(E)?E:v?E??v.value:(v={value:await _()},v.value)}catch(x){return await u(x,h,v)}}function L0(a,e,i,s,l){let u=C0({key:"unstable_middleware",route:s.route,manifest:e,mapRouteProperties:a}),f=EM(s.route,ei(i.method)?"action":"loader",e,a,l);return{middleware:u,route:f.lazyRoutePromise,handler:f.lazyHandlerPromise}}function ah(a,e,i,s,l,u,f,d=null){let p=!1,h=L0(a,e,i,s,l);return{...s,_lazyPromises:h,shouldLoad:f,unstable_shouldRevalidateArgs:d,unstable_shouldCallHandler(g){return p=!0,d?typeof g=="boolean"?ac(s,{...d,defaultShouldRevalidate:g}):ac(s,d):f},resolve(g){return p||f||g&&!ei(i.method)&&(s.route.lazy||s.route.loader)?RM({request:i,match:s,lazyHandlerPromise:h?.handler,lazyRoutePromise:h?.route,handlerOverride:g,scopedContext:u}):Promise.resolve({type:"data",result:void 0})}}}function Ps(a,e,i,s,l,u,f,d=null){return s.map(p=>p.route.id!==l.route.id?{...p,shouldLoad:!1,unstable_shouldRevalidateArgs:d,unstable_shouldCallHandler:()=>!1,_lazyPromises:L0(a,e,i,p,u),resolve:()=>Promise.resolve({type:"data",result:void 0})}:ah(a,e,i,p,u,f,!0,d))}async function AM(a,e,i,s,l,u){i.some(h=>h._lazyPromises?.middleware)&&await Promise.all(i.map(h=>h._lazyPromises?.middleware));let f={request:e,params:i[0].params,context:l,matches:i},p=await a({...f,fetcherKey:s,unstable_runClientMiddleware:h=>{let g=f;return D0(g,()=>h({...g,fetcherKey:s,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}))}});try{await Promise.all(i.flatMap(h=>[h._lazyPromises?.handler,h._lazyPromises?.route]))}catch{}return p}async function RM({request:a,match:e,lazyHandlerPromise:i,lazyRoutePromise:s,handlerOverride:l,scopedContext:u}){let f,d,p=ei(a.method),h=p?"action":"loader",g=v=>{let _,x=new Promise((S,y)=>_=y);d=()=>_(),a.signal.addEventListener("abort",d);let E=S=>typeof v!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${e.route.id}]`)):v({request:a,params:e.params,context:u},...S!==void 0?[S]:[]),A=(async()=>{try{return{type:"data",result:await(l?l(y=>E(y)):E())}}catch(S){return{type:"error",result:S}}})();return Promise.race([A,x])};try{let v=p?e.route.action:e.route.loader;if(i||s)if(v){let _,[x]=await Promise.all([g(v).catch(E=>{_=E}),i,s]);if(_!==void 0)throw _;f=x}else{await i;let _=p?e.route.action:e.route.loader;if(_)[f]=await Promise.all([g(_),s]);else if(h==="action"){let x=new URL(a.url),E=x.pathname+x.search;throw Ei(405,{method:a.method,pathname:E,routeId:e.route.id})}else return{type:"data",result:void 0}}else if(v)f=await g(v);else{let _=new URL(a.url),x=_.pathname+_.search;throw Ei(404,{pathname:x})}}catch(v){return{type:"error",result:v}}finally{d&&a.signal.removeEventListener("abort",d)}return f}async function wM(a){let e=a.headers.get("Content-Type");return e&&/\bapplication\/json\b/.test(e)?a.body==null?null:a.json():a.text()}async function CM(a){let{result:e,type:i}=a;if(O0(e)){let s;try{s=await wM(e)}catch(l){return{type:"error",error:l}}return i==="error"?{type:"error",error:new ic(e.status,e.statusText,s),statusCode:e.status,headers:e.headers}:{type:"data",data:s,statusCode:e.status,headers:e.headers}}return i==="error"?h_(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:new ic(e.init?.status||500,void 0,e.data),statusCode:Jo(e)?e.status:void 0,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:Jo(e)?e.status:void 0}:h_(e)?{type:"data",data:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function DM(a,e,i,s,l){let u=a.headers.get("Location");if(Dt(u,"Redirects returned/thrown from loaders/actions must have a Location header"),!Zh(u)){let f=s.slice(0,s.findIndex(d=>d.route.id===i)+1);u=nh(new URL(e.url),f,l,u),a.headers.set("Location",u)}return a}function l_(a,e,i){if(Zh(a)){let s=a,l=s.startsWith("//")?new URL(e.protocol+s):new URL(s),u=bi(l.pathname,i)!=null;if(l.origin===e.origin&&u)return l.pathname+l.search+l.hash}return a}function Ns(a,e,i,s){let l=a.createURL(N0(e)).toString(),u={signal:i};if(s&&ei(s.formMethod)){let{formMethod:f,formEncType:d}=s;u.method=f.toUpperCase(),d==="application/json"?(u.headers=new Headers({"Content-Type":d}),u.body=JSON.stringify(s.json)):d==="text/plain"?u.body=s.text:d==="application/x-www-form-urlencoded"&&s.formData?u.body=rh(s.formData):u.body=s.formData}return new Request(l,u)}function rh(a){let e=new URLSearchParams;for(let[i,s]of a.entries())e.append(i,typeof s=="string"?s:s.name);return e}function u_(a){let e=new FormData;for(let[i,s]of a.entries())e.append(i,s);return e}function UM(a,e,i,s=!1,l=!1){let u={},f=null,d,p=!1,h={},g=i&&di(i[1])?i[1].error:void 0;return a.forEach(v=>{if(!(v.route.id in e))return;let _=v.route.id,x=e[_];if(Dt(!Nr(x),"Cannot handle redirect results in processLoaderData"),di(x)){let E=x.error;if(g!==void 0&&(E=g,g=void 0),f=f||{},l)f[_]=E;else{let A=er(a,_);f[A.route.id]==null&&(f[A.route.id]=E)}s||(u[_]=R0),p||(p=!0,d=Jo(x.error)?x.error.status:500),x.headers&&(h[_]=x.headers)}else u[_]=x.data,x.statusCode&&x.statusCode!==200&&!p&&(d=x.statusCode),x.headers&&(h[_]=x.headers)}),g!==void 0&&i&&(f={[i[0]]:g},i[2]&&(u[i[2]]=void 0)),{loaderData:u,errors:f,statusCode:d||200,loaderHeaders:h}}function c_(a,e,i,s,l,u){let{loaderData:f,errors:d}=UM(e,i,s);return l.filter(p=>!p.matches||p.matches.some(h=>h.shouldLoad)).forEach(p=>{let{key:h,match:g,controller:v}=p;if(v&&v.signal.aborted)return;let _=u[h];if(Dt(_,"Did not find corresponding fetcher result"),di(_)){let x=er(a.matches,g?.route.id);d&&d[x.route.id]||(d={...d,[x.route.id]:_.error}),a.fetchers.delete(h)}else if(Nr(_))Dt(!1,"Unhandled fetcher revalidation redirect");else{let x=Ja(_.data);a.fetchers.set(h,x)}}),{loaderData:f,errors:d}}function f_(a,e,i,s){let l=Object.entries(e).filter(([,u])=>u!==R0).reduce((u,[f,d])=>(u[f]=d,u),{});for(let u of i){let f=u.route.id;if(!e.hasOwnProperty(f)&&a.hasOwnProperty(f)&&u.route.loader&&(l[f]=a[f]),s&&s.hasOwnProperty(f))break}return l}function d_(a){return a?di(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function er(a,e){return(e?a.slice(0,a.findIndex(s=>s.route.id===e)+1):[...a]).reverse().find(s=>s.route.hasErrorBoundary===!0)||a[0]}function xu(a){let e=a.length===1?a[0]:a.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ei(a,{pathname:e,routeId:i,method:s,type:l,message:u}={}){let f="Unknown Server Error",d="Unknown @remix-run/router error";return a===400?(f="Bad Request",s&&e&&i?d=`You made a ${s} request to "${e}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.`:l==="invalid-body"&&(d="Unable to encode submission body")):a===403?(f="Forbidden",d=`Route "${i}" does not match URL "${e}"`):a===404?(f="Not Found",d=`No route matches URL "${e}"`):a===405&&(f="Method Not Allowed",s&&e&&i?d=`You made a ${s.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.`:s&&(d=`Invalid request method "${s.toUpperCase()}"`)),new ic(a||500,f,new Error(d),!0)}function Su(a){let e=Object.entries(a);for(let i=e.length-1;i>=0;i--){let[s,l]=e[i];if(Nr(l))return{key:s,result:l}}}function N0(a){let e=typeof a=="string"?sr(a):a;return ar({...e,hash:""})}function LM(a,e){return a.pathname!==e.pathname||a.search!==e.search?!1:a.hash===""?e.hash!=="":a.hash===e.hash?!0:e.hash!==""}function NM(a){return a!=null&&typeof a=="object"&&Object.entries(a).every(([e,i])=>typeof e=="string"&&OM(i))}function OM(a){return a!=null&&typeof a=="object"&&"type"in a&&"result"in a&&(a.type==="data"||a.type==="error")}function PM(a){return O0(a.result)&&pM.has(a.result.status)}function di(a){return a.type==="error"}function Nr(a){return(a&&a.type)==="redirect"}function h_(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function O0(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function zM(a){return hM.has(a.toUpperCase())}function ei(a){return fM.has(a.toUpperCase())}function Kh(a){return new URLSearchParams(a).getAll("index").some(e=>e==="")}function qu(a,e){let i=typeof e=="string"?sr(e).search:e.search;if(a[a.length-1].route.index&&Kh(i||""))return a[a.length-1];let s=T0(a);return s[s.length-1]}function p_(a){let{formMethod:e,formAction:i,formEncType:s,text:l,formData:u,json:f}=a;if(!(!e||!i||!s)){if(l!=null)return{formMethod:e,formAction:i,formEncType:s,formData:void 0,json:void 0,text:l};if(u!=null)return{formMethod:e,formAction:i,formEncType:s,formData:u,json:void 0,text:void 0};if(f!==void 0)return{formMethod:e,formAction:i,formEncType:s,formData:void 0,json:f,text:void 0}}}function Td(a,e){return e?{state:"loading",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function FM(a,e){return{state:"submitting",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Go(a,e){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function BM(a,e){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e?e.data:void 0}}function Ja(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function IM(a,e){try{let i=a.sessionStorage.getItem(A0);if(i){let s=JSON.parse(i);for(let[l,u]of Object.entries(s||{}))u&&Array.isArray(u)&&e.set(l,new Set(u||[]))}}catch{}}function HM(a,e){if(e.size>0){let i={};for(let[s,l]of e)i[s]=[...l];try{a.sessionStorage.setItem(A0,JSON.stringify(i))}catch(s){Mn(!1,`Failed to save applied view transitions in sessionStorage (${s}).`)}}}function GM(){let a,e,i=new Promise((s,l)=>{a=async u=>{s(u);try{await i}catch{}},e=async u=>{l(u);try{await i}catch{}}});return{promise:i,resolve:a,reject:e}}var Ir=ne.createContext(null);Ir.displayName="DataRouter";var rl=ne.createContext(null);rl.displayName="DataRouterState";ne.createContext(!1);var Qh=ne.createContext({isTransitioning:!1});Qh.displayName="ViewTransition";var P0=ne.createContext(new Map);P0.displayName="Fetchers";var VM=ne.createContext(null);VM.displayName="Await";var qi=ne.createContext(null);qi.displayName="Navigation";var lc=ne.createContext(null);lc.displayName="Location";var Yi=ne.createContext({outlet:null,matches:[],isDataRoute:!1});Yi.displayName="Route";var Jh=ne.createContext(null);Jh.displayName="RouteError";function kM(a,{relative:e}={}){Dt(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=ne.useContext(qi),{hash:l,pathname:u,search:f}=ol(a,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:Xi([i,u])),s.createHref({pathname:d,search:f,hash:l})}function sl(){return ne.useContext(lc)!=null}function Hr(){return Dt(sl(),"useLocation() may be used only in the context of a <Router> component."),ne.useContext(lc).location}var z0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function F0(a){ne.useContext(qi).static||ne.useLayoutEffect(a)}function XM(){let{isDataRoute:a}=ne.useContext(Yi);return a?iE():WM()}function WM(){Dt(sl(),"useNavigate() may be used only in the context of a <Router> component.");let a=ne.useContext(Ir),{basename:e,navigator:i}=ne.useContext(qi),{matches:s}=ne.useContext(Yi),{pathname:l}=Hr(),u=JSON.stringify(Yh(s)),f=ne.useRef(!1);return F0(()=>{f.current=!0}),ne.useCallback((p,h={})=>{if(Mn(f.current,z0),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=jh(p,JSON.parse(u),l,h.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Xi([e,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[e,i,u,l,a])}ne.createContext(null);function mC(){let{matches:a}=ne.useContext(Yi),e=a[a.length-1];return e?e.params:{}}function ol(a,{relative:e}={}){let{matches:i}=ne.useContext(Yi),{pathname:s}=Hr(),l=JSON.stringify(Yh(i));return ne.useMemo(()=>jh(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function qM(a,e,i,s,l){Dt(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=ne.useContext(qi),{matches:f}=ne.useContext(Yi),d=f[f.length-1],p=d?d.params:{},h=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let P=v&&v.path||"";B0(h,!v||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let _=Hr(),x;x=_;let E=x.pathname||"/",A=E;if(g!=="/"){let P=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=$a(a,{pathname:A});return Mn(v||S!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Mn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),QM(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},p,P.params),pathname:Xi([g,u.encodeLocation?u.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?g:Xi([g,u.encodeLocation?u.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),f,i,s,l)}function YM(){let a=nE(),e=Jo(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=ne.createElement(ne.Fragment,null,ne.createElement("p",null,"💿 Hey developer 👋"),ne.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ne.createElement("code",{style:u},"ErrorBoundary")," or"," ",ne.createElement("code",{style:u},"errorElement")," prop on your route.")),ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},e),i?ne.createElement("pre",{style:l},i):null,f)}var jM=ne.createElement(YM,null),ZM=class extends ne.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.unstable_onError?this.props.unstable_onError(a,e):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?ne.createElement(Yi.Provider,{value:this.props.routeContext},ne.createElement(Jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function KM({routeContext:a,match:e,children:i}){let s=ne.useContext(Ir);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ne.createElement(Yi.Provider,{value:a},i)}function QM(a,e=[],i=null,s=null,l=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let u=a,f=i?.errors;if(f!=null){let h=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Dt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let d=!1,p=-1;if(i)for(let h=0;h<u.length;h++){let g=u[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=h),g.route.id){let{loaderData:v,errors:_}=i,x=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!_||_[g.route.id]===void 0);if(g.route.lazy||x){d=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((h,g,v)=>{let _,x=!1,E=null,A=null;i&&(_=f&&g.route.id?f[g.route.id]:void 0,E=g.route.errorElement||jM,d&&(p<0&&v===0?(B0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,A=null):p===v&&(x=!0,A=g.route.hydrateFallbackElement||null)));let S=e.concat(u.slice(0,v+1)),y=()=>{let P;return _?P=E:x?P=A:g.route.Component?P=ne.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=h,ne.createElement(KM,{match:g,routeContext:{outlet:h,matches:S,isDataRoute:i!=null},children:P})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?ne.createElement(ZM,{location:i.location,revalidation:i.revalidation,component:E,error:_,children:y(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:s}):y()},null)}function $h(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JM(a){let e=ne.useContext(Ir);return Dt(e,$h(a)),e}function $M(a){let e=ne.useContext(rl);return Dt(e,$h(a)),e}function eE(a){let e=ne.useContext(Yi);return Dt(e,$h(a)),e}function ep(a){let e=eE(a),i=e.matches[e.matches.length-1];return Dt(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function tE(){return ep("useRouteId")}function nE(){let a=ne.useContext(Jh),e=$M("useRouteError"),i=ep("useRouteError");return a!==void 0?a:e.errors?.[i]}function iE(){let{router:a}=JM("useNavigate"),e=ep("useNavigate"),i=ne.useRef(!1);return F0(()=>{i.current=!0}),ne.useCallback(async(l,u={})=>{Mn(i.current,z0),i.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...u}))},[a,e])}var m_={};function B0(a,e,i){!e&&!m_[a]&&(m_[a]=!0,Mn(!1,i))}var g_={};function v_(a,e){!a&&!g_[e]&&(g_[e]=!0,console.warn(e))}function aE(a){let e={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&Mn(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:ne.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&Mn(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:ne.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&Mn(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:ne.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),e}var rE=["HydrateFallback","hydrateFallbackElement"],sE=class{constructor(){this.status="pending",this.promise=new Promise((a,e)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",a(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",e(i))}})}};function oE({router:a,flushSync:e,unstable_onError:i}){let[s,l]=ne.useState(a.state),[u,f]=ne.useState(),[d,p]=ne.useState({isTransitioning:!1}),[h,g]=ne.useState(),[v,_]=ne.useState(),[x,E]=ne.useState(),A=ne.useRef(new Map),S=ne.useCallback(H=>{l(w=>(H.errors&&i&&Object.entries(H.errors).forEach(([I,X])=>{w.errors?.[I]!==X&&i(X)}),H))},[i]),y=ne.useCallback((H,{deletedFetchers:w,flushSync:I,viewTransitionOpts:X})=>{H.fetchers.forEach((C,V)=>{C.data!==void 0&&A.current.set(V,C.data)}),w.forEach(C=>A.current.delete(C)),v_(I===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let D=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(v_(X==null||D,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!X||!D){e&&I?e(()=>S(H)):ne.startTransition(()=>S(H));return}if(e&&I){e(()=>{v&&(h&&h.resolve(),v.skipTransition()),p({isTransitioning:!0,flushSync:!0,currentLocation:X.currentLocation,nextLocation:X.nextLocation})});let C=a.window.document.startViewTransition(()=>{e(()=>S(H))});C.finished.finally(()=>{e(()=>{g(void 0),_(void 0),f(void 0),p({isTransitioning:!1})})}),e(()=>_(C));return}v?(h&&h.resolve(),v.skipTransition(),E({state:H,currentLocation:X.currentLocation,nextLocation:X.nextLocation})):(f(H),p({isTransitioning:!0,flushSync:!1,currentLocation:X.currentLocation,nextLocation:X.nextLocation}))},[a.window,e,v,h,S]);ne.useLayoutEffect(()=>a.subscribe(y),[a,y]),ne.useEffect(()=>{d.isTransitioning&&!d.flushSync&&g(new sE)},[d]),ne.useEffect(()=>{if(h&&u&&a.window){let H=u,w=h.promise,I=a.window.document.startViewTransition(async()=>{ne.startTransition(()=>S(H)),await w});I.finished.finally(()=>{g(void 0),_(void 0),f(void 0),p({isTransitioning:!1})}),_(I)}},[u,h,a.window,S]),ne.useEffect(()=>{h&&u&&s.location.key===u.location.key&&h.resolve()},[h,v,s.location,u]),ne.useEffect(()=>{!d.isTransitioning&&x&&(f(x.state),p({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),E(void 0))},[d.isTransitioning,x]);let P=ne.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:H=>a.navigate(H),push:(H,w,I)=>a.navigate(H,{state:w,preventScrollReset:I?.preventScrollReset}),replace:(H,w,I)=>a.navigate(H,{replace:!0,state:w,preventScrollReset:I?.preventScrollReset})}),[a]),N=a.basename||"/",U=ne.useMemo(()=>({router:a,navigator:P,static:!1,basename:N,unstable_onError:i}),[a,P,N,i]);return ne.createElement(ne.Fragment,null,ne.createElement(Ir.Provider,{value:U},ne.createElement(rl.Provider,{value:s},ne.createElement(P0.Provider,{value:A.current},ne.createElement(Qh.Provider,{value:d},ne.createElement(cE,{basename:N,location:s.location,navigationType:s.historyAction,navigator:P},ne.createElement(lE,{routes:a.routes,future:a.future,state:s,unstable_onError:i})))))),null)}var lE=ne.memo(uE);function uE({routes:a,future:e,state:i,unstable_onError:s}){return qM(a,void 0,i,s,e)}function cE({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:u=!1}){Dt(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),d=ne.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=sr(i));let{pathname:p="/",search:h="",hash:g="",state:v=null,key:_="default"}=i,x=ne.useMemo(()=>{let E=bi(p,f);return E==null?null:{location:{pathname:E,search:h,hash:g,state:v,key:_},navigationType:s}},[f,p,h,g,v,_,s]);return Mn(x!=null,`<Router basename="${f}"> is not able to match the URL "${p}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:ne.createElement(qi.Provider,{value:d},ne.createElement(lc.Provider,{children:e,value:x}))}var Yu="get",ju="application/x-www-form-urlencoded";function uc(a){return a!=null&&typeof a.tagName=="string"}function fE(a){return uc(a)&&a.tagName.toLowerCase()==="button"}function dE(a){return uc(a)&&a.tagName.toLowerCase()==="form"}function hE(a){return uc(a)&&a.tagName.toLowerCase()==="input"}function pE(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function mE(a,e){return a.button===0&&(!e||e==="_self")&&!pE(a)}var Mu=null;function gE(){if(Mu===null)try{new FormData(document.createElement("form"),0),Mu=!1}catch{Mu=!0}return Mu}var vE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bd(a){return a!=null&&!vE.has(a)?(Mn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):a}function _E(a,e){let i,s,l,u,f;if(dE(a)){let d=a.getAttribute("action");s=d?bi(d,e):null,i=a.getAttribute("method")||Yu,l=bd(a.getAttribute("enctype"))||ju,u=new FormData(a)}else if(fE(a)||hE(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||d.getAttribute("action");if(s=p?bi(p,e):null,i=a.getAttribute("formmethod")||d.getAttribute("method")||Yu,l=bd(a.getAttribute("formenctype"))||bd(d.getAttribute("enctype"))||ju,u=new FormData(d,a),!gE()){let{name:h,type:g,value:v}=a;if(g==="image"){let _=h?`${h}.`:"";u.append(`${_}x`,"0"),u.append(`${_}y`,"0")}else h&&u.append(h,v)}}else{if(uc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Yu,s=null,l=ju,f=a}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function tp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function yE(a,e,i){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s.pathname==="/"?s.pathname=`_root.${i}`:e&&bi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function xE(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function SE(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function ME(a,e,i){let s=await Promise.all(a.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await xE(u,i);return f.links?f.links():[]}return[]}));return AE(s.flat(1).filter(SE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function __(a,e,i,s,l,u){let f=(p,h)=>i[h]?p.route.id!==i[h].route.id:!0,d=(p,h)=>i[h].pathname!==p.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==p.params["*"];return u==="assets"?e.filter((p,h)=>f(p,h)||d(p,h)):u==="data"?e.filter((p,h)=>{let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,h)||d(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function EE(a,e,{includeHydrateFallback:i}={}){return TE(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function TE(a){return[...new Set(a)]}function bE(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function AE(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let u=JSON.stringify(bE(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}function I0(){let a=ne.useContext(Ir);return tp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function RE(){let a=ne.useContext(rl);return tp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var np=ne.createContext(void 0);np.displayName="FrameworkContext";function H0(){let a=ne.useContext(np);return tp(a,"You must render this element inside a <HydratedRouter> element"),a}function wE(a,e){let i=ne.useContext(np),[s,l]=ne.useState(!1),[u,f]=ne.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=e,_=ne.useRef(null);ne.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let A=y=>{y.forEach(P=>{f(P.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[a]),ne.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let x=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?a!=="intent"?[u,_,{}]:[u,_,{onFocus:Vo(d,x),onBlur:Vo(p,E),onMouseEnter:Vo(h,x),onMouseLeave:Vo(g,E),onTouchStart:Vo(v,x)}]:[!1,_,{}]}function Vo(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function CE({page:a,...e}){let{router:i}=I0(),s=ne.useMemo(()=>$a(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?ne.createElement(UE,{page:a,matches:s,...e}):null}function DE(a){let{manifest:e,routeModules:i}=H0(),[s,l]=ne.useState([]);return ne.useEffect(()=>{let u=!1;return ME(a,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[a,e,i]),s}function UE({page:a,matches:e,...i}){let s=Hr(),{manifest:l,routeModules:u}=H0(),{basename:f}=I0(),{loaderData:d,matches:p}=RE(),h=ne.useMemo(()=>__(a,e,p,l,s,"data"),[a,e,p,l,s]),g=ne.useMemo(()=>__(a,e,p,l,s,"assets"),[a,e,p,l,s]),v=ne.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let E=new Set,A=!1;if(e.forEach(y=>{let P=l.routes[y.route.id];!P||!P.hasLoader||(!h.some(N=>N.route.id===y.route.id)&&y.route.id in d&&u[y.route.id]?.shouldRevalidate||P.hasClientLoader?A=!0:E.add(y.route.id))}),E.size===0)return[];let S=yE(a,f,"data");return A&&E.size>0&&S.searchParams.set("_routes",e.filter(y=>E.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[f,d,s,l,h,e,a,u]),_=ne.useMemo(()=>EE(g,l),[g,l]),x=DE(g);return ne.createElement(ne.Fragment,null,v.map(E=>ne.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),_.map(E=>ne.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),x.map(({key:E,link:A})=>ne.createElement("link",{key:E,nonce:i.nonce,...A})))}function LE(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var G0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{G0&&(window.__reactRouterVersion="7.8.2")}catch{}function NE(a,e){return yM({basename:e?.basename,unstable_getContext:e?.unstable_getContext,future:e?.future,history:BS({window:e?.window}),hydrationData:OE(),routes:a,mapRouteProperties:aE,hydrationRouteProperties:rE,dataStrategy:e?.dataStrategy,patchRoutesOnNavigation:e?.patchRoutesOnNavigation,window:e?.window}).initialize()}function OE(){let a=window?.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:PE(a.errors)}),a}function PE(a){if(!a)return null;let e=Object.entries(a),i={};for(let[s,l]of e)if(l&&l.__type==="RouteErrorResponse")i[s]=new ic(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let u=window[l.__subType];if(typeof u=="function")try{let f=new u(l.message);f.stack="",i[s]=f}catch{}}if(i[s]==null){let u=new Error(l.message);u.stack="",i[s]=u}}else i[s]=l;return i}var V0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k0=ne.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,state:d,target:p,to:h,preventScrollReset:g,viewTransition:v,..._},x){let{basename:E}=ne.useContext(qi),A=typeof h=="string"&&V0.test(h),S,y=!1;if(typeof h=="string"&&A&&(S=h,G0))try{let D=new URL(window.location.href),C=h.startsWith("//")?new URL(D.protocol+h):new URL(h),V=bi(C.pathname,E);C.origin===D.origin&&V!=null?h=V+C.search+C.hash:y=!0}catch{Mn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let P=kM(h,{relative:l}),[N,U,H]=wE(s,_),w=IE(h,{replace:f,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:v});function I(D){e&&e(D),D.defaultPrevented||w(D)}let X=ne.createElement("a",{..._,...H,href:S||P,onClick:y||u?e:I,ref:LE(x,U),target:p,"data-discover":!A&&i==="render"?"true":void 0});return N&&!A?ne.createElement(ne.Fragment,null,X,ne.createElement(CE,{page:P})):X});k0.displayName="Link";var zE=ne.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:d,children:p,...h},g){let v=ol(f,{relative:h.relative}),_=Hr(),x=ne.useContext(rl),{navigator:E,basename:A}=ne.useContext(qi),S=x!=null&&XE(v)&&d===!0,y=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,P=_.pathname,N=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(P=P.toLowerCase(),N=N?N.toLowerCase():null,y=y.toLowerCase()),N&&A&&(N=bi(N,A)||N);const U=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let H=P===y||!l&&P.startsWith(y)&&P.charAt(U)==="/",w=N!=null&&(N===y||!l&&N.startsWith(y)&&N.charAt(y.length)==="/"),I={isActive:H,isPending:w,isTransitioning:S},X=H?e:void 0,D;typeof s=="function"?D=s(I):D=[s,H?"active":null,w?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(I):u;return ne.createElement(k0,{...h,"aria-current":X,className:D,ref:g,style:C,to:f,viewTransition:d},typeof p=="function"?p(I):p)});zE.displayName="NavLink";var FE=ne.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:u,method:f=Yu,action:d,onSubmit:p,relative:h,preventScrollReset:g,viewTransition:v,..._},x)=>{let E=VE(),A=kE(d,{relative:h}),S=f.toLowerCase()==="get"?"get":"post",y=typeof d=="string"&&V0.test(d),P=N=>{if(p&&p(N),N.defaultPrevented)return;N.preventDefault();let U=N.nativeEvent.submitter,H=U?.getAttribute("formmethod")||f;E(U||N.currentTarget,{fetcherKey:e,method:H,navigate:i,replace:l,state:u,relative:h,preventScrollReset:g,viewTransition:v})};return ne.createElement("form",{ref:x,method:S,action:A,onSubmit:s?p:P,..._,"data-discover":!y&&a==="render"?"true":void 0})});FE.displayName="Form";function BE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X0(a){let e=ne.useContext(Ir);return Dt(e,BE(a)),e}function IE(a,{target:e,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=XM(),p=Hr(),h=ol(a,{relative:u});return ne.useCallback(g=>{if(mE(g,e)){g.preventDefault();let v=i!==void 0?i:ar(p)===ar(h);d(a,{replace:v,state:s,preventScrollReset:l,relative:u,viewTransition:f})}},[p,d,h,i,s,e,a,l,u,f])}var HE=0,GE=()=>`__${String(++HE)}__`;function VE(){let{router:a}=X0("useSubmit"),{basename:e}=ne.useContext(qi),i=tE();return ne.useCallback(async(s,l={})=>{let{action:u,method:f,encType:d,formData:p,body:h}=_E(s,e);if(l.navigate===!1){let g=l.fetcherKey||GE();await a.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:h,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await a.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:h,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,i])}function kE(a,{relative:e}={}){let{basename:i}=ne.useContext(qi),s=ne.useContext(Yi);Dt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...ol(a||".",{relative:e})},f=Hr();if(a==null){u.search=f.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Xi([i,u.pathname])),ar(u)}function XE(a,{relative:e}={}){let i=ne.useContext(Qh);Dt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=X0("useViewTransitionState"),l=ol(a,{relative:e});if(!i.isTransitioning)return!1;let u=bi(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=bi(i.nextLocation.pathname,s)||i.nextLocation.pathname;return nc(l.pathname,f)!=null||nc(l.pathname,u)!=null}var WE=y0();function qE(a){return ne.createElement(oE,{flushSync:WE.flushSync,...a})}const W0=ne.createContext({active:!1,duration:800,payload:null,start:async(a={})=>{},end:(a=600)=>{}});function ip(){const a=_0.useContext(W0);if(!a)throw new Error("useTransition must be used within TransitionProvider");return a}function YE({children:a}){const[e,i]=ne.useState(!1),[s,l]=ne.useState(800),[u,f]=ne.useState(null),d=ne.useCallback((h={})=>{const g=typeof h=="number"?h:h.out??600;return l(g),f(h.payload??null),i(!0),new Promise(v=>{setTimeout(v,g)})},[]),p=ne.useCallback((h=600)=>{l(h),i(!1),setTimeout(()=>f(null),h+20)},[]);return ln.jsx(W0.Provider,{value:{active:e,duration:s,payload:u,start:d,end:p},children:a})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="176",jE=0,y_=1,ZE=2,q0=1,KE=2,ma=3,rr=0,ni=1,ga=2,nr=0,zs=1,x_=2,S_=3,M_=4,QE=5,Ur=100,JE=101,$E=102,eT=103,tT=104,nT=200,iT=201,aT=202,rT=203,sh=204,oh=205,sT=206,oT=207,lT=208,uT=209,cT=210,fT=211,dT=212,hT=213,pT=214,lh=0,uh=1,ch=2,Bs=3,fh=4,dh=5,hh=6,ph=7,Y0=0,mT=1,gT=2,ir=0,vT=1,_T=2,yT=3,xT=4,ST=5,MT=6,ET=7,j0=300,Is=301,Hs=302,mh=303,gh=304,cc=306,rc=1e3,Or=1001,vh=1002,Pi=1003,TT=1004,Eu=1005,ti=1006,Ad=1007,Pr=1008,xa=1009,Z0=1010,K0=1011,$o=1012,rp=1013,Fr=1014,va=1015,ll=1016,sp=1017,op=1018,el=1020,Q0=35902,J0=1021,$0=1022,Oi=1023,tl=1026,nl=1027,ey=1028,lp=1029,ty=1030,up=1031,cp=1033,Zu=33776,Ku=33777,Qu=33778,Ju=33779,_h=35840,yh=35841,xh=35842,Sh=35843,Mh=36196,Eh=37492,Th=37496,bh=37808,Ah=37809,Rh=37810,wh=37811,Ch=37812,Dh=37813,Uh=37814,Lh=37815,Nh=37816,Oh=37817,Ph=37818,zh=37819,Fh=37820,Bh=37821,$u=36492,Ih=36494,Hh=36495,ny=36283,Gh=36284,Vh=36285,kh=36286,bT=3200,AT=3201,RT=0,wT=1,tr="",Ti="srgb",Gs="srgb-linear",sc="linear",en="srgb",ys=7680,E_=519,CT=512,DT=513,UT=514,iy=515,LT=516,NT=517,OT=518,PT=519,T_=35044,b_="300 es",_a=2e3,oc=2001;class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=Math.PI/180,Xh=180/Math.PI;function ul(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(kn[a&255]+kn[a>>8&255]+kn[a>>16&255]+kn[a>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[i&63|128]+kn[i>>8&255]+"-"+kn[i>>16&255]+kn[i>>24&255]+kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]).toLowerCase()}function Ot(a,e,i){return Math.max(e,Math.min(i,a))}function zT(a,e){return(a%e+e)%e}function wd(a,e,i){return(1-i)*a+i*e}function ko(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function $n(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class qt{constructor(e=0,i=0){qt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ot(this.x,e.x,i.x),this.y=Ot(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ot(this.x,e,i),this.y=Ot(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ot(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ot(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*s-f*l+e.x,this.y=u*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,i,s,l,u,f,d,p,h){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,d,p,h)}set(e,i,s,l,u,f,d,p,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=s,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],p=s[6],h=s[1],g=s[4],v=s[7],_=s[2],x=s[5],E=s[8],A=l[0],S=l[3],y=l[6],P=l[1],N=l[4],U=l[7],H=l[2],w=l[5],I=l[8];return u[0]=f*A+d*P+p*H,u[3]=f*S+d*N+p*w,u[6]=f*y+d*U+p*I,u[1]=h*A+g*P+v*H,u[4]=h*S+g*N+v*w,u[7]=h*y+g*U+v*I,u[2]=_*A+x*P+E*H,u[5]=_*S+x*N+E*w,u[8]=_*y+x*U+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],p=e[6],h=e[7],g=e[8];return i*f*g-i*d*h-s*u*g+s*d*p+l*u*h-l*f*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],p=e[6],h=e[7],g=e[8],v=g*f-d*h,_=d*p-g*u,x=h*u-f*p,E=i*v+s*_+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(l*h-g*s)*A,e[2]=(d*s-l*f)*A,e[3]=_*A,e[4]=(g*i-l*p)*A,e[5]=(l*u-d*i)*A,e[6]=x*A,e[7]=(s*p-h*i)*A,e[8]=(f*i-s*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,f,d){const p=Math.cos(u),h=Math.sin(u);return this.set(s*p,s*h,-s*(p*f+h*d)+f+e,-l*h,l*p,-l*(-h*f+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Cd.makeScale(e,i)),this}rotate(e){return this.premultiply(Cd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Cd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new Mt;function ay(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function il(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function FT(){const a=il("canvas");return a.style.display="block",a}const A_={};function ec(a){a in A_||(A_[a]=!0,console.warn(a))}function BT(a,e,i){return new Promise(function(s,l){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function IT(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function HT(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const R_=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GT(){const a={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===en&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===en&&(l.r=Fs(l.r),l.g=Fs(l.g),l.b=Fs(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===tr?sc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[Gs]:{primaries:e,whitePoint:s,transfer:sc,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:e,whitePoint:s,transfer:en,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),a}const Ht=GT();function ya(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Fs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let xs;class VT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{xs===void 0&&(xs=il("canvas")),xs.width=e.width,xs.height=e.height;const l=xs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=xs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=il("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ya(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ya(i[s]/255)*255):i[s]=ya(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kT=0;class fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(Dd(l[f].image)):u.push(Dd(l[f]))}else u=Dd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Dd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?VT.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XT=0;class jn extends ks{constructor(e=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=Or,l=Or,u=ti,f=Pr,d=Oi,p=xa,h=jn.DEFAULT_ANISOTROPY,g=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=ul(),this.name="",this.source=new fp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rc:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rc:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=j0;jn.DEFAULT_ANISOTROPY=1;class _n{constructor(e=0,i=0,s=0,l=1){_n.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const p=e.elements,h=p[0],g=p[4],v=p[8],_=p[1],x=p[5],E=p[9],A=p[2],S=p[6],y=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(E+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,U=(x+1)/2,H=(y+1)/2,w=(g+_)/4,I=(v+A)/4,X=(E+S)/4;return N>U&&N>H?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=w/s,u=I/s):U>H?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=w/l,u=X/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=I/u,l=X/u),this.set(s,l,u,i),this}let P=Math.sqrt((S-E)*(S-E)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(v-A)/P,this.z=(_-g)/P,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ot(this.x,e.x,i.x),this.y=Ot(this.y,e.y,i.y),this.z=Ot(this.z,e.z,i.z),this.w=Ot(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ot(this.x,e,i),this.y=Ot(this.y,e,i),this.z=Ot(this.z,e,i),this.w=Ot(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ot(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WT extends ks{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new _n(0,0,e,i),this.scissorTest=!1,this.viewport=new _n(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const u=new jn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new fp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends WT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class ry extends jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qT extends jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,f,d){let p=s[l+0],h=s[l+1],g=s[l+2],v=s[l+3];const _=u[f+0],x=u[f+1],E=u[f+2],A=u[f+3];if(d===0){e[i+0]=p,e[i+1]=h,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=_,e[i+1]=x,e[i+2]=E,e[i+3]=A;return}if(v!==A||p!==_||h!==x||g!==E){let S=1-d;const y=p*_+h*x+g*E+v*A,P=y>=0?1:-1,N=1-y*y;if(N>Number.EPSILON){const H=Math.sqrt(N),w=Math.atan2(H,y*P);S=Math.sin(S*w)/H,d=Math.sin(d*w)/H}const U=d*P;if(p=p*S+_*U,h=h*S+x*U,g=g*S+E*U,v=v*S+A*U,S===1-d){const H=1/Math.sqrt(p*p+h*h+g*g+v*v);p*=H,h*=H,g*=H,v*=H}}e[i]=p,e[i+1]=h,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,f){const d=s[l],p=s[l+1],h=s[l+2],g=s[l+3],v=u[f],_=u[f+1],x=u[f+2],E=u[f+3];return e[i]=d*E+g*v+p*x-h*_,e[i+1]=p*E+g*_+h*v-d*x,e[i+2]=h*E+g*x+d*_-p*v,e[i+3]=g*E-d*v-p*_-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,h=d(s/2),g=d(l/2),v=d(u/2),_=p(s/2),x=p(l/2),E=p(u/2);switch(f){case"XYZ":this._x=_*g*v+h*x*E,this._y=h*x*v-_*g*E,this._z=h*g*E+_*x*v,this._w=h*g*v-_*x*E;break;case"YXZ":this._x=_*g*v+h*x*E,this._y=h*x*v-_*g*E,this._z=h*g*E-_*x*v,this._w=h*g*v+_*x*E;break;case"ZXY":this._x=_*g*v-h*x*E,this._y=h*x*v+_*g*E,this._z=h*g*E+_*x*v,this._w=h*g*v-_*x*E;break;case"ZYX":this._x=_*g*v-h*x*E,this._y=h*x*v+_*g*E,this._z=h*g*E-_*x*v,this._w=h*g*v+_*x*E;break;case"YZX":this._x=_*g*v+h*x*E,this._y=h*x*v+_*g*E,this._z=h*g*E-_*x*v,this._w=h*g*v-_*x*E;break;case"XZY":this._x=_*g*v-h*x*E,this._y=h*x*v-_*g*E,this._z=h*g*E+_*x*v,this._w=h*g*v+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],p=i[9],h=i[2],g=i[6],v=i[10],_=s+d+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-p)*x,this._y=(u-h)*x,this._z=(f-l)*x}else if(s>d&&s>v){const x=2*Math.sqrt(1+s-d-v);this._w=(g-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(u+h)/x}else if(d>v){const x=2*Math.sqrt(1+d-s-v);this._w=(u-h)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+v-s-d);this._w=(f-l)/x,this._x=(u+h)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,f=e._w,d=i._x,p=i._y,h=i._z,g=i._w;return this._x=s*g+f*d+l*h-u*p,this._y=l*g+f*p+u*d-s*h,this._z=u*g+f*h+s*p-l*d,this._w=f*g-s*d-l*p-u*h,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,f=this._w;let d=f*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const x=1-i;return this._w=x*f+i*this._w,this._x=x*s+i*this._x,this._y=x*l+i*this._y,this._z=x*u+i*this._z,this.normalize(),this}const h=Math.sqrt(p),g=Math.atan2(h,d),v=Math.sin((1-i)*g)/h,_=Math.sin(i*g)/h;return this._w=f*v+this._w*_,this._x=s*v+this._x*_,this._y=l*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,i=0,s=0){fe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(C_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(C_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,f=e.y,d=e.z,p=e.w,h=2*(f*l-d*s),g=2*(d*i-u*l),v=2*(u*s-f*i);return this.x=i+p*h+f*v-d*g,this.y=s+p*g+d*h-u*v,this.z=l+p*v+u*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ot(this.x,e.x,i.x),this.y=Ot(this.y,e.y,i.y),this.z=Ot(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ot(this.x,e,i),this.y=Ot(this.y,e,i),this.z=Ot(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ot(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*f-s*p,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ud.copy(this).projectOnVector(e),this.sub(Ud)}reflect(e){return this.sub(Ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ot(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ud=new fe,C_=new cl;class fl{constructor(e=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ci):Ci.fromBufferAttribute(u,f),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tu.copy(s.boundingBox)),Tu.applyMatrix4(e.matrixWorld),this.union(Tu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),bu.subVectors(this.max,Xo),Ss.subVectors(e.a,Xo),Ms.subVectors(e.b,Xo),Es.subVectors(e.c,Xo),qa.subVectors(Ms,Ss),Ya.subVectors(Es,Ms),Er.subVectors(Ss,Es);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-Er.z,Er.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,Er.z,0,-Er.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-Er.y,Er.x,0];return!Ld(i,Ss,Ms,Es,bu)||(i=[1,0,0,0,1,0,0,0,1],!Ld(i,Ss,Ms,Es,bu))?!1:(Au.crossVectors(qa,Ya),i=[Au.x,Au.y,Au.z],Ld(i,Ss,Ms,Es,bu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ca=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Ci=new fe,Tu=new fl,Ss=new fe,Ms=new fe,Es=new fe,qa=new fe,Ya=new fe,Er=new fe,Xo=new fe,bu=new fe,Au=new fe,Tr=new fe;function Ld(a,e,i,s,l){for(let u=0,f=a.length-3;u<=f;u+=3){Tr.fromArray(a,u);const d=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),p=e.dot(Tr),h=i.dot(Tr),g=s.dot(Tr);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>d)return!1}return!0}const YT=new fl,Wo=new fe,Nd=new fe;class dp{constructor(e=new fe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):YT.setFromPoints(e).getCenter(s);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Nd)),this.expandByPoint(Wo.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fa=new fe,Od=new fe,Ru=new fe,ja=new fe,Pd=new fe,wu=new fe,zd=new fe;class jT{constructor(e=new fe,i=new fe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Od.copy(e).add(i).multiplyScalar(.5),Ru.copy(i).sub(e).normalize(),ja.copy(this.origin).sub(Od);const u=e.distanceTo(i)*.5,f=-this.direction.dot(Ru),d=ja.dot(this.direction),p=-ja.dot(Ru),h=ja.lengthSq(),g=Math.abs(1-f*f);let v,_,x,E;if(g>0)if(v=f*p-d,_=f*d-p,E=u*g,v>=0)if(_>=-E)if(_<=E){const A=1/g;v*=A,_*=A,x=v*(v+f*_+2*d)+_*(f*v+_+2*p)+h}else _=u,v=Math.max(0,-(f*_+d)),x=-v*v+_*(_+2*p)+h;else _=-u,v=Math.max(0,-(f*_+d)),x=-v*v+_*(_+2*p)+h;else _<=-E?(v=Math.max(0,-(-f*u+d)),_=v>0?-u:Math.min(Math.max(-u,-p),u),x=-v*v+_*(_+2*p)+h):_<=E?(v=0,_=Math.min(Math.max(-u,-p),u),x=_*(_+2*p)+h):(v=Math.max(0,-(f*u+d)),_=v>0?u:Math.min(Math.max(-u,-p),u),x=-v*v+_*(_+2*p)+h);else _=f>0?-u:u,v=Math.max(0,-(f*_+d)),x=-v*v+_*(_+2*p)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Od).addScaledVector(Ru,_),x}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,f,d,p;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),g>=0?(u=(e.min.y-_.y)*g,f=(e.max.y-_.y)*g):(u=(e.max.y-_.y)*g,f=(e.min.y-_.y)*g),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,s,l,u){Pd.subVectors(i,e),wu.subVectors(s,e),zd.crossVectors(Pd,wu);let f=this.direction.dot(zd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ja.subVectors(this.origin,e);const p=d*this.direction.dot(wu.crossVectors(ja,wu));if(p<0)return null;const h=d*this.direction.dot(Pd.cross(ja));if(h<0||p+h>f)return null;const g=-d*ja.dot(zd);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En{constructor(e,i,s,l,u,f,d,p,h,g,v,_,x,E,A,S){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,d,p,h,g,v,_,x,E,A,S)}set(e,i,s,l,u,f,d,p,h,g,v,_,x,E,A,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=u,y[5]=f,y[9]=d,y[13]=p,y[2]=h,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=E,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),h=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const _=f*g,x=f*v,E=d*g,A=d*v;i[0]=p*g,i[4]=-p*v,i[8]=h,i[1]=x+E*h,i[5]=_-A*h,i[9]=-d*p,i[2]=A-_*h,i[6]=E+x*h,i[10]=f*p}else if(e.order==="YXZ"){const _=p*g,x=p*v,E=h*g,A=h*v;i[0]=_+A*d,i[4]=E*d-x,i[8]=f*h,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=x*d-E,i[6]=A+_*d,i[10]=f*p}else if(e.order==="ZXY"){const _=p*g,x=p*v,E=h*g,A=h*v;i[0]=_-A*d,i[4]=-f*v,i[8]=E+x*d,i[1]=x+E*d,i[5]=f*g,i[9]=A-_*d,i[2]=-f*h,i[6]=d,i[10]=f*p}else if(e.order==="ZYX"){const _=f*g,x=f*v,E=d*g,A=d*v;i[0]=p*g,i[4]=E*h-x,i[8]=_*h+A,i[1]=p*v,i[5]=A*h+_,i[9]=x*h-E,i[2]=-h,i[6]=d*p,i[10]=f*p}else if(e.order==="YZX"){const _=f*p,x=f*h,E=d*p,A=d*h;i[0]=p*g,i[4]=A-_*v,i[8]=E*v+x,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-h*g,i[6]=x*v+E,i[10]=_-A*v}else if(e.order==="XZY"){const _=f*p,x=f*h,E=d*p,A=d*h;i[0]=p*g,i[4]=-v,i[8]=h*g,i[1]=_*v+A,i[5]=f*g,i[9]=x*v-E,i[2]=E*v-x,i[6]=d*g,i[10]=A*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZT,e,KT)}lookAt(e,i,s){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Za.crossVectors(s,ci),Za.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Za.crossVectors(s,ci)),Za.normalize(),Cu.crossVectors(ci,Za),l[0]=Za.x,l[4]=Cu.x,l[8]=ci.x,l[1]=Za.y,l[5]=Cu.y,l[9]=ci.y,l[2]=Za.z,l[6]=Cu.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],p=s[8],h=s[12],g=s[1],v=s[5],_=s[9],x=s[13],E=s[2],A=s[6],S=s[10],y=s[14],P=s[3],N=s[7],U=s[11],H=s[15],w=l[0],I=l[4],X=l[8],D=l[12],C=l[1],V=l[5],de=l[9],ee=l[13],ce=l[2],me=l[6],z=l[10],$=l[14],W=l[3],Ee=l[7],L=l[11],J=l[15];return u[0]=f*w+d*C+p*ce+h*W,u[4]=f*I+d*V+p*me+h*Ee,u[8]=f*X+d*de+p*z+h*L,u[12]=f*D+d*ee+p*$+h*J,u[1]=g*w+v*C+_*ce+x*W,u[5]=g*I+v*V+_*me+x*Ee,u[9]=g*X+v*de+_*z+x*L,u[13]=g*D+v*ee+_*$+x*J,u[2]=E*w+A*C+S*ce+y*W,u[6]=E*I+A*V+S*me+y*Ee,u[10]=E*X+A*de+S*z+y*L,u[14]=E*D+A*ee+S*$+y*J,u[3]=P*w+N*C+U*ce+H*W,u[7]=P*I+N*V+U*me+H*Ee,u[11]=P*X+N*de+U*z+H*L,u[15]=P*D+N*ee+U*$+H*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],f=e[1],d=e[5],p=e[9],h=e[13],g=e[2],v=e[6],_=e[10],x=e[14],E=e[3],A=e[7],S=e[11],y=e[15];return E*(+u*p*v-l*h*v-u*d*_+s*h*_+l*d*x-s*p*x)+A*(+i*p*x-i*h*_+u*f*_-l*f*x+l*h*g-u*p*g)+S*(+i*h*v-i*d*x-u*f*v+s*f*x+u*d*g-s*h*g)+y*(-l*d*g-i*p*v+i*d*_+l*f*v-s*f*_+s*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],p=e[6],h=e[7],g=e[8],v=e[9],_=e[10],x=e[11],E=e[12],A=e[13],S=e[14],y=e[15],P=v*S*h-A*_*h+A*p*x-d*S*x-v*p*y+d*_*y,N=E*_*h-g*S*h-E*p*x+f*S*x+g*p*y-f*_*y,U=g*A*h-E*v*h+E*d*x-f*A*x-g*d*y+f*v*y,H=E*v*p-g*A*p-E*d*_+f*A*_+g*d*S-f*v*S,w=i*P+s*N+l*U+u*H;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/w;return e[0]=P*I,e[1]=(A*_*u-v*S*u-A*l*x+s*S*x+v*l*y-s*_*y)*I,e[2]=(d*S*u-A*p*u+A*l*h-s*S*h-d*l*y+s*p*y)*I,e[3]=(v*p*u-d*_*u-v*l*h+s*_*h+d*l*x-s*p*x)*I,e[4]=N*I,e[5]=(g*S*u-E*_*u+E*l*x-i*S*x-g*l*y+i*_*y)*I,e[6]=(E*p*u-f*S*u-E*l*h+i*S*h+f*l*y-i*p*y)*I,e[7]=(f*_*u-g*p*u+g*l*h-i*_*h-f*l*x+i*p*x)*I,e[8]=U*I,e[9]=(E*v*u-g*A*u-E*s*x+i*A*x+g*s*y-i*v*y)*I,e[10]=(f*A*u-E*d*u+E*s*h-i*A*h-f*s*y+i*d*y)*I,e[11]=(g*d*u-f*v*u-g*s*h+i*v*h+f*s*x-i*d*x)*I,e[12]=H*I,e[13]=(g*A*l-E*v*l+E*s*_-i*A*_-g*s*S+i*v*S)*I,e[14]=(E*d*l-f*A*l-E*s*p+i*A*p+f*s*S-i*d*S)*I,e[15]=(f*v*l-g*d*l+g*s*p-i*v*p-f*s*_+i*d*_)*I,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=e.x,d=e.y,p=e.z,h=u*f,g=u*d;return this.set(h*f+s,h*d-l*p,h*p+l*d,0,h*d+l*p,g*d+s,g*p-l*f,0,h*p-l*d,g*p+l*f,u*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,f){return this.set(1,s,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,p=i._w,h=u+u,g=f+f,v=d+d,_=u*h,x=u*g,E=u*v,A=f*g,S=f*v,y=d*v,P=p*h,N=p*g,U=p*v,H=s.x,w=s.y,I=s.z;return l[0]=(1-(A+y))*H,l[1]=(x+U)*H,l[2]=(E-N)*H,l[3]=0,l[4]=(x-U)*w,l[5]=(1-(_+y))*w,l[6]=(S+P)*w,l[7]=0,l[8]=(E+N)*I,l[9]=(S-P)*I,l[10]=(1-(_+A))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=Ts.set(l[0],l[1],l[2]).length();const f=Ts.set(l[4],l[5],l[6]).length(),d=Ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Di.copy(this);const h=1/u,g=1/f,v=1/d;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=g,Di.elements[5]*=g,Di.elements[6]*=g,Di.elements[8]*=v,Di.elements[9]*=v,Di.elements[10]*=v,i.setFromRotationMatrix(Di),s.x=u,s.y=f,s.z=d,this}makePerspective(e,i,s,l,u,f,d=_a){const p=this.elements,h=2*u/(i-e),g=2*u/(s-l),v=(i+e)/(i-e),_=(s+l)/(s-l);let x,E;if(d===_a)x=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===oc)x=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=h,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,f,d=_a){const p=this.elements,h=1/(i-e),g=1/(s-l),v=1/(f-u),_=(i+e)*h,x=(s+l)*g;let E,A;if(d===_a)E=(f+u)*v,A=-2*v;else if(d===oc)E=u*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*h,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ts=new fe,Di=new En,ZT=new fe(0,0,0),KT=new fe(1,1,1),Za=new fe,Cu=new fe,ci=new fe,D_=new En,U_=new cl;class Sa{constructor(e=0,i=0,s=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],f=l[4],d=l[8],p=l[1],h=l[5],g=l[9],v=l[2],_=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ot(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return D_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return U_.setFromEuler(this),this.setFromQuaternion(U_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class sy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QT=0;const L_=new fe,bs=new cl,da=new En,Du=new fe,qo=new fe,JT=new fe,$T=new cl,N_=new fe(1,0,0),O_=new fe(0,1,0),P_=new fe(0,0,1),z_={type:"added"},eb={type:"removed"},As={type:"childadded",child:null},Fd={type:"childremoved",child:null};class hi extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DEFAULT_UP.clone();const e=new fe,i=new Sa,s=new cl,l=new fe(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new En},normalMatrix:{value:new Mt}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(N_,e)}rotateY(e){return this.rotateOnAxis(O_,e)}rotateZ(e){return this.rotateOnAxis(P_,e)}translateOnAxis(e,i){return L_.copy(e).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(N_,e)}translateY(e){return this.translateOnAxis(O_,e)}translateZ(e){return this.translateOnAxis(P_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Du.copy(e):Du.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(qo,Du,this.up):da.lookAt(Du,qo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(da),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z_),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eb),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z_),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,JT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,$T,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const v=p[h];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=f(e.geometries),p=f(e.materials),h=f(e.textures),g=f(e.images),v=f(e.shapes),_=f(e.skeletons),x=f(e.animations),E=f(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const h in d){const g=d[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}hi.DEFAULT_UP=new fe(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new fe,ha=new fe,Bd=new fe,pa=new fe,Rs=new fe,ws=new fe,F_=new fe,Id=new fe,Hd=new fe,Gd=new fe,Vd=new _n,kd=new _n,Xd=new _n;class Ni{constructor(e=new fe,i=new fe,s=new fe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ui.subVectors(e,i),l.cross(Ui);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ui.subVectors(l,i),ha.subVectors(s,i),Bd.subVectors(e,i);const f=Ui.dot(Ui),d=Ui.dot(ha),p=Ui.dot(Bd),h=ha.dot(ha),g=ha.dot(Bd),v=f*h-d*d;if(v===0)return u.set(0,0,0),null;const _=1/v,x=(h*p-d*g)*_,E=(f*g-d*p)*_;return u.set(1-x-E,E,x)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,u,f,d,p){return this.getBarycoord(e,i,s,l,pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,pa.x),p.addScaledVector(f,pa.y),p.addScaledVector(d,pa.z),p)}static getInterpolatedAttribute(e,i,s,l,u,f){return Vd.setScalar(0),kd.setScalar(0),Xd.setScalar(0),Vd.fromBufferAttribute(e,i),kd.fromBufferAttribute(e,s),Xd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Vd,u.x),f.addScaledVector(kd,u.y),f.addScaledVector(Xd,u.z),f}static isFrontFacing(e,i,s,l){return Ui.subVectors(s,i),ha.subVectors(e,i),Ui.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ui.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ni.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let f,d;Rs.subVectors(l,s),ws.subVectors(u,s),Id.subVectors(e,s);const p=Rs.dot(Id),h=ws.dot(Id);if(p<=0&&h<=0)return i.copy(s);Hd.subVectors(e,l);const g=Rs.dot(Hd),v=ws.dot(Hd);if(g>=0&&v<=g)return i.copy(l);const _=p*v-g*h;if(_<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(Rs,f);Gd.subVectors(e,u);const x=Rs.dot(Gd),E=ws.dot(Gd);if(E>=0&&x<=E)return i.copy(u);const A=x*h-p*E;if(A<=0&&h>=0&&E<=0)return d=h/(h-E),i.copy(s).addScaledVector(ws,d);const S=g*E-x*v;if(S<=0&&v-g>=0&&x-E>=0)return F_.subVectors(u,l),d=(v-g)/(v-g+(x-E)),i.copy(l).addScaledVector(F_,d);const y=1/(S+A+_);return f=A*y,d=_*y,i.copy(s).addScaledVector(Rs,f).addScaledVector(ws,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function Wd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Zt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ht.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ht.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ht.workingColorSpace){if(e=zT(e,1),i=Ot(i,0,1),s=Ot(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=Wd(f,u,e+1/3),this.g=Wd(f,u,e),this.b=Wd(f,u,e-1/3)}return Ht.toWorkingColorSpace(this,l),this}setStyle(e,i=Ti){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ti){const s=oy[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Ht.fromWorkingColorSpace(Xn.copy(this),e),Math.round(Ot(Xn.r*255,0,255))*65536+Math.round(Ot(Xn.g*255,0,255))*256+Math.round(Ot(Xn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,u=Xn.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let p,h;const g=(d+f)/2;if(d===f)p=0,h=0;else{const v=f-d;switch(h=g<=.5?v/(f+d):v/(2-f-d),f){case s:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-s)/v+2;break;case u:p=(s-l)/v+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,i=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Ti){Ht.fromWorkingColorSpace(Xn.copy(this),e);const i=Xn.r,s=Xn.g,l=Xn.b;return e!==Ti?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(Uu);const s=wd(Ka.h,Uu.h,i),l=wd(Ka.s,Uu.s,i),u=wd(Ka.l,Uu.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Zt;Zt.NAMES=oy;let tb=0;class fc extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=zs,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(s.blending=this.blending),this.side!==rr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sh&&(s.blendSrc=this.blendSrc),this.blendDst!==oh&&(s.blendDst=this.blendDst),this.blendEquation!==Ur&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ly extends fc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=Y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new fe,Lu=new qt;let nb=0;class Wi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=T_,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Lu.fromBufferAttribute(this,i),Lu.applyMatrix3(e),this.setXY(i,Lu.x,Lu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=$n(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array),u=$n(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==T_&&(e.usage=this.usage),e}}class uy extends Wi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class cy extends Wi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class zr extends Wi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let ib=0;const Mi=new En,qd=new hi,Cs=new fe,fi=new fl,Yo=new fl,Nn=new fe;class Gr extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ay(e)?cy:uy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new Mt().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new zr(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];fi.setFromBufferAttribute(u),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(fi.min,Yo.min),fi.expandByPoint(Nn),Nn.addVectors(fi.max,Yo.max),fi.expandByPoint(Nn)):(fi.expandByPoint(Yo.min),fi.expandByPoint(Yo.max))}fi.getCenter(s);let l=0;for(let u=0,f=e.count;u<f;u++)Nn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],p=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Nn.fromBufferAttribute(d,h),p&&(Cs.fromBufferAttribute(e,h),Nn.add(Cs)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let X=0;X<s.count;X++)d[X]=new fe,p[X]=new fe;const h=new fe,g=new fe,v=new fe,_=new qt,x=new qt,E=new qt,A=new fe,S=new fe;function y(X,D,C){h.fromBufferAttribute(s,X),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,C),_.fromBufferAttribute(u,X),x.fromBufferAttribute(u,D),E.fromBufferAttribute(u,C),g.sub(h),v.sub(h),x.sub(_),E.sub(_);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(V),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(V),d[X].add(A),d[D].add(A),d[C].add(A),p[X].add(S),p[D].add(S),p[C].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let X=0,D=P.length;X<D;++X){const C=P[X],V=C.start,de=C.count;for(let ee=V,ce=V+de;ee<ce;ee+=3)y(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const N=new fe,U=new fe,H=new fe,w=new fe;function I(X){H.fromBufferAttribute(l,X),w.copy(H);const D=d[X];N.copy(D),N.sub(H.multiplyScalar(H.dot(D))).normalize(),U.crossVectors(w,D);const V=U.dot(p[X])<0?-1:1;f.setXYZW(X,N.x,N.y,N.z,V)}for(let X=0,D=P.length;X<D;++X){const C=P[X],V=C.start,de=C.count;for(let ee=V,ce=V+de;ee<ce;ee+=3)I(e.getX(ee+0)),I(e.getX(ee+1)),I(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,x=s.count;_<x;_++)s.setXYZ(_,0,0,0);const l=new fe,u=new fe,f=new fe,d=new fe,p=new fe,h=new fe,g=new fe,v=new fe;if(e)for(let _=0,x=e.count;_<x;_+=3){const E=e.getX(_+0),A=e.getX(_+1),S=e.getX(_+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,A),h.fromBufferAttribute(s,S),d.add(g),p.add(g),h.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,x=i.count;_<x;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Nn.fromBufferAttribute(e,i),Nn.normalize(),e.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(d,p){const h=d.array,g=d.itemSize,v=d.normalized,_=new h.constructor(p.length*g);let x=0,E=0;for(let A=0,S=p.length;A<S;A++){d.isInterleavedBufferAttribute?x=p[A]*d.data.stride+d.offset:x=p[A]*g;for(let y=0;y<g;y++)_[E++]=h[x++]}return new Wi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gr,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],h=e(p,s);i.setAttribute(d,h)}const u=this.morphAttributes;for(const d in u){const p=[],h=u[d];for(let g=0,v=h.length;g<v;g++){const _=h[g],x=e(_,s);p.push(x)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const h=f[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const h=s[p];e.data.attributes[p]=h.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let v=0,_=h.length;v<_;v++){const x=h[v];g.push(x.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const u=e.morphAttributes;for(const h in u){const g=[],v=u[h];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const B_=new En,br=new jT,Nu=new dp,I_=new fe,Ou=new fe,Pu=new fe,zu=new fe,Yd=new fe,Fu=new fe,H_=new fe,Bu=new fe;class ki extends hi{constructor(e=new Gr,i=new ly){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Fu.set(0,0,0);for(let p=0,h=u.length;p<h;p++){const g=d[p],v=u[p];g!==0&&(Yd.fromBufferAttribute(v,e),f?Fu.addScaledVector(Yd,g):Fu.addScaledVector(Yd.sub(i),g))}i.add(Fu)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nu.copy(s.boundingSphere),Nu.applyMatrix4(u),br.copy(e.ray).recast(e.near),!(Nu.containsPoint(br.origin)===!1&&(br.intersectSphere(Nu,I_)===null||br.origin.distanceToSquared(I_)>(e.far-e.near)**2))&&(B_.copy(u).invert(),br.copy(e.ray).applyMatrix4(B_),!(s.boundingBox!==null&&br.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,s){let l;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,h=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,x=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=_.length;E<A;E++){const S=_[E],y=f[S.materialIndex],P=Math.max(S.start,x.start),N=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let U=P,H=N;U<H;U+=3){const w=d.getX(U),I=d.getX(U+1),X=d.getX(U+2);l=Iu(this,y,e,s,h,g,v,w,I,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let S=E,y=A;S<y;S+=3){const P=d.getX(S),N=d.getX(S+1),U=d.getX(S+2);l=Iu(this,f,e,s,h,g,v,P,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,A=_.length;E<A;E++){const S=_[E],y=f[S.materialIndex],P=Math.max(S.start,x.start),N=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let U=P,H=N;U<H;U+=3){const w=U,I=U+1,X=U+2;l=Iu(this,y,e,s,h,g,v,w,I,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let S=E,y=A;S<y;S+=3){const P=S,N=S+1,U=S+2;l=Iu(this,f,e,s,h,g,v,P,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function ab(a,e,i,s,l,u,f,d){let p;if(e.side===ni?p=s.intersectTriangle(f,u,l,!0,d):p=s.intersectTriangle(l,u,f,e.side===rr,d),p===null)return null;Bu.copy(d),Bu.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(Bu);return h<i.near||h>i.far?null:{distance:h,point:Bu.clone(),object:a}}function Iu(a,e,i,s,l,u,f,d,p,h){a.getVertexPosition(d,Ou),a.getVertexPosition(p,Pu),a.getVertexPosition(h,zu);const g=ab(a,e,i,s,Ou,Pu,zu,H_);if(g){const v=new fe;Ni.getBarycoord(H_,Ou,Pu,zu,v),l&&(g.uv=Ni.getInterpolatedAttribute(l,d,p,h,v,new qt)),u&&(g.uv1=Ni.getInterpolatedAttribute(u,d,p,h,v,new qt)),f&&(g.normal=Ni.getInterpolatedAttribute(f,d,p,h,v,new fe),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:p,c:h,normal:new fe,materialIndex:0};Ni.getNormal(Ou,Pu,zu,_.normal),g.face=_,g.barycoord=v}return g}class dl extends Gr{constructor(e=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],h=[],g=[],v=[];let _=0,x=0;E("z","y","x",-1,-1,s,i,e,f,u,0),E("z","y","x",1,-1,s,i,-e,f,u,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,u,4),E("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new zr(h,3)),this.setAttribute("normal",new zr(g,3)),this.setAttribute("uv",new zr(v,2));function E(A,S,y,P,N,U,H,w,I,X,D){const C=U/I,V=H/X,de=U/2,ee=H/2,ce=w/2,me=I+1,z=X+1;let $=0,W=0;const Ee=new fe;for(let L=0;L<z;L++){const J=L*V-ee;for(let ye=0;ye<me;ye++){const Te=ye*C-de;Ee[A]=Te*P,Ee[S]=J*N,Ee[y]=ce,h.push(Ee.x,Ee.y,Ee.z),Ee[A]=0,Ee[S]=0,Ee[y]=w>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),v.push(ye/I),v.push(1-L/X),$+=1}}for(let L=0;L<X;L++)for(let J=0;J<I;J++){const ye=_+J+me*L,Te=_+J+me*(L+1),Q=_+(J+1)+me*(L+1),ve=_+(J+1)+me*L;p.push(ye,Te,ve),p.push(Te,Q,ve),W+=6}d.addGroup(x,W,D),x+=W,_+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Yn(a){const e={};for(let i=0;i<a.length;i++){const s=Vs(a[i]);for(const l in s)e[l]=s[l]}return e}function rb(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function fy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const sb={clone:Vs,merge:Yn};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ma extends fc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=rb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class dy extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=_a}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new fe,G_=new qt,V_=new qt;class Li extends dy{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,i){return this.getViewBounds(e,G_,V_),i.subVectors(V_,G_)}setViewOffset(e,i,s,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Rd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,h=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*s/h,l*=f.width/p,s*=f.height/h}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Us=1;class ub extends hi{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Li(Ds,Us,e,i);l.layers=this.layers,this.add(l);const u=new Li(Ds,Us,e,i);u.layers=this.layers,this.add(u);const f=new Li(Ds,Us,e,i);f.layers=this.layers,this.add(f);const d=new Li(Ds,Us,e,i);d.layers=this.layers,this.add(d);const p=new Li(Ds,Us,e,i);p.layers=this.layers,this.add(p);const h=new Li(Ds,Us,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,p]=i;for(const h of i)this.remove(h);if(e===_a)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,h,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,h),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(v,_,x),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class hy extends jn{constructor(e=[],i=Is,s,l,u,f,d,p,h,g){super(e,i,s,l,u,f,d,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cb extends Br{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new hy(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ti}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new dl(5,5,5),u=new Ma({name:"CubemapFromEquirect",uniforms:Vs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:nr});u.uniforms.tEquirect.value=i;const f=new ki(l,u),d=i.minFilter;return i.minFilter===Pr&&(i.minFilter=ti),new ub(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(u)}}class Hu extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fb={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,f=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,s),y=this._getHandJoint(h,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,E=.005;h.inputState.pinching&&_>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Hu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class db extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Zd=new fe,hb=new fe,pb=new Mt;class Cr{constructor(e=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Zd.subVectors(s,i).cross(hb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Zd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||pb.getNormalMatrix(e),l=this.coplanarPoint(Zd).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new dp,Gu=new fe;class py{constructor(e=new Cr,i=new Cr,s=new Cr,l=new Cr,u=new Cr,f=new Cr){this.planes=[e,i,s,l,u,f]}set(e,i,s,l,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=_a){const s=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],p=l[3],h=l[4],g=l[5],v=l[6],_=l[7],x=l[8],E=l[9],A=l[10],S=l[11],y=l[12],P=l[13],N=l[14],U=l[15];if(s[0].setComponents(p-u,_-h,S-x,U-y).normalize(),s[1].setComponents(p+u,_+h,S+x,U+y).normalize(),s[2].setComponents(p+f,_+g,S+E,U+P).normalize(),s[3].setComponents(p-f,_-g,S-E,U-P).normalize(),s[4].setComponents(p-d,_-v,S-A,U-N).normalize(),i===_a)s[5].setComponents(p+d,_+v,S+A,U+N).normalize();else if(i===oc)s[5].setComponents(d,v,A,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gu.x=l.normal.x>0?e.max.x:e.min.x,Gu.y=l.normal.y>0?e.max.y:e.min.y,Gu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class my extends jn{constructor(e,i,s=Fr,l,u,f,d=Pi,p=Pi,h,g=tl){if(g!==tl&&g!==nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,f,d,p,g,s,h),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hl extends Gr{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,f=i/2,d=Math.floor(s),p=Math.floor(l),h=d+1,g=p+1,v=e/d,_=i/p,x=[],E=[],A=[],S=[];for(let y=0;y<g;y++){const P=y*_-f;for(let N=0;N<h;N++){const U=N*v-u;E.push(U,-P,0),A.push(0,0,1),S.push(N/d),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<d;P++){const N=P+h*y,U=P+h*(y+1),H=P+1+h*(y+1),w=P+1+h*y;x.push(N,U,w),x.push(U,H,w)}this.setIndex(x),this.setAttribute("position",new zr(E,3)),this.setAttribute("normal",new zr(A,3)),this.setAttribute("uv",new zr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class mb extends fc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gb extends fc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const k_={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class vb{constructor(e,i,s){const l=this;let u=!1,f=0,d=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,f,d),u=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,d),f===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,v){return h.push(g,v),this},this.removeHandler=function(g){const v=h.indexOf(g);return v!==-1&&h.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=h.length;v<_;v+=2){const x=h[v],E=h[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return E}return null}}}const _b=new vb;class hp{constructor(e){this.manager=e!==void 0?e:_b,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hp.DEFAULT_MATERIAL_NAME="__DEFAULT";class yb extends hp{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,f=k_.get(e);if(f!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(f),u.manager.itemEnd(e)},0),f;const d=il("img");function p(){g(),k_.add(e,this),i&&i(this),u.manager.itemEnd(e)}function h(v){g(),l&&l(v),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",h,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class X_ extends hp{constructor(e){super(e)}load(e,i,s,l){const u=new jn,f=new yb(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class gy extends dy{constructor(e=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,f=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,f=u+h*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class xb extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function W_(a,e,i,s){const l=Sb(s);switch(i){case J0:return a*e;case ey:return a*e/l.components*l.byteLength;case lp:return a*e/l.components*l.byteLength;case ty:return a*e*2/l.components*l.byteLength;case up:return a*e*2/l.components*l.byteLength;case $0:return a*e*3/l.components*l.byteLength;case Oi:return a*e*4/l.components*l.byteLength;case cp:return a*e*4/l.components*l.byteLength;case Zu:case Ku:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Qu:case Ju:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case yh:case Sh:return Math.max(a,16)*Math.max(e,8)/4;case _h:case xh:return Math.max(a,8)*Math.max(e,8)/2;case Mh:case Eh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Th:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case $u:case Ih:case Hh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ny:case Gh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Vh:case kh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Sb(a){switch(a){case xa:case Z0:return{byteLength:1,components:1};case $o:case K0:case ll:return{byteLength:2,components:1};case sp:case op:return{byteLength:2,components:4};case Fr:case rp:case va:return{byteLength:4,components:1};case Q0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vy(){let a=null,e=!1,i=null,s=null;function l(u,f){i(u,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){a=u}}}function Mb(a){const e=new WeakMap;function i(d,p){const h=d.array,g=d.usage,v=h.byteLength,_=a.createBuffer();a.bindBuffer(p,_),a.bufferData(p,h,g),d.onUploadCallback();let x;if(h instanceof Float32Array)x=a.FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=a.SHORT;else if(h instanceof Uint32Array)x=a.UNSIGNED_INT;else if(h instanceof Int32Array)x=a.INT;else if(h instanceof Int8Array)x=a.BYTE;else if(h instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,h){const g=p.array,v=p.updateRanges;if(a.bindBuffer(h,d),v.length===0)a.bufferSubData(h,0,g);else{v.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<v.length;x++){const E=v[_],A=v[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,v[_]=A)}v.length=_+1;for(let x=0,E=v.length;x<E;x++){const A=v[x];a.bufferSubData(h,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,d,p),h.version=d.version}}return{get:l,remove:u,update:f}}var Eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ub=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$b="gl_FragColor = linearToOutputTexel( gl_FragColor );",eA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_A=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:Eb,alphahash_pars_fragment:Tb,alphamap_fragment:bb,alphamap_pars_fragment:Ab,alphatest_fragment:Rb,alphatest_pars_fragment:wb,aomap_fragment:Cb,aomap_pars_fragment:Db,batching_pars_vertex:Ub,batching_vertex:Lb,begin_vertex:Nb,beginnormal_vertex:Ob,bsdfs:Pb,iridescence_fragment:zb,bumpmap_pars_fragment:Fb,clipping_planes_fragment:Bb,clipping_planes_pars_fragment:Ib,clipping_planes_pars_vertex:Hb,clipping_planes_vertex:Gb,color_fragment:Vb,color_pars_fragment:kb,color_pars_vertex:Xb,color_vertex:Wb,common:qb,cube_uv_reflection_fragment:Yb,defaultnormal_vertex:jb,displacementmap_pars_vertex:Zb,displacementmap_vertex:Kb,emissivemap_fragment:Qb,emissivemap_pars_fragment:Jb,colorspace_fragment:$b,colorspace_pars_fragment:eA,envmap_fragment:tA,envmap_common_pars_fragment:nA,envmap_pars_fragment:iA,envmap_pars_vertex:aA,envmap_physical_pars_fragment:mA,envmap_vertex:rA,fog_vertex:sA,fog_pars_vertex:oA,fog_fragment:lA,fog_pars_fragment:uA,gradientmap_pars_fragment:cA,lightmap_pars_fragment:fA,lights_lambert_fragment:dA,lights_lambert_pars_fragment:hA,lights_pars_begin:pA,lights_toon_fragment:gA,lights_toon_pars_fragment:vA,lights_phong_fragment:_A,lights_phong_pars_fragment:yA,lights_physical_fragment:xA,lights_physical_pars_fragment:SA,lights_fragment_begin:MA,lights_fragment_maps:EA,lights_fragment_end:TA,logdepthbuf_fragment:bA,logdepthbuf_pars_fragment:AA,logdepthbuf_pars_vertex:RA,logdepthbuf_vertex:wA,map_fragment:CA,map_pars_fragment:DA,map_particle_fragment:UA,map_particle_pars_fragment:LA,metalnessmap_fragment:NA,metalnessmap_pars_fragment:OA,morphinstance_vertex:PA,morphcolor_vertex:zA,morphnormal_vertex:FA,morphtarget_pars_vertex:BA,morphtarget_vertex:IA,normal_fragment_begin:HA,normal_fragment_maps:GA,normal_pars_fragment:VA,normal_pars_vertex:kA,normal_vertex:XA,normalmap_pars_fragment:WA,clearcoat_normal_fragment_begin:qA,clearcoat_normal_fragment_maps:YA,clearcoat_pars_fragment:jA,iridescence_pars_fragment:ZA,opaque_fragment:KA,packing:QA,premultiplied_alpha_fragment:JA,project_vertex:$A,dithering_fragment:e1,dithering_pars_fragment:t1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:r1,shadowmap_vertex:s1,shadowmask_pars_fragment:o1,skinbase_vertex:l1,skinning_pars_vertex:u1,skinning_vertex:c1,skinnormal_vertex:f1,specularmap_fragment:d1,specularmap_pars_fragment:h1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:v1,uv_pars_fragment:_1,uv_pars_vertex:y1,uv_vertex:x1,worldpos_vertex:S1,background_vert:M1,background_frag:E1,backgroundCube_vert:T1,backgroundCube_frag:b1,cube_vert:A1,cube_frag:R1,depth_vert:w1,depth_frag:C1,distanceRGBA_vert:D1,distanceRGBA_frag:U1,equirect_vert:L1,equirect_frag:N1,linedashed_vert:O1,linedashed_frag:P1,meshbasic_vert:z1,meshbasic_frag:F1,meshlambert_vert:B1,meshlambert_frag:I1,meshmatcap_vert:H1,meshmatcap_frag:G1,meshnormal_vert:V1,meshnormal_frag:k1,meshphong_vert:X1,meshphong_frag:W1,meshphysical_vert:q1,meshphysical_frag:Y1,meshtoon_vert:j1,meshtoon_frag:Z1,points_vert:K1,points_frag:Q1,shadow_vert:J1,shadow_frag:$1,sprite_vert:eR,sprite_frag:tR},Ge={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Vi={basic:{uniforms:Yn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Yn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Yn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Yn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Yn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Yn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Yn([Ge.points,Ge.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Yn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Yn([Ge.common,Ge.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Yn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Yn([Ge.sprite,Ge.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Yn([Ge.common,Ge.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Yn([Ge.lights,Ge.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Vi.physical={uniforms:Yn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Vu={r:0,b:0,g:0},Rr=new Sa,nR=new En;function iR(a,e,i,s,l,u,f){const d=new Zt(0);let p=u===!0?0:1,h,g,v=null,_=0,x=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:e).get(U)),U}function A(N){let U=!1;const H=E(N);H===null?y(d,p):H&&H.isColor&&(y(H,1),U=!0);const w=a.xr.getEnvironmentBlendMode();w==="additive"?s.buffers.color.setClear(0,0,0,1,f):w==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(N,U){const H=E(U);H&&(H.isCubeTexture||H.mapping===cc)?(g===void 0&&(g=new ki(new dl(1,1,1),new Ma({name:"BackgroundCubeMaterial",uniforms:Vs(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(w,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Rr.copy(U.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(nR.makeRotationFromEuler(Rr)),g.material.toneMapped=Ht.getTransfer(H.colorSpace)!==en,(v!==H||_!==H.version||x!==a.toneMapping)&&(g.material.needsUpdate=!0,v=H,_=H.version,x=a.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(h===void 0&&(h=new ki(new hl(2,2),new Ma({name:"BackgroundMaterial",uniforms:Vs(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(h)),h.material.uniforms.t2D.value=H,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.toneMapped=Ht.getTransfer(H.colorSpace)!==en,H.matrixAutoUpdate===!0&&H.updateMatrix(),h.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||_!==H.version||x!==a.toneMapping)&&(h.material.needsUpdate=!0,v=H,_=H.version,x=a.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function y(N,U){N.getRGB(Vu,fy(a)),s.buffers.color.setClear(Vu.r,Vu.g,Vu.b,U,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),p=U,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,y(d,p)},render:A,addToRenderList:S,dispose:P}}function aR(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,f=!1;function d(C,V,de,ee,ce){let me=!1;const z=v(ee,de,V);u!==z&&(u=z,h(u.object)),me=x(C,ee,de,ce),me&&E(C,ee,de,ce),ce!==null&&e.update(ce,a.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,U(C,V,de,ee),ce!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return a.createVertexArray()}function h(C){return a.bindVertexArray(C)}function g(C){return a.deleteVertexArray(C)}function v(C,V,de){const ee=de.wireframe===!0;let ce=s[C.id];ce===void 0&&(ce={},s[C.id]=ce);let me=ce[V.id];me===void 0&&(me={},ce[V.id]=me);let z=me[ee];return z===void 0&&(z=_(p()),me[ee]=z),z}function _(C){const V=[],de=[],ee=[];for(let ce=0;ce<i;ce++)V[ce]=0,de[ce]=0,ee[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:de,attributeDivisors:ee,object:C,attributes:{},index:null}}function x(C,V,de,ee){const ce=u.attributes,me=V.attributes;let z=0;const $=de.getAttributes();for(const W in $)if($[W].location>=0){const L=ce[W];let J=me[W];if(J===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),L===void 0||L.attribute!==J||J&&L.data!==J.data)return!0;z++}return u.attributesNum!==z||u.index!==ee}function E(C,V,de,ee){const ce={},me=V.attributes;let z=0;const $=de.getAttributes();for(const W in $)if($[W].location>=0){let L=me[W];L===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const J={};J.attribute=L,L&&L.data&&(J.data=L.data),ce[W]=J,z++}u.attributes=ce,u.attributesNum=z,u.index=ee}function A(){const C=u.newAttributes;for(let V=0,de=C.length;V<de;V++)C[V]=0}function S(C){y(C,0)}function y(C,V){const de=u.newAttributes,ee=u.enabledAttributes,ce=u.attributeDivisors;de[C]=1,ee[C]===0&&(a.enableVertexAttribArray(C),ee[C]=1),ce[C]!==V&&(a.vertexAttribDivisor(C,V),ce[C]=V)}function P(){const C=u.newAttributes,V=u.enabledAttributes;for(let de=0,ee=V.length;de<ee;de++)V[de]!==C[de]&&(a.disableVertexAttribArray(de),V[de]=0)}function N(C,V,de,ee,ce,me,z){z===!0?a.vertexAttribIPointer(C,V,de,ce,me):a.vertexAttribPointer(C,V,de,ee,ce,me)}function U(C,V,de,ee){A();const ce=ee.attributes,me=de.getAttributes(),z=V.defaultAttributeValues;for(const $ in me){const W=me[$];if(W.location>=0){let Ee=ce[$];if(Ee===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),Ee!==void 0){const L=Ee.normalized,J=Ee.itemSize,ye=e.get(Ee);if(ye===void 0)continue;const Te=ye.buffer,Q=ye.type,ve=ye.bytesPerElement,Ae=Q===a.INT||Q===a.UNSIGNED_INT||Ee.gpuType===rp;if(Ee.isInterleavedBufferAttribute){const Le=Ee.data,Be=Le.stride,_t=Ee.offset;if(Le.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)y(W.location+qe,Le.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let qe=0;qe<W.locationSize;qe++)S(W.location+qe);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let qe=0;qe<W.locationSize;qe++)N(W.location+qe,J/W.locationSize,Q,L,Be*ve,(_t+J/W.locationSize*qe)*ve,Ae)}else{if(Ee.isInstancedBufferAttribute){for(let Le=0;Le<W.locationSize;Le++)y(W.location+Le,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Le=0;Le<W.locationSize;Le++)S(W.location+Le);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let Le=0;Le<W.locationSize;Le++)N(W.location+Le,J/W.locationSize,Q,L,J*ve,J/W.locationSize*Le*ve,Ae)}}else if(z!==void 0){const L=z[$];if(L!==void 0)switch(L.length){case 2:a.vertexAttrib2fv(W.location,L);break;case 3:a.vertexAttrib3fv(W.location,L);break;case 4:a.vertexAttrib4fv(W.location,L);break;default:a.vertexAttrib1fv(W.location,L)}}}}P()}function H(){X();for(const C in s){const V=s[C];for(const de in V){const ee=V[de];for(const ce in ee)g(ee[ce].object),delete ee[ce];delete V[de]}delete s[C]}}function w(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const de in V){const ee=V[de];for(const ce in ee)g(ee[ce].object),delete ee[ce];delete V[de]}delete s[C.id]}function I(C){for(const V in s){const de=s[V];if(de[C.id]===void 0)continue;const ee=de[C.id];for(const ce in ee)g(ee[ce].object),delete ee[ce];delete de[C.id]}}function X(){D(),f=!0,u!==l&&(u=l,h(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:S,disableUnusedAttributes:P}}function rR(a,e,i){let s;function l(h){s=h}function u(h,g){a.drawArrays(s,h,g),i.update(g,s,1)}function f(h,g,v){v!==0&&(a.drawArraysInstanced(s,h,g,v),i.update(g,s,v))}function d(h,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,g,0,v);let x=0;for(let E=0;E<v;E++)x+=g[E];i.update(x,s,1)}function p(h,g,v,_){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)f(h[E],g[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(s,h,0,g,0,_,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A]*_[A];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function sR(a,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Oi&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===ll&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==xa&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==va&&!X)}function p(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=p(h);g!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),N=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,w=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:H,maxSamples:w}}function oR(a){const e=this;let i=null,s=0,l=!1,u=!1;const f=new Cr,d=new Mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||s!==0||l;return l=_,s=v.length,x},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,x){const E=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,y=a.get(v);if(!l||E===null||E.length===0||u&&!S)u?g(null):h();else{const P=u?0:s,N=P*4;let U=y.clippingState||null;p.value=U,U=g(E,_,N,x);for(let H=0;H!==N;++H)U[H]=i[H];y.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function h(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,_,x,E){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=p.value,E!==!0||S===null){const y=x+A*4,P=_.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<y)&&(S=new Float32Array(y));for(let N=0,U=x;N!==A;++N,U+=4)f.copy(v[N]).applyMatrix4(P,d),f.normal.toArray(S,U),S[U+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function lR(a){let e=new WeakMap;function i(f,d){return d===mh?f.mapping=Is:d===gh&&(f.mapping=Hs),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===mh||d===gh)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const h=new cb(p.height);return h.fromEquirectangularTexture(a,f),e.set(f,h),f.addEventListener("dispose",l),i(h.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Os=4,q_=[.125,.215,.35,.446,.526,.582],Lr=20,Kd=new gy,Y_=new Zt;let Qd=null,Jd=0,$d=0,eh=!1;const Dr=(1+Math.sqrt(5))/2,Ls=1/Dr,j_=[new fe(-Dr,Ls,0),new fe(Dr,Ls,0),new fe(-Ls,0,Dr),new fe(Ls,0,Dr),new fe(0,Dr,-Ls),new fe(0,Dr,Ls),new fe(-1,1,-1),new fe(1,1,-1),new fe(-1,1,1),new fe(1,1,1)],uR=new fe;class Z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=uR}=u;Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qd,Jd,$d),this._renderer.xr.enabled=eh,e.scissorTest=!1,ku(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Is||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:ll,format:Oi,colorSpace:Gs,depthBuffer:!1},l=K_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cR(u)),this._blurMaterial=fR(u,e,i)}return l}_compileMaterial(e){const i=new ki(this._lodPlanes[0],e);this._renderer.compile(i,Kd)}_sceneToCubeUV(e,i,s,l,u){const p=new Li(90,1,i,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Y_),v.toneMapping=ir,v.autoClear=!1;const E=new ly({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),A=new ki(new dl,E);let S=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,S=!0):(E.color.copy(Y_),S=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(p.up.set(0,h[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[P],u.y,u.z)):N===1?(p.up.set(0,0,h[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[P],u.z)):(p.up.set(0,h[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[P]));const U=this._cubeSize;ku(l,N*U,P>2?U:0,U,U),v.setRenderTarget(l),S&&v.render(A,p),v.render(e,p)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=x,v.autoClear=_,e.background=y}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Is||e.mapping===Hs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new ki(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;ku(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Kd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=j_[(l-u-1)%j_.length];this._blur(e,u-1,u,f,d)}i.autoClear=s}_blur(e,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",u),this._halfBlur(f,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,f,d){const p=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ki(this._lodPlanes[l],h),_=h.uniforms,x=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*Lr-1),A=u/E,S=isFinite(u)?1+Math.floor(g*A):Lr;S>Lr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Lr}`);const y=[];let P=0;for(let I=0;I<Lr;++I){const X=I/A,D=Math.exp(-X*X/2);y.push(D),I===0?P+=D:I<S&&(P+=2*D)}for(let I=0;I<y.length;I++)y[I]=y[I]/P;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=f==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-s;const U=this._sizeLods[l],H=3*U*(l>N-Os?l-N+Os:0),w=4*(this._cubeSize-U);ku(i,H,w,3*U,2*U),p.setRenderTarget(i),p.render(v,Kd)}}function cR(a){const e=[],i=[],s=[];let l=a;const u=a-Os+1+q_.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>a-Os?p=q_[f-a+Os-1]:f===0&&(p=0),s.push(p);const h=1/(d-2),g=-h,v=1+h,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,E=6,A=3,S=2,y=1,P=new Float32Array(A*E*x),N=new Float32Array(S*E*x),U=new Float32Array(y*E*x);for(let w=0;w<x;w++){const I=w%3*2/3-1,X=w>2?0:-1,D=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];P.set(D,A*E*w),N.set(_,S*E*w);const C=[w,w,w,w,w,w];U.set(C,y*E*w)}const H=new Gr;H.setAttribute("position",new Wi(P,A)),H.setAttribute("uv",new Wi(N,S)),H.setAttribute("faceIndex",new Wi(U,y)),e.push(H),l>Os&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function K_(a,e,i){const s=new Br(a,e,i);return s.texture.mapping=cc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ku(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function fR(a,e,i){const s=new Float32Array(Lr),l=new fe(0,1,0);return new Ma({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Q_(){return new Ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function J_(){return new Ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function pp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dR(a){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,h=p===mh||p===gh,g=p===Is||p===Hs;if(h||g){let v=e.get(d);const _=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new Z_(a)),v=h?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const x=d.image;return h&&x&&x.height>0||g&&x&&l(x)?(i===null&&(i=new Z_(a)),v=h?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const h=6;for(let g=0;g<h;g++)d[g]!==void 0&&p++;return p===h}function u(d){const p=d.target;p.removeEventListener("dispose",u);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function hR(a){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ec("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function pR(a,e,i,s){const l={},u=new WeakMap;function f(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete l[_.id];const x=u.get(_);x&&(e.remove(x),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function p(v){const _=v.attributes;for(const x in _)e.update(_[x],a.ARRAY_BUFFER)}function h(v){const _=[],x=v.index,E=v.attributes.position;let A=0;if(x!==null){const P=x.array;A=x.version;for(let N=0,U=P.length;N<U;N+=3){const H=P[N+0],w=P[N+1],I=P[N+2];_.push(H,w,w,I,I,H)}}else if(E!==void 0){const P=E.array;A=E.version;for(let N=0,U=P.length/3-1;N<U;N+=3){const H=N+0,w=N+1,I=N+2;_.push(H,w,w,I,I,H)}}else return;const S=new(ay(_)?cy:uy)(_,1);S.version=A;const y=u.get(v);y&&e.remove(y),u.set(v,S)}function g(v){const _=u.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&h(v)}else h(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function mR(a,e,i){let s;function l(_){s=_}let u,f;function d(_){u=_.type,f=_.bytesPerElement}function p(_,x){a.drawElements(s,x,u,_*f),i.update(x,s,1)}function h(_,x,E){E!==0&&(a.drawElementsInstanced(s,x,u,_*f,E),i.update(x,s,E))}function g(_,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,u,_,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];i.update(S,s,1)}function v(_,x,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)h(_[y]/f,x[y],A[y]);else{S.multiDrawElementsInstancedWEBGL(s,x,0,u,_,0,A,0,E);let y=0;for(let P=0;P<E;P++)y+=x[P]*A[P];i.update(y,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function gR(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=d*(u/3);break;case a.LINES:i.lines+=d*(u/2);break;case a.LINE_STRIP:i.lines+=d*(u-1);break;case a.LINE_LOOP:i.lines+=d*u;break;case a.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function vR(a,e,i){const s=new WeakMap,l=new _n;function u(f,d,p){const h=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(d);if(_===void 0||_.count!==v){let D=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const x=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;x===!0&&(N=1),E===!0&&(N=2),A===!0&&(N=3);let U=d.attributes.position.count*N,H=1;U>e.maxTextureSize&&(H=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const w=new Float32Array(U*H*4*v),I=new ry(w,U,H,v);I.type=va,I.needsUpdate=!0;const X=N*4;for(let C=0;C<v;C++){const V=S[C],de=y[C],ee=P[C],ce=U*H*4*C;for(let me=0;me<V.count;me++){const z=me*X;x===!0&&(l.fromBufferAttribute(V,me),w[ce+z+0]=l.x,w[ce+z+1]=l.y,w[ce+z+2]=l.z,w[ce+z+3]=0),E===!0&&(l.fromBufferAttribute(de,me),w[ce+z+4]=l.x,w[ce+z+5]=l.y,w[ce+z+6]=l.z,w[ce+z+7]=0),A===!0&&(l.fromBufferAttribute(ee,me),w[ce+z+8]=l.x,w[ce+z+9]=l.y,w[ce+z+10]=l.z,w[ce+z+11]=ee.itemSize===4?l.w:1)}}_={count:v,texture:I,size:new qt(U,H)},s.set(d,_),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let x=0;for(let A=0;A<h.length;A++)x+=h[A];const E=d.morphTargetsRelative?1:1-x;p.getUniforms().setValue(a,"morphTargetBaseInfluence",E),p.getUniforms().setValue(a,"morphTargetInfluences",h)}p.getUniforms().setValue(a,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:u}}function _R(a,e,i,s){let l=new WeakMap;function u(p){const h=s.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==h&&(e.update(v),l.set(v,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==h&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,h))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==h&&(_.update(),l.set(_,h))}return v}function f(){l=new WeakMap}function d(p){const h=p.target;h.removeEventListener("dispose",d),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:u,dispose:f}}const _y=new jn,$_=new my(1,1),yy=new ry,xy=new qT,Sy=new hy,e0=[],t0=[],n0=new Float32Array(16),i0=new Float32Array(9),a0=new Float32Array(4);function Xs(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let u=e0[l];if(u===void 0&&(u=new Float32Array(l),e0[l]=u),e!==0){s.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=i,a[f].toArray(u,d)}return u}function Rn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function wn(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function dc(a,e){let i=t0[e];i===void 0&&(i=new Int32Array(e),t0[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function yR(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function xR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;a.uniform2fv(this.addr,e),wn(i,e)}}function SR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Rn(i,e))return;a.uniform3fv(this.addr,e),wn(i,e)}}function MR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;a.uniform4fv(this.addr,e),wn(i,e)}}function ER(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(i,e)}else{if(Rn(i,s))return;a0.set(s),a.uniformMatrix2fv(this.addr,!1,a0),wn(i,s)}}function TR(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(i,e)}else{if(Rn(i,s))return;i0.set(s),a.uniformMatrix3fv(this.addr,!1,i0),wn(i,s)}}function bR(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(i,e)}else{if(Rn(i,s))return;n0.set(s),a.uniformMatrix4fv(this.addr,!1,n0),wn(i,s)}}function AR(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function RR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;a.uniform2iv(this.addr,e),wn(i,e)}}function wR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;a.uniform3iv(this.addr,e),wn(i,e)}}function CR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;a.uniform4iv(this.addr,e),wn(i,e)}}function DR(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function UR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;a.uniform2uiv(this.addr,e),wn(i,e)}}function LR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;a.uniform3uiv(this.addr,e),wn(i,e)}}function NR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;a.uniform4uiv(this.addr,e),wn(i,e)}}function OR(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let u;this.type===a.SAMPLER_2D_SHADOW?($_.compareFunction=iy,u=$_):u=_y,i.setTexture2D(e||u,l)}function PR(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||xy,l)}function zR(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Sy,l)}function FR(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||yy,l)}function BR(a){switch(a){case 5126:return yR;case 35664:return xR;case 35665:return SR;case 35666:return MR;case 35674:return ER;case 35675:return TR;case 35676:return bR;case 5124:case 35670:return AR;case 35667:case 35671:return RR;case 35668:case 35672:return wR;case 35669:case 35673:return CR;case 5125:return DR;case 36294:return UR;case 36295:return LR;case 36296:return NR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return FR}}function IR(a,e){a.uniform1fv(this.addr,e)}function HR(a,e){const i=Xs(e,this.size,2);a.uniform2fv(this.addr,i)}function GR(a,e){const i=Xs(e,this.size,3);a.uniform3fv(this.addr,i)}function VR(a,e){const i=Xs(e,this.size,4);a.uniform4fv(this.addr,i)}function kR(a,e){const i=Xs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function XR(a,e){const i=Xs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function WR(a,e){const i=Xs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function qR(a,e){a.uniform1iv(this.addr,e)}function YR(a,e){a.uniform2iv(this.addr,e)}function jR(a,e){a.uniform3iv(this.addr,e)}function ZR(a,e){a.uniform4iv(this.addr,e)}function KR(a,e){a.uniform1uiv(this.addr,e)}function QR(a,e){a.uniform2uiv(this.addr,e)}function JR(a,e){a.uniform3uiv(this.addr,e)}function $R(a,e){a.uniform4uiv(this.addr,e)}function ew(a,e,i){const s=this.cache,l=e.length,u=dc(i,l);Rn(s,u)||(a.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||_y,u[f])}function tw(a,e,i){const s=this.cache,l=e.length,u=dc(i,l);Rn(s,u)||(a.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||xy,u[f])}function nw(a,e,i){const s=this.cache,l=e.length,u=dc(i,l);Rn(s,u)||(a.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Sy,u[f])}function iw(a,e,i){const s=this.cache,l=e.length,u=dc(i,l);Rn(s,u)||(a.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||yy,u[f])}function aw(a){switch(a){case 5126:return IR;case 35664:return HR;case 35665:return GR;case 35666:return VR;case 35674:return kR;case 35675:return XR;case 35676:return WR;case 5124:case 35670:return qR;case 35667:case 35671:return YR;case 35668:case 35672:return jR;case 35669:case 35673:return ZR;case 5125:return KR;case 36294:return QR;case 36295:return JR;case 36296:return $R;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}class rw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=BR(i.type)}}class sw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=aw(i.type)}}class ow{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const th=/(\w+)(\])?(\[|\.)?/g;function r0(a,e){a.seq.push(e),a.map[e.id]=e}function lw(a,e,i){const s=a.name,l=s.length;for(th.lastIndex=0;;){const u=th.exec(s),f=th.lastIndex;let d=u[1];const p=u[2]==="]",h=u[3];if(p&&(d=d|0),h===void 0||h==="["&&f+2===l){r0(i,h===void 0?new rw(d,a,e):new sw(d,a,e));break}else{let v=i.map[d];v===void 0&&(v=new ow(d),r0(i,v)),i=v}}}class tc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),f=e.getUniformLocation(i,u.name);lw(u,f,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function s0(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const uw=37297;let cw=0;function fw(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const o0=new Mt;function dw(a){Ht._getMatrix(o0,Ht.workingColorSpace,a);const e=`mat3( ${o0.elements.map(i=>i.toFixed(4))} )`;switch(Ht.getTransfer(a)){case sc:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function l0(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),l=a.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+fw(a.getShaderSource(e),f)}else return l}function hw(a,e){const i=dw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function pw(a,e){let i;switch(e){case vT:i="Linear";break;case _T:i="Reinhard";break;case yT:i="Cineon";break;case xT:i="ACESFilmic";break;case MT:i="AgX";break;case ET:i="Neutral";break;case ST:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xu=new fe;function mw(){Ht.getLuminanceCoefficients(Xu);const a=Xu.x.toFixed(4),e=Xu.y.toFixed(4),i=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function vw(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function _w(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=a.getActiveAttrib(e,l),f=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:d}}return i}function Zo(a){return a!==""}function u0(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(a){return a.replace(yw,Sw)}const xw=new Map;function Sw(a,e){let i=Tt[e];if(i===void 0){const s=xw.get(e);if(s!==void 0)i=Tt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Wh(i)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(a){return a.replace(Mw,Ew)}function Ew(a,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function d0(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tw(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===q0?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===KE?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ma&&(e="SHADOWMAP_TYPE_VSM"),e}function bw(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Is:case Hs:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Aw(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function Rw(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Y0:e="ENVMAP_BLENDING_MULTIPLY";break;case mT:e="ENVMAP_BLENDING_MIX";break;case gT:e="ENVMAP_BLENDING_ADD";break}return e}function ww(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Cw(a,e,i,s){const l=a.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=Tw(i),h=bw(i),g=Aw(i),v=Rw(i),_=ww(i),x=gw(i),E=vw(u),A=l.createProgram();let S,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),y.length>0&&(y+=`
`)):(S=[d0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),y=[d0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ir?"#define TONE_MAPPING":"",i.toneMapping!==ir?Tt.tonemapping_pars_fragment:"",i.toneMapping!==ir?pw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,hw("linearToOutputTexel",i.outputColorSpace),mw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),f=Wh(f),f=u0(f,i),f=c0(f,i),d=Wh(d),d=u0(d,i),d=c0(d,i),f=f0(f),d=f0(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=P+S+f,U=P+y+d,H=s0(l,l.VERTEX_SHADER,N),w=s0(l,l.FRAGMENT_SHADER,U);l.attachShader(A,H),l.attachShader(A,w),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(V){if(a.debug.checkShaderErrors){const de=l.getProgramInfoLog(A).trim(),ee=l.getShaderInfoLog(H).trim(),ce=l.getShaderInfoLog(w).trim();let me=!0,z=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(me=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,A,H,w);else{const $=l0(l,H,"vertex"),W=l0(l,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+de+`
`+$+`
`+W)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(ee===""||ce==="")&&(z=!1);z&&(V.diagnostics={runnable:me,programLog:de,vertexShader:{log:ee,prefix:S},fragmentShader:{log:ce,prefix:y}})}l.deleteShader(H),l.deleteShader(w),X=new tc(l,A),D=_w(l,A)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,uw)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=w,this}let Dw=0;class Uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Lw(e),i.set(e,s)),s}}class Lw{constructor(e){this.id=Dw++,this.code=e,this.usedTimes=0}}function Nw(a,e,i,s,l,u,f){const d=new sy,p=new Uw,h=new Set,g=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return h.add(D),D===0?"uv":`uv${D}`}function S(D,C,V,de,ee){const ce=de.fog,me=ee.geometry,z=D.isMeshStandardMaterial?de.environment:null,$=(D.isMeshStandardMaterial?i:e).get(D.envMap||z),W=$&&$.mapping===cc?$.image.height:null,Ee=E[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const L=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,J=L!==void 0?L.length:0;let ye=0;me.morphAttributes.position!==void 0&&(ye=1),me.morphAttributes.normal!==void 0&&(ye=2),me.morphAttributes.color!==void 0&&(ye=3);let Te,Q,ve,Ae;if(Ee){const F=Vi[Ee];Te=F.vertexShader,Q=F.fragmentShader}else Te=D.vertexShader,Q=D.fragmentShader,p.update(D),ve=p.getVertexShaderID(D),Ae=p.getFragmentShaderID(D);const Le=a.getRenderTarget(),Be=a.state.buffers.depth.getReversed(),_t=ee.isInstancedMesh===!0,qe=ee.isBatchedMesh===!0,Ft=!!D.map,kt=!!D.matcap,Et=!!$,G=!!D.aoMap,Bn=!!D.lightMap,Rt=!!D.bumpMap,pt=!!D.normalMap,nt=!!D.displacementMap,Xt=!!D.emissiveMap,et=!!D.metalnessMap,O=!!D.roughnessMap,T=D.anisotropy>0,ae=D.clearcoat>0,xe=D.dispersion>0,we=D.iridescence>0,pe=D.sheen>0,ze=D.transmission>0,Oe=T&&!!D.anisotropyMap,Ye=ae&&!!D.clearcoatMap,ut=ae&&!!D.clearcoatNormalMap,Ce=ae&&!!D.clearcoatRoughnessMap,We=we&&!!D.iridescenceMap,rt=we&&!!D.iridescenceThicknessMap,ot=pe&&!!D.sheenColorMap,ke=pe&&!!D.sheenRoughnessMap,yt=!!D.specularMap,ct=!!D.specularColorMap,Gt=!!D.specularIntensityMap,q=ze&&!!D.transmissionMap,Ie=ze&&!!D.thicknessMap,he=!!D.gradientMap,Se=!!D.alphaMap,Ve=D.alphaTest>0,Fe=!!D.alphaHash,ht=!!D.extensions;let Kt=ir;D.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Kt=a.toneMapping);const dn={shaderID:Ee,shaderType:D.type,shaderName:D.name,vertexShader:Te,fragmentShader:Q,defines:D.defines,customVertexShaderID:ve,customFragmentShaderID:Ae,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:qe,batchingColor:qe&&ee._colorsTexture!==null,instancing:_t,instancingColor:_t&&ee.instanceColor!==null,instancingMorph:_t&&ee.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Le===null?a.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Gs,alphaToCoverage:!!D.alphaToCoverage,map:Ft,matcap:kt,envMap:Et,envMapMode:Et&&$.mapping,envMapCubeUVHeight:W,aoMap:G,lightMap:Bn,bumpMap:Rt,normalMap:pt,displacementMap:_&&nt,emissiveMap:Xt,normalMapObjectSpace:pt&&D.normalMapType===wT,normalMapTangentSpace:pt&&D.normalMapType===RT,metalnessMap:et,roughnessMap:O,anisotropy:T,anisotropyMap:Oe,clearcoat:ae,clearcoatMap:Ye,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ce,dispersion:xe,iridescence:we,iridescenceMap:We,iridescenceThicknessMap:rt,sheen:pe,sheenColorMap:ot,sheenRoughnessMap:ke,specularMap:yt,specularColorMap:ct,specularIntensityMap:Gt,transmission:ze,transmissionMap:q,thicknessMap:Ie,gradientMap:he,opaque:D.transparent===!1&&D.blending===zs&&D.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ve,alphaHash:Fe,combine:D.combine,mapUv:Ft&&A(D.map.channel),aoMapUv:G&&A(D.aoMap.channel),lightMapUv:Bn&&A(D.lightMap.channel),bumpMapUv:Rt&&A(D.bumpMap.channel),normalMapUv:pt&&A(D.normalMap.channel),displacementMapUv:nt&&A(D.displacementMap.channel),emissiveMapUv:Xt&&A(D.emissiveMap.channel),metalnessMapUv:et&&A(D.metalnessMap.channel),roughnessMapUv:O&&A(D.roughnessMap.channel),anisotropyMapUv:Oe&&A(D.anisotropyMap.channel),clearcoatMapUv:Ye&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:ut&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(D.sheenRoughnessMap.channel),specularMapUv:yt&&A(D.specularMap.channel),specularColorMapUv:ct&&A(D.specularColorMap.channel),specularIntensityMapUv:Gt&&A(D.specularIntensityMap.channel),transmissionMapUv:q&&A(D.transmissionMap.channel),thicknessMapUv:Ie&&A(D.thicknessMap.channel),alphaMapUv:Se&&A(D.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(pt||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!me.attributes.uv&&(Ft||Se),fog:!!ce,useFog:D.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Be,skinning:ee.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Ft&&D.map.isVideoTexture===!0&&Ht.getTransfer(D.map.colorSpace)===en,decodeVideoTextureEmissive:Xt&&D.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(D.emissiveMap.colorSpace)===en,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ga,flipSided:D.side===ni,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ht&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&D.extensions.multiDraw===!0||qe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return dn.vertexUv1s=h.has(1),dn.vertexUv2s=h.has(2),dn.vertexUv3s=h.has(3),h.clear(),dn}function y(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(P(C,D),N(C,D),C.push(a.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const C=E[D.type];let V;if(C){const de=Vi[C];V=sb.clone(de.uniforms)}else V=D.uniforms;return V}function H(D,C){let V;for(let de=0,ee=g.length;de<ee;de++){const ce=g[de];if(ce.cacheKey===C){V=ce,++V.usedTimes;break}}return V===void 0&&(V=new Cw(a,C,D,u),g.push(V)),V}function w(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function I(D){p.remove(D)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:U,acquireProgram:H,releaseProgram:w,releaseShaderCache:I,programs:g,dispose:X}}function Ow(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function s(f){a.delete(f)}function l(f,d,p){a.get(f)[d]=p}function u(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function Pw(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function h0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function p0(){const a=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function f(v,_,x,E,A,S){let y=a[e];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:E,renderOrder:v.renderOrder,z:A,group:S},a[e]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=A,y.group=S),e++,y}function d(v,_,x,E,A,S){const y=f(v,_,x,E,A,S);x.transmission>0?s.push(y):x.transparent===!0?l.push(y):i.push(y)}function p(v,_,x,E,A,S){const y=f(v,_,x,E,A,S);x.transmission>0?s.unshift(y):x.transparent===!0?l.unshift(y):i.unshift(y)}function h(v,_){i.length>1&&i.sort(v||Pw),s.length>1&&s.sort(_||h0),l.length>1&&l.sort(_||h0)}function g(){for(let v=e,_=a.length;v<_;v++){const x=a[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:g,sort:h}}function zw(){let a=new WeakMap;function e(s,l){const u=a.get(s);let f;return u===void 0?(f=new p0,a.set(s,[f])):l>=u.length?(f=new p0,u.push(f)):f=u[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function Fw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new fe,color:new Zt};break;case"SpotLight":i={position:new fe,direction:new fe,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":i={color:new Zt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return a[e.id]=i,i}}}function Bw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let Iw=0;function Hw(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Gw(a){const e=new Fw,i=Bw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new fe);const l=new fe,u=new En,f=new En;function d(h){let g=0,v=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let x=0,E=0,A=0,S=0,y=0,P=0,N=0,U=0,H=0,w=0,I=0;h.sort(Hw);for(let D=0,C=h.length;D<C;D++){const V=h[D],de=V.color,ee=V.intensity,ce=V.distance,me=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=de.r*ee,v+=de.g*ee,_+=de.b*ee;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],ee);I++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const $=V.shadow,W=i.get(V);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,s.directionalShadow[x]=W,s.directionalShadowMap[x]=me,s.directionalShadowMatrix[x]=V.shadow.matrix,P++}s.directional[x]=z,x++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(de).multiplyScalar(ee),z.distance=ce,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[A]=z;const $=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,$.updateMatrices(V),V.castShadow&&w++),s.spotLightMatrix[A]=$.matrix,V.castShadow){const W=i.get(V);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,s.spotShadow[A]=W,s.spotShadowMap[A]=me,U++}A++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(de).multiplyScalar(ee),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=z,S++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const $=V.shadow,W=i.get(V);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,s.pointShadow[E]=W,s.pointShadowMap[E]=me,s.pointShadowMatrix[E]=V.shadow.matrix,N++}s.point[E]=z,E++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(ee),z.groundColor.copy(V.groundColor).multiplyScalar(ee),s.hemi[y]=z,y++}}S>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const X=s.hash;(X.directionalLength!==x||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==y||X.numDirectionalShadows!==P||X.numPointShadows!==N||X.numSpotShadows!==U||X.numSpotMaps!==H||X.numLightProbes!==I)&&(s.directional.length=x,s.spot.length=A,s.rectArea.length=S,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+H-w,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=w,s.numLightProbes=I,X.directionalLength=x,X.pointLength=E,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=y,X.numDirectionalShadows=P,X.numPointShadows=N,X.numSpotShadows=U,X.numSpotMaps=H,X.numLightProbes=I,s.version=Iw++)}function p(h,g){let v=0,_=0,x=0,E=0,A=0;const S=g.matrixWorldInverse;for(let y=0,P=h.length;y<P;y++){const N=h[y];if(N.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),v++}else if(N.isSpotLight){const U=s.spot[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),x++}else if(N.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),f.identity(),u.copy(N.matrixWorld),u.premultiply(S),f.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const U=s.point[_];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),_++}else if(N.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(S),A++}}}return{setup:d,setupView:p,state:s}}function m0(a){const e=new Gw(a),i=[],s=[];function l(g){h.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function f(g){s.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function Vw(a){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let d;return f===void 0?(d=new m0(a),e.set(l,[d])):u>=f.length?(d=new m0(a),f.push(d)):d=f[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ww(a,e,i){let s=new py;const l=new qt,u=new qt,f=new _n,d=new mb({depthPacking:AT}),p=new gb,h={},g=i.maxTextureSize,v={[rr]:ni,[ni]:rr,[ga]:ga},_=new Ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:kw,fragmentShader:Xw}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new Gr;E.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ki(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q0;let y=this.type;this.render=function(w,I,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||w.length===0)return;const D=a.getRenderTarget(),C=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),de=a.state;de.setBlending(nr),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const ee=y!==ma&&this.type===ma,ce=y===ma&&this.type!==ma;for(let me=0,z=w.length;me<z;me++){const $=w[me],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const Ee=W.getFrameExtents();if(l.multiply(Ee),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Ee.x),l.x=u.x*Ee.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Ee.y),l.y=u.y*Ee.y,W.mapSize.y=u.y)),W.map===null||ee===!0||ce===!0){const J=this.type!==ma?{minFilter:Pi,magFilter:Pi}:{};W.map!==null&&W.map.dispose(),W.map=new Br(l.x,l.y,J),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const L=W.getViewportCount();for(let J=0;J<L;J++){const ye=W.getViewport(J);f.set(u.x*ye.x,u.y*ye.y,u.x*ye.z,u.y*ye.w),de.viewport(f),W.updateMatrices($,J),s=W.getFrustum(),U(I,X,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===ma&&P(W,X),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,a.setRenderTarget(D,C,V)};function P(w,I){const X=e.update(A);_.defines.VSM_SAMPLES!==w.blurSamples&&(_.defines.VSM_SAMPLES=w.blurSamples,x.defines.VSM_SAMPLES=w.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Br(l.x,l.y)),_.uniforms.shadow_pass.value=w.map.texture,_.uniforms.resolution.value=w.mapSize,_.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(I,null,X,_,A,null),x.uniforms.shadow_pass.value=w.mapPass.texture,x.uniforms.resolution.value=w.mapSize,x.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(I,null,X,x,A,null)}function N(w,I,X,D){let C=null;const V=X.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)C=V;else if(C=X.isPointLight===!0?p:d,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const de=C.uuid,ee=I.uuid;let ce=h[de];ce===void 0&&(ce={},h[de]=ce);let me=ce[ee];me===void 0&&(me=C.clone(),ce[ee]=me,I.addEventListener("dispose",H)),C=me}if(C.visible=I.visible,C.wireframe=I.wireframe,D===ma?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const de=a.properties.get(C);de.light=X}return C}function U(w,I,X,D,C){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===ma)&&(!w.frustumCulled||s.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld);const ee=e.update(w),ce=w.material;if(Array.isArray(ce)){const me=ee.groups;for(let z=0,$=me.length;z<$;z++){const W=me[z],Ee=ce[W.materialIndex];if(Ee&&Ee.visible){const L=N(w,Ee,D,C);w.onBeforeShadow(a,w,I,X,ee,L,W),a.renderBufferDirect(X,null,ee,L,w,W),w.onAfterShadow(a,w,I,X,ee,L,W)}}}else if(ce.visible){const me=N(w,ce,D,C);w.onBeforeShadow(a,w,I,X,ee,me,null),a.renderBufferDirect(X,null,ee,me,w,null),w.onAfterShadow(a,w,I,X,ee,me,null)}}const de=w.children;for(let ee=0,ce=de.length;ee<ce;ee++)U(de[ee],I,X,D,C)}function H(w){w.target.removeEventListener("dispose",H);for(const X in h){const D=h[X],C=w.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const qw={[lh]:uh,[ch]:hh,[fh]:ph,[Bs]:dh,[uh]:lh,[hh]:ch,[ph]:fh,[dh]:Bs};function Yw(a,e){function i(){let q=!1;const Ie=new _n;let he=null;const Se=new _n(0,0,0,0);return{setMask:function(Ve){he!==Ve&&!q&&(a.colorMask(Ve,Ve,Ve,Ve),he=Ve)},setLocked:function(Ve){q=Ve},setClear:function(Ve,Fe,ht,Kt,dn){dn===!0&&(Ve*=Kt,Fe*=Kt,ht*=Kt),Ie.set(Ve,Fe,ht,Kt),Se.equals(Ie)===!1&&(a.clearColor(Ve,Fe,ht,Kt),Se.copy(Ie))},reset:function(){q=!1,he=null,Se.set(-1,0,0,0)}}}function s(){let q=!1,Ie=!1,he=null,Se=null,Ve=null;return{setReversed:function(Fe){if(Ie!==Fe){const ht=e.get("EXT_clip_control");Fe?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),Ie=Fe;const Kt=Ve;Ve=null,this.setClear(Kt)}},getReversed:function(){return Ie},setTest:function(Fe){Fe?Le(a.DEPTH_TEST):Be(a.DEPTH_TEST)},setMask:function(Fe){he!==Fe&&!q&&(a.depthMask(Fe),he=Fe)},setFunc:function(Fe){if(Ie&&(Fe=qw[Fe]),Se!==Fe){switch(Fe){case lh:a.depthFunc(a.NEVER);break;case uh:a.depthFunc(a.ALWAYS);break;case ch:a.depthFunc(a.LESS);break;case Bs:a.depthFunc(a.LEQUAL);break;case fh:a.depthFunc(a.EQUAL);break;case dh:a.depthFunc(a.GEQUAL);break;case hh:a.depthFunc(a.GREATER);break;case ph:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Se=Fe}},setLocked:function(Fe){q=Fe},setClear:function(Fe){Ve!==Fe&&(Ie&&(Fe=1-Fe),a.clearDepth(Fe),Ve=Fe)},reset:function(){q=!1,he=null,Se=null,Ve=null,Ie=!1}}}function l(){let q=!1,Ie=null,he=null,Se=null,Ve=null,Fe=null,ht=null,Kt=null,dn=null;return{setTest:function(F){q||(F?Le(a.STENCIL_TEST):Be(a.STENCIL_TEST))},setMask:function(F){Ie!==F&&!q&&(a.stencilMask(F),Ie=F)},setFunc:function(F,K,re){(he!==F||Se!==K||Ve!==re)&&(a.stencilFunc(F,K,re),he=F,Se=K,Ve=re)},setOp:function(F,K,re){(Fe!==F||ht!==K||Kt!==re)&&(a.stencilOp(F,K,re),Fe=F,ht=K,Kt=re)},setLocked:function(F){q=F},setClear:function(F){dn!==F&&(a.clearStencil(F),dn=F)},reset:function(){q=!1,Ie=null,he=null,Se=null,Ve=null,Fe=null,ht=null,Kt=null,dn=null}}}const u=new i,f=new s,d=new l,p=new WeakMap,h=new WeakMap;let g={},v={},_=new WeakMap,x=[],E=null,A=!1,S=null,y=null,P=null,N=null,U=null,H=null,w=null,I=new Zt(0,0,0),X=0,D=!1,C=null,V=null,de=null,ee=null,ce=null;const me=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=$>=2);let Ee=null,L={};const J=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),Te=new _n().fromArray(J),Q=new _n().fromArray(ye);function ve(q,Ie,he,Se){const Ve=new Uint8Array(4),Fe=a.createTexture();a.bindTexture(q,Fe),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ht=0;ht<he;ht++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Ie,0,a.RGBA,1,1,Se,0,a.RGBA,a.UNSIGNED_BYTE,Ve):a.texImage2D(Ie+ht,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ve);return Fe}const Ae={};Ae[a.TEXTURE_2D]=ve(a.TEXTURE_2D,a.TEXTURE_2D,1),Ae[a.TEXTURE_CUBE_MAP]=ve(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[a.TEXTURE_2D_ARRAY]=ve(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Ae[a.TEXTURE_3D]=ve(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Le(a.DEPTH_TEST),f.setFunc(Bs),Rt(!1),pt(y_),Le(a.CULL_FACE),G(nr);function Le(q){g[q]!==!0&&(a.enable(q),g[q]=!0)}function Be(q){g[q]!==!1&&(a.disable(q),g[q]=!1)}function _t(q,Ie){return v[q]!==Ie?(a.bindFramebuffer(q,Ie),v[q]=Ie,q===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ie),q===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ie),!0):!1}function qe(q,Ie){let he=x,Se=!1;if(q){he=_.get(Ie),he===void 0&&(he=[],_.set(Ie,he));const Ve=q.textures;if(he.length!==Ve.length||he[0]!==a.COLOR_ATTACHMENT0){for(let Fe=0,ht=Ve.length;Fe<ht;Fe++)he[Fe]=a.COLOR_ATTACHMENT0+Fe;he.length=Ve.length,Se=!0}}else he[0]!==a.BACK&&(he[0]=a.BACK,Se=!0);Se&&a.drawBuffers(he)}function Ft(q){return E!==q?(a.useProgram(q),E=q,!0):!1}const kt={[Ur]:a.FUNC_ADD,[JE]:a.FUNC_SUBTRACT,[$E]:a.FUNC_REVERSE_SUBTRACT};kt[eT]=a.MIN,kt[tT]=a.MAX;const Et={[nT]:a.ZERO,[iT]:a.ONE,[aT]:a.SRC_COLOR,[sh]:a.SRC_ALPHA,[cT]:a.SRC_ALPHA_SATURATE,[lT]:a.DST_COLOR,[sT]:a.DST_ALPHA,[rT]:a.ONE_MINUS_SRC_COLOR,[oh]:a.ONE_MINUS_SRC_ALPHA,[uT]:a.ONE_MINUS_DST_COLOR,[oT]:a.ONE_MINUS_DST_ALPHA,[fT]:a.CONSTANT_COLOR,[dT]:a.ONE_MINUS_CONSTANT_COLOR,[hT]:a.CONSTANT_ALPHA,[pT]:a.ONE_MINUS_CONSTANT_ALPHA};function G(q,Ie,he,Se,Ve,Fe,ht,Kt,dn,F){if(q===nr){A===!0&&(Be(a.BLEND),A=!1);return}if(A===!1&&(Le(a.BLEND),A=!0),q!==QE){if(q!==S||F!==D){if((y!==Ur||U!==Ur)&&(a.blendEquation(a.FUNC_ADD),y=Ur,U=Ur),F)switch(q){case zs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case x_:a.blendFunc(a.ONE,a.ONE);break;case S_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case M_:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case zs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case x_:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case S_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case M_:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}P=null,N=null,H=null,w=null,I.set(0,0,0),X=0,S=q,D=F}return}Ve=Ve||Ie,Fe=Fe||he,ht=ht||Se,(Ie!==y||Ve!==U)&&(a.blendEquationSeparate(kt[Ie],kt[Ve]),y=Ie,U=Ve),(he!==P||Se!==N||Fe!==H||ht!==w)&&(a.blendFuncSeparate(Et[he],Et[Se],Et[Fe],Et[ht]),P=he,N=Se,H=Fe,w=ht),(Kt.equals(I)===!1||dn!==X)&&(a.blendColor(Kt.r,Kt.g,Kt.b,dn),I.copy(Kt),X=dn),S=q,D=!1}function Bn(q,Ie){q.side===ga?Be(a.CULL_FACE):Le(a.CULL_FACE);let he=q.side===ni;Ie&&(he=!he),Rt(he),q.blending===zs&&q.transparent===!1?G(nr):G(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),u.setMask(q.colorWrite);const Se=q.stencilWrite;d.setTest(Se),Se&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Xt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Le(a.SAMPLE_ALPHA_TO_COVERAGE):Be(a.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(q){C!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),C=q)}function pt(q){q!==jE?(Le(a.CULL_FACE),q!==V&&(q===y_?a.cullFace(a.BACK):q===ZE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Be(a.CULL_FACE),V=q}function nt(q){q!==de&&(z&&a.lineWidth(q),de=q)}function Xt(q,Ie,he){q?(Le(a.POLYGON_OFFSET_FILL),(ee!==Ie||ce!==he)&&(a.polygonOffset(Ie,he),ee=Ie,ce=he)):Be(a.POLYGON_OFFSET_FILL)}function et(q){q?Le(a.SCISSOR_TEST):Be(a.SCISSOR_TEST)}function O(q){q===void 0&&(q=a.TEXTURE0+me-1),Ee!==q&&(a.activeTexture(q),Ee=q)}function T(q,Ie,he){he===void 0&&(Ee===null?he=a.TEXTURE0+me-1:he=Ee);let Se=L[he];Se===void 0&&(Se={type:void 0,texture:void 0},L[he]=Se),(Se.type!==q||Se.texture!==Ie)&&(Ee!==he&&(a.activeTexture(he),Ee=he),a.bindTexture(q,Ie||Ae[q]),Se.type=q,Se.texture=Ie)}function ae(){const q=L[Ee];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function xe(){try{a.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(){try{a.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{a.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{a.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{a.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ye(){try{a.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{a.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ce(){try{a.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{a.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(){try{a.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(q){Te.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),Te.copy(q))}function ke(q){Q.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function yt(q,Ie){let he=h.get(Ie);he===void 0&&(he=new WeakMap,h.set(Ie,he));let Se=he.get(q);Se===void 0&&(Se=a.getUniformBlockIndex(Ie,q.name),he.set(q,Se))}function ct(q,Ie){const Se=h.get(Ie).get(q);p.get(Ie)!==Se&&(a.uniformBlockBinding(Ie,Se,q.__bindingPointIndex),p.set(Ie,Se))}function Gt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Ee=null,L={},v={},_=new WeakMap,x=[],E=null,A=!1,S=null,y=null,P=null,N=null,U=null,H=null,w=null,I=new Zt(0,0,0),X=0,D=!1,C=null,V=null,de=null,ee=null,ce=null,Te.set(0,0,a.canvas.width,a.canvas.height),Q.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:Le,disable:Be,bindFramebuffer:_t,drawBuffers:qe,useProgram:Ft,setBlending:G,setMaterial:Bn,setFlipSided:Rt,setCullFace:pt,setLineWidth:nt,setPolygonOffset:Xt,setScissorTest:et,activeTexture:O,bindTexture:T,unbindTexture:ae,compressedTexImage2D:xe,compressedTexImage3D:we,texImage2D:We,texImage3D:rt,updateUBOMapping:yt,uniformBlockBinding:ct,texStorage2D:ut,texStorage3D:Ce,texSubImage2D:pe,texSubImage3D:ze,compressedTexSubImage2D:Oe,compressedTexSubImage3D:Ye,scissor:ot,viewport:ke,reset:Gt}}function jw(a,e,i,s,l,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return x?new OffscreenCanvas(O,T):il("canvas")}function A(O,T,ae){let xe=1;const we=et(O);if((we.width>ae||we.height>ae)&&(xe=ae/Math.max(we.width,we.height)),xe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pe=Math.floor(xe*we.width),ze=Math.floor(xe*we.height);v===void 0&&(v=E(pe,ze));const Oe=T?E(pe,ze):v;return Oe.width=pe,Oe.height=ze,Oe.getContext("2d").drawImage(O,0,0,pe,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+pe+"x"+ze+")."),Oe}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),O;return O}function S(O){return O.generateMipmaps}function y(O){a.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function N(O,T,ae,xe,we=!1){if(O!==null){if(a[O]!==void 0)return a[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pe=T;if(T===a.RED&&(ae===a.FLOAT&&(pe=a.R32F),ae===a.HALF_FLOAT&&(pe=a.R16F),ae===a.UNSIGNED_BYTE&&(pe=a.R8)),T===a.RED_INTEGER&&(ae===a.UNSIGNED_BYTE&&(pe=a.R8UI),ae===a.UNSIGNED_SHORT&&(pe=a.R16UI),ae===a.UNSIGNED_INT&&(pe=a.R32UI),ae===a.BYTE&&(pe=a.R8I),ae===a.SHORT&&(pe=a.R16I),ae===a.INT&&(pe=a.R32I)),T===a.RG&&(ae===a.FLOAT&&(pe=a.RG32F),ae===a.HALF_FLOAT&&(pe=a.RG16F),ae===a.UNSIGNED_BYTE&&(pe=a.RG8)),T===a.RG_INTEGER&&(ae===a.UNSIGNED_BYTE&&(pe=a.RG8UI),ae===a.UNSIGNED_SHORT&&(pe=a.RG16UI),ae===a.UNSIGNED_INT&&(pe=a.RG32UI),ae===a.BYTE&&(pe=a.RG8I),ae===a.SHORT&&(pe=a.RG16I),ae===a.INT&&(pe=a.RG32I)),T===a.RGB_INTEGER&&(ae===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),ae===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),ae===a.UNSIGNED_INT&&(pe=a.RGB32UI),ae===a.BYTE&&(pe=a.RGB8I),ae===a.SHORT&&(pe=a.RGB16I),ae===a.INT&&(pe=a.RGB32I)),T===a.RGBA_INTEGER&&(ae===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),ae===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),ae===a.UNSIGNED_INT&&(pe=a.RGBA32UI),ae===a.BYTE&&(pe=a.RGBA8I),ae===a.SHORT&&(pe=a.RGBA16I),ae===a.INT&&(pe=a.RGBA32I)),T===a.RGB&&ae===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),T===a.RGBA){const ze=we?sc:Ht.getTransfer(xe);ae===a.FLOAT&&(pe=a.RGBA32F),ae===a.HALF_FLOAT&&(pe=a.RGBA16F),ae===a.UNSIGNED_BYTE&&(pe=ze===en?a.SRGB8_ALPHA8:a.RGBA8),ae===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),ae===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function U(O,T){let ae;return O?T===null||T===Fr||T===el?ae=a.DEPTH24_STENCIL8:T===va?ae=a.DEPTH32F_STENCIL8:T===$o&&(ae=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Fr||T===el?ae=a.DEPTH_COMPONENT24:T===va?ae=a.DEPTH_COMPONENT32F:T===$o&&(ae=a.DEPTH_COMPONENT16),ae}function H(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Pi&&O.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function w(O){const T=O.target;T.removeEventListener("dispose",w),X(T),T.isVideoTexture&&g.delete(T)}function I(O){const T=O.target;T.removeEventListener("dispose",I),C(T)}function X(O){const T=s.get(O);if(T.__webglInit===void 0)return;const ae=O.source,xe=_.get(ae);if(xe){const we=xe[T.__cacheKey];we.usedTimes--,we.usedTimes===0&&D(O),Object.keys(xe).length===0&&_.delete(ae)}s.remove(O)}function D(O){const T=s.get(O);a.deleteTexture(T.__webglTexture);const ae=O.source,xe=_.get(ae);delete xe[T.__cacheKey],f.memory.textures--}function C(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(T.__webglFramebuffer[xe]))for(let we=0;we<T.__webglFramebuffer[xe].length;we++)a.deleteFramebuffer(T.__webglFramebuffer[xe][we]);else a.deleteFramebuffer(T.__webglFramebuffer[xe]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[xe])}else{if(Array.isArray(T.__webglFramebuffer))for(let xe=0;xe<T.__webglFramebuffer.length;xe++)a.deleteFramebuffer(T.__webglFramebuffer[xe]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xe=0;xe<T.__webglColorRenderbuffer.length;xe++)T.__webglColorRenderbuffer[xe]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[xe]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ae=O.textures;for(let xe=0,we=ae.length;xe<we;xe++){const pe=s.get(ae[xe]);pe.__webglTexture&&(a.deleteTexture(pe.__webglTexture),f.memory.textures--),s.remove(ae[xe])}s.remove(O)}let V=0;function de(){V=0}function ee(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function ce(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function me(O,T){const ae=s.get(O);if(O.isVideoTexture&&nt(O),O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){const xe=O.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ae,O,T);return}}i.bindTexture(a.TEXTURE_2D,ae.__webglTexture,a.TEXTURE0+T)}function z(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){Q(ae,O,T);return}i.bindTexture(a.TEXTURE_2D_ARRAY,ae.__webglTexture,a.TEXTURE0+T)}function $(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){Q(ae,O,T);return}i.bindTexture(a.TEXTURE_3D,ae.__webglTexture,a.TEXTURE0+T)}function W(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){ve(ae,O,T);return}i.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture,a.TEXTURE0+T)}const Ee={[rc]:a.REPEAT,[Or]:a.CLAMP_TO_EDGE,[vh]:a.MIRRORED_REPEAT},L={[Pi]:a.NEAREST,[TT]:a.NEAREST_MIPMAP_NEAREST,[Eu]:a.NEAREST_MIPMAP_LINEAR,[ti]:a.LINEAR,[Ad]:a.LINEAR_MIPMAP_NEAREST,[Pr]:a.LINEAR_MIPMAP_LINEAR},J={[CT]:a.NEVER,[PT]:a.ALWAYS,[DT]:a.LESS,[iy]:a.LEQUAL,[UT]:a.EQUAL,[OT]:a.GEQUAL,[LT]:a.GREATER,[NT]:a.NOTEQUAL};function ye(O,T){if(T.type===va&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ti||T.magFilter===Ad||T.magFilter===Eu||T.magFilter===Pr||T.minFilter===ti||T.minFilter===Ad||T.minFilter===Eu||T.minFilter===Pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,Ee[T.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,Ee[T.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,Ee[T.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,L[T.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pi||T.minFilter!==Eu&&T.minFilter!==Pr||T.type===va&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Te(O,T){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",w));const xe=T.source;let we=_.get(xe);we===void 0&&(we={},_.set(xe,we));const pe=ce(T);if(pe!==O.__cacheKey){we[pe]===void 0&&(we[pe]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,ae=!0),we[pe].usedTimes++;const ze=we[O.__cacheKey];ze!==void 0&&(we[O.__cacheKey].usedTimes--,ze.usedTimes===0&&D(T)),O.__cacheKey=pe,O.__webglTexture=we[pe].texture}return ae}function Q(O,T,ae){let xe=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xe=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xe=a.TEXTURE_3D);const we=Te(O,T),pe=T.source;i.bindTexture(xe,O.__webglTexture,a.TEXTURE0+ae);const ze=s.get(pe);if(pe.version!==ze.__version||we===!0){i.activeTexture(a.TEXTURE0+ae);const Oe=Ht.getPrimaries(Ht.workingColorSpace),Ye=T.colorSpace===tr?null:Ht.getPrimaries(T.colorSpace),ut=T.colorSpace===tr||Oe===Ye?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ce=A(T.image,!1,l.maxTextureSize);Ce=Xt(T,Ce);const We=u.convert(T.format,T.colorSpace),rt=u.convert(T.type);let ot=N(T.internalFormat,We,rt,T.colorSpace,T.isVideoTexture);ye(xe,T);let ke;const yt=T.mipmaps,ct=T.isVideoTexture!==!0,Gt=ze.__version===void 0||we===!0,q=pe.dataReady,Ie=H(T,Ce);if(T.isDepthTexture)ot=U(T.format===nl,T.type),Gt&&(ct?i.texStorage2D(a.TEXTURE_2D,1,ot,Ce.width,Ce.height):i.texImage2D(a.TEXTURE_2D,0,ot,Ce.width,Ce.height,0,We,rt,null));else if(T.isDataTexture)if(yt.length>0){ct&&Gt&&i.texStorage2D(a.TEXTURE_2D,Ie,ot,yt[0].width,yt[0].height);for(let he=0,Se=yt.length;he<Se;he++)ke=yt[he],ct?q&&i.texSubImage2D(a.TEXTURE_2D,he,0,0,ke.width,ke.height,We,rt,ke.data):i.texImage2D(a.TEXTURE_2D,he,ot,ke.width,ke.height,0,We,rt,ke.data);T.generateMipmaps=!1}else ct?(Gt&&i.texStorage2D(a.TEXTURE_2D,Ie,ot,Ce.width,Ce.height),q&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ce.width,Ce.height,We,rt,Ce.data)):i.texImage2D(a.TEXTURE_2D,0,ot,Ce.width,Ce.height,0,We,rt,Ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ct&&Gt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,ot,yt[0].width,yt[0].height,Ce.depth);for(let he=0,Se=yt.length;he<Se;he++)if(ke=yt[he],T.format!==Oi)if(We!==null)if(ct){if(q)if(T.layerUpdates.size>0){const Ve=W_(ke.width,ke.height,T.format,T.type);for(const Fe of T.layerUpdates){const ht=ke.data.subarray(Fe*Ve/ke.data.BYTES_PER_ELEMENT,(Fe+1)*Ve/ke.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,he,0,0,Fe,ke.width,ke.height,1,We,ht)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Ce.depth,We,ke.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,he,ot,ke.width,ke.height,Ce.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?q&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Ce.depth,We,rt,ke.data):i.texImage3D(a.TEXTURE_2D_ARRAY,he,ot,ke.width,ke.height,Ce.depth,0,We,rt,ke.data)}else{ct&&Gt&&i.texStorage2D(a.TEXTURE_2D,Ie,ot,yt[0].width,yt[0].height);for(let he=0,Se=yt.length;he<Se;he++)ke=yt[he],T.format!==Oi?We!==null?ct?q&&i.compressedTexSubImage2D(a.TEXTURE_2D,he,0,0,ke.width,ke.height,We,ke.data):i.compressedTexImage2D(a.TEXTURE_2D,he,ot,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?q&&i.texSubImage2D(a.TEXTURE_2D,he,0,0,ke.width,ke.height,We,rt,ke.data):i.texImage2D(a.TEXTURE_2D,he,ot,ke.width,ke.height,0,We,rt,ke.data)}else if(T.isDataArrayTexture)if(ct){if(Gt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,ot,Ce.width,Ce.height,Ce.depth),q)if(T.layerUpdates.size>0){const he=W_(Ce.width,Ce.height,T.format,T.type);for(const Se of T.layerUpdates){const Ve=Ce.data.subarray(Se*he/Ce.data.BYTES_PER_ELEMENT,(Se+1)*he/Ce.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Se,Ce.width,Ce.height,1,We,rt,Ve)}T.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,We,rt,Ce.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,ot,Ce.width,Ce.height,Ce.depth,0,We,rt,Ce.data);else if(T.isData3DTexture)ct?(Gt&&i.texStorage3D(a.TEXTURE_3D,Ie,ot,Ce.width,Ce.height,Ce.depth),q&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,We,rt,Ce.data)):i.texImage3D(a.TEXTURE_3D,0,ot,Ce.width,Ce.height,Ce.depth,0,We,rt,Ce.data);else if(T.isFramebufferTexture){if(Gt)if(ct)i.texStorage2D(a.TEXTURE_2D,Ie,ot,Ce.width,Ce.height);else{let he=Ce.width,Se=Ce.height;for(let Ve=0;Ve<Ie;Ve++)i.texImage2D(a.TEXTURE_2D,Ve,ot,he,Se,0,We,rt,null),he>>=1,Se>>=1}}else if(yt.length>0){if(ct&&Gt){const he=et(yt[0]);i.texStorage2D(a.TEXTURE_2D,Ie,ot,he.width,he.height)}for(let he=0,Se=yt.length;he<Se;he++)ke=yt[he],ct?q&&i.texSubImage2D(a.TEXTURE_2D,he,0,0,We,rt,ke):i.texImage2D(a.TEXTURE_2D,he,ot,We,rt,ke);T.generateMipmaps=!1}else if(ct){if(Gt){const he=et(Ce);i.texStorage2D(a.TEXTURE_2D,Ie,ot,he.width,he.height)}q&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,We,rt,Ce)}else i.texImage2D(a.TEXTURE_2D,0,ot,We,rt,Ce);S(T)&&y(xe),ze.__version=pe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ve(O,T,ae){if(T.image.length!==6)return;const xe=Te(O,T),we=T.source;i.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+ae);const pe=s.get(we);if(we.version!==pe.__version||xe===!0){i.activeTexture(a.TEXTURE0+ae);const ze=Ht.getPrimaries(Ht.workingColorSpace),Oe=T.colorSpace===tr?null:Ht.getPrimaries(T.colorSpace),Ye=T.colorSpace===tr||ze===Oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const ut=T.isCompressedTexture||T.image[0].isCompressedTexture,Ce=T.image[0]&&T.image[0].isDataTexture,We=[];for(let Se=0;Se<6;Se++)!ut&&!Ce?We[Se]=A(T.image[Se],!0,l.maxCubemapSize):We[Se]=Ce?T.image[Se].image:T.image[Se],We[Se]=Xt(T,We[Se]);const rt=We[0],ot=u.convert(T.format,T.colorSpace),ke=u.convert(T.type),yt=N(T.internalFormat,ot,ke,T.colorSpace),ct=T.isVideoTexture!==!0,Gt=pe.__version===void 0||xe===!0,q=we.dataReady;let Ie=H(T,rt);ye(a.TEXTURE_CUBE_MAP,T);let he;if(ut){ct&&Gt&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,yt,rt.width,rt.height);for(let Se=0;Se<6;Se++){he=We[Se].mipmaps;for(let Ve=0;Ve<he.length;Ve++){const Fe=he[Ve];T.format!==Oi?ot!==null?ct?q&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,Fe.width,Fe.height,ot,Fe.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,yt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,Fe.width,Fe.height,ot,ke,Fe.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,yt,Fe.width,Fe.height,0,ot,ke,Fe.data)}}}else{if(he=T.mipmaps,ct&&Gt){he.length>0&&Ie++;const Se=et(We[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,yt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ce){ct?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,We[Se].width,We[Se].height,ot,ke,We[Se].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,yt,We[Se].width,We[Se].height,0,ot,ke,We[Se].data);for(let Ve=0;Ve<he.length;Ve++){const ht=he[Ve].image[Se].image;ct?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,ht.width,ht.height,ot,ke,ht.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,yt,ht.width,ht.height,0,ot,ke,ht.data)}}else{ct?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ot,ke,We[Se]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,yt,ot,ke,We[Se]);for(let Ve=0;Ve<he.length;Ve++){const Fe=he[Ve];ct?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,ot,ke,Fe.image[Se]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,yt,ot,ke,Fe.image[Se])}}}S(T)&&y(a.TEXTURE_CUBE_MAP),pe.__version=we.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ae(O,T,ae,xe,we,pe){const ze=u.convert(ae.format,ae.colorSpace),Oe=u.convert(ae.type),Ye=N(ae.internalFormat,ze,Oe,ae.colorSpace),ut=s.get(T),Ce=s.get(ae);if(Ce.__renderTarget=T,!ut.__hasExternalTextures){const We=Math.max(1,T.width>>pe),rt=Math.max(1,T.height>>pe);we===a.TEXTURE_3D||we===a.TEXTURE_2D_ARRAY?i.texImage3D(we,pe,Ye,We,rt,T.depth,0,ze,Oe,null):i.texImage2D(we,pe,Ye,We,rt,0,ze,Oe,null)}i.bindFramebuffer(a.FRAMEBUFFER,O),pt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,xe,we,Ce.__webglTexture,0,Rt(T)):(we===a.TEXTURE_2D||we>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,xe,we,Ce.__webglTexture,pe),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Le(O,T,ae){if(a.bindRenderbuffer(a.RENDERBUFFER,O),T.depthBuffer){const xe=T.depthTexture,we=xe&&xe.isDepthTexture?xe.type:null,pe=U(T.stencilBuffer,we),ze=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=Rt(T);pt(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Oe,pe,T.width,T.height):ae?a.renderbufferStorageMultisample(a.RENDERBUFFER,Oe,pe,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,pe,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ze,a.RENDERBUFFER,O)}else{const xe=T.textures;for(let we=0;we<xe.length;we++){const pe=xe[we],ze=u.convert(pe.format,pe.colorSpace),Oe=u.convert(pe.type),Ye=N(pe.internalFormat,ze,Oe,pe.colorSpace),ut=Rt(T);ae&&pt(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ut,Ye,T.width,T.height):pt(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ut,Ye,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Ye,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Be(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(T.depthTexture);xe.__renderTarget=T,(!xe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const we=xe.__webglTexture,pe=Rt(T);if(T.depthTexture.format===tl)pt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,we,0,pe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,we,0);else if(T.depthTexture.format===nl)pt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,we,0,pe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function _t(O){const T=s.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const xe=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xe){const we=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xe.removeEventListener("dispose",we)};xe.addEventListener("dispose",we),T.__depthDisposeCallback=we}T.__boundDepthTexture=xe}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");const xe=O.texture.mipmaps;xe&&xe.length>0?Be(T.__webglFramebuffer[0],O):Be(T.__webglFramebuffer,O)}else if(ae){T.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[xe]),T.__webglDepthbuffer[xe]===void 0)T.__webglDepthbuffer[xe]=a.createRenderbuffer(),Le(T.__webglDepthbuffer[xe],O,!1);else{const we=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[xe];a.bindRenderbuffer(a.RENDERBUFFER,pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,we,a.RENDERBUFFER,pe)}}else{const xe=O.texture.mipmaps;if(xe&&xe.length>0?i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),Le(T.__webglDepthbuffer,O,!1);else{const we=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,we,a.RENDERBUFFER,pe)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function qe(O,T,ae){const xe=s.get(O);T!==void 0&&Ae(xe.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ae!==void 0&&_t(O)}function Ft(O){const T=O.texture,ae=s.get(O),xe=s.get(T);O.addEventListener("dispose",I);const we=O.textures,pe=O.isWebGLCubeRenderTarget===!0,ze=we.length>1;if(ze||(xe.__webglTexture===void 0&&(xe.__webglTexture=a.createTexture()),xe.__version=T.version,f.memory.textures++),pe){ae.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer[Oe]=[];for(let Ye=0;Ye<T.mipmaps.length;Ye++)ae.__webglFramebuffer[Oe][Ye]=a.createFramebuffer()}else ae.__webglFramebuffer[Oe]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)ae.__webglFramebuffer[Oe]=a.createFramebuffer()}else ae.__webglFramebuffer=a.createFramebuffer();if(ze)for(let Oe=0,Ye=we.length;Oe<Ye;Oe++){const ut=s.get(we[Oe]);ut.__webglTexture===void 0&&(ut.__webglTexture=a.createTexture(),f.memory.textures++)}if(O.samples>0&&pt(O)===!1){ae.__webglMultisampledFramebuffer=a.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Oe=0;Oe<we.length;Oe++){const Ye=we[Oe];ae.__webglColorRenderbuffer[Oe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ae.__webglColorRenderbuffer[Oe]);const ut=u.convert(Ye.format,Ye.colorSpace),Ce=u.convert(Ye.type),We=N(Ye.internalFormat,ut,Ce,Ye.colorSpace,O.isXRRenderTarget===!0),rt=Rt(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,rt,We,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.RENDERBUFFER,ae.__webglColorRenderbuffer[Oe])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=a.createRenderbuffer(),Le(ae.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(pe){i.bindTexture(a.TEXTURE_CUBE_MAP,xe.__webglTexture),ye(a.TEXTURE_CUBE_MAP,T);for(let Oe=0;Oe<6;Oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ye=0;Ye<T.mipmaps.length;Ye++)Ae(ae.__webglFramebuffer[Oe][Ye],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Ye);else Ae(ae.__webglFramebuffer[Oe],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);S(T)&&y(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let Oe=0,Ye=we.length;Oe<Ye;Oe++){const ut=we[Oe],Ce=s.get(ut);i.bindTexture(a.TEXTURE_2D,Ce.__webglTexture),ye(a.TEXTURE_2D,ut),Ae(ae.__webglFramebuffer,O,ut,a.COLOR_ATTACHMENT0+Oe,a.TEXTURE_2D,0),S(ut)&&y(a.TEXTURE_2D)}i.unbindTexture()}else{let Oe=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Oe=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Oe,xe.__webglTexture),ye(Oe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ye=0;Ye<T.mipmaps.length;Ye++)Ae(ae.__webglFramebuffer[Ye],O,T,a.COLOR_ATTACHMENT0,Oe,Ye);else Ae(ae.__webglFramebuffer,O,T,a.COLOR_ATTACHMENT0,Oe,0);S(T)&&y(Oe),i.unbindTexture()}O.depthBuffer&&_t(O)}function kt(O){const T=O.textures;for(let ae=0,xe=T.length;ae<xe;ae++){const we=T[ae];if(S(we)){const pe=P(O),ze=s.get(we).__webglTexture;i.bindTexture(pe,ze),y(pe),i.unbindTexture()}}}const Et=[],G=[];function Bn(O){if(O.samples>0){if(pt(O)===!1){const T=O.textures,ae=O.width,xe=O.height;let we=a.COLOR_BUFFER_BIT;const pe=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ze=s.get(O),Oe=T.length>1;if(Oe)for(let ut=0;ut<T.length;ut++)i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ut,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ut,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Ye=O.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let ut=0;ut<T.length;ut++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(we|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(we|=a.STENCIL_BUFFER_BIT)),Oe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ze.__webglColorRenderbuffer[ut]);const Ce=s.get(T[ut]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ce,0)}a.blitFramebuffer(0,0,ae,xe,0,0,ae,xe,we,a.NEAREST),p===!0&&(Et.length=0,G.length=0,Et.push(a.COLOR_ATTACHMENT0+ut),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Et.push(pe),G.push(pe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,G)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Et))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Oe)for(let ut=0;ut<T.length;ut++){i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ut,a.RENDERBUFFER,ze.__webglColorRenderbuffer[ut]);const Ce=s.get(T[ut]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ut,a.TEXTURE_2D,Ce,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const T=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function Rt(O){return Math.min(l.maxSamples,O.samples)}function pt(O){const T=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function nt(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Xt(O,T){const ae=O.colorSpace,xe=O.format,we=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==Gs&&ae!==tr&&(Ht.getTransfer(ae)===en?(xe!==Oi||we!==xa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),T}function et(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=de,this.setTexture2D=me,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=qe,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Bn,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=pt}function Zw(a,e){function i(s,l=tr){let u;const f=Ht.getTransfer(l);if(s===xa)return a.UNSIGNED_BYTE;if(s===sp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===op)return a.UNSIGNED_SHORT_5_5_5_1;if(s===Q0)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===Z0)return a.BYTE;if(s===K0)return a.SHORT;if(s===$o)return a.UNSIGNED_SHORT;if(s===rp)return a.INT;if(s===Fr)return a.UNSIGNED_INT;if(s===va)return a.FLOAT;if(s===ll)return a.HALF_FLOAT;if(s===J0)return a.ALPHA;if(s===$0)return a.RGB;if(s===Oi)return a.RGBA;if(s===tl)return a.DEPTH_COMPONENT;if(s===nl)return a.DEPTH_STENCIL;if(s===ey)return a.RED;if(s===lp)return a.RED_INTEGER;if(s===ty)return a.RG;if(s===up)return a.RG_INTEGER;if(s===cp)return a.RGBA_INTEGER;if(s===Zu||s===Ku||s===Qu||s===Ju)if(f===en)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Zu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Zu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ku)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ju)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_h||s===yh||s===xh||s===Sh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===_h)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mh||s===Eh||s===Th)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Mh||s===Eh)return f===en?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Th)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bh||s===Ah||s===Rh||s===wh||s===Ch||s===Dh||s===Uh||s===Lh||s===Nh||s===Oh||s===Ph||s===zh||s===Fh||s===Bh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===bh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ah)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ch)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Oh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ph)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bh)return f===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$u||s===Ih||s===Hh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===$u)return f===en?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ih)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ny||s===Gh||s===Vh||s===kh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===$u)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Gh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const Kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new jn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ma({vertexShader:Kw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ki(new hl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $w extends ks{constructor(e,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",p=1,h=null,g=null,v=null,_=null,x=null,E=null;const A=new Jw,S=i.getContextAttributes();let y=null,P=null;const N=[],U=[],H=new qt;let w=null;const I=new Li;I.viewport=new _n;const X=new Li;X.viewport=new _n;const D=[I,X],C=new xb;let V=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ve=N[Q];return ve===void 0&&(ve=new jd,N[Q]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(Q){let ve=N[Q];return ve===void 0&&(ve=new jd,N[Q]=ve),ve.getGripSpace()},this.getHand=function(Q){let ve=N[Q];return ve===void 0&&(ve=new jd,N[Q]=ve),ve.getHandSpace()};function ee(Q){const ve=U.indexOf(Q.inputSource);if(ve===-1)return;const Ae=N[ve];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,h||f),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){l.removeEventListener("select",ee),l.removeEventListener("selectstart",ee),l.removeEventListener("selectend",ee),l.removeEventListener("squeeze",ee),l.removeEventListener("squeezestart",ee),l.removeEventListener("squeezeend",ee),l.removeEventListener("end",ce),l.removeEventListener("inputsourceschange",me);for(let Q=0;Q<N.length;Q++){const ve=U[Q];ve!==null&&(U[Q]=null,N[Q].disconnect(ve))}V=null,de=null,A.reset(),e.setRenderTarget(y),x=null,_=null,v=null,l=null,P=null,Te.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(y=e.getRenderTarget(),l.addEventListener("select",ee),l.addEventListener("selectstart",ee),l.addEventListener("selectend",ee),l.addEventListener("squeeze",ee),l.addEventListener("squeezestart",ee),l.addEventListener("squeezeend",ee),l.addEventListener("end",ce),l.addEventListener("inputsourceschange",me),S.xrCompatible!==!0&&await i.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Le=null,Be=null;S.depth&&(Be=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=S.stencil?nl:tl,Le=S.stencil?el:Fr);const _t={colorFormat:i.RGBA8,depthFormat:Be,scaleFactor:u};v=new XRWebGLBinding(l,i),_=v.createProjectionLayer(_t),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new Br(_.textureWidth,_.textureHeight,{format:Oi,type:xa,depthTexture:new my(_.textureWidth,_.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ae={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new Br(x.framebufferWidth,x.framebufferHeight,{format:Oi,type:xa,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),h=null,f=await l.requestReferenceSpace(d),Te.setContext(l),Te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function me(Q){for(let ve=0;ve<Q.removed.length;ve++){const Ae=Q.removed[ve],Le=U.indexOf(Ae);Le>=0&&(U[Le]=null,N[Le].disconnect(Ae))}for(let ve=0;ve<Q.added.length;ve++){const Ae=Q.added[ve];let Le=U.indexOf(Ae);if(Le===-1){for(let _t=0;_t<N.length;_t++)if(_t>=U.length){U.push(Ae),Le=_t;break}else if(U[_t]===null){U[_t]=Ae,Le=_t;break}if(Le===-1)break}const Be=N[Le];Be&&Be.connect(Ae)}}const z=new fe,$=new fe;function W(Q,ve,Ae){z.setFromMatrixPosition(ve.matrixWorld),$.setFromMatrixPosition(Ae.matrixWorld);const Le=z.distanceTo($),Be=ve.projectionMatrix.elements,_t=Ae.projectionMatrix.elements,qe=Be[14]/(Be[10]-1),Ft=Be[14]/(Be[10]+1),kt=(Be[9]+1)/Be[5],Et=(Be[9]-1)/Be[5],G=(Be[8]-1)/Be[0],Bn=(_t[8]+1)/_t[0],Rt=qe*G,pt=qe*Bn,nt=Le/(-G+Bn),Xt=nt*-G;if(ve.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Xt),Q.translateZ(nt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Be[10]===-1)Q.projectionMatrix.copy(ve.projectionMatrix),Q.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const et=qe+nt,O=Ft+nt,T=Rt-Xt,ae=pt+(Le-Xt),xe=kt*Ft/O*et,we=Et*Ft/O*et;Q.projectionMatrix.makePerspective(T,ae,xe,we,et,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ee(Q,ve){ve===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ve.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ve=Q.near,Ae=Q.far;A.texture!==null&&(A.depthNear>0&&(ve=A.depthNear),A.depthFar>0&&(Ae=A.depthFar)),C.near=X.near=I.near=ve,C.far=X.far=I.far=Ae,(V!==C.near||de!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,de=C.far),I.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,C.layers.mask=I.layers.mask|X.layers.mask;const Le=Q.parent,Be=C.cameras;Ee(C,Le);for(let _t=0;_t<Be.length;_t++)Ee(Be[_t],Le);Be.length===2?W(C,I,X):C.projectionMatrix.copy(I.projectionMatrix),L(Q,C,Le)};function L(Q,ve,Ae){Ae===null?Q.matrix.copy(ve.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ve.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ve.projectionMatrix),Q.projectionMatrixInverse.copy(ve.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(Q){p=Q,_!==null&&(_.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let J=null;function ye(Q,ve){if(g=ve.getViewerPose(h||f),E=ve,g!==null){const Ae=g.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let Le=!1;Ae.length!==C.cameras.length&&(C.cameras.length=0,Le=!0);for(let qe=0;qe<Ae.length;qe++){const Ft=Ae[qe];let kt=null;if(x!==null)kt=x.getViewport(Ft);else{const G=v.getViewSubImage(_,Ft);kt=G.viewport,qe===0&&(e.setRenderTargetTextures(P,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(P))}let Et=D[qe];Et===void 0&&(Et=new Li,Et.layers.enable(qe),Et.viewport=new _n,D[qe]=Et),Et.matrix.fromArray(Ft.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Ft.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(kt.x,kt.y,kt.width,kt.height),qe===0&&(C.matrix.copy(Et.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Le===!0&&C.cameras.push(Et)}const Be=l.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const qe=v.getDepthInformation(Ae[0]);qe&&qe.isValid&&qe.texture&&A.init(e,qe,l.renderState)}}for(let Ae=0;Ae<N.length;Ae++){const Le=U[Ae],Be=N[Ae];Le!==null&&Be!==void 0&&Be.update(Le,ve,h||f)}J&&J(Q,ve),ve.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ve}),E=null}const Te=new vy;Te.setAnimationLoop(ye),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}const wr=new Sa,eC=new En;function tC(a,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,fy(a)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,P,N,U){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(S,y):y.isMeshToonMaterial?(u(S,y),v(S,y)):y.isMeshPhongMaterial?(u(S,y),g(S,y)):y.isMeshStandardMaterial?(u(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,U)):y.isMeshMatcapMaterial?(u(S,y),E(S,y)):y.isMeshDepthMaterial?u(S,y):y.isMeshDistanceMaterial?(u(S,y),A(S,y)):y.isMeshNormalMaterial?u(S,y):y.isLineBasicMaterial?(f(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?p(S,y,P,N):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ni&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ni&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const P=e.get(y),N=P.envMap,U=P.envMapRotation;N&&(S.envMap.value=N,wr.copy(U),wr.x*=-1,wr.y*=-1,wr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),S.envMapRotation.value.setFromMatrix4(eC.makeRotationFromEuler(wr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,P,N){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*P,S.scale.value=N*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,P){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ni&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const P=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function nC(a,e,i,s){let l={},u={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,N){const U=N.program;s.uniformBlockBinding(P,U)}function h(P,N){let U=l[P.id];U===void 0&&(E(P),U=g(P),l[P.id]=U,P.addEventListener("dispose",S));const H=N.program;s.updateUBOMapping(P,H);const w=e.render.frame;u[P.id]!==w&&(_(P),u[P.id]=w)}function g(P){const N=v();P.__bindingPointIndex=N;const U=a.createBuffer(),H=P.__size,w=P.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,H,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,N,U),U}function v(){for(let P=0;P<d;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const N=l[P.id],U=P.uniforms,H=P.__cache;a.bindBuffer(a.UNIFORM_BUFFER,N);for(let w=0,I=U.length;w<I;w++){const X=Array.isArray(U[w])?U[w]:[U[w]];for(let D=0,C=X.length;D<C;D++){const V=X[D];if(x(V,w,D,H)===!0){const de=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let ce=0;for(let me=0;me<ee.length;me++){const z=ee[me],$=A(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,de+ce,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,ce),ce+=$.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,de,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(P,N,U,H){const w=P.value,I=N+"_"+U;if(H[I]===void 0)return typeof w=="number"||typeof w=="boolean"?H[I]=w:H[I]=w.clone(),!0;{const X=H[I];if(typeof w=="number"||typeof w=="boolean"){if(X!==w)return H[I]=w,!0}else if(X.equals(w)===!1)return X.copy(w),!0}return!1}function E(P){const N=P.uniforms;let U=0;const H=16;for(let I=0,X=N.length;I<X;I++){const D=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,V=D.length;C<V;C++){const de=D[C],ee=Array.isArray(de.value)?de.value:[de.value];for(let ce=0,me=ee.length;ce<me;ce++){const z=ee[ce],$=A(z),W=U%H,Ee=W%$.boundary,L=W+Ee;U+=Ee,L!==0&&H-L<$.storage&&(U+=H-L),de.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=U,U+=$.storage}}}const w=U%H;return w>0&&(U+=H-w),P.__size=U,P.__cache={},this}function A(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),N}function S(P){const N=P.target;N.removeEventListener("dispose",S);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),a.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function y(){for(const P in l)a.deleteBuffer(l[P]);f=[],l={},u={}}return{bind:p,update:h,dispose:y}}class iC{constructor(e={}){const{canvas:i=FT(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=f;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,y=null;const P=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let H=!1;this._outputColorSpace=Ti;let w=0,I=0,X=null,D=-1,C=null;const V=new _n,de=new _n;let ee=null;const ce=new Zt(0);let me=0,z=i.width,$=i.height,W=1,Ee=null,L=null;const J=new _n(0,0,z,$),ye=new _n(0,0,z,$);let Te=!1;const Q=new py;let ve=!1,Ae=!1;const Le=new En,Be=new En,_t=new fe,qe=new _n,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Et(){return X===null?W:1}let G=s;function Bn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",Se,!1),i.addEventListener("webglcontextrestored",Ve,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),G===null){const Y="webgl2";if(G=Bn(Y,R),G===null)throw Bn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Rt,pt,nt,Xt,et,O,T,ae,xe,we,pe,ze,Oe,Ye,ut,Ce,We,rt,ot,ke,yt,ct,Gt,q;function Ie(){Rt=new hR(G),Rt.init(),ct=new Zw(G,Rt),pt=new sR(G,Rt,e,ct),nt=new Yw(G,Rt),pt.reverseDepthBuffer&&_&&nt.buffers.depth.setReversed(!0),Xt=new gR(G),et=new Ow,O=new jw(G,Rt,nt,et,pt,ct,Xt),T=new lR(U),ae=new dR(U),xe=new Mb(G),Gt=new aR(G,xe),we=new pR(G,xe,Xt,Gt),pe=new _R(G,we,xe,Xt),ot=new vR(G,pt,O),Ce=new oR(et),ze=new Nw(U,T,ae,Rt,pt,Gt,Ce),Oe=new tC(U,et),Ye=new zw,ut=new Vw(Rt),rt=new iR(U,T,ae,nt,pe,x,p),We=new Ww(U,pe,pt),q=new nC(G,Xt,pt,nt),ke=new rR(G,Rt,Xt),yt=new mR(G,Rt,Xt),Xt.programs=ze.programs,U.capabilities=pt,U.extensions=Rt,U.properties=et,U.renderLists=Ye,U.shadowMap=We,U.state=nt,U.info=Xt}Ie();const he=new $w(U,G);this.xr=he,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Rt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Rt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(z,$,!1))},this.getSize=function(R){return R.set(z,$)},this.setSize=function(R,Y,oe=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,$=Y,i.width=Math.floor(R*W),i.height=Math.floor(Y*W),oe===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(z*W,$*W).floor()},this.setDrawingBufferSize=function(R,Y,oe){z=R,$=Y,W=oe,i.width=Math.floor(R*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,Y,oe,le){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,oe,le),nt.viewport(V.copy(J).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,Y,oe,le){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,Y,oe,le),nt.scissor(de.copy(ye).multiplyScalar(W).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(R){nt.setScissorTest(Te=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,oe=!0){let le=0;if(R){let j=!1;if(X!==null){const De=X.texture.format;j=De===cp||De===up||De===lp}if(j){const De=X.texture.type,Pe=De===xa||De===Fr||De===$o||De===el||De===sp||De===op,Re=rt.getClearColor(),Ne=rt.getClearAlpha(),st=Re.r,$e=Re.g,He=Re.b;Pe?(E[0]=st,E[1]=$e,E[2]=He,E[3]=Ne,G.clearBufferuiv(G.COLOR,0,E)):(A[0]=st,A[1]=$e,A[2]=He,A[3]=Ne,G.clearBufferiv(G.COLOR,0,A))}else le|=G.COLOR_BUFFER_BIT}Y&&(le|=G.DEPTH_BUFFER_BIT),oe&&(le|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Se,!1),i.removeEventListener("webglcontextrestored",Ve,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),rt.dispose(),Ye.dispose(),ut.dispose(),et.dispose(),T.dispose(),ae.dispose(),pe.dispose(),Gt.dispose(),q.dispose(),ze.dispose(),he.dispose(),he.removeEventListener("sessionstart",be),he.removeEventListener("sessionend",Ue),Xe.stop()};function Se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Xt.autoReset,Y=We.enabled,oe=We.autoUpdate,le=We.needsUpdate,j=We.type;Ie(),Xt.autoReset=R,We.enabled=Y,We.autoUpdate=oe,We.needsUpdate=le,We.type=j}function Fe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ht(R){const Y=R.target;Y.removeEventListener("dispose",ht),Kt(Y)}function Kt(R){dn(R),et.remove(R)}function dn(R){const Y=et.get(R).programs;Y!==void 0&&(Y.forEach(function(oe){ze.releaseProgram(oe)}),R.isShaderMaterial&&ze.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,oe,le,j,De){Y===null&&(Y=Ft);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,Re=an(R,Y,oe,le,j);nt.setMaterial(le,Pe);let Ne=oe.index,st=1;if(le.wireframe===!0){if(Ne=we.getWireframeAttribute(oe),Ne===void 0)return;st=2}const $e=oe.drawRange,He=oe.attributes.position;let xt=$e.start*st,Ut=($e.start+$e.count)*st;De!==null&&(xt=Math.max(xt,De.start*st),Ut=Math.min(Ut,(De.start+De.count)*st)),Ne!==null?(xt=Math.max(xt,0),Ut=Math.min(Ut,Ne.count)):He!=null&&(xt=Math.max(xt,0),Ut=Math.min(Ut,He.count));const on=Ut-xt;if(on<0||on===1/0)return;Gt.setup(j,le,Re,oe,Ne);let Lt,Nt=ke;if(Ne!==null&&(Lt=xe.get(Ne),Nt=yt,Nt.setIndex(Lt)),j.isMesh)le.wireframe===!0?(nt.setLineWidth(le.wireframeLinewidth*Et()),Nt.setMode(G.LINES)):Nt.setMode(G.TRIANGLES);else if(j.isLine){let lt=le.linewidth;lt===void 0&&(lt=1),nt.setLineWidth(lt*Et()),j.isLineSegments?Nt.setMode(G.LINES):j.isLineLoop?Nt.setMode(G.LINE_LOOP):Nt.setMode(G.LINE_STRIP)}else j.isPoints?Nt.setMode(G.POINTS):j.isSprite&&Nt.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ec("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const lt=j._multiDrawStarts,hn=j._multiDrawCounts,Bt=j._multiDrawCount,In=Ne?xe.get(Ne).bytesPerElement:1,Ea=et.get(le).currentProgram.getUniforms();for(let rn=0;rn<Bt;rn++)Ea.setValue(G,"_gl_DrawID",rn),Nt.render(lt[rn]/In,hn[rn])}else if(j.isInstancedMesh)Nt.renderInstances(xt,on,j.count);else if(oe.isInstancedBufferGeometry){const lt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,hn=Math.min(oe.instanceCount,lt);Nt.renderInstances(xt,on,hn)}else Nt.render(xt,on)};function F(R,Y,oe){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=ni,R.needsUpdate=!0,je(R,Y,oe),R.side=rr,R.needsUpdate=!0,je(R,Y,oe),R.side=ga):je(R,Y,oe)}this.compile=function(R,Y,oe=null){oe===null&&(oe=R),y=ut.get(oe),y.init(Y),N.push(y),oe.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),R!==oe&&R.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights();const le=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const De=j.material;if(De)if(Array.isArray(De))for(let Pe=0;Pe<De.length;Pe++){const Re=De[Pe];F(Re,oe,j),le.add(Re)}else F(De,oe,j),le.add(De)}),y=N.pop(),le},this.compileAsync=function(R,Y,oe=null){const le=this.compile(R,Y,oe);return new Promise(j=>{function De(){if(le.forEach(function(Pe){et.get(Pe).currentProgram.isReady()&&le.delete(Pe)}),le.size===0){j(R);return}setTimeout(De,10)}Rt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let K=null;function re(R){K&&K(R)}function be(){Xe.stop()}function Ue(){Xe.start()}const Xe=new vy;Xe.setAnimationLoop(re),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(R){K=R,he.setAnimationLoop(R),R===null?Xe.stop():Xe.start()},he.addEventListener("sessionstart",be),he.addEventListener("sessionend",Ue),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(Y),Y=he.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,Y,X),y=ut.get(R,N.length),y.init(Y),N.push(y),Be.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Be),Ae=this.localClippingEnabled,ve=Ce.init(this.clippingPlanes,Ae),S=Ye.get(R,P.length),S.init(),P.push(S),he.enabled===!0&&he.isPresenting===!0){const De=U.xr.getDepthSensingMesh();De!==null&&Je(De,Y,-1/0,U.sortObjects)}Je(R,Y,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(Ee,L),kt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,kt&&rt.addToRenderList(S,R),this.info.render.frame++,ve===!0&&Ce.beginShadows();const oe=y.state.shadowsArray;We.render(oe,R,Y),ve===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,j=S.transmissive;if(y.setupLights(),Y.isArrayCamera){const De=Y.cameras;if(j.length>0)for(let Pe=0,Re=De.length;Pe<Re;Pe++){const Ne=De[Pe];tt(le,j,R,Ne)}kt&&rt.render(R);for(let Pe=0,Re=De.length;Pe<Re;Pe++){const Ne=De[Pe];Ze(S,R,Ne,Ne.viewport)}}else j.length>0&&tt(le,j,R,Y),kt&&rt.render(R),Ze(S,R,Y);X!==null&&I===0&&(O.updateMultisampleRenderTarget(X),O.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(U,R,Y),Gt.resetDefaultState(),D=-1,C=null,N.pop(),N.length>0?(y=N[N.length-1],ve===!0&&Ce.setGlobalState(U.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Je(R,Y,oe,le){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){le&&qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Be);const Pe=pe.update(R),Re=R.material;Re.visible&&S.push(R,Pe,Re,oe,qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Pe=pe.update(R),Re=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qe.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),qe.copy(Pe.boundingSphere.center)),qe.applyMatrix4(R.matrixWorld).applyMatrix4(Be)),Array.isArray(Re)){const Ne=Pe.groups;for(let st=0,$e=Ne.length;st<$e;st++){const He=Ne[st],xt=Re[He.materialIndex];xt&&xt.visible&&S.push(R,Pe,xt,oe,qe.z,He)}}else Re.visible&&S.push(R,Pe,Re,oe,qe.z,null)}}const De=R.children;for(let Pe=0,Re=De.length;Pe<Re;Pe++)Je(De[Pe],Y,oe,le)}function Ze(R,Y,oe,le){const j=R.opaque,De=R.transmissive,Pe=R.transparent;y.setupLightsView(oe),ve===!0&&Ce.setGlobalState(U.clippingPlanes,oe),le&&nt.viewport(V.copy(le)),j.length>0&&at(j,Y,oe),De.length>0&&at(De,Y,oe),Pe.length>0&&at(Pe,Y,oe),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function tt(R,Y,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[le.id]===void 0&&(y.state.transmissionRenderTarget[le.id]=new Br(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?ll:xa,minFilter:Pr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const De=y.state.transmissionRenderTarget[le.id],Pe=le.viewport||V;De.setSize(Pe.z*U.transmissionResolutionScale,Pe.w*U.transmissionResolutionScale);const Re=U.getRenderTarget();U.setRenderTarget(De),U.getClearColor(ce),me=U.getClearAlpha(),me<1&&U.setClearColor(16777215,.5),U.clear(),kt&&rt.render(oe);const Ne=U.toneMapping;U.toneMapping=ir;const st=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),y.setupLightsView(le),ve===!0&&Ce.setGlobalState(U.clippingPlanes,le),at(R,oe,le),O.updateMultisampleRenderTarget(De),O.updateRenderTargetMipmap(De),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let He=0,xt=Y.length;He<xt;He++){const Ut=Y[He],on=Ut.object,Lt=Ut.geometry,Nt=Ut.material,lt=Ut.group;if(Nt.side===ga&&on.layers.test(le.layers)){const hn=Nt.side;Nt.side=ni,Nt.needsUpdate=!0,Ke(on,oe,le,Lt,Nt,lt),Nt.side=hn,Nt.needsUpdate=!0,$e=!0}}$e===!0&&(O.updateMultisampleRenderTarget(De),O.updateRenderTargetMipmap(De))}U.setRenderTarget(Re),U.setClearColor(ce,me),st!==void 0&&(le.viewport=st),U.toneMapping=Ne}function at(R,Y,oe){const le=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,De=R.length;j<De;j++){const Pe=R[j],Re=Pe.object,Ne=Pe.geometry,st=Pe.group;let $e=Pe.material;$e.allowOverride===!0&&le!==null&&($e=le),Re.layers.test(oe.layers)&&Ke(Re,Y,oe,Ne,$e,st)}}function Ke(R,Y,oe,le,j,De){R.onBeforeRender(U,Y,oe,le,j,De),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(U,Y,oe,le,R,De),j.transparent===!0&&j.side===ga&&j.forceSinglePass===!1?(j.side=ni,j.needsUpdate=!0,U.renderBufferDirect(oe,Y,le,j,R,De),j.side=rr,j.needsUpdate=!0,U.renderBufferDirect(oe,Y,le,j,R,De),j.side=ga):U.renderBufferDirect(oe,Y,le,j,R,De),R.onAfterRender(U,Y,oe,le,j,De)}function je(R,Y,oe){Y.isScene!==!0&&(Y=Ft);const le=et.get(R),j=y.state.lights,De=y.state.shadowsArray,Pe=j.state.version,Re=ze.getParameters(R,j.state,De,Y,oe),Ne=ze.getProgramCacheKey(Re);let st=le.programs;le.environment=R.isMeshStandardMaterial?Y.environment:null,le.fog=Y.fog,le.envMap=(R.isMeshStandardMaterial?ae:T).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,st===void 0&&(R.addEventListener("dispose",ht),st=new Map,le.programs=st);let $e=st.get(Ne);if($e!==void 0){if(le.currentProgram===$e&&le.lightsStateVersion===Pe)return Pt(R,Re),$e}else Re.uniforms=ze.getUniforms(R),R.onBeforeCompile(Re,U),$e=ze.acquireProgram(Re,Ne),st.set(Ne,$e),le.uniforms=Re.uniforms;const He=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Ce.uniform),Pt(R,Re),le.needsLights=gt(R),le.lightsStateVersion=Pe,le.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),le.currentProgram=$e,le.uniformsList=null,$e}function vt(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=tc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Pt(R,Y){const oe=et.get(R);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function an(R,Y,oe,le,j){Y.isScene!==!0&&(Y=Ft),O.resetTextureUnits();const De=Y.fog,Pe=le.isMeshStandardMaterial?Y.environment:null,Re=X===null?U.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Gs,Ne=(le.isMeshStandardMaterial?ae:T).get(le.envMap||Pe),st=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,$e=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),He=!!oe.morphAttributes.position,xt=!!oe.morphAttributes.normal,Ut=!!oe.morphAttributes.color;let on=ir;le.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(on=U.toneMapping);const Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Nt=Lt!==void 0?Lt.length:0,lt=et.get(le),hn=y.state.lights;if(ve===!0&&(Ae===!0||R!==C)){const Cn=R===C&&le.id===D;Ce.setState(le,R,Cn)}let Bt=!1;le.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==hn.state.version||lt.outputColorSpace!==Re||j.isBatchedMesh&&lt.batching===!1||!j.isBatchedMesh&&lt.batching===!0||j.isBatchedMesh&&lt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&lt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&lt.instancing===!1||!j.isInstancedMesh&&lt.instancing===!0||j.isSkinnedMesh&&lt.skinning===!1||!j.isSkinnedMesh&&lt.skinning===!0||j.isInstancedMesh&&lt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&lt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&lt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&lt.instancingMorph===!1&&j.morphTexture!==null||lt.envMap!==Ne||le.fog===!0&&lt.fog!==De||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==Ce.numPlanes||lt.numIntersection!==Ce.numIntersection)||lt.vertexAlphas!==st||lt.vertexTangents!==$e||lt.morphTargets!==He||lt.morphNormals!==xt||lt.morphColors!==Ut||lt.toneMapping!==on||lt.morphTargetsCount!==Nt)&&(Bt=!0):(Bt=!0,lt.__version=le.version);let In=lt.currentProgram;Bt===!0&&(In=je(le,Y,j));let Ea=!1,rn=!1,ji=!1;const tn=In.getUniforms(),Hn=lt.uniforms;if(nt.useProgram(In.program)&&(Ea=!0,rn=!0,ji=!0),le.id!==D&&(D=le.id,rn=!0),Ea||C!==R){nt.buffers.depth.getReversed()?(Le.copy(R.projectionMatrix),IT(Le),HT(Le),tn.setValue(G,"projectionMatrix",Le)):tn.setValue(G,"projectionMatrix",R.projectionMatrix),tn.setValue(G,"viewMatrix",R.matrixWorldInverse);const On=tn.map.cameraPosition;On!==void 0&&On.setValue(G,_t.setFromMatrixPosition(R.matrixWorld)),pt.logarithmicDepthBuffer&&tn.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&tn.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,rn=!0,ji=!0)}if(j.isSkinnedMesh){tn.setOptional(G,j,"bindMatrix"),tn.setOptional(G,j,"bindMatrixInverse");const Cn=j.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),tn.setValue(G,"boneTexture",Cn.boneTexture,O))}j.isBatchedMesh&&(tn.setOptional(G,j,"batchingTexture"),tn.setValue(G,"batchingTexture",j._matricesTexture,O),tn.setOptional(G,j,"batchingIdTexture"),tn.setValue(G,"batchingIdTexture",j._indirectTexture,O),tn.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&tn.setValue(G,"batchingColorTexture",j._colorsTexture,O));const Tn=oe.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&ot.update(j,oe,In),(rn||lt.receiveShadow!==j.receiveShadow)&&(lt.receiveShadow=j.receiveShadow,tn.setValue(G,"receiveShadow",j.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Hn.envMap.value=Ne,Hn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Y.environment!==null&&(Hn.envMapIntensity.value=Y.environmentIntensity),rn&&(tn.setValue(G,"toneMappingExposure",U.toneMappingExposure),lt.needsLights&&un(Hn,ji),De&&le.fog===!0&&Oe.refreshFogUniforms(Hn,De),Oe.refreshMaterialUniforms(Hn,le,W,$,y.state.transmissionRenderTarget[R.id]),tc.upload(G,vt(lt),Hn,O)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(tc.upload(G,vt(lt),Hn,O),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&tn.setValue(G,"center",j.center),tn.setValue(G,"modelViewMatrix",j.modelViewMatrix),tn.setValue(G,"normalMatrix",j.normalMatrix),tn.setValue(G,"modelMatrix",j.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Cn=le.uniformsGroups;for(let On=0,zi=Cn.length;On<zi;On++){const Zi=Cn[On];q.update(Zi,In),q.bind(Zi,In)}}return In}function un(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function gt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Y,oe){const le=et.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),et.get(R.texture).__webglTexture=Y,et.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:oe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const oe=et.get(R);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const Wt=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,oe=0){X=R,w=Y,I=oe;let le=!0,j=null,De=!1,Pe=!1;if(R){const Ne=et.get(R);if(Ne.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(G.FRAMEBUFFER,null),le=!1;else if(Ne.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(Ne.__hasExternalTextures)O.rebindTextures(R,et.get(R.texture).__webglTexture,et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const He=R.depthTexture;if(Ne.__boundDepthTexture!==He){if(He!==null&&et.has(He)&&(R.width!==He.image.width||R.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const st=R.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Pe=!0);const $e=et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[Y])?j=$e[Y][oe]:j=$e[Y],De=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?j=et.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?j=$e[oe]:j=$e,V.copy(R.viewport),de.copy(R.scissor),ee=R.scissorTest}else V.copy(J).multiplyScalar(W).floor(),de.copy(ye).multiplyScalar(W).floor(),ee=Te;if(oe!==0&&(j=Wt),nt.bindFramebuffer(G.FRAMEBUFFER,j)&&le&&nt.drawBuffers(R,j),nt.viewport(V),nt.scissor(de),nt.setScissorTest(ee),De){const Ne=et.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,oe)}else if(Pe){const Ne=et.get(R.texture),st=Y;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.__webglTexture,oe,st)}else if(R!==null&&oe!==0){const Ne=et.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ne.__webglTexture,oe)}D=-1},this.readRenderTargetPixels=function(R,Y,oe,le,j,De,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Re=Re[Pe]),Re){nt.bindFramebuffer(G.FRAMEBUFFER,Re);try{const Ne=R.texture,st=Ne.format,$e=Ne.type;if(!pt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-le&&oe>=0&&oe<=R.height-j&&G.readPixels(Y,oe,le,j,ct.convert(st),ct.convert($e),De)}finally{const Ne=X!==null?et.get(X).__webglFramebuffer:null;nt.bindFramebuffer(G.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(R,Y,oe,le,j,De,Pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Re=Re[Pe]),Re)if(Y>=0&&Y<=R.width-le&&oe>=0&&oe<=R.height-j){nt.bindFramebuffer(G.FRAMEBUFFER,Re);const Ne=R.texture,st=Ne.format,$e=Ne.type;if(!pt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,He),G.bufferData(G.PIXEL_PACK_BUFFER,De.byteLength,G.STREAM_READ),G.readPixels(Y,oe,le,j,ct.convert(st),ct.convert($e),0);const xt=X!==null?et.get(X).__webglFramebuffer:null;nt.bindFramebuffer(G.FRAMEBUFFER,xt);const Ut=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await BT(G,Ut,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,He),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,De),G.deleteBuffer(He),G.deleteSync(Ut),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,oe=0){const le=Math.pow(2,-oe),j=Math.floor(R.image.width*le),De=Math.floor(R.image.height*le),Pe=Y!==null?Y.x:0,Re=Y!==null?Y.y:0;O.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Pe,Re,j,De),nt.unbindTexture()};const pi=G.createFramebuffer(),Wn=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,oe=null,le=null,j=0,De=null){De===null&&(j!==0?(ec("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=j,j=0):De=0);let Pe,Re,Ne,st,$e,He,xt,Ut,on;const Lt=R.isCompressedTexture?R.mipmaps[De]:R.image;if(oe!==null)Pe=oe.max.x-oe.min.x,Re=oe.max.y-oe.min.y,Ne=oe.isBox3?oe.max.z-oe.min.z:1,st=oe.min.x,$e=oe.min.y,He=oe.isBox3?oe.min.z:0;else{const Tn=Math.pow(2,-j);Pe=Math.floor(Lt.width*Tn),Re=Math.floor(Lt.height*Tn),R.isDataArrayTexture?Ne=Lt.depth:R.isData3DTexture?Ne=Math.floor(Lt.depth*Tn):Ne=1,st=0,$e=0,He=0}le!==null?(xt=le.x,Ut=le.y,on=le.z):(xt=0,Ut=0,on=0);const Nt=ct.convert(Y.format),lt=ct.convert(Y.type);let hn;Y.isData3DTexture?(O.setTexture3D(Y,0),hn=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(O.setTexture2DArray(Y,0),hn=G.TEXTURE_2D_ARRAY):(O.setTexture2D(Y,0),hn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Bt=G.getParameter(G.UNPACK_ROW_LENGTH),In=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ea=G.getParameter(G.UNPACK_SKIP_PIXELS),rn=G.getParameter(G.UNPACK_SKIP_ROWS),ji=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Lt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,st),G.pixelStorei(G.UNPACK_SKIP_ROWS,$e),G.pixelStorei(G.UNPACK_SKIP_IMAGES,He);const tn=R.isDataArrayTexture||R.isData3DTexture,Hn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Tn=et.get(R),Cn=et.get(Y),On=et.get(Tn.__renderTarget),zi=et.get(Cn.__renderTarget);nt.bindFramebuffer(G.READ_FRAMEBUFFER,On.__webglFramebuffer),nt.bindFramebuffer(G.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Zi=0;Zi<Ne;Zi++)tn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,et.get(R).__webglTexture,j,He+Zi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,et.get(Y).__webglTexture,De,on+Zi)),G.blitFramebuffer(st,$e,Pe,Re,xt,Ut,Pe,Re,G.DEPTH_BUFFER_BIT,G.NEAREST);nt.bindFramebuffer(G.READ_FRAMEBUFFER,null),nt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||et.has(R)){const Tn=et.get(R),Cn=et.get(Y);nt.bindFramebuffer(G.READ_FRAMEBUFFER,pi),nt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Wn);for(let On=0;On<Ne;On++)tn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,j,He+On):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,j),Hn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Cn.__webglTexture,De,on+On):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Cn.__webglTexture,De),j!==0?G.blitFramebuffer(st,$e,Pe,Re,xt,Ut,Pe,Re,G.COLOR_BUFFER_BIT,G.NEAREST):Hn?G.copyTexSubImage3D(hn,De,xt,Ut,on+On,st,$e,Pe,Re):G.copyTexSubImage2D(hn,De,xt,Ut,st,$e,Pe,Re);nt.bindFramebuffer(G.READ_FRAMEBUFFER,null),nt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Hn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(hn,De,xt,Ut,on,Pe,Re,Ne,Nt,lt,Lt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(hn,De,xt,Ut,on,Pe,Re,Ne,Nt,Lt.data):G.texSubImage3D(hn,De,xt,Ut,on,Pe,Re,Ne,Nt,lt,Lt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,De,xt,Ut,Pe,Re,Nt,lt,Lt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,De,xt,Ut,Lt.width,Lt.height,Nt,Lt.data):G.texSubImage2D(G.TEXTURE_2D,De,xt,Ut,Pe,Re,Nt,lt,Lt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Bt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,In),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ea),G.pixelStorei(G.UNPACK_SKIP_ROWS,rn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ji),De===0&&Y.generateMipmaps&&G.generateMipmap(hn),nt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,oe=null,le=null,j=0){return ec('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,oe,le,j)},this.initRenderTarget=function(R){et.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),nt.unbindTexture()},this.resetState=function(){w=0,I=0,X=null,nt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ht._getUnpackColorSpace()}}function aC({active:a=!1,duration:e=800}){const i=ne.useRef(null),s=ne.useRef(null);ne.useRef(null);const l=ne.useRef(null),u=ne.useRef(null);ne.useEffect(()=>{const p=i.current;if(!p)return;const h=new iC({alpha:!0,antialias:!0});h.setPixelRatio(window.devicePixelRatio||1),h.setSize(window.innerWidth,window.innerHeight),h.domElement.style.pointerEvents="none",h.domElement.style.position="fixed",h.domElement.style.inset="0",h.domElement.style.zIndex="99999",p.appendChild(h.domElement),u.current=h;const g=new db,v=new gy(-1,1,1,-1,0,1),_=new Ma({transparent:!0,uniforms:{uTime:{value:0},uProgress:{value:0},uResolution:{value:new qt(window.innerWidth,window.innerHeight)},uRectCenter:{value:new qt(.5,.5)},uRectSize:{value:new qt(0,0)},uThumb:{value:null},uUseThumb:{value:0},uBaseColor:{value:new fe(.02,.06,.12)},uDispMap:{value:null},uUseDisp:{value:0},uStrength:{value:.25}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,fragmentShader:`
                varying vec2 vUv;
                uniform float uTime;
                uniform float uProgress;
                uniform vec2 uResolution;
                uniform vec2 uRectCenter;
                uniform vec2 uRectSize;
                uniform sampler2D uThumb;
                uniform float uUseThumb;
                uniform sampler2D uDispMap;
                uniform float uUseDisp;
                uniform float uStrength;
                uniform vec3 uBaseColor;

                // Simplex / FBM noise helpers
                float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
                float noise(vec2 p){
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    float a = hash(i);
                    float b = hash(i + vec2(1.0, 0.0));
                    float c = hash(i + vec2(0.0, 1.0));
                    float d = hash(i + vec2(1.0, 1.0));
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    return mix(a, b, u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
                }

                float fbm(vec2 p) {
                    float v = 0.0;
                    float amp = 0.5;
                    for (int i = 0; i < 5; i++) {
                        v += amp * noise(p);
                        p *= 2.0;
                        amp *= 0.5;
                    }
                    return v;
                }

                void main() {
                    vec2 uv = vUv;

                        // animated noise value
                        float n = fbm(uv * 6.0 + uTime * 0.4);

                        // displacement source: either external displacement map or procedural noise
                        float dispSrc = n;
                        if (uUseDisp > 0.5) {
                            // sample displacement map (assume single-channel in red)
                            dispSrc = texture2D(uDispMap, uv).r;
                        }

                        // displacement by selected source, scaled by progress
                        float disp = (dispSrc - 0.5) * uStrength * uProgress;
                        vec2 displaced = uv + vec2(disp * 0.6, disp * -0.6);

                    // dissolve threshold using another noise sample
                    float dissolveNoise = fbm(displaced * 12.0 + uTime * 1.3);
                    // bias noise influence so at low uProgress there's effectively no alpha
                    float noiseInfluence = mix(0.05, 0.45, uProgress);

                    // compute rectangular distance of current fragment to the rect center (in UV space)
                    vec2 rectCenterUV = uRectCenter;
                    vec2 rectHalf = uRectSize * 0.5;
                    // normalized position inside rect-space (-1..1). using max(abs(x),abs(y)) gives a rectangular metric
                    vec2 d = (uv - rectCenterUV) / max(rectHalf, vec2(0.001));
                    float rectDist = max(abs(d.x), abs(d.y));

                    // falloff based on rectangular distance so effect is stronger near the rect
                    float falloff = 1.0 - smoothstep(0.0, 1.0, rectDist);

                    float threshold = clamp(uProgress * falloff + (dissolveNoise - 0.5) * noiseInfluence, 0.0, 1.0);

                        // compose color: use the provided base color as the background
                        vec3 base = uBaseColor;
                        vec3 col = base;

                        // sample thumbnail texture if available
                        vec4 thumbCol = vec4(0.0);
                        if (uUseThumb > 0.5) {
                            // Map uv into the originating rect (rect-space UV), then expand towards full-screen UV as progress increases
                            vec2 rectSizeSafe = max(uRectSize, vec2(0.0001));
                            vec2 rectMin = uRectCenter - rectSizeSafe * 0.5;
                            vec2 rectUV = (uv - rectMin) / rectSizeSafe; // 0..1 inside rect
                            rectUV = clamp(rectUV, 0.0, 1.0);

                            // expansion factor: 0 => sample from rect only, 1 => sample from full-screen UV
                            float expand = smoothstep(0.0, 1.0, uProgress);

                            // compute mapped UV that interpolates between rect UV and screen UV
                            vec2 mappedUV = mix(rectUV, uv, expand);

                            // stronger pixelation when small, relax as expand increases
                            float baseFactor = mix(48.0, 1.0, expand);
                            float rectDist = length((uv - uRectCenter) / max(uRectSize * 0.5, vec2(0.001)));
                            float radialFactor = mix(0.6, 1.6, clamp(rectDist, 0.0, 1.0));
                            float pixelFactor = max(1.0, baseFactor * radialFactor);

                            // glitch offset scaled by how much we haven't expanded yet
                            float g = fbm(vUv * 40.0 + uTime * 2.0);
                            vec2 glitchOffset = vec2((g - 0.5) * 0.06 * (1.0 - expand), (g - 0.5) * -0.06 * (1.0 - expand));

                            vec2 sampleUV = mappedUV + glitchOffset;
                            // apply pixelation in screen-space for dramatic blocks
                            vec2 pixelUV = floor(sampleUV * uResolution.xy / pixelFactor) * pixelFactor / uResolution.xy;
                            pixelUV = clamp(pixelUV, 0.0, 1.0);
                            thumbCol = texture2D(uThumb, pixelUV);

                            // attenuate thumb outside the rect area so the effect is localized before expand
                            float rectMask = 1.0 - smoothstep(0.0, 1.0, rectDist);
                            // as we expand, let the thumb bleed outwards
                            float mask = mix(rectMask, 1.0, expand);
                            thumbCol.rgb *= mask;
                            thumbCol.a *= mask;
                        }

            // compute weight for thumb vs base. thumbWeight grows with uProgress and with threshold (stronger near the rect)
            float thumbWeight = smoothstep(0.0, 1.0, uProgress) * threshold;

            // final color blends between the base color 'col' and the (possibly pixelated) thumbnail
            vec3 finalCol = mix(col, thumbCol.rgb, thumbWeight * thumbCol.a);

            // Always output opaque color so the shader never shows underlying black while transitioning
            gl_FragColor = vec4(finalCol, 1.0);
                }
            `});s.current=_;const x=new ki(new hl(2,2),_);g.add(x);const E=()=>{h.setSize(window.innerWidth,window.innerHeight),_.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)};window.addEventListener("resize",E);let A=0;const S=y=>{A=y*.001,_.uniforms.uTime.value=A,h.render(g,v),l.current=requestAnimationFrame(S)};return l.current=requestAnimationFrame(S),()=>{cancelAnimationFrame(l.current),window.removeEventListener("resize",E);try{p.removeChild(h.domElement)}catch{}_.dispose(),h.dispose()}},[]);const{payload:f,active:d}=ip();return ne.useEffect(()=>{if(!s.current)return;const p=s.current;if(!f||!f.rect||!f.viewport){p.uniforms.uRectCenter.value.set(.5,.5),p.uniforms.uRectSize.value.set(0,0);return}const{rect:h,viewport:g}=f,v=h.centerX/g.width,_=1-h.centerY/g.height,x=h.width/g.width,E=h.height/g.height;p.uniforms.uRectCenter.value.set(v,_),p.uniforms.uRectSize.value.set(x,E)},[f]),ne.useEffect(()=>{if(!s.current)return;const p=s.current,h=f?.baseColor;if(!h)return;let g=.02,v=.06,_=.12;try{const x=document.createElement("canvas").getContext("2d");x.fillStyle=h;const E=x.fillStyle;x.fillStyle=E,x.fillRect(0,0,1,1);const A=x.getImageData(0,0,1,1).data;g=A[0]/255,v=A[1]/255,_=A[2]/255}catch{}p.uniforms.uBaseColor.value.set(g,v,_);try{const x=u.current;x&&(x.setClearColor(new Zt(g,v,_),1),x.domElement&&(x.domElement.style.background=h))}catch{}},[f]),ne.useEffect(()=>{if(!s.current)return;const p=s.current;let h=null;if(f&&f.thumbSrc)h=new X_().load(f.thumbSrc,v=>{v.minFilter=ti,v.magFilter=ti,v.generateMipmaps=!1,p.uniforms.uThumb.value=v,p.uniforms.uUseThumb.value=1});else if(p.uniforms.uUseThumb.value=0,p.uniforms.uThumb.value){try{p.uniforms.uThumb.value.dispose()}catch{}p.uniforms.uThumb.value=null}return()=>{if(h)try{h.dispose()}catch{}}},[f]),ne.useEffect(()=>{if(!s.current)return;const p=s.current;let h=null;const g=new X_,v=f?.dispSrc||"/img/displace.png";try{h=g.load(v,_=>{_.minFilter=ti,_.magFilter=ti,_.wrapS=_.wrapT=rc,p.uniforms.uDispMap.value=_,p.uniforms.uUseDisp.value=1},void 0,()=>{p.uniforms.uUseDisp.value=0})}catch{p.uniforms.uUseDisp.value=0}return()=>{if(h)try{h.dispose()}catch{}}},[f]),ne.useEffect(()=>{if(!s.current)return;const p=s.current,h=performance.now(),g=p.uniforms.uProgress.value,v=d?1:0,_=()=>{const x=performance.now(),E=Math.min(1,(x-h)/e);p.uniforms.uProgress.value=g+(v-g)*E,E<1&&requestAnimationFrame(_)};requestAnimationFrame(_)},[d,e]),ne.useEffect(()=>{const p=u.current;if(!p)return;const h=p.domElement,g=!!(d||f);h.style.display=g?"block":"none",h.style.pointerEvents="none"},[d,f]),ne.useEffect(()=>{if(!s.current)return;const p=s.current;let h=null;const g=()=>{const v=p.uniforms.uProgress.value;try{window.dispatchEvent(new CustomEvent("shader-progress",{detail:{progress:v}}))}catch{}h=requestAnimationFrame(g)};return h=requestAnimationFrame(g),()=>{h&&cancelAnimationFrame(h)}},[a]),ln.jsx("div",{ref:i,className:"shader-transition",style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:99999}})}function rC(){const{end:a}=ip();return ne.useEffect(()=>{const e=u=>{const f=window.history[u];return function(){const d=f.apply(this,arguments),p=new Event("locationchange");return window.dispatchEvent(p),d}},i=window.history.pushState,s=window.history.replaceState;window.history.pushState=e("pushState"),window.history.replaceState=e("replaceState");const l=()=>{a(600)};return window.addEventListener("popstate",l),window.addEventListener("locationchange",l),()=>{window.history.pushState=i,window.history.replaceState=s,window.removeEventListener("popstate",l),window.removeEventListener("locationchange",l)}},[]),null}const sC=ne.createContext(null);function oC({children:a}){const[e,i]=ne.useState("dark"),s={theme:e,setTheme:i};return ln.jsx(sC.Provider,{value:s,children:a})}const lC=ne.lazy(()=>al(()=>import("./Home-DCjlu0RF.js"),__vite__mapDeps([0,1,2,3]))),g0=ne.lazy(()=>al(()=>import("./Work-BRttE5By.js"),__vite__mapDeps([4,5,1,2,6,7]))),uC=ne.lazy(()=>al(()=>import("./Info-CfJqvQx-.js"),[])),cC=ne.lazy(()=>al(()=>import("./Contact-DKJvU708.js"),[])),fC=ne.lazy(()=>al(()=>import("./Entry-CKzlhFL4.js"),__vite__mapDeps([8,5,1,2,6,9]))),dC=NE([{path:"/",element:ln.jsx(ne.Suspense,{fallback:ln.jsx("div",{}),children:ln.jsx(lC,{})})},{path:"/work",element:ln.jsx(ne.Suspense,{fallback:ln.jsx("div",{}),children:ln.jsx(g0,{})})},{path:"/work/:title",element:ln.jsx(ne.Suspense,{fallback:ln.jsx(g0,{}),children:ln.jsx(fC,{})})},{path:"/info",element:ln.jsx(ne.Suspense,{fallback:ln.jsx("div",{}),children:ln.jsx(uC,{})})},{path:"/contact",element:ln.jsx(ne.Suspense,{fallback:ln.jsx("div",{}),children:ln.jsx(cC,{})})}]),hC=PS.createRoot(document.getElementById("root"));hC.render(ln.jsx(_0.StrictMode,{children:ln.jsx(oC,{children:ln.jsxs(YE,{children:[ln.jsx(pC,{}),ln.jsx(rC,{}),ln.jsx(qE,{router:dC})]})})}));function pC(){const{active:a,duration:e}=ip();return ln.jsx(aC,{active:a,duration:e})}export{k0 as L,ki as M,gy as O,hl as P,_0 as R,db as S,qt as V,iC as W,al as _,ip as a,mC as b,Br as c,Ma as d,v0 as g,ln as j,ne as r,XM as u};
