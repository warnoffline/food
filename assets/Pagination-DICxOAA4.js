import{R as f,r as d,j as o,d as v,I as w,T as l}from"./index-BIpS7iMd.js";import{B as j}from"./BackArrowIcon-DXkg3eSV.js";const u="_root__wrapper_xzv9n_3",b="_root__field_xzv9n_8",C="_root__icon_xzv9n_37",n={root__wrapper:u,root__field:b,"root__field-primary":"_root__field-primary_xzv9n_16","root__field-accent":"_root__field-accent_xzv9n_19","root__field-seccondary":"_root__field-seccondary_xzv9n_22",root__icon:C},N=f.forwardRef(({value:_,onChange:t,afterSlot:c,className:e,color:a,...p},h)=>{const r=d.useCallback(x=>{t(x.target.value)},[t]);return o.jsxs("div",{className:v(n.root__wrapper,e),children:[o.jsx("input",{type:"text",value:_,onChange:r,className:v(n.root__field,{[n["root__field-primary"]]:a==="primary",[n["root__field-accent"]]:a==="accent",[n["root__field-secondary"]]:a==="secondary"}),ref:h,...p}),c&&o.jsx("div",{className:n.root__icon,children:c})]})}),R=d.memo(N),y=_=>o.jsxs(w,{..._,children:[o.jsx("g",{clipPath:"url(#clip0_71_484)",children:o.jsx("path",{d:"M16 14H15.21L14.93 13.73C15.91 12.59 16.5 11.11 16.5 9.5C16.5 5.91 13.59 3 10 3C6.41 3 3.5 5.91 3.5 9.5C3.5 13.09 6.41 16 10 16C11.61 16 13.09 15.41 14.23 14.43L14.5 14.71V15.5L19.5 20.49L20.99 19L16 14ZM10 14C7.51 14 5.5 11.99 5.5 9.5C5.5 7.01 7.51 5 10 5C12.49 5 14.5 7.01 14.5 9.5C14.5 11.99 12.49 14 10 14Z"})}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_71_484",children:o.jsx("rect",{width:_.width,height:_.height,transform:"translate(0.5)"})})})]}),F=d.memo(y),k="_root_1wbca_1",I="_root__prev_1wbca_6",g="_root__next_1wbca_6",z="_root__page_1wbca_12",G="_root__pageGroup_1wbca_29",$="_root__ellipsis_1wbca_33",s={root:k,root__prev:I,root__next:g,root__page:z,"root__page-active":"_root__page-active_1wbca_24",root__pageGroup:G,root__ellipsis:$},B=({currentPage:_,totalPages:t,onPageChange:c})=>{const e=d.useCallback(r=>{r>=1&&r<=t&&c(r)},[c,t]),a=()=>o.jsx("button",{className:s.root__prev,onClick:()=>e(_-1),disabled:_===1,children:o.jsx(j,{fill:"none",stroke:_===1?"secondary":"primary",width:32,height:32})},"prev"),p=()=>{const r=[],x=Math.max(1,_-1),m=Math.min(t,_+2);_>2&&r.push(o.jsx("button",{className:s.root__page,onClick:()=>e(1),children:o.jsx(l,{view:"p-l",children:"1"})},1)),_>3&&r.push(o.jsx(l,{view:"p-l",weight:"medium",className:s.root__ellipsis,children:"..."},"ellipsis-start"));for(let i=x;i<=m;i++)r.push(o.jsx("button",{className:`${s.root__page} ${_===i?s["root__page-active"]:""}`,onClick:()=>e(i),children:o.jsx(l,{view:"p-l",children:i})},i));return m<t-1&&r.push(o.jsx(l,{view:"p-l",weight:"medium",className:s.root__ellipsis,children:"..."},"ellipsis-end")),m<t&&r.push(o.jsx("button",{className:s.root__page,onClick:()=>e(t),children:o.jsx(l,{view:"p-l",children:t})},t)),r},h=()=>o.jsx("button",{className:s.root__next,onClick:()=>e(_+1),disabled:_===t,children:o.jsx(j,{fill:"none",stroke:_===t?"secondary":"primary",width:32,height:32})},"next");return o.jsxs("div",{className:s.root,children:[o.jsx("div",{className:s.root__prevGroup,children:a()}),o.jsx("div",{className:s.root__pageGroup,children:p()}),o.jsx("div",{className:s.root__nextGroup,children:h()})]})},E=d.memo(B);export{F,R as I,E as P};
