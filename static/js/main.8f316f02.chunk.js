(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(10),r=n.n(i),o=(n(22),n(11)),s=n(12),l=n(13),d=n(16),b=n(15),u=n(5);var j=Object(u.a)("div",{target:"e12asyl30"})({name:"1phqb34",styles:"width:600px;margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px"});var h=Object(u.a)("ul",{target:"eh5s2nm1"})({name:"34lp56",styles:"display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;margin:0;padding:0"}),g=Object(u.a)("li",{target:"eh5s2nm0"})({name:"u1n5aj",styles:"font-weight:500;font-size:20px;line-height:1.14;letter-spacing:0.03em;margin-bottom:10px;list-style:none"}),p=n(0);function x(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(p.jsxs)(h,{children:[Object(p.jsxs)(g,{children:["Good: ",t]}),Object(p.jsxs)(g,{children:["Neutral: ",n]}),Object(p.jsxs)(g,{children:["Bad: ",a]}),Object(p.jsxs)(g,{children:["Total: ",c]}),Object(p.jsxs)(g,{children:["Positive feedback: ",i,"%"]})]})}var v,f,O,m,k=n(2),y=n(3),w=y.a.div(v||(v=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),F=y.a.button(f||(f=Object(k.a)(["\n\n margin-right: 10px;\n  padding: 10px;\n\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n\n  cursor: pointer;\n  outline: none;\n  border-radius: 5px;\n  background: white;\n  \n  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);\n  transition: box-shadow 250ms linear;\n  &:hover {\n   background-color:rgb(44, 154, 243);\n   box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5); \n  }\n  "])));function P(e){var t=e.options,n=e.onLeaveFeedback;return Object(p.jsx)(w,{children:t.map((function(e){return Object(p.jsx)(F,{type:"button",onClick:n,name:e,children:e},e)}))})}var T,B=y.a.h1(O||(O=Object(k.a)(["\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 1.19;\n  text-align: center;\n  letter-spacing: 0.03em;\n"]))),L=y.a.div(m||(m=Object(k.a)(["\npadding-top: 18px"])));function z(e){var t=e.title,n=e.children;return Object(p.jsxs)(L,{children:[Object(p.jsx)(B,{children:t}),n]})}var S=y.a.p(T||(T=Object(k.a)(["\ntext-align: center;\n\n"])));function C(e){var t=e.message;return Object(p.jsx)(S,{children:t})}var J=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedbackButton=function(t){var n=t.target;e.setState(Object(o.a)({},n.name,e.state[n.name]+1))},e}return Object(l.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=100*this.state.good/this.countTotalFeedback();return Math.round(e)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(p.jsxs)(j,{children:[Object(p.jsx)(z,{title:"Please leave feedback",children:Object(p.jsx)(P,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedbackButton})}),Object(p.jsx)(z,{title:"Statisctics",children:this.countTotalFeedback()>0?Object(p.jsx)(x,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(p.jsx)(C,{message:"No feedback given"})})]})}}]),n}(a.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8f316f02.chunk.js.map