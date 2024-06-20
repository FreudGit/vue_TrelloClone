import{a as x,u as _,_ as ee}from"./CyJ_gzGH.js";import{M as te,N as G,O as ae,m as H,g as C,_ as P,h as E,i as J,j as N,k as w,z as R,P as re,o as s,c as o,a as V,r as c,s as v,Q as $,x as k,F as S,d as z,t as I,v as A,R as ne,S as se,T as oe,U as D,V as le,W as ie,l as ue,n as de,X as pe,I as fe,A as me,Y as ce,B,b as T,w as M,H as ye}from"./BowZ-21E.js";const ge=Symbol.for("nuxt:client-only"),be="data-n-ids",he="-";function ve(e){var f,l,n,m,u,y;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=`n${e.slice(1)}`;const a=te(),t=ae();if(!t)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");a._id||(a._id=0),t._nuxtIdIndex||(t._nuxtIdIndex={}),(f=t._nuxtIdIndex)[e]||(f[e]=0);const d=e+he+t._nuxtIdIndex[e]++;if(a.payload.serverRendered&&a.isHydrating&&!G(ge,!1)){const i=((l=t.vnode.el)==null?void 0:l.nodeType)===8&&((m=(n=t.vnode.el)==null?void 0:n.nextElementSibling)!=null&&m.getAttribute)?(u=t.vnode.el)==null?void 0:u.nextElementSibling:t.vnode.el,p=JSON.parse(((y=i==null?void 0:i.getAttribute)==null?void 0:y.call(i,be))||"{}");if(p[d])return p[d]}return e+"_"+a._id++}const ke={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},U=H(C.ui.strategy,C.ui.formGroup,ke),we=E({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(U.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:a,attrs:t}=J("formGroup",N(e,"ui"),U,N(e,"class")),d=G("form-errors",null),f=w(()=>{var m,u;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(u=(m=d==null?void 0:d.value)==null?void 0:m.find(y=>y.path===e.name))==null?void 0:u.message}),l=w(()=>a.value.size[e.size??U.default.size]),n=R(ve("$K7dDJpdOWE"));return re("form-group",{error:f,inputId:n,name:w(()=>e.name),size:w(()=>e.size),eagerValidation:w(()=>e.eagerValidation)}),{ui:a,attrs:t,inputId:n,size:l,error:f}}}),$e=["for"];function ze(e,a,t,d,f,l){return s(),o("div",k({class:e.ui.wrapper},e.attrs),[V("div",{class:c(e.ui.inner)},[e.label||e.$slots.label?(s(),o("div",{key:0,class:c([e.ui.label.wrapper,e.size])},[V("label",{for:e.inputId,class:c([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?v(e.$slots,"label",$(k({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(S,{key:1},[z(I(e.label),1)],64))],10,$e),e.hint||e.$slots.hint?(s(),o("span",{key:0,class:c([e.ui.hint])},[e.$slots.hint?v(e.$slots,"hint",$(k({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(S,{key:1},[z(I(e.hint),1)],64))],2)):A("",!0)],2)):A("",!0),e.description||e.$slots.description?(s(),o("p",{key:1,class:c([e.ui.description,e.size])},[e.$slots.description?v(e.$slots,"description",$(k({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(S,{key:1},[z(I(e.description),1)],64))],2)):A("",!0)],2),V("div",{class:c([e.label?e.ui.container:""])},[v(e.$slots,"default",$(ne({error:e.error}))),typeof e.error=="string"&&e.error||e.$slots.error?(s(),o("p",{key:0,class:c([e.ui.error,e.size])},[e.$slots.error?v(e.$slots,"error",$(k({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(S,{key:1},[z(I(e.error),1)],64))],2)):e.help||e.$slots.help?(s(),o("p",{key:1,class:c([e.ui.help,e.size])},[e.$slots.help?v(e.$slots,"help",$(k({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(S,{key:1},[z(I(e.help),1)],64))],2)):A("",!0)],2)],16)}const Se=P(we,[["render",ze]]),b=H(C.ui.strategy,C.ui.textarea,se),Ie=E({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(b.size).includes(e)}},color:{type:String,default:()=>b.default.color,validator(e){return[...C.ui.colors,...Object.keys(b.color)].includes(e)}},variant:{type:String,default:()=>b.default.variant,validator(e){return[...Object.keys(b.variant),...Object.values(b.color).flatMap(a=>Object.keys(a))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:a}){const{ui:t,attrs:d}=J("textarea",N(e,"ui"),b,N(e,"class")),{emitFormBlur:f,emitFormInput:l,inputId:n,color:m,size:u,name:y}=x(e,b),i=R(oe({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),p=R(null),O=()=>{var r;e.autofocus&&((r=p.value)==null||r.focus())},h=()=>{if(e.autoresize){if(!p.value)return;p.value.rows=e.rows;const r=window.getComputedStyle(p.value),g=parseInt(r.paddingTop),j=parseInt(r.paddingBottom),X=g+j,L=parseInt(r.lineHeight),{scrollHeight:Z}=p.value,q=(Z-X)/L;q>e.rows&&(p.value.rows=e.maxrows?Math.min(q,e.maxrows):q)}},F=r=>{i.value.trim&&(r=r.trim()),i.value.number&&(r=pe(r)),a("update:modelValue",r),l()},K=r=>{h(),i.value.lazy||F(r.target.value)},W=r=>{const g=r.target.value;a("change",g),i.value.lazy&&F(g),i.value.trim&&(r.target.value=g.trim())},Y=r=>{a("blur",r),f()};D(()=>{setTimeout(()=>{O()},e.autofocusDelay)}),le(()=>e.modelValue,()=>{ie(h)}),D(()=>{setTimeout(()=>{O(),h()},100)});const Q=w(()=>{var g,j;const r=((j=(g=t.value.color)==null?void 0:g[m.value])==null?void 0:j[e.variant])||t.value.variant[e.variant];return ue(de(t.value.base,t.value.form,t.value.rounded,t.value.placeholder,t.value.size[u.value],e.padded?t.value.padding[u.value]:"p-0",r==null?void 0:r.replaceAll("{color}",m.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:t,attrs:d,name:y,inputId:n,textarea:p,textareaClass:Q,onInput:K,onChange:W,onBlur:Y}}}),Be=["id","value","name","rows","required","disabled","placeholder"];function Te(e,a,t,d,f,l){return s(),o("div",{class:c(e.ui.wrapper)},[V("textarea",k({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:a[0]||(a[0]=(...n)=>e.onInput&&e.onInput(...n)),onBlur:a[1]||(a[1]=(...n)=>e.onBlur&&e.onBlur(...n)),onChange:a[2]||(a[2]=(...n)=>e.onChange&&e.onChange(...n))}),null,16,Be),v(e.$slots,"default")],2)}const Ve=P(Ie,[["render",Te]]),Ce={class:"task-wrapper"},Oe={class:"task-view"},je={key:0},Ae={key:1},qe=E({__name:"[id]",setup(e){const a=_(),t=fe(),d=me(),f=ce();R(t.params.id);const l=w(()=>a.getTask(t.params.id));function n(){console.log("Before toast"),a.deleteTask(t.params.id),d.push("/"),f.add({title:"Task deleted",description:"Task has been deleted",timeout:1e3,icon:"i-heroicons-trash",color:"green"}),console.log("After toast")}return(m,u)=>{const y=ee,i=Se,p=Ve,O=ye;return s(),o("div",Ce,[V("div",Oe,[B(l)?(s(),o("section",je,[T(i,{label:"name",class:"mb-4 w-full"},{default:M(()=>[T(y,{modelValue:B(l).name,"onUpdate:modelValue":u[0]||(u[0]=h=>B(l).name=h),type:"text"},null,8,["modelValue"])]),_:1}),T(i,{label:"description",class:"mb-4 w-full"},{default:M(()=>[T(p,{modelValue:B(l).description,"onUpdate:modelValue":u[1]||(u[1]=h=>B(l).description=h)},null,8,["modelValue"])]),_:1}),T(O,{icon:"i-heroicons-trash",color:"red",onClick:n},{default:M(()=>[z(" Delete Task ")]),_:1})])):(s(),o("section",Ae,"Task not found"))])])}}});export{qe as default};