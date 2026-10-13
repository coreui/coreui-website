import{Bt as Tm,Ci as wi,Ni as yT,U as Ib,Zn as hm,gn as as,in as ZD,yr as lu,zn as fm,zr as pm}from"./chunk-DYvmxcZi.js";import{Kn as ro,Pn as oo,in as fF,tr as uI,v as Dr,xt as WM,zt as ao}from"./main-CUVQCGKL.js";import{t as $}from"./chunk-CI2Igpkh.js";import"./chunk-BkZKyp9U.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-BDbsAxBz.js";var v=class c$1{constructor(){this.collapses=wi([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=Ib({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Collapse`),lu(),yT(12,`
      `),lu(),yT(13,`
      `),as(14,`c-card-body`),yT(15,`
        `),as(16,`p`,3),yT(17,`You can use a link or a button component.`),lu(),yT(18,`
        `),as(19,`app-docs-example`,4),yT(20,`
          `),as(21,`a`,5),Tm(`click`,function(){return i.toggleCollapse(0)}),yT(22,`Link`),lu(),yT(23,`
          `),as(24,`button`,5),Tm(`click`,function(){return i.toggleCollapse(0)}),yT(25,`
            Button
          `),lu(),yT(26,`
          `),as(27,`div`,6),yT(28,`
            `),as(29,`c-card`,7),yT(30,`
              `),as(31,`c-card-body`),yT(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),lu(),yT(33,`
            `),lu(),yT(34,`
          `),lu(),yT(35,`
        `),lu(),yT(36,`
      `),lu(),yT(37,`
    `),lu(),yT(38,`
  `),lu(),yT(39,`
  `),as(40,`c-col`,0),yT(41,`
    `),as(42,`c-card`,2),yT(43,`
      `),as(44,`c-card-header`,8),yT(45,`
        `),as(46,`strong`),yT(47,`Angular Collapse`),lu(),yT(48,` `),as(49,`small`),yT(50,`horizontal`),lu(),yT(51,`
      `),lu(),yT(52,`
      `),as(53,`c-card-body`),yT(54,`
        `),as(55,`p`,3),yT(56,`
          Add the `),as(57,`code`),yT(58,`horizontal`),lu(),yT(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),lu(),yT(60,`
        `),as(61,`app-docs-example`,4),yT(62,`
          `),as(63,`button`,9),Tm(`click`,function(){return i.toggleCollapse(1)}),yT(64,`
            Button
          `),lu(),yT(65,`
          `),as(66,`div`,10),yT(67,`
            `),as(68,`div`,11),yT(69,`
              `),as(70,`c-card`,12),yT(71,`
                `),as(72,`c-card-body`,13),yT(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),lu(),yT(74,`
              `),lu(),yT(75,`
            `),lu(),yT(76,`
          `),lu(),yT(77,`
        `),lu(),yT(78,`
      `),lu(),yT(79,`
    `),lu(),yT(80,`
  `),lu(),yT(81,`
  `),as(82,`c-col`,0),yT(83,`
    `),as(84,`c-card`,2),yT(85,`
      `),as(86,`c-card-header`),yT(87,`
        `),as(88,`strong`),yT(89,`Angular Collapse`),lu(),yT(90,` `),as(91,`small`),yT(92,` multi target`),lu(),yT(93,`
      `),lu(),yT(94,`
      `),as(95,`c-card-body`),yT(96,`
        `),as(97,`p`,3),yT(98,`
          A `),as(99,`code`),yT(100,`<c-button>`),lu(),yT(101,` can show and hide multiple elements.
        `),lu(),yT(102,`
        `),as(103,`app-docs-example`,14),yT(104,`
          `),as(105,`button`,5),Tm(`click`,function(){return i.toggleCollapse(2)}),yT(106,`
            Toggle first element
          `),lu(),yT(107,`
          `),as(108,`button`,5),Tm(`click`,function(){return i.toggleCollapse(3)}),yT(109,`
            Toggle second element
          `),lu(),yT(110,`
          `),as(111,`button`,5),Tm(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),yT(112,`
            Toggle both
          `),lu(),yT(113,`
          `),as(114,`c-row`,10),yT(115,`
            `),as(116,`c-col`,15),yT(117,`
              `),as(118,`div`,6),yT(119,`
                `),as(120,`c-card`,16),yT(121,`
                  `),as(122,`c-card-body`),yT(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),lu(),yT(124,`
                `),lu(),yT(125,`
              `),lu(),yT(126,`
            `),lu(),yT(127,`
            `),as(128,`c-col`,15),yT(129,`
              `),as(130,`div`,6),yT(131,`
                `),as(132,`c-card`,16),yT(133,`
                  `),as(134,`c-card-body`),yT(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),lu(),yT(136,`
                `),lu(),yT(137,`
              `),lu(),yT(138,`
            `),lu(),yT(139,`
          `),lu(),yT(140,`
        `),lu(),yT(141,`
      `),lu(),yT(142,`
    `),lu(),yT(143,`
  `),lu(),yT(144,`
`),lu()),o&2&&(ZD(27),pm(`visible`,i.collapses()[0]),ZD(36),fm(`aria-expanded`,i.collapses()[1]),ZD(5),pm(`visible`,i.collapses()[1]),ZD(50),pm(`visible`,i.collapses()[2]),ZD(12),pm(`visible`,i.collapses()[3]))},dependencies:[fF,uI,oo,WM,ro,$,ao,Dr,c],encapsulation:2})}};export{v as CollapsesComponent};