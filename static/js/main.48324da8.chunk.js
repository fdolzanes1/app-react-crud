(this["webpackJsonpapp-react-crud"]=this["webpackJsonpapp-react-crud"]||[]).push([[0],{21:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},29:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(13),o=a.n(r),l=(a(26),a(7)),i=a(8),s=a(10),u=a(9),m=a(11),h=(a(27),function(e){var t=e.title;return c.a.createElement("header",null,c.a.createElement("h1",null,t||"Escolha um titulo"))}),f=a(15),d=a.n(f),p=a(41),E=a(42),v=a(43),b=a(44),g=a(45),j=a(46),y=a(47),O=(a(29),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={model:{nome:"",email:"",telefone:""}},a.setValues=function(e,t){var n=a.state.model;n[t]=e.target.value,a.setState({model:n})},a.create=function(){a.setState({model:{nome:"",email:"",telefone:""}}),a.props.contactCreate(a.state.model)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;d.a.subscribe("edit-contact",(function(t,a){e.setState({model:a})}))}},{key:"render",value:function(){var e=this;return c.a.createElement(p.a,null,c.a.createElement(E.a,null,c.a.createElement(v.a,{for:"nome"},"Nome"),c.a.createElement(b.a,{id:"nome",value:this.state.model.nome,type:"text",placeholder:"Digite o seu Nome",onChange:function(t){return e.setValues(t,"nome")}})),c.a.createElement(E.a,null,c.a.createElement(v.a,{for:"email"},"Email"),c.a.createElement(b.a,{id:"email",value:this.state.model.email,type:"text",placeholder:"Digite o seu Email",onChange:function(t){return e.setValues(t,"email")}})),c.a.createElement(E.a,null,c.a.createElement(v.a,{for:"telefone"},"Telefone"),c.a.createElement(b.a,{id:"telefone",value:this.state.model.telefone,type:"text",placeholder:"Digite o seu Telefone",onChange:function(t){return e.setValues(t,"telefone")}})),c.a.createElement(E.a,null,c.a.createElement(g.a,{onClick:this.create,color:"primary"},"Salvar Contato")))}}]),t}(n.Component)),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.props.updateSearch(e.target.value)}},{key:"render",value:function(){return c.a.createElement(b.a,{type:"text",placeholder:"Find a Contact",className:"input-search",onChange:this.handleChange.bind(this),value:this.props.searchText})}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).delete=function(e){a.props.deleteContact(e)},a.onEdit=function(e){d.a.publish("edit-contact",e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"filter",value:function(e){var t=this;return this.props.filter?e.filter((function(e){return e.nome.toString().toLowerCase().indexOf(t.props.filter.toLowerCase())>=0})):e}},{key:"render",value:function(){var e=this,t=this.props.contacts;return c.a.createElement(j.a,{responsive:!0},c.a.createElement("thead",{className:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",null,"Nome"),c.a.createElement("th",null,"Email"),c.a.createElement("th",null,"Telefone"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,this.filter(t).map((function(t){return c.a.createElement("tr",{key:t._id},c.a.createElement("td",null,t.nome),c.a.createElement("td",null,t.email),c.a.createElement("td",null,t.telefone),c.a.createElement("td",null,c.a.createElement(g.a,{color:"info",size:"sm",onClick:function(a){return e.onEdit(t)}},"Editar"),c.a.createElement(g.a,{color:"danger",size:"sm",onClick:function(a){return e.delete(t._id)}},"Excluir")))}))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).url="https://nameless-badlands-32634.herokuapp.com/api/contacts",a.state={contacts:[],message:{text:"",alert:""},filter:null},a.save=function(e){var t={_id:e._id,nome:e.nome,email:e.email,telefone:e.telefone},n={method:null!=t._id?"PUT":"POST",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json"})};null==t._id?fetch(a.url,n).then((function(e){return e.json()})).then((function(e){var t=a.state.contacts;t.push(e),a.setState({contacts:t,message:{text:"Novo Contado Adicionado",alert:"success"}}),a.timerMessage(3e3)})).catch((function(e){return console.log(e)})):fetch("".concat(a.url,"/").concat(t._id),n).then((function(e){return e.json()})).then((function(e){var n=a.state.contacts;n[a.state.contacts.findIndex((function(e){return e._id===t._id}))]=e,a.setState({contacts:n,message:{text:"Contato Atualizado",alert:"info"}}),a.timerMessage(3e3)})).catch((function(e){return console.log(e)}))},a.delete=function(e){fetch("".concat(a.url,"/").concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){var n=a.state.contacts.filter((function(t){return t._id!==e}));a.setState({contacts:n,message:{text:"Contato Deletado",alert:"danger"}}),a.timerMessage(3e3)})).catch((function(e){return console.log(e)}))},a.timerMessage=function(e){setTimeout((function(){a.setState({message:{text:"",alert:""}})}),e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.url).then((function(e){return e.json()})).then((function(t){return e.setState({contacts:t.docs})})).catch((function(e){return console.log(e)}))}},{key:"updateSearch",value:function(e){this.state.filter;this.setState({filter:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"contact-box"},""!==this.state.message.text?c.a.createElement(y.a,{color:this.state.message.alert,className:"text-center"}," ",this.state.message.text," "):"",c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h2",null,"Cadastro de Contato"),c.a.createElement(O,{contactCreate:this.save})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h2",null,"Listar de Contato"),c.a.createElement(C,{updateSearch:this.updateSearch.bind(this),searchText:this.state.filter}),c.a.createElement(k,{contacts:this.state.contacts,deleteContact:this.delete,filter:this.state.filter}))))}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"page-footer fixed-bottom font-small navbar-dark bg-dark"},c.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",c.a.createElement("a",{href:"https://fdolzanes1.github.com/"}," Fabiano Dolzanes")))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(h,{title:"Contact App"}),c.a.createElement(x,null),c.a.createElement(S,null))}}]),t}(n.Component);o.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.48324da8.chunk.js.map