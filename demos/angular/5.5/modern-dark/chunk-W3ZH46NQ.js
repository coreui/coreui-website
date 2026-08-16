import{b}from"./chunk-RYKAVOBH.js";import"./chunk-PMOGNWGV.js";import{a as h}from"./chunk-ZX4I2AKI.js";import{Kb as u,Lb as S,Mb as E,db as g,fb as v,na as d,oa as c,ra as x}from"./chunk-YI43TGSZ.js";import"./chunk-MQBD4EFB.js";import"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Qb as r,Rb as t,Sb as n,Tb as a,bb as i,mb as s,sc as e,uc as p}from"./chunk-H7BDVHMQ.js";import"./chunk-ZOGHMS73.js";var l=class l{constructor(){this.value=10;setTimeout(()=>{this.value=100,this.variant="striped"},3e3)}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=s({type:l,selectors:[["app-progress"]],decls:300,vars:37,consts:[["xs","12"],["href","components/progress","title","Progress"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"],["href","components/progress"],[1,"mb-3",3,"value"],["animated","",1,"mb-3",3,"value","variant"],[1,"mb-3"],[3,"value"],["href","components/progress#labels"],["href","components/progress#height"],["height","1",1,"mb-3",3,"value"],["height","3",1,"mb-3",3,"value"],["height","5",1,"mb-3",3,"value"],["height","7",1,"mb-3",3,"value"],["height","11",1,"mb-3",3,"value"],["height","13",1,"mb-3",3,"value"],["height","17",1,"mb-3",3,"value"],["height","19",1,"mb-3",3,"value"],["thin","",1,"mb-3",3,"value"],[1,"mb-3",2,"height","2rem",3,"value"],["href","components/progress#backgrounds"],["color","success-gradient",1,"mb-3",3,"value"],["color","info-gradient",1,"mb-3",3,"value"],["color","warning-gradient",1,"mb-3",3,"value"],["color","danger-gradient",1,"mb-3",3,"value"],["href","components/progress#multiple-bars"],["color","primary",1,"mb-3",3,"value"],["color","info",1,"mb-3",3,"value"],["color","danger-gradient"],["color","success-gradient",3,"value"],["color","info-gradient",3,"value"],["href","components/progress#striped"],["color","success","variant","striped",1,"mb-3",3,"value"],["color","info","variant","striped",1,"mb-3",3,"value"],["color","warning","variant","striped",1,"mb-3",3,"value"],["color","danger","variant","striped",1,"mb-3",3,"value"],["href","components/progress#animated-stripes"],["animated","","color","success","variant","striped",1,"mb-3",3,"value"],["animated","","color","info","variant","striped",1,"mb-3",3,"value"],["animated","","color","warning","variant","striped",1,"mb-3",3,"value"],["animated","","color","danger","variant","striped",1,"mb-3",3,"value"]],template:function(o,m){o&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),a(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular Progress"),n(),e(12," "),t(13,"small"),e(14,"Basic example"),n(),e(15,`
      `),n(),e(16,`
      `),t(17,"c-card-body"),e(18,`
        `),t(19,"p",3),e(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),t(21,"a",4),e(22,`
            the HTML5 `),t(23,"code"),e(24,"<progress>"),n(),e(25,` element
          `),n(),e(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),n(),e(27,`
        `),t(28,"app-docs-example",5),e(29,`
          `),a(30,"c-progress",6),e(31,`
          `),a(32,"c-progress",6),e(33,`
          `),a(34,"c-progress",6),e(35,`
          `),a(36,"c-progress",6),e(37,`
          `),t(38,"c-progress",7),e(39),n(),e(40,`
          `),a(41,"hr"),e(42,`
          `),t(43,"c-progress",8),e(44,`
            `),t(45,"c-progress-bar",9),e(46,"33%"),n(),e(47,`
          `),n(),e(48,`

        `),n(),e(49,`
      `),n(),e(50,`
    `),n(),e(51,`
  `),n(),e(52,`
  `),t(53,"c-col",0),e(54,`
    `),t(55,"c-card",2),e(56,`
      `),t(57,"c-card-header"),e(58,`
        `),t(59,"strong"),e(60,"Angular Progress"),n(),e(61," "),t(62,"small"),e(63,"Labels"),n(),e(64,`
      `),n(),e(65,`
      `),t(66,"c-card-body"),e(67,`
        `),t(68,"p",3),e(69,`
          Add labels to your progress bars by placing text as
          `),t(70,"code"),e(71,"<c-progress>"),n(),e(72,` content.
        `),n(),e(73,`
        `),t(74,"app-docs-example",10),e(75,`
          `),t(76,"c-progress",6),e(77,"25%"),n(),e(78,`
        `),n(),e(79,`
      `),n(),e(80,`
    `),n(),e(81,`
  `),n(),e(82,`
  `),t(83,"c-col",0),e(84,`
    `),t(85,"c-card",2),e(86,`
      `),t(87,"c-card-header"),e(88,`
        `),t(89,"strong"),e(90,"Angular Progress"),n(),e(91," "),t(92,"small"),e(93,"Height"),n(),e(94,`
      `),n(),e(95,`
      `),t(96,"c-card-body"),e(97,`
        `),t(98,"p",3),e(99,`
          We only set a `),t(100,"code"),e(101,"height"),n(),e(102," value on the "),t(103,"code"),e(104,"<c-progress>"),n(),e(105,`, so if
          you change that value, the inner `),t(106,"code"),e(107,"<c-progress-bar>"),n(),e(108,` will automatically
          resize accordingly.
        `),n(),e(109,`
        `),t(110,"app-docs-example",11),e(111,`
          `),a(112,"c-progress",12),e(113,`
          `),a(114,"c-progress",13),e(115,`
          `),a(116,"c-progress",14),e(117,`
          `),a(118,"c-progress",15),e(119,`
          `),a(120,"c-progress",16),e(121,`
          `),a(122,"c-progress",17),e(123,`
          `),a(124,"c-progress",18),e(125,`
          `),a(126,"c-progress",19),e(127,`
          `),a(128,"c-progress",20),e(129,`
          `),a(130,"c-progress",21),e(131,`
        `),n(),e(132,`
      `),n(),e(133,`
    `),n(),e(134,`
  `),n(),e(135,`
  `),t(136,"c-col",0),e(137,`
    `),t(138,"c-card",2),e(139,`
      `),t(140,"c-card-header"),e(141,`
        `),t(142,"strong"),e(143,"Angular Progress"),n(),e(144," "),t(145,"small"),e(146,"Backgrounds"),n(),e(147,`
      `),n(),e(148,`
      `),t(149,"c-card-body"),e(150,`
        `),t(151,"p",3),e(152,`
          Use `),t(153,"code"),e(154,"color"),n(),e(155,` prop to change the appearance of individual progress bars.
        `),n(),e(156,`
        `),t(157,"app-docs-example",22),e(158,`
          `),a(159,"c-progress",23),e(160,`
          `),a(161,"c-progress",24),e(162,`
          `),a(163,"c-progress",25),e(164,`
          `),a(165,"c-progress",26),e(166,`
        `),n(),e(167,`
      `),n(),e(168,`
    `),n(),e(169,`
  `),n(),e(170,`
  `),t(171,"c-col",0),e(172,`
    `),t(173,"c-card",2),e(174,`
      `),t(175,"c-card-header"),e(176,`
        `),t(177,"strong"),e(178,"Angular Progress"),n(),e(179," "),t(180,"small"),e(181,"Multiple bars"),n(),e(182,`
      `),n(),e(183,`
      `),t(184,"c-card-body"),e(185,`
        `),t(186,"p",3),e(187,`
          Include multiple progress bars in a progress component if you need.
        `),n(),e(188,`
        `),t(189,"app-docs-example",27),e(190,`
          `),t(191,"c-progress-stacked"),e(192,`
            `),t(193,"c-progress",28),e(194,"15%"),n(),e(195,`
            `),t(196,"c-progress",29),e(197,"30%"),n(),e(198,`
            `),t(199,"c-progress",6),e(200,`
              `),t(201,"c-progress-bar",30),e(202,"20%"),n(),e(203,`
            `),n(),e(204,`
          `),n(),e(205,`
          `),a(206,"hr"),e(207,`
          `),t(208,"c-progress",8),e(209,`
            `),t(210,"c-progress-bar",9),e(211,"15"),n(),e(212,`
            `),t(213,"c-progress-bar",31),e(214,"30"),n(),e(215,`
            `),t(216,"c-progress-bar",32),e(217,"20"),n(),e(218,`
          `),n(),e(219,`
        `),n(),e(220,`
      `),n(),e(221,`
    `),n(),e(222,`
  `),n(),e(223,`
  `),t(224,"c-col",0),e(225,`
    `),t(226,"c-card",2),e(227,`
      `),t(228,"c-card-header"),e(229,`
        `),t(230,"strong"),e(231,"Angular Progress"),n(),e(232," "),t(233,"small"),e(234,"Striped"),n(),e(235,`
      `),n(),e(236,`
      `),t(237,"c-card-body"),e(238,`
        `),t(239,"p",3),e(240,`
          Add `),t(241,"code"),e(242,'variant="striped"'),n(),e(243," to any "),t(244,"code"),e(245,"<c-progress>"),n(),e(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),n(),e(247,`
        `),t(248,"app-docs-example",33),e(249,`
          `),a(250,"c-progress",34),e(251,`
          `),a(252,"c-progress",35),e(253,`
          `),a(254,"c-progress",36),e(255,`
          `),a(256,"c-progress",37),e(257,`
        `),n(),e(258,`
      `),n(),e(259,`
    `),n(),e(260,`
  `),n(),e(261,`
  `),t(262,"c-col",0),e(263,`
    `),t(264,"c-card",2),e(265,`
      `),t(266,"c-card-header"),e(267,`
        `),t(268,"strong"),e(269,"Angular Progress"),n(),e(270," "),t(271,"small"),e(272,"Animated stripes"),n(),e(273,`
      `),n(),e(274,`
      `),t(275,"c-card-body"),e(276,`
        `),t(277,"p",3),e(278,`
          The striped gradient can also be animated. Add `),t(279,"code"),e(280,'[animated]="true"'),n(),e(281,` property to
          `),t(282,"code"),e(283,"<c-progress>"),n(),e(284,` to animate the stripes right to left via CSS3
          animations.
        `),n(),e(285,`
        `),t(286,"app-docs-example",38),e(287,`
          `),a(288,"c-progress",39),e(289,`
          `),a(290,"c-progress",40),e(291,`
          `),a(292,"c-progress",41),e(293,`
          `),a(294,"c-progress",42),e(295,`
        `),n(),e(296,`
      `),n(),e(297,`
    `),n(),e(298,`
  `),n(),e(299,`
`),n()),o&2&&(i(30),r("value",0),i(2),r("value",25),i(2),r("value",50),i(2),r("value",75),i(2),r("value",m.value)("variant",m.variant),i(),p("",m.value,"%"),i(6),r("value",33),i(31),r("value",25),i(36),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(29),r("value",25),i(2),r("value",50),i(2),r("value",75),i(2),r("value",100),i(28),r("value",15),i(3),r("value",30),i(3),r("value",20),i(11),r("value",15),i(3),r("value",30),i(3),r("value",20),i(34),r("value",25),i(2),r("value",50),i(2),r("value",75),i(2),r("value",100),i(32),r("value",25),i(2),r("value",50),i(2),r("value",75),i(2),r("value",100))},dependencies:[v,g,d,x,c,b,S,E,u,h],encapsulation:2});var y=l;export{y as AppProgressComponent};
