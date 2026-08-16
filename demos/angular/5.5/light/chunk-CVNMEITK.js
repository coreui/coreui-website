import{b as I}from"./chunk-D6RVJT2W.js";import"./chunk-PMOGNWGV.js";import{a as N}from"./chunk-ZX4I2AKI.js";import{C as p,I as S,J as E,L as f,La as F,M as u,Oa as y,Ra as C,Sa as v,Ua as w,cb as L,eb as T,fb as D,ma as g,na as h,qa as b,v as c,y as s}from"./chunk-KA3R4CT6.js";import"./chunk-MQBD4EFB.js";import{m as d}from"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Gc as r,Qb as o,Rb as t,Sb as n,Tb as i,bb as m,mb as x,sc as e}from"./chunk-H7BDVHMQ.js";import"./chunk-ZOGHMS73.js";var G=()=>({"height.px":100}),k=()=>({g:2}),l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=x({type:l,selectors:[["app-floating-labels"]],decls:274,vars:5,consts:[["xs","12"],["href","forms/floating-labels","title","Floating Labels"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","forms/floating-labels"],[1,"mb-3",3,"cFormFloating"],["cFormControl","","id","floatingInput","placeholder","name@example.com","type","email"],["cLabel","","for","floatingInput"],["cFormFloating",""],["cFormControl","","id","floatingPassword","placeholder","Password","type","password"],["cLabel","","for","floatingPassword"],["cForm","","cFormFloating",""],["cFormControl","","id","floatingInputValue","placeholder","name@example.com","type","email","value","test@example.com"],["cLabel","","for","floatingInputValue"],["href","forms/floating-labels#textareas"],["cFormControl","","id","floatingTextarea","placeholder","Leave a comment here","type","text"],["cLabel","","for","floatingTextarea"],["cFormControl","","id","floatingTextarea2","placeholder","Leave a comment here",3,"ngStyle"],["cLabel","","for","floatingTextarea2"],["href","forms/floating-labels#selects"],["aria-label","Floating label select example","cSelect","","id","floatingSelect"],["value","1"],["value","2"],["value","3"],["cLabel","","for","floatingSelect"],["href","forms/floating-labels#layout"],[3,"gutter"],["md",""],["cFormControl","","id","floatingInputGrid","placeholder","name@example.com","type","email","value","email@example.com"],["cLabel","","for","floatingInputGrid"],["aria-label","Floating label select example","cSelect","","id","floatingSelectGrid"],["cLabel","","for","floatingSelectGrid"]],template:function(a,M){a&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),i(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular Floating labels"),n(),e(12,`
      `),n(),e(13,`
      `),t(14,"c-card-body"),e(15,`
        `),t(16,"p",3),e(17,`
          Wrap a pair of `),t(18,"code"),e(19,"<cFormControl>"),n(),e(20," and "),t(21,"code"),e(22,"<label>"),n(),e(23,`
          elements in `),t(24,"code"),e(25,"cFormControl"),n(),e(26,` to enable floating labels with textual form
          fields. A `),t(27,"code"),e(28,"placeholder"),n(),e(29," is required on each "),t(30,"code"),e(31,"<input>"),n(),e(32,`
          as our method of CSS-only floating labels uses the `),t(33,"code"),e(34,":placeholder-shown"),n(),e(35,`
          pseudo-element. Also note that the `),t(36,"code"),e(37,"<cFormControl>"),n(),e(38,` must come first so
          we can utilize a sibling selector (e.g., `),t(39,"code"),e(40,"~"),n(),e(41,`).
        `),n(),e(42,`
        `),t(43,"app-docs-example",4),e(44,`
          `),t(45,"div",5),e(46,`
            `),i(47,"input",6),e(48,`
            `),t(49,"label",7),e(50,"Email address"),n(),e(51,`
          `),n(),e(52,`
          `),t(53,"div",8),e(54,`
            `),i(55,"input",9),e(56,`
            `),t(57,"label",10),e(58,"Password"),n(),e(59,`
          `),n(),e(60,`
        `),n(),e(61,`
        `),t(62,"p",3),e(63,`
          When there's a `),t(64,"code"),e(65,"value"),n(),e(66," already defined, "),t(67,"code"),e(68,"<label>"),n(),e(69,`
          s will automatically adjust to their floated position.
        `),n(),e(70,`
        `),t(71,"app-docs-example",4),e(72,`
          `),t(73,"form",11),e(74,`
            `),i(75,"input",12),e(76,`
            `),t(77,"label",13),e(78,"Input with value"),n(),e(79,`
          `),n(),e(80,`
        `),n(),e(81,`
      `),n(),e(82,`
    `),n(),e(83,`
  `),n(),e(84,`
  `),t(85,"c-col",0),e(86,`
    `),t(87,"c-card",2),e(88,`
      `),t(89,"c-card-header"),e(90,`
        `),t(91,"strong"),e(92,"Angular Floating labels"),n(),e(93," "),t(94,"small"),e(95,"Textareas"),n(),e(96,`
      `),n(),e(97,`
      `),t(98,"c-card-body"),e(99,`
        `),t(100,"p",3),e(101,`
          By default, `),t(102,"code"),e(103,"<CFormTextarea>"),n(),e(104,`s will be the same height as
          `),t(105,"code"),e(106,"<input>"),n(),e(107,`s.
        `),n(),e(108,`
        `),t(109,"app-docs-example",14),e(110,`
          `),t(111,"div",8),e(112,`
            `),i(113,"input",15),e(114,`
            `),t(115,"label",16),e(116,"Comments"),n(),e(117,`
          `),n(),e(118,`
        `),n(),e(119,`
        `),t(120,"p",3),e(121,`
          To set a custom height on your `),t(122,"code"),e(123,"<CFormTextarea;>"),n(),e(124,`, do not use the
          `),t(125,"code"),e(126,"rows"),n(),e(127," attribute. Instead, set an explicit "),t(128,"code"),e(129,"height"),n(),e(130,` (either
          inline or via custom CSS).
        `),n(),e(131,`
        `),t(132,"app-docs-example",14),e(133,`
          `),t(134,"div",8),e(135,`
            `),i(136,"textarea",17),e(137,`
            `),t(138,"label",18),e(139,"Comments"),n(),e(140,`
          `),n(),e(141,`
        `),n(),e(142,`
      `),n(),e(143,`
    `),n(),e(144,`
  `),n(),e(145,`
  `),t(146,"c-col",0),e(147,`
    `),t(148,"c-card",2),e(149,`
      `),t(150,"c-card-header"),e(151,`
        `),t(152,"strong"),e(153,"Angular Floating labels"),n(),e(154," "),t(155,"small"),e(156,"Selects"),n(),e(157,`
      `),n(),e(158,`
      `),t(159,"c-card-body"),e(160,`
        `),t(161,"p",3),e(162,`
          Other than `),t(163,"code"),e(164,"<input>"),n(),e(165,`, floating labels are only available on
          `),t(166,"code"),e(167,"<cSelect>"),n(),e(168,`s. They work in the same way, but unlike
          `),t(169,"code"),e(170,"<input>"),n(),e(171,`s, they'll always show the
          `),t(172,"code"),e(173,"<label>"),n(),e(174,` in its floated state.
          `),t(175,"strong"),e(176,`
            Selects with `),t(177,"code"),e(178,"size"),n(),e(179," and "),t(180,"code"),e(181,"multiple"),n(),e(182,` are not supported.
          `),n(),e(183,`
        `),n(),e(184,`
        `),t(185,"app-docs-example",19),e(186,`
          `),t(187,"div",8),e(188,`
            `),t(189,"select",20),e(190,`
              `),t(191,"option"),e(192,"Open this select menu"),n(),e(193,`
              `),t(194,"option",21),e(195,"One"),n(),e(196,`
              `),t(197,"option",22),e(198,"Two"),n(),e(199,`
              `),t(200,"option",23),e(201,"Three"),n(),e(202,`
            `),n(),e(203,`
            `),t(204,"label",24),e(205,"Works with selects"),n(),e(206,`
          `),n(),e(207,`
        `),n(),e(208,`
      `),n(),e(209,`
    `),n(),e(210,`
  `),n(),e(211,`
  `),t(212,"c-col",0),e(213,`
    `),t(214,"c-card",2),e(215,`
      `),t(216,"c-card-header"),e(217,`
        `),t(218,"strong"),e(219,"Angular Floating labels"),n(),e(220," "),t(221,"small"),e(222,"Layout"),n(),e(223,`
      `),n(),e(224,`
      `),t(225,"c-card-body"),e(226,`
        `),t(227,"p",3),e(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),n(),e(229,`
        `),t(230,"app-docs-example",25),e(231,`
          `),t(232,"c-row",26),e(233,`
            `),t(234,"c-col",27),e(235,`
              `),t(236,"div",8),e(237,`
                `),i(238,"input",28),e(239,`
                `),t(240,"label",29),e(241,"Email address"),n(),e(242,`
              `),n(),e(243,`
            `),n(),e(244,`
            `),t(245,"c-col",27),e(246,`
              `),t(247,"div",8),e(248,`
                `),t(249,"select",30),e(250,`
                  `),t(251,"option"),e(252,"Open this select menu"),n(),e(253,`
                  `),t(254,"option",21),e(255,"One"),n(),e(256,`
                  `),t(257,"option",22),e(258,"Two"),n(),e(259,`
                  `),t(260,"option",23),e(261,"Three"),n(),e(262,`
                `),n(),e(263,`
                `),t(264,"label",31),e(265,"Works with selects"),n(),e(266,`
              `),n(),e(267,`
            `),n(),e(268,`
          `),n(),e(269,`
        `),n(),e(270,`
      `),n(),e(271,`
    `),n(),e(272,`
  `),n(),e(273,`
`),n()),a&2&&(m(45),o("cFormFloating",!0),m(91),o("ngStyle",r(3,G)),m(96),o("gutter",r(4,k)))},dependencies:[T,L,g,b,h,I,C,y,v,u,p,S,E,c,f,s,F,d,w,D,N],encapsulation:2});var O=l;export{O as FloatingLabelsComponent};
