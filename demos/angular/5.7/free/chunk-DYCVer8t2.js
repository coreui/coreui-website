import{$r as dl,Fi as sl,Ft as fT,G as PI,H as Nv,Hn as Dh,Hr as b,On as xi,Q as Ri,Sn as vu,Tn as wv,Tt as bT,Ur as bE,Wi as vT,Wt as iT,Zn as Jh,di as hD,fr as Oi,in as nT,ki as ow,kn as yT$1,on as oT,or as NE,pi as jI,q as Pv,ra as yT,xi as mT,xr as Th,zn as Ah}from"./main-5IL4V6AK.js";import{_ as qn,a as Mt,f as gn,m as jn,o as Tn,p as hn,r as Hn,x as zn}from"./chunk-DSE1fuZc.js";import{i as w}from"./chunk-DoEIP2nP.js";import{t as c}from"./chunk-bmXPd0og.js";function W(r,l){if(r&1&&(ow(0,`
              `),Oi(1,`li`,31),ow(2),sl(),ow(3,`
            `)),r&2){let a=l.$implicit;jI(2),Jh(a)}}function q(r,l){if(r&1&&(ow(0,`
              `),Oi(1,`li`,36),ow(2),sl(),ow(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;jI(),Dh(`active`,o===0),jI(),Jh(a)}}function O(r,l){if(r&1&&(ow(0,`
              `),Oi(1,`button`,37),ow(2),sl(),ow(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;jI(),Dh(`disabled`,o===0),jI(),Jh(a)}}function J(r,l){if(r&1&&(ow(0,`
              `),Oi(1,`a`,38),ow(2),sl(),ow(3,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;jI(),Dh(`active`,o===0)(`disabled`,o===u-1),jI(),Jh(a)}}function K(r,l){if(r&1&&(ow(0,`
              `),Oi(1,`li`,31),ow(2),sl(),ow(3,`
            `)),r&2){let a=l.$implicit;jI(2),Jh(a)}}function Q(r,l){if(r&1&&(ow(0,`
            `),Oi(1,`ul`,39),ow(2,`
              `),Oi(3,`li`,31),ow(4,`Cras justo odio`),sl(),ow(5,`
              `),Oi(6,`li`,31),ow(7,`Dapibus ac facilisis in`),sl(),ow(8,`
              `),Oi(9,`li`,31),ow(10,`Morbi leo risus`),sl(),ow(11,`
            `),sl(),ow(12,`
          `)),r&2){let a=l.$implicit;jI(),Dh(`horizontal`,a)}}function X(r,l){if(r&1&&(ow(0,`
              `),Oi(1,`li`,40),ow(2),sl(),ow(3,`
            `)),r&2){let a=l.$implicit;jI(),Dh(`color`,a),jI(),dl(`
                A simple `,a,` list group item
              `)}}function Y(r,l){if(r&1&&(ow(0,`
              `),Oi(1,`a`,41),ow(2),sl(),ow(3,`
            `)),r&2){let a=l.$implicit;jI(),Dh(`color`,a),jI(),dl(`
                A simple `,a,` list group item
              `)}}function Z(r,l){if(r&1&&(ow(0,`
              `),Oi(1,`button`,42),ow(2),Oi(3,`c-badge`,43),ow(4),sl(),ow(5,`
              `),sl(),ow(6,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;jI(),Dh(`disabled`,o===u-1),jI(),dl(`
                `,a,`
                `),jI(),Dh(`color`,o===u-1?`secondary`:`primary`),jI(),Jh(o+1)}}var R=class r{constructor(){this.formBuilder=b(qn);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let a=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(a){return new(a||r)}}static{this.ɵcmp=hD({type:r,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(a,o){a&1&&(Oi(0,`c-row`),ow(1,`
  `),Oi(2,`c-col`,0),ow(3,`
    `),Th(4,`app-docs-components`,1),ow(5,`
    `),Oi(6,`c-card`,2),ow(7,`
      `),Oi(8,`c-card-header`),ow(9,`
        `),Oi(10,`strong`),ow(11,`Angular List Group`),sl(),ow(12,` `),Oi(13,`small`),ow(14,`Basic example`),sl(),ow(15,`
      `),sl(),ow(16,`
      `),Oi(17,`c-card-body`),ow(18,`
        `),Oi(19,`p`,3),ow(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),sl(),ow(21,`
        `),Oi(22,`app-docs-example`,4),ow(23,`
          `),Oi(24,`ul`,5),ow(25,`
            `),yT(26,W,4,1,null,null,mT),sl(),ow(28,`
        `),sl(),ow(29,`
      `),sl(),ow(30,`
    `),sl(),ow(31,`
  `),sl(),ow(32,`
  `),Oi(33,`c-col`,0),ow(34,`
    `),Oi(35,`c-card`,2),ow(36,`
      `),Oi(37,`c-card-header`),ow(38,`
        `),Oi(39,`strong`),ow(40,`Angular List Group`),sl(),ow(41,` `),Oi(42,`small`),ow(43,`Active items`),sl(),ow(44,`
      `),sl(),ow(45,`
      `),Oi(46,`c-card-body`),ow(47,`
        `),Oi(48,`p`,3),ow(49,`
          Add `),Oi(50,`code`),ow(51,`active`),sl(),ow(52,` boolean property to a
          `),Oi(53,`code`),ow(54,`cListGroupItem`),sl(),ow(55,` to show the current active selection.
        `),sl(),ow(56,`
        `),Oi(57,`app-docs-example`,6),ow(58,`
          `),Oi(59,`ul`,5),ow(60,`
            `),yT(61,q,4,2,null,null,mT),sl(),ow(63,`
        `),sl(),ow(64,`
      `),sl(),ow(65,`
    `),sl(),ow(66,`
  `),sl(),ow(67,`
  `),Oi(68,`c-col`,0),ow(69,`
    `),Oi(70,`c-card`,2),ow(71,`
      `),Oi(72,`c-card-header`),ow(73,`
        `),Oi(74,`strong`),ow(75,`Angular List Group`),sl(),ow(76,` `),Oi(77,`small`),ow(78,`Disabled items`),sl(),ow(79,`
      `),sl(),ow(80,`
      `),Oi(81,`c-card-body`),ow(82,`
        `),Oi(83,`p`,3),ow(84,`
          Add `),Oi(85,`code`),ow(86,`disabled`),sl(),ow(87,` boolean property to a
          `),Oi(88,`code`),ow(89,`cListGroupItem`),sl(),ow(90,` to make it appear disabled.
        `),sl(),ow(91,`
        `),Oi(92,`app-docs-example`,7),ow(93,`
          `),Oi(94,`div`,5),ow(95,`
            `),yT(96,O,4,2,null,null,mT),sl(),ow(98,`
        `),sl(),ow(99,`
      `),sl(),ow(100,`
    `),sl(),ow(101,`
  `),sl(),ow(102,`
  `),Oi(103,`c-col`,0),ow(104,`
    `),Oi(105,`c-card`,2),ow(106,`
      `),Oi(107,`c-card-header`),ow(108,`
        `),Oi(109,`strong`),ow(110,`Angular List Group`),sl(),ow(111,` `),Oi(112,`small`),ow(113,`Links and buttons`),sl(),ow(114,`
      `),sl(),ow(115,`
      `),Oi(116,`c-card-body`),ow(117,`
        `),Oi(118,`p`,3),ow(119,`
          Use `),Oi(120,`code`),ow(121,`<a>`),sl(),ow(122,`s or `),Oi(123,`code`),ow(124,`<button>`),sl(),ow(125,`s to create
          `),Oi(126,`em`),ow(127,`actionable`),sl(),ow(128,` list group items with hover, disabled, and active
          states with `),Oi(129,`code`),ow(130,`a`),sl(),ow(131,` or `),Oi(132,`code`),ow(133,`button`),sl(),ow(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),Oi(135,`code`),ow(136,`<li>`),sl(),ow(137,` or
          `),Oi(138,`code`),ow(139,`<div>`),sl(),ow(140,`) don't provide a click or tap affordance.
        `),sl(),ow(141,`
        `),Oi(142,`app-docs-example`,8),ow(143,`
          `),Oi(144,`div`,5),ow(145,`
            `),yT(146,J,4,3,null,null,mT),sl(),ow(148,`
        `),sl(),ow(149,`
      `),sl(),ow(150,`
    `),sl(),ow(151,`
  `),sl(),ow(152,`
  `),Oi(153,`c-col`,0),ow(154,`
    `),Oi(155,`c-card`,2),ow(156,`
      `),Oi(157,`c-card-header`),ow(158,`
        `),Oi(159,`strong`),ow(160,`Angular List Group`),sl(),ow(161,` `),Oi(162,`small`),ow(163,`Flush`),sl(),ow(164,`
      `),sl(),ow(165,`
      `),Oi(166,`c-card-body`),ow(167,`
        `),Oi(168,`p`,3),ow(169,`
          Add `),Oi(170,`code`),ow(171,`flush`),sl(),ow(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),sl(),ow(173,`
        `),Oi(174,`app-docs-example`,9),ow(175,`
          `),Oi(176,`ul`,10),ow(177,`
            `),yT(178,K,4,1,null,null,mT),sl(),ow(180,`
        `),sl(),ow(181,`
      `),sl(),ow(182,`
    `),sl(),ow(183,`
  `),sl(),ow(184,`
  `),Oi(185,`c-col`,0),ow(186,`
    `),Oi(187,`c-card`,2),ow(188,`
      `),Oi(189,`c-card-header`),ow(190,`
        `),Oi(191,`strong`),ow(192,`Angular List Group`),sl(),ow(193,` `),Oi(194,`small`),ow(195,`Horizontal`),sl(),ow(196,`
      `),sl(),ow(197,`
      `),Oi(198,`c-card-body`),ow(199,`
        `),Oi(200,`p`,3),ow(201,`
          Add `),Oi(202,`code`),ow(203,`layout="horizontal"`),sl(),ow(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),Th(205,`br`),ow(206,`
          Alternatively, choose a responsive variant
          `),Oi(207,`code`),ow(208,`[horizontal]="sm | md | lg | xl | xxl"`),sl(),ow(209,`
          to make a list group horizontal starting at that breakpoint's
          `),Oi(210,`code`),ow(211,`min-width`),sl(),ow(212,`. `),Th(213,`br`),ow(214,`
          Currently `),Oi(215,`strong`),ow(216,`horizontal list groups cannot be combined with flush list groups.`),sl(),ow(217,`
        `),sl(),ow(218,`
        `),Oi(219,`app-docs-example`,9),ow(220,`
          `),yT(221,Q,13,1,null,null,mT),sl(),ow(223,`
      `),sl(),ow(224,`
    `),sl(),ow(225,`
  `),sl(),ow(226,`
  `),Oi(227,`c-col`,0),ow(228,`
    `),Oi(229,`c-card`,2),ow(230,`
      `),Oi(231,`c-card-header`),ow(232,`
        `),Oi(233,`strong`),ow(234,`Angular List Group`),sl(),ow(235,` `),Oi(236,`small`),ow(237,`Contextual classes`),sl(),ow(238,`
      `),sl(),ow(239,`
      `),Oi(240,`c-card-body`),ow(241,`
        `),Oi(242,`p`,3),ow(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),sl(),ow(244,`
        `),Oi(245,`app-docs-example`,11),ow(246,`
          `),Oi(247,`ul`,12),ow(248,`
            `),yT(249,X,4,2,null,null,mT),sl(),ow(251,`
        `),sl(),ow(252,`
        `),Oi(253,`p`,13),ow(254,`
          Contextual classes also work with `),Oi(255,`code`),ow(256,`<a>`),sl(),ow(257,` or
          `),Oi(258,`code`),ow(259,`<button>`),sl(),ow(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),Oi(261,`code`),ow(262,`active`),sl(),ow(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),sl(),ow(264,`
        `),Oi(265,`app-docs-example`,11),ow(266,`
          `),Oi(267,`div`,5),ow(268,`
            `),yT(269,Y,4,2,null,null,mT),sl(),ow(271,`
        `),sl(),ow(272,`
      `),sl(),ow(273,`
    `),sl(),ow(274,`
  `),sl(),ow(275,`
  `),Oi(276,`c-col`,0),ow(277,`
    `),Oi(278,`c-card`,2),ow(279,`
      `),Oi(280,`c-card-header`),ow(281,`
        `),Oi(282,`strong`),ow(283,`Angular List Group`),sl(),ow(284,` `),Oi(285,`small`),ow(286,`With badges`),sl(),ow(287,`
      `),sl(),ow(288,`
      `),Oi(289,`c-card-body`),ow(290,`
        `),Oi(291,`p`,3),ow(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),sl(),ow(293,`
        `),Oi(294,`app-docs-example`,14),ow(295,`
          `),Oi(296,`div`,5),ow(297,`
            `),yT(298,Z,7,4,null,null,mT),sl(),ow(300,`
        `),sl(),ow(301,`
      `),sl(),ow(302,`
    `),sl(),ow(303,`
  `),sl(),ow(304,`
  `),Oi(305,`c-col`,0),ow(306,`
    `),Oi(307,`c-card`,2),ow(308,`
      `),Oi(309,`c-card-header`),ow(310,`
        `),Oi(311,`strong`),ow(312,`Angular List Group`),sl(),ow(313,` `),Oi(314,`small`),ow(315,`Custom content`),sl(),ow(316,`
      `),sl(),ow(317,`
      `),Oi(318,`c-card-body`),ow(319,`
        `),Oi(320,`p`,3),ow(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),Oi(322,`a`,15),ow(323,`flexbox utilities`),sl(),ow(324,`.
        `),sl(),ow(325,`
        `),Oi(326,`app-docs-example`,16),ow(327,`
          `),Oi(328,`div`,5),ow(329,`
            `),Oi(330,`a`,17),ow(331,`
              `),Oi(332,`div`,18),ow(333,`
                `),Oi(334,`h5`,19),ow(335,`List group item heading`),sl(),ow(336,`
                `),Oi(337,`small`),ow(338,`3 days ago`),sl(),ow(339,`
              `),sl(),ow(340,`
              `),Oi(341,`p`,19),ow(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),sl(),ow(343,`
              `),Oi(344,`small`),ow(345,`Donec id elit non mi porta.`),sl(),ow(346,`
            `),sl(),ow(347,`
            `),Oi(348,`a`,20),ow(349,`
              `),Oi(350,`div`,18),ow(351,`
                `),Oi(352,`h5`,19),ow(353,`List group item heading`),sl(),ow(354,`
                `),Oi(355,`small`,21),ow(356,`3 days ago`),sl(),ow(357,`
              `),sl(),ow(358,`
              `),Oi(359,`p`,19),ow(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),sl(),ow(361,`
              `),Oi(362,`small`,21),ow(363,`Donec id elit non mi porta.`),sl(),ow(364,`
            `),sl(),ow(365,`
            `),Oi(366,`a`,20),ow(367,`
              `),Oi(368,`div`,18),ow(369,`
                `),Oi(370,`h5`,19),ow(371,`List group item heading`),sl(),ow(372,`
                `),Oi(373,`small`,21),ow(374,`3 days ago`),sl(),ow(375,`
              `),sl(),ow(376,`
              `),Oi(377,`p`,19),ow(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),sl(),ow(379,`
              `),Oi(380,`small`,21),ow(381,`Donec id elit non mi porta.`),sl(),ow(382,`
            `),sl(),ow(383,`
          `),sl(),ow(384,`
        `),sl(),ow(385,`
      `),sl(),ow(386,`
    `),sl(),ow(387,`
  `),sl(),ow(388,`
  `),Oi(389,`c-col`,0),ow(390,`
    `),Oi(391,`c-card`,2),ow(392,`
      `),Oi(393,`c-card-header`),ow(394,`
        `),Oi(395,`strong`),ow(396,`Angular List Group`),sl(),ow(397,` `),Oi(398,`small`),ow(399,`Checkboxes and radios`),sl(),ow(400,`
      `),sl(),ow(401,`
      `),Oi(402,`c-card-body`),ow(403,`
        `),Oi(404,`p`,3),ow(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),sl(),ow(406,`
        `),Oi(407,`app-docs-example`,22),ow(408,`
          `),Oi(409,`form`,23),Ah(`ngSubmit`,function(){return o.logValue()}),ow(410,`
            `),Oi(411,`ul`,24),ow(412,`
              `),Oi(413,`button`,25),Ah(`click`,function(){return o.setValue(`one`)}),ow(414,`
                `),Oi(415,`c-form-check`),ow(416,`
                  `),Th(417,`input`,26),bE(),ow(418,`
                  `),Oi(419,`label`,27),ow(420,`Cras justo odio`),sl(),ow(421,`
                `),sl(),ow(422,`
              `),sl(),ow(423,`
              `),Oi(424,`label`,28),ow(425,`
                `),Oi(426,`c-form-check`),ow(427,`
                  `),Th(428,`input`,29),bE(),ow(429,`
                  `),Oi(430,`span`,30),ow(431,`Dapibus ac facilisis in`),sl(),ow(432,`
                `),sl(),ow(433,`
              `),sl(),ow(434,`
              `),Oi(435,`li`,31),ow(436,`
                `),Oi(437,`c-form-check`),ow(438,`
                  `),Th(439,`input`,32),bE(),ow(440,`
                  `),Oi(441,`label`,27),ow(442,`Morbi leo risus`),sl(),ow(443,`
                `),sl(),ow(444,`
              `),sl(),ow(445,`
              `),Oi(446,`li`,31),ow(447,`
                `),Oi(448,`c-form-check`),ow(449,`
                  `),Th(450,`input`,33),bE(),ow(451,`
                  `),Oi(452,`label`,27),ow(453,`Orta ac consectetur ac`),sl(),ow(454,`
                `),sl(),ow(455,`
              `),sl(),ow(456,`
              `),Oi(457,`li`,31),ow(458,`
                `),Oi(459,`c-form-check`),ow(460,`
                  `),Th(461,`input`,34),bE(),ow(462,`
                  `),Oi(463,`label`,27),ow(464,`Vestibulum at eros`),sl(),ow(465,`
                `),sl(),ow(466,`
              `),sl(),ow(467,`
            `),sl(),ow(468,`
            `),Oi(469,`button`,35),ow(470,`Submit`),sl(),ow(471,`
          `),sl(),ow(472,`
        `),sl(),ow(473,`
      `),sl(),ow(474,`
    `),sl(),ow(475,`
  `),sl(),ow(476,`
`),sl()),a&2&&(jI(26),vT(o.sampleList),jI(35),vT(o.sampleList),jI(35),vT(o.sampleList),jI(50),vT(o.sampleList),jI(32),vT(o.sampleList),jI(43),vT(o.breakpoints),jI(28),vT(o.colors),jI(20),vT(o.colors),jI(29),vT(o.sampleList),jI(32),Dh(`active`,!0),jI(79),Dh(`formGroup`,o.checkBoxes),jI(2),Dh(`flush`,!0),jI(6),NE(),jI(11),NE(),jI(11),NE(),jI(11),NE(),jI(11),NE())},dependencies:[fT,Pv,xi,Nv,Ri,w,bT,yT$1,PI,zn,Hn,Mt,Tn,jn,gn,hn,nT,iT,oT,vu,wv,c],encapsulation:2})}};export{R as ListGroupsComponent};