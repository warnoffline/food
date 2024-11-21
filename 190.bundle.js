/*! For license information please see 190.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfood=self.webpackChunkfood||[]).push([[190],{662:function(t,e,r){r.r(e),r.d(e,{default:function(){return G}});var n=r(9471),o=r(7642),i=r(4780),a=r(7183),u=r(7104),s=r(7671),c=(0,u.PA)((function(t){var e=t.ingredient,r=(0,n.useMemo)((function(){return"https://img.spoonacular.com/ingredients_500x500/".concat(e.image)}),[e.image]);return(0,s.jsx)(a.N_,{to:"/ingredients/".concat(e.id),children:(0,s.jsx)(i.A,{captionSlot:e.aisle,title:e.name,image:r})})})),l=r(5731),f=r(1305),h=r(5590),y=r(8014),p=r(8280),g=r(9004),d=r(1792),v=r.n(d);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,w(n.key),n)}}function w(t){var e=function(t){if("object"!=m(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==m(e)?e:e+""}var _=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._query="",(0,p.Gn)(this,{_query:p.sH.ref,query:p.EW,setQuery:p.XI,reset:p.XI,destroy:p.XI});var e=sessionStorage.getItem("ingredient-filter"),r=JSON.parse(null!==e?e:"");r&&this.setQuery(r.search)},(e=[{key:"query",get:function(){return this._query}},{key:"setQuery",value:function(t){this._query=t}},{key:"reset",value:function(){this._query=""}},{key:"destroy",value:function(){}}])&&b(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),S=r(9876);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function j(){j=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),u=new q(n||[]);return o(a,"_invoke",{value:P(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",y="suspendedYield",p="executing",g="completed",d={};function v(){}function m(){}function b(){}var w={};c(w,a,(function(){return this}));var _=Object.getPrototypeOf,S=_&&_(_(N([])));S&&S!==r&&n.call(S,a)&&(w=S);var k=b.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function r(o,i,a,u){var s=f(t[o],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==x(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,u)}))}u(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function P(e,r,n){var o=h;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var s=L(u,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var c=f(e,r,n);if("normal"===c.type){if(o=n.done?g:y,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=g,n.method="throw",n.arg=c.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(x(e)+" is not iterable")}return m.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=c(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},E(I.prototype),c(I.prototype,u,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new I(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function k(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function E(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){k(i,n,o,a,u,"next",t)}function u(t){k(i,n,o,a,u,"throw",t)}a(void 0)}))}}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,P(n.key),n)}}function P(t){var e=function(t){if("object"!=x(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==x(e)?e:e+""}var L=function(){return t=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._ingredients=[],this._totalResults=0,this._number=0,this._queryString="",this._page=void 0,this._metaState={ingredients:g.W.initial},this.searchStore=new _,this.getIngredients=E(j().mark((function t(){var r,n,o,i;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(r=e.searchStore.query)){t.next=11;break}return e.setMetaState("ingredients",g.W.loading),n={query:r,offset:12*(e._page-1),number:12,metaInformation:!0},t.next=7,S.A.api.fetchIngredients(n);case 7:o=t.sent,(0,p.h5)((function(){if(o)return e.setMetaState("ingredients",g.W.success),e.setIngredients(o.results),e._totalResults=o.totalResults,void(e._number=o.number);e.setMetaState("ingredients",g.W.error)})),t.next=12;break;case 11:e.setMetaState("ingredients",g.W.initial);case 12:i={page:e._page,search:r||void 0},e.updateUrl(i),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),(0,p.h5)((function(){e.setMetaState("ingredients",g.W.error)})),console.error("Failed to load:",t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,16]])}))),this._page=Number(S.A.query.getParam("page"))||1,(0,p.Gn)(this,{_ingredients:p.sH,_totalResults:p.sH,_number:p.sH,_queryString:p.sH,_metaState:p.sH,_page:p.sH,ingredients:p.EW,totalResults:p.EW,number:p.EW,page:p.EW,queryString:p.EW,metaState:p.EW,getIngredients:p.XI,setIngredients:p.XI.bound,setMetaState:p.XI,resetPage:p.XI.bound,setPage:p.XI.bound,destroy:p.XI})},(e=[{key:"ingredients",get:function(){return this._ingredients}},{key:"totalResults",get:function(){return this._totalResults}},{key:"number",get:function(){return this._number}},{key:"metaState",get:function(){return this._metaState}},{key:"queryString",get:function(){return this._queryString}},{key:"page",get:function(){return this._page}},{key:"setMetaState",value:function(t,e){this._metaState[t]=e}},{key:"setIngredients",value:function(t){this._ingredients=t}},{key:"setPage",value:function(t){this._page=t}},{key:"resetPage",value:function(){this.setPage(1)}},{key:"updateUrl",value:function(t){var e=v().stringify(t,{addQueryPrefix:!0});window.history.replaceState(null,"",e||window.location.pathname),this._queryString=e}},{key:"destroy",value:function(){}}])&&I(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),A=(0,n.createContext)(void 0),O=function(){var t=(0,n.useContext)(A);if(!t)throw Error("error");return t};function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var N=(0,u.PA)((function(){var t,e,r=O(),o=r.searchStore,i=r.setIngredients,a=r.resetPage,u=(t=(0,n.useState)(o.query),e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],s=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);s=!0);}catch(t){c=!0,o=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return q(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=u[0],y=u[1],p=(0,n.useMemo)((function(){return/^[A-Za-zА-Яа-я\s,]+$/}),[]),g=(0,n.useCallback)((function(t){"Enter"===t.key&&(o.setQuery(c),a())}),[a,o,c]),d=(0,n.useCallback)((function(t){o.setQuery(t),a()}),[a,o]),v=(0,n.useCallback)((function(t){(p.test(t)||""===t)&&y(t)}),[p]);return(0,s.jsxs)("div",{className:"src-app-pages-Ingredients-components-SearchIngredient-SearchIngredient-module__root",children:[(0,s.jsx)(h.A,{className:"src-app-pages-Ingredients-components-SearchIngredient-SearchIngredient-module__root__input",onKeyDown:g,value:c,onChange:v,placeholder:"Enter ingredient"}),(0,s.jsx)(l.A,{onClick:function(){return d(c)},children:(0,s.jsx)(f.A,{width:24,height:24,color:"white"})}),c&&(0,s.jsx)(l.A,{onClick:function(){return i([]),a(),y(""),void o.setQuery("")},children:"Clear"})]})})),C=r(7051),W=r(2903),M=r(6406),T=(0,u.PA)((function(){var t=O(),e=t.ingredients,r=t.queryString,i=t.page,a=t.setPage,u=t.getIngredients,l=t.metaState,f=t.totalResults,h=t.searchStore.query,y=Math.ceil(f/12);(0,n.useEffect)((function(){u()}),[i,h,r,u]);var p=e.map((function(t){return(0,s.jsx)(c,{ingredient:t},t.id)}));return(0,s.jsx)("div",{className:"src-app-pages-Ingredients-Ingredients-module__root",children:(0,s.jsxs)("div",{className:"src-app-pages-Ingredients-Ingredients-module__root__center",children:[(0,s.jsx)(C.A,{view:"p-xxl",children:"Ingredients"}),(0,s.jsx)("div",{children:(0,s.jsx)(N,{})}),(0,s.jsx)(M.A,{meta:l.ingredients,items:e,children:p}),y>1&&e.length>0&&(0,s.jsx)("div",{className:"src-app-pages-Ingredients-Ingredients-module__root__pagination",children:(0,s.jsx)(o.A,{currentPage:i,totalPages:y,onPageChange:a})})]})})})),G=(0,W.w)((function(t){var e=t.children,r=(0,y.W)((function(){return new L}));return(0,s.jsx)(A.Provider,{value:r,children:e})}),T)}}]);