(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{44:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(36),a=t.n(r),l=t(6),c=t.n(l),o=t(45),u=t.n(o),s=t(0),i=t.n(s),m=t(5),E=t(14),f=t(10);function b(e){return i.a.createElement(f.a,{style:{flexDirection:"row",width:100,justifyContent:"space-around"}},e.children)}function P(e){var n=e.symbol,t=u()(e,["symbol"]);return i.a.createElement(E.a,c()({style:{backgroundColor:" "===n?"#ccc":"transparent",minWidth:10}},t),n)}function y(){return i.a.createElement(E.a,null,"|")}function v(){return i.a.createElement(E.a,null,"-")}function d(e){return i.a.createElement(f.a,null,i.a.createElement(b,null,i.a.createElement(P,{onPress:function(){return e.onPress(0,0)},symbol:e.tab[0][0]}),i.a.createElement(y,null),i.a.createElement(P,{onPress:function(){return e.onPress(0,1)},symbol:e.tab[0][1]}),i.a.createElement(y,null),i.a.createElement(P,{onPress:function(){return e.onPress(0,2)},symbol:e.tab[0][2]})),i.a.createElement(b,null,i.a.createElement(v,null),i.a.createElement(y,null),i.a.createElement(v,null),i.a.createElement(y,null),i.a.createElement(v,null)),i.a.createElement(b,null,i.a.createElement(P,{onPress:function(){return e.onPress(1,0)},symbol:e.tab[1][0]}),i.a.createElement(y,null),i.a.createElement(P,{onPress:function(){return e.onPress(1,1)},symbol:e.tab[1][1]}),i.a.createElement(y,null),i.a.createElement(P,{onPress:function(){return e.onPress(1,2)},symbol:e.tab[1][2]})),i.a.createElement(b,null,i.a.createElement(v,null),i.a.createElement(y,null),i.a.createElement(v,null),i.a.createElement(y,null),i.a.createElement(v,null)),i.a.createElement(b,null,i.a.createElement(P,{onPress:function(){return e.onPress(2,0)},symbol:e.tab[2][0]}),i.a.createElement(y,null),i.a.createElement(P,{onPress:function(){return e.onPress(2,1)},symbol:e.tab[2][1]}),i.a.createElement(y,null),i.a.createElement(P,{onPress:function(){return e.onPress(2,2)},symbol:e.tab[2][2]})))}function g(e,n){var t=JSON.stringify;return t(n[0])===t([e,e,e])||t(n[1])===t([e,e,e])||t(n[2])===t([e,e,e])||n[0][0]===e&&n[1][0]===e&&n[2][0]===e||n[0][1]===e&&n[1][1]===e&&n[2][1]===e||n[0][2]===e&&n[1][2]===e&&n[2][2]===e||n[0][2]===e&&n[1][1]===e&&n[2][0]===e}function p(){var e=Object(s.useState)([[" "," "," "],[" "," "," "],[" "," "," "]]),n=a()(e,2),t=n[0],r=n[1],l=Object(s.useState)("x"),c=a()(l,2),o=c[0],u=c[1],m=Object(s.useState)("pas-fini"),b=a()(m,2),P=b[0],y=b[1];return Object(s.useEffect)((function(){g("x",t)&&y("x_gagne"),g("o",t)&&y("o_gagne")," "!==t[0][0]&&" "!==t[0][1]&&" "!==t[0][2]&&" "!==t[1][0]&&" "!==t[1][1]&&" "!==t[1][2]&&" "!==t[2][0]&&" "!==t[2][1]&&" "!==t[2][2]&&y("plein"),u("x"===o?"o":"x")}),[t]),i.a.createElement(f.a,{style:x.container},i.a.createElement(d,{tab:t,onPress:function(e,n){var a=t;a[e][n]=o,r([a[0],a[1],a[2]])}}),i.a.createElement(E.a,null,"\n\xc0 qui le tour ?"),i.a.createElement(E.a,null,o),i.a.createElement(E.a,null,"\nStatus"),i.a.createElement(E.a,null,P))}var x=m.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},69:function(e,n,t){t(70),e.exports=t(100)},70:function(e,n){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[69,1,2]]]);
//# sourceMappingURL=app.0df76ec6.chunk.js.map