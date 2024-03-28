import{q as S,r as E,u}from"./chunk-CYJCTR5H.js";import{b as h}from"./chunk-AXBUYTA4.js";import{I as a,Pa as e,Uc as c,Ya as o,cd as p,dd as s,sc as r,tc as x,wc as d,xa as t,ya as n}from"./chunk-IH7SFKGO.js";import"./chunk-RLASGPT3.js";var w=(()=>{let i=class i{constructor(){}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=a({type:i,selectors:[["app-select"]],standalone:!0,features:[o],decls:185,vars:0,consts:[["xs","12"],[1,"mb-4"],["href","forms/select"],["aria-label","Default select example","cSelect",""],["value","1"],["value","2"],["value","3"],[1,"text-body-secondary","small"],["href","forms/select#sizing"],["aria-label","Large select example","cSelect","","sizing","lg",1,"mb-3"],["aria-label","Small select example","cSelect","","sizing","sm",1,"mb-3"],["aria-label","Multiple select example","cSelect","","multiple","","sizing","lg"],["aria-label","Multiple select example","cSelect","","multiple","","size","3","sizing","lg"],["value","4"],["href","forms/select#disabled"],["aria-label","Disabled select example","cSelect","","disabled",""],["selected","","value","2"]],template:function(m,g){m&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Angular Select"),n(),e(10," "),t(11,"small"),e(12,"Default"),n(),e(13,`
      `),n(),e(14,`
      `),t(15,"c-card-body"),e(16,`
        `),t(17,"app-docs-example",2),e(18,`
          `),t(19,"select",3),e(20,`
            `),t(21,"option"),e(22,"Open this select menu"),n(),e(23,`
            `),t(24,"option",4),e(25,"One"),n(),e(26,`
            `),t(27,"option",5),e(28,"Two"),n(),e(29,`
            `),t(30,"option",6),e(31,"Three"),n(),e(32,`
          `),n(),e(33,`
        `),n(),e(34,`
      `),n(),e(35,`
    `),n(),e(36,`
  `),n(),e(37,`
  `),t(38,"c-col",0),e(39,`
    `),t(40,"c-card",1),e(41,`
      `),t(42,"c-card-header"),e(43,`
        `),t(44,"strong"),e(45,"Angular Select"),n(),e(46," "),t(47,"small"),e(48,"Sizing"),n(),e(49,`
      `),n(),e(50,`
      `),t(51,"c-card-body"),e(52,`
        `),t(53,"p",7),e(54,`
          You may also choose from small and large custom selects to match our similarly sized
          text inputs.
        `),n(),e(55,`
        `),t(56,"app-docs-example",8),e(57,`
          `),t(58,"select",9),e(59,`
            `),t(60,"option"),e(61,"Open this select menu"),n(),e(62,`
            `),t(63,"option",4),e(64,"One"),n(),e(65,`
            `),t(66,"option",5),e(67,"Two"),n(),e(68,`
            `),t(69,"option",6),e(70,"Three"),n(),e(71,`
          `),n(),e(72,`
          `),t(73,"select",10),e(74,`
            `),t(75,"option"),e(76,"Open this select menu"),n(),e(77,`
            `),t(78,"option",4),e(79,"One"),n(),e(80,`
            `),t(81,"option",5),e(82,"Two"),n(),e(83,`
            `),t(84,"option",6),e(85,"Three"),n(),e(86,`
          `),n(),e(87,`
        `),n(),e(88,`
        `),t(89,"p",7),e(90,`
          The `),t(91,"code"),e(92,"multiple"),n(),e(93,` attribute is also supported:
        `),n(),e(94,`
        `),t(95,"app-docs-example",8),e(96,`
          `),t(97,"select",11),e(98,`
            `),t(99,"option"),e(100,"Open this select menu"),n(),e(101,`
            `),t(102,"option",4),e(103,"One"),n(),e(104,`
            `),t(105,"option",5),e(106,"Two"),n(),e(107,`
            `),t(108,"option",6),e(109,"Three"),n(),e(110,`
          `),n(),e(111,`
        `),n(),e(112,`
        `),t(113,"p",7),e(114,`
          As is the `),t(115,"code"),e(116,"html size"),n(),e(117,` property:
        `),n(),e(118,`
        `),t(119,"app-docs-example",8),e(120,`
          `),t(121,"select",12),e(122,`
            `),t(123,"option"),e(124,"Open this select menu"),n(),e(125,`
            `),t(126,"option",4),e(127,"One"),n(),e(128,`
            `),t(129,"option",5),e(130,"Two"),n(),e(131,`
            `),t(132,"option",6),e(133,"Three"),n(),e(134,`
            `),t(135,"option",13),e(136,"Four"),n(),e(137,`
          `),n(),e(138,`
        `),n(),e(139,`
      `),n(),e(140,`
    `),n(),e(141,`
  `),n(),e(142,`
  `),t(143,"c-col",0),e(144,`
    `),t(145,"c-card",1),e(146,`
      `),t(147,"c-card-header"),e(148,`
        `),t(149,"strong"),e(150,"Angular Select"),n(),e(151," "),t(152,"small"),e(153,"Disabled"),n(),e(154,`
      `),n(),e(155,`
      `),t(156,"c-card-body"),e(157,`
        `),t(158,"p",7),e(159,`
          Add the `),t(160,"code"),e(161,"disabled"),n(),e(162,` boolean attribute on a select to give it a grayed out
          appearance and remove pointer events.
        `),n(),e(163,`
        `),t(164,"app-docs-example",14),e(165,`
          `),t(166,"select",15),e(167,`
            `),t(168,"option"),e(169,"Open this select menu"),n(),e(170,`
            `),t(171,"option",4),e(172,"One"),n(),e(173,`
            `),t(174,"option",16),e(175,"Selected: Two"),n(),e(176,`
            `),t(177,"option",6),e(178,"Three"),n(),e(179,`
          `),n(),e(180,`
        `),n(),e(181,`
      `),n(),e(182,`
    `),n(),e(183,`
  `),n(),e(184,`
`),n())},dependencies:[s,p,r,d,x,h,c,u,S,E]});let l=i;return l})();export{w as SelectComponent};
