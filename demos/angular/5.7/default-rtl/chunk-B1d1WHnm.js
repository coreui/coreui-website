import{Ii as zw,Rr as nu,Y as Ii,_i as vD,qr as qg,ri as rs,rn as Wg,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$n as ux,R as JS,Sn as lf,an as fF,ht as Ro,lt as Po}from"./main-3WAR6WII.js";import{t as I}from"./chunk-Cg8AJzmk.js";import"./chunk-Dd5UTWFN.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-QL_jP78J.js";var h=class o{constructor(){this.#e=new Date;this.startDate=Ii(new Date(this.#e.getFullYear(),this.#e.getMonth(),3));this.endDate=Ii(new Date(this.startDate().getFullYear(),this.startDate().getMonth(),this.startDate().getDate()+7))}#e;static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=zw({type:o,selectors:[[`app-calendar`]],decls:190,vars:3,consts:[[`xs`,`12`],[`href`,`components/calendar`,`title`,`Calendar`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/calendar/#days`],[1,`d-flex`,`justify-content-center`],[`locale`,`en-US`,1,`bg-body`,`border`,`rounded`,3,`startDate`],[`href`,`components/calendar/#weeks`],[`selectionType`,`week`,`showWeekNumber`,``,`startDate`,`2025W42`,`calendarDate`,`2025W42`,1,`bg-body`,`border`,`rounded`],[`href`,`components/calendar/#months`],[`selectionType`,`month`,1,`bg-body`,`border`,`rounded`],[`href`,`components/calendar/#years`],[`selectionType`,`year`,1,`bg-body`,`border`,`rounded`],[`href`,`components/calendar#multiple-calendar-panels`],[`calendars`,`2`,1,`bg-body`,`border`,`rounded`],[`href`,`components/calendar/#range-selection`],[`calendars`,`2`,`range`,``,1,`bg-body`,`border`,`rounded`,3,`startDate`,`endDate`]],template:function(a,l){a&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Calendar`),nu(),Wb(12,` `),rs(13,`small`),Wb(14,`Days`),nu(),Wb(15,`
      `),nu(),Wb(16,`
      `),rs(17,`c-card-body`),Wb(18,`
        `),rs(19,`p`,3),Wb(20,`
          Select specific days using the Angular Calendar component. The example below shows basic
          usage.
        `),nu(),Wb(21,`
        `),rs(22,`app-docs-example`,4),Wb(23,`
          `),rs(24,`div`,5),Wb(25,`
            `),qg(26,`c-calendar`,6),Wb(27,`
          `),nu(),Wb(28,`
        `),nu(),Wb(29,`
      `),nu(),Wb(30,`
    `),nu(),Wb(31,`
    `),rs(32,`c-card`,2),Wb(33,`
      `),rs(34,`c-card-header`),Wb(35,`
        `),rs(36,`strong`),Wb(37,`Angular Calendar`),nu(),Wb(38,` `),rs(39,`small`),Wb(40,`Weeks`),nu(),Wb(41,`
      `),nu(),Wb(42,`
      `),rs(43,`c-card-body`),Wb(44,`
        `),rs(45,`p`,3),Wb(46,`
          Set the `),rs(47,`code`),Wb(48,`selectionType`),nu(),Wb(49,` to `),rs(50,`code`),Wb(51,`week`),nu(),Wb(52,` to enable selection of entire
          week. You can also add `),rs(53,`code`),Wb(54,`showWeekNumber`),nu(),Wb(55,` to show week numbers.
        `),nu(),Wb(56,`
        `),rs(57,`app-docs-example`,7),Wb(58,`
          `),rs(59,`div`,5),Wb(60,`
            `),qg(61,`c-calendar`,8),Wb(62,`
          `),nu(),Wb(63,`
        `),nu(),Wb(64,`
      `),nu(),Wb(65,`
    `),nu(),Wb(66,`
    `),rs(67,`c-card`,2),Wb(68,`
      `),rs(69,`c-card-header`),Wb(70,`
        `),rs(71,`strong`),Wb(72,`Angular Calendar`),nu(),Wb(73,` `),rs(74,`small`),Wb(75,`Months`),nu(),Wb(76,`
      `),nu(),Wb(77,`
      `),rs(78,`c-card-body`),Wb(79,`
        `),rs(80,`p`,3),Wb(81,`
          Set the `),rs(82,`code`),Wb(83,`selectionType`),nu(),Wb(84,` property to `),rs(85,`code`),Wb(86,`month`),nu(),Wb(87,` to enable selection
          of entire months.
        `),nu(),Wb(88,`
        `),rs(89,`app-docs-example`,9),Wb(90,`
          `),rs(91,`div`,5),Wb(92,`
            `),qg(93,`c-calendar`,10),Wb(94,`
          `),nu(),Wb(95,`
        `),nu(),Wb(96,`
      `),nu(),Wb(97,`
    `),nu(),Wb(98,`
    `),rs(99,`c-card`,2),Wb(100,`
      `),rs(101,`c-card-header`),Wb(102,`
        `),rs(103,`strong`),Wb(104,`Angular Calendar`),nu(),Wb(105,` `),rs(106,`small`),Wb(107,`Years`),nu(),Wb(108,`
      `),nu(),Wb(109,`
      `),rs(110,`c-card-body`),Wb(111,`
        `),rs(112,`p`,3),Wb(113,`
          Set the `),rs(114,`code`),Wb(115,`selectionType`),nu(),Wb(116,` property to `),rs(117,`code`),Wb(118,`year`),nu(),Wb(119,` to enable selection
          of years.
        `),nu(),Wb(120,`
        `),rs(121,`app-docs-example`,11),Wb(122,`
          `),rs(123,`div`,5),Wb(124,`
            `),qg(125,`c-calendar`,12),Wb(126,`
          `),nu(),Wb(127,`
        `),nu(),Wb(128,`
      `),nu(),Wb(129,`
    `),nu(),Wb(130,`
    `),rs(131,`c-card`,2),Wb(132,`
      `),rs(133,`c-card-header`),Wb(134,`
        `),rs(135,`strong`),Wb(136,`Angular Calendar`),nu(),Wb(137,` `),rs(138,`small`),Wb(139,` Multiple calendar panels`),nu(),Wb(140,`
      `),nu(),Wb(141,`
      `),rs(142,`c-card-body`),Wb(143,`
        `),rs(144,`p`,3),Wb(145,`
          Display multiple calendar panels side by side by setting the `),rs(146,`code`),Wb(147,`calendars`),nu(),Wb(148,` property. This can be useful for selecting ranges or comparing dates across different months.
        `),nu(),Wb(149,`
        `),rs(150,`app-docs-example`,13),Wb(151,`
          `),rs(152,`div`,5),Wb(153,`
            `),qg(154,`c-calendar`,14),Wb(155,`
          `),nu(),Wb(156,`
        `),nu(),Wb(157,`
      `),nu(),Wb(158,`
    `),nu(),Wb(159,`
    `),rs(160,`c-card`,2),Wb(161,`
      `),rs(162,`c-card-header`),Wb(163,`
        `),rs(164,`strong`),Wb(165,`Angular Calendar`),nu(),Wb(166,` `),rs(167,`small`),Wb(168,` Range selection`),nu(),Wb(169,`
      `),nu(),Wb(170,`
      `),rs(171,`c-card-body`),Wb(172,`
        `),rs(173,`p`,3),Wb(174,`
          Enable `),rs(175,`code`),Wb(176,`range`),nu(),Wb(177,` selection to allow users to pick a start and end date. This example shows how to configure the Angular Calendar component to handle date ranges.
        `),nu(),Wb(178,`
        `),rs(179,`app-docs-example`,15),Wb(180,`
          `),rs(181,`div`,5),Wb(182,`
            `),qg(183,`c-calendar`,16),Wb(184,`
          `),nu(),Wb(185,`
        `),nu(),Wb(186,`
      `),nu(),Wb(187,`
    `),nu(),Wb(188,`
  `),nu(),Wb(189,`
`),nu()),a&2&&(vD(26),Wg(`startDate`,l.startDate()),vD(157),Wg(`startDate`,l.startDate())(`endDate`,l.endDate()))},dependencies:[ux,lf,Po,Ro,JS,c,I,fF],encapsulation:2})}};export{h as CalendarsComponent};