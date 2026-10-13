import{Di as xT,Ni as yT,U as Ib,Zn as hm,gn as as,in as ZD,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{Xn as ro,br as yF,cr as v0,dn as gF,er as sF,jn as mI,jt as YM,zn as oo}from"./main-XAAYYUIJ.js";import{t as $}from"./chunk-BP-YIv5U.js";import"./chunk-DzSAZ_zx.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-CHUO4BHf.js";var C=()=>[`JavaScript`,`TypeScript`,`Accessibility`];var A=()=>[`Feature`,`Approved`,`Needs review`,`Blocking`];var I=()=>[`HTML`];var F=()=>[`JavaScript`];var w=()=>[`TypeScript`];var k=()=>[`Angular`,`Vite`];var D=()=>[`Read only`,`Locked`];var T=()=>[`JavaScript`,`TypeScript`];var L=()=>[`olivia@coreui.io`,`ethan@coreui.io`];var N=()=>[`Product`,`Design`,`Docs`];var g=class m{constructor(){this.#e={Approved:`chip-success`,Blocking:`chip-danger`,Feature:`chip-primary`,"Needs review":`chip-warning`};this.issueClassName=p=>this.#e[p]??``}#e;static{this.ɵfac=function(c){return new(c||m)}}static{this.ɵcmp=Ib({type:m,selectors:[[`app-chip-input`]],decls:224,vars:22,consts:[[`xs`,`12`],[`href`,`forms/chip-input`,`title`,`Chip Input`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/chip-input#basic-example`],[`label`,`Skills:`,`placeholder`,`Add a skill...`,3,`value`],[`href`,`forms/chip-input#variants`],[`aria-label`,`Issue labels`,`placeholder`,`Add label...`,3,`chipClassName`,`value`],[`href`,`forms/chip-input#sizes`],[1,`mb-3`],[`label`,`Small`,`size`,`sm`,`placeholder`,`Add small tag...`,3,`value`],[`label`,`Default`,`placeholder`,`Add default tag...`,3,`value`],[`label`,`Large`,`size`,`lg`,`placeholder`,`Add large tag...`,3,`value`],[`href`,`forms/chip-input#empty-state`],[`aria-label`,`Tags`,`placeholder`,`Start typing tags...`],[`cLabel`,``,`for`,`techStackInput`],[`id`,`techStackInput`,`aria-describedby`,`techStackHint`,`placeholder`,`Add package...`,3,`value`],[`id`,`techStackHint`,`cFormText`,``],[`href`,`forms/chip-input#disabled`],[`aria-label`,`Locked tags`,`disabled`,``,`placeholder`,`Input disabled`,3,`removable`,`value`],[`aria-label`,`Languages`,`readonly`,``,`placeholder`,`Read-only values`,3,`value`],[`href`,`forms/chip-input#with-label`],[1,`row`,`g-3`],[1,`col-12`],[`cLabel`,``,`for`,`recipientsInput`],[`id`,`recipientsInput`,`aria-describedby`,`recipientsHint`,`placeholder`,`Add email...`,3,`value`],[`id`,`recipientsHint`,`cFormText`,``],[`cLabel`,``,`for`,`categoriesInput`],[`id`,`categoriesInput`,`chipClassName`,`chip-outline`,`placeholder`,`Add category...`,3,`value`]],template:function(c,f){c&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Chip Input`),lu(),yT(12,` `),as(13,`small`),yT(14,`Basic example`),lu(),yT(15,`
      `),lu(),yT(16,`
      `),as(17,`c-card-body`),yT(18,`
        `),as(19,`p`,3),yT(20,`
          Chip input lets users enter multiple values in one field. Use the
          `),as(21,`code`),yT(22,`c-chip-input`),lu(),yT(23,` component with inputs like `),as(24,`code`),yT(25,`placeholder`),lu(),yT(26,` and
          `),as(27,`code`),yT(28,`value`),lu(),yT(29,`.
        `),lu(),yT(30,`
        `),as(31,`app-docs-example`,4),yT(32,`
          `),hm(33,`c-chip-input`,5),yT(34,`
        `),lu(),yT(35,`
      `),lu(),yT(36,`
    `),lu(),yT(37,`

    `),as(38,`c-card`,2),yT(39,`
      `),as(40,`c-card-header`),yT(41,`
        `),as(42,`strong`),yT(43,`Angular Chip Input`),lu(),yT(44,` `),as(45,`small`),yT(46,`Variants`),lu(),yT(47,`
      `),lu(),yT(48,`
      `),as(49,`c-card-body`),yT(50,`
        `),as(51,`p`,3),yT(52,`
          Use the `),as(53,`code`),yT(54,`chipClassName`),lu(),yT(55,` input to apply contextual chip styles, which is handy
          for labels, issue types, or priorities.
        `),lu(),yT(56,`
        `),as(57,`app-docs-example`,6),yT(58,`
          `),hm(59,`c-chip-input`,7),yT(60,`
        `),lu(),yT(61,`
      `),lu(),yT(62,`
    `),lu(),yT(63,`

    `),as(64,`c-card`,2),yT(65,`
      `),as(66,`c-card-header`),yT(67,`
        `),as(68,`strong`),yT(69,`Angular Chip Input`),lu(),yT(70,` `),as(71,`small`),yT(72,`Sizes`),lu(),yT(73,`
      `),lu(),yT(74,`
      `),as(75,`c-card-body`),yT(76,`
        `),as(77,`p`,3),yT(78,`
          Use the `),as(79,`code`),yT(80,`size`),lu(),yT(81,` input with `),as(82,`code`),yT(83,`"sm"`),lu(),yT(84,` or `),as(85,`code`),yT(86,`"lg"`),lu(),yT(87,` to align the
          field with surrounding form controls.
        `),lu(),yT(88,`
        `),as(89,`app-docs-example`,8),yT(90,`
          `),as(91,`div`,9),yT(92,`
            `),hm(93,`c-chip-input`,10),yT(94,`
          `),lu(),yT(95,`
          `),as(96,`div`,9),yT(97,`
            `),hm(98,`c-chip-input`,11),yT(99,`
          `),lu(),yT(100,`
          `),hm(101,`c-chip-input`,12),yT(102,`
        `),lu(),yT(103,`
      `),lu(),yT(104,`
    `),lu(),yT(105,`
  `),lu(),yT(106,`

  `),as(107,`c-col`,0),yT(108,`
    `),as(109,`c-card`,2),yT(110,`
      `),as(111,`c-card-header`),yT(112,`
        `),as(113,`strong`),yT(114,`Angular Chip Input`),lu(),yT(115,` `),as(116,`small`),yT(117,`Empty state and label`),lu(),yT(118,`
      `),lu(),yT(119,`
      `),as(120,`c-card-body`),yT(121,`
        `),as(122,`p`,3),yT(123,`
          You can start with an empty field or use a separate `),as(124,`code`),yT(125,`cLabel`),lu(),yT(126,` for clearer form
          structure and accessibility.
        `),lu(),yT(127,`
        `),as(128,`app-docs-example`,13),yT(129,`
          `),as(130,`div`,9),yT(131,`
            `),hm(132,`c-chip-input`,14),yT(133,`
          `),lu(),yT(134,`
          `),as(135,`label`,15),yT(136,`Tech stack`),lu(),yT(137,`
          `),hm(138,`c-chip-input`,16),yT(139,`
          `),as(140,`div`,17),yT(141,`Press Enter or comma to add a value.`),lu(),yT(142,`
        `),lu(),yT(143,`
      `),lu(),yT(144,`
    `),lu(),yT(145,`

    `),as(146,`c-card`,2),yT(147,`
      `),as(148,`c-card-header`),yT(149,`
        `),as(150,`strong`),yT(151,`Angular Chip Input`),lu(),yT(152,` `),as(153,`small`),yT(154,`Disabled and readonly`),lu(),yT(155,`
      `),lu(),yT(156,`
      `),as(157,`c-card-body`),yT(158,`
        `),as(159,`p`,3),yT(160,`
          Use the `),as(161,`code`),yT(162,`disabled`),lu(),yT(163,` input to block interaction entirely, or
          `),as(164,`code`),yT(165,`readonly`),lu(),yT(166,` to keep values visible while preventing changes.
        `),lu(),yT(167,`
        `),as(168,`app-docs-example`,18),yT(169,`
          `),as(170,`div`,9),yT(171,`
            `),hm(172,`c-chip-input`,19),yT(173,`
          `),lu(),yT(174,`
          `),hm(175,`c-chip-input`,20),yT(176,`
        `),lu(),yT(177,`
      `),lu(),yT(178,`
    `),lu(),yT(179,`

    `),as(180,`c-card`,2),yT(181,`
      `),as(182,`c-card-header`),yT(183,`
        `),as(184,`strong`),yT(185,`Angular Chip Input`),lu(),yT(186,` `),as(187,`small`),yT(188,`Form-friendly examples`),lu(),yT(189,`
      `),lu(),yT(190,`
      `),as(191,`c-card-body`),yT(192,`
        `),as(193,`p`,3),yT(194,`
          The component integrates well with ordinary forms, including helper text and predefined
          values.
        `),lu(),yT(195,`
        `),as(196,`app-docs-example`,21),yT(197,`
          `),as(198,`form`,22),yT(199,`
            `),as(200,`div`,23),yT(201,`
              `),as(202,`label`,24),yT(203,`Recipients`),lu(),yT(204,`
              `),hm(205,`c-chip-input`,25),yT(206,`
              `),as(207,`div`,26),yT(208,`Add one address at a time and press Enter.`),lu(),yT(209,`
            `),lu(),yT(210,`
            `),as(211,`div`,23),yT(212,`
              `),as(213,`label`,27),yT(214,`Categories`),lu(),yT(215,`
              `),hm(216,`c-chip-input`,28),yT(217,`
            `),lu(),yT(218,`
          `),lu(),yT(219,`
        `),lu(),yT(220,`
      `),lu(),yT(221,`
    `),lu(),yT(222,`
  `),lu(),yT(223,`
`),lu()),c&2&&(ZD(33),pm(`value`,xT(12,C)),ZD(26),pm(`chipClassName`,f.issueClassName)(`value`,xT(13,A)),ZD(34),pm(`value`,xT(14,I)),ZD(5),pm(`value`,xT(15,F)),ZD(3),pm(`value`,xT(16,w)),ZD(37),pm(`value`,xT(17,k)),ZD(34),pm(`removable`,!1)(`value`,xT(18,D)),ZD(3),pm(`value`,xT(19,T)),ZD(30),pm(`value`,xT(20,L)),ZD(11),pm(`value`,xT(21,N)))},dependencies:[yF,mI,oo,YM,ro,$,c,sF,v0,gF],encapsulation:2})}};export{g as AppChipInputComponent};