/*! For license information please see 242.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfood=self.webpackChunkfood||[]).push([[242],{242:function(t,e,r){r.r(e),r.d(e,{default:function(){return I}});var n=r(2972),o=r(9471),i=r(7104),a=r(6178),c={root:"src-app-pages-IngredientDetail-components-IngredientInfo-IngredientInfo-module__root",root__img:"src-app-pages-IngredientDetail-components-IngredientInfo-IngredientInfo-module__root__img",root__txts:"src-app-pages-IngredientDetail-components-IngredientInfo-IngredientInfo-module__root__txts",root__detail:"src-app-pages-IngredientDetail-components-IngredientInfo-IngredientInfo-module__root__detail"},u=r(7051),s=r(7671),l=(0,i.PA)((function(t){var e,r=t.ingredient,n=(0,o.useMemo)((function(){return"https://img.spoonacular.com/ingredients_500x500/".concat(r.image)}),[r.image]);return(0,s.jsxs)("div",{className:c.root,children:[(0,s.jsx)("div",{className:c.root__img,children:(0,s.jsx)("img",{src:n,alt:""})}),(0,s.jsxs)("div",{className:c.root__category,children:[(0,s.jsx)(u.A,{view:"title",children:r.aisle}),null===(e=r.categoryPath)||void 0===e?void 0:e.map((function(t){return(0,s.jsx)(u.A,{children:t})}))]}),(0,s.jsx)("div",{className:c.root__txts,children:r.nutrition&&r.nutrition.nutrients.map((function(t){return t&&(0,s.jsxs)("div",{className:c.root__detail,children:[(0,s.jsx)(u.A,{view:"p-m",children:t.name}),(0,s.jsxs)(u.A,{color:"accent",weight:"semiBold",view:"p-m",children:[t.amount,"",t.unit]})]},t.name)}))})]})})),f=r(8014),h=r(8280),p=r(9004),d=r(9876);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(){v=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new D(n||[]);return o(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",g="completed",m={};function b(){}function w(){}function j(){}var _={};s(_,a,(function(){return this}));var x=Object.getPrototypeOf,O=x&&x(x(N([])));O&&O!==r&&n.call(O,a)&&(_=O);var S=j.prototype=b.prototype=Object.create(_);function I(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==y(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function E(e,r,n){var o=h;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?g:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(y(e)+" is not iterable")}return w.prototype=j,o(S,"constructor",{value:j,configurable:!0}),o(j,"constructor",{value:w,configurable:!0}),w.displayName=s(j,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},I(P.prototype),s(P.prototype,c,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new P(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},I(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function g(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,b(n.key),n)}}function b(t){var e=function(t){if("object"!=y(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==y(e)?e:e+""}var w=function(){return t=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._ingredient=null,this._metaState={ingredient:p.W.initial},this.getIngredient=function(){var t,r=(t=v().mark((function t(r){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setMetaState("ingredient",p.W.loading),t.next=4,d.A.api.fetchIngredientById(r);case 4:n=t.sent,(0,h.h5)((function(){if(n)return e.setMetaState("ingredient",p.W.success),void e.setIngredient(n);e.setMetaState("ingredient",p.W.error)})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),(0,h.h5)((function(){e.setMetaState("ingredient",p.W.error)})),console.error("Failed to load:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){g(i,n,o,a,c,"next",t)}function c(t){g(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return r.apply(this,arguments)}}(),(0,h.Gn)(this,{_ingredient:h.sH,_metaState:h.sH,ingredient:h.EW,metaState:h.EW,getIngredient:h.XI,setIngredient:h.XI,setMetaState:h.XI,destroy:h.XI})},(e=[{key:"ingredient",get:function(){return this._ingredient}},{key:"metaState",get:function(){return this._metaState}},{key:"setMetaState",value:function(t,e){this._metaState[t]=e}},{key:"setIngredient",value:function(t){this._ingredient=t}},{key:"destroy",value:function(){}}])&&m(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),j=w,_=(0,o.createContext)(void 0),x=r(2903),O=r(9256),S=(0,i.PA)((function(){var t=(0,n.g)().id,e=function(){var t=(0,o.useContext)(_);if(!t)throw Error("error");return t}(),r=e.ingredient,i=e.getIngredient,c=e.metaState;return(0,o.useEffect)((function(){i(Number(t))}),[i,t,r]),(0,s.jsx)(O.A,{meta:c.ingredient,children:r&&(0,s.jsx)("div",{className:"src-app-pages-IngredientDetail-IngredientDetail-module__root",children:(0,s.jsxs)("div",{className:"src-app-pages-IngredientDetail-IngredientDetail-module__root__center",children:[(0,s.jsx)(a.A,{children:r.original}),(0,s.jsx)(l,{ingredient:r})]})})})})),I=(0,x.w)((function(t){var e=t.children,r=(0,f.W)((function(){return new j}));return(0,s.jsx)(_.Provider,{value:r,children:e})}),S)},2341:function(t,e,r){r.d(e,{A:function(){return s}});var n=r(9471),o=r(2972),i=r(5858),a=r(7051),c=r(7671),u=function(t){var e=t.children,r=(0,o.Zp)();return(0,c.jsxs)("div",{className:"src-components-DetailTabHeader-DetailTabHeader-module__root",children:[(0,c.jsx)(i.A,{cursor:"pointer",fill:"none",stroke:"accent",strokeWidth:2,width:32,height:32,onClick:function(){return r(-1)}}),(0,c.jsx)(a.A,{view:"p-xxl",weight:"bold",children:e})]})},s=(0,n.memo)(u)},6178:function(t,e,r){r.d(e,{A:function(){return n.A}});var n=r(2341)},8631:function(t,e,r){r.d(e,{A:function(){return n.A}});var n=r(3553)},5858:function(t,e,r){r.d(e,{A:function(){return f}});var n=r(9471),o=r(9616),i=r(7671);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t){if("object"!=a(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==a(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=function(t){return(0,i.jsxs)(o.A,u(u({},t),{},{children:[(0,i.jsx)("path",{d:"M20.1201 26.56L11.4268 17.8667C10.4001 16.84 10.4001 15.16 11.4268 14.1333L20.1201 5.44",strokeWidth:t.strokeWidth,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10"}),";"]}))},f=(0,n.memo)(l)},9256:function(t,e,r){r.d(e,{A:function(){return c}});var n=r(9004),o=r(7051),i=r(8631),a=r(7671),c=function(t){var e=t.meta,r=t.children;switch(e){case n.W.loading:return(0,a.jsx)(i.A,{page:!0});case n.W.error:return(0,a.jsx)("div",{className:"src-hoc-RenderMetaDetailContent-RenderMetaDetailContent-module__root__no-items",children:(0,a.jsx)(o.A,{view:"title",children:"Oops, something went wrong!"})});case n.W.success:return r;default:return(0,a.jsx)(i.A,{page:!0})}}},2903:function(t,e,r){r.d(e,{w:function(){return u}});var n=r(7671);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=function(t,e){return function(r){return(0,n.jsxs)(t,{children:[" ",(0,n.jsx)(e,a({},r))," "]})}}},9876:function(t,e,r){r.d(e,{A:function(){return n.A}}),r(9972);var n=r(5029)},9004:function(t,e,r){r.d(e,{W:function(){return n}});var n=function(t){return t.initial="initial",t.loading="loading",t.error="error",t.success="success",t}({})}}]);