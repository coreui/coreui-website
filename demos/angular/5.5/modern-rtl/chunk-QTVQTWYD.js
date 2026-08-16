import{b as u}from"./chunk-PAOOTP2L.js";import"./chunk-PMOGNWGV.js";import{a as f}from"./chunk-ZX4I2AKI.js";import{I as o,J as r,M as x,Va as p,db as S,fb as E,na as d,oa as c,ra as s}from"./chunk-YI43TGSZ.js";import"./chunk-MQBD4EFB.js";import"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Rb as t,Sb as n,Tb as a,mb as m,sc as e}from"./chunk-H7BDVHMQ.js";import"./chunk-ZOGHMS73.js";var i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=m({type:i,selectors:[["app-select"]],decls:187,vars:0,consts:[["xs","12"],["href","forms/select","title","Select"],[1,"mb-4"],["href","forms/select"],["aria-label","Default select example","cSelect",""],["value","1"],["value","2"],["value","3"],[1,"text-body-secondary","small"],["href","forms/select#sizing"],["aria-label","Large select example","cSelect","","sizing","lg",1,"mb-3"],["aria-label","Small select example","cSelect","","sizing","sm",1,"mb-3"],["aria-label","Multiple select example","cSelect","","multiple","","sizing","lg"],["aria-label","Multiple select example","cSelect","","multiple","","size","3","sizing","lg"],["value","4"],["href","forms/select#disabled"],["aria-label","Disabled select example","cSelect","","disabled",""],["selected","","value","2"]],template:function(l,b){l&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),a(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular Select"),n(),e(12," "),t(13,"small"),e(14,"Default"),n(),e(15,`
      `),n(),e(16,`
      `),t(17,"c-card-body"),e(18,`
        `),t(19,"app-docs-example",3),e(20,`
          `),t(21,"select",4),e(22,`
            `),t(23,"option"),e(24,"Open this select menu"),n(),e(25,`
            `),t(26,"option",5),e(27,"One"),n(),e(28,`
            `),t(29,"option",6),e(30,"Two"),n(),e(31,`
            `),t(32,"option",7),e(33,"Three"),n(),e(34,`
          `),n(),e(35,`
        `),n(),e(36,`
      `),n(),e(37,`
    `),n(),e(38,`
  `),n(),e(39,`
  `),t(40,"c-col",0),e(41,`
    `),t(42,"c-card",2),e(43,`
      `),t(44,"c-card-header"),e(45,`
        `),t(46,"strong"),e(47,"Angular Select"),n(),e(48," "),t(49,"small"),e(50,"Sizing"),n(),e(51,`
      `),n(),e(52,`
      `),t(53,"c-card-body"),e(54,`
        `),t(55,"p",8),e(56,`
          You may also choose from small and large custom selects to match our similarly sized
          text inputs.
        `),n(),e(57,`
        `),t(58,"app-docs-example",9),e(59,`
          `),t(60,"select",10),e(61,`
            `),t(62,"option"),e(63,"Open this select menu"),n(),e(64,`
            `),t(65,"option",5),e(66,"One"),n(),e(67,`
            `),t(68,"option",6),e(69,"Two"),n(),e(70,`
            `),t(71,"option",7),e(72,"Three"),n(),e(73,`
          `),n(),e(74,`
          `),t(75,"select",11),e(76,`
            `),t(77,"option"),e(78,"Open this select menu"),n(),e(79,`
            `),t(80,"option",5),e(81,"One"),n(),e(82,`
            `),t(83,"option",6),e(84,"Two"),n(),e(85,`
            `),t(86,"option",7),e(87,"Three"),n(),e(88,`
          `),n(),e(89,`
        `),n(),e(90,`
        `),t(91,"p",8),e(92,`
          The `),t(93,"code"),e(94,"multiple"),n(),e(95,` attribute is also supported:
        `),n(),e(96,`
        `),t(97,"app-docs-example",9),e(98,`
          `),t(99,"select",12),e(100,`
            `),t(101,"option"),e(102,"Open this select menu"),n(),e(103,`
            `),t(104,"option",5),e(105,"One"),n(),e(106,`
            `),t(107,"option",6),e(108,"Two"),n(),e(109,`
            `),t(110,"option",7),e(111,"Three"),n(),e(112,`
          `),n(),e(113,`
        `),n(),e(114,`
        `),t(115,"p",8),e(116,`
          As is the `),t(117,"code"),e(118,"html size"),n(),e(119,` property:
        `),n(),e(120,`
        `),t(121,"app-docs-example",9),e(122,`
          `),t(123,"select",13),e(124,`
            `),t(125,"option"),e(126,"Open this select menu"),n(),e(127,`
            `),t(128,"option",5),e(129,"One"),n(),e(130,`
            `),t(131,"option",6),e(132,"Two"),n(),e(133,`
            `),t(134,"option",7),e(135,"Three"),n(),e(136,`
            `),t(137,"option",14),e(138,"Four"),n(),e(139,`
          `),n(),e(140,`
        `),n(),e(141,`
      `),n(),e(142,`
    `),n(),e(143,`
  `),n(),e(144,`
  `),t(145,"c-col",0),e(146,`
    `),t(147,"c-card",2),e(148,`
      `),t(149,"c-card-header"),e(150,`
        `),t(151,"strong"),e(152,"Angular Select"),n(),e(153," "),t(154,"small"),e(155,"Disabled"),n(),e(156,`
      `),n(),e(157,`
      `),t(158,"c-card-body"),e(159,`
        `),t(160,"p",8),e(161,`
          Add the `),t(162,"code"),e(163,"disabled"),n(),e(164,` boolean attribute on a select to give it a grayed out
          appearance and remove pointer events.
        `),n(),e(165,`
        `),t(166,"app-docs-example",15),e(167,`
          `),t(168,"select",16),e(169,`
            `),t(170,"option"),e(171,"Open this select menu"),n(),e(172,`
            `),t(173,"option",5),e(174,"One"),n(),e(175,`
            `),t(176,"option",17),e(177,"Selected: Two"),n(),e(178,`
            `),t(179,"option",7),e(180,"Three"),n(),e(181,`
          `),n(),e(182,`
        `),n(),e(183,`
      `),n(),e(184,`
    `),n(),e(185,`
  `),n(),e(186,`
`),n())},dependencies:[E,S,d,s,c,u,p,x,o,r,f],encapsulation:2});var h=i;export{h as SelectComponent};
