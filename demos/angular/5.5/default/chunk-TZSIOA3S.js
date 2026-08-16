import{b as u}from"./chunk-T34HXANW.js";import"./chunk-PMOGNWGV.js";import{a as f}from"./chunk-ZX4I2AKI.js";import{cb as b,eb as g,ka as S,ma as E,na as h,qa as y}from"./chunk-KA3R4CT6.js";import"./chunk-MQBD4EFB.js";import"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Qb as x,Rb as t,Sb as n,Tb as i,bb as c,mb as p,sc as e,va as o}from"./chunk-H7BDVHMQ.js";import{e as m,f as s}from"./chunk-ZOGHMS73.js";var l,a=class a{constructor(){s(this,l,new Date);this.startDate=o(new Date(m(this,l).getFullYear(),m(this,l).getMonth(),3));this.endDate=o(new Date(this.startDate().getFullYear(),this.startDate().getMonth(),this.startDate().getDate()+7))}};l=new WeakMap,a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=p({type:a,selectors:[["app-calendar"]],decls:190,vars:3,consts:[["xs","12"],["href","components/calendar","title","Calendar"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/calendar/#days"],[1,"d-flex","justify-content-center"],["locale","en-US",1,"bg-body","border","rounded",3,"startDate"],["href","components/calendar/#weeks"],["selectionType","week","showWeekNumber","","startDate","2025W42","calendarDate","2025W42",1,"bg-body","border","rounded"],["href","components/calendar/#months"],["selectionType","month",1,"bg-body","border","rounded"],["href","components/calendar/#years"],["selectionType","year",1,"bg-body","border","rounded"],["href","components/calendar#multiple-calendar-panels"],["calendars","2",1,"bg-body","border","rounded"],["href","components/calendar/#range-selection"],["calendars","2","range","",1,"bg-body","border","rounded",3,"startDate","endDate"]],template:function(r,d){r&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),i(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular Calendar"),n(),e(12," "),t(13,"small"),e(14,"Days"),n(),e(15,`
      `),n(),e(16,`
      `),t(17,"c-card-body"),e(18,`
        `),t(19,"p",3),e(20,`
          Select specific days using the Angular Calendar component. The example below shows basic
          usage.
        `),n(),e(21,`
        `),t(22,"app-docs-example",4),e(23,`
          `),t(24,"div",5),e(25,`
            `),i(26,"c-calendar",6),e(27,`
          `),n(),e(28,`
        `),n(),e(29,`
      `),n(),e(30,`
    `),n(),e(31,`
    `),t(32,"c-card",2),e(33,`
      `),t(34,"c-card-header"),e(35,`
        `),t(36,"strong"),e(37,"Angular Calendar"),n(),e(38," "),t(39,"small"),e(40,"Weeks"),n(),e(41,`
      `),n(),e(42,`
      `),t(43,"c-card-body"),e(44,`
        `),t(45,"p",3),e(46,`
          Set the `),t(47,"code"),e(48,"selectionType"),n(),e(49," to "),t(50,"code"),e(51,"week"),n(),e(52,` to enable selection of entire
          week. You can also add `),t(53,"code"),e(54,"showWeekNumber"),n(),e(55,` to show week numbers.
        `),n(),e(56,`
        `),t(57,"app-docs-example",7),e(58,`
          `),t(59,"div",5),e(60,`
            `),i(61,"c-calendar",8),e(62,`
          `),n(),e(63,`
        `),n(),e(64,`
      `),n(),e(65,`
    `),n(),e(66,`
    `),t(67,"c-card",2),e(68,`
      `),t(69,"c-card-header"),e(70,`
        `),t(71,"strong"),e(72,"Angular Calendar"),n(),e(73," "),t(74,"small"),e(75,"Months"),n(),e(76,`
      `),n(),e(77,`
      `),t(78,"c-card-body"),e(79,`
        `),t(80,"p",3),e(81,`
          Set the `),t(82,"code"),e(83,"selectionType"),n(),e(84," property to "),t(85,"code"),e(86,"month"),n(),e(87,` to enable selection
          of entire months.
        `),n(),e(88,`
        `),t(89,"app-docs-example",9),e(90,`
          `),t(91,"div",5),e(92,`
            `),i(93,"c-calendar",10),e(94,`
          `),n(),e(95,`
        `),n(),e(96,`
      `),n(),e(97,`
    `),n(),e(98,`
    `),t(99,"c-card",2),e(100,`
      `),t(101,"c-card-header"),e(102,`
        `),t(103,"strong"),e(104,"Angular Calendar"),n(),e(105," "),t(106,"small"),e(107,"Years"),n(),e(108,`
      `),n(),e(109,`
      `),t(110,"c-card-body"),e(111,`
        `),t(112,"p",3),e(113,`
          Set the `),t(114,"code"),e(115,"selectionType"),n(),e(116," property to "),t(117,"code"),e(118,"year"),n(),e(119,` to enable selection
          of years.
        `),n(),e(120,`
        `),t(121,"app-docs-example",11),e(122,`
          `),t(123,"div",5),e(124,`
            `),i(125,"c-calendar",12),e(126,`
          `),n(),e(127,`
        `),n(),e(128,`
      `),n(),e(129,`
    `),n(),e(130,`
    `),t(131,"c-card",2),e(132,`
      `),t(133,"c-card-header"),e(134,`
        `),t(135,"strong"),e(136,"Angular Calendar"),n(),e(137," "),t(138,"small"),e(139," Multiple calendar panels"),n(),e(140,`
      `),n(),e(141,`
      `),t(142,"c-card-body"),e(143,`
        `),t(144,"p",3),e(145,`
          Display multiple calendar panels side by side by setting the `),t(146,"code"),e(147,"calendars"),n(),e(148,` property. This can be useful for selecting ranges or comparing dates across different months.
        `),n(),e(149,`
        `),t(150,"app-docs-example",13),e(151,`
          `),t(152,"div",5),e(153,`
            `),i(154,"c-calendar",14),e(155,`
          `),n(),e(156,`
        `),n(),e(157,`
      `),n(),e(158,`
    `),n(),e(159,`
    `),t(160,"c-card",2),e(161,`
      `),t(162,"c-card-header"),e(163,`
        `),t(164,"strong"),e(165,"Angular Calendar"),n(),e(166," "),t(167,"small"),e(168," Range selection"),n(),e(169,`
      `),n(),e(170,`
      `),t(171,"c-card-body"),e(172,`
        `),t(173,"p",3),e(174,`
          Enable `),t(175,"code"),e(176,"range"),n(),e(177,` selection to allow users to pick a start and end date. This example shows how to configure the Angular Calendar component to handle date ranges.
        `),n(),e(178,`
        `),t(179,"app-docs-example",15),e(180,`
          `),t(181,"div",5),e(182,`
            `),i(183,"c-calendar",16),e(184,`
          `),n(),e(185,`
        `),n(),e(186,`
      `),n(),e(187,`
    `),n(),e(188,`
  `),n(),e(189,`
`),n()),r&2&&(c(26),x("startDate",d.startDate()),c(157),x("startDate",d.startDate())("endDate",d.endDate()))},dependencies:[b,S,h,E,y,f,u,g],encapsulation:2});var C=a;export{C as CalendarsComponent};
