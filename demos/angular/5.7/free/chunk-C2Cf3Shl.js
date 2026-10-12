import{Dt as O,Ft as Pa,I as G,Jr as le,P as FV,T as E,Wr as kp,Wt as Re,Yt as S,_n as VV,ai as nH,en as T,gn as V,gt as La,j as F,qt as Roe,ua as ye}from"./main-V43LM6ZM.js";import{t as E$1}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var v=class c$1{constructor(){this.collapses=E([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=T({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Collapse`),F(),ye(12,`
      `),F(),ye(13,`
      `),O(14,`c-card-body`),ye(15,`
        `),O(16,`p`,3),ye(17,`You can use a link or a button component.`),F(),ye(18,`
        `),O(19,`app-docs-example`,4),ye(20,`
          `),O(21,`a`,5),le(`click`,function(){return i.toggleCollapse(0)}),ye(22,`Link`),F(),ye(23,`
          `),O(24,`button`,5),le(`click`,function(){return i.toggleCollapse(0)}),ye(25,`
            Button
          `),F(),ye(26,`
          `),O(27,`div`,6),ye(28,`
            `),O(29,`c-card`,7),ye(30,`
              `),O(31,`c-card-body`),ye(32,`
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
  `),O(40,`c-col`,0),ye(41,`
    `),O(42,`c-card`,2),ye(43,`
      `),O(44,`c-card-header`,8),ye(45,`
        `),O(46,`strong`),ye(47,`Angular Collapse`),F(),ye(48,` `),O(49,`small`),ye(50,`horizontal`),F(),ye(51,`
      `),F(),ye(52,`
      `),O(53,`c-card-body`),ye(54,`
        `),O(55,`p`,3),ye(56,`
          Add the `),O(57,`code`),ye(58,`horizontal`),F(),ye(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),F(),ye(60,`
        `),O(61,`app-docs-example`,4),ye(62,`
          `),O(63,`button`,9),le(`click`,function(){return i.toggleCollapse(1)}),ye(64,`
            Button
          `),F(),ye(65,`
          `),O(66,`div`,10),ye(67,`
            `),O(68,`div`,11),ye(69,`
              `),O(70,`c-card`,12),ye(71,`
                `),O(72,`c-card-body`,13),ye(73,`
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
  `),O(82,`c-col`,0),ye(83,`
    `),O(84,`c-card`,2),ye(85,`
      `),O(86,`c-card-header`),ye(87,`
        `),O(88,`strong`),ye(89,`Angular Collapse`),F(),ye(90,` `),O(91,`small`),ye(92,` multi target`),F(),ye(93,`
      `),F(),ye(94,`
      `),O(95,`c-card-body`),ye(96,`
        `),O(97,`p`,3),ye(98,`
          A `),O(99,`code`),ye(100,`<c-button>`),F(),ye(101,` can show and hide multiple elements.
        `),F(),ye(102,`
        `),O(103,`app-docs-example`,14),ye(104,`
          `),O(105,`button`,5),le(`click`,function(){return i.toggleCollapse(2)}),ye(106,`
            Toggle first element
          `),F(),ye(107,`
          `),O(108,`button`,5),le(`click`,function(){return i.toggleCollapse(3)}),ye(109,`
            Toggle second element
          `),F(),ye(110,`
          `),O(111,`button`,5),le(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),ye(112,`
            Toggle both
          `),F(),ye(113,`
          `),O(114,`c-row`,10),ye(115,`
            `),O(116,`c-col`,15),ye(117,`
              `),O(118,`div`,6),ye(119,`
                `),O(120,`c-card`,16),ye(121,`
                  `),O(122,`c-card-body`),ye(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),F(),ye(124,`
                `),F(),ye(125,`
              `),F(),ye(126,`
            `),F(),ye(127,`
            `),O(128,`c-col`,15),ye(129,`
              `),O(130,`div`,6),ye(131,`
                `),O(132,`c-card`,16),ye(133,`
                  `),O(134,`c-card-body`),ye(135,`
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
`),F()),o&2&&(S(27),V(`visible`,i.collapses()[0]),S(36),G(`aria-expanded`,i.collapses()[1]),S(5),V(`visible`,i.collapses()[1]),S(50),V(`visible`,i.collapses()[2]),S(12),V(`visible`,i.collapses()[3]))},dependencies:[Roe,nH,Pa,VV,La,E$1,FV,kp,c],encapsulation:2})}};export{v as CollapsesComponent};