(this["webpackJsonpwhere-is-my-books-app"]=this["webpackJsonpwhere-is-my-books-app"]||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(21),a=n.n(c),o=n(3),i=n(17),s=n(7),u=n(0),b=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Navbar"}),Object(u.jsx)("span",{children:Object(u.jsx)(i.b,{to:"/persona",children:"  personas  "})}),Object(u.jsx)("span",{children:Object(u.jsx)(i.b,{to:"/libro",children:"  libros  "})}),Object(u.jsx)("span",{children:Object(u.jsx)(i.b,{to:"/genero",children:"  generos  "})}),Object(u.jsx)("br",{}),Object(u.jsx)("hr",{})]})},l=n(2),j=n(4),p=n.n(j),d=n(8),O="[libro] Cargar Libros",f="[libro] Agregar Libro",h="[libro] Prestar Libro",x="[libro] Devolver Libro",v="[libro] Borrar Libro",m="[libro] Actualizar Libro",g="[genero] Cargar Generos",y="[genero] Agregar Genero",_="[genero] Borrar Genero",w="[persona] Cargar personas",C="[persona] Agregar persona",S="[persona] Borrar persona",k="[persona] Actualizar persona",E=n(9),B=n.n(E),A=function(){return function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("http://localhost:3000/categoria");case 2:n=e.sent,r=n.status,c=n.data,200===r?t(D(c.categorias)):console.log("Error: ".concat(c.mensaje," Status: ").concat(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e){return{type:g,payload:e}},I=function(e){return{type:_,payload:e}},P=function(e){return{type:y,payload:e}},L=n(6),T=n(22),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(L.a)(t,2),c=n[0],a=n[1],o=function(){a(e)},i=function(e){var t=e.target;a(Object(l.a)(Object(l.a)({},c),{},Object(T.a)({},t.name,t.value)))};return[c,i,o]},H={nombre:""},z=function(){var e=Object(o.b)(),t=N(H),n=Object(L.a)(t,3),r=n[0],c=n[1],a=n[2],i=r.nombre;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Agregar genero"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var r,c,a,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={nombre:e},t.next=3,B.a.post("http://localhost:3000/categoria",r);case 3:c=t.sent,a=c.status,o=c.data,200===a?n(P(o.categoria)):console.log("Error: ".concat(o.mensaje," Status: ").concat(a));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(i)),a()},children:[Object(u.jsx)("input",{type:"text",name:"nombre",onChange:c,value:i,placeholder:"Ingresar nombre",autoComplete:"off"}),Object(u.jsx)("button",{type:"submit",children:" Hecho "})]})]})},G=function(e){var t=e.nombre,n=e._id,r=Object(o.b)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("button",{onClick:function(){r(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var r,c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.delete("http://localhost:3000/categoria/".concat(e));case 2:r=t.sent,c=r.status,a=r.data,200===c?n(I(e)):console.log("Error: ".concat(a.mensaje," Status: ").concat(c));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))},children:"Borrar"}),Object(u.jsx)("br",{})]})},J=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.genero})).generos;return Object(r.useEffect)((function(){e(A())}),[e]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Genero Page"}),Object(u.jsx)(z,{}),null===t||void 0===t?void 0:t.map((function(e){return Object(u.jsx)(G,Object(l.a)({},e),e._id)}))]})},U=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"HomePage"})})},X=function(){return function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("http://localhost:3000/libro");case 2:n=e.sent,r=n.status,c=n.data,200===r?t(M(c.libros)):console.log("Error: ".concat(c.mensaje," Status: ").concat(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(e){return{type:O,payload:e}},R=function(e){return{type:v,payload:e}},V=function(e){return{type:x,payload:e}},q=function(e,t){return{type:h,payload:{id:e,persona_id:t}}},F=function(e){return{type:f,payload:e}},K=function(e,t){return{type:m,payload:{id:e,libro:t}}},Q=function(){return function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("http://localhost:3000/persona");case 3:n=e.sent,r=n.data,t(W(r.personas)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},W=function(e){return{type:w,payload:e}},Y=function(e){return{type:S,payload:e}},Z=function(e,t){return{type:k,payload:{id:e,persona:t}}},$=function(e){var t=e.id,n=Object(o.b)(),c=Object(o.c)((function(e){return e.persona})).personas,a=Object(o.c)((function(e){return e.libro})).libros,i=Object(r.useState)({}),s=Object(L.a)(i,2),b=s[0],l=s[1],j=b.nombre,O=b.descripcion,f=b.persona_id,h=Object(r.useState)({}),x=Object(L.a)(h,2),v=x[0],m=x[1],g=Object(r.useState)(!1),y=Object(L.a)(g,2),_=y[0],w=y[1],C=N({descripcion:""}),S=Object(L.a)(C,3),k=S[0],E=S[1],A=S[2],D=k.descripcion,I=function(e){n(function(e,t){return function(){var n=Object(d.a)(p.a.mark((function n(r){var c,a,o,i;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={persona_id:t},n.next=3,B.a.put("http://localhost:3000/libro/prestar/".concat(e),c);case 3:a=n.sent,o=a.status,i=a.data,200===o?r(q(e,t)):console.log("Error: ".concat(i.mensaje," Status: ").concat(o));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,e)),w(!1)};return Object(r.useEffect)((function(){var e=a.find((function(e){return e._id===t}));l(e)}),[t,a]),Object(r.useEffect)((function(){var e=c.find((function(e){return e._id===f}));m(e)}),[f,c]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Nombre:"}),Object(u.jsx)("p",{children:j}),Object(u.jsx)("h2",{children:"Descripcion: "}),Object(u.jsx)("p",{children:O}),v&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Prestado a"}),Object(u.jsx)("p",{children:v.nombre})]}),Object(u.jsx)("button",{onClick:function(){w(!_)},children:"Prestar a"}),_&&c.map((function(e){return Object(u.jsx)("div",{onClick:function(){return I(e._id)},children:e.nombre},e._id)})),Object(u.jsx)("button",{onClick:function(){n(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var r,c,a,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={id:e},t.next=3,B.a.put("http://localhost:3000/libro/devolver/".concat(e),r);case 3:c=t.sent,a=c.status,o=c.data,200===a?n(V(e)):console.log("Error: ".concat(o.mensaje," Status: ").concat(a));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},children:"Devolver"}),Object(u.jsx)("button",{onClick:function(){n(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var r,c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.delete("http://localhost:3000/libro/".concat(e));case 2:r=t.sent,c=r.status,a=r.data,200===c?n(R(e)):console.log("Error: ".concat(a.mensaje," Status: ").concat(c));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},children:"Borrar"}),Object(u.jsx)("h3",{children:"Actualizar"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(function(e,t){return function(){var n=Object(d.a)(p.a.mark((function n(r){var c,a,o,i;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={descripcion:t},n.next=3,B.a.put("http://localhost:3000/libro/".concat(e),c);case 3:a=n.sent,o=a.status,i=a.data,200===o?r(K(e,i.libro)):console.log("Error: ".concat(i.mensaje," Status: ").concat(o));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,D)),A()},children:[Object(u.jsx)("input",{type:"text",name:"descripcion",onChange:E,value:D,placeholder:"Ingresar descripcion",autoComplete:"off"}),Object(u.jsx)("button",{type:"submit",children:" Hecho "})]}),Object(u.jsx)("br",{})]})},ee=function(){var e=Object(r.useState)(""),t=Object(L.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(L.a)(a,2),s=i[0],b=i[1],l=Object(r.useState)(!1),j=Object(L.a)(l,2),p=j[0],d=j[1],O=Object(o.c)((function(e){return e.genero})).generos,f=Object(o.c)((function(e){return e.libro})).libros,h=function(e){c(e.target.value)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Buscar libros por genero: "}),Object(u.jsxs)("select",{value:n,onChange:h,children:[Object(u.jsx)("option",{hidden:!0,children:" Seleccione un genero "}),O.map((function(e){return Object(u.jsx)("option",{value:e._id,onSelect:h,children:e.nombre},e._id)}))]}),Object(u.jsx)("button",{onClick:function(){b(f.filter((function(e){return e.categoria_id===n}))),d(!0)},children:"Buscar"}),p&&s.map((function(e){return Object(u.jsx)($,{id:e._id},e._id)}))]})},te={nombre:"",descripcion:"",categoria:"",persona:""},ne=function(){var e=Object(o.b)(),t=N(te),n=Object(L.a)(t,3),c=n[0],a=n[1],i=n[2],s=c.nombre,b=c.descripcion,l=Object(o.c)((function(e){return e.genero})).generos,j=Object(r.useState)(""),O=Object(L.a)(j,2),f=O[0],h=O[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Agregar libro"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t,n){return function(){var r=Object(d.a)(p.a.mark((function r(c){var a,o,i,s;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a={nombre:e,descripcion:t,categoria_id:n},r.next=3,B.a.post("http://localhost:3000/libro",a);case 3:o=r.sent,i=o.status,s=o.data,200===i?c(F(s.libro)):console.log("Error: ".concat(s.mensaje," Status: ").concat(i));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(s,b,f)),i()},children:[Object(u.jsx)("input",{type:"text",name:"nombre",onChange:a,value:s,placeholder:"Ingresar nombre",autoComplete:"off"}),Object(u.jsx)("input",{type:"text",name:"descripcion",onChange:a,value:b,placeholder:"Ingresar descripcion",autoComplete:"off"}),Object(u.jsxs)("select",{value:f,onChange:function(e){h(e.target.value)},children:[Object(u.jsx)("option",{hidden:!0,children:" Seleccione un genero "}),l.map((function(e){return Object(u.jsx)("option",{value:e._id,children:e.nombre},e._id)}))]}),Object(u.jsx)("button",{type:"submit",children:" Hecho "})]})]})},re=function(){var e=N({searchText:""}),t=Object(L.a)(e,2),n=t[0],c=t[1],a=Object(o.c)((function(e){return e.libro})).libros,i=Object(r.useState)([]),s=Object(L.a)(i,2),b=s[0],l=s[1],j=Object(r.useState)(!1),p=Object(L.a)(j,2),d=p[0],O=p[1],f=n.searchText;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:" Buscar libro "}),Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),f.length>0){var t=f.toUpperCase(),n=a.filter((function(e){return e.nombre.includes(t)}));l(n),O(!0)}},children:[Object(u.jsx)("input",{type:"text",placeholder:"Buscar libro por nombre",name:"searchText",autoComplete:"off",value:f,onChange:c}),Object(u.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Buscar..."})]}),Object(u.jsxs)("div",{children:[d&&0===b.length&&Object(u.jsx)("div",{children:"El libro no se encuentra"}),b.map((function(e){return Object(u.jsx)($,{id:e._id},e._id)}))]}),Object(u.jsx)("hr",{})]})},ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.libro})).libros;return Object(r.useEffect)((function(){e(X()),e(Q()),e(A())}),[e]),Object(u.jsxs)("div",{children:[Object(u.jsx)(re,{}),Object(u.jsx)(ne,{}),Object(u.jsx)("h1",{children:"LibroPage"}),null===t||void 0===t?void 0:t.map((function(e){return Object(u.jsx)($,{id:e._id},e._id)})),Object(u.jsx)(ee,{})]})},ae=function(e){var t=e.id,n=Object(o.c)((function(e){return e.libro})).libros,c=Object(r.useState)([]),a=Object(L.a)(c,2),i=a[0],s=a[1],b=Object(r.useState)(!1),l=Object(L.a)(b,2),j=l[0],p=l[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){var e=n.filter((function(e){return e.persona_id===t}));s(e),p(!0)},children:"Cargar libros de la persona"}),j&&(null===i||void 0===i?void 0:i.map((function(e){return Object(u.jsx)($,{id:e._id},e._id)})))]})},oe=function(e){var t=e.nombre,n=e.apellido,r=e.alias,c=e.email,a=e._id,i=Object(o.b)(),s=N({name:"",surname:"",userTag:""}),b=Object(L.a)(s,3),l=b[0],j=b[1],O=b[2],f=l.name,h=l.surname,x=l.userTag;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Nombre :"}),Object(u.jsx)("p",{children:t}),Object(u.jsx)("h2",{children:"Apellido: "}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("h2",{children:"Alias :"}),Object(u.jsx)("p",{children:r}),Object(u.jsx)("h2",{children:"Email: "}),Object(u.jsx)("p",{children:c}),Object(u.jsx)("button",{onClick:function(){i(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.a.delete("http://localhost:3000/persona/".concat(e));case 3:n(Y(e)),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(a))},children:"Borrar"}),Object(u.jsx)("h3",{children:"Actualizar"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(function(e,t,n,r){return function(){var c=Object(d.a)(p.a.mark((function c(a){var o,i,s;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o={nombre:t,apellido:n,alias:r},c.prev=1,c.next=4,B.a.put("http://localhost:3000/persona/".concat(e),o);case 4:i=c.sent,s=i.data,a(Z(e,s.persona)),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),console.log(c.t0);case 12:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(e){return c.apply(this,arguments)}}()}(a,f,h,x)),O()},children:[Object(u.jsx)("input",{type:"text",name:"name",onChange:j,value:f,placeholder:"Ingresar nombre",autoComplete:"off"}),Object(u.jsx)("input",{type:"text",name:"surname",onChange:j,value:h,placeholder:"Ingresar apellido",autoComplete:"off"}),Object(u.jsx)("input",{type:"text",name:"userTag",onChange:j,value:x,placeholder:"Ingresar alias",autoComplete:"off"}),Object(u.jsx)("button",{type:"submit",children:" Hecho "})]}),Object(u.jsx)(ae,{id:a}),Object(u.jsx)("br",{})]})},ie=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.persona})).personas;return Object(r.useEffect)((function(){e(Q()),e(X())}),[e]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"PersonaPage"}),null===t||void 0===t?void 0:t.map((function(e){return Object(u.jsx)(oe,Object(l.a)({},e),e._id)}))]})},se=function(){return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(s.d,{children:[Object(u.jsx)(s.b,{exact:!0,path:"/",component:U}),Object(u.jsx)(s.b,{exact:!0,path:"/persona",component:ie}),Object(u.jsx)(s.b,{exact:!0,path:"/genero",component:J}),Object(u.jsx)(s.b,{exact:!0,path:"/libro",component:ce}),Object(u.jsx)(s.a,{to:"/"})]})]})},ue=n(18),be=n(37),le=n(16),je={generos:[]},pe={libros:[]},de={personas:[]},Oe=Object(ue.b)({libro:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{libros:t.payload});case v:return Object(l.a)(Object(l.a)({},e),{},{libros:e.libros.filter((function(e){return e._id!==t.payload}))});case x:return Object(l.a)(Object(l.a)({},e),{},{libros:e.libros.map((function(e){return e._id===t.payload&&(e.persona_id=null),e}))});case h:return Object(l.a)(Object(l.a)({},e),{},{libros:e.libros.map((function(e){return e._id===t.payload.id&&(e.persona_id=t.payload.persona_id),e}))});case f:return Object(l.a)(Object(l.a)({},e),{},{libros:[t.payload].concat(Object(le.a)(e.libros))});case m:return Object(l.a)(Object(l.a)({},e),{},{libros:e.libros.map((function(e){return e._id===t.payload.id&&(e=t.payload.libro),e}))});default:return e}},persona:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(l.a)(Object(l.a)({},e),{},{personas:t.payload});case S:return Object(l.a)(Object(l.a)({},e),{},{personas:e.personas.filter((function(e){return e._id!==t.payload}))});case C:return Object(l.a)(Object(l.a)({},e),{},{personas:[t.payload].concat(Object(le.a)(e.personas))});case k:return Object(l.a)(Object(l.a)({},e),{},{personas:e.personas.map((function(e){return e._id===t.payload.id&&(e=t.payload.persona),e}))});default:return e}},genero:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(l.a)(Object(l.a)({},e),{},{generos:t.payload});case _:return Object(l.a)(Object(l.a)({},e),{},{generos:e.generos.filter((function(e){return e._id!==t.payload}))});case y:return Object(l.a)(Object(l.a)({},e),{},{generos:[t.payload].concat(Object(le.a)(e.generos))});default:return e}}}),fe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.c,he=Object(ue.d)(Oe,fe(Object(ue.a)(be.a))),xe=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{store:he,children:Object(u.jsx)(se,{})})})};n(71);a.a.render(Object(u.jsx)(xe,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.ff904246.chunk.js.map