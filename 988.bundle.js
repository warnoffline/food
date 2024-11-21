/*! For license information please see 988.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfood=self.webpackChunkfood||[]).push([[988],{1988:function(t,r,e){e.r(r),e.d(r,{default:function(){return S}});var n=e(2972),o=e(9471),i=e(7104),c=e(6178),a=e(8014),u=e(8280),s=e(9004),l=e(9876);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(){p=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof b?r:b,c=Object.create(i.prototype),a=new N(n||[]);return o(c,"_invoke",{value:L(t,e,a)}),c}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function j(){}var _={};s(_,c,(function(){return this}));var x=Object.getPrototypeOf,P=x&&x(x(I([])));P&&P!==e&&n.call(P,c)&&(_=P);var O=j.prototype=b.prototype=Object.create(_);function S(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,c,a){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==f(l)&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,c,a)}),(function(t){e("throw",t,c,a)})):r.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,a)}))}a(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function L(r,e,n){var o=d;return function(i,c){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw c;return{value:t,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=k(a,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var c=i.arg;return c?c.done?(e[r.resultName]=c.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function D(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function I(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(f(r)+" is not iterable")}return w.prototype=j,o(O,"constructor",{value:j,configurable:!0}),o(j,"constructor",{value:w,configurable:!0}),w.displayName=s(j,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},S(E.prototype),s(E.prototype,a,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var c=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(O),s(O,u,"Generator"),s(O,c,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return a.type="throw",a.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),D(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;D(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:I(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function h(t,r,e,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void e(t)}a.done?r(u):Promise.resolve(u).then(n,o)}function d(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function y(t){var r=function(t){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=f(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==f(r)?r:r+""}var v=function(){return t=function t(){var r=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this._product=null,this._metaState={product:s.W.initial},this.getProduct=function(){var t,e=(t=p().mark((function t(e){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r.setMetaState("product",s.W.loading),t.next=4,l.A.api.fetchProductById(e);case 4:n=t.sent,(0,u.h5)((function(){if(n)return r.setMetaState("product",s.W.success),void r.setProduct(n);r.setMetaState("product",s.W.error)})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),(0,u.h5)((function(){r.setMetaState("product",s.W.error)})),console.error("Failed to load:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function c(t){h(i,n,o,c,a,"next",t)}function a(t){h(i,n,o,c,a,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}(),(0,u.Gn)(this,{_product:u.sH,_metaState:u.sH,product:u.EW,metaState:u.EW,getProduct:u.XI,setProduct:u.XI,setMetaState:u.XI,destroy:u.XI})},(r=[{key:"product",get:function(){return this._product}},{key:"metaState",get:function(){return this._metaState}},{key:"setMetaState",value:function(t,r){this._metaState[t]=r}},{key:"setProduct",value:function(t){this._product=t}},{key:"destroy",value:function(){}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}(),m=v,g=e(7671),b=(0,o.createContext)(void 0),w=e(2903),j={root:"src-app-pages-ProductDetail-components-ProductInfo-ProductInfo-module__root",root__img:"src-app-pages-ProductDetail-components-ProductInfo-ProductInfo-module__root__img",root__txts:"src-app-pages-ProductDetail-components-ProductInfo-ProductInfo-module__root__txts",root__detail:"src-app-pages-ProductDetail-components-ProductInfo-ProductInfo-module__root__detail"},_=e(7051),x=(0,i.PA)((function(t){var r,e,n=t.product,i=(0,o.useMemo)((function(){return n.image}),[n.image]);return(0,g.jsxs)("div",{className:j.root,children:[(0,g.jsx)("div",{className:j.root__img,children:(0,g.jsx)("img",{src:i,alt:""})}),(0,g.jsxs)("div",{className:j.root__category,children:[(0,g.jsx)(_.A,{view:"title",children:n.aisle}),null===(r=n.badges)||void 0===r?void 0:r.map((function(t){return(0,g.jsx)(_.A,{children:t})}))]}),(0,g.jsx)("div",{className:j.root__txts,children:(null===(e=n.nutrition)||void 0===e?void 0:e.nutrients)&&n.nutrition.nutrients.map((function(t){return t&&(0,g.jsxs)("div",{className:j.root__detail,children:[(0,g.jsx)(_.A,{view:"p-m",children:t.name}),(0,g.jsxs)(_.A,{color:"accent",weight:"semiBold",view:"p-m",children:[t.amount,"",t.unit]})]},t.name)}))})]})})),P=e(9256),O=(0,i.PA)((function(){var t=(0,n.g)().id,r=function(){var t=(0,o.useContext)(b);if(!t)throw Error("error");return t}(),e=r.product,i=r.getProduct,a=r.metaState;return(0,o.useEffect)((function(){i(Number(t))}),[i,t]),(0,g.jsx)(P.A,{meta:a.product,children:e&&(0,g.jsx)("div",{className:"src-app-pages-ProductDetail-ProductDetail-module__root",children:(0,g.jsxs)("div",{className:"src-app-pages-ProductDetail-ProductDetail-module__root__center",children:[(0,g.jsx)(c.A,{children:e.title}),(0,g.jsx)(x,{product:e})]})})})})),S=(0,w.w)((function(t){var r=t.children,e=(0,a.W)((function(){return new m}));return(0,g.jsx)(b.Provider,{value:e,children:r})}),O)},2341:function(t,r,e){e.d(r,{A:function(){return s}});var n=e(9471),o=e(2972),i=e(5858),c=e(7051),a=e(7671),u=function(t){var r=t.children,e=(0,o.Zp)();return(0,a.jsxs)("div",{className:"src-components-DetailTabHeader-DetailTabHeader-module__root",children:[(0,a.jsx)(i.A,{cursor:"pointer",fill:"none",stroke:"accent",strokeWidth:2,width:32,height:32,onClick:function(){return e(-1)}}),(0,a.jsx)(c.A,{view:"p-xxl",weight:"bold",children:r})]})},s=(0,n.memo)(u)},6178:function(t,r,e){e.d(r,{A:function(){return n.A}});var n=e(2341)},8631:function(t,r,e){e.d(r,{A:function(){return n.A}});var n=e(3553)},5858:function(t,r,e){e.d(r,{A:function(){return f}});var n=e(9471),o=e(9616),i=e(7671);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function u(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){s(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function s(t,r,e){return(r=function(t){var r=function(t){if("object"!=c(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=c(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var l=function(t){return(0,i.jsxs)(o.A,u(u({},t),{},{children:[(0,i.jsx)("path",{d:"M20.1201 26.56L11.4268 17.8667C10.4001 16.84 10.4001 15.16 11.4268 14.1333L20.1201 5.44",strokeWidth:t.strokeWidth,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10"}),";"]}))},f=(0,n.memo)(l)},9256:function(t,r,e){e.d(r,{A:function(){return a}});var n=e(9004),o=e(7051),i=e(8631),c=e(7671),a=function(t){var r=t.meta,e=t.children;switch(r){case n.W.loading:return(0,c.jsx)(i.A,{page:!0});case n.W.error:return(0,c.jsx)("div",{className:"src-hoc-RenderMetaDetailContent-RenderMetaDetailContent-module__root__no-items",children:(0,c.jsx)(o.A,{view:"title",children:"Oops, something went wrong!"})});case n.W.success:return e;default:return(0,c.jsx)(i.A,{page:!0})}}},2903:function(t,r,e){e.d(r,{w:function(){return u}});var n=e(7671);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){a(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function a(t,r,e){return(r=function(t){var r=function(t){if("object"!=o(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=o(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var u=function(t,r){return function(e){return(0,n.jsxs)(t,{children:[" ",(0,n.jsx)(r,c({},e))," "]})}}},9876:function(t,r,e){e.d(r,{A:function(){return n.A}}),e(9972);var n=e(5029)},9004:function(t,r,e){e.d(r,{W:function(){return n}});var n=function(t){return t.initial="initial",t.loading="loading",t.error="error",t.success="success",t}({})}}]);