import{Ii as zw,Rr as nu,Yr as rC,_i as vD,qr as qg,ri as rs,rn as Wg,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{B as JS,Ht as ZF,_t as Ro,ar as vF,ir as ux,ut as Po}from"./main-ISTEGOD5.js";import{t as I}from"./chunk-BlsLZA1f.js";import"./chunk-SMdHFN3G.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-BgHwca_8.js";var b=()=>[`Low`,`Medium`,`High`];var y=()=>[25,75];var C=()=>[20,40];var R=()=>[20,40,60];var w=()=>[20,40,60,80];var F=()=>[20,80];var _=()=>[20,80,100];var v=()=>[50,75];var A=()=>[`Start`,`Middle`,`End`];var M=()=>[30,70];var f=class m{static{this.ɵfac=function(d){return new(d||m)}}static{this.ɵcmp=zw({type:m,selectors:[[`app-range-sliders`]],decls:194,vars:24,consts:[[`xs`,`12`],[`href`,`forms/range-slider/`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[1,`bg-body`,`border`,`rounded`,`p-3`],[3,`labels`,`value`],[`href`,`forms/range-slider/#multiple-handles`],[1,`bg-body`,`border`,`rounded`],[3,`value`],[`href`,`forms/range-slider/#vertical-range-slider`],[1,`d-flex`,`bg-body`,`border`,`rounded`],[`vertical`,``,3,`value`],[`href`,`forms/range-slider/#min-and-max`],[`max`,`150`,`min`,`-50`,3,`value`],[`href`,`forms/range-slider/#distance`],[`distance`,`10`,3,`value`],[`href`,`forms/range-slider/#labels`]],template:function(d,D){d&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Range Slider`),nu(),Wb(12,`
      `),nu(),Wb(13,`
      `),rs(14,`c-card-body`),Wb(15,`
        `),rs(16,`p`,3),Wb(17,`
          The Angular Range Slider component allows users to select a value or range of values within a predefined range. Unlike the standard
          `),rs(18,`code`),Wb(19,`<input type="range">`),nu(),Wb(20,`, the Range Slider offers enhanced customization options, including multiple handles, labels, tooltips, and vertical orientation. It ensures consistent styling across browsers and provides a rich set of features for advanced use cases.
        `),nu(),Wb(21,`
        `),rs(22,`app-docs-example`,1),Wb(23,`
          `),rs(24,`div`,4),Wb(25,`
            `),qg(26,`c-range-slider`,5),Wb(27,`
          `),nu(),Wb(28,`
        `),nu(),Wb(29,`
      `),nu(),Wb(30,`
    `),nu(),Wb(31,`
    `),rs(32,`c-card`,2),Wb(33,`
      `),rs(34,`c-card-header`),Wb(35,`
        `),rs(36,`strong`),Wb(37,`Angular Range Slider`),nu(),Wb(38,` `),rs(39,`small`),Wb(40,`Multiple handles`),nu(),Wb(41,`
      `),nu(),Wb(42,`
      `),rs(43,`c-card-body`),Wb(44,`
        `),rs(45,`p`,3),Wb(46,`
          Enable multiple handles to allow the selection of a range or/and multiple values.
        `),nu(),Wb(47,`
        `),rs(48,`app-docs-example`,6),Wb(49,`
          `),rs(50,`div`,7),Wb(51,`
            `),qg(52,`c-range-slider`,8),Wb(53,`
            `),qg(54,`c-range-slider`,8),Wb(55,`
            `),qg(56,`c-range-slider`,8),Wb(57,`
          `),nu(),Wb(58,`
        `),nu(),Wb(59,`
      `),nu(),Wb(60,`
    `),nu(),Wb(61,`
    `),rs(62,`c-card`,2),Wb(63,`
      `),rs(64,`c-card-header`),Wb(65,`
        `),rs(66,`strong`),Wb(67,`Angular Range Slider`),nu(),Wb(68,` `),rs(69,`small`),Wb(70,`Vertical`),nu(),Wb(71,`
      `),nu(),Wb(72,`
      `),rs(73,`c-card-body`),Wb(74,`
        `),rs(75,`p`,3),Wb(76,`
          Rotate the slider to a vertical orientation.
        `),nu(),Wb(77,`
        `),rs(78,`app-docs-example`,9),Wb(79,`
          `),rs(80,`div`,10),Wb(81,`
            `),qg(82,`c-range-slider`,11),Wb(83,`
            `),qg(84,`c-range-slider`,11),Wb(85,`
            `),qg(86,`c-range-slider`,11),Wb(87,`
          `),nu(),Wb(88,`
        `),nu(),Wb(89,`
      `),nu(),Wb(90,`
    `),nu(),Wb(91,`
    `),rs(92,`c-card`,2),Wb(93,`
      `),rs(94,`c-card-header`),Wb(95,`
        `),rs(96,`strong`),Wb(97,`Angular Range Slider`),nu(),Wb(98,` `),rs(99,`small`),Wb(100,`Min and Max`),nu(),Wb(101,`
      `),nu(),Wb(102,`
      `),rs(103,`c-card-body`),Wb(104,`
        `),rs(105,`p`,3),Wb(106,`
          Angular Range Slider component has implicit values for `),rs(107,`code`),Wb(108,`min`),nu(),Wb(109,` and `),rs(110,`code`),Wb(111,`max`),nu(),Wb(112,` - `),rs(113,`code`),Wb(114,`0`),nu(),Wb(115,` and `),rs(116,`code`),Wb(117,`100`),nu(),Wb(118,`, respectively. You may specify new values for those using the `),rs(119,`code`),Wb(120,`min`),nu(),Wb(121,` and `),rs(122,`code`),Wb(123,`max`),nu(),Wb(124,` attributes.
        `),nu(),Wb(125,`
        `),rs(126,`app-docs-example`,12),Wb(127,`
          `),rs(128,`div`,7),Wb(129,`
            `),qg(130,`c-range-slider`,13),Wb(131,`
            `),qg(132,`c-range-slider`,13),Wb(133,`
          `),nu(),Wb(134,`
        `),nu(),Wb(135,`
      `),nu(),Wb(136,`
    `),nu(),Wb(137,`
    `),rs(138,`c-card`,2),Wb(139,`
      `),rs(140,`c-card-header`),Wb(141,`
        `),rs(142,`strong`),Wb(143,`Angular Range Slider`),nu(),Wb(144,` `),rs(145,`small`),Wb(146,`Distance`),nu(),Wb(147,`
      `),nu(),Wb(148,`
      `),rs(149,`c-card-body`),Wb(150,`
        `),rs(151,`p`,3),Wb(152,`
          Sets the minimum distance between multiple slider handles by setting `),rs(153,`code`),Wb(154,`distance`),nu(),Wb(155,` and ensures that the handles do not overlap or get too close.
        `),nu(),Wb(156,`
        `),rs(157,`app-docs-example`,14),Wb(158,`
          `),rs(159,`div`,7),Wb(160,`
            `),qg(161,`c-range-slider`,15),Wb(162,`
          `),nu(),Wb(163,`
        `),nu(),Wb(164,`
      `),nu(),Wb(165,`
    `),nu(),Wb(166,`
    `),rs(167,`c-card`,2),Wb(168,`
      `),rs(169,`c-card-header`),Wb(170,`
        `),rs(171,`strong`),Wb(172,`Angular Range Slider`),nu(),Wb(173,` `),rs(174,`small`),Wb(175,`Labels`),nu(),Wb(176,`
      `),nu(),Wb(177,`
      `),rs(178,`c-card-body`),Wb(179,`
        `),rs(180,`p`,3),Wb(181,`
          Add labels to specific points on the slider for better context. If you provide an array of strings, as in the example below, then labels will be spaced at equal distances from the beginning to the end of the slider.
        `),nu(),Wb(182,`
        `),rs(183,`app-docs-example`,16),Wb(184,`
          `),rs(185,`div`,4),Wb(186,`
            `),qg(187,`c-range-slider`,5),Wb(188,`
          `),nu(),Wb(189,`
        `),nu(),Wb(190,`
      `),nu(),Wb(191,`
    `),nu(),Wb(192,`
  `),nu(),Wb(193,`
`),nu()),d&2&&(vD(26),Wg(`labels`,rC(13,b))(`value`,rC(14,y)),vD(26),Wg(`value`,rC(15,C)),vD(2),Wg(`value`,rC(16,R)),vD(2),Wg(`value`,rC(17,w)),vD(26),Wg(`value`,20),vD(2),Wg(`value`,rC(18,F)),vD(2),Wg(`value`,rC(19,_)),vD(44),Wg(`value`,50),vD(2),Wg(`value`,rC(20,v)),vD(29),Wg(`value`,rC(21,v)),vD(26),Wg(`labels`,rC(22,A))(`value`,rC(23,M)))},dependencies:[Po,Ro,JS,ux,c,I,ZF,vF],styles:[`[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]{padding:.7rem}`]})}};export{f as RangeSlidersComponent};