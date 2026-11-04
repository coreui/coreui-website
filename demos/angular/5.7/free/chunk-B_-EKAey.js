import{$t as V,A as F,Ar as hse,Bi as uJ,D as E,Hr as ke,Ht as Sr,Kt as Tse,Lr as ja,On as Zn,Pn as _,U as Hk,Vr as k,Xt as Uoe,Yi as vH,Yt as Uk,Zr as nV,_a as zi,cr as dse,d as Ba,fa as ye,hr as fe,ht as Mse,ji as sJ,li as p,q as IH,qt as UH,st as Kj,ti as oJ,ui as pJ,vi as qi,vr as fse,wr as gj,xr as gJ,xt as Oe,yn as YN,yt as Nse}from"./main-U5YNMN7V.js";import{t as E$1}from"./chunk-XCt8LgbN.js";import{t as c}from"./chunk-B_o4dmI3.js";function W(a,l){if(a&1&&(ye(0,`
              `),k(1,`li`,31),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit;_(2),Oe(r)}}function q(a,l){if(a&1&&(ye(0,`
              `),k(1,`li`,36),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit,o=l.$index;_(),V(`active`,o===0),_(),Oe(r)}}function O(a,l){if(a&1&&(ye(0,`
              `),k(1,`button`,37),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit,o=l.$index;_(),V(`disabled`,o===0),_(),Oe(r)}}function J(a,l){if(a&1&&(ye(0,`
              `),k(1,`a`,38),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit,o=l.$index,p=l.$count;_(),V(`active`,o===0)(`disabled`,o===p-1),_(),Oe(r)}}function K(a,l){if(a&1&&(ye(0,`
              `),k(1,`li`,31),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit;_(2),Oe(r)}}function Q(a,l){if(a&1&&(ye(0,`
            `),k(1,`ul`,39),ye(2,`
              `),k(3,`li`,31),ye(4,`Cras justo odio`),F(),ye(5,`
              `),k(6,`li`,31),ye(7,`Dapibus ac facilisis in`),F(),ye(8,`
              `),k(9,`li`,31),ye(10,`Morbi leo risus`),F(),ye(11,`
            `),F(),ye(12,`
          `)),a&2){let r=l.$implicit;_(),V(`horizontal`,r)}}function X(a,l){if(a&1&&(ye(0,`
              `),k(1,`li`,40),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit;_(),V(`color`,r),_(),Zn(`
                A simple `,r,` list group item
              `)}}function Y(a,l){if(a&1&&(ye(0,`
              `),k(1,`a`,41),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit;_(),V(`color`,r),_(),Zn(`
                A simple `,r,` list group item
              `)}}function Z(a,l){if(a&1&&(ye(0,`
              `),k(1,`button`,42),ye(2),k(3,`c-badge`,43),ye(4),F(),ye(5,`
              `),F(),ye(6,`
            `)),a&2){let r=l.$implicit,o=l.$index,p=l.$count;_(),V(`disabled`,o===p-1),_(),Zn(`
                `,r,`
                `),_(),V(`color`,o===p-1?`secondary`:`primary`),_(),Oe(o+1)}}var R=class a{constructor(){this.formBuilder=p(pJ);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let r=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!r,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(r){return new(r||a)}}static{this.ɵcmp=E({type:a,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(r,o){r&1&&(k(0,`c-row`),ye(1,`
  `),k(2,`c-col`,0),ye(3,`
    `),ke(4,`app-docs-components`,1),ye(5,`
    `),k(6,`c-card`,2),ye(7,`
      `),k(8,`c-card-header`),ye(9,`
        `),k(10,`strong`),ye(11,`Angular List Group`),F(),ye(12,` `),k(13,`small`),ye(14,`Basic example`),F(),ye(15,`
      `),F(),ye(16,`
      `),k(17,`c-card-body`),ye(18,`
        `),k(19,`p`,3),ye(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),F(),ye(21,`
        `),k(22,`app-docs-example`,4),ye(23,`
          `),k(24,`ul`,5),ye(25,`
            `),qi(26,W,4,1,null,null,Sr),F(),ye(28,`
        `),F(),ye(29,`
      `),F(),ye(30,`
    `),F(),ye(31,`
  `),F(),ye(32,`
  `),k(33,`c-col`,0),ye(34,`
    `),k(35,`c-card`,2),ye(36,`
      `),k(37,`c-card-header`),ye(38,`
        `),k(39,`strong`),ye(40,`Angular List Group`),F(),ye(41,` `),k(42,`small`),ye(43,`Active items`),F(),ye(44,`
      `),F(),ye(45,`
      `),k(46,`c-card-body`),ye(47,`
        `),k(48,`p`,3),ye(49,`
          Add `),k(50,`code`),ye(51,`active`),F(),ye(52,` boolean property to a
          `),k(53,`code`),ye(54,`cListGroupItem`),F(),ye(55,` to show the current active selection.
        `),F(),ye(56,`
        `),k(57,`app-docs-example`,6),ye(58,`
          `),k(59,`ul`,5),ye(60,`
            `),qi(61,q,4,2,null,null,Sr),F(),ye(63,`
        `),F(),ye(64,`
      `),F(),ye(65,`
    `),F(),ye(66,`
  `),F(),ye(67,`
  `),k(68,`c-col`,0),ye(69,`
    `),k(70,`c-card`,2),ye(71,`
      `),k(72,`c-card-header`),ye(73,`
        `),k(74,`strong`),ye(75,`Angular List Group`),F(),ye(76,` `),k(77,`small`),ye(78,`Disabled items`),F(),ye(79,`
      `),F(),ye(80,`
      `),k(81,`c-card-body`),ye(82,`
        `),k(83,`p`,3),ye(84,`
          Add `),k(85,`code`),ye(86,`disabled`),F(),ye(87,` boolean property to a
          `),k(88,`code`),ye(89,`cListGroupItem`),F(),ye(90,` to make it appear disabled.
        `),F(),ye(91,`
        `),k(92,`app-docs-example`,7),ye(93,`
          `),k(94,`div`,5),ye(95,`
            `),qi(96,O,4,2,null,null,Sr),F(),ye(98,`
        `),F(),ye(99,`
      `),F(),ye(100,`
    `),F(),ye(101,`
  `),F(),ye(102,`
  `),k(103,`c-col`,0),ye(104,`
    `),k(105,`c-card`,2),ye(106,`
      `),k(107,`c-card-header`),ye(108,`
        `),k(109,`strong`),ye(110,`Angular List Group`),F(),ye(111,` `),k(112,`small`),ye(113,`Links and buttons`),F(),ye(114,`
      `),F(),ye(115,`
      `),k(116,`c-card-body`),ye(117,`
        `),k(118,`p`,3),ye(119,`
          Use `),k(120,`code`),ye(121,`<a>`),F(),ye(122,`s or `),k(123,`code`),ye(124,`<button>`),F(),ye(125,`s to create
          `),k(126,`em`),ye(127,`actionable`),F(),ye(128,` list group items with hover, disabled, and active
          states with `),k(129,`code`),ye(130,`a`),F(),ye(131,` or `),k(132,`code`),ye(133,`button`),F(),ye(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),k(135,`code`),ye(136,`<li>`),F(),ye(137,` or
          `),k(138,`code`),ye(139,`<div>`),F(),ye(140,`) don't provide a click or tap affordance.
        `),F(),ye(141,`
        `),k(142,`app-docs-example`,8),ye(143,`
          `),k(144,`div`,5),ye(145,`
            `),qi(146,J,4,3,null,null,Sr),F(),ye(148,`
        `),F(),ye(149,`
      `),F(),ye(150,`
    `),F(),ye(151,`
  `),F(),ye(152,`
  `),k(153,`c-col`,0),ye(154,`
    `),k(155,`c-card`,2),ye(156,`
      `),k(157,`c-card-header`),ye(158,`
        `),k(159,`strong`),ye(160,`Angular List Group`),F(),ye(161,` `),k(162,`small`),ye(163,`Flush`),F(),ye(164,`
      `),F(),ye(165,`
      `),k(166,`c-card-body`),ye(167,`
        `),k(168,`p`,3),ye(169,`
          Add `),k(170,`code`),ye(171,`flush`),F(),ye(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),F(),ye(173,`
        `),k(174,`app-docs-example`,9),ye(175,`
          `),k(176,`ul`,10),ye(177,`
            `),qi(178,K,4,1,null,null,Sr),F(),ye(180,`
        `),F(),ye(181,`
      `),F(),ye(182,`
    `),F(),ye(183,`
  `),F(),ye(184,`
  `),k(185,`c-col`,0),ye(186,`
    `),k(187,`c-card`,2),ye(188,`
      `),k(189,`c-card-header`),ye(190,`
        `),k(191,`strong`),ye(192,`Angular List Group`),F(),ye(193,` `),k(194,`small`),ye(195,`Horizontal`),F(),ye(196,`
      `),F(),ye(197,`
      `),k(198,`c-card-body`),ye(199,`
        `),k(200,`p`,3),ye(201,`
          Add `),k(202,`code`),ye(203,`layout="horizontal"`),F(),ye(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),ke(205,`br`),ye(206,`
          Alternatively, choose a responsive variant
          `),k(207,`code`),ye(208,`[horizontal]="sm | md | lg | xl | xxl"`),F(),ye(209,`
          to make a list group horizontal starting at that breakpoint's
          `),k(210,`code`),ye(211,`min-width`),F(),ye(212,`. `),ke(213,`br`),ye(214,`
          Currently `),k(215,`strong`),ye(216,`horizontal list groups cannot be combined with flush list groups.`),F(),ye(217,`
        `),F(),ye(218,`
        `),k(219,`app-docs-example`,9),ye(220,`
          `),qi(221,Q,13,1,null,null,Sr),F(),ye(223,`
      `),F(),ye(224,`
    `),F(),ye(225,`
  `),F(),ye(226,`
  `),k(227,`c-col`,0),ye(228,`
    `),k(229,`c-card`,2),ye(230,`
      `),k(231,`c-card-header`),ye(232,`
        `),k(233,`strong`),ye(234,`Angular List Group`),F(),ye(235,` `),k(236,`small`),ye(237,`Contextual classes`),F(),ye(238,`
      `),F(),ye(239,`
      `),k(240,`c-card-body`),ye(241,`
        `),k(242,`p`,3),ye(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),F(),ye(244,`
        `),k(245,`app-docs-example`,11),ye(246,`
          `),k(247,`ul`,12),ye(248,`
            `),qi(249,X,4,2,null,null,Sr),F(),ye(251,`
        `),F(),ye(252,`
        `),k(253,`p`,13),ye(254,`
          Contextual classes also work with `),k(255,`code`),ye(256,`<a>`),F(),ye(257,` or
          `),k(258,`code`),ye(259,`<button>`),F(),ye(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),k(261,`code`),ye(262,`active`),F(),ye(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),F(),ye(264,`
        `),k(265,`app-docs-example`,11),ye(266,`
          `),k(267,`div`,5),ye(268,`
            `),qi(269,Y,4,2,null,null,Sr),F(),ye(271,`
        `),F(),ye(272,`
      `),F(),ye(273,`
    `),F(),ye(274,`
  `),F(),ye(275,`
  `),k(276,`c-col`,0),ye(277,`
    `),k(278,`c-card`,2),ye(279,`
      `),k(280,`c-card-header`),ye(281,`
        `),k(282,`strong`),ye(283,`Angular List Group`),F(),ye(284,` `),k(285,`small`),ye(286,`With badges`),F(),ye(287,`
      `),F(),ye(288,`
      `),k(289,`c-card-body`),ye(290,`
        `),k(291,`p`,3),ye(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),F(),ye(293,`
        `),k(294,`app-docs-example`,14),ye(295,`
          `),k(296,`div`,5),ye(297,`
            `),qi(298,Z,7,4,null,null,Sr),F(),ye(300,`
        `),F(),ye(301,`
      `),F(),ye(302,`
    `),F(),ye(303,`
  `),F(),ye(304,`
  `),k(305,`c-col`,0),ye(306,`
    `),k(307,`c-card`,2),ye(308,`
      `),k(309,`c-card-header`),ye(310,`
        `),k(311,`strong`),ye(312,`Angular List Group`),F(),ye(313,` `),k(314,`small`),ye(315,`Custom content`),F(),ye(316,`
      `),F(),ye(317,`
      `),k(318,`c-card-body`),ye(319,`
        `),k(320,`p`,3),ye(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),k(322,`a`,15),ye(323,`flexbox utilities`),F(),ye(324,`.
        `),F(),ye(325,`
        `),k(326,`app-docs-example`,16),ye(327,`
          `),k(328,`div`,5),ye(329,`
            `),k(330,`a`,17),ye(331,`
              `),k(332,`div`,18),ye(333,`
                `),k(334,`h5`,19),ye(335,`List group item heading`),F(),ye(336,`
                `),k(337,`small`),ye(338,`3 days ago`),F(),ye(339,`
              `),F(),ye(340,`
              `),k(341,`p`,19),ye(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),F(),ye(343,`
              `),k(344,`small`),ye(345,`Donec id elit non mi porta.`),F(),ye(346,`
            `),F(),ye(347,`
            `),k(348,`a`,20),ye(349,`
              `),k(350,`div`,18),ye(351,`
                `),k(352,`h5`,19),ye(353,`List group item heading`),F(),ye(354,`
                `),k(355,`small`,21),ye(356,`3 days ago`),F(),ye(357,`
              `),F(),ye(358,`
              `),k(359,`p`,19),ye(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),F(),ye(361,`
              `),k(362,`small`,21),ye(363,`Donec id elit non mi porta.`),F(),ye(364,`
            `),F(),ye(365,`
            `),k(366,`a`,20),ye(367,`
              `),k(368,`div`,18),ye(369,`
                `),k(370,`h5`,19),ye(371,`List group item heading`),F(),ye(372,`
                `),k(373,`small`,21),ye(374,`3 days ago`),F(),ye(375,`
              `),F(),ye(376,`
              `),k(377,`p`,19),ye(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),F(),ye(379,`
              `),k(380,`small`,21),ye(381,`Donec id elit non mi porta.`),F(),ye(382,`
            `),F(),ye(383,`
          `),F(),ye(384,`
        `),F(),ye(385,`
      `),F(),ye(386,`
    `),F(),ye(387,`
  `),F(),ye(388,`
  `),k(389,`c-col`,0),ye(390,`
    `),k(391,`c-card`,2),ye(392,`
      `),k(393,`c-card-header`),ye(394,`
        `),k(395,`strong`),ye(396,`Angular List Group`),F(),ye(397,` `),k(398,`small`),ye(399,`Checkboxes and radios`),F(),ye(400,`
      `),F(),ye(401,`
      `),k(402,`c-card-body`),ye(403,`
        `),k(404,`p`,3),ye(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),F(),ye(406,`
        `),k(407,`app-docs-example`,22),ye(408,`
          `),k(409,`form`,23),fe(`ngSubmit`,function(){return o.logValue()}),ye(410,`
            `),k(411,`ul`,24),ye(412,`
              `),k(413,`button`,25),fe(`click`,function(){return o.setValue(`one`)}),ye(414,`
                `),k(415,`c-form-check`),ye(416,`
                  `),k(417,`input`,26),Hk(),F(),ye(418,`
                  `),k(419,`label`,27),ye(420,`Cras justo odio`),F(),ye(421,`
                `),F(),ye(422,`
              `),F(),ye(423,`
              `),k(424,`label`,28),ye(425,`
                `),k(426,`c-form-check`),ye(427,`
                  `),k(428,`input`,29),Hk(),F(),ye(429,`
                  `),k(430,`span`,30),ye(431,`Dapibus ac facilisis in`),F(),ye(432,`
                `),F(),ye(433,`
              `),F(),ye(434,`
              `),k(435,`li`,31),ye(436,`
                `),k(437,`c-form-check`),ye(438,`
                  `),k(439,`input`,32),Hk(),F(),ye(440,`
                  `),k(441,`label`,27),ye(442,`Morbi leo risus`),F(),ye(443,`
                `),F(),ye(444,`
              `),F(),ye(445,`
              `),k(446,`li`,31),ye(447,`
                `),k(448,`c-form-check`),ye(449,`
                  `),k(450,`input`,33),Hk(),F(),ye(451,`
                  `),k(452,`label`,27),ye(453,`Orta ac consectetur ac`),F(),ye(454,`
                `),F(),ye(455,`
              `),F(),ye(456,`
              `),k(457,`li`,31),ye(458,`
                `),k(459,`c-form-check`),ye(460,`
                  `),k(461,`input`,34),Hk(),F(),ye(462,`
                  `),k(463,`label`,27),ye(464,`Vestibulum at eros`),F(),ye(465,`
                `),F(),ye(466,`
              `),F(),ye(467,`
            `),F(),ye(468,`
            `),k(469,`button`,35),ye(470,`Submit`),F(),ye(471,`
          `),F(),ye(472,`
        `),F(),ye(473,`
      `),F(),ye(474,`
    `),F(),ye(475,`
  `),F(),ye(476,`
`),F()),r&2&&(_(26),zi(o.sampleList),_(35),zi(o.sampleList),_(35),zi(o.sampleList),_(50),zi(o.sampleList),_(32),zi(o.sampleList),_(43),zi(o.breakpoints),_(28),zi(o.colors),_(20),zi(o.colors),_(29),zi(o.sampleList),_(32),V(`active`,!0),_(79),V(`formGroup`,o.checkBoxes),_(2),V(`flush`,!0),_(6),Uk(),_(11),Uk(),_(11),Uk(),_(11),Uk(),_(11),Uk())},dependencies:[Mse,UH,Ba,IH,ja,E$1,Tse,Nse,Uoe,gJ,uJ,gj,oJ,sJ,Kj,nV,dse,fse,hse,YN,vH,c],encapsulation:2})}};export{R as ListGroupsComponent};