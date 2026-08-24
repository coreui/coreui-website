import{Cn as s1,Gn as Ch,I as Li,Ir as TT,Jn as DT,Mn as wT,Mt as a1,Oi as ki,Or as Rh,Qr as _,Rn as zT,Sn as rb,Vi as pl,X as Pi,ai as cw,bn as qv,br as OI,ga as wh,gt as WT,ii as cl,la as vD,pi as eg,tr as IT,ut as Tu,va as xI,vn as qT,wn as t1,xt as Xv,zn as $E}from"./main-3ZNEFDGN.js";import{_ as on,a as Ln,d as Zn,h as gn,o as Mt,r as Gn,s as Tn,v as qn}from"./chunk-CzoTQkhg.js";import{t as E}from"./chunk-DyzPa03D.js";import{t as c}from"./chunk-Cq12Oo7T.js";function W(r,l){if(r&1&&(cw(0,`
              `),ki(1,`li`,31),cw(2),cl(),cw(3,`
            `)),r&2){let a=l.$implicit;$E(2),eg(a)}}function q(r,l){if(r&1&&(cw(0,`
              `),ki(1,`li`,36),cw(2),cl(),cw(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;$E(),wh(`active`,o===0),$E(),eg(a)}}function O(r,l){if(r&1&&(cw(0,`
              `),ki(1,`button`,37),cw(2),cl(),cw(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;$E(),wh(`disabled`,o===0),$E(),eg(a)}}function J(r,l){if(r&1&&(cw(0,`
              `),ki(1,`a`,38),cw(2),cl(),cw(3,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;$E(),wh(`active`,o===0)(`disabled`,o===u-1),$E(),eg(a)}}function K(r,l){if(r&1&&(cw(0,`
              `),ki(1,`li`,31),cw(2),cl(),cw(3,`
            `)),r&2){let a=l.$implicit;$E(2),eg(a)}}function Q(r,l){if(r&1&&(cw(0,`
            `),ki(1,`ul`,39),cw(2,`
              `),ki(3,`li`,31),cw(4,`Cras justo odio`),cl(),cw(5,`
              `),ki(6,`li`,31),cw(7,`Dapibus ac facilisis in`),cl(),cw(8,`
              `),ki(9,`li`,31),cw(10,`Morbi leo risus`),cl(),cw(11,`
            `),cl(),cw(12,`
          `)),r&2){let a=l.$implicit;$E(),wh(`horizontal`,a)}}function X(r,l){if(r&1&&(cw(0,`
              `),ki(1,`li`,40),cw(2),cl(),cw(3,`
            `)),r&2){let a=l.$implicit;$E(),wh(`color`,a),$E(),pl(`
                A simple `,a,` list group item
              `)}}function Y(r,l){if(r&1&&(cw(0,`
              `),ki(1,`a`,41),cw(2),cl(),cw(3,`
            `)),r&2){let a=l.$implicit;$E(),wh(`color`,a),$E(),pl(`
                A simple `,a,` list group item
              `)}}function Z(r,l){if(r&1&&(cw(0,`
              `),ki(1,`button`,42),cw(2),ki(3,`c-badge`,43),cw(4),cl(),cw(5,`
              `),cl(),cw(6,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;$E(),wh(`disabled`,o===u-1),$E(),pl(`
                `,a,`
                `),$E(),wh(`color`,o===u-1?`secondary`:`primary`),$E(),eg(o+1)}}var R=class r{constructor(){this.formBuilder=_(qn);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let a=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(a){return new(a||r)}}static{this.ɵcmp=vD({type:r,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(a,o){a&1&&(ki(0,`c-row`),cw(1,`
  `),ki(2,`c-col`,0),cw(3,`
    `),Ch(4,`app-docs-components`,1),cw(5,`
    `),ki(6,`c-card`,2),cw(7,`
      `),ki(8,`c-card-header`),cw(9,`
        `),ki(10,`strong`),cw(11,`Angular List Group`),cl(),cw(12,` `),ki(13,`small`),cw(14,`Basic example`),cl(),cw(15,`
      `),cl(),cw(16,`
      `),ki(17,`c-card-body`),cw(18,`
        `),ki(19,`p`,3),cw(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),cl(),cw(21,`
        `),ki(22,`app-docs-example`,4),cw(23,`
          `),ki(24,`ul`,5),cw(25,`
            `),DT(26,W,4,1,null,null,IT),cl(),cw(28,`
        `),cl(),cw(29,`
      `),cl(),cw(30,`
    `),cl(),cw(31,`
  `),cl(),cw(32,`
  `),ki(33,`c-col`,0),cw(34,`
    `),ki(35,`c-card`,2),cw(36,`
      `),ki(37,`c-card-header`),cw(38,`
        `),ki(39,`strong`),cw(40,`Angular List Group`),cl(),cw(41,` `),ki(42,`small`),cw(43,`Active items`),cl(),cw(44,`
      `),cl(),cw(45,`
      `),ki(46,`c-card-body`),cw(47,`
        `),ki(48,`p`,3),cw(49,`
          Add `),ki(50,`code`),cw(51,`active`),cl(),cw(52,` boolean property to a
          `),ki(53,`code`),cw(54,`cListGroupItem`),cl(),cw(55,` to show the current active selection.
        `),cl(),cw(56,`
        `),ki(57,`app-docs-example`,6),cw(58,`
          `),ki(59,`ul`,5),cw(60,`
            `),DT(61,q,4,2,null,null,IT),cl(),cw(63,`
        `),cl(),cw(64,`
      `),cl(),cw(65,`
    `),cl(),cw(66,`
  `),cl(),cw(67,`
  `),ki(68,`c-col`,0),cw(69,`
    `),ki(70,`c-card`,2),cw(71,`
      `),ki(72,`c-card-header`),cw(73,`
        `),ki(74,`strong`),cw(75,`Angular List Group`),cl(),cw(76,` `),ki(77,`small`),cw(78,`Disabled items`),cl(),cw(79,`
      `),cl(),cw(80,`
      `),ki(81,`c-card-body`),cw(82,`
        `),ki(83,`p`,3),cw(84,`
          Add `),ki(85,`code`),cw(86,`disabled`),cl(),cw(87,` boolean property to a
          `),ki(88,`code`),cw(89,`cListGroupItem`),cl(),cw(90,` to make it appear disabled.
        `),cl(),cw(91,`
        `),ki(92,`app-docs-example`,7),cw(93,`
          `),ki(94,`div`,5),cw(95,`
            `),DT(96,O,4,2,null,null,IT),cl(),cw(98,`
        `),cl(),cw(99,`
      `),cl(),cw(100,`
    `),cl(),cw(101,`
  `),cl(),cw(102,`
  `),ki(103,`c-col`,0),cw(104,`
    `),ki(105,`c-card`,2),cw(106,`
      `),ki(107,`c-card-header`),cw(108,`
        `),ki(109,`strong`),cw(110,`Angular List Group`),cl(),cw(111,` `),ki(112,`small`),cw(113,`Links and buttons`),cl(),cw(114,`
      `),cl(),cw(115,`
      `),ki(116,`c-card-body`),cw(117,`
        `),ki(118,`p`,3),cw(119,`
          Use `),ki(120,`code`),cw(121,`<a>`),cl(),cw(122,`s or `),ki(123,`code`),cw(124,`<button>`),cl(),cw(125,`s to create
          `),ki(126,`em`),cw(127,`actionable`),cl(),cw(128,` list group items with hover, disabled, and active
          states with `),ki(129,`code`),cw(130,`a`),cl(),cw(131,` or `),ki(132,`code`),cw(133,`button`),cl(),cw(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),ki(135,`code`),cw(136,`<li>`),cl(),cw(137,` or
          `),ki(138,`code`),cw(139,`<div>`),cl(),cw(140,`) don't provide a click or tap affordance.
        `),cl(),cw(141,`
        `),ki(142,`app-docs-example`,8),cw(143,`
          `),ki(144,`div`,5),cw(145,`
            `),DT(146,J,4,3,null,null,IT),cl(),cw(148,`
        `),cl(),cw(149,`
      `),cl(),cw(150,`
    `),cl(),cw(151,`
  `),cl(),cw(152,`
  `),ki(153,`c-col`,0),cw(154,`
    `),ki(155,`c-card`,2),cw(156,`
      `),ki(157,`c-card-header`),cw(158,`
        `),ki(159,`strong`),cw(160,`Angular List Group`),cl(),cw(161,` `),ki(162,`small`),cw(163,`Flush`),cl(),cw(164,`
      `),cl(),cw(165,`
      `),ki(166,`c-card-body`),cw(167,`
        `),ki(168,`p`,3),cw(169,`
          Add `),ki(170,`code`),cw(171,`flush`),cl(),cw(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),cl(),cw(173,`
        `),ki(174,`app-docs-example`,9),cw(175,`
          `),ki(176,`ul`,10),cw(177,`
            `),DT(178,K,4,1,null,null,IT),cl(),cw(180,`
        `),cl(),cw(181,`
      `),cl(),cw(182,`
    `),cl(),cw(183,`
  `),cl(),cw(184,`
  `),ki(185,`c-col`,0),cw(186,`
    `),ki(187,`c-card`,2),cw(188,`
      `),ki(189,`c-card-header`),cw(190,`
        `),ki(191,`strong`),cw(192,`Angular List Group`),cl(),cw(193,` `),ki(194,`small`),cw(195,`Horizontal`),cl(),cw(196,`
      `),cl(),cw(197,`
      `),ki(198,`c-card-body`),cw(199,`
        `),ki(200,`p`,3),cw(201,`
          Add `),ki(202,`code`),cw(203,`layout="horizontal"`),cl(),cw(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),Ch(205,`br`),cw(206,`
          Alternatively, choose a responsive variant
          `),ki(207,`code`),cw(208,`[horizontal]="sm | md | lg | xl | xxl"`),cl(),cw(209,`
          to make a list group horizontal starting at that breakpoint's
          `),ki(210,`code`),cw(211,`min-width`),cl(),cw(212,`. `),Ch(213,`br`),cw(214,`
          Currently `),ki(215,`strong`),cw(216,`horizontal list groups cannot be combined with flush list groups.`),cl(),cw(217,`
        `),cl(),cw(218,`
        `),ki(219,`app-docs-example`,9),cw(220,`
          `),DT(221,Q,13,1,null,null,IT),cl(),cw(223,`
      `),cl(),cw(224,`
    `),cl(),cw(225,`
  `),cl(),cw(226,`
  `),ki(227,`c-col`,0),cw(228,`
    `),ki(229,`c-card`,2),cw(230,`
      `),ki(231,`c-card-header`),cw(232,`
        `),ki(233,`strong`),cw(234,`Angular List Group`),cl(),cw(235,` `),ki(236,`small`),cw(237,`Contextual classes`),cl(),cw(238,`
      `),cl(),cw(239,`
      `),ki(240,`c-card-body`),cw(241,`
        `),ki(242,`p`,3),cw(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),cl(),cw(244,`
        `),ki(245,`app-docs-example`,11),cw(246,`
          `),ki(247,`ul`,12),cw(248,`
            `),DT(249,X,4,2,null,null,IT),cl(),cw(251,`
        `),cl(),cw(252,`
        `),ki(253,`p`,13),cw(254,`
          Contextual classes also work with `),ki(255,`code`),cw(256,`<a>`),cl(),cw(257,` or
          `),ki(258,`code`),cw(259,`<button>`),cl(),cw(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),ki(261,`code`),cw(262,`active`),cl(),cw(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),cl(),cw(264,`
        `),ki(265,`app-docs-example`,11),cw(266,`
          `),ki(267,`div`,5),cw(268,`
            `),DT(269,Y,4,2,null,null,IT),cl(),cw(271,`
        `),cl(),cw(272,`
      `),cl(),cw(273,`
    `),cl(),cw(274,`
  `),cl(),cw(275,`
  `),ki(276,`c-col`,0),cw(277,`
    `),ki(278,`c-card`,2),cw(279,`
      `),ki(280,`c-card-header`),cw(281,`
        `),ki(282,`strong`),cw(283,`Angular List Group`),cl(),cw(284,` `),ki(285,`small`),cw(286,`With badges`),cl(),cw(287,`
      `),cl(),cw(288,`
      `),ki(289,`c-card-body`),cw(290,`
        `),ki(291,`p`,3),cw(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),cl(),cw(293,`
        `),ki(294,`app-docs-example`,14),cw(295,`
          `),ki(296,`div`,5),cw(297,`
            `),DT(298,Z,7,4,null,null,IT),cl(),cw(300,`
        `),cl(),cw(301,`
      `),cl(),cw(302,`
    `),cl(),cw(303,`
  `),cl(),cw(304,`
  `),ki(305,`c-col`,0),cw(306,`
    `),ki(307,`c-card`,2),cw(308,`
      `),ki(309,`c-card-header`),cw(310,`
        `),ki(311,`strong`),cw(312,`Angular List Group`),cl(),cw(313,` `),ki(314,`small`),cw(315,`Custom content`),cl(),cw(316,`
      `),cl(),cw(317,`
      `),ki(318,`c-card-body`),cw(319,`
        `),ki(320,`p`,3),cw(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),ki(322,`a`,15),cw(323,`flexbox utilities`),cl(),cw(324,`.
        `),cl(),cw(325,`
        `),ki(326,`app-docs-example`,16),cw(327,`
          `),ki(328,`div`,5),cw(329,`
            `),ki(330,`a`,17),cw(331,`
              `),ki(332,`div`,18),cw(333,`
                `),ki(334,`h5`,19),cw(335,`List group item heading`),cl(),cw(336,`
                `),ki(337,`small`),cw(338,`3 days ago`),cl(),cw(339,`
              `),cl(),cw(340,`
              `),ki(341,`p`,19),cw(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),cl(),cw(343,`
              `),ki(344,`small`),cw(345,`Donec id elit non mi porta.`),cl(),cw(346,`
            `),cl(),cw(347,`
            `),ki(348,`a`,20),cw(349,`
              `),ki(350,`div`,18),cw(351,`
                `),ki(352,`h5`,19),cw(353,`List group item heading`),cl(),cw(354,`
                `),ki(355,`small`,21),cw(356,`3 days ago`),cl(),cw(357,`
              `),cl(),cw(358,`
              `),ki(359,`p`,19),cw(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),cl(),cw(361,`
              `),ki(362,`small`,21),cw(363,`Donec id elit non mi porta.`),cl(),cw(364,`
            `),cl(),cw(365,`
            `),ki(366,`a`,20),cw(367,`
              `),ki(368,`div`,18),cw(369,`
                `),ki(370,`h5`,19),cw(371,`List group item heading`),cl(),cw(372,`
                `),ki(373,`small`,21),cw(374,`3 days ago`),cl(),cw(375,`
              `),cl(),cw(376,`
              `),ki(377,`p`,19),cw(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),cl(),cw(379,`
              `),ki(380,`small`,21),cw(381,`Donec id elit non mi porta.`),cl(),cw(382,`
            `),cl(),cw(383,`
          `),cl(),cw(384,`
        `),cl(),cw(385,`
      `),cl(),cw(386,`
    `),cl(),cw(387,`
  `),cl(),cw(388,`
  `),ki(389,`c-col`,0),cw(390,`
    `),ki(391,`c-card`,2),cw(392,`
      `),ki(393,`c-card-header`),cw(394,`
        `),ki(395,`strong`),cw(396,`Angular List Group`),cl(),cw(397,` `),ki(398,`small`),cw(399,`Checkboxes and radios`),cl(),cw(400,`
      `),cl(),cw(401,`
      `),ki(402,`c-card-body`),cw(403,`
        `),ki(404,`p`,3),cw(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),cl(),cw(406,`
        `),ki(407,`app-docs-example`,22),cw(408,`
          `),ki(409,`form`,23),Rh(`ngSubmit`,function(){return o.logValue()}),cw(410,`
            `),ki(411,`ul`,24),cw(412,`
              `),ki(413,`button`,25),Rh(`click`,function(){return o.setValue(`one`)}),cw(414,`
                `),ki(415,`c-form-check`),cw(416,`
                  `),Ch(417,`input`,26),xI(),cw(418,`
                  `),ki(419,`label`,27),cw(420,`Cras justo odio`),cl(),cw(421,`
                `),cl(),cw(422,`
              `),cl(),cw(423,`
              `),ki(424,`label`,28),cw(425,`
                `),ki(426,`c-form-check`),cw(427,`
                  `),Ch(428,`input`,29),xI(),cw(429,`
                  `),ki(430,`span`,30),cw(431,`Dapibus ac facilisis in`),cl(),cw(432,`
                `),cl(),cw(433,`
              `),cl(),cw(434,`
              `),ki(435,`li`,31),cw(436,`
                `),ki(437,`c-form-check`),cw(438,`
                  `),Ch(439,`input`,32),xI(),cw(440,`
                  `),ki(441,`label`,27),cw(442,`Morbi leo risus`),cl(),cw(443,`
                `),cl(),cw(444,`
              `),cl(),cw(445,`
              `),ki(446,`li`,31),cw(447,`
                `),ki(448,`c-form-check`),cw(449,`
                  `),Ch(450,`input`,33),xI(),cw(451,`
                  `),ki(452,`label`,27),cw(453,`Orta ac consectetur ac`),cl(),cw(454,`
                `),cl(),cw(455,`
              `),cl(),cw(456,`
              `),ki(457,`li`,31),cw(458,`
                `),ki(459,`c-form-check`),cw(460,`
                  `),Ch(461,`input`,34),xI(),cw(462,`
                  `),ki(463,`label`,27),cw(464,`Vestibulum at eros`),cl(),cw(465,`
                `),cl(),cw(466,`
              `),cl(),cw(467,`
            `),cl(),cw(468,`
            `),ki(469,`button`,35),cw(470,`Submit`),cl(),cw(471,`
          `),cl(),cw(472,`
        `),cl(),cw(473,`
      `),cl(),cw(474,`
    `),cl(),cw(475,`
  `),cl(),cw(476,`
`),cl()),a&2&&($E(26),TT(o.sampleList),$E(35),TT(o.sampleList),$E(35),TT(o.sampleList),$E(50),TT(o.sampleList),$E(32),TT(o.sampleList),$E(43),TT(o.breakpoints),$E(28),TT(o.colors),$E(20),TT(o.colors),$E(29),TT(o.sampleList),$E(32),wh(`active`,!0),$E(79),wh(`formGroup`,o.checkBoxes),$E(2),wh(`flush`,!0),$E(6),OI(),$E(11),OI(),$E(11),OI(),$E(11),OI(),$E(11),OI())},dependencies:[t1,rb,Pi,Xv,Li,E,s1,a1,wT,Zn,Ln,Mt,Tn,Gn,on,gn,zT,WT,qT,Tu,qv,c],encapsulation:2})}};export{R as ListGroupsComponent};