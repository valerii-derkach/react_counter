(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(12),a=n.n(c),r=n(0),o=n.n(r),s=(n(22),n(13)),i=n(14),u=n(15),d=n(16),l=n(38),j=(n(23),n(1)),h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={counter:0},t.addOne=function(){t.setState((function(t){return{counter:t.counter+1}}))},t.add100=function(){t.setState((function(t){return{counter:t.counter+100}}))},t.increase=function(){t.addOne(),t.state.counter%5===0&&t.add100()},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.counter;return Object(j.jsxs)("section",{className:"section",children:[Object(j.jsx)("h1",{className:"section__header",children:"Count: ".concat(e)}),Object(j.jsxs)("div",{className:"section__buttons",children:[Object(j.jsx)(l.a,{variant:"contained",className:"section__button",onClick:this.addOne,children:"Add 1"}),Object(j.jsx)(l.a,{variant:"contained",className:"section__button",onClick:this.add100,children:"Add 100"}),Object(j.jsx)(l.a,{variant:"contained",className:"section__button",onClick:this.increase,children:"Increase"})]}),e>1e3&&Object(j.jsx)(l.a,{variant:"outlined",color:"error",onClick:function(){t.setState({counter:0})},children:"Reset"})]})}}]),n}(o.a.Component),b=function(){return Object(j.jsx)("section",{children:Object(j.jsx)(h,{})})};a.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4facc009.chunk.js.map