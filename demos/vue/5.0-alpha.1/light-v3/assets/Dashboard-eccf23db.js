import{C as W}from"./index.es-3febd182.js";import{_ as G,u as N,r as F,c as S,o as V,a as d,b as h,d as e,w as a,e as l,F as R,f as b,g as r,t as s,h as P,i as K,j as Z,k as O,l as Q,m as Y,n as q}from"./index-972d7b18.js";import{g as D}from"./getStyle-4f237f64.js";var X=function(o,m){if(m===void 0&&(m=100),typeof o>"u")throw new TypeError("Hex color is not defined");var v=o.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!v)throw new Error("".concat(o," is not a valid hex color"));var t,w,C;return o.length===7?(t=parseInt(o.slice(1,3),16),w=parseInt(o.slice(3,5),16),C=parseInt(o.slice(5,7),16)):(t=parseInt(o.slice(1,2),16),w=parseInt(o.slice(2,3),16),C=parseInt(o.slice(3,5),16)),"rgba(".concat(t,", ").concat(w,", ").concat(C,", ").concat(m/100,")")};const $=""+new URL("1-54529c19.jpg",import.meta.url).href,ee={name:"Dashboard",components:{CChart:W},setup(){const{t:o}=N(),m=F(null),v=F(null),t=u=>o("date",{date:u,formatParams:{date:{month:"short"}}}),w=S(()=>[{title:o("monday"),value1:34,value2:78},{title:o("tuesday"),value1:56,value2:94},{title:o("wednesday"),value1:12,value2:67},{title:o("thursday"),value1:43,value2:91},{title:o("friday"),value1:22,value2:73},{title:o("saturday"),value1:53,value2:82},{title:o("sunday"),value1:9,value2:69}]),C=S(()=>[{title:o("male"),icon:"cil-user",value:53},{title:o("female"),icon:"cil-user-female",value:43}]),p=S(()=>[{title:o("organicSearch"),icon:"cib-google",percent:56,value:"191,235"},{title:"Facebook",icon:"cib-facebook",percent:15,value:"51,223"},{title:"Twitter",icon:"cib-twitter",percent:11,value:"37,564"},{title:"LinkedIn",icon:"cib-linkedin",percent:8,value:"27,319"}]),_=(u,g)=>{const y={date:{year:"numeric",month:"short",day:"numeric"}};return`${o("date",{date:u,formatParams:y})} - ${o("date",{date:g,formatParams:y})}`},c=S(()=>[{avatar:{src:$,status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:o("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"USA",flag:"cif-us"},usage:{value:50,period:_(new Date(2023,5,11),new Date(2023,6,10)),color:"success"},payment:{name:"Mastercard",icon:"cib-cc-mastercard"},activity:o("relativeTime",{val:-10,range:"seconds"})},{avatar:{src:K,status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:o("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"Brazil",flag:"cif-br"},usage:{value:22,period:_(new Date(2023,5,11),new Date(2023,6,10)),color:"info"},payment:{name:"Visa",icon:"cib-cc-visa"},activity:o("relativeTime",{val:-5,range:"minutes"})},{avatar:{src:Z,status:"warning"},user:{name:"Quintin Ed",new:!0,registered:o("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"India",flag:"cif-in"},usage:{value:74,period:_(new Date(2023,5,11),new Date(2023,6,10)),color:"warning"},payment:{name:"Stripe",icon:"cib-cc-stripe"},activity:o("relativeTime",{val:-1,range:"hours"})},{avatar:{src:O,status:"secondary"},user:{name:"Enéas Kwadwo",new:!0,registered:o("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"France",flag:"cif-fr"},usage:{value:98,period:_(new Date(2023,5,11),new Date(2023,6,10)),color:"danger"},payment:{name:"PayPal",icon:"cib-cc-paypal"},activity:o("relativeTime",{val:-1,range:"weeks"})},{avatar:{src:Q,status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:o("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"Spain",flag:"cif-es"},usage:{value:22,period:_(new Date(2023,5,11),new Date(2023,6,10)),color:"primary"},payment:{name:"Google Wallet",icon:"cib-cc-apple-pay"},activity:o("relativeTime",{val:-3,range:"months"})},{avatar:{src:Y,status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:o("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"Poland",flag:"cif-pl"},usage:{value:43,period:_(new Date(2023,5,11),new Date(2023,6,10)),color:"success"},payment:{name:"Amex",icon:"cib-cc-amex"},activity:o("relativeTime",{val:-1,range:"years"})}]);return V(()=>{document.documentElement.addEventListener("ColorSchemeChange",()=>{m.value&&(m.value.chart.options.scales.x.grid.color=D("--cui-border-color-translucent"),m.value.chart.options.scales.x.ticks.color=D("--cui-body-color"),m.value.chart.options.scales.y.grid.color=D("--cui-border-color-translucent"),m.value.chart.options.scales.y.ticks.color=D("--cui-body-color"),m.value.chart.update()),v.value&&(v.value.chart.data.datasets[0].pointBackgroundColor=D("--cui-primary"),v.value.chart.update())})}),{chartBarRef:m,chartLineRef:v,getStyle:D,hexToRgba:X,mainChartLabel:t,progressGroupExample1:w,progressGroupExample2:C,progressGroupExample3:p,t:o,tableExample:c}}},ae={class:"d-flex justify-content-between"},te={class:"bg-primary bg-opacity-25 text-primary p-2 rounded"},se=l("div",{class:"fs-4 fw-semibold pb-3"},"44.725",-1),le={class:"text-danger"},re={class:"d-flex justify-content-between"},oe={class:"bg-primary bg-opacity-25 text-primary p-2 rounded"},ne=l("div",{class:"fs-4 fw-semibold pb-3"},"385",-1),ce={class:"text-success"},de={class:"small text-body-secondary text-nowrap"},ie={class:"d-flex justify-content-between align-items-baseline mb-1"},ue={class:"fw-semibold"},me={class:"small text-body-secondary ms-1 text-nowrap"},fe={class:"small text-body-secondary"},_e={class:"fw-semibold text-nowrap"},be={class:"fs-6 fw-normal"},pe={class:"fs-6 fw-normal"},ge={class:"fs-6 fw-normal"},ye={class:"border-start border-start-4 border-start-info py-1 px-3 mb-3"},he={class:"text-body-secondary small"},ve=l("div",{class:"fs-5 fw-semibold"},"9,123",-1),we={class:"border-start border-start-4 border-start-danger py-1 px-3 mb-3"},Ce={class:"text-body-secondary small"},xe=l("div",{class:"fs-5 fw-semibold"},"22,643",-1),De=l("div",{class:"border-top mb-4"},null,-1),Te={class:"progress-group-prepend"},ke={class:"text-body-secondary small"},Ae={class:"progress-group-bars"},Re={class:"border-start border-start-4 border-start-warning py-1 px-3 mb-3"},Se={class:"text-body-secondary small"},Pe=l("div",{class:"fs-5 fw-semibold"},"78,623",-1),Le={class:"border-start border-start-4 border-start-success py-1 px-3 mb-3"},Be={class:"text-body-secondary small"},Ee=l("div",{class:"fs-5 fw-semibold"},"49,123",-1),Ue=l("hr",{class:"mt-0"},null,-1),Me={class:"progress-group-header"},Fe={class:"title"},Ie={class:"ms-auto fw-semibold"},ze={class:"progress-group-bars"},Je=l("div",{class:"mb-5"},null,-1),je={class:"progress-group-header"},He={class:"title"},We={class:"ms-auto fw-semibold"},Ge={class:"text-body-secondary small"},Ne={class:"progress-group-bars"};function Ve(o,m,v,t,w,C){const p=d("CCardTitle"),_=d("CCardSubtitle"),c=d("CCol"),u=d("CRow"),g=d("CCardBody"),y=d("CChart"),x=d("CCard"),i=d("CIcon"),I=d("CButton"),T=d("CTableHeaderCell"),M=d("CTableRow"),z=d("CTableHead"),J=d("CAvatar"),k=d("CTableDataCell"),A=d("CProgress"),j=d("CTableBody"),H=d("CTable"),L=d("CDropdownToggle"),f=d("CDropdownItem"),B=d("CDropdownMenu"),E=d("CDropdown"),U=d("CWidgetStatsA");return b(),h(R,null,[e(u,null,{default:a(()=>[e(c,{xl:4},{default:a(()=>[e(u,null,{default:a(()=>[e(c,{lg:12},{default:a(()=>[e(x,{class:"mb-4"},{default:a(()=>[e(g,{class:"p-4"},{default:a(()=>[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(p,{class:"fs-4 fw-semibold"},{default:a(()=>[r(s(t.t("sale")),1)]),_:1}),e(_,{class:"fw-normal text-body-secondary"},{default:a(()=>[r(s(t.t("date",{date:new Date(2023,0,1),formatParams:{date:{month:"long"}}}))+" - "+s(t.t("date",{date:new Date(2023,6,1),formatParams:{date:{year:"numeric",month:"long"}}})),1)]),_:1})]),_:1}),e(c,{class:"text-end text-primary fs-4 fw-semibold"},{default:a(()=>[r("$613.200")]),_:1})]),_:1})]),_:1}),e(y,{type:"line",class:"mt-3",style:{height:"150px"},ref:"chartLineRef",data:{labels:[t.t("january"),t.t("february"),t.t("march"),t.t("april"),t.t("may"),t.t("june"),t.t("july")],datasets:[{label:"My First dataset",backgroundColor:`rgba(${t.getStyle("--cui-primary-rgb")}, .1)`,borderColor:t.getStyle("--cui-primary"),borderWidth:3,data:[78,81,80,45,34,22,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{beginAtZero:!0,display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}},null,8,["data"])]),_:1})]),_:1}),e(c,{lg:6},{default:a(()=>[e(x,{class:"mb-4"},{default:a(()=>[e(g,null,{default:a(()=>[l("div",ae,[e(p,{component:"div",class:"text-body-secondary"},{default:a(()=>[r(s(t.t("customers")),1)]),_:1}),l("div",te,[e(i,{icon:"cil-people",size:"xl"})])]),se,l("small",le,[r(" (-12.4% "),e(i,{icon:"cil-arrow-bottom"}),r(") ")])]),_:1})]),_:1})]),_:1}),e(c,{lg:6},{default:a(()=>[e(x,{class:"mb-4"},{default:a(()=>[e(g,null,{default:a(()=>[l("div",re,[e(p,{component:"div",class:"text-body-secondary"},{default:a(()=>[r(s(t.t("orders")),1)]),_:1}),l("div",oe,[e(i,{icon:"cil-cart",size:"xl"})])]),ne,l("small",ce,[r(" (17.2% "),e(i,{icon:"cil-arrow-top"}),r(") ")])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{xl:8},{default:a(()=>[e(x,{class:"mb-4"},{default:a(()=>[e(g,{class:"p-4"},{default:a(()=>[e(p,{class:"fs-4 fw-semibold"},{default:a(()=>[r(s(t.t("traffic")),1)]),_:1}),e(_,{class:"fw-normal text-body-secondary"},{default:a(()=>[r(s(t.t("date",{date:new Date(2022,0,1),formatParams:{date:{year:"numeric",month:"long",day:"numeric"}}}))+" - "+s(t.t("date",{date:new Date(2022,11,31),formatParams:{date:{year:"numeric",month:"long",day:"numeric"}}})),1)]),_:1}),e(y,{type:"bar",style:{height:"300px","margin-top":"40px"},ref:"chartBarRef",data:{labels:[t.mainChartLabel(new Date(Date.UTC(2022,0,1))),t.mainChartLabel(new Date(Date.UTC(2022,1,1))),t.mainChartLabel(new Date(Date.UTC(2022,2,1))),t.mainChartLabel(new Date(Date.UTC(2022,3,1))),t.mainChartLabel(new Date(Date.UTC(2022,4,1))),t.mainChartLabel(new Date(Date.UTC(2022,5,1))),t.mainChartLabel(new Date(Date.UTC(2022,6,1))),t.mainChartLabel(new Date(Date.UTC(2022,7,1))),t.mainChartLabel(new Date(Date.UTC(2022,8,1))),t.mainChartLabel(new Date(Date.UTC(2022,9,1))),t.mainChartLabel(new Date(Date.UTC(2022,10,1))),t.mainChartLabel(new Date(Date.UTC(2022,11,1)))],datasets:[{label:"Users",backgroundColor:t.getStyle("--cui-primary"),borderRadius:6,borderSkipped:!1,data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6,categoryPercentage:.5},{label:"New users",backgroundColor:t.getStyle("--cui-gray-200"),borderRadius:6,borderSkipped:!1,data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6,categoryPercentage:.5}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:t.getStyle("--cui-border-color-translucent"),display:!1,drawBorder:!1,drawTicks:!1},ticks:{color:t.getStyle("--cui-body-color"),font:{size:14},padding:16}},y:{grid:{color:t.getStyle("--cui-border-color-translucent"),drawBorder:!1,borderDash:[2,4]},gridLines:{borderDash:[8,4],color:"#348632"},ticks:{beginAtZero:!0,color:t.getStyle("--cui-body-color"),font:{size:14},maxTicksLimit:5,padding:16,stepSize:Math.ceil(100/4)}}}}},null,8,["data","options"])]),_:1})]),_:1})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(c,{xl:9},{default:a(()=>[e(x,{class:"mb-4"},{default:a(()=>[e(g,{class:"p-4"},{default:a(()=>[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(p,{class:"fs-4 fw-semibold"},{default:a(()=>[r(s(t.t("users")),1)]),_:1}),e(_,{class:"fw-normal text-body-secondary mb-4"},{default:a(()=>[r(s(t.t("registeredUsersCounter",{counter:"1.232.15"})),1)]),_:1})]),_:1}),e(c,{xs:"auto",class:"ms-auto"},{default:a(()=>[e(I,{color:"secondary"},{default:a(()=>[e(i,{icon:"cil-user-plus",class:"me-2"}),r(" "+s(t.t("addNewUser")),1)]),_:1})]),_:1})]),_:1}),e(H,{align:"middle",class:"mb-0",hover:"",responsive:""},{default:a(()=>[e(z,{class:"fw-semibold text-body-secondary"},{default:a(()=>[e(M,null,{default:a(()=>[e(T,{class:"text-center"},{default:a(()=>[e(i,{name:"cil-people"})]),_:1}),e(T,null,{default:a(()=>[r(s(t.t("users")),1)]),_:1}),e(T,{class:"text-center"},{default:a(()=>[r(s(t.t("country")),1)]),_:1}),e(T,null,{default:a(()=>[r(s(t.t("usage")),1)]),_:1}),e(T,null,{default:a(()=>[r(s(t.t("activity")),1)]),_:1})]),_:1})]),_:1}),e(j,null,{default:a(()=>[(b(!0),h(R,null,P(t.tableExample,n=>(b(),q(M,{key:n.name},{default:a(()=>[e(k,{class:"text-center"},{default:a(()=>[e(J,{size:"md",src:n.avatar.src,status:n.avatar.status},null,8,["src","status"])]),_:2},1024),e(k,null,{default:a(()=>[l("div",null,s(n.user.name),1),l("div",de,[l("span",null,s(n.user.new?t.t("new"):t.t("recurring")),1),r(" | "+s(t.t("registered"))+" "+s(n.user.registered),1)])]),_:2},1024),e(k,{class:"text-center"},{default:a(()=>[e(i,{size:"xl",name:n.country.flag,title:n.country.name},null,8,["name","title"])]),_:2},1024),e(k,null,{default:a(()=>[l("div",ie,[l("div",ue,s(n.usage.value)+"%",1),l("div",me,s(n.usage.period),1)]),e(A,{thin:"",color:n.usage.color,value:n.usage.value},null,8,["color","value"])]),_:2},1024),e(k,null,{default:a(()=>[l("div",fe,s(t.t("lastLogin")),1),l("div",_e,s(n.activity),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{xl:3},{default:a(()=>[e(u,null,{default:a(()=>[e(c,{md:4,xl:12},{default:a(()=>[e(U,{class:"mb-4",color:"primary-gradient"},{value:a(()=>[r("26K "),l("span",be,[r(" (-12.4% "),e(i,{icon:"cil-arrow-bottom"}),r(") ")])]),title:a(()=>[r(s(t.t("users")),1)]),action:a(()=>[e(E,{placement:"bottom-end"},{default:a(()=>[e(L,{color:"transparent",class:"p-0 text-white",caret:!1},{default:a(()=>[e(i,{icon:"cil-options",class:"text-high-emphasis-inverse"})]),_:1}),e(B,null,{default:a(()=>[e(f,{href:"#"},{default:a(()=>[r(s(t.t("action")),1)]),_:1}),e(f,{href:"#"},{default:a(()=>[r(s(t.t("anotherAction")),1)]),_:1}),e(f,{href:"#"},{default:a(()=>[r(s(t.t("somethingElseHere")),1)]),_:1}),e(f,{href:"#",disabled:""},{default:a(()=>[r(s(t.t("disabledAction")),1)]),_:1})]),_:1})]),_:1})]),chart:a(()=>[e(y,{type:"line",class:"mt-3 mx-3",style:{height:"85px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:t.getStyle("--cui-primary"),data:[68,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}},null,8,["data"])]),_:1})]),_:1}),e(c,{md:4,xl:12},{default:a(()=>[e(U,{class:"mb-4",color:"warning-gradient"},{value:a(()=>[r("2.49% "),l("span",pe,[r(" (84.7% "),e(i,{icon:"cil-arrow-top"}),r(") ")])]),title:a(()=>[r(s(t.t("conversionRate")),1)]),action:a(()=>[e(E,{placement:"bottom-end"},{default:a(()=>[e(L,{color:"transparent",class:"p-0 text-white",caret:!1},{default:a(()=>[e(i,{icon:"cil-options",class:"text-high-emphasis-inverse"})]),_:1}),e(B,null,{default:a(()=>[e(f,{href:"#"},{default:a(()=>[r(s(t.t("action")),1)]),_:1}),e(f,{href:"#"},{default:a(()=>[r(s(t.t("anotherAction")),1)]),_:1}),e(f,{href:"#"},{default:a(()=>[r(s(t.t("somethingElseHere")),1)]),_:1}),e(f,{href:"#",disabled:""},{default:a(()=>[r(s(t.t("disabledAction")),1)]),_:1})]),_:1})]),_:1})]),chart:a(()=>[e(y,{type:"line",class:"mt-3",style:{height:"85px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}},null,8,["data"])]),_:1})]),_:1}),e(c,{md:4,xl:12},{default:a(()=>[e(U,{class:"mb-4",color:"danger-gradient"},{value:a(()=>[r("44K "),l("span",ge,[r(" (-23.6% "),e(i,{icon:"cil-arrow-bottom"}),r(") ")])]),title:a(()=>[r(s(t.t("sessions")),1)]),action:a(()=>[e(E,{placement:"bottom-end"},{default:a(()=>[e(L,{color:"transparent",class:"p-0 text-white",caret:!1},{default:a(()=>[e(i,{icon:"cil-options",class:"text-high-emphasis-inverse"})]),_:1}),e(B,null,{default:a(()=>[e(f,{href:"#"},{default:a(()=>[r(s(t.t("action")),1)]),_:1}),e(f,{href:"#"},{default:a(()=>[r(s(t.t("anotherAction")),1)]),_:1}),e(f,{href:"#"},{default:a(()=>[r(s(t.t("somethingElseHere")),1)]),_:1}),e(f,{href:"#",disabled:""},{default:a(()=>[r(s(t.t("disabledAction")),1)]),_:1})]),_:1})]),_:1})]),chart:a(()=>[e(y,{type:"bar",class:"mt-3 mx-3",style:{height:"85px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}},null,8,["data"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l("div",null,[e(u,null,{default:a(()=>[e(c,{md:12},{default:a(()=>[e(x,{class:"mb-4"},{default:a(()=>[e(g,{class:"p-4"},{default:a(()=>[e(p,{class:"fs-4 fw-semibold"},{default:a(()=>[r(s(t.t("traffic")),1)]),_:1}),e(_,{class:"fw-normal text-body-secondary border-bottom mb-3 pb-4"},{default:a(()=>[r(s(t.t("lastWeek")),1)]),_:1}),e(u,null,{default:a(()=>[e(c,{sm:12,lg:6},{default:a(()=>[e(u,null,{default:a(()=>[e(c,{sm:6},{default:a(()=>[l("div",ye,[l("div",he,s(t.t("newClients")),1),ve])]),_:1}),e(c,{sm:6},{default:a(()=>[l("div",we,[l("div",Ce,s(t.t("recurringClients")),1),xe])]),_:1})]),_:1}),De,(b(!0),h(R,null,P(t.progressGroupExample1,n=>(b(),h("div",{key:n.title,class:"progress-group mb-4"},[l("div",Te,[l("span",ke,s(n.title),1)]),l("div",Ae,[e(A,{thin:"",color:"info-gradient",value:n.value1},null,8,["value"]),e(A,{thin:"",color:"danger-gradient",value:n.value2},null,8,["value"])])]))),128))]),_:1}),e(c,{sm:12,lg:6},{default:a(()=>[e(u,null,{default:a(()=>[e(c,{sm:6},{default:a(()=>[l("div",Re,[l("div",Se,s(t.t("pageviews")),1),Pe])]),_:1}),e(c,{sm:6},{default:a(()=>[l("div",Le,[l("div",Be,s(t.t("organic")),1),Ee])]),_:1})]),_:1}),Ue,(b(!0),h(R,null,P(t.progressGroupExample2,n=>(b(),h("div",{key:n.title,class:"progress-group"},[l("div",Me,[e(i,{icon:n.icon,class:"me-2",size:"lg"},null,8,["icon"]),l("span",Fe,s(n.title),1),l("span",Ie,s(n.value)+"%",1)]),l("div",ze,[e(A,{thin:"",value:n.value,color:"warning-gradient"},null,8,["value"])])]))),128)),Je,(b(!0),h(R,null,P(t.progressGroupExample3,n=>(b(),h("div",{key:n.title,class:"progress-group"},[l("div",je,[e(i,{icon:n.icon,class:"me-2",size:"lg"},null,8,["icon"]),l("span",He,s(n.title),1),l("span",We,[r(s(n.value)+" ",1),l("span",Ge,"("+s(n.percent)+"%)",1)])]),l("div",Ne,[e(A,{thin:"",value:n.percent,color:"success-gradient"},null,8,["value"])])]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])],64)}const Qe=G(ee,[["render",Ve]]);export{Qe as default};
