import{$ as JT,$n as eb,Dt as Qb,Ii as zw,Kt as Tm,Rr as nu,Tn as _m,Tr as lf,Y as Ii,Yn as db,Yr as rC,_i as vD,g as Cg,on as XT,qr as qg,ri as rs,rn as Wg,tn as Wb,xr as kb,yt as Mm}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{B as JS,Hn as qc,_t as Ro,ar as vF,ft as QF,ir as ux,k as Ge,ut as Po}from"./main-7INN2Z2K.js";import{t as I}from"./chunk-Dk3kVBXY.js";import"./chunk-BWOgs6qf.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-BRNMNR6v.js";var W=()=>[`Very bad`,`Bad`,`Meh`,`Good`,`Very good`];function z(i,d){i&1&&(Wb(0,`
                `),lf(),qg(1,`svg`,20),Wb(2,`
              `))}function N(i,d){i&1&&(Wb(0,`
                `),lf(),qg(1,`svg`,21),Wb(2,`
              `))}function P(i,d){if(i&1&&(Wb(0,`
                  `),lf(),qg(1,`svg`,23),Wb(2,`
                `)),i&2){let m=db().$implicit;vD(),Wg(`name`,m)}}function H(i,d){if(i&1&&(Wb(0,`
                `),Cg(1,P,3,1,`ng-template`,22),Wb(2,`
              `)),i&2){let m=d.$implicit;vD(),Wg(`cTemplateId`,m)}}function O(i,d){if(i&1&&(Wb(0,`
                  `),lf(),qg(1,`svg`,23),Wb(2,`
                `)),i&2){let m=db().$index,l=db();vD(),kb(l.activeClass[m]),Wg(`name`,l.icons[m])}}function q(i,d){if(i&1&&(Wb(0,`
                `),Cg(1,O,3,3,`ng-template`,22),Wb(2,`
              `)),i&2){let m=d.$implicit;vD(),Wg(`cTemplateId`,m)}}var k=class i{constructor(){this.value=Ii(3);this.tooltips=[`Very bad`,`Bad`,`Meh`,`Good`,`Very good`];this.icons=[`cilMoodVeryBad`,`cilMoodBad`,`cilMeh`,`cilMoodGood`,`cilMoodVeryGood`];this.activeIcons=this.icons.map(d=>`active_${d}`);this.activeClass=[`text-dark`,`text-danger`,`text-warning`,`text-info`,`text-success`]}static{this.ɵfac=function(m){return new(m||i)}}static{this.ɵcmp=zw({type:i,selectors:[[`app-ratings`]],decls:246,vars:17,consts:[[`xs`,`12`],[`href`,`forms/rating/`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[1,`bg-body`,`border`,`rounded`,`p-3`],[3,`value`],[`href`,`forms/rating/#read-only`],[`readOnly`,``,3,`value`],[`disabled`,``,3,`value`],[`href`,`forms/rating/#tooltips`],[3,`tooltips`,`value`],[`href`,`forms/rating/#precision`],[`precision`,`0.25`,3,`valueChange`,`value`],[`itemCount`,`20`,3,`value`],[`itemCount`,`3`,3,`value`],[`href`,`forms/rating/#custom-icons`],[`icon`,`iconTemplate`,`activeIcon`,`activeIconTemplate`,3,`value`],[`cTemplateId`,`iconTemplate`],[`cTemplateId`,`activeIconTemplate`],[`highlightOnlySelected`,``,3,`valueChange`,`value`,`activeIcon`,`icon`,`tooltips`],[`cIcon`,``,`name`,`cilHeart`,`size`,`lg`],[`cIcon`,``,`name`,`cilHeart`,`size`,`lg`,1,`text-danger`],[3,`cTemplateId`],[`cIcon`,``,`size`,`xxl`,3,`name`]],template:function(m,l){m&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Rating Component`),nu(),Wb(12,`
      `),nu(),Wb(13,`
      `),rs(14,`c-card-body`),Wb(15,`
        `),rs(16,`p`,3),Wb(17,`
          Embed the Rating component in your Angular application like this:
        `),nu(),Wb(18,`
        `),rs(19,`app-docs-example`,1),Wb(20,`
          `),rs(21,`div`,4),Wb(22,`
            `),qg(23,`c-rating`,5),Wb(24,`
          `),nu(),Wb(25,`
        `),nu(),Wb(26,`
      `),nu(),Wb(27,`
    `),nu(),Wb(28,`
    `),rs(29,`c-card`,2),Wb(30,`
      `),rs(31,`c-card-header`),Wb(32,`
        `),rs(33,`strong`),Wb(34,`Angular Rating Component`),nu(),Wb(35,` `),rs(36,`small`),Wb(37,`Readonly`),nu(),Wb(38,`
      `),nu(),Wb(39,`
      `),rs(40,`c-card-body`),Wb(41,`
        `),rs(42,`p`,3),Wb(43,`
          Set the Angular Rating component to read-only by adding `),rs(44,`code`),Wb(45,`readOnly`),nu(),Wb(46,` property. This disables interaction, preventing users from changing the displayed rating value.
        `),nu(),Wb(47,`
        `),rs(48,`app-docs-example`,6),Wb(49,`
          `),rs(50,`div`,4),Wb(51,`
            `),qg(52,`c-rating`,7),Wb(53,`
          `),nu(),Wb(54,`
        `),nu(),Wb(55,`
      `),nu(),Wb(56,`
    `),nu(),Wb(57,`
    `),rs(58,`c-card`,2),Wb(59,`
      `),rs(60,`c-card-header`),Wb(61,`
        `),rs(62,`strong`),Wb(63,`Angular Rating Component`),nu(),Wb(64,` `),rs(65,`small`),Wb(66,`Disabled`),nu(),Wb(67,`
      `),nu(),Wb(68,`
      `),rs(69,`c-card-body`),Wb(70,`
        `),rs(71,`p`,3),Wb(72,`
          Add the `),rs(73,`code`),Wb(74,`disabled`),nu(),Wb(75,` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.
        `),nu(),Wb(76,`
        `),rs(77,`app-docs-example`,6),Wb(78,`
          `),rs(79,`div`,4),Wb(80,`
            `),qg(81,`c-rating`,8),Wb(82,`
          `),nu(),Wb(83,`
        `),nu(),Wb(84,`
      `),nu(),Wb(85,`
    `),nu(),Wb(86,`
    `),rs(87,`c-card`,2),Wb(88,`
      `),rs(89,`c-card-header`),Wb(90,`
        `),rs(91,`strong`),Wb(92,`Angular Rating Component`),nu(),Wb(93,` `),rs(94,`small`),Wb(95,`Tooltips`),nu(),Wb(96,`
      `),nu(),Wb(97,`
      `),rs(98,`c-card-body`),Wb(99,`
        `),rs(100,`p`,3),Wb(101,`
          Enable descriptive text on hover by adding `),rs(102,`code`),Wb(103,`tooltips`),nu(),Wb(104,` prop. This provides immediate feedback or guidance as the user interacts with the rating items.
        `),nu(),Wb(105,`
        `),rs(106,`app-docs-example`,9),Wb(107,`
          `),rs(108,`div`,4),Wb(109,`
            `),qg(110,`c-rating`,10),Wb(111,`
          `),nu(),Wb(112,`
        `),nu(),Wb(113,`
        `),rs(114,`p`,3),Wb(115,`
          For custom messages, provide an array of labels corresponding to each rating value to enhance the user's understanding of each rating level.
        `),nu(),Wb(116,`
        `),rs(117,`app-docs-example`,9),Wb(118,`
          `),rs(119,`div`,4),Wb(120,`
            `),qg(121,`c-rating`,10),Wb(122,`
          `),nu(),Wb(123,`
        `),nu(),Wb(124,`
      `),nu(),Wb(125,`
    `),nu(),Wb(126,`
    `),rs(127,`c-card`,2),Wb(128,`
      `),rs(129,`c-card-header`),Wb(130,`
        `),rs(131,`strong`),Wb(132,`Angular Rating Component`),nu(),Wb(133,` `),rs(134,`small`),Wb(135,`Precision`),nu(),Wb(136,`
      `),nu(),Wb(137,`
      `),rs(138,`c-card-body`),Wb(139,`
        `),rs(140,`p`,3),Wb(141,`
          Adjust the granularity of the Rating component by setting `),rs(142,`code`),Wb(143,`precision`),nu(),Wb(144,` prop. This attribute allows for fractional ratings, such as quarter values, to provide more precise feedback.
        `),nu(),Wb(145,`
        `),rs(146,`app-docs-example`,11),Wb(147,`
          `),rs(148,`div`,4),Wb(149,`
            `),rs(150,`c-rating`,12),Mm(`valueChange`,function(c){return Qb(l.value,c)||(l.value=c),c}),nu(),Wb(151,`
            `),rs(152,`div`),Wb(153),nu(),Wb(154,`
          `),nu(),Wb(155,`
        `),nu(),Wb(156,`
      `),nu(),Wb(157,`
    `),nu(),Wb(158,`
    `),rs(159,`c-card`,2),Wb(160,`
      `),rs(161,`c-card-header`),Wb(162,`
        `),rs(163,`strong`),Wb(164,`Angular Rating Component`),nu(),Wb(165,` `),rs(166,`small`),Wb(167,`Number of items`),nu(),Wb(168,`
      `),nu(),Wb(169,`
      `),rs(170,`c-card-body`),Wb(171,`
        `),rs(172,`p`,3),Wb(173,`
          Control the total number of rating items displayed by using `),rs(174,`code`),Wb(175,`itemCount`),nu(),Wb(176,` property. You can create a Angular Rating component with a custom scale, be it larger for detailed assessments or smaller for simplicity. `),nu(),Wb(177,`
        `),rs(178,`app-docs-example`,11),Wb(179,`
          `),rs(180,`div`,4),Wb(181,`
            `),qg(182,`c-rating`,13),Wb(183,`
            `),qg(184,`br`),Wb(185,`
            `),qg(186,`c-rating`,14),Wb(187,`
          `),nu(),Wb(188,`
        `),nu(),Wb(189,`
      `),nu(),Wb(190,`
    `),nu(),Wb(191,`
    `),rs(192,`c-card`,2),Wb(193,`
      `),rs(194,`c-card-header`),Wb(195,`
        `),rs(196,`strong`),Wb(197,`Angular Rating Component`),nu(),Wb(198,` `),rs(199,`small`),Wb(200,`Custom Icons`),nu(),Wb(201,`
      `),nu(),Wb(202,`
      `),rs(203,`c-card-body`),Wb(204,`
        `),rs(205,`p`,3),Wb(206,`
          Customize the Angular Rating component with your choice of SVG icons by assigning new values to the `),rs(207,`code`),Wb(208,`activeIcon`),nu(),Wb(209,` and `),rs(210,`code`),Wb(211,`icon`),nu(),Wb(212,` properties. This allows for a unique look tailored to the design language of your site or application.
        `),nu(),Wb(213,`
        `),rs(214,`app-docs-example`,15),Wb(215,`
          `),rs(216,`div`,4),Wb(217,`
            `),rs(218,`c-rating`,16),Wb(219,`
              `),Cg(220,z,3,0,`ng-template`,17),Wb(221,`
              `),Cg(222,N,3,0,`ng-template`,18),Wb(223,`
            `),nu(),Wb(224,`
          `),nu(),Wb(225,`
        `),nu(),Wb(226,`
        `),rs(227,`p`,3),Wb(228,`
          For a more dynamic experience, define different icons for each rating value, enhancing the visual feedback:
        `),nu(),Wb(229,`
        `),rs(230,`app-docs-example`,15),Wb(231,`
          `),rs(232,`div`,4),Wb(233,`
            `),rs(234,`c-rating`,19),Mm(`valueChange`,function(c){return Qb(l.value,c)||(l.value=c),c}),Wb(235,`
              `),XT(236,H,3,1,null,null,JT),XT(238,q,3,1,null,null,JT),nu(),Wb(240,`
          `),nu(),Wb(241,`
        `),nu(),Wb(242,`
      `),nu(),Wb(243,`
    `),nu(),Wb(244,`
  `),nu(),Wb(245,`
`),nu()),m&2&&(vD(23),Wg(`value`,3),vD(29),Wg(`value`,3),vD(29),Wg(`value`,3),vD(29),Wg(`tooltips`,!0)(`value`,3),vD(11),Wg(`tooltips`,rC(16,W))(`value`,3),vD(29),_m(`value`,l.value),vD(3),Tm(l.value()),vD(29),Wg(`value`,7),vD(4),Wg(`value`,1),vD(32),Wg(`value`,3),vD(16),_m(`value`,l.value),Wg(`activeIcon`,l.activeIcons)(`icon`,l.icons)(`tooltips`,l.tooltips),vD(2),eb(l.icons),vD(2),eb(l.activeIcons))},dependencies:[Po,Ro,JS,ux,c,I,vF,QF,Ge,qc],encapsulation:2})}};export{k as RatingsComponent};