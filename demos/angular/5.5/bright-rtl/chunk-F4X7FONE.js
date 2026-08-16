import{b as g}from"./chunk-SD6BUMXE.js";import"./chunk-PMOGNWGV.js";import{a as E}from"./chunk-ZX4I2AKI.js";import{Pb as S,db as p,fb as u,na as s,oa as c,ra as x}from"./chunk-YI43TGSZ.js";import"./chunk-MQBD4EFB.js";import"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Gc as r,Qb as l,Rb as t,Sb as n,Tb as i,bb as a,mb as o,sc as e}from"./chunk-H7BDVHMQ.js";import"./chunk-ZOGHMS73.js";var b=()=>["Low","Medium","High"],y=()=>[25,75],C=()=>[20,40],w=()=>[20,40,60],R=()=>[20,40,60,80],F=()=>[20,80],_=()=>[20,80,100],v=()=>[50,75],A=()=>["Start","Middle","End"],M=()=>[30,70],d=class d{};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=o({type:d,selectors:[["app-range-sliders"]],decls:194,vars:24,consts:[["xs","12"],["href","forms/range-slider/"],[1,"mb-4"],[1,"text-body-secondary","small"],[1,"bg-body","border","rounded","p-3"],[3,"labels","value"],["href","forms/range-slider/#multiple-handles"],[1,"bg-body","border","rounded"],[3,"value"],["href","forms/range-slider/#vertical-range-slider"],[1,"d-flex","bg-body","border","rounded"],["vertical","",3,"value"],["href","forms/range-slider/#min-and-max"],["max","150","min","-50",3,"value"],["href","forms/range-slider/#distance"],["distance","10",3,"value"],["href","forms/range-slider/#labels"]],template:function(m,D){m&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),i(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular Range Slider"),n(),e(12,`
      `),n(),e(13,`
      `),t(14,"c-card-body"),e(15,`
        `),t(16,"p",3),e(17,`
          The Angular Range Slider component allows users to select a value or range of values within a predefined range. Unlike the standard
          `),t(18,"code"),e(19,'<input type="range">'),n(),e(20,`, the Range Slider offers enhanced customization options, including multiple handles, labels, tooltips, and vertical orientation. It ensures consistent styling across browsers and provides a rich set of features for advanced use cases.
        `),n(),e(21,`
        `),t(22,"app-docs-example",1),e(23,`
          `),t(24,"div",4),e(25,`
            `),i(26,"c-range-slider",5),e(27,`
          `),n(),e(28,`
        `),n(),e(29,`
      `),n(),e(30,`
    `),n(),e(31,`
    `),t(32,"c-card",2),e(33,`
      `),t(34,"c-card-header"),e(35,`
        `),t(36,"strong"),e(37,"Angular Range Slider"),n(),e(38," "),t(39,"small"),e(40,"Multiple handles"),n(),e(41,`
      `),n(),e(42,`
      `),t(43,"c-card-body"),e(44,`
        `),t(45,"p",3),e(46,`
          Enable multiple handles to allow the selection of a range or/and multiple values.
        `),n(),e(47,`
        `),t(48,"app-docs-example",6),e(49,`
          `),t(50,"div",7),e(51,`
            `),i(52,"c-range-slider",8),e(53,`
            `),i(54,"c-range-slider",8),e(55,`
            `),i(56,"c-range-slider",8),e(57,`
          `),n(),e(58,`
        `),n(),e(59,`
      `),n(),e(60,`
    `),n(),e(61,`
    `),t(62,"c-card",2),e(63,`
      `),t(64,"c-card-header"),e(65,`
        `),t(66,"strong"),e(67,"Angular Range Slider"),n(),e(68," "),t(69,"small"),e(70,"Vertical"),n(),e(71,`
      `),n(),e(72,`
      `),t(73,"c-card-body"),e(74,`
        `),t(75,"p",3),e(76,`
          Rotate the slider to a vertical orientation.
        `),n(),e(77,`
        `),t(78,"app-docs-example",9),e(79,`
          `),t(80,"div",10),e(81,`
            `),i(82,"c-range-slider",11),e(83,`
            `),i(84,"c-range-slider",11),e(85,`
            `),i(86,"c-range-slider",11),e(87,`
          `),n(),e(88,`
        `),n(),e(89,`
      `),n(),e(90,`
    `),n(),e(91,`
    `),t(92,"c-card",2),e(93,`
      `),t(94,"c-card-header"),e(95,`
        `),t(96,"strong"),e(97,"Angular Range Slider"),n(),e(98," "),t(99,"small"),e(100,"Min and Max"),n(),e(101,`
      `),n(),e(102,`
      `),t(103,"c-card-body"),e(104,`
        `),t(105,"p",3),e(106,`
          Angular Range Slider component has implicit values for `),t(107,"code"),e(108,"min"),n(),e(109," and "),t(110,"code"),e(111,"max"),n(),e(112," - "),t(113,"code"),e(114,"0"),n(),e(115," and "),t(116,"code"),e(117,"100"),n(),e(118,", respectively. You may specify new values for those using the "),t(119,"code"),e(120,"min"),n(),e(121," and "),t(122,"code"),e(123,"max"),n(),e(124,` attributes.
        `),n(),e(125,`
        `),t(126,"app-docs-example",12),e(127,`
          `),t(128,"div",7),e(129,`
            `),i(130,"c-range-slider",13),e(131,`
            `),i(132,"c-range-slider",13),e(133,`
          `),n(),e(134,`
        `),n(),e(135,`
      `),n(),e(136,`
    `),n(),e(137,`
    `),t(138,"c-card",2),e(139,`
      `),t(140,"c-card-header"),e(141,`
        `),t(142,"strong"),e(143,"Angular Range Slider"),n(),e(144," "),t(145,"small"),e(146,"Distance"),n(),e(147,`
      `),n(),e(148,`
      `),t(149,"c-card-body"),e(150,`
        `),t(151,"p",3),e(152,`
          Sets the minimum distance between multiple slider handles by setting `),t(153,"code"),e(154,"distance"),n(),e(155,` and ensures that the handles do not overlap or get too close.
        `),n(),e(156,`
        `),t(157,"app-docs-example",14),e(158,`
          `),t(159,"div",7),e(160,`
            `),i(161,"c-range-slider",15),e(162,`
          `),n(),e(163,`
        `),n(),e(164,`
      `),n(),e(165,`
    `),n(),e(166,`
    `),t(167,"c-card",2),e(168,`
      `),t(169,"c-card-header"),e(170,`
        `),t(171,"strong"),e(172,"Angular Range Slider"),n(),e(173," "),t(174,"small"),e(175,"Labels"),n(),e(176,`
      `),n(),e(177,`
      `),t(178,"c-card-body"),e(179,`
        `),t(180,"p",3),e(181,`
          Add labels to specific points on the slider for better context. If you provide an array of strings, as in the example below, then labels will be spaced at equal distances from the beginning to the end of the slider.
        `),n(),e(182,`
        `),t(183,"app-docs-example",16),e(184,`
          `),t(185,"div",4),e(186,`
            `),i(187,"c-range-slider",5),e(188,`
          `),n(),e(189,`
        `),n(),e(190,`
      `),n(),e(191,`
    `),n(),e(192,`
  `),n(),e(193,`
`),n()),m&2&&(a(26),l("labels",r(13,b))("value",r(14,y)),a(26),l("value",r(15,C)),a(2),l("value",r(16,w)),a(2),l("value",r(17,R)),a(26),l("value",20),a(2),l("value",r(18,F)),a(2),l("value",r(19,_)),a(44),l("value",50),a(2),l("value",r(20,v)),a(29),l("value",r(21,v)),a(26),l("labels",r(22,A))("value",r(23,M)))},dependencies:[c,s,x,p,E,g,S,u],styles:["[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]{padding:.7rem}"]});var f=d;export{f as RangeSlidersComponent};
