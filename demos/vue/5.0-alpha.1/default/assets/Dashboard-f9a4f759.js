import{_ as M,u as W,r as V,c as w,o as N,a as l,b as m,d as E,e as p,f as e,w as t,g as o,t as n,h as _,F as k,i as T,j as q,k as K,l as O,m as Q,n as Y}from"./index-a769b091.js";import{C as Z}from"./index.es-90e0fd6e.js";import{g as c,W as J,a as X}from"./WidgetsStatsTypeD-4d178c20.js";const $=""+new URL("1-54529c19.jpg",import.meta.url).href,i=(a,d)=>Math.floor(Math.random()*(d-a+1)+a),ee={name:"MainChartExample",components:{CChart:Z},setup(){const{t:a}=W(),d=V(),x=w(()=>({labels:[a("january"),a("february"),a("march"),a("april"),a("may"),a("june"),a("july")],datasets:[{label:"My First dataset",backgroundColor:`rgba(${c("--cui-info-rgb")}, .1)`,borderColor:c("--cui-info"),pointHoverBackgroundColor:c("--cui-info"),borderWidth:2,data:[i(50,200),i(50,200),i(50,200),i(50,200),i(50,200),i(50,200),i(50,200)],fill:!0},{label:"My Second dataset",backgroundColor:"transparent",borderColor:c("--cui-success"),pointHoverBackgroundColor:c("--cui-success"),borderWidth:2,data:[i(50,200),i(50,200),i(50,200),i(50,200),i(50,200),i(50,200),i(50,200)]},{label:"My Third dataset",backgroundColor:"transparent",borderColor:c("--cui-danger"),pointHoverBackgroundColor:c("--cui-danger"),borderWidth:1,borderDash:[8,5],data:[65,65,65,65,65,65,65]}]})),s={maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:c("--cui-border-color-translucent"),drawOnChartArea:!1},ticks:{color:c("--cui-body-color")}},y:{border:{color:c("--cui-border-color-translucent")},grid:{color:c("--cui-border-color-translucent")},ticks:{beginAtZero:!0,color:c("--cui-body-color"),max:250,maxTicksLimit:5,stepSize:Math.ceil(250/5)}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};return N(()=>{document.documentElement.addEventListener("ColorSchemeChange",()=>{d.value&&(d.value.chart,s.scales.x.grid.borderColor=c("--cui-border-color-translucent"),d.value.chart,s.scales.x.grid.color=c("--cui-border-color-translucent"),d.value.chart,s.scales.x.ticks.color=c("--cui-body-color"),d.value.chart,s.scales.y.grid.borderColor=c("--cui-border-color-translucent"),d.value.chart,s.scales.y.grid.color=c("--cui-border-color-translucent"),d.value.chart,s.scales.y.ticks.color=c("--cui-body-color"),d.value.chart.update())})}),{data:x,mainChartRef:d,options:s,t:a}}};function ae(a,d,x,s,B,v){const D=l("CChart");return m(),E(D,{type:"line",data:s.data,options:s.options,ref:"mainChartRef"},null,8,["data","options"])}const te=M(ee,[["render",ae]]),oe={name:"Dashboard",components:{MainChart:te,WidgetsStatsA:J,WidgetsStatsD:X},setup(){const{t:a}=W(),d=w(()=>[{title:a("visits"),value:a("usersCounter",{counter:"29.703"}),percent:40,color:"success"},{title:a("unique"),value:a("usersCounter",{counter:"24.093"}),percent:20,color:"info"},{title:a("pageviews"),value:a("viewsCounter",{counter:"78.706"}),percent:60,color:"warning"},{title:a("newUsers"),value:a("usersCounter",{counter:"22.123"}),percent:80,color:"danger"},{title:a("bounceRate"),value:"",percent:40.15,color:"primary"}]),x=w(()=>[{title:a("monday"),value1:34,value2:78},{title:a("tuesday"),value1:56,value2:94},{title:a("wednesday"),value1:12,value2:67},{title:a("thursday"),value1:43,value2:91},{title:a("friday"),value1:22,value2:73},{title:a("saturday"),value1:53,value2:82},{title:a("sunday"),value1:9,value2:69}]),s=w(()=>[{title:a("male"),icon:"cil-user",value:53},{title:a("female"),icon:"cil-user-female",value:43}]),B=w(()=>[{title:a("organicSearch"),icon:"cib-google",percent:56,value:"191,235"},{title:"Facebook",icon:"cib-facebook",percent:15,value:"51,223"},{title:"Twitter",icon:"cib-twitter",percent:11,value:"37,564"},{title:"LinkedIn",icon:"cib-linkedin",percent:8,value:"27,319"}]),v=(u,g)=>{const f={date:{year:"numeric",month:"short",day:"numeric"}};return`${a("date",{date:u,formatParams:f})} - ${a("date",{date:g,formatParams:f})}`},D=w(()=>[{avatar:{src:$,status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:a("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"USA",flag:"cif-us"},usage:{value:50,period:v(new Date(2023,5,11),new Date(2023,6,10)),color:"success"},payment:{name:"Mastercard",icon:"cib-cc-mastercard"},activity:a("relativeTime",{val:-10,range:"seconds"})},{avatar:{src:q,status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:a("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"Brazil",flag:"cif-br"},usage:{value:22,period:v(new Date(2023,5,11),new Date(2023,6,10)),color:"info"},payment:{name:"Visa",icon:"cib-cc-visa"},activity:a("relativeTime",{val:-5,range:"minutes"})},{avatar:{src:K,status:"warning"},user:{name:"Quintin Ed",new:!0,registered:a("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"India",flag:"cif-in"},usage:{value:74,period:v(new Date(2023,5,11),new Date(2023,6,10)),color:"warning"},payment:{name:"Stripe",icon:"cib-cc-stripe"},activity:a("relativeTime",{val:-1,range:"hours"})},{avatar:{src:O,status:"secondary"},user:{name:"Enéas Kwadwo",new:!0,registered:a("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"France",flag:"cif-fr"},usage:{value:98,period:v(new Date(2023,5,11),new Date(2023,6,10)),color:"danger"},payment:{name:"PayPal",icon:"cib-cc-paypal"},activity:a("relativeTime",{val:-1,range:"weeks"})},{avatar:{src:Q,status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:a("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"Spain",flag:"cif-es"},usage:{value:22,period:v(new Date(2023,5,11),new Date(2023,6,10)),color:"primary"},payment:{name:"Google Wallet",icon:"cib-cc-apple-pay"},activity:a("relativeTime",{val:-3,range:"months"})},{avatar:{src:Y,status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:a("date",{date:new Date(2023,0,10),formatParams:{date:{year:"numeric",month:"short",day:"numeric"}}})},country:{name:"Poland",flag:"cif-pl"},usage:{value:43,period:v(new Date(2023,5,11),new Date(2023,6,10)),color:"success"},payment:{name:"Amex",icon:"cib-cc-amex"},activity:a("relativeTime",{val:-1,range:"years"})}]);return{t:a,tableExample:D,progressExample:d,progressGroupExample1:x,progressGroupExample2:s,progressGroupExample3:B}}},re={id:"traffic",class:"card-title mb-0"},se={class:"small text-body-secondary"},ne={class:"text-body-secondary"},le={class:"fw-semibold"},ce={class:"border-start border-start-4 border-start-info py-1 px-3 mb-3"},de={class:"text-body-secondary small"},ie=o("div",{class:"fs-5 fw-semibold"},"9,123",-1),ue={class:"border-start border-start-4 border-start-danger py-1 px-3 mb-3"},me={class:"text-body-secondary small"},_e=o("div",{class:"fs-5 fw-semibold"},"22,643",-1),pe=o("hr",{class:"mt-0"},null,-1),ve={class:"progress-group-prepend"},ge={class:"text-body-secondary small"},be={class:"progress-group-bars"},fe={class:"border-start border-start-4 border-start-warning py-1 px-3 mb-3"},ye={class:"text-body-secondary small"},he=o("div",{class:"fs-5 fw-semibold"},"78,623",-1),Ce={class:"border-start border-start-4 border-start-success py-1 px-3 mb-3"},we={class:"text-body-secondary small"},xe=o("div",{class:"fs-5 fw-semibold"},"49,123",-1),De=o("hr",{class:"mt-0"},null,-1),ke={class:"progress-group-header"},Te={class:"title"},Be={class:"ms-auto fw-semibold"},Ee={class:"progress-group-bars"},Se=o("div",{class:"mb-5"},null,-1),Pe={class:"progress-group-header"},Ae={class:"title"},Me={class:"ms-auto fw-semibold"},We={class:"text-body-secondary small"},Re={class:"progress-group-bars"},Ge=o("br",null,null,-1),He={class:"small text-body-secondary text-nowrap"},Fe={class:"d-flex justify-content-between align-items-baseline"},ze={class:"fw-semibold"},je={class:"ms-1 text-nowrap small text-body-secondary"},Le={class:"small text-body-secondary"},Ie={class:"fw-semibold text-nowrap"};function Ue(a,d,x,s,B,v){const D=l("WidgetsStatsA"),u=l("CCol"),g=l("CIcon"),f=l("CButton"),R=l("CButtonGroup"),b=l("CRow"),G=l("MainChart"),S=l("CCardBody"),y=l("CProgress"),H=l("CCardFooter"),P=l("CCard"),F=l("WidgetsStatsD"),z=l("CCardHeader"),h=l("CTableHeaderCell"),A=l("CTableRow"),j=l("CTableHead"),L=l("CAvatar"),C=l("CTableDataCell"),I=l("CTableBody"),U=l("CTable");return m(),p("div",null,[e(D),e(b,null,{default:t(()=>[e(u,{md:12},{default:t(()=>[e(P,{class:"mb-4"},{default:t(()=>[e(S,null,{default:t(()=>[e(b,null,{default:t(()=>[e(u,{sm:5},{default:t(()=>[o("h4",re,n(s.t("traffic")),1),o("div",se,n(s.t("date",{date:new Date(2023,0,1),formatParams:{date:{month:"long"}}}))+" - "+n(s.t("date",{date:new Date(2023,6,1),formatParams:{date:{year:"numeric",month:"long"}}})),1)]),_:1}),e(u,{sm:7,class:"d-none d-md-block"},{default:t(()=>[e(f,{color:"primary",class:"float-end"},{default:t(()=>[e(g,{icon:"cil-cloud-download"})]),_:1}),e(R,{class:"float-end me-3",role:"group","aria-label":"Basic outlined example"},{default:t(()=>[e(f,{color:"secondary",variant:"outline"},{default:t(()=>[_(n(s.t("day")),1)]),_:1}),e(f,{color:"secondary",variant:"outline",active:""},{default:t(()=>[_(n(s.t("month")),1)]),_:1}),e(f,{color:"secondary",variant:"outline"},{default:t(()=>[_(n(s.t("year")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(G,{style:{height:"300px","max-height":"300px","margin-top":"40px"}})]),_:1})]),_:1}),e(H,null,{default:t(()=>[e(b,{xs:{cols:1},md:{cols:5},class:"text-center"},{default:t(()=>[(m(!0),p(k,null,T(s.progressExample,r=>(m(),E(u,{key:r.title,class:"mb-sm-2 mb-0"},{default:t(()=>[o("div",ne,n(r.title),1),o("div",le,n(r.value)+" ("+n(r.percent)+")",1),e(y,{class:"mt-2",color:r.color+"-gradient",thin:"",precision:1,value:r.percent},null,8,["color","value"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(F),e(b,null,{default:t(()=>[e(u,{md:12},{default:t(()=>[e(P,{class:"mb-4"},{default:t(()=>[e(z,null,{default:t(()=>[_(n(s.t("trafficAndSales")),1)]),_:1}),e(S,null,{default:t(()=>[e(b,null,{default:t(()=>[e(u,{sm:12,lg:6},{default:t(()=>[e(b,null,{default:t(()=>[e(u,{sm:6},{default:t(()=>[o("div",ce,[o("div",de,n(s.t("newClients")),1),ie])]),_:1}),e(u,{sm:6},{default:t(()=>[o("div",ue,[o("div",me,n(s.t("recurringClients")),1),_e])]),_:1})]),_:1}),pe,(m(!0),p(k,null,T(s.progressGroupExample1,r=>(m(),p("div",{key:r.title,class:"progress-group mb-4"},[o("div",ve,[o("span",ge,n(r.title),1)]),o("div",be,[e(y,{thin:"",color:"info-gradient",value:r.value1},null,8,["value"]),e(y,{thin:"",color:"danger-gradient",value:r.value2},null,8,["value"])])]))),128))]),_:1}),e(u,{sm:12,lg:6},{default:t(()=>[e(b,null,{default:t(()=>[e(u,{sm:6},{default:t(()=>[o("div",fe,[o("div",ye,n(s.t("pageviews")),1),he])]),_:1}),e(u,{sm:6},{default:t(()=>[o("div",Ce,[o("div",we,n(s.t("organic")),1),xe])]),_:1})]),_:1}),De,(m(!0),p(k,null,T(s.progressGroupExample2,r=>(m(),p("div",{key:r.title,class:"progress-group"},[o("div",ke,[e(g,{icon:r.icon,class:"me-2",size:"lg"},null,8,["icon"]),o("span",Te,n(r.title),1),o("span",Be,n(r.value)+"%",1)]),o("div",Ee,[e(y,{thin:"",value:r.value,color:"warning-gradient"},null,8,["value"])])]))),128)),Se,(m(!0),p(k,null,T(s.progressGroupExample3,r=>(m(),p("div",{key:r.title,class:"progress-group"},[o("div",Pe,[e(g,{icon:r.icon,class:"me-2",size:"lg"},null,8,["icon"]),o("span",Ae,n(r.title),1),o("span",Me,[_(n(r.value)+" ",1),o("span",We,"("+n(r.percent)+"%)",1)])]),o("div",Re,[e(y,{thin:"",value:r.percent,color:"success-gradient"},null,8,["value"])])]))),128))]),_:1})]),_:1}),Ge,e(U,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:t(()=>[e(j,null,{default:t(()=>[e(A,null,{default:t(()=>[e(h,{class:"bg-body-secondary text-center"},{default:t(()=>[e(g,{name:"cil-people"})]),_:1}),e(h,{class:"bg-body-secondary"},{default:t(()=>[_(n(s.t("user")),1)]),_:1}),e(h,{class:"bg-body-secondary text-center"},{default:t(()=>[_(n(s.t("country")),1)]),_:1}),e(h,{class:"bg-body-secondary"},{default:t(()=>[_(n(s.t("usage")),1)]),_:1}),e(h,{class:"bg-body-secondary text-center"},{default:t(()=>[_(n(s.t("paymentMethod")),1)]),_:1}),e(h,{class:"bg-body-secondary"},{default:t(()=>[_(n(s.t("activity")),1)]),_:1})]),_:1})]),_:1}),e(I,null,{default:t(()=>[(m(!0),p(k,null,T(s.tableExample,r=>(m(),E(A,{key:r.name},{default:t(()=>[e(C,{class:"text-center"},{default:t(()=>[e(L,{size:"md",src:r.avatar.src,status:r.avatar.status},null,8,["src","status"])]),_:2},1024),e(C,null,{default:t(()=>[o("div",null,n(r.user.name),1),o("div",He,[o("span",null,n(r.user.new?s.t("new"):s.t("recurring")),1),_(" | "+n(s.t("registered"))+" "+n(r.user.registered),1)])]),_:2},1024),e(C,{class:"text-center"},{default:t(()=>[e(g,{size:"xl",name:r.country.flag,title:r.country.name},null,8,["name","title"])]),_:2},1024),e(C,null,{default:t(()=>[o("div",Fe,[o("div",ze,n(r.usage.value)+"%",1),o("div",je,n(r.usage.period),1)]),e(y,{thin:"",color:r.usage.color+"-gradient",value:r.usage.value},null,8,["color","value"])]),_:2},1024),e(C,{class:"text-center"},{default:t(()=>[e(g,{size:"xl",name:r.payment.icon},null,8,["name"])]),_:2},1024),e(C,null,{default:t(()=>[o("div",Le,n(s.t("lastLogin")),1),o("div",Ie,n(r.activity),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const Ke=M(oe,[["render",Ue]]);export{Ke as default};
