import{Ci as wi,Ni as yT,U as Ib,Zn as hm,gn as as,in as ZD,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{Xn as ro,br as yF,jn as mI,jt as YM,ln as g0,zn as oo}from"./main-XAAYYUIJ.js";import{t as $}from"./chunk-BP-YIv5U.js";import"./chunk-DzSAZ_zx.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-CHUO4BHf.js";var h=class o{constructor(){this.#e=new Date;this.startDate=wi(new Date(this.#e.getFullYear(),this.#e.getMonth(),3));this.endDate=wi(new Date(this.startDate().getFullYear(),this.startDate().getMonth(),this.startDate().getDate()+7))}#e;static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=Ib({type:o,selectors:[[`app-calendar`]],decls:190,vars:3,consts:[[`xs`,`12`],[`href`,`components/calendar`,`title`,`Calendar`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/calendar/#days`],[1,`d-flex`,`justify-content-center`],[`locale`,`en-US`,1,`bg-body`,`border`,`rounded`,3,`startDate`],[`href`,`components/calendar/#weeks`],[`selectionType`,`week`,`showWeekNumber`,``,`startDate`,`2025W42`,`calendarDate`,`2025W42`,1,`bg-body`,`border`,`rounded`],[`href`,`components/calendar/#months`],[`selectionType`,`month`,1,`bg-body`,`border`,`rounded`],[`href`,`components/calendar/#years`],[`selectionType`,`year`,1,`bg-body`,`border`,`rounded`],[`href`,`components/calendar#multiple-calendar-panels`],[`calendars`,`2`,1,`bg-body`,`border`,`rounded`],[`href`,`components/calendar/#range-selection`],[`calendars`,`2`,`range`,``,1,`bg-body`,`border`,`rounded`,3,`startDate`,`endDate`]],template:function(a,l){a&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Calendar`),lu(),yT(12,` `),as(13,`small`),yT(14,`Days`),lu(),yT(15,`
      `),lu(),yT(16,`
      `),as(17,`c-card-body`),yT(18,`
        `),as(19,`p`,3),yT(20,`
          Select specific days using the Angular Calendar component. The example below shows basic
          usage.
        `),lu(),yT(21,`
        `),as(22,`app-docs-example`,4),yT(23,`
          `),as(24,`div`,5),yT(25,`
            `),hm(26,`c-calendar`,6),yT(27,`
          `),lu(),yT(28,`
        `),lu(),yT(29,`
      `),lu(),yT(30,`
    `),lu(),yT(31,`
    `),as(32,`c-card`,2),yT(33,`
      `),as(34,`c-card-header`),yT(35,`
        `),as(36,`strong`),yT(37,`Angular Calendar`),lu(),yT(38,` `),as(39,`small`),yT(40,`Weeks`),lu(),yT(41,`
      `),lu(),yT(42,`
      `),as(43,`c-card-body`),yT(44,`
        `),as(45,`p`,3),yT(46,`
          Set the `),as(47,`code`),yT(48,`selectionType`),lu(),yT(49,` to `),as(50,`code`),yT(51,`week`),lu(),yT(52,` to enable selection of entire
          week. You can also add `),as(53,`code`),yT(54,`showWeekNumber`),lu(),yT(55,` to show week numbers.
        `),lu(),yT(56,`
        `),as(57,`app-docs-example`,7),yT(58,`
          `),as(59,`div`,5),yT(60,`
            `),hm(61,`c-calendar`,8),yT(62,`
          `),lu(),yT(63,`
        `),lu(),yT(64,`
      `),lu(),yT(65,`
    `),lu(),yT(66,`
    `),as(67,`c-card`,2),yT(68,`
      `),as(69,`c-card-header`),yT(70,`
        `),as(71,`strong`),yT(72,`Angular Calendar`),lu(),yT(73,` `),as(74,`small`),yT(75,`Months`),lu(),yT(76,`
      `),lu(),yT(77,`
      `),as(78,`c-card-body`),yT(79,`
        `),as(80,`p`,3),yT(81,`
          Set the `),as(82,`code`),yT(83,`selectionType`),lu(),yT(84,` property to `),as(85,`code`),yT(86,`month`),lu(),yT(87,` to enable selection
          of entire months.
        `),lu(),yT(88,`
        `),as(89,`app-docs-example`,9),yT(90,`
          `),as(91,`div`,5),yT(92,`
            `),hm(93,`c-calendar`,10),yT(94,`
          `),lu(),yT(95,`
        `),lu(),yT(96,`
      `),lu(),yT(97,`
    `),lu(),yT(98,`
    `),as(99,`c-card`,2),yT(100,`
      `),as(101,`c-card-header`),yT(102,`
        `),as(103,`strong`),yT(104,`Angular Calendar`),lu(),yT(105,` `),as(106,`small`),yT(107,`Years`),lu(),yT(108,`
      `),lu(),yT(109,`
      `),as(110,`c-card-body`),yT(111,`
        `),as(112,`p`,3),yT(113,`
          Set the `),as(114,`code`),yT(115,`selectionType`),lu(),yT(116,` property to `),as(117,`code`),yT(118,`year`),lu(),yT(119,` to enable selection
          of years.
        `),lu(),yT(120,`
        `),as(121,`app-docs-example`,11),yT(122,`
          `),as(123,`div`,5),yT(124,`
            `),hm(125,`c-calendar`,12),yT(126,`
          `),lu(),yT(127,`
        `),lu(),yT(128,`
      `),lu(),yT(129,`
    `),lu(),yT(130,`
    `),as(131,`c-card`,2),yT(132,`
      `),as(133,`c-card-header`),yT(134,`
        `),as(135,`strong`),yT(136,`Angular Calendar`),lu(),yT(137,` `),as(138,`small`),yT(139,` Multiple calendar panels`),lu(),yT(140,`
      `),lu(),yT(141,`
      `),as(142,`c-card-body`),yT(143,`
        `),as(144,`p`,3),yT(145,`
          Display multiple calendar panels side by side by setting the `),as(146,`code`),yT(147,`calendars`),lu(),yT(148,` property. This can be useful for selecting ranges or comparing dates across different months.
        `),lu(),yT(149,`
        `),as(150,`app-docs-example`,13),yT(151,`
          `),as(152,`div`,5),yT(153,`
            `),hm(154,`c-calendar`,14),yT(155,`
          `),lu(),yT(156,`
        `),lu(),yT(157,`
      `),lu(),yT(158,`
    `),lu(),yT(159,`
    `),as(160,`c-card`,2),yT(161,`
      `),as(162,`c-card-header`),yT(163,`
        `),as(164,`strong`),yT(165,`Angular Calendar`),lu(),yT(166,` `),as(167,`small`),yT(168,` Range selection`),lu(),yT(169,`
      `),lu(),yT(170,`
      `),as(171,`c-card-body`),yT(172,`
        `),as(173,`p`,3),yT(174,`
          Enable `),as(175,`code`),yT(176,`range`),lu(),yT(177,` selection to allow users to pick a start and end date. This example shows how to configure the Angular Calendar component to handle date ranges.
        `),lu(),yT(178,`
        `),as(179,`app-docs-example`,15),yT(180,`
          `),as(181,`div`,5),yT(182,`
            `),hm(183,`c-calendar`,16),yT(184,`
          `),lu(),yT(185,`
        `),lu(),yT(186,`
      `),lu(),yT(187,`
    `),lu(),yT(188,`
  `),lu(),yT(189,`
`),lu()),a&2&&(ZD(26),pm(`startDate`,l.startDate()),ZD(157),pm(`startDate`,l.startDate())(`endDate`,l.endDate()))},dependencies:[mI,g0,ro,oo,YM,c,$,yF],encapsulation:2})}};export{h as CalendarsComponent};