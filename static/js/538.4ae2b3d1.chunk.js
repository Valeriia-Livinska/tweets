"use strict";(self.webpackChunktest_task_for_goit=self.webpackChunktest_task_for_goit||[]).push([[538],{77:function(n,e,t){t.d(e,{Pk:function(){return v},SP:function(){return m},Sn:function(){return x},im:function(){return f},qE:function(){return g},sJ:function(){return b},xv:function(){return h}});var r,o,i,a,s,c,l,u=t(168),p=t(444),d=t(874),f=p.ZP.div(r||(r=(0,u.Z)(["\n  margin: 0 auto;\n\n  color: ",";\n  background: white;\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.blackText}),(function(n){return n.theme.radii.medium})),x=p.ZP.div(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 80vh;\n  overflow: hidden;\n"]))),h=p.ZP.div(i||(i=(0,u.Z)(["\n  position: relative;\n  top: 40px;\n  opacity: 0;\n\n  font-size: 25px;\n  animation: slideUp ease 0.4s forwards;\n"]))),b=p.ZP.div(a||(a=(0,u.Z)(["\n  position: relative;\n  top: -40px;\n  left: 5px;\n  opacity: 0;\n\n  font-size: 25px;\n\n  animation: slideDown ease 0.4s forwards 0.6s;\n\n  @keyframes slideDown {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(40px);\n      opacity: 1;\n    }\n  }\n"]))),m=(0,p.ZP)(d.E)(s||(s=(0,u.Z)(["\n  position: relative;\n  top: 40px;\n  left: 10px;\n  opacity: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n\n  width: 196px;\n  height: 50px;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  color: inherit;\n  text-decoration: none;\n\n  border: none;\n  background-color: ",";\n  border-radius: 0 0 ","\n    ",";\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n\n  transition: all 0.8s ease 0s;\n\n  animation: slideUp ease 0.5s forwards 1.2s;\n\n  @keyframes slideUp {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-40px);\n      opacity: 1;\n    }\n  }\n\n  &:hover,\n  &:focus {\n    border-radius: ",";\n    box-shadow: 0 0 20px rgba(92, 211, 168, 0.6);\n    transition: all 0.8s ease 0.1s;\n  }\n\n  &:hover div {\n    top: -50px;\n  }\n"])),(function(n){return n.theme.colors.accentMint}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.radii.normal})),g=p.ZP.span(c||(c=(0,u.Z)(["\n  position: relative;\n  z-index: 1;\n"]))),v=p.ZP.div(l||(l=(0,u.Z)(['\n  position: absolute;\n  top: 0px;\n  left: 0px;\n\n  width: 196px;\n  height: 196px;\n\n  background-color: rgb(92, 211, 168);\n  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);\n  transition: all 1s ease 0s;\n\n  &::after,\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0px;\n    left: 50%;\n    width: 250%;\n    height: 250%;\n    transform: translateX(-50%) translateY(-96%);\n  }\n\n  &::before {\n    background-color: rgb(255, 255, 255);\n    border-radius: 48%;\n    animation: waves 5s infinite linear;\n  }\n  &::after {\n    background-color: rgba(255, 255, 255, 0.5);\n    border-radius: 44%;\n    animation: waves 10s infinite linear;\n  }\n\n  @keyframes waves {\n    0% {\n      transform: translate3d(-50%, -96%, 0);\n    }\n    100% {\n      transform: translate3d(-50%, -96%, 0) rotate(360deg);\n    }\n  }\n'])))},118:function(n,e,t){t.r(e),t.d(e,{default:function(){return dn}});var r=t(165),o=t(433),i=t(861),a=t(439),s=t(791),c=t(243);c.Z.defaults.baseURL="https://63ab93b5fdc006ba6060fe38.mockapi.io";var l,u,p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/users?page=".concat(e,"&limit=").concat(8));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.put("/users/".concat(e),{isFollowing:!t});case 2:return o=n.sent,n.abrupt("return",o.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=t(596),x=function(){f.Am.error("Sorry, an error occurred, please try again...",{position:f.Am.POSITION.TOP_RIGHT})},h=t(689),b=["title","titleId"];function m(){return m=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},m.apply(this,arguments)}function g(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function v(n,e){var t=n.title,r=n.titleId,o=g(n,b);return s.createElement("svg",m({viewBox:"0 0 76 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?s.createElement("title",{id:r},t):null,l||(l=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0h33.502l8.816 11-8.816 11H0V0Zm15.109 9.878a36.703 36.703 0 0 1-.155-.124c-.13-.104-.258-.207-.39-.305-.357-.271-.747-.487-1.193-.583-.493-.107-.99-.145-1.482.002-.7.21-1.189.668-1.511 1.304-.268.53-.34 1.092-.27 1.676.057.458.205.882.478 1.259.419.578.99.912 1.704 1 .643.08 1.266 0 1.855-.279.2-.095.2-.097.2-.317v-.004l.001-.16a34.206 34.206 0 0 0 0-.377c.001-.044.001-.067-.01-.079-.012-.012-.037-.011-.089-.01H12.29c-.052 0-.078 0-.09-.012-.012-.011-.011-.034-.01-.08v-1.535a898.478 898.478 0 0 0 0-.761c.001-.019.002-.037 0-.056-.003-.043.012-.066.06-.062a.518.518 0 0 0 .056 0h4.751c.031 0 .057.006.053.045-.003.023.012.039.027.055.019.02.038.04.027.074-.009.03-.007.063-.004.095a.6.6 0 0 1 .002.044v.842c0 1.123 0 2.246.002 3.368a.238.238 0 0 1-.099.206 7.099 7.099 0 0 1-2.987 1.476 6.72 6.72 0 0 1-2.009.134c-.8-.063-1.56-.266-2.263-.65-1.289-.707-2.1-1.778-2.474-3.178a5.522 5.522 0 0 1-.162-1.883c.196-2.358 1.87-4.196 4.112-4.708.64-.146 1.287-.168 1.94-.124.499.034.99.111 1.471.252.72.212 1.356.578 1.935 1.047.067.055.134.11.2.167.083.07.085.11.012.197l-1.093 1.3h-.001l-.547.65c-.005.005-.01.011-.014.018a.269.269 0 0 1-.076.076Zm13.065-2.252a5.608 5.608 0 0 0-3.769-1.475c-.626.001-1.094.052-1.59.18-1.44.371-2.567 1.169-3.316 2.442-.769 1.307-.925 2.708-.495 4.15.48 1.611 1.506 2.784 3.091 3.437 1.218.5 2.48.568 3.752.237 1.478-.383 2.61-1.231 3.354-2.554.626-1.116.793-2.312.56-3.56a4.985 4.985 0 0 0-1.587-2.857Zm-4.09 1.207c-.744.017-1.51.436-1.99 1.313-.326.594-.402 1.236-.279 1.898.098.523.328.987.708 1.367.595.593 1.322.826 2.155.731.861-.097 1.502-.533 1.912-1.283.35-.638.422-1.32.259-2.023-.27-1.165-1.256-2.006-2.765-2.003Z",fill:"#fff",fillOpacity:.3})),u||(u=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.318 0H76v22H42.318V0Zm11.309 11.274v-5.03c-.002-.047-.002-.07.01-.082.012-.012.035-.011.082-.01a3.983 3.983 0 0 0 .044 0h2.618c.064-.007.084.023.078.082-.001.016 0 .031 0 .047v9.978a1.303 1.303 0 0 0 .001.056c.001.047.002.07-.01.083-.013.012-.04.012-.093.012h-2.582l-.023-.001a.344.344 0 0 0-.048 0c-.067.01-.082-.024-.077-.082v-5.054Zm14.108-5.122H63.51l-4.222-.001h-.095c-.048-.002-.064.02-.06.063v2.439c0 .069-.003.1.012.114.014.014.047.011.117.011h2.654c.087 0 .13 0 .15.021.022.02.022.062.022.143v7.34c0 .069-.005.1.01.114.013.015.045.012.117.012h2.547c.08 0 .12 0 .139-.019.02-.02.02-.057.02-.133v-7.34c0-.075-.005-.109.01-.124.015-.016.05-.013.13-.013h2.703c.116 0 .116 0 .117-.113v-2.37c0-.081.005-.117-.011-.133-.016-.015-.052-.01-.134-.01Z",fill:"#fff",fillOpacity:.3})))}var w,Z,y,k,j,P,C,O,F,S,B,I,z,E,_,T=s.forwardRef(v),H=(t.p,function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),R=t(168),D=t(444),M=t.p+"static/media/cardImg.9e65815f46070b9b11e0.webp",Y=(D.ZP.li(w||(w=(0,R.Z)([""]))),D.ZP.article(Z||(Z=(0,R.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-contant: center;\n  padding: 28px 36px 36px 36px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n\n  color: ",";\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: ",';\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 214px;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 8px;\n    background: ',";\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"])),(function(n){return n.theme.colors.purple}),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.colors.purple}))),L=D.ZP.a(y||(y=(0,R.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"]))),U=D.ZP.div(k||(k=(0,R.Z)(["\n  width: 308px;\n  height: 168px;\n  background: url(",");\n\n  background-repeat: no-repeat;\n  }\n"])),M),A=D.ZP.div(j||(j=(0,R.Z)(["\n  z-index: 1;\n  position: absolute;\n  top: 178px;\n  left: 150px;\n  width: 80px;\n  height: 80px;\n\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: ",";\n"])),(function(n){return n.theme.radii.round})),G=D.ZP.img(P||(P=(0,R.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  width: 62px;\n  border-radius: ",";\n  transform: translate(-50%, -50%);\n"])),(function(n){return n.theme.radii.round})),q=D.ZP.p(C||(C=(0,R.Z)(["\n  margin-top: 88px;\n\n  text-transform: uppercase;\n"]))),K=D.ZP.p(O||(O=(0,R.Z)(["\n  margin-top: 16px;\n  margin-bottom: 26px;\n\n  text-transform: uppercase;\n"]))),N=D.ZP.button(F||(F=(0,R.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n\n  width: 196px;\n  height: 50px;\n\n  color: ",";\n  background-color: ",";\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border: none;\n  border-radius: ",";\n  text-transform: uppercase;\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),\n      0px 2px 2px rgb(0 0 0 / 12%);\n  }\n"])),(function(n){return n.theme.colors.blackText}),(function(n){return n.isFollowing?n.theme.colors.accentMint:n.theme.colors.purple}),(function(n){return n.theme.radii.normal}),(function(n){return n.isFollowing?n.theme.colors.purple:n.theme.colors.accentMint})),V=t(184),J=function(n){var e=n.users,t=n.hadleFollowBtnClick;return e.map((function(n){var e=n.id,o=n.user,a=n.avatar,s=n.tweets,c=n.followers,l=n.isFollowing,u=H(c),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d(e,l);case 3:o=n.sent,t(o),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),x();case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,V.jsxs)(Y,{children:[(0,V.jsx)(L,{"aria-label":"GoIT",href:"https://goit.global/ua/",target:"_blank",rel:"noopener noreferrer",children:(0,V.jsx)(T,{style:{width:"76px",height:"22px"}})}),(0,V.jsx)(U,{}),(0,V.jsx)(A,{children:(0,V.jsx)(G,{src:a,alt:o})}),(0,V.jsxs)(q,{children:[s," tweets "]}),(0,V.jsxs)(K,{children:[u," followers "]}),(0,V.jsx)(N,{type:"button",onClick:p,isFollowing:l,children:l?"following ":"follow"})]},e)}))},Q=D.ZP.ul(S||(S=(0,R.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: ","px;\n"])),(function(n){return n.theme.space[5]})),X=function(n){var e=n.users,t=n.hadleFollowBtnClick;return(0,V.jsx)(Q,{children:(0,V.jsx)(J,{users:e,hadleFollowBtnClick:t})})},$=t(407),W=(0,D.ZP)("div")({display:"flex"},$.$_,$.Dh,$.bK,$.GQ,$.eC,$.Oq,$.Cg,$.FK),nn=D.ZP.button(B||(B=(0,R.Z)(["\n  margin-bottom: 15px;\n  margin-left: 105px;\n  padding: 10px;\n\n  display: flex;\n  align-items: center;\n  justify-cintent: center;\n\n  color: ",";\n  cursor: pointer;\n  border: none;\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n"])),(function(n){return n.theme.colors.blackText}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.purple}),(function(n){return n.theme.colors.hoverPurple})),en=function(n){var e,t,r=n.users,o=n.hadleFollowBtnClick,i=(0,h.s0)(),a=(0,h.TH)(),s=null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,V.jsxs)(W,{flexDirection:"column",justifyContent:"center",alignItems:"flex-start",pt:5,children:[(0,V.jsx)(nn,{type:"button",onClick:function(){i(s)},children:"Back"}),(0,V.jsx)(X,{users:r,state:{from:a},hadleFollowBtnClick:o})]})},tn=t(870),rn=D.ZP.div(I||(I=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),on=function(){return(0,V.jsx)(rn,{children:(0,V.jsx)(tn.g4,{height:"80",width:"80",radius:"9",color:"#EBD8FF",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},an=(0,D.ZP)(N)(z||(z=(0,R.Z)(["\n  margin: 0 auto;\n  margin-top: 35px;\n"]))),sn=function(n){var e=n.onClick;return(0,V.jsx)(an,{type:"button",onClick:e,children:"Load more"})},cn=D.ZP.div(E||(E=(0,R.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),ln=function(){return(0,V.jsx)(cn,{children:(0,V.jsx)(tn.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"lightgrey",barColor:"#4B2A99"})})},un=t(77),pn=(0,D.ZP)(un.im)(_||(_=(0,R.Z)(["\n  padding-bottom: ","px;\n"])),(function(n){return n.theme.space[7]})),dn=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],l=(0,s.useState)(1),u=(0,a.Z)(l,2),d=u[0],f=u[1],h=(0,s.useState)(0),b=(0,a.Z)(h,2),m=b[0],g=b[1],v=(0,s.useState)(!1),w=(0,a.Z)(v,2),Z=w[0],y=w[1],k=(0,s.useState)(null),j=(0,a.Z)(k,2),P=j[0],C=j[1];(0,s.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),n.prev=1,n.next=4,p(d);case 4:e=n.sent,c((function(n){return 1===d?e:[].concat((0,o.Z)(n),(0,o.Z)(e))})),g((function(n){return 1===d?35-e.length:n-e.length})),C(null),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),C(n.t0),x();case 14:return n.prev=14,y(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,10,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[P,d]);return(0,V.jsx)("main",{children:1===d&&Z?(0,V.jsx)(W,{flexDirection:"column",alignItems:"center",mt:8,children:(0,V.jsx)(on,{})}):(0,V.jsx)(W,{pb:7,children:(0,V.jsxs)(pn,{children:[t.length>0&&(0,V.jsx)(en,{users:t,hadleFollowBtnClick:function(n){c((function(e){return e.map((function(e){return e.id===n.id?n:e}))}))}}),!!m&&(Z?(0,V.jsx)(ln,{}):(0,V.jsx)(sn,{onClick:function(){f((function(n){return n+1}))}}))]})})})}}}]);
//# sourceMappingURL=538.4ae2b3d1.chunk.js.map