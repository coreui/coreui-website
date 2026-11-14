import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{$n as cte,$t as Sle,C as Cle,Fi as ste,L as G1,M as F,Mt as Oe,N as FH,Nt as Oi,Qn as cle,Ri as tH,Ui as tte,V as Gr,Wi as uU,Yr as lle,Zt as S,aa as wle,ar as dte,at as K1,c as AU,ci as oU,cn as Vae,hi as pe,kn as Zn,mt as L,n as $H,or as eA,ot as Ka,pi as p,pn as Wr,rn as U,rr as dle,sa as x,si as nte,un as Wa,x as Ce,zt as Pe}from"./main-VQBM3OGL.js";function W(a,l){if(a&1&&(Ce(0,`
              `),F(1,`li`,31),Ce(2),L(),Ce(3,`
            `)),a&2){let r=l.$implicit;S(2),Pe(r)}}function q(a,l){if(a&1&&(Ce(0,`
              `),F(1,`li`,36),Ce(2),L(),Ce(3,`
            `)),a&2){let r=l.$implicit,o=l.$index;S(),U(`active`,o===0),S(),Pe(r)}}function O(a,l){if(a&1&&(Ce(0,`
              `),F(1,`button`,37),Ce(2),L(),Ce(3,`
            `)),a&2){let r=l.$implicit,o=l.$index;S(),U(`disabled`,o===0),S(),Pe(r)}}function J(a,l){if(a&1&&(Ce(0,`
              `),F(1,`a`,38),Ce(2),L(),Ce(3,`
            `)),a&2){let r=l.$implicit,o=l.$index,p=l.$count;S(),U(`active`,o===0)(`disabled`,o===p-1),S(),Pe(r)}}function K(a,l){if(a&1&&(Ce(0,`
              `),F(1,`li`,31),Ce(2),L(),Ce(3,`
            `)),a&2){let r=l.$implicit;S(2),Pe(r)}}function Q(a,l){if(a&1&&(Ce(0,`
            `),F(1,`ul`,39),Ce(2,`
              `),F(3,`li`,31),Ce(4,`Cras justo odio`),L(),Ce(5,`
              `),F(6,`li`,31),Ce(7,`Dapibus ac facilisis in`),L(),Ce(8,`
              `),F(9,`li`,31),Ce(10,`Morbi leo risus`),L(),Ce(11,`
            `),L(),Ce(12,`
          `)),a&2){let r=l.$implicit;S(),U(`horizontal`,r)}}function X(a,l){if(a&1&&(Ce(0,`
              `),F(1,`li`,40),Ce(2),L(),Ce(3,`
            `)),a&2){let r=l.$implicit;S(),U(`color`,r),S(),Zn(`
                A simple `,r,` list group item
              `)}}function Y(a,l){if(a&1&&(Ce(0,`
              `),F(1,`a`,41),Ce(2),L(),Ce(3,`
            `)),a&2){let r=l.$implicit;S(),U(`color`,r),S(),Zn(`
                A simple `,r,` list group item
              `)}}function Z(a,l){if(a&1&&(Ce(0,`
              `),F(1,`button`,42),Ce(2),F(3,`c-badge`,43),Ce(4),L(),Ce(5,`
              `),L(),Ce(6,`
            `)),a&2){let r=l.$implicit,o=l.$index,p=l.$count;S(),U(`disabled`,o===p-1),S(),Zn(`
                `,r,`
                `),S(),U(`color`,o===p-1?`secondary`:`primary`),S(),Pe(o+1)}}var R=class a{constructor(){this.formBuilder=p(cte);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let r=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!r,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(r){return new(r||a)}}static{this.ɵcmp=x({type:a,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(r,o){r&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular List Group`),L(),Ce(12,` `),F(13,`small`),Ce(14,`Basic example`),L(),Ce(15,`
      `),L(),Ce(16,`
      `),F(17,`c-card-body`),Ce(18,`
        `),F(19,`p`,3),Ce(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),L(),Ce(21,`
        `),F(22,`app-docs-example`,4),Ce(23,`
          `),F(24,`ul`,5),Ce(25,`
            `),Gr(26,W,4,1,null,null,Oi),L(),Ce(28,`
        `),L(),Ce(29,`
      `),L(),Ce(30,`
    `),L(),Ce(31,`
  `),L(),Ce(32,`
  `),F(33,`c-col`,0),Ce(34,`
    `),F(35,`c-card`,2),Ce(36,`
      `),F(37,`c-card-header`),Ce(38,`
        `),F(39,`strong`),Ce(40,`Angular List Group`),L(),Ce(41,` `),F(42,`small`),Ce(43,`Active items`),L(),Ce(44,`
      `),L(),Ce(45,`
      `),F(46,`c-card-body`),Ce(47,`
        `),F(48,`p`,3),Ce(49,`
          Add `),F(50,`code`),Ce(51,`active`),L(),Ce(52,` boolean property to a
          `),F(53,`code`),Ce(54,`cListGroupItem`),L(),Ce(55,` to show the current active selection.
        `),L(),Ce(56,`
        `),F(57,`app-docs-example`,6),Ce(58,`
          `),F(59,`ul`,5),Ce(60,`
            `),Gr(61,q,4,2,null,null,Oi),L(),Ce(63,`
        `),L(),Ce(64,`
      `),L(),Ce(65,`
    `),L(),Ce(66,`
  `),L(),Ce(67,`
  `),F(68,`c-col`,0),Ce(69,`
    `),F(70,`c-card`,2),Ce(71,`
      `),F(72,`c-card-header`),Ce(73,`
        `),F(74,`strong`),Ce(75,`Angular List Group`),L(),Ce(76,` `),F(77,`small`),Ce(78,`Disabled items`),L(),Ce(79,`
      `),L(),Ce(80,`
      `),F(81,`c-card-body`),Ce(82,`
        `),F(83,`p`,3),Ce(84,`
          Add `),F(85,`code`),Ce(86,`disabled`),L(),Ce(87,` boolean property to a
          `),F(88,`code`),Ce(89,`cListGroupItem`),L(),Ce(90,` to make it appear disabled.
        `),L(),Ce(91,`
        `),F(92,`app-docs-example`,7),Ce(93,`
          `),F(94,`div`,5),Ce(95,`
            `),Gr(96,O,4,2,null,null,Oi),L(),Ce(98,`
        `),L(),Ce(99,`
      `),L(),Ce(100,`
    `),L(),Ce(101,`
  `),L(),Ce(102,`
  `),F(103,`c-col`,0),Ce(104,`
    `),F(105,`c-card`,2),Ce(106,`
      `),F(107,`c-card-header`),Ce(108,`
        `),F(109,`strong`),Ce(110,`Angular List Group`),L(),Ce(111,` `),F(112,`small`),Ce(113,`Links and buttons`),L(),Ce(114,`
      `),L(),Ce(115,`
      `),F(116,`c-card-body`),Ce(117,`
        `),F(118,`p`,3),Ce(119,`
          Use `),F(120,`code`),Ce(121,`<a>`),L(),Ce(122,`s or `),F(123,`code`),Ce(124,`<button>`),L(),Ce(125,`s to create
          `),F(126,`em`),Ce(127,`actionable`),L(),Ce(128,` list group items with hover, disabled, and active
          states with `),F(129,`code`),Ce(130,`a`),L(),Ce(131,` or `),F(132,`code`),Ce(133,`button`),L(),Ce(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),F(135,`code`),Ce(136,`<li>`),L(),Ce(137,` or
          `),F(138,`code`),Ce(139,`<div>`),L(),Ce(140,`) don't provide a click or tap affordance.
        `),L(),Ce(141,`
        `),F(142,`app-docs-example`,8),Ce(143,`
          `),F(144,`div`,5),Ce(145,`
            `),Gr(146,J,4,3,null,null,Oi),L(),Ce(148,`
        `),L(),Ce(149,`
      `),L(),Ce(150,`
    `),L(),Ce(151,`
  `),L(),Ce(152,`
  `),F(153,`c-col`,0),Ce(154,`
    `),F(155,`c-card`,2),Ce(156,`
      `),F(157,`c-card-header`),Ce(158,`
        `),F(159,`strong`),Ce(160,`Angular List Group`),L(),Ce(161,` `),F(162,`small`),Ce(163,`Flush`),L(),Ce(164,`
      `),L(),Ce(165,`
      `),F(166,`c-card-body`),Ce(167,`
        `),F(168,`p`,3),Ce(169,`
          Add `),F(170,`code`),Ce(171,`flush`),L(),Ce(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),L(),Ce(173,`
        `),F(174,`app-docs-example`,9),Ce(175,`
          `),F(176,`ul`,10),Ce(177,`
            `),Gr(178,K,4,1,null,null,Oi),L(),Ce(180,`
        `),L(),Ce(181,`
      `),L(),Ce(182,`
    `),L(),Ce(183,`
  `),L(),Ce(184,`
  `),F(185,`c-col`,0),Ce(186,`
    `),F(187,`c-card`,2),Ce(188,`
      `),F(189,`c-card-header`),Ce(190,`
        `),F(191,`strong`),Ce(192,`Angular List Group`),L(),Ce(193,` `),F(194,`small`),Ce(195,`Horizontal`),L(),Ce(196,`
      `),L(),Ce(197,`
      `),F(198,`c-card-body`),Ce(199,`
        `),F(200,`p`,3),Ce(201,`
          Add `),F(202,`code`),Ce(203,`layout="horizontal"`),L(),Ce(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),Oe(205,`br`),Ce(206,`
          Alternatively, choose a responsive variant
          `),F(207,`code`),Ce(208,`[horizontal]="sm | md | lg | xl | xxl"`),L(),Ce(209,`
          to make a list group horizontal starting at that breakpoint's
          `),F(210,`code`),Ce(211,`min-width`),L(),Ce(212,`. `),Oe(213,`br`),Ce(214,`
          Currently `),F(215,`strong`),Ce(216,`horizontal list groups cannot be combined with flush list groups.`),L(),Ce(217,`
        `),L(),Ce(218,`
        `),F(219,`app-docs-example`,9),Ce(220,`
          `),Gr(221,Q,13,1,null,null,Oi),L(),Ce(223,`
      `),L(),Ce(224,`
    `),L(),Ce(225,`
  `),L(),Ce(226,`
  `),F(227,`c-col`,0),Ce(228,`
    `),F(229,`c-card`,2),Ce(230,`
      `),F(231,`c-card-header`),Ce(232,`
        `),F(233,`strong`),Ce(234,`Angular List Group`),L(),Ce(235,` `),F(236,`small`),Ce(237,`Contextual classes`),L(),Ce(238,`
      `),L(),Ce(239,`
      `),F(240,`c-card-body`),Ce(241,`
        `),F(242,`p`,3),Ce(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),L(),Ce(244,`
        `),F(245,`app-docs-example`,11),Ce(246,`
          `),F(247,`ul`,12),Ce(248,`
            `),Gr(249,X,4,2,null,null,Oi),L(),Ce(251,`
        `),L(),Ce(252,`
        `),F(253,`p`,13),Ce(254,`
          Contextual classes also work with `),F(255,`code`),Ce(256,`<a>`),L(),Ce(257,` or
          `),F(258,`code`),Ce(259,`<button>`),L(),Ce(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),F(261,`code`),Ce(262,`active`),L(),Ce(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),L(),Ce(264,`
        `),F(265,`app-docs-example`,11),Ce(266,`
          `),F(267,`div`,5),Ce(268,`
            `),Gr(269,Y,4,2,null,null,Oi),L(),Ce(271,`
        `),L(),Ce(272,`
      `),L(),Ce(273,`
    `),L(),Ce(274,`
  `),L(),Ce(275,`
  `),F(276,`c-col`,0),Ce(277,`
    `),F(278,`c-card`,2),Ce(279,`
      `),F(280,`c-card-header`),Ce(281,`
        `),F(282,`strong`),Ce(283,`Angular List Group`),L(),Ce(284,` `),F(285,`small`),Ce(286,`With badges`),L(),Ce(287,`
      `),L(),Ce(288,`
      `),F(289,`c-card-body`),Ce(290,`
        `),F(291,`p`,3),Ce(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),L(),Ce(293,`
        `),F(294,`app-docs-example`,14),Ce(295,`
          `),F(296,`div`,5),Ce(297,`
            `),Gr(298,Z,7,4,null,null,Oi),L(),Ce(300,`
        `),L(),Ce(301,`
      `),L(),Ce(302,`
    `),L(),Ce(303,`
  `),L(),Ce(304,`
  `),F(305,`c-col`,0),Ce(306,`
    `),F(307,`c-card`,2),Ce(308,`
      `),F(309,`c-card-header`),Ce(310,`
        `),F(311,`strong`),Ce(312,`Angular List Group`),L(),Ce(313,` `),F(314,`small`),Ce(315,`Custom content`),L(),Ce(316,`
      `),L(),Ce(317,`
      `),F(318,`c-card-body`),Ce(319,`
        `),F(320,`p`,3),Ce(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),F(322,`a`,15),Ce(323,`flexbox utilities`),L(),Ce(324,`.
        `),L(),Ce(325,`
        `),F(326,`app-docs-example`,16),Ce(327,`
          `),F(328,`div`,5),Ce(329,`
            `),F(330,`a`,17),Ce(331,`
              `),F(332,`div`,18),Ce(333,`
                `),F(334,`h5`,19),Ce(335,`List group item heading`),L(),Ce(336,`
                `),F(337,`small`),Ce(338,`3 days ago`),L(),Ce(339,`
              `),L(),Ce(340,`
              `),F(341,`p`,19),Ce(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),L(),Ce(343,`
              `),F(344,`small`),Ce(345,`Donec id elit non mi porta.`),L(),Ce(346,`
            `),L(),Ce(347,`
            `),F(348,`a`,20),Ce(349,`
              `),F(350,`div`,18),Ce(351,`
                `),F(352,`h5`,19),Ce(353,`List group item heading`),L(),Ce(354,`
                `),F(355,`small`,21),Ce(356,`3 days ago`),L(),Ce(357,`
              `),L(),Ce(358,`
              `),F(359,`p`,19),Ce(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),L(),Ce(361,`
              `),F(362,`small`,21),Ce(363,`Donec id elit non mi porta.`),L(),Ce(364,`
            `),L(),Ce(365,`
            `),F(366,`a`,20),Ce(367,`
              `),F(368,`div`,18),Ce(369,`
                `),F(370,`h5`,19),Ce(371,`List group item heading`),L(),Ce(372,`
                `),F(373,`small`,21),Ce(374,`3 days ago`),L(),Ce(375,`
              `),L(),Ce(376,`
              `),F(377,`p`,19),Ce(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),L(),Ce(379,`
              `),F(380,`small`,21),Ce(381,`Donec id elit non mi porta.`),L(),Ce(382,`
            `),L(),Ce(383,`
          `),L(),Ce(384,`
        `),L(),Ce(385,`
      `),L(),Ce(386,`
    `),L(),Ce(387,`
  `),L(),Ce(388,`
  `),F(389,`c-col`,0),Ce(390,`
    `),F(391,`c-card`,2),Ce(392,`
      `),F(393,`c-card-header`),Ce(394,`
        `),F(395,`strong`),Ce(396,`Angular List Group`),L(),Ce(397,` `),F(398,`small`),Ce(399,`Checkboxes and radios`),L(),Ce(400,`
      `),L(),Ce(401,`
      `),F(402,`c-card-body`),Ce(403,`
        `),F(404,`p`,3),Ce(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),L(),Ce(406,`
        `),F(407,`app-docs-example`,22),Ce(408,`
          `),F(409,`form`,23),pe(`ngSubmit`,function(){return o.logValue()}),Ce(410,`
            `),F(411,`ul`,24),Ce(412,`
              `),F(413,`button`,25),pe(`click`,function(){return o.setValue(`one`)}),Ce(414,`
                `),F(415,`c-form-check`),Ce(416,`
                  `),F(417,`input`,26),G1(),L(),Ce(418,`
                  `),F(419,`label`,27),Ce(420,`Cras justo odio`),L(),Ce(421,`
                `),L(),Ce(422,`
              `),L(),Ce(423,`
              `),F(424,`label`,28),Ce(425,`
                `),F(426,`c-form-check`),Ce(427,`
                  `),F(428,`input`,29),G1(),L(),Ce(429,`
                  `),F(430,`span`,30),Ce(431,`Dapibus ac facilisis in`),L(),Ce(432,`
                `),L(),Ce(433,`
              `),L(),Ce(434,`
              `),F(435,`li`,31),Ce(436,`
                `),F(437,`c-form-check`),Ce(438,`
                  `),F(439,`input`,32),G1(),L(),Ce(440,`
                  `),F(441,`label`,27),Ce(442,`Morbi leo risus`),L(),Ce(443,`
                `),L(),Ce(444,`
              `),L(),Ce(445,`
              `),F(446,`li`,31),Ce(447,`
                `),F(448,`c-form-check`),Ce(449,`
                  `),F(450,`input`,33),G1(),L(),Ce(451,`
                  `),F(452,`label`,27),Ce(453,`Orta ac consectetur ac`),L(),Ce(454,`
                `),L(),Ce(455,`
              `),L(),Ce(456,`
              `),F(457,`li`,31),Ce(458,`
                `),F(459,`c-form-check`),Ce(460,`
                  `),F(461,`input`,34),G1(),L(),Ce(462,`
                  `),F(463,`label`,27),Ce(464,`Vestibulum at eros`),L(),Ce(465,`
                `),L(),Ce(466,`
              `),L(),Ce(467,`
            `),L(),Ce(468,`
            `),F(469,`button`,35),Ce(470,`Submit`),L(),Ce(471,`
          `),L(),Ce(472,`
        `),L(),Ce(473,`
      `),L(),Ce(474,`
    `),L(),Ce(475,`
  `),L(),Ce(476,`
`),L()),r&2&&(S(26),Wr(o.sampleList),S(35),Wr(o.sampleList),S(35),Wr(o.sampleList),S(50),Wr(o.sampleList),S(32),Wr(o.sampleList),S(43),Wr(o.breakpoints),S(28),Wr(o.colors),S(20),Wr(o.colors),S(29),Wr(o.sampleList),S(32),U(`active`,!0),S(79),U(`formGroup`,o.checkBoxes),S(2),U(`flush`,!0),S(6),K1(),S(11),K1(),S(11),K1(),S(11),K1(),S(11),K1())},dependencies:[Cle,AU,Wa,uU,Ka,E,Sle,wle,Vae,dte,ste,tH,tte,nte,FH,$H,lle,cle,dle,eA,oU,c],encapsulation:2})}};export{R as ListGroupsComponent};