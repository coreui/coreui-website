(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1951],{8172:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/smart-table",function(){return t(32281)}])},49535:function(e,s){"use strict";s.Z=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1š",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Paĉjo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto Šimun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyněk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},55644:function(e,s,t){"use strict";t.r(s);var r=t(85893),a=t(67294),n=t(36686),i=t(49535);let l=()=>{let[e,s]=(0,a.useState)([]),t=e=>{switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},l=t=>{let r=e.indexOf(t),a=e.slice();-1!==r?a.splice(r,1):a=[...e,t],s(a)};return(0,r.jsx)(n.uE,{sorterValue:{column:"name",state:"asc"},clickableRows:!0,tableProps:{striped:!0,hover:!0},activePage:3,footer:!0,items:i.Z,columns:[{key:"name",_style:{width:"40%"}},"registered",{key:"role",_style:{width:"20%"}},{key:"status",_style:{width:"20%"}},{key:"show_details",label:"",_style:{width:"1%"},filter:!1,sorter:!1}],columnFilter:!0,tableFilter:!0,cleaner:!0,itemsPerPageSelect:!0,itemsPerPage:5,columnSorter:!0,pagination:!0,scopedColumns:{status:e=>(0,r.jsx)("td",{children:(0,r.jsx)(n.C_,{color:t(e.status),children:e.status})}),show_details:s=>(0,r.jsx)("td",{className:"py-2",children:(0,r.jsx)(n.u5,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick(){l(s.id)},children:e.includes(s.id)?"Hide":"Show"})}),details:s=>(0,r.jsx)(n.V9,{visible:e.includes(s.id),children:(0,r.jsxs)(n.sl,{children:[(0,r.jsx)("h4",{children:s.username}),(0,r.jsxs)("p",{className:"text-muted",children:["User since: ",s.registered]}),(0,r.jsx)(n.u5,{size:"sm",color:"info",children:"User Settings"}),(0,r.jsx)(n.u5,{size:"sm",color:"danger",className:"ml-1",children:"Delete"})]})})}})};s.default=l},72683:function(e,s,t){"use strict";t.r(s);var r=t(85893),a=t(67294),n=t(36686),i=t(49535);let l=()=>{let[e,s]=(0,a.useState)(i.Z),t=e.map(e=>Object.values(e).join(",")).join("\n"),l="data:text/csv;charset=utf-8,SEP=,%0A"+encodeURIComponent(t);return(0,r.jsxs)(n.sl,{children:[(0,r.jsx)(n.u5,{color:"primary",className:"mb-2",href:l,download:"coreui-table-data.csv",target:"_blank",children:"Download current items (.csv)"}),(0,r.jsx)(n.uE,{columnFilter:!0,columnSorter:!0,items:i.Z,itemsPerPage:5,onFilteredItemsChange:s,pagination:!0})]})};s.default=l},33951:function(e,s,t){"use strict";t.r(s);var r=t(85893),a=t(67294),n=t(36686),i=t(49535);let l=()=>{let[e,s]=(0,a.useState)([2,3]),t=i.Z.map((s,t)=>{let r=e.includes(t);return{...s,id:t,_selected:r,_classes:[s._classes,r&&"table-selected"]}}),l=(t,r)=>{t.target.checked?s([...e,r]):s(e.filter(e=>e!==r))},d=e=>{switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};return(0,r.jsxs)(n.sl,{children:["Selected: ",JSON.stringify(e),(0,r.jsx)(n.uE,{items:t,columns:[{key:"select",label:"",filter:!1,sorter:!1},"name","registered","role","status"],itemsPerPage:5,columnFilter:!0,columnSorter:!0,pagination:!0,scopedColumns:{select:e=>(0,r.jsxs)("td",{children:[(0,r.jsx)(n.EC,{id:"checkbox".concat(e.id),checked:e._selected,onChange:s=>l(s,e.id)}),(0,r.jsx)(n.L8,{htmlFor:"checkbox".concat(e.id)})]}),status:e=>(0,r.jsx)("td",{children:(0,r.jsx)(n.C_,{color:d(e.status),children:e.status})})},tableProps:{hover:!0}})]})};s.default=l},32281:function(e,s,t){"use strict";t.r(s);var r=t(85893),a=t(36686),n=t(43572),i=t(55644),l=t(72683),d=t(33951);let c=()=>(0,r.jsx)(a.rb,{children:(0,r.jsxs)(a.b7,{xs:12,children:[(0,r.jsxs)(a.xH,{className:"mb-4",children:[(0,r.jsxs)(a.bn,{children:[(0,r.jsx)("strong",{children:"CoreUI Smart Table"})," ",(0,r.jsx)("small",{children:"React Table Component"})]}),(0,r.jsx)(a.sl,{children:(0,r.jsx)(n.q3,{href:"components/smart-table/",children:(0,r.jsx)(i.default,{})})})]}),(0,r.jsxs)(a.xH,{className:"mb-4",children:[(0,r.jsxs)(a.bn,{children:[(0,r.jsx)("strong",{children:"CoreUI Smart Table"})," ",(0,r.jsx)("small",{children:"Table with selectable rows"})]}),(0,r.jsx)(a.sl,{children:(0,r.jsx)(n.q3,{href:"components/smart-table/",children:(0,r.jsx)(d.default,{})})})]}),(0,r.jsxs)(a.xH,{className:"mb-4",children:[(0,r.jsxs)(a.bn,{children:[(0,r.jsx)("strong",{children:"CoreUI Smart Table"})," ",(0,r.jsx)("small",{children:"Table with selectable rows"})]}),(0,r.jsx)(a.sl,{children:(0,r.jsx)(n.q3,{href:"components/smart-table/",children:(0,r.jsx)(l.default,{})})})]})]})});c.getLayout=function(e){return(0,r.jsx)(n.cl,{children:e})},s.default=c}},function(e){e.O(0,[8150,2308,7643,9832,3572,9774,2888,179],function(){return e(e.s=8172)}),_N_E=e.O()}]);