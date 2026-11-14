import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{C as Cle,Di as rle,M as F$1,Mt as Oe,Tr as gn,Wi as uU,Zt as S,c as AU,jr as hle,mt as L$1,ot as Ka,rn as U,sa as x,ti as mle,un as Wa,x as Ce}from"./main-VQBM3OGL.js";var C=()=>[`JavaScript`,`TypeScript`,`Accessibility`];var A=()=>[`Feature`,`Approved`,`Needs review`,`Blocking`];var I=()=>[`HTML`];var F=()=>[`JavaScript`];var w=()=>[`TypeScript`];var k=()=>[`Angular`,`Vite`];var D=()=>[`Read only`,`Locked`];var T=()=>[`JavaScript`,`TypeScript`];var L=()=>[`olivia@coreui.io`,`ethan@coreui.io`];var N=()=>[`Product`,`Design`,`Docs`];var g=class m{constructor(){this.#e={Approved:`chip-success`,Blocking:`chip-danger`,Feature:`chip-primary`,"Needs review":`chip-warning`};this.issueClassName=p=>this.#e[p]??``}#e;static{this.ɵfac=function(c){return new(c||m)}}static{this.ɵcmp=x({type:m,selectors:[[`app-chip-input`]],decls:224,vars:22,consts:[[`xs`,`12`],[`href`,`forms/chip-input`,`title`,`Chip Input`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/chip-input#basic-example`],[`label`,`Skills:`,`placeholder`,`Add a skill...`,3,`value`],[`href`,`forms/chip-input#variants`],[`aria-label`,`Issue labels`,`placeholder`,`Add label...`,3,`chipClassName`,`value`],[`href`,`forms/chip-input#sizes`],[1,`mb-3`],[`label`,`Small`,`size`,`sm`,`placeholder`,`Add small tag...`,3,`value`],[`label`,`Default`,`placeholder`,`Add default tag...`,3,`value`],[`label`,`Large`,`size`,`lg`,`placeholder`,`Add large tag...`,3,`value`],[`href`,`forms/chip-input#empty-state`],[`aria-label`,`Tags`,`placeholder`,`Start typing tags...`],[`cLabel`,``,`for`,`techStackInput`],[`id`,`techStackInput`,`aria-describedby`,`techStackHint`,`placeholder`,`Add package...`,3,`value`],[`id`,`techStackHint`,`cFormText`,``],[`href`,`forms/chip-input#disabled`],[`aria-label`,`Locked tags`,`disabled`,``,`placeholder`,`Input disabled`,3,`removable`,`value`],[`aria-label`,`Languages`,`readonly`,``,`placeholder`,`Read-only values`,3,`value`],[`href`,`forms/chip-input#with-label`],[1,`row`,`g-3`],[1,`col-12`],[`cLabel`,``,`for`,`recipientsInput`],[`id`,`recipientsInput`,`aria-describedby`,`recipientsHint`,`placeholder`,`Add email...`,3,`value`],[`id`,`recipientsHint`,`cFormText`,``],[`cLabel`,``,`for`,`categoriesInput`],[`id`,`categoriesInput`,`chipClassName`,`chip-outline`,`placeholder`,`Add category...`,3,`value`]],template:function(c,f){c&1&&(F$1(0,`c-row`),Ce(1,`
  `),F$1(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F$1(6,`c-card`,2),Ce(7,`
      `),F$1(8,`c-card-header`),Ce(9,`
        `),F$1(10,`strong`),Ce(11,`Angular Chip Input`),L$1(),Ce(12,` `),F$1(13,`small`),Ce(14,`Basic example`),L$1(),Ce(15,`
      `),L$1(),Ce(16,`
      `),F$1(17,`c-card-body`),Ce(18,`
        `),F$1(19,`p`,3),Ce(20,`
          Chip input lets users enter multiple values in one field. Use the
          `),F$1(21,`code`),Ce(22,`c-chip-input`),L$1(),Ce(23,` component with inputs like `),F$1(24,`code`),Ce(25,`placeholder`),L$1(),Ce(26,` and
          `),F$1(27,`code`),Ce(28,`value`),L$1(),Ce(29,`.
        `),L$1(),Ce(30,`
        `),F$1(31,`app-docs-example`,4),Ce(32,`
          `),Oe(33,`c-chip-input`,5),Ce(34,`
        `),L$1(),Ce(35,`
      `),L$1(),Ce(36,`
    `),L$1(),Ce(37,`

    `),F$1(38,`c-card`,2),Ce(39,`
      `),F$1(40,`c-card-header`),Ce(41,`
        `),F$1(42,`strong`),Ce(43,`Angular Chip Input`),L$1(),Ce(44,` `),F$1(45,`small`),Ce(46,`Variants`),L$1(),Ce(47,`
      `),L$1(),Ce(48,`
      `),F$1(49,`c-card-body`),Ce(50,`
        `),F$1(51,`p`,3),Ce(52,`
          Use the `),F$1(53,`code`),Ce(54,`chipClassName`),L$1(),Ce(55,` input to apply contextual chip styles, which is handy
          for labels, issue types, or priorities.
        `),L$1(),Ce(56,`
        `),F$1(57,`app-docs-example`,6),Ce(58,`
          `),Oe(59,`c-chip-input`,7),Ce(60,`
        `),L$1(),Ce(61,`
      `),L$1(),Ce(62,`
    `),L$1(),Ce(63,`

    `),F$1(64,`c-card`,2),Ce(65,`
      `),F$1(66,`c-card-header`),Ce(67,`
        `),F$1(68,`strong`),Ce(69,`Angular Chip Input`),L$1(),Ce(70,` `),F$1(71,`small`),Ce(72,`Sizes`),L$1(),Ce(73,`
      `),L$1(),Ce(74,`
      `),F$1(75,`c-card-body`),Ce(76,`
        `),F$1(77,`p`,3),Ce(78,`
          Use the `),F$1(79,`code`),Ce(80,`size`),L$1(),Ce(81,` input with `),F$1(82,`code`),Ce(83,`"sm"`),L$1(),Ce(84,` or `),F$1(85,`code`),Ce(86,`"lg"`),L$1(),Ce(87,` to align the
          field with surrounding form controls.
        `),L$1(),Ce(88,`
        `),F$1(89,`app-docs-example`,8),Ce(90,`
          `),F$1(91,`div`,9),Ce(92,`
            `),Oe(93,`c-chip-input`,10),Ce(94,`
          `),L$1(),Ce(95,`
          `),F$1(96,`div`,9),Ce(97,`
            `),Oe(98,`c-chip-input`,11),Ce(99,`
          `),L$1(),Ce(100,`
          `),Oe(101,`c-chip-input`,12),Ce(102,`
        `),L$1(),Ce(103,`
      `),L$1(),Ce(104,`
    `),L$1(),Ce(105,`
  `),L$1(),Ce(106,`

  `),F$1(107,`c-col`,0),Ce(108,`
    `),F$1(109,`c-card`,2),Ce(110,`
      `),F$1(111,`c-card-header`),Ce(112,`
        `),F$1(113,`strong`),Ce(114,`Angular Chip Input`),L$1(),Ce(115,` `),F$1(116,`small`),Ce(117,`Empty state and label`),L$1(),Ce(118,`
      `),L$1(),Ce(119,`
      `),F$1(120,`c-card-body`),Ce(121,`
        `),F$1(122,`p`,3),Ce(123,`
          You can start with an empty field or use a separate `),F$1(124,`code`),Ce(125,`cLabel`),L$1(),Ce(126,` for clearer form
          structure and accessibility.
        `),L$1(),Ce(127,`
        `),F$1(128,`app-docs-example`,13),Ce(129,`
          `),F$1(130,`div`,9),Ce(131,`
            `),Oe(132,`c-chip-input`,14),Ce(133,`
          `),L$1(),Ce(134,`
          `),F$1(135,`label`,15),Ce(136,`Tech stack`),L$1(),Ce(137,`
          `),Oe(138,`c-chip-input`,16),Ce(139,`
          `),F$1(140,`div`,17),Ce(141,`Press Enter or comma to add a value.`),L$1(),Ce(142,`
        `),L$1(),Ce(143,`
      `),L$1(),Ce(144,`
    `),L$1(),Ce(145,`

    `),F$1(146,`c-card`,2),Ce(147,`
      `),F$1(148,`c-card-header`),Ce(149,`
        `),F$1(150,`strong`),Ce(151,`Angular Chip Input`),L$1(),Ce(152,` `),F$1(153,`small`),Ce(154,`Disabled and readonly`),L$1(),Ce(155,`
      `),L$1(),Ce(156,`
      `),F$1(157,`c-card-body`),Ce(158,`
        `),F$1(159,`p`,3),Ce(160,`
          Use the `),F$1(161,`code`),Ce(162,`disabled`),L$1(),Ce(163,` input to block interaction entirely, or
          `),F$1(164,`code`),Ce(165,`readonly`),L$1(),Ce(166,` to keep values visible while preventing changes.
        `),L$1(),Ce(167,`
        `),F$1(168,`app-docs-example`,18),Ce(169,`
          `),F$1(170,`div`,9),Ce(171,`
            `),Oe(172,`c-chip-input`,19),Ce(173,`
          `),L$1(),Ce(174,`
          `),Oe(175,`c-chip-input`,20),Ce(176,`
        `),L$1(),Ce(177,`
      `),L$1(),Ce(178,`
    `),L$1(),Ce(179,`

    `),F$1(180,`c-card`,2),Ce(181,`
      `),F$1(182,`c-card-header`),Ce(183,`
        `),F$1(184,`strong`),Ce(185,`Angular Chip Input`),L$1(),Ce(186,` `),F$1(187,`small`),Ce(188,`Form-friendly examples`),L$1(),Ce(189,`
      `),L$1(),Ce(190,`
      `),F$1(191,`c-card-body`),Ce(192,`
        `),F$1(193,`p`,3),Ce(194,`
          The component integrates well with ordinary forms, including helper text and predefined
          values.
        `),L$1(),Ce(195,`
        `),F$1(196,`app-docs-example`,21),Ce(197,`
          `),F$1(198,`form`,22),Ce(199,`
            `),F$1(200,`div`,23),Ce(201,`
              `),F$1(202,`label`,24),Ce(203,`Recipients`),L$1(),Ce(204,`
              `),Oe(205,`c-chip-input`,25),Ce(206,`
              `),F$1(207,`div`,26),Ce(208,`Add one address at a time and press Enter.`),L$1(),Ce(209,`
            `),L$1(),Ce(210,`
            `),F$1(211,`div`,23),Ce(212,`
              `),F$1(213,`label`,27),Ce(214,`Categories`),L$1(),Ce(215,`
              `),Oe(216,`c-chip-input`,28),Ce(217,`
            `),L$1(),Ce(218,`
          `),L$1(),Ce(219,`
        `),L$1(),Ce(220,`
      `),L$1(),Ce(221,`
    `),L$1(),Ce(222,`
  `),L$1(),Ce(223,`
`),L$1()),c&2&&(S(33),U(`value`,gn(12,C)),S(26),U(`chipClassName`,f.issueClassName)(`value`,gn(13,A)),S(34),U(`value`,gn(14,I)),S(5),U(`value`,gn(15,F)),S(3),U(`value`,gn(16,w)),S(37),U(`value`,gn(17,k)),S(34),U(`removable`,!1)(`value`,gn(18,D)),S(3),U(`value`,gn(19,T)),S(30),U(`value`,gn(20,L)),S(11),U(`value`,gn(21,N)))},dependencies:[Cle,AU,Wa,uU,Ka,E,c,rle,hle,mle],encapsulation:2})}};export{g as AppChipInputComponent};