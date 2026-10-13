import{Bt as Tm,Dt as Rw,F as Gm,It as TC,Ni as yT,U as Ib,Zn as hm,er as hu,gn as as,gt as Ow,in as ZD,ln as _C,nt as MC,vn as b,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{An as nr,Fn as or,Gn as rF,I as Ji,Kn as ro,Mt as _F,Nn as oF,Pn as oo,_n as ir,an as g0,b as EN,dn as hD,g as DF,gn as il,in as fF,l as AN,tr as uI,xt as WM,yn as jP,yr as zC,zt as ao}from"./main-CUVQCGKL.js";import{t as $}from"./chunk-CI2Igpkh.js";import"./chunk-BkZKyp9U.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-BDbsAxBz.js";function W(a,l){if(a&1&&(yT(0,`
              `),as(1,`li`,31),yT(2),lu(),yT(3,`
            `)),a&2){let r=l.$implicit;ZD(2),Gm(r)}}function q(a,l){if(a&1&&(yT(0,`
              `),as(1,`li`,36),yT(2),lu(),yT(3,`
            `)),a&2){let r=l.$implicit,o=l.$index;ZD(),pm(`active`,o===0),ZD(),Gm(r)}}function O(a,l){if(a&1&&(yT(0,`
              `),as(1,`button`,37),yT(2),lu(),yT(3,`
            `)),a&2){let r=l.$implicit,o=l.$index;ZD(),pm(`disabled`,o===0),ZD(),Gm(r)}}function J(a,l){if(a&1&&(yT(0,`
              `),as(1,`a`,38),yT(2),lu(),yT(3,`
            `)),a&2){let r=l.$implicit,o=l.$index,p=l.$count;ZD(),pm(`active`,o===0)(`disabled`,o===p-1),ZD(),Gm(r)}}function K(a,l){if(a&1&&(yT(0,`
              `),as(1,`li`,31),yT(2),lu(),yT(3,`
            `)),a&2){let r=l.$implicit;ZD(2),Gm(r)}}function Q(a,l){if(a&1&&(yT(0,`
            `),as(1,`ul`,39),yT(2,`
              `),as(3,`li`,31),yT(4,`Cras justo odio`),lu(),yT(5,`
              `),as(6,`li`,31),yT(7,`Dapibus ac facilisis in`),lu(),yT(8,`
              `),as(9,`li`,31),yT(10,`Morbi leo risus`),lu(),yT(11,`
            `),lu(),yT(12,`
          `)),a&2){let r=l.$implicit;ZD(),pm(`horizontal`,r)}}function X(a,l){if(a&1&&(yT(0,`
              `),as(1,`li`,40),yT(2),lu(),yT(3,`
            `)),a&2){let r=l.$implicit;ZD(),pm(`color`,r),ZD(),hu(`
                A simple `,r,` list group item
              `)}}function Y(a,l){if(a&1&&(yT(0,`
              `),as(1,`a`,41),yT(2),lu(),yT(3,`
            `)),a&2){let r=l.$implicit;ZD(),pm(`color`,r),ZD(),hu(`
                A simple `,r,` list group item
              `)}}function Z(a,l){if(a&1&&(yT(0,`
              `),as(1,`button`,42),yT(2),as(3,`c-badge`,43),yT(4),lu(),yT(5,`
              `),lu(),yT(6,`
            `)),a&2){let r=l.$implicit,o=l.$index,p=l.$count;ZD(),pm(`disabled`,o===p-1),ZD(),hu(`
                `,r,`
                `),ZD(),pm(`color`,o===p-1?`secondary`:`primary`),ZD(),Gm(o+1)}}var R=class a{constructor(){this.formBuilder=b(EN);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let r=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!r,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(r){return new(r||a)}}static{this.ɵcmp=Ib({type:a,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(r,o){r&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular List Group`),lu(),yT(12,` `),as(13,`small`),yT(14,`Basic example`),lu(),yT(15,`
      `),lu(),yT(16,`
      `),as(17,`c-card-body`),yT(18,`
        `),as(19,`p`,3),yT(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),lu(),yT(21,`
        `),as(22,`app-docs-example`,4),yT(23,`
          `),as(24,`ul`,5),yT(25,`
            `),_C(26,W,4,1,null,null,TC),lu(),yT(28,`
        `),lu(),yT(29,`
      `),lu(),yT(30,`
    `),lu(),yT(31,`
  `),lu(),yT(32,`
  `),as(33,`c-col`,0),yT(34,`
    `),as(35,`c-card`,2),yT(36,`
      `),as(37,`c-card-header`),yT(38,`
        `),as(39,`strong`),yT(40,`Angular List Group`),lu(),yT(41,` `),as(42,`small`),yT(43,`Active items`),lu(),yT(44,`
      `),lu(),yT(45,`
      `),as(46,`c-card-body`),yT(47,`
        `),as(48,`p`,3),yT(49,`
          Add `),as(50,`code`),yT(51,`active`),lu(),yT(52,` boolean property to a
          `),as(53,`code`),yT(54,`cListGroupItem`),lu(),yT(55,` to show the current active selection.
        `),lu(),yT(56,`
        `),as(57,`app-docs-example`,6),yT(58,`
          `),as(59,`ul`,5),yT(60,`
            `),_C(61,q,4,2,null,null,TC),lu(),yT(63,`
        `),lu(),yT(64,`
      `),lu(),yT(65,`
    `),lu(),yT(66,`
  `),lu(),yT(67,`
  `),as(68,`c-col`,0),yT(69,`
    `),as(70,`c-card`,2),yT(71,`
      `),as(72,`c-card-header`),yT(73,`
        `),as(74,`strong`),yT(75,`Angular List Group`),lu(),yT(76,` `),as(77,`small`),yT(78,`Disabled items`),lu(),yT(79,`
      `),lu(),yT(80,`
      `),as(81,`c-card-body`),yT(82,`
        `),as(83,`p`,3),yT(84,`
          Add `),as(85,`code`),yT(86,`disabled`),lu(),yT(87,` boolean property to a
          `),as(88,`code`),yT(89,`cListGroupItem`),lu(),yT(90,` to make it appear disabled.
        `),lu(),yT(91,`
        `),as(92,`app-docs-example`,7),yT(93,`
          `),as(94,`div`,5),yT(95,`
            `),_C(96,O,4,2,null,null,TC),lu(),yT(98,`
        `),lu(),yT(99,`
      `),lu(),yT(100,`
    `),lu(),yT(101,`
  `),lu(),yT(102,`
  `),as(103,`c-col`,0),yT(104,`
    `),as(105,`c-card`,2),yT(106,`
      `),as(107,`c-card-header`),yT(108,`
        `),as(109,`strong`),yT(110,`Angular List Group`),lu(),yT(111,` `),as(112,`small`),yT(113,`Links and buttons`),lu(),yT(114,`
      `),lu(),yT(115,`
      `),as(116,`c-card-body`),yT(117,`
        `),as(118,`p`,3),yT(119,`
          Use `),as(120,`code`),yT(121,`<a>`),lu(),yT(122,`s or `),as(123,`code`),yT(124,`<button>`),lu(),yT(125,`s to create
          `),as(126,`em`),yT(127,`actionable`),lu(),yT(128,` list group items with hover, disabled, and active
          states with `),as(129,`code`),yT(130,`a`),lu(),yT(131,` or `),as(132,`code`),yT(133,`button`),lu(),yT(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),as(135,`code`),yT(136,`<li>`),lu(),yT(137,` or
          `),as(138,`code`),yT(139,`<div>`),lu(),yT(140,`) don't provide a click or tap affordance.
        `),lu(),yT(141,`
        `),as(142,`app-docs-example`,8),yT(143,`
          `),as(144,`div`,5),yT(145,`
            `),_C(146,J,4,3,null,null,TC),lu(),yT(148,`
        `),lu(),yT(149,`
      `),lu(),yT(150,`
    `),lu(),yT(151,`
  `),lu(),yT(152,`
  `),as(153,`c-col`,0),yT(154,`
    `),as(155,`c-card`,2),yT(156,`
      `),as(157,`c-card-header`),yT(158,`
        `),as(159,`strong`),yT(160,`Angular List Group`),lu(),yT(161,` `),as(162,`small`),yT(163,`Flush`),lu(),yT(164,`
      `),lu(),yT(165,`
      `),as(166,`c-card-body`),yT(167,`
        `),as(168,`p`,3),yT(169,`
          Add `),as(170,`code`),yT(171,`flush`),lu(),yT(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),lu(),yT(173,`
        `),as(174,`app-docs-example`,9),yT(175,`
          `),as(176,`ul`,10),yT(177,`
            `),_C(178,K,4,1,null,null,TC),lu(),yT(180,`
        `),lu(),yT(181,`
      `),lu(),yT(182,`
    `),lu(),yT(183,`
  `),lu(),yT(184,`
  `),as(185,`c-col`,0),yT(186,`
    `),as(187,`c-card`,2),yT(188,`
      `),as(189,`c-card-header`),yT(190,`
        `),as(191,`strong`),yT(192,`Angular List Group`),lu(),yT(193,` `),as(194,`small`),yT(195,`Horizontal`),lu(),yT(196,`
      `),lu(),yT(197,`
      `),as(198,`c-card-body`),yT(199,`
        `),as(200,`p`,3),yT(201,`
          Add `),as(202,`code`),yT(203,`layout="horizontal"`),lu(),yT(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),hm(205,`br`),yT(206,`
          Alternatively, choose a responsive variant
          `),as(207,`code`),yT(208,`[horizontal]="sm | md | lg | xl | xxl"`),lu(),yT(209,`
          to make a list group horizontal starting at that breakpoint's
          `),as(210,`code`),yT(211,`min-width`),lu(),yT(212,`. `),hm(213,`br`),yT(214,`
          Currently `),as(215,`strong`),yT(216,`horizontal list groups cannot be combined with flush list groups.`),lu(),yT(217,`
        `),lu(),yT(218,`
        `),as(219,`app-docs-example`,9),yT(220,`
          `),_C(221,Q,13,1,null,null,TC),lu(),yT(223,`
      `),lu(),yT(224,`
    `),lu(),yT(225,`
  `),lu(),yT(226,`
  `),as(227,`c-col`,0),yT(228,`
    `),as(229,`c-card`,2),yT(230,`
      `),as(231,`c-card-header`),yT(232,`
        `),as(233,`strong`),yT(234,`Angular List Group`),lu(),yT(235,` `),as(236,`small`),yT(237,`Contextual classes`),lu(),yT(238,`
      `),lu(),yT(239,`
      `),as(240,`c-card-body`),yT(241,`
        `),as(242,`p`,3),yT(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),lu(),yT(244,`
        `),as(245,`app-docs-example`,11),yT(246,`
          `),as(247,`ul`,12),yT(248,`
            `),_C(249,X,4,2,null,null,TC),lu(),yT(251,`
        `),lu(),yT(252,`
        `),as(253,`p`,13),yT(254,`
          Contextual classes also work with `),as(255,`code`),yT(256,`<a>`),lu(),yT(257,` or
          `),as(258,`code`),yT(259,`<button>`),lu(),yT(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),as(261,`code`),yT(262,`active`),lu(),yT(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),lu(),yT(264,`
        `),as(265,`app-docs-example`,11),yT(266,`
          `),as(267,`div`,5),yT(268,`
            `),_C(269,Y,4,2,null,null,TC),lu(),yT(271,`
        `),lu(),yT(272,`
      `),lu(),yT(273,`
    `),lu(),yT(274,`
  `),lu(),yT(275,`
  `),as(276,`c-col`,0),yT(277,`
    `),as(278,`c-card`,2),yT(279,`
      `),as(280,`c-card-header`),yT(281,`
        `),as(282,`strong`),yT(283,`Angular List Group`),lu(),yT(284,` `),as(285,`small`),yT(286,`With badges`),lu(),yT(287,`
      `),lu(),yT(288,`
      `),as(289,`c-card-body`),yT(290,`
        `),as(291,`p`,3),yT(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),lu(),yT(293,`
        `),as(294,`app-docs-example`,14),yT(295,`
          `),as(296,`div`,5),yT(297,`
            `),_C(298,Z,7,4,null,null,TC),lu(),yT(300,`
        `),lu(),yT(301,`
      `),lu(),yT(302,`
    `),lu(),yT(303,`
  `),lu(),yT(304,`
  `),as(305,`c-col`,0),yT(306,`
    `),as(307,`c-card`,2),yT(308,`
      `),as(309,`c-card-header`),yT(310,`
        `),as(311,`strong`),yT(312,`Angular List Group`),lu(),yT(313,` `),as(314,`small`),yT(315,`Custom content`),lu(),yT(316,`
      `),lu(),yT(317,`
      `),as(318,`c-card-body`),yT(319,`
        `),as(320,`p`,3),yT(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),as(322,`a`,15),yT(323,`flexbox utilities`),lu(),yT(324,`.
        `),lu(),yT(325,`
        `),as(326,`app-docs-example`,16),yT(327,`
          `),as(328,`div`,5),yT(329,`
            `),as(330,`a`,17),yT(331,`
              `),as(332,`div`,18),yT(333,`
                `),as(334,`h5`,19),yT(335,`List group item heading`),lu(),yT(336,`
                `),as(337,`small`),yT(338,`3 days ago`),lu(),yT(339,`
              `),lu(),yT(340,`
              `),as(341,`p`,19),yT(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),lu(),yT(343,`
              `),as(344,`small`),yT(345,`Donec id elit non mi porta.`),lu(),yT(346,`
            `),lu(),yT(347,`
            `),as(348,`a`,20),yT(349,`
              `),as(350,`div`,18),yT(351,`
                `),as(352,`h5`,19),yT(353,`List group item heading`),lu(),yT(354,`
                `),as(355,`small`,21),yT(356,`3 days ago`),lu(),yT(357,`
              `),lu(),yT(358,`
              `),as(359,`p`,19),yT(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),lu(),yT(361,`
              `),as(362,`small`,21),yT(363,`Donec id elit non mi porta.`),lu(),yT(364,`
            `),lu(),yT(365,`
            `),as(366,`a`,20),yT(367,`
              `),as(368,`div`,18),yT(369,`
                `),as(370,`h5`,19),yT(371,`List group item heading`),lu(),yT(372,`
                `),as(373,`small`,21),yT(374,`3 days ago`),lu(),yT(375,`
              `),lu(),yT(376,`
              `),as(377,`p`,19),yT(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),lu(),yT(379,`
              `),as(380,`small`,21),yT(381,`Donec id elit non mi porta.`),lu(),yT(382,`
            `),lu(),yT(383,`
          `),lu(),yT(384,`
        `),lu(),yT(385,`
      `),lu(),yT(386,`
    `),lu(),yT(387,`
  `),lu(),yT(388,`
  `),as(389,`c-col`,0),yT(390,`
    `),as(391,`c-card`,2),yT(392,`
      `),as(393,`c-card-header`),yT(394,`
        `),as(395,`strong`),yT(396,`Angular List Group`),lu(),yT(397,` `),as(398,`small`),yT(399,`Checkboxes and radios`),lu(),yT(400,`
      `),lu(),yT(401,`
      `),as(402,`c-card-body`),yT(403,`
        `),as(404,`p`,3),yT(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),lu(),yT(406,`
        `),as(407,`app-docs-example`,22),yT(408,`
          `),as(409,`form`,23),Tm(`ngSubmit`,function(){return o.logValue()}),yT(410,`
            `),as(411,`ul`,24),yT(412,`
              `),as(413,`button`,25),Tm(`click`,function(){return o.setValue(`one`)}),yT(414,`
                `),as(415,`c-form-check`),yT(416,`
                  `),as(417,`input`,26),Rw(),lu(),yT(418,`
                  `),as(419,`label`,27),yT(420,`Cras justo odio`),lu(),yT(421,`
                `),lu(),yT(422,`
              `),lu(),yT(423,`
              `),as(424,`label`,28),yT(425,`
                `),as(426,`c-form-check`),yT(427,`
                  `),as(428,`input`,29),Rw(),lu(),yT(429,`
                  `),as(430,`span`,30),yT(431,`Dapibus ac facilisis in`),lu(),yT(432,`
                `),lu(),yT(433,`
              `),lu(),yT(434,`
              `),as(435,`li`,31),yT(436,`
                `),as(437,`c-form-check`),yT(438,`
                  `),as(439,`input`,32),Rw(),lu(),yT(440,`
                  `),as(441,`label`,27),yT(442,`Morbi leo risus`),lu(),yT(443,`
                `),lu(),yT(444,`
              `),lu(),yT(445,`
              `),as(446,`li`,31),yT(447,`
                `),as(448,`c-form-check`),yT(449,`
                  `),as(450,`input`,33),Rw(),lu(),yT(451,`
                  `),as(452,`label`,27),yT(453,`Orta ac consectetur ac`),lu(),yT(454,`
                `),lu(),yT(455,`
              `),lu(),yT(456,`
              `),as(457,`li`,31),yT(458,`
                `),as(459,`c-form-check`),yT(460,`
                  `),as(461,`input`,34),Rw(),lu(),yT(462,`
                  `),as(463,`label`,27),yT(464,`Vestibulum at eros`),lu(),yT(465,`
                `),lu(),yT(466,`
              `),lu(),yT(467,`
            `),lu(),yT(468,`
            `),as(469,`button`,35),yT(470,`Submit`),lu(),yT(471,`
          `),lu(),yT(472,`
        `),lu(),yT(473,`
      `),lu(),yT(474,`
    `),lu(),yT(475,`
  `),lu(),yT(476,`
`),lu()),r&2&&(ZD(26),MC(o.sampleList),ZD(35),MC(o.sampleList),ZD(35),MC(o.sampleList),ZD(50),MC(o.sampleList),ZD(32),MC(o.sampleList),ZD(43),MC(o.breakpoints),ZD(28),MC(o.colors),ZD(20),MC(o.colors),ZD(29),MC(o.sampleList),ZD(32),pm(`active`,!0),ZD(79),pm(`formGroup`,o.checkBoxes),ZD(2),pm(`flush`,!0),ZD(6),Ow(),ZD(11),Ow(),ZD(11),Ow(),ZD(11),Ow(),ZD(11),Ow())},dependencies:[fF,uI,oo,WM,ro,$,_F,DF,jP,or,AN,hD,Ji,il,nr,ir,oF,rF,g0,zC,ao,c],encapsulation:2})}};export{R as ListGroupsComponent};