import{Ci as wi,Di as xT,F as Gm,Ii as yf,It as TC,Ni as yT,U as Ib,Ui as zg,Zn as hm,gn as as,in as ZD,ln as _C,mn as aT,nn as Ym,nt as MC,on as Zm,sr as jC,y as DT,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{Kn as ro,Pn as oo,bt as WF,in as fF,ir as vt,mt as Tu,tr as uI,xt as WM}from"./main-PH3H2PHZ.js";import{t as $}from"./chunk-NR_cKXUo.js";import"./chunk-Ysi4WkbN.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-Dx86lBYf.js";var W=()=>[`Very bad`,`Bad`,`Meh`,`Good`,`Very good`];function z(i,d){i&1&&(yT(0,`
                `),yf(),hm(1,`svg`,20),yT(2,`
              `))}function N(i,d){i&1&&(yT(0,`
                `),yf(),hm(1,`svg`,21),yT(2,`
              `))}function P(i,d){if(i&1&&(yT(0,`
                  `),yf(),hm(1,`svg`,23),yT(2,`
                `)),i&2){let m=jC().$implicit;ZD(),pm(`name`,m)}}function H(i,d){if(i&1&&(yT(0,`
                `),zg(1,P,3,1,`ng-template`,22),yT(2,`
              `)),i&2){let m=d.$implicit;ZD(),pm(`cTemplateId`,m)}}function O(i,d){if(i&1&&(yT(0,`
                  `),yf(),hm(1,`svg`,23),yT(2,`
                `)),i&2){let m=jC().$index,l=jC();ZD(),aT(l.activeClass[m]),pm(`name`,l.icons[m])}}function q(i,d){if(i&1&&(yT(0,`
                `),zg(1,O,3,3,`ng-template`,22),yT(2,`
              `)),i&2){let m=d.$implicit;ZD(),pm(`cTemplateId`,m)}}var k=class i{constructor(){this.value=wi(3);this.tooltips=[`Very bad`,`Bad`,`Meh`,`Good`,`Very good`];this.icons=[`cilMoodVeryBad`,`cilMoodBad`,`cilMeh`,`cilMoodGood`,`cilMoodVeryGood`];this.activeIcons=this.icons.map(d=>`active_${d}`);this.activeClass=[`text-dark`,`text-danger`,`text-warning`,`text-info`,`text-success`]}static{this.ɵfac=function(m){return new(m||i)}}static{this.ɵcmp=Ib({type:i,selectors:[[`app-ratings`]],decls:246,vars:17,consts:[[`xs`,`12`],[`href`,`forms/rating/`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[1,`bg-body`,`border`,`rounded`,`p-3`],[3,`value`],[`href`,`forms/rating/#read-only`],[`readOnly`,``,3,`value`],[`disabled`,``,3,`value`],[`href`,`forms/rating/#tooltips`],[3,`tooltips`,`value`],[`href`,`forms/rating/#precision`],[`precision`,`0.25`,3,`valueChange`,`value`],[`itemCount`,`20`,3,`value`],[`itemCount`,`3`,3,`value`],[`href`,`forms/rating/#custom-icons`],[`icon`,`iconTemplate`,`activeIcon`,`activeIconTemplate`,3,`value`],[`cTemplateId`,`iconTemplate`],[`cTemplateId`,`activeIconTemplate`],[`highlightOnlySelected`,``,3,`valueChange`,`value`,`activeIcon`,`icon`,`tooltips`],[`cIcon`,``,`name`,`cilHeart`,`size`,`lg`],[`cIcon`,``,`name`,`cilHeart`,`size`,`lg`,1,`text-danger`],[3,`cTemplateId`],[`cIcon`,``,`size`,`xxl`,3,`name`]],template:function(m,l){m&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Rating Component`),lu(),yT(12,`
      `),lu(),yT(13,`
      `),as(14,`c-card-body`),yT(15,`
        `),as(16,`p`,3),yT(17,`
          Embed the Rating component in your Angular application like this:
        `),lu(),yT(18,`
        `),as(19,`app-docs-example`,1),yT(20,`
          `),as(21,`div`,4),yT(22,`
            `),hm(23,`c-rating`,5),yT(24,`
          `),lu(),yT(25,`
        `),lu(),yT(26,`
      `),lu(),yT(27,`
    `),lu(),yT(28,`
    `),as(29,`c-card`,2),yT(30,`
      `),as(31,`c-card-header`),yT(32,`
        `),as(33,`strong`),yT(34,`Angular Rating Component`),lu(),yT(35,` `),as(36,`small`),yT(37,`Readonly`),lu(),yT(38,`
      `),lu(),yT(39,`
      `),as(40,`c-card-body`),yT(41,`
        `),as(42,`p`,3),yT(43,`
          Set the Angular Rating component to read-only by adding `),as(44,`code`),yT(45,`readOnly`),lu(),yT(46,` property. This disables interaction, preventing users from changing the displayed rating value.
        `),lu(),yT(47,`
        `),as(48,`app-docs-example`,6),yT(49,`
          `),as(50,`div`,4),yT(51,`
            `),hm(52,`c-rating`,7),yT(53,`
          `),lu(),yT(54,`
        `),lu(),yT(55,`
      `),lu(),yT(56,`
    `),lu(),yT(57,`
    `),as(58,`c-card`,2),yT(59,`
      `),as(60,`c-card-header`),yT(61,`
        `),as(62,`strong`),yT(63,`Angular Rating Component`),lu(),yT(64,` `),as(65,`small`),yT(66,`Disabled`),lu(),yT(67,`
      `),lu(),yT(68,`
      `),as(69,`c-card-body`),yT(70,`
        `),as(71,`p`,3),yT(72,`
          Add the `),as(73,`code`),yT(74,`disabled`),lu(),yT(75,` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.
        `),lu(),yT(76,`
        `),as(77,`app-docs-example`,6),yT(78,`
          `),as(79,`div`,4),yT(80,`
            `),hm(81,`c-rating`,8),yT(82,`
          `),lu(),yT(83,`
        `),lu(),yT(84,`
      `),lu(),yT(85,`
    `),lu(),yT(86,`
    `),as(87,`c-card`,2),yT(88,`
      `),as(89,`c-card-header`),yT(90,`
        `),as(91,`strong`),yT(92,`Angular Rating Component`),lu(),yT(93,` `),as(94,`small`),yT(95,`Tooltips`),lu(),yT(96,`
      `),lu(),yT(97,`
      `),as(98,`c-card-body`),yT(99,`
        `),as(100,`p`,3),yT(101,`
          Enable descriptive text on hover by adding `),as(102,`code`),yT(103,`tooltips`),lu(),yT(104,` prop. This provides immediate feedback or guidance as the user interacts with the rating items.
        `),lu(),yT(105,`
        `),as(106,`app-docs-example`,9),yT(107,`
          `),as(108,`div`,4),yT(109,`
            `),hm(110,`c-rating`,10),yT(111,`
          `),lu(),yT(112,`
        `),lu(),yT(113,`
        `),as(114,`p`,3),yT(115,`
          For custom messages, provide an array of labels corresponding to each rating value to enhance the user's understanding of each rating level.
        `),lu(),yT(116,`
        `),as(117,`app-docs-example`,9),yT(118,`
          `),as(119,`div`,4),yT(120,`
            `),hm(121,`c-rating`,10),yT(122,`
          `),lu(),yT(123,`
        `),lu(),yT(124,`
      `),lu(),yT(125,`
    `),lu(),yT(126,`
    `),as(127,`c-card`,2),yT(128,`
      `),as(129,`c-card-header`),yT(130,`
        `),as(131,`strong`),yT(132,`Angular Rating Component`),lu(),yT(133,` `),as(134,`small`),yT(135,`Precision`),lu(),yT(136,`
      `),lu(),yT(137,`
      `),as(138,`c-card-body`),yT(139,`
        `),as(140,`p`,3),yT(141,`
          Adjust the granularity of the Rating component by setting `),as(142,`code`),yT(143,`precision`),lu(),yT(144,` prop. This attribute allows for fractional ratings, such as quarter values, to provide more precise feedback.
        `),lu(),yT(145,`
        `),as(146,`app-docs-example`,11),yT(147,`
          `),as(148,`div`,4),yT(149,`
            `),as(150,`c-rating`,12),Ym(`valueChange`,function(c){return DT(l.value,c)||(l.value=c),c}),lu(),yT(151,`
            `),as(152,`div`),yT(153),lu(),yT(154,`
          `),lu(),yT(155,`
        `),lu(),yT(156,`
      `),lu(),yT(157,`
    `),lu(),yT(158,`
    `),as(159,`c-card`,2),yT(160,`
      `),as(161,`c-card-header`),yT(162,`
        `),as(163,`strong`),yT(164,`Angular Rating Component`),lu(),yT(165,` `),as(166,`small`),yT(167,`Number of items`),lu(),yT(168,`
      `),lu(),yT(169,`
      `),as(170,`c-card-body`),yT(171,`
        `),as(172,`p`,3),yT(173,`
          Control the total number of rating items displayed by using `),as(174,`code`),yT(175,`itemCount`),lu(),yT(176,` property. You can create a Angular Rating component with a custom scale, be it larger for detailed assessments or smaller for simplicity. `),lu(),yT(177,`
        `),as(178,`app-docs-example`,11),yT(179,`
          `),as(180,`div`,4),yT(181,`
            `),hm(182,`c-rating`,13),yT(183,`
            `),hm(184,`br`),yT(185,`
            `),hm(186,`c-rating`,14),yT(187,`
          `),lu(),yT(188,`
        `),lu(),yT(189,`
      `),lu(),yT(190,`
    `),lu(),yT(191,`
    `),as(192,`c-card`,2),yT(193,`
      `),as(194,`c-card-header`),yT(195,`
        `),as(196,`strong`),yT(197,`Angular Rating Component`),lu(),yT(198,` `),as(199,`small`),yT(200,`Custom Icons`),lu(),yT(201,`
      `),lu(),yT(202,`
      `),as(203,`c-card-body`),yT(204,`
        `),as(205,`p`,3),yT(206,`
          Customize the Angular Rating component with your choice of SVG icons by assigning new values to the `),as(207,`code`),yT(208,`activeIcon`),lu(),yT(209,` and `),as(210,`code`),yT(211,`icon`),lu(),yT(212,` properties. This allows for a unique look tailored to the design language of your site or application.
        `),lu(),yT(213,`
        `),as(214,`app-docs-example`,15),yT(215,`
          `),as(216,`div`,4),yT(217,`
            `),as(218,`c-rating`,16),yT(219,`
              `),zg(220,z,3,0,`ng-template`,17),yT(221,`
              `),zg(222,N,3,0,`ng-template`,18),yT(223,`
            `),lu(),yT(224,`
          `),lu(),yT(225,`
        `),lu(),yT(226,`
        `),as(227,`p`,3),yT(228,`
          For a more dynamic experience, define different icons for each rating value, enhancing the visual feedback:
        `),lu(),yT(229,`
        `),as(230,`app-docs-example`,15),yT(231,`
          `),as(232,`div`,4),yT(233,`
            `),as(234,`c-rating`,19),Ym(`valueChange`,function(c){return DT(l.value,c)||(l.value=c),c}),yT(235,`
              `),_C(236,H,3,1,null,null,TC),_C(238,q,3,1,null,null,TC),lu(),yT(240,`
          `),lu(),yT(241,`
        `),lu(),yT(242,`
      `),lu(),yT(243,`
    `),lu(),yT(244,`
  `),lu(),yT(245,`
`),lu()),m&2&&(ZD(23),pm(`value`,3),ZD(29),pm(`value`,3),ZD(29),pm(`value`,3),ZD(29),pm(`tooltips`,!0)(`value`,3),ZD(11),pm(`tooltips`,xT(16,W))(`value`,3),ZD(29),Zm(`value`,l.value),ZD(3),Gm(l.value()),ZD(29),pm(`value`,7),ZD(4),pm(`value`,1),ZD(32),pm(`value`,3),ZD(16),Zm(`value`,l.value),pm(`activeIcon`,l.activeIcons)(`icon`,l.icons)(`tooltips`,l.tooltips),ZD(2),MC(l.icons),ZD(2),MC(l.activeIcons))},dependencies:[ro,oo,WM,uI,c,$,fF,WF,vt,Tu],encapsulation:2})}};export{k as RatingsComponent};