"use strict";(self.webpackChunkfood=self.webpackChunkfood||[]).push([[662],{4945:(e,t,r)=>{r.d(t,{L:()=>s,M:()=>n});var o=r(3165);const s=async e=>{try{return(await o.A.get("/food/ingredients/search",{params:e})).data}catch(e){return console.error(e),null}},n=async e=>{try{return(await o.A.get(`/food/ingredients/${e}/information`)).data}catch(e){return console.error(e),null}}},3165:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(1569);const s="c2ccf30ecbae45238938d5c516bd1606",n=o.A.create({baseURL:"https://api.spoonacular.com/"});n.interceptors.request.use((e=>{if(s){const t=new URLSearchParams({apiKey:s}).toString();return e.url=`${e.url}?${t}`,e}return e}));const i=n},662:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var o=r(9471);const s={root:"Ingredients-module__root",rootCenter:"Ingredients-module__root__center",rootSearch:"Ingredients-module__root__search",rootItems:"Ingredients-module__root__items",rootNoItems:"Ingredients-module__root__no-items",rootPagination:"Ingredients-module__root__pagination"};var n=r(7642),i=r(4780),a=r(7183),l=r(7104),d=r(7671);const c=(0,l.PA)((e=>{let{ingredient:t}=e;const r=(0,o.useMemo)((()=>`https://img.spoonacular.com/ingredients_500x500/${t.image}`),[t.image]);return(0,d.jsx)(a.N_,{to:`/ingredients/${t.id}`,children:(0,d.jsx)(i.A,{captionSlot:t.aisle,title:t.name,image:r})})}));var _=r(5731),u=r(1305),g=r(5590);const h={root:"SearchIngredient-module__root",rootInput:"SearchIngredient-module__root__input"};var m=r(8014),p=r(8280),x=r(9004),v=r(4945),j=r(1792),y=r.n(j);const C=class{_query="";constructor(){(0,p.Gn)(this,{_query:p.sH.ref,query:p.EW,setQuery:p.XI,reset:p.XI,destroy:p.XI});const e=sessionStorage.getItem("ingredient-filter"),t=JSON.parse(null!==e?e:"");t&&this.setQuery(t.search)}get query(){return this._query}setQuery(e){this._query=e}reset(){this._query=""}destroy(){}};var f=r(9876);const w=class{_ingredients=[];_ingredient=null;_totalResults=0;_number=0;_queryString="";_metaState=(()=>({ingredients:x.W.initial,ingredient:x.W.initial}))();searchStore=(()=>new C)();constructor(){this._page=Number(f.A.query.getParam("page"))||1,(0,p.Gn)(this,{_ingredients:p.sH,_ingredient:p.sH,_totalResults:p.sH,_number:p.sH,_queryString:p.sH,_metaState:p.sH,_page:p.sH,ingredients:p.EW,ingredient:p.EW,totalResults:p.EW,number:p.EW,page:p.EW,queryString:p.EW,metaState:p.EW,getIngredient:p.XI,getIngredients:p.XI,setIngredient:p.XI,setIngredients:p.XI,setMetaState:p.XI,setPage:p.XI.bound,destroy:p.XI})}get ingredients(){return this._ingredients}get ingredient(){return this._ingredient}get totalResults(){return this._totalResults}get number(){return this._number}get metaState(){return this._metaState}get queryString(){return this._queryString}get page(){return this._page}getIngredients=async()=>{try{const e=this.searchStore.query;if(e){this.setMetaState("ingredients",x.W.loading);const t={query:e,offset:12*(this._page-1),number:12,metaInformation:!0},r=await(0,v.L)(t);(0,p.h5)((()=>{if(r)return this.setMetaState("ingredients",x.W.success),void this.setIngredients(r);this.setMetaState("ingredients",x.W.error)}))}else this.setMetaState("ingredients",x.W.initial);const t={page:this._page,search:e||void 0};this.updateUrl(t)}catch(e){(0,p.h5)((()=>{this.setMetaState("ingredients",x.W.error)})),console.error("Failed to load:",e)}};getIngredient=async e=>{try{this.setMetaState("ingredient",x.W.loading);const t=await(0,v.M)(e);(0,p.h5)((()=>{if(t)return this.setMetaState("ingredient",x.W.success),void this.setIngredient(t);this.setMetaState("ingredient",x.W.error)}))}catch(e){(0,p.h5)((()=>{this.setMetaState("ingredient",x.W.error)})),console.error("Failed to load:",e)}};setMetaState(e,t){this._metaState[e]=t}setIngredients(e){this._ingredients=e.results,this._totalResults=e.totalResults,this._number=e.number}setIngredient(e){this._ingredient=e}setPage(e){this._page=e}updateUrl(e){const t=y().stringify(e,{addQueryPrefix:!0});window.history.replaceState(null,"",t||window.location.pathname),this._queryString=t}destroy(){}},A=(0,o.createContext)(void 0),S=()=>{const e=(0,o.useContext)(A);if(!e)throw Error("error");return e},I=(0,l.PA)((()=>{const{searchStore:e}=S(),[t,r]=(0,o.useState)(e.query),s=(0,o.useMemo)((()=>/^[A-Za-zА-Яа-я\s,]+$/),[]),n=(0,o.useCallback)((r=>{"Enter"===r.key&&e.setQuery(t)}),[e,t]),i=(0,o.useCallback)((t=>{e.setQuery(t)}),[e]),a=(0,o.useCallback)((e=>{(s.test(e)||""===e)&&r(e)}),[s]);return(0,d.jsxs)("div",{className:h.root,children:[(0,d.jsx)(g.A,{className:h.root__input,onKeyDown:n,value:t,onChange:a,placeholder:"Enter ingredient"}),(0,d.jsx)(_.A,{onClick:()=>i(t),children:(0,d.jsx)(u.A,{width:24,height:24,color:"white"})}),t&&(0,d.jsx)(_.A,{onClick:()=>(r(""),void e.setQuery("")),children:"Clear"})]})}));var N=r(7051),b=r(8631),P=r(2903);const W=(0,l.PA)((()=>{const{ingredients:e,queryString:t,page:r,setPage:i,getIngredients:a,metaState:l,totalResults:_,searchStore:u}=S(),g=u.query,h=Math.ceil(_/12);return(0,o.useEffect)((()=>{a()}),[r,g,t,a]),(0,d.jsx)("div",{className:s.root,children:(0,d.jsxs)("div",{className:s.root__center,children:[(0,d.jsx)(N.A,{view:"p-xxl",children:"Ingredients"}),(0,d.jsx)("div",{children:(0,d.jsx)(I,{})}),(()=>{switch(l.ingredients){case x.W.loading:return(0,d.jsx)(b.A,{});case x.W.error:return(0,d.jsxs)("div",{className:s["root__no-items"],children:[(0,d.jsx)(N.A,{view:"title",children:"Oops, something went wrong!"}),";"]});case x.W.success:return e.length>0?(0,d.jsx)("div",{className:s.root__items,children:e.map((e=>(0,d.jsx)(c,{ingredient:e},e.id)))}):(0,d.jsx)("div",{className:s["root__no-items"],children:(0,d.jsx)(N.A,{view:"title",children:"No results"})});default:return(0,d.jsx)("div",{className:s["root__no-items"],children:(0,d.jsx)(N.A,{view:"title",children:"No results"})})}})(),h>1&&(0,d.jsx)("div",{className:s.root__pagination,children:(0,d.jsx)(n.A,{currentPage:r,totalPages:h,onPageChange:i})})]})})})),k=(0,P.w)((e=>{let{children:t}=e;const r=(0,m.W)((()=>new w));return(0,d.jsx)(A.Provider,{value:r,children:t})}),W)},5731:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(9471),s=r(9512);const n={root:"Button-module__root",rootFill:"Button-module__root-fill",rootAction:"Button-module__root-action",loading:"Button-module__loading",rootDisabled:"Button-module__root-disabled"};var i=r(7073),a=r.n(i),l=r(7671);const d=e=>{let{loading:t=!1,className:r="",children:o,fill:i,disabled:d=!1,...c}=e;const _=t||d,u=a()(n.root,{[n.loading]:t,[n["root-disabled"]]:_,[n["root-action"]]:!t&&!_,[n["root-fill"]]:i,[r]:""!==r.trim()});return(0,l.jsx)("button",{className:u,...c,disabled:_,onClick:_?void 0:c.onClick,children:t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{color:"#fff",size:"s"}),(0,l.jsx)("span",{children:o})]}):o})},c=(0,o.memo)(d)},4780:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(9471),s=r(7073),n=r.n(s),i=r(7051);const a={root:"Card-module__root",rootImageWrapper:"Card-module__root__image-wrapper",rootImage:"Card-module__root__image",rootContentWrapper:"Card-module__root__content-wrapper",rootContentSlot:"Card-module__root__content-slot",rootContent:"Card-module__root__content",rootCaption:"Card-module__root__caption",rootTitle:"Card-module__root__title",rootSubtitle:"Card-module__root__subtitle",rootFooter:"Card-module__root__footer"};var l=r(7671);const d=e=>{let{className:t,image:r,captionSlot:o,title:s,subtitle:d,contentSlot:c,onClick:_,actionSlot:u}=e;return(0,l.jsxs)("div",{className:n()(a.root,t),onClick:_,children:[r&&(0,l.jsx)("div",{className:a["root__image-wrapper"],children:(0,l.jsx)("img",{src:r,alt:"Card Image",className:a.root__image})}),(0,l.jsxs)("div",{className:a["root__content-wrapper"],children:[(0,l.jsxs)("div",{className:a.root__content,children:[o&&(0,l.jsx)(i.A,{className:a.root__caption,weight:"medium",color:"secondary",children:o}),(0,l.jsx)(i.A,{className:a.root__title,maxLines:2,weight:"medium",children:s}),(0,l.jsx)(i.A,{className:a.root__subtitle,color:"secondary",maxLines:3,children:d})]}),(0,l.jsxs)("div",{className:a.root__footer,children:[c&&(0,l.jsx)(i.A,{weight:"bold",className:a["root__content-slot"],children:c}),u&&(0,l.jsx)("div",{className:a.root__action,children:u})]})]})]})},c=(0,o.memo)(d)},5590:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(9471),s=r(7073),n=r.n(s);const i={rootWrapper:"Input-module__root__wrapper",rootField:"Input-module__root__field",rootFieldPrimary:"Input-module__root__field-primary",rootFieldAccent:"Input-module__root__field-accent",rootFieldSeccondary:"Input-module__root__field-seccondary",rootIcon:"Input-module__root__icon"};var a=r(7671);const l=o.forwardRef(((e,t)=>{let{value:r,onChange:s,afterSlot:l,className:d,color:c,..._}=e;const u=(0,o.useCallback)((e=>{s(e.target.value)}),[s]);return(0,a.jsxs)("div",{className:n()(i.root__wrapper,d),children:[(0,a.jsx)("input",{type:"text",value:r,onChange:u,className:n()(i.root__field,{[i["root__field-primary"]]:"primary"===c,[i["root__field-accent"]]:"accent"===c,[i["root__field-secondary"]]:"secondary"===c}),ref:t,..._}),l&&(0,a.jsx)("div",{className:i.root__icon,children:l})]})})),d=(0,o.memo)(l)},8631:(e,t,r)=>{r.d(t,{A:()=>o.A});var o=r(3553)},7642:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(9471);const s={root:"Pagination-module__root",rootPrev:"Pagination-module__root__prev",rootNext:"Pagination-module__root__next",rootPage:"Pagination-module__root__page",rootPageActive:"Pagination-module__root__page-active",rootPageGroup:"Pagination-module__root__pageGroup",rootEllipsis:"Pagination-module__root__ellipsis"};var n=r(5858),i=r(7051),a=r(7671);const l=e=>{let{currentPage:t,totalPages:r,onPageChange:l}=e;const d=(0,o.useCallback)((e=>{e>=1&&e<=r&&l(e)}),[l,r]);return(0,a.jsxs)("div",{className:s.root,children:[(0,a.jsx)("div",{className:s.root__prevGroup,children:(0,a.jsx)("button",{className:s.root__prev,onClick:()=>d(t-1),disabled:1===t,children:(0,a.jsx)(n.A,{fill:"none",stroke:1===t?"secondary":"primary",width:32,height:32})},"prev")}),(0,a.jsx)("div",{className:s.root__pageGroup,children:(()=>{const e=[],o=Math.max(1,t-1),n=Math.min(r,t+2);t>2&&e.push((0,a.jsx)("button",{className:s.root__page,onClick:()=>d(1),children:(0,a.jsx)(i.A,{view:"p-l",children:"1"})},1)),t>3&&e.push((0,a.jsx)(i.A,{view:"p-l",weight:"medium",className:s.root__ellipsis,children:"..."},"ellipsis-start"));for(let r=o;r<=n;r++)e.push((0,a.jsx)("button",{className:`${s.root__page} ${t===r?s["root__page-active"]:""}`,onClick:()=>d(r),children:(0,a.jsx)(i.A,{view:"p-l",children:r})},r));return n<r-1&&e.push((0,a.jsx)(i.A,{view:"p-l",weight:"medium",className:s.root__ellipsis,children:"..."},"ellipsis-end")),n<r&&e.push((0,a.jsx)("button",{className:s.root__page,onClick:()=>d(r),children:(0,a.jsx)(i.A,{view:"p-l",children:r})},r)),e})()}),(0,a.jsx)("div",{className:s.root__nextGroup,children:(0,a.jsx)("button",{className:s.root__next,onClick:()=>d(t+1),disabled:t===r,children:(0,a.jsx)(n.A,{fill:"none",stroke:t===r?"secondary":"primary",width:32,height:32})},"next")})]})},d=(0,o.memo)(l)},5858:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(9471),s=r(9616),n=r(7671);const i=e=>(0,n.jsxs)(s.A,{...e,children:[(0,n.jsx)("path",{d:"M20.1201 26.56L11.4268 17.8667C10.4001 16.84 10.4001 15.16 11.4268 14.1333L20.1201 5.44",strokeWidth:e.strokeWidth,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10"}),";"]}),a=(0,o.memo)(i)},1305:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(9471),s=r(9616),n=r(7671);const i=e=>(0,n.jsxs)(s.A,{...e,children:[(0,n.jsx)("g",{clipPath:"url(#clip0_71_484)",children:(0,n.jsx)("path",{d:"M16 14H15.21L14.93 13.73C15.91 12.59 16.5 11.11 16.5 9.5C16.5 5.91 13.59 3 10 3C6.41 3 3.5 5.91 3.5 9.5C3.5 13.09 6.41 16 10 16C11.61 16 13.09 15.41 14.23 14.43L14.5 14.71V15.5L19.5 20.49L20.99 19L16 14ZM10 14C7.51 14 5.5 11.99 5.5 9.5C5.5 7.01 7.51 5 10 5C12.49 5 14.5 7.01 14.5 9.5C14.5 11.99 12.49 14 10 14Z"})}),(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"clip0_71_484",children:(0,n.jsx)("rect",{width:e.width,height:e.height,transform:"translate(0.5)"})})})]}),a=(0,o.memo)(i)},2903:(e,t,r)=>{r.d(t,{w:()=>s});var o=r(7671);const s=(e,t)=>r=>(0,o.jsxs)(e,{children:[" ",(0,o.jsx)(t,{...r})," "]})},9876:(e,t,r)=>{r.d(t,{A:()=>o.A});var o=r(5029)},9004:(e,t,r)=>{r.d(t,{W:()=>o});let o=function(e){return e.initial="initial",e.loading="loading",e.error="error",e.success="success",e}({})}}]);