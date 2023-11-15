"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template=self.webpackChunk_coreui_coreui_pro_react_admin_template||[]).push([[7733],{97733:function(e,s,t){t.r(s),t.d(s,{default:function(){return _}});var n=t(29439),r=t(72791),o=t(61138),a=t(52007),i=t.n(a),c=t(3743),l=t(73972),d=t(94191),m=t(57575),u=(0,r.createContext)({}),h=(0,r.forwardRef)((function(e,s){var t=e.children,n=e.animation,a=void 0===n||n,i=e.autohide,d=void 0===i||i,h=e.className,f=e.color,p=e.delay,x=void 0===p?5e3:p,g=e.index,j=e.key,b=e.visible,y=void 0!==b&&b,v=e.onClose,w=e.onShow,N=(0,o._T)(e,["children","animation","autohide","className","color","delay","index","key","visible","onClose","onShow"]),T=(0,r.useRef)(),C=(0,l.A7)(s,T),R=(0,r.useState)(!1),E=R[0],k=R[1],_=(0,r.useRef)();(0,r.useEffect)((function(){k(y)}),[y]);var O={visible:E,setVisible:k};(0,r.useEffect)((function(){return function(){return clearTimeout(_.current)}}),[]),(0,r.useEffect)((function(){H()}),[E]);var H=function(){d&&(clearTimeout(_.current),_.current=window.setTimeout((function(){k(!1)}),x))};return r.createElement(m.ZP,{in:E,nodeRef:T,onEnter:function(){return w&&w(null!==g&&void 0!==g?g:null)},onExited:function(){return v&&v(null!==g&&void 0!==g?g:null)},timeout:250,unmountOnExit:!0},(function(e){var s;return r.createElement(u.Provider,{value:O},r.createElement("div",(0,o.pi)({className:(0,c.Z)("toast",(s={fade:a},s["bg-".concat(f)]=f,s["border-0"]=f,s["show showing"]="entering"===e||"exiting"===e,s.show="entered"===e,s),h),"aria-live":"assertive","aria-atomic":"true",role:"alert",onMouseEnter:function(){return clearTimeout(_.current)},onMouseLeave:function(){return H()}},N,{key:j,ref:C}),t))}))}));h.propTypes={animation:i().bool,autohide:i().bool,children:i().node,className:i().string,color:d.$1,delay:i().number,index:i().number,key:i().number,onClose:i().func,onShow:i().func,visible:i().bool},h.displayName="CToast";var f=t(71887),p=(0,r.forwardRef)((function(e,s){var t=e.children,n=e.component,a=(0,o._T)(e,["children","component"]),i=(0,r.useContext)(u).setVisible;return n?r.createElement(n,(0,o.pi)({onClick:function(){return i(!1)}},a,{ref:s}),t):r.createElement(f.p,(0,o.pi)({onClick:function(){return i(!1)}},a,{ref:s}))}));p.propTypes=(0,o.pi)((0,o.pi)({},f.p.propTypes),{component:i().elementType}),p.displayName="CToastClose";var x=(0,r.forwardRef)((function(e,s){var t=e.children,n=e.className,a=e.closeButton,i=(0,o._T)(e,["children","className","closeButton"]);return r.createElement("div",(0,o.pi)({className:(0,c.Z)("toast-header",n)},i,{ref:s}),t,a&&r.createElement(p,null))}));x.propTypes={children:i().node,className:i().string,closeButton:i().bool},x.displayName="CToastHeader";var g=(0,r.forwardRef)((function(e,s){var t=e.children,n=e.className,a=(0,o._T)(e,["children","className"]);return r.createElement("div",(0,o.pi)({className:(0,c.Z)("toast-body",n)},a,{ref:s}),t)}));g.propTypes={children:i().node,className:i().string},g.displayName="CToastBody";var j=t(69863),b=t(97726),y=(0,r.forwardRef)((function(e,s){var t=e.children,n=e.className,a=e.placement,i=e.push,l=(0,o._T)(e,["children","className","placement","push"]),d=(0,r.useState)([]),m=d[0],u=d[1],h=(0,r.useRef)(0);(0,r.useEffect)((function(){h.current++,i&&f(i)}),[i]);var f=function(e){u((function(s){return(0,o.ev)((0,o.ev)([],s,!0),[r.cloneElement(e,{index:h.current,key:h.current,onClose:function(e){return u((function(s){return s.filter((function(s){return s.props.index!==e}))}))}})],!1)}))};return r.createElement(b.D,{portal:"string"===typeof a},m.length>0||t?r.createElement("div",(0,o.pi)({className:(0,c.Z)("toaster toast-container",{"position-fixed":a,"top-0":a&&a.includes("top"),"top-50 translate-middle-y":a&&a.includes("middle"),"bottom-0":a&&a.includes("bottom"),"start-0":a&&a.includes("start"),"start-50 translate-middle-x":a&&a.includes("center"),"end-0":a&&a.includes("end")},n)},l,{ref:s}),t,m.map((function(e){return r.cloneElement(e,{visible:!0})}))):null)}));y.propTypes={children:i().node,className:i().string,placement:i().oneOfType([i().string,i().oneOf(["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"])]),push:i().any},y.displayName="CToaster";var v=t(26203),w=t(78139),N=t(26847),T=t(46007),C=t(66018),R=t(95875),E=t(80184),k=function(){var e=(0,r.useState)(0),s=(0,n.Z)(e,2),t=s[0],o=s[1],a=(0,r.useRef)(),i=(0,E.jsxs)(h,{title:"CoreUI for React.js",children:[(0,E.jsxs)(x,{closeButton:!0,children:[(0,E.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:(0,E.jsx)("rect",{width:"100%",height:"100%",fill:"#007aff"})}),(0,E.jsx)("strong",{className:"me-auto",children:"CoreUI for React.js"}),(0,E.jsx)("small",{children:"7 min ago"})]}),(0,E.jsx)(g,{children:"Hello, world! This is a toast message."})]});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(j.u,{color:"primary",onClick:function(){return o(i)},children:"Send a toast"}),(0,E.jsx)(y,{ref:a,push:t,placement:"top-end"})]})},_=function(){return(0,E.jsxs)(v.r,{children:[(0,E.jsx)(w.b,{xs:12,children:(0,E.jsxs)(N.x,{className:"mb-4",children:[(0,E.jsxs)(T.b,{children:[(0,E.jsx)("strong",{children:"React Toast"})," ",(0,E.jsx)("small",{children:"Basic"})]}),(0,E.jsxs)(C.s,{children:[(0,E.jsx)("p",{className:"text-body-secondary small",children:"Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your \u201ctoasted\u201d content and strongly encourage a dismiss button."}),(0,E.jsx)(R.q3,{href:"components/toast",children:(0,E.jsxs)(h,{title:"CoreUI for React.js",autohide:!1,visible:!0,children:[(0,E.jsxs)(x,{closeButton:!0,children:[(0,E.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:(0,E.jsx)("rect",{width:"100%",height:"100%",fill:"#007aff"})}),(0,E.jsx)("strong",{className:"me-auto",children:"CoreUI for React.js"}),(0,E.jsx)("small",{children:"7 min ago"})]}),(0,E.jsx)(g,{children:"Hello, world! This is a toast message."})]})}),(0,E.jsx)(R.q3,{href:"components/toast",children:k()})]})]})}),(0,E.jsx)(w.b,{xs:12,children:(0,E.jsxs)(N.x,{className:"mb-4",children:[(0,E.jsxs)(T.b,{children:[(0,E.jsx)("strong",{children:"React Toast"})," ",(0,E.jsx)("small",{children:"Translucent"})]}),(0,E.jsxs)(C.s,{children:[(0,E.jsx)("p",{className:"text-body-secondary small",children:"Toasts are slightly translucent to blend in with what's below them."}),(0,E.jsx)(R.q3,{href:"components/toast#translucent",tabContentClassName:"bg-dark",children:(0,E.jsxs)(h,{title:"CoreUI for React.js",autohide:!1,visible:!0,children:[(0,E.jsxs)(x,{closeButton:!0,children:[(0,E.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:(0,E.jsx)("rect",{width:"100%",height:"100%",fill:"#007aff"})}),(0,E.jsx)("strong",{className:"me-auto",children:"CoreUI for React.js"}),(0,E.jsx)("small",{children:"7 min ago"})]}),(0,E.jsx)(g,{children:"Hello, world! This is a toast message."})]})})]})]})}),(0,E.jsx)(w.b,{xs:12,children:(0,E.jsxs)(N.x,{className:"mb-4",children:[(0,E.jsxs)(T.b,{children:[(0,E.jsx)("strong",{children:"React Toast"})," ",(0,E.jsx)("small",{children:"Stacking"})]}),(0,E.jsxs)(C.s,{children:[(0,E.jsx)("p",{className:"text-body-secondary small",children:"You can stack toasts by wrapping them in a toast container, which will vertically add some spacing."}),(0,E.jsx)(R.q3,{href:"components/toast#stacking",children:(0,E.jsxs)(y,{className:"position-static",children:[(0,E.jsxs)(h,{title:"CoreUI for React.js",autohide:!1,visible:!0,children:[(0,E.jsxs)(x,{closeButton:!0,children:[(0,E.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:(0,E.jsx)("rect",{width:"100%",height:"100%",fill:"#007aff"})}),(0,E.jsx)("strong",{className:"me-auto",children:"CoreUI for React.js"}),(0,E.jsx)("small",{children:"7 min ago"})]}),(0,E.jsx)(g,{children:"Hello, world! This is a toast message."})]}),(0,E.jsxs)(h,{title:"CoreUI for React.js",autohide:!1,visible:!0,children:[(0,E.jsxs)(x,{closeButton:!0,children:[(0,E.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:(0,E.jsx)("rect",{width:"100%",height:"100%",fill:"#007aff"})}),(0,E.jsx)("strong",{className:"me-auto",children:"CoreUI for React.js"}),(0,E.jsx)("small",{children:"7 min ago"})]}),(0,E.jsx)(g,{children:"Hello, world! This is a toast message."})]})]})})]})]})}),(0,E.jsx)(w.b,{xs:12,children:(0,E.jsxs)(N.x,{className:"mb-4",children:[(0,E.jsxs)(T.b,{children:[(0,E.jsx)("strong",{children:"React Toast"})," ",(0,E.jsx)("small",{children:"Custom content"})]}),(0,E.jsxs)(C.s,{children:[(0,E.jsxs)("p",{className:"text-body-secondary small",children:["Customize your toasts by removing sub-components, tweaking them with"," ",(0,E.jsx)("a",{href:"https://coreui.io/docs/utilities/api",children:"utilities"}),", or by adding your own markup. Here we've created a simpler toast by removing the default"," ",(0,E.jsx)("code",{children:"<CToastHeader>"}),", adding a custom hide icon from"," ",(0,E.jsx)("a",{href:"https://coreui.io/icons/",children:"CoreUI Icons"}),", and using some"," ",(0,E.jsx)("a",{href:"https://coreui.io/docs/utilities/flex",children:"flexbox utilities"})," to adjust the layout."]}),(0,E.jsx)(R.q3,{href:"components/toast#custom-content",children:(0,E.jsx)(h,{autohide:!1,className:"align-items-center",visible:!0,children:(0,E.jsxs)("div",{className:"d-flex",children:[(0,E.jsx)(g,{children:"Hello, world! This is a toast message."}),(0,E.jsx)(p,{className:"me-2 m-auto"})]})})}),(0,E.jsx)("p",{className:"text-body-secondary small",children:"Alternatively, you can also add additional controls and components to toasts."}),(0,E.jsx)(R.q3,{href:"components/toast#custom-content",children:(0,E.jsx)(h,{autohide:!1,visible:!0,children:(0,E.jsxs)(g,{children:["Hello, world! This is a toast message.",(0,E.jsxs)("div",{className:"mt-2 pt-2 border-top",children:[(0,E.jsx)(j.u,{type:"button",color:"primary",size:"sm",children:"Take action"}),(0,E.jsx)(p,{component:j.u,color:"secondary",size:"sm",className:"ms-1",children:"Close"})]})]})})})]})]})}),(0,E.jsx)(w.b,{xs:12,children:(0,E.jsxs)(N.x,{className:"mb-4",children:[(0,E.jsxs)(T.b,{children:[(0,E.jsx)("strong",{children:"React Toast"})," ",(0,E.jsx)("small",{children:"Custom content"})]}),(0,E.jsxs)(C.s,{children:[(0,E.jsxs)("p",{className:"text-body-secondary small",children:["Building on the above example, you can create different toast color schemes with our"," ",(0,E.jsx)("a",{href:"https://coreui.io/docs/utilities/colors",children:"color"})," and"," ",(0,E.jsx)("a",{href:"https://coreui.io/docs//utilities/background",children:"background"})," utilities. Here we've set ",(0,E.jsx)("code",{children:'color="primary"'})," and added ",(0,E.jsx)("code",{children:".text-white"})," ","class to the ",(0,E.jsx)("code",{children:"<Ctoast>"}),", and then set ",(0,E.jsx)("code",{children:"white"})," property to our close button. For a crisp edge, we remove the default border with"," ",(0,E.jsx)("code",{children:".border-0"}),"."]}),(0,E.jsx)(R.q3,{href:"components/toast#color-schemes",children:(0,E.jsx)(h,{autohide:!1,color:"primary",className:"text-white align-items-center",visible:!0,children:(0,E.jsxs)("div",{className:"d-flex",children:[(0,E.jsx)(g,{children:"Hello, world! This is a toast message."}),(0,E.jsx)(p,{className:"me-2 m-auto",white:!0})]})})})]})]})})]})}},26847:function(e,s,t){t.d(s,{x:function(){return l}});var n=t(61138),r=t(72791),o=t(52007),a=t.n(o),i=t(3743),c=t(94191),l=(0,r.forwardRef)((function(e,s){var t,o=e.children,a=e.className,c=e.color,l=e.textColor,d=(0,n._T)(e,["children","className","color","textColor"]);return r.createElement("div",(0,n.pi)({className:(0,i.Z)("card",(t={},t["bg-".concat(c)]=c,t["text-".concat(l)]=l,t),a)},d,{ref:s}),o)}));l.propTypes={children:a().node,className:a().string,color:a().oneOfType([c.$1,c.R$]),textColor:a().string},l.displayName="CCard"},66018:function(e,s,t){t.d(s,{s:function(){return c}});var n=t(61138),r=t(72791),o=t(52007),a=t.n(o),i=t(3743),c=(0,r.forwardRef)((function(e,s){var t=e.children,o=e.className,a=(0,n._T)(e,["children","className"]);return r.createElement("div",(0,n.pi)({className:(0,i.Z)("card-body",o)},a,{ref:s}),t)}));c.propTypes={children:a().node,className:a().string},c.displayName="CCardBody"},46007:function(e,s,t){t.d(s,{b:function(){return c}});var n=t(61138),r=t(72791),o=t(52007),a=t.n(o),i=t(3743),c=(0,r.forwardRef)((function(e,s){var t=e.children,o=e.component,a=void 0===o?"div":o,c=e.className,l=(0,n._T)(e,["children","component","className"]);return r.createElement(a,(0,n.pi)({className:(0,i.Z)("card-header",c)},l,{ref:s}),t)}));c.propTypes={children:a().node,className:a().string,component:a().elementType},c.displayName="CCardHeader"},78139:function(e,s,t){t.d(s,{b:function(){return l}});var n=t(61138),r=t(72791),o=t(52007),a=t.n(o),i=t(3743),c=["xxl","xl","lg","md","sm","xs"],l=(0,r.forwardRef)((function(e,s){var t=e.children,o=e.className,a=(0,n._T)(e,["children","className"]),l=[];return c.forEach((function(e){var s=a[e];delete a[e];var t="xs"===e?"":"-".concat(e);"number"!==typeof s&&"string"!==typeof s||l.push("col".concat(t,"-").concat(s)),"boolean"===typeof s&&l.push("col".concat(t)),s&&"object"===typeof s&&("number"!==typeof s.span&&"string"!==typeof s.span||l.push("col".concat(t,"-").concat(s.span)),"boolean"===typeof s.span&&l.push("col".concat(t)),"number"!==typeof s.order&&"string"!==typeof s.order||l.push("order".concat(t,"-").concat(s.order)),"number"===typeof s.offset&&l.push("offset".concat(t,"-").concat(s.offset)))})),r.createElement("div",(0,n.pi)({className:(0,i.Z)(l.length>0?l:"col",o)},a,{ref:s}),t)})),d=a().oneOfType([a().bool,a().number,a().string,a().oneOf(["auto"])]),m=a().oneOfType([d,a().shape({span:d,offset:a().oneOfType([a().number,a().string]),order:a().oneOfType([a().oneOf(["first","last"]),a().number,a().string])})]);l.propTypes={children:a().node,className:a().string,xs:m,sm:m,md:m,lg:m,xl:m,xxl:m},l.displayName="CCol"},26203:function(e,s,t){t.d(s,{r:function(){return l}});var n=t(61138),r=t(72791),o=t(52007),a=t.n(o),i=t(3743),c=["xxl","xl","lg","md","sm","xs"],l=(0,r.forwardRef)((function(e,s){var t=e.children,o=e.className,a=(0,n._T)(e,["children","className"]),l=[];return c.forEach((function(e){var s=a[e];delete a[e];var t="xs"===e?"":"-".concat(e);"object"===typeof s&&(s.cols&&l.push("row-cols".concat(t,"-").concat(s.cols)),"number"===typeof s.gutter&&l.push("g".concat(t,"-").concat(s.gutter)),"number"===typeof s.gutterX&&l.push("gx".concat(t,"-").concat(s.gutterX)),"number"===typeof s.gutterY&&l.push("gy".concat(t,"-").concat(s.gutterY)))})),r.createElement("div",{className:(0,i.Z)("row",l,o),ref:s},t)})),d=a().shape({cols:a().oneOfType([a().oneOf(["auto"]),a().number,a().string]),gutter:a().oneOfType([a().string,a().number]),gutterX:a().oneOfType([a().string,a().number]),gutterY:a().oneOfType([a().string,a().number])});l.propTypes={children:a().node,className:a().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},l.displayName="CRow"}}]);
//# sourceMappingURL=7733.7a605aba.chunk.js.map