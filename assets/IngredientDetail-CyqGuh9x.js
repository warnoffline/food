import{r as c,j as t,T as s,c as m,a as l}from"./index-BIpS7iMd.js";import{o as d}from"./instance-0QNMeHl5.js";import{D as x}from"./DetailTabHeader-LSeOHwSg.js";import{I as n}from"./IngredientStore-B55He7cX.js";import"./BackArrowIcon-DXkg3eSV.js";const g="_root_1b7zs_1",j="_root__center_1b7zs_6",_={root:g,root__center:j},p="_root_1nqq3_1",h="_root__img_1nqq3_5",u="_root__txts_1nqq3_17",v="_root__detail_1nqq3_23",e={root:p,root__img:h,root__txts:u,root__detail:v},f=d(({ingredient:o})=>{var a;const i=`https://img.spoonacular.com/ingredients_500x500/${o.image}`;return t.jsxs("div",{className:e.root,children:[t.jsx("div",{className:e.root__img,children:t.jsx("img",{src:i,alt:""})}),t.jsxs("div",{className:e.root__category,children:[t.jsx(s,{view:"title",children:o.aisle}),(a=o.categoryPath)==null?void 0:a.map(r=>t.jsx(s,{children:r}))]}),t.jsx("div",{className:e.root__txts,children:o.nutrition&&o.nutrition.nutrients.map(r=>r&&t.jsxs("div",{className:e.root__detail,children:[t.jsx(s,{view:"p-m",children:r.name}),t.jsxs(s,{color:"accent",weight:"semiBold",view:"p-m",children:[r.amount,"",r.unit]})]},r.name))})]})}),I=c.memo(f),D=d(()=>{const{id:o}=m();return c.useEffect(()=>{const i=Number(o);n.getIngredient(i)},[o]),n.ingredient?t.jsx("div",{className:_.root,children:t.jsxs("div",{className:_.root__center,children:[t.jsx(x,{children:n.ingredient.original}),t.jsx(I,{ingredient:n.ingredient})]})}):t.jsx(l,{page:!0})});export{D as default};
