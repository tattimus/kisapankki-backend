(this.webpackJsonpkisapankki=this.webpackJsonpkisapankki||[]).push([[0],{15:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(14),l=a.n(s),u=a(2),c=a(3),o=a.n(c),i=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},m=a(4),p=a.n(m),v="".concat("/api","/login"),d=function(e){var t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(p.a.post(v,e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},g=function(e){var t=e.setUser,a=e.setPage,s=Object(n.useState)(null),l=Object(u.a)(s,2),c=l[0],m=l[1],p=Object(n.useState)(""),v=Object(u.a)(p,2),g=v[0],f=v[1],b=Object(n.useState)(""),E=Object(u.a)(b,2),h=E[0],j=E[1];return r.a.createElement("div",{className:"login-form"},r.a.createElement("h2",null,"Kirjaudu sis\xe4\xe4n"),r.a.createElement(i,{message:c}),r.a.createElement("form",{onSubmit:function(e){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,o.a.awrap(d({username:g,password:h}));case 4:n=r.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),t(n),f(""),j(""),a("tasks"),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(1),m("V\xe4\xe4r\xe4 k\xe4ytt\xe4j\xe4tunnus/salasana"),setTimeout((function(){m(null)}),5e3);case 16:case"end":return r.stop()}}),null,null,[[1,12]])}},r.a.createElement("div",null,r.a.createElement("input",{className:"username",type:"text",value:g,name:"Username",placeholder:"K\xe4ytt\xe4j\xe4tunnus",onChange:function(e){var t=e.target;return f(t.value)}})),r.a.createElement("div",null,r.a.createElement("input",{className:"password",type:"password",value:h,name:"Password",placeholder:"Salasana",onChange:function(e){var t=e.target;return j(t.value)}})),r.a.createElement("button",{type:"submit",className:"login-button"},"Kirjaudu")))},f="".concat("/api","/signup"),b=function(e){var t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(p.a.post(f,e));case 2:return t=a.sent,console.log(f),a.abrupt("return",t.data);case 5:case"end":return a.stop()}}))},E=function(e){var t=e.setUser,a=e.setPage,s=Object(n.useState)(null),l=Object(u.a)(s,2),c=l[0],m=l[1],p=Object(n.useState)(""),v=Object(u.a)(p,2),d=v[0],g=v[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),h=E[0],j=E[1],k=Object(n.useState)(""),w=Object(u.a)(k,2),y=w[0],N=w[1],O=Object(n.useState)(""),S=Object(u.a)(O,2),x=S[0],C=S[1];return r.a.createElement("div",{className:"signup-form"},r.a.createElement("h2",null,"Rekister\xf6idy"),r.a.createElement(i,{message:c}),r.a.createElement("form",{onSubmit:function(e){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,o.a.awrap(b({name:d,username:h,password:y,key:x}));case 4:n=r.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),t(n),g(""),j(""),N(""),C(""),a("tasks"),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(1),m("Jotain meni vikaan"),setTimeout((function(){m(null)}),5e3);case 18:case"end":return r.stop()}}),null,null,[[1,14]])}},r.a.createElement("div",null,r.a.createElement("input",{className:"name",type:"text",value:d,name:"Name",placeholder:"Nimi",onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement("div",null,r.a.createElement("input",{className:"username",type:"text",value:h,name:"Username",placeholder:"K\xe4ytt\xe4j\xe4tunnus",onChange:function(e){var t=e.target;return j(t.value)}})),r.a.createElement("div",null,r.a.createElement("input",{className:"password",type:"password",value:y,name:"Password",placeholder:"Salasana",onChange:function(e){var t=e.target;return N(t.value)}})),r.a.createElement("div",null,r.a.createElement("input",{className:"key",type:"text",value:x,name:"Key",placeholder:"Avain",onChange:function(e){var t=e.target;return C(t.value)}})),r.a.createElement("button",{type:"submit",className:"signup-button"},"Rekister\xf6idy")))},h=function(){var e=Object(n.useState)("tasks"),t=Object(u.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(null),c=Object(u.a)(l,2),o=c[0],i=c[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);i(t)}}),[]);var m=function(e){return function(t){t.preventDefault(),s(e)}};return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo",onClick:m("tasks")}),null===o?r.a.createElement(n.Fragment,null,r.a.createElement("button",{className:"login-button-header",onClick:m("login")},"Kirjaudu"),r.a.createElement("button",{className:"signup-button-header",onClick:m("signup")},"Rekister\xf6idy")):r.a.createElement("div",null,r.a.createElement("div",{className:"logged"},"Kirjautuneena ",o.username),r.a.createElement("div",{className:"logout"},r.a.createElement("button",{className:"logout-button-header",onClick:function(){return window.localStorage.removeItem("loggedUser"),i(null),void m("tasks")}},"Kirjaudu ulos")))),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Kisateht\xe4v\xe4pankki"),"tasks"===a?r.a.createElement("div",null):"login"===a?r.a.createElement(g,{setUser:i,setPage:s}):"signup"===a?r.a.createElement(E,{setUser:i,setPage:s}):void 0))};a(39);l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3132051e.chunk.js.map