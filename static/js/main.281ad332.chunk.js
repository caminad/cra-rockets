(this["webpackJsonpcra-rockets"]=this["webpackJsonpcra-rockets"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(6),i=n.n(a),u=(n(15),n(5)),s=n.n(u),o=n(9),l=n(10),d=n(7),j=n(8),p=(n(17),n(1));function h(e){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.statusText);case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return new Date(1e3*e.date_unix).getUTCFullYear()}var x=function(){var e=Object(j.a)("https://api.spacexdata.com/v4/launches",h),t=e.data,n=e.mutate,c=new Set(null===t||void 0===t?void 0:t.map(f)),a=Object(r.useState)(NaN),i=Object(l.a)(a,2),u=i[0],s=i[1];return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("button",{onClick:function(){return n()},children:"Reload"}),Object(p.jsxs)("select",{onChange:function(e){return s(Number(e.currentTarget.value))},"data-testid":"filterByYear",children:[Object(p.jsx)("option",{children:"Filter by Year"}),Object(o.a)(c).map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))]}),Object(p.jsx)("ol",{children:null===t||void 0===t?void 0:t.filter((function(e){return!u||f(e)===u})).map((function(e){return Object(p.jsx)("li",{children:e.name},e.id)}))})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.281ad332.chunk.js.map