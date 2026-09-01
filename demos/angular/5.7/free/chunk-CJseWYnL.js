import{Dt as P,Nn as _e,Q as If,Si as rP,Vr as ke,Wn as be,X as I,Yt as Ste,Zt as T,an as V,ar as dP,it as JL,or as da,t as $,ut as L,v as C,zi as ua}from"./main-JT3YLBAZ.js";import{t as E}from"./chunk-S_NItMQM.js";import{t as c}from"./chunk-BnIj8_pR.js";var v=class c$1{constructor(){this.collapses=T([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=I({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,0),be(3,`
    `),ke(4,`app-docs-components`,1),be(5,`
    `),L(6,`c-card`,2),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular Collapse`),P(),be(12,`
      `),P(),be(13,`
      `),L(14,`c-card-body`),be(15,`
        `),L(16,`p`,3),be(17,`You can use a link or a button component.`),P(),be(18,`
        `),L(19,`app-docs-example`,4),be(20,`
          `),L(21,`a`,5),_e(`click`,function(){return i.toggleCollapse(0)}),be(22,`Link`),P(),be(23,`
          `),L(24,`button`,5),_e(`click`,function(){return i.toggleCollapse(0)}),be(25,`
            Button
          `),P(),be(26,`
          `),L(27,`div`,6),be(28,`
            `),L(29,`c-card`,7),be(30,`
              `),L(31,`c-card-body`),be(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),P(),be(33,`
            `),P(),be(34,`
          `),P(),be(35,`
        `),P(),be(36,`
      `),P(),be(37,`
    `),P(),be(38,`
  `),P(),be(39,`
  `),L(40,`c-col`,0),be(41,`
    `),L(42,`c-card`,2),be(43,`
      `),L(44,`c-card-header`,8),be(45,`
        `),L(46,`strong`),be(47,`Angular Collapse`),P(),be(48,` `),L(49,`small`),be(50,`horizontal`),P(),be(51,`
      `),P(),be(52,`
      `),L(53,`c-card-body`),be(54,`
        `),L(55,`p`,3),be(56,`
          Add the `),L(57,`code`),be(58,`horizontal`),P(),be(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),P(),be(60,`
        `),L(61,`app-docs-example`,4),be(62,`
          `),L(63,`button`,9),_e(`click`,function(){return i.toggleCollapse(1)}),be(64,`
            Button
          `),P(),be(65,`
          `),L(66,`div`,10),be(67,`
            `),L(68,`div`,11),be(69,`
              `),L(70,`c-card`,12),be(71,`
                `),L(72,`c-card-body`,13),be(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),P(),be(74,`
              `),P(),be(75,`
            `),P(),be(76,`
          `),P(),be(77,`
        `),P(),be(78,`
      `),P(),be(79,`
    `),P(),be(80,`
  `),P(),be(81,`
  `),L(82,`c-col`,0),be(83,`
    `),L(84,`c-card`,2),be(85,`
      `),L(86,`c-card-header`),be(87,`
        `),L(88,`strong`),be(89,`Angular Collapse`),P(),be(90,` `),L(91,`small`),be(92,` multi target`),P(),be(93,`
      `),P(),be(94,`
      `),L(95,`c-card-body`),be(96,`
        `),L(97,`p`,3),be(98,`
          A `),L(99,`code`),be(100,`<c-button>`),P(),be(101,` can show and hide multiple elements.
        `),P(),be(102,`
        `),L(103,`app-docs-example`,14),be(104,`
          `),L(105,`button`,5),_e(`click`,function(){return i.toggleCollapse(2)}),be(106,`
            Toggle first element
          `),P(),be(107,`
          `),L(108,`button`,5),_e(`click`,function(){return i.toggleCollapse(3)}),be(109,`
            Toggle second element
          `),P(),be(110,`
          `),L(111,`button`,5),_e(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),be(112,`
            Toggle both
          `),P(),be(113,`
          `),L(114,`c-row`,10),be(115,`
            `),L(116,`c-col`,15),be(117,`
              `),L(118,`div`,6),be(119,`
                `),L(120,`c-card`,16),be(121,`
                  `),L(122,`c-card-body`),be(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),P(),be(124,`
                `),P(),be(125,`
              `),P(),be(126,`
            `),P(),be(127,`
            `),L(128,`c-col`,15),be(129,`
              `),L(130,`div`,6),be(131,`
                `),L(132,`c-card`,16),be(133,`
                  `),L(134,`c-card-body`),be(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),P(),be(136,`
                `),P(),be(137,`
              `),P(),be(138,`
            `),P(),be(139,`
          `),P(),be(140,`
        `),P(),be(141,`
      `),P(),be(142,`
    `),P(),be(143,`
  `),P(),be(144,`
`),P()),o&2&&(C(27),V(`visible`,i.collapses()[0]),C(36),$(`aria-expanded`,i.collapses()[1]),C(5),V(`visible`,i.collapses()[1]),C(50),V(`visible`,i.collapses()[2]),C(12),V(`visible`,i.collapses()[3]))},dependencies:[Ste,dP,ua,rP,da,E,JL,If,c],encapsulation:2})}};export{v as CollapsesComponent};