(this.webpackJsonpmdolatowska=this.webpackJsonpmdolatowska||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/w1.711be668.jpg"},function(e,t,a){e.exports=a.p+"static/media/w2.c1293fac.jpg"},function(e,t,a){e.exports=a.p+"static/media/w3.41881944.jpg"},function(e,t,a){e.exports=a.p+"static/media/w4.9a04ca35.jpg"},function(e,t,a){e.exports=a.p+"static/media/w5.1df316a9.jpg"},function(e,t,a){e.exports=a.p+"static/media/w6.a09464e0.jpg"},function(e,t,a){e.exports=a.p+"static/media/w7.1ff93743.jpg"},function(e,t,a){e.exports=a.p+"static/media/w8.c04397b5.jpg"},function(e,t,a){e.exports=a.p+"static/media/w9.f03d4d13.jpg"},function(e,t,a){e.exports=a.p+"static/media/w10.711be668.jpg"},function(e,t,a){e.exports=a.p+"static/media/w11.c1293fac.jpg"},function(e,t,a){e.exports=a.p+"static/media/w12.41881944.jpg"},function(e,t,a){e.exports=a.p+"static/media/w13.9a04ca35.jpg"},function(e,t,a){e.exports=a.p+"static/media/w14.1df316a9.jpg"},function(e,t,a){e.exports=a.p+"static/media/w15.a09464e0.jpg"},function(e,t,a){e.exports=a.p+"static/media/w16.1ff93743.jpg"},,function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/w17.c04397b5.jpg"},function(e,t,a){e.exports=a.p+"static/media/w18.f03d4d13.jpg"},function(e,t,a){e.exports=a.p+"static/media/w19.711be668.jpg"},function(e,t,a){e.exports=a.p+"static/media/w20.c1293fac.jpg"},,function(e,t,a){e.exports=a(59)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(35),i=a.n(l),r=(a(48),a(2)),c=a(7),s=a(6),m=a(8),d=(a(49),a(50),function(){var e=[{id:1,name:"home",path:"/mdolatowska"},{id:2,name:"curiosities",path:"/mdolatowska/curiosities"},{id:3,name:"inspirations",path:"/mdolatowska/inspirations"},{id:4,name:"life drawings",path:"/mdolatowska/life-drawings"}].map((function(e){return n.a.createElement(s.b,{key:e.id,exact:!0,to:e.path,className:"navBtn",activeClassName:"selected"},e.name)}));return n.a.createElement("nav",{className:"navMain"},e)}),p=a(42),u=(a(56),function(){var e=.1,t=Object(p.a)("Drawing & Print - level I").map((function(t){return e+=.1,n.a.createElement("span",{className:"letter",key:e,style:{animationDelay:"".concat(e,"s")}},t)}));return n.a.createElement("section",{className:"mainSection homeSection"},n.a.createElement("h1",null,"Magdalena Dolatowska"),n.a.createElement("h2",null,t))}),E=(a(30),function(){var e=[{id:1,name:"workshops",path:"/mdolatowska/curiosities/workshops"},{id:2,name:"exploration",path:"/mdolatowska/curiosities/exploration"},{id:3,name:"comics-dummy",path:"/mdolatowska/curiosities/comics-dummy"},{id:4,name:"comics-illustration",path:"/mdolatowska/curiosities/comics-illustration"}].map((function(e){return n.a.createElement(s.b,{key:e.id,exact:!0,to:e.path,className:"curiositiesNavBtn"},e.name)}));return n.a.createElement("section",{className:"mainSection curiositiesSection"},n.a.createElement("h1",null,"CURIOSITIES"),n.a.createElement("nav",{className:"navCuriosities"},e))}),f=function(){return n.a.createElement("section",{className:"mainSection"},n.a.createElement("h1",null,"INSPIRATIONS"))},h=function(){return n.a.createElement("section",{className:"mainSection"},n.a.createElement("h1",null,"LIFE DRAWINGS"))},g=function(){return n.a.createElement(s.b,{exact:!0,to:"/mdolatowska/curiosities/",className:"backToCuriositiesBtn"},n.a.createElement("i",{className:"fas fa-arrow-left"})," back")},x=(a(57),function(e){var t=Object(o.useContext)(me),a=Object(c.a)(t,2),l=a[0],i=a[1],s=function(t){t.persist(),i((function(e){return Object(r.a)({},e,{changingImg:!0})})),setTimeout((function(){i((function(e){return Object(r.a)({},e,{changingImg:!1})}))}),300),setTimeout((function(){"next"===t.target.dataset.action?Number(l.zoomedImgIndex)===e.imagesArray.length-1?i((function(e){return Object(r.a)({},e,{zoomedImgIndex:0})})):i((function(e){return Object(r.a)({},e,{zoomedImgIndex:e.zoomedImgIndex+1})})):0===Number(l.zoomedImgIndex)?i((function(t){return Object(r.a)({},t,{zoomedImgIndex:e.imagesArray.length-1})})):i((function(e){return Object(r.a)({},e,{zoomedImgIndex:e.zoomedImgIndex-1})}))}),150)};return n.a.createElement("section",{className:l.closingImg?"zoomedImgContainer closingImg":"zoomedImgContainer"},n.a.createElement("img",{src:e.src,alt:"",className:l.changingImg?"zoomedImg changingImg":"zoomedImg"}),n.a.createElement("p",{className:"description"},e.description),n.a.createElement("button",{className:"changeImg nextImg",onClick:s,"data-action":"next"},n.a.createElement("i",{className:"fas fa-arrow-right","data-action":"next"})),n.a.createElement("button",{className:"changeImg prevImg",onClick:s,"data-action":"prev"},n.a.createElement("i",{className:"fas fa-arrow-left","data-action":"prev"})),n.a.createElement("button",{className:"closeZoom",onClick:function(){i((function(e){return Object(r.a)({},e,{closingImg:!0})})),setTimeout((function(){i((function(e){return Object(r.a)({},e,{zoomed:!1})})),i((function(e){return Object(r.a)({},e,{closingImg:!1})}))}),400)}},n.a.createElement("i",{className:"fas fa-times"})))}),w=a(13),b=a.n(w),k=a(14),I=a.n(k),j=a(15),N=a.n(j),O=a(16),v=a.n(O),z=a(17),C=a.n(z),S=a(18),y=a.n(S),A=a(19),L=a.n(A),T=a(20),D=a.n(T),F=a(21),B=a.n(F),M=a(22),P=a.n(M),R=a(23),J=a.n(R),q=a(24),G=a.n(q),U=a(25),W=a.n(U),Z=a(26),H=a.n(Z),K=a(27),Q=a.n(K),V=a(28),X=a.n(V),Y=a(38),$=a.n(Y),_=a(39),ee=a.n(_),te=a(40),ae=a.n(te),oe=a(41),ne=a.n(oe),le=(a(58),function(){return n.a.createElement("section",{className:"preloader"},n.a.createElement("div",{className:"square"},n.a.createElement("span",{className:"circle circle1"}),n.a.createElement("span",{className:"circle circle2"}),n.a.createElement("span",{className:"circle circle3"}),n.a.createElement("span",{className:"circle circle4"})))}),ie=function(){var e=Object(o.useContext)(me),t=Object(c.a)(e,4),a=t[0],l=t[1],i=t[2],s=t[3];Object(o.useEffect)((function(){return l((function(e){return Object(r.a)({},e,{zoomedImgIndex:0,zoomed:!1})})),function(){l((function(e){return Object(r.a)({},e,{imagesLoaded:!1,imagesCounter:0,zoomedImgIndex:0})}))}}),[l]);var m=[{id:0,src:b.a,description:"Example description of artwork number 1. Elelele, elele, lololo, hehe."},{id:1,src:I.a,description:"Example description of artwork number 2. Elelele, elele, lololo, hehe."},{id:2,src:N.a,description:"Example description of artwork number 3. Elelele, elele, lololo, hehe."},{id:3,src:v.a,description:"Example description of artwork number 4. Elelele, elele, lololo, hehe."},{id:4,src:C.a,description:"Example description of artwork number 5. Elelele, elele, lololo, hehe."},{id:5,src:y.a,description:"Example description of artwork number 6. Elelele, elele, lololo, hehe."},{id:6,src:L.a,description:"Example description of artwork number 7. Elelele, elele, lololo, hehe."},{id:7,src:D.a,description:"Example description of artwork number 8. Elelele, elele, lololo, hehe."},{id:8,src:B.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:9,src:P.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:10,src:J.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:11,src:G.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:12,src:W.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:13,src:H.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:14,src:Q.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:15,src:X.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:16,src:$.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:17,src:ee.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:18,src:ae.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:19,src:ne.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."}],d=m.map((function(e,t){return n.a.createElement("div",{className:"img","data-id":t,key:t},n.a.createElement("img",{key:t,onLoad:function(){s(m)},src:e.src,alt:"",onClick:i,"data-id":t}))}));return n.a.createElement(n.a.Fragment,null,!a.imagesLoaded&&n.a.createElement(le,null),a.zoomed&&n.a.createElement(x,{src:m[a.zoomedImgIndex].src,imagesArray:m,description:m[a.zoomedImgIndex].description}),n.a.createElement("section",{className:"mainSection workshopsSection"},n.a.createElement("h3",null,"workshops"),d),n.a.createElement(g,null))},re=function(){var e=Object(o.useContext)(me),t=Object(c.a)(e,4),a=t[0],l=(t[1],t[2],t[3],[{id:0,src:b.a,description:"Example description of artwork number 1. Elelele, elele, lololo, hehe."},{id:1,src:I.a,description:"Example description of artwork number 2. Elelele, elele, lololo, hehe."},{id:2,src:N.a,description:"Example description of artwork number 3. Elelele, elele, lololo, hehe."},{id:3,src:v.a,description:"Example description of artwork number 4. Elelele, elele, lololo, hehe."},{id:4,src:C.a,description:"Example description of artwork number 5. Elelele, elele, lololo, hehe."},{id:5,src:y.a,description:"Example description of artwork number 6. Elelele, elele, lololo, hehe."},{id:6,src:L.a,description:"Example description of artwork number 7. Elelele, elele, lololo, hehe."},{id:7,src:D.a,description:"Example description of artwork number 8. Elelele, elele, lololo, hehe."},{id:8,src:B.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:9,src:P.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:10,src:J.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:11,src:G.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:12,src:W.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:13,src:H.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:14,src:Q.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."},{id:15,src:X.a,description:"Example description of artwork number 9. Elelele, elele, lololo, hehe."}]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"mainSection explorationSection"},n.a.createElement("h3",null,"exploration"),n.a.createElement(x,{src:l[a.zoomedImgIndex].src,imagesArray:l,description:l[a.zoomedImgIndex].description})),n.a.createElement(g,null))},ce=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mainSection"},"Comics Dummy"),n.a.createElement(g,null))},se=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mainSection"},"Comics Illustration"),n.a.createElement(g,null))},me=Object(o.createContext)(),de=function(){var e=Object(o.useState)({zoomed:!1,zoomedImgIndex:0,changingImg:!1,closingImg:!1,imagesCounter:0,imagesLoaded:!1}),t=Object(c.a)(e,2),a=t[0],l=t[1];return n.a.createElement(s.a,null,n.a.createElement(me.Provider,{value:[a,l,function(e){e.persist(),l((function(e){return Object(r.a)({},e,{zoomed:!e.zoomed})})),l((function(t){return Object(r.a)({},t,{zoomedImgIndex:Number(e.target.dataset.id)})}))},function(e){l((function(e){return Object(r.a)({},e,{imagesCounter:e.imagesCounter+1})})),a.imagesCounter>=e.length-1&&l((function(e){return Object(r.a)({},e,{imagesLoaded:!0})}))}]},n.a.createElement(d,null),n.a.createElement(m.d,null,n.a.createElement(m.a,{exact:!0,from:"/",to:"/mdolatowska"}),n.a.createElement(m.b,{exact:!0,path:"/mdolatowska",component:u}),n.a.createElement(m.b,{exact:!0,path:"/mdolatowska/curiosities",component:E}),n.a.createElement(m.b,{exact:!0,path:"/mdolatowska/inspirations",component:f}),n.a.createElement(m.b,{exact:!0,path:"/mdolatowska/life-drawings",component:h}),n.a.createElement(m.b,{exact:!0,path:"/mdolatowska/curiosities/workshops",component:ie}),n.a.createElement(m.b,{exact:!0,path:"/mdolatowska/curiosities/exploration",component:re}),n.a.createElement(m.b,{exact:!0,path:"/mdolatowska/curiosities/comics-dummy",component:ce}),n.a.createElement(m.b,{exact:!0,path:"/mdolatowska/curiosities/comics-illustration",component:se}))))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(de,null)),document.getElementById("root"))}],[[43,1,2]]]);
//# sourceMappingURL=main.8f09a58e.chunk.js.map