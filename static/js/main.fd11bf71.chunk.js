(this.webpackJsonpalfa=this.webpackJsonpalfa||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(11),c=a.n(i),s=(a(157),a(158),a(322)),l=a(289),o=a(344),u=a(14),d=a(50),m=a(130),j=a(325),h=a(327),b=a(328),f=a(143),x=a(329),O=a(4),p=Object(s.a)((function(e){return{title:{flexGrow:1},getExcel:{backgroundColor:"#388e3c",color:"white","&:hover":{backgroundColor:"#388e3c"}},link:{textDecoration:"none",color:"white"}}})),g=function(e){Object(m.a)(e);var t=p();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(j.a,{position:"fixed",children:Object(O.jsx)(h.a,{fixed:!0,children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(f.a,{variant:"h6",className:t.title,children:"Users"}),Object(O.jsx)("a",{className:t.link,href:"".concat("https://localhost:5001/","users/getexcel"),children:Object(O.jsx)(x.a,{variant:"contained",className:t.getExcel,children:"Get Excel"})})]})})})})},N=n.a.memo((function(e){return Object(O.jsx)(g,Object(u.a)({},e))})),v=Object(d.b)((function(e){return{}}),{})(N),C=a(22),E=a.n(C),w=a(42),S=a(17),U=a(134),y=a.n(U).a.create({baseURL:"http://webdevfds-001-site1.itempurl.com"}),k=function(){return y.get("users").then((function(e){return e.data.users}))},A=function(e){return y.post("users",Object(u.a)({},e)).then((function(e){return e.data}))},F=function(e){return y.delete("users",{data:{id:e}})},L=function(e){return y.put("users",Object(u.a)({},e)).then((function(e){return e.data}))},T="SET_USERS",D="ADD_USER",M="REMOVE_USER",W="UPDATE_USER",_={users:[]},q=function(e){return{type:D,user:e}},R=function(e){return{type:M,id:e}},B=function(e){return{type:W,user:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case D:return Object(u.a)(Object(u.a)({},e),{},{users:[t.user].concat(Object(S.a)(e.users))});case M:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.id}))});case W:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.user.id?Object.assign({},e,t.user):e}))});default:return e}},P="INITIALIZED_SUCCESS",z="GLOBAL_ERROR",V={initialized:!1,globalError:null},G=function(e){return{type:z,error:e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});case z:return Object(u.a)(Object(u.a)({},e),{},{globalError:t.error});default:return e}},X=a(62),Z=a(135),H=Object(X.b)({app:J,users:I}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.c,Q=Object(X.d)(H,K(Object(X.a)(Z.a))),Y=a(16),$=a(2),ee=a(142),te=a(338),ae=a(339),re=a(340),ne=a(341),ie=a(342),ce=a(343),se=a(346),le=a(26),oe=a(92),ue=a.n(oe),de=a(330),me=a(331),je=a(332),he=a(333),be=a(334),fe=a(347),xe=a(337),Oe=a(79),pe=Object(s.a)((function(e){return{create:{position:"absolute",right:0,margin:"20px 0"},dialog:{display:"flex",flexDirection:"column"},formControl:{margin:e.spacing(1),minWidth:120}}})),ge=le.a({firstName:le.b("Enter first name").min(3,"At least 3 characters").max(30,"Max 30 characters").required("First name is required"),middleName:le.b("Enter middle name").min(3,"At least 3 characters").max(50,"Max 50 characters").required("Middle name is required"),lastName:le.b("Enter last name").min(3,"At least 3 characters").max(50,"Max 50 characters"),login:le.b("Enter login").min(3,"At least 3 characters").max(60,"Max 60 characters").required("Login is required")}),Ne=function(e){var t=e.createUser,a=pe(),n=Object(r.useState)(!1),i=Object(Y.a)(n,2),c=i[0],s=i[1],l=function(){o.resetForm(),s(!1)},o=Object(Oe.a)({initialValues:{firstName:"",middleName:"",lastName:"",login:""},validationSchema:ge,onSubmit:function(e){j(!0),t({fullNameValue:{firstName:e.firstName,middleName:e.middleName,lastName:e.lastName},login:e.login}),j(!1),l(),o.resetForm()}}),u=Object(r.useState)(!1),d=Object(Y.a)(u,2),m=d[0],j=d[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(de.a,{color:"secondary",className:a.create,onClick:function(){return s(!0)},children:Object(O.jsx)(ue.a,{})}),Object(O.jsxs)(me.a,{open:c,onClose:l,fullWidth:!0,maxWidth:"xs",children:[Object(O.jsx)(je.a,{children:"Creating new user"}),Object(O.jsxs)("form",{onSubmit:o.handleSubmit,children:[Object(O.jsxs)(he.a,{className:a.dialog,children:[Object(O.jsx)(be.a,{children:"Fill in the gaps"}),Object(O.jsx)(fe.a,{fullWidth:!0,id:"login",name:"login",label:"Login",value:o.values.login,onChange:o.handleChange,error:o.touched.login&&Boolean(o.errors.login),helperText:o.touched.login&&o.errors.login}),Object(O.jsx)(fe.a,{fullWidth:!0,id:"firstName",name:"firstName",label:"First name",value:o.values.firstName,onChange:o.handleChange,error:o.touched.firstName&&Boolean(o.errors.firstName),helperText:o.touched.firstName&&o.errors.firstName}),Object(O.jsx)(fe.a,{fullWidth:!0,id:"middleName",name:"middleName",label:"Middle name",value:o.values.middleName,onChange:o.handleChange,error:o.touched.middleName&&Boolean(o.errors.middleName),helperText:o.touched.middleName&&o.errors.middleName}),Object(O.jsx)(fe.a,{fullWidth:!0,id:"lastName",name:"lastName",label:"Last name",value:o.values.lastName,onChange:o.handleChange,error:o.touched.lastName&&Boolean(o.errors.lastName),helperText:o.touched.lastName&&o.errors.lastName})]}),Object(O.jsxs)(xe.a,{children:[Object(O.jsx)(x.a,{onClick:l,color:"primary",children:"Cancel"}),Object(O.jsx)(x.a,{type:"submit",disabled:m,color:"primary",children:"Add"})]})]})]})]})},ve=Object(s.a)((function(e){return{dialog:{display:"flex",flexDirection:"column"},secondaryIcon:{marginRight:e.spacing(.5),transition:"all 0.3s ease-out","&:hover":{cursor:"pointer",color:"purple"}},formControl:{margin:e.spacing(1),minWidth:120},edit:{backgroundColor:"#5c6bc0",color:"white","&:hover":{backgroundColor:"#7986cb"},margin:"5px 5px",height:"30px"}}})),Ce=le.a({firstName:le.b("Enter first name").min(3,"At least 3 characters").max(30,"Max 30 characters").required("First name is required"),middleName:le.b("Enter middle name").min(3,"At least 3 characters").max(50,"Max 50 characters").required("Middle name is required"),lastName:le.b("Enter last name").min(3,"At least 3 characters").max(50,"Max 50 characters"),login:le.b("Enter login").min(3,"At least 3 characters").max(30,"Max 30 characters").required("Login is required")}),Ee=function(e){var t=e.updateUser,a=e.updatingUser,n=ve(),i=Object(r.useState)(!1),c=Object(Y.a)(i,2),s=c[0],l=c[1],o=Object(Oe.a)({initialValues:{id:a.id,firstName:a.fullName.firstName,middleName:a.fullName.middleName,lastName:a.fullName.lastName,login:a.login},validationSchema:Ce,onSubmit:function(e){l(!0),t({id:e.id,fullName:{firstName:e.firstName,middleName:e.middleName,lastName:e.lastName},login:e.login}),l(!1),h()}}),u=Object(r.useState)(!1),d=Object(Y.a)(u,2),m=d[0],j=d[1],h=function(){o.resetForm(),j(!1)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x.a,{className:n.edit,onClick:function(){return j(!0)},children:"Edit"}),Object(O.jsxs)(me.a,{fullWidth:!0,maxWidth:"xs",open:m,onClose:h,children:[Object(O.jsx)(je.a,{children:"Updating user"}),Object(O.jsxs)("form",{onSubmit:o.handleSubmit,children:[Object(O.jsxs)(he.a,{className:n.dialog,children:[Object(O.jsx)(be.a,{children:"Fill in the gaps"}),Object(O.jsx)(fe.a,{fullWidth:!0,id:"login",name:"login",label:"Login",value:o.values.login,onChange:o.handleChange,error:o.touched.login&&Boolean(o.errors.login),helperText:o.touched.login&&o.errors.login}),Object(O.jsx)(fe.a,{fullWidth:!0,id:"firstName",name:"firstName",label:"First name",value:o.values.firstName,onChange:o.handleChange,error:o.touched.firstName&&Boolean(o.errors.firstName),helperText:o.touched.firstName&&o.errors.firstName}),Object(O.jsx)(fe.a,{fullWidth:!0,id:"middleName",name:"middleName",label:"Middle name",value:o.values.middleName,onChange:o.handleChange,error:o.touched.middleName&&Boolean(o.errors.middleName),helperText:o.touched.middleName&&o.errors.middleName}),Object(O.jsx)(fe.a,{fullWidth:!0,id:"lastName",name:"lastName",label:"Last name",value:o.values.lastName,onChange:o.handleChange,error:o.touched.lastName&&Boolean(o.errors.lastName),helperText:o.touched.lastName&&o.errors.lastName})]}),Object(O.jsxs)(xe.a,{children:[Object(O.jsx)(x.a,{onClick:h,color:"primary",children:"Cancel"}),Object(O.jsx)(x.a,{type:"submit",disabled:s,color:"primary",children:"Edit"})]})]})]})]})},we=["users","createUser","deleteUser","updateUser"],Se=Object(s.a)((function(e){return{users:{marginTop:e.spacing(15),position:"relative"},delete:{backgroundColor:"#ef5350","&:hover":{backgroundColor:"#e57373"},color:"white",margin:"0 5px",height:"30px"},buttons:{width:"160px"},createUser:{position:"relative"}}})),Ue=function(e){var t,a=e.users,n=e.createUser,i=e.deleteUser,c=e.updateUser,s=(Object($.a)(e,we),Se()),l=Object(r.useState)(0),o=Object(Y.a)(l,2),u=o[0],d=o[1],m=Object(r.useState)(8),j=Object(Y.a)(m,2),b=j[0],f=j[1];t=a&&b>0?a.slice(u*b,u*b+b):a;return Object(O.jsxs)(h.a,{children:[Object(O.jsxs)(ee.a,{className:s.users,children:[Object(O.jsx)(te.a,{children:Object(O.jsxs)(ae.a,{className:s.table,children:[Object(O.jsx)(re.a,{children:Object(O.jsxs)(ne.a,{children:[Object(O.jsx)(ie.a,{children:"Login"}),Object(O.jsx)(ie.a,{children:"First name"}),Object(O.jsx)(ie.a,{children:"Middle name"}),Object(O.jsx)(ie.a,{children:"Last name"}),Object(O.jsx)(ie.a,{children:"Created At"}),Object(O.jsx)(ie.a,{children:"Updated At"}),Object(O.jsx)(ie.a,{})]})}),Object(O.jsx)(ce.a,{children:t.map((function(e){return Object(O.jsxs)(ne.a,{children:[Object(O.jsx)(ie.a,{children:e.login}),Object(O.jsx)(ie.a,{children:e.fullName.firstName}),Object(O.jsx)(ie.a,{children:e.fullName.middleName}),Object(O.jsx)(ie.a,{children:e.fullName.lastName}),Object(O.jsx)(ie.a,{children:new Date(Date.parse(e.createdAt.value)).toLocaleString()}),Object(O.jsx)(ie.a,{children:new Date(Date.parse(e.updatedAt.value)).toLocaleString()}),Object(O.jsxs)(ie.a,{className:s.buttons,align:"right",children:[Object(O.jsx)(Ee,{updatingUser:e,updateUser:c}),Object(O.jsx)(x.a,{onClick:(t=e.id,function(){i(t)}),className:s.delete,children:"Delete"})]})]},e.id);var t}))})]})}),Object(O.jsx)(se.a,{rowsPerPageOptions:[8,16,25],component:ee.a,count:a.length,rowsPerPage:b,page:u,onChangePage:function(e,t){d(t)},onChangeRowsPerPage:function(e){f(parseInt(e.target.value,10)),d(0)}})]}),Object(O.jsx)("div",{className:s.createUser,children:Object(O.jsx)(Ne,{createUser:n})})]})},ye=n.a.memo((function(e){return Object(O.jsx)(Ue,Object(u.a)({},e))})),ke=Object(d.b)((function(e){return{users:e.users.users}}),{createUser:function(e){return function(){var t=Object(w.a)(E.a.mark((function t(a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:r=t.sent,a(q(r.user));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteUser:function(e){return function(){var t=Object(w.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:a(R(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUser:function(e){return function(){var t=Object(w.a)(E.a.mark((function t(a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:r=t.sent,a(B(r.updatedUser));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(ye),Ae=Object(s.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+5,color:"#fff"}}})),Fe=n.a.memo((function(e){var t=e.initializeApp,a=e.initialized,n=Ae();return Object(r.useEffect)((function(){t()})),a?Object(O.jsxs)("div",{className:n.body,children:[Object(O.jsx)(v,{}),Object(O.jsx)(ke,{})]}):Object(O.jsx)(l.a,{className:n.backdrop,open:!a,children:Object(O.jsx)(o.a,{color:"inherit"})})})),Le=Object(d.b)((function(e){return{initialized:e.app.initialized,globalError:e.app.globalError}}),{initializeApp:function(){return function(){var e=Object(w.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object(w.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:a=e.sent,t({type:T,users:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:t({type:P});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},handleError:function(e){return function(){var t=Object(w.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(G(e.toString()));case 2:setTimeout((function(){return a(G(null))}),5e3);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Fe),Te=function(){return Object(O.jsx)(d.a,{store:Q,children:Object(O.jsx)(Le,{})})},De=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,349)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),i(e),c(e)}))};c.a.render(Object(O.jsx)(Te,{}),document.getElementById("root")),De()}},[[287,1,2]]]);
//# sourceMappingURL=main.fd11bf71.chunk.js.map