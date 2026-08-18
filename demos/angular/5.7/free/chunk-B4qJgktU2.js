import{An as yT,Cn as vu,En as wv,Fn as AE,Ft as fT,G as PI,Gt as iT,H as Nv,Hn as Ch,Kn as ET,Li as pl,Q as Ri,Qn as IT,Tt as bT,Wn as DT,Xr as aw,Zr as b,an as nT,cr as ME,di as eg,fa as yD,kn as xi,la as wh,ni as cl,q as Pv,sn as oT,vr as Oi,wi as kh,zn as BI}from"./main-WBU6EW3E.js";import{_ as qn,a as Mt,f as gn,m as jn,o as Tn,p as hn,r as Hn,x as zn}from"./chunk-CeGKAmi8.js";import{t as E}from"./chunk-D1ovLIZZ.js";import{t as c}from"./chunk-BNlMJs6j.js";function W(r,l){if(r&1&&(aw(0,`
              `),Oi(1,`li`,31),aw(2),cl(),aw(3,`
            `)),r&2){let a=l.$implicit;BI(2),eg(a)}}function q(r,l){if(r&1&&(aw(0,`
              `),Oi(1,`li`,36),aw(2),cl(),aw(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;BI(),wh(`active`,o===0),BI(),eg(a)}}function O(r,l){if(r&1&&(aw(0,`
              `),Oi(1,`button`,37),aw(2),cl(),aw(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;BI(),wh(`disabled`,o===0),BI(),eg(a)}}function J(r,l){if(r&1&&(aw(0,`
              `),Oi(1,`a`,38),aw(2),cl(),aw(3,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;BI(),wh(`active`,o===0)(`disabled`,o===u-1),BI(),eg(a)}}function K(r,l){if(r&1&&(aw(0,`
              `),Oi(1,`li`,31),aw(2),cl(),aw(3,`
            `)),r&2){let a=l.$implicit;BI(2),eg(a)}}function Q(r,l){if(r&1&&(aw(0,`
            `),Oi(1,`ul`,39),aw(2,`
              `),Oi(3,`li`,31),aw(4,`Cras justo odio`),cl(),aw(5,`
              `),Oi(6,`li`,31),aw(7,`Dapibus ac facilisis in`),cl(),aw(8,`
              `),Oi(9,`li`,31),aw(10,`Morbi leo risus`),cl(),aw(11,`
            `),cl(),aw(12,`
          `)),r&2){let a=l.$implicit;BI(),wh(`horizontal`,a)}}function X(r,l){if(r&1&&(aw(0,`
              `),Oi(1,`li`,40),aw(2),cl(),aw(3,`
            `)),r&2){let a=l.$implicit;BI(),wh(`color`,a),BI(),pl(`
                A simple `,a,` list group item
              `)}}function Y(r,l){if(r&1&&(aw(0,`
              `),Oi(1,`a`,41),aw(2),cl(),aw(3,`
            `)),r&2){let a=l.$implicit;BI(),wh(`color`,a),BI(),pl(`
                A simple `,a,` list group item
              `)}}function Z(r,l){if(r&1&&(aw(0,`
              `),Oi(1,`button`,42),aw(2),Oi(3,`c-badge`,43),aw(4),cl(),aw(5,`
              `),cl(),aw(6,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;BI(),wh(`disabled`,o===u-1),BI(),pl(`
                `,a,`
                `),BI(),wh(`color`,o===u-1?`secondary`:`primary`),BI(),eg(o+1)}}var R=class r{constructor(){this.formBuilder=b(qn);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let a=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(a){return new(a||r)}}static{this.ɵcmp=yD({type:r,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(a,o){a&1&&(Oi(0,`c-row`),aw(1,`
  `),Oi(2,`c-col`,0),aw(3,`
    `),Ch(4,`app-docs-components`,1),aw(5,`
    `),Oi(6,`c-card`,2),aw(7,`
      `),Oi(8,`c-card-header`),aw(9,`
        `),Oi(10,`strong`),aw(11,`Angular List Group`),cl(),aw(12,` `),Oi(13,`small`),aw(14,`Basic example`),cl(),aw(15,`
      `),cl(),aw(16,`
      `),Oi(17,`c-card-body`),aw(18,`
        `),Oi(19,`p`,3),aw(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),cl(),aw(21,`
        `),Oi(22,`app-docs-example`,4),aw(23,`
          `),Oi(24,`ul`,5),aw(25,`
            `),ET(26,W,4,1,null,null,IT),cl(),aw(28,`
        `),cl(),aw(29,`
      `),cl(),aw(30,`
    `),cl(),aw(31,`
  `),cl(),aw(32,`
  `),Oi(33,`c-col`,0),aw(34,`
    `),Oi(35,`c-card`,2),aw(36,`
      `),Oi(37,`c-card-header`),aw(38,`
        `),Oi(39,`strong`),aw(40,`Angular List Group`),cl(),aw(41,` `),Oi(42,`small`),aw(43,`Active items`),cl(),aw(44,`
      `),cl(),aw(45,`
      `),Oi(46,`c-card-body`),aw(47,`
        `),Oi(48,`p`,3),aw(49,`
          Add `),Oi(50,`code`),aw(51,`active`),cl(),aw(52,` boolean property to a
          `),Oi(53,`code`),aw(54,`cListGroupItem`),cl(),aw(55,` to show the current active selection.
        `),cl(),aw(56,`
        `),Oi(57,`app-docs-example`,6),aw(58,`
          `),Oi(59,`ul`,5),aw(60,`
            `),ET(61,q,4,2,null,null,IT),cl(),aw(63,`
        `),cl(),aw(64,`
      `),cl(),aw(65,`
    `),cl(),aw(66,`
  `),cl(),aw(67,`
  `),Oi(68,`c-col`,0),aw(69,`
    `),Oi(70,`c-card`,2),aw(71,`
      `),Oi(72,`c-card-header`),aw(73,`
        `),Oi(74,`strong`),aw(75,`Angular List Group`),cl(),aw(76,` `),Oi(77,`small`),aw(78,`Disabled items`),cl(),aw(79,`
      `),cl(),aw(80,`
      `),Oi(81,`c-card-body`),aw(82,`
        `),Oi(83,`p`,3),aw(84,`
          Add `),Oi(85,`code`),aw(86,`disabled`),cl(),aw(87,` boolean property to a
          `),Oi(88,`code`),aw(89,`cListGroupItem`),cl(),aw(90,` to make it appear disabled.
        `),cl(),aw(91,`
        `),Oi(92,`app-docs-example`,7),aw(93,`
          `),Oi(94,`div`,5),aw(95,`
            `),ET(96,O,4,2,null,null,IT),cl(),aw(98,`
        `),cl(),aw(99,`
      `),cl(),aw(100,`
    `),cl(),aw(101,`
  `),cl(),aw(102,`
  `),Oi(103,`c-col`,0),aw(104,`
    `),Oi(105,`c-card`,2),aw(106,`
      `),Oi(107,`c-card-header`),aw(108,`
        `),Oi(109,`strong`),aw(110,`Angular List Group`),cl(),aw(111,` `),Oi(112,`small`),aw(113,`Links and buttons`),cl(),aw(114,`
      `),cl(),aw(115,`
      `),Oi(116,`c-card-body`),aw(117,`
        `),Oi(118,`p`,3),aw(119,`
          Use `),Oi(120,`code`),aw(121,`<a>`),cl(),aw(122,`s or `),Oi(123,`code`),aw(124,`<button>`),cl(),aw(125,`s to create
          `),Oi(126,`em`),aw(127,`actionable`),cl(),aw(128,` list group items with hover, disabled, and active
          states with `),Oi(129,`code`),aw(130,`a`),cl(),aw(131,` or `),Oi(132,`code`),aw(133,`button`),cl(),aw(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),Oi(135,`code`),aw(136,`<li>`),cl(),aw(137,` or
          `),Oi(138,`code`),aw(139,`<div>`),cl(),aw(140,`) don't provide a click or tap affordance.
        `),cl(),aw(141,`
        `),Oi(142,`app-docs-example`,8),aw(143,`
          `),Oi(144,`div`,5),aw(145,`
            `),ET(146,J,4,3,null,null,IT),cl(),aw(148,`
        `),cl(),aw(149,`
      `),cl(),aw(150,`
    `),cl(),aw(151,`
  `),cl(),aw(152,`
  `),Oi(153,`c-col`,0),aw(154,`
    `),Oi(155,`c-card`,2),aw(156,`
      `),Oi(157,`c-card-header`),aw(158,`
        `),Oi(159,`strong`),aw(160,`Angular List Group`),cl(),aw(161,` `),Oi(162,`small`),aw(163,`Flush`),cl(),aw(164,`
      `),cl(),aw(165,`
      `),Oi(166,`c-card-body`),aw(167,`
        `),Oi(168,`p`,3),aw(169,`
          Add `),Oi(170,`code`),aw(171,`flush`),cl(),aw(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),cl(),aw(173,`
        `),Oi(174,`app-docs-example`,9),aw(175,`
          `),Oi(176,`ul`,10),aw(177,`
            `),ET(178,K,4,1,null,null,IT),cl(),aw(180,`
        `),cl(),aw(181,`
      `),cl(),aw(182,`
    `),cl(),aw(183,`
  `),cl(),aw(184,`
  `),Oi(185,`c-col`,0),aw(186,`
    `),Oi(187,`c-card`,2),aw(188,`
      `),Oi(189,`c-card-header`),aw(190,`
        `),Oi(191,`strong`),aw(192,`Angular List Group`),cl(),aw(193,` `),Oi(194,`small`),aw(195,`Horizontal`),cl(),aw(196,`
      `),cl(),aw(197,`
      `),Oi(198,`c-card-body`),aw(199,`
        `),Oi(200,`p`,3),aw(201,`
          Add `),Oi(202,`code`),aw(203,`layout="horizontal"`),cl(),aw(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),Ch(205,`br`),aw(206,`
          Alternatively, choose a responsive variant
          `),Oi(207,`code`),aw(208,`[horizontal]="sm | md | lg | xl | xxl"`),cl(),aw(209,`
          to make a list group horizontal starting at that breakpoint's
          `),Oi(210,`code`),aw(211,`min-width`),cl(),aw(212,`. `),Ch(213,`br`),aw(214,`
          Currently `),Oi(215,`strong`),aw(216,`horizontal list groups cannot be combined with flush list groups.`),cl(),aw(217,`
        `),cl(),aw(218,`
        `),Oi(219,`app-docs-example`,9),aw(220,`
          `),ET(221,Q,13,1,null,null,IT),cl(),aw(223,`
      `),cl(),aw(224,`
    `),cl(),aw(225,`
  `),cl(),aw(226,`
  `),Oi(227,`c-col`,0),aw(228,`
    `),Oi(229,`c-card`,2),aw(230,`
      `),Oi(231,`c-card-header`),aw(232,`
        `),Oi(233,`strong`),aw(234,`Angular List Group`),cl(),aw(235,` `),Oi(236,`small`),aw(237,`Contextual classes`),cl(),aw(238,`
      `),cl(),aw(239,`
      `),Oi(240,`c-card-body`),aw(241,`
        `),Oi(242,`p`,3),aw(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),cl(),aw(244,`
        `),Oi(245,`app-docs-example`,11),aw(246,`
          `),Oi(247,`ul`,12),aw(248,`
            `),ET(249,X,4,2,null,null,IT),cl(),aw(251,`
        `),cl(),aw(252,`
        `),Oi(253,`p`,13),aw(254,`
          Contextual classes also work with `),Oi(255,`code`),aw(256,`<a>`),cl(),aw(257,` or
          `),Oi(258,`code`),aw(259,`<button>`),cl(),aw(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),Oi(261,`code`),aw(262,`active`),cl(),aw(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),cl(),aw(264,`
        `),Oi(265,`app-docs-example`,11),aw(266,`
          `),Oi(267,`div`,5),aw(268,`
            `),ET(269,Y,4,2,null,null,IT),cl(),aw(271,`
        `),cl(),aw(272,`
      `),cl(),aw(273,`
    `),cl(),aw(274,`
  `),cl(),aw(275,`
  `),Oi(276,`c-col`,0),aw(277,`
    `),Oi(278,`c-card`,2),aw(279,`
      `),Oi(280,`c-card-header`),aw(281,`
        `),Oi(282,`strong`),aw(283,`Angular List Group`),cl(),aw(284,` `),Oi(285,`small`),aw(286,`With badges`),cl(),aw(287,`
      `),cl(),aw(288,`
      `),Oi(289,`c-card-body`),aw(290,`
        `),Oi(291,`p`,3),aw(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),cl(),aw(293,`
        `),Oi(294,`app-docs-example`,14),aw(295,`
          `),Oi(296,`div`,5),aw(297,`
            `),ET(298,Z,7,4,null,null,IT),cl(),aw(300,`
        `),cl(),aw(301,`
      `),cl(),aw(302,`
    `),cl(),aw(303,`
  `),cl(),aw(304,`
  `),Oi(305,`c-col`,0),aw(306,`
    `),Oi(307,`c-card`,2),aw(308,`
      `),Oi(309,`c-card-header`),aw(310,`
        `),Oi(311,`strong`),aw(312,`Angular List Group`),cl(),aw(313,` `),Oi(314,`small`),aw(315,`Custom content`),cl(),aw(316,`
      `),cl(),aw(317,`
      `),Oi(318,`c-card-body`),aw(319,`
        `),Oi(320,`p`,3),aw(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),Oi(322,`a`,15),aw(323,`flexbox utilities`),cl(),aw(324,`.
        `),cl(),aw(325,`
        `),Oi(326,`app-docs-example`,16),aw(327,`
          `),Oi(328,`div`,5),aw(329,`
            `),Oi(330,`a`,17),aw(331,`
              `),Oi(332,`div`,18),aw(333,`
                `),Oi(334,`h5`,19),aw(335,`List group item heading`),cl(),aw(336,`
                `),Oi(337,`small`),aw(338,`3 days ago`),cl(),aw(339,`
              `),cl(),aw(340,`
              `),Oi(341,`p`,19),aw(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),cl(),aw(343,`
              `),Oi(344,`small`),aw(345,`Donec id elit non mi porta.`),cl(),aw(346,`
            `),cl(),aw(347,`
            `),Oi(348,`a`,20),aw(349,`
              `),Oi(350,`div`,18),aw(351,`
                `),Oi(352,`h5`,19),aw(353,`List group item heading`),cl(),aw(354,`
                `),Oi(355,`small`,21),aw(356,`3 days ago`),cl(),aw(357,`
              `),cl(),aw(358,`
              `),Oi(359,`p`,19),aw(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),cl(),aw(361,`
              `),Oi(362,`small`,21),aw(363,`Donec id elit non mi porta.`),cl(),aw(364,`
            `),cl(),aw(365,`
            `),Oi(366,`a`,20),aw(367,`
              `),Oi(368,`div`,18),aw(369,`
                `),Oi(370,`h5`,19),aw(371,`List group item heading`),cl(),aw(372,`
                `),Oi(373,`small`,21),aw(374,`3 days ago`),cl(),aw(375,`
              `),cl(),aw(376,`
              `),Oi(377,`p`,19),aw(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),cl(),aw(379,`
              `),Oi(380,`small`,21),aw(381,`Donec id elit non mi porta.`),cl(),aw(382,`
            `),cl(),aw(383,`
          `),cl(),aw(384,`
        `),cl(),aw(385,`
      `),cl(),aw(386,`
    `),cl(),aw(387,`
  `),cl(),aw(388,`
  `),Oi(389,`c-col`,0),aw(390,`
    `),Oi(391,`c-card`,2),aw(392,`
      `),Oi(393,`c-card-header`),aw(394,`
        `),Oi(395,`strong`),aw(396,`Angular List Group`),cl(),aw(397,` `),Oi(398,`small`),aw(399,`Checkboxes and radios`),cl(),aw(400,`
      `),cl(),aw(401,`
      `),Oi(402,`c-card-body`),aw(403,`
        `),Oi(404,`p`,3),aw(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),cl(),aw(406,`
        `),Oi(407,`app-docs-example`,22),aw(408,`
          `),Oi(409,`form`,23),kh(`ngSubmit`,function(){return o.logValue()}),aw(410,`
            `),Oi(411,`ul`,24),aw(412,`
              `),Oi(413,`button`,25),kh(`click`,function(){return o.setValue(`one`)}),aw(414,`
                `),Oi(415,`c-form-check`),aw(416,`
                  `),Ch(417,`input`,26),ME(),aw(418,`
                  `),Oi(419,`label`,27),aw(420,`Cras justo odio`),cl(),aw(421,`
                `),cl(),aw(422,`
              `),cl(),aw(423,`
              `),Oi(424,`label`,28),aw(425,`
                `),Oi(426,`c-form-check`),aw(427,`
                  `),Ch(428,`input`,29),ME(),aw(429,`
                  `),Oi(430,`span`,30),aw(431,`Dapibus ac facilisis in`),cl(),aw(432,`
                `),cl(),aw(433,`
              `),cl(),aw(434,`
              `),Oi(435,`li`,31),aw(436,`
                `),Oi(437,`c-form-check`),aw(438,`
                  `),Ch(439,`input`,32),ME(),aw(440,`
                  `),Oi(441,`label`,27),aw(442,`Morbi leo risus`),cl(),aw(443,`
                `),cl(),aw(444,`
              `),cl(),aw(445,`
              `),Oi(446,`li`,31),aw(447,`
                `),Oi(448,`c-form-check`),aw(449,`
                  `),Ch(450,`input`,33),ME(),aw(451,`
                  `),Oi(452,`label`,27),aw(453,`Orta ac consectetur ac`),cl(),aw(454,`
                `),cl(),aw(455,`
              `),cl(),aw(456,`
              `),Oi(457,`li`,31),aw(458,`
                `),Oi(459,`c-form-check`),aw(460,`
                  `),Ch(461,`input`,34),ME(),aw(462,`
                  `),Oi(463,`label`,27),aw(464,`Vestibulum at eros`),cl(),aw(465,`
                `),cl(),aw(466,`
              `),cl(),aw(467,`
            `),cl(),aw(468,`
            `),Oi(469,`button`,35),aw(470,`Submit`),cl(),aw(471,`
          `),cl(),aw(472,`
        `),cl(),aw(473,`
      `),cl(),aw(474,`
    `),cl(),aw(475,`
  `),cl(),aw(476,`
`),cl()),a&2&&(BI(26),DT(o.sampleList),BI(35),DT(o.sampleList),BI(35),DT(o.sampleList),BI(50),DT(o.sampleList),BI(32),DT(o.sampleList),BI(43),DT(o.breakpoints),BI(28),DT(o.colors),BI(20),DT(o.colors),BI(29),DT(o.sampleList),BI(32),wh(`active`,!0),BI(79),wh(`formGroup`,o.checkBoxes),BI(2),wh(`flush`,!0),BI(6),AE(),BI(11),AE(),BI(11),AE(),BI(11),AE(),BI(11),AE())},dependencies:[fT,Pv,xi,Nv,Ri,E,bT,yT,PI,zn,Hn,Mt,Tn,jn,gn,hn,nT,iT,oT,vu,wv,c],encapsulation:2})}};export{R as ListGroupsComponent};