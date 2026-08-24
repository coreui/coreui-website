import{Gn as Ch,I as Li,Lr as Th,Oi as ki,Or as Rh,Qt as hc,Sn as rb,X as Pi,ai as cw,bn as qv,ga as wh,ii as cl,la as vD,mi as ei,wn as t1,xt as Xv,zn as $E}from"./main-3ZNEFDGN.js";import{t as E}from"./chunk-DyzPa03D.js";import{t as c}from"./chunk-Cq12Oo7T.js";var v=class c$1{constructor(){this.collapses=ei([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=vD({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(ki(0,`c-row`),cw(1,`
  `),ki(2,`c-col`,0),cw(3,`
    `),Ch(4,`app-docs-components`,1),cw(5,`
    `),ki(6,`c-card`,2),cw(7,`
      `),ki(8,`c-card-header`),cw(9,`
        `),ki(10,`strong`),cw(11,`Angular Collapse`),cl(),cw(12,`
      `),cl(),cw(13,`
      `),ki(14,`c-card-body`),cw(15,`
        `),ki(16,`p`,3),cw(17,`You can use a link or a button component.`),cl(),cw(18,`
        `),ki(19,`app-docs-example`,4),cw(20,`
          `),ki(21,`a`,5),Rh(`click`,function(){return i.toggleCollapse(0)}),cw(22,`Link`),cl(),cw(23,`
          `),ki(24,`button`,5),Rh(`click`,function(){return i.toggleCollapse(0)}),cw(25,`
            Button
          `),cl(),cw(26,`
          `),ki(27,`div`,6),cw(28,`
            `),ki(29,`c-card`,7),cw(30,`
              `),ki(31,`c-card-body`),cw(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),cl(),cw(33,`
            `),cl(),cw(34,`
          `),cl(),cw(35,`
        `),cl(),cw(36,`
      `),cl(),cw(37,`
    `),cl(),cw(38,`
  `),cl(),cw(39,`
  `),ki(40,`c-col`,0),cw(41,`
    `),ki(42,`c-card`,2),cw(43,`
      `),ki(44,`c-card-header`,8),cw(45,`
        `),ki(46,`strong`),cw(47,`Angular Collapse`),cl(),cw(48,` `),ki(49,`small`),cw(50,`horizontal`),cl(),cw(51,`
      `),cl(),cw(52,`
      `),ki(53,`c-card-body`),cw(54,`
        `),ki(55,`p`,3),cw(56,`
          Add the `),ki(57,`code`),cw(58,`horizontal`),cl(),cw(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),cl(),cw(60,`
        `),ki(61,`app-docs-example`,4),cw(62,`
          `),ki(63,`button`,9),Rh(`click`,function(){return i.toggleCollapse(1)}),cw(64,`
            Button
          `),cl(),cw(65,`
          `),ki(66,`div`,10),cw(67,`
            `),ki(68,`div`,11),cw(69,`
              `),ki(70,`c-card`,12),cw(71,`
                `),ki(72,`c-card-body`,13),cw(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),cl(),cw(74,`
              `),cl(),cw(75,`
            `),cl(),cw(76,`
          `),cl(),cw(77,`
        `),cl(),cw(78,`
      `),cl(),cw(79,`
    `),cl(),cw(80,`
  `),cl(),cw(81,`
  `),ki(82,`c-col`,0),cw(83,`
    `),ki(84,`c-card`,2),cw(85,`
      `),ki(86,`c-card-header`),cw(87,`
        `),ki(88,`strong`),cw(89,`Angular Collapse`),cl(),cw(90,` `),ki(91,`small`),cw(92,` multi target`),cl(),cw(93,`
      `),cl(),cw(94,`
      `),ki(95,`c-card-body`),cw(96,`
        `),ki(97,`p`,3),cw(98,`
          A `),ki(99,`code`),cw(100,`<c-button>`),cl(),cw(101,` can show and hide multiple elements.
        `),cl(),cw(102,`
        `),ki(103,`app-docs-example`,14),cw(104,`
          `),ki(105,`button`,5),Rh(`click`,function(){return i.toggleCollapse(2)}),cw(106,`
            Toggle first element
          `),cl(),cw(107,`
          `),ki(108,`button`,5),Rh(`click`,function(){return i.toggleCollapse(3)}),cw(109,`
            Toggle second element
          `),cl(),cw(110,`
          `),ki(111,`button`,5),Rh(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),cw(112,`
            Toggle both
          `),cl(),cw(113,`
          `),ki(114,`c-row`,10),cw(115,`
            `),ki(116,`c-col`,15),cw(117,`
              `),ki(118,`div`,6),cw(119,`
                `),ki(120,`c-card`,16),cw(121,`
                  `),ki(122,`c-card-body`),cw(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),cl(),cw(124,`
                `),cl(),cw(125,`
              `),cl(),cw(126,`
            `),cl(),cw(127,`
            `),ki(128,`c-col`,15),cw(129,`
              `),ki(130,`div`,6),cw(131,`
                `),ki(132,`c-card`,16),cw(133,`
                  `),ki(134,`c-card-body`),cw(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),cl(),cw(136,`
                `),cl(),cw(137,`
              `),cl(),cw(138,`
            `),cl(),cw(139,`
          `),cl(),cw(140,`
        `),cl(),cw(141,`
      `),cl(),cw(142,`
    `),cl(),cw(143,`
  `),cl(),cw(144,`
`),cl()),o&2&&($E(27),wh(`visible`,i.collapses()[0]),$E(36),Th(`aria-expanded`,i.collapses()[1]),$E(5),wh(`visible`,i.collapses()[1]),$E(50),wh(`visible`,i.collapses()[2]),$E(12),wh(`visible`,i.collapses()[3]))},dependencies:[t1,rb,Pi,Xv,Li,E,qv,hc,c],encapsulation:2})}};export{v as CollapsesComponent};