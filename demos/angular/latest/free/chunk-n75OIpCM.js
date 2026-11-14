import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{C as Cle,M as F,Mt as Oe,Qi as vh,Wi as uU,Zt as S,_a as z,c as AU,ci as oU,hi as pe,k as E$1,mt as L,ot as Ka,rn as U,sa as x,un as Wa,x as Ce}from"./main-VQBM3OGL.js";var v=class c$1{constructor(){this.collapses=E$1([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=x({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular Collapse`),L(),Ce(12,`
      `),L(),Ce(13,`
      `),F(14,`c-card-body`),Ce(15,`
        `),F(16,`p`,3),Ce(17,`You can use a link or a button component.`),L(),Ce(18,`
        `),F(19,`app-docs-example`,4),Ce(20,`
          `),F(21,`a`,5),pe(`click`,function(){return i.toggleCollapse(0)}),Ce(22,`Link`),L(),Ce(23,`
          `),F(24,`button`,5),pe(`click`,function(){return i.toggleCollapse(0)}),Ce(25,`
            Button
          `),L(),Ce(26,`
          `),F(27,`div`,6),Ce(28,`
            `),F(29,`c-card`,7),Ce(30,`
              `),F(31,`c-card-body`),Ce(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),L(),Ce(33,`
            `),L(),Ce(34,`
          `),L(),Ce(35,`
        `),L(),Ce(36,`
      `),L(),Ce(37,`
    `),L(),Ce(38,`
  `),L(),Ce(39,`
  `),F(40,`c-col`,0),Ce(41,`
    `),F(42,`c-card`,2),Ce(43,`
      `),F(44,`c-card-header`,8),Ce(45,`
        `),F(46,`strong`),Ce(47,`Angular Collapse`),L(),Ce(48,` `),F(49,`small`),Ce(50,`horizontal`),L(),Ce(51,`
      `),L(),Ce(52,`
      `),F(53,`c-card-body`),Ce(54,`
        `),F(55,`p`,3),Ce(56,`
          Add the `),F(57,`code`),Ce(58,`horizontal`),L(),Ce(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),L(),Ce(60,`
        `),F(61,`app-docs-example`,4),Ce(62,`
          `),F(63,`button`,9),pe(`click`,function(){return i.toggleCollapse(1)}),Ce(64,`
            Button
          `),L(),Ce(65,`
          `),F(66,`div`,10),Ce(67,`
            `),F(68,`div`,11),Ce(69,`
              `),F(70,`c-card`,12),Ce(71,`
                `),F(72,`c-card-body`,13),Ce(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),L(),Ce(74,`
              `),L(),Ce(75,`
            `),L(),Ce(76,`
          `),L(),Ce(77,`
        `),L(),Ce(78,`
      `),L(),Ce(79,`
    `),L(),Ce(80,`
  `),L(),Ce(81,`
  `),F(82,`c-col`,0),Ce(83,`
    `),F(84,`c-card`,2),Ce(85,`
      `),F(86,`c-card-header`),Ce(87,`
        `),F(88,`strong`),Ce(89,`Angular Collapse`),L(),Ce(90,` `),F(91,`small`),Ce(92,` multi target`),L(),Ce(93,`
      `),L(),Ce(94,`
      `),F(95,`c-card-body`),Ce(96,`
        `),F(97,`p`,3),Ce(98,`
          A `),F(99,`code`),Ce(100,`<c-button>`),L(),Ce(101,` can show and hide multiple elements.
        `),L(),Ce(102,`
        `),F(103,`app-docs-example`,14),Ce(104,`
          `),F(105,`button`,5),pe(`click`,function(){return i.toggleCollapse(2)}),Ce(106,`
            Toggle first element
          `),L(),Ce(107,`
          `),F(108,`button`,5),pe(`click`,function(){return i.toggleCollapse(3)}),Ce(109,`
            Toggle second element
          `),L(),Ce(110,`
          `),F(111,`button`,5),pe(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),Ce(112,`
            Toggle both
          `),L(),Ce(113,`
          `),F(114,`c-row`,10),Ce(115,`
            `),F(116,`c-col`,15),Ce(117,`
              `),F(118,`div`,6),Ce(119,`
                `),F(120,`c-card`,16),Ce(121,`
                  `),F(122,`c-card-body`),Ce(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),L(),Ce(124,`
                `),L(),Ce(125,`
              `),L(),Ce(126,`
            `),L(),Ce(127,`
            `),F(128,`c-col`,15),Ce(129,`
              `),F(130,`div`,6),Ce(131,`
                `),F(132,`c-card`,16),Ce(133,`
                  `),F(134,`c-card-body`),Ce(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),L(),Ce(136,`
                `),L(),Ce(137,`
              `),L(),Ce(138,`
            `),L(),Ce(139,`
          `),L(),Ce(140,`
        `),L(),Ce(141,`
      `),L(),Ce(142,`
    `),L(),Ce(143,`
  `),L(),Ce(144,`
`),L()),o&2&&(S(27),U(`visible`,i.collapses()[0]),S(36),z(`aria-expanded`,i.collapses()[1]),S(5),U(`visible`,i.collapses()[1]),S(50),U(`visible`,i.collapses()[2]),S(12),U(`visible`,i.collapses()[3]))},dependencies:[Cle,AU,Wa,uU,Ka,E,oU,vh,c],encapsulation:2})}};export{v as CollapsesComponent};