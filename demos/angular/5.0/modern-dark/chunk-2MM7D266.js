import{b as y}from"./chunk-KM6PB5O5.js";import"./chunk-R5ALBHRE.js";import{Fd as u,Gd as S,H as d,Oa as e,Qa as p,Qc as x,Rc as v,Uc as g,Xa as c,Z as i,je as E,ke as h,la as r,le as b,wa as t,xa as n,ya as a}from"./chunk-7BIPNRDY.js";import"./chunk-RLASGPT3.js";var k=(()=>{let l=class l{constructor(){this.value=10,setTimeout(()=>{this.value=100,this.variant="striped"},3e3)}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=d({type:l,selectors:[["app-progress"]],standalone:!0,features:[c],decls:298,vars:37,consts:[["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"],["href","components/progress"],[1,"mb-3",3,"value"],["animated","",1,"mb-3",3,"value","variant"],[1,"mb-3"],[3,"value"],["href","components/progress#labels"],["href","components/progress#height"],["height","1",1,"mb-3",3,"value"],["height","3",1,"mb-3",3,"value"],["height","5",1,"mb-3",3,"value"],["height","7",1,"mb-3",3,"value"],["height","11",1,"mb-3",3,"value"],["height","13",1,"mb-3",3,"value"],["height","17",1,"mb-3",3,"value"],["height","19",1,"mb-3",3,"value"],["thin","",1,"mb-3",3,"value"],[1,"mb-3",2,"height","2rem",3,"value"],["href","components/progress#backgrounds"],["color","success-gradient",1,"mb-3",3,"value"],["color","info-gradient",1,"mb-3",3,"value"],["color","warning-gradient",1,"mb-3",3,"value"],["color","danger-gradient",1,"mb-3",3,"value"],["href","components/progress#multiple-bars"],["color","primary",1,"mb-3",3,"value"],["color","info",1,"mb-3",3,"value"],["color","danger-gradient"],["color","success-gradient",3,"value"],["color","info-gradient",3,"value"],["href","components/progress#striped"],["color","success","variant","striped",1,"mb-3",3,"value"],["color","info","variant","striped",1,"mb-3",3,"value"],["color","warning","variant","striped",1,"mb-3",3,"value"],["color","danger","variant","striped",1,"mb-3",3,"value"],["href","components/progress#animated-stripes"],["animated","","color","success","variant","striped",1,"mb-3",3,"value"],["animated","","color","info","variant","striped",1,"mb-3",3,"value"],["animated","","color","warning","variant","striped",1,"mb-3",3,"value"],["animated","","color","danger","variant","striped",1,"mb-3",3,"value"]],template:function(o,s){o&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Angular Progress"),n(),e(10," "),t(11,"small"),e(12,"Basic example"),n(),e(13,`
      `),n(),e(14,`
      `),t(15,"c-card-body"),e(16,`
        `),t(17,"p",2),e(18,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),t(19,"a",3),e(20,`
            the HTML5 `),t(21,"code"),e(22,"<progress>"),n(),e(23,` element
          `),n(),e(24,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),n(),e(25,`
        `),t(26,"app-docs-example",4),e(27,`
          `),a(28,"c-progress",5),e(29,`
          `),a(30,"c-progress",5),e(31,`
          `),a(32,"c-progress",5),e(33,`
          `),a(34,"c-progress",5),e(35,`
          `),t(36,"c-progress",6),e(37),n(),e(38,`
          `),a(39,"hr"),e(40,`
          `),t(41,"c-progress",7),e(42,`
            `),t(43,"c-progress-bar",8),e(44,"33%"),n(),e(45,`
          `),n(),e(46,`

        `),n(),e(47,`
      `),n(),e(48,`
    `),n(),e(49,`
  `),n(),e(50,`
  `),t(51,"c-col",0),e(52,`
    `),t(53,"c-card",1),e(54,`
      `),t(55,"c-card-header"),e(56,`
        `),t(57,"strong"),e(58,"Angular Progress"),n(),e(59," "),t(60,"small"),e(61,"Labels"),n(),e(62,`
      `),n(),e(63,`
      `),t(64,"c-card-body"),e(65,`
        `),t(66,"p",2),e(67,`
          Add labels to your progress bars by placing text as
          `),t(68,"code"),e(69,"<c-progress>"),n(),e(70,` content.
        `),n(),e(71,`
        `),t(72,"app-docs-example",9),e(73,`
          `),t(74,"c-progress",5),e(75,"25%"),n(),e(76,`
        `),n(),e(77,`
      `),n(),e(78,`
    `),n(),e(79,`
  `),n(),e(80,`
  `),t(81,"c-col",0),e(82,`
    `),t(83,"c-card",1),e(84,`
      `),t(85,"c-card-header"),e(86,`
        `),t(87,"strong"),e(88,"Angular Progress"),n(),e(89," "),t(90,"small"),e(91,"Height"),n(),e(92,`
      `),n(),e(93,`
      `),t(94,"c-card-body"),e(95,`
        `),t(96,"p",2),e(97,`
          We only set a `),t(98,"code"),e(99,"height"),n(),e(100," value on the "),t(101,"code"),e(102,"<c-progress>"),n(),e(103,`, so if
          you change that value, the inner `),t(104,"code"),e(105,"<c-progress-bar>"),n(),e(106,` will automatically
          resize accordingly.
        `),n(),e(107,`
        `),t(108,"app-docs-example",10),e(109,`
          `),a(110,"c-progress",11),e(111,`
          `),a(112,"c-progress",12),e(113,`
          `),a(114,"c-progress",13),e(115,`
          `),a(116,"c-progress",14),e(117,`
          `),a(118,"c-progress",15),e(119,`
          `),a(120,"c-progress",16),e(121,`
          `),a(122,"c-progress",17),e(123,`
          `),a(124,"c-progress",18),e(125,`
          `),a(126,"c-progress",19),e(127,`
          `),a(128,"c-progress",20),e(129,`
        `),n(),e(130,`
      `),n(),e(131,`
    `),n(),e(132,`
  `),n(),e(133,`
  `),t(134,"c-col",0),e(135,`
    `),t(136,"c-card",1),e(137,`
      `),t(138,"c-card-header"),e(139,`
        `),t(140,"strong"),e(141,"Angular Progress"),n(),e(142," "),t(143,"small"),e(144,"Backgrounds"),n(),e(145,`
      `),n(),e(146,`
      `),t(147,"c-card-body"),e(148,`
        `),t(149,"p",2),e(150,`
          Use `),t(151,"code"),e(152,"color"),n(),e(153,` prop to change the appearance of individual progress bars.
        `),n(),e(154,`
        `),t(155,"app-docs-example",21),e(156,`
          `),a(157,"c-progress",22),e(158,`
          `),a(159,"c-progress",23),e(160,`
          `),a(161,"c-progress",24),e(162,`
          `),a(163,"c-progress",25),e(164,`
        `),n(),e(165,`
      `),n(),e(166,`
    `),n(),e(167,`
  `),n(),e(168,`
  `),t(169,"c-col",0),e(170,`
    `),t(171,"c-card",1),e(172,`
      `),t(173,"c-card-header"),e(174,`
        `),t(175,"strong"),e(176,"Angular Progress"),n(),e(177," "),t(178,"small"),e(179,"Multiple bars"),n(),e(180,`
      `),n(),e(181,`
      `),t(182,"c-card-body"),e(183,`
        `),t(184,"p",2),e(185,`
          Include multiple progress bars in a progress component if you need.
        `),n(),e(186,`
        `),t(187,"app-docs-example",26),e(188,`
          `),t(189,"c-progress-stacked"),e(190,`
            `),t(191,"c-progress",27),e(192,"15%"),n(),e(193,`
            `),t(194,"c-progress",28),e(195,"30%"),n(),e(196,`
            `),t(197,"c-progress",5),e(198,`
              `),t(199,"c-progress-bar",29),e(200,"20%"),n(),e(201,`
            `),n(),e(202,`
          `),n(),e(203,`
          `),a(204,"hr"),e(205,`
          `),t(206,"c-progress",7),e(207,`
            `),t(208,"c-progress-bar",8),e(209,"15"),n(),e(210,`
            `),t(211,"c-progress-bar",30),e(212,"30"),n(),e(213,`
            `),t(214,"c-progress-bar",31),e(215,"20"),n(),e(216,`
          `),n(),e(217,`
        `),n(),e(218,`
      `),n(),e(219,`
    `),n(),e(220,`
  `),n(),e(221,`
  `),t(222,"c-col",0),e(223,`
    `),t(224,"c-card",1),e(225,`
      `),t(226,"c-card-header"),e(227,`
        `),t(228,"strong"),e(229,"Angular Progress"),n(),e(230," "),t(231,"small"),e(232,"Striped"),n(),e(233,`
      `),n(),e(234,`
      `),t(235,"c-card-body"),e(236,`
        `),t(237,"p",2),e(238,`
          Add `),t(239,"code"),e(240,'variant="striped"'),n(),e(241," to any "),t(242,"code"),e(243,"<c-progress>"),n(),e(244,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),n(),e(245,`
        `),t(246,"app-docs-example",32),e(247,`
          `),a(248,"c-progress",33),e(249,`
          `),a(250,"c-progress",34),e(251,`
          `),a(252,"c-progress",35),e(253,`
          `),a(254,"c-progress",36),e(255,`
        `),n(),e(256,`
      `),n(),e(257,`
    `),n(),e(258,`
  `),n(),e(259,`
  `),t(260,"c-col",0),e(261,`
    `),t(262,"c-card",1),e(263,`
      `),t(264,"c-card-header"),e(265,`
        `),t(266,"strong"),e(267,"Angular Progress"),n(),e(268," "),t(269,"small"),e(270,"Animated stripes"),n(),e(271,`
      `),n(),e(272,`
      `),t(273,"c-card-body"),e(274,`
        `),t(275,"p",2),e(276,`
          The striped gradient can also be animated. Add `),t(277,"code"),e(278,'[animated]="true"'),n(),e(279,` property to
          `),t(280,"code"),e(281,"<c-progress>"),n(),e(282,` to animate the stripes right to left via CSS3
          animations.
        `),n(),e(283,`
        `),t(284,"app-docs-example",37),e(285,`
          `),a(286,"c-progress",38),e(287,`
          `),a(288,"c-progress",39),e(289,`
          `),a(290,"c-progress",40),e(291,`
          `),a(292,"c-progress",41),e(293,`
        `),n(),e(294,`
      `),n(),e(295,`
    `),n(),e(296,`
  `),n(),e(297,`
`),n()),o&2&&(i(28),r("value",0),i(2),r("value",25),i(2),r("value",50),i(2),r("value",75),i(2),r("value",s.value)("variant",s.variant),i(),p("",s.value,"%"),i(6),r("value",33),i(31),r("value",25),i(36),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(2),r("value",25),i(29),r("value",25),i(2),r("value",50),i(2),r("value",75),i(2),r("value",100),i(28),r("value",15),i(3),r("value",30),i(3),r("value",20),i(11),r("value",15),i(3),r("value",30),i(3),r("value",20),i(34),r("value",25),i(2),r("value",50),i(2),r("value",75),i(2),r("value",100),i(32),r("value",25),i(2),r("value",50),i(2),r("value",75),i(2),r("value",100))},dependencies:[S,u,x,g,v,y,b,E,h],encapsulation:2});let m=l;return m})();export{k as ProgressComponent};
