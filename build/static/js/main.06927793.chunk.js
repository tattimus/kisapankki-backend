(this.webpackJsonpkisapankki=this.webpackJsonpkisapankki||[]).push([[0],{15:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(14),l=a.n(s),c=a(1),u=a(3),o=a.n(u),i=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},m=a(4),p=a.n(m),d="".concat("http://localhost:3001/api","/login"),v=function(e){var t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(p.a.post(d,e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},g=function(e){var t=e.setUser,a=e.setShowLogin,s=Object(n.useState)(null),l=Object(c.a)(s,2),u=l[0],m=l[1],p=Object(n.useState)(""),d=Object(c.a)(p,2),g=d[0],b=d[1],f=Object(n.useState)(""),E=Object(c.a)(f,2),h=E[0],j=E[1];return r.a.createElement("div",{className:"login-form"},r.a.createElement("h2",null,"Kirjaudu sis\xe4\xe4n"),r.a.createElement(i,{message:u}),r.a.createElement("form",{onSubmit:function(e){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,o.a.awrap(v({username:g,password:h}));case 4:n=r.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),t(n),b(""),j(""),a(!1),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(1),m("V\xe4\xe4r\xe4 k\xe4ytt\xe4j\xe4tunnus/salasana"),setTimeout((function(){m(null)}),5e3);case 16:case"end":return r.stop()}}),null,null,[[1,12]])}},r.a.createElement("div",null,r.a.createElement("input",{className:"username",type:"text",value:g,name:"Username",placeholder:"K\xe4ytt\xe4j\xe4tunnus",onChange:function(e){var t=e.target;return b(t.value)}})),r.a.createElement("div",null,r.a.createElement("input",{className:"password",type:"password",value:h,name:"Password",placeholder:"Salasana",onChange:function(e){var t=e.target;return j(t.value)}})),r.a.createElement("button",{type:"submit",className:"login-button"},"Kirjaudu")))},b="".concat("http://localhost:3001/api","/signup"),f=function(e){var t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(p.a.post(b,e));case 2:return t=a.sent,console.log(b),a.abrupt("return",t.data);case 5:case"end":return a.stop()}}))},E=function(e){var t=e.setUser,a=e.setShowSignUp,s=Object(n.useState)(null),l=Object(c.a)(s,2),u=l[0],m=l[1],p=Object(n.useState)(""),d=Object(c.a)(p,2),v=d[0],g=d[1],b=Object(n.useState)(""),E=Object(c.a)(b,2),h=E[0],j=E[1],w=Object(n.useState)(""),S=Object(c.a)(w,2),O=S[0],y=S[1],N=Object(n.useState)(""),k=Object(c.a)(N,2),x=k[0],U=k[1];return r.a.createElement("div",{className:"signup-form"},r.a.createElement("h2",null,"Rekister\xf6idy"),r.a.createElement(i,{message:u}),r.a.createElement("form",{onSubmit:function(e){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,o.a.awrap(f({name:v,username:h,password:O,key:x}));case 4:n=r.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),t(n),g(""),j(""),y(""),U(""),a(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(1),m("Jotain meni vikaan"),setTimeout((function(){m(null)}),5e3);case 18:case"end":return r.stop()}}),null,null,[[1,14]])}},r.a.createElement("div",null,r.a.createElement("input",{className:"name",type:"text",value:v,name:"Name",placeholder:"Nimi",onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement("div",null,r.a.createElement("input",{className:"username",type:"text",value:h,name:"Username",placeholder:"K\xe4ytt\xe4j\xe4tunnus",onChange:function(e){var t=e.target;return j(t.value)}})),r.a.createElement("div",null,r.a.createElement("input",{className:"password",type:"password",value:O,name:"Password",placeholder:"Salasana",onChange:function(e){var t=e.target;return y(t.value)}})),r.a.createElement("div",null,r.a.createElement("input",{className:"key",type:"text",value:x,name:"Key",placeholder:"Avain",onChange:function(e){var t=e.target;return U(t.value)}})),r.a.createElement("button",{type:"submit",className:"signup-button"},"Rekister\xf6idy")))},h=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(!1),u=Object(c.a)(l,2),o=u[0],i=u[1],m=Object(n.useState)(!1),p=Object(c.a)(m,2),d=p[0],v=p[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);s(t)}}),[]);return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"}),null===a?r.a.createElement(n.Fragment,null,r.a.createElement("button",{className:"login-button-header",onClick:function(){return i(!o),void v(!1)}},"Kirjaudu"),r.a.createElement("button",{className:"signup-button-header",onClick:function(){return v(!d),void i(!1)}},"Rekister\xf6idy")):r.a.createElement("div",null,r.a.createElement("div",{className:"logged"},"Kirjautuneena ",a.username),r.a.createElement("div",{className:"logout"},r.a.createElement("button",{className:"logout-button-header",onClick:function(){return window.localStorage.removeItem("loggedUser"),void s(null)}},"Kirjaudu ulos")))),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Kisateht\xe4v\xe4pankki"),o&&r.a.createElement(g,{setUser:s,setShowLogin:i}),d&&r.a.createElement(E,{setUser:s,setShowSignUp:v})))};a(39);l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.06927793.chunk.js.map