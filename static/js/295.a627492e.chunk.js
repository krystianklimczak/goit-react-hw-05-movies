"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[295],{318:function(e,t,r){r.d(t,{Z:function(){return c}});r(791);var n=r(689),a=r(87),s="MovieList_movieList__P2D1V",i="MovieList_movieList__link__Ju6i4",u=r(184);var c=function(e){var t=(0,n.TH)(),r=e.movies;return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:s,children:r.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:t,movieId:e.id},className:i,children:e.title})},e.id)}))})})}},295:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(433),a=r(861),s=r(439),i=r(757),u=r.n(i),c=r(791),o=r(87),l=r(294),p=function(){var e=(0,a.Z)(u().mark((function e(t){var r,n,a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie",r=new URLSearchParams({query:t,api_key:"a06a593c7417d6d1323759d2907180c8",language:"en-US",include_adult:"false"}),e.next=4,l.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(r));case 4:return n=e.sent,e.next=7,n.data;case 7:return a=e.sent,e.next=10,a.results;case 10:return s=e.sent,e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=r(318),v="Movies_form__utRLM",m="Movies_input__+JkfI",h="Movies_button__+2NGv",d=r(184);var _=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),r=t[0],i=t[1],l=(0,o.lr)(),_=(0,s.Z)(l,2),x=_[0],k=_[1];function y(){return(y=(0,a.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=t.currentTarget,n=r.elements.query.value,k({query:n}),r.reset();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,c.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=x.get("query")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,p(t);case 5:r=e.sent,i((0,n.Z)(r));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]),(0,d.jsxs)("div",{children:[(0,d.jsxs)("form",{onSubmit:function(e){return y.apply(this,arguments)},className:v,children:[(0,d.jsx)("input",{name:"query",className:m,placeholder:"Please fill movie name"}),(0,d.jsx)("button",{type:"sumbit",className:h,children:"Search"})]}),r&&(0,d.jsx)(f.Z,{movies:r})]})}}}]);
//# sourceMappingURL=295.a627492e.chunk.js.map