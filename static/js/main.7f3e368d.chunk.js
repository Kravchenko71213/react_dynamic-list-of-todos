(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s,a=c(9),n=c.n(a),l=c(5),r=c(2),i=c(10),o=c(3),d=c.n(o),j=c(1),u=(c(16),c(17),c(8)),b=c.n(u),h=c(0),O=function(e){var t=e.todos,c=e.showTodo,s=e.selectedTodo,a=function(e){return(null===s||void 0===s?void 0:s.id)===e};return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"todo",className:b()({"has-background-info-light":a(e.id)}),children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),Object(h.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:a(e.id)?Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"far fa-eye-slash"})})}):Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var m=function(e){var t=e.query,c=e.onQueryChange,a=e.filterBy,n=e.setFilterBy;return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){var t=e.target;n(t.value)},children:[Object(h.jsx)("option",{value:s.ALL,children:s.ALL}),Object(h.jsx)("option",{value:s.ACTIVE,children:s.ACTIVE}),Object(h.jsx)("option",{value:s.COMPLETED,children:s.COMPLETED})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",value:t,onChange:function(e){c(e.target.value)},placeholder:"Search..."}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.length>0&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})};function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(19);var f=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})},v=function(e){var t=e.selectedTodo,c=e.closeTodo,s=Object(j.useState)(null),a=Object(r.a)(s,2),n=a[0],i=a[1],o=function(){var e=Object(l.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s=(null===t||void 0===t?void 0:t.userId)||0,x("/users/".concat(s));case 3:c=e.sent,i(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Error?console.warn(e.t0.message):console.warn("Unexpected error");case 10:case"end":return e.stop()}var s}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){o()}),[]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),n?Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(h.jsx)(f,{}),"+"]})},p=function(){var e=Object(j.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(j.useState)(null),o=Object(r.a)(n,2),u=o[0],b=o[1],p=Object(j.useState)(""),N=Object(r.a)(p,2),y=N[0],g=N[1],k=Object(j.useState)(s.ALL),C=Object(r.a)(k,2),T=C[0],E=C[1],L=Object(j.useState)(!1),w=Object(r.a)(L,2),S=w[0],A=w[1],B=Object(j.useState)(!0),I=Object(r.a)(B,2),P=I[0],D=I[1],_=function(e,t,c){var a=Object(i.a)(e);if(t){var n=t.toLowerCase().trim();a=a.filter((function(e){return e.title.toLowerCase().includes(n)}))}switch(c){case s.ACTIVE:a=a.filter((function(e){return!e.completed}));break;case s.COMPLETED:a=a.filter((function(e){return e.completed}));case s.ALL:}return a}(c,y,T),M=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/todos");case 3:t=e.sent,a(t),D(!1),A(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),A(!0),D(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){M()}),[]);var V=Object(j.useCallback)((function(e){b(e)}),[u]),F=Object(j.useCallback)((function(){b(null)}),[u]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(m,{query:y,onQueryChange:g,filterBy:T,setFilterBy:E})}),Object(h.jsxs)("div",{className:"block",children:[P&&Object(h.jsx)(f,{}),S?Object(h.jsx)("p",{children:"Error, server is unavailable"}):Object(h.jsx)(O,{todos:_,showTodo:V,selectedTodo:u})]})]})})}),u&&Object(h.jsx)(v,{closeTodo:F,selectedTodo:u})]})};n.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7f3e368d.chunk.js.map