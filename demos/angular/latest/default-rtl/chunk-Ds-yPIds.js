import{Dt as Qb,Ii as zw,Ir as nm,Rn as bm,Rr as nu,Tn as _m,Y as Ii,_i as vD,qr as qg,ri as rs,tn as Wb,yt as Mm}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$n as ux,Dt as VF,Jn as tf,Lt as YF,Mt as Ws,R as JS,T as FF,an as fF,c as AF,ct as PF,f as BF,ht as Ro,i as $2,lt as Po,m as CF,mn as jF,mt as RF,pr as yF,q as LF,w as F2}from"./main-3WAR6WII.js";import{t as I}from"./chunk-Cg8AJzmk.js";import"./chunk-Dd5UTWFN.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-QL_jP78J.js";var G=class u{constructor(){this.basicVisible=Ii(!1);this.offcanvasVisible=Ii(!1);this.triggerCount=Ii(0)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=zw({type:u,selectors:[[`app-search-button`]],decls:160,vars:4,consts:[[`xs`,`12`],[`href`,`components/search-button`,`title`,`Search Button`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/search-button#basic-example`],[`aria-label`,`Open search dialog`,`aria-controls`,`search-button-basic-example`,3,`trigger`],[`id`,`search-button-basic-example`,`aria-labelledby`,`search-button-basic-example-title`,3,`visibleChange`,`visible`],[`cModalTitle`,``,`id`,`search-button-basic-example-title`,1,`w-100`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search`,`aria-label`,`Search`],[1,`text-body-secondary`,`small`,`mb-2`],[`cListGroup`,``,`flush`,``],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`],[`color`,`secondary`,`shape`,`rounded-pill`],[`href`,`components/search-button#custom-shortcut`],[`placeholder`,`Command palette`,`shortcut`,`meta+i,ctrl+i`,`aria-label`,`Open command palette`,3,`trigger`],[`color`,`info`,1,`mt-3`,`mb-0`],[`href`,`components/search-button#launch-an-offcanvas`],[`shortcut`,`meta+shift+o,ctrl+shift+o`,`aria-label`,`Open search panel`,`aria-controls`,`search-button-offcanvas-example`,3,`trigger`],[`id`,`search-button-offcanvas-example`,`placement`,`end`,3,`visibleChange`,`visible`],[`cOffcanvasTitle`,``],[`cButtonClose`,``,1,`text-reset`,3,`click`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search...`,`aria-label`,`Search in panel`,1,`mb-3`],[1,`mb-0`]],template:function(l,i){l&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Search Button`),nu(),Wb(12,` `),rs(13,`small`),Wb(14,`Basic example`),nu(),Wb(15,`
      `),nu(),Wb(16,`
      `),rs(17,`c-card-body`),Wb(18,`
        `),rs(19,`p`,3),Wb(20,`
          Use `),rs(21,`code`),Wb(22,`c-search-button`),nu(),Wb(23,` as the entry point for a controlled search dialog. Listen
          for `),rs(24,`code`),Wb(25,`(trigger)`),nu(),Wb(26,` \u2014 emitted on click or on the keyboard shortcut \u2014 to open a
          `),rs(27,`code`),Wb(28,`c-modal`),nu(),Wb(29,` you own.
        `),nu(),Wb(30,`
        `),rs(31,`app-docs-example`,4),Wb(32,`
          `),rs(33,`c-search-button`,5),nm(`trigger`,function(){return i.basicVisible.set(!0)}),nu(),Wb(34,`
          `),rs(35,`c-modal`,6),Mm(`visibleChange`,function(a){return Qb(i.basicVisible,a)||(i.basicVisible=a),a}),Wb(36,`
            `),rs(37,`c-modal-header`),Wb(38,`
              `),rs(39,`h5`,7),Wb(40,`
                `),qg(41,`input`,8),Wb(42,`
              `),nu(),Wb(43,`
            `),nu(),Wb(44,`
            `),rs(45,`c-modal-body`),Wb(46,`
              `),rs(47,`p`,9),Wb(48,`Recent searches`),nu(),Wb(49,`
              `),rs(50,`div`,10),Wb(51,`
                `),rs(52,`button`,11),Wb(53,`
                  CoreUI components overview
                  `),rs(54,`c-badge`,12),Wb(55,`Open`),nu(),Wb(56,`
                `),nu(),Wb(57,`
                `),rs(58,`button`,11),Wb(59,`
                  Modal dialog examples
                  `),rs(60,`c-badge`,12),Wb(61,`Open`),nu(),Wb(62,`
                `),nu(),Wb(63,`
                `),rs(64,`button`,11),Wb(65,`
                  Sidebar navigation customization
                  `),rs(66,`c-badge`,12),Wb(67,`Open`),nu(),Wb(68,`
                `),nu(),Wb(69,`
              `),nu(),Wb(70,`
            `),nu(),Wb(71,`
          `),nu(),Wb(72,`
        `),nu(),Wb(73,`
      `),nu(),Wb(74,`
    `),nu(),Wb(75,`

    `),rs(76,`c-card`,2),Wb(77,`
      `),rs(78,`c-card-header`),Wb(79,`
        `),rs(80,`strong`),Wb(81,`Angular Search Button`),nu(),Wb(82,` `),rs(83,`small`),Wb(84,`Custom shortcut`),nu(),Wb(85,`
      `),nu(),Wb(86,`
      `),rs(87,`c-card-body`),Wb(88,`
        `),rs(89,`p`,3),Wb(90,`
          Configure `),rs(91,`code`),Wb(92,`shortcut`),nu(),Wb(93,` to match your command palette or product conventions, and
          customize the `),rs(94,`code`),Wb(95,`placeholder`),nu(),Wb(96,` text.
        `),nu(),Wb(97,`
        `),rs(98,`app-docs-example`,13),Wb(99,`
          `),rs(100,`div`),Wb(101,`
            `),rs(102,`c-search-button`,14),nm(`trigger`,function(){return i.triggerCount.update(a=>a+1)}),nu(),Wb(103,`
            `),rs(104,`c-alert`,15),Wb(105),nu(),Wb(106,`
          `),nu(),Wb(107,`
        `),nu(),Wb(108,`
      `),nu(),Wb(109,`
    `),nu(),Wb(110,`

    `),rs(111,`c-card`,2),Wb(112,`
      `),rs(113,`c-card-header`),Wb(114,`
        `),rs(115,`strong`),Wb(116,`Angular Search Button`),nu(),Wb(117,` `),rs(118,`small`),Wb(119,`Launch an offcanvas`),nu(),Wb(120,`
      `),nu(),Wb(121,`
      `),rs(122,`c-card-body`),Wb(123,`
        `),rs(124,`p`,3),Wb(125,`
          `),rs(126,`code`),Wb(127,`c-search-button`),nu(),Wb(128,` is a trigger only — pair it with a `),rs(129,`code`),Wb(130,`c-offcanvas`),nu(),Wb(131,`
          instead of a modal when you want a docked panel for quick navigation or command results.
        `),nu(),Wb(132,`
        `),rs(133,`app-docs-example`,16),Wb(134,`
          `),rs(135,`c-search-button`,17),nm(`trigger`,function(){return i.offcanvasVisible.set(!0)}),nu(),Wb(136,`
          `),rs(137,`c-offcanvas`,18),Mm(`visibleChange`,function(a){return Qb(i.offcanvasVisible,a)||(i.offcanvasVisible=a),a}),Wb(138,`
            `),rs(139,`c-offcanvas-header`),Wb(140,`
              `),rs(141,`h5`,19),Wb(142,`Search panel`),nu(),Wb(143,`
              `),rs(144,`button`,20),nm(`click`,function(){return i.offcanvasVisible.set(!1)}),nu(),Wb(145,`
            `),nu(),Wb(146,`
            `),rs(147,`c-offcanvas-body`),Wb(148,`
              `),qg(149,`input`,21),Wb(150,`
              `),rs(151,`p`,22),Wb(152,`Use this space for filters, recent searches, or command shortcuts.`),nu(),Wb(153,`
            `),nu(),Wb(154,`
          `),nu(),Wb(155,`
        `),nu(),Wb(156,`
      `),nu(),Wb(157,`
    `),nu(),Wb(158,`
  `),nu(),Wb(159,`
`),nu()),l&2&&(vD(35),_m(`visible`,i.basicVisible),vD(70),bm(`
              Triggered `,i.triggerCount(),` `,i.triggerCount()===1?`time`:`times`,` with click
              or shortcut.
            `),vD(32),_m(`visible`,i.offcanvasVisible))},dependencies:[fF,ux,Ro,JS,Po,I,c,YF,FF,RF,PF,AF,Ws,CF,yF,$2,VF,BF,jF,LF,tf,F2],encapsulation:2})}};export{G as AppSearchButtonComponent};