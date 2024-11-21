var f=Object.defineProperty;var R=(s,e,t)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>R(s,typeof e!="symbol"?e+"":e,t);import{m,o as c,e as l,f as i,g as o,q,r as I,j as k,I as F}from"./index-BIpS7iMd.js";import{a as v,M as r}from"./instance-0QNMeHl5.js";const M=[{key:"1",value:"African"},{key:"2",value:"Asian"},{key:"3",value:"American"},{key:"4",value:"British"},{key:"5",value:"Cajun"},{key:"6",value:"Caribbean"},{key:"7",value:"Chinese"},{key:"8",value:"Eastern European"},{key:"9",value:"European"},{key:"10",value:"French"},{key:"11",value:"German"},{key:"12",value:"Greek"},{key:"13",value:"Indian"},{key:"14",value:"Irish"},{key:"15",value:"Italian"},{key:"16",value:"Japanese"},{key:"17",value:"Jewish"},{key:"18",value:"Korean"},{key:"19",value:"Latin American"},{key:"20",value:"Mediterranean"},{key:"21",value:"Mexican"},{key:"22",value:"Middle Eastern"},{key:"23",value:"Nordic"},{key:"24",value:"Southern"},{key:"25",value:"Spanish"},{key:"26",value:"Thai"},{key:"27",value:"Vietnamese"}],x=[{key:"gluten_free",value:"Gluten Free"},{key:"ketogenic",value:"Ketogenic"},{key:"vegetarian",value:"Vegetarian"},{key:"lacto_vegetarian",value:"Lacto-Vegetarian"},{key:"ovo_vegetarian",value:"Ovo-Vegetarian"},{key:"vegan",value:"Vegan"},{key:"pescetarian",value:"Pescetarian"},{key:"paleo",value:"Paleo"},{key:"primal",value:"Primal"},{key:"low_fodmap",value:"Low FODMAP"},{key:"whole30",value:"Whole30"}],E=[{key:"1",value:"Dairy"},{key:"2",value:"Egg"},{key:"3",value:"Gluten"},{key:"4",value:"Grain"},{key:"5",value:"Peanut"},{key:"6",value:"Seafood"},{key:"7",value:"Sesame"},{key:"8",value:"Shellfish"},{key:"9",value:"Soy"},{key:"10",value:"Sulfite"},{key:"11",value:"Tree Nut"},{key:"12",value:"Wheat"}],b=[{key:"1",value:"main course"},{key:"2",value:"side dish"},{key:"3",value:"dessert"},{key:"4",value:"appetizer"},{key:"5",value:"salad"},{key:"6",value:"bread"},{key:"7",value:"breakfast"},{key:"8",value:"soup"},{key:"9",value:"beverage"},{key:"10",value:"sauce"},{key:"11",value:"marinade"},{key:"12",value:"fingerfood"},{key:"13",value:"snack"},{key:"14",value:"drink"}];class w{constructor(){n(this,"_filter",null);m(this,{_filter:c.ref,filter:l,setFilters:i,resetFilters:i});const e=sessionStorage.getItem("recipe-filter");if(e){const t=JSON.parse(e),p=(d,a)=>t[d]?a.filter(g=>t[d].includes(g.value)):[],h={cuisine:p("cuisine",M),diet:p("diet",x),intolerances:p("intolerances",E),type:p("type",b),includeIngredients:t.includeIngredients||"",excludeIngredients:t.excludeIngredients||""};this.setFilters(h)}}get filter(){return this._filter}setFilters(e){this._filter=e}resetFilters(){this.setFilters(null)}}const L=new w,j=async s=>{try{return(await v.get("/recipes/complexSearch",{params:s})).data}catch(e){return console.error(e),null}},N=async s=>{try{return(await v.get(`/recipes/${s}/information`)).data}catch(e){return console.error(e),null}},T=async s=>{try{return(await v.get(`/recipes/${s}/equipmentWidget.json`)).data}catch(e){return console.error(e),null}},C=async s=>{try{return(await v.get(`/recipes/${s}/similar`,{params:{number:12}})).data}catch(e){return console.error(e),null}},O=async s=>{try{return(await v.get("/recipes/extract",{params:{url:s}})).data}catch(e){return console.error(e),null}};class B{constructor(){n(this,"_query","");m(this,{_query:c.ref,query:l,setQuery:i,reset:i});const e=sessionStorage.getItem("recipe-filter"),t=JSON.parse(e!==null?e:"");t&&this.setQuery(t.search)}get query(){return this._query}setQuery(e){this._query=e}reset(){this._query=""}}const A=new B;class J{constructor(){n(this,"_recipes",[]);n(this,"_favorites",[]);n(this,"_similarRecipes",[]);n(this,"_recipe",null);n(this,"_equipments",null);n(this,"_totalResults",0);n(this,"_number",0);n(this,"_queryString","");n(this,"_metaState",{recipes:r.initial,recipe:r.initial,equipments:r.initial,similarRecipes:r.initial,extractRecipe:r.initial});n(this,"getRecipeById",async e=>{try{this.setMetaState("recipe",r.loading);const t=await N(e);o(()=>{t?(this.setMetaState("recipe",r.success),this.setRecipe(t)):this.setMetaState("recipe",r.error)})}catch(t){o(()=>{this.setMetaState("recipe",r.error)}),console.error("Failed to load recipe by ID:",t)}});n(this,"getEquipmentsById",async e=>{try{this.setMetaState("equipments",r.loading);const t=await T(e);o(()=>{t?(this.setMetaState("equipments",r.success),this.setEquipments(t)):this.setMetaState("equipments",r.error)})}catch(t){o(()=>{this.setMetaState("equipments",r.error)}),console.error("Failed to load:",t)}});n(this,"getRecipes",async e=>{var t,p,h,d;try{this.setMetaState("recipes",r.loading);const a=L.filter,u={query:A.query||void 0,offset:(e-1)*12,number:12,diet:((t=a==null?void 0:a.diet)==null?void 0:t.map(({value:y})=>y).join())||void 0,cuisine:((p=a==null?void 0:a.cuisine)==null?void 0:p.map(({value:y})=>y).join())||void 0,intolerances:((h=a==null?void 0:a.intolerances)==null?void 0:h.map(({value:y})=>y).join())||void 0,type:((d=a==null?void 0:a.type)==null?void 0:d.map(({value:y})=>y).join())||void 0,includeIngredients:(a==null?void 0:a.includeIngredients)||void 0,excludeIngredients:(a==null?void 0:a.excludeIngredients)||void 0,addRecipeNutrition:!0,addRecipeInformation:!0},_={search:u.query,diet:u.diet,cuisine:u.cuisine,intolerances:u.intolerances,type:u.type,includeIngredients:u.includeIngredients,excludeIngredients:u.excludeIngredients};this.updateUrl(_);const S=await j(u);o(()=>{S?(this.setMetaState("recipes",r.success),this.setRecipes(S)):this.setMetaState("recipes",r.error)})}catch(a){o(()=>{this.setMetaState("recipes",r.error)}),console.error("Failed to load:",a)}});n(this,"getSimilarRecipe",async e=>{try{this.setMetaState("similarRecipes",r.loading);const t=await C(e);o(()=>{t?(this.setMetaState("similarRecipes",r.success),this.setSimilar(t)):this.setMetaState("similarRecipes",r.error)})}catch(t){o(()=>{this.setMetaState("similarRecipes",r.error)}),console.error("Failed to load:",t)}});n(this,"getExtractRecipe",async e=>{try{this.setMetaState("extractRecipe",r.loading);const t=await O(e);o(()=>{t?(this.setMetaState("extractRecipe",r.success),this.setRecipe(t)):this.setMetaState("extractRecipe",r.error)})}catch(t){o(()=>{this.setMetaState("extractRecipe",r.error)}),console.error("Failed to load:",t)}});n(this,"isFavorite",e=>this._favorites.some(t=>t.id===e));m(this,{_recipes:c,_favorites:c,_similarRecipes:c,_recipe:c,_equipments:c,_totalResults:c,_number:c,_queryString:c,_metaState:c,recipes:l,favorites:l,similarRecipes:l,recipe:l,equipments:l,totalResults:l,number:l,queryString:l,metaState:l,getRecipeById:i,getEquipmentsById:i,getRecipes:i,getSimilarRecipe:i,getExtractRecipe:i,setMetaState:i,setRecipes:i,setRecipe:i,setSimilar:i,setEquipments:i,addRecipeToFavorites:i,removeFromFavorites:i,loadFavoritesFromLocalStorage:i,destroy:i,updateUrl:i}),this.loadFavoritesFromLocalStorage()}get recipes(){return this._recipes}get favorites(){return this._favorites}get similarRecipes(){return this._similarRecipes}get recipe(){return this._recipe}get equipments(){return this._equipments}get totalResults(){return this._totalResults}get number(){return this._number}get metaState(){return this._metaState}get queryString(){return this._queryString}setMetaState(e,t){this._metaState[e]=t}setRecipes(e){o(()=>{this._recipes=e.results,this._number=e.number,this._totalResults=e.totalResults})}setRecipe(e){o(()=>{this._recipe=e})}setSimilar(e){o(()=>{this._similarRecipes=e})}setEquipments(e){o(()=>{this._equipments=e})}saveFavoritesToLocalStorage(){localStorage.setItem("favorites",JSON.stringify(this._favorites))}addRecipeToFavorites(e){this.isFavorite(e.id)||o(()=>{this._favorites.push(e),this.saveFavoritesToLocalStorage()})}removeFromFavorites(e){o(()=>{this._favorites=this._favorites.filter(t=>t.id!==e),localStorage.setItem("favorites",JSON.stringify(this._favorites))})}loadFavoritesFromLocalStorage(){const e=localStorage.getItem("favorites");e&&o(()=>{this._favorites=JSON.parse(e)})}destroy(){this._recipes=[],this._recipe=null}updateUrl(e){const t=q.stringify(e,{addQueryPrefix:!0});window.history.replaceState(null,"",t),this._queryString=t}}const $=new J,P=s=>k.jsx(F,{...s,strokeWidth:s.strokeWidth||2,children:k.jsx("path",{d:"M11.1818 1L13 2.81818M10.8182 10.8182L12.2727 13M2.81818 1L1 2.81818M3.18182 10.8182L1.72727 13M6.81818 3.90909V7.18182H8.63636M12.2727 7C12.2727 9.91207 9.91207 12.2727 7 12.2727C4.08795 12.2727 1.72727 9.91207 1.72727 7C1.72727 4.08796 4.08795 1.72727 7 1.72727C9.91207 1.72727 12.2727 4.08796 12.2727 7Z",stroke:"#B5460F",strokeWidth:s.strokeWidth||2,strokeLinecap:"round",strokeLinejoin:"round"})}),G=I.memo(P);export{M as C,x as D,L as F,E as I,$ as R,A as S,b as T,G as a};
