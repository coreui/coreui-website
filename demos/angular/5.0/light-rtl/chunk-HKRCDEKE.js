import{b as I}from"./chunk-YV5OURG7.js";import"./chunk-UBKFDT4A.js";import{$ as i,Ba as b,Ca as D,Da as g,Ed as F,Fd as Y,I as E,M as h,N as w,Na as t,Pc as R,Qa as k,Qc as P,Ta as y,Tc as M,Wa as u,Xa as x,ja as _,kb as S,kd as T,la as o,rc as f,va as a,wa as e,xa as r,yc as v,yd as A}from"./chunk-BOJJVPWL.js";import"./chunk-RLASGPT3.js";function z(c,l){if(c&1){let m=b();a(0,"button",16),D("click",function(){h(m);let d=g();return w(d.onToday())}),t(1,"Today "),e(),a(2,"button",17),D("click",function(){h(m);let d=g();return w(d.onCancel())}),t(3,"Cancel "),e(),a(4,"button",18),t(5,"OK "),e()}if(c&2){let m=l.$implicit,s=g();i(2),o("dropdownComponent",m),i(2),o("disabled",!s.startDate||!s.endDate)("dropdownComponent",m)}}var L=(()=>{let l=class l{constructor(){this.calendar=new Date,this.startDate=new Date(this.calendar),this.endDate=new Date(this.calendar.getFullYear(),this.calendar.getMonth(),this.calendar.getDate()+7),this.dateDisabledExample=new Date(2024,1,1),this.disabledDates=[[new Date(this.dateDisabledExample.getFullYear(),this.dateDisabledExample.getMonth(),4),new Date(this.dateDisabledExample.getFullYear(),this.dateDisabledExample.getMonth(),7)],new Date(this.dateDisabledExample.getFullYear(),this.dateDisabledExample.getMonth(),16),new Date(this.dateDisabledExample.getFullYear(),this.dateDisabledExample.getMonth()+1,16),[new Date(this.dateDisabledExample.getFullYear(),this.dateDisabledExample.getMonth()+2,2),new Date(this.dateDisabledExample.getFullYear(),this.dateDisabledExample.getMonth()+2,8)]],this.minDate=new Date(this.dateDisabledExample.getFullYear(),this.dateDisabledExample.getMonth()-2,1),this.maxDate=new Date(this.dateDisabledExample.getFullYear(),this.dateDisabledExample.getMonth()+4,0),this.customRanges={Today:[new Date,new Date],Yesterday:[new Date(new Date().setDate(new Date().getDate()-1)),new Date(new Date().setDate(new Date().getDate()-1))],"Last 7 Days":[new Date(new Date().setDate(new Date().getDate()-6)),new Date(new Date)],"Last 30 Days":[new Date(new Date().setDate(new Date().getDate()-29)),new Date(new Date)],"This Month":[new Date(new Date().setDate(1)),new Date(new Date().getFullYear(),new Date().getMonth()+1,0)],"Last Month":[new Date(new Date().getFullYear(),new Date().getMonth()-1,1),new Date(new Date().getFullYear(),new Date().getMonth(),0)]}}onToday(){this.calendar=new Date}onCancel(){this.startDate=null,this.endDate=null}ngOnInit(){}};l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=E({type:l,selectors:[["app-date-range-picker"]],standalone:!0,features:[y],decls:108,vars:16,consts:[["xs","12"],[1,"mb-4"],["href","forms/date-range-picker"],["lg","4"],["locale","de-AT",3,"selectAdjacentDays"],["endDate","9/15/2024","locale","en-US","startDate","9/03/2024",3,"showAdjacentDays"],[3,"calendarDate","endDate","startDate","calendarDateChange","endDateChange","startDateChange"],["cTemplateId","datePickerFooter"],[1,"d-flex","align-items-center"],["closeOnSelect","","size","lg"],["lg","3"],["closeOnSelect","","size","sm"],["disabled",""],["inputReadOnly","","locale","fr-CA"],[3,"calendarDate","disabledDates","maxDate","minDate"],["rangesButtonsColor","primary",3,"ranges"],["cButton","","color","danger","size","sm","variant","ghost",1,"me-auto",3,"click"],["cButton","","cDropdownClose","","color","primary","size","sm",3,"dropdownComponent","click"],["cButton","","cDropdownClose","","color","primary","size","sm",3,"disabled","dropdownComponent"]],template:function(d,n){d&1&&(a(0,"c-row")(1,"c-col",0)(2,"c-card",1)(3,"c-card-header")(4,"strong"),t(5,"CoreUI Angular Date Range Picker"),e()(),a(6,"c-card-body")(7,"app-docs-example",2)(8,"c-row")(9,"c-col",3),r(10,"c-date-range-picker",4),e(),a(11,"c-col",3),r(12,"c-date-range-picker",5),e()()()()()(),a(13,"c-col",0)(14,"c-card",1)(15,"c-card-header")(16,"strong"),t(17,"CoreUI Angular Date Range Picker"),e(),t(18," with footer "),e(),a(19,"c-card-body")(20,"app-docs-example",2)(21,"c-row")(22,"c-col",3)(23,"c-date-range-picker",6),D("calendarDateChange",function(p){return n.calendar=p})("endDateChange",function(p){return n.endDate=p})("startDateChange",function(p){return n.startDate=p}),_(24,z,6,3,"ng-template",7),e()(),a(25,"c-col",8),t(26),u(27,"date"),u(28,"date"),e()()()()()(),a(29,"c-col",0)(30,"c-card",1)(31,"c-card-header")(32,"strong"),t(33,"CoreUI Angular Date Range Picker"),e(),t(34," Sizing "),e(),a(35,"c-card-body")(36,"p"),t(37,"Set heights using "),a(38,"code"),t(39,"size"),e(),t(40," property like "),a(41,"code"),t(42,'size="lg"'),e(),t(43," and "),a(44,"code"),t(45,'size="sm"'),e(),t(46,"."),e(),a(47,"app-docs-example",2)(48,"c-row",1)(49,"c-col",3),r(50,"c-date-range-picker",9),e()(),a(51,"c-row")(52,"c-col",10),r(53,"c-date-range-picker",11),e()()()()()(),a(54,"c-col",0)(55,"c-card",1)(56,"c-card-header")(57,"strong"),t(58,"CoreUI Angular Date Range Picker"),e(),t(59," Disabled "),e(),a(60,"c-card-body")(61,"p"),t(62,"Add the "),a(63,"code"),t(64,"disabled"),e(),t(65," boolean attribute on an input to give it a grayed out appearance and remove pointer events."),e(),a(66,"app-docs-example",2)(67,"c-row")(68,"c-col",3),r(69,"c-date-range-picker",12),e()()()()()(),a(70,"c-col",0)(71,"c-card",1)(72,"c-card-header")(73,"strong"),t(74,"CoreUI Angular Date Range Picker"),e(),t(75," Readonly "),e(),a(76,"c-card-body")(77,"p"),t(78,"Add the "),a(79,"code"),t(80,"inputReadOnly"),e(),t(81," boolean attribute to prevent modification of the input value."),e(),a(82,"app-docs-example",2)(83,"c-row")(84,"c-col",3),r(85,"c-date-range-picker",13),e()()()()()(),a(86,"c-col",0)(87,"c-card",1)(88,"c-card-header")(89,"strong"),t(90,"CoreUI Angular Date Range Picker"),e(),t(91," Disabled dates "),e(),a(92,"c-card-body")(93,"app-docs-example",2)(94,"c-row")(95,"c-col",3),r(96,"c-date-range-picker",14),e()()()()()(),a(97,"c-col",0)(98,"c-card",1)(99,"c-card-header")(100,"strong"),t(101,"CoreUI Angular Date Range Picker"),e(),t(102," Custom ranges "),e(),a(103,"c-card-body")(104,"app-docs-example",2)(105,"c-row")(106,"c-col",3),r(107,"c-date-range-picker",15),e()()()()()()()),d&2&&(i(10),o("selectAdjacentDays",!0),i(2),o("showAdjacentDays",!1),i(11),o("calendarDate",n.calendar)("endDate",n.endDate)("startDate",n.startDate),i(3),k(" ",x(27,12,n.startDate)," -> ",x(28,14,n.endDate)," "),i(70),o("calendarDate",n.dateDisabledExample)("disabledDates",n.disabledDates)("maxDate",n.maxDate)("minDate",n.minDate),i(11),o("ranges",n.customRanges))},dependencies:[Y,F,R,M,P,I,A,f,v,T,S]});let c=l;return c})();export{L as DateRangePickerComponent};
