(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),i=n(7294),o=n(4760),s=n(5291),a=n(7357),l=n(9520),c=n(5861),h=n(3321),u=n(8456),d=n(1163);function p(){let[e,t]=(0,i.useState)(!1),n=(0,d.useRouter)(),p=async e=>{try{let r=new FormData;r.append("PDF",e),await fetch("https://hire-quotient.azurewebsites.net/api/pdf/parser",{method:"POST",body:r}).then(e=>e.json()).then(e=>{200===e.status?(n.push({pathname:"/parseResult",query:{keywords:e.pdfText}}),t(!1)):(console.log(e),t(!1))})}catch(i){console.log(i),t(!1)}},x=e=>{e.preventDefault(),t(!0);let n=e.target.files[0];p(n)};return(0,r.jsxs)(a.Z,{sx:{backgroundColor:s.Z.palette.background.main,minHeight:"100vh"},children:[(0,r.jsx)(o.Z,{}),(0,r.jsxs)(l.Z,{sx:{pt:4,textAlign:"center",color:s.Z.palette.text.main},children:[(0,r.jsx)(c.Z,{variant:"h4",sx:{fontWeight:500,mb:1},children:"Parse JD file"}),(0,r.jsx)(c.Z,{variant:"h6",sx:{fontWeight:300,mb:5},children:"Based on any job descriptions provided in pdf below"}),(0,r.jsxs)(h.Z,{variant:"contained",component:"label",sx:{width:300,height:75,mb:1,fontSize:30,textTransform:"none"},children:[e?(0,r.jsx)(u.Z,{sx:{color:"#fff"}}):"Select JD PDF",(0,r.jsx)("input",{type:"file",onChange:e=>x(e),accept:"application/pdf",hidden:!0})]})]})]})}},4760:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893);n(7294);var i=n(2293),o=n(7357),s=n(155),a=n(5861),l=n(3321),c=n(3946),h=n(326),u=n(5291),d=n(1163);function p(){let e=(0,d.useRouter)();return(0,r.jsx)(o.Z,{sx:{flexGrow:1},children:(0,r.jsx)(i.Z,{position:"static",sx:{backgroundColor:u.Z.palette.background.light,color:u.Z.palette.text.main},children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:(0,r.jsx)(h.Z,{})}),(0,r.jsxs)(a.Z,{variant:"h6",component:"div",sx:{flexGrow:1,letterSpacing:"0.1rem",color:u.Z.palette.primary.main,cursor:"pointer"},onClick:()=>{e.push("/")},children:["JD",(0,r.jsx)("span",{style:{fontWeight:"lighter"},children:"Parser"})]}),(0,r.jsx)(l.Z,{color:"inherit",children:"Login"})]})})})}}},function(e){e.O(0,[493,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);