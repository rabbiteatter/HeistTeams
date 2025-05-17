function GS(a,t){for(var i=0;i<t.length;i++){const r=t[i];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in a)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(a,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function jS(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var nf={exports:{}},er={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function YS(){if(Um)return er;Um=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:h,ref:o!==void 0?o:null,props:c}}return er.Fragment=t,er.jsx=i,er.jsxs=i,er}var Lm;function QS(){return Lm||(Lm=1,nf.exports=YS()),nf.exports}var mt=QS(),sf={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function FS(){if(zm)return J;zm=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function E(b){return b===null||typeof b!="object"?null:(b=S&&b[S]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,V={};function P(b,x,B){this.props=b,this.context=x,this.refs=V,this.updater=B||k}P.prototype.isReactComponent={},P.prototype.setState=function(b,x){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,x,"setState")},P.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ue(){}ue.prototype=P.prototype;function le(b,x,B){this.props=b,this.context=x,this.refs=V,this.updater=B||k}var ce=le.prototype=new ue;ce.constructor=le,L(ce,P.prototype),ce.isPureReactComponent=!0;var Oe=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},Ke=Object.prototype.hasOwnProperty;function et(b,x,B,z,j,fe){return B=fe.ref,{$$typeof:a,type:b,key:x,ref:B!==void 0?B:null,props:fe}}function lt(b,x){return et(b.type,x,void 0,void 0,void 0,b.props)}function ct(b){return typeof b=="object"&&b!==null&&b.$$typeof===a}function Mn(b){var x={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(B){return x[B]})}var an=/\/+/g;function tt(b,x){return typeof b=="object"&&b!==null&&b.key!=null?Mn(""+b.key):x.toString(36)}function vi(){}function yi(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(vi,vi):(b.status="pending",b.then(function(x){b.status==="pending"&&(b.status="fulfilled",b.value=x)},function(x){b.status==="pending"&&(b.status="rejected",b.reason=x)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function nt(b,x,B,z,j){var fe=typeof b;(fe==="undefined"||fe==="boolean")&&(b=null);var W=!1;if(b===null)W=!0;else switch(fe){case"bigint":case"string":case"number":W=!0;break;case"object":switch(b.$$typeof){case a:case t:W=!0;break;case y:return W=b._init,nt(W(b._payload),x,B,z,j)}}if(W)return j=j(b),W=z===""?"."+tt(b,0):z,Oe(j)?(B="",W!=null&&(B=W.replace(an,"$&/")+"/"),nt(j,x,B,"",function(In){return In})):j!=null&&(ct(j)&&(j=lt(j,B+(j.key==null||b&&b.key===j.key?"":(""+j.key).replace(an,"$&/")+"/")+W)),x.push(j)),1;W=0;var St=z===""?".":z+":";if(Oe(b))for(var Re=0;Re<b.length;Re++)z=b[Re],fe=St+tt(z,Re),W+=nt(z,x,B,fe,j);else if(Re=E(b),typeof Re=="function")for(b=Re.call(b),Re=0;!(z=b.next()).done;)z=z.value,fe=St+tt(z,Re++),W+=nt(z,x,B,fe,j);else if(fe==="object"){if(typeof b.then=="function")return nt(yi(b),x,B,z,j);throw x=String(b),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return W}function D(b,x,B){if(b==null)return b;var z=[],j=0;return nt(b,z,"","",function(fe){return x.call(B,fe,j++)}),z}function H(b){if(b._status===-1){var x=b._result;x=x(),x.then(function(B){(b._status===0||b._status===-1)&&(b._status=1,b._result=B)},function(B){(b._status===0||b._status===-1)&&(b._status=2,b._result=B)}),b._status===-1&&(b._status=0,b._result=x)}if(b._status===1)return b._result.default;throw b._result}var F=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function Se(){}return J.Children={map:D,forEach:function(b,x,B){D(b,function(){x.apply(this,arguments)},B)},count:function(b){var x=0;return D(b,function(){x++}),x},toArray:function(b){return D(b,function(x){return x})||[]},only:function(b){if(!ct(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},J.Component=P,J.Fragment=i,J.Profiler=o,J.PureComponent=le,J.StrictMode=r,J.Suspense=_,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,J.__COMPILER_RUNTIME={__proto__:null,c:function(b){return $.H.useMemoCache(b)}},J.cache=function(b){return function(){return b.apply(null,arguments)}},J.cloneElement=function(b,x,B){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var z=L({},b.props),j=b.key,fe=void 0;if(x!=null)for(W in x.ref!==void 0&&(fe=void 0),x.key!==void 0&&(j=""+x.key),x)!Ke.call(x,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&x.ref===void 0||(z[W]=x[W]);var W=arguments.length-2;if(W===1)z.children=B;else if(1<W){for(var St=Array(W),Re=0;Re<W;Re++)St[Re]=arguments[Re+2];z.children=St}return et(b.type,j,void 0,void 0,fe,z)},J.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:c,_context:b},b},J.createElement=function(b,x,B){var z,j={},fe=null;if(x!=null)for(z in x.key!==void 0&&(fe=""+x.key),x)Ke.call(x,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(j[z]=x[z]);var W=arguments.length-2;if(W===1)j.children=B;else if(1<W){for(var St=Array(W),Re=0;Re<W;Re++)St[Re]=arguments[Re+2];j.children=St}if(b&&b.defaultProps)for(z in W=b.defaultProps,W)j[z]===void 0&&(j[z]=W[z]);return et(b,fe,void 0,void 0,null,j)},J.createRef=function(){return{current:null}},J.forwardRef=function(b){return{$$typeof:p,render:b}},J.isValidElement=ct,J.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:H}},J.memo=function(b,x){return{$$typeof:m,type:b,compare:x===void 0?null:x}},J.startTransition=function(b){var x=$.T,B={};$.T=B;try{var z=b(),j=$.S;j!==null&&j(B,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Se,F)}catch(fe){F(fe)}finally{$.T=x}},J.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},J.use=function(b){return $.H.use(b)},J.useActionState=function(b,x,B){return $.H.useActionState(b,x,B)},J.useCallback=function(b,x){return $.H.useCallback(b,x)},J.useContext=function(b){return $.H.useContext(b)},J.useDebugValue=function(){},J.useDeferredValue=function(b,x){return $.H.useDeferredValue(b,x)},J.useEffect=function(b,x,B){var z=$.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return z.useEffect(b,x)},J.useId=function(){return $.H.useId()},J.useImperativeHandle=function(b,x,B){return $.H.useImperativeHandle(b,x,B)},J.useInsertionEffect=function(b,x){return $.H.useInsertionEffect(b,x)},J.useLayoutEffect=function(b,x){return $.H.useLayoutEffect(b,x)},J.useMemo=function(b,x){return $.H.useMemo(b,x)},J.useOptimistic=function(b,x){return $.H.useOptimistic(b,x)},J.useReducer=function(b,x,B){return $.H.useReducer(b,x,B)},J.useRef=function(b){return $.H.useRef(b)},J.useState=function(b){return $.H.useState(b)},J.useSyncExternalStore=function(b,x,B){return $.H.useSyncExternalStore(b,x,B)},J.useTransition=function(){return $.H.useTransition()},J.version="19.1.0",J}var Hm;function Ff(){return Hm||(Hm=1,sf.exports=FS()),sf.exports}var Fe=Ff();const XS=jS(Fe),KS=GS({__proto__:null,default:XS},[Fe]);var af={exports:{}},tr={},rf={exports:{}},lf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function ZS(){return Bm||(Bm=1,function(a){function t(D,H){var F=D.length;D.push(H);e:for(;0<F;){var Se=F-1>>>1,b=D[Se];if(0<o(b,H))D[Se]=H,D[F]=b,F=Se;else break e}}function i(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],F=D.pop();if(F!==H){D[0]=F;e:for(var Se=0,b=D.length,x=b>>>1;Se<x;){var B=2*(Se+1)-1,z=D[B],j=B+1,fe=D[j];if(0>o(z,F))j<b&&0>o(fe,z)?(D[Se]=fe,D[j]=F,Se=j):(D[Se]=z,D[B]=F,Se=B);else if(j<b&&0>o(fe,F))D[Se]=fe,D[j]=F,Se=j;else break e}}return H}function o(D,H){var F=D.sortIndex-H.sortIndex;return F!==0?F:D.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var _=[],m=[],y=1,S=null,E=3,k=!1,L=!1,V=!1,P=!1,ue=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function Oe(D){for(var H=i(m);H!==null;){if(H.callback===null)r(m);else if(H.startTime<=D)r(m),H.sortIndex=H.expirationTime,t(_,H);else break;H=i(m)}}function $(D){if(V=!1,Oe(D),!L)if(i(_)!==null)L=!0,Ke||(Ke=!0,tt());else{var H=i(m);H!==null&&nt($,H.startTime-D)}}var Ke=!1,et=-1,lt=5,ct=-1;function Mn(){return P?!0:!(a.unstable_now()-ct<lt)}function an(){if(P=!1,Ke){var D=a.unstable_now();ct=D;var H=!0;try{e:{L=!1,V&&(V=!1,le(et),et=-1),k=!0;var F=E;try{t:{for(Oe(D),S=i(_);S!==null&&!(S.expirationTime>D&&Mn());){var Se=S.callback;if(typeof Se=="function"){S.callback=null,E=S.priorityLevel;var b=Se(S.expirationTime<=D);if(D=a.unstable_now(),typeof b=="function"){S.callback=b,Oe(D),H=!0;break t}S===i(_)&&r(_),Oe(D)}else r(_);S=i(_)}if(S!==null)H=!0;else{var x=i(m);x!==null&&nt($,x.startTime-D),H=!1}}break e}finally{S=null,E=F,k=!1}H=void 0}}finally{H?tt():Ke=!1}}}var tt;if(typeof ce=="function")tt=function(){ce(an)};else if(typeof MessageChannel<"u"){var vi=new MessageChannel,yi=vi.port2;vi.port1.onmessage=an,tt=function(){yi.postMessage(null)}}else tt=function(){ue(an,0)};function nt(D,H){et=ue(function(){D(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(D){switch(E){case 1:case 2:case 3:var H=3;break;default:H=E}var F=E;E=H;try{return D()}finally{E=F}},a.unstable_requestPaint=function(){P=!0},a.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=E;E=D;try{return H()}finally{E=F}},a.unstable_scheduleCallback=function(D,H,F){var Se=a.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Se+F:Se):F=Se,D){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=F+b,D={id:y++,callback:H,priorityLevel:D,startTime:F,expirationTime:b,sortIndex:-1},F>Se?(D.sortIndex=F,t(m,D),i(_)===null&&D===i(m)&&(V?(le(et),et=-1):V=!0,nt($,F-Se))):(D.sortIndex=b,t(_,D),L||k||(L=!0,Ke||(Ke=!0,tt()))),D},a.unstable_shouldYield=Mn,a.unstable_wrapCallback=function(D){var H=E;return function(){var F=E;E=H;try{return D.apply(this,arguments)}finally{E=F}}}}(lf)),lf}var Pm;function WS(){return Pm||(Pm=1,rf.exports=ZS()),rf.exports}var of={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function JS(){if(qm)return at;qm=1;var a=Ff();function t(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(_,m,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:_,containerInfo:m,implementation:y}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,at.createPortal=function(_,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(_,m,null,y)},at.flushSync=function(_){var m=h.T,y=r.p;try{if(h.T=null,r.p=2,_)return _()}finally{h.T=m,r.p=y,r.d.f()}},at.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(_,m))},at.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},at.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var y=m.as,S=p(y,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:k}):y==="script"&&r.d.X(_,{crossOrigin:S,integrity:E,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},at.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);r.d.M(_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(_)},at.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,S=p(y,m.crossOrigin);r.d.L(_,y,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},at.preloadModule=function(_,m){if(typeof _=="string")if(m){var y=p(m.as,m.crossOrigin);r.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(_)},at.requestFormReset=function(_){r.d.r(_)},at.unstable_batchedUpdates=function(_,m){return _(m)},at.useFormState=function(_,m,y){return h.H.useFormState(_,m,y)},at.useFormStatus=function(){return h.H.useHostTransitionStatus()},at.version="19.1.0",at}var Vm;function ov(){if(Vm)return of.exports;Vm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),of.exports=JS(),of.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function $S(){if(Gm)return tr;Gm=1;var a=WS(),t=Ff(),i=ov();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function _(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var s=e,l=n;;){var u=s.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===s)return p(u),e;if(f===l)return p(u),n;f=f.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=f;else{for(var d=!1,g=u.child;g;){if(g===s){d=!0,s=u,l=f;break}if(g===l){d=!0,l=u,s=f;break}g=g.sibling}if(!d){for(g=f.child;g;){if(g===s){d=!0,s=f,l=u;break}if(g===l){d=!0,l=f,s=u;break}g=g.sibling}if(!d)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),le=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),ct=Symbol.for("react.activity"),Mn=Symbol.for("react.memo_cache_sentinel"),an=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=an&&e[an]||e["@@iterator"],typeof e=="function"?e:null)}var vi=Symbol.for("react.client.reference");function yi(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===vi?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case P:return"Profiler";case V:return"StrictMode";case $:return"Suspense";case Ke:return"SuspenseList";case ct:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case ce:return(e.displayName||"Context")+".Provider";case le:return(e._context.displayName||"Context")+".Consumer";case Oe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case et:return n=e.displayName||null,n!==null?n:yi(e.type)||"Memo";case lt:n=e._payload,e=e._init;try{return yi(e(n))}catch{}}return null}var nt=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},Se=[],b=-1;function x(e){return{current:e}}function B(e){0>b||(e.current=Se[b],Se[b]=null,b--)}function z(e,n){b++,Se[b]=e.current,e.current=n}var j=x(null),fe=x(null),W=x(null),St=x(null);function Re(e,n){switch(z(W,n),z(fe,e),z(j,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?um(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=um(n),e=cm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(j),z(j,e)}function In(){B(j),B(fe),B(W)}function qo(e){e.memoizedState!==null&&z(St,e);var n=j.current,s=cm(n,e.type);n!==s&&(z(fe,e),z(j,s))}function Ir(e){fe.current===e&&(B(j),B(fe)),St.current===e&&(B(St),Ka._currentValue=F)}var Vo=Object.prototype.hasOwnProperty,Go=a.unstable_scheduleCallback,jo=a.unstable_cancelCallback,S0=a.unstable_shouldYield,b0=a.unstable_requestPaint,Zt=a.unstable_now,T0=a.unstable_getCurrentPriorityLevel,Gh=a.unstable_ImmediatePriority,jh=a.unstable_UserBlockingPriority,xr=a.unstable_NormalPriority,C0=a.unstable_LowPriority,Yh=a.unstable_IdlePriority,A0=a.log,w0=a.unstable_setDisableYieldValue,ia=null,bt=null;function xn(e){if(typeof A0=="function"&&w0(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(ia,e)}catch{}}var Tt=Math.clz32?Math.clz32:O0,R0=Math.log,N0=Math.LN2;function O0(e){return e>>>=0,e===0?32:31-(R0(e)/N0|0)|0}var kr=256,Ur=4194304;function Ei(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lr(e,n,s){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~f,l!==0?u=Ei(l):(d&=g,d!==0?u=Ei(d):s||(s=g&~e,s!==0&&(u=Ei(s))))):(g=l&~f,g!==0?u=Ei(g):d!==0?u=Ei(d):s||(s=l&~e,s!==0&&(u=Ei(s)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,s=n&-n,f>=s||f===32&&(s&4194048)!==0)?n:u}function sa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function D0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qh(){var e=kr;return kr<<=1,(kr&4194048)===0&&(kr=256),e}function Fh(){var e=Ur;return Ur<<=1,(Ur&62914560)===0&&(Ur=4194304),e}function Yo(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function aa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function M0(e,n,s,l,u,f){var d=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(s=d&~s;0<s;){var O=31-Tt(s),I=1<<O;g[O]=0,v[O]=-1;var R=w[O];if(R!==null)for(w[O]=null,O=0;O<R.length;O++){var N=R[O];N!==null&&(N.lane&=-536870913)}s&=~I}l!==0&&Xh(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(d&~n))}function Xh(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Tt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function Kh(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var l=31-Tt(s),u=1<<l;u&n|e[l]&n&&(e[l]|=n),s&=~u}}function Qo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zh(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Om(e.type))}function I0(e,n){var s=H.p;try{return H.p=e,n()}finally{H.p=s}}var kn=Math.random().toString(36).slice(2),it="__reactFiber$"+kn,ft="__reactProps$"+kn,Wi="__reactContainer$"+kn,Xo="__reactEvents$"+kn,x0="__reactListeners$"+kn,k0="__reactHandles$"+kn,Wh="__reactResources$"+kn,ra="__reactMarker$"+kn;function Ko(e){delete e[it],delete e[ft],delete e[Xo],delete e[x0],delete e[k0]}function Ji(e){var n=e[it];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Wi]||s[it]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=pm(e);e!==null;){if(s=e[it])return s;e=pm(e)}return n}e=s,s=e.parentNode}return null}function $i(e){if(e=e[it]||e[Wi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function la(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function es(e){var n=e[Wh];return n||(n=e[Wh]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function qe(e){e[ra]=!0}var Jh=new Set,$h={};function Si(e,n){ts(e,n),ts(e+"Capture",n)}function ts(e,n){for($h[e]=n,e=0;e<n.length;e++)Jh.add(n[e])}var U0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ed={},td={};function L0(e){return Vo.call(td,e)?!0:Vo.call(ed,e)?!1:U0.test(e)?td[e]=!0:(ed[e]=!0,!1)}function zr(e,n,s){if(L0(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function Hr(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function rn(e,n,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+l)}}var Zo,nd;function ns(e){if(Zo===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Zo=n&&n[1]||"",nd=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zo+e+nd}var Wo=!1;function Jo(e,n){if(!e||Wo)return"";Wo=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(N){var R=N}Reflect.construct(e,[],I)}else{try{I.call()}catch(N){R=N}e.call(I.prototype)}}else{try{throw Error()}catch(N){R=N}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),d=f[0],g=f[1];if(d&&g){var v=d.split(`
`),w=g.split(`
`);for(u=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;u<w.length&&!w[u].includes("DetermineComponentFrameRoot");)u++;if(l===v.length||u===w.length)for(l=v.length-1,u=w.length-1;1<=l&&0<=u&&v[l]!==w[u];)u--;for(;1<=l&&0<=u;l--,u--)if(v[l]!==w[u]){if(l!==1||u!==1)do if(l--,u--,0>u||v[l]!==w[u]){var O=`
`+v[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=u);break}}}finally{Wo=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ns(s):""}function z0(e){switch(e.tag){case 26:case 27:case 5:return ns(e.type);case 16:return ns("Lazy");case 13:return ns("Suspense");case 19:return ns("SuspenseList");case 0:case 15:return Jo(e.type,!1);case 11:return Jo(e.type.render,!1);case 1:return Jo(e.type,!0);case 31:return ns("Activity");default:return""}}function id(e){try{var n="";do n+=z0(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function H0(e){var n=sd(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(d){l=""+d,f.call(this,d)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(d){l=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Br(e){e._valueTracker||(e._valueTracker=H0(e))}function ad(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return e&&(l=sd(e)?e.checked?"true":"false":e.value),e=l,e!==s?(n.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var B0=/[\n"\\]/g;function It(e){return e.replace(B0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function $o(e,n,s,l,u,f,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Mt(n)):e.value!==""+Mt(n)&&(e.value=""+Mt(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?eu(e,d,Mt(n)):s!=null?eu(e,d,Mt(s)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Mt(g):e.removeAttribute("name")}function rd(e,n,s,l,u,f,d,g){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;s=s!=null?""+Mt(s):"",n=n!=null?""+Mt(n):s,g||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function eu(e,n,s){n==="number"&&Pr(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function is(e,n,s,l){if(e=e.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=n.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Mt(s),n=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ld(e,n,s){if(n!=null&&(n=""+Mt(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Mt(s):""}function od(e,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(nt(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Mt(n),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function ss(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var P0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ud(e,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,s):typeof s!="number"||s===0||P0.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function cd(e,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&s[u]!==l&&ud(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&ud(e,f,n[f])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qr(e){return V0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,rs=null;function fd(e){var n=$i(e);if(n&&(e=n.stateNode)){var s=e[ft]||null;e:switch(e=n.stateNode,n.type){case"input":if($o(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+It(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==e&&l.form===e.form){var u=l[ft]||null;if(!u)throw Error(r(90));$o(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===e.form&&ad(l)}break e;case"textarea":ld(e,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&is(e,!!s.multiple,n,!1)}}}var su=!1;function hd(e,n,s){if(su)return e(n,s);su=!0;try{var l=e(n);return l}finally{if(su=!1,(as!==null||rs!==null)&&(wl(),as&&(n=as,e=rs,rs=as=null,fd(n),e)))for(n=0;n<e.length;n++)fd(e[n])}}function oa(e,n){var s=e.stateNode;if(s===null)return null;var l=s[ft]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(ln)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){au=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{au=!1}var Un=null,ru=null,Vr=null;function dd(){if(Vr)return Vr;var e,n=ru,s=n.length,l,u="value"in Un?Un.value:Un.textContent,f=u.length;for(e=0;e<s&&n[e]===u[e];e++);var d=s-e;for(l=1;l<=d&&n[s-l]===u[f-l];l++);return Vr=u.slice(e,1<l?1-l:void 0)}function Gr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function pd(){return!1}function ht(e){function n(s,l,u,f,d){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(s=e[g],this[g]=s?s(f):f[g]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jr:pd,this.isPropagationStopped=pd,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),n}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yr=ht(bi),ca=y({},bi,{view:0,detail:0}),G0=ht(ca),lu,ou,fa,Qr=y({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fa&&(fa&&e.type==="mousemove"?(lu=e.screenX-fa.screenX,ou=e.screenY-fa.screenY):ou=lu=0,fa=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),_d=ht(Qr),j0=y({},Qr,{dataTransfer:0}),Y0=ht(j0),Q0=y({},ca,{relatedTarget:0}),uu=ht(Q0),F0=y({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=ht(F0),K0=y({},bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z0=ht(K0),W0=y({},bi,{data:0}),md=ht(W0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=eE[e])?!!n[e]:!1}function cu(){return tE}var nE=y({},ca,{key:function(e){if(e.key){var n=J0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iE=ht(nE),sE=y({},Qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=ht(sE),aE=y({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),rE=ht(aE),lE=y({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),oE=ht(lE),uE=y({},Qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cE=ht(uE),fE=y({},bi,{newState:0,oldState:0}),hE=ht(fE),dE=[9,13,27,32],fu=ln&&"CompositionEvent"in window,ha=null;ln&&"documentMode"in document&&(ha=document.documentMode);var pE=ln&&"TextEvent"in window&&!ha,vd=ln&&(!fu||ha&&8<ha&&11>=ha),yd=" ",Ed=!1;function Sd(e,n){switch(e){case"keyup":return dE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ls=!1;function _E(e,n){switch(e){case"compositionend":return bd(n);case"keypress":return n.which!==32?null:(Ed=!0,yd);case"textInput":return e=n.data,e===yd&&Ed?null:e;default:return null}}function mE(e,n){if(ls)return e==="compositionend"||!fu&&Sd(e,n)?(e=dd(),Vr=ru=Un=null,ls=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vd&&n.locale!=="ko"?null:n.data;default:return null}}var gE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gE[e.type]:n==="textarea"}function Cd(e,n,s,l){as?rs?rs.push(l):rs=[l]:as=l,n=Il(n,"onChange"),0<n.length&&(s=new Yr("onChange","change",null,s,l),e.push({event:s,listeners:n}))}var da=null,pa=null;function vE(e){sm(e,0)}function Fr(e){var n=la(e);if(ad(n))return e}function Ad(e,n){if(e==="change")return n}var wd=!1;if(ln){var hu;if(ln){var du="oninput"in document;if(!du){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),du=typeof Rd.oninput=="function"}hu=du}else hu=!1;wd=hu&&(!document.documentMode||9<document.documentMode)}function Nd(){da&&(da.detachEvent("onpropertychange",Od),pa=da=null)}function Od(e){if(e.propertyName==="value"&&Fr(pa)){var n=[];Cd(n,pa,e,iu(e)),hd(vE,n)}}function yE(e,n,s){e==="focusin"?(Nd(),da=n,pa=s,da.attachEvent("onpropertychange",Od)):e==="focusout"&&Nd()}function EE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fr(pa)}function SE(e,n){if(e==="click")return Fr(n)}function bE(e,n){if(e==="input"||e==="change")return Fr(n)}function TE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ct=typeof Object.is=="function"?Object.is:TE;function _a(e,n){if(Ct(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Vo.call(n,u)||!Ct(e[u],n[u]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Md(e,n){var s=Dd(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=n&&l>=n)return{node:s,offset:n-e};e=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Dd(s)}}function Id(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Id(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Pr(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Pr(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var CE=ln&&"documentMode"in document&&11>=document.documentMode,os=null,_u=null,ma=null,mu=!1;function kd(e,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;mu||os==null||os!==Pr(l)||(l=os,"selectionStart"in l&&pu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ma&&_a(ma,l)||(ma=l,l=Il(_u,"onSelect"),0<l.length&&(n=new Yr("onSelect","select",null,n,s),e.push({event:n,listeners:l}),n.target=os)))}function Ti(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var us={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionrun:Ti("Transition","TransitionRun"),transitionstart:Ti("Transition","TransitionStart"),transitioncancel:Ti("Transition","TransitionCancel"),transitionend:Ti("Transition","TransitionEnd")},gu={},Ud={};ln&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Ci(e){if(gu[e])return gu[e];if(!us[e])return e;var n=us[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Ud)return gu[e]=n[s];return e}var Ld=Ci("animationend"),zd=Ci("animationiteration"),Hd=Ci("animationstart"),AE=Ci("transitionrun"),wE=Ci("transitionstart"),RE=Ci("transitioncancel"),Bd=Ci("transitionend"),Pd=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Pt(e,n){Pd.set(e,n),Si(n,[e])}var qd=new WeakMap;function xt(e,n){if(typeof e=="object"&&e!==null){var s=qd.get(e);return s!==void 0?s:(n={value:e,source:n,stack:id(n)},qd.set(e,n),n)}return{value:e,source:n,stack:id(n)}}var kt=[],cs=0,yu=0;function Xr(){for(var e=cs,n=yu=cs=0;n<e;){var s=kt[n];kt[n++]=null;var l=kt[n];kt[n++]=null;var u=kt[n];kt[n++]=null;var f=kt[n];if(kt[n++]=null,l!==null&&u!==null){var d=l.pending;d===null?u.next=u:(u.next=d.next,d.next=u),l.pending=u}f!==0&&Vd(s,u,f)}}function Kr(e,n,s,l){kt[cs++]=e,kt[cs++]=n,kt[cs++]=s,kt[cs++]=l,yu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Eu(e,n,s,l){return Kr(e,n,s,l),Zr(e)}function fs(e,n){return Kr(e,null,null,n),Zr(e)}function Vd(e,n,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var u=!1,f=e.return;f!==null;)f.childLanes|=s,l=f.alternate,l!==null&&(l.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Tt(s),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=s|536870912),f):null}function Zr(e){if(50<qa)throw qa=0,wc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hs={};function NE(e,n,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,n,s,l){return new NE(e,n,s,l)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function on(e,n){var s=e.alternate;return s===null?(s=At(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Gd(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Wr(e,n,s,l,u,f){var d=0;if(l=e,typeof e=="function")Su(e)&&(d=1);else if(typeof e=="string")d=DS(e,s,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ct:return e=At(31,s,n,u),e.elementType=ct,e.lanes=f,e;case L:return Ai(s.children,u,f,n);case V:d=8,u|=24;break;case P:return e=At(12,s,n,u|2),e.elementType=P,e.lanes=f,e;case $:return e=At(13,s,n,u),e.elementType=$,e.lanes=f,e;case Ke:return e=At(19,s,n,u),e.elementType=Ke,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:case ce:d=10;break e;case le:d=9;break e;case Oe:d=11;break e;case et:d=14;break e;case lt:d=16,l=null;break e}d=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return n=At(d,s,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function Ai(e,n,s,l){return e=At(7,e,l,n),e.lanes=s,e}function bu(e,n,s){return e=At(6,e,null,n),e.lanes=s,e}function Tu(e,n,s){return n=At(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ds=[],ps=0,Jr=null,$r=0,Ut=[],Lt=0,wi=null,un=1,cn="";function Ri(e,n){ds[ps++]=$r,ds[ps++]=Jr,Jr=e,$r=n}function jd(e,n,s){Ut[Lt++]=un,Ut[Lt++]=cn,Ut[Lt++]=wi,wi=e;var l=un;e=cn;var u=32-Tt(l)-1;l&=~(1<<u),s+=1;var f=32-Tt(n)+u;if(30<f){var d=u-u%5;f=(l&(1<<d)-1).toString(32),l>>=d,u-=d,un=1<<32-Tt(n)+u|s<<u|l,cn=f+e}else un=1<<f|s<<u|l,cn=e}function Cu(e){e.return!==null&&(Ri(e,1),jd(e,1,0))}function Au(e){for(;e===Jr;)Jr=ds[--ps],ds[ps]=null,$r=ds[--ps],ds[ps]=null;for(;e===wi;)wi=Ut[--Lt],Ut[Lt]=null,cn=Ut[--Lt],Ut[Lt]=null,un=Ut[--Lt],Ut[Lt]=null}var ot=null,Me=null,de=!1,Ni=null,Wt=!1,wu=Error(r(519));function Oi(e){var n=Error(r(418,""));throw ya(xt(n,e)),wu}function Yd(e){var n=e.stateNode,s=e.type,l=e.memoizedProps;switch(n[it]=e,n[ft]=l,s){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(s=0;s<Ga.length;s++)ae(Ga[s],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":ae("invalid",n),rd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Br(n);break;case"select":ae("invalid",n);break;case"textarea":ae("invalid",n),od(n,l.value,l.defaultValue,l.children),Br(n)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||om(n.textContent,s)?(l.popover!=null&&(ae("beforetoggle",n),ae("toggle",n)),l.onScroll!=null&&ae("scroll",n),l.onScrollEnd!=null&&ae("scrollend",n),l.onClick!=null&&(n.onclick=xl),n=!0):n=!1,n||Oi(e)}function Qd(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:ot=ot.return}}function ga(e){if(e!==ot)return!1;if(!de)return Qd(e),de=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Vc(e.type,e.memoizedProps)),s=!s),s&&Me&&Oi(e),Qd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){Me=Vt(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}Me=null}}else n===27?(n=Me,Wn(e.type)?(e=Qc,Qc=null,Me=e):Me=n):Me=ot?Vt(e.stateNode.nextSibling):null;return!0}function va(){Me=ot=null,de=!1}function Fd(){var e=Ni;return e!==null&&(_t===null?_t=e:_t.push.apply(_t,e),Ni=null),e}function ya(e){Ni===null?Ni=[e]:Ni.push(e)}var Ru=x(null),Di=null,fn=null;function Ln(e,n,s){z(Ru,n._currentValue),n._currentValue=s}function hn(e){e._currentValue=Ru.current,B(Ru)}function Nu(e,n,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===s)break;e=e.return}}function Ou(e,n,s,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var d=u.child;f=f.firstContext;e:for(;f!==null;){var g=f;f=u;for(var v=0;v<n.length;v++)if(g.context===n[v]){f.lanes|=s,g=f.alternate,g!==null&&(g.lanes|=s),Nu(f.return,s,e),l||(d=null);break e}f=g.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(r(341));d.lanes|=s,f=d.alternate,f!==null&&(f.lanes|=s),Nu(d,s,e),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===e){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function Ea(e,n,s,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var g=u.type;Ct(u.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(u===St.current){if(d=u.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ka):e=[Ka])}u=u.return}e!==null&&Ou(n,e,s,l),n.flags|=262144}function el(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Mi(e){Di=e,fn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return Xd(Di,e)}function tl(e,n){return Di===null&&Mi(e),Xd(e,n)}function Xd(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},fn===null){if(e===null)throw Error(r(308));fn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fn=fn.next=n;return s}var OE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},DE=a.unstable_scheduleCallback,ME=a.unstable_NormalPriority,He={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new OE,data:new Map,refCount:0}}function Sa(e){e.refCount--,e.refCount===0&&DE(ME,function(){e.controller.abort()})}var ba=null,Mu=0,_s=0,ms=null;function IE(e,n){if(ba===null){var s=ba=[];Mu=0,_s=xc(),ms={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Mu++,n.then(Kd,Kd),n}function Kd(){if(--Mu===0&&ba!==null){ms!==null&&(ms.status="fulfilled");var e=ba;ba=null,_s=0,ms=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xE(e,n){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var Zd=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&IE(e,n),Zd!==null&&Zd(e,n)};var Ii=x(null);function Iu(){var e=Ii.current;return e!==null?e:Ce.pooledCache}function nl(e,n){n===null?z(Ii,Ii.current):z(Ii,n.pool)}function Wd(){var e=Iu();return e===null?null:{parent:He._currentValue,pool:e}}var Ta=Error(r(460)),Jd=Error(r(474)),il=Error(r(542)),xu={then:function(){}};function $d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function ep(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(sl,sl),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,np(e),e;default:if(typeof n.status=="string")n.then(sl,sl);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,np(e),e}throw Ca=n,Ta}}var Ca=null;function tp(){if(Ca===null)throw Error(r(459));var e=Ca;return Ca=null,e}function np(e){if(e===Ta||e===il)throw Error(r(483))}var zn=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Bn(e,n,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(_e&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=Zr(e),Vd(e,null,s),n}return Kr(e,l,n,s),Zr(e)}function Aa(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,Kh(e,s)}}function Lu(e,n){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var d={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?u=f=d:f=f.next=d,s=s.next}while(s!==null);f===null?u=f=n:f=f.next=n}else u=f=n;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var zu=!1;function wa(){if(zu){var e=ms;if(e!==null)throw e}}function Ra(e,n,s,l){zu=!1;var u=e.updateQueue;zn=!1;var f=u.firstBaseUpdate,d=u.lastBaseUpdate,g=u.shared.pending;if(g!==null){u.shared.pending=null;var v=g,w=v.next;v.next=null,d===null?f=w:d.next=w,d=v;var O=e.alternate;O!==null&&(O=O.updateQueue,g=O.lastBaseUpdate,g!==d&&(g===null?O.firstBaseUpdate=w:g.next=w,O.lastBaseUpdate=v))}if(f!==null){var I=u.baseState;d=0,O=w=v=null,g=f;do{var R=g.lane&-536870913,N=R!==g.lane;if(N?(oe&R)===R:(l&R)===R){R!==0&&R===_s&&(zu=!0),O!==null&&(O=O.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var X=e,Y=g;R=n;var ye=s;switch(Y.tag){case 1:if(X=Y.payload,typeof X=="function"){I=X.call(ye,I,R);break e}I=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=Y.payload,R=typeof X=="function"?X.call(ye,I,R):X,R==null)break e;I=y({},I,R);break e;case 2:zn=!0}}R=g.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[R]:N.push(R))}else N={lane:R,tag:g.tag,payload:g.payload,callback:g.callback,next:null},O===null?(w=O=N,v=I):O=O.next=N,d|=R;if(g=g.next,g===null){if(g=u.shared.pending,g===null)break;N=g,g=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);O===null&&(v=I),u.baseState=v,u.firstBaseUpdate=w,u.lastBaseUpdate=O,f===null&&(u.shared.lanes=0),Fn|=d,e.lanes=d,e.memoizedState=I}}function ip(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function sp(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)ip(s[e],n)}var gs=x(null),al=x(0);function ap(e,n){e=yn,z(al,e),z(gs,n),yn=e|n.baseLanes}function Hu(){z(al,yn),z(gs,gs.current)}function Bu(){yn=al.current,B(gs),B(al)}var Pn=0,ee=null,ge=null,Le=null,rl=!1,vs=!1,xi=!1,ll=0,Na=0,ys=null,kE=0;function ke(){throw Error(r(321))}function Pu(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Ct(e[s],n[s]))return!1;return!0}function qu(e,n,s,l,u,f){return Pn=f,ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?Vp:Gp,xi=!1,f=s(l,u),xi=!1,vs&&(f=lp(n,s,l,u)),rp(e),f}function rp(e){D.H=dl;var n=ge!==null&&ge.next!==null;if(Pn=0,Le=ge=ee=null,rl=!1,Na=0,ys=null,n)throw Error(r(300));e===null||Ve||(e=e.dependencies,e!==null&&el(e)&&(Ve=!0))}function lp(e,n,s,l){ee=e;var u=0;do{if(vs&&(ys=null),Na=0,vs=!1,25<=u)throw Error(r(301));if(u+=1,Le=ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=qE,f=n(s,l)}while(vs);return f}function UE(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Oa(n):n,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(ee.flags|=1024),n}function Vu(){var e=ll!==0;return ll=0,e}function Gu(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function ju(e){if(rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}rl=!1}Pn=0,Le=ge=ee=null,vs=!1,Na=ll=0,ys=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ee.memoizedState=Le=e:Le=Le.next=e,Le}function ze(){if(ge===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=Le===null?ee.memoizedState:Le.next;if(n!==null)Le=n,ge=e;else{if(e===null)throw ee.alternate===null?Error(r(467)):Error(r(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Le===null?ee.memoizedState=Le=e:Le=Le.next=e}return Le}function Yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oa(e){var n=Na;return Na+=1,ys===null&&(ys=[]),e=ep(ys,e,n),n=ee,(Le===null?n.memoizedState:Le.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Vp:Gp),e}function ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oa(e);if(e.$$typeof===ce)return st(e)}throw Error(r(438,String(e)))}function Qu(e){var n=null,s=ee.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Yu(),ee.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),l=0;l<e;l++)s[l]=Mn;return n.index++,s}function dn(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=ze();return Fu(n,ge,e)}function Fu(e,n,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var d=u.next;u.next=f.next,f.next=d}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var g=d=null,v=null,w=n,O=!1;do{var I=w.lane&-536870913;if(I!==w.lane?(oe&I)===I:(Pn&I)===I){var R=w.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),I===_s&&(O=!0);else if((Pn&R)===R){w=w.next,R===_s&&(O=!0);continue}else I={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(g=v=I,d=f):v=v.next=I,ee.lanes|=R,Fn|=R;I=w.action,xi&&s(f,I),f=w.hasEagerState?w.eagerState:s(f,I)}else R={lane:I,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(g=v=R,d=f):v=v.next=R,ee.lanes|=I,Fn|=I;w=w.next}while(w!==null&&w!==n);if(v===null?d=f:v.next=g,!Ct(f,e.memoizedState)&&(Ve=!0,O&&(s=ms,s!==null)))throw s;e.memoizedState=f,e.baseState=d,e.baseQueue=v,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xu(e){var n=ze(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,f=n.memoizedState;if(u!==null){s.pending=null;var d=u=u.next;do f=e(f,d.action),d=d.next;while(d!==u);Ct(f,n.memoizedState)||(Ve=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,l]}function op(e,n,s){var l=ee,u=ze(),f=de;if(f){if(s===void 0)throw Error(r(407));s=s()}else s=n();var d=!Ct((ge||u).memoizedState,s);d&&(u.memoizedState=s,Ve=!0),u=u.queue;var g=fp.bind(null,l,u,e);if(Da(2048,8,g,[e]),u.getSnapshot!==n||d||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Es(9,cl(),cp.bind(null,l,u,s,n),null),Ce===null)throw Error(r(349));f||(Pn&124)!==0||up(l,n,s)}return s}function up(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=ee.updateQueue,n===null?(n=Yu(),ee.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function cp(e,n,s,l){n.value=s,n.getSnapshot=l,hp(n)&&dp(e)}function fp(e,n,s){return s(function(){hp(n)&&dp(e)})}function hp(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Ct(e,s)}catch{return!0}}function dp(e){var n=fs(e,2);n!==null&&Dt(n,e,2)}function Ku(e){var n=dt();if(typeof e=="function"){var s=e;if(e=s(),xi){xn(!0);try{s()}finally{xn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},n}function pp(e,n,s,l){return e.baseState=s,Fu(e,ge,typeof l=="function"?l:dn)}function LE(e,n,s,l,u){if(hl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){f.listeners.push(d)}};D.T!==null?s(!0):f.isTransition=!1,l(f),s=n.pending,s===null?(f.next=n.pending=f,_p(n,f)):(f.next=s.next,n.pending=s.next=f)}}function _p(e,n){var s=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=D.T,d={};D.T=d;try{var g=s(u,l),v=D.S;v!==null&&v(d,g),mp(e,n,g)}catch(w){Zu(e,n,w)}finally{D.T=f}}else try{f=s(u,l),mp(e,n,f)}catch(w){Zu(e,n,w)}}function mp(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){gp(e,n,l)},function(l){return Zu(e,n,l)}):gp(e,n,s)}function gp(e,n,s){n.status="fulfilled",n.value=s,vp(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,_p(e,s)))}function Zu(e,n,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,vp(n),n=n.next;while(n!==l)}e.action=null}function vp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function yp(e,n){return n}function Ep(e,n){if(de){var s=Ce.formState;if(s!==null){e:{var l=ee;if(de){if(Me){t:{for(var u=Me,f=Wt;u.nodeType!==8;){if(!f){u=null;break t}if(u=Vt(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Me=Vt(u.nextSibling),l=u.data==="F!";break e}}Oi(l)}l=!1}l&&(n=s[0])}}return s=dt(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yp,lastRenderedState:n},s.queue=l,s=Bp.bind(null,ee,l),l.dispatch=s,l=Ku(!1),f=tc.bind(null,ee,!1,l.queue),l=dt(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,s=LE.bind(null,ee,u,f,s),u.dispatch=s,l.memoizedState=e,[n,s,!1]}function Sp(e){var n=ze();return bp(n,ge,e)}function bp(e,n,s){if(n=Fu(e,n,yp)[0],e=ul(dn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Oa(n)}catch(d){throw d===Ta?il:d}else l=n;n=ze();var u=n.queue,f=u.dispatch;return s!==n.memoizedState&&(ee.flags|=2048,Es(9,cl(),zE.bind(null,u,s),null)),[l,f,e]}function zE(e,n){e.action=n}function Tp(e){var n=ze(),s=ge;if(s!==null)return bp(n,s,e);ze(),n=n.memoizedState,s=ze();var l=s.queue.dispatch;return s.memoizedState=e,[n,l,!1]}function Es(e,n,s,l){return e={tag:e,create:s,deps:l,inst:n,next:null},n=ee.updateQueue,n===null&&(n=Yu(),ee.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,n.lastEffect=e),e}function cl(){return{destroy:void 0,resource:void 0}}function Cp(){return ze().memoizedState}function fl(e,n,s,l){var u=dt();l=l===void 0?null:l,ee.flags|=e,u.memoizedState=Es(1|n,cl(),s,l)}function Da(e,n,s,l){var u=ze();l=l===void 0?null:l;var f=u.memoizedState.inst;ge!==null&&l!==null&&Pu(l,ge.memoizedState.deps)?u.memoizedState=Es(n,f,s,l):(ee.flags|=e,u.memoizedState=Es(1|n,f,s,l))}function Ap(e,n){fl(8390656,8,e,n)}function wp(e,n){Da(2048,8,e,n)}function Rp(e,n){return Da(4,2,e,n)}function Np(e,n){return Da(4,4,e,n)}function Op(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dp(e,n,s){s=s!=null?s.concat([e]):null,Da(4,4,Op.bind(null,n,e),s)}function Wu(){}function Mp(e,n){var s=ze();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Pu(n,l[1])?l[0]:(s.memoizedState=[e,n],e)}function Ip(e,n){var s=ze();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Pu(n,l[1]))return l[0];if(l=e(),xi){xn(!0);try{e()}finally{xn(!1)}}return s.memoizedState=[l,n],l}function Ju(e,n,s){return s===void 0||(Pn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=U_(),ee.lanes|=e,Fn|=e,s)}function xp(e,n,s,l){return Ct(s,n)?s:gs.current!==null?(e=Ju(e,s,l),Ct(e,n)||(Ve=!0),e):(Pn&42)===0?(Ve=!0,e.memoizedState=s):(e=U_(),ee.lanes|=e,Fn|=e,n)}function kp(e,n,s,l,u){var f=H.p;H.p=f!==0&&8>f?f:8;var d=D.T,g={};D.T=g,tc(e,!1,n,s);try{var v=u(),w=D.S;if(w!==null&&w(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=xE(v,l);Ma(e,n,O,Ot(e))}else Ma(e,n,l,Ot(e))}catch(I){Ma(e,n,{then:function(){},status:"rejected",reason:I},Ot())}finally{H.p=f,D.T=d}}function HE(){}function $u(e,n,s,l){if(e.tag!==5)throw Error(r(476));var u=Up(e).queue;kp(e,u,n,F,s===null?HE:function(){return Lp(e),s(l)})}function Up(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:F},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Lp(e){var n=Up(e).next.queue;Ma(e,n,{},Ot())}function ec(){return st(Ka)}function zp(){return ze().memoizedState}function Hp(){return ze().memoizedState}function BE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ot();e=Hn(s);var l=Bn(n,e,s);l!==null&&(Dt(l,n,s),Aa(l,n,s)),n={cache:Du()},e.payload=n;return}n=n.return}}function PE(e,n,s){var l=Ot();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},hl(e)?Pp(n,s):(s=Eu(e,n,s,l),s!==null&&(Dt(s,e,l),qp(s,n,l)))}function Bp(e,n,s){var l=Ot();Ma(e,n,s,l)}function Ma(e,n,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(hl(e))Pp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var d=n.lastRenderedState,g=f(d,s);if(u.hasEagerState=!0,u.eagerState=g,Ct(g,d))return Kr(e,n,u,0),Ce===null&&Xr(),!1}catch{}finally{}if(s=Eu(e,n,u,l),s!==null)return Dt(s,e,l),qp(s,n,l),!0}return!1}function tc(e,n,s,l){if(l={lane:2,revertLane:xc(),action:l,hasEagerState:!1,eagerState:null,next:null},hl(e)){if(n)throw Error(r(479))}else n=Eu(e,s,l,2),n!==null&&Dt(n,e,2)}function hl(e){var n=e.alternate;return e===ee||n!==null&&n===ee}function Pp(e,n){vs=rl=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function qp(e,n,s){if((s&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,Kh(e,s)}}var dl={readContext:st,use:ol,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke},Vp={readContext:st,use:ol,useCallback:function(e,n){return dt().memoizedState=[e,n===void 0?null:n],e},useContext:st,useEffect:Ap,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,fl(4194308,4,Op.bind(null,n,e),s)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){fl(4,2,e,n)},useMemo:function(e,n){var s=dt();n=n===void 0?null:n;var l=e();if(xi){xn(!0);try{e()}finally{xn(!1)}}return s.memoizedState=[l,n],l},useReducer:function(e,n,s){var l=dt();if(s!==void 0){var u=s(n);if(xi){xn(!0);try{s(n)}finally{xn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=PE.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var n=dt();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,s=Bp.bind(null,ee,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Wu,useDeferredValue:function(e,n){var s=dt();return Ju(s,e,n)},useTransition:function(){var e=Ku(!1);return e=kp.bind(null,ee,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var l=ee,u=dt();if(de){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),Ce===null)throw Error(r(349));(oe&124)!==0||up(l,n,s)}u.memoizedState=s;var f={value:s,getSnapshot:n};return u.queue=f,Ap(fp.bind(null,l,f,e),[e]),l.flags|=2048,Es(9,cl(),cp.bind(null,l,f,s,n),null),s},useId:function(){var e=dt(),n=Ce.identifierPrefix;if(de){var s=cn,l=un;s=(l&~(1<<32-Tt(l)-1)).toString(32)+s,n="«"+n+"R"+s,s=ll++,0<s&&(n+="H"+s.toString(32)),n+="»"}else s=kE++,n="«"+n+"r"+s.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:ec,useFormState:Ep,useActionState:Ep,useOptimistic:function(e){var n=dt();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=tc.bind(null,ee,!0,s),s.dispatch=n,[e,n]},useMemoCache:Qu,useCacheRefresh:function(){return dt().memoizedState=BE.bind(null,ee)}},Gp={readContext:st,use:ol,useCallback:Mp,useContext:st,useEffect:wp,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Np,useMemo:Ip,useReducer:ul,useRef:Cp,useState:function(){return ul(dn)},useDebugValue:Wu,useDeferredValue:function(e,n){var s=ze();return xp(s,ge.memoizedState,e,n)},useTransition:function(){var e=ul(dn)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:Oa(e),n]},useSyncExternalStore:op,useId:zp,useHostTransitionStatus:ec,useFormState:Sp,useActionState:Sp,useOptimistic:function(e,n){var s=ze();return pp(s,ge,e,n)},useMemoCache:Qu,useCacheRefresh:Hp},qE={readContext:st,use:ol,useCallback:Mp,useContext:st,useEffect:wp,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Np,useMemo:Ip,useReducer:Xu,useRef:Cp,useState:function(){return Xu(dn)},useDebugValue:Wu,useDeferredValue:function(e,n){var s=ze();return ge===null?Ju(s,e,n):xp(s,ge.memoizedState,e,n)},useTransition:function(){var e=Xu(dn)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:Oa(e),n]},useSyncExternalStore:op,useId:zp,useHostTransitionStatus:ec,useFormState:Tp,useActionState:Tp,useOptimistic:function(e,n){var s=ze();return ge!==null?pp(s,ge,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Hp},Ss=null,Ia=0;function pl(e){var n=Ia;return Ia+=1,Ss===null&&(Ss=[]),ep(Ss,e,n)}function xa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function jp(e){var n=e._init;return n(e._payload)}function Yp(e){function n(C,T){if(e){var A=C.deletions;A===null?(C.deletions=[T],C.flags|=16):A.push(T)}}function s(C,T){if(!e)return null;for(;T!==null;)n(C,T),T=T.sibling;return null}function l(C){for(var T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function u(C,T){return C=on(C,T),C.index=0,C.sibling=null,C}function f(C,T,A){return C.index=A,e?(A=C.alternate,A!==null?(A=A.index,A<T?(C.flags|=67108866,T):A):(C.flags|=67108866,T)):(C.flags|=1048576,T)}function d(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function g(C,T,A,M){return T===null||T.tag!==6?(T=bu(A,C.mode,M),T.return=C,T):(T=u(T,A),T.return=C,T)}function v(C,T,A,M){var q=A.type;return q===L?O(C,T,A.props.children,M,A.key):T!==null&&(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===lt&&jp(q)===T.type)?(T=u(T,A.props),xa(T,A),T.return=C,T):(T=Wr(A.type,A.key,A.props,null,C.mode,M),xa(T,A),T.return=C,T)}function w(C,T,A,M){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=Tu(A,C.mode,M),T.return=C,T):(T=u(T,A.children||[]),T.return=C,T)}function O(C,T,A,M,q){return T===null||T.tag!==7?(T=Ai(A,C.mode,M,q),T.return=C,T):(T=u(T,A),T.return=C,T)}function I(C,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=bu(""+T,C.mode,A),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case E:return A=Wr(T.type,T.key,T.props,null,C.mode,A),xa(A,T),A.return=C,A;case k:return T=Tu(T,C.mode,A),T.return=C,T;case lt:var M=T._init;return T=M(T._payload),I(C,T,A)}if(nt(T)||tt(T))return T=Ai(T,C.mode,A,null),T.return=C,T;if(typeof T.then=="function")return I(C,pl(T),A);if(T.$$typeof===ce)return I(C,tl(C,T),A);_l(C,T)}return null}function R(C,T,A,M){var q=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return q!==null?null:g(C,T,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case E:return A.key===q?v(C,T,A,M):null;case k:return A.key===q?w(C,T,A,M):null;case lt:return q=A._init,A=q(A._payload),R(C,T,A,M)}if(nt(A)||tt(A))return q!==null?null:O(C,T,A,M,null);if(typeof A.then=="function")return R(C,T,pl(A),M);if(A.$$typeof===ce)return R(C,T,tl(C,A),M);_l(C,A)}return null}function N(C,T,A,M,q){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return C=C.get(A)||null,g(T,C,""+M,q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case E:return C=C.get(M.key===null?A:M.key)||null,v(T,C,M,q);case k:return C=C.get(M.key===null?A:M.key)||null,w(T,C,M,q);case lt:var te=M._init;return M=te(M._payload),N(C,T,A,M,q)}if(nt(M)||tt(M))return C=C.get(A)||null,O(T,C,M,q,null);if(typeof M.then=="function")return N(C,T,A,pl(M),q);if(M.$$typeof===ce)return N(C,T,A,tl(T,M),q);_l(T,M)}return null}function X(C,T,A,M){for(var q=null,te=null,G=T,Q=T=0,je=null;G!==null&&Q<A.length;Q++){G.index>Q?(je=G,G=null):je=G.sibling;var he=R(C,G,A[Q],M);if(he===null){G===null&&(G=je);break}e&&G&&he.alternate===null&&n(C,G),T=f(he,T,Q),te===null?q=he:te.sibling=he,te=he,G=je}if(Q===A.length)return s(C,G),de&&Ri(C,Q),q;if(G===null){for(;Q<A.length;Q++)G=I(C,A[Q],M),G!==null&&(T=f(G,T,Q),te===null?q=G:te.sibling=G,te=G);return de&&Ri(C,Q),q}for(G=l(G);Q<A.length;Q++)je=N(G,C,Q,A[Q],M),je!==null&&(e&&je.alternate!==null&&G.delete(je.key===null?Q:je.key),T=f(je,T,Q),te===null?q=je:te.sibling=je,te=je);return e&&G.forEach(function(ni){return n(C,ni)}),de&&Ri(C,Q),q}function Y(C,T,A,M){if(A==null)throw Error(r(151));for(var q=null,te=null,G=T,Q=T=0,je=null,he=A.next();G!==null&&!he.done;Q++,he=A.next()){G.index>Q?(je=G,G=null):je=G.sibling;var ni=R(C,G,he.value,M);if(ni===null){G===null&&(G=je);break}e&&G&&ni.alternate===null&&n(C,G),T=f(ni,T,Q),te===null?q=ni:te.sibling=ni,te=ni,G=je}if(he.done)return s(C,G),de&&Ri(C,Q),q;if(G===null){for(;!he.done;Q++,he=A.next())he=I(C,he.value,M),he!==null&&(T=f(he,T,Q),te===null?q=he:te.sibling=he,te=he);return de&&Ri(C,Q),q}for(G=l(G);!he.done;Q++,he=A.next())he=N(G,C,Q,he.value,M),he!==null&&(e&&he.alternate!==null&&G.delete(he.key===null?Q:he.key),T=f(he,T,Q),te===null?q=he:te.sibling=he,te=he);return e&&G.forEach(function(VS){return n(C,VS)}),de&&Ri(C,Q),q}function ye(C,T,A,M){if(typeof A=="object"&&A!==null&&A.type===L&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case E:e:{for(var q=A.key;T!==null;){if(T.key===q){if(q=A.type,q===L){if(T.tag===7){s(C,T.sibling),M=u(T,A.props.children),M.return=C,C=M;break e}}else if(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===lt&&jp(q)===T.type){s(C,T.sibling),M=u(T,A.props),xa(M,A),M.return=C,C=M;break e}s(C,T);break}else n(C,T);T=T.sibling}A.type===L?(M=Ai(A.props.children,C.mode,M,A.key),M.return=C,C=M):(M=Wr(A.type,A.key,A.props,null,C.mode,M),xa(M,A),M.return=C,C=M)}return d(C);case k:e:{for(q=A.key;T!==null;){if(T.key===q)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){s(C,T.sibling),M=u(T,A.children||[]),M.return=C,C=M;break e}else{s(C,T);break}else n(C,T);T=T.sibling}M=Tu(A,C.mode,M),M.return=C,C=M}return d(C);case lt:return q=A._init,A=q(A._payload),ye(C,T,A,M)}if(nt(A))return X(C,T,A,M);if(tt(A)){if(q=tt(A),typeof q!="function")throw Error(r(150));return A=q.call(A),Y(C,T,A,M)}if(typeof A.then=="function")return ye(C,T,pl(A),M);if(A.$$typeof===ce)return ye(C,T,tl(C,A),M);_l(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(s(C,T.sibling),M=u(T,A),M.return=C,C=M):(s(C,T),M=bu(A,C.mode,M),M.return=C,C=M),d(C)):s(C,T)}return function(C,T,A,M){try{Ia=0;var q=ye(C,T,A,M);return Ss=null,q}catch(G){if(G===Ta||G===il)throw G;var te=At(29,G,null,C.mode);return te.lanes=M,te.return=C,te}finally{}}}var bs=Yp(!0),Qp=Yp(!1),zt=x(null),Jt=null;function qn(e){var n=e.alternate;z(Be,Be.current&1),z(zt,e),Jt===null&&(n===null||gs.current!==null||n.memoizedState!==null)&&(Jt=e)}function Fp(e){if(e.tag===22){if(z(Be,Be.current),z(zt,e),Jt===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Jt=e)}}else Vn()}function Vn(){z(Be,Be.current),z(zt,zt.current)}function pn(e){B(zt),Jt===e&&(Jt=null),B(Be)}var Be=x(0);function ml(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Yc(s)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function nc(e,n,s,l){n=e.memoizedState,s=s(l,n),s=s==null?n:y({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var ic={enqueueSetState:function(e,n,s){e=e._reactInternals;var l=Ot(),u=Hn(l);u.payload=n,s!=null&&(u.callback=s),n=Bn(e,u,l),n!==null&&(Dt(n,e,l),Aa(n,e,l))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var l=Ot(),u=Hn(l);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Bn(e,u,l),n!==null&&(Dt(n,e,l),Aa(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=Ot(),l=Hn(s);l.tag=2,n!=null&&(l.callback=n),n=Bn(e,l,s),n!==null&&(Dt(n,e,s),Aa(n,e,s))}};function Xp(e,n,s,l,u,f,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,d):n.prototype&&n.prototype.isPureReactComponent?!_a(s,l)||!_a(u,f):!0}function Kp(e,n,s,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==e&&ic.enqueueReplaceState(n,n.state,null)}function ki(e,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(e=e.defaultProps){s===n&&(s=y({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zp(e){gl(e)}function Wp(e){console.error(e)}function Jp(e){gl(e)}function vl(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function $p(e,n,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sc(e,n,s){return s=Hn(s),s.tag=3,s.payload={element:null},s.callback=function(){vl(e,n)},s}function e_(e){return e=Hn(e),e.tag=3,e}function t_(e,n,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){$p(n,s,l)}}var d=s.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){$p(n,s,l),typeof u!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function VE(e,n,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Ea(n,s,u,!0),s=zt.current,s!==null){switch(s.tag){case 13:return Jt===null?Nc():s.alternate===null&&Ie===0&&(Ie=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===xu?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Dc(e,l,u)),!1;case 22:return s.flags|=65536,l===xu?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Dc(e,l,u)),!1}throw Error(r(435,s.tag))}return Dc(e,l,u),Nc(),!1}if(de)return n=zt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==wu&&(e=Error(r(422),{cause:l}),ya(xt(e,s)))):(l!==wu&&(n=Error(r(423),{cause:l}),ya(xt(n,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=xt(l,s),u=sc(e.stateNode,l,u),Lu(e,u),Ie!==4&&(Ie=2)),!1;var f=Error(r(520),{cause:l});if(f=xt(f,s),Pa===null?Pa=[f]:Pa.push(f),Ie!==4&&(Ie=2),n===null)return!0;l=xt(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=sc(s.stateNode,l,e),Lu(s,e),!1;case 1:if(n=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xn===null||!Xn.has(f))))return s.flags|=65536,u&=-u,s.lanes|=u,u=e_(u),t_(u,e,s,l),Lu(s,u),!1}s=s.return}while(s!==null);return!1}var n_=Error(r(461)),Ve=!1;function Ze(e,n,s,l){n.child=e===null?Qp(n,null,s,l):bs(n,e.child,s,l)}function i_(e,n,s,l,u){s=s.render;var f=n.ref;if("ref"in l){var d={};for(var g in l)g!=="ref"&&(d[g]=l[g])}else d=l;return Mi(n),l=qu(e,n,s,d,f,u),g=Vu(),e!==null&&!Ve?(Gu(e,n,u),_n(e,n,u)):(de&&g&&Cu(n),n.flags|=1,Ze(e,n,l,u),n.child)}function s_(e,n,s,l,u){if(e===null){var f=s.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=f,a_(e,n,f,l,u)):(e=Wr(s.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!hc(e,u)){var d=f.memoizedProps;if(s=s.compare,s=s!==null?s:_a,s(d,l)&&e.ref===n.ref)return _n(e,n,u)}return n.flags|=1,e=on(f,l),e.ref=n.ref,e.return=n,n.child=e}function a_(e,n,s,l,u){if(e!==null){var f=e.memoizedProps;if(_a(f,l)&&e.ref===n.ref)if(Ve=!1,n.pendingProps=l=f,hc(e,u))(e.flags&131072)!==0&&(Ve=!0);else return n.lanes=e.lanes,_n(e,n,u)}return ac(e,n,s,l,u)}function r_(e,n,s){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|s:s,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return l_(e,n,l,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&nl(n,f!==null?f.cachePool:null),f!==null?ap(n,f):Hu(),Fp(n);else return n.lanes=n.childLanes=536870912,l_(e,n,f!==null?f.baseLanes|s:s,s)}else f!==null?(nl(n,f.cachePool),ap(n,f),Vn(),n.memoizedState=null):(e!==null&&nl(n,null),Hu(),Vn());return Ze(e,n,u,s),n.child}function l_(e,n,s,l){var u=Iu();return u=u===null?null:{parent:He._currentValue,pool:u},n.memoizedState={baseLanes:s,cachePool:u},e!==null&&nl(n,null),Hu(),Fp(n),e!==null&&Ea(e,n,l,!0),null}function yl(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function ac(e,n,s,l,u){return Mi(n),s=qu(e,n,s,l,void 0,u),l=Vu(),e!==null&&!Ve?(Gu(e,n,u),_n(e,n,u)):(de&&l&&Cu(n),n.flags|=1,Ze(e,n,s,u),n.child)}function o_(e,n,s,l,u,f){return Mi(n),n.updateQueue=null,s=lp(n,l,s,u),rp(e),l=Vu(),e!==null&&!Ve?(Gu(e,n,f),_n(e,n,f)):(de&&l&&Cu(n),n.flags|=1,Ze(e,n,s,f),n.child)}function u_(e,n,s,l,u){if(Mi(n),n.stateNode===null){var f=hs,d=s.contextType;typeof d=="object"&&d!==null&&(f=st(d)),f=new s(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ic,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},ku(n),d=s.contextType,f.context=typeof d=="object"&&d!==null?st(d):hs,f.state=n.memoizedState,d=s.getDerivedStateFromProps,typeof d=="function"&&(nc(n,s,d,l),f.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(d=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),d!==f.state&&ic.enqueueReplaceState(f,f.state,null),Ra(n,l,f,u),wa(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var g=n.memoizedProps,v=ki(s,g);f.props=v;var w=f.context,O=s.contextType;d=hs,typeof O=="object"&&O!==null&&(d=st(O));var I=s.getDerivedStateFromProps;O=typeof I=="function"||typeof f.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,O||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g||w!==d)&&Kp(n,f,l,d),zn=!1;var R=n.memoizedState;f.state=R,Ra(n,l,f,u),wa(),w=n.memoizedState,g||R!==w||zn?(typeof I=="function"&&(nc(n,s,I,l),w=n.memoizedState),(v=zn||Xp(n,s,v,l,R,w,d))?(O||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=w),f.props=l,f.state=w,f.context=d,l=v):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Uu(e,n),d=n.memoizedProps,O=ki(s,d),f.props=O,I=n.pendingProps,R=f.context,w=s.contextType,v=hs,typeof w=="object"&&w!==null&&(v=st(w)),g=s.getDerivedStateFromProps,(w=typeof g=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(d!==I||R!==v)&&Kp(n,f,l,v),zn=!1,R=n.memoizedState,f.state=R,Ra(n,l,f,u),wa();var N=n.memoizedState;d!==I||R!==N||zn||e!==null&&e.dependencies!==null&&el(e.dependencies)?(typeof g=="function"&&(nc(n,s,g,l),N=n.memoizedState),(O=zn||Xp(n,s,O,l,R,N,v)||e!==null&&e.dependencies!==null&&el(e.dependencies))?(w||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,v),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,v)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=v,l=O):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,yl(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=bs(n,e.child,null,u),n.child=bs(n,null,s,u)):Ze(e,n,s,u),n.memoizedState=f.state,e=n.child):e=_n(e,n,u),e}function c_(e,n,s,l){return va(),n.flags|=256,Ze(e,n,s,l),n.child}var rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(e){return{baseLanes:e,cachePool:Wd()}}function oc(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=Ht),e}function f_(e,n,s){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,d;if((d=f)||(d=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),d&&(u=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(de){if(u?qn(n):Vn(),de){var g=Me,v;if(v=g){e:{for(v=g,g=Wt;v.nodeType!==8;){if(!g){g=null;break e}if(v=Vt(v.nextSibling),v===null){g=null;break e}}g=v}g!==null?(n.memoizedState={dehydrated:g,treeContext:wi!==null?{id:un,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},v=At(18,null,null,0),v.stateNode=g,v.return=n,n.child=v,ot=n,Me=null,v=!0):v=!1}v||Oi(n)}if(g=n.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return Yc(g)?n.lanes=32:n.lanes=536870912,null;pn(n)}return g=l.children,l=l.fallback,u?(Vn(),u=n.mode,g=El({mode:"hidden",children:g},u),l=Ai(l,u,s,null),g.return=n,l.return=n,g.sibling=l,n.child=g,u=n.child,u.memoizedState=lc(s),u.childLanes=oc(e,d,s),n.memoizedState=rc,l):(qn(n),uc(n,g))}if(v=e.memoizedState,v!==null&&(g=v.dehydrated,g!==null)){if(f)n.flags&256?(qn(n),n.flags&=-257,n=cc(e,n,s)):n.memoizedState!==null?(Vn(),n.child=e.child,n.flags|=128,n=null):(Vn(),u=l.fallback,g=n.mode,l=El({mode:"visible",children:l.children},g),u=Ai(u,g,s,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,bs(n,e.child,null,s),l=n.child,l.memoizedState=lc(s),l.childLanes=oc(e,d,s),n.memoizedState=rc,n=u);else if(qn(n),Yc(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var w=d.dgst;d=w,l=Error(r(419)),l.stack="",l.digest=d,ya({value:l,source:null,stack:null}),n=cc(e,n,s)}else if(Ve||Ea(e,n,s,!1),d=(s&e.childLanes)!==0,Ve||d){if(d=Ce,d!==null&&(l=s&-s,l=(l&42)!==0?1:Qo(l),l=(l&(d.suspendedLanes|s))!==0?0:l,l!==0&&l!==v.retryLane))throw v.retryLane=l,fs(e,l),Dt(d,e,l),n_;g.data==="$?"||Nc(),n=cc(e,n,s)}else g.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,Me=Vt(g.nextSibling),ot=n,de=!0,Ni=null,Wt=!1,e!==null&&(Ut[Lt++]=un,Ut[Lt++]=cn,Ut[Lt++]=wi,un=e.id,cn=e.overflow,wi=n),n=uc(n,l.children),n.flags|=4096);return n}return u?(Vn(),u=l.fallback,g=n.mode,v=e.child,w=v.sibling,l=on(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,w!==null?u=on(w,u):(u=Ai(u,g,s,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,g=e.child.memoizedState,g===null?g=lc(s):(v=g.cachePool,v!==null?(w=He._currentValue,v=v.parent!==w?{parent:w,pool:w}:v):v=Wd(),g={baseLanes:g.baseLanes|s,cachePool:v}),u.memoizedState=g,u.childLanes=oc(e,d,s),n.memoizedState=rc,l):(qn(n),s=e.child,e=s.sibling,s=on(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=s,n.memoizedState=null,s)}function uc(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=At(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function cc(e,n,s){return bs(n,e.child,null,s),e=uc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function h_(e,n,s){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Nu(e.return,n,s)}function fc(e,n,s,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=u)}function d_(e,n,s){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(Ze(e,n,l.children,s),l=Be.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&h_(e,s,n);else if(e.tag===19)h_(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(z(Be,l),u){case"forwards":for(s=n.child,u=null;s!==null;)e=s.alternate,e!==null&&ml(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),fc(n,!1,u,s,f);break;case"backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}fc(n,!0,s,null,f);break;case"together":fc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _n(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Fn|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(Ea(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,s=on(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=on(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function hc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&el(e)))}function GE(e,n,s){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),Ln(n,He,e.memoizedState.cache),va();break;case 27:case 5:qo(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:Ln(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(qn(n),n.flags|=128,null):(s&n.child.childLanes)!==0?f_(e,n,s):(qn(n),e=_n(e,n,s),e!==null?e.sibling:null);qn(n);break;case 19:var u=(e.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Ea(e,n,s,!1),l=(s&n.childLanes)!==0),u){if(l)return d_(e,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(Be,Be.current),l)break;return null;case 22:case 23:return n.lanes=0,r_(e,n,s);case 24:Ln(n,He,e.memoizedState.cache)}return _n(e,n,s)}function p_(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ve=!0;else{if(!hc(e,s)&&(n.flags&128)===0)return Ve=!1,GE(e,n,s);Ve=(e.flags&131072)!==0}else Ve=!1,de&&(n.flags&1048576)!==0&&jd(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")Su(l)?(e=ki(l,e),n.tag=1,n=u_(null,n,l,e,s)):(n.tag=0,n=ac(null,n,l,e,s));else{if(l!=null){if(u=l.$$typeof,u===Oe){n.tag=11,n=i_(null,n,l,e,s);break e}else if(u===et){n.tag=14,n=s_(null,n,l,e,s);break e}}throw n=yi(l)||l,Error(r(306,n,""))}}return n;case 0:return ac(e,n,n.type,n.pendingProps,s);case 1:return l=n.type,u=ki(l,n.pendingProps),u_(e,n,l,u,s);case 3:e:{if(Re(n,n.stateNode.containerInfo),e===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(e,n),Ra(n,l,null,s);var d=n.memoizedState;if(l=d.cache,Ln(n,He,l),l!==f.cache&&Ou(n,[He],s,!0),wa(),l=d.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=c_(e,n,l,s);break e}else if(l!==u){u=xt(Error(r(424)),n),ya(u),n=c_(e,n,l,s);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Vt(e.firstChild),ot=n,de=!0,Ni=null,Wt=!0,s=Qp(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(va(),l===u){n=_n(e,n,s);break e}Ze(e,n,l,s)}n=n.child}return n;case 26:return yl(e,n),e===null?(s=vm(n.type,null,n.pendingProps,null))?n.memoizedState=s:de||(s=n.type,e=n.pendingProps,l=kl(W.current).createElement(s),l[it]=n,l[ft]=e,Je(l,s,e),qe(l),n.stateNode=l):n.memoizedState=vm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qo(n),e===null&&de&&(l=n.stateNode=_m(n.type,n.pendingProps,W.current),ot=n,Wt=!0,u=Me,Wn(n.type)?(Qc=u,Me=Vt(l.firstChild)):Me=u),Ze(e,n,n.pendingProps.children,s),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&de&&((u=l=Me)&&(l=gS(l,n.type,n.pendingProps,Wt),l!==null?(n.stateNode=l,ot=n,Me=Vt(l.firstChild),Wt=!1,u=!0):u=!1),u||Oi(n)),qo(n),u=n.type,f=n.pendingProps,d=e!==null?e.memoizedProps:null,l=f.children,Vc(u,f)?l=null:d!==null&&Vc(u,d)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,UE,null,null,s),Ka._currentValue=u),yl(e,n),Ze(e,n,l,s),n.child;case 6:return e===null&&de&&((e=s=Me)&&(s=vS(s,n.pendingProps,Wt),s!==null?(n.stateNode=s,ot=n,Me=null,e=!0):e=!1),e||Oi(n)),null;case 13:return f_(e,n,s);case 4:return Re(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=bs(n,null,l,s):Ze(e,n,l,s),n.child;case 11:return i_(e,n,n.type,n.pendingProps,s);case 7:return Ze(e,n,n.pendingProps,s),n.child;case 8:return Ze(e,n,n.pendingProps.children,s),n.child;case 12:return Ze(e,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,Ln(n,n.type,l.value),Ze(e,n,l.children,s),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Mi(n),u=st(u),l=l(u),n.flags|=1,Ze(e,n,l,s),n.child;case 14:return s_(e,n,n.type,n.pendingProps,s);case 15:return a_(e,n,n.type,n.pendingProps,s);case 19:return d_(e,n,s);case 31:return l=n.pendingProps,s=n.mode,l={mode:l.mode,children:l.children},e===null?(s=El(l,s),s.ref=n.ref,n.child=s,s.return=n,n=s):(s=on(e.child,l),s.ref=n.ref,n.child=s,s.return=n,n=s),n;case 22:return r_(e,n,s);case 24:return Mi(n),l=st(He),e===null?(u=Iu(),u===null&&(u=Ce,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=s),u=f),n.memoizedState={parent:l,cache:u},ku(n),Ln(n,He,u)):((e.lanes&s)!==0&&(Uu(e,n),Ra(n,null,null,s),wa()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ln(n,He,l)):(l=f.cache,Ln(n,He,l),l!==u.cache&&Ou(n,[He],s,!0))),Ze(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function mn(e){e.flags|=4}function __(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tm(n)){if(n=zt.current,n!==null&&((oe&4194048)===oe?Jt!==null:(oe&62914560)!==oe&&(oe&536870912)===0||n!==Jt))throw Ca=xu,Jd;e.flags|=8192}}function Sl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fh():536870912,e.lanes|=n,ws|=n)}function ka(e,n){if(!de)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function De(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(n)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,n}function jE(e,n,s){var l=n.pendingProps;switch(Au(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(n),null;case 1:return De(n),null;case 3:return s=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),hn(He),In(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ga(n)?mn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fd())),De(n),null;case 26:return s=n.memoizedState,e===null?(mn(n),s!==null?(De(n),__(n,s)):(De(n),n.flags&=-16777217)):s?s!==e.memoizedState?(mn(n),De(n),__(n,s)):(De(n),n.flags&=-16777217):(e.memoizedProps!==l&&mn(n),De(n),n.flags&=-16777217),null;case 27:Ir(n),s=W.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&mn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return De(n),null}e=j.current,ga(n)?Yd(n):(e=_m(u,l,s),n.stateNode=e,mn(n))}return De(n),null;case 5:if(Ir(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&mn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return De(n),null}if(e=j.current,ga(n))Yd(n);else{switch(u=kl(W.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}e[it]=n,e[ft]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(Je(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&mn(n)}}return De(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&mn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(e=W.current,ga(n)){if(e=n.stateNode,s=n.memoizedProps,l=null,u=ot,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[it]=n,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||om(e.nodeValue,s)),e||Oi(n)}else e=kl(e).createTextNode(l),e[it]=n,n.stateNode=e}return De(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ga(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[it]=n}else va(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;De(n),u=!1}else u=Fd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pn(n),n):(pn(n),null)}if(pn(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),Sl(n,n.updateQueue),De(n),null;case 4:return In(),e===null&&zc(n.stateNode.containerInfo),De(n),null;case 10:return hn(n.type),De(n),null;case 19:if(B(Be),u=n.memoizedState,u===null)return De(n),null;if(l=(n.flags&128)!==0,f=u.rendering,f===null)if(l)ka(u,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ml(e),f!==null){for(n.flags|=128,ka(u,!1),e=f.updateQueue,n.updateQueue=e,Sl(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)Gd(s,e),s=s.sibling;return z(Be,Be.current&1|2),n.child}e=e.sibling}u.tail!==null&&Zt()>Cl&&(n.flags|=128,l=!0,ka(u,!1),n.lanes=4194304)}else{if(!l)if(e=ml(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Sl(n,e),ka(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!de)return De(n),null}else 2*Zt()-u.renderingStartTime>Cl&&s!==536870912&&(n.flags|=128,l=!0,ka(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Zt(),n.sibling=null,e=Be.current,z(Be,l?e&1|2:e&1),n):(De(n),null);case 22:case 23:return pn(n),Bu(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(De(n),n.subtreeFlags&6&&(n.flags|=8192)):De(n),s=n.updateQueue,s!==null&&Sl(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),e!==null&&B(Ii),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),hn(He),De(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function YE(e,n){switch(Au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return hn(He),In(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ir(n),null;case 13:if(pn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));va()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(Be),null;case 4:return In(),null;case 10:return hn(n.type),null;case 22:case 23:return pn(n),Bu(),e!==null&&B(Ii),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return hn(He),null;case 25:return null;default:return null}}function m_(e,n){switch(Au(n),n.tag){case 3:hn(He),In();break;case 26:case 27:case 5:Ir(n);break;case 4:In();break;case 13:pn(n);break;case 19:B(Be);break;case 10:hn(n.type);break;case 22:case 23:pn(n),Bu(),e!==null&&B(Ii);break;case 24:hn(He)}}function Ua(e,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){l=void 0;var f=s.create,d=s.inst;l=f(),d.destroy=l}s=s.next}while(s!==u)}}catch(g){be(n,n.return,g)}}function Gn(e,n,s){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var d=l.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,u=n;var v=s,w=g;try{w()}catch(O){be(u,v,O)}}}l=l.next}while(l!==f)}}catch(O){be(n,n.return,O)}}function g_(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{sp(n,s)}catch(l){be(e,e.return,l)}}}function v_(e,n,s){s.props=ki(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){be(e,n,l)}}function La(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(u){be(e,n,u)}}function $t(e,n){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){be(e,n,u)}else s.current=null}function y_(e){var n=e.type,s=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){be(e,e.return,u)}}function dc(e,n,s){try{var l=e.stateNode;hS(l,e.type,s,n),l[ft]=n}catch(u){be(e,e.return,u)}}function E_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wn(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||E_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _c(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=xl));else if(l!==4&&(l===27&&Wn(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(_c(e,n,s),e=e.sibling;e!==null;)_c(e,n,s),e=e.sibling}function bl(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(l!==4&&(l===27&&Wn(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(bl(e,n,s),e=e.sibling;e!==null;)bl(e,n,s),e=e.sibling}function S_(e){var n=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Je(n,l,s),n[it]=e,n[ft]=s}catch(f){be(e,e.return,f)}}var gn=!1,Ue=!1,mc=!1,b_=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function QE(e,n){if(e=e.containerInfo,Pc=Pl,e=xd(e),pu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var d=0,g=-1,v=-1,w=0,O=0,I=e,R=null;t:for(;;){for(var N;I!==s||u!==0&&I.nodeType!==3||(g=d+u),I!==f||l!==0&&I.nodeType!==3||(v=d+l),I.nodeType===3&&(d+=I.nodeValue.length),(N=I.firstChild)!==null;)R=I,I=N;for(;;){if(I===e)break t;if(R===s&&++w===u&&(g=d),R===f&&++O===l&&(v=d),(N=I.nextSibling)!==null)break;I=R,R=I.parentNode}I=N}s=g===-1||v===-1?null:{start:g,end:v}}else s=null}s=s||{start:0,end:0}}else s=null;for(qc={focusedElem:e,selectionRange:s},Pl=!1,Ge=n;Ge!==null;)if(n=Ge,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ge=e;else for(;Ge!==null;){switch(n=Ge,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=n,u=f.memoizedProps,f=f.memoizedState,l=s.stateNode;try{var X=ki(s.type,u,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(X,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(Y){be(s,s.return,Y)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)jc(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Ge=e;break}Ge=n.return}}function T_(e,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:jn(e,s),l&4&&Ua(5,s);break;case 1:if(jn(e,s),l&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(d){be(s,s.return,d)}else{var u=ki(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){be(s,s.return,d)}}l&64&&g_(s),l&512&&La(s,s.return);break;case 3:if(jn(e,s),l&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{sp(e,n)}catch(d){be(s,s.return,d)}}break;case 27:n===null&&l&4&&S_(s);case 26:case 5:jn(e,s),n===null&&l&4&&y_(s),l&512&&La(s,s.return);break;case 12:jn(e,s);break;case 13:jn(e,s),l&4&&w_(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=tS.bind(null,s),yS(e,s))));break;case 22:if(l=s.memoizedState!==null||gn,!l){n=n!==null&&n.memoizedState!==null||Ue,u=gn;var f=Ue;gn=l,(Ue=n)&&!f?Yn(e,s,(s.subtreeFlags&8772)!==0):jn(e,s),gn=u,Ue=f}break;case 30:break;default:jn(e,s)}}function C_(e){var n=e.alternate;n!==null&&(e.alternate=null,C_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ko(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,pt=!1;function vn(e,n,s){for(s=s.child;s!==null;)A_(e,n,s),s=s.sibling}function A_(e,n,s){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(ia,s)}catch{}switch(s.tag){case 26:Ue||$t(s,n),vn(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ue||$t(s,n);var l=Ne,u=pt;Wn(s.type)&&(Ne=s.stateNode,pt=!1),vn(e,n,s),Ya(s.stateNode),Ne=l,pt=u;break;case 5:Ue||$t(s,n);case 6:if(l=Ne,u=pt,Ne=null,vn(e,n,s),Ne=l,pt=u,Ne!==null)if(pt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(s.stateNode)}catch(f){be(s,n,f)}else try{Ne.removeChild(s.stateNode)}catch(f){be(s,n,f)}break;case 18:Ne!==null&&(pt?(e=Ne,dm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),$a(e)):dm(Ne,s.stateNode));break;case 4:l=Ne,u=pt,Ne=s.stateNode.containerInfo,pt=!0,vn(e,n,s),Ne=l,pt=u;break;case 0:case 11:case 14:case 15:Ue||Gn(2,s,n),Ue||Gn(4,s,n),vn(e,n,s);break;case 1:Ue||($t(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&v_(s,n,l)),vn(e,n,s);break;case 21:vn(e,n,s);break;case 22:Ue=(l=Ue)||s.memoizedState!==null,vn(e,n,s),Ue=l;break;default:vn(e,n,s)}}function w_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$a(e)}catch(s){be(n,n.return,s)}}function FE(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new b_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new b_),n;default:throw Error(r(435,e.tag))}}function gc(e,n){var s=FE(e);n.forEach(function(l){var u=nS.bind(null,e,l);s.has(l)||(s.add(l),l.then(u,u))})}function wt(e,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],f=e,d=n,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(Wn(g.type)){Ne=g.stateNode,pt=!1;break e}break;case 5:Ne=g.stateNode,pt=!1;break e;case 3:case 4:Ne=g.stateNode.containerInfo,pt=!0;break e}g=g.return}if(Ne===null)throw Error(r(160));A_(f,d,u),Ne=null,pt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)R_(n,e),n=n.sibling}var qt=null;function R_(e,n){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wt(n,e),Rt(e),l&4&&(Gn(3,e,e.return),Ua(3,e),Gn(5,e,e.return));break;case 1:wt(n,e),Rt(e),l&512&&(Ue||s===null||$t(s,s.return)),l&64&&gn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=qt;if(wt(n,e),Rt(e),l&512&&(Ue||s===null||$t(s,s.return)),l&4){var f=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){e:{l=e.type,s=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ra]||f[it]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),Je(f,l,s),f[it]=e,qe(f),l=f;break e;case"link":var d=Sm("link","href",u).get(l+(s.href||""));if(d){for(var g=0;g<d.length;g++)if(f=d[g],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){d.splice(g,1);break t}}f=u.createElement(l),Je(f,l,s),u.head.appendChild(f);break;case"meta":if(d=Sm("meta","content",u).get(l+(s.content||""))){for(g=0;g<d.length;g++)if(f=d[g],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){d.splice(g,1);break t}}f=u.createElement(l),Je(f,l,s),u.head.appendChild(f);break;default:throw Error(r(468,l))}f[it]=e,qe(f),l=f}e.stateNode=l}else bm(u,e.type,e.stateNode);else e.stateNode=Em(u,l,e.memoizedProps);else f!==l?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,l===null?bm(u,e.type,e.stateNode):Em(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&dc(e,e.memoizedProps,s.memoizedProps)}break;case 27:wt(n,e),Rt(e),l&512&&(Ue||s===null||$t(s,s.return)),s!==null&&l&4&&dc(e,e.memoizedProps,s.memoizedProps);break;case 5:if(wt(n,e),Rt(e),l&512&&(Ue||s===null||$t(s,s.return)),e.flags&32){u=e.stateNode;try{ss(u,"")}catch(N){be(e,e.return,N)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,dc(e,u,s!==null?s.memoizedProps:u)),l&1024&&(mc=!0);break;case 6:if(wt(n,e),Rt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(N){be(e,e.return,N)}}break;case 3:if(zl=null,u=qt,qt=Ul(n.containerInfo),wt(n,e),qt=u,Rt(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{$a(n.containerInfo)}catch(N){be(e,e.return,N)}mc&&(mc=!1,N_(e));break;case 4:l=qt,qt=Ul(e.stateNode.containerInfo),wt(n,e),Rt(e),qt=l;break;case 12:wt(n,e),Rt(e);break;case 13:wt(n,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Tc=Zt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gc(e,l)));break;case 22:u=e.memoizedState!==null;var v=s!==null&&s.memoizedState!==null,w=gn,O=Ue;if(gn=w||u,Ue=O||v,wt(n,e),Ue=O,gn=w,Rt(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||v||gn||Ue||Ui(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){v=s=n;try{if(f=v.stateNode,u)d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=v.stateNode;var I=v.memoizedProps.style,R=I!=null&&I.hasOwnProperty("display")?I.display:null;g.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){be(v,v.return,N)}}}else if(n.tag===6){if(s===null){v=n;try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(N){be(v,v.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,gc(e,s))));break;case 19:wt(n,e),Rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gc(e,l)));break;case 30:break;case 21:break;default:wt(n,e),Rt(e)}}function Rt(e){var n=e.flags;if(n&2){try{for(var s,l=e.return;l!==null;){if(E_(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,f=pc(e);bl(e,f,u);break;case 5:var d=s.stateNode;s.flags&32&&(ss(d,""),s.flags&=-33);var g=pc(e);bl(e,g,d);break;case 3:case 4:var v=s.stateNode.containerInfo,w=pc(e);_c(e,w,v);break;default:throw Error(r(161))}}catch(O){be(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function N_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;N_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function jn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)T_(e,n.alternate,n),n=n.sibling}function Ui(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Gn(4,n,n.return),Ui(n);break;case 1:$t(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&v_(n,n.return,s),Ui(n);break;case 27:Ya(n.stateNode);case 26:case 5:$t(n,n.return),Ui(n);break;case 22:n.memoizedState===null&&Ui(n);break;case 30:Ui(n);break;default:Ui(n)}e=e.sibling}}function Yn(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,d=f.flags;switch(f.tag){case 0:case 11:case 15:Yn(u,f,s),Ua(4,f);break;case 1:if(Yn(u,f,s),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(w){be(l,l.return,w)}if(l=f,u=l.updateQueue,u!==null){var g=l.stateNode;try{var v=u.shared.hiddenCallbacks;if(v!==null)for(u.shared.hiddenCallbacks=null,u=0;u<v.length;u++)ip(v[u],g)}catch(w){be(l,l.return,w)}}s&&d&64&&g_(f),La(f,f.return);break;case 27:S_(f);case 26:case 5:Yn(u,f,s),s&&l===null&&d&4&&y_(f),La(f,f.return);break;case 12:Yn(u,f,s);break;case 13:Yn(u,f,s),s&&d&4&&w_(u,f);break;case 22:f.memoizedState===null&&Yn(u,f,s),La(f,f.return);break;case 30:break;default:Yn(u,f,s)}n=n.sibling}}function vc(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Sa(s))}function yc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Sa(e))}function en(e,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)O_(e,n,s,l),n=n.sibling}function O_(e,n,s,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:en(e,n,s,l),u&2048&&Ua(9,n);break;case 1:en(e,n,s,l);break;case 3:en(e,n,s,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Sa(e)));break;case 12:if(u&2048){en(e,n,s,l),e=n.stateNode;try{var f=n.memoizedProps,d=f.id,g=f.onPostCommit;typeof g=="function"&&g(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){be(n,n.return,v)}}else en(e,n,s,l);break;case 13:en(e,n,s,l);break;case 23:break;case 22:f=n.stateNode,d=n.alternate,n.memoizedState!==null?f._visibility&2?en(e,n,s,l):za(e,n):f._visibility&2?en(e,n,s,l):(f._visibility|=2,Ts(e,n,s,l,(n.subtreeFlags&10256)!==0)),u&2048&&vc(d,n);break;case 24:en(e,n,s,l),u&2048&&yc(n.alternate,n);break;default:en(e,n,s,l)}}function Ts(e,n,s,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,d=n,g=s,v=l,w=d.flags;switch(d.tag){case 0:case 11:case 15:Ts(f,d,g,v,u),Ua(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?Ts(f,d,g,v,u):za(f,d):(O._visibility|=2,Ts(f,d,g,v,u)),u&&w&2048&&vc(d.alternate,d);break;case 24:Ts(f,d,g,v,u),u&&w&2048&&yc(d.alternate,d);break;default:Ts(f,d,g,v,u)}n=n.sibling}}function za(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,l=n,u=l.flags;switch(l.tag){case 22:za(s,l),u&2048&&vc(l.alternate,l);break;case 24:za(s,l),u&2048&&yc(l.alternate,l);break;default:za(s,l)}n=n.sibling}}var Ha=8192;function Cs(e){if(e.subtreeFlags&Ha)for(e=e.child;e!==null;)D_(e),e=e.sibling}function D_(e){switch(e.tag){case 26:Cs(e),e.flags&Ha&&e.memoizedState!==null&&IS(qt,e.memoizedState,e.memoizedProps);break;case 5:Cs(e);break;case 3:case 4:var n=qt;qt=Ul(e.stateNode.containerInfo),Cs(e),qt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ha,Ha=16777216,Cs(e),Ha=n):Cs(e));break;default:Cs(e)}}function M_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ba(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ge=l,x_(l,e)}M_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)I_(e),e=e.sibling}function I_(e){switch(e.tag){case 0:case 11:case 15:Ba(e),e.flags&2048&&Gn(9,e,e.return);break;case 3:Ba(e);break;case 12:Ba(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Tl(e)):Ba(e);break;default:Ba(e)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ge=l,x_(l,e)}M_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Gn(8,n,n.return),Tl(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Tl(n));break;default:Tl(n)}e=e.sibling}}function x_(e,n){for(;Ge!==null;){var s=Ge;switch(s.tag){case 0:case 11:case 15:Gn(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Sa(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ge=l;else e:for(s=e;Ge!==null;){l=Ge;var u=l.sibling,f=l.return;if(C_(l),l===s){Ge=null;break e}if(u!==null){u.return=f,Ge=u;break e}Ge=f}}}var XE={getCacheForType:function(e){var n=st(He),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},KE=typeof WeakMap=="function"?WeakMap:Map,_e=0,Ce=null,se=null,oe=0,me=0,Nt=null,Qn=!1,As=!1,Ec=!1,yn=0,Ie=0,Fn=0,Li=0,Sc=0,Ht=0,ws=0,Pa=null,_t=null,bc=!1,Tc=0,Cl=1/0,Al=null,Xn=null,We=0,Kn=null,Rs=null,Ns=0,Cc=0,Ac=null,k_=null,qa=0,wc=null;function Ot(){if((_e&2)!==0&&oe!==0)return oe&-oe;if(D.T!==null){var e=_s;return e!==0?e:xc()}return Zh()}function U_(){Ht===0&&(Ht=(oe&536870912)===0||de?Qh():536870912);var e=zt.current;return e!==null&&(e.flags|=32),Ht}function Dt(e,n,s){(e===Ce&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Os(e,0),Zn(e,oe,Ht,!1)),aa(e,s),((_e&2)===0||e!==Ce)&&(e===Ce&&((_e&2)===0&&(Li|=s),Ie===4&&Zn(e,oe,Ht,!1)),tn(e))}function L_(e,n,s){if((_e&6)!==0)throw Error(r(327));var l=!s&&(n&124)===0&&(n&e.expiredLanes)===0||sa(e,n),u=l?JE(e,n):Oc(e,n,!0),f=l;do{if(u===0){As&&!l&&Zn(e,n,0,!1);break}else{if(s=e.current.alternate,f&&!ZE(s)){u=Oc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var g=e;u=Pa;var v=g.current.memoizedState.isDehydrated;if(v&&(Os(g,d).flags|=256),d=Oc(g,d,!1),d!==2){if(Ec&&!v){g.errorRecoveryDisabledLanes|=f,Li|=f,u=4;break e}f=_t,_t=u,f!==null&&(_t===null?_t=f:_t.push.apply(_t,f))}u=d}if(f=!1,u!==2)continue}}if(u===1){Os(e,0),Zn(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Zn(l,n,Ht,!Qn);break e;case 2:_t=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Tc+300-Zt(),10<u)){if(Zn(l,n,Ht,!Qn),Lr(l,0,!0)!==0)break e;l.timeoutHandle=fm(z_.bind(null,l,s,_t,Al,bc,n,Ht,Li,ws,Qn,f,2,-0,0),u);break e}z_(l,s,_t,Al,bc,n,Ht,Li,ws,Qn,f,0,-0,0)}}break}while(!0);tn(e)}function z_(e,n,s,l,u,f,d,g,v,w,O,I,R,N){if(e.timeoutHandle=-1,I=n.subtreeFlags,(I&8192||(I&16785408)===16785408)&&(Xa={stylesheets:null,count:0,unsuspend:MS},D_(n),I=xS(),I!==null)){e.cancelPendingCommit=I(j_.bind(null,e,n,f,s,l,u,d,g,v,O,1,R,N)),Zn(e,f,d,!w);return}j_(e,n,f,s,l,u,d,g,v)}function ZE(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],f=u.getSnapshot;u=u.value;try{if(!Ct(f(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n,s,l){n&=~Sc,n&=~Li,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-Tt(u),d=1<<f;l[f]=-1,u&=~d}s!==0&&Xh(e,s,n)}function wl(){return(_e&6)===0?(Va(0),!1):!0}function Rc(){if(se!==null){if(me===0)var e=se.return;else e=se,fn=Di=null,ju(e),Ss=null,Ia=0,e=se;for(;e!==null;)m_(e.alternate,e),e=e.return;se=null}}function Os(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,pS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Rc(),Ce=e,se=s=on(e.current,null),oe=n,me=0,Nt=null,Qn=!1,As=sa(e,n),Ec=!1,ws=Ht=Sc=Li=Fn=Ie=0,_t=Pa=null,bc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Tt(l),f=1<<u;n|=e[u],l&=~f}return yn=n,Xr(),s}function H_(e,n){ee=null,D.H=dl,n===Ta||n===il?(n=tp(),me=3):n===Jd?(n=tp(),me=4):me=n===n_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Nt=n,se===null&&(Ie=1,vl(e,xt(n,e.current)))}function B_(){var e=D.H;return D.H=dl,e===null?dl:e}function P_(){var e=D.A;return D.A=XE,e}function Nc(){Ie=4,Qn||(oe&4194048)!==oe&&zt.current!==null||(As=!0),(Fn&134217727)===0&&(Li&134217727)===0||Ce===null||Zn(Ce,oe,Ht,!1)}function Oc(e,n,s){var l=_e;_e|=2;var u=B_(),f=P_();(Ce!==e||oe!==n)&&(Al=null,Os(e,n)),n=!1;var d=Ie;e:do try{if(me!==0&&se!==null){var g=se,v=Nt;switch(me){case 8:Rc(),d=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(n=!0);var w=me;if(me=0,Nt=null,Ds(e,g,v,w),s&&As){d=0;break e}break;default:w=me,me=0,Nt=null,Ds(e,g,v,w)}}WE(),d=Ie;break}catch(O){H_(e,O)}while(!0);return n&&e.shellSuspendCounter++,fn=Di=null,_e=l,D.H=u,D.A=f,se===null&&(Ce=null,oe=0,Xr()),d}function WE(){for(;se!==null;)q_(se)}function JE(e,n){var s=_e;_e|=2;var l=B_(),u=P_();Ce!==e||oe!==n?(Al=null,Cl=Zt()+500,Os(e,n)):As=sa(e,n);e:do try{if(me!==0&&se!==null){n=se;var f=Nt;t:switch(me){case 1:me=0,Nt=null,Ds(e,n,f,1);break;case 2:case 9:if($d(f)){me=0,Nt=null,V_(n);break}n=function(){me!==2&&me!==9||Ce!==e||(me=7),tn(e)},f.then(n,n);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:$d(f)?(me=0,Nt=null,V_(n)):(me=0,Nt=null,Ds(e,n,f,7));break;case 5:var d=null;switch(se.tag){case 26:d=se.memoizedState;case 5:case 27:var g=se;if(!d||Tm(d)){me=0,Nt=null;var v=g.sibling;if(v!==null)se=v;else{var w=g.return;w!==null?(se=w,Rl(w)):se=null}break t}}me=0,Nt=null,Ds(e,n,f,5);break;case 6:me=0,Nt=null,Ds(e,n,f,6);break;case 8:Rc(),Ie=6;break e;default:throw Error(r(462))}}$E();break}catch(O){H_(e,O)}while(!0);return fn=Di=null,D.H=l,D.A=u,_e=s,se!==null?0:(Ce=null,oe=0,Xr(),Ie)}function $E(){for(;se!==null&&!S0();)q_(se)}function q_(e){var n=p_(e.alternate,e,yn);e.memoizedProps=e.pendingProps,n===null?Rl(e):se=n}function V_(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=o_(s,n,n.pendingProps,n.type,void 0,oe);break;case 11:n=o_(s,n,n.pendingProps,n.type.render,n.ref,oe);break;case 5:ju(n);default:m_(s,n),n=se=Gd(n,yn),n=p_(s,n,yn)}e.memoizedProps=e.pendingProps,n===null?Rl(e):se=n}function Ds(e,n,s,l){fn=Di=null,ju(n),Ss=null,Ia=0;var u=n.return;try{if(VE(e,u,n,s,oe)){Ie=1,vl(e,xt(s,e.current)),se=null;return}}catch(f){if(u!==null)throw se=u,f;Ie=1,vl(e,xt(s,e.current)),se=null;return}n.flags&32768?(de||l===1?e=!0:As||(oe&536870912)!==0?e=!1:(Qn=e=!0,(l===2||l===9||l===3||l===6)&&(l=zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),G_(n,e)):Rl(n)}function Rl(e){var n=e;do{if((n.flags&32768)!==0){G_(n,Qn);return}e=n.return;var s=jE(n.alternate,n,yn);if(s!==null){se=s;return}if(n=n.sibling,n!==null){se=n;return}se=n=e}while(n!==null);Ie===0&&(Ie=5)}function G_(e,n){do{var s=YE(e.alternate,e);if(s!==null){s.flags&=32767,se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){se=e;return}se=e=s}while(e!==null);Ie=6,se=null}function j_(e,n,s,l,u,f,d,g,v){e.cancelPendingCommit=null;do Nl();while(We!==0);if((_e&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=yu,M0(e,s,f,d,g,v),e===Ce&&(se=Ce=null,oe=0),Rs=n,Kn=e,Ns=s,Cc=f,Ac=u,k_=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iS(xr,function(){return K_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,u=H.p,H.p=2,d=_e,_e|=4;try{QE(e,n,s)}finally{_e=d,H.p=u,D.T=l}}We=1,Y_(),Q_(),F_()}}function Y_(){if(We===1){We=0;var e=Kn,n=Rs,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=D.T,D.T=null;var l=H.p;H.p=2;var u=_e;_e|=4;try{R_(n,e);var f=qc,d=xd(e.containerInfo),g=f.focusedElem,v=f.selectionRange;if(d!==g&&g&&g.ownerDocument&&Id(g.ownerDocument.documentElement,g)){if(v!==null&&pu(g)){var w=v.start,O=v.end;if(O===void 0&&(O=w),"selectionStart"in g)g.selectionStart=w,g.selectionEnd=Math.min(O,g.value.length);else{var I=g.ownerDocument||document,R=I&&I.defaultView||window;if(R.getSelection){var N=R.getSelection(),X=g.textContent.length,Y=Math.min(v.start,X),ye=v.end===void 0?Y:Math.min(v.end,X);!N.extend&&Y>ye&&(d=ye,ye=Y,Y=d);var C=Md(g,Y),T=Md(g,ye);if(C&&T&&(N.rangeCount!==1||N.anchorNode!==C.node||N.anchorOffset!==C.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var A=I.createRange();A.setStart(C.node,C.offset),N.removeAllRanges(),Y>ye?(N.addRange(A),N.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),N.addRange(A))}}}}for(I=[],N=g;N=N.parentNode;)N.nodeType===1&&I.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<I.length;g++){var M=I[g];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Pl=!!Pc,qc=Pc=null}finally{_e=u,H.p=l,D.T=s}}e.current=n,We=2}}function Q_(){if(We===2){We=0;var e=Kn,n=Rs,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=D.T,D.T=null;var l=H.p;H.p=2;var u=_e;_e|=4;try{T_(e,n.alternate,n)}finally{_e=u,H.p=l,D.T=s}}We=3}}function F_(){if(We===4||We===3){We=0,b0();var e=Kn,n=Rs,s=Ns,l=k_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?We=5:(We=0,Rs=Kn=null,X_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Xn=null),Fo(s),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(ia,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=D.T,u=H.p,H.p=2,D.T=null;try{for(var f=e.onRecoverableError,d=0;d<l.length;d++){var g=l[d];f(g.value,{componentStack:g.stack})}}finally{D.T=n,H.p=u}}(Ns&3)!==0&&Nl(),tn(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===wc?qa++:(qa=0,wc=e):qa=0,Va(0)}}function X_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Sa(n)))}function Nl(e){return Y_(),Q_(),F_(),K_()}function K_(){if(We!==5)return!1;var e=Kn,n=Cc;Cc=0;var s=Fo(Ns),l=D.T,u=H.p;try{H.p=32>s?32:s,D.T=null,s=Ac,Ac=null;var f=Kn,d=Ns;if(We=0,Rs=Kn=null,Ns=0,(_e&6)!==0)throw Error(r(331));var g=_e;if(_e|=4,I_(f.current),O_(f,f.current,d,s),_e=g,Va(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(ia,f)}catch{}return!0}finally{H.p=u,D.T=l,X_(e,n)}}function Z_(e,n,s){n=xt(s,n),n=sc(e.stateNode,n,2),e=Bn(e,n,2),e!==null&&(aa(e,2),tn(e))}function be(e,n,s){if(e.tag===3)Z_(e,e,s);else for(;n!==null;){if(n.tag===3){Z_(n,e,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xn===null||!Xn.has(l))){e=xt(s,e),s=e_(2),l=Bn(n,s,2),l!==null&&(t_(s,l,n,e),aa(l,2),tn(l));break}}n=n.return}}function Dc(e,n,s){var l=e.pingCache;if(l===null){l=e.pingCache=new KE;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(s)||(Ec=!0,u.add(s),e=eS.bind(null,e,n,s),n.then(e,e))}function eS(e,n,s){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ce===e&&(oe&s)===s&&(Ie===4||Ie===3&&(oe&62914560)===oe&&300>Zt()-Tc?(_e&2)===0&&Os(e,0):Sc|=s,ws===oe&&(ws=0)),tn(e)}function W_(e,n){n===0&&(n=Fh()),e=fs(e,n),e!==null&&(aa(e,n),tn(e))}function tS(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),W_(e,s)}function nS(e,n){var s=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),W_(e,s)}function iS(e,n){return Go(e,n)}var Ol=null,Ms=null,Mc=!1,Dl=!1,Ic=!1,zi=0;function tn(e){e!==Ms&&e.next===null&&(Ms===null?Ol=Ms=e:Ms=Ms.next=e),Dl=!0,Mc||(Mc=!0,aS())}function Va(e,n){if(!Ic&&Dl){Ic=!0;do for(var s=!1,l=Ol;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var d=l.suspendedLanes,g=l.pingedLanes;f=(1<<31-Tt(42|e)+1)-1,f&=u&~(d&~g),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,tm(l,f))}else f=oe,f=Lr(l,l===Ce?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||sa(l,f)||(s=!0,tm(l,f));l=l.next}while(s);Ic=!1}}function sS(){J_()}function J_(){Dl=Mc=!1;var e=0;zi!==0&&(dS()&&(e=zi),zi=0);for(var n=Zt(),s=null,l=Ol;l!==null;){var u=l.next,f=$_(l,n);f===0?(l.next=null,s===null?Ol=u:s.next=u,u===null&&(Ms=s)):(s=l,(e!==0||(f&3)!==0)&&(Dl=!0)),l=u}Va(e)}function $_(e,n){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var d=31-Tt(f),g=1<<d,v=u[d];v===-1?((g&s)===0||(g&l)!==0)&&(u[d]=D0(g,n)):v<=n&&(e.expiredLanes|=g),f&=~g}if(n=Ce,s=oe,s=Lr(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===n&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&jo(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||sa(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(l!==null&&jo(l),Fo(s)){case 2:case 8:s=jh;break;case 32:s=xr;break;case 268435456:s=Yh;break;default:s=xr}return l=em.bind(null,e),s=Go(s,l),e.callbackPriority=n,e.callbackNode=s,n}return l!==null&&l!==null&&jo(l),e.callbackPriority=2,e.callbackNode=null,2}function em(e,n){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Nl()&&e.callbackNode!==s)return null;var l=oe;return l=Lr(e,e===Ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(L_(e,l,n),$_(e,Zt()),e.callbackNode!=null&&e.callbackNode===s?em.bind(null,e):null)}function tm(e,n){if(Nl())return null;L_(e,n,!0)}function aS(){_S(function(){(_e&6)!==0?Go(Gh,sS):J_()})}function xc(){return zi===0&&(zi=Qh()),zi}function nm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qr(""+e)}function im(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function rS(e,n,s,l,u){if(n==="submit"&&s&&s.stateNode===u){var f=nm((u[ft]||null).action),d=l.submitter;d&&(n=(n=d[ft]||null)?nm(n.formAction):d.getAttribute("formAction"),n!==null&&(f=n,d=null));var g=new Yr("action","action",null,l,u);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(zi!==0){var v=d?im(u,d):new FormData(u);$u(s,{pending:!0,data:v,method:u.method,action:f},null,v)}}else typeof f=="function"&&(g.preventDefault(),v=d?im(u,d):new FormData(u),$u(s,{pending:!0,data:v,method:u.method,action:f},f,v))},currentTarget:u}]})}}for(var kc=0;kc<vu.length;kc++){var Uc=vu[kc],lS=Uc.toLowerCase(),oS=Uc[0].toUpperCase()+Uc.slice(1);Pt(lS,"on"+oS)}Pt(Ld,"onAnimationEnd"),Pt(zd,"onAnimationIteration"),Pt(Hd,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(AE,"onTransitionRun"),Pt(wE,"onTransitionStart"),Pt(RE,"onTransitionCancel"),Pt(Bd,"onTransitionEnd"),ts("onMouseEnter",["mouseout","mouseover"]),ts("onMouseLeave",["mouseout","mouseover"]),ts("onPointerEnter",["pointerout","pointerover"]),ts("onPointerLeave",["pointerout","pointerover"]),Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Si("onBeforeInput",["compositionend","keypress","textInput","paste"]),Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ga));function sm(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var d=l.length-1;0<=d;d--){var g=l[d],v=g.instance,w=g.currentTarget;if(g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=w;try{f(u)}catch(O){gl(O)}u.currentTarget=null,f=v}else for(d=0;d<l.length;d++){if(g=l[d],v=g.instance,w=g.currentTarget,g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=w;try{f(u)}catch(O){gl(O)}u.currentTarget=null,f=v}}}}function ae(e,n){var s=n[Xo];s===void 0&&(s=n[Xo]=new Set);var l=e+"__bubble";s.has(l)||(am(n,e,2,!1),s.add(l))}function Lc(e,n,s){var l=0;n&&(l|=4),am(s,e,l,n)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function zc(e){if(!e[Ml]){e[Ml]=!0,Jh.forEach(function(s){s!=="selectionchange"&&(uS.has(s)||Lc(s,!1,e),Lc(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ml]||(n[Ml]=!0,Lc("selectionchange",!1,n))}}function am(e,n,s,l){switch(Om(n)){case 2:var u=LS;break;case 8:u=zS;break;default:u=Wc}s=u.bind(null,n,s,e),u=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,s,{capture:!0,passive:u}):e.addEventListener(n,s,!0):u!==void 0?e.addEventListener(n,s,{passive:u}):e.addEventListener(n,s,!1)}function Hc(e,n,s,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var g=l.stateNode.containerInfo;if(g===u)break;if(d===4)for(d=l.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===u)return;d=d.return}for(;g!==null;){if(d=Ji(g),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){l=f=d;continue e}g=g.parentNode}}l=l.return}hd(function(){var w=f,O=iu(s),I=[];e:{var R=Pd.get(e);if(R!==void 0){var N=Yr,X=e;switch(e){case"keypress":if(Gr(s)===0)break e;case"keydown":case"keyup":N=iE;break;case"focusin":X="focus",N=uu;break;case"focusout":X="blur",N=uu;break;case"beforeblur":case"afterblur":N=uu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=rE;break;case Ld:case zd:case Hd:N=X0;break;case Bd:N=oE;break;case"scroll":case"scrollend":N=G0;break;case"wheel":N=cE;break;case"copy":case"cut":case"paste":N=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=gd;break;case"toggle":case"beforetoggle":N=hE}var Y=(n&4)!==0,ye=!Y&&(e==="scroll"||e==="scrollend"),C=Y?R!==null?R+"Capture":null:R;Y=[];for(var T=w,A;T!==null;){var M=T;if(A=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||A===null||C===null||(M=oa(T,C),M!=null&&Y.push(ja(T,M,A))),ye)break;T=T.return}0<Y.length&&(R=new N(R,X,null,s,O),I.push({event:R,listeners:Y}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&s!==nu&&(X=s.relatedTarget||s.fromElement)&&(Ji(X)||X[Wi]))break e;if((N||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,N?(X=s.relatedTarget||s.toElement,N=w,X=X?Ji(X):null,X!==null&&(ye=c(X),Y=X.tag,X!==ye||Y!==5&&Y!==27&&Y!==6)&&(X=null)):(N=null,X=w),N!==X)){if(Y=_d,M="onMouseLeave",C="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(Y=gd,M="onPointerLeave",C="onPointerEnter",T="pointer"),ye=N==null?R:la(N),A=X==null?R:la(X),R=new Y(M,T+"leave",N,s,O),R.target=ye,R.relatedTarget=A,M=null,Ji(O)===w&&(Y=new Y(C,T+"enter",X,s,O),Y.target=A,Y.relatedTarget=ye,M=Y),ye=M,N&&X)t:{for(Y=N,C=X,T=0,A=Y;A;A=Is(A))T++;for(A=0,M=C;M;M=Is(M))A++;for(;0<T-A;)Y=Is(Y),T--;for(;0<A-T;)C=Is(C),A--;for(;T--;){if(Y===C||C!==null&&Y===C.alternate)break t;Y=Is(Y),C=Is(C)}Y=null}else Y=null;N!==null&&rm(I,R,N,Y,!1),X!==null&&ye!==null&&rm(I,ye,X,Y,!0)}}e:{if(R=w?la(w):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var q=Ad;else if(Td(R))if(wd)q=bE;else{q=EE;var te=yE}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?w&&tu(w.elementType)&&(q=Ad):q=SE;if(q&&(q=q(e,w))){Cd(I,q,s,O);break e}te&&te(e,R,w),e==="focusout"&&w&&R.type==="number"&&w.memoizedProps.value!=null&&eu(R,"number",R.value)}switch(te=w?la(w):window,e){case"focusin":(Td(te)||te.contentEditable==="true")&&(os=te,_u=w,ma=null);break;case"focusout":ma=_u=os=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,kd(I,s,O);break;case"selectionchange":if(CE)break;case"keydown":case"keyup":kd(I,s,O)}var G;if(fu)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else ls?Sd(e,s)&&(Q="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Q="onCompositionStart");Q&&(vd&&s.locale!=="ko"&&(ls||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&ls&&(G=dd()):(Un=O,ru="value"in Un?Un.value:Un.textContent,ls=!0)),te=Il(w,Q),0<te.length&&(Q=new md(Q,e,null,s,O),I.push({event:Q,listeners:te}),G?Q.data=G:(G=bd(s),G!==null&&(Q.data=G)))),(G=pE?_E(e,s):mE(e,s))&&(Q=Il(w,"onBeforeInput"),0<Q.length&&(te=new md("onBeforeInput","beforeinput",null,s,O),I.push({event:te,listeners:Q}),te.data=G)),rS(I,e,w,s,O)}sm(I,n)})}function ja(e,n,s){return{instance:e,listener:n,currentTarget:s}}function Il(e,n){for(var s=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=oa(e,s),u!=null&&l.unshift(ja(e,u,f)),u=oa(e,n),u!=null&&l.push(ja(e,u,f))),e.tag===3)return l;e=e.return}return[]}function Is(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rm(e,n,s,l,u){for(var f=n._reactName,d=[];s!==null&&s!==l;){var g=s,v=g.alternate,w=g.stateNode;if(g=g.tag,v!==null&&v===l)break;g!==5&&g!==26&&g!==27||w===null||(v=w,u?(w=oa(s,f),w!=null&&d.unshift(ja(s,w,v))):u||(w=oa(s,f),w!=null&&d.push(ja(s,w,v)))),s=s.return}d.length!==0&&e.push({event:n,listeners:d})}var cS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function lm(e){return(typeof e=="string"?e:""+e).replace(cS,`
`).replace(fS,"")}function om(e,n){return n=lm(n),lm(e)===n}function xl(){}function ve(e,n,s,l,u,f){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ss(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ss(e,""+l);break;case"className":Hr(e,"class",l);break;case"tabIndex":Hr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Hr(e,s,l);break;case"style":cd(e,l,f);break;case"data":if(n!=="object"){Hr(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=qr(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(n!=="input"&&ve(e,n,"name",u.name,u,null),ve(e,n,"formEncType",u.formEncType,u,null),ve(e,n,"formMethod",u.formMethod,u,null),ve(e,n,"formTarget",u.formTarget,u,null)):(ve(e,n,"encType",u.encType,u,null),ve(e,n,"method",u.method,u,null),ve(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=qr(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=xl);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=qr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":ae("beforetoggle",e),ae("toggle",e),zr(e,"popover",l);break;case"xlinkActuate":rn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":rn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":rn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":rn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":rn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":rn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":rn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":rn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":rn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=q0.get(s)||s,zr(e,s,l))}}function Bc(e,n,s,l,u,f){switch(s){case"style":cd(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?ss(e,l):(typeof l=="number"||typeof l=="bigint")&&ss(e,""+l);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"onClick":l!=null&&(e.onclick=xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$h.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),f=e[ft]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,l,u);break e}s in e?e[s]=l:l===!0?e.setAttribute(s,""):zr(e,s,l)}}}function Je(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var l=!1,u=!1,f;for(f in s)if(s.hasOwnProperty(f)){var d=s[f];if(d!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ve(e,n,f,d,s,null)}}u&&ve(e,n,"srcSet",s.srcSet,s,null),l&&ve(e,n,"src",s.src,s,null);return;case"input":ae("invalid",e);var g=f=d=u=null,v=null,w=null;for(l in s)if(s.hasOwnProperty(l)){var O=s[l];if(O!=null)switch(l){case"name":u=O;break;case"type":d=O;break;case"checked":v=O;break;case"defaultChecked":w=O;break;case"value":f=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,n));break;default:ve(e,n,l,O,s,null)}}rd(e,f,g,v,w,d,u,!1),Br(e);return;case"select":ae("invalid",e),l=d=f=null;for(u in s)if(s.hasOwnProperty(u)&&(g=s[u],g!=null))switch(u){case"value":f=g;break;case"defaultValue":d=g;break;case"multiple":l=g;default:ve(e,n,u,g,s,null)}n=f,s=d,e.multiple=!!l,n!=null?is(e,!!l,n,!1):s!=null&&is(e,!!l,s,!0);return;case"textarea":ae("invalid",e),f=u=l=null;for(d in s)if(s.hasOwnProperty(d)&&(g=s[d],g!=null))switch(d){case"value":l=g;break;case"defaultValue":u=g;break;case"children":f=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(r(91));break;default:ve(e,n,d,g,s,null)}od(e,l,u,f),Br(e);return;case"option":for(v in s)if(s.hasOwnProperty(v)&&(l=s[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ve(e,n,v,l,s,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(l=0;l<Ga.length;l++)ae(Ga[l],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in s)if(s.hasOwnProperty(w)&&(l=s[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ve(e,n,w,l,s,null)}return;default:if(tu(n)){for(O in s)s.hasOwnProperty(O)&&(l=s[O],l!==void 0&&Bc(e,n,O,l,s,void 0));return}}for(g in s)s.hasOwnProperty(g)&&(l=s[g],l!=null&&ve(e,n,g,l,s,null))}function hS(e,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,d=null,g=null,v=null,w=null,O=null;for(N in s){var I=s[N];if(s.hasOwnProperty(N)&&I!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=I;default:l.hasOwnProperty(N)||ve(e,n,N,null,l,I)}}for(var R in l){var N=l[R];if(I=s[R],l.hasOwnProperty(R)&&(N!=null||I!=null))switch(R){case"type":f=N;break;case"name":u=N;break;case"checked":w=N;break;case"defaultChecked":O=N;break;case"value":d=N;break;case"defaultValue":g=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,n));break;default:N!==I&&ve(e,n,R,N,l,I)}}$o(e,d,g,v,w,O,f,u);return;case"select":N=d=g=R=null;for(f in s)if(v=s[f],s.hasOwnProperty(f)&&v!=null)switch(f){case"value":break;case"multiple":N=v;default:l.hasOwnProperty(f)||ve(e,n,f,null,l,v)}for(u in l)if(f=l[u],v=s[u],l.hasOwnProperty(u)&&(f!=null||v!=null))switch(u){case"value":R=f;break;case"defaultValue":g=f;break;case"multiple":d=f;default:f!==v&&ve(e,n,u,f,l,v)}n=g,s=d,l=N,R!=null?is(e,!!s,R,!1):!!l!=!!s&&(n!=null?is(e,!!s,n,!0):is(e,!!s,s?[]:"",!1));return;case"textarea":N=R=null;for(g in s)if(u=s[g],s.hasOwnProperty(g)&&u!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ve(e,n,g,null,l,u)}for(d in l)if(u=l[d],f=s[d],l.hasOwnProperty(d)&&(u!=null||f!=null))switch(d){case"value":R=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&ve(e,n,d,u,l,f)}ld(e,R,N);return;case"option":for(var X in s)if(R=s[X],s.hasOwnProperty(X)&&R!=null&&!l.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:ve(e,n,X,null,l,R)}for(v in l)if(R=l[v],N=s[v],l.hasOwnProperty(v)&&R!==N&&(R!=null||N!=null))switch(v){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:ve(e,n,v,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in s)R=s[Y],s.hasOwnProperty(Y)&&R!=null&&!l.hasOwnProperty(Y)&&ve(e,n,Y,null,l,R);for(w in l)if(R=l[w],N=s[w],l.hasOwnProperty(w)&&R!==N&&(R!=null||N!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,n));break;default:ve(e,n,w,R,l,N)}return;default:if(tu(n)){for(var ye in s)R=s[ye],s.hasOwnProperty(ye)&&R!==void 0&&!l.hasOwnProperty(ye)&&Bc(e,n,ye,void 0,l,R);for(O in l)R=l[O],N=s[O],!l.hasOwnProperty(O)||R===N||R===void 0&&N===void 0||Bc(e,n,O,R,l,N);return}}for(var C in s)R=s[C],s.hasOwnProperty(C)&&R!=null&&!l.hasOwnProperty(C)&&ve(e,n,C,null,l,R);for(I in l)R=l[I],N=s[I],!l.hasOwnProperty(I)||R===N||R==null&&N==null||ve(e,n,I,R,l,N)}var Pc=null,qc=null;function kl(e){return e.nodeType===9?e:e.ownerDocument}function um(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gc=null;function dS(){var e=window.event;return e&&e.type==="popstate"?e===Gc?!1:(Gc=e,!0):(Gc=null,!1)}var fm=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(e){return hm.resolve(null).then(e).catch(mS)}:fm;function mS(e){setTimeout(function(){throw e})}function Wn(e){return e==="head"}function dm(e,n){var s=n,l=0,u=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<l&&8>l){s=l;var d=e.ownerDocument;if(s&1&&Ya(d.documentElement),s&2&&Ya(d.body),s&4)for(s=d.head,Ya(s),d=s.firstChild;d;){var g=d.nextSibling,v=d.nodeName;d[ra]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=g}}if(u===0){e.removeChild(f),$a(n);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:l=s.charCodeAt(0)-48;else l=0;s=f}while(s);$a(n)}function jc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":jc(s),Ko(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function gS(e,n,s,l){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ra])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function vS(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Vt(e.nextSibling),e===null))return null;return e}function Yc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yS(e,n){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Vt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Qc=null;function pm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function _m(e,n,s){switch(n=kl(s),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ya(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ko(e)}var Bt=new Map,mm=new Set;function Ul(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var En=H.d;H.d={f:ES,r:SS,D:bS,C:TS,L:CS,m:AS,X:RS,S:wS,M:NS};function ES(){var e=En.f(),n=wl();return e||n}function SS(e){var n=$i(e);n!==null&&n.tag===5&&n.type==="form"?Lp(n):En.r(e)}var xs=typeof document>"u"?null:document;function gm(e,n,s){var l=xs;if(l&&typeof n=="string"&&n){var u=It(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),mm.has(u)||(mm.add(u),e={rel:e,crossOrigin:s,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),Je(n,"link",e),qe(n),l.head.appendChild(n)))}}function bS(e){En.D(e),gm("dns-prefetch",e,null)}function TS(e,n){En.C(e,n),gm("preconnect",e,n)}function CS(e,n,s){En.L(e,n,s);var l=xs;if(l&&e&&n){var u='link[rel="preload"][as="'+It(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+It(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+It(s.imageSizes)+'"]')):u+='[href="'+It(e)+'"]';var f=u;switch(n){case"style":f=ks(e);break;case"script":f=Us(e)}Bt.has(f)||(e=y({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Bt.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(Qa(f))||n==="script"&&l.querySelector(Fa(f))||(n=l.createElement("link"),Je(n,"link",e),qe(n),l.head.appendChild(n)))}}function AS(e,n){En.m(e,n);var s=xs;if(s&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Us(e)}if(!Bt.has(f)&&(e=y({rel:"modulepreload",href:e},n),Bt.set(f,e),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Fa(f)))return}l=s.createElement("link"),Je(l,"link",e),qe(l),s.head.appendChild(l)}}}function wS(e,n,s){En.S(e,n,s);var l=xs;if(l&&e){var u=es(l).hoistableStyles,f=ks(e);n=n||"default";var d=u.get(f);if(!d){var g={loading:0,preload:null};if(d=l.querySelector(Qa(f)))g.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Bt.get(f))&&Fc(e,s);var v=d=l.createElement("link");qe(v),Je(v,"link",e),v._p=new Promise(function(w,O){v.onload=w,v.onerror=O}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ll(d,n,l)}d={type:"stylesheet",instance:d,count:1,state:g},u.set(f,d)}}}function RS(e,n){En.X(e,n);var s=xs;if(s&&e){var l=es(s).hoistableScripts,u=Us(e),f=l.get(u);f||(f=s.querySelector(Fa(u)),f||(e=y({src:e,async:!0},n),(n=Bt.get(u))&&Xc(e,n),f=s.createElement("script"),qe(f),Je(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function NS(e,n){En.M(e,n);var s=xs;if(s&&e){var l=es(s).hoistableScripts,u=Us(e),f=l.get(u);f||(f=s.querySelector(Fa(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=Bt.get(u))&&Xc(e,n),f=s.createElement("script"),qe(f),Je(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function vm(e,n,s,l){var u=(u=W.current)?Ul(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=ks(s.href),s=es(u).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=ks(s.href);var f=es(u).hoistableStyles,d=f.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,d),(f=u.querySelector(Qa(e)))&&!f._p&&(d.instance=f,d.state.loading=5),Bt.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bt.set(e,s),f||OS(u,e,s,d.state))),n&&l===null)throw Error(r(528,""));return d}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Us(s),s=es(u).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ks(e){return'href="'+It(e)+'"'}function Qa(e){return'link[rel="stylesheet"]['+e+"]"}function ym(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function OS(e,n,s,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Je(n,"link",s),qe(n),e.head.appendChild(n))}function Us(e){return'[src="'+It(e)+'"]'}function Fa(e){return"script[async]"+e}function Em(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+It(s.href)+'"]');if(l)return n.instance=l,qe(l),l;var u=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Je(l,"style",u),Ll(l,s.precedence,e),n.instance=l;case"stylesheet":u=ks(s.href);var f=e.querySelector(Qa(u));if(f)return n.state.loading|=4,n.instance=f,qe(f),f;l=ym(s),(u=Bt.get(u))&&Fc(l,u),f=(e.ownerDocument||e).createElement("link"),qe(f);var d=f;return d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),Je(f,"link",l),n.state.loading|=4,Ll(f,s.precedence,e),n.instance=f;case"script":return f=Us(s.src),(u=e.querySelector(Fa(f)))?(n.instance=u,qe(u),u):(l=s,(u=Bt.get(f))&&(l=y({},s),Xc(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),qe(u),Je(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Ll(l,s.precedence,e));return n.instance}function Ll(e,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,d=0;d<l.length;d++){var g=l[d];if(g.dataset.precedence===n)f=g;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Fc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var zl=null;function Sm(e,n,s){if(zl===null){var l=new Map,u=zl=new Map;u.set(s,l)}else u=zl,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var f=s[u];if(!(f[ra]||f[it]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var d=f.getAttribute(n)||"";d=e+d;var g=l.get(d);g?g.push(f):l.set(d,[f])}}return l}function bm(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function DS(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Xa=null;function MS(){}function IS(e,n,s){if(Xa===null)throw Error(r(475));var l=Xa;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ks(s.href),f=e.querySelector(Qa(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Hl.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,qe(f);return}f=e.ownerDocument||e,s=ym(s),(u=Bt.get(u))&&Fc(s,u),f=f.createElement("link"),qe(f);var d=f;d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),Je(f,"link",s),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Hl.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function xS(){if(Xa===null)throw Error(r(475));var e=Xa;return e.stylesheets&&e.count===0&&Kc(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&Kc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Hl(){if(this.count--,this.count===0){if(this.stylesheets)Kc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bl=null;function Kc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bl=new Map,n.forEach(kS,e),Bl=null,Hl.call(e))}function kS(e,n){if(!(n.state.loading&4)){var s=Bl.get(e);if(s)var l=s.get(null);else{s=new Map,Bl.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var d=u[f];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(s.set(d.dataset.precedence,d),l=d)}l&&s.set(null,l)}u=n.instance,d=u.getAttribute("data-precedence"),f=s.get(d)||l,f===l&&s.set(null,u),s.set(d,u),this.count++,l=Hl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ka={$$typeof:ce,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function US(e,n,s,l,u,f,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.hiddenUpdates=Yo(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Cm(e,n,s,l,u,f,d,g,v,w,O,I){return e=new US(e,n,s,d,g,v,w,I),n=1,f===!0&&(n|=24),f=At(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:s,cache:n},ku(f),e}function Am(e){return e?(e=hs,e):hs}function wm(e,n,s,l,u,f){u=Am(u),l.context===null?l.context=u:l.pendingContext=u,l=Hn(n),l.payload={element:s},f=f===void 0?null:f,f!==null&&(l.callback=f),s=Bn(e,l,n),s!==null&&(Dt(s,e,n),Aa(s,e,n))}function Rm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Zc(e,n){Rm(e,n),(e=e.alternate)&&Rm(e,n)}function Nm(e){if(e.tag===13){var n=fs(e,67108864);n!==null&&Dt(n,e,67108864),Zc(e,67108864)}}var Pl=!0;function LS(e,n,s,l){var u=D.T;D.T=null;var f=H.p;try{H.p=2,Wc(e,n,s,l)}finally{H.p=f,D.T=u}}function zS(e,n,s,l){var u=D.T;D.T=null;var f=H.p;try{H.p=8,Wc(e,n,s,l)}finally{H.p=f,D.T=u}}function Wc(e,n,s,l){if(Pl){var u=Jc(l);if(u===null)Hc(e,n,l,ql,s),Dm(e,l);else if(BS(u,e,n,s,l))l.stopPropagation();else if(Dm(e,l),n&4&&-1<HS.indexOf(e)){for(;u!==null;){var f=$i(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var d=Ei(f.pendingLanes);if(d!==0){var g=f;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var v=1<<31-Tt(d);g.entanglements[1]|=v,d&=~v}tn(f),(_e&6)===0&&(Cl=Zt()+500,Va(0))}}break;case 13:g=fs(f,2),g!==null&&Dt(g,f,2),wl(),Zc(f,2)}if(f=Jc(l),f===null&&Hc(e,n,l,ql,s),f===u)break;u=f}u!==null&&l.stopPropagation()}else Hc(e,n,l,null,s)}}function Jc(e){return e=iu(e),$c(e)}var ql=null;function $c(e){if(ql=null,e=Ji(e),e!==null){var n=c(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=h(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ql=e,null}function Om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(T0()){case Gh:return 2;case jh:return 8;case xr:case C0:return 32;case Yh:return 268435456;default:return 32}default:return 32}}var ef=!1,Jn=null,$n=null,ei=null,Za=new Map,Wa=new Map,ti=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dm(e,n){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Za.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(n.pointerId)}}function Ja(e,n,s,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=$i(n),n!==null&&Nm(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function BS(e,n,s,l,u){switch(n){case"focusin":return Jn=Ja(Jn,e,n,s,l,u),!0;case"dragenter":return $n=Ja($n,e,n,s,l,u),!0;case"mouseover":return ei=Ja(ei,e,n,s,l,u),!0;case"pointerover":var f=u.pointerId;return Za.set(f,Ja(Za.get(f)||null,e,n,s,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Wa.set(f,Ja(Wa.get(f)||null,e,n,s,l,u)),!0}return!1}function Mm(e){var n=Ji(e.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=h(s),n!==null){e.blockedOn=n,I0(e.priority,function(){if(s.tag===13){var l=Ot();l=Qo(l);var u=fs(s,l);u!==null&&Dt(u,s,l),Zc(s,l)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Jc(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);nu=l,s.target.dispatchEvent(l),nu=null}else return n=$i(s),n!==null&&Nm(n),e.blockedOn=s,!1;n.shift()}return!0}function Im(e,n,s){Vl(e)&&s.delete(n)}function PS(){ef=!1,Jn!==null&&Vl(Jn)&&(Jn=null),$n!==null&&Vl($n)&&($n=null),ei!==null&&Vl(ei)&&(ei=null),Za.forEach(Im),Wa.forEach(Im)}function Gl(e,n){e.blockedOn===n&&(e.blockedOn=null,ef||(ef=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,PS)))}var jl=null;function xm(e){jl!==e&&(jl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){jl===e&&(jl=null);for(var n=0;n<e.length;n+=3){var s=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if($c(l||s)===null)continue;break}var f=$i(s);f!==null&&(e.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function $a(e){function n(v){return Gl(v,e)}Jn!==null&&Gl(Jn,e),$n!==null&&Gl($n,e),ei!==null&&Gl(ei,e),Za.forEach(n),Wa.forEach(n);for(var s=0;s<ti.length;s++){var l=ti[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ti.length&&(s=ti[0],s.blockedOn===null);)Mm(s),s.blockedOn===null&&ti.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],f=s[l+1],d=u[ft]||null;if(typeof f=="function")d||xm(s);else if(d){var g=null;if(f&&f.hasAttribute("formAction")){if(u=f,d=f[ft]||null)g=d.formAction;else if($c(u)!==null)continue}else g=d.action;typeof g=="function"?s[l+1]=g:(s.splice(l,3),l-=3),xm(s)}}}function tf(e){this._internalRoot=e}Yl.prototype.render=tf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Ot();wm(s,l,e,n,null,null)},Yl.prototype.unmount=tf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;wm(e.current,2,null,e,null,null),wl(),n[Wi]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zh();e={blockedOn:null,target:e,priority:n};for(var s=0;s<ti.length&&n!==0&&n<ti[s].priority;s++);ti.splice(s,0,e),s===0&&Mm(e)}};var km=t.version;if(km!=="19.1.0")throw Error(r(527,km,"19.1.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=_(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var qS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{ia=Ql.inject(qS),bt=Ql}catch{}}return tr.createRoot=function(e,n){if(!o(e))throw Error(r(299));var s=!1,l="",u=Zp,f=Wp,d=Jp,g=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(g=n.unstable_transitionCallbacks)),n=Cm(e,1,!1,null,null,s,l,u,f,d,g,null),e[Wi]=n.current,zc(e),new tf(n)},tr.hydrateRoot=function(e,n,s){if(!o(e))throw Error(r(299));var l=!1,u="",f=Zp,d=Wp,g=Jp,v=null,w=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(g=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(v=s.unstable_transitionCallbacks),s.formState!==void 0&&(w=s.formState)),n=Cm(e,1,!0,n,s??null,l,u,f,d,g,v,w),n.context=Am(null),s=n.current,l=Ot(),l=Qo(l),u=Hn(l),u.callback=null,Bn(s,u,l),s=l,n.current.lanes=s,aa(n,s),tn(n),e[Wi]=n.current,zc(e),new Yl(n)},tr.version="19.1.0",tr}var jm;function eb(){if(jm)return af.exports;jm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),af.exports=$S(),af.exports}var tb=eb();ov();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(a[r]=i[r])}return a},to.apply(this,arguments)}var Pi;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Pi||(Pi={}));const Ym="popstate";function nb(a){a===void 0&&(a={});function t(o,c){let{pathname:h="/",search:p="",hash:_=""}=Xf(o.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Tf("",{pathname:h,search:p,hash:_},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(o,c){let h=o.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let _=o.location.href,m=_.indexOf("#");p=m===-1?_:_.slice(0,m)}return p+"#"+(typeof c=="string"?c:cv(c))}function r(o,c){ib(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return ab(t,i,r,a)}function uv(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function ib(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sb(){return Math.random().toString(36).substr(2,8)}function Qm(a,t){return{usr:a.state,key:a.key,idx:t}}function Tf(a,t,i,r){return i===void 0&&(i=null),to({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof t=="string"?Xf(t):t,{state:i,key:t&&t.key||r||sb()})}function cv(a){let{pathname:t="/",search:i="",hash:r=""}=a;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xf(a){let t={};if(a){let i=a.indexOf("#");i>=0&&(t.hash=a.substr(i),a=a.substr(0,i));let r=a.indexOf("?");r>=0&&(t.search=a.substr(r),a=a.substr(0,r)),a&&(t.pathname=a)}return t}function ab(a,t,i,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:c=!1}=r,h=o.history,p=Pi.Pop,_=null,m=y();m==null&&(m=0,h.replaceState(to({},h.state,{idx:m}),""));function y(){return(h.state||{idx:null}).idx}function S(){p=Pi.Pop;let P=y(),ue=P==null?null:P-m;m=P,_&&_({action:p,location:V.location,delta:ue})}function E(P,ue){p=Pi.Push;let le=Tf(V.location,P,ue);i&&i(le,P),m=y()+1;let ce=Qm(le,m),Oe=V.createHref(le);try{h.pushState(ce,"",Oe)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;o.location.assign(Oe)}c&&_&&_({action:p,location:V.location,delta:1})}function k(P,ue){p=Pi.Replace;let le=Tf(V.location,P,ue);i&&i(le,P),m=y();let ce=Qm(le,m),Oe=V.createHref(le);h.replaceState(ce,"",Oe),c&&_&&_({action:p,location:V.location,delta:0})}function L(P){let ue=o.location.origin!=="null"?o.location.origin:o.location.href,le=typeof P=="string"?P:cv(P);return le=le.replace(/ $/,"%20"),uv(ue,"No window.location.(origin|href) available to create URL for href: "+le),new URL(le,ue)}let V={get action(){return p},get location(){return a(o,h)},listen(P){if(_)throw new Error("A history only accepts one active listener");return o.addEventListener(Ym,S),_=P,()=>{o.removeEventListener(Ym,S),_=null}},createHref(P){return t(o,P)},createURL:L,encodeLocation(P){let ue=L(P);return{pathname:ue.pathname,search:ue.search,hash:ue.hash}},push:E,replace:k,go(P){return h.go(P)}};return V}var Fm;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(Fm||(Fm={}));function rb(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=a.charAt(i);return r&&r!=="/"?null:a.slice(i)||"/"}const fv=["post","put","patch","delete"];new Set(fv);const lb=["get",...fv];new Set(lb);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cf(){return Cf=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(a[r]=i[r])}return a},Cf.apply(this,arguments)}const ob=Fe.createContext(null),hv=Fe.createContext(null);function ub(){return Fe.useContext(hv)!=null}function cb(a,t){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function fb(a){let{basename:t="/",children:i=null,location:r,navigationType:o=Pi.Pop,navigator:c,static:h=!1,future:p}=a;ub()&&uv(!1);let _=t.replace(/^\/*/,"/"),m=Fe.useMemo(()=>({basename:_,navigator:c,static:h,future:Cf({v7_relativeSplatPath:!1},p)}),[_,p,c,h]);typeof r=="string"&&(r=Xf(r));let{pathname:y="/",search:S="",hash:E="",state:k=null,key:L="default"}=r,V=Fe.useMemo(()=>{let P=rb(y,_);return P==null?null:{location:{pathname:P,search:S,hash:E,state:k,key:L},navigationType:o}},[_,y,S,E,k,L,o]);return V==null?null:Fe.createElement(ob.Provider,{value:m},Fe.createElement(hv.Provider,{children:i,value:V}))}new Promise(()=>{});/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const hb="6";try{window.__reactRouterVersion=hb}catch{}const db="startTransition",Xm=KS[db];function pb(a){let{basename:t,children:i,future:r,window:o}=a,c=Fe.useRef();c.current==null&&(c.current=nb({window:o,v5Compat:!0}));let h=c.current,[p,_]=Fe.useState({action:h.action,location:h.location}),{v7_startTransition:m}=r||{},y=Fe.useCallback(S=>{m&&Xm?Xm(()=>_(S)):_(S)},[_,m]);return Fe.useLayoutEffect(()=>h.listen(y),[h,y]),Fe.useEffect(()=>cb(r),[r]),Fe.createElement(fb,{basename:t,children:i,location:p.location,navigationType:p.action,navigator:h,future:r})}var Km;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(Km||(Km={}));var Zm;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(Zm||(Zm={}));const _b="/HeistTeams/assets/RHTS-DJtbNeYz.gif",mb=()=>{};var Wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(a,t){if(!a)throw Zs(t)},Zs=function(a){return new Error("Firebase Database ("+dv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=function(a){const t=[];let i=0;for(let r=0;r<a.length;r++){let o=a.charCodeAt(r);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&r+1<a.length&&(a.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(a.charCodeAt(++r)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},gb=function(a){const t=[];let i=0,r=0;for(;i<a.length;){const o=a[i++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=a[i++];t[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=a[i++],h=a[i++],p=a[i++],_=((o&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;t[r++]=String.fromCharCode(55296+(_>>10)),t[r++]=String.fromCharCode(56320+(_&1023))}else{const c=a[i++],h=a[i++];t[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},Kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,t){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<a.length;o+=3){const c=a[o],h=o+1<a.length,p=h?a[o+1]:0,_=o+2<a.length,m=_?a[o+2]:0,y=c>>2,S=(c&3)<<4|p>>4;let E=(p&15)<<2|m>>6,k=m&63;_||(k=64,h||(E=64)),r.push(i[y],i[S],i[E],i[k])}return r.join("")},encodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(a):this.encodeByteArray(pv(a),t)},decodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(a):gb(this.decodeStringToByteArray(a,t))},decodeStringToByteArray(a,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<a.length;){const c=i[a.charAt(o++)],p=o<a.length?i[a.charAt(o)]:0;++o;const m=o<a.length?i[a.charAt(o)]:64;++o;const S=o<a.length?i[a.charAt(o)]:64;if(++o,c==null||p==null||m==null||S==null)throw new vb;const E=c<<2|p>>4;if(r.push(E),m!==64){const k=p<<4&240|m>>2;if(r.push(k),S!==64){const L=m<<6&192|S;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class vb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _v=function(a){const t=pv(a);return Kf.encodeByteArray(t,!0)},no=function(a){return _v(a).replace(/\./g,"")},io=function(a){try{return Kf.decodeString(a,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(a){return mv(void 0,a)}function mv(a,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!Eb(i)||(a[i]=mv(a[i],t[i]));return a}function Eb(a){return a!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=()=>Sb().__FIREBASE_DEFAULTS__,Tb=()=>{if(typeof process>"u"||typeof Wm>"u")return;const a=Wm.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},Cb=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=a&&io(a[1]);return t&&JSON.parse(t)},Zf=()=>{try{return mb()||bb()||Tb()||Cb()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},gv=a=>{var t,i;return(i=(t=Zf())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[a]},Ab=a=>{const t=gv(a);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),r]:[t.substring(0,i),r]},vv=()=>{var a;return(a=Zf())===null||a===void 0?void 0:a.config},yv=a=>{var t;return(t=Zf())===null||t===void 0?void 0:t[`_${a}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(a){return a.endsWith(".cloudworkstations.dev")}async function Ev(a){return(await fetch(a,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(a,t){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=t||"demo-project",o=a.iat||0,c=a.sub||a.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},a);return[no(JSON.stringify(i)),no(JSON.stringify(h)),""].join(".")}const rr={};function Rb(){const a={prod:[],emulator:[]};for(const t of Object.keys(rr))rr[t]?a.emulator.push(t):a.prod.push(t);return a}function Nb(a){let t=document.getElementById(a),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",a),i=!0),{created:i,element:t}}let Jm=!1;function Ro(a,t){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||rr[a]===t||rr[a]||Jm)return;rr[a]=t;function i(E){return`__firebase__banner__${E}`}const r="__firebase__banner",c=Rb().prod.length>0;function h(){const E=document.getElementById(r);E&&E.remove()}function p(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function _(E,k){E.setAttribute("width","24"),E.setAttribute("id",k),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function m(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Jm=!0,h()},E}function y(E,k){E.setAttribute("id",k),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function S(){const E=Nb(r),k=i("text"),L=document.getElementById(k)||document.createElement("span"),V=i("learnmore"),P=document.getElementById(V)||document.createElement("a"),ue=i("preprendIcon"),le=document.getElementById(ue)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const ce=E.element;p(ce),y(P,V);const Oe=m();_(le,ue),ce.append(le,L,P,Oe),document.body.appendChild(ce)}c?(L.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(le.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Ob(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Db(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function Sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mb(){const a=ut();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function Ib(){return dv.NODE_ADMIN===!0}function xb(){try{return typeof indexedDB=="object"}catch{return!1}}function kb(){return new Promise((a,t)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),a(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="FirebaseError";class mi extends Error{constructor(t,i,r){super(i),this.code=t,this.customData=r,this.name=Ub,Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(t,i,r){this.service=t,this.serviceName=i,this.errors=r}create(t,...i){const r=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?Lb(c,r):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new mi(o,p,r)}}function Lb(a,t){return a.replace(zb,(i,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const zb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(a){return JSON.parse(a)}function Xe(a){return JSON.stringify(a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=function(a){let t={},i={},r={},o="";try{const c=a.split(".");t=dr(io(c[0])||""),i=dr(io(c[1])||""),o=c[2],r=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:r,signature:o}},Hb=function(a){const t=bv(a),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},Bb=function(a){const t=bv(a).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(a,t){return Object.prototype.hasOwnProperty.call(a,t)}function Ys(a,t){if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}function Af(a){for(const t in a)if(Object.prototype.hasOwnProperty.call(a,t))return!1;return!0}function so(a,t,i){const r={};for(const o in a)Object.prototype.hasOwnProperty.call(a,o)&&(r[o]=t.call(i,a[o],o,a));return r}function Gi(a,t){if(a===t)return!0;const i=Object.keys(a),r=Object.keys(t);for(const o of i){if(!r.includes(o))return!1;const c=a[o],h=t[o];if($m(c)&&$m(h)){if(!Gi(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function $m(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(a){const t=[];for(const[i,r]of Object.entries(a))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const r=this.W_;if(typeof t=="string")for(let S=0;S<16;S++)r[S]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let S=0;S<16;S++)r[S]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let S=16;S<80;S++){const E=r[S-3]^r[S-8]^r[S-14]^r[S-16];r[S]=(E<<1|E>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],p=this.chain_[3],_=this.chain_[4],m,y;for(let S=0;S<80;S++){S<40?S<20?(m=p^c&(h^p),y=1518500249):(m=c^h^p,y=1859775393):S<60?(m=c&h|p&(c|h),y=2400959708):(m=c^h^p,y=3395469782);const E=(o<<5|o>>>27)+m+_+y+r[S]&4294967295;_=p,p=h,h=(c<<30|c>>>2)&4294967295,c=o,o=E}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const r=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=r;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[r]=this.chain_[o]>>c&255,++r;return t}}function qb(a,t){const i=new Vb(a,t);return i.subscribe.bind(i)}class Vb{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,r){let o;if(t===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");Gb(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:r},o.next===void 0&&(o.next=uf),o.error===void 0&&(o.error=uf),o.complete===void 0&&(o.complete=uf);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gb(a,t){if(typeof a!="object"||a===null)return!1;for(const i of t)if(i in a&&typeof a[i]=="function")return!0;return!1}function uf(){}function Jf(a,t){return`${a} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=function(a){const t=[];let i=0;for(let r=0;r<a.length;r++){let o=a.charCodeAt(r);if(o>=55296&&o<=56319){const c=o-55296;r++,U(r<a.length,"Surrogate pair missing trail surrogate.");const h=a.charCodeAt(r)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},No=function(a){let t=0;for(let i=0;i<a.length;i++){const r=a.charCodeAt(i);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,i++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(a){return a&&a._delegate?a._delegate:a}class ji{constructor(t,i,r){this.name=t,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const r=new wo;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fb(t))try{this.getOrInitializeService({instanceIdentifier:Hi})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(t=Hi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Hi){return this.instances.has(t)}getOptions(t=Hi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&h.resolve(o)}return o}onInit(t,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qb(t),options:i}),this.instances.set(t,r),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Hi){return this.component?this.component.multipleInstances?t:Hi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qb(a){return a===Hi?void 0:a}function Fb(a){return a.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new Yb(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Ee||(Ee={}));const Kb={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Zb=Ee.INFO,Wb={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Jb=(a,t,...i)=>{if(t<a.logLevel)return;const r=new Date().toISOString(),o=Wb[t];if(o)console[o](`[${r}]  ${a.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $f{constructor(t){this.name=t,this._logLevel=Zb,this._logHandler=Jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...t),this._logHandler(this,Ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...t),this._logHandler(this,Ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...t),this._logHandler(this,Ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...t),this._logHandler(this,Ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...t),this._logHandler(this,Ee.ERROR,...t)}}const $b=(a,t)=>t.some(i=>a instanceof i);let eg,tg;function eT(){return eg||(eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tT(){return tg||(tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tv=new WeakMap,wf=new WeakMap,Cv=new WeakMap,cf=new WeakMap,eh=new WeakMap;function nT(a){const t=new Promise((i,r)=>{const o=()=>{a.removeEventListener("success",c),a.removeEventListener("error",h)},c=()=>{i(oi(a.result)),o()},h=()=>{r(a.error),o()};a.addEventListener("success",c),a.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&Tv.set(i,a)}).catch(()=>{}),eh.set(t,a),t}function iT(a){if(wf.has(a))return;const t=new Promise((i,r)=>{const o=()=>{a.removeEventListener("complete",c),a.removeEventListener("error",h),a.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{r(a.error||new DOMException("AbortError","AbortError")),o()};a.addEventListener("complete",c),a.addEventListener("error",h),a.addEventListener("abort",h)});wf.set(a,t)}let Rf={get(a,t,i){if(a instanceof IDBTransaction){if(t==="done")return wf.get(a);if(t==="objectStoreNames")return a.objectStoreNames||Cv.get(a);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return oi(a[t])},set(a,t,i){return a[t]=i,!0},has(a,t){return a instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in a}};function sT(a){Rf=a(Rf)}function aT(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const r=a.call(ff(this),t,...i);return Cv.set(r,t.sort?t.sort():[t]),oi(r)}:tT().includes(a)?function(...t){return a.apply(ff(this),t),oi(Tv.get(this))}:function(...t){return oi(a.apply(ff(this),t))}}function rT(a){return typeof a=="function"?aT(a):(a instanceof IDBTransaction&&iT(a),$b(a,eT())?new Proxy(a,Rf):a)}function oi(a){if(a instanceof IDBRequest)return nT(a);if(cf.has(a))return cf.get(a);const t=rT(a);return t!==a&&(cf.set(a,t),eh.set(t,a)),t}const ff=a=>eh.get(a);function lT(a,t,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(a,t),p=oi(h);return r&&h.addEventListener("upgradeneeded",_=>{r(oi(h.result),_.oldVersion,_.newVersion,oi(h.transaction),_)}),i&&h.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),p.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}const oT=["get","getKey","getAll","getAllKeys","count"],uT=["put","add","delete","clear"],hf=new Map;function ng(a,t){if(!(a instanceof IDBDatabase&&!(t in a)&&typeof t=="string"))return;if(hf.get(t))return hf.get(t);const i=t.replace(/FromIndex$/,""),r=t!==i,o=uT.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||oT.includes(i)))return;const c=async function(h,...p){const _=this.transaction(h,o?"readwrite":"readonly");let m=_.store;return r&&(m=m.index(p.shift())),(await Promise.all([m[i](...p),o&&_.done]))[0]};return hf.set(t,c),c}sT(a=>({...a,get:(t,i,r)=>ng(t,i)||a.get(t,i,r),has:(t,i)=>!!ng(t,i)||a.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(fT(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function fT(a){const t=a.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Nf="@firebase/app",ig="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new $f("@firebase/app"),hT="@firebase/app-compat",dT="@firebase/analytics-compat",pT="@firebase/analytics",_T="@firebase/app-check-compat",mT="@firebase/app-check",gT="@firebase/auth",vT="@firebase/auth-compat",yT="@firebase/database",ET="@firebase/data-connect",ST="@firebase/database-compat",bT="@firebase/functions",TT="@firebase/functions-compat",CT="@firebase/installations",AT="@firebase/installations-compat",wT="@firebase/messaging",RT="@firebase/messaging-compat",NT="@firebase/performance",OT="@firebase/performance-compat",DT="@firebase/remote-config",MT="@firebase/remote-config-compat",IT="@firebase/storage",xT="@firebase/storage-compat",kT="@firebase/firestore",UT="@firebase/vertexai",LT="@firebase/firestore-compat",zT="firebase",HT="11.7.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="[DEFAULT]",BT={[Nf]:"fire-core",[hT]:"fire-core-compat",[pT]:"fire-analytics",[dT]:"fire-analytics-compat",[mT]:"fire-app-check",[_T]:"fire-app-check-compat",[gT]:"fire-auth",[vT]:"fire-auth-compat",[yT]:"fire-rtdb",[ET]:"fire-data-connect",[ST]:"fire-rtdb-compat",[bT]:"fire-fn",[TT]:"fire-fn-compat",[CT]:"fire-iid",[AT]:"fire-iid-compat",[wT]:"fire-fcm",[RT]:"fire-fcm-compat",[NT]:"fire-perf",[OT]:"fire-perf-compat",[DT]:"fire-rc",[MT]:"fire-rc-compat",[IT]:"fire-gcs",[xT]:"fire-gcs-compat",[kT]:"fire-fst",[LT]:"fire-fst-compat",[UT]:"fire-vertex","fire-js":"fire-js",[zT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new Map,PT=new Map,Df=new Map;function sg(a,t){try{a.container.addComponent(t)}catch(i){An.debug(`Component ${t.name} failed to register with FirebaseApp ${a.name}`,i)}}function Qs(a){const t=a.name;if(Df.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;Df.set(t,a);for(const i of ao.values())sg(i,a);for(const i of PT.values())sg(i,a);return!0}function th(a,t){const i=a.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),a.container.getProvider(t)}function Gt(a){return a==null?!1:a.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ui=new Tr("app","Firebase",qT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(t,i,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=HT;function Av(a,t={}){let i=a;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Of,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw ui.create("bad-app-name",{appName:String(o)});if(i||(i=vv()),!i)throw ui.create("no-options");const c=ao.get(o);if(c){if(Gi(i,c.options)&&Gi(r,c.config))return c;throw ui.create("duplicate-app",{appName:o})}const h=new Xb(o);for(const _ of Df.values())h.addComponent(_);const p=new VT(i,r,h);return ao.set(o,p),p}function wv(a=Of){const t=ao.get(a);if(!t&&a===Of&&vv())return Av();if(!t)throw ui.create("no-app",{appName:a});return t}function ci(a,t,i){var r;let o=(r=BT[a])!==null&&r!==void 0?r:a;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const p=[`Unable to register library "${o}" with version "${t}":`];c&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&p.push("and"),h&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(p.join(" "));return}Qs(new ji(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="firebase-heartbeat-database",jT=1,pr="firebase-heartbeat-store";let df=null;function Rv(){return df||(df=lT(GT,jT,{upgrade:(a,t)=>{switch(t){case 0:try{a.createObjectStore(pr)}catch(i){console.warn(i)}}}}).catch(a=>{throw ui.create("idb-open",{originalErrorMessage:a.message})})),df}async function YT(a){try{const i=(await Rv()).transaction(pr),r=await i.objectStore(pr).get(Nv(a));return await i.done,r}catch(t){if(t instanceof mi)An.warn(t.message);else{const i=ui.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});An.warn(i.message)}}}async function ag(a,t){try{const r=(await Rv()).transaction(pr,"readwrite");await r.objectStore(pr).put(t,Nv(a)),await r.done}catch(i){if(i instanceof mi)An.warn(i.message);else{const r=ui.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});An.warn(r.message)}}}function Nv(a){return`${a.name}!${a.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=1024,FT=30;class XT{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new ZT(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=rg();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>FT){const h=WT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=rg(),{heartbeatsToSend:r,unsentEntries:o}=KT(this._heartbeatsCache.heartbeats),c=no(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return An.warn(i),""}}}function rg(){return new Date().toISOString().substring(0,10)}function KT(a,t=QT){const i=[];let r=a.slice();for(const o of a){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),lg(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),lg(i)>t){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class ZT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xb()?kb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await YT(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return ag(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return ag(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function lg(a){return no(JSON.stringify({version:2,heartbeats:a})).length}function WT(a){if(a.length===0)return-1;let t=0,i=a[0].date;for(let r=1;r<a.length;r++)a[r].date<i&&(i=a[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(a){Qs(new ji("platform-logger",t=>new cT(t),"PRIVATE")),Qs(new ji("heartbeat",t=>new XT(t),"PRIVATE")),ci(Nf,ig,a),ci(Nf,ig,"esm2017"),ci("fire-js","")}JT("");var $T="firebase",e1="11.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci($T,e1,"app");var og={};const ug="@firebase/database",cg="1.0.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ov="";function t1(a){Ov=a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Xe(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:dr(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return Dn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const t=window[a];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new n1(t)}}catch{}return new i1},qi=Dv("localStorage"),s1=Dv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new $f("@firebase/database"),a1=function(){let a=1;return function(){return a++}}(),Mv=function(a){const t=jb(a),i=new Pb;i.update(t);const r=i.digest();return Kf.encodeByteArray(r)},Cr=function(...a){let t="";for(let i=0;i<a.length;i++){const r=a[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Cr.apply(null,r):typeof r=="object"?t+=Xe(r):t+=r,t+=" "}return t};let lr=null,fg=!0;const r1=function(a,t){U(!0,"Can't turn on custom loggers persistently."),Bs.logLevel=Ee.VERBOSE,lr=Bs.log.bind(Bs)},rt=function(...a){if(fg===!0&&(fg=!1,lr===null&&s1.get("logging_enabled")===!0&&r1()),lr){const t=Cr.apply(null,a);lr(t)}},Ar=function(a){return function(...t){rt(a,...t)}},Mf=function(...a){const t="FIREBASE INTERNAL ERROR: "+Cr(...a);Bs.error(t)},wn=function(...a){const t=`FIREBASE FATAL ERROR: ${Cr(...a)}`;throw Bs.error(t),new Error(t)},yt=function(...a){const t="FIREBASE WARNING: "+Cr(...a);Bs.warn(t)},l1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Iv=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},o1=function(a){if(document.readyState==="complete")a();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},Fs="[MIN_NAME]",Yi="[MAX_NAME]",$s=function(a,t){if(a===t)return 0;if(a===Fs||t===Yi)return-1;if(t===Fs||a===Yi)return 1;{const i=hg(a),r=hg(t);return i!==null?r!==null?i-r===0?a.length-t.length:i-r:-1:r!==null?1:a<t?-1:1}},u1=function(a,t){return a===t?0:a<t?-1:1},nr=function(a,t){if(t&&a in t)return t[a];throw new Error("Missing required key ("+a+") in object: "+Xe(t))},nh=function(a){if(typeof a!="object"||a===null)return Xe(a);const t=[];for(const r in a)t.push(r);t.sort();let i="{";for(let r=0;r<t.length;r++)r!==0&&(i+=","),i+=Xe(t[r]),i+=":",i+=nh(a[t[r]]);return i+="}",i},xv=function(a,t){const i=a.length;if(i<=t)return[a];const r=[];for(let o=0;o<i;o+=t)o+t>i?r.push(a.substring(o,i)):r.push(a.substring(o,o+t));return r};function Et(a,t){for(const i in a)a.hasOwnProperty(i)&&t(i,a[i])}const kv=function(a){U(!Iv(a),"Invalid JSON number");const t=11,i=52,r=(1<<t-1)-1;let o,c,h,p,_;a===0?(c=0,h=0,o=1/a===-1/0?1:0):(o=a<0,a=Math.abs(a),a>=Math.pow(2,1-r)?(p=Math.min(Math.floor(Math.log(a)/Math.LN2),r),c=p+r,h=Math.round(a*Math.pow(2,i-p)-Math.pow(2,i))):(c=0,h=Math.round(a/Math.pow(2,1-r-i))));const m=[];for(_=i;_;_-=1)m.push(h%2?1:0),h=Math.floor(h/2);for(_=t;_;_-=1)m.push(c%2?1:0),c=Math.floor(c/2);m.push(o?1:0),m.reverse();const y=m.join("");let S="";for(_=0;_<64;_+=8){let E=parseInt(y.substr(_,8),2).toString(16);E.length===1&&(E="0"+E),S=S+E}return S.toLowerCase()},c1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},f1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function h1(a,t){let i="Unknown Error";a==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?i="Client doesn't have permission to access the desired data.":a==="unavailable"&&(i="The service is unavailable");const r=new Error(a+" at "+t._path.toString()+": "+i);return r.code=a.toUpperCase(),r}const d1=new RegExp("^-?(0*)\\d{1,10}$"),p1=-2147483648,_1=2147483647,hg=function(a){if(d1.test(a)){const t=Number(a);if(t>=p1&&t<=_1)return t}return null},ea=function(a){try{a()}catch(t){setTimeout(()=>{const i=t.stack||"";throw yt("Exception was thrown by user callback.",i),t},Math.floor(0))}},m1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},or=function(a,t){const i=setTimeout(a,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Gt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(r=>this.appCheck=r)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(t,i,r){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(t)}}class Zl{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Zl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="5",Uv="v",Lv="s",zv="r",Hv="f",Bv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pv="ls",qv="p",If="ac",Vv="websocket",Gv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(t,i,r,o,c=!1,h="",p=!1,_=!1,m=null){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=_,this.emulatorOptions=m,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&qi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function y1(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function Yv(a,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let r;if(t===Vv)r=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(t===Gv)r=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);y1(a)&&(i.ns=a.namespace);const o=[];return Et(i,(c,h)=>{o.push(c+"="+h)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(){this.counters_={}}incrementCounter(t,i=1){Dn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return yb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={},_f={};function sh(a){const t=a.toString();return pf[t]||(pf[t]=new E1),pf[t]}function S1(a,t){const i=a.toString();return _f[i]||(_f[i]=t()),_f[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&ea(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="start",T1="close",C1="pLPCommand",A1="pRTLPCB",Qv="id",Fv="pw",Xv="ser",w1="cb",R1="seg",N1="ts",O1="d",D1="dframe",Kv=1870,Zv=30,M1=Kv-Zv,I1=25e3,x1=3e4;class zs{constructor(t,i,r,o,c,h,p){this.connId=t,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ar(t),this.stats_=sh(i),this.urlFn=_=>(this.appCheckToken&&(_[If]=this.appCheckToken),Yv(i,Gv,_))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new b1(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(x1)),o1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ah((...c)=>{const[h,p,_,m,y]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===dg)this.id=p,this.password=_;else if(h===T1)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,p]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,p)},()=>{this.onClosed_()},this.urlFn);const r={};r[dg]="t",r[Xv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[w1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Uv]=ih,this.transportSessionId&&(r[Lv]=this.transportSessionId),this.lastSessionId&&(r[Pv]=this.lastSessionId),this.applicationId&&(r[qv]=this.applicationId),this.appCheckToken&&(r[If]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(r[zv]=Hv);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zs.forceAllow_=!0}static forceDisallow(){zs.forceDisallow_=!0}static isAvailable(){return zs.forceAllow_?!0:!zs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!c1()&&!f1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=Xe(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=_v(i),o=xv(r,M1);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[D1]="t",r[Qv]=t,r[Fv]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=Xe(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class ah{constructor(t,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=a1(),window[C1+this.uniqueCallbackIdentifier]=t,window[A1+this.uniqueCallbackIdentifier]=i,this.myIFrame=ah.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(p){rt("frame writing exception"),p.stack&&rt(p.stack),rt(p)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Qv]=this.myID,t[Fv]=this.myPW,t[Xv]=this.currentSerial;let i=this.urlFn(t),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zv+r.length<=Kv;){const h=this.pendingSegs.shift();r=r+"&"+R1+o+"="+h.seg+"&"+N1+o+"="+h.ts+"&"+O1+o+"="+h.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,r){this.pendingSegs.push({seg:t,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(I1)),c=()=>{clearTimeout(o),r()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{rt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=16384,U1=45e3;let ro=null;typeof MozWebSocket<"u"?ro=MozWebSocket:typeof WebSocket<"u"&&(ro=WebSocket);class jt{constructor(t,i,r,o,c,h,p){this.connId=t,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ar(this.connId),this.stats_=sh(i),this.connURL=jt.connectionURL_(i,h,p,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,r,o,c){const h={};return h[Uv]=ih,typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(h[zv]=Hv),i&&(h[Lv]=i),r&&(h[Pv]=r),o&&(h[If]=o),c&&(h[qv]=c),Yv(t,Vv,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qi.set("previous_websocket_failure",!0);try{let r;Ib(),this.mySock=new ro(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){jt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&ro!==null&&!jt.forceDisallow_}static previouslyFailed(){return qi.isInMemoryStorage||qi.get("previous_websocket_failure")===!0}markConnectionHealthy(){qi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=dr(i);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const i=Xe(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=xv(i,k1);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(U1))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jt.responsesRequiredToBeHealthy=2;jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{static get ALL_TRANSPORTS(){return[zs,jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=jt&&jt.isAvailable();let r=i&&!jt.previouslyFailed();if(t.webSocketOnly&&(i||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[jt];else{const o=this.transports_=[];for(const c of _r.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);_r.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_r.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=6e4,z1=5e3,H1=10*1024,B1=100*1024,mf="t",pg="d",P1="s",_g="r",q1="e",mg="o",gg="a",vg="n",yg="p",V1="h";class G1{constructor(t,i,r,o,c,h,p,_,m,y){this.id=t,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=p,this.onDisconnect_=_,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ar("c:"+this.id+":"),this.transportManager_=new _r(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>B1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>H1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(mf in t){const i=t[mf];i===gg?this.upgradeIfSecondaryHealthy_():i===_g?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===mg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=nr("t",t),r=nr("d",t);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=nr("t",t),r=nr("d",t);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=nr(mf,t);if(pg in t){const r=t[pg];if(i===V1){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===vg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===P1?this.onConnectionShutdown_(r):i===_g?this.onReset_(r):i===q1?Mf("Server Error: "+r):i===mg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,r=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),ih!==r&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(L1))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(z1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yg,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{put(t,i,r,o){}merge(t,i,r,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,r){}onDisconnectMerge(t,i,r){}onDisconnectCancel(t,i){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(t,i,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:r});const o=this.getInitialEvent(t);o&&i.apply(r,o)}off(t,i,r){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!r||r===o[c].context)){o.splice(c,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends Jv{static getInstance(){return new lo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=32,Sg=768;class Te{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function pe(){return new Te("")}function ne(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function di(a){return a.pieces_.length-a.pieceNum_}function Ae(a){let t=a.pieceNum_;return t<a.pieces_.length&&t++,new Te(a.pieces_,t)}function $v(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function j1(a){let t="";for(let i=a.pieceNum_;i<a.pieces_.length;i++)a.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(a.pieces_[i])));return t||"/"}function ey(a,t=0){return a.pieces_.slice(a.pieceNum_+t)}function ty(a){if(a.pieceNum_>=a.pieces_.length)return null;const t=[];for(let i=a.pieceNum_;i<a.pieces_.length-1;i++)t.push(a.pieces_[i]);return new Te(t,0)}function Pe(a,t){const i=[];for(let r=a.pieceNum_;r<a.pieces_.length;r++)i.push(a.pieces_[r]);if(t instanceof Te)for(let r=t.pieceNum_;r<t.pieces_.length;r++)i.push(t.pieces_[r]);else{const r=t.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new Te(i,0)}function re(a){return a.pieceNum_>=a.pieces_.length}function gt(a,t){const i=ne(a),r=ne(t);if(i===null)return t;if(i===r)return gt(Ae(a),Ae(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+a+")")}function rh(a,t){if(di(a)!==di(t))return!1;for(let i=a.pieceNum_,r=t.pieceNum_;i<=a.pieces_.length;i++,r++)if(a.pieces_[i]!==t.pieces_[r])return!1;return!0}function Yt(a,t){let i=a.pieceNum_,r=t.pieceNum_;if(di(a)>di(t))return!1;for(;i<a.pieces_.length;){if(a.pieces_[i]!==t.pieces_[r])return!1;++i,++r}return!0}class Y1{constructor(t,i){this.errorPrefix_=i,this.parts_=ey(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=No(this.parts_[r]);ny(this)}}function Q1(a,t){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(t),a.byteLength_+=No(t),ny(a)}function F1(a){const t=a.parts_.pop();a.byteLength_-=No(t),a.parts_.length>0&&(a.byteLength_-=1)}function ny(a){if(a.byteLength_>Sg)throw new Error(a.errorPrefix_+"has a key path longer than "+Sg+" bytes ("+a.byteLength_+").");if(a.parts_.length>Eg)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Eg+") or object contains a cycle "+Bi(a))}function Bi(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends Jv{static getInstance(){return new lh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=1e3,X1=60*5*1e3,bg=30*1e3,K1=1.3,Z1=3e4,W1="server_kill",Tg=3;class Cn extends Wv{constructor(t,i,r,o,c,h,p,_){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=p,this.authOverride_=_,this.id=Cn.nextPersistentConnectionId_++,this.log_=Ar("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ir,this.maxReconnectDelay_=X1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&lo.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,r){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_(Xe(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),r&&(this.requestCBHash_[o]=r)}get(t){this.initConnection_();const i=new wo,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const p=h.d;h.s==="ok"?i.resolve(p):i.reject(p)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,r,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const p={onComplete:o,hashFn:i,query:t,tag:r};this.listens.get(h).set(c,p),this.connected_&&this.sendListen_(p)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(t){const i=t.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const c={p:r},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,p=>{const _=p.d,m=p.s;Cn.warnOnListenWarnings_(_,i),(this.listens.get(r)&&this.listens.get(r).get(o))===t&&(this.log_("listen response",p),m!=="ok"&&this.removeListen_(r,o),t.onComplete&&t.onComplete(m,_))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&Dn(t,"w")){const r=Ys(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||Bb(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bg)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=Hb(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,r=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(t,i){const r=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,t._queryObject,i)}sendUnlisten_(t,i,r,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=r,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:r})}onDisconnectMerge(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:r})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,r,o){const c={p:i,d:r};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,r,o){this.putInternal("p",t,i,r,o)}merge(t,i,r,o){this.putInternal("m",t,i,r,o)}putInternal(t,i,r,o,c){this.initConnection_();const h={p:i,d:r};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,r,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const c=r.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Xe(t));const i=t.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Mf("Unrecognized action received from server: "+Xe(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ir,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ir,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Z1&&(this.reconnectDelay_=ir),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*K1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Cn.nextConnectionId_++,c=this.lastSessionId;let h=!1,p=null;const _=function(){p?p.close():(h=!0,r())},m=function(S){U(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(S)};this.realtime_={close:_,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,E]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);h?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=E&&E.token,p=new G1(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,r,k=>{yt(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(W1)},c))}catch(S){this.log_("Failed to get token: "+S),h||(this.repoInfo_.nodeAdmin&&yt(S),_())}}}interrupt(t){rt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){rt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Af(this.interruptReasons_)&&(this.reconnectDelay_=ir,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let r;i?r=i.map(c=>nh(c)).join("$"):r="default";const o=this.removeListen_(t,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const r=new Te(t).toString();let o;if(this.listens.has(r)){const c=this.listens.get(r);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(t,i){rt("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tg&&(this.reconnectDelay_=bg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){rt("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+Ov.replace(/\./g,"-")]=1,Wf()?t["framework.cordova"]=1:Sv()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=lo.getInstance().currentlyOnline();return Af(this.interruptReasons_)&&t}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new ie(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const r=new ie(Fs,t),o=new ie(Fs,i);return this.compare(r,o)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;class iy extends Oo{static get __EMPTY_NODE(){return Fl}static set __EMPTY_NODE(t){Fl=t}compare(t,i){return $s(t.name,i.name)}isDefinedOn(t){throw Zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Yi,Fl)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new ie(t,Fl)}toString(){return".key"}}const Ps=new iy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,i,r,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?r(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Qe{constructor(t,i,r,o,c){this.key=t,this.value=i,this.color=r??Qe.RED,this.left=o??vt.EMPTY_NODE,this.right=c??vt.EMPTY_NODE}copy(t,i,r,o,c){return new Qe(t??this.key,i??this.value,r??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,r){let o=this;const c=r(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,r),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let r,o;if(r=this,i(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(t,r.key)===0){if(r.right.isEmpty())return vt.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class J1{copy(t,i,r,o,c){return this}insert(t,i,r){return new Qe(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(t,i=vt.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new vt(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(t){return new vt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(t){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(t,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(t){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(t,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Xl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new Xl(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new Xl(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new Xl(this.root_,null,this.comparator_,!0,t)}}vt.EMPTY_NODE=new J1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(a,t){return $s(a.name,t.name)}function oh(a,t){return $s(a,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf;function eC(a){xf=a}const sy=function(a){return typeof a=="number"?"number:"+kv(a):"string:"+a},ay=function(a){if(a.isLeafNode()){const t=a.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Dn(t,".sv"),"Priority must be a string or number.")}else U(a===xf||a.isEmpty(),"priority of unexpected type.");U(a===xf||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cg;class Ye{static set __childrenNodeConstructor(t){Cg=t}static get __childrenNodeConstructor(){return Cg}constructor(t,i=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ay(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ye(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return re(t)?this:ne(t)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const r=ne(t);return r===null?i:i.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||di(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+sy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=kv(this.value_):t+=this.value_,this.lazyHash_=Mv(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ye.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ye.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,r=typeof this.value_,o=Ye.VALUE_TYPE_ORDER.indexOf(i),c=Ye.VALUE_TYPE_ORDER.indexOf(r);return U(o>=0,"Unknown leaf type: "+i),U(c>=0,"Unknown leaf type: "+r),o===c?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry,ly;function tC(a){ry=a}function nC(a){ly=a}class iC extends Oo{compare(t,i){const r=t.node.getPriority(),o=i.node.getPriority(),c=r.compareTo(o);return c===0?$s(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Yi,new Ye("[PRIORITY-POST]",ly))}makePost(t,i){const r=ry(t);return new ie(i,new Ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const xe=new iC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=Math.log(2);class aC{constructor(t){const i=c=>parseInt(Math.log(c)/sC,10),r=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=r(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const oo=function(a,t,i,r){a.sort(t);const o=function(_,m){const y=m-_;let S,E;if(y===0)return null;if(y===1)return S=a[_],E=i?i(S):S,new Qe(E,S.node,Qe.BLACK,null,null);{const k=parseInt(y/2,10)+_,L=o(_,k),V=o(k+1,m);return S=a[k],E=i?i(S):S,new Qe(E,S.node,Qe.BLACK,L,V)}},c=function(_){let m=null,y=null,S=a.length;const E=function(L,V){const P=S-L,ue=S;S-=L;const le=o(P+1,ue),ce=a[P],Oe=i?i(ce):ce;k(new Qe(Oe,ce.node,V,null,le))},k=function(L){m?(m.left=L,m=L):(y=L,m=L)};for(let L=0;L<_.count;++L){const V=_.nextBitIsOne(),P=Math.pow(2,_.count-(L+1));V?E(P,Qe.BLACK):(E(P,Qe.BLACK),E(P,Qe.RED))}return y},h=new aC(a.length),p=c(h);return new vt(r||t,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf;const Ls={};class Sn{static get Default(){return U(Ls&&xe,"ChildrenNode.ts has not been loaded"),gf=gf||new Sn({".priority":Ls},{".priority":xe}),gf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Ys(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof vt?i:null}hasIndex(t){return Dn(this.indexSet_,t.toString())}addIndex(t,i){U(t!==Ps,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const c=i.getIterator(ie.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),r.push(h),h=c.getNext();let p;o?p=oo(r,t.getCompare()):p=Ls;const _=t.toString(),m=Object.assign({},this.indexSet_);m[_]=t;const y=Object.assign({},this.indexes_);return y[_]=p,new Sn(y,m)}addToIndexes(t,i){const r=so(this.indexes_,(o,c)=>{const h=Ys(this.indexSet_,c);if(U(h,"Missing index implementation for "+c),o===Ls)if(h.isDefinedOn(t.node)){const p=[],_=i.getIterator(ie.Wrap);let m=_.getNext();for(;m;)m.name!==t.name&&p.push(m),m=_.getNext();return p.push(t),oo(p,h.getCompare())}else return Ls;else{const p=i.get(t.name);let _=o;return p&&(_=_.remove(new ie(t.name,p))),_.insert(t,t.node)}});return new Sn(r,this.indexSet_)}removeFromIndexes(t,i){const r=so(this.indexes_,o=>{if(o===Ls)return o;{const c=i.get(t.name);return c?o.remove(new ie(t.name,c)):o}});return new Sn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;class K{static get EMPTY_NODE(){return sr||(sr=new K(new vt(oh),null,Sn.Default))}constructor(t,i,r){this.children_=t,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ay(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||sr}updatePriority(t){return this.children_.isEmpty()?this:new K(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?sr:i}}getChild(t){const i=ne(t);return i===null?this:this.getImmediateChild(i).getChild(Ae(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const r=new ie(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?sr:this.priorityNode_;return new K(o,h,c)}}updateChild(t,i){const r=ne(t);if(r===null)return i;{U(ne(t)!==".priority"||di(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(Ae(t),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let r=0,o=0,c=!0;if(this.forEachChild(xe,(h,p)=>{i[h]=p.val(t),r++,c&&K.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*r){const h=[];for(const p in i)h[p]=i[p];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+sy(this.getPriority().val())+":"),this.forEachChild(xe,(i,r)=>{const o=r.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":Mv(t)}return this.lazyHash_}getPredecessorChildName(t,i,r){const o=this.resolveIndex_(r);if(o){const c=o.getPredecessorKey(new ie(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new ie(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new ie(i,this.children_.get(i)):null}forEachChild(t,i){const r=this.resolveIndex_(t);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,ie.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,ie.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===wr?-1:0}withIndex(t){if(t===Ps||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new K(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Ps||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(xe),o=i.getIterator(xe);let c=r.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=r.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Ps?null:this.indexMap_.get(t.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rC extends K{constructor(){super(new vt(oh),K.EMPTY_NODE,Sn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return K.EMPTY_NODE}isEmpty(){return!1}}const wr=new rC;Object.defineProperties(ie,{MIN:{value:new ie(Fs,K.EMPTY_NODE)},MAX:{value:new ie(Yi,wr)}});iy.__EMPTY_NODE=K.EMPTY_NODE;Ye.__childrenNodeConstructor=K;eC(wr);nC(wr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=!0;function $e(a,t=null){if(a===null)return K.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(t=a[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const i=a;return new Ye(i,$e(t))}if(!(a instanceof Array)&&lC){const i=[];let r=!1;if(Et(a,(h,p)=>{if(h.substring(0,1)!=="."){const _=$e(p);_.isEmpty()||(r=r||!_.getPriority().isEmpty(),i.push(new ie(h,_)))}}),i.length===0)return K.EMPTY_NODE;const c=oo(i,$1,h=>h.name,oh);if(r){const h=oo(i,xe.getCompare());return new K(c,$e(t),new Sn({".priority":h},{".priority":xe}))}else return new K(c,$e(t),Sn.Default)}else{let i=K.EMPTY_NODE;return Et(a,(r,o)=>{if(Dn(a,r)&&r.substring(0,1)!=="."){const c=$e(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(r,c))}}),i.updatePriority($e(t))}}tC($e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC extends Oo{constructor(t){super(),this.indexPath_=t,U(!re(t)&&ne(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const r=this.extractChild(t.node),o=this.extractChild(i.node),c=r.compareTo(o);return c===0?$s(t.name,i.name):c}makePost(t,i){const r=$e(t),o=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(i,o)}maxPost(){const t=K.EMPTY_NODE.updateChild(this.indexPath_,wr);return new ie(Yi,t)}toString(){return ey(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC extends Oo{compare(t,i){const r=t.node.compareTo(i.node);return r===0?$s(t.name,i.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(t,i){const r=$e(t);return new ie(i,r)}toString(){return".value"}}const cC=new uC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(a){return{type:"value",snapshotNode:a}}function Xs(a,t){return{type:"child_added",snapshotNode:t,childName:a}}function mr(a,t){return{type:"child_removed",snapshotNode:t,childName:a}}function gr(a,t,i){return{type:"child_changed",snapshotNode:t,childName:a,oldSnap:i}}function fC(a,t){return{type:"child_moved",snapshotNode:t,childName:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t){this.index_=t}updateChild(t,i,r,o,c,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const p=t.getImmediateChild(i);return p.getChild(o).equals(r.getChild(o))&&p.isEmpty()===r.isEmpty()||(h!=null&&(r.isEmpty()?t.hasChild(i)?h.trackChildChange(mr(i,p)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):p.isEmpty()?h.trackChildChange(Xs(i,r)):h.trackChildChange(gr(i,r,p))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(i,r).withIndex(this.index_)}updateFullNode(t,i,r){return r!=null&&(t.isLeafNode()||t.forEachChild(xe,(o,c)=>{i.hasChild(o)||r.trackChildChange(mr(o,c))}),i.isLeafNode()||i.forEachChild(xe,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||r.trackChildChange(gr(o,c,h))}else r.trackChildChange(Xs(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?K.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t){this.indexedFilter_=new uh(t.getIndex()),this.index_=t.getIndex(),this.startPost_=vr.getStartPost_(t),this.endPost_=vr.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&r}updateChild(t,i,r,o,c,h){return this.matches(new ie(i,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,r,o,c,h)}updateFullNode(t,i,r){i.isLeafNode()&&(i=K.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(K.EMPTY_NODE);const c=this;return i.forEachChild(xe,(h,p)=>{c.matches(new ie(h,p))||(o=o.updateImmediateChild(h,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=i=>{const r=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new vr(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,r,o,c,h){return this.rangedFilter_.matches(new ie(i,r))||(r=K.EMPTY_NODE),t.getImmediateChild(i).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,r,o,c,h):this.fullLimitUpdateChild_(t,i,r,c,h)}updateFullNode(t,i,r){let o;if(i.isLeafNode()||i.isEmpty())o=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=K.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const p=c.getNext();if(this.withinDirectionalStart(p))if(this.withinDirectionalEnd(p))o=o.updateImmediateChild(p.name,p.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(K.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const p=c.getNext();h<this.limit_&&this.withinDirectionalStart(p)&&this.withinDirectionalEnd(p)?h++:o=o.updateImmediateChild(p.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,r,o,c){let h;if(this.reverse_){const S=this.index_.getCompare();h=(E,k)=>S(k,E)}else h=this.index_.getCompare();const p=t;U(p.numChildren()===this.limit_,"");const _=new ie(i,r),m=this.reverse_?p.getFirstChild(this.index_):p.getLastChild(this.index_),y=this.rangedFilter_.matches(_);if(p.hasChild(i)){const S=p.getImmediateChild(i);let E=o.getChildAfterChild(this.index_,m,this.reverse_);for(;E!=null&&(E.name===i||p.hasChild(E.name));)E=o.getChildAfterChild(this.index_,E,this.reverse_);const k=E==null?1:h(E,_);if(y&&!r.isEmpty()&&k>=0)return c!=null&&c.trackChildChange(gr(i,r,S)),p.updateImmediateChild(i,r);{c!=null&&c.trackChildChange(mr(i,S));const V=p.updateImmediateChild(i,K.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(c!=null&&c.trackChildChange(Xs(E.name,E.node)),V.updateImmediateChild(E.name,E.node)):V}}else return r.isEmpty()?t:y&&h(m,_)>=0?(c!=null&&(c.trackChildChange(mr(m.name,m.node)),c.trackChildChange(Xs(i,r))),p.updateImmediateChild(i,r).updateImmediateChild(m.name,K.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fs}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const t=new ch;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function dC(a){return a.loadsAllData()?new uh(a.getIndex()):a.hasLimit()?new hC(a):new vr(a)}function Ag(a){const t={};if(a.isDefault())return t;let i;if(a.index_===xe?i="$priority":a.index_===cC?i="$value":a.index_===Ps?i="$key":(U(a.index_ instanceof oC,"Unrecognized index type!"),i=a.index_.toString()),t.orderBy=Xe(i),a.startSet_){const r=a.startAfterSet_?"startAfter":"startAt";t[r]=Xe(a.indexStartValue_),a.startNameSet_&&(t[r]+=","+Xe(a.indexStartName_))}if(a.endSet_){const r=a.endBeforeSet_?"endBefore":"endAt";t[r]=Xe(a.indexEndValue_),a.endNameSet_&&(t[r]+=","+Xe(a.indexEndName_))}return a.limitSet_&&(a.isViewFromLeft()?t.limitToFirst=a.limit_:t.limitToLast=a.limit_),t}function wg(a){const t={};if(a.startSet_&&(t.sp=a.indexStartValue_,a.startNameSet_&&(t.sn=a.indexStartName_),t.sin=!a.startAfterSet_),a.endSet_&&(t.ep=a.indexEndValue_,a.endNameSet_&&(t.en=a.indexEndName_),t.ein=!a.endBeforeSet_),a.limitSet_){t.l=a.limit_;let i=a.viewFrom_;i===""&&(a.isViewFromLeft()?i="l":i="r"),t.vf=i}return a.index_!==xe&&(t.i=a.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Wv{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,r,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=Ar("p:rest:"),this.listens_={}}listen(t,i,r,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=uo.getListenId_(t,r),p={};this.listens_[h]=p;const _=Ag(t._queryParams);this.restRequest_(c+".json",_,(m,y)=>{let S=y;if(m===404&&(S=null,m=null),m===null&&this.onDataUpdate_(c,S,!1,r),Ys(this.listens_,h)===p){let E;m?m===401?E="permission_denied":E="rest_error:"+m:E="ok",o(E,null)}})}unlisten(t,i){const r=uo.getListenId_(t,i);delete this.listens_[r]}get(t){const i=Ag(t._queryParams),r=t._path.toString(),o=new wo;return this.restRequest_(r+".json",i,(c,h)=>{let p=h;c===404&&(p=null,c=null),c===null?(this.onDataUpdate_(r,p,!1,null),o.resolve(p)):o.reject(new Error(p))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ws(i);this.log_("Sending REST request for "+h);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(r&&p.readyState===4){this.log_("REST Response for "+h+" received. status:",p.status,"response:",p.responseText);let _=null;if(p.status>=200&&p.status<300){try{_=dr(p.responseText)}catch{yt("Failed to parse JSON response for "+h+": "+p.responseText)}r(null,_)}else p.status!==401&&p.status!==404&&yt("Got unsuccessful REST response for "+h+" Status: "+p.status),r(p.status);r=null}},p.open("GET",h,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(){return{value:null,children:new Map}}function uy(a,t,i){if(re(t))a.value=i,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(t,i);else{const r=ne(t);a.children.has(r)||a.children.set(r,co());const o=a.children.get(r);t=Ae(t),uy(o,t,i)}}function kf(a,t,i){a.value!==null?i(t,a.value):_C(a,(r,o)=>{const c=new Te(t.toString()+"/"+r);kf(o,c,i)})}function _C(a,t){a.children.forEach((i,r)=>{t(r,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&Et(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=10*1e3,gC=30*1e3,vC=5*60*1e3;class yC{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new mC(t);const r=Rg+(gC-Rg)*Math.random();or(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),i={};let r=!1;Et(t,(o,c)=>{c>0&&Dn(this.statsToReport_,o)&&(i[o]=c,r=!0)}),r&&this.server_.reportStats(i),or(this.reportStats_.bind(this),Math.floor(Math.random()*2*vC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function cy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hh(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,i,r){this.path=t,this.affectedTree=i,this.revert=r,this.type=Qt.ACK_USER_WRITE,this.source=cy()}operationForChild(t){if(re(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Te(t));return new fo(pe(),i,this.revert)}}else return U(ne(this.path)===t,"operationForChild called for unrelated child."),new fo(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,i){this.source=t,this.path=i,this.type=Qt.LISTEN_COMPLETE}operationForChild(t){return re(this.path)?new yr(this.source,pe()):new yr(this.source,Ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,i,r){this.source=t,this.path=i,this.snap=r,this.type=Qt.OVERWRITE}operationForChild(t){return re(this.path)?new Qi(this.source,pe(),this.snap.getImmediateChild(t)):new Qi(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,i,r){this.source=t,this.path=i,this.children=r,this.type=Qt.MERGE}operationForChild(t){if(re(this.path)){const i=this.children.subtree(new Te(t));return i.isEmpty()?null:i.value?new Qi(this.source,pe(),i.value):new Er(this.source,pe(),i)}else return U(ne(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Er(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,i,r){this.node_=t,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(re(t))return this.isFullyInitialized()&&!this.filtered_;const i=ne(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function SC(a,t,i,r){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&a.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(fC(h.childName,h.snapshotNode))}),ar(a,o,"child_removed",t,r,i),ar(a,o,"child_added",t,r,i),ar(a,o,"child_moved",c,r,i),ar(a,o,"child_changed",t,r,i),ar(a,o,"value",t,r,i),o}function ar(a,t,i,r,o,c){const h=r.filter(p=>p.type===i);h.sort((p,_)=>TC(a,p,_)),h.forEach(p=>{const _=bC(a,p,c);o.forEach(m=>{m.respondsTo(p.type)&&t.push(m.createEvent(_,a.query_))})})}function bC(a,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,a.index_)),t}function TC(a,t,i){if(t.childName==null||i.childName==null)throw Zs("Should only compare child_ events.");const r=new ie(t.childName,t.snapshotNode),o=new ie(i.childName,i.snapshotNode);return a.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(a,t){return{eventCache:a,serverCache:t}}function ur(a,t,i,r){return Do(new Fi(t,i,r),a.serverCache)}function fy(a,t,i,r){return Do(a.eventCache,new Fi(t,i,r))}function Uf(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function Xi(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vf;const CC=()=>(vf||(vf=new vt(u1)),vf);class we{static fromObject(t){let i=new we(null);return Et(t,(r,o)=>{i=i.set(new Te(r),o)}),i}constructor(t,i=CC()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:pe(),value:this.value};if(re(t))return null;{const r=ne(t),o=this.children.get(r);if(o!==null){const c=o.findRootMostMatchingPathAndValue(Ae(t),i);return c!=null?{path:Pe(new Te(r),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(re(t))return this;{const i=ne(t),r=this.children.get(i);return r!==null?r.subtree(Ae(t)):new we(null)}}set(t,i){if(re(t))return new we(i,this.children);{const r=ne(t),c=(this.children.get(r)||new we(null)).set(Ae(t),i),h=this.children.insert(r,c);return new we(this.value,h)}}remove(t){if(re(t))return this.children.isEmpty()?new we(null):new we(null,this.children);{const i=ne(t),r=this.children.get(i);if(r){const o=r.remove(Ae(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new we(null):new we(this.value,c)}else return this}}get(t){if(re(t))return this.value;{const i=ne(t),r=this.children.get(i);return r?r.get(Ae(t)):null}}setTree(t,i){if(re(t))return i;{const r=ne(t),c=(this.children.get(r)||new we(null)).setTree(Ae(t),i);let h;return c.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,c),new we(this.value,h)}}fold(t){return this.fold_(pe(),t)}fold_(t,i){const r={};return this.children.inorderTraversal((o,c)=>{r[o]=c.fold_(Pe(t,o),i)}),i(t,this.value,r)}findOnPath(t,i){return this.findOnPath_(t,pe(),i)}findOnPath_(t,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(re(t))return null;{const c=ne(t),h=this.children.get(c);return h?h.findOnPath_(Ae(t),Pe(i,c),r):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,pe(),i)}foreachOnPath_(t,i,r){if(re(t))return this;{this.value&&r(i,this.value);const o=ne(t),c=this.children.get(o);return c?c.foreachOnPath_(Ae(t),Pe(i,o),r):new we(null)}}foreach(t){this.foreach_(pe(),t)}foreach_(t,i){this.children.inorderTraversal((r,o)=>{o.foreach_(Pe(t,r),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,r)=>{r.value&&t(i,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.writeTree_=t}static empty(){return new Xt(new we(null))}}function cr(a,t,i){if(re(t))return new Xt(new we(i));{const r=a.writeTree_.findRootMostValueAndPath(t);if(r!=null){const o=r.path;let c=r.value;const h=gt(o,t);return c=c.updateChild(h,i),new Xt(a.writeTree_.set(o,c))}else{const o=new we(i),c=a.writeTree_.setTree(t,o);return new Xt(c)}}}function Ng(a,t,i){let r=a;return Et(i,(o,c)=>{r=cr(r,Pe(t,o),c)}),r}function Og(a,t){if(re(t))return Xt.empty();{const i=a.writeTree_.setTree(t,new we(null));return new Xt(i)}}function Lf(a,t){return Zi(a,t)!=null}function Zi(a,t){const i=a.writeTree_.findRootMostValueAndPath(t);return i!=null?a.writeTree_.get(i.path).getChild(gt(i.path,t)):null}function Dg(a){const t=[],i=a.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(xe,(r,o)=>{t.push(new ie(r,o))}):a.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&t.push(new ie(r,o.value))}),t}function fi(a,t){if(re(t))return a;{const i=Zi(a,t);return i!=null?new Xt(new we(i)):new Xt(a.writeTree_.subtree(t))}}function zf(a){return a.writeTree_.isEmpty()}function Ks(a,t){return hy(pe(),a.writeTree_,t)}function hy(a,t,i){if(t.value!=null)return i.updateChild(a,t.value);{let r=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),r=c.value):i=hy(Pe(a,o),c,i)}),!i.getChild(a).isEmpty()&&r!==null&&(i=i.updateChild(Pe(a,".priority"),r)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(a,t){return my(t,a)}function AC(a,t,i,r,o){U(r>a.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),a.allWrites.push({path:t,snap:i,writeId:r,visible:o}),o&&(a.visibleWrites=cr(a.visibleWrites,t,i)),a.lastWriteId=r}function wC(a,t){for(let i=0;i<a.allWrites.length;i++){const r=a.allWrites[i];if(r.writeId===t)return r}return null}function RC(a,t){const i=a.allWrites.findIndex(p=>p.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const r=a.allWrites[i];a.allWrites.splice(i,1);let o=r.visible,c=!1,h=a.allWrites.length-1;for(;o&&h>=0;){const p=a.allWrites[h];p.visible&&(h>=i&&NC(p,r.path)?o=!1:Yt(r.path,p.path)&&(c=!0)),h--}if(o){if(c)return OC(a),!0;if(r.snap)a.visibleWrites=Og(a.visibleWrites,r.path);else{const p=r.children;Et(p,_=>{a.visibleWrites=Og(a.visibleWrites,Pe(r.path,_))})}return!0}else return!1}function NC(a,t){if(a.snap)return Yt(a.path,t);for(const i in a.children)if(a.children.hasOwnProperty(i)&&Yt(Pe(a.path,i),t))return!0;return!1}function OC(a){a.visibleWrites=dy(a.allWrites,DC,pe()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function DC(a){return a.visible}function dy(a,t,i){let r=Xt.empty();for(let o=0;o<a.length;++o){const c=a[o];if(t(c)){const h=c.path;let p;if(c.snap)Yt(i,h)?(p=gt(i,h),r=cr(r,p,c.snap)):Yt(h,i)&&(p=gt(h,i),r=cr(r,pe(),c.snap.getChild(p)));else if(c.children){if(Yt(i,h))p=gt(i,h),r=Ng(r,p,c.children);else if(Yt(h,i))if(p=gt(h,i),re(p))r=Ng(r,pe(),c.children);else{const _=Ys(c.children,ne(p));if(_){const m=_.getChild(Ae(p));r=cr(r,pe(),m)}}}else throw Zs("WriteRecord should have .snap or .children")}}return r}function py(a,t,i,r,o){if(!r&&!o){const c=Zi(a.visibleWrites,t);if(c!=null)return c;{const h=fi(a.visibleWrites,t);if(zf(h))return i;if(i==null&&!Lf(h,pe()))return null;{const p=i||K.EMPTY_NODE;return Ks(h,p)}}}else{const c=fi(a.visibleWrites,t);if(!o&&zf(c))return i;if(!o&&i==null&&!Lf(c,pe()))return null;{const h=function(m){return(m.visible||o)&&(!r||!~r.indexOf(m.writeId))&&(Yt(m.path,t)||Yt(t,m.path))},p=dy(a.allWrites,h,t),_=i||K.EMPTY_NODE;return Ks(p,_)}}}function MC(a,t,i){let r=K.EMPTY_NODE;const o=Zi(a.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(xe,(c,h)=>{r=r.updateImmediateChild(c,h)}),r;if(i){const c=fi(a.visibleWrites,t);return i.forEachChild(xe,(h,p)=>{const _=Ks(fi(c,new Te(h)),p);r=r.updateImmediateChild(h,_)}),Dg(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const c=fi(a.visibleWrites,t);return Dg(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function IC(a,t,i,r,o){U(r||o,"Either existingEventSnap or existingServerSnap must exist");const c=Pe(t,i);if(Lf(a.visibleWrites,c))return null;{const h=fi(a.visibleWrites,c);return zf(h)?o.getChild(i):Ks(h,o.getChild(i))}}function xC(a,t,i,r){const o=Pe(t,i),c=Zi(a.visibleWrites,o);if(c!=null)return c;if(r.isCompleteForChild(i)){const h=fi(a.visibleWrites,o);return Ks(h,r.getNode().getImmediateChild(i))}else return null}function kC(a,t){return Zi(a.visibleWrites,t)}function UC(a,t,i,r,o,c,h){let p;const _=fi(a.visibleWrites,t),m=Zi(_,pe());if(m!=null)p=m;else if(i!=null)p=Ks(_,i);else return[];if(p=p.withIndex(h),!p.isEmpty()&&!p.isLeafNode()){const y=[],S=h.getCompare(),E=c?p.getReverseIteratorFrom(r,h):p.getIteratorFrom(r,h);let k=E.getNext();for(;k&&y.length<o;)S(k,r)!==0&&y.push(k),k=E.getNext();return y}else return[]}function LC(){return{visibleWrites:Xt.empty(),allWrites:[],lastWriteId:-1}}function ho(a,t,i,r){return py(a.writeTree,a.treePath,t,i,r)}function ph(a,t){return MC(a.writeTree,a.treePath,t)}function Mg(a,t,i,r){return IC(a.writeTree,a.treePath,t,i,r)}function po(a,t){return kC(a.writeTree,Pe(a.treePath,t))}function zC(a,t,i,r,o,c){return UC(a.writeTree,a.treePath,t,i,r,o,c)}function _h(a,t,i){return xC(a.writeTree,a.treePath,t,i)}function _y(a,t){return my(Pe(a.treePath,t),a.writeTree)}function my(a,t){return{treePath:a,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,r=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(r,gr(r,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(r,mr(r,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(r,Xs(r,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(r,gr(r,t.snapshotNode,o.oldSnap));else throw Zs("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{getCompleteChild(t){return null}getChildAfterChild(t,i,r){return null}}const gy=new BC;class mh{constructor(t,i,r=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _h(this.writes_,t,r)}}getChildAfterChild(t,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xi(this.viewCache_),c=zC(this.writes_,o,i,1,r,t);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(a){return{filter:a}}function qC(a,t){U(t.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function VC(a,t,i,r,o){const c=new HC;let h,p;if(i.type===Qt.OVERWRITE){const m=i;m.source.fromUser?h=Hf(a,t,m.path,m.snap,r,o,c):(U(m.source.fromServer,"Unknown source."),p=m.source.tagged||t.serverCache.isFiltered()&&!re(m.path),h=_o(a,t,m.path,m.snap,r,o,p,c))}else if(i.type===Qt.MERGE){const m=i;m.source.fromUser?h=jC(a,t,m.path,m.children,r,o,c):(U(m.source.fromServer,"Unknown source."),p=m.source.tagged||t.serverCache.isFiltered(),h=Bf(a,t,m.path,m.children,r,o,p,c))}else if(i.type===Qt.ACK_USER_WRITE){const m=i;m.revert?h=FC(a,t,m.path,r,o,c):h=YC(a,t,m.path,m.affectedTree,r,o,c)}else if(i.type===Qt.LISTEN_COMPLETE)h=QC(a,t,i.path,r,c);else throw Zs("Unknown operation type: "+i.type);const _=c.getChanges();return GC(t,h,_),{viewCache:h,changes:_}}function GC(a,t,i){const r=t.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),c=Uf(a);(i.length>0||!a.eventCache.isFullyInitialized()||o&&!r.getNode().equals(c)||!r.getNode().getPriority().equals(c.getPriority()))&&i.push(oy(Uf(t)))}}function vy(a,t,i,r,o,c){const h=t.eventCache;if(po(r,i)!=null)return t;{let p,_;if(re(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const m=Xi(t),y=m instanceof K?m:K.EMPTY_NODE,S=ph(r,y);p=a.filter.updateFullNode(t.eventCache.getNode(),S,c)}else{const m=ho(r,Xi(t));p=a.filter.updateFullNode(t.eventCache.getNode(),m,c)}else{const m=ne(i);if(m===".priority"){U(di(i)===1,"Can't have a priority with additional path components");const y=h.getNode();_=t.serverCache.getNode();const S=Mg(r,i,y,_);S!=null?p=a.filter.updatePriority(y,S):p=h.getNode()}else{const y=Ae(i);let S;if(h.isCompleteForChild(m)){_=t.serverCache.getNode();const E=Mg(r,i,h.getNode(),_);E!=null?S=h.getNode().getImmediateChild(m).updateChild(y,E):S=h.getNode().getImmediateChild(m)}else S=_h(r,m,t.serverCache);S!=null?p=a.filter.updateChild(h.getNode(),m,S,y,o,c):p=h.getNode()}}return ur(t,p,h.isFullyInitialized()||re(i),a.filter.filtersNodes())}}function _o(a,t,i,r,o,c,h,p){const _=t.serverCache;let m;const y=h?a.filter:a.filter.getIndexedFilter();if(re(i))m=y.updateFullNode(_.getNode(),r,null);else if(y.filtersNodes()&&!_.isFiltered()){const k=_.getNode().updateChild(i,r);m=y.updateFullNode(_.getNode(),k,null)}else{const k=ne(i);if(!_.isCompleteForPath(i)&&di(i)>1)return t;const L=Ae(i),P=_.getNode().getImmediateChild(k).updateChild(L,r);k===".priority"?m=y.updatePriority(_.getNode(),P):m=y.updateChild(_.getNode(),k,P,L,gy,null)}const S=fy(t,m,_.isFullyInitialized()||re(i),y.filtersNodes()),E=new mh(o,S,c);return vy(a,S,i,o,E,p)}function Hf(a,t,i,r,o,c,h){const p=t.eventCache;let _,m;const y=new mh(o,t,c);if(re(i))m=a.filter.updateFullNode(t.eventCache.getNode(),r,h),_=ur(t,m,!0,a.filter.filtersNodes());else{const S=ne(i);if(S===".priority")m=a.filter.updatePriority(t.eventCache.getNode(),r),_=ur(t,m,p.isFullyInitialized(),p.isFiltered());else{const E=Ae(i),k=p.getNode().getImmediateChild(S);let L;if(re(E))L=r;else{const V=y.getCompleteChild(S);V!=null?$v(E)===".priority"&&V.getChild(ty(E)).isEmpty()?L=V:L=V.updateChild(E,r):L=K.EMPTY_NODE}if(k.equals(L))_=t;else{const V=a.filter.updateChild(p.getNode(),S,L,E,y,h);_=ur(t,V,p.isFullyInitialized(),a.filter.filtersNodes())}}}return _}function Ig(a,t){return a.eventCache.isCompleteForChild(t)}function jC(a,t,i,r,o,c,h){let p=t;return r.foreach((_,m)=>{const y=Pe(i,_);Ig(t,ne(y))&&(p=Hf(a,p,y,m,o,c,h))}),r.foreach((_,m)=>{const y=Pe(i,_);Ig(t,ne(y))||(p=Hf(a,p,y,m,o,c,h))}),p}function xg(a,t,i){return i.foreach((r,o)=>{t=t.updateChild(r,o)}),t}function Bf(a,t,i,r,o,c,h,p){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let _=t,m;re(i)?m=r:m=new we(null).setTree(i,r);const y=t.serverCache.getNode();return m.children.inorderTraversal((S,E)=>{if(y.hasChild(S)){const k=t.serverCache.getNode().getImmediateChild(S),L=xg(a,k,E);_=_o(a,_,new Te(S),L,o,c,h,p)}}),m.children.inorderTraversal((S,E)=>{const k=!t.serverCache.isCompleteForChild(S)&&E.value===null;if(!y.hasChild(S)&&!k){const L=t.serverCache.getNode().getImmediateChild(S),V=xg(a,L,E);_=_o(a,_,new Te(S),V,o,c,h,p)}}),_}function YC(a,t,i,r,o,c,h){if(po(o,i)!=null)return t;const p=t.serverCache.isFiltered(),_=t.serverCache;if(r.value!=null){if(re(i)&&_.isFullyInitialized()||_.isCompleteForPath(i))return _o(a,t,i,_.getNode().getChild(i),o,c,p,h);if(re(i)){let m=new we(null);return _.getNode().forEachChild(Ps,(y,S)=>{m=m.set(new Te(y),S)}),Bf(a,t,i,m,o,c,p,h)}else return t}else{let m=new we(null);return r.foreach((y,S)=>{const E=Pe(i,y);_.isCompleteForPath(E)&&(m=m.set(y,_.getNode().getChild(E)))}),Bf(a,t,i,m,o,c,p,h)}}function QC(a,t,i,r,o){const c=t.serverCache,h=fy(t,c.getNode(),c.isFullyInitialized()||re(i),c.isFiltered());return vy(a,h,i,r,gy,o)}function FC(a,t,i,r,o,c){let h;if(po(r,i)!=null)return t;{const p=new mh(r,t,o),_=t.eventCache.getNode();let m;if(re(i)||ne(i)===".priority"){let y;if(t.serverCache.isFullyInitialized())y=ho(r,Xi(t));else{const S=t.serverCache.getNode();U(S instanceof K,"serverChildren would be complete if leaf node"),y=ph(r,S)}y=y,m=a.filter.updateFullNode(_,y,c)}else{const y=ne(i);let S=_h(r,y,t.serverCache);S==null&&t.serverCache.isCompleteForChild(y)&&(S=_.getImmediateChild(y)),S!=null?m=a.filter.updateChild(_,y,S,Ae(i),p,c):t.eventCache.getNode().hasChild(y)?m=a.filter.updateChild(_,y,K.EMPTY_NODE,Ae(i),p,c):m=_,m.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=ho(r,Xi(t)),h.isLeafNode()&&(m=a.filter.updateFullNode(m,h,c)))}return h=t.serverCache.isFullyInitialized()||po(r,pe())!=null,ur(t,m,h,a.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new uh(r.getIndex()),c=dC(r);this.processor_=PC(c);const h=i.serverCache,p=i.eventCache,_=o.updateFullNode(K.EMPTY_NODE,h.getNode(),null),m=c.updateFullNode(K.EMPTY_NODE,p.getNode(),null),y=new Fi(_,h.isFullyInitialized(),o.filtersNodes()),S=new Fi(m,p.isFullyInitialized(),c.filtersNodes());this.viewCache_=Do(S,y),this.eventGenerator_=new EC(this.query_)}get query(){return this.query_}}function KC(a){return a.viewCache_.serverCache.getNode()}function ZC(a,t){const i=Xi(a.viewCache_);return i&&(a.query._queryParams.loadsAllData()||!re(t)&&!i.getImmediateChild(ne(t)).isEmpty())?i.getChild(t):null}function kg(a){return a.eventRegistrations_.length===0}function WC(a,t){a.eventRegistrations_.push(t)}function Ug(a,t,i){const r=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=a.query._path;a.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&r.push(h)})}if(t){let o=[];for(let c=0;c<a.eventRegistrations_.length;++c){const h=a.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(a.eventRegistrations_.slice(c+1));break}}a.eventRegistrations_=o}else a.eventRegistrations_=[];return r}function Lg(a,t,i,r){t.type===Qt.MERGE&&t.source.queryId!==null&&(U(Xi(a.viewCache_),"We should always have a full cache before handling merges"),U(Uf(a.viewCache_),"Missing event cache, even though we have a server cache"));const o=a.viewCache_,c=VC(a.processor_,o,t,i,r);return qC(a.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=c.viewCache,yy(a,c.changes,c.viewCache.eventCache.getNode(),null)}function JC(a,t){const i=a.viewCache_.eventCache,r=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(xe,(c,h)=>{r.push(Xs(c,h))}),i.isFullyInitialized()&&r.push(oy(i.getNode())),yy(a,r,i.getNode(),t)}function yy(a,t,i,r){const o=r?[r]:a.eventRegistrations_;return SC(a.eventGenerator_,t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;class $C{constructor(){this.views=new Map}}function eA(a){U(!mo,"__referenceConstructor has already been defined"),mo=a}function tA(){return U(mo,"Reference.ts has not been loaded"),mo}function nA(a){return a.views.size===0}function gh(a,t,i,r){const o=t.source.queryId;if(o!==null){const c=a.views.get(o);return U(c!=null,"SyncTree gave us an op for an invalid query."),Lg(c,t,i,r)}else{let c=[];for(const h of a.views.values())c=c.concat(Lg(h,t,i,r));return c}}function iA(a,t,i,r,o){const c=t._queryIdentifier,h=a.views.get(c);if(!h){let p=ho(i,o?r:null),_=!1;p?_=!0:r instanceof K?(p=ph(i,r),_=!1):(p=K.EMPTY_NODE,_=!1);const m=Do(new Fi(p,_,!1),new Fi(r,o,!1));return new XC(t,m)}return h}function sA(a,t,i,r,o,c){const h=iA(a,t,r,o,c);return a.views.has(t._queryIdentifier)||a.views.set(t._queryIdentifier,h),WC(h,i),JC(h,i)}function aA(a,t,i,r){const o=t._queryIdentifier,c=[];let h=[];const p=pi(a);if(o==="default")for(const[_,m]of a.views.entries())h=h.concat(Ug(m,i,r)),kg(m)&&(a.views.delete(_),m.query._queryParams.loadsAllData()||c.push(m.query));else{const _=a.views.get(o);_&&(h=h.concat(Ug(_,i,r)),kg(_)&&(a.views.delete(o),_.query._queryParams.loadsAllData()||c.push(_.query)))}return p&&!pi(a)&&c.push(new(tA())(t._repo,t._path)),{removed:c,events:h}}function Ey(a){const t=[];for(const i of a.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function qs(a,t){let i=null;for(const r of a.views.values())i=i||ZC(r,t);return i}function Sy(a,t){if(t._queryParams.loadsAllData())return Mo(a);{const r=t._queryIdentifier;return a.views.get(r)}}function by(a,t){return Sy(a,t)!=null}function pi(a){return Mo(a)!=null}function Mo(a){for(const t of a.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go;function rA(a){U(!go,"__referenceConstructor has already been defined"),go=a}function lA(){return U(go,"Reference.ts has not been loaded"),go}let oA=1;class zg{constructor(t){this.listenProvider_=t,this.syncPointTree_=new we(null),this.pendingWriteTree_=LC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ty(a,t,i,r,o){return AC(a.pendingWriteTree_,t,i,r,o),o?Rr(a,new Qi(cy(),t,i)):[]}function Vi(a,t,i=!1){const r=wC(a.pendingWriteTree_,t);if(RC(a.pendingWriteTree_,t)){let c=new we(null);return r.snap!=null?c=c.set(pe(),!0):Et(r.children,h=>{c=c.set(new Te(h),!0)}),Rr(a,new fo(r.path,c,i))}else return[]}function Io(a,t,i){return Rr(a,new Qi(fh(),t,i))}function uA(a,t,i){const r=we.fromObject(i);return Rr(a,new Er(fh(),t,r))}function cA(a,t){return Rr(a,new yr(fh(),t))}function fA(a,t,i){const r=yh(a,i);if(r){const o=Eh(r),c=o.path,h=o.queryId,p=gt(c,t),_=new yr(hh(h),p);return Sh(a,c,_)}else return[]}function Pf(a,t,i,r,o=!1){const c=t._path,h=a.syncPointTree_.get(c);let p=[];if(h&&(t._queryIdentifier==="default"||by(h,t))){const _=aA(h,t,i,r);nA(h)&&(a.syncPointTree_=a.syncPointTree_.remove(c));const m=_.removed;if(p=_.events,!o){const y=m.findIndex(E=>E._queryParams.loadsAllData())!==-1,S=a.syncPointTree_.findOnPath(c,(E,k)=>pi(k));if(y&&!S){const E=a.syncPointTree_.subtree(c);if(!E.isEmpty()){const k=pA(E);for(let L=0;L<k.length;++L){const V=k[L],P=V.query,ue=wy(a,V);a.listenProvider_.startListening(fr(P),vo(a,P),ue.hashFn,ue.onComplete)}}}!S&&m.length>0&&!r&&(y?a.listenProvider_.stopListening(fr(t),null):m.forEach(E=>{const k=a.queryToTagMap.get(xo(E));a.listenProvider_.stopListening(fr(E),k)}))}_A(a,m)}return p}function hA(a,t,i,r){const o=yh(a,r);if(o!=null){const c=Eh(o),h=c.path,p=c.queryId,_=gt(h,t),m=new Qi(hh(p),_,i);return Sh(a,h,m)}else return[]}function dA(a,t,i,r){const o=yh(a,r);if(o){const c=Eh(o),h=c.path,p=c.queryId,_=gt(h,t),m=we.fromObject(i),y=new Er(hh(p),_,m);return Sh(a,h,y)}else return[]}function Hg(a,t,i,r=!1){const o=t._path;let c=null,h=!1;a.syncPointTree_.foreachOnPath(o,(E,k)=>{const L=gt(E,o);c=c||qs(k,L),h=h||pi(k)});let p=a.syncPointTree_.get(o);p?(h=h||pi(p),c=c||qs(p,pe())):(p=new $C,a.syncPointTree_=a.syncPointTree_.set(o,p));let _;c!=null?_=!0:(_=!1,c=K.EMPTY_NODE,a.syncPointTree_.subtree(o).foreachChild((k,L)=>{const V=qs(L,pe());V&&(c=c.updateImmediateChild(k,V))}));const m=by(p,t);if(!m&&!t._queryParams.loadsAllData()){const E=xo(t);U(!a.queryToTagMap.has(E),"View does not exist, but we have a tag");const k=mA();a.queryToTagMap.set(E,k),a.tagToQueryMap.set(k,E)}const y=dh(a.pendingWriteTree_,o);let S=sA(p,t,i,y,c,_);if(!m&&!h&&!r){const E=Sy(p,t);S=S.concat(gA(a,t,E))}return S}function vh(a,t,i){const o=a.pendingWriteTree_,c=a.syncPointTree_.findOnPath(t,(h,p)=>{const _=gt(h,t),m=qs(p,_);if(m)return m});return py(o,t,c,i,!0)}function Rr(a,t){return Cy(t,a.syncPointTree_,null,dh(a.pendingWriteTree_,pe()))}function Cy(a,t,i,r){if(re(a.path))return Ay(a,t,i,r);{const o=t.get(pe());i==null&&o!=null&&(i=qs(o,pe()));let c=[];const h=ne(a.path),p=a.operationForChild(h),_=t.children.get(h);if(_&&p){const m=i?i.getImmediateChild(h):null,y=_y(r,h);c=c.concat(Cy(p,_,m,y))}return o&&(c=c.concat(gh(o,a,r,i))),c}}function Ay(a,t,i,r){const o=t.get(pe());i==null&&o!=null&&(i=qs(o,pe()));let c=[];return t.children.inorderTraversal((h,p)=>{const _=i?i.getImmediateChild(h):null,m=_y(r,h),y=a.operationForChild(h);y&&(c=c.concat(Ay(y,p,_,m)))}),o&&(c=c.concat(gh(o,a,r,i))),c}function wy(a,t){const i=t.query,r=vo(a,i);return{hashFn:()=>(KC(t)||K.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?fA(a,i._path,r):cA(a,i._path);{const c=h1(o,i);return Pf(a,i,null,c)}}}}function vo(a,t){const i=xo(t);return a.queryToTagMap.get(i)}function xo(a){return a._path.toString()+"$"+a._queryIdentifier}function yh(a,t){return a.tagToQueryMap.get(t)}function Eh(a){const t=a.indexOf("$");return U(t!==-1&&t<a.length-1,"Bad queryKey."),{queryId:a.substr(t+1),path:new Te(a.substr(0,t))}}function Sh(a,t,i){const r=a.syncPointTree_.get(t);U(r,"Missing sync point for query tag that we're tracking");const o=dh(a.pendingWriteTree_,t);return gh(r,i,o,null)}function pA(a){return a.fold((t,i,r)=>{if(i&&pi(i))return[Mo(i)];{let o=[];return i&&(o=Ey(i)),Et(r,(c,h)=>{o=o.concat(h)}),o}})}function fr(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(lA())(a._repo,a._path):a}function _A(a,t){for(let i=0;i<t.length;++i){const r=t[i];if(!r._queryParams.loadsAllData()){const o=xo(r),c=a.queryToTagMap.get(o);a.queryToTagMap.delete(o),a.tagToQueryMap.delete(c)}}}function mA(){return oA++}function gA(a,t,i){const r=t._path,o=vo(a,t),c=wy(a,i),h=a.listenProvider_.startListening(fr(t),o,c.hashFn,c.onComplete),p=a.syncPointTree_.subtree(r);if(o)U(!pi(p.value),"If we're adding a query, it shouldn't be shadowed");else{const _=p.fold((m,y,S)=>{if(!re(m)&&y&&pi(y))return[Mo(y).query];{let E=[];return y&&(E=E.concat(Ey(y).map(k=>k.query))),Et(S,(k,L)=>{E=E.concat(L)}),E}});for(let m=0;m<_.length;++m){const y=_[m];a.listenProvider_.stopListening(fr(y),vo(a,y))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new bh(i)}node(){return this.node_}}class Th{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=Pe(this.path_,t);return new Th(this.syncTree_,i)}node(){return vh(this.syncTree_,this.path_)}}const vA=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},Bg=function(a,t,i){if(!a||typeof a!="object")return a;if(U(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return yA(a[".sv"],t,i);if(typeof a[".sv"]=="object")return EA(a[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},yA=function(a,t,i){switch(a){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+a)}},EA=function(a,t,i){a.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const r=a.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},SA=function(a,t,i,r){return Ch(t,new Th(i,a),r)},Ry=function(a,t,i){return Ch(a,new bh(t),i)};function Ch(a,t,i){const r=a.getPriority().val(),o=Bg(r,t.getImmediateChild(".priority"),i);let c;if(a.isLeafNode()){const h=a,p=Bg(h.getValue(),t,i);return p!==h.getValue()||o!==h.getPriority().val()?new Ye(p,$e(o)):a}else{const h=a;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new Ye(o))),h.forEachChild(xe,(p,_)=>{const m=Ch(_,t.getImmediateChild(p),i);m!==_&&(c=c.updateImmediateChild(p,m))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t="",i=null,r={children:{},childCount:0}){this.name=t,this.parent=i,this.node=r}}function wh(a,t){let i=t instanceof Te?t:new Te(t),r=a,o=ne(i);for(;o!==null;){const c=Ys(r.node.children,o)||{children:{},childCount:0};r=new Ah(o,r,c),i=Ae(i),o=ne(i)}return r}function ta(a){return a.node.value}function Ny(a,t){a.node.value=t,qf(a)}function Oy(a){return a.node.childCount>0}function bA(a){return ta(a)===void 0&&!Oy(a)}function ko(a,t){Et(a.node.children,(i,r)=>{t(new Ah(i,a,r))})}function Dy(a,t,i,r){i&&t(a),ko(a,o=>{Dy(o,t,!0)})}function TA(a,t,i){let r=a.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Nr(a){return new Te(a.parent===null?a.name:Nr(a.parent)+"/"+a.name)}function qf(a){a.parent!==null&&CA(a.parent,a.name,a)}function CA(a,t,i){const r=bA(i),o=Dn(a.node.children,t);r&&o?(delete a.node.children[t],a.node.childCount--,qf(a)):!r&&!o&&(a.node.children[t]=i.node,a.node.childCount++,qf(a))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=/[\[\].#$\/\u0000-\u001F\u007F]/,wA=/[\[\].#$\u0000-\u001F\u007F]/,yf=10*1024*1024,My=function(a){return typeof a=="string"&&a.length!==0&&!AA.test(a)},Iy=function(a){return typeof a=="string"&&a.length!==0&&!wA.test(a)},RA=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),Iy(a)},NA=function(a,t,i,r){Rh(Jf(a,"value"),t,i)},Rh=function(a,t,i){const r=i instanceof Te?new Y1(i,a):i;if(t===void 0)throw new Error(a+"contains undefined "+Bi(r));if(typeof t=="function")throw new Error(a+"contains a function "+Bi(r)+" with contents = "+t.toString());if(Iv(t))throw new Error(a+"contains "+t.toString()+" "+Bi(r));if(typeof t=="string"&&t.length>yf/3&&No(t)>yf)throw new Error(a+"contains a string greater than "+yf+" utf8 bytes "+Bi(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(Et(t,(h,p)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!My(h)))throw new Error(a+" contains an invalid key ("+h+") "+Bi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Q1(r,h),Rh(a,p,r),F1(r)}),o&&c)throw new Error(a+' contains ".value" child '+Bi(r)+" in addition to actual children.")}},xy=function(a,t,i,r){if(!Iy(i))throw new Error(Jf(a,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OA=function(a,t,i,r){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),xy(a,t,i)},DA=function(a,t){if(ne(t)===".info")throw new Error(a+" failed = Can't modify data under /.info/")},MA=function(a,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!My(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!RA(i))throw new Error(Jf(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nh(a,t){let i=null;for(let r=0;r<t.length;r++){const o=t[r],c=o.getPath();i!==null&&!rh(c,i.path)&&(a.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&a.eventLists_.push(i)}function ky(a,t,i){Nh(a,i),Uy(a,r=>rh(r,t))}function Rn(a,t,i){Nh(a,i),Uy(a,r=>Yt(r,t)||Yt(t,r))}function Uy(a,t){a.recursionDepth_++;let i=!0;for(let r=0;r<a.eventLists_.length;r++){const o=a.eventLists_[r];if(o){const c=o.path;t(c)?(xA(a.eventLists_[r]),a.eventLists_[r]=null):i=!1}}i&&(a.eventLists_=[]),a.recursionDepth_--}function xA(a){for(let t=0;t<a.events.length;t++){const i=a.events[t];if(i!==null){a.events[t]=null;const r=i.getEventRunner();lr&&rt("event: "+i.toString()),ea(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="repo_interrupt",UA=25;class LA{constructor(t,i,r,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=co(),this.transactionQueueTree_=new Ah,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zA(a,t,i){if(a.stats_=sh(a.repoInfo_),a.forceRestClient_||m1())a.server_=new uo(a.repoInfo_,(r,o,c,h)=>{Pg(a,r,o,c,h)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>qg(a,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}a.persistentConnection_=new Cn(a.repoInfo_,t,(r,o,c,h)=>{Pg(a,r,o,c,h)},r=>{qg(a,r)},r=>{BA(a,r)},a.authTokenProvider_,a.appCheckProvider_,i),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(r=>{a.server_.refreshAuthToken(r)}),a.appCheckProvider_.addTokenChangeListener(r=>{a.server_.refreshAppCheckToken(r.token)}),a.statsReporter_=S1(a.repoInfo_,()=>new yC(a.stats_,a.server_)),a.infoData_=new pC,a.infoSyncTree_=new zg({startListening:(r,o,c,h)=>{let p=[];const _=a.infoData_.getNode(r._path);return _.isEmpty()||(p=Io(a.infoSyncTree_,r._path,_),setTimeout(()=>{h("ok")},0)),p},stopListening:()=>{}}),Dh(a,"connected",!1),a.serverSyncTree_=new zg({startListening:(r,o,c,h)=>(a.server_.listen(r,c,o,(p,_)=>{const m=h(p,_);Rn(a.eventQueue_,r._path,m)}),[]),stopListening:(r,o)=>{a.server_.unlisten(r,o)}})}function HA(a){const i=a.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function Oh(a){return vA({timestamp:HA(a)})}function Pg(a,t,i,r,o){a.dataUpdateCount++;const c=new Te(t);i=a.interceptServerDataCallback_?a.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(r){const _=so(i,m=>$e(m));h=dA(a.serverSyncTree_,c,_,o)}else{const _=$e(i);h=hA(a.serverSyncTree_,c,_,o)}else if(r){const _=so(i,m=>$e(m));h=uA(a.serverSyncTree_,c,_)}else{const _=$e(i);h=Io(a.serverSyncTree_,c,_)}let p=c;h.length>0&&(p=Uo(a,c)),Rn(a.eventQueue_,p,h)}function qg(a,t){Dh(a,"connected",t),t===!1&&qA(a)}function BA(a,t){Et(t,(i,r)=>{Dh(a,i,r)})}function Dh(a,t,i){const r=new Te("/.info/"+t),o=$e(i);a.infoData_.updateSnapshot(r,o);const c=Io(a.infoSyncTree_,r,o);Rn(a.eventQueue_,r,c)}function Ly(a){return a.nextWriteId_++}function PA(a,t,i,r,o){Mh(a,"set",{path:t.toString(),value:i,priority:r});const c=Oh(a),h=$e(i,r),p=vh(a.serverSyncTree_,t),_=Ry(h,p,c),m=Ly(a),y=Ty(a.serverSyncTree_,t,_,m,!0);Nh(a.eventQueue_,y),a.server_.put(t.toString(),h.val(!0),(E,k)=>{const L=E==="ok";L||yt("set at "+t+" failed: "+E);const V=Vi(a.serverSyncTree_,m,!L);Rn(a.eventQueue_,t,V),YA(a,o,E,k)});const S=qy(a,t);Uo(a,S),Rn(a.eventQueue_,S,[])}function qA(a){Mh(a,"onDisconnectEvents");const t=Oh(a),i=co();kf(a.onDisconnect_,pe(),(o,c)=>{const h=SA(o,c,a.serverSyncTree_,t);uy(i,o,h)});let r=[];kf(i,pe(),(o,c)=>{r=r.concat(Io(a.serverSyncTree_,o,c));const h=qy(a,o);Uo(a,h)}),a.onDisconnect_=co(),Rn(a.eventQueue_,pe(),r)}function VA(a,t,i){let r;ne(t._path)===".info"?r=Hg(a.infoSyncTree_,t,i):r=Hg(a.serverSyncTree_,t,i),ky(a.eventQueue_,t._path,r)}function GA(a,t,i){let r;ne(t._path)===".info"?r=Pf(a.infoSyncTree_,t,i):r=Pf(a.serverSyncTree_,t,i),ky(a.eventQueue_,t._path,r)}function jA(a){a.persistentConnection_&&a.persistentConnection_.interrupt(kA)}function Mh(a,...t){let i="";a.persistentConnection_&&(i=a.persistentConnection_.id+":"),rt(i,...t)}function YA(a,t,i,r){t&&ea(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;r&&(c+=": "+r);const h=new Error(c);h.code=o,t(h)}})}function zy(a,t,i){return vh(a.serverSyncTree_,t,i)||K.EMPTY_NODE}function Ih(a,t=a.transactionQueueTree_){if(t||Lo(a,t),ta(t)){const i=By(a,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&QA(a,Nr(t),i)}else Oy(t)&&ko(t,i=>{Ih(a,i)})}function QA(a,t,i){const r=i.map(m=>m.currentWriteId),o=zy(a,t,r);let c=o;const h=o.hash();for(let m=0;m<i.length;m++){const y=i[m];U(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const S=gt(t,y.path);c=c.updateChild(S,y.currentOutputSnapshotRaw)}const p=c.val(!0),_=t;a.server_.put(_.toString(),p,m=>{Mh(a,"transaction put response",{path:_.toString(),status:m});let y=[];if(m==="ok"){const S=[];for(let E=0;E<i.length;E++)i[E].status=2,y=y.concat(Vi(a.serverSyncTree_,i[E].currentWriteId)),i[E].onComplete&&S.push(()=>i[E].onComplete(null,!0,i[E].currentOutputSnapshotResolved)),i[E].unwatcher();Lo(a,wh(a.transactionQueueTree_,t)),Ih(a,a.transactionQueueTree_),Rn(a.eventQueue_,t,y);for(let E=0;E<S.length;E++)ea(S[E])}else{if(m==="datastale")for(let S=0;S<i.length;S++)i[S].status===3?i[S].status=4:i[S].status=0;else{yt("transaction at "+_.toString()+" failed: "+m);for(let S=0;S<i.length;S++)i[S].status=4,i[S].abortReason=m}Uo(a,t)}},h)}function Uo(a,t){const i=Hy(a,t),r=Nr(i),o=By(a,i);return FA(a,o,r),r}function FA(a,t,i){if(t.length===0)return;const r=[];let o=[];const h=t.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<t.length;p++){const _=t[p],m=gt(i,_.path);let y=!1,S;if(U(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)y=!0,S=_.abortReason,o=o.concat(Vi(a.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=UA)y=!0,S="maxretry",o=o.concat(Vi(a.serverSyncTree_,_.currentWriteId,!0));else{const E=zy(a,_.path,h);_.currentInputSnapshot=E;const k=t[p].update(E.val());if(k!==void 0){Rh("transaction failed: Data returned ",k,_.path);let L=$e(k);typeof k=="object"&&k!=null&&Dn(k,".priority")||(L=L.updatePriority(E.getPriority()));const P=_.currentWriteId,ue=Oh(a),le=Ry(L,E,ue);_.currentOutputSnapshotRaw=L,_.currentOutputSnapshotResolved=le,_.currentWriteId=Ly(a),h.splice(h.indexOf(P),1),o=o.concat(Ty(a.serverSyncTree_,_.path,le,_.currentWriteId,_.applyLocally)),o=o.concat(Vi(a.serverSyncTree_,P,!0))}else y=!0,S="nodata",o=o.concat(Vi(a.serverSyncTree_,_.currentWriteId,!0))}Rn(a.eventQueue_,i,o),o=[],y&&(t[p].status=2,function(E){setTimeout(E,Math.floor(0))}(t[p].unwatcher),t[p].onComplete&&(S==="nodata"?r.push(()=>t[p].onComplete(null,!1,t[p].currentInputSnapshot)):r.push(()=>t[p].onComplete(new Error(S),!1,null))))}Lo(a,a.transactionQueueTree_);for(let p=0;p<r.length;p++)ea(r[p]);Ih(a,a.transactionQueueTree_)}function Hy(a,t){let i,r=a.transactionQueueTree_;for(i=ne(t);i!==null&&ta(r)===void 0;)r=wh(r,i),t=Ae(t),i=ne(t);return r}function By(a,t){const i=[];return Py(a,t,i),i.sort((r,o)=>r.order-o.order),i}function Py(a,t,i){const r=ta(t);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);ko(t,o=>{Py(a,o,i)})}function Lo(a,t){const i=ta(t);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,Ny(t,i.length>0?i:void 0)}ko(t,r=>{Lo(a,r)})}function qy(a,t){const i=Nr(Hy(a,t)),r=wh(a.transactionQueueTree_,t);return TA(r,o=>{Ef(a,o)}),Ef(a,r),Dy(r,o=>{Ef(a,o)}),i}function Ef(a,t){const i=ta(t);if(i){const r=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(Vi(a.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&r.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?Ny(t,void 0):i.length=c+1,Rn(a.eventQueue_,Nr(t),o);for(let h=0;h<r.length;h++)ea(r[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(a){let t="";const i=a.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function KA(a){const t={};a.charAt(0)==="?"&&(a=a.substring(1));for(const i of a.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):yt(`Invalid query segment '${i}' in query '${a}'`)}return t}const Vg=function(a,t){const i=ZA(a),r=i.namespace;i.domain==="firebase.com"&&wn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||l1();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new jv(i.host,i.secure,r,o,t,"",r!==i.subdomain),path:new Te(i.pathString)}},ZA=function(a){let t="",i="",r="",o="",c="",h=!0,p="https",_=443;if(typeof a=="string"){let m=a.indexOf("//");m>=0&&(p=a.substring(0,m-1),a=a.substring(m+2));let y=a.indexOf("/");y===-1&&(y=a.length);let S=a.indexOf("?");S===-1&&(S=a.length),t=a.substring(0,Math.min(y,S)),y<S&&(o=XA(a.substring(y,S)));const E=KA(a.substring(Math.min(a.length,S)));m=t.indexOf(":"),m>=0?(h=p==="https"||p==="wss",_=parseInt(t.substring(m+1),10)):m=t.length;const k=t.slice(0,m);if(k.toLowerCase()==="localhost")i="localhost";else if(k.split(".").length<=2)i=k;else{const L=t.indexOf(".");r=t.substring(0,L).toLowerCase(),i=t.substring(L+1),c=r}"ns"in E&&(c=E.ns)}return{host:t,port:_,domain:i,subdomain:r,secure:h,scheme:p,pathString:o,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(t,i,r,o){this.eventType=t,this.eventRegistration=i,this.snapshot=r,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class JA{constructor(t,i,r){this.eventRegistration=t,this.error=i,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,i,r,o){this._repo=t,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return re(this._path)?null:$v(this._path)}get ref(){return new gi(this._repo,this._path)}get _queryIdentifier(){const t=wg(this._queryParams),i=nh(t);return i==="{}"?"default":i}get _queryObject(){return wg(this._queryParams)}isEqual(t){if(t=Kt(t),!(t instanceof xh))return!1;const i=this._repo===t._repo,r=rh(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+j1(this._path)}}class gi extends xh{constructor(t,i){super(t,i,new ch,!1)}get parent(){const t=ty(this._path);return t===null?null:new gi(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class yo{constructor(t,i,r){this._node=t,this.ref=i,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Te(t),r=Vf(this.ref,t);return new yo(this._node.getChild(i),r,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>t(new yo(o,Vf(this.ref,r),xe)))}hasChild(t){const i=new Te(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gg(a,t){return a=Kt(a),a._checkNotDeleted("ref"),Vf(a._root,t)}function Vf(a,t){return a=Kt(a),ne(a._path)===null?OA("child","path",t):xy("child","path",t),new gi(a._repo,Pe(a._path,t))}function ew(a,t){a=Kt(a),DA("set",a._path),NA("set",t,a._path);const i=new wo;return PA(a._repo,a._path,t,null,i.wrapCallback(()=>{})),i.promise}class kh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const r=i._queryParams.getIndex();return new WA("value",this,new yo(t.snapshotNode,new gi(i._repo,i._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new JA(this,t,i):null}matches(t){return t instanceof kh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tw(a,t,i,r,o){const c=new $A(i,void 0),h=new kh(c);return VA(a._repo,a,h),()=>GA(a._repo,a,h)}function nw(a,t,i,r){return tw(a,"value",t)}eA(gi);rA(gi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="FIREBASE_DATABASE_EMULATOR_HOST",Gf={};let sw=!1;function aw(a,t,i,r){const o=t.lastIndexOf(":"),c=t.substring(0,o),h=br(c);a.repoInfo_=new jv(t,h,a.repoInfo_.namespace,a.repoInfo_.webSocketOnly,a.repoInfo_.nodeAdmin,a.repoInfo_.persistenceKey,a.repoInfo_.includeNamespaceInQueryParams,!0,i),r&&(a.authTokenProvider_=r)}function rw(a,t,i,r,o){let c=r||a.options.databaseURL;c===void 0&&(a.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",a.options.projectId),c=`${a.options.projectId}-default-rtdb.firebaseio.com`);let h=Vg(c,o),p=h.repoInfo,_;typeof process<"u"&&og&&(_=og[iw]),_?(c=`http://${_}?ns=${p.namespace}`,h=Vg(c,o),p=h.repoInfo):h.repoInfo.secure;const m=new v1(a.name,a.options,t);MA("Invalid Firebase Database URL",h),re(h.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=ow(p,a,m,new g1(a,i));return new uw(y,a)}function lw(a,t){const i=Gf[t];(!i||i[a.key]!==a)&&wn(`Database ${t}(${a.repoInfo_}) has already been deleted.`),jA(a),delete i[a.key]}function ow(a,t,i,r){let o=Gf[t.name];o||(o={},Gf[t.name]=o);let c=o[a.toURLString()];return c&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new LA(a,sw,i,r),o[a.toURLString()]=c,c}class uw{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0,Ro("Database",this._repo.repoInfo_.emulatorOptions!==null)),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gi(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&wn("Cannot call "+t+" on a deleted database.")}}function cw(a=wv(),t){const i=th(a,"database").getImmediate({identifier:t});if(!i._instanceStarted){const r=Ab("database");r&&fw(i,...r)}return i}function fw(a,t,i,r={}){a=Kt(a),a._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=a._repoInternal;if(a._instanceStarted){if(o===a._repoInternal.repoInfo_.host&&Gi(r,c.repoInfo_.emulatorOptions))return;wn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)r.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new Zl(Zl.OWNER);else if(r.mockUserToken){const p=typeof r.mockUserToken=="string"?r.mockUserToken:wb(r.mockUserToken,a.app.options.projectId);h=new Zl(p)}br(t)&&(Ev(t),Ro("Database",!0)),aw(c,o,r,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(a){t1(Js),Qs(new ji("database",(t,{instanceIdentifier:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return rw(r,o,c,i)},"PUBLIC").setMultipleInstances(!0)),ci(ug,cg,a),ci(ug,cg,"esm2017")}Cn.prototype.simpleListen=function(a,t){this.sendRequest("q",{p:a},t)};Cn.prototype.echo=function(a,t){this.sendRequest("echo",{d:a},t)};hw();function Uh(a,t){var i={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&t.indexOf(r)<0&&(i[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(a);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(a,r[o])&&(i[r[o]]=a[r[o]]);return i}function Vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dw=Vy,Gy=new Tr("auth","Firebase",Vy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new $f("@firebase/auth");function pw(a,...t){Eo.logLevel<=Ee.WARN&&Eo.warn(`Auth (${Js}): ${a}`,...t)}function Wl(a,...t){Eo.logLevel<=Ee.ERROR&&Eo.error(`Auth (${Js}): ${a}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(a,...t){throw Lh(a,...t)}function nn(a,...t){return Lh(a,...t)}function jy(a,t,i){const r=Object.assign(Object.assign({},dw()),{[t]:i});return new Tr("auth","Firebase",r).create(t,{appName:a.name})}function hi(a){return jy(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lh(a,...t){if(typeof a!="string"){const i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=a.name),a._errorFactory.create(i,...r)}return Gy.create(a,...t)}function Z(a,t,...i){if(!a)throw Lh(t,...i)}function bn(a){const t="INTERNAL ASSERTION FAILED: "+a;throw Wl(t),new Error(t)}function On(a,t){a||bn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(){var a;return typeof self<"u"&&((a=self.location)===null||a===void 0?void 0:a.href)||""}function _w(){return jg()==="http:"||jg()==="https:"}function jg(){var a;return typeof self<"u"&&((a=self.location)===null||a===void 0?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_w()||Db()||"connection"in navigator)?navigator.onLine:!0}function gw(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,i){this.shortDelay=t,this.longDelay=i,On(i>t,"Short delay should be less than long delay!"),this.isMobile=Wf()||Sv()}get(){return mw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(a,t){On(a.emulator,"Emulator should always be set here");const{url:i}=a.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{static initialize(t,i,r){this.fetchImpl=t,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ew=new Or(3e4,6e4);function zo(a,t){return a.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:a.tenantId}):t}async function na(a,t,i,r,o={}){return Qy(a,o,async()=>{let c={},h={};r&&(t==="GET"?h=r:c={body:JSON.stringify(r)});const p=Ws(Object.assign({key:a.config.apiKey},h)).slice(1),_=await a._getAdditionalHeaders();_["Content-Type"]="application/json",a.languageCode&&(_["X-Firebase-Locale"]=a.languageCode);const m=Object.assign({method:t,headers:_},c);return Ob()||(m.referrerPolicy="no-referrer"),a.emulatorConfig&&br(a.emulatorConfig.host)&&(m.credentials="include"),Yy.fetch()(await Xy(a,a.config.apiHost,i,p),m)})}async function Qy(a,t,i){a._canInitEmulator=!1;const r=Object.assign(Object.assign({},vw),t);try{const o=new Sw(a),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Kl(a,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[_,m]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kl(a,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw Kl(a,"email-already-in-use",h);if(_==="USER_DISABLED")throw Kl(a,"user-disabled",h);const y=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw jy(a,y,m);Nn(a,y)}}catch(o){if(o instanceof mi)throw o;Nn(a,"network-request-failed",{message:String(o)})}}async function Fy(a,t,i,r,o={}){const c=await na(a,t,i,r,o);return"mfaPendingCredential"in c&&Nn(a,"multi-factor-auth-required",{_serverResponse:c}),c}async function Xy(a,t,i,r){const o=`${t}${i}?${r}`,c=a,h=c.config.emulator?zh(a.config,o):`${a.config.apiScheme}://${o}`;return yw.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class Sw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),Ew.get())})}}function Kl(a,t,i){const r={appName:a.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=nn(a,t,r);return o.customData._tokenResponse=i,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(a,t){return na(a,"POST","/v1/accounts:delete",t)}async function So(a,t){return na(a,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(a){if(a)try{const t=new Date(Number(a));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Tw(a,t=!1){const i=Kt(a),r=await i.getIdToken(t),o=Hh(r);Z(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:hr(Sf(o.auth_time)),issuedAtTime:hr(Sf(o.iat)),expirationTime:hr(Sf(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Sf(a){return Number(a)*1e3}function Hh(a){const[t,i,r]=a.split(".");if(t===void 0||i===void 0||r===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const o=io(i);return o?JSON.parse(o):(Wl("Failed to decode base64 JWT payload"),null)}catch(o){return Wl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Yg(a){const t=Hh(a);return Z(t,"internal-error"),Z(typeof t.exp<"u","internal-error"),Z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(a,t,i=!1){if(i)return t;try{return await t}catch(r){throw r instanceof mi&&Cw(r)&&a.auth.currentUser===a&&await a.auth.signOut(),r}}function Cw({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(a){var t;const i=a.auth,r=await a.getIdToken(),o=await Sr(a,So(i,{idToken:r}));Z(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];a._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?Ky(c.providerUserInfo):[],p=Rw(a.providerData,h),_=a.isAnonymous,m=!(a.email&&c.passwordHash)&&!(p!=null&&p.length),y=_?m:!1,S={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new Yf(c.createdAt,c.lastLoginAt),isAnonymous:y};Object.assign(a,S)}async function ww(a){const t=Kt(a);await bo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Rw(a,t){return[...a.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function Ky(a){return a.map(t=>{var{providerId:i}=t,r=Uh(t,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(a,t){const i=await Qy(a,{},async()=>{const r=Ws({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=a.config,h=await Xy(a,o,"/v1/token",`key=${c}`),p=await a._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Yy.fetch()(h,{method:"POST",headers:p,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Ow(a,t){return na(a,"POST","/v2/accounts:revokeToken",zo(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Z(t.idToken,"internal-error"),Z(typeof t.idToken<"u","internal-error"),Z(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Yg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){Z(t.length!==0,"internal-error");const i=Yg(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await Nw(t,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(t,i,r){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,h=new Vs;return r&&(Z(typeof r=="string","internal-error",{appName:t}),h.refreshToken=r),o&&(Z(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(Z(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(a,t){Z(typeof a=="string"||typeof a>"u","internal-error",{appName:t})}class Ft{constructor(t){var{uid:i,auth:r,stsTokenManager:o}=t,c=Uh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Aw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Yf(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await Sr(this,this.stsTokenManager.getToken(this.auth,t));return Z(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return Tw(this,t)}reload(){return ww(this)}_assign(t){this!==t&&(Z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Ft(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),i&&await bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(hi(this.auth));const t=await this.getIdToken();return await Sr(this,bw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var r,o,c,h,p,_,m,y;const S=(r=i.displayName)!==null&&r!==void 0?r:void 0,E=(o=i.email)!==null&&o!==void 0?o:void 0,k=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,L=(h=i.photoURL)!==null&&h!==void 0?h:void 0,V=(p=i.tenantId)!==null&&p!==void 0?p:void 0,P=(_=i._redirectEventId)!==null&&_!==void 0?_:void 0,ue=(m=i.createdAt)!==null&&m!==void 0?m:void 0,le=(y=i.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ce,emailVerified:Oe,isAnonymous:$,providerData:Ke,stsTokenManager:et}=i;Z(ce&&et,t,"internal-error");const lt=Vs.fromJSON(this.name,et);Z(typeof ce=="string",t,"internal-error"),ii(S,t.name),ii(E,t.name),Z(typeof Oe=="boolean",t,"internal-error"),Z(typeof $=="boolean",t,"internal-error"),ii(k,t.name),ii(L,t.name),ii(V,t.name),ii(P,t.name),ii(ue,t.name),ii(le,t.name);const ct=new Ft({uid:ce,auth:t,email:E,emailVerified:Oe,displayName:S,isAnonymous:$,photoURL:L,phoneNumber:k,tenantId:V,stsTokenManager:lt,createdAt:ue,lastLoginAt:le});return Ke&&Array.isArray(Ke)&&(ct.providerData=Ke.map(Mn=>Object.assign({},Mn))),P&&(ct._redirectEventId=P),ct}static async _fromIdTokenResponse(t,i,r=!1){const o=new Vs;o.updateFromServerResponse(i);const c=new Ft({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await bo(c),c}static async _fromGetAccountInfoResponse(t,i,r){const o=i.users[0];Z(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Ky(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),p=new Vs;p.updateFromIdToken(r);const _=new Ft({uid:o.localId,auth:t,stsTokenManager:p,isAnonymous:h}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Yf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(_,m),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Map;function Tn(a){On(a instanceof Function,"Expected a class definition");let t=Qg.get(a);return t?(On(t instanceof a,"Instance stored in cache mismatched with class"),t):(t=new a,Qg.set(a,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}Zy.type="NONE";const Fg=Zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(a,t,i){return`firebase:${a}:${t}:${i}`}class Gs{constructor(t,i,r){this.persistence=t,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=Jl(this.userKey,o.apiKey,c),this.fullPersistenceKey=Jl("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await So(this.auth,{idToken:t}).catch(()=>{});return i?Ft._fromGetAccountInfoResponse(this.auth,i,t):null}return Ft._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,r="authUser"){if(!i.length)return new Gs(Tn(Fg),t,r);const o=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let c=o[0]||Tn(Fg);const h=Jl(r,t.config.apiKey,t.name);let p=null;for(const m of i)try{const y=await m._get(h);if(y){let S;if(typeof y=="string"){const E=await So(t,{idToken:y}).catch(()=>{});if(!E)break;S=await Ft._fromGetAccountInfoResponse(t,E,y)}else S=Ft._fromJSON(t,y);m!==c&&(p=S),c=m;break}}catch{}const _=o.filter(m=>m._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new Gs(c,t,r):(c=_[0],p&&await c._set(h,p.toJSON()),await Promise.all(i.map(async m=>{if(m!==c)try{await m._remove(h)}catch{}})),new Gs(c,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(a){const t=a.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(e0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(n0(t))return"Blackberry";if(i0(t))return"Webos";if(Jy(t))return"Safari";if((t.includes("chrome/")||$y(t))&&!t.includes("edge/"))return"Chrome";if(t0(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=a.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wy(a=ut()){return/firefox\//i.test(a)}function Jy(a=ut()){const t=a.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $y(a=ut()){return/crios\//i.test(a)}function e0(a=ut()){return/iemobile/i.test(a)}function t0(a=ut()){return/android/i.test(a)}function n0(a=ut()){return/blackberry/i.test(a)}function i0(a=ut()){return/webos/i.test(a)}function Bh(a=ut()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function Dw(a=ut()){var t;return Bh(a)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Mw(){return Mb()&&document.documentMode===10}function s0(a=ut()){return Bh(a)||t0(a)||i0(a)||n0(a)||/windows phone/i.test(a)||e0(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(a,t=[]){let i;switch(a){case"Browser":i=Xg(ut());break;case"Worker":i=`${Xg(ut())}-${a}`;break;default:i=a}const r=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Js}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const r=c=>new Promise((h,p)=>{try{const _=t(c);h(_)}catch(_){p(_)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const r of this.queue)await r(t),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(a,t={}){return na(a,"GET","/v2/passwordPolicy",zo(a,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=6;class Uw{constructor(t){var i,r,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:kw,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,r,o,c,h,p;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,_),this.validatePasswordCharacterOptions(t,_),_.isValid&&(_.isValid=(i=_.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(r=_.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(c=_.containsUppercaseLetter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(p=_.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),_}validatePasswordLengthOptions(t,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=t.length>=r),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t,i,r,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new Iw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Tn(i)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await So(this,{idToken:t}),r=await Ft._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Gt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=o==null?void 0:o._redirectEventId,_=await this.tryRedirectSignIn(t);(!h||h===p)&&(_!=null&&_.user)&&(o=_.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await bo(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=gw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Gt(this.app))return Promise.reject(hi(this));const i=t?Kt(t):null;return i&&Z(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&Z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Gt(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await xw(this),i=new Uw(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Tr("auth","Firebase",t())}onAuthStateChanged(t,i,r){return this.registerStateListener(this.authStateSubscription,t,i,r)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,r){return this.registerStateListener(this.idTokenSubscription,t,i,r)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ow(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const r=await this.getOrInitRedirectPersistenceManager(i);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Tn(t)||this._popupRedirectResolver;Z(i,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[Tn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const _=t.addObserver(i,r,o);return()=>{h=!0,_()}}else{const _=t.addObserver(i);return()=>{h=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=a0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&pw(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Ho(a){return Kt(a)}class Kg{constructor(t){this.auth=t,this.observer=null,this.addObserver=qb(i=>this.observer=i)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zw(a){Ph=a}function Hw(a){return Ph.loadJS(a)}function Bw(){return Ph.gapiScript}function Pw(a){return`__${a}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(a,t){const i=th(a,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Gi(c,t??{}))return o;Nn(o,"already-initialized")}return i.initialize({options:t})}function Vw(a,t){const i=(t==null?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Tn);t!=null&&t.errorMap&&a._updateErrorMap(t.errorMap),a._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Gw(a,t,i){const r=Ho(a);Z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,c=r0(t),{host:h,port:p}=jw(t),_=p===null?"":`:${p}`,m={url:`${c}//${h}${_}/`},y=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(Gi(m,r.config.emulator)&&Gi(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,br(h)?(Ro("Auth",!0),Ev(`${c}//${h}${_}`)):Yw()}function r0(a){const t=a.indexOf(":");return t<0?"":a.substr(0,t+1)}function jw(a){const t=r0(a),i=/(\/\/)?([^?#/]+)/.exec(a.substr(t.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:Zg(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:Zg(h)}}}function Zg(a){if(!a)return null;const t=Number(a);return isNaN(t)?null:t}function Yw(){function a(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return bn("not implemented")}_getIdTokenResponse(t){return bn("not implemented")}_linkToIdToken(t,i){return bn("not implemented")}_getReauthenticationResolver(t){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(a,t){return Fy(a,"POST","/v1/accounts:signInWithIdp",zo(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="http://localhost";class Ki extends l0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Ki(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):Nn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o}=i,c=Uh(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new Ki(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return js(t,i)}_linkToIdToken(t,i){const r=this.buildRequest();return r.idToken=i,js(t,r)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,js(t,i)}buildRequest(){const t={requestUri:Qw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=Ws(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends o0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Dr{constructor(){super("facebook.com")}static credential(t){return Ki._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return si.credentialFromTaggedObject(t)}static credentialFromError(t){return si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return si.credential(t.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Ki._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return ai.credentialFromTaggedObject(t)}static credentialFromError(t){return ai.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:r}=t;if(!i&&!r)return null;try{return ai.credential(i,r)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Dr{constructor(){super("github.com")}static credential(t){return Ki._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ri.credentialFromTaggedObject(t)}static credentialFromError(t){return ri.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ri.credential(t.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Dr{constructor(){super("twitter.com")}static credential(t,i){return Ki._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return li.credentialFromTaggedObject(t)}static credentialFromError(t){return li.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=t;if(!i||!r)return null;try{return li.credential(i,r)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(a,t){return Fy(a,"POST","/v1/accounts:signUp",zo(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,r,o=!1){const c=await Ft._fromIdTokenResponse(t,r,o),h=Wg(r);return new _i({user:c,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(t,i,r){await t._updateTokensIfNecessary(r,!0);const o=Wg(r);return new _i({user:t,providerId:o,_tokenResponse:r,operationType:i})}}function Wg(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(a){var t;if(Gt(a.app))return Promise.reject(hi(a));const i=Ho(a);if(await i._initializationPromise,!((t=i.currentUser)===null||t===void 0)&&t.isAnonymous)return new _i({user:i.currentUser,providerId:null,operationType:"signIn"});const r=await Fw(i,{returnSecureToken:!0}),o=await _i._fromIdTokenResponse(i,"signIn",r,!0);return await i._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends mi{constructor(t,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,To.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,i,r,o){return new To(t,i,r,o)}}function u0(a,t,i,r){return(t==="reauthenticate"?i._getReauthenticationResolver(a):i._getIdTokenResponse(a)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(a,c,t,r):c})}async function Kw(a,t,i=!1){const r=await Sr(a,t._linkToIdToken(a.auth,await a.getIdToken()),i);return _i._forOperation(a,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(a,t,i=!1){const{auth:r}=a;if(Gt(r.app))return Promise.reject(hi(r));const o="reauthenticate";try{const c=await Sr(a,u0(r,o,t,a),i);Z(c.idToken,r,"internal-error");const h=Hh(c.idToken);Z(h,r,"internal-error");const{sub:p}=h;return Z(a.uid===p,r,"user-mismatch"),_i._forOperation(a,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(a,t,i=!1){if(Gt(a.app))return Promise.reject(hi(a));const r="signIn",o=await u0(a,r,t),c=await _i._fromIdTokenResponse(a,r,o);return i||await a._updateCurrentUser(c.user),c}function Jw(a,t,i,r){return Kt(a).onIdTokenChanged(t,i,r)}function $w(a,t,i){return Kt(a).beforeAuthStateChanged(t,i)}const Co="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Co,"1"),this.storage.removeItem(Co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=1e3,tR=10;class f0 extends c0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&t(i,o,r)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,p,_)=>{this.notifyListeners(h,_)});return}const r=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);Mw()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,tR):o()}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:r}),!0)})},eR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}f0.type="LOCAL";const nR=f0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0 extends c0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}h0.type="SESSION";const d0=h0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(a){return Promise.all(a.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const r=new Bo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:r,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(h).map(async m=>m(i.origin,c)),_=await iR(p);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:_})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(a="",t=10){let i="";for(let r=0;r<t;r++)i+=Math.floor(Math.random()*10);return a+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((p,_)=>{const m=qh("",20);o.port1.start();const y=setTimeout(()=>{_(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(S){const E=S;if(E.data.eventId===m)switch(E.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(E.data.response);break;default:clearTimeout(y),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:m,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function aR(a){sn().location.href=a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function rR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lR(){var a;return((a=navigator==null?void 0:navigator.serviceWorker)===null||a===void 0?void 0:a.controller)||null}function oR(){return p0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="firebaseLocalStorageDb",uR=1,Ao="firebaseLocalStorage",m0="fbase_key";class Mr{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Po(a,t){return a.transaction([Ao],t?"readwrite":"readonly").objectStore(Ao)}function cR(){const a=indexedDB.deleteDatabase(_0);return new Mr(a).toPromise()}function Qf(){const a=indexedDB.open(_0,uR);return new Promise((t,i)=>{a.addEventListener("error",()=>{i(a.error)}),a.addEventListener("upgradeneeded",()=>{const r=a.result;try{r.createObjectStore(Ao,{keyPath:m0})}catch(o){i(o)}}),a.addEventListener("success",async()=>{const r=a.result;r.objectStoreNames.contains(Ao)?t(r):(r.close(),await cR(),t(await Qf()))})})}async function Jg(a,t,i){const r=Po(a,!0).put({[m0]:t,value:i});return new Mr(r).toPromise()}async function fR(a,t){const i=Po(a,!1).get(t),r=await new Mr(i).toPromise();return r===void 0?null:r.value}function $g(a,t){const i=Po(a,!0).delete(t);return new Mr(i).toPromise()}const hR=800,dR=3;class g0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qf(),this.db)}async _withRetries(t){let i=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(i++>dR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(oR()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await rR(),!this.activeServiceWorker)return;this.sender=new sR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||lR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qf();return await Jg(t,Co,"1"),await $g(t,Co),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jg(r,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(r=>fR(r,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>$g(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Po(o,!1).getAll();return new Mr(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g0.type="LOCAL";const pR=g0;new Or(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(a,t){return t?Tn(t):(Z(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends l0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return js(t,this._buildIdpRequest())}_linkToIdToken(t,i){return js(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return js(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function mR(a){return Ww(a.auth,new Vh(a),a.bypassAuthState)}function gR(a){const{auth:t,user:i}=a;return Z(i,t,"internal-error"),Zw(i,new Vh(a),a.bypassAuthState)}async function vR(a){const{auth:t,user:i}=a;return Z(i,t,"internal-error"),Kw(i,new Vh(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(t,i,r,o,c=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:h,type:p}=t;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mR;case"linkViaPopup":case"linkViaRedirect":return vR;case"reauthViaPopup":case"reauthViaRedirect":return gR;default:Nn(this.auth,"internal-error")}}resolve(t){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=new Or(2e3,1e4);class Hs extends v0{constructor(t,i,r,o,c){super(t,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Z(t,this.auth,"internal-error"),t}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const t=qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,yR.get())};t()}}Hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="pendingRedirect",$l=new Map;class SR extends v0{constructor(t,i,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let t=$l.get(this.auth._key());if(!t){try{const r=await bR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(i){t=()=>Promise.reject(i)}$l.set(this.auth._key(),t)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bR(a,t){const i=AR(t),r=CR(a);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function TR(a,t){$l.set(a._key(),t)}function CR(a){return Tn(a._redirectPersistence)}function AR(a){return Jl(ER,a.config.apiKey,a.name)}async function wR(a,t,i=!1){if(Gt(a.app))return Promise.reject(hi(a));const r=Ho(a),o=_R(r,t),h=await new SR(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=10*60*1e3;class NR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(i=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!OR(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var r;if(t.error&&!y0(t)){const o=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(nn(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const r=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=RR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ev(t))}saveEventToCache(t){this.cachedEventUids.add(ev(t)),this.lastProcessedEventTime=Date.now()}}function ev(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(t=>t).join("-")}function y0({type:a,error:t}){return a==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function OR(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(a,t={}){return na(a,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IR=/^https?/;async function xR(a){if(a.config.emulator)return;const{authorizedDomains:t}=await DR(a);for(const i of t)try{if(kR(i))return}catch{}Nn(a,"unauthorized-domain")}function kR(a){const t=jf(),{protocol:i,hostname:r}=new URL(t);if(a.startsWith("chrome-extension://")){const h=new URL(a);return h.hostname===""&&r===""?i==="chrome-extension:"&&a.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!IR.test(i))return!1;if(MR.test(a))return r===a;const o=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=new Or(3e4,6e4);function tv(){const a=sn().___jsl;if(a!=null&&a.H){for(const t of Object.keys(a.H))if(a.H[t].r=a.H[t].r||[],a.H[t].L=a.H[t].L||[],a.H[t].r=[...a.H[t].L],a.CP)for(let i=0;i<a.CP.length;i++)a.CP[i]=null}}function LR(a){return new Promise((t,i)=>{var r,o,c;function h(){tv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tv(),i(nn(a,"network-request-failed"))},timeout:UR.get()})}if(!((o=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=sn().gapi)===null||c===void 0)&&c.load)h();else{const p=Pw("iframefcb");return sn()[p]=()=>{gapi.load?h():i(nn(a,"network-request-failed"))},Hw(`${Bw()}?onload=${p}`).catch(_=>i(_))}}).catch(t=>{throw eo=null,t})}let eo=null;function zR(a){return eo=eo||LR(a),eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=new Or(5e3,15e3),BR="__/auth/iframe",PR="emulator/auth/iframe",qR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(a){const t=a.config;Z(t.authDomain,a,"auth-domain-config-required");const i=t.emulator?zh(t,PR):`https://${a.config.authDomain}/${BR}`,r={apiKey:t.apiKey,appName:a.name,v:Js},o=VR.get(a.config.apiHost);o&&(r.eid=o);const c=a._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${Ws(r).slice(1)}`}async function jR(a){const t=await zR(a),i=sn().gapi;return Z(i,a,"internal-error"),t.open({where:document.body,url:GR(a),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qR,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=nn(a,"network-request-failed"),p=sn().setTimeout(()=>{c(h)},HR.get());function _(){sn().clearTimeout(p),o(r)}r.ping(_).then(_,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QR=500,FR=600,XR="_blank",KR="http://localhost";class nv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZR(a,t,i,r=QR,o=FR){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _=Object.assign(Object.assign({},YR),{width:r.toString(),height:o.toString(),top:c,left:h}),m=ut().toLowerCase();i&&(p=$y(m)?XR:i),Wy(m)&&(t=t||KR,_.scrollbars="yes");const y=Object.entries(_).reduce((E,[k,L])=>`${E}${k}=${L},`,"");if(Dw(m)&&p!=="_self")return WR(t||"",p),new nv(null);const S=window.open(t||"",p,y);Z(S,a,"popup-blocked");try{S.focus()}catch{}return new nv(S)}function WR(a,t){const i=document.createElement("a");i.href=a,i.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="__/auth/handler",$R="emulator/auth/handler",eN=encodeURIComponent("fac");async function iv(a,t,i,r,o,c){Z(a.config.authDomain,a,"auth-domain-config-required"),Z(a.config.apiKey,a,"invalid-api-key");const h={apiKey:a.config.apiKey,appName:a.name,authType:i,redirectUrl:r,v:Js,eventId:o};if(t instanceof o0){t.setDefaultLanguage(a.languageCode),h.providerId=t.providerId||"",Af(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,S]of Object.entries({}))h[y]=S}if(t instanceof Dr){const y=t.getScopes().filter(S=>S!=="");y.length>0&&(h.scopes=y.join(","))}a.tenantId&&(h.tid=a.tenantId);const p=h;for(const y of Object.keys(p))p[y]===void 0&&delete p[y];const _=await a._getAppCheckToken(),m=_?`#${eN}=${encodeURIComponent(_)}`:"";return`${tN(a)}?${Ws(p).slice(1)}${m}`}function tN({config:a}){return a.emulator?zh(a,$R):`https://${a.authDomain}/${JR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="webStorageSupport";class nN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d0,this._completeRedirectFn=wR,this._overrideRedirectResult=TR}async _openPopup(t,i,r,o){var c;On((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await iv(t,i,r,jf(),o);return ZR(t,h,qh())}async _openRedirect(t,i,r,o){await this._originValidation(t);const c=await iv(t,i,r,jf(),o);return aR(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(On(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(t);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(t){const i=await jR(t),r=new NR(t);return i.register("authEvent",o=>(Z(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=i,r}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(bf,{type:bf},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[bf];h!==void 0&&i(!!h),Nn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=xR(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return s0()||Jy()||Bh()}}const iN=nN;var sv="@firebase/auth",av="1.10.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rN(a){Qs(new ji("auth",(t,{options:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=r.options;Z(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:h,authDomain:p,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:a0(a)},m=new Lw(r,o,c,_);return Vw(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,r)=>{t.getProvider("auth-internal").initialize()})),Qs(new ji("auth-internal",t=>{const i=Ho(t.getProvider("auth").getImmediate());return(r=>new sN(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),ci(sv,av,aN(a)),ci(sv,av,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=5*60,oN=yv("authIdTokenMaxAge")||lN;let rv=null;const uN=a=>async t=>{const i=t&&await t.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>oN)return;const o=i==null?void 0:i.token;rv!==o&&(rv=o,await fetch(a,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function cN(a=wv()){const t=th(a,"auth");if(t.isInitialized())return t.getImmediate();const i=qw(a,{popupRedirectResolver:iN,persistence:[pR,nR,d0]}),r=yv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=uN(c.toString());$w(i,h,()=>h(i.currentUser)),Jw(i,p=>h(p))}}const o=gv("auth");return o?Gw(i,`http://${o}`):Ro("Auth",!1),i}function fN(){var a,t;return(t=(a=document.getElementsByTagName("head"))===null||a===void 0?void 0:a[0])!==null&&t!==void 0?t:document}zw({loadJS(a){return new Promise((t,i)=>{const r=document.createElement("script");r.setAttribute("src",a),r.onload=t,r.onerror=o=>{const c=nn("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",fN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rN("Browser");const hN={apiKey:"AIzaSyD2ZFX54pSmJCL1-VIt5y9T5jfStksfyZk",authDomain:"heistteams-web.firebaseapp.com",databaseURL:"https://heistteams-web-default-rtdb.europe-west1.firebasedatabase.app",projectId:"heistteams-web",storageBucket:"heistteams-web.firebasestorage.app",messagingSenderId:"977230137598",appId:"1:977230137598:web:a0ed0f0cb7a14795937daf",measurementId:"G-76XEB4TNW5"},E0=Av(hN),lv=cw(E0),dN=cN(E0);Xw(dN).catch(a=>{console.error("Anonymous sign-in failed:",a)});function pN(){const[a,t]=Fe.useState(0);Fe.useEffect(()=>{const r=Gg(lv,"globalCount"),o=nw(r,c=>{const h=c.val();h!==null&&t(h)});return()=>o()},[]);function i(){const r=Gg(lv,"globalCount");ew(r,a+1)}return mt.jsxs("div",{className:"body",children:[mt.jsxs("header",{className:"header",children:[mt.jsx("a",{className:"logo",href:"https://discord.gg/heistteams",target:"_blank",rel:"noreferrer",children:mt.jsx("img",{src:_b,alt:"RHTS logo"})}),mt.jsx("h1",{className:"title",children:"Heist Teams"})]}),mt.jsxs("main",{className:"main",children:[mt.jsxs("button",{onClick:i,children:["count is ",a]}),mt.jsx("div",{style:{position:"absolute",top:"50%",right:"1%",transform:"translateY(-50%)",width:"350px",height:"50%"},children:mt.jsx("iframe",{src:"https://discord.com/widget?id=673720693208383489&theme=dark",width:"350",height:"500",allowTransparency:"true",frameBorder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",style:{borderRadius:"1rem",marginTop:0},title:"Discord Widget"})})]}),mt.jsx("footer",{className:"footer",children:mt.jsx("a",{href:"https://discord.gg/heistteams",target:"_blank",rel:"noopener noreferrer",style:{gridColumn:"2"},children:"Join us on Discord"})})]})}tb.createRoot(document.getElementById("root")).render(mt.jsx(Fe.StrictMode,{children:mt.jsx(pb,{children:mt.jsx(pN,{})})}));
