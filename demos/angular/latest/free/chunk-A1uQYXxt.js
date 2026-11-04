import{$t as V,A as F,D as E,Gt as T,Hr as ke,Lr as ja,Pn as _,Vr as k,Yi as vH,d as Ba,fa as ye,hr as fe,ht as Mse,lt as Kp,nt as K,q as IH,qt as UH}from"./main-LLRB5LYM.js";import{t as E$1}from"./chunk-eqjpOFdh.js";import{t as c}from"./chunk-Dzn1Wg-Q.js";var v=class c$1{constructor(){this.collapses=T([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=E({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(k(0,`c-row`),ye(1,`
  `),k(2,`c-col`,0),ye(3,`
    `),ke(4,`app-docs-components`,1),ye(5,`
    `),k(6,`c-card`,2),ye(7,`
      `),k(8,`c-card-header`),ye(9,`
        `),k(10,`strong`),ye(11,`Angular Collapse`),F(),ye(12,`
      `),F(),ye(13,`
      `),k(14,`c-card-body`),ye(15,`
        `),k(16,`p`,3),ye(17,`You can use a link or a button component.`),F(),ye(18,`
        `),k(19,`app-docs-example`,4),ye(20,`
          `),k(21,`a`,5),fe(`click`,function(){return i.toggleCollapse(0)}),ye(22,`Link`),F(),ye(23,`
          `),k(24,`button`,5),fe(`click`,function(){return i.toggleCollapse(0)}),ye(25,`
            Button
          `),F(),ye(26,`
          `),k(27,`div`,6),ye(28,`
            `),k(29,`c-card`,7),ye(30,`
              `),k(31,`c-card-body`),ye(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),F(),ye(33,`
            `),F(),ye(34,`
          `),F(),ye(35,`
        `),F(),ye(36,`
      `),F(),ye(37,`
    `),F(),ye(38,`
  `),F(),ye(39,`
  `),k(40,`c-col`,0),ye(41,`
    `),k(42,`c-card`,2),ye(43,`
      `),k(44,`c-card-header`,8),ye(45,`
        `),k(46,`strong`),ye(47,`Angular Collapse`),F(),ye(48,` `),k(49,`small`),ye(50,`horizontal`),F(),ye(51,`
      `),F(),ye(52,`
      `),k(53,`c-card-body`),ye(54,`
        `),k(55,`p`,3),ye(56,`
          Add the `),k(57,`code`),ye(58,`horizontal`),F(),ye(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),F(),ye(60,`
        `),k(61,`app-docs-example`,4),ye(62,`
          `),k(63,`button`,9),fe(`click`,function(){return i.toggleCollapse(1)}),ye(64,`
            Button
          `),F(),ye(65,`
          `),k(66,`div`,10),ye(67,`
            `),k(68,`div`,11),ye(69,`
              `),k(70,`c-card`,12),ye(71,`
                `),k(72,`c-card-body`,13),ye(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),F(),ye(74,`
              `),F(),ye(75,`
            `),F(),ye(76,`
          `),F(),ye(77,`
        `),F(),ye(78,`
      `),F(),ye(79,`
    `),F(),ye(80,`
  `),F(),ye(81,`
  `),k(82,`c-col`,0),ye(83,`
    `),k(84,`c-card`,2),ye(85,`
      `),k(86,`c-card-header`),ye(87,`
        `),k(88,`strong`),ye(89,`Angular Collapse`),F(),ye(90,` `),k(91,`small`),ye(92,` multi target`),F(),ye(93,`
      `),F(),ye(94,`
      `),k(95,`c-card-body`),ye(96,`
        `),k(97,`p`,3),ye(98,`
          A `),k(99,`code`),ye(100,`<c-button>`),F(),ye(101,` can show and hide multiple elements.
        `),F(),ye(102,`
        `),k(103,`app-docs-example`,14),ye(104,`
          `),k(105,`button`,5),fe(`click`,function(){return i.toggleCollapse(2)}),ye(106,`
            Toggle first element
          `),F(),ye(107,`
          `),k(108,`button`,5),fe(`click`,function(){return i.toggleCollapse(3)}),ye(109,`
            Toggle second element
          `),F(),ye(110,`
          `),k(111,`button`,5),fe(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),ye(112,`
            Toggle both
          `),F(),ye(113,`
          `),k(114,`c-row`,10),ye(115,`
            `),k(116,`c-col`,15),ye(117,`
              `),k(118,`div`,6),ye(119,`
                `),k(120,`c-card`,16),ye(121,`
                  `),k(122,`c-card-body`),ye(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),F(),ye(124,`
                `),F(),ye(125,`
              `),F(),ye(126,`
            `),F(),ye(127,`
            `),k(128,`c-col`,15),ye(129,`
              `),k(130,`div`,6),ye(131,`
                `),k(132,`c-card`,16),ye(133,`
                  `),k(134,`c-card-body`),ye(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),F(),ye(136,`
                `),F(),ye(137,`
              `),F(),ye(138,`
            `),F(),ye(139,`
          `),F(),ye(140,`
        `),F(),ye(141,`
      `),F(),ye(142,`
    `),F(),ye(143,`
  `),F(),ye(144,`
`),F()),o&2&&(_(27),V(`visible`,i.collapses()[0]),_(36),K(`aria-expanded`,i.collapses()[1]),_(5),V(`visible`,i.collapses()[1]),_(50),V(`visible`,i.collapses()[2]),_(12),V(`visible`,i.collapses()[3]))},dependencies:[Mse,UH,Ba,IH,ja,E$1,vH,Kp,c],encapsulation:2})}};export{v as CollapsesComponent};