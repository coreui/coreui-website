import{Ar as Th,En as wv,Ft as fT,H as Nv,Hn as Ch,Q as Ri,Xr as aw,bn as tc,fa as yD,fi as ei,kn as xi,la as wh,ni as cl,q as Pv,vr as Oi,wi as kh,zn as BI}from"./main-PRJKJRLJ.js";import{t as E}from"./chunk-pZZ3qGEM.js";import{t as c}from"./chunk-CvPf1mHO.js";var v=class c$1{constructor(){this.collapses=ei([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=yD({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(Oi(0,`c-row`),aw(1,`
  `),Oi(2,`c-col`,0),aw(3,`
    `),Ch(4,`app-docs-components`,1),aw(5,`
    `),Oi(6,`c-card`,2),aw(7,`
      `),Oi(8,`c-card-header`),aw(9,`
        `),Oi(10,`strong`),aw(11,`Angular Collapse`),cl(),aw(12,`
      `),cl(),aw(13,`
      `),Oi(14,`c-card-body`),aw(15,`
        `),Oi(16,`p`,3),aw(17,`You can use a link or a button component.`),cl(),aw(18,`
        `),Oi(19,`app-docs-example`,4),aw(20,`
          `),Oi(21,`a`,5),kh(`click`,function(){return i.toggleCollapse(0)}),aw(22,`Link`),cl(),aw(23,`
          `),Oi(24,`button`,5),kh(`click`,function(){return i.toggleCollapse(0)}),aw(25,`
            Button
          `),cl(),aw(26,`
          `),Oi(27,`div`,6),aw(28,`
            `),Oi(29,`c-card`,7),aw(30,`
              `),Oi(31,`c-card-body`),aw(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),cl(),aw(33,`
            `),cl(),aw(34,`
          `),cl(),aw(35,`
        `),cl(),aw(36,`
      `),cl(),aw(37,`
    `),cl(),aw(38,`
  `),cl(),aw(39,`
  `),Oi(40,`c-col`,0),aw(41,`
    `),Oi(42,`c-card`,2),aw(43,`
      `),Oi(44,`c-card-header`,8),aw(45,`
        `),Oi(46,`strong`),aw(47,`Angular Collapse`),cl(),aw(48,` `),Oi(49,`small`),aw(50,`horizontal`),cl(),aw(51,`
      `),cl(),aw(52,`
      `),Oi(53,`c-card-body`),aw(54,`
        `),Oi(55,`p`,3),aw(56,`
          Add the `),Oi(57,`code`),aw(58,`horizontal`),cl(),aw(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),cl(),aw(60,`
        `),Oi(61,`app-docs-example`,4),aw(62,`
          `),Oi(63,`button`,9),kh(`click`,function(){return i.toggleCollapse(1)}),aw(64,`
            Button
          `),cl(),aw(65,`
          `),Oi(66,`div`,10),aw(67,`
            `),Oi(68,`div`,11),aw(69,`
              `),Oi(70,`c-card`,12),aw(71,`
                `),Oi(72,`c-card-body`,13),aw(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),cl(),aw(74,`
              `),cl(),aw(75,`
            `),cl(),aw(76,`
          `),cl(),aw(77,`
        `),cl(),aw(78,`
      `),cl(),aw(79,`
    `),cl(),aw(80,`
  `),cl(),aw(81,`
  `),Oi(82,`c-col`,0),aw(83,`
    `),Oi(84,`c-card`,2),aw(85,`
      `),Oi(86,`c-card-header`),aw(87,`
        `),Oi(88,`strong`),aw(89,`Angular Collapse`),cl(),aw(90,` `),Oi(91,`small`),aw(92,` multi target`),cl(),aw(93,`
      `),cl(),aw(94,`
      `),Oi(95,`c-card-body`),aw(96,`
        `),Oi(97,`p`,3),aw(98,`
          A `),Oi(99,`code`),aw(100,`<c-button>`),cl(),aw(101,` can show and hide multiple elements.
        `),cl(),aw(102,`
        `),Oi(103,`app-docs-example`,14),aw(104,`
          `),Oi(105,`button`,5),kh(`click`,function(){return i.toggleCollapse(2)}),aw(106,`
            Toggle first element
          `),cl(),aw(107,`
          `),Oi(108,`button`,5),kh(`click`,function(){return i.toggleCollapse(3)}),aw(109,`
            Toggle second element
          `),cl(),aw(110,`
          `),Oi(111,`button`,5),kh(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),aw(112,`
            Toggle both
          `),cl(),aw(113,`
          `),Oi(114,`c-row`,10),aw(115,`
            `),Oi(116,`c-col`,15),aw(117,`
              `),Oi(118,`div`,6),aw(119,`
                `),Oi(120,`c-card`,16),aw(121,`
                  `),Oi(122,`c-card-body`),aw(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),cl(),aw(124,`
                `),cl(),aw(125,`
              `),cl(),aw(126,`
            `),cl(),aw(127,`
            `),Oi(128,`c-col`,15),aw(129,`
              `),Oi(130,`div`,6),aw(131,`
                `),Oi(132,`c-card`,16),aw(133,`
                  `),Oi(134,`c-card-body`),aw(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),cl(),aw(136,`
                `),cl(),aw(137,`
              `),cl(),aw(138,`
            `),cl(),aw(139,`
          `),cl(),aw(140,`
        `),cl(),aw(141,`
      `),cl(),aw(142,`
    `),cl(),aw(143,`
  `),cl(),aw(144,`
`),cl()),o&2&&(BI(27),wh(`visible`,i.collapses()[0]),BI(36),Th(`aria-expanded`,i.collapses()[1]),BI(5),wh(`visible`,i.collapses()[1]),BI(50),wh(`visible`,i.collapses()[2]),BI(12),wh(`visible`,i.collapses()[3]))},dependencies:[fT,Pv,xi,Nv,Ri,E,wv,tc,c],encapsulation:2})}};export{v as CollapsesComponent};