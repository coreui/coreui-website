import{Ii as zw,Ir as nm,Jt as Ug,Rr as nu,Y as Ii,_i as vD,qr as qg,ri as rs,rn as Wg,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$n as ux,R as JS,an as fF,ht as Ro,kt as Vs,lt as Po,yn as ko}from"./main-AD2Y5VJE.js";import{t as I}from"./chunk-Y32HznYM.js";import"./chunk-CHo8zYa-.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-DOxS8IGk.js";var v=class c$1{constructor(){this.collapses=Ii([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=zw({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Collapse`),nu(),Wb(12,`
      `),nu(),Wb(13,`
      `),rs(14,`c-card-body`),Wb(15,`
        `),rs(16,`p`,3),Wb(17,`You can use a link or a button component.`),nu(),Wb(18,`
        `),rs(19,`app-docs-example`,4),Wb(20,`
          `),rs(21,`a`,5),nm(`click`,function(){return i.toggleCollapse(0)}),Wb(22,`Link`),nu(),Wb(23,`
          `),rs(24,`button`,5),nm(`click`,function(){return i.toggleCollapse(0)}),Wb(25,`
            Button
          `),nu(),Wb(26,`
          `),rs(27,`div`,6),Wb(28,`
            `),rs(29,`c-card`,7),Wb(30,`
              `),rs(31,`c-card-body`),Wb(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),nu(),Wb(33,`
            `),nu(),Wb(34,`
          `),nu(),Wb(35,`
        `),nu(),Wb(36,`
      `),nu(),Wb(37,`
    `),nu(),Wb(38,`
  `),nu(),Wb(39,`
  `),rs(40,`c-col`,0),Wb(41,`
    `),rs(42,`c-card`,2),Wb(43,`
      `),rs(44,`c-card-header`,8),Wb(45,`
        `),rs(46,`strong`),Wb(47,`Angular Collapse`),nu(),Wb(48,` `),rs(49,`small`),Wb(50,`horizontal`),nu(),Wb(51,`
      `),nu(),Wb(52,`
      `),rs(53,`c-card-body`),Wb(54,`
        `),rs(55,`p`,3),Wb(56,`
          Add the `),rs(57,`code`),Wb(58,`horizontal`),nu(),Wb(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),nu(),Wb(60,`
        `),rs(61,`app-docs-example`,4),Wb(62,`
          `),rs(63,`button`,9),nm(`click`,function(){return i.toggleCollapse(1)}),Wb(64,`
            Button
          `),nu(),Wb(65,`
          `),rs(66,`div`,10),Wb(67,`
            `),rs(68,`div`,11),Wb(69,`
              `),rs(70,`c-card`,12),Wb(71,`
                `),rs(72,`c-card-body`,13),Wb(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),nu(),Wb(74,`
              `),nu(),Wb(75,`
            `),nu(),Wb(76,`
          `),nu(),Wb(77,`
        `),nu(),Wb(78,`
      `),nu(),Wb(79,`
    `),nu(),Wb(80,`
  `),nu(),Wb(81,`
  `),rs(82,`c-col`,0),Wb(83,`
    `),rs(84,`c-card`,2),Wb(85,`
      `),rs(86,`c-card-header`),Wb(87,`
        `),rs(88,`strong`),Wb(89,`Angular Collapse`),nu(),Wb(90,` `),rs(91,`small`),Wb(92,` multi target`),nu(),Wb(93,`
      `),nu(),Wb(94,`
      `),rs(95,`c-card-body`),Wb(96,`
        `),rs(97,`p`,3),Wb(98,`
          A `),rs(99,`code`),Wb(100,`<c-button>`),nu(),Wb(101,` can show and hide multiple elements.
        `),nu(),Wb(102,`
        `),rs(103,`app-docs-example`,14),Wb(104,`
          `),rs(105,`button`,5),nm(`click`,function(){return i.toggleCollapse(2)}),Wb(106,`
            Toggle first element
          `),nu(),Wb(107,`
          `),rs(108,`button`,5),nm(`click`,function(){return i.toggleCollapse(3)}),Wb(109,`
            Toggle second element
          `),nu(),Wb(110,`
          `),rs(111,`button`,5),nm(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),Wb(112,`
            Toggle both
          `),nu(),Wb(113,`
          `),rs(114,`c-row`,10),Wb(115,`
            `),rs(116,`c-col`,15),Wb(117,`
              `),rs(118,`div`,6),Wb(119,`
                `),rs(120,`c-card`,16),Wb(121,`
                  `),rs(122,`c-card-body`),Wb(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),nu(),Wb(124,`
                `),nu(),Wb(125,`
              `),nu(),Wb(126,`
            `),nu(),Wb(127,`
            `),rs(128,`c-col`,15),Wb(129,`
              `),rs(130,`div`,6),Wb(131,`
                `),rs(132,`c-card`,16),Wb(133,`
                  `),rs(134,`c-card-body`),Wb(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),nu(),Wb(136,`
                `),nu(),Wb(137,`
              `),nu(),Wb(138,`
            `),nu(),Wb(139,`
          `),nu(),Wb(140,`
        `),nu(),Wb(141,`
      `),nu(),Wb(142,`
    `),nu(),Wb(143,`
  `),nu(),Wb(144,`
`),nu()),o&2&&(vD(27),Wg(`visible`,i.collapses()[0]),vD(36),Ug(`aria-expanded`,i.collapses()[1]),vD(5),Wg(`visible`,i.collapses()[1]),vD(50),Wg(`visible`,i.collapses()[2]),vD(12),Wg(`visible`,i.collapses()[3]))},dependencies:[fF,ux,Ro,JS,Po,I,ko,Vs,c],encapsulation:2})}};export{v as CollapsesComponent};