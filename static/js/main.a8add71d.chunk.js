(this["webpackJsonpnavigation-react"]=this["webpackJsonpnavigation-react"]||[]).push([[0],{14:function(e,n,t){e.exports=t(25)},19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(9),c=t.n(i),o=(t(19),t(1)),u=t(2),l=t(4),f=t(3),s=function(e){switch(e.keyCode){case 37:return"left";case 39:return"right";case 38:return"top";case 40:return"bottom";default:return e.keyCode}},v=function(e){var n=e.findIndex((function(e){return e.active})),t=n-1>=0?n-1:0,r=n-1<0;return[e.map((function(e,n){return Object(l.a)({},e,{active:n===t})})),r]},d=function(e){var n=e.findIndex((function(e){return e.active})),t=e.length,r=n+1===t?t:n+1,a=n+1===t;return[e.map((function(e,n){return Object(l.a)({},e,{active:n===r})})),a]};function b(){var e=Object(o.a)(["\n  background: url(https://logodownload.org/wp-content/uploads/2018/04/bbb-logo-big-brother-brasil-logo-1.png) center center no-repeat;\n  background-size: contain;\n  width: 200px;\n  height: 100px;\n  -webkit-filter: invert(100%); /* Safari/Chrome */\n  filter: invert(100%);\n"]);return b=function(){return e},e}var m=u.b.div(b()),p=function(){return a.a.createElement(m,null)};function h(e){var n=e.name,t=e.className;return a.a.createElement("svg",{className:t},a.a.createElement("use",{xlinkHref:"#icon-".concat(n)}))}h.defaultProps={className:""};var g=h;function x(e){return Object(l.a)({},{alias:"",active:!1,ref:{},top:"",bottom:"",left:"",right:"",hide:!1},{},e)}function j(e){return Object(l.a)({},{label:"",icon:"",active:!1},{},e)}function E(e){return Object(l.a)({},{name:"",cover:"",active:!1},{},e)}function O(){var e=Object(o.a)(["\n  fill: ",";\n  height: 15px;\n  margin-right: 5px;\n  width: 15px;\n  transition: fill .2s linear;\n  position: relative;\n  left: -3px;\n  top: 2px;\n"]);return O=function(){return e},e}function w(){var e=Object(o.a)(["\n  font-size: 16px;\n  color: ",";\n  padding: 10px 30px;\n  background-color: ",";\n  border: 1px solid #cacfcd;\n  border-radius: 3px;\n  margin-right: 15px;\n  transition: all .3s ease;\n  font-weight: bold;\n"]);return w=function(){return e},e}function y(){var e=Object(o.a)([""]);return y=function(){return e},e}function k(){var e=Object(o.a)(["\n  color: #fff;\n"]);return k=function(){return e},e}function z(){var e=Object(o.a)(["\n  margin-bottom: 50px;\n  padding: 0 40px;\n"]);return z=function(){return e},e}var A=Object(r.forwardRef)((function(e,n){var t=e.exit,i=e.active,c=[new j({label:"Assista",icon:"play",active:!0}),new j({label:"Veja mais"})],o=Object(r.useState)(c),u=Object(f.a)(o,2),l=u[0],s=u[1];Object(r.useImperativeHandle)(n,(function(){return{handlerKeyPressed:b}}));var b=function(e){var n=[];switch(e){case"left":n=v(l);break;case"right":n=d(l);break;case"bottom":t("bottom",!0)}m({result:n,direction:e})},m=function(e){var n=e.result,r=e.direction,a=Object(f.a)(n,2),i=a[0];a[1]?t(r):i&&s(i)};return a.a.createElement(B,null,a.a.createElement(p,null),a.a.createElement(M,null,"Acompanhe 24h ao vivo a casa mais vigiada do Brasil"),a.a.createElement(H,null,l.map((function(e,n){return a.a.createElement(C,{key:n,active:e.active,componentActive:i},e.icon&&a.a.createElement(S,{name:e.icon,active:e.active,componentActive:i}),e.label)}))))})),B=u.b.div(z()),M=u.b.h2(k()),H=u.b.div(y()),C=u.b.button(w(),(function(e){return e.active&&e.componentActive?"#707070":"#cacfcd"}),(function(e){return e.active&&e.componentActive?"#fff":"transparent"})),S=Object(u.b)(g)(O(),(function(e){return e.active&&e.componentActive?"#707070":"#cacfcd"})),R=A;function I(){var e=Object(o.a)(["\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  z-index: 1;\n"]);return I=function(){return e},e}function P(){var e=Object(o.a)(["\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  z-index: 1;\n  text-transform: uppercase;\n  font-size: 12px;\n"]);return P=function(){return e},e}function F(){var e=Object(o.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgb(2,0,36);\n  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(79,79,82,1) 0%, rgba(46,46,46,1) 0%, rgba(255,255,255,0) 100%);\n"]);return F=function(){return e},e}function K(){var e=Object(o.a)(["\n  width: calc(100% - 40px);\n  min-width: 300px;\n  height: 160px;\n  background: url(",") center center no-repeat;\n  background-size: cover;\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n"]);return K=function(){return e},e}var X=u.b.div(K(),(function(e){return e.cover})),_=u.b.div(F()),D=u.b.h3(P()),N=u.b.h4(I()),V=function(e){var n=e.name,t=e.cover;return a.a.createElement(X,{cover:t},a.a.createElement(D,null,"Realities"),a.a.createElement(N,null,n),a.a.createElement(_,null))};function q(){var e=Object(o.a)(["\n  margin: 0 20px 0 0;\n  padding: 0;\n"]);return q=function(){return e},e}function G(){var e=Object(o.a)(["\n  border: 3px solid ",";\n  width: 334px;\n  height: 194px;\n  position: absolute;\n  z-index: 1;\n  background: url(",") center center no-repeat;\n  background-size: 50px;\n  left: 40px;\n"]);return G=function(){return e},e}function J(){var e=Object(o.a)(["\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  padding: 0;\n  transform: translateX(","px);\n  transition: all .5s ease;\n"]);return J=function(){return e},e}function L(){var e=Object(o.a)(["\n  font-size: 16px;\n  color: #fff;\n  margin: 0 0 25px 0;\n  padding: 0 40px;\n"]);return L=function(){return e},e}function Q(){var e=Object(o.a)(["\n  color: #fff;\n  display: ",";\n  font-size: 26px;\n  margin: 0;\n"]);return Q=function(){return e},e}function T(){var e=Object(o.a)(["\n  color: #fff;\n  font-size: 18px;\n  margin-bottom: 20px;\n  display: ",";\n"]);return T=function(){return e},e}function W(){var e=Object(o.a)([""]);return W=function(){return e},e}function U(){var e=Object(o.a)(["\n  padding: 0 40px;\n"]);return U=function(){return e},e}function Y(){var e=Object(o.a)(["\n  padding-top: 50px;\n"]);return Y=function(){return e},e}var Z=Object(r.forwardRef)((function(e,n){var t=e.exit,i=e.active,c=e.setMainBackground,o=[new E({name:"Sala de Estar",cover:"https://revistanews.com.br/wp-content/uploads/2018/01/sofa-bbb.jpg",active:!0}),new E({name:"Varanda",cover:"http://g1.globo.com/BBB10/Fotos/foto/0,,34639160-EXH,00.jpg"}),new E({name:"Piscina",cover:"http://g1.globo.com/BBB10/Fotos/foto/0,,34639207-EXH,00.jpg"}),new E({name:"Academia",cover:"http://g1.globo.com/BBB10/Fotos/foto/0,,34639283-EXH,00.jpg"}),new E({name:"Chuveiro",cover:"https://cdn-ofuxico.akamaized.net/img/upload/noticias/2015/02/25/231235_36.jpg"})],u=Object(r.useState)(o),l=Object(f.a)(u,2),s=l[0],b=l[1],m=Object(r.useState)(40),p=Object(f.a)(m,2),h=p[0],g=p[1];Object(r.useImperativeHandle)(n,(function(){return{handlerKeyPressed:x,init:j}}));var x=function(e){var n=[];switch(e){case"top":t("top"),c();break;case"left":n=v(s);break;case"right":n=d(s)}O({direction:e,changes:n})},j=function(){c(s.find((function(e){return e.active})).cover)},O=function(e){var n=e.direction,r=e.changes,a=Object(f.a)(r,2),i=a[0];if(a[1])t(n);else if(i)switch(b(i),c(i.find((function(e){return e.active})).cover),n){case"left":g(h+360);break;case"right":g(h-360)}};return a.a.createElement($,{active:i},a.a.createElement(ee,null,a.a.createElement(te,{active:!0},"Big Brother Brasil"),a.a.createElement(re,{active:!0},s.find((function(e){return e.active})).name)),a.a.createElement(ne,null,a.a.createElement(ae,null,"Agora no BBB"),a.a.createElement(ce,{active:i}),a.a.createElement(ie,{position:h},s.map((function(e,n){return a.a.createElement(oe,{key:n,active:e.active},a.a.createElement(V,{name:e.name,cover:e.cover}))})))))})),$=u.b.div(Y()),ee=u.b.div(U()),ne=u.b.div(W()),te=u.b.h3(T(),(function(e){return e.active?"block":"none"})),re=u.b.h4(Q(),(function(e){return e.active?"block":"none"})),ae=u.b.h5(L()),ie=u.b.ul(J(),(function(e){return e.position})),ce=u.b.div(G(),(function(e){return e.active?"#fff":"transparent"}),(function(e){return e.active?"https://maquinadeaprovacao.com.br/wp-content/uploads/2018/09/play-icon-300x300.png":"none"})),oe=u.b.li(q()),ue=Z;function le(){var e=Object(o.a)(["\n  fill: ",";\n  height: 15px;\n  margin-right: 25px;\n  width: 15px;\n  transition: fill .2s linear;\n"]);return le=function(){return e},e}function fe(){var e=Object(o.a)(["\n  color: ",";\n  text-decoration: none;\n  visibility: ",";\n  opacity: ",";\n  transition: all ease .5s;\n"]);return fe=function(){return e},e}function se(){var e=Object(o.a)(["\n  list-style-type: none;\n  margin: 0;\n  position: relative;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  padding: 15px 30px;\n  height: 30px;\n  width: calc(275px - 60px);\n"]);return se=function(){return e},e}function ve(){var e=Object(o.a)(["\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n"]);return ve=function(){return e},e}function de(){var e=Object(o.a)(["\n  background-color: #000;\n  height: 100%;\n  width: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all ease .3s;\n"]);return de=function(){return e},e}var be=Object(r.forwardRef)((function(e,n){var t=e.exit,i=e.active,c=Object(r.useState)([{label:"Buscar",icon:"menu-search",active:!0},{label:"In\xedcio",icon:"menu-home"},{label:"Agora na Globo",icon:"menu-stream"},{label:"Categorias",icon:"menu-categories"},{label:"Minha Conta",icon:"menu-user"}]),o=Object(f.a)(c,2),u=o[0],l=o[1];Object(r.useImperativeHandle)(n,(function(){return{handlerKeyPressed:s}}));var s=function(e){var n=[];switch(e){case"top":n=v(u);break;case"bottom":n=d(u);break;case"right":t("right")}b({result:n,direction:e})},b=function(e){var n=e.result,r=e.direction,a=Object(f.a)(n,2),i=a[0];a[1]?t(r):i&&l(i)};return a.a.createElement(me,{containerActive:i},a.a.createElement(pe,null,u.map((function(e,n){return a.a.createElement(he,{key:n,itemActive:e.active,containerActive:i},a.a.createElement(xe,{name:e.icon,itemActive:e.active,containerActive:i}),a.a.createElement(ge,{href:"#",itemActive:e.active,containerActive:i},e.label))}))))})),me=u.b.div(de(),(function(e){return e.containerActive?"275px":"80px"})),pe=u.b.ul(ve()),he=u.b.li(se(),(function(e){return e.itemActive&&e.containerActive?"#fff":"transparent"})),ge=u.b.a(fe(),(function(e){return e.itemActive?"#333":"#fff"}),(function(e){return e.containerActive?"visible":"hidden"}),(function(e){return e.containerActive?"1":"0"})),xe=Object(u.b)(g)(le(),(function(e){return e.itemActive?e.containerActive?"#000":"#ccc":"#333"})),je=be;function Ee(){var e=Object(o.a)(["\n  position: relative;\n  left: 80px;\n  height: 100%;\n  z-index: 0;\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  transform: translateY(",");\n  transition: transform .3s ease;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(o.a)(["\n  position: fixed;\n  height: 100%;\n  z-index: 1;\n"]);return Oe=function(){return e},e}function we(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  background: #000 url(",") center center no-repeat;\n  background-size: cover;\n  align-items: stretch;\n  height: 100%;\n"]);return we=function(){return e},e}var ye=u.b.div(we(),(function(e){return e.cover?e.cover:"https://s2.glbimg.com/CC4G7Z6ghe8pwTv_p4Lyo4d5g2g=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/q/j/DLfVsaS66iuFucjQm8fQ/bbb19-programa-web.jpg"})),ke=u.b.aside(Oe()),ze=u.b.main(Ee(),(function(e){return e.hideHighlights?"-300px":"0"})),Ae=function(){var e=Object(r.useRef)(),n=Object(r.useRef)(),t=Object(r.useRef)(),i=Object(r.useRef)(),c=[new x({alias:"highlights",active:!0,ref:e,bottom:"trail",left:"menu"}),new x({alias:"menu",ref:n,right:["highlights","trail"]}),new x({alias:"trail",ref:t,top:"highlights",left:"menu"})],o=Object(r.useState)(c),u=Object(f.a)(o,2),v=u[0],d=u[1],b=Object(r.useState)(c.find((function(e){return e.active}))),m=Object(f.a)(b,2),p=m[0],h=m[1],g=Object(r.useState)(),j=Object(f.a)(g,2),E=j[0],O=j[1];Object(r.useEffect)((function(){i.current.focus()}),[]),Object(r.useEffect)((function(){h(v.find((function(e){return e.active})))}),[v]);var w=function(e,n){var t=k({direction:e}),r=t&&v.map((function(e){return Object(l.a)({},e,{hide:y({container:e,shouldHide:n,nextContainerAlias:t}),active:e.alias===t})}));if(t){d(r);var a=r.find((function(e){return e.active}));a.ref.current.init&&a.ref.current.init(e)}},y=function(e){var n=e.container,t=e.shouldHide,r=e.nextContainerAlias;return n.alias===p.alias&&"undefined"!==typeof t?t:n.alias!==r&&n.hide},k=function(e){var n=e.direction,t=p[n];return"string"===typeof t?t:"object"===typeof t?v.find((function(e){return!e.hide&&t.indexOf(e.alias)>-1})).alias:""};return a.a.createElement(ye,{onKeyDown:function(e){var n=s(e);p.ref.current.handlerKeyPressed(n),e.preventDefault()},tabIndex:"0",cover:E,ref:i},a.a.createElement(ke,null,a.a.createElement(je,{ref:n,exit:w,active:"menu"===p.alias})),a.a.createElement(ze,{hideHighlights:v.find((function(e){return"highlights"===e.alias})).hide},a.a.createElement(R,{ref:e,exit:w,active:"highlights"===p.alias}),a.a.createElement(ue,{ref:t,exit:w,active:"trail"===p.alias,setMainBackground:O})))};function Be(){var e=Object(o.a)(["\n  body {\n    font-family: Roboto;\n  }\n"]);return Be=function(){return e},e}var Me=Object(u.a)(Be());function He(){var e=Object(o.a)(["\n  position: absolute;\n  overflow: hidden;\n  height: 0;\n  width: 0;\n"]);return He=function(){return e},e}var Ce=[a.a.createElement("symbol",{id:"icon-menu-search",viewBox:"0 0 32 32"},a.a.createElement("title",null,"search"),a.a.createElement("path",{d:"M21.37 3.662c-4.882-4.882-12.827-4.882-17.709 0-4.881 4.883-4.881 12.827 0 17.71 4.347 4.346 11.118 4.812 15.996 1.418 0.103 0.486 0.338 0.949 0.715 1.327l7.109 7.109c1.036 1.034 2.71 1.034 3.741 0 1.035-1.035 1.035-2.709 0-3.741l-7.109-7.111c-0.376-0.375-0.84-0.611-1.326-0.713 3.396-4.88 2.93-11.649-1.418-15.998zM19.125 19.127c-3.645 3.645-9.576 3.645-13.22 0-3.642-3.645-3.642-9.575 0-13.22 3.643-3.643 9.575-3.643 13.22 0 3.645 3.645 3.645 9.575 0 13.22z"})),a.a.createElement("symbol",{id:"icon-menu-home",viewBox:"0 0 32 32"},a.a.createElement("title",null,"home"),a.a.createElement("path",{d:"M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"})),a.a.createElement("symbol",{id:"icon-menu-stream",viewBox:"0 0 32 32"},a.a.createElement("title",null,"live"),a.a.createElement("path",{d:"M12 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM20.761 7.204c3.12 1.692 5.239 4.997 5.239 8.796s-2.119 7.104-5.239 8.796c1.377-2.191 2.239-5.321 2.239-8.796s-0.862-6.605-2.239-8.796zM9 16c0 3.475 0.862 6.605 2.239 8.796-3.12-1.692-5.239-4.997-5.239-8.796s2.119-7.104 5.239-8.796c-1.377 2.191-2.239 5.321-2.239 8.796zM3 16c0 5.372 1.7 10.193 4.395 13.491-4.447-2.842-7.395-7.822-7.395-13.491s2.948-10.649 7.395-13.491c-2.695 3.298-4.395 8.119-4.395 13.491zM24.605 2.509c4.447 2.842 7.395 7.822 7.395 13.491s-2.948 10.649-7.395 13.491c2.695-3.298 4.395-8.119 4.395-13.491s-1.7-10.193-4.395-13.491z"})),a.a.createElement("symbol",{id:"icon-menu-categories",viewBox:"0 0 32 32"},a.a.createElement("title",null,"categories"),a.a.createElement("path",{d:"M31.781 20.375l-8-10c-0.19-0.237-0.477-0.375-0.781-0.375h-14c-0.304 0-0.591 0.138-0.781 0.375l-8 10c-0.142 0.177-0.219 0.398-0.219 0.625v9c0 1.105 0.895 2 2 2h28c1.105 0 2-0.895 2-2v-9c0-0.227-0.077-0.447-0.219-0.625zM30 22h-7l-4 4h-6l-4-4h-7v-0.649l7.481-9.351h13.039l7.481 9.351v0.649z"}),a.a.createElement("path",{d:"M23 16h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z"}),a.a.createElement("path",{d:"M25 20h-18c-0.552 0-1-0.448-1-1s0.448-1 1-1h18c0.552 0 1 0.448 1 1s-0.448 1-1 1z"})),a.a.createElement("symbol",{id:"icon-menu-user",viewBox:"0 0 32 32"},a.a.createElement("title",null,"user"),a.a.createElement("path",{d:"M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"})),a.a.createElement("symbol",{id:"icon-play",viewBox:"0 0 24 24"},a.a.createElement("title",null,"play"),a.a.createElement("path",{d:"M8 5v14l11-7z"}))],Se=u.b.svg(He()),Re=function(){return a.a.createElement(Se,{"aria-hidden":"true",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.a.createElement("defs",null,Ce.map((function(e,n){return a.a.createElement(r.Fragment,{key:n},e)}))))};function Ie(){var e=Object(o.a)(["\n  width: 100%;\n  overflow: hidden;\n  height: 100%;\n  position: absolute;\n"]);return Ie=function(){return e},e}var Pe=u.b.div(Ie()),Fe=function(){return a.a.createElement(Pe,null,a.a.createElement(Me,null),a.a.createElement(Re,null),a.a.createElement(Ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.a8add71d.chunk.js.map