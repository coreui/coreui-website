import{Di as xT,Ni as yT,U as Ib,Zn as hm,gn as as,in as ZD,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{Kn as ro,L as KF,Pn as oo,in as fF,tr as uI,xt as WM}from"./main-63SIAMZ4.js";import{t as $}from"./chunk-B_1RyP17.js";import"./chunk-DsVs31dg.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-Dnmxv9kz.js";var h=()=>[`Low`,`Medium`,`High`];var b=()=>[25,75];var C=()=>[20,40];var R=()=>[20,40,60];var w=()=>[20,40,60,80];var F=()=>[20,80];var _=()=>[20,80,100];var v=()=>[50,75];var A=()=>[`Start`,`Middle`,`End`];var M=()=>[30,70];var y=class m{static{this.ɵfac=function(d){return new(d||m)}}static{this.ɵcmp=Ib({type:m,selectors:[[`app-range-sliders`]],decls:194,vars:24,consts:[[`xs`,`12`],[`href`,`forms/range-slider/`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[1,`bg-body`,`border`,`rounded`,`p-3`],[3,`labels`,`value`],[`href`,`forms/range-slider/#multiple-handles`],[1,`bg-body`,`border`,`rounded`],[3,`value`],[`href`,`forms/range-slider/#vertical-range-slider`],[1,`d-flex`,`bg-body`,`border`,`rounded`],[`vertical`,``,3,`value`],[`href`,`forms/range-slider/#min-and-max`],[`max`,`150`,`min`,`-50`,3,`value`],[`href`,`forms/range-slider/#distance`],[`distance`,`10`,3,`value`],[`href`,`forms/range-slider/#labels`]],template:function(d,D){d&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Range Slider`),lu(),yT(12,`
      `),lu(),yT(13,`
      `),as(14,`c-card-body`),yT(15,`
        `),as(16,`p`,3),yT(17,`
          The Angular Range Slider component allows users to select a value or range of values within a predefined range. Unlike the standard
          `),as(18,`code`),yT(19,`<input type="range">`),lu(),yT(20,`, the Range Slider offers enhanced customization options, including multiple handles, labels, tooltips, and vertical orientation. It ensures consistent styling across browsers and provides a rich set of features for advanced use cases.
        `),lu(),yT(21,`
        `),as(22,`app-docs-example`,1),yT(23,`
          `),as(24,`div`,4),yT(25,`
            `),hm(26,`c-range-slider`,5),yT(27,`
          `),lu(),yT(28,`
        `),lu(),yT(29,`
      `),lu(),yT(30,`
    `),lu(),yT(31,`
    `),as(32,`c-card`,2),yT(33,`
      `),as(34,`c-card-header`),yT(35,`
        `),as(36,`strong`),yT(37,`Angular Range Slider`),lu(),yT(38,` `),as(39,`small`),yT(40,`Multiple handles`),lu(),yT(41,`
      `),lu(),yT(42,`
      `),as(43,`c-card-body`),yT(44,`
        `),as(45,`p`,3),yT(46,`
          Enable multiple handles to allow the selection of a range or/and multiple values.
        `),lu(),yT(47,`
        `),as(48,`app-docs-example`,6),yT(49,`
          `),as(50,`div`,7),yT(51,`
            `),hm(52,`c-range-slider`,8),yT(53,`
            `),hm(54,`c-range-slider`,8),yT(55,`
            `),hm(56,`c-range-slider`,8),yT(57,`
          `),lu(),yT(58,`
        `),lu(),yT(59,`
      `),lu(),yT(60,`
    `),lu(),yT(61,`
    `),as(62,`c-card`,2),yT(63,`
      `),as(64,`c-card-header`),yT(65,`
        `),as(66,`strong`),yT(67,`Angular Range Slider`),lu(),yT(68,` `),as(69,`small`),yT(70,`Vertical`),lu(),yT(71,`
      `),lu(),yT(72,`
      `),as(73,`c-card-body`),yT(74,`
        `),as(75,`p`,3),yT(76,`
          Rotate the slider to a vertical orientation.
        `),lu(),yT(77,`
        `),as(78,`app-docs-example`,9),yT(79,`
          `),as(80,`div`,10),yT(81,`
            `),hm(82,`c-range-slider`,11),yT(83,`
            `),hm(84,`c-range-slider`,11),yT(85,`
            `),hm(86,`c-range-slider`,11),yT(87,`
          `),lu(),yT(88,`
        `),lu(),yT(89,`
      `),lu(),yT(90,`
    `),lu(),yT(91,`
    `),as(92,`c-card`,2),yT(93,`
      `),as(94,`c-card-header`),yT(95,`
        `),as(96,`strong`),yT(97,`Angular Range Slider`),lu(),yT(98,` `),as(99,`small`),yT(100,`Min and Max`),lu(),yT(101,`
      `),lu(),yT(102,`
      `),as(103,`c-card-body`),yT(104,`
        `),as(105,`p`,3),yT(106,`
          Angular Range Slider component has implicit values for `),as(107,`code`),yT(108,`min`),lu(),yT(109,` and `),as(110,`code`),yT(111,`max`),lu(),yT(112,` - `),as(113,`code`),yT(114,`0`),lu(),yT(115,` and `),as(116,`code`),yT(117,`100`),lu(),yT(118,`, respectively. You may specify new values for those using the `),as(119,`code`),yT(120,`min`),lu(),yT(121,` and `),as(122,`code`),yT(123,`max`),lu(),yT(124,` attributes.
        `),lu(),yT(125,`
        `),as(126,`app-docs-example`,12),yT(127,`
          `),as(128,`div`,7),yT(129,`
            `),hm(130,`c-range-slider`,13),yT(131,`
            `),hm(132,`c-range-slider`,13),yT(133,`
          `),lu(),yT(134,`
        `),lu(),yT(135,`
      `),lu(),yT(136,`
    `),lu(),yT(137,`
    `),as(138,`c-card`,2),yT(139,`
      `),as(140,`c-card-header`),yT(141,`
        `),as(142,`strong`),yT(143,`Angular Range Slider`),lu(),yT(144,` `),as(145,`small`),yT(146,`Distance`),lu(),yT(147,`
      `),lu(),yT(148,`
      `),as(149,`c-card-body`),yT(150,`
        `),as(151,`p`,3),yT(152,`
          Sets the minimum distance between multiple slider handles by setting `),as(153,`code`),yT(154,`distance`),lu(),yT(155,` and ensures that the handles do not overlap or get too close.
        `),lu(),yT(156,`
        `),as(157,`app-docs-example`,14),yT(158,`
          `),as(159,`div`,7),yT(160,`
            `),hm(161,`c-range-slider`,15),yT(162,`
          `),lu(),yT(163,`
        `),lu(),yT(164,`
      `),lu(),yT(165,`
    `),lu(),yT(166,`
    `),as(167,`c-card`,2),yT(168,`
      `),as(169,`c-card-header`),yT(170,`
        `),as(171,`strong`),yT(172,`Angular Range Slider`),lu(),yT(173,` `),as(174,`small`),yT(175,`Labels`),lu(),yT(176,`
      `),lu(),yT(177,`
      `),as(178,`c-card-body`),yT(179,`
        `),as(180,`p`,3),yT(181,`
          Add labels to specific points on the slider for better context. If you provide an array of strings, as in the example below, then labels will be spaced at equal distances from the beginning to the end of the slider.
        `),lu(),yT(182,`
        `),as(183,`app-docs-example`,16),yT(184,`
          `),as(185,`div`,4),yT(186,`
            `),hm(187,`c-range-slider`,5),yT(188,`
          `),lu(),yT(189,`
        `),lu(),yT(190,`
      `),lu(),yT(191,`
    `),lu(),yT(192,`
  `),lu(),yT(193,`
`),lu()),d&2&&(ZD(26),pm(`labels`,xT(13,h))(`value`,xT(14,b)),ZD(26),pm(`value`,xT(15,C)),ZD(2),pm(`value`,xT(16,R)),ZD(2),pm(`value`,xT(17,w)),ZD(26),pm(`value`,20),ZD(2),pm(`value`,xT(18,F)),ZD(2),pm(`value`,xT(19,_)),ZD(44),pm(`value`,50),ZD(2),pm(`value`,xT(20,v)),ZD(29),pm(`value`,xT(21,v)),ZD(26),pm(`labels`,xT(22,A))(`value`,xT(23,M)))},dependencies:[ro,oo,WM,uI,c,$,KF,fF],styles:[`[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]{padding:.7rem}`]})}};export{y as RangeSlidersComponent};