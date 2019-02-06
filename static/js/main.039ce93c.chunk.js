(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},210:function(e,t,a){},212:function(e,t,a){},214:function(e,t,a){},216:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(51),c=a.n(r),l=a(12),s=a(6),o=a(96),m=a(9),u=a(10),p=a(13),d=a(11),E=a(14),f=a(226),h=a(220),b=a(221),v=(a(107),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui secondary pointing menu u-margin-bottom-sm"},i.a.createElement(b.a,{to:"/familyfeuds",className:"item"},"Home"),i.a.createElement(b.a,{to:"/addRecipe",className:"item"},"Add Recipe"),i.a.createElement("div",{className:"right menu"},i.a.createElement("button",{className:"ui item"},"Logout")))}}]),t}(n.Component)),g=a(223),y=a(222),O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).renderInput=function(e){var t=e.input,a=e.type,n=e.placeholder;return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",Object.assign({},t,{type:a,placeholder:n,autoComplete:"off"})),i.a.createElement("i",{className:"search icon"}))},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui segment search-bar"},i.a.createElement("form",{className:"ui form icon input",style:{width:"100%"},onSubmit:function(e){return e.preventDefault()}},i.a.createElement(g.a,{name:"search",type:"text",component:this.renderInput,placeholder:"Search"})))}}]),t}(n.Component),j=Object(y.a)({form:"searchForm"})(O),N=a(18),R=a.n(N),k=a(98),C=a.n(k)()(),S=function(e){return{type:"RECIPE_SELECTED",payload:e}},w=(a(210),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.props.selectedRecipe(null)}},{key:"renderRecipeList",value:function(e){var t=this;return e.map(function(e){return i.a.createElement("div",{key:e.id,className:"item item-list",onClick:function(){return t.props.selectedRecipe(e)}},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"ui fluid rounded image"},i.a.createElement("img",{src:e.image_URL,alt:e.name})),i.a.createElement("div",null,e.name)))})}},{key:"render",value:function(){var e=[];if(this.props.search){var t=new RegExp(this.props.search,"i");e=this.props.recipes.filter(function(e){return t.test(e.name)})}return i.a.createElement("div",{className:"three wide column"},i.a.createElement("div",{className:"ui middle aligned divided items"},this.props.search?this.renderRecipeList(e):this.renderRecipeList(this.props.recipes)))}}]),t}(n.Component)),I=Object(l.b)(function(e){return{recipes:Object.values(e.recipes),search:R.a.get(e.form.searchForm,"values.search")}},{selectedRecipe:S})(w),_=a(219),D=function(e){return c.a.createPortal(i.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible ".concat(e.active)},i.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible ".concat(e.active)},i.a.createElement("div",{className:"header"},e.title),i.a.createElement("div",{className:"content"},e.content),i.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},x=(a(212),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={active:""},a.onRecipeDelete=function(){a.props.deleteRecipe(a.props.recipe.id),a.props.selectedRecipe(null),a.setState({active:""})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"renderActions",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:"ui button primary",onClick:this.onRecipeDelete},"Yes"),i.a.createElement("button",{className:"ui button",onClick:function(){return e.setState({active:""})}},"No"))}},{key:"render",value:function(){var e=this,t=this.props.recipe;return i.a.createElement("div",{className:"thirteen wide column"},i.a.createElement("div",{className:"recipe-img-container"},i.a.createElement("img",{className:"ui centered rounded large image",src:R.a.get(t,"image_URL"),alt:R.a.get(t,"name")})),i.a.createElement("div",{className:"recipe-img-container-title"},i.a.createElement("span",null,R.a.get(t,"name"))),i.a.createElement("div",{className:"recipe-body u-padding-md  u-margin-top-xs"},i.a.createElement("div",{className:"icon-container"},i.a.createElement(_.a,{to:"/editRecipe/".concat(t.id)},i.a.createElement("i",{className:"edit icon"}),"Edit"),i.a.createElement("i",{onClick:function(){return e.setState({active:"active"})},className:"trash alternate icon"},"Delete"),i.a.createElement(D,{title:"Delete Recipe",content:"Are you sure you want to delete this recipe?",actions:this.renderActions(),active:this.state.active})),i.a.createElement("div",{className:"ui mini two statistics u-margin-top-xs"},i.a.createElement("div",{className:"statistic"},i.a.createElement("div",{className:"label"},i.a.createElement("i",{className:"clock outline icon"})," ",R.a.get(t,"time")," Minutes")),i.a.createElement("div",{className:"statistic"},i.a.createElement("div",{className:"label"},i.a.createElement("i",{className:"utensils icon"})," ",R.a.get(t,"servings")," Servings"))),i.a.createElement("div",{className:"ui two column centered grid "},i.a.createElement("div",{className:"column centered aligned "},t.ingredients.map(function(e,t){return t%2===0?i.a.createElement("div",{key:t,className:"ingredients"},e):null})),i.a.createElement("div",{className:"column centered aligned "},t.ingredients.map(function(e,t){return t%2!==0?i.a.createElement("div",{key:t,className:"ingredients"}," ",e," "):null})))))}}]),t}(n.Component)),L=Object(l.b)(function(e){return{recipe:e.selectedRecipe}},{deleteRecipe:function(e){return function(t){t({type:"DELETE_RECIPE",payload:e}),C.push("/familyfeuds")}},selectedRecipe:S})(x),A=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j,null),i.a.createElement("div",{className:"ui grid"},i.a.createElement(I,null),!!this.props.selectedRecipe&&i.a.createElement(L,null)))}}]),t}(n.Component),P=Object(l.b)(function(e){return{selectedRecipe:e.selectedRecipe}})(A),U=a(28),T=a(224),q=(a(214),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).renderInput=function(e){var t=e.input,n=e.label,r=e.meta,c=e.type,l=e.placeholder,s="field ".concat(r.error&&r.touched?"error":"");return i.a.createElement("div",{className:s},i.a.createElement("label",null,n),i.a.createElement("input",Object.assign({},t,{type:c,placeholder:l})),a.renderError(r))},a.onSubmit=function(e){a.props.onSubmit(e)},a.renderIngredients=function(e){var t=e.fields,n=e.meta,r=n.error,c=n.submitFailed;return i.a.createElement("div",null,i.a.createElement("div",{className:"field u-margin-bottom-sm ingredient"},i.a.createElement("label",null,"Ingredients",c&&r&&i.a.createElement("div",{className:"ui left pointing red basic label u-margin-left-md"},i.a.createElement("i",{className:"exclamation circle icon"}),r)),i.a.createElement("button",{className:"ui positive icon button form-btn",type:"button",onClick:function(){return t.push()}},i.a.createElement("i",{className:"plus light icon"}))),t.map(function(e,n){return i.a.createElement("div",{className:"ingredient",key:n},i.a.createElement(g.a,{name:"".concat(e),component:a.renderInput,type:"text",placeholder:"#".concat(n+1)}),i.a.createElement("button",{className:"ui negative icon button form-btn",type:"button",title:"Remove Ingredient",onClick:function(){return t.remove(n)}},i.a.createElement("i",{className:"trash alternate icon"})))}))},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return i.a.createElement("div",{className:"ui pointing red basic label"},i.a.createElement("i",{className:"exclamation circle icon"}),t)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},i.a.createElement(g.a,{name:"name",type:"text",component:this.renderInput,label:"Recipe Name"}),i.a.createElement(g.a,{name:"image_URL",type:"text",component:this.renderInput,label:"Add Image Link"}),i.a.createElement(g.a,{name:"time",type:"number",component:this.renderInput,label:"Time (minutes)"}),i.a.createElement(g.a,{name:"servings",type:"number",component:this.renderInput,label:"Servings"}),i.a.createElement(T.a,{name:"ingredients",component:this.renderIngredients}),i.a.createElement("div",{className:"u-margin-top"},i.a.createElement("button",{className:"ui button fluid primary"},"Save"))))}}]),t}(n.Component)),F=Object(y.a)({form:"recipeForm",validate:function(e){var t={};if(e.name||(t.name="Please enter a name"),e.image_URL||(t.image_URL="Please provide an image URL"),e.time?e.time<1&&(t.time="Must be at least 1"):t.time="Required",e.servings?e.servings<1&&(t.servings="Must be at least 1"):t.servings="Required",e.ingredients&&e.ingredients.length){var a=[];e.ingredients.forEach(function(e,t){e||(a[t]="Required")}),a.length&&(t.ingredients=a)}else t.ingredients={_error:"At least one ingredient must be entered"};return t}})(q),M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).onSubmit=function(e){var t=a.props.recipes,n=Object.values(t)[Object.keys(t).length-1],i=n?n.id+1:0;a.props.addRecipe(Object(U.a)({id:i},e))},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Add a Recipe"),i.a.createElement(F,{onSubmit:this.onSubmit}))}}]),t}(n.Component),J=Object(l.b)(function(e){return{recipes:e.recipes}},{addRecipe:function(e){return function(t){t({type:"ADD_RECIPE",payload:e}),C.push("/familyfeuds")}}})(M),B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={active:"",formValues:{}},a.onSave=function(e){a.setState({active:"active",formValues:e})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"renderActions",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:"ui button primary",onClick:function(){return e.props.editRecipe(e.state.formValues)}},"Yes"),i.a.createElement("button",{className:"ui button",onClick:function(){return e.setState({active:""})}},"No"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Edit a Recipe"),i.a.createElement(F,{initialValues:Object(U.a)({},this.props.recipe),onSubmit:this.onSave}),i.a.createElement(D,{title:"Edit Recipe",content:"Are you sure you want to save the changes?",actions:this.renderActions(),active:this.state.active}))}}]),t}(n.Component),V=Object(l.b)(function(e,t){return{recipe:e.recipes[t.match.params.id]}},{editRecipe:function(e){return function(t){t({type:"EDIT_RECIPE",payload:e}),C.push("/familyfeuds")}}})(B),W=(a(216),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{history:C},i.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},i.a.createElement(h.a,{path:"/",component:v}),i.a.createElement(h.a,{path:"/familyfeuds",exact:!0,component:P}),i.a.createElement(h.a,{path:"/addRecipe",exact:!0,component:J}),i.a.createElement(h.a,{path:"/editRecipe/:id",exact:!0,component:V})))}}]),t}(n.Component)),H=a(39),Q={0:{id:0,name:"Giant Burger",image_URL:"https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:"Bruce Wayne",time:15,servings:1,ingredients:["slice of cheese","chopped lettuce","beef","slice of tomato"]},1:{id:1,name:"Pizza!",image_URL:"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",author:"Joker",time:30,servings:3,ingredients:["cheese","pepperoni","1 cup of flour","slices of tomato"]},2:{id:2,name:"Carbonara",image_URL:"https://images.unsplash.com/photo-1528658948776-cf610b846f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:"Alfred Pennyworth",time:20,servings:4,ingredients:["pasta","bacon","cheese"]}},z=a(225),X=Object(s.c)({recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RECIPE":case"EDIT_RECIPE":return Object(U.a)({},e,Object(H.a)({},t.payload.id,t.payload));case"DELETE_RECIPE":return R.a.omit(e,t.payload);default:return e}},selectedRecipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECIPE_SELECTED":return t.payload;default:return e}},form:z.a}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,G=Object(s.e)(X,Y(Object(s.a)(o.a)));c.a.render(i.a.createElement(l.a,{store:G},i.a.createElement(W,null)),document.querySelector("#root"))},99:function(e,t,a){e.exports=a(218)}},[[99,2,1]]]);
//# sourceMappingURL=main.039ce93c.chunk.js.map