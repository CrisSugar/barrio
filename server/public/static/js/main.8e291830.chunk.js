(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t){},34:function(e,t,n){e.exports=n(64)},39:function(e,t,n){},40:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30),c=n.n(l),o=(n(39),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),m=(n(40),n(13)),f=n(8),d=n.n(f),p=n(7),E=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then((function(e){return e.data}))},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/currentUser").then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=d.a.create({baseURL:"".concat("https://barrio.herokuapp.com/api","/auth"),withCredentials:!0})},g=(n(58),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){n.props.logout()},n.state={loggedInUser:null},n.service=new E,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.loggedInUser?r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:this.handleLogout},"Logout"))),r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Welcome ",this.state.loggedInUser.username," - Ironhacker"))):r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",null,r.a.createElement(p.b,{to:"/signup"},"Registrarse"))),r.a.createElement("li",null,r.a.createElement("button",null,r.a.createElement(p.b,{to:"/login"},"Iniciar sesi\xf3n"))))))}}]),t}(a.Component)),b=n(16),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.signup(t,a).then((function(e){n.setState({username:"",password:""}),n.props.getUser(e.user)})).catch((function(e){n.setState({username:t,password:a,error:!0})}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.state={username:"",password:""},n.service=new E,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Welcome!, create your account next:"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Sign up"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.login(t,a).then((function(e){console.log("entra en la peticion"),console.log(e),n.setState({username:t,password:a,error:!1}),n.props.getUser(e)})).catch((function(e){n.setState({username:t,password:a,error:!0})}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.state={username:"",password:""},n.service=new E,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Please, login to our site"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(a.Component);a.Component;var j=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,e.neighbourhood)),r.a.createElement("li",null,r.a.createElement("h2",null,e.name)),r.a.createElement("li",null,r.a.createElement("p",null,e.sector)),r.a.createElement("li",null,r.a.createElement("p",null,e.description)),r.a.createElement("li",null,r.a.createElement("p",null,"Contacto: Web: ",e.web,"  Tel\xe9fono: ",e.mobile)),r.a.createElement(p.b,{to:"/shop/".concat(e._id)},"Ver Tienda")))},w=function e(){var t=this;Object(o.a)(this,e),this.getAllOffers=function(){return t.service.get("/offers").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getOffer=function(e){return t.service.get("/offer/".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getAllNotifications=function(){return t.service.get("/notifications").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getNotification=function(e){return t.service.get("/notification/".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getAllShops=function(){return t.service.get("/shops").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getShop=function(e){return t.service.get("/shop/".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.service=d.a.create({baseURL:"${process.env.REACT_APP_API_URL}"})},y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).service=new w,n.state={shops:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllShops().then((function(t){var n;n=t.data.filter((function(e){return e.neighbourhood.includes("Centro")})),e.setState({shops:n})}))}},{key:"render",value:function(){return console.log(this.state.shops),r.a.createElement(r.a.Fragment,null,this.state.shops.map((function(e){return r.a.createElement(j,Object.assign({key:e._id},e))})))}}]),t}(r.a.Component);var C=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,e.neighbourhood)),r.a.createElement("li",null,r.a.createElement("h4",null,e.shop)),r.a.createElement("li",null,r.a.createElement("h2",null,e.product)),r.a.createElement("li",null,r.a.createElement("p",null," Precio : ",e.prize)),r.a.createElement("li",null,r.a.createElement("p",null," Precio oferta: ",e.offerPrize)),r.a.createElement(p.b,{to:"/offer/".concat(e._id)},"Ver Oferta")))},k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).service=new w,n.state={offers:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllOffers().then((function(t){var n;n=t.data.filter((function(e){return e.neighbourhood.includes("Delicias")})),e.setState({offers:n})}))}},{key:"render",value:function(){return console.log(this.state.offers),r.a.createElement(r.a.Fragment,null,this.state.offers.map((function(e){return r.a.createElement(C,Object.assign({key:e._id},e))})))}}]),t}(r.a.Component);var S=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,e.neighbourhood)),r.a.createElement("li",null,r.a.createElement("p",null,e.commentary)),r.a.createElement(p.b,{to:"/notification/".concat(e._id)},"Ver Aviso")))},U=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).service=new w,n.state={notifications:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllNotifications().then((function(t){e.setState({notifications:t.data})}))}},{key:"render",value:function(){return console.log(this.state.notifications),r.a.createElement(r.a.Fragment,null,this.state.notifications.map((function(e){return r.a.createElement(S,Object.assign({key:e._id},e))})))}}]),t}(r.a.Component),x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).service=new w,n.state={shop:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getShop(this.props.match.params.id).then((function(t){e.setState({shop:t.data})})).then((function(t){e.setState({shop:t.data})}))}},{key:"render",value:function(){return this.state.shop?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:this.state.shop.image_url,alt:""}),r.a.createElement("h4",null,this.state.shop.neighbourhood),r.a.createElement("h2",null,this.state.shop.name),r.a.createElement("p",null,this.state.shop.sector),r.a.createElement("p",null,this.state.shop.description),r.a.createElement("p",null,"Contacto: Web: ",this.state.shop.web," Tel\xe9fono: ",this.state.shop.mobile)):r.a.createElement("h2",null,"Cargando info...")}}]),t}(r.a.Component),I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).service=new w,n.state={offer:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getOffer(this.props.match.params.id).then((function(t){e.setState({offer:t.data})}))}},{key:"render",value:function(){return this.state.offer?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,this.state.offer.neighbourhood),r.a.createElement("h4",null,this.state.offer.shop),r.a.createElement("h2",null,this.state.offer.product),r.a.createElement("p",null," Precio : ",this.state.offer.prize),r.a.createElement("p",null,"Precio oferta: ",this.state.offer.offerPrize)):r.a.createElement("h2",null,"Cargando info...")}}]),t}(r.a.Component),A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).service=new w,n.state={notification:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getNotification(this.props.match.params.id).then((function(t){e.setState({notification:t.data})}))}},{key:"render",value:function(){return this.state.notification?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,this.state.notification.neighbourhood),r.a.createElement("p",null,this.state.notification.commentary)):r.a.createElement("h2",null,"Cargando info...")}}]),t}(r.a.Component),F=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={offers:[],shops:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement(g,null))}}]),t}(r.a.Component),P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).service=new w,n.state={offers:[],shops:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"homeclient"},r.a.createElement(k,null),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement(p.b,{to:"/shops"},"Todas las tiendas"))))}}]),t}(r.a.Component),N=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).service=new w,n.state={offers:[],shops:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"homeowner"},r.a.createElement(y,null),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement(p.b,{to:"/offers"},"Todas las ofertas"))))}}]),t}(r.a.Component),_=n(33),D=n.n(_),L=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getUser=function(e){console.log(e),n.setState({loggedInUser:e})},n.logout=function(){n.service.logout().then((function(){n.setState({loggedInUser:null})}))},n.state={loggedInUser:null},n.service=new E,n.fetchUser(),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then((function(t){console.log("entra en el then"),console.log(t),e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{to:"/home"}),r.a.createElement("div",{className:"App"},r.a.createElement(g,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/home",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(m.b,{exact:!0,path:"/maps",render:function(){return r.a.createElement(D.a,null)}})," }",r.a.createElement(m.b,{exact:!0,path:"/homeowner",render:function(){return r.a.createElement(N,null)}}),r.a.createElement(m.b,{exact:!0,path:"/homeclient",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(m.b,{exact:!0,path:"/shops",render:function(t){return r.a.createElement(y,{loggedinUser:e.state.loggedInUser})}}),r.a.createElement(m.b,{exact:!0,path:"/shop/:id",render:function(e){return r.a.createElement(x,e)}}),r.a.createElement(m.b,{exact:!0,path:"/offers",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(m.b,{exact:!0,path:"/offer/:id",render:function(e){return r.a.createElement(I,e)}}),r.a.createElement(m.b,{exact:!0,path:"/notifications",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(m.b,{exact:!0,path:"/notification/:id",render:function(e){return r.a.createElement(A,e)}})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{to:"/login"}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(g,{logout:this.logout}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(v,{getUser:e.getUser})}}),r.a.createElement(m.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(O,{getUser:e.getUser})}})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.8e291830.chunk.js.map