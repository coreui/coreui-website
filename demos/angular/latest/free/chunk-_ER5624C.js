import{Dt as O,Ft as Pa,Gi as un,Wt as Re,Yt as S,_n as VV,ai as nH,br as goe,en as T$1,gn as V,gt as La,j as F$1,na as woe,on as Toe,qt as Roe,ua as ye}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var C=()=>[`JavaScript`,`TypeScript`,`Accessibility`];var A=()=>[`Feature`,`Approved`,`Needs review`,`Blocking`];var I=()=>[`HTML`];var F=()=>[`JavaScript`];var w=()=>[`TypeScript`];var k=()=>[`Angular`,`Vite`];var D=()=>[`Read only`,`Locked`];var T=()=>[`JavaScript`,`TypeScript`];var L=()=>[`olivia@coreui.io`,`ethan@coreui.io`];var N=()=>[`Product`,`Design`,`Docs`];var g=class m{constructor(){this.#e={Approved:`chip-success`,Blocking:`chip-danger`,Feature:`chip-primary`,"Needs review":`chip-warning`};this.issueClassName=p=>this.#e[p]??``}#e;static{this.ɵfac=function(c){return new(c||m)}}static{this.ɵcmp=T$1({type:m,selectors:[[`app-chip-input`]],decls:224,vars:22,consts:[[`xs`,`12`],[`href`,`forms/chip-input`,`title`,`Chip Input`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/chip-input#basic-example`],[`label`,`Skills:`,`placeholder`,`Add a skill...`,3,`value`],[`href`,`forms/chip-input#variants`],[`aria-label`,`Issue labels`,`placeholder`,`Add label...`,3,`chipClassName`,`value`],[`href`,`forms/chip-input#sizes`],[1,`mb-3`],[`label`,`Small`,`size`,`sm`,`placeholder`,`Add small tag...`,3,`value`],[`label`,`Default`,`placeholder`,`Add default tag...`,3,`value`],[`label`,`Large`,`size`,`lg`,`placeholder`,`Add large tag...`,3,`value`],[`href`,`forms/chip-input#empty-state`],[`aria-label`,`Tags`,`placeholder`,`Start typing tags...`],[`cLabel`,``,`for`,`techStackInput`],[`id`,`techStackInput`,`aria-describedby`,`techStackHint`,`placeholder`,`Add package...`,3,`value`],[`id`,`techStackHint`,`cFormText`,``],[`href`,`forms/chip-input#disabled`],[`aria-label`,`Locked tags`,`disabled`,``,`placeholder`,`Input disabled`,3,`removable`,`value`],[`aria-label`,`Languages`,`readonly`,``,`placeholder`,`Read-only values`,3,`value`],[`href`,`forms/chip-input#with-label`],[1,`row`,`g-3`],[1,`col-12`],[`cLabel`,``,`for`,`recipientsInput`],[`id`,`recipientsInput`,`aria-describedby`,`recipientsHint`,`placeholder`,`Add email...`,3,`value`],[`id`,`recipientsHint`,`cFormText`,``],[`cLabel`,``,`for`,`categoriesInput`],[`id`,`categoriesInput`,`chipClassName`,`chip-outline`,`placeholder`,`Add category...`,3,`value`]],template:function(c,f){c&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Chip Input`),F$1(),ye(12,` `),O(13,`small`),ye(14,`Basic example`),F$1(),ye(15,`
      `),F$1(),ye(16,`
      `),O(17,`c-card-body`),ye(18,`
        `),O(19,`p`,3),ye(20,`
          Chip input lets users enter multiple values in one field. Use the
          `),O(21,`code`),ye(22,`c-chip-input`),F$1(),ye(23,` component with inputs like `),O(24,`code`),ye(25,`placeholder`),F$1(),ye(26,` and
          `),O(27,`code`),ye(28,`value`),F$1(),ye(29,`.
        `),F$1(),ye(30,`
        `),O(31,`app-docs-example`,4),ye(32,`
          `),Re(33,`c-chip-input`,5),ye(34,`
        `),F$1(),ye(35,`
      `),F$1(),ye(36,`
    `),F$1(),ye(37,`

    `),O(38,`c-card`,2),ye(39,`
      `),O(40,`c-card-header`),ye(41,`
        `),O(42,`strong`),ye(43,`Angular Chip Input`),F$1(),ye(44,` `),O(45,`small`),ye(46,`Variants`),F$1(),ye(47,`
      `),F$1(),ye(48,`
      `),O(49,`c-card-body`),ye(50,`
        `),O(51,`p`,3),ye(52,`
          Use the `),O(53,`code`),ye(54,`chipClassName`),F$1(),ye(55,` input to apply contextual chip styles, which is handy
          for labels, issue types, or priorities.
        `),F$1(),ye(56,`
        `),O(57,`app-docs-example`,6),ye(58,`
          `),Re(59,`c-chip-input`,7),ye(60,`
        `),F$1(),ye(61,`
      `),F$1(),ye(62,`
    `),F$1(),ye(63,`

    `),O(64,`c-card`,2),ye(65,`
      `),O(66,`c-card-header`),ye(67,`
        `),O(68,`strong`),ye(69,`Angular Chip Input`),F$1(),ye(70,` `),O(71,`small`),ye(72,`Sizes`),F$1(),ye(73,`
      `),F$1(),ye(74,`
      `),O(75,`c-card-body`),ye(76,`
        `),O(77,`p`,3),ye(78,`
          Use the `),O(79,`code`),ye(80,`size`),F$1(),ye(81,` input with `),O(82,`code`),ye(83,`"sm"`),F$1(),ye(84,` or `),O(85,`code`),ye(86,`"lg"`),F$1(),ye(87,` to align the
          field with surrounding form controls.
        `),F$1(),ye(88,`
        `),O(89,`app-docs-example`,8),ye(90,`
          `),O(91,`div`,9),ye(92,`
            `),Re(93,`c-chip-input`,10),ye(94,`
          `),F$1(),ye(95,`
          `),O(96,`div`,9),ye(97,`
            `),Re(98,`c-chip-input`,11),ye(99,`
          `),F$1(),ye(100,`
          `),Re(101,`c-chip-input`,12),ye(102,`
        `),F$1(),ye(103,`
      `),F$1(),ye(104,`
    `),F$1(),ye(105,`
  `),F$1(),ye(106,`

  `),O(107,`c-col`,0),ye(108,`
    `),O(109,`c-card`,2),ye(110,`
      `),O(111,`c-card-header`),ye(112,`
        `),O(113,`strong`),ye(114,`Angular Chip Input`),F$1(),ye(115,` `),O(116,`small`),ye(117,`Empty state and label`),F$1(),ye(118,`
      `),F$1(),ye(119,`
      `),O(120,`c-card-body`),ye(121,`
        `),O(122,`p`,3),ye(123,`
          You can start with an empty field or use a separate `),O(124,`code`),ye(125,`cLabel`),F$1(),ye(126,` for clearer form
          structure and accessibility.
        `),F$1(),ye(127,`
        `),O(128,`app-docs-example`,13),ye(129,`
          `),O(130,`div`,9),ye(131,`
            `),Re(132,`c-chip-input`,14),ye(133,`
          `),F$1(),ye(134,`
          `),O(135,`label`,15),ye(136,`Tech stack`),F$1(),ye(137,`
          `),Re(138,`c-chip-input`,16),ye(139,`
          `),O(140,`div`,17),ye(141,`Press Enter or comma to add a value.`),F$1(),ye(142,`
        `),F$1(),ye(143,`
      `),F$1(),ye(144,`
    `),F$1(),ye(145,`

    `),O(146,`c-card`,2),ye(147,`
      `),O(148,`c-card-header`),ye(149,`
        `),O(150,`strong`),ye(151,`Angular Chip Input`),F$1(),ye(152,` `),O(153,`small`),ye(154,`Disabled and readonly`),F$1(),ye(155,`
      `),F$1(),ye(156,`
      `),O(157,`c-card-body`),ye(158,`
        `),O(159,`p`,3),ye(160,`
          Use the `),O(161,`code`),ye(162,`disabled`),F$1(),ye(163,` input to block interaction entirely, or
          `),O(164,`code`),ye(165,`readonly`),F$1(),ye(166,` to keep values visible while preventing changes.
        `),F$1(),ye(167,`
        `),O(168,`app-docs-example`,18),ye(169,`
          `),O(170,`div`,9),ye(171,`
            `),Re(172,`c-chip-input`,19),ye(173,`
          `),F$1(),ye(174,`
          `),Re(175,`c-chip-input`,20),ye(176,`
        `),F$1(),ye(177,`
      `),F$1(),ye(178,`
    `),F$1(),ye(179,`

    `),O(180,`c-card`,2),ye(181,`
      `),O(182,`c-card-header`),ye(183,`
        `),O(184,`strong`),ye(185,`Angular Chip Input`),F$1(),ye(186,` `),O(187,`small`),ye(188,`Form-friendly examples`),F$1(),ye(189,`
      `),F$1(),ye(190,`
      `),O(191,`c-card-body`),ye(192,`
        `),O(193,`p`,3),ye(194,`
          The component integrates well with ordinary forms, including helper text and predefined
          values.
        `),F$1(),ye(195,`
        `),O(196,`app-docs-example`,21),ye(197,`
          `),O(198,`form`,22),ye(199,`
            `),O(200,`div`,23),ye(201,`
              `),O(202,`label`,24),ye(203,`Recipients`),F$1(),ye(204,`
              `),Re(205,`c-chip-input`,25),ye(206,`
              `),O(207,`div`,26),ye(208,`Add one address at a time and press Enter.`),F$1(),ye(209,`
            `),F$1(),ye(210,`
            `),O(211,`div`,23),ye(212,`
              `),O(213,`label`,27),ye(214,`Categories`),F$1(),ye(215,`
              `),Re(216,`c-chip-input`,28),ye(217,`
            `),F$1(),ye(218,`
          `),F$1(),ye(219,`
        `),F$1(),ye(220,`
      `),F$1(),ye(221,`
    `),F$1(),ye(222,`
  `),F$1(),ye(223,`
`),F$1()),c&2&&(S(33),V(`value`,un(12,C)),S(26),V(`chipClassName`,f.issueClassName)(`value`,un(13,A)),S(34),V(`value`,un(14,I)),S(5),V(`value`,un(15,F)),S(3),V(`value`,un(16,w)),S(37),V(`value`,un(17,k)),S(34),V(`removable`,!1)(`value`,un(18,D)),S(3),V(`value`,un(19,T)),S(30),V(`value`,un(20,L)),S(11),V(`value`,un(21,N)))},dependencies:[Roe,nH,Pa,VV,La,E,c,goe,woe,Toe],encapsulation:2})}};export{g as AppChipInputComponent};