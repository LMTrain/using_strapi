(this["webpackJsonpusing-strapi"]=this["webpackJsonpusing-strapi"]||[]).push([[0],{21:function(e,t,a){},44:function(e,t,a){e.exports=a(90)},49:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),o=a.n(s),l=(a(49),a(12)),c=a(13),i=a(15),m=a(14),u=a(16),d=a(11),p=a(10);a(21);var h=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"https://lmtrain.github.io/lm-images/assets/images/bugatti_3.jpg",width:"350",height:"250",className:"App-logo",alt:"logo"}),r.a.createElement(d.b,{to:"/Signin",className:"/Signin"===window.location.pathname?"nav-link active":"nav-link"},"Sign in")))},g=a(18),E=a.n(g),f=a(41),b=a(42),v=a(43),S=a.n(v),w=a(96),O=a(91),y=a(92),j=function(e){var t=e.show,a=e.message;return t&&r.a.createElement("div",{style:{left:"50%",transform:"translatex(-50%)",position:"fixed"}},r.a.createElement("div",{className:"p-3 bg-danger my-2 rounded"},r.a.createElement(w.a,null,r.a.createElement(O.a,null,"Input Error"),r.a.createElement(y.a,null,a))))},k=a(93),N=a(97),T=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"http://localhost:1337",C=new S.a(T),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",toast:!1,toastMessage:"",redirect:!1,loading:!1},a.handleChange=function(e){console.log(e);var t=e.target.name,n=e.target.value;console.log(t),console.log(n),a.setState(Object(b.a)({},t,n))},a.handleSubmit=function(){var e=Object(f.a)(E.a.mark((function e(t){var n,r,s,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.username,s=n.password,!a.isFormEmpty(a.state)){e.next=5;break}return a.showToast("Fill in all fields"),e.abrupt("return");case 5:return e.prev=5,a.setState({loading:!0}),e.next=9,C.login(r,s);case 9:o=e.sent,a.setState({loading:!1,redirect:!0}),console.log("THIS IS SIGN IN RESPONSE",o),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),a.setState({loading:!1}),a.showToast(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}(),a.isFormEmpty=function(e){var t=e.username,a=e.password;return!t||!a},a.showToast=function(e){a.setState({toast:!0,toastMessage:e}),setTimeout((function(){return a.setState({toast:!1,toastMessage:""})}),5e3)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.toastMessage,a=e.toast,n=e.loading;return!0===this.state.redirect?r.a.createElement(p.a,{to:"/UserPage"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card card-body"},r.a.createElement(k.a,null,r.a.createElement("form",{className:"form-groups"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"}),r.a.createElement("input",{id:"username",type:"text",name:"username",placeholder:"Username",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"}),r.a.createElement("input",{id:"password",type:"password",name:"password",placeholder:"Password",onChange:this.handleChange})),r.a.createElement(N.a,{type:"submit",onClick:this.handleSubmit,disabled:n,color:"success",size:"sm"},"Sign In")))),r.a.createElement(j,{show:a,message:t}))}}]),t}(r.a.Component),x=a(94),_=a(95),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement(_.a,{size:"md-10"},r.a.createElement("div",null,r.a.createElement("b",null," Welcome Guys"))),r.a.createElement(_.a,{size:"md-2"},r.a.createElement("div",{className:"lineitems"},r.a.createElement("span",null,r.a.createElement(N.a,{type:"submit",color:"success",size:"sm",onClick:function(){return console.log("THIS IS SETTINGS")}},"Settings")),r.a.createElement(N.a,{type:"submit",color:"success",size:"sm",onClick:function(){return console.log("THIS IS TODAYS DEAL")}},"Todays Deal"),r.a.createElement(N.a,{color:"success",size:"sm"},r.a.createElement(d.b,{to:"/Home",className:"/Home"===window.location.pathname?"nav-link active":"nav-link"},"Sign Out"))))))}}]),t}(n.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(p.b,{exact:!0,path:"/home",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(p.b,{exact:!0,path:"/Signin",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(p.b,{exact:!0,path:"/UserPage",render:function(){return r.a.createElement(A,null)}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.7b2ce7a8.chunk.js.map