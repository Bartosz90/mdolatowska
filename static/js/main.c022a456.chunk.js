(this.webpackJsonpmdolatowska=this.webpackJsonpmdolatowska||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/w1.711be668.jpg"},function(e,t,a){e.exports=a.p+"static/media/w2.c1293fac.jpg"},function(e,t,a){e.exports=a.p+"static/media/w3.41881944.jpg"},function(e,t,a){e.exports=a.p+"static/media/w4.9a04ca35.jpg"},function(e,t,a){e.exports=a.p+"static/media/w5.1df316a9.jpg"},function(e,t,a){e.exports=a.p+"static/media/w6.a09464e0.jpg"},function(e,t,a){e.exports=a.p+"static/media/w7.1ff93743.jpg"},function(e,t,a){e.exports=a.p+"static/media/w8.c04397b5.jpg"},function(e,t,a){e.exports=a.p+"static/media/w9.f03d4d13.jpg"},,function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),i=a.n(o),m=(a(37),a(2)),r=a(9),s=a(6),l=a(7),u=(a(38),a(39),function(){var e=[{id:1,name:"home",path:"/mdolatowska"},{id:2,name:"curiosities",path:"/mdolatowska/curiosities"},{id:3,name:"inspirations",path:"/mdolatowska/inspirations"},{id:4,name:"life drawings",path:"/mdolatowska/life-drawings"}].map((function(e){return c.a.createElement(s.b,{key:e.id,exact:!0,to:e.path,className:"navBtn",activeClassName:"selected"},e.name)}));return c.a.createElement("nav",{className:"navMain"},e)}),d=a(31),p=(a(45),function(){var e=.1,t=Object(d.a)("Drawing & Print - level I").map((function(t){return e+=.1,c.a.createElement("span",{className:"letter",key:e,style:{animationDelay:"".concat(e,"s")}},t)}));return c.a.createElement("section",{className:"mainSection homeSection"},c.a.createElement("h1",null,"Magdalena Dolatowska"),c.a.createElement("h2",null,t))}),g=(a(14),function(){var e=[{id:1,name:"workshops",path:"/mdolatowska/curiosities/workshops"},{id:2,name:"exploration",path:"/mdolatowska/curiosities/exploration"},{id:3,name:"comics-dummy",path:"/mdolatowska/curiosities/comics-dummy"},{id:4,name:"comics-illustration",path:"/mdolatowska/curiosities/comics-illustration"}].map((function(e){return c.a.createElement(s.b,{key:e.id,exact:!0,to:e.path,className:"curiositiesNavBtn"},e.name)}));return c.a.createElement("section",{className:"mainSection curiositiesSection"},c.a.createElement("h1",null,"CURIOSITIES"),c.a.createElement("nav",{className:"navCuriosities"},e))}),f=function(){return c.a.createElement("section",{className:"mainSection"},c.a.createElement("h1",null,"INSPIRATIONS"))},E=function(){return c.a.createElement("section",{className:"mainSection"},c.a.createElement("h1",null,"LIFE DRAWINGS"))},I=function(){return c.a.createElement(s.b,{exact:!0,to:"/mdolatowska/curiosities/",className:"backToCuriositiesBtn"},c.a.createElement("i",{className:"fas fa-arrow-left"})," back")},b=(a(46),function(e){var t=Object(n.useContext)(G),a=Object(r.a)(t,2),o=a[0],i=a[1],s=function(t){t.persist(),i((function(e){return Object(m.a)({},e,{changingImg:!0})})),setTimeout((function(){i((function(e){return Object(m.a)({},e,{changingImg:!1})}))}),300),setTimeout((function(){"next"===t.target.dataset.action?Number(o.zoomedImgIndex)===e.imagesArray.length-1?i((function(e){return Object(m.a)({},e,{zoomedImgIndex:0})})):i((function(e){return Object(m.a)({},e,{zoomedImgIndex:e.zoomedImgIndex+1})})):0===Number(o.zoomedImgIndex)?i((function(t){return Object(m.a)({},t,{zoomedImgIndex:e.imagesArray.length-1})})):i((function(e){return Object(m.a)({},e,{zoomedImgIndex:e.zoomedImgIndex-1})}))}),150)};return c.a.createElement("section",{className:o.closingImg?"zoomedImgContainer closingImg":"zoomedImgContainer"},c.a.createElement("img",{src:e.src,alt:"",className:o.changingImg?"zoomedImg changingImg":"zoomedImg"}),c.a.createElement("button",{className:"changeImg nextImg",onClick:s,"data-action":"next"},c.a.createElement("i",{className:"fas fa-arrow-right","data-action":"next"})),c.a.createElement("button",{className:"changeImg prevImg",onClick:s,"data-action":"prev"},c.a.createElement("i",{className:"fas fa-arrow-left","data-action":"prev"})),c.a.createElement("button",{className:"closeZoom",onClick:function(){i((function(e){return Object(m.a)({},e,{closingImg:!0})})),setTimeout((function(){i((function(e){return Object(m.a)({},e,{zoomed:!1})})),i((function(e){return Object(m.a)({},e,{closingImg:!1})}))}),400)}},c.a.createElement("i",{className:"fas fa-times"})))}),w=a(22),x=a.n(w),h=a(23),k=a.n(h),N=a(24),j=a.n(N),v=a(25),O=a.n(v),z=a(26),S=a.n(z),y=a(27),C=a.n(y),L=a(28),T=a.n(L),A=a(29),D=a.n(A),F=a(30),B=a.n(F),M=(a(47),function(){return c.a.createElement("section",{className:"preloader"},c.a.createElement("div",{className:"square"},c.a.createElement("span",{className:"circle circle1"}),c.a.createElement("span",{className:"circle circle2"}),c.a.createElement("span",{className:"circle circle3"}),c.a.createElement("span",{className:"circle circle4"})))}),P=function(){var e=Object(n.useContext)(G),t=Object(r.a)(e,4),a=t[0],o=t[1],i=t[2],s=t[3];Object(n.useEffect)((function(){return o((function(e){return Object(m.a)({},e,{zoomedImgIndex:0,zoomed:!1})})),window.onLoad=s(),function(){o((function(e){return Object(m.a)({},e,{imagesLoaded:!1})}))}}),[o]);var l=[{id:0,src:x.a},{id:1,src:k.a},{id:2,src:j.a},{id:3,src:O.a},{id:4,src:S.a},{id:5,src:C.a},{id:6,src:T.a},{id:7,src:D.a},{id:8,src:B.a}],u=l.map((function(e,t){return c.a.createElement("div",{className:"img","data-id":t,key:t},c.a.createElement("img",{key:t,src:e.src,alt:"",onClick:i,"data-id":t}))}));return c.a.createElement(c.a.Fragment,null,!a.imagesLoaded&&c.a.createElement(M,null),a.zoomed&&c.a.createElement(b,{src:l[a.zoomedImgIndex].src,imagesArray:l}),c.a.createElement("section",{className:"mainSection workshopsSection"},u),c.a.createElement(I,null))},R=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mainSection"},"Exploration"),c.a.createElement(I,null))},J=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mainSection"},"Comics Dummy"),c.a.createElement(I,null))},q=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mainSection"},"Comics Illustration"),c.a.createElement(I,null))},G=Object(n.createContext)(),U=function(){var e=Object(n.useState)({zoomed:!1,zoomedImgIndex:0,changingImg:!1,closingImg:!1,imagesLoaded:!0}),t=Object(r.a)(e,2),a=t[0],o=t[1];return c.a.createElement(s.a,null,c.a.createElement(G.Provider,{value:[a,o,function(e){e.persist(),o((function(e){return Object(m.a)({},e,{zoomed:!e.zoomed})})),o((function(t){return Object(m.a)({},t,{zoomedImgIndex:Number(e.target.dataset.id)})}))},function(){o((function(e){return Object(m.a)({},e,{imagesLoaded:!0})}))}]},c.a.createElement(u,null),c.a.createElement(l.d,null,c.a.createElement(l.a,{exact:!0,from:"/",to:"/mdolatowska"}),c.a.createElement(l.b,{exact:!0,path:"/mdolatowska",component:p}),c.a.createElement(l.b,{exact:!0,path:"/mdolatowska/curiosities",component:g}),c.a.createElement(l.b,{exact:!0,path:"/mdolatowska/inspirations",component:f}),c.a.createElement(l.b,{exact:!0,path:"/mdolatowska/life-drawings",component:E}),c.a.createElement(l.b,{exact:!0,path:"/mdolatowska/curiosities/workshops",component:P}),c.a.createElement(l.b,{exact:!0,path:"/mdolatowska/curiosities/exploration",component:R}),c.a.createElement(l.b,{exact:!0,path:"/mdolatowska/curiosities/comics-dummy",component:J}),c.a.createElement(l.b,{exact:!0,path:"/mdolatowska/curiosities/comics-illustration",component:q}))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.c022a456.chunk.js.map