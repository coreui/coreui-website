import{Ni as yT,U as Ib,Zn as hm,gn as as,in as ZD,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{Kn as ro,Nn as oF,Pn as oo,in as fF,tr as uI,un as h0,vn as jF,xt as WM,yt as WC}from"./main-PMR57QFK.js";import{t as $}from"./chunk-C7H7fec3.js";import"./chunk-DeRLTHfv.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-BjxcDeUZ.js";var P=class r{static{this.ɵfac=function(m){return new(m||r)}}static{this.ɵcmp=Ib({type:r,selectors:[[`app-otp-input`]],decls:234,vars:2,consts:[[`xs`,`12`],[`href`,`forms/otp/`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/otp/#example`],[`cForm`,``],[`cLabel`,``,`for`,`basicOTP`],[`id`,`basicOTP`],[`cOtp`,``],[`href`,`forms/otp/#one-time-password-types`],[1,`mb-3`],[`cLabel`,``,`for`,`numericOTP`],[`id`,`numericOTP`,`type`,`number`],[`cLabel`,``,`for`,`textOTP`],[`id`,`textOTP`,`type`,`text`],[`cLabel`,``,`for`,`maskedOTP`],[`id`,`maskedOTP`,3,`masked`],[`href`,`forms/otp/#custom-layouts`],[`cLabel`,``,`for`,`separatorOTP`],[`id`,`separatorOTP`],[1,`px-2`,`text-body-tertiary`,`fw-bold`],[`cLabel`,``,`for`,`nineDigitOTP`],[`id`,`nineDigitOTP`],[`cLabel`,``,`for`,`pinOTP`],[`id`,`pinOTP`,3,`masked`]],template:function(m,w){m&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular One Time Password (OTP) Input`),lu(),yT(12,`
      `),lu(),yT(13,`
      `),as(14,`c-card-body`),yT(15,`
        `),as(16,`p`,3),yT(17,`
          The `),as(18,`code`),yT(19,`<c-one-time-password>`),lu(),yT(20,` component and the `),as(21,`code`),yT(22,`cOtp`),lu(),yT(23,` directive create secure
          `),as(24,`b`),yT(25,`Angular OTP input fields`),lu(),yT(26,` with automatic character navigation and validation. Perfect for two-factor
          authentication, SMS verification codes, and secure login flows.
        `),lu(),yT(27,`
        `),as(28,`app-docs-example`,4),yT(29,`
          `),as(30,`form`,5),yT(31,`
            `),as(32,`label`,6),yT(33,`Enter OTP Code`),lu(),yT(34,`
            `),as(35,`c-one-time-password`,7),yT(36,`
              `),hm(37,`input`,8),yT(38,`
              `),hm(39,`input`,8),yT(40,`
              `),hm(41,`input`,8),yT(42,`
              `),hm(43,`input`,8),yT(44,`
              `),hm(45,`input`,8),yT(46,`
              `),hm(47,`input`,8),yT(48,`
            `),lu(),yT(49,`
          `),lu(),yT(50,`
        `),lu(),yT(51,`
      `),lu(),yT(52,`
    `),lu(),yT(53,`
    `),as(54,`c-card`,2),yT(55,`
      `),as(56,`c-card-header`),yT(57,`
        `),as(58,`strong`),yT(59,`Angular One Time Password (OTP) Input`),lu(),yT(60,` `),as(61,`small`),yT(62,`One-time password types`),lu(),yT(63,`
      `),lu(),yT(64,`
      `),as(65,`c-card-body`),yT(66,`
        `),as(67,`p`,3),yT(68,`
          The one-time password input supports different input types for various use cases.
        `),lu(),yT(69,`
        `),as(70,`app-docs-example`,9),yT(71,`
          `),as(72,`div`,10),yT(73,`
            `),as(74,`label`,11),yT(75,`Numeric OTP (default)`),lu(),yT(76,`
            `),as(77,`c-one-time-password`,12),yT(78,`
              `),hm(79,`input`,8),yT(80,`
              `),hm(81,`input`,8),yT(82,`
              `),hm(83,`input`,8),yT(84,`
              `),hm(85,`input`,8),yT(86,`
              `),hm(87,`input`,8),yT(88,`
              `),hm(89,`input`,8),yT(90,`
            `),lu(),yT(91,`
          `),lu(),yT(92,`
          `),as(93,`div`,10),yT(94,`
            `),as(95,`label`,13),yT(96,`Text OTP`),lu(),yT(97,`
            `),as(98,`c-one-time-password`,14),yT(99,`
              `),hm(100,`input`,8),yT(101,`
              `),hm(102,`input`,8),yT(103,`
              `),hm(104,`input`,8),yT(105,`
              `),hm(106,`input`,8),yT(107,`
              `),hm(108,`input`,8),yT(109,`
              `),hm(110,`input`,8),yT(111,`
            `),lu(),yT(112,`
          `),lu(),yT(113,`
          `),as(114,`div`),yT(115,`
            `),as(116,`label`,15),yT(117,`Masked OTP (hidden characters)`),lu(),yT(118,`
            `),as(119,`c-one-time-password`,16),yT(120,`
              `),hm(121,`input`,8),yT(122,`
              `),hm(123,`input`,8),yT(124,`
              `),hm(125,`input`,8),yT(126,`
              `),hm(127,`input`,8),yT(128,`
              `),hm(129,`input`,8),yT(130,`
              `),hm(131,`input`,8),yT(132,`
            `),lu(),yT(133,`
          `),lu(),yT(134,`
        `),lu(),yT(135,`
      `),lu(),yT(136,`
    `),lu(),yT(137,`
    `),as(138,`c-card`,2),yT(139,`
      `),as(140,`c-card-header`),yT(141,`
        `),as(142,`strong`),yT(143,`Angular One Time Password (OTP) Input`),lu(),yT(144,` `),as(145,`small`),yT(146,`Custom layouts`),lu(),yT(147,`
      `),lu(),yT(148,`
      `),as(149,`c-card-body`),yT(150,`
        `),as(151,`p`,3),yT(152,`
          Create custom one-time password layouts with separators and different field counts.
        `),lu(),yT(153,`
        `),as(154,`app-docs-example`,17),yT(155,`
          `),as(156,`div`,10),yT(157,`
            `),as(158,`label`,18),yT(159,`6-digit OTP with separators`),lu(),yT(160,`
            `),as(161,`c-one-time-password`,19),yT(162,`
              `),hm(163,`input`,8),yT(164,`
              `),hm(165,`input`,8),yT(166,`
              `),hm(167,`input`,8),yT(168,`
              `),as(169,`div`,20),yT(170,`-`),lu(),yT(171,`
              `),hm(172,`input`,8),yT(173,`
              `),hm(174,`input`,8),yT(175,`
              `),hm(176,`input`,8),yT(177,`
            `),lu(),yT(178,`
          `),lu(),yT(179,`
          `),as(180,`div`,10),yT(181,`
            `),as(182,`label`,21),yT(183,`9-digit OTP with separators`),lu(),yT(184,`
            `),as(185,`c-one-time-password`,22),yT(186,`
              `),hm(187,`input`,8),yT(188,`
              `),hm(189,`input`,8),yT(190,`
              `),hm(191,`input`,8),yT(192,`
              `),as(193,`div`,20),yT(194,`•`),lu(),yT(195,`
              `),hm(196,`input`,8),yT(197,`
              `),hm(198,`input`,8),yT(199,`
              `),hm(200,`input`,8),yT(201,`
              `),as(202,`div`,20),yT(203,`•`),lu(),yT(204,`
              `),hm(205,`input`,8),yT(206,`
              `),hm(207,`input`,8),yT(208,`
              `),hm(209,`input`,8),yT(210,`
            `),lu(),yT(211,`
          `),lu(),yT(212,`
          `),as(213,`div`),yT(214,`
            `),as(215,`label`,23),yT(216,`4-digit PIN`),lu(),yT(217,`
            `),as(218,`c-one-time-password`,24),yT(219,`
              `),hm(220,`input`,8),yT(221,`
              `),hm(222,`input`,8),yT(223,`
              `),hm(224,`input`,8),yT(225,`
              `),hm(226,`input`,8),yT(227,`
            `),lu(),yT(228,`
          `),lu(),yT(229,`
        `),lu(),yT(230,`
      `),lu(),yT(231,`
    `),lu(),yT(232,`
  `),lu(),yT(233,`
`),lu()),m&2&&(ZD(119),pm(`masked`,!0),ZD(99),pm(`masked`,!0))},dependencies:[ro,oo,WM,uI,c,$,oF,h0,jF,WC,fF],encapsulation:2})}};export{P as OtpInputComponent};