(this["webpackJsonpfri-fmf-timetable"]=this["webpackJsonpfri-fmf-timetable"]||[]).push([[0],{33:function(e,n,t){e.exports=t(90)},38:function(e,n,t){},89:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(25),c=t.n(a),i=(t(38),t(5)),u=t(1),l=t(2),d=t(26),s=t.n(d),f=t(8),b=t.n(f);t(27);var m=function(e){return("00"+e).slice(-2)},p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[8,20],t=[Math.min(n[0],e[0].ura),Math.max(n[1],e[0].ura+e[0].trajanje)];return e.forEach((function(e){e.ura<t[0]&&(t[0]=e.ura),e.ura+e.trajanje>t[1]&&(t[1]=e.ura+e.trajanje)})),t},h=t(28),g={default:{topBar:"#34495e",sideBar:"#46596b",backgroundColor:"white",backgroundAccentColor:"rgba(0,0,0,.08)",tableTextColor:"white",cardTextColor:"white",cardColors:["#e74c3c","#3498db","#2ecc71","#f1c40f","#9b59b6","#1abc9c","#e67e22","#34495e"],cardBackground:"%COLOR%"},horror:{topBar:"red",sideBar:"green",backgroundColor:"yellow",backgroundAccentColor:"gray",tableTextColor:"black",cardTextColor:"black",cardColors:["#fff","#701","#ab2","#aaa","#faf","#222","#deadbe","#dadada"],cardBackground:"%COLOR%"},monokaiPro:{topBar:"#131313",sideBar:"#191919",backgroundColor:"#222222",backgroundAccentColor:"#2c2c2d",tableTextColor:"white",cardTextColor:"white",cardColors:["#ff6188","#fc9868","#ffd866","#a9de77","#78dce8","#ab9df2","#ad5ca3","#34495e"],cardBorder:"2px solid %COLOR%",cardBorderRadius:"3px",cardBackground:"#191919",cardTypeTextColor:"#222222"},monokaiProWithColorText:{importStyle:"monokaiPro",cardTextColor:"%COLOR%"},darkerMode:{topBar:"black",sideBar:"black",backgroundColor:"black",backgroundAccentColor:"black",tableTextColor:"#aaaaaa",cardTextColor:"#aaaaaa",cardColors:[],cardBackground:"black",cardTypeTextColor:"#aaaaaa",cardTypeBackground:"black"}},v=Object.assign(g,JSON.parse(localStorage.getItem("customColorSchemes")||"{}")),x=o.a.createContext(g.default);function k(){var e=Object(u.a)(["\n  background: ",";\n  width: 100vw;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  height: ",";\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n"]);return k=function(){return e},e}function C(){var e=Object(u.a)(["\n  background: ",";\n  width: ",";\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-delay: 0.4s;\n\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100vh;\n"]);return C=function(){return e},e}function w(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  background: ",";\n\n  opacity: ",";\n  transition: all 0.6s;\n  transition-delay: 0.8s;\n\n  z-index: 1000;\n\n  pointer-events: none;\n"]);return w=function(){return e},e}var y=l.c.div(w(),(function(e){return e.colors.backgroundColor}),(function(e){return e.loaded?0:1})),O=l.c.div(C(),(function(e){return e.backgroundColor}),(function(e){return e.loaded?"5rem":"100vw"})),j=l.c.div(k(),(function(e){return e.backgroundColor}),(function(e){return e.loaded?"".concat(e.rowHeight,"vh"):"100vh"})),E=function(e){var n=e.loaded,t=e.error,r=e.rowHeight,a=o.a.useContext(x);return o.a.createElement(y,{loaded:n||!!t,colors:a},o.a.createElement(O,{loaded:n,backgroundColor:a.sideBar}),o.a.createElement(j,{loaded:n,rowHeight:r,backgroundColor:a.topBar}),o.a.createElement(h.PuffLoader,null))};function S(){var e=Object(u.a)(["\n  background: #e74c3c;\n  border-radius: 2px;\n  padding: 10px;\n"]);return S=function(){return e},e}function T(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return T=function(){return e},e}var B=l.c.div(T()),I=l.c.div(S()),H=function(e){var n=e.error,t=o.a.useContext(x);return o.a.createElement(B,{background:t.topBar},o.a.createElement(I,null,n))},L=t(31),_=t(32);t(89);function z(){var e=Object(u.a)(["\n  .styles_day_title__1y-BE {\n    background: ",";\n  }\n\n  .styles_hour__EXCif {\n    background:",";\n  }\n\n  .styles_day__1cspH {\n    background-color: ",";\n    background-image: linear-gradient("," 50%, transparent 50%);\n  }\n\n  .styles_time_table_wrapper__1-rtp{\n    color:","\n  }\n"]);return z=function(){return e},e}function P(){var e=Object(u.a)(["\n  font-size: 0.6em;\n"]);return P=function(){return e},e}function N(){var e=Object(u.a)(["\n  //padding:5px;\n  display: flex;\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n"]);return N=function(){return e},e}function R(){var e=Object(u.a)(["\n  height: 100%;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  position: relative;\n  ","\n"]);return R=function(){return e},e}function M(){var e=Object(u.a)(["\n  height: 100%;\n  width: 80%;\n  padding: 10px;\n"]);return M=function(){return e},e}function D(){var e=Object(u.a)(["\n  width: 100%;\n  background: ",";\n  color: black;\n  display: flex;\n  flex-direction: row;\n  border-radius: ",";\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  text-shadow: -1px 1px 3px rgba(0, 0, 0, 0.3);\n  color: ",";\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  overflow: hidden;\n\n  border: ",";\n\n  margin: 5px;\n\n  &:hover {\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);\n    margin: 3px;\n  }\n"]);return D=function(){return e},e}var A=function(e,n){return e.replace("%COLOR%",n)},W=l.c.div(D(),(function(e){return A(e.colors.cardBackground,e.colors.cardColors[e.lectureId])}),(function(e){return e.colors.cardBorderRadius||"2px"}),(function(e){return A(e.colors.cardTextColor,e.colors.cardColors[e.lectureId])}),(function(e){return e.colors.cardBorder&&A(e.colors.cardBorder,e.colors.cardColors[e.lectureId])})),J=l.c.div(M()),F=l.c.div(R(),(function(e){var n=e.colors.cardTypeBackground?A(e.colors.cardTypeBackground,e.colors.cardColors[e.lectureId]):e.colors.cardColors[e.lectureId],t="";if(e.colors.cardTypeBackground)t=n;else try{t=Object(_.a)(n,-10)}catch(r){t=n}return t}),(function(e){return e.colors.cardTypeTextColor?"color:".concat(e.colors.cardTypeTextColor,";"):""})),U=l.c.div(N()),G=l.c.div(P()),V=Object(l.a)(z(),(function(e){return e.topBar}),(function(e){return e.sideBar}),(function(e){return e.backgroundColor}),(function(e){return e.backgroundAccentColor}),(function(e){return e.tableTextColor})),X=function(e){var n=e.timeInterval,t=e.tableData,r=o.a.useContext(x);return o.a.createElement(o.a.Fragment,null,o.a.createElement(V,r),o.a.createElement(L.a,{hoursInterval:n,renderEvent:function(e,n,t){return function(e,n,t,r){return n.className="",o.a.createElement(U,Object.assign({},n,{title:e.name,key:e.id}),o.a.createElement(W,{lectureId:e.lectureId,type:e.type,colors:r},o.a.createElement(J,null,o.a.createElement("div",{style:{fontWeight:"bold"}},e.name),o.a.createElement(G,null,e.professor),o.a.createElement(G,null,e.class),o.a.createElement(G,null,e.startTime.format("HH:mm")," - ",e.endTime.format("HH:mm"))),o.a.createElement(F,{type:e.type,lectureId:e.lectureId,colors:r},e.type)))}(e,n,0,r)},events:t}))},$=t(14);function q(){var e=Object(u.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 0 0 3px 3px;\n"]);return q=function(){return e},e}function K(){var e=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: ",";\n\n  z-index: 150;\n  overflow: hidden;\n\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n"]);return K=function(){return e},e}function Q(){var e=Object(u.a)(["\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25),\n          0 6px 6px rgba(0, 0, 0, 0.22);\n      "]);return Q=function(){return e},e}function Y(){var e=Object(u.a)(['\n  position: relative;\n  z-index: 150;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n    border-radius: 3px;\n    ',"\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(u.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]);return Z=function(){return e},e}function ee(){var e=Object(u.a)(["\n  position: relative;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n"]);return ee=function(){return e},e}var ne=l.c.div(ee()),te=l.c.div(Z()),re=l.c.div(Y(),(function(e){return e.open&&Object(l.b)(Q())})),oe=l.c.div(K(),(function(e){return e.height})),ae=l.c.div(q());function ce(e,n){for(;(e=e.parentNode)&&e!==n;);return!!e}var ie=function(e){var n=e.ButtonElement,t=e.ListElement,a=e.onSelect,c=e.values,u=e.dropDownInnerListStyle,l=e.onOpen,d=e.style,s=Object(r.useState)(),f=Object(i.a)(s,2),b=f[0],m=f[1],p=Object(r.useRef)(),h=Object(r.useRef)(),g=Object(r.useRef)(),v=function e(n){ce(n.target,p.current)||ce(n.target,h.current)||(m(!1),document.removeEventListener("click",e))};return o.a.createElement(ne,{open:b,onClick:function(e){ce(e.target,p.current)||(b?document.removeEventListener("click",v):(l&&l(),document.addEventListener("click",v)),console.log("new state:",!b),m(!b))},ref:h,style:d},o.a.createElement(re,{open:b},o.a.createElement(te,{open:b},o.a.createElement(n,null)),o.a.createElement(oe,{open:b,marginTop:h.current&&h.current.offsetHeight+"px",ref:p,height:b?g.current&&g.current.offsetHeight+"px":0},o.a.createElement(ae,{ref:g,style:u},c&&c.map((function(e,n){return o.a.createElement(t,Object.assign({key:n},e,{open:b,onClick:function(n){return a(e,n)}}))}))))))},ue=function e(n,t){var r=Object.assign({},t);if(r.importStyle){var o=r.importStyle;if(delete r.importStyle,!(o in v))throw new Error("Error at import, ".concat(n," tried to import ").concat(o));return e(o,r=Object.assign({},v[o],r))}return r},le=o.a.createContext({allNames:[],colorSchemeName:"context not loaded",setColorScheme:function(){return console.log("context not loaded")},setColorSchemePreview:function(){return console.log("context not loaded")},resetColorSchemePreview:function(){return console.log("context not loaded")}}),de=function(e){var n,t=e.Component,a=Object(r.useState)(localStorage.getItem("colorScheme")||"default"),c=Object(i.a)(a,2),u=c[0],l=c[1],d=Object(r.useState)(),s=Object(i.a)(d,2),f=s[0],b=s[1],m=function(){b(null)};return o.a.createElement(x.Provider,{value:(n=f||u,ue(n,v[n]))},o.a.createElement(le.Provider,{value:{allNames:Object.keys(v),colorSchemeName:u,setColorScheme:function(e,n){n&&localStorage.setItem("colorScheme",e),l(e),m()},setColorSchemePreview:function(e){b(e)},resetColorSchemePreview:m}},o.a.createElement(t,{setColorSchemeName:function(e){return l(e)}})))};function se(){var e=Object(u.a)(["\n  padding: 1em;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n    cursor: pointer;\n  }\n"]);return se=function(){return e},e}function fe(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 1s;\n\n  height: ","vh;\n  width: 300px;\n  background: ",";\n"]);return fe=function(){return e},e}function be(){var e=Object(u.a)(["\n  flex-grow: 0;\n  flex-shrink: 0;\n  height: ","vh;\n  width: 1.5em;\n  z-index: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return be=function(){return e},e}function me(){var e=Object(u.a)(["\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: flex;\n  flex-direction: row;\n  overflow-x: hidden;\n"]);return me=function(){return e},e}function pe(){var e=Object(u.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n\n  height: ","vh;\n  width: ",";\n\n  background: ",";\n\n  transition: 1s cubic-bezier(0.25, 0.8, 0.25, 1);\n  display: flex;\n  align-items: flex-start;\n  flex-direction: row;\n"]);return pe=function(){return e},e}var he=l.c.div(pe(),(function(e){return e.rowHeight}),(function(e){return e.expanded?"100vw":"1.5em"}),(function(e){return e.background})),ge=l.c.div(me()),ve=l.c.div(be(),(function(e){return e.rowHeight})),xe=l.c.div(fe(),(function(e){return e.rowHeight}),(function(e){return e.background})),ke=l.c.div(se()),Ce=function(e){var n=e.rowHeight,t=Object(r.useState)(),a=Object(i.a)(t,2),c=a[0],u=a[1],l=o.a.useContext(x),d=o.a.useContext(le),s=l.topMenuColor?l.topMenuColor:l.topBar,f=[function(){return o.a.createElement(ie,{style:{marginLeft:"1em"},ButtonElement:function(){return o.a.createElement(xe,{background:s,colors:l,rowHeight:n},"Theme: ",d.colorSchemeName||"undefined")},values:d.allNames.map((function(e){return{name:e}})),ListElement:function(e){var n=e.name,t=e.onClick,r=e.open;return o.a.createElement(ke,{onClick:t,onMouseEnter:function(){r&&d.setColorSchemePreview(n)},onMouseLeave:function(){r&&d.resetColorSchemePreview()}},n)},onSelect:function(e){var n=e.name;d.setColorScheme(n,!0)},dropDownInnerListStyle:{background:s}})}].map((function(e){return e()}));return o.a.createElement(he,{expanded:c,colors:l,rowHeight:n,background:s},o.a.createElement(ve,{onClick:function(){u(!c)},rowHeight:n},o.a.createElement($.a,null)),o.a.createElement(ge,null,f))};function we(){var e=Object(u.a)(["\n  background: ",";\n  color: white;\n"]);return we=function(){return e},e}var ye=[{name:"Download",icon:$.b,onClick:function(){}}],Oe=l.c.div(we(),(function(e){return e.colors.backgroundColor})),je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[8,20],n=e[1]-e[0]+1;return s()(100/n,5)},Ee=function(){var e=Object(r.useState)(),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(),u=Object(i.a)(c,2),l=u[0],d=u[1],s=Object(r.useState)(),f=Object(i.a)(s,2),h=f[0],g=f[1],v=o.a.useContext(x);Object(r.useEffect)((function(){var e=fetch(-1==window.location.href.indexOf("?url=")?"https://fmf-fri-timetable-scraper.herokuapp.com/getUrnik":window.location.href.split("?url=")[1].split("&")[0],{method:"GET",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer"});e.then((function(e){e.ok?e.json().then((function(e){!function(e){var n={};e.forEach((function(e){-1!=e.tip.toUpperCase().indexOf("V")&&(e.predmet.abbr in n?n[e.predmet.abbr]+=1:n[e.predmet.abbr]=1)}));var t=Object.keys(n).map((function(e){return n[e]>1?e:0})).filter((function(e){return 0!=e}));console.log(t)}(e),a({tableData:e,timeInterval:p(e)})})):(console.error(e),d(e.status+": "+e.statusText))})),e.catch((function(e){d(e.toString())}))}),[]);var k=!!h;if(t&&!l&&!h){var C=function(e,n){var t={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[]},r=["monday","tuesday","wednesday","thursday","friday"],o={};r.forEach((function(e){return o[e]=1}));var a=[];return e.forEach((function(e){-1==a.indexOf(e.predmet.abbr)&&a.push(e.predmet.abbr),t[r[e.dan]].push({id:o[r[e.dan]]++,name:n?e.predmet.abbr:e.predmet.name,professor:e.profesor,class:e.ucilnica,type:e.tip,lectureId:a.indexOf(e.predmet.abbr),startTime:b()("2019-02-23T"+m(e.ura)+":00:00"),endTime:b()("2019-02-23T"+("00"+m(e.ura+e.trajanje)).slice(-2)+":00:00")})})),t}(t.tableData);C?g(C):d("data calculation error")}return o.a.createElement(Oe,{colors:v},o.a.createElement(E,{error:l,loaded:k,rowHeight:je(t?t.timeInterval:[8,20])}),l&&o.a.createElement(H,{error:l}),t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(X,{timeInterval:t.timeInterval,tableData:h}),o.a.createElement(Ce,{rowHeight:je(t.timeInterval),buttons:ye})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(de,{Component:Ee})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.ecd57ca3.chunk.js.map