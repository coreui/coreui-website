import{Fi as sl,Ft as fT,H as Nv,Hn as Dh,On as xi,Q as Ri,Tn as wv,Un as Eh,ai as ei,di as hD,fr as Oi,ki as ow,pi as jI,q as Pv,xr as Th,yn as tc,zn as Ah}from"./main-5IL4V6AK.js";import{i as w}from"./chunk-DoEIP2nP.js";import{t as c}from"./chunk-bmXPd0og.js";var v=class c$1{constructor(){this.collapses=ei([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=hD({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(Oi(0,`c-row`),ow(1,`
  `),Oi(2,`c-col`,0),ow(3,`
    `),Th(4,`app-docs-components`,1),ow(5,`
    `),Oi(6,`c-card`,2),ow(7,`
      `),Oi(8,`c-card-header`),ow(9,`
        `),Oi(10,`strong`),ow(11,`Angular Collapse`),sl(),ow(12,`
      `),sl(),ow(13,`
      `),Oi(14,`c-card-body`),ow(15,`
        `),Oi(16,`p`,3),ow(17,`You can use a link or a button component.`),sl(),ow(18,`
        `),Oi(19,`app-docs-example`,4),ow(20,`
          `),Oi(21,`a`,5),Ah(`click`,function(){return i.toggleCollapse(0)}),ow(22,`Link`),sl(),ow(23,`
          `),Oi(24,`button`,5),Ah(`click`,function(){return i.toggleCollapse(0)}),ow(25,`
            Button
          `),sl(),ow(26,`
          `),Oi(27,`div`,6),ow(28,`
            `),Oi(29,`c-card`,7),ow(30,`
              `),Oi(31,`c-card-body`),ow(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),sl(),ow(33,`
            `),sl(),ow(34,`
          `),sl(),ow(35,`
        `),sl(),ow(36,`
      `),sl(),ow(37,`
    `),sl(),ow(38,`
  `),sl(),ow(39,`
  `),Oi(40,`c-col`,0),ow(41,`
    `),Oi(42,`c-card`,2),ow(43,`
      `),Oi(44,`c-card-header`,8),ow(45,`
        `),Oi(46,`strong`),ow(47,`Angular Collapse`),sl(),ow(48,` `),Oi(49,`small`),ow(50,`horizontal`),sl(),ow(51,`
      `),sl(),ow(52,`
      `),Oi(53,`c-card-body`),ow(54,`
        `),Oi(55,`p`,3),ow(56,`
          Add the `),Oi(57,`code`),ow(58,`horizontal`),sl(),ow(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),sl(),ow(60,`
        `),Oi(61,`app-docs-example`,4),ow(62,`
          `),Oi(63,`button`,9),Ah(`click`,function(){return i.toggleCollapse(1)}),ow(64,`
            Button
          `),sl(),ow(65,`
          `),Oi(66,`div`,10),ow(67,`
            `),Oi(68,`div`,11),ow(69,`
              `),Oi(70,`c-card`,12),ow(71,`
                `),Oi(72,`c-card-body`,13),ow(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),sl(),ow(74,`
              `),sl(),ow(75,`
            `),sl(),ow(76,`
          `),sl(),ow(77,`
        `),sl(),ow(78,`
      `),sl(),ow(79,`
    `),sl(),ow(80,`
  `),sl(),ow(81,`
  `),Oi(82,`c-col`,0),ow(83,`
    `),Oi(84,`c-card`,2),ow(85,`
      `),Oi(86,`c-card-header`),ow(87,`
        `),Oi(88,`strong`),ow(89,`Angular Collapse`),sl(),ow(90,` `),Oi(91,`small`),ow(92,` multi target`),sl(),ow(93,`
      `),sl(),ow(94,`
      `),Oi(95,`c-card-body`),ow(96,`
        `),Oi(97,`p`,3),ow(98,`
          A `),Oi(99,`code`),ow(100,`<c-button>`),sl(),ow(101,` can show and hide multiple elements.
        `),sl(),ow(102,`
        `),Oi(103,`app-docs-example`,14),ow(104,`
          `),Oi(105,`button`,5),Ah(`click`,function(){return i.toggleCollapse(2)}),ow(106,`
            Toggle first element
          `),sl(),ow(107,`
          `),Oi(108,`button`,5),Ah(`click`,function(){return i.toggleCollapse(3)}),ow(109,`
            Toggle second element
          `),sl(),ow(110,`
          `),Oi(111,`button`,5),Ah(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),ow(112,`
            Toggle both
          `),sl(),ow(113,`
          `),Oi(114,`c-row`,10),ow(115,`
            `),Oi(116,`c-col`,15),ow(117,`
              `),Oi(118,`div`,6),ow(119,`
                `),Oi(120,`c-card`,16),ow(121,`
                  `),Oi(122,`c-card-body`),ow(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),sl(),ow(124,`
                `),sl(),ow(125,`
              `),sl(),ow(126,`
            `),sl(),ow(127,`
            `),Oi(128,`c-col`,15),ow(129,`
              `),Oi(130,`div`,6),ow(131,`
                `),Oi(132,`c-card`,16),ow(133,`
                  `),Oi(134,`c-card-body`),ow(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),sl(),ow(136,`
                `),sl(),ow(137,`
              `),sl(),ow(138,`
            `),sl(),ow(139,`
          `),sl(),ow(140,`
        `),sl(),ow(141,`
      `),sl(),ow(142,`
    `),sl(),ow(143,`
  `),sl(),ow(144,`
`),sl()),o&2&&(jI(27),Dh(`visible`,i.collapses()[0]),jI(36),Eh(`aria-expanded`,i.collapses()[1]),jI(5),Dh(`visible`,i.collapses()[1]),jI(50),Dh(`visible`,i.collapses()[2]),jI(12),Dh(`visible`,i.collapses()[3]))},dependencies:[fT,Pv,xi,Nv,Ri,w,wv,tc,c],encapsulation:2})}};export{v as CollapsesComponent};