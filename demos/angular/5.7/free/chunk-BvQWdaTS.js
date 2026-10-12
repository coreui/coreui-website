import{Dt as O,Ft as Pa,P as FV,Wt as Re,_n as VV,ai as nH,en as T,gt as La,j as F,qt as Roe,sr as dse,ua as ye}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var u=class o{static{this.ɵfac=function(r){return new(r||o)}}static{this.ɵcmp=T({type:o,selectors:[[`app-spinners`]],decls:189,vars:0,consts:[[`xs`,`12`],[`href`,`components/spinner`,`title`,`Spinner`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/spinner`],[`href`,`components/spinner#colors`],[`color`,`primary`],[`color`,`secondary`],[`color`,`success`],[`color`,`danger`],[`color`,`warning`],[`color`,`info`],[`color`,`light`],[`color`,`dark`],[`href`,`components/spinner#growing-spinner`],[`variant`,`grow`],[`color`,`primary`,`variant`,`grow`],[`color`,`secondary`,`variant`,`grow`],[`color`,`success`,`variant`,`grow`],[`color`,`danger`,`variant`,`grow`],[`color`,`warning`,`variant`,`grow`],[`color`,`info`,`variant`,`grow`],[`color`,`light`,`variant`,`grow`],[`color`,`dark`,`variant`,`grow`],[`href`,`components/spinner#size`],[`size`,`sm`],[`size`,`sm`,`variant`,`grow`],[`href`,`components/spinner#buttons`],[`cButton`,``,`disabled`,``,1,`m-1`],[`aria-hidden`,`true`,`size`,`sm`],[`aria-hidden`,`true`,`size`,`sm`,`variant`,`grow`]],template:function(r,h){r&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Spinner`),F(),ye(12,` `),O(13,`small`),ye(14,`Border`),F(),ye(15,`
      `),F(),ye(16,`
      `),O(17,`c-card-body`),ye(18,`
        `),O(19,`p`,3),ye(20,`
          Use the border spinners for a lightweight loading indicator.
        `),F(),ye(21,`
        `),O(22,`app-docs-example`,4),ye(23,`
          `),Re(24,`c-spinner`),ye(25,`
        `),F(),ye(26,`
        `),O(27,`p`,3),ye(28,`
          The border spinner uses `),O(29,`code`),ye(30,`currentColor`),F(),ye(31,` for its `),O(32,`code`),ye(33,`border-color`),F(),ye(34,`.
          You can use any of our text color utilities on the standard spinner.
        `),F(),ye(35,`
        `),O(36,`app-docs-example`,5),ye(37,`
          `),Re(38,`c-spinner`,6),ye(39,`
          `),Re(40,`c-spinner`,7),ye(41,`
          `),Re(42,`c-spinner`,8),ye(43,`
          `),Re(44,`c-spinner`,9),ye(45,`
          `),Re(46,`c-spinner`,10),ye(47,`
          `),Re(48,`c-spinner`,11),ye(49,`
          `),Re(50,`c-spinner`,12),ye(51,`
          `),Re(52,`c-spinner`,13),ye(53,`
        `),F(),ye(54,`
      `),F(),ye(55,`
    `),F(),ye(56,`
  `),F(),ye(57,`
  `),O(58,`c-col`,0),ye(59,`
    `),O(60,`c-card`,2),ye(61,`
      `),O(62,`c-card-header`),ye(63,`
        `),O(64,`strong`),ye(65,`Angular Spinner`),F(),ye(66,` `),O(67,`small`),ye(68,`Growing`),F(),ye(69,`
      `),F(),ye(70,`
      `),O(71,`c-card-body`),ye(72,`
        `),O(73,`p`,3),ye(74,`
          If you don'tfancy a border spinner, switch to the grow spinner. While it
          doesn't technically spin, it does repeatedly grow!
        `),F(),ye(75,`
        `),O(76,`app-docs-example`,14),ye(77,`
          `),Re(78,`c-spinner`,15),ye(79,`
        `),F(),ye(80,`
        `),O(81,`p`,3),ye(82,`
          Once again, this spinner is built with `),O(83,`code`),ye(84,`currentColor`),F(),ye(85,`, so you can easily
          change its appearance. Here it is in blue, along with the supported variants.
        `),F(),ye(86,`
        `),O(87,`app-docs-example`,14),ye(88,`
          `),Re(89,`c-spinner`,16),ye(90,`
          `),Re(91,`c-spinner`,17),ye(92,`
          `),Re(93,`c-spinner`,18),ye(94,`
          `),Re(95,`c-spinner`,19),ye(96,`
          `),Re(97,`c-spinner`,20),ye(98,`
          `),Re(99,`c-spinner`,21),ye(100,`
          `),Re(101,`c-spinner`,22),ye(102,`
          `),Re(103,`c-spinner`,23),ye(104,`
        `),F(),ye(105,`
      `),F(),ye(106,`
    `),F(),ye(107,`
  `),F(),ye(108,`
  `),O(109,`c-col`,0),ye(110,`
    `),O(111,`c-card`,2),ye(112,`
      `),O(113,`c-card-header`),ye(114,`
        `),O(115,`strong`),ye(116,`Angular Spinner`),F(),ye(117,` `),O(118,`small`),ye(119,`Size`),F(),ye(120,`
      `),F(),ye(121,`
      `),O(122,`c-card-body`),ye(123,`
        `),O(124,`p`,3),ye(125,`
          Add `),O(126,`code`),ye(127,`size="sm"`),F(),ye(128,` property to make a smaller spinner that can quickly
          be used within other components.
        `),F(),ye(129,`
        `),O(130,`app-docs-example`,24),ye(131,`
          `),Re(132,`c-spinner`,25),ye(133,`
          `),Re(134,`c-spinner`,26),ye(135,`
        `),F(),ye(136,`
      `),F(),ye(137,`
    `),F(),ye(138,`
  `),F(),ye(139,`
  `),O(140,`c-col`,0),ye(141,`
    `),O(142,`c-card`,2),ye(143,`
      `),O(144,`c-card-header`),ye(145,`
        `),O(146,`strong`),ye(147,`Angular Spinner`),F(),ye(148,` `),O(149,`small`),ye(150,`Buttons`),F(),ye(151,`
      `),F(),ye(152,`
      `),O(153,`c-card-body`),ye(154,`
        `),O(155,`p`,3),ye(156,`
          Use spinners within buttons to indicate an action is currently processing or taking
          place. You may also swap the text out of the spinner element and utilize button text
          as needed.
        `),F(),ye(157,`
        `),O(158,`app-docs-example`,27),ye(159,`
          `),O(160,`button`,28),ye(161,`
            `),Re(162,`c-spinner`,29),ye(163,`
          `),F(),ye(164,`
          `),O(165,`button`,28),ye(166,`
            `),Re(167,`c-spinner`,29),ye(168,`
            Loading...
          `),F(),ye(169,`
        `),F(),ye(170,`
        `),O(171,`app-docs-example`,27),ye(172,`
          `),Re(173,`br`),ye(174,`
          `),O(175,`button`,28),ye(176,`
            `),Re(177,`c-spinner`,30),ye(178,`
          `),F(),ye(179,`
          `),O(180,`button`,28),ye(181,`
            `),Re(182,`c-spinner`,30),ye(183,`
            Loading...
          `),F(),ye(184,`
        `),F(),ye(185,`
      `),F(),ye(186,`
    `),F(),ye(187,`
  `),F(),ye(188,`
`),F())},dependencies:[Roe,nH,Pa,VV,La,E,dse,FV,c],encapsulation:2})}};export{u as SpinnersComponent};