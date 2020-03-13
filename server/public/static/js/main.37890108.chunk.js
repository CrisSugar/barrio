(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t){},34:function(e,t,n){e.exports=n(67)},39:function(e,t,n){},40:function(e,t,n){},58:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30),o=n.n(l),c=(n(39),n(1)),i=n(2),u=n(5),s=n(4),h=n(6),m=(n(40),n(13)),f=n(15),d=n.n(f),p=(n(58),n(3)),E=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,n,a){return t.service.post("/signup",{username:e,password:n,role:a}).then((function(e){return e.data}))},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/currentUser").then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=d.a.create({baseURL:"".concat("https://barrio-app.herokuapp.com/api","/auth"),withCredentials:!0})},g=(n(59),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleLogout=function(e){n.props.logout()},n.state={loggedInUser:null},n.service=new E,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.loggedInUser?r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:this.handleLogout},"Logout"))),r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"navimag",src:"../../../logo193.png",alt:"",height:"60"}),r.a.createElement("h2",null,"Hola, ",this.state.loggedInUser.username," !")))):r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("img",{className:"navimag",src:"../../../logo193.png",alt:"",height:"60"}),r.a.createElement("li",{className:"navlink"},r.a.createElement(p.b,{to:"/signup"},"Registrarse")),r.a.createElement("li",{className:"navlink"},r.a.createElement(p.b,{to:"/login"},"Iniciar sesi\xf3n")))))}}]),t}(a.Component)),b=n(10),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password,r=n.state.neighbourhood,l=n.state.role;n.service.signup(t,a,r).then((function(e){n.setState({username:"",password:"",neighbourhood:"",role:""}),n.props.getUser(e.user)})).catch((function(e){n.setState({username:t,password:a,neighbourhood:r,role:l,error:!0})}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.state={username:"",password:"",neighbourhood:"",role:""},n.service=new E,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sigform"},r.a.createElement("h1",null," ;-) "),r.a.createElement("h3",null,"\xa1Bienvenido a tu Barrio! Crea tu cuenta aqu\xed:"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Nombre de Usuario:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Rol:"," ",r.a.createElement("select",{name:"role",value:this.state.role,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"vecino"},"Vecino"),r.a.createElement("option",{value:"comerciante"},"Comerciante")))),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Barrio:"),r.a.createElement("input",{type:"text",name:"neighbourhood",value:this.state.neighbourhood,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{className:"enviar",type:"submit",value:"Enviar"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.login(t,a).then((function(e){console.log("entra en la peticion"),console.log(e),n.setState({username:t,password:a,error:!1}),n.props.getUser(e)})).catch((function(e){n.setState({username:t,password:a,error:!0})}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.state={username:"",password:""},n.service=new E,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Inicia sesi\xf3n con tus datos:"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Usuario:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{className:"enviar",type:"submit",value:"Enviar"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(a.Component);a.Component,n(65);var j=function(e){var t=this;return r.a.createElement("div",{className:"item"},r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,r.a.createElement("img",{className:"photo",src:e.imageUrl,alt:"image"})),r.a.createElement("li",null,r.a.createElement("h4",null,e.neighbourhood)),r.a.createElement("li",null,r.a.createElement("h2",null,e.name)),r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement(p.b,{to:"/shop/".concat(e._id)},"Ver Tienda")),r.a.createElement("button",{onClick:function(){return t.deleteAnyShop(t.state.shop._id)}},"Borrar"))))},C=function(){function e(){var t=this;Object(c.a)(this,e),this.getAllOffers=function(){return t.service.get("/offers").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getOffer=function(e){return t.service.get("/offer/".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getAllNotifications=function(){return t.service.get("/notifications").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getNotification=function(e){return t.service.get("/notification/".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getAllShops=function(){return t.service.get("/shops").then((function(e){return e.data})).catch((function(e){console.log(e)}))},this.getShop=function(e){return t.service.get("/shop/".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getAddShop=function(e){return t.service.post("/shop/new",e).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getAddOffer=function(e){return t.service.post("/offer/new",e).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getAddNotification=function(e){return t.service.post("/notification/new",e).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.deleteShop=function(e){return t.service.delete("/shop/".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.service=d.a.create({baseURL:"".concat("https://barrio-app.herokuapp.com/api")})}return Object(i.a)(e,[{key:"handleUpload",value:function(e){return this.service.post("/upload",e).then((function(e){return e.data}))}},{key:"saveNewThing",value:function(e){return this.service.post("/things/create",e).then((function(e){return e.data}))}}]),e}(),y=(n(66),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).service=new C,n.state={shops:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllShops().then((function(t){var n;n=t.filter((function(e){return console.log(e),e.neighbourhood.includes("")})),e.setState({shops:n})}))}},{key:"render",value:function(){return console.log(this.state.shops),r.a.createElement("div",{className:"cadatienda"},r.a.createElement("ul",{className:"shops-container"},this.state.shops.map((function(e){return r.a.createElement(j,Object.assign({key:e._id},e))}))),r.a.createElement("button",{className:"buttonshop"},r.a.createElement(p.b,{to:"/shop/new"},"Crear Tienda")))}}]),t}(r.a.Component));var w=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,e.neighbourhood)),r.a.createElement("li",null,r.a.createElement("h4",null,e.shop)),r.a.createElement("li",null,r.a.createElement("h2",null,e.product)),r.a.createElement("li",null,r.a.createElement("p",null," Precio : ",e.prize)),r.a.createElement("li",null,r.a.createElement("p",null," Precio oferta: ",e.offerPrize))))},S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).service=new C,n.state={offers:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllOffers().then((function(t){var n;n=t.filter((function(e){return e.neighbourhood.includes("")})),e.setState({offers:n})}))}},{key:"render",value:function(){return console.log(this.state.offers),r.a.createElement("div",null,this.state.offers.map((function(e){return r.a.createElement(w,Object.assign({key:e._id},e))})),r.a.createElement("button",null,r.a.createElement(p.b,{to:"/offer/new"},"Crear Oferta")))}}]),t}(r.a.Component);var k=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,e.neighbourhood)),r.a.createElement("li",null,r.a.createElement("p",null,e.commentary))))},U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).service=new C,n.state={notifications:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllNotifications().then((function(t){var n;n=t.filter((function(e){return e.neighbourhood.includes("")})),e.setState({notifications:n})}))}},{key:"render",value:function(){return console.log(this.state.notifications),r.a.createElement("div",null,this.state.notifications.map((function(e){return r.a.createElement(k,Object.assign({key:e._id},e))})),r.a.createElement("button",null,r.a.createElement(p.b,{to:"/notification/new"},"Crear aviso")))}}]),t}(r.a.Component),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).service=new C,n.state={shop:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getShop(this.props.match.params.id).then((function(t){e.setState({shop:t})}))}},{key:"render",value:function(){return this.state.shop?r.a.createElement("div",{className:"tienda"},r.a.createElement("img",{src:this.state.shop.image_url,alt:""}),r.a.createElement("h4",null,this.state.shop.neighbourhood),r.a.createElement("h2",null,this.state.shop.name),r.a.createElement("p",null,this.state.shop.sector),r.a.createElement("p",null,this.state.shop.description),r.a.createElement("p",null,"Contacto: Web: ",this.state.shop.web," Tel\xe9fono:",this.state.shop.mobile),r.a.createElement("button",null,r.a.createElement(p.b,{to:"/shops"},r.a.createElement("h4",null,"Ver todas las tiendas")))):r.a.createElement("h2",null,"Cargando info...")}}]),t}(r.a.Component),N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).service=new C,n.state={offer:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getOffer(this.props.match.params.id).then((function(t){e.setState({offer:t})}))}},{key:"render",value:function(){return this.state.offer?r.a.createElement("div",null,r.a.createElement("h4",null,this.state.offer.neighbourhood),r.a.createElement("h4",null,this.state.offer.shop),r.a.createElement("h2",null,this.state.offer.product),r.a.createElement("p",null," Precio : ",this.state.offer.prize),r.a.createElement("p",null,"Precio oferta: ",this.state.offer.offerPrize),r.a.createElement("button",null,r.a.createElement(p.b,{to:"/offers"},r.a.createElement("h4",null,"Ver todas las ofertas")))):r.a.createElement("h2",null,"Cargando info...")}}]),t}(r.a.Component),A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).service=new C,n.state={notification:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getNotification(this.props.match.params.id).then((function(t){e.setState({notification:t})}))}},{key:"render",value:function(){return this.state.notification?r.a.createElement("div",null,r.a.createElement("h4",null,this.state.notification.neighbourhood),r.a.createElement("p",null,this.state.notification.commentary),r.a.createElement("button",null,r.a.createElement(p.b,{to:"/notifications"},r.a.createElement("h4",null,"Ver todos los avisos")))):r.a.createElement("h2",null,"Cargando info...")}}]),t}(r.a.Component),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).service=new C,n.state={offers:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllOffers().then((function(t){var n;n=t.filter((function(e){return e.neighbourhood.includes("")})),e.setState({offers:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{class:"homeclient"},r.a.createElement("h1",{className:"titular"},"Aqu\xed encontrar\xe1s un mont\xf3n de ofertas, \xe9chales un ojo!"),r.a.createElement("div",{className:"item"},r.a.createElement(S,null)),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("button",null,r.a.createElement(p.b,{to:"/shops"},"Todas las tiendas")))))}}]),t}(r.a.Component),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).service=new C,n.state={shops:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllShops().then((function(t){var n;n=t.filter((function(e){return console.log(e),e.neighbourhood.includes("")})),e.setState({shops:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{class:"homeowner"},r.a.createElement(y,null),r.a.createElement("div",{class:"but-cont"},r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement(p.b,{to:"/offers"},r.a.createElement("h4",null,"Todas las ofertas")))),r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement(p.b,{to:"/notifications"},r.a.createElement("h4",null,"Todos los avisos"))))))}}]),t}(r.a.Component),P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleFileUpload=function(e){console.log("The file to be uploaded is: ",e);var t=new FormData;t.append("imageUrl",e),n.service.handleUpload(t).then((function(e){console.log(e.secure_url),n.setState({imageUrl:e.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},n.handleFormSubmit=function(e){e.preventDefault(),n.handleFileUpload(n.state.file);var t=n.state.name,a=n.state.neighbourhood,r=n.state.sector,l=n.state.description,o=n.state.imageUrl,c=(n.state.owner,n.state.mobile),i=n.state.web,u=n.state.year,s=n.state.lat,h=n.state.lng;n.service.getAddShop(n.state).then((function(e){console.log("added: ",e),n.setState({name:"",neighbourhood:"",sector:r,description:"",imageUrl:"",owner:"",mobile:"",web:"",year:"",lat:"",lng:"",error:!1})})).catch((function(e){n.setState({name:t,neighbourhood:a,sector:r,description:l,imageUrl:o,mobile:c,web:i,year:u,lat:s,lng:h,error:!0})}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.handleImage=function(e){var t=e.target,a=t.name,r=t.value,l=t.files;n.setState(Object(b.a)({},a,r)),n.setState(Object(b.a)({},"file",l[0]))},n.state={name:"",neighbourhood:"",sector:"",description:"",imageUrl:"",mobile:"",web:"",year:"",lat:"",lng:""},n.service=new C,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Nueva Tienda"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Nombre"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Barrio"),r.a.createElement("input",{type:"text",name:"neighbourhood",value:this.state.neighbourhood,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Sector"),r.a.createElement("input",{type:"text",name:"sector",value:this.state.sector,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Descripci\xf3n"),r.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Imagen"),r.a.createElement("input",{type:"file",name:"imageUrl",value:this.state.fileUrl,onChange:function(t){return e.handleImage(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Propietario"),r.a.createElement("input",{type:"text",name:"owner",value:this.state.owner,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"M\xf3vil"),r.a.createElement("input",{type:"text",name:"mobile",value:this.state.mobile,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Web"),r.a.createElement("input",{type:"text",name:"web",value:this.state.web,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"year"),r.a.createElement("input",{type:"text",name:"year",value:this.state.year,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("button",{type:"submit"},"Guardar"),r.a.createElement("h1",null,this.state.error?"Error":"")),r.a.createElement("button",null,r.a.createElement(p.b,{to:"/shops"},r.a.createElement("h4",null,"Ver todas los tiendas"))))}}]),t}(a.Component),D=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.neighbourhood,a=n.state.shop,r=n.state.product,l=n.state.prize,o=n.state.offerPrize;n.service.getAddOffer(n.state).then((function(e){console.log("added: ",e),n.setState({neighbourhood:"",shop:"",product:"",prize:"",offerPrize:"",error:!1})})).catch((function(e){n.setState({neighbourhood:t,shop:a,product:r,prize:l,offerPrize:o,error:!0})}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.state={neighbourhood:"",shop:"",product:"",prize:"",offerPrize:""},n.service=new C,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Nueva Oferta"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Barrio"),r.a.createElement("input",{type:"text",name:"neighbourhood",value:this.state.neighbourhood,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Tienda"),r.a.createElement("input",{type:"text",name:"shop",value:this.state.shop,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Producto"),r.a.createElement("input",{type:"text",name:"product",value:this.state.product,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Precio"),r.a.createElement("input",{type:"text",name:"prize",value:this.state.prize,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Precio de Oferta"),r.a.createElement("input",{type:"text",name:"offerPrize",value:this.state.offerPrize,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("button",{type:"submit"},"Guardar"),r.a.createElement("h1",null,this.state.error?"Error":"")),r.a.createElement("button",null,r.a.createElement(p.b,{to:"/offers"},r.a.createElement("h4",null,"Ver todas las ofertas"))))}}]),t}(a.Component),F=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.neighbourhood,a=n.state.commentary;n.service.getAddNotification(n.state).then((function(e){console.log("added: ",e),n.setState({neighbourhood:"",commentary:"",error:!1})})).catch((function(e){n.setState({neighbourhood:t,commentary:a,error:!0})}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.state={neighbourhood:"",commentary:""},n.service=new C,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Nuevo Aviso"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Barrio"),r.a.createElement("input",{type:"text",name:"neighbourhood",value:this.state.neighbourhood,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Comentario"),r.a.createElement("input",{type:"text",name:"commentary",value:this.state.commentary,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("button",{type:"submit"},"Guardar"),r.a.createElement("h1",null,this.state.error?"Error":"")),r.a.createElement("button",null,r.a.createElement(p.b,{to:"/notifications"},r.a.createElement("h4",null,"Ver todos los avisos"))))}}]),t}(a.Component),T=n(33),B=n.n(T),M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).getUser=function(e){console.log(e),n.setState({loggedInUser:e,role:e.role})},n.selectUserType=function(e){n.setState({userType:e})},n.logout=function(){n.service.logout().then((function(){n.setState({loggedInUser:null})}))},n.state={loggedInUser:null,role:"none",homeClient:["client"],homeOwner:["owner"]},n.service=new E,n.fetchUser(),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then((function(t){console.log("entra en el then"),console.log(t),e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"father"},r.a.createElement(g,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement("div",{className:"App"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/maps",render:function(){return r.a.createElement(B.a,null)}}),r.a.createElement(m.a,{exact:!0,path:"/homeowner",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(m.a,{exact:!0,path:"/homeclient",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(m.a,{exact:!0,path:"/shops",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(m.a,{exact:!0,path:"/shop/new",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(m.a,{exact:!0,path:"/shop/:id",render:function(e){return r.a.createElement(x,e)}}),r.a.createElement(m.a,{exact:!0,path:"/shop/delete",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(m.a,{exact:!0,path:"/offers",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(m.a,{exact:!0,path:"/offer/new",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(m.a,{exact:!0,path:"/offer/:id",render:function(e){return r.a.createElement(N,e)}}),r.a.createElement(m.a,{exact:!0,path:"/notifications",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(m.a,{exact:!0,path:"/notification/new",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(m.a,{exact:!0,path:"/notification/:id",render:function(e){return r.a.createElement(A,e)}}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,{logout:this.logout}),r.a.createElement("header",{className:"App-header"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(v,{getUser:e.getUser})}}),r.a.createElement(m.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(O,{getUser:e.getUser})}})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.37890108.chunk.js.map