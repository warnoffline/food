var o=Object.defineProperty;var g=(r,t,e)=>t in r?o(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var s=(r,t,e)=>g(r,typeof t!="symbol"?t+"":t,e);import{i as d,g as i}from"./index-BIpS7iMd.js";import{a,M as n}from"./instance-0QNMeHl5.js";const c=async r=>{try{return(await a.get("/food/ingredients/search",{params:r})).data}catch(t){return console.error(t),null}},l=async r=>{try{return(await a.get(`/food/ingredients/${r}/information`)).data}catch(t){return console.error(t),null}};class u{constructor(){s(this,"_ingredients",[]);s(this,"_ingredient",null);s(this,"_totalResults",0);s(this,"_number",0);s(this,"_metaState",{ingredients:n.initial,ingredient:n.initial});s(this,"getIngredients",async t=>{try{this.setMetaState("ingredients",n.loading);const e=await c(t);i(()=>{if(e){this.setMetaState("ingredients",n.success),this.setIngredients(e);return}this.setMetaState("ingredients",n.error)})}catch(e){i(()=>{this.setMetaState("ingredients",n.error)}),console.error("Failed to load:",e)}});s(this,"getIngredient",async t=>{try{this.setMetaState("ingredient",n.loading);const e=await l(t);i(()=>{if(e){this.setMetaState("ingredient",n.success),this.setIngredient(e);return}this.setMetaState("ingredient",n.error)})}catch(e){i(()=>{this.setMetaState("ingredient",n.error)}),console.error("Failed to load:",e)}});d(this)}get ingredients(){return this._ingredients}get ingredient(){return this._ingredient}get totalResults(){return this._totalResults}get number(){return this._number}get metaState(){return this._metaState}setMetaState(t,e){this._metaState[t]=e}setIngredients(t){this._ingredients=t.results,this._totalResults=t.totalResults,this._number=t.number}setIngredient(t){this._ingredient=t}}const _=new u;export{_ as I};
