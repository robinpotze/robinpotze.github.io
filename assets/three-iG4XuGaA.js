import"./router_motion-CiPdkZaX.js";import{r as nx,a as ix,g as ax}from"./react-gH-7aFTg.js";var Mf={exports:{}},uo={},yf={exports:{}},Ef={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function rx(){return Tg||(Tg=1,(function(o){function e(O,Q){var W=O.length;O.push(Q);t:for(;0<W;){var gt=W-1>>>1,xt=O[gt];if(0<l(xt,Q))O[gt]=Q,O[W]=xt,W=gt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Q=O[0],W=O.pop();if(W!==Q){O[0]=W;t:for(var gt=0,xt=O.length,Ut=xt>>>1;gt<Ut;){var zt=2*(gt+1)-1,Ht=O[zt],at=zt+1,St=O[at];if(0>l(Ht,W))at<xt&&0>l(St,Ht)?(O[gt]=St,O[at]=W,gt=at):(O[gt]=Ht,O[zt]=W,gt=zt);else if(at<xt&&0>l(St,W))O[gt]=St,O[at]=W,gt=at;else break t}}return Q}function l(O,Q){var W=O.sortIndex-Q.sortIndex;return W!==0?W:O.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,S=3,y=!1,A=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var Q=i(m);Q!==null;){if(Q.callback===null)r(m);else if(Q.startTime<=O)r(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=i(m)}}function Z(O){if(C=!1,U(O),!A)if(i(p)!==null)A=!0,I||(I=!0,st());else{var Q=i(m);Q!==null&&pt(Z,Q.startTime-O)}}var I=!1,F=-1,q=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<q)}function H(){if(M=!1,I){var O=o.unstable_now();w=O;var Q=!0;try{t:{A=!1,C&&(C=!1,B(F),F=-1),y=!0;var W=S;try{e:{for(U(O),v=i(p);v!==null&&!(v.expirationTime>O&&R());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,S=v.priorityLevel;var xt=gt(v.expirationTime<=O);if(O=o.unstable_now(),typeof xt=="function"){v.callback=xt,U(O),Q=!0;break e}v===i(p)&&r(p),U(O)}else r(p);v=i(p)}if(v!==null)Q=!0;else{var Ut=i(m);Ut!==null&&pt(Z,Ut.startTime-O),Q=!1}}break t}finally{v=null,S=W,y=!1}Q=void 0}}finally{Q?st():I=!1}}}var st;if(typeof N=="function")st=function(){N(H)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ct=it.port2;it.port1.onmessage=H,st=function(){ct.postMessage(null)}}else st=function(){_(H,0)};function pt(O,Q){F=_(function(){O(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var W=S;S=Q;try{return O()}finally{S=W}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=S;S=O;try{return Q()}finally{S=W}},o.unstable_scheduleCallback=function(O,Q,W){var gt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?gt+W:gt):W=gt,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=W+xt,O={id:g++,callback:Q,priorityLevel:O,startTime:W,expirationTime:xt,sortIndex:-1},W>gt?(O.sortIndex=W,e(m,O),i(p)===null&&O===i(m)&&(C?(B(F),F=-1):C=!0,pt(Z,W-gt))):(O.sortIndex=xt,e(p,O),A||y||(A=!0,I||(I=!0,st()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var Q=S;return function(){var W=S;S=Q;try{return O.apply(this,arguments)}finally{S=W}}}})(Ef)),Ef}var bg;function sx(){return bg||(bg=1,yf.exports=rx()),yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function ox(){if(Ag)return uo;Ag=1;var o=sx(),e=nx(),i=ix();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,s=f;break}if(E===s){x=!0,s=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,s=c;break}if(E===s){x=!0,s=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case Z:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case N:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var pt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},gt=[],xt=-1;function Ut(t){return{current:t}}function zt(t){0>xt||(t.current=gt[xt],gt[xt]=null,xt--)}function Ht(t,n){xt++,gt[xt]=t.current,t.current=n}var at=Ut(null),St=Ut(null),Lt=Ut(null),Et=Ut(null);function Xt(t,n){switch(Ht(Lt,n),Ht(St,t),Ht(at,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Jm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Jm(n),t=$m(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}zt(at),Ht(at,t)}function oe(){zt(at),zt(St),zt(Lt)}function Zt(t){t.memoizedState!==null&&Ht(Et,t);var n=at.current,a=$m(n,t.type);n!==a&&(Ht(St,t),Ht(at,a))}function ze(t){St.current===t&&(zt(at),zt(St)),Et.current===t&&(zt(Et),ro._currentValue=W)}var Ne=Object.prototype.hasOwnProperty,le=o.unstable_scheduleCallback,P=o.unstable_cancelCallback,Cn=o.unstable_shouldYield,de=o.unstable_requestPaint,ee=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,Ae=o.unstable_ImmediatePriority,It=o.unstable_UserBlockingPriority,D=o.unstable_NormalPriority,T=o.unstable_LowPriority,j=o.unstable_IdlePriority,ft=o.log,mt=o.unstable_setDisableYieldValue,lt=null,Ct=null;function Mt(t){if(typeof ft=="function"&&mt(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(lt,t)}catch{}}var Bt=Math.clz32?Math.clz32:Ot,jt=Math.log,vt=Math.LN2;function Ot(t){return t>>>=0,t===0?32:31-(jt(t)/vt|0)|0}var qt=256,Kt=4194304;function wt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function re(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=wt(s):(x&=E,x!==0?c=wt(x):a||(a=E&~t,a!==0&&(c=wt(a))))):(E=s&~f,E!==0?c=wt(E):x!==0?c=wt(x):a||(a=s&~t,a!==0&&(c=wt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Re(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G(){var t=qt;return qt<<=1,(qt&4194048)===0&&(qt=256),t}function At(){var t=Kt;return Kt<<=1,(Kt&62914560)===0&&(Kt=4194304),t}function rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ht(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Dt(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,K=t.hiddenUpdates;for(a=x&~a;0<a;){var ot=31-Bt(a),dt=1<<ot;E[ot]=0,L[ot]=-1;var J=K[ot];if(J!==null)for(K[ot]=null,ot=0;ot<J.length;ot++){var $=J[ot];$!==null&&($.lane&=-536870913)}a&=~dt}s!==0&&Rt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Rt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Bt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function ne(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Bt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ie(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Qe(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xe(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:vg(t.type))}function Bn(t,n){var a=Q.p;try{return Q.p=t,n()}finally{Q.p=a}}var cn=Math.random().toString(36).slice(2),nn="__reactFiber$"+cn,mn="__reactProps$"+cn,wn="__reactContainer$"+cn,Ba="__reactEvents$"+cn,Co="__reactListeners$"+cn,wo="__reactHandles$"+cn,za="__reactResources$"+cn,$i="__reactMarker$"+cn;function ta(t){delete t[nn],delete t[mn],delete t[Ba],delete t[Co],delete t[wo]}function Mi(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[wn]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=ig(t);t!==null;){if(a=t[nn])return a;t=ig(t)}return n}t=a,a=t.parentNode}return null}function yi(t){if(t=t[nn]||t[wn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ia(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ea(t){var n=t[za];return n||(n=t[za]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function je(t){t[$i]=!0}var Do=new Set,Uo={};function Ei(t,n){b(t,n),b(t+"Capture",n)}function b(t,n){for(Uo[t]=n,t=0;t<n.length;t++)Do.add(n[t])}var X=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},et={};function k(t){return Ne.call(et,t)?!0:Ne.call(tt,t)?!1:X.test(t)?et[t]=!0:(tt[t]=!0,!1)}function _t(t,n,a){if(k(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function yt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Tt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Nt,Jt;function kt(t){if(Nt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Nt=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+t+Jt}var Gt=!1;function ue(t,n){if(!t||Gt)return"";Gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch($){var J=$}Reflect.construct(t,[],dt)}else{try{dt.call()}catch($){J=$}t.call(dt.prototype)}}else{try{throw Error()}catch($){J=$}(dt=t())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch($){if($&&J&&typeof $.stack=="string")return[$.stack,J.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var L=x.split(`
`),K=E.split(`
`);for(c=s=0;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;for(;c<K.length&&!K[c].includes("DetermineComponentFrameRoot");)c++;if(s===L.length||c===K.length)for(s=L.length-1,c=K.length-1;1<=s&&0<=c&&L[s]!==K[c];)c--;for(;1<=s&&0<=c;s--,c--)if(L[s]!==K[c]){if(s!==1||c!==1)do if(s--,c--,0>c||L[s]!==K[c]){var ot=`
`+L[s].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=s&&0<=c);break}}}finally{Gt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?kt(a):""}function Se(t){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return ue(t.type,!1);case 11:return ue(t.type.render,!1);case 1:return ue(t.type,!0);case 31:return kt("Activity");default:return""}}function Ve(t){try{var n="";do n+=Se(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function me(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wt(t){var n=me(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ke(t){t._valueTracker||(t._valueTracker=Wt(t))}function ve(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=me(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Sn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var na=/[\n"\\]/g;function Fe(t){return t.replace(na,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ti(t,n,a,s,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pe(n)):t.value!==""+pe(n)&&(t.value=""+pe(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Mn(t,x,pe(n)):a!=null?Mn(t,x,pe(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+pe(E):t.removeAttribute("name")}function Oe(t,n,a,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Mn(t,n,a){n==="number"&&Sn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function an(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function un(t,n,a){if(n!=null&&(n=""+pe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+pe(a):""}function gn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(pt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=pe(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function hi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||bi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function $h(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Jh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Jh(t,f,n[f])}function xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ev=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lo(t){return ev.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Sc=null;function Mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,vr=null;function td(t){var n=yi(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ti(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[mn]||null;if(!c)throw Error(r(90));Ti(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ve(s)}break t;case"textarea":un(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(t,!!a.multiple,n,!1)}}}var yc=!1;function ed(t,n,a){if(yc)return t(n,a);yc=!0;try{var s=t(n);return s}finally{if(yc=!1,(_r!==null||vr!==null)&&(_l(),_r&&(n=_r,t=vr,vr=_r=null,td(n),t)))for(n=0;n<t.length;n++)td(t[n])}}function vs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[mn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ec=!1;if(Ai)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{Ec=!1}var ia=null,Tc=null,No=null;function nd(){if(No)return No;var t,n=Tc,a=n.length,s,c="value"in ia?ia.value:ia.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return No=c.slice(t,1<s?1-s:void 0)}function Oo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Po(){return!0}function id(){return!1}function Dn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Po:id,this.isPropagationStopped=id,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=Dn(Fa),Ss=g({},Fa,{view:0,detail:0}),nv=Dn(Ss),bc,Ac,Ms,zo=g({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ms&&(Ms&&t.type==="mousemove"?(bc=t.screenX-Ms.screenX,Ac=t.screenY-Ms.screenY):Ac=bc=0,Ms=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),ad=Dn(zo),iv=g({},zo,{dataTransfer:0}),av=Dn(iv),rv=g({},Ss,{relatedTarget:0}),Rc=Dn(rv),sv=g({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=Dn(sv),lv=g({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cv=Dn(lv),uv=g({},Fa,{data:0}),rd=Dn(uv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=dv[t])?!!n[t]:!1}function Cc(){return pv}var mv=g({},Ss,{key:function(t){if(t.key){var n=fv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gv=Dn(mv),_v=g({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=Dn(_v),vv=g({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),xv=Dn(vv),Sv=g({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=Dn(Sv),yv=g({},zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=Dn(yv),Tv=g({},Fa,{newState:0,oldState:0}),bv=Dn(Tv),Av=[9,13,27,32],wc=Ai&&"CompositionEvent"in window,ys=null;Ai&&"documentMode"in document&&(ys=document.documentMode);var Rv=Ai&&"TextEvent"in window&&!ys,od=Ai&&(!wc||ys&&8<ys&&11>=ys),ld=" ",cd=!1;function ud(t,n){switch(t){case"keyup":return Av.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xr=!1;function Cv(t,n){switch(t){case"compositionend":return fd(n);case"keypress":return n.which!==32?null:(cd=!0,ld);case"textInput":return t=n.data,t===ld&&cd?null:t;default:return null}}function wv(t,n){if(xr)return t==="compositionend"||!wc&&ud(t,n)?(t=nd(),No=Tc=ia=null,xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return od&&n.locale!=="ko"?null:n.data;default:return null}}var Dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Dv[t.type]:n==="textarea"}function dd(t,n,a,s){_r?vr?vr.push(s):vr=[s]:_r=s,n=El(n,"onChange"),0<n.length&&(a=new Bo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Es=null,Ts=null;function Uv(t){Ym(t,0)}function Io(t){var n=Ia(t);if(ve(n))return t}function pd(t,n){if(t==="change")return n}var md=!1;if(Ai){var Dc;if(Ai){var Uc="oninput"in document;if(!Uc){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),Uc=typeof gd.oninput=="function"}Dc=Uc}else Dc=!1;md=Dc&&(!document.documentMode||9<document.documentMode)}function _d(){Es&&(Es.detachEvent("onpropertychange",vd),Ts=Es=null)}function vd(t){if(t.propertyName==="value"&&Io(Ts)){var n=[];dd(n,Ts,t,Mc(t)),ed(Uv,n)}}function Lv(t,n,a){t==="focusin"?(_d(),Es=n,Ts=a,Es.attachEvent("onpropertychange",vd)):t==="focusout"&&_d()}function Nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Io(Ts)}function Ov(t,n){if(t==="click")return Io(n)}function Pv(t,n){if(t==="input"||t==="change")return Io(n)}function Bv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var zn=typeof Object.is=="function"?Object.is:Bv;function bs(t,n){if(zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ne.call(n,c)||!zn(t[c],n[c]))return!1}return!0}function xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sd(t,n){var a=xd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xd(a)}}function Md(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Md(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function yd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Sn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Sn(t.document)}return n}function Lc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var zv=Ai&&"documentMode"in document&&11>=document.documentMode,Sr=null,Nc=null,As=null,Oc=!1;function Ed(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oc||Sr==null||Sr!==Sn(s)||(s=Sr,"selectionStart"in s&&Lc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),As&&bs(As,s)||(As=s,s=El(Nc,"onSelect"),0<s.length&&(n=new Bo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Sr)))}function Ha(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Mr={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Pc={},Td={};Ai&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Ga(t){if(Pc[t])return Pc[t];if(!Mr[t])return t;var n=Mr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Td)return Pc[t]=n[a];return t}var bd=Ga("animationend"),Ad=Ga("animationiteration"),Rd=Ga("animationstart"),Iv=Ga("transitionrun"),Fv=Ga("transitionstart"),Hv=Ga("transitioncancel"),Cd=Ga("transitionend"),wd=new Map,Bc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bc.push("scrollEnd");function ni(t,n){wd.set(t,n),Ei(n,[t])}var Dd=new WeakMap;function Yn(t,n){if(typeof t=="object"&&t!==null){var a=Dd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ve(n)},Dd.set(t,n),n)}return{value:t,source:n,stack:Ve(n)}}var Zn=[],yr=0,zc=0;function Fo(){for(var t=yr,n=zc=yr=0;n<t;){var a=Zn[n];Zn[n++]=null;var s=Zn[n];Zn[n++]=null;var c=Zn[n];Zn[n++]=null;var f=Zn[n];if(Zn[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&Ud(a,c,f)}}function Ho(t,n,a,s){Zn[yr++]=t,Zn[yr++]=n,Zn[yr++]=a,Zn[yr++]=s,zc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Ic(t,n,a,s){return Ho(t,n,a,s),Go(t)}function Er(t,n){return Ho(t,null,null,n),Go(t)}function Ud(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Bt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Go(t){if(50<js)throw js=0,ku=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Tr={};function Gv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,n,a,s){return new Gv(t,n,a,s)}function Fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ri(t,n){var a=t.alternate;return a===null?(a=In(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ld(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vo(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")Fc(t)&&(x=1);else if(typeof t=="string")x=X0(t,a,at.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=In(31,a,n,c),t.elementType=w,t.lanes=f,t;case A:return Va(a.children,c,f,n);case C:x=8,c|=24;break;case M:return t=In(12,a,n,c|2),t.elementType=M,t.lanes=f,t;case Z:return t=In(13,a,n,c),t.elementType=Z,t.lanes=f,t;case I:return t=In(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case N:x=10;break t;case B:x=9;break t;case U:x=11;break t;case F:x=14;break t;case q:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=In(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Va(t,n,a,s){return t=In(7,t,s,n),t.lanes=a,t}function Hc(t,n,a){return t=In(6,t,null,n),t.lanes=a,t}function Gc(t,n,a){return n=In(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var br=[],Ar=0,Xo=null,ko=0,Kn=[],Qn=0,Xa=null,Ci=1,wi="";function ka(t,n){br[Ar++]=ko,br[Ar++]=Xo,Xo=t,ko=n}function Nd(t,n,a){Kn[Qn++]=Ci,Kn[Qn++]=wi,Kn[Qn++]=Xa,Xa=t;var s=Ci;t=wi;var c=32-Bt(s)-1;s&=~(1<<c),a+=1;var f=32-Bt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ci=1<<32-Bt(n)+c|a<<c|s,wi=f+t}else Ci=1<<f|a<<c|s,wi=t}function Vc(t){t.return!==null&&(ka(t,1),Nd(t,1,0))}function Xc(t){for(;t===Xo;)Xo=br[--Ar],br[Ar]=null,ko=br[--Ar],br[Ar]=null;for(;t===Xa;)Xa=Kn[--Qn],Kn[Qn]=null,wi=Kn[--Qn],Kn[Qn]=null,Ci=Kn[--Qn],Kn[Qn]=null}var bn=null,We=null,Ee=!1,Wa=null,di=!1,kc=Error(r(519));function qa(t){var n=Error(r(418,""));throw ws(Yn(n,t)),kc}function Od(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[nn]=t,n[mn]=s,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<$s.length;a++)he($s[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Oe(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ke(n);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),gn(n,s.value,s.defaultValue,s.children),ke(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||jm(n.textContent,a)?(s.popover!=null&&(he("beforetoggle",n),he("toggle",n)),s.onScroll!=null&&he("scroll",n),s.onScrollEnd!=null&&he("scrollend",n),s.onClick!=null&&(n.onclick=Tl),n=!0):n=!1,n||qa(t)}function Pd(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 13:di=!1;return;case 27:case 3:di=!0;return;default:bn=bn.return}}function Rs(t){if(t!==bn)return!1;if(!Ee)return Pd(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||of(t.type,t.memoizedProps)),a=!a),a&&We&&qa(t),Pd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){We=ai(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}We=null}}else n===27?(n=We,xa(t.type)?(t=ff,ff=null,We=t):We=n):We=bn?ai(t.stateNode.nextSibling):null;return!0}function Cs(){We=bn=null,Ee=!1}function Bd(){var t=Wa;return t!==null&&(Nn===null?Nn=t:Nn.push.apply(Nn,t),Wa=null),t}function ws(t){Wa===null?Wa=[t]:Wa.push(t)}var Wc=Ut(null),Ya=null,Di=null;function aa(t,n,a){Ht(Wc,n._currentValue),n._currentValue=a}function Ui(t){t._currentValue=Wc.current,zt(Wc)}function qc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Yc(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var L=0;L<n.length;L++)if(E.context===n[L]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),qc(f.return,a,t),s||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),qc(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Ds(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;zn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===Et.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(ro):t=[ro])}c=c.return}t!==null&&Yc(n,t,a,s),n.flags|=262144}function Wo(t){for(t=t.firstContext;t!==null;){if(!zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Za(t){Ya=t,Di=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return zd(Ya,t)}function qo(t,n){return Ya===null&&Za(t),zd(t,n)}function zd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Di===null){if(t===null)throw Error(r(308));Di=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Di=Di.next=n;return a}var Vv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Xv=o.unstable_scheduleCallback,kv=o.unstable_NormalPriority,rn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zc(){return{controller:new Vv,data:new Map,refCount:0}}function Us(t){t.refCount--,t.refCount===0&&Xv(kv,function(){t.controller.abort()})}var Ls=null,Kc=0,Rr=0,Cr=null;function Wv(t,n){if(Ls===null){var a=Ls=[];Kc=0,Rr=ju(),Cr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Kc++,n.then(Id,Id),n}function Id(){if(--Kc===0&&Ls!==null){Cr!==null&&(Cr.status="fulfilled");var t=Ls;Ls=null,Rr=0,Cr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function qv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Fd=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Wv(t,n),Fd!==null&&Fd(t,n)};var Ka=Ut(null);function Qc(){var t=Ka.current;return t!==null?t:He.pooledCache}function Yo(t,n){n===null?Ht(Ka,Ka.current):Ht(Ka,n.pool)}function Hd(){var t=Qc();return t===null?null:{parent:rn._currentValue,pool:t}}var Ns=Error(r(460)),Gd=Error(r(474)),Zo=Error(r(542)),jc={then:function(){}};function Vd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ko(){}function Xd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ko,Ko),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wd(t),t;default:if(typeof n.status=="string")n.then(Ko,Ko);else{if(t=He,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wd(t),t}throw Os=n,Ns}}var Os=null;function kd(){if(Os===null)throw Error(r(459));var t=Os;return Os=null,t}function Wd(t){if(t===Ns||t===Zo)throw Error(r(483))}var ra=!1;function Jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $c(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Te&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Go(t),Ud(t,null,a),n}return Ho(t,s,n,a),Go(t)}function Ps(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ne(t,a)}}function tu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var eu=!1;function Bs(){if(eu){var t=Cr;if(t!==null)throw t}}function zs(t,n,a,s){eu=!1;var c=t.updateQueue;ra=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var L=E,K=L.next;L.next=null,x===null?f=K:x.next=K,x=L;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,E=ot.lastBaseUpdate,E!==x&&(E===null?ot.firstBaseUpdate=K:E.next=K,ot.lastBaseUpdate=L))}if(f!==null){var dt=c.baseState;x=0,ot=K=L=null,E=f;do{var J=E.lane&-536870913,$=J!==E.lane;if($?(_e&J)===J:(s&J)===J){J!==0&&J===Rr&&(eu=!0),ot!==null&&(ot=ot.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var $t=t,Yt=E;J=n;var De=a;switch(Yt.tag){case 1:if($t=Yt.payload,typeof $t=="function"){dt=$t.call(De,dt,J);break t}dt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=Yt.payload,J=typeof $t=="function"?$t.call(De,dt,J):$t,J==null)break t;dt=g({},dt,J);break t;case 2:ra=!0}}J=E.callback,J!==null&&(t.flags|=64,$&&(t.flags|=8192),$=c.callbacks,$===null?c.callbacks=[J]:$.push(J))}else $={lane:J,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ot===null?(K=ot=$,L=dt):ot=ot.next=$,x|=J;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;$=E,E=$.next,$.next=null,c.lastBaseUpdate=$,c.shared.pending=null}}while(!0);ot===null&&(L=dt),c.baseState=L,c.firstBaseUpdate=K,c.lastBaseUpdate=ot,f===null&&(c.shared.lanes=0),ma|=x,t.lanes=x,t.memoizedState=dt}}function qd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Yd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qd(a[t],n)}var wr=Ut(null),Qo=Ut(0);function Zd(t,n){t=Ii,Ht(Qo,t),Ht(wr,n),Ii=t|n.baseLanes}function nu(){Ht(Qo,Ii),Ht(wr,wr.current)}function iu(){Ii=Qo.current,zt(wr),zt(Qo)}var la=0,se=null,Ce=null,Je=null,jo=!1,Dr=!1,Qa=!1,Jo=0,Is=0,Ur=null,Yv=0;function Ye(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!zn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return la=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Up:Lp,Qa=!1,f=a(s,c),Qa=!1,Dr&&(f=Qd(n,a,s,c)),Kd(t),f}function Kd(t){O.H=al;var n=Ce!==null&&Ce.next!==null;if(la=0,Je=Ce=se=null,jo=!1,Is=0,Ur=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Wo(t)&&(fn=!0))}function Qd(t,n,a,s){se=t;var c=0;do{if(Dr&&(Ur=null),Is=0,Dr=!1,25<=c)throw Error(r(301));if(c+=1,Je=Ce=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=t0,f=n(a,s)}while(Dr);return f}function Zv(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Fs(n):n,t=t.useState()[0],(Ce!==null?Ce.memoizedState:null)!==t&&(se.flags|=1024),n}function su(){var t=Jo!==0;return Jo=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(jo){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}jo=!1}la=0,Je=Ce=se=null,Dr=!1,Is=Jo=0,Ur=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?se.memoizedState=Je=t:Je=Je.next=t,Je}function $e(){if(Ce===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var n=Je===null?se.memoizedState:Je.next;if(n!==null)Je=n,Ce=t;else{if(t===null)throw se.alternate===null?Error(r(467)):Error(r(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Je===null?se.memoizedState=Je=t:Je=Je.next=t}return Je}function cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fs(t){var n=Is;return Is+=1,Ur===null&&(Ur=[]),t=Xd(Ur,t,n),n=se,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Up:Lp),t}function $o(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fs(t);if(t.$$typeof===N)return yn(t)}throw Error(r(438,String(t)))}function uu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=cu(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Li(t,n){return typeof n=="function"?n(t):n}function tl(t){var n=$e();return fu(n,Ce,t)}function fu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,L=null,K=n,ot=!1;do{var dt=K.lane&-536870913;if(dt!==K.lane?(_e&dt)===dt:(la&dt)===dt){var J=K.revertLane;if(J===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),dt===Rr&&(ot=!0);else if((la&J)===J){K=K.next,J===Rr&&(ot=!0);continue}else dt={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(E=L=dt,x=f):L=L.next=dt,se.lanes|=J,ma|=J;dt=K.action,Qa&&a(f,dt),f=K.hasEagerState?K.eagerState:a(f,dt)}else J={lane:dt,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(E=L=J,x=f):L=L.next=J,se.lanes|=dt,ma|=dt;K=K.next}while(K!==null&&K!==n);if(L===null?x=f:L.next=E,!zn(f,t.memoizedState)&&(fn=!0,ot&&(a=Cr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=L,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function hu(t){var n=$e(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function jd(t,n,a){var s=se,c=$e(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!zn((Ce||c).memoizedState,a);x&&(c.memoizedState=a,fn=!0),c=c.queue;var E=tp.bind(null,s,c,t);if(Hs(2048,8,E,[t]),c.getSnapshot!==n||x||Je!==null&&Je.memoizedState.tag&1){if(s.flags|=2048,Lr(9,el(),$d.bind(null,s,c,a,n),null),He===null)throw Error(r(349));f||(la&124)!==0||Jd(s,n,a)}return a}function Jd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=cu(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function $d(t,n,a,s){n.value=a,n.getSnapshot=s,ep(n)&&np(t)}function tp(t,n,a){return a(function(){ep(n)&&np(t)})}function ep(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!zn(t,a)}catch{return!0}}function np(t){var n=Er(t,2);n!==null&&Xn(n,t,2)}function du(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),Qa){Mt(!0);try{a()}finally{Mt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},n}function ip(t,n,a,s){return t.baseState=a,fu(t,Ce,typeof s=="function"?s:Li)}function Kv(t,n,a,s,c){if(il(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,ap(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ap(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var E=a(c,s),L=O.S;L!==null&&L(x,E),rp(t,n,E)}catch(K){pu(t,n,K)}finally{O.T=f}}else try{f=a(c,s),rp(t,n,f)}catch(K){pu(t,n,K)}}function rp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){sp(t,n,s)},function(s){return pu(t,n,s)}):sp(t,n,a)}function sp(t,n,a){n.status="fulfilled",n.value=a,op(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ap(t,a)))}function pu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,op(n),n=n.next;while(n!==s)}t.action=null}function op(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function lp(t,n){return n}function cp(t,n){if(Ee){var a=He.formState;if(a!==null){t:{var s=se;if(Ee){if(We){e:{for(var c=We,f=di;c.nodeType!==8;){if(!f){c=null;break e}if(c=ai(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=ai(c.nextSibling),s=c.data==="F!";break t}}qa(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lp,lastRenderedState:n},a.queue=s,a=Cp.bind(null,se,s),s.dispatch=a,s=du(!1),f=xu.bind(null,se,!1,s.queue),s=Un(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Kv.bind(null,se,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function up(t){var n=$e();return fp(n,Ce,t)}function fp(t,n,a){if(n=fu(t,n,lp)[0],t=tl(Li)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Fs(n)}catch(x){throw x===Ns?Zo:x}else s=n;n=$e();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Lr(9,el(),Qv.bind(null,c,a),null)),[s,f,t]}function Qv(t,n){t.action=n}function hp(t){var n=$e(),a=Ce;if(a!==null)return fp(n,a,t);$e(),n=n.memoizedState,a=$e();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Lr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=se.updateQueue,n===null&&(n=cu(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function el(){return{destroy:void 0,resource:void 0}}function dp(){return $e().memoizedState}function nl(t,n,a,s){var c=Un();s=s===void 0?null:s,se.flags|=t,c.memoizedState=Lr(1|n,el(),a,s)}function Hs(t,n,a,s){var c=$e();s=s===void 0?null:s;var f=c.memoizedState.inst;Ce!==null&&s!==null&&au(s,Ce.memoizedState.deps)?c.memoizedState=Lr(n,f,a,s):(se.flags|=t,c.memoizedState=Lr(1|n,f,a,s))}function pp(t,n){nl(8390656,8,t,n)}function mp(t,n){Hs(2048,8,t,n)}function gp(t,n){return Hs(4,2,t,n)}function _p(t,n){return Hs(4,4,t,n)}function vp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function xp(t,n,a){a=a!=null?a.concat([t]):null,Hs(4,4,vp.bind(null,n,t),a)}function mu(){}function Sp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Mp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),Qa){Mt(!0);try{t()}finally{Mt(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||(la&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Tm(),se.lanes|=t,ma|=t,a)}function yp(t,n,a,s){return zn(a,n)?a:wr.current!==null?(t=gu(t,a,s),zn(t,n)||(fn=!0),t):(la&42)===0?(fn=!0,t.memoizedState=a):(t=Tm(),se.lanes|=t,ma|=t,n)}function Ep(t,n,a,s,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var x=O.T,E={};O.T=E,xu(t,!1,n,a);try{var L=c(),K=O.S;if(K!==null&&K(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ot=qv(L,s);Gs(t,n,ot,Vn(t))}else Gs(t,n,s,Vn(t))}catch(dt){Gs(t,n,{then:function(){},status:"rejected",reason:dt},Vn())}finally{Q.p=f,O.T=x}}function jv(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Tp(t).queue;Ep(t,c,n,W,a===null?jv:function(){return bp(t),a(s)})}function Tp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function bp(t){var n=Tp(t).next.queue;Gs(t,n,{},Vn())}function vu(){return yn(ro)}function Ap(){return $e().memoizedState}function Rp(){return $e().memoizedState}function Jv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Vn();t=sa(a);var s=oa(n,t,a);s!==null&&(Xn(s,n,a),Ps(s,n,a)),n={cache:Zc()},t.payload=n;return}n=n.return}}function $v(t,n,a){var s=Vn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},il(t)?wp(n,a):(a=Ic(t,n,a,s),a!==null&&(Xn(a,t,s),Dp(a,n,s)))}function Cp(t,n,a){var s=Vn();Gs(t,n,a,s)}function Gs(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(il(t))wp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,zn(E,x))return Ho(t,n,c,0),He===null&&Fo(),!1}catch{}finally{}if(a=Ic(t,n,c,s),a!==null)return Xn(a,t,s),Dp(a,n,s),!0}return!1}function xu(t,n,a,s){if(s={lane:2,revertLane:ju(),action:s,hasEagerState:!1,eagerState:null,next:null},il(t)){if(n)throw Error(r(479))}else n=Ic(t,a,s,2),n!==null&&Xn(n,t,2)}function il(t){var n=t.alternate;return t===se||n!==null&&n===se}function wp(t,n){Dr=jo=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Dp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ne(t,a)}}var al={readContext:yn,use:$o,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye},Up={readContext:yn,use:$o,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:pp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,nl(4194308,4,vp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return nl(4194308,4,t,n)},useInsertionEffect:function(t,n){nl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var s=t();if(Qa){Mt(!0);try{t()}finally{Mt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Un();if(a!==void 0){var c=a(n);if(Qa){Mt(!0);try{a(n)}finally{Mt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=$v.bind(null,se,t),[s.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=du(t);var n=t.queue,a=Cp.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=Un();return gu(a,t,n)},useTransition:function(){var t=du(!1);return t=Ep.bind(null,se,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=se,c=Un();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(_e&124)!==0||Jd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,pp(tp.bind(null,s,f,t),[t]),s.flags|=2048,Lr(9,el(),$d.bind(null,s,f,a,n),null),a},useId:function(){var t=Un(),n=He.identifierPrefix;if(Ee){var a=wi,s=Ci;a=(s&~(1<<32-Bt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=Jo++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Yv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:vu,useFormState:cp,useActionState:cp,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:uu,useCacheRefresh:function(){return Un().memoizedState=Jv.bind(null,se)}},Lp={readContext:yn,use:$o,useCallback:Sp,useContext:yn,useEffect:mp,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:_p,useMemo:Mp,useReducer:tl,useRef:dp,useState:function(){return tl(Li)},useDebugValue:mu,useDeferredValue:function(t,n){var a=$e();return yp(a,Ce.memoizedState,t,n)},useTransition:function(){var t=tl(Li)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:Fs(t),n]},useSyncExternalStore:jd,useId:Ap,useHostTransitionStatus:vu,useFormState:up,useActionState:up,useOptimistic:function(t,n){var a=$e();return ip(a,Ce,t,n)},useMemoCache:uu,useCacheRefresh:Rp},t0={readContext:yn,use:$o,useCallback:Sp,useContext:yn,useEffect:mp,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:_p,useMemo:Mp,useReducer:hu,useRef:dp,useState:function(){return hu(Li)},useDebugValue:mu,useDeferredValue:function(t,n){var a=$e();return Ce===null?gu(a,t,n):yp(a,Ce.memoizedState,t,n)},useTransition:function(){var t=hu(Li)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:Fs(t),n]},useSyncExternalStore:jd,useId:Ap,useHostTransitionStatus:vu,useFormState:hp,useActionState:hp,useOptimistic:function(t,n){var a=$e();return Ce!==null?ip(a,Ce,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:uu,useCacheRefresh:Rp},Nr=null,Vs=0;function rl(t){var n=Vs;return Vs+=1,Nr===null&&(Nr=[]),Xd(Nr,t,n)}function Xs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function sl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Np(t){var n=t._init;return n(t._payload)}function Op(t){function n(V,z){if(t){var Y=V.deletions;Y===null?(V.deletions=[z],V.flags|=16):Y.push(z)}}function a(V,z){if(!t)return null;for(;z!==null;)n(V,z),z=z.sibling;return null}function s(V){for(var z=new Map;V!==null;)V.key!==null?z.set(V.key,V):z.set(V.index,V),V=V.sibling;return z}function c(V,z){return V=Ri(V,z),V.index=0,V.sibling=null,V}function f(V,z,Y){return V.index=Y,t?(Y=V.alternate,Y!==null?(Y=Y.index,Y<z?(V.flags|=67108866,z):Y):(V.flags|=67108866,z)):(V.flags|=1048576,z)}function x(V){return t&&V.alternate===null&&(V.flags|=67108866),V}function E(V,z,Y,ut){return z===null||z.tag!==6?(z=Hc(Y,V.mode,ut),z.return=V,z):(z=c(z,Y),z.return=V,z)}function L(V,z,Y,ut){var Pt=Y.type;return Pt===A?ot(V,z,Y.props.children,ut,Y.key):z!==null&&(z.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===q&&Np(Pt)===z.type)?(z=c(z,Y.props),Xs(z,Y),z.return=V,z):(z=Vo(Y.type,Y.key,Y.props,null,V.mode,ut),Xs(z,Y),z.return=V,z)}function K(V,z,Y,ut){return z===null||z.tag!==4||z.stateNode.containerInfo!==Y.containerInfo||z.stateNode.implementation!==Y.implementation?(z=Gc(Y,V.mode,ut),z.return=V,z):(z=c(z,Y.children||[]),z.return=V,z)}function ot(V,z,Y,ut,Pt){return z===null||z.tag!==7?(z=Va(Y,V.mode,ut,Pt),z.return=V,z):(z=c(z,Y),z.return=V,z)}function dt(V,z,Y){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Hc(""+z,V.mode,Y),z.return=V,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return Y=Vo(z.type,z.key,z.props,null,V.mode,Y),Xs(Y,z),Y.return=V,Y;case y:return z=Gc(z,V.mode,Y),z.return=V,z;case q:var ut=z._init;return z=ut(z._payload),dt(V,z,Y)}if(pt(z)||st(z))return z=Va(z,V.mode,Y,null),z.return=V,z;if(typeof z.then=="function")return dt(V,rl(z),Y);if(z.$$typeof===N)return dt(V,qo(V,z),Y);sl(V,z)}return null}function J(V,z,Y,ut){var Pt=z!==null?z.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Pt!==null?null:E(V,z,""+Y,ut);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return Y.key===Pt?L(V,z,Y,ut):null;case y:return Y.key===Pt?K(V,z,Y,ut):null;case q:return Pt=Y._init,Y=Pt(Y._payload),J(V,z,Y,ut)}if(pt(Y)||st(Y))return Pt!==null?null:ot(V,z,Y,ut,null);if(typeof Y.then=="function")return J(V,z,rl(Y),ut);if(Y.$$typeof===N)return J(V,z,qo(V,Y),ut);sl(V,Y)}return null}function $(V,z,Y,ut,Pt){if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return V=V.get(Y)||null,E(z,V,""+ut,Pt);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case S:return V=V.get(ut.key===null?Y:ut.key)||null,L(z,V,ut,Pt);case y:return V=V.get(ut.key===null?Y:ut.key)||null,K(z,V,ut,Pt);case q:var ce=ut._init;return ut=ce(ut._payload),$(V,z,Y,ut,Pt)}if(pt(ut)||st(ut))return V=V.get(Y)||null,ot(z,V,ut,Pt,null);if(typeof ut.then=="function")return $(V,z,Y,rl(ut),Pt);if(ut.$$typeof===N)return $(V,z,Y,qo(z,ut),Pt);sl(z,ut)}return null}function $t(V,z,Y,ut){for(var Pt=null,ce=null,Ft=z,Qt=z=0,dn=null;Ft!==null&&Qt<Y.length;Qt++){Ft.index>Qt?(dn=Ft,Ft=null):dn=Ft.sibling;var Me=J(V,Ft,Y[Qt],ut);if(Me===null){Ft===null&&(Ft=dn);break}t&&Ft&&Me.alternate===null&&n(V,Ft),z=f(Me,z,Qt),ce===null?Pt=Me:ce.sibling=Me,ce=Me,Ft=dn}if(Qt===Y.length)return a(V,Ft),Ee&&ka(V,Qt),Pt;if(Ft===null){for(;Qt<Y.length;Qt++)Ft=dt(V,Y[Qt],ut),Ft!==null&&(z=f(Ft,z,Qt),ce===null?Pt=Ft:ce.sibling=Ft,ce=Ft);return Ee&&ka(V,Qt),Pt}for(Ft=s(Ft);Qt<Y.length;Qt++)dn=$(Ft,V,Qt,Y[Qt],ut),dn!==null&&(t&&dn.alternate!==null&&Ft.delete(dn.key===null?Qt:dn.key),z=f(dn,z,Qt),ce===null?Pt=dn:ce.sibling=dn,ce=dn);return t&&Ft.forEach(function(Ta){return n(V,Ta)}),Ee&&ka(V,Qt),Pt}function Yt(V,z,Y,ut){if(Y==null)throw Error(r(151));for(var Pt=null,ce=null,Ft=z,Qt=z=0,dn=null,Me=Y.next();Ft!==null&&!Me.done;Qt++,Me=Y.next()){Ft.index>Qt?(dn=Ft,Ft=null):dn=Ft.sibling;var Ta=J(V,Ft,Me.value,ut);if(Ta===null){Ft===null&&(Ft=dn);break}t&&Ft&&Ta.alternate===null&&n(V,Ft),z=f(Ta,z,Qt),ce===null?Pt=Ta:ce.sibling=Ta,ce=Ta,Ft=dn}if(Me.done)return a(V,Ft),Ee&&ka(V,Qt),Pt;if(Ft===null){for(;!Me.done;Qt++,Me=Y.next())Me=dt(V,Me.value,ut),Me!==null&&(z=f(Me,z,Qt),ce===null?Pt=Me:ce.sibling=Me,ce=Me);return Ee&&ka(V,Qt),Pt}for(Ft=s(Ft);!Me.done;Qt++,Me=Y.next())Me=$(Ft,V,Qt,Me.value,ut),Me!==null&&(t&&Me.alternate!==null&&Ft.delete(Me.key===null?Qt:Me.key),z=f(Me,z,Qt),ce===null?Pt=Me:ce.sibling=Me,ce=Me);return t&&Ft.forEach(function(ex){return n(V,ex)}),Ee&&ka(V,Qt),Pt}function De(V,z,Y,ut){if(typeof Y=="object"&&Y!==null&&Y.type===A&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:t:{for(var Pt=Y.key;z!==null;){if(z.key===Pt){if(Pt=Y.type,Pt===A){if(z.tag===7){a(V,z.sibling),ut=c(z,Y.props.children),ut.return=V,V=ut;break t}}else if(z.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===q&&Np(Pt)===z.type){a(V,z.sibling),ut=c(z,Y.props),Xs(ut,Y),ut.return=V,V=ut;break t}a(V,z);break}else n(V,z);z=z.sibling}Y.type===A?(ut=Va(Y.props.children,V.mode,ut,Y.key),ut.return=V,V=ut):(ut=Vo(Y.type,Y.key,Y.props,null,V.mode,ut),Xs(ut,Y),ut.return=V,V=ut)}return x(V);case y:t:{for(Pt=Y.key;z!==null;){if(z.key===Pt)if(z.tag===4&&z.stateNode.containerInfo===Y.containerInfo&&z.stateNode.implementation===Y.implementation){a(V,z.sibling),ut=c(z,Y.children||[]),ut.return=V,V=ut;break t}else{a(V,z);break}else n(V,z);z=z.sibling}ut=Gc(Y,V.mode,ut),ut.return=V,V=ut}return x(V);case q:return Pt=Y._init,Y=Pt(Y._payload),De(V,z,Y,ut)}if(pt(Y))return $t(V,z,Y,ut);if(st(Y)){if(Pt=st(Y),typeof Pt!="function")throw Error(r(150));return Y=Pt.call(Y),Yt(V,z,Y,ut)}if(typeof Y.then=="function")return De(V,z,rl(Y),ut);if(Y.$$typeof===N)return De(V,z,qo(V,Y),ut);sl(V,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,z!==null&&z.tag===6?(a(V,z.sibling),ut=c(z,Y),ut.return=V,V=ut):(a(V,z),ut=Hc(Y,V.mode,ut),ut.return=V,V=ut),x(V)):a(V,z)}return function(V,z,Y,ut){try{Vs=0;var Pt=De(V,z,Y,ut);return Nr=null,Pt}catch(Ft){if(Ft===Ns||Ft===Zo)throw Ft;var ce=In(29,Ft,null,V.mode);return ce.lanes=ut,ce.return=V,ce}finally{}}}var Or=Op(!0),Pp=Op(!1),jn=Ut(null),pi=null;function ca(t){var n=t.alternate;Ht(sn,sn.current&1),Ht(jn,t),pi===null&&(n===null||wr.current!==null||n.memoizedState!==null)&&(pi=t)}function Bp(t){if(t.tag===22){if(Ht(sn,sn.current),Ht(jn,t),pi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(pi=t)}}else ua()}function ua(){Ht(sn,sn.current),Ht(jn,jn.current)}function Ni(t){zt(jn),pi===t&&(pi=null),zt(sn)}var sn=Ut(0);function ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||uf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Su(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Vn(),c=sa(s);c.payload=n,a!=null&&(c.callback=a),n=oa(t,c,s),n!==null&&(Xn(n,t,s),Ps(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Vn(),c=sa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=oa(t,c,s),n!==null&&(Xn(n,t,s),Ps(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Vn(),s=sa(a);s.tag=2,n!=null&&(s.callback=n),n=oa(t,s,a),n!==null&&(Xn(n,t,a),Ps(n,t,a))}};function zp(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!bs(a,s)||!bs(c,f):!0}function Ip(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Mu.enqueueReplaceState(n,n.state,null)}function ja(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Fp(t){ll(t)}function Hp(t){console.error(t)}function Gp(t){ll(t)}function cl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Vp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function yu(t,n,a){return a=sa(a),a.tag=3,a.payload={element:null},a.callback=function(){cl(t,n)},a}function Xp(t){return t=sa(t),t.tag=3,t}function kp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Vp(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Vp(n,a,s),typeof c!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function e0(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ds(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 13:return pi===null?qu():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Zu(t,s,c)),!1;case 22:return a.flags|=65536,s===jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Zu(t,s,c)),!1}throw Error(r(435,a.tag))}return Zu(t,s,c),qu(),!1}if(Ee)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==kc&&(t=Error(r(422),{cause:s}),ws(Yn(t,a)))):(s!==kc&&(n=Error(r(423),{cause:s}),ws(Yn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Yn(s,a),c=yu(t.stateNode,s,c),tu(t,c),qe!==4&&(qe=2)),!1;var f=Error(r(520),{cause:s});if(f=Yn(f,a),Qs===null?Qs=[f]:Qs.push(f),qe!==4&&(qe=2),n===null)return!0;s=Yn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=yu(a.stateNode,s,t),tu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ga===null||!ga.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Xp(c),kp(c,t,a,s),tu(a,c),!1}a=a.return}while(a!==null);return!1}var Wp=Error(r(461)),fn=!1;function _n(t,n,a,s){n.child=t===null?Pp(n,null,a,s):Or(n,t.child,a,s)}function qp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return Za(n),s=ru(t,n,a,x,f,c),E=su(),t!==null&&!fn?(ou(t,n,c),Oi(t,n,c)):(Ee&&E&&Vc(n),n.flags|=1,_n(t,n,s,c),n.child)}function Yp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Fc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Zp(t,n,f,s,c)):(t=Vo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Du(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:bs,a(x,s)&&t.ref===n.ref)return Oi(t,n,c)}return n.flags|=1,t=Ri(f,s),t.ref=n.ref,t.return=n,n.child=t}function Zp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(bs(f,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=f,Du(t,c))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,Oi(t,n,c)}return Eu(t,n,a,s,c)}function Kp(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Qp(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yo(n,f!==null?f.cachePool:null),f!==null?Zd(n,f):nu(),Bp(n);else return n.lanes=n.childLanes=536870912,Qp(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Yo(n,f.cachePool),Zd(n,f),ua(),n.memoizedState=null):(t!==null&&Yo(n,null),nu(),ua());return _n(t,n,c,a),n.child}function Qp(t,n,a,s){var c=Qc();return c=c===null?null:{parent:rn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Yo(n,null),nu(),Bp(n),t!==null&&Ds(t,n,s,!0),null}function ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Eu(t,n,a,s,c){return Za(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!fn?(ou(t,n,c),Oi(t,n,c)):(Ee&&s&&Vc(n),n.flags|=1,_n(t,n,a,c),n.child)}function jp(t,n,a,s,c,f){return Za(n),n.updateQueue=null,a=Qd(n,s,a,c),Kd(t),s=su(),t!==null&&!fn?(ou(t,n,f),Oi(t,n,f)):(Ee&&s&&Vc(n),n.flags|=1,_n(t,n,a,f),n.child)}function Jp(t,n,a,s,c){if(Za(n),n.stateNode===null){var f=Tr,x=a.contextType;typeof x=="object"&&x!==null&&(f=yn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Jc(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?yn(x):Tr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Su(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Mu.enqueueReplaceState(f,f.state,null),zs(n,s,f,c),Bs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,L=ja(a,E);f.props=L;var K=f.context,ot=a.contextType;x=Tr,typeof ot=="object"&&ot!==null&&(x=yn(ot));var dt=a.getDerivedStateFromProps;ot=typeof dt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ot||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||K!==x)&&Ip(n,f,s,x),ra=!1;var J=n.memoizedState;f.state=J,zs(n,s,f,c),Bs(),K=n.memoizedState,E||J!==K||ra?(typeof dt=="function"&&(Su(n,a,dt,s),K=n.memoizedState),(L=ra||zp(n,a,L,s,J,K,x))?(ot||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=K),f.props=s,f.state=K,f.context=x,s=L):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,$c(t,n),x=n.memoizedProps,ot=ja(a,x),f.props=ot,dt=n.pendingProps,J=f.context,K=a.contextType,L=Tr,typeof K=="object"&&K!==null&&(L=yn(K)),E=a.getDerivedStateFromProps,(K=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==dt||J!==L)&&Ip(n,f,s,L),ra=!1,J=n.memoizedState,f.state=J,zs(n,s,f,c),Bs();var $=n.memoizedState;x!==dt||J!==$||ra||t!==null&&t.dependencies!==null&&Wo(t.dependencies)?(typeof E=="function"&&(Su(n,a,E,s),$=n.memoizedState),(ot=ra||zp(n,a,ot,s,J,$,L)||t!==null&&t.dependencies!==null&&Wo(t.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,$,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,$,L)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=L,s=ot):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ul(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Or(n,t.child,null,c),n.child=Or(n,null,a,c)):_n(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Oi(t,n,c),t}function $p(t,n,a,s){return Cs(),n.flags|=256,_n(t,n,a,s),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bu(t){return{baseLanes:t,cachePool:Hd()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function tm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(c?ca(n):ua(),Ee){var E=We,L;if(L=E){t:{for(L=E,E=di;L.nodeType!==8;){if(!E){E=null;break t}if(L=ai(L.nextSibling),L===null){E=null;break t}}E=L}E!==null?(n.memoizedState={dehydrated:E,treeContext:Xa!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},L=In(18,null,null,0),L.stateNode=E,L.return=n,n.child=L,bn=n,We=null,L=!0):L=!1}L||qa(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return uf(E)?n.lanes=32:n.lanes=536870912,null;Ni(n)}return E=s.children,s=s.fallback,c?(ua(),c=n.mode,E=fl({mode:"hidden",children:E},c),s=Va(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(t,x,a),n.memoizedState=Tu,s):(ca(n),Ru(n,E))}if(L=t.memoizedState,L!==null&&(E=L.dehydrated,E!==null)){if(f)n.flags&256?(ca(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),c=s.fallback,E=n.mode,s=fl({mode:"visible",children:s.children},E),c=Va(c,E,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Or(n,t.child,null,a),s=n.child,s.memoizedState=bu(a),s.childLanes=Au(t,x,a),n.memoizedState=Tu,n=c);else if(ca(n),uf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var K=x.dgst;x=K,s=Error(r(419)),s.stack="",s.digest=x,ws({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(fn||Ds(t,n,a,!1),x=(a&t.childLanes)!==0,fn||x){if(x=He,x!==null&&(s=a&-a,s=(s&42)!==0?1:Ie(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==L.retryLane))throw L.retryLane=s,Er(t,s),Xn(x,t,s),Wp;E.data==="$?"||qu(),n=Cu(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=L.treeContext,We=ai(E.nextSibling),bn=n,Ee=!0,Wa=null,di=!1,t!==null&&(Kn[Qn++]=Ci,Kn[Qn++]=wi,Kn[Qn++]=Xa,Ci=t.id,wi=t.overflow,Xa=n),n=Ru(n,s.children),n.flags|=4096);return n}return c?(ua(),c=s.fallback,E=n.mode,L=t.child,K=L.sibling,s=Ri(L,{mode:"hidden",children:s.children}),s.subtreeFlags=L.subtreeFlags&65011712,K!==null?c=Ri(K,c):(c=Va(c,E,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,E=t.child.memoizedState,E===null?E=bu(a):(L=E.cachePool,L!==null?(K=rn._currentValue,L=L.parent!==K?{parent:K,pool:K}:L):L=Hd(),E={baseLanes:E.baseLanes|a,cachePool:L}),c.memoizedState=E,c.childLanes=Au(t,x,a),n.memoizedState=Tu,s):(ca(n),a=t.child,t=a.sibling,a=Ri(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Ru(t,n){return n=fl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function fl(t,n){return t=In(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Cu(t,n,a){return Or(n,t.child,null,a),t=Ru(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function em(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),qc(t.return,n,a)}function wu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function nm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(_n(t,n,s.children,a),s=sn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&em(t,a,n);else if(t.tag===19)em(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Ht(sn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ol(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),wu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ol(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}wu(n,!0,a,null,f);break;case"together":wu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Oi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ds(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ri(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ri(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Du(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Wo(t)))}function n0(t,n,a){switch(n.tag){case 3:Xt(n,n.stateNode.containerInfo),aa(n,rn,t.memoizedState.cache),Cs();break;case 27:case 5:Zt(n);break;case 4:Xt(n,n.stateNode.containerInfo);break;case 10:aa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tm(t,n,a):(ca(n),t=Oi(t,n,a),t!==null?t.sibling:null);ca(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ds(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return nm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ht(sn,sn.current),s)break;return null;case 22:case 23:return n.lanes=0,Kp(t,n,a);case 24:aa(n,rn,t.memoizedState.cache)}return Oi(t,n,a)}function im(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Du(t,a)&&(n.flags&128)===0)return fn=!1,n0(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Ee&&(n.flags&1048576)!==0&&Nd(n,ko,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Fc(s)?(t=ja(s,t),n.tag=1,n=Jp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=qp(null,n,s,t,a);break t}else if(c===F){n.tag=14,n=Yp(null,n,s,t,a);break t}}throw n=ct(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ja(s,n.pendingProps),Jp(t,n,s,c,a);case 3:t:{if(Xt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,$c(t,n),zs(n,s,null,a);var x=n.memoizedState;if(s=x.cache,aa(n,rn,s),s!==f.cache&&Yc(n,[rn],a,!0),Bs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$p(t,n,s,a);break t}else if(s!==c){c=Yn(Error(r(424)),n),ws(c),n=$p(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(We=ai(t.firstChild),bn=n,Ee=!0,Wa=null,di=!0,a=Pp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Cs(),s===c){n=Oi(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return ul(t,n),t===null?(a=og(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,s=bl(Lt.current).createElement(a),s[nn]=n,s[mn]=t,xn(s,a,t),je(s),n.stateNode=s):n.memoizedState=og(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&Ee&&(s=n.stateNode=ag(n.type,n.pendingProps,Lt.current),bn=n,di=!0,c=We,xa(n.type)?(ff=c,We=ai(s.firstChild)):We=c),_n(t,n,n.pendingProps.children,a),ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((c=s=We)&&(s=D0(s,n.type,n.pendingProps,di),s!==null?(n.stateNode=s,bn=n,We=ai(s.firstChild),di=!1,c=!0):c=!1),c||qa(n)),Zt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,of(c,f)?s=null:x!==null&&of(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,Zv,null,null,a),ro._currentValue=c),ul(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&Ee&&((t=a=We)&&(a=U0(a,n.pendingProps,di),a!==null?(n.stateNode=a,bn=n,We=null,t=!0):t=!1),t||qa(n)),null;case 13:return tm(t,n,a);case 4:return Xt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Or(n,null,s,a):_n(t,n,s,a),n.child;case 11:return qp(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,aa(n,n.type,s.value),_n(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Za(n),c=yn(c),s=s(c),n.flags|=1,_n(t,n,s,a),n.child;case 14:return Yp(t,n,n.type,n.pendingProps,a);case 15:return Zp(t,n,n.type,n.pendingProps,a);case 19:return nm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=fl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ri(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Kp(t,n,a);case 24:return Za(n),s=yn(rn),t===null?(c=Qc(),c===null&&(c=He,f=Zc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Jc(n),aa(n,rn,c)):((t.lanes&a)!==0&&($c(t,n),zs(n,null,null,a),Bs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),aa(n,rn,s)):(s=f.cache,aa(n,rn,s),s!==c.cache&&Yc(n,[rn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Pi(t){t.flags|=4}function am(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!hg(n)){if(n=jn.current,n!==null&&((_e&4194048)===_e?pi!==null:(_e&62914560)!==_e&&(_e&536870912)===0||n!==pi))throw Os=jc,Gd;t.flags|=8192}}function hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?At():536870912,t.lanes|=n,Ir|=n)}function ks(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function i0(t,n,a){var s=n.pendingProps;switch(Xc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ui(rn),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Rs(n)?Pi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bd())),Xe(n),null;case 26:return a=n.memoizedState,t===null?(Pi(n),a!==null?(Xe(n),am(n,a)):(Xe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Pi(n),Xe(n),am(n,a)):(Xe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Pi(n),Xe(n),n.flags&=-16777217),null;case 27:ze(n),a=Lt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}t=at.current,Rs(n)?Od(n):(t=ag(c,s,a),n.stateNode=t,Pi(n))}return Xe(n),null;case 5:if(ze(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(t=at.current,Rs(n))Od(n);else{switch(c=bl(Lt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[nn]=n,t[mn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(xn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Pi(n)}}return Xe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Pi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Lt.current,Rs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||jm(t.nodeValue,a)),t||qa(n)}else t=bl(t).createTextNode(s),t[nn]=n,n.stateNode=t}return Xe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Rs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[nn]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=Bd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Ni(n),n):(Ni(n),null)}if(Ni(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),hl(n,n.updateQueue),Xe(n),null;case 4:return oe(),t===null&&ef(n.stateNode.containerInfo),Xe(n),null;case 10:return Ui(n.type),Xe(n),null;case 19:if(zt(sn),c=n.memoizedState,c===null)return Xe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ks(c,!1);else{if(qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ol(t),f!==null){for(n.flags|=128,ks(c,!1),t=f.updateQueue,n.updateQueue=t,hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ld(a,t),a=a.sibling;return Ht(sn,sn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ee()>ml&&(n.flags|=128,s=!0,ks(c,!1),n.lanes=4194304)}else{if(!s)if(t=ol(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,hl(n,t),ks(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ee)return Xe(n),null}else 2*ee()-c.renderingStartTime>ml&&a!==536870912&&(n.flags|=128,s=!0,ks(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ee(),n.sibling=null,t=sn.current,Ht(sn,s?t&1|2:t&1),n):(Xe(n),null);case 22:case 23:return Ni(n),iu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&zt(Ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ui(rn),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function a0(t,n){switch(Xc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ui(rn),oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ze(n),null;case 13:if(Ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return zt(sn),null;case 4:return oe(),null;case 10:return Ui(n.type),null;case 22:case 23:return Ni(n),iu(),t!==null&&zt(Ka),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ui(rn),null;case 25:return null;default:return null}}function rm(t,n){switch(Xc(n),n.tag){case 3:Ui(rn),oe();break;case 26:case 27:case 5:ze(n);break;case 4:oe();break;case 13:Ni(n);break;case 19:zt(sn);break;case 10:Ui(n.type);break;case 22:case 23:Ni(n),iu(),t!==null&&zt(Ka);break;case 24:Ui(rn)}}function Ws(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(E){Pe(n,n.return,E)}}function fa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var L=a,K=E;try{K()}catch(ot){Pe(c,L,ot)}}}s=s.next}while(s!==f)}}catch(ot){Pe(n,n.return,ot)}}function sm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Yd(n,a)}catch(s){Pe(t,t.return,s)}}}function om(t,n,a){a.props=ja(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function qs(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Pe(t,n,c)}}function mi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function lm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function Uu(t,n,a){try{var s=t.stateNode;b0(s,t.type,a,n),s[mn]=n}catch(c){Pe(t,t.return,c)}}function cm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xa(t.type)||t.tag===4}function Lu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||cm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Tl));else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Nu(t,n,a),t=t.sibling;t!==null;)Nu(t,n,a),t=t.sibling}function dl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(dl(t,n,a),t=t.sibling;t!==null;)dl(t,n,a),t=t.sibling}function um(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);xn(n,s,a),n[nn]=t,n[mn]=a}catch(f){Pe(t,t.return,f)}}var Bi=!1,Ze=!1,Ou=!1,fm=typeof WeakSet=="function"?WeakSet:Set,hn=null;function r0(t,n){if(t=t.containerInfo,rf=Ul,t=yd(t),Lc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,L=-1,K=0,ot=0,dt=t,J=null;e:for(;;){for(var $;dt!==a||c!==0&&dt.nodeType!==3||(E=x+c),dt!==f||s!==0&&dt.nodeType!==3||(L=x+s),dt.nodeType===3&&(x+=dt.nodeValue.length),($=dt.firstChild)!==null;)J=dt,dt=$;for(;;){if(dt===t)break e;if(J===a&&++K===c&&(E=x),J===f&&++ot===s&&(L=x),($=dt.nextSibling)!==null)break;dt=J,J=dt.parentNode}dt=$}a=E===-1||L===-1?null:{start:E,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(sf={focusedElem:t,selectionRange:a},Ul=!1,hn=n;hn!==null;)if(n=hn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,hn=t;else for(;hn!==null;){switch(n=hn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var $t=ja(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate($t,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){Pe(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)cf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":cf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,hn=t;break}hn=n.return}}function hm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),s&4&&Ws(5,a);break;case 1:if(ha(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Pe(a,a.return,x)}else{var c=ja(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Pe(a,a.return,x)}}s&64&&sm(a),s&512&&qs(a,a.return);break;case 3:if(ha(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Yd(t,n)}catch(x){Pe(a,a.return,x)}}break;case 27:n===null&&s&4&&um(a);case 26:case 5:ha(t,a),n===null&&s&4&&lm(a),s&512&&qs(a,a.return);break;case 12:ha(t,a);break;case 13:ha(t,a),s&4&&mm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=p0.bind(null,a),L0(t,a))));break;case 22:if(s=a.memoizedState!==null||Bi,!s){n=n!==null&&n.memoizedState!==null||Ze,c=Bi;var f=Ze;Bi=s,(Ze=n)&&!f?da(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),Bi=c,Ze=f}break;case 30:break;default:ha(t,a)}}function dm(t){var n=t.alternate;n!==null&&(t.alternate=null,dm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ta(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ge=null,Ln=!1;function zi(t,n,a){for(a=a.child;a!==null;)pm(t,n,a),a=a.sibling}function pm(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 26:Ze||mi(a,n),zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||mi(a,n);var s=Ge,c=Ln;xa(a.type)&&(Ge=a.stateNode,Ln=!1),zi(t,n,a),eo(a.stateNode),Ge=s,Ln=c;break;case 5:Ze||mi(a,n);case 6:if(s=Ge,c=Ln,Ge=null,zi(t,n,a),Ge=s,Ln=c,Ge!==null)if(Ln)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ge.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ge!==null&&(Ln?(t=Ge,ng(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),co(t)):ng(Ge,a.stateNode));break;case 4:s=Ge,c=Ln,Ge=a.stateNode.containerInfo,Ln=!0,zi(t,n,a),Ge=s,Ln=c;break;case 0:case 11:case 14:case 15:Ze||fa(2,a,n),Ze||fa(4,a,n),zi(t,n,a);break;case 1:Ze||(mi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&om(a,n,s)),zi(t,n,a);break;case 21:zi(t,n,a);break;case 22:Ze=(s=Ze)||a.memoizedState!==null,zi(t,n,a),Ze=s;break;default:zi(t,n,a)}}function mm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{co(t)}catch(a){Pe(n,n.return,a)}}function s0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new fm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new fm),n;default:throw Error(r(435,t.tag))}}function Pu(t,n){var a=s0(t);n.forEach(function(s){var c=m0.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(xa(E.type)){Ge=E.stateNode,Ln=!1;break t}break;case 5:Ge=E.stateNode,Ln=!1;break t;case 3:case 4:Ge=E.stateNode.containerInfo,Ln=!0;break t}E=E.return}if(Ge===null)throw Error(r(160));pm(f,x,c),Ge=null,Ln=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)gm(n,t),n=n.sibling}var ii=null;function gm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),s&4&&(fa(3,t,t.return),Ws(3,t),fa(5,t,t.return));break;case 1:Fn(n,t),Hn(t),s&512&&(Ze||a===null||mi(a,a.return)),s&64&&Bi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ii;if(Fn(n,t),Hn(t),s&512&&(Ze||a===null||mi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[$i]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),xn(f,s,a),f[nn]=t,je(f),s=f;break t;case"link":var x=ug("link","href",c).get(s+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(s),xn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=ug("meta","content",c).get(s+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(s),xn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[nn]=t,je(f),s=f}t.stateNode=s}else fg(c,t.type,t.stateNode);else t.stateNode=cg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?fg(c,t.type,t.stateNode):cg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Uu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),s&512&&(Ze||a===null||mi(a,a.return)),a!==null&&s&4&&Uu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),s&512&&(Ze||a===null||mi(a,a.return)),t.flags&32){c=t.stateNode;try{hi(c,"")}catch($){Pe(t,t.return,$)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Uu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Ou=!0);break;case 6:if(Fn(n,t),Hn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch($){Pe(t,t.return,$)}}break;case 3:if(Cl=null,c=ii,ii=Al(n.containerInfo),Fn(n,t),ii=c,Hn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{co(n.containerInfo)}catch($){Pe(t,t.return,$)}Ou&&(Ou=!1,_m(t));break;case 4:s=ii,ii=Al(t.stateNode.containerInfo),Fn(n,t),Hn(t),ii=s;break;case 12:Fn(n,t),Hn(t);break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gu=ee()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pu(t,s)));break;case 22:c=t.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,K=Bi,ot=Ze;if(Bi=K||c,Ze=ot||L,Fn(n,t),Ze=ot,Bi=K,Hn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||L||Bi||Ze||Ja(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){L=a=n;try{if(f=L.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=L.stateNode;var dt=L.memoizedProps.style,J=dt!=null&&dt.hasOwnProperty("display")?dt.display:null;E.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch($){Pe(L,L.return,$)}}}else if(n.tag===6){if(a===null){L=n;try{L.stateNode.nodeValue=c?"":L.memoizedProps}catch($){Pe(L,L.return,$)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Pu(t,a))));break;case 19:Fn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pu(t,s)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(cm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Lu(t);dl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(hi(x,""),a.flags&=-33);var E=Lu(t);dl(t,E,x);break;case 3:case 4:var L=a.stateNode.containerInfo,K=Lu(t);Nu(t,K,L);break;default:throw Error(r(161))}}catch(ot){Pe(t,t.return,ot)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function _m(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;_m(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hm(t,n.alternate,n),n=n.sibling}function Ja(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:fa(4,n,n.return),Ja(n);break;case 1:mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&om(n,n.return,a),Ja(n);break;case 27:eo(n.stateNode);case 26:case 5:mi(n,n.return),Ja(n);break;case 22:n.memoizedState===null&&Ja(n);break;case 30:Ja(n);break;default:Ja(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:da(c,f,a),Ws(4,f);break;case 1:if(da(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(K){Pe(s,s.return,K)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var L=c.shared.hiddenCallbacks;if(L!==null)for(c.shared.hiddenCallbacks=null,c=0;c<L.length;c++)qd(L[c],E)}catch(K){Pe(s,s.return,K)}}a&&x&64&&sm(f),qs(f,f.return);break;case 27:um(f);case 26:case 5:da(c,f,a),a&&s===null&&x&4&&lm(f),qs(f,f.return);break;case 12:da(c,f,a);break;case 13:da(c,f,a),a&&x&4&&mm(c,f);break;case 22:f.memoizedState===null&&da(c,f,a),qs(f,f.return);break;case 30:break;default:da(c,f,a)}n=n.sibling}}function Bu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Us(a))}function zu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Us(t))}function gi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vm(t,n,a,s),n=n.sibling}function vm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,s),c&2048&&Ws(9,n);break;case 1:gi(t,n,a,s);break;case 3:gi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Us(t)));break;case 12:if(c&2048){gi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(L){Pe(n,n.return,L)}}else gi(t,n,a,s);break;case 13:gi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?gi(t,n,a,s):Ys(t,n):f._visibility&2?gi(t,n,a,s):(f._visibility|=2,Pr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Bu(x,n);break;case 24:gi(t,n,a,s),c&2048&&zu(n.alternate,n);break;default:gi(t,n,a,s)}}function Pr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,E=a,L=s,K=x.flags;switch(x.tag){case 0:case 11:case 15:Pr(f,x,E,L,c),Ws(8,x);break;case 23:break;case 22:var ot=x.stateNode;x.memoizedState!==null?ot._visibility&2?Pr(f,x,E,L,c):Ys(f,x):(ot._visibility|=2,Pr(f,x,E,L,c)),c&&K&2048&&Bu(x.alternate,x);break;case 24:Pr(f,x,E,L,c),c&&K&2048&&zu(x.alternate,x);break;default:Pr(f,x,E,L,c)}n=n.sibling}}function Ys(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Ys(a,s),c&2048&&Bu(s.alternate,s);break;case 24:Ys(a,s),c&2048&&zu(s.alternate,s);break;default:Ys(a,s)}n=n.sibling}}var Zs=8192;function Br(t){if(t.subtreeFlags&Zs)for(t=t.child;t!==null;)xm(t),t=t.sibling}function xm(t){switch(t.tag){case 26:Br(t),t.flags&Zs&&t.memoizedState!==null&&W0(ii,t.memoizedState,t.memoizedProps);break;case 5:Br(t);break;case 3:case 4:var n=ii;ii=Al(t.stateNode.containerInfo),Br(t),ii=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Zs,Zs=16777216,Br(t),Zs=n):Br(t));break;default:Br(t)}}function Sm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ks(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];hn=s,ym(s,t)}Sm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mm(t),t=t.sibling}function Mm(t){switch(t.tag){case 0:case 11:case 15:Ks(t),t.flags&2048&&fa(9,t,t.return);break;case 3:Ks(t);break;case 12:Ks(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,pl(t)):Ks(t);break;default:Ks(t)}}function pl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];hn=s,ym(s,t)}Sm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:fa(8,n,n.return),pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,pl(n));break;default:pl(n)}t=t.sibling}}function ym(t,n){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Us(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,hn=s;else t:for(a=t;hn!==null;){s=hn;var c=s.sibling,f=s.return;if(dm(s),s===a){hn=null;break t}if(c!==null){c.return=f,hn=c;break t}hn=f}}}var o0={getCacheForType:function(t){var n=yn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},l0=typeof WeakMap=="function"?WeakMap:Map,Te=0,He=null,fe=null,_e=0,be=0,Gn=null,pa=!1,zr=!1,Iu=!1,Ii=0,qe=0,ma=0,$a=0,Fu=0,Jn=0,Ir=0,Qs=null,Nn=null,Hu=!1,Gu=0,ml=1/0,gl=null,ga=null,vn=0,_a=null,Fr=null,Hr=0,Vu=0,Xu=null,Em=null,js=0,ku=null;function Vn(){if((Te&2)!==0&&_e!==0)return _e&-_e;if(O.T!==null){var t=Rr;return t!==0?t:ju()}return xe()}function Tm(){Jn===0&&(Jn=(_e&536870912)===0||Ee?G():536870912);var t=jn.current;return t!==null&&(t.flags|=32),Jn}function Xn(t,n,a){(t===He&&(be===2||be===9)||t.cancelPendingCommit!==null)&&(Gr(t,0),va(t,_e,Jn,!1)),ht(t,a),((Te&2)===0||t!==He)&&(t===He&&((Te&2)===0&&($a|=a),qe===4&&va(t,_e,Jn,!1)),_i(t))}function bm(t,n,a){if((Te&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||te(t,n),c=s?f0(t,n):Yu(t,n,!0),f=s;do{if(c===0){zr&&!s&&va(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!c0(a)){c=Yu(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=Qs;var L=E.current.memoizedState.isDehydrated;if(L&&(Gr(E,x).flags|=256),x=Yu(E,x,!1),x!==2){if(Iu&&!L){E.errorRecoveryDisabledLanes|=f,$a|=f,c=4;break t}f=Nn,Nn=c,f!==null&&(Nn===null?Nn=f:Nn.push.apply(Nn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Gr(t,0),va(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:va(s,n,Jn,!pa);break t;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Gu+300-ee(),10<c)){if(va(s,n,Jn,!pa),re(s,0,!0)!==0)break t;s.timeoutHandle=tg(Am.bind(null,s,a,Nn,gl,Hu,n,Jn,$a,Ir,pa,f,2,-0,0),c);break t}Am(s,a,Nn,gl,Hu,n,Jn,$a,Ir,pa,f,0,-0,0)}}break}while(!0);_i(t)}function Am(t,n,a,s,c,f,x,E,L,K,ot,dt,J,$){if(t.timeoutHandle=-1,dt=n.subtreeFlags,(dt&8192||(dt&16785408)===16785408)&&(ao={stylesheets:null,count:0,unsuspend:k0},xm(n),dt=q0(),dt!==null)){t.cancelPendingCommit=dt(Nm.bind(null,t,n,f,a,s,c,x,E,L,ot,1,J,$)),va(t,f,x,!K);return}Nm(t,n,f,a,s,c,x,E,L)}function c0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function va(t,n,a,s){n&=~Fu,n&=~$a,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Bt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Rt(t,a,n)}function _l(){return(Te&6)===0?(Js(0),!1):!0}function Wu(){if(fe!==null){if(be===0)var t=fe.return;else t=fe,Di=Ya=null,lu(t),Nr=null,Vs=0,t=fe;for(;t!==null;)rm(t.alternate,t),t=t.return;fe=null}}function Gr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,R0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wu(),He=t,fe=a=Ri(t.current,null),_e=n,be=0,Gn=null,pa=!1,zr=te(t,n),Iu=!1,Ir=Jn=Fu=$a=ma=qe=0,Nn=Qs=null,Hu=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Bt(s),f=1<<c;n|=t[c],s&=~f}return Ii=n,Fo(),a}function Rm(t,n){se=null,O.H=al,n===Ns||n===Zo?(n=kd(),be=3):n===Gd?(n=kd(),be=4):be=n===Wp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Gn=n,fe===null&&(qe=1,cl(t,Yn(n,t.current)))}function Cm(){var t=O.H;return O.H=al,t===null?al:t}function wm(){var t=O.A;return O.A=o0,t}function qu(){qe=4,pa||(_e&4194048)!==_e&&jn.current!==null||(zr=!0),(ma&134217727)===0&&($a&134217727)===0||He===null||va(He,_e,Jn,!1)}function Yu(t,n,a){var s=Te;Te|=2;var c=Cm(),f=wm();(He!==t||_e!==n)&&(gl=null,Gr(t,n)),n=!1;var x=qe;t:do try{if(be!==0&&fe!==null){var E=fe,L=Gn;switch(be){case 8:Wu(),x=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var K=be;if(be=0,Gn=null,Vr(t,E,L,K),a&&zr){x=0;break t}break;default:K=be,be=0,Gn=null,Vr(t,E,L,K)}}u0(),x=qe;break}catch(ot){Rm(t,ot)}while(!0);return n&&t.shellSuspendCounter++,Di=Ya=null,Te=s,O.H=c,O.A=f,fe===null&&(He=null,_e=0,Fo()),x}function u0(){for(;fe!==null;)Dm(fe)}function f0(t,n){var a=Te;Te|=2;var s=Cm(),c=wm();He!==t||_e!==n?(gl=null,ml=ee()+500,Gr(t,n)):zr=te(t,n);t:do try{if(be!==0&&fe!==null){n=fe;var f=Gn;e:switch(be){case 1:be=0,Gn=null,Vr(t,n,f,1);break;case 2:case 9:if(Vd(f)){be=0,Gn=null,Um(n);break}n=function(){be!==2&&be!==9||He!==t||(be=7),_i(t)},f.then(n,n);break t;case 3:be=7;break t;case 4:be=5;break t;case 7:Vd(f)?(be=0,Gn=null,Um(n)):(be=0,Gn=null,Vr(t,n,f,7));break;case 5:var x=null;switch(fe.tag){case 26:x=fe.memoizedState;case 5:case 27:var E=fe;if(!x||hg(x)){be=0,Gn=null;var L=E.sibling;if(L!==null)fe=L;else{var K=E.return;K!==null?(fe=K,vl(K)):fe=null}break e}}be=0,Gn=null,Vr(t,n,f,5);break;case 6:be=0,Gn=null,Vr(t,n,f,6);break;case 8:Wu(),qe=6;break t;default:throw Error(r(462))}}h0();break}catch(ot){Rm(t,ot)}while(!0);return Di=Ya=null,O.H=s,O.A=c,Te=a,fe!==null?0:(He=null,_e=0,Fo(),qe)}function h0(){for(;fe!==null&&!Cn();)Dm(fe)}function Dm(t){var n=im(t.alternate,t,Ii);t.memoizedProps=t.pendingProps,n===null?vl(t):fe=n}function Um(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=jp(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=jp(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:lu(n);default:rm(a,n),n=fe=Ld(n,Ii),n=im(a,n,Ii)}t.memoizedProps=t.pendingProps,n===null?vl(t):fe=n}function Vr(t,n,a,s){Di=Ya=null,lu(n),Nr=null,Vs=0;var c=n.return;try{if(e0(t,c,n,a,_e)){qe=1,cl(t,Yn(a,t.current)),fe=null;return}}catch(f){if(c!==null)throw fe=c,f;qe=1,cl(t,Yn(a,t.current)),fe=null;return}n.flags&32768?(Ee||s===1?t=!0:zr||(_e&536870912)!==0?t=!1:(pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Lm(n,t)):vl(n)}function vl(t){var n=t;do{if((n.flags&32768)!==0){Lm(n,pa);return}t=n.return;var a=i0(n.alternate,n,Ii);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=t}while(n!==null);qe===0&&(qe=5)}function Lm(t,n){do{var a=a0(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);qe=6,fe=null}function Nm(t,n,a,s,c,f,x,E,L){t.cancelPendingCommit=null;do xl();while(vn!==0);if((Te&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=zc,Dt(t,a,f,x,E,L),t===He&&(fe=He=null,_e=0),Fr=n,_a=t,Hr=a,Vu=f,Xu=c,Em=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,g0(D,function(){return Im(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=Q.p,Q.p=2,x=Te,Te|=4;try{r0(t,n,a)}finally{Te=x,Q.p=c,O.T=s}}vn=1,Om(),Pm(),Bm()}}function Om(){if(vn===1){vn=0;var t=_a,n=Fr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=Q.p;Q.p=2;var c=Te;Te|=4;try{gm(n,t);var f=sf,x=yd(t.containerInfo),E=f.focusedElem,L=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&Md(E.ownerDocument.documentElement,E)){if(L!==null&&Lc(E)){var K=L.start,ot=L.end;if(ot===void 0&&(ot=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(ot,E.value.length);else{var dt=E.ownerDocument||document,J=dt&&dt.defaultView||window;if(J.getSelection){var $=J.getSelection(),$t=E.textContent.length,Yt=Math.min(L.start,$t),De=L.end===void 0?Yt:Math.min(L.end,$t);!$.extend&&Yt>De&&(x=De,De=Yt,Yt=x);var V=Sd(E,Yt),z=Sd(E,De);if(V&&z&&($.rangeCount!==1||$.anchorNode!==V.node||$.anchorOffset!==V.offset||$.focusNode!==z.node||$.focusOffset!==z.offset)){var Y=dt.createRange();Y.setStart(V.node,V.offset),$.removeAllRanges(),Yt>De?($.addRange(Y),$.extend(z.node,z.offset)):(Y.setEnd(z.node,z.offset),$.addRange(Y))}}}}for(dt=[],$=E;$=$.parentNode;)$.nodeType===1&&dt.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<dt.length;E++){var ut=dt[E];ut.element.scrollLeft=ut.left,ut.element.scrollTop=ut.top}}Ul=!!rf,sf=rf=null}finally{Te=c,Q.p=s,O.T=a}}t.current=n,vn=2}}function Pm(){if(vn===2){vn=0;var t=_a,n=Fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=Q.p;Q.p=2;var c=Te;Te|=4;try{hm(t,n.alternate,n)}finally{Te=c,Q.p=s,O.T=a}}vn=3}}function Bm(){if(vn===4||vn===3){vn=0,de();var t=_a,n=Fr,a=Hr,s=Em;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,Fr=_a=null,zm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ga=null),Qe(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(lt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=Q.p,Q.p=2,O.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{O.T=n,Q.p=c}}(Hr&3)!==0&&xl(),_i(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===ku?js++:(js=0,ku=t):js=0,Js(0)}}function zm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Us(n)))}function xl(t){return Om(),Pm(),Bm(),Im()}function Im(){if(vn!==5)return!1;var t=_a,n=Vu;Vu=0;var a=Qe(Hr),s=O.T,c=Q.p;try{Q.p=32>a?32:a,O.T=null,a=Xu,Xu=null;var f=_a,x=Hr;if(vn=0,Fr=_a=null,Hr=0,(Te&6)!==0)throw Error(r(331));var E=Te;if(Te|=4,Mm(f.current),vm(f,f.current,x,a),Te=E,Js(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(lt,f)}catch{}return!0}finally{Q.p=c,O.T=s,zm(t,n)}}function Fm(t,n,a){n=Yn(a,n),n=yu(t.stateNode,n,2),t=oa(t,n,2),t!==null&&(ht(t,2),_i(t))}function Pe(t,n,a){if(t.tag===3)Fm(t,t,a);else for(;n!==null;){if(n.tag===3){Fm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ga===null||!ga.has(s))){t=Yn(a,t),a=Xp(2),s=oa(n,a,2),s!==null&&(kp(a,s,n,t),ht(s,2),_i(s));break}}n=n.return}}function Zu(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new l0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Iu=!0,c.add(a),t=d0.bind(null,t,n,a),n.then(t,t))}function d0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,He===t&&(_e&a)===a&&(qe===4||qe===3&&(_e&62914560)===_e&&300>ee()-Gu?(Te&2)===0&&Gr(t,0):Fu|=a,Ir===_e&&(Ir=0)),_i(t)}function Hm(t,n){n===0&&(n=At()),t=Er(t,n),t!==null&&(ht(t,n),_i(t))}function p0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Hm(t,a)}function m0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Hm(t,a)}function g0(t,n){return le(t,n)}var Sl=null,Xr=null,Ku=!1,Ml=!1,Qu=!1,tr=0;function _i(t){t!==Xr&&t.next===null&&(Xr===null?Sl=Xr=t:Xr=Xr.next=t),Ml=!0,Ku||(Ku=!0,v0())}function Js(t,n){if(!Qu&&Ml){Qu=!0;do for(var a=!1,s=Sl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Bt(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,km(s,f))}else f=_e,f=re(s,s===He?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||te(s,f)||(a=!0,km(s,f));s=s.next}while(a);Qu=!1}}function _0(){Gm()}function Gm(){Ml=Ku=!1;var t=0;tr!==0&&(A0()&&(t=tr),tr=0);for(var n=ee(),a=null,s=Sl;s!==null;){var c=s.next,f=Vm(s,n);f===0?(s.next=null,a===null?Sl=c:a.next=c,c===null&&(Xr=a)):(a=s,(t!==0||(f&3)!==0)&&(Ml=!0)),s=c}Js(t)}function Vm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Bt(f),E=1<<x,L=c[x];L===-1?((E&a)===0||(E&s)!==0)&&(c[x]=Re(E,n)):L<=n&&(t.expiredLanes|=E),f&=~E}if(n=He,a=_e,a=re(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(be===2||be===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&P(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&P(s),Qe(a)){case 2:case 8:a=It;break;case 32:a=D;break;case 268435456:a=j;break;default:a=D}return s=Xm.bind(null,t),a=le(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&P(s),t.callbackPriority=2,t.callbackNode=null,2}function Xm(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(xl()&&t.callbackNode!==a)return null;var s=_e;return s=re(t,t===He?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(bm(t,s,n),Vm(t,ee()),t.callbackNode!=null&&t.callbackNode===a?Xm.bind(null,t):null)}function km(t,n){if(xl())return null;bm(t,n,!0)}function v0(){C0(function(){(Te&6)!==0?le(Ae,_0):Gm()})}function ju(){return tr===0&&(tr=G()),tr}function Wm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Lo(""+t)}function qm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function x0(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Wm((c[mn]||null).action),x=s.submitter;x&&(n=(n=x[mn]||null)?Wm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Bo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(tr!==0){var L=x?qm(c,x):new FormData(c);_u(a,{pending:!0,data:L,method:c.method,action:f},null,L)}}else typeof f=="function"&&(E.preventDefault(),L=x?qm(c,x):new FormData(c),_u(a,{pending:!0,data:L,method:c.method,action:f},f,L))},currentTarget:c}]})}}for(var Ju=0;Ju<Bc.length;Ju++){var $u=Bc[Ju],S0=$u.toLowerCase(),M0=$u[0].toUpperCase()+$u.slice(1);ni(S0,"on"+M0)}ni(bd,"onAnimationEnd"),ni(Ad,"onAnimationIteration"),ni(Rd,"onAnimationStart"),ni("dblclick","onDoubleClick"),ni("focusin","onFocus"),ni("focusout","onBlur"),ni(Iv,"onTransitionRun"),ni(Fv,"onTransitionStart"),ni(Hv,"onTransitionCancel"),ni(Cd,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($s));function Ym(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],L=E.instance,K=E.currentTarget;if(E=E.listener,L!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=K;try{f(c)}catch(ot){ll(ot)}c.currentTarget=null,f=L}else for(x=0;x<s.length;x++){if(E=s[x],L=E.instance,K=E.currentTarget,E=E.listener,L!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=K;try{f(c)}catch(ot){ll(ot)}c.currentTarget=null,f=L}}}}function he(t,n){var a=n[Ba];a===void 0&&(a=n[Ba]=new Set);var s=t+"__bubble";a.has(s)||(Zm(n,t,2,!1),a.add(s))}function tf(t,n,a){var s=0;n&&(s|=4),Zm(a,t,s,n)}var yl="_reactListening"+Math.random().toString(36).slice(2);function ef(t){if(!t[yl]){t[yl]=!0,Do.forEach(function(a){a!=="selectionchange"&&(y0.has(a)||tf(a,!1,t),tf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[yl]||(n[yl]=!0,tf("selectionchange",!1,n))}}function Zm(t,n,a,s){switch(vg(n)){case 2:var c=K0;break;case 8:c=Q0;break;default:c=gf}a=c.bind(null,n,a,t),c=void 0,!Ec||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function nf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var L=x.tag;if((L===3||L===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=Mi(E),x===null)return;if(L=x.tag,L===5||L===6||L===26||L===27){s=f=x;continue t}E=E.parentNode}}s=s.return}ed(function(){var K=f,ot=Mc(a),dt=[];t:{var J=wd.get(t);if(J!==void 0){var $=Bo,$t=t;switch(t){case"keypress":if(Oo(a)===0)break t;case"keydown":case"keyup":$=gv;break;case"focusin":$t="focus",$=Rc;break;case"focusout":$t="blur",$=Rc;break;case"beforeblur":case"afterblur":$=Rc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=xv;break;case bd:case Ad:case Rd:$=ov;break;case Cd:$=Mv;break;case"scroll":case"scrollend":$=nv;break;case"wheel":$=Ev;break;case"copy":case"cut":case"paste":$=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=sd;break;case"toggle":case"beforetoggle":$=bv}var Yt=(n&4)!==0,De=!Yt&&(t==="scroll"||t==="scrollend"),V=Yt?J!==null?J+"Capture":null:J;Yt=[];for(var z=K,Y;z!==null;){var ut=z;if(Y=ut.stateNode,ut=ut.tag,ut!==5&&ut!==26&&ut!==27||Y===null||V===null||(ut=vs(z,V),ut!=null&&Yt.push(to(z,ut,Y))),De)break;z=z.return}0<Yt.length&&(J=new $(J,$t,null,a,ot),dt.push({event:J,listeners:Yt}))}}if((n&7)===0){t:{if(J=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",J&&a!==Sc&&($t=a.relatedTarget||a.fromElement)&&(Mi($t)||$t[wn]))break t;if(($||J)&&(J=ot.window===ot?ot:(J=ot.ownerDocument)?J.defaultView||J.parentWindow:window,$?($t=a.relatedTarget||a.toElement,$=K,$t=$t?Mi($t):null,$t!==null&&(De=u($t),Yt=$t.tag,$t!==De||Yt!==5&&Yt!==27&&Yt!==6)&&($t=null)):($=null,$t=K),$!==$t)){if(Yt=ad,ut="onMouseLeave",V="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=sd,ut="onPointerLeave",V="onPointerEnter",z="pointer"),De=$==null?J:Ia($),Y=$t==null?J:Ia($t),J=new Yt(ut,z+"leave",$,a,ot),J.target=De,J.relatedTarget=Y,ut=null,Mi(ot)===K&&(Yt=new Yt(V,z+"enter",$t,a,ot),Yt.target=Y,Yt.relatedTarget=De,ut=Yt),De=ut,$&&$t)e:{for(Yt=$,V=$t,z=0,Y=Yt;Y;Y=kr(Y))z++;for(Y=0,ut=V;ut;ut=kr(ut))Y++;for(;0<z-Y;)Yt=kr(Yt),z--;for(;0<Y-z;)V=kr(V),Y--;for(;z--;){if(Yt===V||V!==null&&Yt===V.alternate)break e;Yt=kr(Yt),V=kr(V)}Yt=null}else Yt=null;$!==null&&Km(dt,J,$,Yt,!1),$t!==null&&De!==null&&Km(dt,De,$t,Yt,!0)}}t:{if(J=K?Ia(K):window,$=J.nodeName&&J.nodeName.toLowerCase(),$==="select"||$==="input"&&J.type==="file")var Pt=pd;else if(hd(J))if(md)Pt=Pv;else{Pt=Nv;var ce=Lv}else $=J.nodeName,!$||$.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?K&&xc(K.elementType)&&(Pt=pd):Pt=Ov;if(Pt&&(Pt=Pt(t,K))){dd(dt,Pt,a,ot);break t}ce&&ce(t,J,K),t==="focusout"&&K&&J.type==="number"&&K.memoizedProps.value!=null&&Mn(J,"number",J.value)}switch(ce=K?Ia(K):window,t){case"focusin":(hd(ce)||ce.contentEditable==="true")&&(Sr=ce,Nc=K,As=null);break;case"focusout":As=Nc=Sr=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Ed(dt,a,ot);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Ed(dt,a,ot)}var Ft;if(wc)t:{switch(t){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else xr?ud(t,a)&&(Qt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(od&&a.locale!=="ko"&&(xr||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&xr&&(Ft=nd()):(ia=ot,Tc="value"in ia?ia.value:ia.textContent,xr=!0)),ce=El(K,Qt),0<ce.length&&(Qt=new rd(Qt,t,null,a,ot),dt.push({event:Qt,listeners:ce}),Ft?Qt.data=Ft:(Ft=fd(a),Ft!==null&&(Qt.data=Ft)))),(Ft=Rv?Cv(t,a):wv(t,a))&&(Qt=El(K,"onBeforeInput"),0<Qt.length&&(ce=new rd("onBeforeInput","beforeinput",null,a,ot),dt.push({event:ce,listeners:Qt}),ce.data=Ft)),x0(dt,t,K,a,ot)}Ym(dt,n)})}function to(t,n,a){return{instance:t,listener:n,currentTarget:a}}function El(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=vs(t,a),c!=null&&s.unshift(to(t,c,f)),c=vs(t,n),c!=null&&s.push(to(t,c,f))),t.tag===3)return s;t=t.return}return[]}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Km(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var E=a,L=E.alternate,K=E.stateNode;if(E=E.tag,L!==null&&L===s)break;E!==5&&E!==26&&E!==27||K===null||(L=K,c?(K=vs(a,f),K!=null&&x.unshift(to(a,K,L))):c||(K=vs(a,f),K!=null&&x.push(to(a,K,L)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var E0=/\r\n?/g,T0=/\u0000|\uFFFD/g;function Qm(t){return(typeof t=="string"?t:""+t).replace(E0,`
`).replace(T0,"")}function jm(t,n){return n=Qm(n),Qm(t)===n}function Tl(){}function we(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||hi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&hi(t,""+s);break;case"className":yt(t,"class",s);break;case"tabIndex":yt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":yt(t,a,s);break;case"style":$h(t,s,f);break;case"data":if(n!=="object"){yt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Lo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&we(t,n,"name",c.name,c,null),we(t,n,"formEncType",c.formEncType,c,null),we(t,n,"formMethod",c.formMethod,c,null),we(t,n,"formTarget",c.formTarget,c,null)):(we(t,n,"encType",c.encType,c,null),we(t,n,"method",c.method,c,null),we(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Lo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Tl);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Lo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":he("beforetoggle",t),he("toggle",t),_t(t,"popover",s);break;case"xlinkActuate":Tt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Tt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Tt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Tt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Tt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Tt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":_t(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=tv.get(a)||a,_t(t,a,s))}}function af(t,n,a,s,c,f){switch(a){case"style":$h(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?hi(t,s):(typeof s=="number"||typeof s=="bigint")&&hi(t,""+s);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Tl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):_t(t,a,s)}}}function xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:we(t,n,f,x,a,null)}}c&&we(t,n,"srcSet",a.srcSet,a,null),s&&we(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var E=f=x=c=null,L=null,K=null;for(s in a)if(a.hasOwnProperty(s)){var ot=a[s];if(ot!=null)switch(s){case"name":c=ot;break;case"type":x=ot;break;case"checked":L=ot;break;case"defaultChecked":K=ot;break;case"value":f=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:we(t,n,s,ot,a,null)}}Oe(t,f,E,L,K,x,c,!1),ke(t);return;case"select":he("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:we(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!s,n!=null?an(t,!!s,n,!1):a!=null&&an(t,!!s,a,!0);return;case"textarea":he("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:we(t,n,x,E,a,null)}gn(t,s,c,f),ke(t);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(s=a[L],s!=null))switch(L){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:we(t,n,L,s,a,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(s=0;s<$s.length;s++)he($s[s],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(s=a[K],s!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:we(t,n,K,s,a,null)}return;default:if(xc(n)){for(ot in a)a.hasOwnProperty(ot)&&(s=a[ot],s!==void 0&&af(t,n,ot,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&we(t,n,E,s,a,null))}function b0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,L=null,K=null,ot=null;for($ in a){var dt=a[$];if(a.hasOwnProperty($)&&dt!=null)switch($){case"checked":break;case"value":break;case"defaultValue":L=dt;default:s.hasOwnProperty($)||we(t,n,$,null,s,dt)}}for(var J in s){var $=s[J];if(dt=a[J],s.hasOwnProperty(J)&&($!=null||dt!=null))switch(J){case"type":f=$;break;case"name":c=$;break;case"checked":K=$;break;case"defaultChecked":ot=$;break;case"value":x=$;break;case"defaultValue":E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:$!==dt&&we(t,n,J,$,s,dt)}}Ti(t,x,E,L,K,ot,f,c);return;case"select":$=x=E=J=null;for(f in a)if(L=a[f],a.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":$=L;default:s.hasOwnProperty(f)||we(t,n,f,null,s,L)}for(c in s)if(f=s[c],L=a[c],s.hasOwnProperty(c)&&(f!=null||L!=null))switch(c){case"value":J=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==L&&we(t,n,c,f,s,L)}n=E,a=x,s=$,J!=null?an(t,!!a,J,!1):!!s!=!!a&&(n!=null?an(t,!!a,n,!0):an(t,!!a,a?[]:"",!1));return;case"textarea":$=J=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:we(t,n,E,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":J=c;break;case"defaultValue":$=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&we(t,n,x,c,s,f)}un(t,J,$);return;case"option":for(var $t in a)if(J=a[$t],a.hasOwnProperty($t)&&J!=null&&!s.hasOwnProperty($t))switch($t){case"selected":t.selected=!1;break;default:we(t,n,$t,null,s,J)}for(L in s)if(J=s[L],$=a[L],s.hasOwnProperty(L)&&J!==$&&(J!=null||$!=null))switch(L){case"selected":t.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:we(t,n,L,J,s,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)J=a[Yt],a.hasOwnProperty(Yt)&&J!=null&&!s.hasOwnProperty(Yt)&&we(t,n,Yt,null,s,J);for(K in s)if(J=s[K],$=a[K],s.hasOwnProperty(K)&&J!==$&&(J!=null||$!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,n));break;default:we(t,n,K,J,s,$)}return;default:if(xc(n)){for(var De in a)J=a[De],a.hasOwnProperty(De)&&J!==void 0&&!s.hasOwnProperty(De)&&af(t,n,De,void 0,s,J);for(ot in s)J=s[ot],$=a[ot],!s.hasOwnProperty(ot)||J===$||J===void 0&&$===void 0||af(t,n,ot,J,s,$);return}}for(var V in a)J=a[V],a.hasOwnProperty(V)&&J!=null&&!s.hasOwnProperty(V)&&we(t,n,V,null,s,J);for(dt in s)J=s[dt],$=a[dt],!s.hasOwnProperty(dt)||J===$||J==null&&$==null||we(t,n,dt,J,s,$)}var rf=null,sf=null;function bl(t){return t.nodeType===9?t:t.ownerDocument}function Jm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $m(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function of(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lf=null;function A0(){var t=window.event;return t&&t.type==="popstate"?t===lf?!1:(lf=t,!0):(lf=null,!1)}var tg=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(t){return eg.resolve(null).then(t).catch(w0)}:tg;function w0(t){setTimeout(function(){throw t})}function xa(t){return t==="head"}function ng(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=t.ownerDocument;if(a&1&&eo(x.documentElement),a&2&&eo(x.body),a&4)for(a=x.head,eo(a),x=a.firstChild;x;){var E=x.nextSibling,L=x.nodeName;x[$i]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=E}}if(c===0){t.removeChild(f),co(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);co(n)}function cf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":cf(a),ta(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function D0(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[$i])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ai(t.nextSibling),t===null)break}return null}function U0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ai(t.nextSibling),t===null))return null;return t}function uf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function L0(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var ff=null;function ig(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function ag(t,n,a){switch(n=bl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ta(t)}var $n=new Map,rg=new Set;function Al(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fi=Q.d;Q.d={f:N0,r:O0,D:P0,C:B0,L:z0,m:I0,X:H0,S:F0,M:G0};function N0(){var t=Fi.f(),n=_l();return t||n}function O0(t){var n=yi(t);n!==null&&n.tag===5&&n.type==="form"?bp(n):Fi.r(t)}var Wr=typeof document>"u"?null:document;function sg(t,n,a){var s=Wr;if(s&&typeof n=="string"&&n){var c=Fe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),rg.has(c)||(rg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),xn(n,"link",t),je(n),s.head.appendChild(n)))}}function P0(t){Fi.D(t),sg("dns-prefetch",t,null)}function B0(t,n){Fi.C(t,n),sg("preconnect",t,n)}function z0(t,n,a){Fi.L(t,n,a);var s=Wr;if(s&&t&&n){var c='link[rel="preload"][as="'+Fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Fe(a.imageSizes)+'"]')):c+='[href="'+Fe(t)+'"]';var f=c;switch(n){case"style":f=qr(t);break;case"script":f=Yr(t)}$n.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),$n.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(no(f))||n==="script"&&s.querySelector(io(f))||(n=s.createElement("link"),xn(n,"link",t),je(n),s.head.appendChild(n)))}}function I0(t,n){Fi.m(t,n);var a=Wr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Fe(s)+'"][href="'+Fe(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Yr(t)}if(!$n.has(f)&&(t=g({rel:"modulepreload",href:t},n),$n.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(io(f)))return}s=a.createElement("link"),xn(s,"link",t),je(s),a.head.appendChild(s)}}}function F0(t,n,a){Fi.S(t,n,a);var s=Wr;if(s&&t){var c=ea(s).hoistableStyles,f=qr(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(no(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=$n.get(f))&&hf(t,a);var L=x=s.createElement("link");je(L),xn(L,"link",t),L._p=new Promise(function(K,ot){L.onload=K,L.onerror=ot}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Rl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function H0(t,n){Fi.X(t,n);var a=Wr;if(a&&t){var s=ea(a).hoistableScripts,c=Yr(t),f=s.get(c);f||(f=a.querySelector(io(c)),f||(t=g({src:t,async:!0},n),(n=$n.get(c))&&df(t,n),f=a.createElement("script"),je(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function G0(t,n){Fi.M(t,n);var a=Wr;if(a&&t){var s=ea(a).hoistableScripts,c=Yr(t),f=s.get(c);f||(f=a.querySelector(io(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=$n.get(c))&&df(t,n),f=a.createElement("script"),je(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function og(t,n,a,s){var c=(c=Lt.current)?Al(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=qr(a.href),a=ea(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=qr(a.href);var f=ea(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(no(t)))&&!f._p&&(x.instance=f,x.state.loading=5),$n.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},$n.set(t,a),f||V0(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Yr(a),a=ea(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function qr(t){return'href="'+Fe(t)+'"'}function no(t){return'link[rel="stylesheet"]['+t+"]"}function lg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function V0(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xn(n,"link",a),je(n),t.head.appendChild(n))}function Yr(t){return'[src="'+Fe(t)+'"]'}function io(t){return"script[async]"+t}function cg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Fe(a.href)+'"]');if(s)return n.instance=s,je(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),je(s),xn(s,"style",c),Rl(s,a.precedence,t),n.instance=s;case"stylesheet":c=qr(a.href);var f=t.querySelector(no(c));if(f)return n.state.loading|=4,n.instance=f,je(f),f;s=lg(a),(c=$n.get(c))&&hf(s,c),f=(t.ownerDocument||t).createElement("link"),je(f);var x=f;return x._p=new Promise(function(E,L){x.onload=E,x.onerror=L}),xn(f,"link",s),n.state.loading|=4,Rl(f,a.precedence,t),n.instance=f;case"script":return f=Yr(a.src),(c=t.querySelector(io(f)))?(n.instance=c,je(c),c):(s=a,(c=$n.get(f))&&(s=g({},a),df(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),je(c),xn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Rl(s,a.precedence,t));return n.instance}function Rl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Cl=null;function ug(t,n,a){if(Cl===null){var s=new Map,c=Cl=new Map;c.set(a,s)}else c=Cl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[$i]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function fg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function X0(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ao=null;function k0(){}function W0(t,n,a){if(ao===null)throw Error(r(475));var s=ao;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=qr(a.href),f=t.querySelector(no(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=wl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,je(f);return}f=t.ownerDocument||t,a=lg(a),(c=$n.get(c))&&hf(a,c),f=f.createElement("link"),je(f);var x=f;x._p=new Promise(function(E,L){x.onload=E,x.onerror=L}),xn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=wl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function q0(){if(ao===null)throw Error(r(475));var t=ao;return t.stylesheets&&t.count===0&&pf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&pf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function wl(){if(this.count--,this.count===0){if(this.stylesheets)pf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Dl=null;function pf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Dl=new Map,n.forEach(Y0,t),Dl=null,wl.call(t))}function Y0(t,n){if(!(n.state.loading&4)){var a=Dl.get(t);if(a)var s=a.get(null);else{a=new Map,Dl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=wl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var ro={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Z0(t,n,a,s,c,f,x,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function dg(t,n,a,s,c,f,x,E,L,K,ot,dt){return t=new Z0(t,n,a,x,E,L,K,dt),n=1,f===!0&&(n|=24),f=In(3,null,null,n),t.current=f,f.stateNode=t,n=Zc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Jc(f),t}function pg(t){return t?(t=Tr,t):Tr}function mg(t,n,a,s,c,f){c=pg(c),s.context===null?s.context=c:s.pendingContext=c,s=sa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=oa(t,s,n),a!==null&&(Xn(a,t,n),Ps(a,t,n))}function gg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function mf(t,n){gg(t,n),(t=t.alternate)&&gg(t,n)}function _g(t){if(t.tag===13){var n=Er(t,67108864);n!==null&&Xn(n,t,67108864),mf(t,67108864)}}var Ul=!0;function K0(t,n,a,s){var c=O.T;O.T=null;var f=Q.p;try{Q.p=2,gf(t,n,a,s)}finally{Q.p=f,O.T=c}}function Q0(t,n,a,s){var c=O.T;O.T=null;var f=Q.p;try{Q.p=8,gf(t,n,a,s)}finally{Q.p=f,O.T=c}}function gf(t,n,a,s){if(Ul){var c=_f(s);if(c===null)nf(t,n,s,Ll,a),xg(t,s);else if(J0(c,t,n,a,s))s.stopPropagation();else if(xg(t,s),n&4&&-1<j0.indexOf(t)){for(;c!==null;){var f=yi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=wt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var L=1<<31-Bt(x);E.entanglements[1]|=L,x&=~L}_i(f),(Te&6)===0&&(ml=ee()+500,Js(0))}}break;case 13:E=Er(f,2),E!==null&&Xn(E,f,2),_l(),mf(f,2)}if(f=_f(s),f===null&&nf(t,n,s,Ll,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else nf(t,n,s,null,a)}}function _f(t){return t=Mc(t),vf(t)}var Ll=null;function vf(t){if(Ll=null,t=Mi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ll=t,null}function vg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case Ae:return 2;case It:return 8;case D:case T:return 32;case j:return 268435456;default:return 32}default:return 32}}var xf=!1,Sa=null,Ma=null,ya=null,so=new Map,oo=new Map,Ea=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(t,n){switch(t){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":so.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(n.pointerId)}}function lo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=yi(n),n!==null&&_g(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function J0(t,n,a,s,c){switch(n){case"focusin":return Sa=lo(Sa,t,n,a,s,c),!0;case"dragenter":return Ma=lo(Ma,t,n,a,s,c),!0;case"mouseover":return ya=lo(ya,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return so.set(f,lo(so.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,oo.set(f,lo(oo.get(f)||null,t,n,a,s,c)),!0}return!1}function Sg(t){var n=Mi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Bn(t.priority,function(){if(a.tag===13){var s=Vn();s=Ie(s);var c=Er(a,s);c!==null&&Xn(c,a,s),mf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_f(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Sc=s,a.target.dispatchEvent(s),Sc=null}else return n=yi(a),n!==null&&_g(n),t.blockedOn=a,!1;n.shift()}return!0}function Mg(t,n,a){Nl(t)&&a.delete(n)}function $0(){xf=!1,Sa!==null&&Nl(Sa)&&(Sa=null),Ma!==null&&Nl(Ma)&&(Ma=null),ya!==null&&Nl(ya)&&(ya=null),so.forEach(Mg),oo.forEach(Mg)}function Ol(t,n){t.blockedOn===n&&(t.blockedOn=null,xf||(xf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$0)))}var Pl=null;function yg(t){Pl!==t&&(Pl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Pl===t&&(Pl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(vf(s||a)===null)continue;break}var f=yi(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function co(t){function n(L){return Ol(L,t)}Sa!==null&&Ol(Sa,t),Ma!==null&&Ol(Ma,t),ya!==null&&Ol(ya,t),so.forEach(n),oo.forEach(n);for(var a=0;a<Ea.length;a++){var s=Ea[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)Sg(a),a.blockedOn===null&&Ea.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[mn]||null;if(typeof f=="function")x||yg(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[mn]||null)E=x.formAction;else if(vf(c)!==null)continue}else E=x.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),yg(a)}}}function Sf(t){this._internalRoot=t}Bl.prototype.render=Sf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Vn();mg(a,s,t,n,null,null)},Bl.prototype.unmount=Sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;mg(t.current,2,null,t,null,null),_l(),n[wn]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var n=xe();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ea.length&&n!==0&&n<Ea[a].priority;a++);Ea.splice(a,0,t),a===0&&Sg(t)}};var Eg=e.version;if(Eg!=="19.1.1")throw Error(r(527,Eg,"19.1.1"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var tx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{lt=zl.inject(tx),Ct=zl}catch{}}return uo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Fp,f=Hp,x=Gp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=dg(t,1,!1,null,null,a,s,c,f,x,E,null),t[wn]=n.current,ef(t),new Sf(n)},uo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Fp,x=Hp,E=Gp,L=null,K=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(K=a.formState)),n=dg(t,1,!0,n,a??null,s,c,f,x,E,L,K),n.context=pg(null),a=n.current,s=Vn(),s=Ie(s),c=sa(s),c.callback=null,oa(a,c,s),a=s,n.current.lanes=a,ht(n,a),_i(n),t[wn]=n.current,ef(t),new Bl(n)},uo.version="19.1.1",uo}var Rg;function lx(){if(Rg)return Mf.exports;Rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Mf.exports=ox(),Mf.exports}var cx=lx();const Eb=ax(cx),ux="modulepreload",fx=function(o,e){return new URL(o,e).href},Cg={},Tb=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(g){return Promise.all(g.map(v=>Promise.resolve(v).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};const h=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),p=d?.nonce||d?.getAttribute("nonce");l=m(i.map(g=>{if(g=fx(g,r),g in Cg)return;Cg[g]=!0;const v=g.endsWith(".css"),S=v?'[rel="stylesheet"]':"";if(!!r)for(let C=h.length-1;C>=0;C--){const M=h[C];if(M.href===g&&(!v||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${S}`))return;const A=document.createElement("link");if(A.rel=v?"stylesheet":ux,v||(A.as="script"),A.crossOrigin="",A.href=g,p&&A.setAttribute("nonce",p),document.head.appendChild(A),v)return new Promise((C,M)=>{A.addEventListener("load",C),A.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${g}`)))})}))}function u(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="176",hx=0,wg=1,dx=2,b_=1,px=2,Wi=3,Oa=0,Pn=1,qi=2,La=0,cs=1,Dg=2,Ug=3,Lg=4,mx=5,cr=100,gx=101,_x=102,vx=103,xx=104,Sx=200,Mx=201,yx=202,Ex=203,th=204,eh=205,Tx=206,bx=207,Ax=208,Rx=209,Cx=210,wx=211,Dx=212,Ux=213,Lx=214,nh=0,ih=1,ah=2,fs=3,rh=4,sh=5,oh=6,lh=7,A_=0,Nx=1,Ox=2,Na=0,Px=1,Bx=2,zx=3,Ix=4,Fx=5,Hx=6,Gx=7,R_=300,hs=301,ds=302,ch=303,uh=304,mc=306,fh=1e3,fr=1001,hh=1002,fi=1003,Vx=1004,Il=1005,xi=1006,Tf=1007,hr=1008,ji=1009,C_=1010,w_=1011,vo=1012,Vh=1013,pr=1014,Yi=1015,Eo=1016,Xh=1017,kh=1018,xo=1020,D_=35902,U_=1021,L_=1022,ui=1023,So=1026,Mo=1027,N_=1028,Wh=1029,O_=1030,qh=1031,Yh=1033,sc=33776,oc=33777,lc=33778,cc=33779,dh=35840,ph=35841,mh=35842,gh=35843,_h=36196,vh=37492,xh=37496,Sh=37808,Mh=37809,yh=37810,Eh=37811,Th=37812,bh=37813,Ah=37814,Rh=37815,Ch=37816,wh=37817,Dh=37818,Uh=37819,Lh=37820,Nh=37821,uc=36492,Oh=36494,Ph=36495,P_=36283,Bh=36284,zh=36285,Ih=36286,Xx=3200,kx=3201,Wx=0,qx=1,Ua="",ei="srgb",ps="srgb-linear",dc="linear",Ue="srgb",Zr=7680,Ng=519,Yx=512,Zx=513,Kx=514,B_=515,Qx=516,jx=517,Jx=518,$x=519,Og=35044,Pg="300 es",Zi=2e3,pc=2001;class gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=Math.PI/180,Fh=180/Math.PI;function To(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function ge(o,e,i){return Math.max(e,Math.min(i,o))}function tS(o,e){return(o%e+e)%e}function Af(o,e,i){return(1-i)*o+i*e}function fo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function On(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,i=0){Be.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ge(this.x,e.x,i.x),this.y=ge(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ge(this.x,e,i),this.y=ge(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ge(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(e,i,r,l,u,h,d,p,m){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],S=r[2],y=r[5],A=r[8],C=l[0],M=l[3],_=l[6],B=l[1],N=l[4],U=l[7],Z=l[2],I=l[5],F=l[8];return u[0]=h*C+d*B+p*Z,u[3]=h*M+d*N+p*I,u[6]=h*_+d*U+p*F,u[1]=m*C+g*B+v*Z,u[4]=m*M+g*N+v*I,u[7]=m*_+g*U+v*F,u[2]=S*C+y*B+A*Z,u[5]=S*M+y*N+A*I,u[8]=S*_+y*U+A*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*h-d*m,S=d*p-g*u,y=m*u-h*p,A=i*v+r*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(l*m-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(g*i-l*p)*C,e[5]=(l*u-d*i)*C,e[6]=y*C,e[7]=(r*p-m*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Rf.makeScale(e,i)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Rf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rf=new ie;function z_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function eS(){const o=yo("canvas");return o.style.display="block",o}const Bg={};function fc(o){o in Bg||(Bg[o]=!0,console.warn(o))}function nS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function iS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function aS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zg=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ig=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rS(){const o={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ue&&(l.r=Qi(l.r),l.g=Qi(l.g),l.b=Qi(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ue&&(l.r=us(l.r),l.g=us(l.g),l.b=us(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ua?dc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ps]:{primaries:e,whitePoint:r,transfer:dc,toXYZ:zg,fromXYZ:Ig,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Ue,toXYZ:zg,fromXYZ:Ig,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),o}const ye=rS();function Qi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function us(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Kr;class sS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Kr===void 0&&(Kr=yo("canvas")),Kr.width=e.width,Kr.height=e.height;const l=Kr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Kr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Qi(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Qi(i[r]/255)*255):i[r]=Qi(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oS=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=To(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Cf(l[h].image)):u.push(Cf(l[h]))}else u=Cf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Cf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?sS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lS=0;class Rn extends gs{constructor(e=Rn.DEFAULT_IMAGE,i=Rn.DEFAULT_MAPPING,r=fr,l=fr,u=xi,h=hr,d=ui,p=ji,m=Rn.DEFAULT_ANISOTROPY,g=Ua){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=To(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=R_;Rn.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],v=p[8],S=p[1],y=p[5],A=p[9],C=p[2],M=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,U=(y+1)/2,Z=(_+1)/2,I=(g+S)/4,F=(v+C)/4,q=(A+M)/4;return N>U&&N>Z?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=I/r,u=F/r):U>Z?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=I/l,u=q/l):Z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(Z),r=F/u,l=q/u),this.set(r,l,u,i),this}let B=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(S-g)*(S-g));return Math.abs(B)<.001&&(B=1),this.x=(M-A)/B,this.y=(v-C)/B,this.z=(S-g)/B,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ge(this.x,e.x,i.x),this.y=ge(this.y,e.y,i.y),this.z=ge(this.z,e.z,i.z),this.w=ge(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ge(this.x,e,i),this.y=ge(this.y,e,i),this.z=ge(this.z,e,i),this.w=ge(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cS extends gs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new Ke(0,0,e,i),this.scissorTest=!1,this.viewport=new Ke(0,0,e,i);const l={width:e,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Rn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends cS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class I_ extends Rn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uS extends Rn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const S=u[h+0],y=u[h+1],A=u[h+2],C=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(v!==C||p!==S||m!==y||g!==A){let M=1-d;const _=p*S+m*y+g*A+v*C,B=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const Z=Math.sqrt(N),I=Math.atan2(Z,_*B);M=Math.sin(M*I)/Z,d=Math.sin(d*I)/Z}const U=d*B;if(p=p*M+S*U,m=m*M+y*U,g=g*M+A*U,v=v*M+C*U,M===1-d){const Z=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=Z,m*=Z,g*=Z,v*=Z}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=u[h],S=u[h+1],y=u[h+2],A=u[h+3];return e[i]=d*A+g*v+p*y-m*S,e[i+1]=p*A+g*S+m*v-d*y,e[i+2]=m*A+g*y+d*S-p*v,e[i+3]=g*A-d*v-p*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),v=d(u/2),S=p(r/2),y=p(l/2),A=p(u/2);switch(h){case"XYZ":this._x=S*g*v+m*y*A,this._y=m*y*v-S*g*A,this._z=m*g*A+S*y*v,this._w=m*g*v-S*y*A;break;case"YXZ":this._x=S*g*v+m*y*A,this._y=m*y*v-S*g*A,this._z=m*g*A-S*y*v,this._w=m*g*v+S*y*A;break;case"ZXY":this._x=S*g*v-m*y*A,this._y=m*y*v+S*g*A,this._z=m*g*A+S*y*v,this._w=m*g*v-S*y*A;break;case"ZYX":this._x=S*g*v-m*y*A,this._y=m*y*v+S*g*A,this._z=m*g*A-S*y*v,this._w=m*g*v+S*y*A;break;case"YZX":this._x=S*g*v+m*y*A,this._y=m*y*v+S*g*A,this._z=m*g*A-S*y*v,this._w=m*g*v-S*y*A;break;case"XZY":this._x=S*g*v-m*y*A,this._y=m*y*v-S*g*A,this._z=m*g*A+S*y*v,this._w=m*g*v+S*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-p)*y,this._y=(u-m)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(u+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ge(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Fg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+p*m+h*v-d*g,this.y=r+p*g+d*m-u*v,this.z=l+p*v+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ge(this.x,e.x,i.x),this.y=ge(this.y,e.y,i.y),this.z=ge(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ge(this.x,e,i),this.y=ge(this.y,e,i),this.z=ge(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wf.copy(this).projectOnVector(e),this.sub(wf)}reflect(e){return this.sub(wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ge(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wf=new nt,Fg=new bo;class Ao{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ri.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ri.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ri.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ri):ri.fromBufferAttribute(u,h),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fl.copy(r.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),Hl.subVectors(this.max,ho),Qr.subVectors(e.a,ho),jr.subVectors(e.b,ho),Jr.subVectors(e.c,ho),ba.subVectors(jr,Qr),Aa.subVectors(Jr,jr),er.subVectors(Qr,Jr);let i=[0,-ba.z,ba.y,0,-Aa.z,Aa.y,0,-er.z,er.y,ba.z,0,-ba.x,Aa.z,0,-Aa.x,er.z,0,-er.x,-ba.y,ba.x,0,-Aa.y,Aa.x,0,-er.y,er.x,0];return!Df(i,Qr,jr,Jr,Hl)||(i=[1,0,0,0,1,0,0,0,1],!Df(i,Qr,jr,Jr,Hl))?!1:(Gl.crossVectors(ba,Aa),i=[Gl.x,Gl.y,Gl.z],Df(i,Qr,jr,Jr,Hl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],ri=new nt,Fl=new Ao,Qr=new nt,jr=new nt,Jr=new nt,ba=new nt,Aa=new nt,er=new nt,ho=new nt,Hl=new nt,Gl=new nt,nr=new nt;function Df(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){nr.fromArray(o,u);const d=l.x*Math.abs(nr.x)+l.y*Math.abs(nr.y)+l.z*Math.abs(nr.z),p=e.dot(nr),m=i.dot(nr),g=r.dot(nr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const fS=new Ao,po=new nt,Uf=new nt;class Kh{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):fS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const i=po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(po,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(Uf)),this.expandByPoint(po.copy(e.center).sub(Uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new nt,Lf=new nt,Vl=new nt,Ra=new nt,Nf=new nt,Xl=new nt,Of=new nt;class hS{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Gi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,i),Gi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Lf.copy(e).add(i).multiplyScalar(.5),Vl.copy(i).sub(e).normalize(),Ra.copy(this.origin).sub(Lf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Vl),d=Ra.dot(this.direction),p=-Ra.dot(Vl),m=Ra.lengthSq(),g=Math.abs(1-h*h);let v,S,y,A;if(g>0)if(v=h*p-d,S=h*d-p,A=u*g,v>=0)if(S>=-A)if(S<=A){const C=1/g;v*=C,S*=C,y=v*(v+h*S+2*d)+S*(h*v+S+2*p)+m}else S=u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S=-u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S<=-A?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+S*(S+2*p)+m):S<=A?(v=0,S=Math.min(Math.max(-u,-p),u),y=S*(S+2*p)+m):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+S*(S+2*p)+m);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Lf).addScaledVector(Vl,S),y}intersectSphere(e,i){Gi.subVectors(e.center,this.origin);const r=Gi.dot(this.direction),l=Gi.dot(Gi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,i,r,l,u){Nf.subVectors(i,e),Xl.subVectors(r,e),Of.crossVectors(Nf,Xl);let h=this.direction.dot(Of),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ra.subVectors(this.origin,e);const p=d*this.direction.dot(Xl.crossVectors(Ra,Xl));if(p<0)return null;const m=d*this.direction.dot(Nf.cross(Ra));if(m<0||p+m>h)return null;const g=-d*Ra.dot(Of);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,u,h,d,p,m,g,v,S,y,A,C,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,v,S,y,A,C,M)}set(e,i,r,l,u,h,d,p,m,g,v,S,y,A,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=S,_[3]=y,_[7]=A,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/$r.setFromMatrixColumn(e,0).length(),u=1/$r.setFromMatrixColumn(e,1).length(),h=1/$r.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*g,y=h*v,A=d*g,C=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=y+A*m,i[5]=S-C*m,i[9]=-d*p,i[2]=C-S*m,i[6]=A+y*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*g,y=p*v,A=m*g,C=m*v;i[0]=S+C*d,i[4]=A*d-y,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-A,i[6]=C+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*g,y=p*v,A=m*g,C=m*v;i[0]=S-C*d,i[4]=-h*v,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*g,y=h*v,A=d*g,C=d*v;i[0]=p*g,i[4]=A*m-y,i[8]=S*m+C,i[1]=p*v,i[5]=C*m+S,i[9]=y*m-A,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,y=h*m,A=d*p,C=d*m;i[0]=p*g,i[4]=C-S*v,i[8]=A*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=y*v+A,i[10]=S-C*v}else if(e.order==="XZY"){const S=h*p,y=h*m,A=d*p,C=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=S*v+C,i[5]=h*g,i[9]=y*v-A,i[2]=A*v-y,i[6]=d*g,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dS,e,pS)}lookAt(e,i,r){const l=this.elements;return kn.subVectors(e,i),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Ca.crossVectors(r,kn),Ca.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Ca.crossVectors(r,kn)),Ca.normalize(),kl.crossVectors(kn,Ca),l[0]=Ca.x,l[4]=kl.x,l[8]=kn.x,l[1]=Ca.y,l[5]=kl.y,l[9]=kn.y,l[2]=Ca.z,l[6]=kl.z,l[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],S=r[9],y=r[13],A=r[2],C=r[6],M=r[10],_=r[14],B=r[3],N=r[7],U=r[11],Z=r[15],I=l[0],F=l[4],q=l[8],w=l[12],R=l[1],H=l[5],st=l[9],it=l[13],ct=l[2],pt=l[6],O=l[10],Q=l[14],W=l[3],gt=l[7],xt=l[11],Ut=l[15];return u[0]=h*I+d*R+p*ct+m*W,u[4]=h*F+d*H+p*pt+m*gt,u[8]=h*q+d*st+p*O+m*xt,u[12]=h*w+d*it+p*Q+m*Ut,u[1]=g*I+v*R+S*ct+y*W,u[5]=g*F+v*H+S*pt+y*gt,u[9]=g*q+v*st+S*O+y*xt,u[13]=g*w+v*it+S*Q+y*Ut,u[2]=A*I+C*R+M*ct+_*W,u[6]=A*F+C*H+M*pt+_*gt,u[10]=A*q+C*st+M*O+_*xt,u[14]=A*w+C*it+M*Q+_*Ut,u[3]=B*I+N*R+U*ct+Z*W,u[7]=B*F+N*H+U*pt+Z*gt,u[11]=B*q+N*st+U*O+Z*xt,u[15]=B*w+N*it+U*Q+Z*Ut,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],S=e[10],y=e[14],A=e[3],C=e[7],M=e[11],_=e[15];return A*(+u*p*v-l*m*v-u*d*S+r*m*S+l*d*y-r*p*y)+C*(+i*p*y-i*m*S+u*h*S-l*h*y+l*m*g-u*p*g)+M*(+i*m*v-i*d*y-u*h*v+r*h*y+u*d*g-r*m*g)+_*(-l*d*g-i*p*v+i*d*S+l*h*v-r*h*S+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],S=e[10],y=e[11],A=e[12],C=e[13],M=e[14],_=e[15],B=v*M*m-C*S*m+C*p*y-d*M*y-v*p*_+d*S*_,N=A*S*m-g*M*m-A*p*y+h*M*y+g*p*_-h*S*_,U=g*C*m-A*v*m+A*d*y-h*C*y-g*d*_+h*v*_,Z=A*v*p-g*C*p-A*d*S+h*C*S+g*d*M-h*v*M,I=i*B+r*N+l*U+u*Z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=B*F,e[1]=(C*S*u-v*M*u-C*l*y+r*M*y+v*l*_-r*S*_)*F,e[2]=(d*M*u-C*p*u+C*l*m-r*M*m-d*l*_+r*p*_)*F,e[3]=(v*p*u-d*S*u-v*l*m+r*S*m+d*l*y-r*p*y)*F,e[4]=N*F,e[5]=(g*M*u-A*S*u+A*l*y-i*M*y-g*l*_+i*S*_)*F,e[6]=(A*p*u-h*M*u-A*l*m+i*M*m+h*l*_-i*p*_)*F,e[7]=(h*S*u-g*p*u+g*l*m-i*S*m-h*l*y+i*p*y)*F,e[8]=U*F,e[9]=(A*v*u-g*C*u-A*r*y+i*C*y+g*r*_-i*v*_)*F,e[10]=(h*C*u-A*d*u+A*r*m-i*C*m-h*r*_+i*d*_)*F,e[11]=(g*d*u-h*v*u-g*r*m+i*v*m+h*r*y-i*d*y)*F,e[12]=Z*F,e[13]=(g*C*l-A*v*l+A*r*S-i*C*S-g*r*M+i*v*M)*F,e[14]=(A*d*l-h*C*l-A*r*p+i*C*p+h*r*M-i*d*M)*F,e[15]=(h*v*l-g*d*l+g*r*p-i*v*p-h*r*S+i*d*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,v=d+d,S=u*m,y=u*g,A=u*v,C=h*g,M=h*v,_=d*v,B=p*m,N=p*g,U=p*v,Z=r.x,I=r.y,F=r.z;return l[0]=(1-(C+_))*Z,l[1]=(y+U)*Z,l[2]=(A-N)*Z,l[3]=0,l[4]=(y-U)*I,l[5]=(1-(S+_))*I,l[6]=(M+B)*I,l[7]=0,l[8]=(A+N)*F,l[9]=(M-B)*F,l[10]=(1-(S+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=$r.set(l[0],l[1],l[2]).length();const h=$r.set(l[4],l[5],l[6]).length(),d=$r.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],si.copy(this);const m=1/u,g=1/h,v=1/d;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=g,si.elements[5]*=g,si.elements[6]*=g,si.elements[8]*=v,si.elements[9]*=v,si.elements[10]*=v,i.setFromRotationMatrix(si),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Zi){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),S=(r+l)/(r-l);let y,A;if(d===Zi)y=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===pc)y=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Zi){const p=this.elements,m=1/(i-e),g=1/(r-l),v=1/(h-u),S=(i+e)*m,y=(r+l)*g;let A,C;if(d===Zi)A=(h+u)*v,C=-2*v;else if(d===pc)A=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=C,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const $r=new nt,si=new en,dS=new nt(0,0,0),pS=new nt(1,1,1),Ca=new nt,kl=new nt,kn=new nt,Hg=new en,Gg=new bo;class Ji{constructor(e=0,i=0,r=0,l=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ge(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-ge(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Gg.setFromEuler(this),this.setFromQuaternion(Gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class F_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mS=0;const Vg=new nt,ts=new bo,Vi=new en,Wl=new nt,mo=new nt,gS=new nt,_S=new bo,Xg=new nt(1,0,0),kg=new nt(0,1,0),Wg=new nt(0,0,1),qg={type:"added"},vS={type:"removed"},es={type:"childadded",child:null},Pf={type:"childremoved",child:null};class qn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new nt,i=new Ji,r=new bo,l=new nt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ie}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ts.setFromAxisAngle(e,i),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,i){return ts.setFromAxisAngle(e,i),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Xg,e)}rotateY(e){return this.rotateOnAxis(kg,e)}rotateZ(e){return this.rotateOnAxis(Wg,e)}translateOnAxis(e,i){return Vg.copy(e).applyQuaternion(this.quaternion),this.position.add(Vg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Xg,e)}translateY(e){return this.translateOnAxis(kg,e)}translateZ(e){return this.translateOnAxis(Wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Wl.copy(e):Wl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(mo,Wl,this.up):Vi.lookAt(Wl,mo,this.up),this.quaternion.setFromRotationMatrix(Vi),l&&(Vi.extractRotation(l.matrixWorld),ts.setFromRotationMatrix(Vi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qg),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(vS),Pf.child=e,this.dispatchEvent(Pf),Pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qg),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,gS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,_S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),v=h(e.shapes),S=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new nt(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new nt,Xi=new nt,Bf=new nt,ki=new nt,ns=new nt,is=new nt,Yg=new nt,zf=new nt,If=new nt,Ff=new nt,Hf=new Ke,Gf=new Ke,Vf=new Ke;class ci{constructor(e=new nt,i=new nt,r=new nt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),oi.subVectors(e,i),l.cross(oi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){oi.subVectors(l,i),Xi.subVectors(r,i),Bf.subVectors(e,i);const h=oi.dot(oi),d=oi.dot(Xi),p=oi.dot(Bf),m=Xi.dot(Xi),g=Xi.dot(Bf),v=h*m-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,y=(m*p-d*g)*S,A=(h*g-d*p)*S;return u.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,ki)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ki.x),p.addScaledVector(h,ki.y),p.addScaledVector(d,ki.z),p)}static getInterpolatedAttribute(e,i,r,l,u,h){return Hf.setScalar(0),Gf.setScalar(0),Vf.setScalar(0),Hf.fromBufferAttribute(e,i),Gf.fromBufferAttribute(e,r),Vf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Hf,u.x),h.addScaledVector(Gf,u.y),h.addScaledVector(Vf,u.z),h}static isFrontFacing(e,i,r,l){return oi.subVectors(r,i),Xi.subVectors(e,i),oi.cross(Xi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),oi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return ci.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ns.subVectors(l,r),is.subVectors(u,r),zf.subVectors(e,r);const p=ns.dot(zf),m=is.dot(zf);if(p<=0&&m<=0)return i.copy(r);If.subVectors(e,l);const g=ns.dot(If),v=is.dot(If);if(g>=0&&v<=g)return i.copy(l);const S=p*v-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(ns,h);Ff.subVectors(e,u);const y=ns.dot(Ff),A=is.dot(Ff);if(A>=0&&y<=A)return i.copy(u);const C=y*m-p*A;if(C<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(r).addScaledVector(is,d);const M=g*A-y*v;if(M<=0&&v-g>=0&&y-A>=0)return Yg.subVectors(u,l),d=(v-g)/(v-g+(y-A)),i.copy(l).addScaledVector(Yg,d);const _=1/(M+C+S);return h=C*_,d=S*_,i.copy(r).addScaledVector(ns,h).addScaledVector(is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},ql={h:0,s:0,l:0};function Xf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ye.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=ye.workingColorSpace){return this.r=e,this.g=i,this.b=r,ye.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=ye.workingColorSpace){if(e=tS(e,1),i=ge(i,0,1),r=ge(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Xf(h,u,e+1/3),this.g=Xf(h,u,e),this.b=Xf(h,u,e-1/3)}return ye.toWorkingColorSpace(this,l),this}setStyle(e,i=ei){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const r=H_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return ye.fromWorkingColorSpace(Tn.copy(this),e),Math.round(ge(Tn.r*255,0,255))*65536+Math.round(ge(Tn.g*255,0,255))*256+Math.round(ge(Tn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ye.workingColorSpace){ye.fromWorkingColorSpace(Tn.copy(this),i);const r=Tn.r,l=Tn.g,u=Tn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=ye.workingColorSpace){return ye.fromWorkingColorSpace(Tn.copy(this),i),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ei){ye.fromWorkingColorSpace(Tn.copy(this),e);const i=Tn.r,r=Tn.g,l=Tn.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(wa),this.setHSL(wa.h+e,wa.s+i,wa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(wa),e.getHSL(ql);const r=Af(wa.h,ql.h,i),l=Af(wa.s,ql.s,i),u=Af(wa.l,ql.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Le;Le.NAMES=H_;let xS=0;class gc extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=To(),this.name="",this.type="Material",this.blending=cs,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=eh,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(r.blending=this.blending),this.side!==Oa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==th&&(r.blendSrc=this.blendSrc),this.blendDst!==eh&&(r.blendDst=this.blendDst),this.blendEquation!==cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ng&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class G_ extends gc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new nt,Yl=new Be;let SS=0;class Si{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Og,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Yl.fromBufferAttribute(this,i),Yl.applyMatrix3(e),this.setXY(i,Yl.x,Yl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=fo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array),u=On(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Og&&(e.usage=this.usage),e}}class V_ extends Si{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class X_ extends Si{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class dr extends Si{constructor(e,i,r){super(new Float32Array(e),i,r)}}let MS=0;const ti=new en,kf=new qn,as=new nt,Wn=new Ao,go=new Ao,pn=new nt;class gr extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z_(e)?X_:V_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ie().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,i,r){return ti.makeTranslation(e,i,r),this.applyMatrix4(ti),this}scale(e,i,r){return ti.makeScale(e,i,r),this.applyMatrix4(ti),this}lookAt(e){return kf.lookAt(e),kf.updateMatrix(),this.applyMatrix4(kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new dr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];go.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Wn.min,go.min),Wn.expandByPoint(pn),pn.addVectors(Wn.max,go.max),Wn.expandByPoint(pn)):(Wn.expandByPoint(go.min),Wn.expandByPoint(go.max))}Wn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)pn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(pn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)pn.fromBufferAttribute(d,m),p&&(as.fromBufferAttribute(e,m),pn.add(as)),l=Math.max(l,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<r.count;q++)d[q]=new nt,p[q]=new nt;const m=new nt,g=new nt,v=new nt,S=new Be,y=new Be,A=new Be,C=new nt,M=new nt;function _(q,w,R){m.fromBufferAttribute(r,q),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),S.fromBufferAttribute(u,q),y.fromBufferAttribute(u,w),A.fromBufferAttribute(u,R),g.sub(m),v.sub(m),y.sub(S),A.sub(S);const H=1/(y.x*A.y-A.x*y.y);isFinite(H)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-A.x).multiplyScalar(H),d[q].add(C),d[w].add(C),d[R].add(C),p[q].add(M),p[w].add(M),p[R].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let q=0,w=B.length;q<w;++q){const R=B[q],H=R.start,st=R.count;for(let it=H,ct=H+st;it<ct;it+=3)_(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const N=new nt,U=new nt,Z=new nt,I=new nt;function F(q){Z.fromBufferAttribute(l,q),I.copy(Z);const w=d[q];N.copy(w),N.sub(Z.multiplyScalar(Z.dot(w))).normalize(),U.crossVectors(I,w);const H=U.dot(p[q])<0?-1:1;h.setXYZW(q,N.x,N.y,N.z,H)}for(let q=0,w=B.length;q<w;++q){const R=B[q],H=R.start,st=R.count;for(let it=H,ct=H+st;it<ct;it+=3)F(e.getX(it+0)),F(e.getX(it+1)),F(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,p=new nt,m=new nt,g=new nt,v=new nt;if(e)for(let S=0,y=e.count;S<y;S+=3){const A=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,M),d.add(g),p.add(g),m.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)pn.fromBufferAttribute(e,i),pn.normalize(),e.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,S=new m.constructor(p.length*g);let y=0,A=0;for(let C=0,M=p.length;C<M;C++){d.isInterleavedBufferAttribute?y=p[C]*d.data.stride+d.offset:y=p[C]*g;for(let _=0;_<g;_++)S[A++]=m[y++]}return new Si(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new gr,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const S=m[g],y=e(S,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,S=m.length;v<S;v++){const y=m[v];g.push(y.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],v=u[m];for(let S=0,y=v.length;S<y;S++)g.push(v[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zg=new en,ir=new hS,Zl=new Kh,Kg=new nt,Kl=new nt,Ql=new nt,jl=new nt,Wf=new nt,Jl=new nt,Qg=new nt,$l=new nt;class Ki extends qn{constructor(e=new gr,i=new G_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Jl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(Wf.fromBufferAttribute(v,e),h?Jl.addScaledVector(Wf,g):Jl.addScaledVector(Wf.sub(i),g))}i.add(Jl)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Zl.copy(r.boundingSphere),Zl.applyMatrix4(u),ir.copy(e.ray).recast(e.near),!(Zl.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Zl,Kg)===null||ir.origin.distanceToSquared(Kg)>(e.far-e.near)**2))&&(Zg.copy(u).invert(),ir.copy(e.ray).applyMatrix4(Zg),!(r.boundingBox!==null&&ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ir)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,S=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],_=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=B,Z=N;U<Z;U+=3){const I=d.getX(U),F=d.getX(U+1),q=d.getX(U+2);l=tc(this,_,e,r,m,g,v,I,F,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const B=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=tc(this,h,e,r,m,g,v,B,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],_=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let U=B,Z=N;U<Z;U+=3){const I=U,F=U+1,q=U+2;l=tc(this,_,e,r,m,g,v,I,F,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const B=M,N=M+1,U=M+2;l=tc(this,h,e,r,m,g,v,B,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function yS(o,e,i,r,l,u,h,d){let p;if(e.side===Pn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===Oa,d),p===null)return null;$l.copy(d),$l.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo($l);return m<i.near||m>i.far?null:{distance:m,point:$l.clone(),object:o}}function tc(o,e,i,r,l,u,h,d,p,m){o.getVertexPosition(d,Kl),o.getVertexPosition(p,Ql),o.getVertexPosition(m,jl);const g=yS(o,e,i,r,Kl,Ql,jl,Qg);if(g){const v=new nt;ci.getBarycoord(Qg,Kl,Ql,jl,v),l&&(g.uv=ci.getInterpolatedAttribute(l,d,p,m,v,new Be)),u&&(g.uv1=ci.getInterpolatedAttribute(u,d,p,m,v,new Be)),h&&(g.normal=ci.getInterpolatedAttribute(h,d,p,m,v,new nt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new nt,materialIndex:0};ci.getNormal(Kl,Ql,jl,S.normal),g.face=S,g.barycoord=v}return g}class Ro extends gr{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],v=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new dr(m,3)),this.setAttribute("normal",new dr(g,3)),this.setAttribute("uv",new dr(v,2));function A(C,M,_,B,N,U,Z,I,F,q,w){const R=U/F,H=Z/q,st=U/2,it=Z/2,ct=I/2,pt=F+1,O=q+1;let Q=0,W=0;const gt=new nt;for(let xt=0;xt<O;xt++){const Ut=xt*H-it;for(let zt=0;zt<pt;zt++){const Ht=zt*R-st;gt[C]=Ht*B,gt[M]=Ut*N,gt[_]=ct,m.push(gt.x,gt.y,gt.z),gt[C]=0,gt[M]=0,gt[_]=I>0?1:-1,g.push(gt.x,gt.y,gt.z),v.push(zt/F),v.push(1-xt/q),Q+=1}}for(let xt=0;xt<q;xt++)for(let Ut=0;Ut<F;Ut++){const zt=S+Ut+pt*xt,Ht=S+Ut+pt*(xt+1),at=S+(Ut+1)+pt*(xt+1),St=S+(Ut+1)+pt*xt;p.push(zt,Ht,St),p.push(Ht,at,St),W+=6}d.addGroup(y,W,w),y+=W,S+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function An(o){const e={};for(let i=0;i<o.length;i++){const r=ms(o[i]);for(const l in r)e[l]=r[l]}return e}function ES(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function k_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ye.workingColorSpace}const TS={clone:ms,merge:An};var bS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pa extends gc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bS,this.fragmentShader=AS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=ES(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class W_ extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Zi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Da=new nt,jg=new Be,Jg=new Be;class li extends W_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Da.x,Da.y).multiplyScalar(-e/Da.z),Da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Da.x,Da.y).multiplyScalar(-e/Da.z)}getViewSize(e,i){return this.getViewBounds(e,jg,Jg),i.subVectors(Jg,jg)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const rs=-90,ss=1;class RS extends qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(rs,ss,e,i);l.layers=this.layers,this.add(l);const u=new li(rs,ss,e,i);u.layers=this.layers,this.add(u);const h=new li(rs,ss,e,i);h.layers=this.layers,this.add(h);const d=new li(rs,ss,e,i);d.layers=this.layers,this.add(d);const p=new li(rs,ss,e,i);p.layers=this.layers,this.add(p);const m=new li(rs,ss,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===Zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,S,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class q_ extends Rn{constructor(e=[],i=hs,r,l,u,h,d,p,m,g){super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CS extends mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new q_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:xi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ro(5,5,5),u=new Pa({name:"CubemapFromEquirect",uniforms:ms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:La});u.uniforms.tEquirect.value=i;const h=new Ki(l,u),d=i.minFilter;return i.minFilter===hr&&(i.minFilter=xi),new RS(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class ec extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wS={type:"move"};class qf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(m,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=g.position.distanceTo(v.position),y=.02,A=.005;m.inputState.pinching&&S>y+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(wS)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ec;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class bb extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Yf=new nt,DS=new nt,US=new ie;class or{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Yf.subVectors(r,i).cross(DS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Yf),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||US.getNormalMatrix(e),l=this.coplanarPoint(Yf).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Kh,nc=new nt;class Y_{constructor(e=new or,i=new or,r=new or,l=new or,u=new or,h=new or){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Zi){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],S=l[7],y=l[8],A=l[9],C=l[10],M=l[11],_=l[12],B=l[13],N=l[14],U=l[15];if(r[0].setComponents(p-u,S-m,M-y,U-_).normalize(),r[1].setComponents(p+u,S+m,M+y,U+_).normalize(),r[2].setComponents(p+h,S+g,M+A,U+B).normalize(),r[3].setComponents(p-h,S-g,M-A,U-B).normalize(),r[4].setComponents(p-d,S-v,M-C,U-N).normalize(),i===Zi)r[5].setComponents(p+d,S+v,M+C,U+N).normalize();else if(i===pc)r[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(nc.x=l.normal.x>0?e.max.x:e.min.x,nc.y=l.normal.y>0?e.max.y:e.min.y,nc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z_ extends Rn{constructor(e,i,r=pr,l,u,h,d=fi,p=fi,m,g=So){if(g!==So&&g!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _c extends gr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,v=e/d,S=i/p,y=[],A=[],C=[],M=[];for(let _=0;_<g;_++){const B=_*S-h;for(let N=0;N<m;N++){const U=N*v-u;A.push(U,-B,0),C.push(0,0,1),M.push(N/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let B=0;B<d;B++){const N=B+m*_,U=B+m*(_+1),Z=B+1+m*(_+1),I=B+1+m*_;y.push(N,U,I),y.push(U,Z,I)}this.setIndex(y),this.setAttribute("position",new dr(A,3)),this.setAttribute("normal",new dr(C,3)),this.setAttribute("uv",new dr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.width,e.height,e.widthSegments,e.heightSegments)}}class LS extends gc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NS extends gc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $g={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class OS{constructor(e,i,r){const l=this;let u=!1,h=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,S=m.length;v<S;v+=2){const y=m[v],A=m[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return A}return null}}}const PS=new OS;class Qh{constructor(e){this.manager=e!==void 0?e:PS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qh.DEFAULT_MATERIAL_NAME="__DEFAULT";class BS extends Qh{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=$g.get(e);if(h!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0),h;const d=yo("img");function p(){g(),$g.add(e,this),i&&i(this),u.manager.itemEnd(e)}function m(v){g(),l&&l(v),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class Ab extends Qh{constructor(e){super(e)}load(e,i,r,l){const u=new Rn,h=new BS(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class zS extends W_{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IS extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function t_(o,e,i,r){const l=FS(r);switch(i){case U_:return o*e;case N_:return o*e/l.components*l.byteLength;case Wh:return o*e/l.components*l.byteLength;case O_:return o*e*2/l.components*l.byteLength;case qh:return o*e*2/l.components*l.byteLength;case L_:return o*e*3/l.components*l.byteLength;case ui:return o*e*4/l.components*l.byteLength;case Yh:return o*e*4/l.components*l.byteLength;case sc:case oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(o,16)*Math.max(e,8)/4;case dh:case mh:return Math.max(o,8)*Math.max(e,8)/2;case _h:case vh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case uc:case Oh:case Ph:return Math.ceil(o/4)*Math.ceil(e/4)*16;case P_:case Bh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zh:case Ih:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FS(o){switch(o){case ji:case C_:return{byteLength:1,components:1};case vo:case w_:case Eo:return{byteLength:2,components:1};case Xh:case kh:return{byteLength:2,components:4};case pr:case Vh:case Yi:return{byteLength:4,components:1};case D_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function K_(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function HS(o){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,g);else{v.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<v.length;y++){const A=v[S],C=v[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,v[S]=C)}v.length=S+1;for(let y=0,A=v.length;y<A;y++){const C=v[y];o.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var GS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
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
#endif`,XS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YS=`#ifdef USE_AOMAP
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
#endif`,ZS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
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
#endif`,QS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$S=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tM=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uM=`#define PI 3.141592653589793
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
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hM=`vec3 transformedNormal = objectNormal;
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
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
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
}`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
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
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,OM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
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
#endif`,FM=`struct PhysicalMaterial {
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
}`,HM=`
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QM=`#if defined( USE_POINTS_UV )
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
#endif`,jM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
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
#endif`,iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cy=`#ifdef USE_NORMALMAP
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
#endif`,uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,my=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,My=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,by=`float getShadowMask() {
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
}`,Ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wy=`#ifdef USE_SKINNING
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
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,Py=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gy=`uniform sampler2D t2D;
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`#include <common>
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
}`,Yy=`#if DEPTH_PACKING == 3200
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
}`,Zy=`#define DISTANCE
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
}`,Ky=`#define DISTANCE
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`uniform float scale;
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
}`,$y=`uniform vec3 diffuse;
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
}`,tE=`#include <common>
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
}`,eE=`uniform vec3 diffuse;
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
}`,nE=`#define LAMBERT
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
}`,iE=`#define LAMBERT
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
}`,aE=`#define MATCAP
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
}`,rE=`#define MATCAP
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
}`,sE=`#define NORMAL
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
}`,oE=`#define NORMAL
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
}`,lE=`#define PHONG
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
}`,cE=`#define PHONG
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
}`,uE=`#define STANDARD
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
}`,fE=`#define STANDARD
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
}`,hE=`#define TOON
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
}`,dE=`#define TOON
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
}`,pE=`uniform float size;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,_E=`uniform vec3 color;
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
}`,vE=`uniform float rotation;
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
}`,xE=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:GS,alphahash_pars_fragment:VS,alphamap_fragment:XS,alphamap_pars_fragment:kS,alphatest_fragment:WS,alphatest_pars_fragment:qS,aomap_fragment:YS,aomap_pars_fragment:ZS,batching_pars_vertex:KS,batching_vertex:QS,begin_vertex:jS,beginnormal_vertex:JS,bsdfs:$S,iridescence_fragment:tM,bumpmap_pars_fragment:eM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:oM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:hM,displacementmap_pars_vertex:dM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:vM,envmap_fragment:xM,envmap_common_pars_fragment:SM,envmap_pars_fragment:MM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:NM,envmap_vertex:EM,fog_vertex:TM,fog_pars_vertex:bM,fog_fragment:AM,fog_pars_fragment:RM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:wM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:UM,lights_pars_begin:LM,lights_toon_fragment:OM,lights_toon_pars_fragment:PM,lights_phong_fragment:BM,lights_phong_pars_fragment:zM,lights_physical_fragment:IM,lights_physical_pars_fragment:FM,lights_fragment_begin:HM,lights_fragment_maps:GM,lights_fragment_end:VM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:WM,logdepthbuf_vertex:qM,map_fragment:YM,map_pars_fragment:ZM,map_particle_fragment:KM,map_particle_pars_fragment:QM,metalnessmap_fragment:jM,metalnessmap_pars_fragment:JM,morphinstance_vertex:$M,morphcolor_vertex:ty,morphnormal_vertex:ey,morphtarget_pars_vertex:ny,morphtarget_vertex:iy,normal_fragment_begin:ay,normal_fragment_maps:ry,normal_pars_fragment:sy,normal_pars_vertex:oy,normal_vertex:ly,normalmap_pars_fragment:cy,clearcoat_normal_fragment_begin:uy,clearcoat_normal_fragment_maps:fy,clearcoat_pars_fragment:hy,iridescence_pars_fragment:dy,opaque_fragment:py,packing:my,premultiplied_alpha_fragment:gy,project_vertex:_y,dithering_fragment:vy,dithering_pars_fragment:xy,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:My,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:Ey,shadowmap_vertex:Ty,shadowmask_pars_fragment:by,skinbase_vertex:Ay,skinning_pars_vertex:Ry,skinning_vertex:Cy,skinnormal_vertex:wy,specularmap_fragment:Dy,specularmap_pars_fragment:Uy,tonemapping_fragment:Ly,tonemapping_pars_fragment:Ny,transmission_fragment:Oy,transmission_pars_fragment:Py,uv_pars_fragment:By,uv_pars_vertex:zy,uv_vertex:Iy,worldpos_vertex:Fy,background_vert:Hy,background_frag:Gy,backgroundCube_vert:Vy,backgroundCube_frag:Xy,cube_vert:ky,cube_frag:Wy,depth_vert:qy,depth_frag:Yy,distanceRGBA_vert:Zy,distanceRGBA_frag:Ky,equirect_vert:Qy,equirect_frag:jy,linedashed_vert:Jy,linedashed_frag:$y,meshbasic_vert:tE,meshbasic_frag:eE,meshlambert_vert:nE,meshlambert_frag:iE,meshmatcap_vert:aE,meshmatcap_frag:rE,meshnormal_vert:sE,meshnormal_frag:oE,meshphong_vert:lE,meshphong_frag:cE,meshphysical_vert:uE,meshphysical_frag:fE,meshtoon_vert:hE,meshtoon_frag:dE,points_vert:pE,points_frag:mE,shadow_vert:gE,shadow_frag:_E,sprite_vert:vE,sprite_frag:xE},bt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},vi={basic:{uniforms:An([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:An([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Le(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:An([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:An([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:An([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Le(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:An([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:An([bt.points,bt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:An([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:An([bt.common,bt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:An([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:An([bt.sprite,bt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:An([bt.common,bt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:An([bt.lights,bt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};vi.physical={uniforms:An([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const ic={r:0,b:0,g:0},rr=new Ji,SE=new en;function ME(o,e,i,r,l,u,h){const d=new Le(0);let p=u===!0?0:1,m,g,v=null,S=0,y=null;function A(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:e).get(U)),U}function C(N){let U=!1;const Z=A(N);Z===null?_(d,p):Z&&Z.isColor&&(_(Z,1),U=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,U){const Z=A(U);Z&&(Z.isCubeTexture||Z.mapping===mc)?(g===void 0&&(g=new Ki(new Ro(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:ms(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),rr.copy(U.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,Z.isCubeTexture&&Z.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),g.material.uniforms.envMap.value=Z,g.material.uniforms.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(SE.makeRotationFromEuler(rr)),g.material.toneMapped=ye.getTransfer(Z.colorSpace)!==Ue,(v!==Z||S!==Z.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=Z,S=Z.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):Z&&Z.isTexture&&(m===void 0&&(m=new Ki(new _c(2,2),new Pa({name:"BackgroundMaterial",uniforms:ms(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=Z,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=ye.getTransfer(Z.colorSpace)!==Ue,Z.matrixAutoUpdate===!0&&Z.updateMatrix(),m.material.uniforms.uvTransform.value.copy(Z.matrix),(v!==Z||S!==Z.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,v=Z,S=Z.version,y=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function _(N,U){N.getRGB(ic,k_(o)),r.buffers.color.setClear(ic.r,ic.g,ic.b,U,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),p=U,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,_(d,p)},render:C,addToRenderList:M,dispose:B}}function yE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(R,H,st,it,ct){let pt=!1;const O=v(it,st,H);u!==O&&(u=O,m(u.object)),pt=y(R,it,st,ct),pt&&A(R,it,st,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,U(R,H,st,it),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,H,st){const it=st.wireframe===!0;let ct=r[R.id];ct===void 0&&(ct={},r[R.id]=ct);let pt=ct[H.id];pt===void 0&&(pt={},ct[H.id]=pt);let O=pt[it];return O===void 0&&(O=S(p()),pt[it]=O),O}function S(R){const H=[],st=[],it=[];for(let ct=0;ct<i;ct++)H[ct]=0,st[ct]=0,it[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:it,object:R,attributes:{},index:null}}function y(R,H,st,it){const ct=u.attributes,pt=H.attributes;let O=0;const Q=st.getAttributes();for(const W in Q)if(Q[W].location>=0){const xt=ct[W];let Ut=pt[W];if(Ut===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Ut=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Ut=R.instanceColor)),xt===void 0||xt.attribute!==Ut||Ut&&xt.data!==Ut.data)return!0;O++}return u.attributesNum!==O||u.index!==it}function A(R,H,st,it){const ct={},pt=H.attributes;let O=0;const Q=st.getAttributes();for(const W in Q)if(Q[W].location>=0){let xt=pt[W];xt===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor));const Ut={};Ut.attribute=xt,xt&&xt.data&&(Ut.data=xt.data),ct[W]=Ut,O++}u.attributes=ct,u.attributesNum=O,u.index=it}function C(){const R=u.newAttributes;for(let H=0,st=R.length;H<st;H++)R[H]=0}function M(R){_(R,0)}function _(R,H){const st=u.newAttributes,it=u.enabledAttributes,ct=u.attributeDivisors;st[R]=1,it[R]===0&&(o.enableVertexAttribArray(R),it[R]=1),ct[R]!==H&&(o.vertexAttribDivisor(R,H),ct[R]=H)}function B(){const R=u.newAttributes,H=u.enabledAttributes;for(let st=0,it=H.length;st<it;st++)H[st]!==R[st]&&(o.disableVertexAttribArray(st),H[st]=0)}function N(R,H,st,it,ct,pt,O){O===!0?o.vertexAttribIPointer(R,H,st,ct,pt):o.vertexAttribPointer(R,H,st,it,ct,pt)}function U(R,H,st,it){C();const ct=it.attributes,pt=st.getAttributes(),O=H.defaultAttributeValues;for(const Q in pt){const W=pt[Q];if(W.location>=0){let gt=ct[Q];if(gt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const xt=gt.normalized,Ut=gt.itemSize,zt=e.get(gt);if(zt===void 0)continue;const Ht=zt.buffer,at=zt.type,St=zt.bytesPerElement,Lt=at===o.INT||at===o.UNSIGNED_INT||gt.gpuType===Vh;if(gt.isInterleavedBufferAttribute){const Et=gt.data,Xt=Et.stride,oe=gt.offset;if(Et.isInstancedInterleavedBuffer){for(let Zt=0;Zt<W.locationSize;Zt++)_(W.location+Zt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Zt=0;Zt<W.locationSize;Zt++)M(W.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let Zt=0;Zt<W.locationSize;Zt++)N(W.location+Zt,Ut/W.locationSize,at,xt,Xt*St,(oe+Ut/W.locationSize*Zt)*St,Lt)}else{if(gt.isInstancedBufferAttribute){for(let Et=0;Et<W.locationSize;Et++)_(W.location+Et,gt.meshPerAttribute);R.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Et=0;Et<W.locationSize;Et++)M(W.location+Et);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let Et=0;Et<W.locationSize;Et++)N(W.location+Et,Ut/W.locationSize,at,xt,Ut*St,Ut/W.locationSize*Et*St,Lt)}}else if(O!==void 0){const xt=O[Q];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(W.location,xt);break;case 3:o.vertexAttrib3fv(W.location,xt);break;case 4:o.vertexAttrib4fv(W.location,xt);break;default:o.vertexAttrib1fv(W.location,xt)}}}}B()}function Z(){q();for(const R in r){const H=r[R];for(const st in H){const it=H[st];for(const ct in it)g(it[ct].object),delete it[ct];delete H[st]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const st in H){const it=H[st];for(const ct in it)g(it[ct].object),delete it[ct];delete H[st]}delete r[R.id]}function F(R){for(const H in r){const st=r[H];if(st[R.id]===void 0)continue;const it=st[R.id];for(const ct in it)g(it[ct].object),delete it[ct];delete st[R.id]}}function q(){w(),h=!0,u!==l&&(u=l,m(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:w,dispose:Z,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function EE(o,e,i){let r;function l(m){r=m}function u(m,g){o.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,v){v!==0&&(o.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let y=0;for(let A=0;A<v;A++)y+=g[A];i.update(y,r,1)}function p(m,g,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<m.length;A++)h(m[A],g[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,S,0,v);let A=0;for(let C=0;C<v;C++)A+=g[C]*S[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function TE(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==ui&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const q=F===Eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ji&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Yi&&!q)}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Z=A>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:Z,maxSamples:I}}function bE(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new or,d=new ie,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,y){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||u&&!M)u?g(null):m();else{const B=u?0:r,N=B*4;let U=_.clippingState||null;p.value=U,U=g(A,S,N,y);for(let Z=0;Z!==N;++Z)U[Z]=i[Z];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,S,y,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=p.value,A!==!0||M===null){const _=y+C*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,U=y;N!==C;++N,U+=4)h.copy(v[N]).applyMatrix4(B,d),h.normal.toArray(M,U),M[U+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function AE(o){let e=new WeakMap;function i(h,d){return d===ch?h.mapping=hs:d===uh&&(h.mapping=ds),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ch||d===uh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new CS(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ls=4,e_=[.125,.215,.35,.446,.526,.582],ur=20,Zf=new zS,n_=new Le;let Kf=null,Qf=0,jf=0,Jf=!1;const lr=(1+Math.sqrt(5))/2,os=1/lr,i_=[new nt(-lr,os,0),new nt(lr,os,0),new nt(-os,0,lr),new nt(os,0,lr),new nt(0,lr,-os),new nt(0,lr,os),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],RE=new nt;class a_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=RE}=u;Kf=this._renderer.getRenderTarget(),Qf=this._renderer.getActiveCubeFace(),jf=this._renderer.getActiveMipmapLevel(),Jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kf,Qf,jf),this._renderer.xr.enabled=Jf,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===hs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kf=this._renderer.getRenderTarget(),Qf=this._renderer.getActiveCubeFace(),jf=this._renderer.getActiveMipmapLevel(),Jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Eo,format:ui,colorSpace:ps,depthBuffer:!1},l=r_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CE(u)),this._blurMaterial=wE(u,e,i)}return l}_compileMaterial(e){const i=new Ki(this._lodPlanes[0],e);this._renderer.compile(i,Zf)}_sceneToCubeUV(e,i,r,l,u){const p=new li(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(n_),v.toneMapping=Na,v.autoClear=!1;const A=new G_({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),C=new Ki(new Ro,A);let M=!1;const _=e.background;_?_.isColor&&(A.color.copy(_),e.background=null,M=!0):(A.color.copy(n_),M=!0);for(let B=0;B<6;B++){const N=B%3;N===0?(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[B],u.y,u.z)):N===1?(p.up.set(0,0,m[B]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[B],u.z)):(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[B]));const U=this._cubeSize;ac(l,N*U,B>2?U:0,U,U),v.setRenderTarget(l),M&&v.render(C,p),v.render(e,p)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=y,v.autoClear=S,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===hs||e.mapping===ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=o_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ki(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;ac(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Zf)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=i_[(l-u-1)%i_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ki(this._lodPlanes[l],m),S=m.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ur-1),C=u/A,M=isFinite(u)?1+Math.floor(g*C):ur;M>ur&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ur}`);const _=[];let B=0;for(let F=0;F<ur;++F){const q=F/C,w=Math.exp(-q*q/2);_.push(w),F===0?B+=w:F<M&&(B+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/B;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-r;const U=this._sizeLods[l],Z=3*U*(l>N-ls?l-N+ls:0),I=4*(this._cubeSize-U);ac(i,Z,I,3*U,2*U),p.setRenderTarget(i),p.render(v,Zf)}}function CE(o){const e=[],i=[],r=[];let l=o;const u=o-ls+1+e_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-ls?p=e_[h-o+ls-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,S=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,A=6,C=3,M=2,_=1,B=new Float32Array(C*A*y),N=new Float32Array(M*A*y),U=new Float32Array(_*A*y);for(let I=0;I<y;I++){const F=I%3*2/3-1,q=I>2?0:-1,w=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];B.set(w,C*A*I),N.set(S,M*A*I);const R=[I,I,I,I,I,I];U.set(R,_*A*I)}const Z=new gr;Z.setAttribute("position",new Si(B,C)),Z.setAttribute("uv",new Si(N,M)),Z.setAttribute("faceIndex",new Si(U,_)),e.push(Z),l>ls&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function r_(o,e,i){const r=new mr(o,e,i);return r.texture.mapping=mc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ac(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function wE(o,e,i){const r=new Float32Array(ur),l=new nt(0,1,0);return new Pa({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jh(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function s_(){return new Pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function o_(){return new Pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function jh(){return`

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
	`}function DE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ch||p===uh,g=p===hs||p===ds;if(m||g){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new a_(o)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new a_(o)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function UE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&fc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function LE(o,e,i,r){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(v){const S=v.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function m(v){const S=[],y=v.index,A=v.attributes.position;let C=0;if(y!==null){const B=y.array;C=y.version;for(let N=0,U=B.length;N<U;N+=3){const Z=B[N+0],I=B[N+1],F=B[N+2];S.push(Z,I,I,F,F,Z)}}else if(A!==void 0){const B=A.array;C=A.version;for(let N=0,U=B.length/3-1;N<U;N+=3){const Z=N+0,I=N+1,F=N+2;S.push(Z,I,I,F,F,Z)}}else return;const M=new(z_(S)?X_:V_)(S,1);M.version=C;const _=u.get(v);_&&e.remove(_),u.set(v,M)}function g(v){const S=u.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function NE(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function p(S,y){o.drawElements(r,y,u,S*h),i.update(y,r,1)}function m(S,y,A){A!==0&&(o.drawElementsInstanced(r,y,u,S*h,A),i.update(y,r,A))}function g(S,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,r,1)}function v(S,y,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)m(S[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,C,0,A);let _=0;for(let B=0;B<A;B++)_+=y[B]*C[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function OE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function PE(o,e,i){const r=new WeakMap,l=new Ke;function u(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let w=function(){F.dispose(),r.delete(d),d.removeEventListener("dispose",w)};S!==void 0&&S.texture.dispose();const y=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let N=0;y===!0&&(N=1),A===!0&&(N=2),C===!0&&(N=3);let U=d.attributes.position.count*N,Z=1;U>e.maxTextureSize&&(Z=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*Z*4*v),F=new I_(I,U,Z,v);F.type=Yi,F.needsUpdate=!0;const q=N*4;for(let R=0;R<v;R++){const H=M[R],st=_[R],it=B[R],ct=U*Z*4*R;for(let pt=0;pt<H.count;pt++){const O=pt*q;y===!0&&(l.fromBufferAttribute(H,pt),I[ct+O+0]=l.x,I[ct+O+1]=l.y,I[ct+O+2]=l.z,I[ct+O+3]=0),A===!0&&(l.fromBufferAttribute(st,pt),I[ct+O+4]=l.x,I[ct+O+5]=l.y,I[ct+O+6]=l.z,I[ct+O+7]=0),C===!0&&(l.fromBufferAttribute(it,pt),I[ct+O+8]=l.x,I[ct+O+9]=l.y,I[ct+O+10]=l.z,I[ct+O+11]=it.itemSize===4?l.w:1)}}S={count:v,texture:F,size:new Be(U,Z)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let C=0;C<m.length;C++)y+=m[C];const A=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function BE(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const Q_=new Rn,l_=new Z_(1,1),j_=new I_,J_=new uS,$_=new q_,c_=[],u_=[],f_=new Float32Array(16),h_=new Float32Array(9),d_=new Float32Array(4);function _s(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=c_[l];if(u===void 0&&(u=new Float32Array(l),c_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function on(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function vc(o,e){let i=u_[e];i===void 0&&(i=new Int32Array(e),u_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function zE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function IE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2fv(this.addr,e),ln(i,e)}}function FE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;o.uniform3fv(this.addr,e),ln(i,e)}}function HE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4fv(this.addr,e),ln(i,e)}}function GE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;d_.set(r),o.uniformMatrix2fv(this.addr,!1,d_),ln(i,r)}}function VE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;h_.set(r),o.uniformMatrix3fv(this.addr,!1,h_),ln(i,r)}}function XE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;f_.set(r),o.uniformMatrix4fv(this.addr,!1,f_),ln(i,r)}}function kE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function WE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2iv(this.addr,e),ln(i,e)}}function qE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3iv(this.addr,e),ln(i,e)}}function YE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4iv(this.addr,e),ln(i,e)}}function ZE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function KE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2uiv(this.addr,e),ln(i,e)}}function QE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3uiv(this.addr,e),ln(i,e)}}function jE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4uiv(this.addr,e),ln(i,e)}}function JE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(l_.compareFunction=B_,u=l_):u=Q_,i.setTexture2D(e||u,l)}function $E(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||J_,l)}function tT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||$_,l)}function eT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||j_,l)}function nT(o){switch(o){case 5126:return zE;case 35664:return IE;case 35665:return FE;case 35666:return HE;case 35674:return GE;case 35675:return VE;case 35676:return XE;case 5124:case 35670:return kE;case 35667:case 35671:return WE;case 35668:case 35672:return qE;case 35669:case 35673:return YE;case 5125:return ZE;case 36294:return KE;case 36295:return QE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return $E;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return eT}}function iT(o,e){o.uniform1fv(this.addr,e)}function aT(o,e){const i=_s(e,this.size,2);o.uniform2fv(this.addr,i)}function rT(o,e){const i=_s(e,this.size,3);o.uniform3fv(this.addr,i)}function sT(o,e){const i=_s(e,this.size,4);o.uniform4fv(this.addr,i)}function oT(o,e){const i=_s(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function lT(o,e){const i=_s(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function cT(o,e){const i=_s(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function uT(o,e){o.uniform1iv(this.addr,e)}function fT(o,e){o.uniform2iv(this.addr,e)}function hT(o,e){o.uniform3iv(this.addr,e)}function dT(o,e){o.uniform4iv(this.addr,e)}function pT(o,e){o.uniform1uiv(this.addr,e)}function mT(o,e){o.uniform2uiv(this.addr,e)}function gT(o,e){o.uniform3uiv(this.addr,e)}function _T(o,e){o.uniform4uiv(this.addr,e)}function vT(o,e,i){const r=this.cache,l=e.length,u=vc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Q_,u[h])}function xT(o,e,i){const r=this.cache,l=e.length,u=vc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||J_,u[h])}function ST(o,e,i){const r=this.cache,l=e.length,u=vc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||$_,u[h])}function MT(o,e,i){const r=this.cache,l=e.length,u=vc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||j_,u[h])}function yT(o){switch(o){case 5126:return iT;case 35664:return aT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}class ET{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=nT(i.type)}}class TT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yT(i.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const $f=/(\w+)(\])?(\[|\.)?/g;function p_(o,e){o.seq.push(e),o.map[e.id]=e}function AT(o,e,i){const r=o.name,l=r.length;for($f.lastIndex=0;;){const u=$f.exec(r),h=$f.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){p_(i,m===void 0?new ET(d,o,e):new TT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new bT(d),p_(i,v)),i=v}}}class hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);AT(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function m_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const RT=37297;let CT=0;function wT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const g_=new ie;function DT(o){ye._getMatrix(g_,ye.workingColorSpace,o);const e=`mat3( ${g_.elements.map(i=>i.toFixed(4))} )`;switch(ye.getTransfer(o)){case dc:return[e,"LinearTransferOETF"];case Ue:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function __(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+wT(o.getShaderSource(e),h)}else return l}function UT(o,e){const i=DT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function LT(o,e){let i;switch(e){case Px:i="Linear";break;case Bx:i="Reinhard";break;case zx:i="Cineon";break;case Ix:i="ACESFilmic";break;case Hx:i="AgX";break;case Gx:i="Neutral";break;case Fx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const rc=new nt;function NT(){ye.getLuminanceCoefficients(rc);const o=rc.x.toFixed(4),e=rc.y.toFixed(4),i=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function PT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function BT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function _o(o){return o!==""}function v_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(o){return o.replace(zT,FT)}const IT=new Map;function FT(o,e){let i=ae[e];if(i===void 0){const r=IT.get(e);if(r!==void 0)i=ae[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hh(i)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(o){return o.replace(HT,GT)}function GT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function M_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===px?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function XT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case hs:case ds:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function WT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case A_:e="ENVMAP_BLENDING_MULTIPLY";break;case Nx:e="ENVMAP_BLENDING_MIX";break;case Ox:e="ENVMAP_BLENDING_ADD";break}return e}function qT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function YT(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=VT(i),m=XT(i),g=kT(i),v=WT(i),S=qT(i),y=OT(i),A=PT(u),C=l.createProgram();let M,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(_o).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(_o).join(`
`),_.length>0&&(_+=`
`)):(M=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),_=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Na?"#define TONE_MAPPING":"",i.toneMapping!==Na?ae.tonemapping_pars_fragment:"",i.toneMapping!==Na?LT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,UT("linearToOutputTexel",i.outputColorSpace),NT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_o).join(`
`)),h=Hh(h),h=v_(h,i),h=x_(h,i),d=Hh(d),d=v_(d,i),d=x_(d,i),h=S_(h),d=S_(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=B+M+h,U=B+_+d,Z=m_(l,l.VERTEX_SHADER,N),I=m_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,Z),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(H){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(C).trim(),it=l.getShaderInfoLog(Z).trim(),ct=l.getShaderInfoLog(I).trim();let pt=!0,O=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(pt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,Z,I);else{const Q=__(l,Z,"vertex"),W=__(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+Q+`
`+W)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(it===""||ct==="")&&(O=!1);O&&(H.diagnostics={runnable:pt,programLog:st,vertexShader:{log:it,prefix:M},fragmentShader:{log:ct,prefix:_}})}l.deleteShader(Z),l.deleteShader(I),q=new hc(l,C),w=BT(l,C)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,RT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=Z,this.fragmentShader=I,this}let ZT=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new QT(e),i.set(e,r)),r}}class QT{constructor(e){this.id=ZT++,this.code=e,this.usedTimes=0}}function jT(o,e,i,r,l,u,h){const d=new F_,p=new KT,m=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function M(w,R,H,st,it){const ct=st.fog,pt=it.geometry,O=w.isMeshStandardMaterial?st.environment:null,Q=(w.isMeshStandardMaterial?i:e).get(w.envMap||O),W=Q&&Q.mapping===mc?Q.image.height:null,gt=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const xt=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Ut=xt!==void 0?xt.length:0;let zt=0;pt.morphAttributes.position!==void 0&&(zt=1),pt.morphAttributes.normal!==void 0&&(zt=2),pt.morphAttributes.color!==void 0&&(zt=3);let Ht,at,St,Lt;if(gt){const xe=vi[gt];Ht=xe.vertexShader,at=xe.fragmentShader}else Ht=w.vertexShader,at=w.fragmentShader,p.update(w),St=p.getVertexShaderID(w),Lt=p.getFragmentShaderID(w);const Et=o.getRenderTarget(),Xt=o.state.buffers.depth.getReversed(),oe=it.isInstancedMesh===!0,Zt=it.isBatchedMesh===!0,ze=!!w.map,Ne=!!w.matcap,le=!!Q,P=!!w.aoMap,Cn=!!w.lightMap,de=!!w.bumpMap,ee=!!w.normalMap,Vt=!!w.displacementMap,Ae=!!w.emissiveMap,It=!!w.metalnessMap,D=!!w.roughnessMap,T=w.anisotropy>0,j=w.clearcoat>0,ft=w.dispersion>0,mt=w.iridescence>0,lt=w.sheen>0,Ct=w.transmission>0,Mt=T&&!!w.anisotropyMap,Bt=j&&!!w.clearcoatMap,jt=j&&!!w.clearcoatNormalMap,vt=j&&!!w.clearcoatRoughnessMap,Ot=mt&&!!w.iridescenceMap,qt=mt&&!!w.iridescenceThicknessMap,Kt=lt&&!!w.sheenColorMap,wt=lt&&!!w.sheenRoughnessMap,re=!!w.specularMap,te=!!w.specularColorMap,Re=!!w.specularIntensityMap,G=Ct&&!!w.transmissionMap,At=Ct&&!!w.thicknessMap,rt=!!w.gradientMap,ht=!!w.alphaMap,Dt=w.alphaTest>0,Rt=!!w.alphaHash,ne=!!w.extensions;let Ie=Na;w.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ie=o.toneMapping);const Qe={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:Ht,fragmentShader:at,defines:w.defines,customVertexShaderID:St,customFragmentShaderID:Lt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Zt,batchingColor:Zt&&it._colorsTexture!==null,instancing:oe,instancingColor:oe&&it.instanceColor!==null,instancingMorph:oe&&it.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:ps,alphaToCoverage:!!w.alphaToCoverage,map:ze,matcap:Ne,envMap:le,envMapMode:le&&Q.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:Cn,bumpMap:de,normalMap:ee,displacementMap:S&&Vt,emissiveMap:Ae,normalMapObjectSpace:ee&&w.normalMapType===qx,normalMapTangentSpace:ee&&w.normalMapType===Wx,metalnessMap:It,roughnessMap:D,anisotropy:T,anisotropyMap:Mt,clearcoat:j,clearcoatMap:Bt,clearcoatNormalMap:jt,clearcoatRoughnessMap:vt,dispersion:ft,iridescence:mt,iridescenceMap:Ot,iridescenceThicknessMap:qt,sheen:lt,sheenColorMap:Kt,sheenRoughnessMap:wt,specularMap:re,specularColorMap:te,specularIntensityMap:Re,transmission:Ct,transmissionMap:G,thicknessMap:At,gradientMap:rt,opaque:w.transparent===!1&&w.blending===cs&&w.alphaToCoverage===!1,alphaMap:ht,alphaTest:Dt,alphaHash:Rt,combine:w.combine,mapUv:ze&&C(w.map.channel),aoMapUv:P&&C(w.aoMap.channel),lightMapUv:Cn&&C(w.lightMap.channel),bumpMapUv:de&&C(w.bumpMap.channel),normalMapUv:ee&&C(w.normalMap.channel),displacementMapUv:Vt&&C(w.displacementMap.channel),emissiveMapUv:Ae&&C(w.emissiveMap.channel),metalnessMapUv:It&&C(w.metalnessMap.channel),roughnessMapUv:D&&C(w.roughnessMap.channel),anisotropyMapUv:Mt&&C(w.anisotropyMap.channel),clearcoatMapUv:Bt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:jt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:wt&&C(w.sheenRoughnessMap.channel),specularMapUv:re&&C(w.specularMap.channel),specularColorMapUv:te&&C(w.specularColorMap.channel),specularIntensityMapUv:Re&&C(w.specularIntensityMap.channel),transmissionMapUv:G&&C(w.transmissionMap.channel),thicknessMapUv:At&&C(w.thicknessMap.channel),alphaMapUv:ht&&C(w.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(ee||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!pt.attributes.uv&&(ze||ht),fog:!!ct,useFog:w.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Xt,skinning:it.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:zt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ze&&w.map.isVideoTexture===!0&&ye.getTransfer(w.map.colorSpace)===Ue,decodeVideoTextureEmissive:Ae&&w.emissiveMap.isVideoTexture===!0&&ye.getTransfer(w.emissiveMap.colorSpace)===Ue,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qi,flipSided:w.side===Pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ne&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&w.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(B(R,w),N(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function B(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function N(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const R=A[w.type];let H;if(R){const st=vi[R];H=TS.clone(st.uniforms)}else H=w.uniforms;return H}function Z(w,R){let H;for(let st=0,it=g.length;st<it;st++){const ct=g[st];if(ct.cacheKey===R){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new YT(o,R,w,u),g.push(H)),H}function I(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function F(w){p.remove(w)}function q(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:Z,releaseProgram:I,releaseShaderCache:F,programs:g,dispose:q}}function JT(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function $T(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function y_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function E_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,y,A,C,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=M),e++,_}function d(v,S,y,A,C,M){const _=h(v,S,y,A,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function p(v,S,y,A,C,M){const _=h(v,S,y,A,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,S){i.length>1&&i.sort(v||$T),r.length>1&&r.sort(S||y_),l.length>1&&l.sort(S||y_)}function g(){for(let v=e,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function tb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new E_,o.set(r,[h])):l>=u.length?(h=new E_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function eb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new Le};break;case"SpotLight":i={position:new nt,direction:new nt,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function nb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let ib=0;function ab(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function rb(o){const e=new eb,i=nb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new nt);const l=new nt,u=new en,h=new en;function d(m){let g=0,v=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,A=0,C=0,M=0,_=0,B=0,N=0,U=0,Z=0,I=0,F=0;m.sort(ab);for(let w=0,R=m.length;w<R;w++){const H=m[w],st=H.color,it=H.intensity,ct=H.distance,pt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=st.r*it,v+=st.g*it,S+=st.b*it;else if(H.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(H.sh.coefficients[O],it);F++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,W=i.get(H);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=pt,r.directionalShadowMatrix[y]=H.shadow.matrix,B++}r.directional[y]=O,y++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(st).multiplyScalar(it),O.distance=ct,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,r.spot[C]=O;const Q=H.shadow;if(H.map&&(r.spotLightMap[Z]=H.map,Z++,Q.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[C]=Q.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.spotShadow[C]=W,r.spotShadowMap[C]=pt,U++}C++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(st).multiplyScalar(it),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=O,M++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Q=H.shadow,W=i.get(H);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,r.pointShadow[A]=W,r.pointShadowMap[A]=pt,r.pointShadowMatrix[A]=H.shadow.matrix,N++}r.point[A]=O,A++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(it),O.groundColor.copy(H.groundColor).multiplyScalar(it),r.hemi[_]=O,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=bt.LTC_FLOAT_1,r.rectAreaLTC2=bt.LTC_FLOAT_2):(r.rectAreaLTC1=bt.LTC_HALF_1,r.rectAreaLTC2=bt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==y||q.pointLength!==A||q.spotLength!==C||q.rectAreaLength!==M||q.hemiLength!==_||q.numDirectionalShadows!==B||q.numPointShadows!==N||q.numSpotShadows!==U||q.numSpotMaps!==Z||q.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+Z-I,r.spotLightMap.length=Z,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,q.directionalLength=y,q.pointLength=A,q.spotLength=C,q.rectAreaLength=M,q.hemiLength=_,q.numDirectionalShadows=B,q.numPointShadows=N,q.numSpotShadows=U,q.numSpotMaps=Z,q.numLightProbes=F,r.version=ib++)}function p(m,g){let v=0,S=0,y=0,A=0,C=0;const M=g.matrixWorldInverse;for(let _=0,B=m.length;_<B;_++){const N=m[_];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(N.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:p,state:r}}function T_(o){const e=new rb(o),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function sb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new T_(o),e.set(l,[d])):u>=h.length?(d=new T_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
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
}`;function cb(o,e,i){let r=new Y_;const l=new Be,u=new Be,h=new Ke,d=new LS({depthPacking:kx}),p=new NS,m={},g=i.maxTextureSize,v={[Oa]:Pn,[Pn]:Oa,[qi]:qi},S=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:ob,fragmentShader:lb}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new gr;A.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ki(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b_;let _=this.type;this.render=function(I,F,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),st=o.state;st.setBlending(La),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const it=_!==Wi&&this.type===Wi,ct=_===Wi&&this.type!==Wi;for(let pt=0,O=I.length;pt<O;pt++){const Q=I[pt],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const gt=W.getFrameExtents();if(l.multiply(gt),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/gt.x),l.x=u.x*gt.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/gt.y),l.y=u.y*gt.y,W.mapSize.y=u.y)),W.map===null||it===!0||ct===!0){const Ut=this.type!==Wi?{minFilter:fi,magFilter:fi}:{};W.map!==null&&W.map.dispose(),W.map=new mr(l.x,l.y,Ut),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const xt=W.getViewportCount();for(let Ut=0;Ut<xt;Ut++){const zt=W.getViewport(Ut);h.set(u.x*zt.x,u.y*zt.y,u.x*zt.z,u.y*zt.w),st.viewport(h),W.updateMatrices(Q,Ut),r=W.getFrustum(),U(F,q,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Wi&&B(W,q),W.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,H)};function B(I,F){const q=e.update(C);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new mr(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(F,null,q,S,C,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(F,null,q,y,C,null)}function N(I,F,q,w){let R=null;const H=q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)R=H;else if(R=q.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const st=R.uuid,it=F.uuid;let ct=m[st];ct===void 0&&(ct={},m[st]=ct);let pt=ct[it];pt===void 0&&(pt=R.clone(),ct[it]=pt,F.addEventListener("dispose",Z)),R=pt}if(R.visible=F.visible,R.wireframe=F.wireframe,w===Wi?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const st=o.properties.get(R);st.light=q}return R}function U(I,F,q,w,R){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Wi)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld);const it=e.update(I),ct=I.material;if(Array.isArray(ct)){const pt=it.groups;for(let O=0,Q=pt.length;O<Q;O++){const W=pt[O],gt=ct[W.materialIndex];if(gt&&gt.visible){const xt=N(I,gt,w,R);I.onBeforeShadow(o,I,F,q,it,xt,W),o.renderBufferDirect(q,null,it,xt,I,W),I.onAfterShadow(o,I,F,q,it,xt,W)}}}else if(ct.visible){const pt=N(I,ct,w,R);I.onBeforeShadow(o,I,F,q,it,pt,null),o.renderBufferDirect(q,null,it,pt,I,null),I.onAfterShadow(o,I,F,q,it,pt,null)}}const st=I.children;for(let it=0,ct=st.length;it<ct;it++)U(st[it],F,q,w,R)}function Z(I){I.target.removeEventListener("dispose",Z);for(const q in m){const w=m[q],R=I.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const ub={[nh]:ih,[ah]:oh,[rh]:lh,[fs]:sh,[ih]:nh,[oh]:ah,[lh]:rh,[sh]:fs};function fb(o,e){function i(){let G=!1;const At=new Ke;let rt=null;const ht=new Ke(0,0,0,0);return{setMask:function(Dt){rt!==Dt&&!G&&(o.colorMask(Dt,Dt,Dt,Dt),rt=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,Rt,ne,Ie,Qe){Qe===!0&&(Dt*=Ie,Rt*=Ie,ne*=Ie),At.set(Dt,Rt,ne,Ie),ht.equals(At)===!1&&(o.clearColor(Dt,Rt,ne,Ie),ht.copy(At))},reset:function(){G=!1,rt=null,ht.set(-1,0,0,0)}}}function r(){let G=!1,At=!1,rt=null,ht=null,Dt=null;return{setReversed:function(Rt){if(At!==Rt){const ne=e.get("EXT_clip_control");Rt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),At=Rt;const Ie=Dt;Dt=null,this.setClear(Ie)}},getReversed:function(){return At},setTest:function(Rt){Rt?Et(o.DEPTH_TEST):Xt(o.DEPTH_TEST)},setMask:function(Rt){rt!==Rt&&!G&&(o.depthMask(Rt),rt=Rt)},setFunc:function(Rt){if(At&&(Rt=ub[Rt]),ht!==Rt){switch(Rt){case nh:o.depthFunc(o.NEVER);break;case ih:o.depthFunc(o.ALWAYS);break;case ah:o.depthFunc(o.LESS);break;case fs:o.depthFunc(o.LEQUAL);break;case rh:o.depthFunc(o.EQUAL);break;case sh:o.depthFunc(o.GEQUAL);break;case oh:o.depthFunc(o.GREATER);break;case lh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ht=Rt}},setLocked:function(Rt){G=Rt},setClear:function(Rt){Dt!==Rt&&(At&&(Rt=1-Rt),o.clearDepth(Rt),Dt=Rt)},reset:function(){G=!1,rt=null,ht=null,Dt=null,At=!1}}}function l(){let G=!1,At=null,rt=null,ht=null,Dt=null,Rt=null,ne=null,Ie=null,Qe=null;return{setTest:function(xe){G||(xe?Et(o.STENCIL_TEST):Xt(o.STENCIL_TEST))},setMask:function(xe){At!==xe&&!G&&(o.stencilMask(xe),At=xe)},setFunc:function(xe,Bn,cn){(rt!==xe||ht!==Bn||Dt!==cn)&&(o.stencilFunc(xe,Bn,cn),rt=xe,ht=Bn,Dt=cn)},setOp:function(xe,Bn,cn){(Rt!==xe||ne!==Bn||Ie!==cn)&&(o.stencilOp(xe,Bn,cn),Rt=xe,ne=Bn,Ie=cn)},setLocked:function(xe){G=xe},setClear:function(xe){Qe!==xe&&(o.clearStencil(xe),Qe=xe)},reset:function(){G=!1,At=null,rt=null,ht=null,Dt=null,Rt=null,ne=null,Ie=null,Qe=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},S=new WeakMap,y=[],A=null,C=!1,M=null,_=null,B=null,N=null,U=null,Z=null,I=null,F=new Le(0,0,0),q=0,w=!1,R=null,H=null,st=null,it=null,ct=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Q=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Q>=2);let gt=null,xt={};const Ut=o.getParameter(o.SCISSOR_BOX),zt=o.getParameter(o.VIEWPORT),Ht=new Ke().fromArray(Ut),at=new Ke().fromArray(zt);function St(G,At,rt,ht){const Dt=new Uint8Array(4),Rt=o.createTexture();o.bindTexture(G,Rt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<rt;ne++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,ht,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(At+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return Rt}const Lt={};Lt[o.TEXTURE_2D]=St(o.TEXTURE_2D,o.TEXTURE_2D,1),Lt[o.TEXTURE_CUBE_MAP]=St(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[o.TEXTURE_2D_ARRAY]=St(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Lt[o.TEXTURE_3D]=St(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Et(o.DEPTH_TEST),h.setFunc(fs),de(!1),ee(wg),Et(o.CULL_FACE),P(La);function Et(G){g[G]!==!0&&(o.enable(G),g[G]=!0)}function Xt(G){g[G]!==!1&&(o.disable(G),g[G]=!1)}function oe(G,At){return v[G]!==At?(o.bindFramebuffer(G,At),v[G]=At,G===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=At),G===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Zt(G,At){let rt=y,ht=!1;if(G){rt=S.get(At),rt===void 0&&(rt=[],S.set(At,rt));const Dt=G.textures;if(rt.length!==Dt.length||rt[0]!==o.COLOR_ATTACHMENT0){for(let Rt=0,ne=Dt.length;Rt<ne;Rt++)rt[Rt]=o.COLOR_ATTACHMENT0+Rt;rt.length=Dt.length,ht=!0}}else rt[0]!==o.BACK&&(rt[0]=o.BACK,ht=!0);ht&&o.drawBuffers(rt)}function ze(G){return A!==G?(o.useProgram(G),A=G,!0):!1}const Ne={[cr]:o.FUNC_ADD,[gx]:o.FUNC_SUBTRACT,[_x]:o.FUNC_REVERSE_SUBTRACT};Ne[vx]=o.MIN,Ne[xx]=o.MAX;const le={[Sx]:o.ZERO,[Mx]:o.ONE,[yx]:o.SRC_COLOR,[th]:o.SRC_ALPHA,[Cx]:o.SRC_ALPHA_SATURATE,[Ax]:o.DST_COLOR,[Tx]:o.DST_ALPHA,[Ex]:o.ONE_MINUS_SRC_COLOR,[eh]:o.ONE_MINUS_SRC_ALPHA,[Rx]:o.ONE_MINUS_DST_COLOR,[bx]:o.ONE_MINUS_DST_ALPHA,[wx]:o.CONSTANT_COLOR,[Dx]:o.ONE_MINUS_CONSTANT_COLOR,[Ux]:o.CONSTANT_ALPHA,[Lx]:o.ONE_MINUS_CONSTANT_ALPHA};function P(G,At,rt,ht,Dt,Rt,ne,Ie,Qe,xe){if(G===La){C===!0&&(Xt(o.BLEND),C=!1);return}if(C===!1&&(Et(o.BLEND),C=!0),G!==mx){if(G!==M||xe!==w){if((_!==cr||U!==cr)&&(o.blendEquation(o.FUNC_ADD),_=cr,U=cr),xe)switch(G){case cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dg:o.blendFunc(o.ONE,o.ONE);break;case Ug:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ug:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}B=null,N=null,Z=null,I=null,F.set(0,0,0),q=0,M=G,w=xe}return}Dt=Dt||At,Rt=Rt||rt,ne=ne||ht,(At!==_||Dt!==U)&&(o.blendEquationSeparate(Ne[At],Ne[Dt]),_=At,U=Dt),(rt!==B||ht!==N||Rt!==Z||ne!==I)&&(o.blendFuncSeparate(le[rt],le[ht],le[Rt],le[ne]),B=rt,N=ht,Z=Rt,I=ne),(Ie.equals(F)===!1||Qe!==q)&&(o.blendColor(Ie.r,Ie.g,Ie.b,Qe),F.copy(Ie),q=Qe),M=G,w=!1}function Cn(G,At){G.side===qi?Xt(o.CULL_FACE):Et(o.CULL_FACE);let rt=G.side===Pn;At&&(rt=!rt),de(rt),G.blending===cs&&G.transparent===!1?P(La):P(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),u.setMask(G.colorWrite);const ht=G.stencilWrite;d.setTest(ht),ht&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ae(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):Xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function de(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function ee(G){G!==hx?(Et(o.CULL_FACE),G!==H&&(G===wg?o.cullFace(o.BACK):G===dx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Xt(o.CULL_FACE),H=G}function Vt(G){G!==st&&(O&&o.lineWidth(G),st=G)}function Ae(G,At,rt){G?(Et(o.POLYGON_OFFSET_FILL),(it!==At||ct!==rt)&&(o.polygonOffset(At,rt),it=At,ct=rt)):Xt(o.POLYGON_OFFSET_FILL)}function It(G){G?Et(o.SCISSOR_TEST):Xt(o.SCISSOR_TEST)}function D(G){G===void 0&&(G=o.TEXTURE0+pt-1),gt!==G&&(o.activeTexture(G),gt=G)}function T(G,At,rt){rt===void 0&&(gt===null?rt=o.TEXTURE0+pt-1:rt=gt);let ht=xt[rt];ht===void 0&&(ht={type:void 0,texture:void 0},xt[rt]=ht),(ht.type!==G||ht.texture!==At)&&(gt!==rt&&(o.activeTexture(rt),gt=rt),o.bindTexture(G,At||Lt[G]),ht.type=G,ht.texture=At)}function j(){const G=xt[gt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ft(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(G){Ht.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Ht.copy(G))}function wt(G){at.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),at.copy(G))}function re(G,At){let rt=m.get(At);rt===void 0&&(rt=new WeakMap,m.set(At,rt));let ht=rt.get(G);ht===void 0&&(ht=o.getUniformBlockIndex(At,G.name),rt.set(G,ht))}function te(G,At){const ht=m.get(At).get(G);p.get(At)!==ht&&(o.uniformBlockBinding(At,ht,G.__bindingPointIndex),p.set(At,ht))}function Re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},gt=null,xt={},v={},S=new WeakMap,y=[],A=null,C=!1,M=null,_=null,B=null,N=null,U=null,Z=null,I=null,F=new Le(0,0,0),q=0,w=!1,R=null,H=null,st=null,it=null,ct=null,Ht.set(0,0,o.canvas.width,o.canvas.height),at.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Et,disable:Xt,bindFramebuffer:oe,drawBuffers:Zt,useProgram:ze,setBlending:P,setMaterial:Cn,setFlipSided:de,setCullFace:ee,setLineWidth:Vt,setPolygonOffset:Ae,setScissorTest:It,activeTexture:D,bindTexture:T,unbindTexture:j,compressedTexImage2D:ft,compressedTexImage3D:mt,texImage2D:Ot,texImage3D:qt,updateUBOMapping:re,uniformBlockBinding:te,texStorage2D:jt,texStorage3D:vt,texSubImage2D:lt,texSubImage3D:Ct,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Bt,scissor:Kt,viewport:wt,reset:Re}}function hb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Be,g=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,T){return y?new OffscreenCanvas(D,T):yo("canvas")}function C(D,T,j){let ft=1;const mt=It(D);if((mt.width>j||mt.height>j)&&(ft=j/Math.max(mt.width,mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const lt=Math.floor(ft*mt.width),Ct=Math.floor(ft*mt.height);v===void 0&&(v=A(lt,Ct));const Mt=T?A(lt,Ct):v;return Mt.width=lt,Mt.height=Ct,Mt.getContext("2d").drawImage(D,0,0,lt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+lt+"x"+Ct+")."),Mt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),D;return D}function M(D){return D.generateMipmaps}function _(D){o.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(D,T,j,ft,mt=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let lt=T;if(T===o.RED&&(j===o.FLOAT&&(lt=o.R32F),j===o.HALF_FLOAT&&(lt=o.R16F),j===o.UNSIGNED_BYTE&&(lt=o.R8)),T===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(lt=o.R8UI),j===o.UNSIGNED_SHORT&&(lt=o.R16UI),j===o.UNSIGNED_INT&&(lt=o.R32UI),j===o.BYTE&&(lt=o.R8I),j===o.SHORT&&(lt=o.R16I),j===o.INT&&(lt=o.R32I)),T===o.RG&&(j===o.FLOAT&&(lt=o.RG32F),j===o.HALF_FLOAT&&(lt=o.RG16F),j===o.UNSIGNED_BYTE&&(lt=o.RG8)),T===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(lt=o.RG8UI),j===o.UNSIGNED_SHORT&&(lt=o.RG16UI),j===o.UNSIGNED_INT&&(lt=o.RG32UI),j===o.BYTE&&(lt=o.RG8I),j===o.SHORT&&(lt=o.RG16I),j===o.INT&&(lt=o.RG32I)),T===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),j===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),j===o.UNSIGNED_INT&&(lt=o.RGB32UI),j===o.BYTE&&(lt=o.RGB8I),j===o.SHORT&&(lt=o.RGB16I),j===o.INT&&(lt=o.RGB32I)),T===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),j===o.UNSIGNED_INT&&(lt=o.RGBA32UI),j===o.BYTE&&(lt=o.RGBA8I),j===o.SHORT&&(lt=o.RGBA16I),j===o.INT&&(lt=o.RGBA32I)),T===o.RGB&&j===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),T===o.RGBA){const Ct=mt?dc:ye.getTransfer(ft);j===o.FLOAT&&(lt=o.RGBA32F),j===o.HALF_FLOAT&&(lt=o.RGBA16F),j===o.UNSIGNED_BYTE&&(lt=Ct===Ue?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function U(D,T){let j;return D?T===null||T===pr||T===xo?j=o.DEPTH24_STENCIL8:T===Yi?j=o.DEPTH32F_STENCIL8:T===vo&&(j=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===pr||T===xo?j=o.DEPTH_COMPONENT24:T===Yi?j=o.DEPTH_COMPONENT32F:T===vo&&(j=o.DEPTH_COMPONENT16),j}function Z(D,T){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==fi&&D.minFilter!==xi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function I(D){const T=D.target;T.removeEventListener("dispose",I),q(T),T.isVideoTexture&&g.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),R(T)}function q(D){const T=r.get(D);if(T.__webglInit===void 0)return;const j=D.source,ft=S.get(j);if(ft){const mt=ft[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&w(D),Object.keys(ft).length===0&&S.delete(j)}r.remove(D)}function w(D){const T=r.get(D);o.deleteTexture(T.__webglTexture);const j=D.source,ft=S.get(j);delete ft[T.__cacheKey],h.memory.textures--}function R(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let mt=0;mt<T.__webglFramebuffer[ft].length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[ft][mt]);else o.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)o.deleteFramebuffer(T.__webglFramebuffer[ft]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=D.textures;for(let ft=0,mt=j.length;ft<mt;ft++){const lt=r.get(j[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(j[ft])}r.remove(D)}let H=0;function st(){H=0}function it(){const D=H;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),H+=1,D}function ct(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function pt(D,T){const j=r.get(D);if(D.isVideoTexture&&Vt(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const ft=D.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(j,D,T);return}}i.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+T)}function O(D,T){const j=r.get(D);if(D.version>0&&j.__version!==D.version){at(j,D,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+T)}function Q(D,T){const j=r.get(D);if(D.version>0&&j.__version!==D.version){at(j,D,T);return}i.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+T)}function W(D,T){const j=r.get(D);if(D.version>0&&j.__version!==D.version){St(j,D,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+T)}const gt={[fh]:o.REPEAT,[fr]:o.CLAMP_TO_EDGE,[hh]:o.MIRRORED_REPEAT},xt={[fi]:o.NEAREST,[Vx]:o.NEAREST_MIPMAP_NEAREST,[Il]:o.NEAREST_MIPMAP_LINEAR,[xi]:o.LINEAR,[Tf]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},Ut={[Yx]:o.NEVER,[$x]:o.ALWAYS,[Zx]:o.LESS,[B_]:o.LEQUAL,[Kx]:o.EQUAL,[Jx]:o.GEQUAL,[Qx]:o.GREATER,[jx]:o.NOTEQUAL};function zt(D,T){if(T.type===Yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===xi||T.magFilter===Tf||T.magFilter===Il||T.magFilter===hr||T.minFilter===xi||T.minFilter===Tf||T.minFilter===Il||T.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,gt[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,gt[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,gt[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xt[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,Ut[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==Il&&T.minFilter!==hr||T.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ht(D,T){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",I));const ft=T.source;let mt=S.get(ft);mt===void 0&&(mt={},S.set(ft,mt));const lt=ct(T);if(lt!==D.__cacheKey){mt[lt]===void 0&&(mt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,j=!0),mt[lt].usedTimes++;const Ct=mt[D.__cacheKey];Ct!==void 0&&(mt[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(T)),D.__cacheKey=lt,D.__webglTexture=mt[lt].texture}return j}function at(D,T,j){let ft=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=o.TEXTURE_3D);const mt=Ht(D,T),lt=T.source;i.bindTexture(ft,D.__webglTexture,o.TEXTURE0+j);const Ct=r.get(lt);if(lt.version!==Ct.__version||mt===!0){i.activeTexture(o.TEXTURE0+j);const Mt=ye.getPrimaries(ye.workingColorSpace),Bt=T.colorSpace===Ua?null:ye.getPrimaries(T.colorSpace),jt=T.colorSpace===Ua||Mt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let vt=C(T.image,!1,l.maxTextureSize);vt=Ae(T,vt);const Ot=u.convert(T.format,T.colorSpace),qt=u.convert(T.type);let Kt=N(T.internalFormat,Ot,qt,T.colorSpace,T.isVideoTexture);zt(ft,T);let wt;const re=T.mipmaps,te=T.isVideoTexture!==!0,Re=Ct.__version===void 0||mt===!0,G=lt.dataReady,At=Z(T,vt);if(T.isDepthTexture)Kt=U(T.format===Mo,T.type),Re&&(te?i.texStorage2D(o.TEXTURE_2D,1,Kt,vt.width,vt.height):i.texImage2D(o.TEXTURE_2D,0,Kt,vt.width,vt.height,0,Ot,qt,null));else if(T.isDataTexture)if(re.length>0){te&&Re&&i.texStorage2D(o.TEXTURE_2D,At,Kt,re[0].width,re[0].height);for(let rt=0,ht=re.length;rt<ht;rt++)wt=re[rt],te?G&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,wt.width,wt.height,Ot,qt,wt.data):i.texImage2D(o.TEXTURE_2D,rt,Kt,wt.width,wt.height,0,Ot,qt,wt.data);T.generateMipmaps=!1}else te?(Re&&i.texStorage2D(o.TEXTURE_2D,At,Kt,vt.width,vt.height),G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,vt.width,vt.height,Ot,qt,vt.data)):i.texImage2D(o.TEXTURE_2D,0,Kt,vt.width,vt.height,0,Ot,qt,vt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&Re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Kt,re[0].width,re[0].height,vt.depth);for(let rt=0,ht=re.length;rt<ht;rt++)if(wt=re[rt],T.format!==ui)if(Ot!==null)if(te){if(G)if(T.layerUpdates.size>0){const Dt=t_(wt.width,wt.height,T.format,T.type);for(const Rt of T.layerUpdates){const ne=wt.data.subarray(Rt*Dt/wt.data.BYTES_PER_ELEMENT,(Rt+1)*Dt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,Rt,wt.width,wt.height,1,Ot,ne)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,wt.width,wt.height,vt.depth,Ot,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,rt,Kt,wt.width,wt.height,vt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?G&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,wt.width,wt.height,vt.depth,Ot,qt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,rt,Kt,wt.width,wt.height,vt.depth,0,Ot,qt,wt.data)}else{te&&Re&&i.texStorage2D(o.TEXTURE_2D,At,Kt,re[0].width,re[0].height);for(let rt=0,ht=re.length;rt<ht;rt++)wt=re[rt],T.format!==ui?Ot!==null?te?G&&i.compressedTexSubImage2D(o.TEXTURE_2D,rt,0,0,wt.width,wt.height,Ot,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,rt,Kt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?G&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,wt.width,wt.height,Ot,qt,wt.data):i.texImage2D(o.TEXTURE_2D,rt,Kt,wt.width,wt.height,0,Ot,qt,wt.data)}else if(T.isDataArrayTexture)if(te){if(Re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Kt,vt.width,vt.height,vt.depth),G)if(T.layerUpdates.size>0){const rt=t_(vt.width,vt.height,T.format,T.type);for(const ht of T.layerUpdates){const Dt=vt.data.subarray(ht*rt/vt.data.BYTES_PER_ELEMENT,(ht+1)*rt/vt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ht,vt.width,vt.height,1,Ot,qt,Dt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ot,qt,vt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,vt.width,vt.height,vt.depth,0,Ot,qt,vt.data);else if(T.isData3DTexture)te?(Re&&i.texStorage3D(o.TEXTURE_3D,At,Kt,vt.width,vt.height,vt.depth),G&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ot,qt,vt.data)):i.texImage3D(o.TEXTURE_3D,0,Kt,vt.width,vt.height,vt.depth,0,Ot,qt,vt.data);else if(T.isFramebufferTexture){if(Re)if(te)i.texStorage2D(o.TEXTURE_2D,At,Kt,vt.width,vt.height);else{let rt=vt.width,ht=vt.height;for(let Dt=0;Dt<At;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,Kt,rt,ht,0,Ot,qt,null),rt>>=1,ht>>=1}}else if(re.length>0){if(te&&Re){const rt=It(re[0]);i.texStorage2D(o.TEXTURE_2D,At,Kt,rt.width,rt.height)}for(let rt=0,ht=re.length;rt<ht;rt++)wt=re[rt],te?G&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Ot,qt,wt):i.texImage2D(o.TEXTURE_2D,rt,Kt,Ot,qt,wt);T.generateMipmaps=!1}else if(te){if(Re){const rt=It(vt);i.texStorage2D(o.TEXTURE_2D,At,Kt,rt.width,rt.height)}G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,qt,vt)}else i.texImage2D(o.TEXTURE_2D,0,Kt,Ot,qt,vt);M(T)&&_(ft),Ct.__version=lt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function St(D,T,j){if(T.image.length!==6)return;const ft=Ht(D,T),mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+j);const lt=r.get(mt);if(mt.version!==lt.__version||ft===!0){i.activeTexture(o.TEXTURE0+j);const Ct=ye.getPrimaries(ye.workingColorSpace),Mt=T.colorSpace===Ua?null:ye.getPrimaries(T.colorSpace),Bt=T.colorSpace===Ua||Ct===Mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const jt=T.isCompressedTexture||T.image[0].isCompressedTexture,vt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let ht=0;ht<6;ht++)!jt&&!vt?Ot[ht]=C(T.image[ht],!0,l.maxCubemapSize):Ot[ht]=vt?T.image[ht].image:T.image[ht],Ot[ht]=Ae(T,Ot[ht]);const qt=Ot[0],Kt=u.convert(T.format,T.colorSpace),wt=u.convert(T.type),re=N(T.internalFormat,Kt,wt,T.colorSpace),te=T.isVideoTexture!==!0,Re=lt.__version===void 0||ft===!0,G=mt.dataReady;let At=Z(T,qt);zt(o.TEXTURE_CUBE_MAP,T);let rt;if(jt){te&&Re&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,re,qt.width,qt.height);for(let ht=0;ht<6;ht++){rt=Ot[ht].mipmaps;for(let Dt=0;Dt<rt.length;Dt++){const Rt=rt[Dt];T.format!==ui?Kt!==null?te?G&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,0,0,Rt.width,Rt.height,Kt,Rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,re,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,0,0,Rt.width,Rt.height,Kt,wt,Rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,re,Rt.width,Rt.height,0,Kt,wt,Rt.data)}}}else{if(rt=T.mipmaps,te&&Re){rt.length>0&&At++;const ht=It(Ot[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,At,re,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(vt){te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot[ht].width,Ot[ht].height,Kt,wt,Ot[ht].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,Ot[ht].width,Ot[ht].height,0,Kt,wt,Ot[ht].data);for(let Dt=0;Dt<rt.length;Dt++){const ne=rt[Dt].image[ht].image;te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,0,0,ne.width,ne.height,Kt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,re,ne.width,ne.height,0,Kt,wt,ne.data)}}else{te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Kt,wt,Ot[ht]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,Kt,wt,Ot[ht]);for(let Dt=0;Dt<rt.length;Dt++){const Rt=rt[Dt];te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,0,0,Kt,wt,Rt.image[ht]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,re,Kt,wt,Rt.image[ht])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),lt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Lt(D,T,j,ft,mt,lt){const Ct=u.convert(j.format,j.colorSpace),Mt=u.convert(j.type),Bt=N(j.internalFormat,Ct,Mt,j.colorSpace),jt=r.get(T),vt=r.get(j);if(vt.__renderTarget=T,!jt.__hasExternalTextures){const Ot=Math.max(1,T.width>>lt),qt=Math.max(1,T.height>>lt);mt===o.TEXTURE_3D||mt===o.TEXTURE_2D_ARRAY?i.texImage3D(mt,lt,Bt,Ot,qt,T.depth,0,Ct,Mt,null):i.texImage2D(mt,lt,Bt,Ot,qt,0,Ct,Mt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),ee(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,mt,vt.__webglTexture,0,de(T)):(mt===o.TEXTURE_2D||mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,mt,vt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(D,T,j){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer){const ft=T.depthTexture,mt=ft&&ft.isDepthTexture?ft.type:null,lt=U(T.stencilBuffer,mt),Ct=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=de(T);ee(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Mt,lt,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,Mt,lt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,lt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ct,o.RENDERBUFFER,D)}else{const ft=T.textures;for(let mt=0;mt<ft.length;mt++){const lt=ft[mt],Ct=u.convert(lt.format,lt.colorSpace),Mt=u.convert(lt.type),Bt=N(lt.internalFormat,Ct,Mt,lt.colorSpace),jt=de(T);j&&ee(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Bt,T.width,T.height):ee(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,jt,Bt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const mt=ft.__webglTexture,lt=de(T);if(T.depthTexture.format===So)ee(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,mt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,mt,0);else if(T.depthTexture.format===Mo)ee(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,mt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function oe(D){const T=r.get(D),j=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ft=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",mt)};ft.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=ft}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const ft=D.texture.mipmaps;ft&&ft.length>0?Xt(T.__webglFramebuffer[0],D):Xt(T.__webglFramebuffer,D)}else if(j){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=o.createRenderbuffer(),Et(T.__webglDepthbuffer[ft],D,!1);else{const mt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,lt)}}else{const ft=D.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Et(T.__webglDepthbuffer,D,!1);else{const mt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(D,T,j){const ft=r.get(D);T!==void 0&&Lt(ft.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&oe(D)}function ze(D){const T=D.texture,j=r.get(D),ft=r.get(T);D.addEventListener("dispose",F);const mt=D.textures,lt=D.isWebGLCubeRenderTarget===!0,Ct=mt.length>1;if(Ct||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=T.version,h.memory.textures++),lt){j.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Mt]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)j.__webglFramebuffer[Mt][Bt]=o.createFramebuffer()}else j.__webglFramebuffer[Mt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)j.__webglFramebuffer[Mt]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(Ct)for(let Mt=0,Bt=mt.length;Mt<Bt;Mt++){const jt=r.get(mt[Mt]);jt.__webglTexture===void 0&&(jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&ee(D)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Mt=0;Mt<mt.length;Mt++){const Bt=mt[Mt];j.__webglColorRenderbuffer[Mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[Mt]);const jt=u.convert(Bt.format,Bt.colorSpace),vt=u.convert(Bt.type),Ot=N(Bt.internalFormat,jt,vt,Bt.colorSpace,D.isXRRenderTarget===!0),qt=de(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Ot,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Mt,o.RENDERBUFFER,j.__webglColorRenderbuffer[Mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Et(j.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),zt(o.TEXTURE_CUBE_MAP,T);for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Lt(j.__webglFramebuffer[Mt][Bt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt);else Lt(j.__webglFramebuffer[Mt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ct){for(let Mt=0,Bt=mt.length;Mt<Bt;Mt++){const jt=mt[Mt],vt=r.get(jt);i.bindTexture(o.TEXTURE_2D,vt.__webglTexture),zt(o.TEXTURE_2D,jt),Lt(j.__webglFramebuffer,D,jt,o.COLOR_ATTACHMENT0+Mt,o.TEXTURE_2D,0),M(jt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Mt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,ft.__webglTexture),zt(Mt,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Lt(j.__webglFramebuffer[Bt],D,T,o.COLOR_ATTACHMENT0,Mt,Bt);else Lt(j.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,Mt,0);M(T)&&_(Mt),i.unbindTexture()}D.depthBuffer&&oe(D)}function Ne(D){const T=D.textures;for(let j=0,ft=T.length;j<ft;j++){const mt=T[j];if(M(mt)){const lt=B(D),Ct=r.get(mt).__webglTexture;i.bindTexture(lt,Ct),_(lt),i.unbindTexture()}}}const le=[],P=[];function Cn(D){if(D.samples>0){if(ee(D)===!1){const T=D.textures,j=D.width,ft=D.height;let mt=o.COLOR_BUFFER_BIT;const lt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=r.get(D),Mt=T.length>1;if(Mt)for(let jt=0;jt<T.length;jt++)i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Bt=D.texture.mipmaps;Bt&&Bt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let jt=0;jt<T.length;jt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(mt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(mt|=o.STENCIL_BUFFER_BIT)),Mt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[jt]);const vt=r.get(T[jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,vt,0)}o.blitFramebuffer(0,0,j,ft,0,0,j,ft,mt,o.NEAREST),p===!0&&(le.length=0,P.length=0,le.push(o.COLOR_ATTACHMENT0+jt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(le.push(lt),P.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,P)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,le))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Mt)for(let jt=0;jt<T.length;jt++){i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[jt]);const vt=r.get(T[jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,vt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const T=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function de(D){return Math.min(l.maxSamples,D.samples)}function ee(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Vt(D){const T=h.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Ae(D,T){const j=D.colorSpace,ft=D.format,mt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==ps&&j!==Ua&&(ye.getTransfer(j)===Ue?(ft!==ui||mt!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=it,this.resetTextureUnits=st,this.setTexture2D=pt,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=ee}function db(o,e){function i(r,l=Ua){let u;const h=ye.getTransfer(l);if(r===ji)return o.UNSIGNED_BYTE;if(r===Xh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===kh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===D_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===C_)return o.BYTE;if(r===w_)return o.SHORT;if(r===vo)return o.UNSIGNED_SHORT;if(r===Vh)return o.INT;if(r===pr)return o.UNSIGNED_INT;if(r===Yi)return o.FLOAT;if(r===Eo)return o.HALF_FLOAT;if(r===U_)return o.ALPHA;if(r===L_)return o.RGB;if(r===ui)return o.RGBA;if(r===So)return o.DEPTH_COMPONENT;if(r===Mo)return o.DEPTH_STENCIL;if(r===N_)return o.RED;if(r===Wh)return o.RED_INTEGER;if(r===O_)return o.RG;if(r===qh)return o.RG_INTEGER;if(r===Yh)return o.RGBA_INTEGER;if(r===sc||r===oc||r===lc||r===cc)if(h===Ue)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dh||r===ph||r===mh||r===gh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===dh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ph)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_h||r===vh||r===xh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===_h||r===vh)return h===Ue?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===xh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sh||r===Mh||r===yh||r===Eh||r===Th||r===bh||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Sh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Eh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Th)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ah)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ch)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nh)return h===Ue?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uc||r===Oh||r===Ph)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===uc)return h===Ue?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ph)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===P_||r===Bh||r===zh||r===Ih)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===uc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ih)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`;class gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Rn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Pa({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ki(new _c(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _b extends gs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,S=null,y=null,A=null;const C=new gb,M=i.getContextAttributes();let _=null,B=null;const N=[],U=[],Z=new Be;let I=null;const F=new li;F.viewport=new Ke;const q=new li;q.viewport=new Ke;const w=[F,q],R=new IS;let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let St=N[at];return St===void 0&&(St=new qf,N[at]=St),St.getTargetRaySpace()},this.getControllerGrip=function(at){let St=N[at];return St===void 0&&(St=new qf,N[at]=St),St.getGripSpace()},this.getHand=function(at){let St=N[at];return St===void 0&&(St=new qf,N[at]=St),St.getHandSpace()};function it(at){const St=U.indexOf(at.inputSource);if(St===-1)return;const Lt=N[St];Lt!==void 0&&(Lt.update(at.inputSource,at.frame,m||h),Lt.dispatchEvent({type:at.type,data:at.inputSource}))}function ct(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",pt);for(let at=0;at<N.length;at++){const St=U[at];St!==null&&(U[at]=null,N[at].disconnect(St))}H=null,st=null,C.reset(),e.setRenderTarget(_),y=null,S=null,v=null,l=null,B=null,Ht.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(Z.width,Z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(at){m=at},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(Z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Et=null,Xt=null;M.depth&&(Xt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=M.stencil?Mo:So,Et=M.stencil?xo:pr);const oe={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),B=new mr(S.textureWidth,S.textureHeight,{format:ui,type:ji,depthTexture:new Z_(S.textureWidth,S.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Lt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new mr(y.framebufferWidth,y.framebufferHeight,{format:ui,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Ht.setContext(l),Ht.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function pt(at){for(let St=0;St<at.removed.length;St++){const Lt=at.removed[St],Et=U.indexOf(Lt);Et>=0&&(U[Et]=null,N[Et].disconnect(Lt))}for(let St=0;St<at.added.length;St++){const Lt=at.added[St];let Et=U.indexOf(Lt);if(Et===-1){for(let oe=0;oe<N.length;oe++)if(oe>=U.length){U.push(Lt),Et=oe;break}else if(U[oe]===null){U[oe]=Lt,Et=oe;break}if(Et===-1)break}const Xt=N[Et];Xt&&Xt.connect(Lt)}}const O=new nt,Q=new nt;function W(at,St,Lt){O.setFromMatrixPosition(St.matrixWorld),Q.setFromMatrixPosition(Lt.matrixWorld);const Et=O.distanceTo(Q),Xt=St.projectionMatrix.elements,oe=Lt.projectionMatrix.elements,Zt=Xt[14]/(Xt[10]-1),ze=Xt[14]/(Xt[10]+1),Ne=(Xt[9]+1)/Xt[5],le=(Xt[9]-1)/Xt[5],P=(Xt[8]-1)/Xt[0],Cn=(oe[8]+1)/oe[0],de=Zt*P,ee=Zt*Cn,Vt=Et/(-P+Cn),Ae=Vt*-P;if(St.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ae),at.translateZ(Vt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Xt[10]===-1)at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const It=Zt+Vt,D=ze+Vt,T=de-Ae,j=ee+(Et-Ae),ft=Ne*ze/D*It,mt=le*ze/D*It;at.projectionMatrix.makePerspective(T,j,ft,mt,It,D),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function gt(at,St){St===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(St.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let St=at.near,Lt=at.far;C.texture!==null&&(C.depthNear>0&&(St=C.depthNear),C.depthFar>0&&(Lt=C.depthFar)),R.near=q.near=F.near=St,R.far=q.far=F.far=Lt,(H!==R.near||st!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,st=R.far),F.layers.mask=at.layers.mask|2,q.layers.mask=at.layers.mask|4,R.layers.mask=F.layers.mask|q.layers.mask;const Et=at.parent,Xt=R.cameras;gt(R,Et);for(let oe=0;oe<Xt.length;oe++)gt(Xt[oe],Et);Xt.length===2?W(R,F,q):R.projectionMatrix.copy(F.projectionMatrix),xt(at,R,Et)};function xt(at,St,Lt){Lt===null?at.matrix.copy(St.matrixWorld):(at.matrix.copy(Lt.matrixWorld),at.matrix.invert(),at.matrix.multiply(St.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Fh*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&y===null))return p},this.setFoveation=function(at){p=at,S!==null&&(S.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let Ut=null;function zt(at,St){if(g=St.getViewerPose(m||h),A=St,g!==null){const Lt=g.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let Et=!1;Lt.length!==R.cameras.length&&(R.cameras.length=0,Et=!0);for(let Zt=0;Zt<Lt.length;Zt++){const ze=Lt[Zt];let Ne=null;if(y!==null)Ne=y.getViewport(ze);else{const P=v.getViewSubImage(S,ze);Ne=P.viewport,Zt===0&&(e.setRenderTargetTextures(B,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(B))}let le=w[Zt];le===void 0&&(le=new li,le.layers.enable(Zt),le.viewport=new Ke,w[Zt]=le),le.matrix.fromArray(ze.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ze.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Zt===0&&(R.matrix.copy(le.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Et===!0&&R.cameras.push(le)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(Lt[0]);Zt&&Zt.isValid&&Zt.texture&&C.init(e,Zt,l.renderState)}}for(let Lt=0;Lt<N.length;Lt++){const Et=U[Lt],Xt=N[Lt];Et!==null&&Xt!==void 0&&Xt.update(Et,St,m||h)}Ut&&Ut(at,St),St.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:St}),A=null}const Ht=new K_;Ht.setAnimationLoop(zt),this.setAnimationLoop=function(at){Ut=at},this.dispose=function(){}}}const sr=new Ji,vb=new en;function xb(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,k_(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,B,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(u(M,_),A(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),C(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,B,N):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Pn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Pn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const B=e.get(_),N=B.envMap,U=B.envMapRotation;N&&(M.envMap.value=N,sr.copy(U),sr.x*=-1,sr.y*=-1,sr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),M.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(sr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,B,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*B,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,B){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const B=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Sb(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(B,N){const U=N.program;r.uniformBlockBinding(B,U)}function m(B,N){let U=l[B.id];U===void 0&&(A(B),U=g(B),l[B.id]=U,B.addEventListener("dispose",M));const Z=N.program;r.updateUBOMapping(B,Z);const I=e.render.frame;u[B.id]!==I&&(S(B),u[B.id]=I)}function g(B){const N=v();B.__bindingPointIndex=N;const U=o.createBuffer(),Z=B.__size,I=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,Z,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const N=l[B.id],U=B.uniforms,Z=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let I=0,F=U.length;I<F;I++){const q=Array.isArray(U[I])?U[I]:[U[I]];for(let w=0,R=q.length;w<R;w++){const H=q[w];if(y(H,I,w,Z)===!0){const st=H.__offset,it=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let pt=0;pt<it.length;pt++){const O=it[pt],Q=C(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,st+ct,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,ct),ct+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,N,U,Z){const I=B.value,F=N+"_"+U;if(Z[F]===void 0)return typeof I=="number"||typeof I=="boolean"?Z[F]=I:Z[F]=I.clone(),!0;{const q=Z[F];if(typeof I=="number"||typeof I=="boolean"){if(q!==I)return Z[F]=I,!0}else if(q.equals(I)===!1)return q.copy(I),!0}return!1}function A(B){const N=B.uniforms;let U=0;const Z=16;for(let F=0,q=N.length;F<q;F++){const w=Array.isArray(N[F])?N[F]:[N[F]];for(let R=0,H=w.length;R<H;R++){const st=w[R],it=Array.isArray(st.value)?st.value:[st.value];for(let ct=0,pt=it.length;ct<pt;ct++){const O=it[ct],Q=C(O),W=U%Z,gt=W%Q.boundary,xt=W+gt;U+=gt,xt!==0&&Z-xt<Q.storage&&(U+=Z-xt),st.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=U,U+=Q.storage}}}const I=U%Z;return I>0&&(U+=Z-I),B.__size=U,B.__cache={},this}function C(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function M(B){const N=B.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class Rb{constructor(e={}){const{canvas:i=eS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let Z=!1;this._outputColorSpace=ei;let I=0,F=0,q=null,w=-1,R=null;const H=new Ke,st=new Ke;let it=null;const ct=new Le(0);let pt=0,O=i.width,Q=i.height,W=1,gt=null,xt=null;const Ut=new Ke(0,0,O,Q),zt=new Ke(0,0,O,Q);let Ht=!1;const at=new Y_;let St=!1,Lt=!1;const Et=new en,Xt=new en,oe=new nt,Zt=new Ke,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function le(){return q===null?W:1}let P=r;function Cn(b,X){return i.getContext(b,X)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gh}`),i.addEventListener("webglcontextlost",ht,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),P===null){const X="webgl2";if(P=Cn(X,b),P===null)throw Cn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let de,ee,Vt,Ae,It,D,T,j,ft,mt,lt,Ct,Mt,Bt,jt,vt,Ot,qt,Kt,wt,re,te,Re,G;function At(){de=new UE(P),de.init(),te=new db(P,de),ee=new TE(P,de,e,te),Vt=new fb(P,de),ee.reverseDepthBuffer&&S&&Vt.buffers.depth.setReversed(!0),Ae=new OE(P),It=new JT,D=new hb(P,de,Vt,It,ee,te,Ae),T=new AE(U),j=new DE(U),ft=new HS(P),Re=new yE(P,ft),mt=new LE(P,ft,Ae,Re),lt=new BE(P,mt,ft,Ae),Kt=new PE(P,ee,D),vt=new bE(It),Ct=new jT(U,T,j,de,ee,Re,vt),Mt=new xb(U,It),Bt=new tb,jt=new sb(de),qt=new ME(U,T,j,Vt,lt,y,p),Ot=new cb(U,lt,ee),G=new Sb(P,Ae,ee,Vt),wt=new EE(P,de,Ae),re=new NE(P,de,Ae),Ae.programs=Ct.programs,U.capabilities=ee,U.extensions=de,U.properties=It,U.renderLists=Bt,U.shadowMap=Ot,U.state=Vt,U.info=Ae}At();const rt=new _b(U,P);this.xr=rt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(O,Q,!1))},this.getSize=function(b){return b.set(O,Q)},this.setSize=function(b,X,tt=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,Q=X,i.width=Math.floor(b*W),i.height=Math.floor(X*W),tt===!0&&(i.style.width=b+"px",i.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(O*W,Q*W).floor()},this.setDrawingBufferSize=function(b,X,tt){O=b,Q=X,W=tt,i.width=Math.floor(b*tt),i.height=Math.floor(X*tt),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(Ut)},this.setViewport=function(b,X,tt,et){b.isVector4?Ut.set(b.x,b.y,b.z,b.w):Ut.set(b,X,tt,et),Vt.viewport(H.copy(Ut).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,X,tt,et){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,X,tt,et),Vt.scissor(st.copy(zt).multiplyScalar(W).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(b){Vt.setScissorTest(Ht=b)},this.setOpaqueSort=function(b){gt=b},this.setTransparentSort=function(b){xt=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,tt=!0){let et=0;if(b){let k=!1;if(q!==null){const _t=q.texture.format;k=_t===Yh||_t===qh||_t===Wh}if(k){const _t=q.texture.type,yt=_t===ji||_t===pr||_t===vo||_t===xo||_t===Xh||_t===kh,Tt=qt.getClearColor(),Nt=qt.getClearAlpha(),Jt=Tt.r,kt=Tt.g,Gt=Tt.b;yt?(A[0]=Jt,A[1]=kt,A[2]=Gt,A[3]=Nt,P.clearBufferuiv(P.COLOR,0,A)):(C[0]=Jt,C[1]=kt,C[2]=Gt,C[3]=Nt,P.clearBufferiv(P.COLOR,0,C))}else et|=P.COLOR_BUFFER_BIT}X&&(et|=P.DEPTH_BUFFER_BIT),tt&&(et|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ht,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),qt.dispose(),Bt.dispose(),jt.dispose(),It.dispose(),T.dispose(),j.dispose(),lt.dispose(),Re.dispose(),G.dispose(),Ct.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",nn),rt.removeEventListener("sessionend",mn),wn.stop()};function ht(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;const b=Ae.autoReset,X=Ot.enabled,tt=Ot.autoUpdate,et=Ot.needsUpdate,k=Ot.type;At(),Ae.autoReset=b,Ot.enabled=X,Ot.autoUpdate=tt,Ot.needsUpdate=et,Ot.type=k}function Rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ne(b){const X=b.target;X.removeEventListener("dispose",ne),Ie(X)}function Ie(b){Qe(b),It.remove(b)}function Qe(b){const X=It.get(b).programs;X!==void 0&&(X.forEach(function(tt){Ct.releaseProgram(tt)}),b.isShaderMaterial&&Ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,tt,et,k,_t){X===null&&(X=ze);const yt=k.isMesh&&k.matrixWorld.determinant()<0,Tt=Ia(b,X,tt,et,k);Vt.setMaterial(et,yt);let Nt=tt.index,Jt=1;if(et.wireframe===!0){if(Nt=mt.getWireframeAttribute(tt),Nt===void 0)return;Jt=2}const kt=tt.drawRange,Gt=tt.attributes.position;let ue=kt.start*Jt,Se=(kt.start+kt.count)*Jt;_t!==null&&(ue=Math.max(ue,_t.start*Jt),Se=Math.min(Se,(_t.start+_t.count)*Jt)),Nt!==null?(ue=Math.max(ue,0),Se=Math.min(Se,Nt.count)):Gt!=null&&(ue=Math.max(ue,0),Se=Math.min(Se,Gt.count));const Ve=Se-ue;if(Ve<0||Ve===1/0)return;Re.setup(k,et,Tt,tt,Nt);let pe,me=wt;if(Nt!==null&&(pe=ft.get(Nt),me=re,me.setIndex(pe)),k.isMesh)et.wireframe===!0?(Vt.setLineWidth(et.wireframeLinewidth*le()),me.setMode(P.LINES)):me.setMode(P.TRIANGLES);else if(k.isLine){let Wt=et.linewidth;Wt===void 0&&(Wt=1),Vt.setLineWidth(Wt*le()),k.isLineSegments?me.setMode(P.LINES):k.isLineLoop?me.setMode(P.LINE_LOOP):me.setMode(P.LINE_STRIP)}else k.isPoints?me.setMode(P.POINTS):k.isSprite&&me.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)fc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Wt=k._multiDrawStarts,ke=k._multiDrawCounts,ve=k._multiDrawCount,Sn=Nt?ft.get(Nt).bytesPerElement:1,na=It.get(et).currentProgram.getUniforms();for(let Fe=0;Fe<ve;Fe++)na.setValue(P,"_gl_DrawID",Fe),me.render(Wt[Fe]/Sn,ke[Fe])}else if(k.isInstancedMesh)me.renderInstances(ue,Ve,k.count);else if(tt.isInstancedBufferGeometry){const Wt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,ke=Math.min(tt.instanceCount,Wt);me.renderInstances(ue,Ve,ke)}else me.render(ue,Ve)};function xe(b,X,tt){b.transparent===!0&&b.side===qi&&b.forceSinglePass===!1?(b.side=Pn,b.needsUpdate=!0,ta(b,X,tt),b.side=Oa,b.needsUpdate=!0,ta(b,X,tt),b.side=qi):ta(b,X,tt)}this.compile=function(b,X,tt=null){tt===null&&(tt=b),_=jt.get(tt),_.init(X),N.push(_),tt.traverseVisible(function(k){k.isLight&&k.layers.test(X.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),b!==tt&&b.traverseVisible(function(k){k.isLight&&k.layers.test(X.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights();const et=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _t=k.material;if(_t)if(Array.isArray(_t))for(let yt=0;yt<_t.length;yt++){const Tt=_t[yt];xe(Tt,tt,k),et.add(Tt)}else xe(_t,tt,k),et.add(_t)}),_=N.pop(),et},this.compileAsync=function(b,X,tt=null){const et=this.compile(b,X,tt);return new Promise(k=>{function _t(){if(et.forEach(function(yt){It.get(yt).currentProgram.isReady()&&et.delete(yt)}),et.size===0){k(b);return}setTimeout(_t,10)}de.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Bn=null;function cn(b){Bn&&Bn(b)}function nn(){wn.stop()}function mn(){wn.start()}const wn=new K_;wn.setAnimationLoop(cn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(b){Bn=b,rt.setAnimationLoop(b),b===null?wn.stop():wn.start()},rt.addEventListener("sessionstart",nn),rt.addEventListener("sessionend",mn),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(X),X=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,X,q),_=jt.get(b,N.length),_.init(X),N.push(_),Xt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),at.setFromProjectionMatrix(Xt),Lt=this.localClippingEnabled,St=vt.init(this.clippingPlanes,Lt),M=Bt.get(b,B.length),M.init(),B.push(M),rt.enabled===!0&&rt.isPresenting===!0){const _t=U.xr.getDepthSensingMesh();_t!==null&&Ba(_t,X,-1/0,U.sortObjects)}Ba(b,X,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(gt,xt),Ne=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ne&&qt.addToRenderList(M,b),this.info.render.frame++,St===!0&&vt.beginShadows();const tt=_.state.shadowsArray;Ot.render(tt,b,X),St===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=M.opaque,k=M.transmissive;if(_.setupLights(),X.isArrayCamera){const _t=X.cameras;if(k.length>0)for(let yt=0,Tt=_t.length;yt<Tt;yt++){const Nt=_t[yt];wo(et,k,b,Nt)}Ne&&qt.render(b);for(let yt=0,Tt=_t.length;yt<Tt;yt++){const Nt=_t[yt];Co(M,b,Nt,Nt.viewport)}}else k.length>0&&wo(et,k,b,X),Ne&&qt.render(b),Co(M,b,X);q!==null&&F===0&&(D.updateMultisampleRenderTarget(q),D.updateRenderTargetMipmap(q)),b.isScene===!0&&b.onAfterRender(U,b,X),Re.resetDefaultState(),w=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],St===!0&&vt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Ba(b,X,tt,et){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)tt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||at.intersectsSprite(b)){et&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Xt);const yt=lt.update(b),Tt=b.material;Tt.visible&&M.push(b,yt,Tt,tt,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||at.intersectsObject(b))){const yt=lt.update(b),Tt=b.material;if(et&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Zt.copy(yt.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(Xt)),Array.isArray(Tt)){const Nt=yt.groups;for(let Jt=0,kt=Nt.length;Jt<kt;Jt++){const Gt=Nt[Jt],ue=Tt[Gt.materialIndex];ue&&ue.visible&&M.push(b,yt,ue,tt,Zt.z,Gt)}}else Tt.visible&&M.push(b,yt,Tt,tt,Zt.z,null)}}const _t=b.children;for(let yt=0,Tt=_t.length;yt<Tt;yt++)Ba(_t[yt],X,tt,et)}function Co(b,X,tt,et){const k=b.opaque,_t=b.transmissive,yt=b.transparent;_.setupLightsView(tt),St===!0&&vt.setGlobalState(U.clippingPlanes,tt),et&&Vt.viewport(H.copy(et)),k.length>0&&za(k,X,tt),_t.length>0&&za(_t,X,tt),yt.length>0&&za(yt,X,tt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function wo(b,X,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[et.id]===void 0&&(_.state.transmissionRenderTarget[et.id]=new mr(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Eo:ji,minFilter:hr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));const _t=_.state.transmissionRenderTarget[et.id],yt=et.viewport||H;_t.setSize(yt.z*U.transmissionResolutionScale,yt.w*U.transmissionResolutionScale);const Tt=U.getRenderTarget();U.setRenderTarget(_t),U.getClearColor(ct),pt=U.getClearAlpha(),pt<1&&U.setClearColor(16777215,.5),U.clear(),Ne&&qt.render(tt);const Nt=U.toneMapping;U.toneMapping=Na;const Jt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),_.setupLightsView(et),St===!0&&vt.setGlobalState(U.clippingPlanes,et),za(b,tt,et),D.updateMultisampleRenderTarget(_t),D.updateRenderTargetMipmap(_t),de.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Gt=0,ue=X.length;Gt<ue;Gt++){const Se=X[Gt],Ve=Se.object,pe=Se.geometry,me=Se.material,Wt=Se.group;if(me.side===qi&&Ve.layers.test(et.layers)){const ke=me.side;me.side=Pn,me.needsUpdate=!0,$i(Ve,tt,et,pe,me,Wt),me.side=ke,me.needsUpdate=!0,kt=!0}}kt===!0&&(D.updateMultisampleRenderTarget(_t),D.updateRenderTargetMipmap(_t))}U.setRenderTarget(Tt),U.setClearColor(ct,pt),Jt!==void 0&&(et.viewport=Jt),U.toneMapping=Nt}function za(b,X,tt){const et=X.isScene===!0?X.overrideMaterial:null;for(let k=0,_t=b.length;k<_t;k++){const yt=b[k],Tt=yt.object,Nt=yt.geometry,Jt=yt.group;let kt=yt.material;kt.allowOverride===!0&&et!==null&&(kt=et),Tt.layers.test(tt.layers)&&$i(Tt,X,tt,Nt,kt,Jt)}}function $i(b,X,tt,et,k,_t){b.onBeforeRender(U,X,tt,et,k,_t),b.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(U,X,tt,et,b,_t),k.transparent===!0&&k.side===qi&&k.forceSinglePass===!1?(k.side=Pn,k.needsUpdate=!0,U.renderBufferDirect(tt,X,et,k,b,_t),k.side=Oa,k.needsUpdate=!0,U.renderBufferDirect(tt,X,et,k,b,_t),k.side=qi):U.renderBufferDirect(tt,X,et,k,b,_t),b.onAfterRender(U,X,tt,et,k,_t)}function ta(b,X,tt){X.isScene!==!0&&(X=ze);const et=It.get(b),k=_.state.lights,_t=_.state.shadowsArray,yt=k.state.version,Tt=Ct.getParameters(b,k.state,_t,X,tt),Nt=Ct.getProgramCacheKey(Tt);let Jt=et.programs;et.environment=b.isMeshStandardMaterial?X.environment:null,et.fog=X.fog,et.envMap=(b.isMeshStandardMaterial?j:T).get(b.envMap||et.environment),et.envMapRotation=et.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",ne),Jt=new Map,et.programs=Jt);let kt=Jt.get(Nt);if(kt!==void 0){if(et.currentProgram===kt&&et.lightsStateVersion===yt)return yi(b,Tt),kt}else Tt.uniforms=Ct.getUniforms(b),b.onBeforeCompile(Tt,U),kt=Ct.acquireProgram(Tt,Nt),Jt.set(Nt,kt),et.uniforms=Tt.uniforms;const Gt=et.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=vt.uniform),yi(b,Tt),et.needsLights=je(b),et.lightsStateVersion=yt,et.needsLights&&(Gt.ambientLightColor.value=k.state.ambient,Gt.lightProbe.value=k.state.probe,Gt.directionalLights.value=k.state.directional,Gt.directionalLightShadows.value=k.state.directionalShadow,Gt.spotLights.value=k.state.spot,Gt.spotLightShadows.value=k.state.spotShadow,Gt.rectAreaLights.value=k.state.rectArea,Gt.ltc_1.value=k.state.rectAreaLTC1,Gt.ltc_2.value=k.state.rectAreaLTC2,Gt.pointLights.value=k.state.point,Gt.pointLightShadows.value=k.state.pointShadow,Gt.hemisphereLights.value=k.state.hemi,Gt.directionalShadowMap.value=k.state.directionalShadowMap,Gt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Gt.spotShadowMap.value=k.state.spotShadowMap,Gt.spotLightMatrix.value=k.state.spotLightMatrix,Gt.spotLightMap.value=k.state.spotLightMap,Gt.pointShadowMap.value=k.state.pointShadowMap,Gt.pointShadowMatrix.value=k.state.pointShadowMatrix),et.currentProgram=kt,et.uniformsList=null,kt}function Mi(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=hc.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function yi(b,X){const tt=It.get(b);tt.outputColorSpace=X.outputColorSpace,tt.batching=X.batching,tt.batchingColor=X.batchingColor,tt.instancing=X.instancing,tt.instancingColor=X.instancingColor,tt.instancingMorph=X.instancingMorph,tt.skinning=X.skinning,tt.morphTargets=X.morphTargets,tt.morphNormals=X.morphNormals,tt.morphColors=X.morphColors,tt.morphTargetsCount=X.morphTargetsCount,tt.numClippingPlanes=X.numClippingPlanes,tt.numIntersection=X.numClipIntersection,tt.vertexAlphas=X.vertexAlphas,tt.vertexTangents=X.vertexTangents,tt.toneMapping=X.toneMapping}function Ia(b,X,tt,et,k){X.isScene!==!0&&(X=ze),D.resetTextureUnits();const _t=X.fog,yt=et.isMeshStandardMaterial?X.environment:null,Tt=q===null?U.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ps,Nt=(et.isMeshStandardMaterial?j:T).get(et.envMap||yt),Jt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,kt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Gt=!!tt.morphAttributes.position,ue=!!tt.morphAttributes.normal,Se=!!tt.morphAttributes.color;let Ve=Na;et.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ve=U.toneMapping);const pe=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,me=pe!==void 0?pe.length:0,Wt=It.get(et),ke=_.state.lights;if(St===!0&&(Lt===!0||b!==R)){const un=b===R&&et.id===w;vt.setState(et,b,un)}let ve=!1;et.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ke.state.version||Wt.outputColorSpace!==Tt||k.isBatchedMesh&&Wt.batching===!1||!k.isBatchedMesh&&Wt.batching===!0||k.isBatchedMesh&&Wt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Wt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Wt.instancing===!1||!k.isInstancedMesh&&Wt.instancing===!0||k.isSkinnedMesh&&Wt.skinning===!1||!k.isSkinnedMesh&&Wt.skinning===!0||k.isInstancedMesh&&Wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Wt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Wt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Wt.instancingMorph===!1&&k.morphTexture!==null||Wt.envMap!==Nt||et.fog===!0&&Wt.fog!==_t||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==vt.numPlanes||Wt.numIntersection!==vt.numIntersection)||Wt.vertexAlphas!==Jt||Wt.vertexTangents!==kt||Wt.morphTargets!==Gt||Wt.morphNormals!==ue||Wt.morphColors!==Se||Wt.toneMapping!==Ve||Wt.morphTargetsCount!==me)&&(ve=!0):(ve=!0,Wt.__version=et.version);let Sn=Wt.currentProgram;ve===!0&&(Sn=ta(et,X,k));let na=!1,Fe=!1,Ti=!1;const Oe=Sn.getUniforms(),Mn=Wt.uniforms;if(Vt.useProgram(Sn.program)&&(na=!0,Fe=!0,Ti=!0),et.id!==w&&(w=et.id,Fe=!0),na||R!==b){Vt.buffers.depth.getReversed()?(Et.copy(b.projectionMatrix),iS(Et),aS(Et),Oe.setValue(P,"projectionMatrix",Et)):Oe.setValue(P,"projectionMatrix",b.projectionMatrix),Oe.setValue(P,"viewMatrix",b.matrixWorldInverse);const gn=Oe.map.cameraPosition;gn!==void 0&&gn.setValue(P,oe.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&Oe.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Oe.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Fe=!0,Ti=!0)}if(k.isSkinnedMesh){Oe.setOptional(P,k,"bindMatrix"),Oe.setOptional(P,k,"bindMatrixInverse");const un=k.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Oe.setValue(P,"boneTexture",un.boneTexture,D))}k.isBatchedMesh&&(Oe.setOptional(P,k,"batchingTexture"),Oe.setValue(P,"batchingTexture",k._matricesTexture,D),Oe.setOptional(P,k,"batchingIdTexture"),Oe.setValue(P,"batchingIdTexture",k._indirectTexture,D),Oe.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&Oe.setValue(P,"batchingColorTexture",k._colorsTexture,D));const an=tt.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Kt.update(k,tt,Sn),(Fe||Wt.receiveShadow!==k.receiveShadow)&&(Wt.receiveShadow=k.receiveShadow,Oe.setValue(P,"receiveShadow",k.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Mn.envMap.value=Nt,Mn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&X.environment!==null&&(Mn.envMapIntensity.value=X.environmentIntensity),Fe&&(Oe.setValue(P,"toneMappingExposure",U.toneMappingExposure),Wt.needsLights&&ea(Mn,Ti),_t&&et.fog===!0&&Mt.refreshFogUniforms(Mn,_t),Mt.refreshMaterialUniforms(Mn,et,W,Q,_.state.transmissionRenderTarget[b.id]),hc.upload(P,Mi(Wt),Mn,D)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(hc.upload(P,Mi(Wt),Mn,D),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Oe.setValue(P,"center",k.center),Oe.setValue(P,"modelViewMatrix",k.modelViewMatrix),Oe.setValue(P,"normalMatrix",k.normalMatrix),Oe.setValue(P,"modelMatrix",k.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const un=et.uniformsGroups;for(let gn=0,hi=un.length;gn<hi;gn++){const bi=un[gn];G.update(bi,Sn),G.bind(bi,Sn)}}return Sn}function ea(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function je(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(b,X,tt){const et=It.get(b);et.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),It.get(b.texture).__webglTexture=X,It.get(b.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:tt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const tt=It.get(b);tt.__webglFramebuffer=X,tt.__useDefaultFramebuffer=X===void 0};const Do=P.createFramebuffer();this.setRenderTarget=function(b,X=0,tt=0){q=b,I=X,F=tt;let et=!0,k=null,_t=!1,yt=!1;if(b){const Nt=It.get(b);if(Nt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(P.FRAMEBUFFER,null),et=!1;else if(Nt.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Nt.__hasExternalTextures)D.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Gt=b.depthTexture;if(Nt.__boundDepthTexture!==Gt){if(Gt!==null&&It.has(Gt)&&(b.width!==Gt.image.width||b.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(yt=!0);const kt=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[X])?k=kt[X][tt]:k=kt[X],_t=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?k=It.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?k=kt[tt]:k=kt,H.copy(b.viewport),st.copy(b.scissor),it=b.scissorTest}else H.copy(Ut).multiplyScalar(W).floor(),st.copy(zt).multiplyScalar(W).floor(),it=Ht;if(tt!==0&&(k=Do),Vt.bindFramebuffer(P.FRAMEBUFFER,k)&&et&&Vt.drawBuffers(b,k),Vt.viewport(H),Vt.scissor(st),Vt.setScissorTest(it),_t){const Nt=It.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,tt)}else if(yt){const Nt=It.get(b.texture),Jt=X;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.__webglTexture,tt,Jt)}else if(b!==null&&tt!==0){const Nt=It.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Nt.__webglTexture,tt)}w=-1},this.readRenderTargetPixels=function(b,X,tt,et,k,_t,yt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){Vt.bindFramebuffer(P.FRAMEBUFFER,Tt);try{const Nt=b.texture,Jt=Nt.format,kt=Nt.type;if(!ee.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-et&&tt>=0&&tt<=b.height-k&&P.readPixels(X,tt,et,k,te.convert(Jt),te.convert(kt),_t)}finally{const Nt=q!==null?It.get(q).__webglFramebuffer:null;Vt.bindFramebuffer(P.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,X,tt,et,k,_t,yt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt)if(X>=0&&X<=b.width-et&&tt>=0&&tt<=b.height-k){Vt.bindFramebuffer(P.FRAMEBUFFER,Tt);const Nt=b.texture,Jt=Nt.format,kt=Nt.type;if(!ee.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.bufferData(P.PIXEL_PACK_BUFFER,_t.byteLength,P.STREAM_READ),P.readPixels(X,tt,et,k,te.convert(Jt),te.convert(kt),0);const ue=q!==null?It.get(q).__webglFramebuffer:null;Vt.bindFramebuffer(P.FRAMEBUFFER,ue);const Se=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await nS(P,Se,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_t),P.deleteBuffer(Gt),P.deleteSync(Se),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,tt=0){const et=Math.pow(2,-tt),k=Math.floor(b.image.width*et),_t=Math.floor(b.image.height*et),yt=X!==null?X.x:0,Tt=X!==null?X.y:0;D.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,tt,0,0,yt,Tt,k,_t),Vt.unbindTexture()};const Uo=P.createFramebuffer(),Ei=P.createFramebuffer();this.copyTextureToTexture=function(b,X,tt=null,et=null,k=0,_t=null){_t===null&&(k!==0?(fc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=k,k=0):_t=0);let yt,Tt,Nt,Jt,kt,Gt,ue,Se,Ve;const pe=b.isCompressedTexture?b.mipmaps[_t]:b.image;if(tt!==null)yt=tt.max.x-tt.min.x,Tt=tt.max.y-tt.min.y,Nt=tt.isBox3?tt.max.z-tt.min.z:1,Jt=tt.min.x,kt=tt.min.y,Gt=tt.isBox3?tt.min.z:0;else{const an=Math.pow(2,-k);yt=Math.floor(pe.width*an),Tt=Math.floor(pe.height*an),b.isDataArrayTexture?Nt=pe.depth:b.isData3DTexture?Nt=Math.floor(pe.depth*an):Nt=1,Jt=0,kt=0,Gt=0}et!==null?(ue=et.x,Se=et.y,Ve=et.z):(ue=0,Se=0,Ve=0);const me=te.convert(X.format),Wt=te.convert(X.type);let ke;X.isData3DTexture?(D.setTexture3D(X,0),ke=P.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),ke=P.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),ke=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment);const ve=P.getParameter(P.UNPACK_ROW_LENGTH),Sn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),na=P.getParameter(P.UNPACK_SKIP_PIXELS),Fe=P.getParameter(P.UNPACK_SKIP_ROWS),Ti=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Jt),P.pixelStorei(P.UNPACK_SKIP_ROWS,kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt);const Oe=b.isDataArrayTexture||b.isData3DTexture,Mn=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const an=It.get(b),un=It.get(X),gn=It.get(an.__renderTarget),hi=It.get(un.__renderTarget);Vt.bindFramebuffer(P.READ_FRAMEBUFFER,gn.__webglFramebuffer),Vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let bi=0;bi<Nt;bi++)Oe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,It.get(b).__webglTexture,k,Gt+bi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,It.get(X).__webglTexture,_t,Ve+bi)),P.blitFramebuffer(Jt,kt,yt,Tt,ue,Se,yt,Tt,P.DEPTH_BUFFER_BIT,P.NEAREST);Vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||It.has(b)){const an=It.get(b),un=It.get(X);Vt.bindFramebuffer(P.READ_FRAMEBUFFER,Uo),Vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ei);for(let gn=0;gn<Nt;gn++)Oe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,an.__webglTexture,k,Gt+gn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,an.__webglTexture,k),Mn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,un.__webglTexture,_t,Ve+gn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,un.__webglTexture,_t),k!==0?P.blitFramebuffer(Jt,kt,yt,Tt,ue,Se,yt,Tt,P.COLOR_BUFFER_BIT,P.NEAREST):Mn?P.copyTexSubImage3D(ke,_t,ue,Se,Ve+gn,Jt,kt,yt,Tt):P.copyTexSubImage2D(ke,_t,ue,Se,Jt,kt,yt,Tt);Vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Mn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(ke,_t,ue,Se,Ve,yt,Tt,Nt,me,Wt,pe.data):X.isCompressedArrayTexture?P.compressedTexSubImage3D(ke,_t,ue,Se,Ve,yt,Tt,Nt,me,pe.data):P.texSubImage3D(ke,_t,ue,Se,Ve,yt,Tt,Nt,me,Wt,pe):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,_t,ue,Se,yt,Tt,me,Wt,pe.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,_t,ue,Se,pe.width,pe.height,me,pe.data):P.texSubImage2D(P.TEXTURE_2D,_t,ue,Se,yt,Tt,me,Wt,pe);P.pixelStorei(P.UNPACK_ROW_LENGTH,ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Sn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,na),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ti),_t===0&&X.generateMipmaps&&P.generateMipmap(ke),Vt.unbindTexture()},this.copyTextureToTexture3D=function(b,X,tt=null,et=null,k=0){return fc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,tt,et,k)},this.initRenderTarget=function(b){It.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Vt.unbindTexture()},this.resetState=function(){I=0,F=0,q=null,Vt.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(e),i.unpackColorSpace=ye._getUnpackColorSpace()}}export{Le as C,xi as L,Ki as M,zS as O,_c as P,fh as R,bb as S,Ab as T,Be as V,Rb as W,Tb as _,Pa as a,Eb as b,mr as c};
