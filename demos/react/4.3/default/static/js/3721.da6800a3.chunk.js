"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template=self.webpackChunk_coreui_coreui_pro_react_admin_template||[]).push([[3721],{43721:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var s=t(72791),n=t(77813),i=t(98725),a=t(42982),c=t(70885),l=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}],o=t(80184),d=function(){var e=(0,s.useState)([]),r=(0,c.Z)(e,2),t=r[0],i=r[1],d=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};return(0,o.jsx)(n.uE,{sorterValue:{column:"name",state:"asc"},clickableRows:!0,tableProps:{striped:!0,hover:!0},activePage:3,footer:!0,items:l,columns:[{key:"name",_style:{width:"40%"}},"registered",{key:"role",_style:{width:"20%"}},{key:"status",_style:{width:"20%"}},{key:"show_details",label:"",_style:{width:"1%"},filter:!1,sorter:!1}],columnFilter:!0,tableFilter:!0,cleaner:!0,itemsPerPageSelect:!0,itemsPerPage:5,columnSorter:!0,pagination:!0,scopedColumns:{status:function(e){return(0,o.jsx)("td",{children:(0,o.jsx)(n.C_,{color:d(e.status),children:e.status})})},show_details:function(e){return(0,o.jsx)("td",{className:"py-2",children:(0,o.jsx)(n.u5,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var r=t.indexOf(e),s=t.slice();-1!==r?s.splice(r,1):s=[].concat((0,a.Z)(t),[e]),i(s)}(e.id)},children:t.includes(e.id)?"Hide":"Show"})})},details:function(e){return(0,o.jsx)(n.V9,{visible:t.includes(e.id),children:(0,o.jsxs)(n.sl,{children:[(0,o.jsx)("h4",{children:e.username}),(0,o.jsxs)("p",{className:"text-muted",children:["User since: ",e.registered]}),(0,o.jsx)(n.u5,{size:"sm",color:"info",children:"User Settings"}),(0,o.jsx)(n.u5,{size:"sm",color:"danger",className:"ml-1",children:"Delete"})]})})}}})},u=function(){var e=(0,s.useState)(l),r=(0,c.Z)(e,2),t=r[0],i=r[1],a=t.map((function(e){return Object.values(e).join(",")})).join("\n"),d="data:text/csv;charset=utf-8,SEP=,%0A"+encodeURIComponent(a);return(0,o.jsxs)(n.sl,{children:[(0,o.jsx)(n.u5,{color:"primary",className:"mb-2",href:d,download:"coreui-table-data.csv",target:"_blank",children:"Download current items (.csv)"}),(0,o.jsx)(n.uE,{columnFilter:!0,columnSorter:!0,items:l,itemsPerPage:5,onFilteredItemsChange:i,pagination:!0})]})},m=t(1413),h=function(){var e=(0,s.useState)([2,3]),r=(0,c.Z)(e,2),t=r[0],i=r[1],d=l.map((function(e,r){var s=t.includes(r);return(0,m.Z)((0,m.Z)({},e),{},{id:r,_selected:s,_classes:[e._classes,s&&"table-selected"]})})),u=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};return(0,o.jsxs)(n.sl,{children:["Selected: ",JSON.stringify(t),(0,o.jsx)(n.uE,{items:d,columns:[{key:"select",label:"",filter:!1,sorter:!1},"name","registered","role","status"],itemsPerPage:5,columnFilter:!0,columnSorter:!0,pagination:!0,scopedColumns:{select:function(e){return(0,o.jsxs)("td",{children:[(0,o.jsx)(n.EC,{id:"checkbox".concat(e.id),checked:e._selected,onChange:function(r){return function(e,r){e.target.checked?i([].concat((0,a.Z)(t),[r])):i(t.filter((function(e){return e!==r})))}(r,e.id)}}),(0,o.jsx)(n.L8,{variant:"custom-checkbox",htmlFor:"checkbox".concat(e.id)})]})},status:function(e){return(0,o.jsx)("td",{children:(0,o.jsx)(n.C_,{color:u(e.status),children:e.status})})}},tableProps:{hover:!0}})]})},f=function(){return(0,o.jsx)(n.rb,{children:(0,o.jsxs)(n.b7,{xs:12,children:[(0,o.jsxs)(n.xH,{className:"mb-4",children:[(0,o.jsxs)(n.bn,{children:[(0,o.jsx)("strong",{children:"CoreUI Smart Table"})," ",(0,o.jsx)("small",{children:"React Table Component"})]}),(0,o.jsx)(n.sl,{children:(0,o.jsx)(i.q3,{href:"components/smart-table/",children:(0,o.jsx)(d,{})})})]}),(0,o.jsxs)(n.xH,{className:"mb-4",children:[(0,o.jsxs)(n.bn,{children:[(0,o.jsx)("strong",{children:"CoreUI Smart Table"})," ",(0,o.jsx)("small",{children:"Table with selectable rows"})]}),(0,o.jsx)(n.sl,{children:(0,o.jsx)(i.q3,{href:"components/smart-table/",children:(0,o.jsx)(h,{})})})]}),(0,o.jsxs)(n.xH,{className:"mb-4",children:[(0,o.jsxs)(n.bn,{children:[(0,o.jsx)("strong",{children:"CoreUI Smart Table"})," ",(0,o.jsx)("small",{children:"Table with selectable rows"})]}),(0,o.jsx)(n.sl,{children:(0,o.jsx)(i.q3,{href:"components/smart-table/",children:(0,o.jsx)(u,{})})})]})]})})}},42982:function(e,r,t){t.d(r,{Z:function(){return i}});var s=t(30907);var n=t(40181);function i(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=3721.da6800a3.chunk.js.map