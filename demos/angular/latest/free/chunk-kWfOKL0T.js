import{$t as V,A as F$1,D as E,Hr as ke,Lr as ja,Ni as sse,Pn as _,Qi as vse,Vr as k$1,d as Ba,fa as ye,gr as fn,ht as Mse,q as IH,qn as bse,qt as UH}from"./main-LLRB5LYM.js";import{t as E$1}from"./chunk-eqjpOFdh.js";import{t as c}from"./chunk-Dzn1Wg-Q.js";var C=()=>[`JavaScript`,`TypeScript`,`Accessibility`];var A=()=>[`Feature`,`Approved`,`Needs review`,`Blocking`];var I=()=>[`HTML`];var F=()=>[`JavaScript`];var w=()=>[`TypeScript`];var k=()=>[`Angular`,`Vite`];var D=()=>[`Read only`,`Locked`];var T=()=>[`JavaScript`,`TypeScript`];var L=()=>[`olivia@coreui.io`,`ethan@coreui.io`];var N=()=>[`Product`,`Design`,`Docs`];var g=class m{constructor(){this.#e={Approved:`chip-success`,Blocking:`chip-danger`,Feature:`chip-primary`,"Needs review":`chip-warning`};this.issueClassName=p=>this.#e[p]??``}#e;static{this.ɵfac=function(c){return new(c||m)}}static{this.ɵcmp=E({type:m,selectors:[[`app-chip-input`]],decls:224,vars:22,consts:[[`xs`,`12`],[`href`,`forms/chip-input`,`title`,`Chip Input`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/chip-input#basic-example`],[`label`,`Skills:`,`placeholder`,`Add a skill...`,3,`value`],[`href`,`forms/chip-input#variants`],[`aria-label`,`Issue labels`,`placeholder`,`Add label...`,3,`chipClassName`,`value`],[`href`,`forms/chip-input#sizes`],[1,`mb-3`],[`label`,`Small`,`size`,`sm`,`placeholder`,`Add small tag...`,3,`value`],[`label`,`Default`,`placeholder`,`Add default tag...`,3,`value`],[`label`,`Large`,`size`,`lg`,`placeholder`,`Add large tag...`,3,`value`],[`href`,`forms/chip-input#empty-state`],[`aria-label`,`Tags`,`placeholder`,`Start typing tags...`],[`cLabel`,``,`for`,`techStackInput`],[`id`,`techStackInput`,`aria-describedby`,`techStackHint`,`placeholder`,`Add package...`,3,`value`],[`id`,`techStackHint`,`cFormText`,``],[`href`,`forms/chip-input#disabled`],[`aria-label`,`Locked tags`,`disabled`,``,`placeholder`,`Input disabled`,3,`removable`,`value`],[`aria-label`,`Languages`,`readonly`,``,`placeholder`,`Read-only values`,3,`value`],[`href`,`forms/chip-input#with-label`],[1,`row`,`g-3`],[1,`col-12`],[`cLabel`,``,`for`,`recipientsInput`],[`id`,`recipientsInput`,`aria-describedby`,`recipientsHint`,`placeholder`,`Add email...`,3,`value`],[`id`,`recipientsHint`,`cFormText`,``],[`cLabel`,``,`for`,`categoriesInput`],[`id`,`categoriesInput`,`chipClassName`,`chip-outline`,`placeholder`,`Add category...`,3,`value`]],template:function(c,f){c&1&&(k$1(0,`c-row`),ye(1,`
  `),k$1(2,`c-col`,0),ye(3,`
    `),ke(4,`app-docs-components`,1),ye(5,`
    `),k$1(6,`c-card`,2),ye(7,`
      `),k$1(8,`c-card-header`),ye(9,`
        `),k$1(10,`strong`),ye(11,`Angular Chip Input`),F$1(),ye(12,` `),k$1(13,`small`),ye(14,`Basic example`),F$1(),ye(15,`
      `),F$1(),ye(16,`
      `),k$1(17,`c-card-body`),ye(18,`
        `),k$1(19,`p`,3),ye(20,`
          Chip input lets users enter multiple values in one field. Use the
          `),k$1(21,`code`),ye(22,`c-chip-input`),F$1(),ye(23,` component with inputs like `),k$1(24,`code`),ye(25,`placeholder`),F$1(),ye(26,` and
          `),k$1(27,`code`),ye(28,`value`),F$1(),ye(29,`.
        `),F$1(),ye(30,`
        `),k$1(31,`app-docs-example`,4),ye(32,`
          `),ke(33,`c-chip-input`,5),ye(34,`
        `),F$1(),ye(35,`
      `),F$1(),ye(36,`
    `),F$1(),ye(37,`

    `),k$1(38,`c-card`,2),ye(39,`
      `),k$1(40,`c-card-header`),ye(41,`
        `),k$1(42,`strong`),ye(43,`Angular Chip Input`),F$1(),ye(44,` `),k$1(45,`small`),ye(46,`Variants`),F$1(),ye(47,`
      `),F$1(),ye(48,`
      `),k$1(49,`c-card-body`),ye(50,`
        `),k$1(51,`p`,3),ye(52,`
          Use the `),k$1(53,`code`),ye(54,`chipClassName`),F$1(),ye(55,` input to apply contextual chip styles, which is handy
          for labels, issue types, or priorities.
        `),F$1(),ye(56,`
        `),k$1(57,`app-docs-example`,6),ye(58,`
          `),ke(59,`c-chip-input`,7),ye(60,`
        `),F$1(),ye(61,`
      `),F$1(),ye(62,`
    `),F$1(),ye(63,`

    `),k$1(64,`c-card`,2),ye(65,`
      `),k$1(66,`c-card-header`),ye(67,`
        `),k$1(68,`strong`),ye(69,`Angular Chip Input`),F$1(),ye(70,` `),k$1(71,`small`),ye(72,`Sizes`),F$1(),ye(73,`
      `),F$1(),ye(74,`
      `),k$1(75,`c-card-body`),ye(76,`
        `),k$1(77,`p`,3),ye(78,`
          Use the `),k$1(79,`code`),ye(80,`size`),F$1(),ye(81,` input with `),k$1(82,`code`),ye(83,`"sm"`),F$1(),ye(84,` or `),k$1(85,`code`),ye(86,`"lg"`),F$1(),ye(87,` to align the
          field with surrounding form controls.
        `),F$1(),ye(88,`
        `),k$1(89,`app-docs-example`,8),ye(90,`
          `),k$1(91,`div`,9),ye(92,`
            `),ke(93,`c-chip-input`,10),ye(94,`
          `),F$1(),ye(95,`
          `),k$1(96,`div`,9),ye(97,`
            `),ke(98,`c-chip-input`,11),ye(99,`
          `),F$1(),ye(100,`
          `),ke(101,`c-chip-input`,12),ye(102,`
        `),F$1(),ye(103,`
      `),F$1(),ye(104,`
    `),F$1(),ye(105,`
  `),F$1(),ye(106,`

  `),k$1(107,`c-col`,0),ye(108,`
    `),k$1(109,`c-card`,2),ye(110,`
      `),k$1(111,`c-card-header`),ye(112,`
        `),k$1(113,`strong`),ye(114,`Angular Chip Input`),F$1(),ye(115,` `),k$1(116,`small`),ye(117,`Empty state and label`),F$1(),ye(118,`
      `),F$1(),ye(119,`
      `),k$1(120,`c-card-body`),ye(121,`
        `),k$1(122,`p`,3),ye(123,`
          You can start with an empty field or use a separate `),k$1(124,`code`),ye(125,`cLabel`),F$1(),ye(126,` for clearer form
          structure and accessibility.
        `),F$1(),ye(127,`
        `),k$1(128,`app-docs-example`,13),ye(129,`
          `),k$1(130,`div`,9),ye(131,`
            `),ke(132,`c-chip-input`,14),ye(133,`
          `),F$1(),ye(134,`
          `),k$1(135,`label`,15),ye(136,`Tech stack`),F$1(),ye(137,`
          `),ke(138,`c-chip-input`,16),ye(139,`
          `),k$1(140,`div`,17),ye(141,`Press Enter or comma to add a value.`),F$1(),ye(142,`
        `),F$1(),ye(143,`
      `),F$1(),ye(144,`
    `),F$1(),ye(145,`

    `),k$1(146,`c-card`,2),ye(147,`
      `),k$1(148,`c-card-header`),ye(149,`
        `),k$1(150,`strong`),ye(151,`Angular Chip Input`),F$1(),ye(152,` `),k$1(153,`small`),ye(154,`Disabled and readonly`),F$1(),ye(155,`
      `),F$1(),ye(156,`
      `),k$1(157,`c-card-body`),ye(158,`
        `),k$1(159,`p`,3),ye(160,`
          Use the `),k$1(161,`code`),ye(162,`disabled`),F$1(),ye(163,` input to block interaction entirely, or
          `),k$1(164,`code`),ye(165,`readonly`),F$1(),ye(166,` to keep values visible while preventing changes.
        `),F$1(),ye(167,`
        `),k$1(168,`app-docs-example`,18),ye(169,`
          `),k$1(170,`div`,9),ye(171,`
            `),ke(172,`c-chip-input`,19),ye(173,`
          `),F$1(),ye(174,`
          `),ke(175,`c-chip-input`,20),ye(176,`
        `),F$1(),ye(177,`
      `),F$1(),ye(178,`
    `),F$1(),ye(179,`

    `),k$1(180,`c-card`,2),ye(181,`
      `),k$1(182,`c-card-header`),ye(183,`
        `),k$1(184,`strong`),ye(185,`Angular Chip Input`),F$1(),ye(186,` `),k$1(187,`small`),ye(188,`Form-friendly examples`),F$1(),ye(189,`
      `),F$1(),ye(190,`
      `),k$1(191,`c-card-body`),ye(192,`
        `),k$1(193,`p`,3),ye(194,`
          The component integrates well with ordinary forms, including helper text and predefined
          values.
        `),F$1(),ye(195,`
        `),k$1(196,`app-docs-example`,21),ye(197,`
          `),k$1(198,`form`,22),ye(199,`
            `),k$1(200,`div`,23),ye(201,`
              `),k$1(202,`label`,24),ye(203,`Recipients`),F$1(),ye(204,`
              `),ke(205,`c-chip-input`,25),ye(206,`
              `),k$1(207,`div`,26),ye(208,`Add one address at a time and press Enter.`),F$1(),ye(209,`
            `),F$1(),ye(210,`
            `),k$1(211,`div`,23),ye(212,`
              `),k$1(213,`label`,27),ye(214,`Categories`),F$1(),ye(215,`
              `),ke(216,`c-chip-input`,28),ye(217,`
            `),F$1(),ye(218,`
          `),F$1(),ye(219,`
        `),F$1(),ye(220,`
      `),F$1(),ye(221,`
    `),F$1(),ye(222,`
  `),F$1(),ye(223,`
`),F$1()),c&2&&(_(33),V(`value`,fn(12,C)),_(26),V(`chipClassName`,f.issueClassName)(`value`,fn(13,A)),_(34),V(`value`,fn(14,I)),_(5),V(`value`,fn(15,F)),_(3),V(`value`,fn(16,w)),_(37),V(`value`,fn(17,k)),_(34),V(`removable`,!1)(`value`,fn(18,D)),_(3),V(`value`,fn(19,T)),_(30),V(`value`,fn(20,L)),_(11),V(`value`,fn(21,N)))},dependencies:[Mse,UH,Ba,IH,ja,E$1,c,sse,vse,bse],encapsulation:2})}};export{g as AppChipInputComponent};