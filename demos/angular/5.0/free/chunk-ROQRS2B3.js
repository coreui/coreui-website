import{d as C,g as w,k as T,q as L,r as D,t as I,u as N}from"./chunk-RUPILP6K.js";import{b as O}from"./chunk-SVFRG5ER.js";import{$ as m,I as x,Pa as e,Rc as u,Uc as f,Vc as g,Ya as c,Za as d,Zc as h,_c as b,cd as F,dd as y,ed as v,mb as s,na as o,sc as p,tc as S,wc as E,xa as t,ya as n,za as i}from"./chunk-B6WIMGH4.js";import"./chunk-RLASGPT3.js";var G=()=>({"height.px":100}),k=()=>({g:2}),q=(()=>{let l=class l{constructor(){}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=x({type:l,selectors:[["app-floating-labels"]],standalone:!0,features:[c],decls:272,vars:5,consts:[["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","forms/floating-labels"],[1,"mb-3",3,"cFormFloating"],["cFormControl","","id","floatingInput","placeholder","name@example.com","type","email"],["cLabel","","for","floatingInput"],["cFormFloating",""],["cFormControl","","id","floatingPassword","placeholder","Password","type","password"],["cLabel","","for","floatingPassword"],["cForm","","cFormFloating",""],["cFormControl","","id","floatingInputValue","placeholder","name@example.com","type","email","value","test@example.com"],["cLabel","","for","floatingInputValue"],["href","forms/floating-labels#textareas"],["cFormControl","","id","floatingTextarea","placeholder","Leave a comment here","type","text"],["cLabel","","for","floatingTextarea"],["cFormControl","","id","floatingTextarea2","placeholder","Leave a comment here",3,"ngStyle"],["cLabel","","for","floatingTextarea2"],["href","forms/floating-labels#selects"],["aria-label","Floating label select example","cSelect","","id","floatingSelect"],["value","1"],["value","2"],["value","3"],["cLabel","","for","floatingSelect"],["href","forms/floating-labels#layout"],[3,"gutter"],["md",""],["cFormControl","","id","floatingInputGrid","placeholder","name@example.com","type","email","value","email@example.com"],["cLabel","","for","floatingInputGrid"],["aria-label","Floating label select example","cSelect","","id","floatingSelectGrid"],["cLabel","","for","floatingSelectGrid"]],template:function(a,M){a&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Angular Floating labels"),n(),e(10,`
      `),n(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"p",2),e(15,`
          Wrap a pair of `),t(16,"code"),e(17,"<cFormControl>"),n(),e(18," and "),t(19,"code"),e(20,"<label>"),n(),e(21,`
          elements in `),t(22,"code"),e(23,"cFormControl"),n(),e(24,` to enable floating labels with textual form
          fields. A `),t(25,"code"),e(26,"placeholder"),n(),e(27," is required on each "),t(28,"code"),e(29,"<input>"),n(),e(30,`
          as our method of CSS-only floating labels uses the `),t(31,"code"),e(32,":placeholder-shown"),n(),e(33,`
          pseudo-element. Also note that the `),t(34,"code"),e(35,"<cFormControl>"),n(),e(36,` must come first so
          we can utilize a sibling selector (e.g., `),t(37,"code"),e(38,"~"),n(),e(39,`).
        `),n(),e(40,`
        `),t(41,"app-docs-example",3),e(42,`
          `),t(43,"div",4),e(44,`
            `),i(45,"input",5),e(46,`
            `),t(47,"label",6),e(48,"Email address"),n(),e(49,`
          `),n(),e(50,`
          `),t(51,"div",7),e(52,`
            `),i(53,"input",8),e(54,`
            `),t(55,"label",9),e(56,"Password"),n(),e(57,`
          `),n(),e(58,`
        `),n(),e(59,`
        `),t(60,"p",2),e(61,`
          When there's a `),t(62,"code"),e(63,"value"),n(),e(64," already defined, "),t(65,"code"),e(66,"<label>"),n(),e(67,`
          s will automatically adjust to their floated position.
        `),n(),e(68,`
        `),t(69,"app-docs-example",3),e(70,`
          `),t(71,"form",10),e(72,`
            `),i(73,"input",11),e(74,`
            `),t(75,"label",12),e(76,"Input with value"),n(),e(77,`
          `),n(),e(78,`
        `),n(),e(79,`
      `),n(),e(80,`
    `),n(),e(81,`
  `),n(),e(82,`
  `),t(83,"c-col",0),e(84,`
    `),t(85,"c-card",1),e(86,`
      `),t(87,"c-card-header"),e(88,`
        `),t(89,"strong"),e(90,"Angular Floating labels"),n(),e(91," "),t(92,"small"),e(93,"Textareas"),n(),e(94,`
      `),n(),e(95,`
      `),t(96,"c-card-body"),e(97,`
        `),t(98,"p",2),e(99,`
          By default, `),t(100,"code"),e(101,"<CFormTextarea>"),n(),e(102,`s will be the same height as
          `),t(103,"code"),e(104,"<input>"),n(),e(105,`s.
        `),n(),e(106,`
        `),t(107,"app-docs-example",13),e(108,`
          `),t(109,"div",7),e(110,`
            `),i(111,"input",14),e(112,`
            `),t(113,"label",15),e(114,"Comments"),n(),e(115,`
          `),n(),e(116,`
        `),n(),e(117,`
        `),t(118,"p",2),e(119,`
          To set a custom height on your `),t(120,"code"),e(121,"<CFormTextarea;>"),n(),e(122,`, do not use the
          `),t(123,"code"),e(124,"rows"),n(),e(125," attribute. Instead, set an explicit "),t(126,"code"),e(127,"height"),n(),e(128,` (either
          inline or via custom CSS).
        `),n(),e(129,`
        `),t(130,"app-docs-example",13),e(131,`
          `),t(132,"div",7),e(133,`
            `),i(134,"textarea",16),e(135,`
            `),t(136,"label",17),e(137,"Comments"),n(),e(138,`
          `),n(),e(139,`
        `),n(),e(140,`
      `),n(),e(141,`
    `),n(),e(142,`
  `),n(),e(143,`
  `),t(144,"c-col",0),e(145,`
    `),t(146,"c-card",1),e(147,`
      `),t(148,"c-card-header"),e(149,`
        `),t(150,"strong"),e(151,"Angular Floating labels"),n(),e(152," "),t(153,"small"),e(154,"Selects"),n(),e(155,`
      `),n(),e(156,`
      `),t(157,"c-card-body"),e(158,`
        `),t(159,"p",2),e(160,`
          Other than `),t(161,"code"),e(162,"<input>"),n(),e(163,`, floating labels are only available on
          `),t(164,"code"),e(165,"<cSelect>"),n(),e(166,`s. They work in the same way, but unlike
          `),t(167,"code"),e(168,"<input>"),n(),e(169,`s, they'll always show the
          `),t(170,"code"),e(171,"<label>"),n(),e(172,` in its floated state.
          `),t(173,"strong"),e(174,`
            Selects with `),t(175,"code"),e(176,"size"),n(),e(177," and "),t(178,"code"),e(179,"multiple"),n(),e(180,` are not supported.
          `),n(),e(181,`
        `),n(),e(182,`
        `),t(183,"app-docs-example",18),e(184,`
          `),t(185,"div",7),e(186,`
            `),t(187,"select",19),e(188,`
              `),t(189,"option"),e(190,"Open this select menu"),n(),e(191,`
              `),t(192,"option",20),e(193,"One"),n(),e(194,`
              `),t(195,"option",21),e(196,"Two"),n(),e(197,`
              `),t(198,"option",22),e(199,"Three"),n(),e(200,`
            `),n(),e(201,`
            `),t(202,"label",23),e(203,"Works with selects"),n(),e(204,`
          `),n(),e(205,`
        `),n(),e(206,`
      `),n(),e(207,`
    `),n(),e(208,`
  `),n(),e(209,`
  `),t(210,"c-col",0),e(211,`
    `),t(212,"c-card",1),e(213,`
      `),t(214,"c-card-header"),e(215,`
        `),t(216,"strong"),e(217,"Angular Floating labels"),n(),e(218," "),t(219,"small"),e(220,"Layout"),n(),e(221,`
      `),n(),e(222,`
      `),t(223,"c-card-body"),e(224,`
        `),t(225,"p",2),e(226,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),n(),e(227,`
        `),t(228,"app-docs-example",24),e(229,`
          `),t(230,"c-row",25),e(231,`
            `),t(232,"c-col",26),e(233,`
              `),t(234,"div",7),e(235,`
                `),i(236,"input",27),e(237,`
                `),t(238,"label",28),e(239,"Email address"),n(),e(240,`
              `),n(),e(241,`
            `),n(),e(242,`
            `),t(243,"c-col",26),e(244,`
              `),t(245,"div",7),e(246,`
                `),t(247,"select",29),e(248,`
                  `),t(249,"option"),e(250,"Open this select menu"),n(),e(251,`
                  `),t(252,"option",20),e(253,"One"),n(),e(254,`
                  `),t(255,"option",21),e(256,"Two"),n(),e(257,`
                  `),t(258,"option",22),e(259,"Three"),n(),e(260,`
                `),n(),e(261,`
                `),t(262,"label",30),e(263,"Works with selects"),n(),e(264,`
              `),n(),e(265,`
            `),n(),e(266,`
          `),n(),e(267,`
        `),n(),e(268,`
      `),n(),e(269,`
    `),n(),e(270,`
  `),n(),e(271,`
`),n()),a&2&&(m(43),o("cFormFloating",!0),m(91),o("ngStyle",d(3,G)),m(96),o("gutter",d(4,k)))},dependencies:[y,F,p,E,S,O,b,h,g,N,T,L,D,C,I,w,u,s,f,v]});let r=l;return r})();export{q as FloatingLabelsComponent};
