import{p as e,a as o,o as a,c as t,b as n,w as s,r as l,d,e as i,v as u,f as c,g as r,F as p,h as m,i as v,t as _,j as g}from"./vendor.2bce3ae3.js";const b={props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:(e,o)=>({changeHandler:()=>{o.emit("update:modelValue",!e.modelValue)}})},h=s("data-v-1ba88836");e("data-v-1ba88836");const V={key:0,class:"checkbox__icon material-icons-round"};o();const x=h(((e,o,s,l,d,i)=>(a(),t("div",{class:["checkbox cursor-pointer",{"shadow-sm hover:shadow-inner":!s.modelValue,"shadow-inner-dark bg-primary":s.modelValue}],onClick:o[1]||(o[1]=(...e)=>l.changeHandler&&l.changeHandler(...e))},[s.modelValue?(a(),t("span",V," done ")):n("",!0)],2))));b.render=x,b.__scopeId="data-v-1ba88836";const w={props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,o){const a=l(e.modelValue.value);d((()=>e.modelValue),((e,o)=>{e!==o&&(a.value=e)}));const t=l(!1);return{innerModelValue:a,changeHandler:()=>{o.emit("update:modelValue",a.value)},isFocusedInput:t,toggleFocusState:e=>{t.value=e}}}},f=s("data-v-165247ae")(((e,o,n,s,l,d)=>(a(),t("div",{class:["app-input",{"shadow-sm hover:shadow-inner":!s.isFocusedInput,"shadow-inner":s.isFocusedInput}]},[i(c("input",{class:"app-input__input","onUpdate:modelValue":o[1]||(o[1]=e=>s.innerModelValue=e),onInput:o[2]||(o[2]=(...e)=>s.changeHandler&&s.changeHandler(...e)),onFocus:o[3]||(o[3]=e=>s.toggleFocusState(!0)),onBlur:o[4]||(o[4]=e=>s.toggleFocusState(!1))},null,544),[[u,s.innerModelValue]])],2))));w.render=f,w.__scopeId="data-v-165247ae";const k={name:"TodoList",components:{AppCheckbox:b,AppInput:w},setup(){const e=l(""),o=l([{context:"Meeting",isDone:!0},{context:"Reading",isDone:!1}]);return{inputForm:e,todoList:o,addTodo:()=>{e.value&&(o.value.push({context:e.value,isDone:!1}),e.value="")},deleteTodo:e=>{o.value.splice(e,1)},toggleTodo:e=>{o.value[e].isDone=!o.value[e].isDone}}},data:()=>({toggle:!1})},y=s("data-v-13ad9b53");e("data-v-13ad9b53");const F={class:"todo-list shadow"},I=c("h1",{class:"text-3xl text-primary-light font-bold tracking-wider select-none"}," TO-DO ",-1),D=c("div",{class:"todo-list__divider my-4"},null,-1),T={class:"todo-list__content"},C={class:"todo-list__list"},H=c("span",{class:"btn__icon material-icons-round"},[c("span",{class:"material-icons-round text-danger"}," remove_circle_outline ")],-1),A={class:"flex items-between items-center pt-4"},M=c("span",{class:"btn__icon material-icons-round"}," add ",-1);o();const S=y(((e,o,n,s,l,d)=>{const i=r("AppCheckbox"),u=r("AppInput");return a(),t("section",F,[I,D,c("div",T,[c("ul",C,[(a(!0),t(p,null,m(s.todoList,((e,o)=>(a(),t("li",{key:`todo_${o}`,class:"todo-list__item flex items-center mb-4 last:mb-4"},[c(i,{modelValue:e.isDone,"onUpdate:modelValue":o=>e.isDone=o},null,8,["modelValue","onUpdate:modelValue"]),c("span",{class:["flex-grow mx-4",{"line-through text-primary-light":e.isDone}]},_(e.context),3),c("button",{class:"todo-list__item__btn--delete btn btn-round btn-flat md:opacity-0",onClick:e=>s.deleteTodo(o)},[H],8,["onClick"])])))),128))])]),c("div",A,[c(u,{class:"flex-grow mr-4",modelValue:s.inputForm,"onUpdate:modelValue":o[1]||(o[1]=e=>s.inputForm=e),onKeydown:v(s.addTodo,["enter"])},null,8,["modelValue","onKeydown"]),c("button",{class:"btn btn-round",onClick:o[2]||(o[2]=(...e)=>s.addTodo&&s.addTodo(...e))},[M])])])}));k.render=S,k.__scopeId="data-v-13ad9b53";e("data-v-51f78412");const U={class:"todo-list-container"};o();const L={setup:e=>(e,o)=>(a(),t("div",U,[c(k)])),__scopeId:"data-v-51f78412"};g(L).mount("#app");
