import{b as u}from"./chunk-MDU2IANU.js";import"./chunk-NQK6YNC7.js";import{Bd as p,Fd as S,Gd as E,H as a,Pa as e,Qc as s,Rc as x,Uc as d,Va as m,xa as t,ya as n,za as i,zc as c}from"./chunk-M3OGN64F.js";import"./chunk-RLASGPT3.js";var v=(()=>{let r=class r{constructor(){}};r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=a({type:r,selectors:[["app-spinners"]],standalone:!0,features:[m],decls:187,vars:0,consts:[["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/spinner"],["href","components/spinner#colors"],["color","primary"],["color","secondary"],["color","success"],["color","danger"],["color","warning"],["color","info"],["color","light"],["color","dark"],["href","components/spinner#growing-spinner"],["variant","grow"],["color","primary","variant","grow"],["color","secondary","variant","grow"],["color","success","variant","grow"],["color","danger","variant","grow"],["color","warning","variant","grow"],["color","info","variant","grow"],["color","light","variant","grow"],["color","dark","variant","grow"],["href","components/spinner#size"],["size","sm"],["size","sm","variant","grow"],["href","components/spinner#buttons"],["cButton","","disabled","",1,"m-1"],["aria-hidden","true","size","sm"],["aria-hidden","true","size","sm","variant","grow"]],template:function(o,h){o&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Angular Spinner"),n(),e(10," "),t(11,"small"),e(12,"Border"),n(),e(13,`
      `),n(),e(14,`
      `),t(15,"c-card-body"),e(16,`
        `),t(17,"p",2),e(18,`
          Use the border spinners for a lightweight loading indicator.
        `),n(),e(19,`
        `),t(20,"app-docs-example",3),e(21,`
          `),i(22,"c-spinner"),e(23,`
        `),n(),e(24,`
        `),t(25,"p",2),e(26,`
          The border spinner uses `),t(27,"code"),e(28,"currentColor"),n(),e(29," for its "),t(30,"code"),e(31,"border-color"),n(),e(32,`.
          You can use any of our text color utilities on the standard spinner.
        `),n(),e(33,`
        `),t(34,"app-docs-example",4),e(35,`
          `),i(36,"c-spinner",5),e(37,`
          `),i(38,"c-spinner",6),e(39,`
          `),i(40,"c-spinner",7),e(41,`
          `),i(42,"c-spinner",8),e(43,`
          `),i(44,"c-spinner",9),e(45,`
          `),i(46,"c-spinner",10),e(47,`
          `),i(48,"c-spinner",11),e(49,`
          `),i(50,"c-spinner",12),e(51,`
        `),n(),e(52,`
      `),n(),e(53,`
    `),n(),e(54,`
  `),n(),e(55,`
  `),t(56,"c-col",0),e(57,`
    `),t(58,"c-card",1),e(59,`
      `),t(60,"c-card-header"),e(61,`
        `),t(62,"strong"),e(63,"Angular Spinner"),n(),e(64," "),t(65,"small"),e(66,"Growing"),n(),e(67,`
      `),n(),e(68,`
      `),t(69,"c-card-body"),e(70,`
        `),t(71,"p",2),e(72,`
          If you don'tfancy a border spinner, switch to the grow spinner. While it
          doesn't technically spin, it does repeatedly grow!
        `),n(),e(73,`
        `),t(74,"app-docs-example",13),e(75,`
          `),i(76,"c-spinner",14),e(77,`
        `),n(),e(78,`
        `),t(79,"p",2),e(80,`
          Once again, this spinner is built with `),t(81,"code"),e(82,"currentColor"),n(),e(83,`, so you can easily
          change its appearance. Here it is in blue, along with the supported variants.
        `),n(),e(84,`
        `),t(85,"app-docs-example",13),e(86,`
          `),i(87,"c-spinner",15),e(88,`
          `),i(89,"c-spinner",16),e(90,`
          `),i(91,"c-spinner",17),e(92,`
          `),i(93,"c-spinner",18),e(94,`
          `),i(95,"c-spinner",19),e(96,`
          `),i(97,"c-spinner",20),e(98,`
          `),i(99,"c-spinner",21),e(100,`
          `),i(101,"c-spinner",22),e(102,`
        `),n(),e(103,`
      `),n(),e(104,`
    `),n(),e(105,`
  `),n(),e(106,`
  `),t(107,"c-col",0),e(108,`
    `),t(109,"c-card",1),e(110,`
      `),t(111,"c-card-header"),e(112,`
        `),t(113,"strong"),e(114,"Angular Spinner"),n(),e(115," "),t(116,"small"),e(117,"Size"),n(),e(118,`
      `),n(),e(119,`
      `),t(120,"c-card-body"),e(121,`
        `),t(122,"p",2),e(123,`
          Add `),t(124,"code"),e(125,'size="sm"'),n(),e(126,` property to make a smaller spinner that can quickly
          be used within other components.
        `),n(),e(127,`
        `),t(128,"app-docs-example",23),e(129,`
          `),i(130,"c-spinner",24),e(131,`
          `),i(132,"c-spinner",25),e(133,`
        `),n(),e(134,`
      `),n(),e(135,`
    `),n(),e(136,`
  `),n(),e(137,`
  `),t(138,"c-col",0),e(139,`
    `),t(140,"c-card",1),e(141,`
      `),t(142,"c-card-header"),e(143,`
        `),t(144,"strong"),e(145,"Angular Spinner"),n(),e(146," "),t(147,"small"),e(148,"Buttons"),n(),e(149,`
      `),n(),e(150,`
      `),t(151,"c-card-body"),e(152,`
        `),t(153,"p",2),e(154,`
          Use spinners within buttons to indicate an action is currently processing or taking
          place. You may also swap the text out of the spinner element and utilize button text
          as needed.
        `),n(),e(155,`
        `),t(156,"app-docs-example",26),e(157,`
          `),t(158,"button",27),e(159,`
            `),i(160,"c-spinner",28),e(161,`
          `),n(),e(162,`
          `),t(163,"button",27),e(164,`
            `),i(165,"c-spinner",28),e(166,`
            Loading...
          `),n(),e(167,`
        `),n(),e(168,`
        `),t(169,"app-docs-example",26),e(170,`
          `),i(171,"br"),e(172,`
          `),t(173,"button",27),e(174,`
            `),i(175,"c-spinner",29),e(176,`
          `),n(),e(177,`
          `),t(178,"button",27),e(179,`
            `),i(180,"c-spinner",29),e(181,`
            Loading...
          `),n(),e(182,`
        `),n(),e(183,`
      `),n(),e(184,`
    `),n(),e(185,`
  `),n(),e(186,`
`),n())},dependencies:[E,S,s,d,x,u,p,c]});let l=r;return l})();export{v as SpinnersComponent};
