"use strict";(self.webpackChunkcoreui_pro_angular_admin_template=self.webpackChunkcoreui_pro_angular_admin_template||[]).push([[768],{768:(D,l,r)=>{r.r(l),r.d(l,{DatePickerComponent:()=>s});var i=r(6814),p=r(8329),t=r(9704),e=r(9212);function _(n,u){if(1&n){const o=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.onToday())}),e._uU(1,"Today "),e.qZA(),e.TgZ(2,"button",17),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.onCancel())}),e._uU(3,"Cancel "),e.qZA(),e.TgZ(4,"button",18),e._uU(5,"OK "),e.qZA()}if(2&n){const o=u.$implicit,c=e.oxw();e.xp6(2),e.Q6J("dropdownComponent",o),e.xp6(2),e.Q6J("disabled",!c.date)("dropdownComponent",o)}}let s=(()=>{class n{constructor(){this.date=new Date,this.calendarDate=new Date,this.dateDisabledExample=new Date(2024,2,1),this.disabledDates=[[new Date(2024,2,4),new Date(2024,2,7)],new Date(2024,2,16),new Date(2024,3,16),[new Date(2024,4,2),new Date(2024,4,8)]],this.maxDate=new Date(2033,6,15,0,0,0),this.minDate=new Date(2024,1,15)}onToday(){this.calendarDate=new Date}onCancel(){this.date=null}static#e=this.\u0275fac=function(c){return new(c||n)};static#a=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-date-picker"]],standalone:!0,features:[e.jDz],decls:97,vars:9,consts:[["xs","12"],[1,"mb-4"],["href","forms/date-picker"],["lg","4"],["locale","en-US","closeOnSelect",""],["date","2/16/2024","locale","en-US","closeOnSelect",""],[3,"calendarDate","date","calendarDateChange","dateChange"],["datePicker","cDatePicker"],["cTemplateId","datePickerFooter"],[1,"d-flex","align-items-center"],["size","lg"],["lg","3"],["size","sm"],["date","9/1/2024","disabled","","locale","en-US"],["inputReadOnly",""],[3,"calendarDate","disabledDates","minDate","maxDate"],["cButton","","color","danger","size","sm","variant","ghost",1,"me-auto",3,"click"],["cButton","","cDropdownClose","","color","primary","size","sm",3,"dropdownComponent","click"],["cButton","","cDropdownClose","","color","primary","size","sm",3,"disabled","dropdownComponent"]],template:function(c,a){1&c&&(e.TgZ(0,"c-row")(1,"c-col",0)(2,"c-card",1)(3,"c-card-header")(4,"strong"),e._uU(5,"CoreUI Angular Date Picker"),e.qZA()(),e.TgZ(6,"c-card-body")(7,"app-docs-example",2)(8,"c-row")(9,"c-col",3),e._UZ(10,"c-date-picker",4),e.qZA(),e.TgZ(11,"c-col",3),e._UZ(12,"c-date-picker",5),e.qZA()()()()()(),e.TgZ(13,"c-col",0)(14,"c-card",1)(15,"c-card-header")(16,"strong"),e._uU(17,"CoreUI Angular Date Picker"),e.qZA(),e._uU(18," with footer "),e.qZA(),e.TgZ(19,"c-card-body")(20,"app-docs-example",2)(21,"c-row")(22,"c-col",3)(23,"c-date-picker",6,7),e.NdJ("calendarDateChange",function(d){return a.calendarDate=d})("dateChange",function(d){return a.date=d}),e.YNc(25,_,6,3,"ng-template",8),e.qZA()(),e.TgZ(26,"c-col",9),e._uU(27),e.ALo(28,"date"),e.qZA()()()()()(),e.TgZ(29,"c-col",0)(30,"c-card",1)(31,"c-card-header")(32,"strong"),e._uU(33,"CoreUI Angular Date Picker"),e.qZA(),e._uU(34," Sizing "),e.qZA(),e.TgZ(35,"c-card-body")(36,"p"),e._uU(37,"Set heights using "),e.TgZ(38,"code"),e._uU(39,"size"),e.qZA(),e._uU(40," property like "),e.TgZ(41,"code"),e._uU(42,'size="lg"'),e.qZA(),e._uU(43," and "),e.TgZ(44,"code"),e._uU(45,'size="sm"'),e.qZA(),e._uU(46,"."),e.qZA(),e.TgZ(47,"app-docs-example",2)(48,"c-row",1)(49,"c-col",3),e._UZ(50,"c-date-picker",10),e.qZA()(),e.TgZ(51,"c-row")(52,"c-col",11),e._UZ(53,"c-date-picker",12),e.qZA()()()()()(),e.TgZ(54,"c-col",0)(55,"c-card",1)(56,"c-card-header")(57,"strong"),e._uU(58,"CoreUI Angular Date Picker"),e.qZA(),e._uU(59," Disabled "),e.qZA(),e.TgZ(60,"c-card-body")(61,"p"),e._uU(62,"Add the "),e.TgZ(63,"code"),e._uU(64,"disabled"),e.qZA(),e._uU(65," boolean attribute on an input to give it a grayed out appearance and remove pointer events."),e.qZA(),e.TgZ(66,"app-docs-example",2)(67,"c-row")(68,"c-col",3),e._UZ(69,"c-date-picker",13),e.qZA()()()()()(),e.TgZ(70,"c-col",0)(71,"c-card",1)(72,"c-card-header")(73,"strong"),e._uU(74,"CoreUI Angular Date Picker"),e.qZA(),e._uU(75," Readonly "),e.qZA(),e.TgZ(76,"c-card-body")(77,"p"),e._uU(78,"Add the "),e.TgZ(79,"code"),e._uU(80,"inputReadOnly"),e.qZA(),e._uU(81," boolean attribute to prevent modification of the input's value."),e.qZA(),e.TgZ(82,"app-docs-example",2)(83,"c-row")(84,"c-col",3),e._UZ(85,"c-date-picker",14),e.qZA()()()()()(),e.TgZ(86,"c-col",0)(87,"c-card",1)(88,"c-card-header")(89,"strong"),e._uU(90,"CoreUI Angular Date Picker"),e.qZA(),e._uU(91," Disabled dates "),e.qZA(),e.TgZ(92,"c-card-body")(93,"app-docs-example",2)(94,"c-row")(95,"c-col",3),e._UZ(96,"c-date-picker",15),e.qZA()()()()()()()),2&c&&(e.xp6(23),e.Q6J("calendarDate",a.calendarDate)("date",a.date),e.xp6(4),e.hij(" ",e.lcZ(28,7,a.date)," "),e.xp6(69),e.Q6J("calendarDate",a.dateDisabledExample)("disabledDates",a.disabledDates)("minDate",a.minDate)("maxDate",a.maxDate))},dependencies:[t.iok,t.Yp0,t.AkF,t.nkx,t.yue,p.U8,t.Lr3,t.y1J,t.Hq3,t.Oq1,i.uU]})}return n})()}}]);