(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":1,"link":"/images/1.png"},{"id":2,"link":"/images/2.png"},{"id":3,"link":"/images/3.png"},{"id":4,"link":"/images/4.png"},{"id":5,"link":"/images/5.png"},{"id":6,"link":"/images/6.png"},{"id":7,"link":"./images/7.png"},{"id":8,"link":"./images/8.png"},{"id":9,"link":"./images/9.png"},{"id":10,"link":"./images/10.png"},{"id":11,"link":"./images/11.png"},{"id":12,"link":"./images/12.png"}]')},28:function(e,t,n){e.exports=n(42)},33:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(7),o=n.n(i),r=(n(33),n(8)),s=n(9),l=n(12),u=n(10),m=n(13),d=(n(34),n(35),n(26)),g=(n(36),n(21)),p=n(22),k=n(23),f=n(24),h=n(18),E=n(44),b=(n(37),function(e){return c.a.createElement(E.a,{variant:"dark",fixed:"top"},c.a.createElement(g.a,null,c.a.createElement(E.a.Brand,{href:"index.html",className:"font"},"Clicky Game"),c.a.createElement(E.a.Text,null,e.userMessage||"Click an image to begin!"),c.a.createElement(E.a.Text,null,"Score: ",e.userScore||0," | Top Score: ",e.userTopScore||0)))}),y=function(){return c.a.createElement(g.a,{fluid:!0,className:"m-0 text-center p-2"},c.a.createElement("h3",{className:"font"},"Clicky Game!"),c.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))};function v(e){return c.a.createElement(f.a,{src:e.link,thumbnail:!0,className:"m-3",id:e.id,onClick:function(){return e.handleCount(e.id)}})}var C=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={count:0,score:0,images:h,beenClicked:[],message:""},n.handleCount=function(e){console.log(e);var t=Object(d.a)(n.state.beenClicked);-1===t.indexOf(e)?(t.push(e),n.state.count<n.state.score?n.setState({count:n.state.count+1,beenClicked:t,message:"You guessed correctly!"}):n.setState({count:n.state.count+1,beenClicked:t,score:n.state.score+1,message:"You guessed correctly!"})):(console.log("game over"),n.setState({count:0,beenClicked:[],score:n.state.score,message:"You guessed incorrectly!"}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(b,{userScore:this.state.count,userTopScore:this.state.score,userMessage:this.state.message}),c.a.createElement(y,null),c.a.createElement(g.a,null,c.a.createElement(p.a,{className:"d-flex justify-content-center"},c.a.createElement(k.a,{xs:12,md:8},this.state.images.map((function(t){return c.a.createElement(v,{link:t.link,id:t.id,handleCount:e.handleCount})}))))))}}]),t}(c.a.Component),x=function(){return c.a.createElement("p",{className:"small text-center m-0 py-4 text-light"},"Made for University of Arizona Coding Bootcamp, Week-19, January 2020")},O=(n(41),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,null),c.a.createElement(x,null))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c802b85d.chunk.js.map