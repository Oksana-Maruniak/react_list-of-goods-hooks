(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),c=n.n(o),r=n(6),i=n(8),a=n(1),u=(n(13),n(4)),l=n.n(u),b=(n(14),n(0)),d=function(t){var e=t.good;return Object(b.jsx)("li",{"data-cy":"Good",children:e})},h=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(d,{good:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.name="name",t.length="length"}(s||(s={}));var g=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(!1),u=Object(r.a)(c,2),d=u[0],g=u[1],f=function(t,e){var n=e.sortField,o=e.isReveresed,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case s.name:return t.localeCompare(e);case s.length:return t.length-e.length;default:return 0}})),o&&c.reverse(),c}(j,{sortField:n,isReveresed:d});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return o(s.name)},type:"button",className:l()("button","is-info",{"is-light":n!==s.name}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:function(){return o(s.length)},type:"button",className:l()("button","is-success",{"is-light":n!==s.length}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){return g((function(t){return!t}))},type:"button",className:l()("button","is-warning",{"is-light":!d}),children:"Reverse"}),(n||d)&&Object(b.jsx)("button",{onClick:function(){o(""),g(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)(h,{goods:f})]})};c.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.90f88a73.chunk.js.map