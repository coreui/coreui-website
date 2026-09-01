import{An as Zee,Br as k0,Dt as P,Et as Ote,Fi as tne,Nn as _e,Ot as P0,Qr as mA,Si as rP,Ut as Rte,Vr as ke,W as Gte,Wn as be,X as I,Xt as Sw,Y as Hte,Yt as Ste,Zt as T,ar as dP,da as yte,dt as L0,ga as zte,gn as Wte,in as Ute,lt as Kte,nn as Uee,or as da,ut as L,v as C,xi as qte,zi as ua,zt as Qte}from"./main-AXUR3WFK.js";import{t as E}from"./chunk-DrG-2cCJ.js";import{t as c}from"./chunk-Dishkh7c.js";var G=class u{constructor(){this.basicVisible=T(!1);this.offcanvasVisible=T(!1);this.triggerCount=T(0)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=I({type:u,selectors:[[`app-search-button`]],decls:160,vars:4,consts:[[`xs`,`12`],[`href`,`components/search-button`,`title`,`Search Button`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/search-button#basic-example`],[`aria-label`,`Open search dialog`,`aria-controls`,`search-button-basic-example`,3,`trigger`],[`id`,`search-button-basic-example`,`aria-labelledby`,`search-button-basic-example-title`,3,`visibleChange`,`visible`],[`cModalTitle`,``,`id`,`search-button-basic-example-title`,1,`w-100`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search`,`aria-label`,`Search`],[1,`text-body-secondary`,`small`,`mb-2`],[`cListGroup`,``,`flush`,``],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`],[`color`,`secondary`,`shape`,`rounded-pill`],[`href`,`components/search-button#custom-shortcut`],[`placeholder`,`Command palette`,`shortcut`,`meta+i,ctrl+i`,`aria-label`,`Open command palette`,3,`trigger`],[`color`,`info`,1,`mt-3`,`mb-0`],[`href`,`components/search-button#launch-an-offcanvas`],[`shortcut`,`meta+shift+o,ctrl+shift+o`,`aria-label`,`Open search panel`,`aria-controls`,`search-button-offcanvas-example`,3,`trigger`],[`id`,`search-button-offcanvas-example`,`placement`,`end`,3,`visibleChange`,`visible`],[`cOffcanvasTitle`,``],[`cButtonClose`,``,1,`text-reset`,3,`click`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search...`,`aria-label`,`Search in panel`,1,`mb-3`],[1,`mb-0`]],template:function(l,i){l&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,0),be(3,`
    `),ke(4,`app-docs-components`,1),be(5,`
    `),L(6,`c-card`,2),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular Search Button`),P(),be(12,` `),L(13,`small`),be(14,`Basic example`),P(),be(15,`
      `),P(),be(16,`
      `),L(17,`c-card-body`),be(18,`
        `),L(19,`p`,3),be(20,`
          Use `),L(21,`code`),be(22,`c-search-button`),P(),be(23,` as the entry point for a controlled search dialog. Listen
          for `),L(24,`code`),be(25,`(trigger)`),P(),be(26,` \u2014 emitted on click or on the keyboard shortcut \u2014 to open a
          `),L(27,`code`),be(28,`c-modal`),P(),be(29,` you own.
        `),P(),be(30,`
        `),L(31,`app-docs-example`,4),be(32,`
          `),L(33,`c-search-button`,5),_e(`trigger`,function(){return i.basicVisible.set(!0)}),P(),be(34,`
          `),L(35,`c-modal`,6),P0(`visibleChange`,function(a){return mA(i.basicVisible,a)||(i.basicVisible=a),a}),be(36,`
            `),L(37,`c-modal-header`),be(38,`
              `),L(39,`h5`,7),be(40,`
                `),ke(41,`input`,8),be(42,`
              `),P(),be(43,`
            `),P(),be(44,`
            `),L(45,`c-modal-body`),be(46,`
              `),L(47,`p`,9),be(48,`Recent searches`),P(),be(49,`
              `),L(50,`div`,10),be(51,`
                `),L(52,`button`,11),be(53,`
                  CoreUI components overview
                  `),L(54,`c-badge`,12),be(55,`Open`),P(),be(56,`
                `),P(),be(57,`
                `),L(58,`button`,11),be(59,`
                  Modal dialog examples
                  `),L(60,`c-badge`,12),be(61,`Open`),P(),be(62,`
                `),P(),be(63,`
                `),L(64,`button`,11),be(65,`
                  Sidebar navigation customization
                  `),L(66,`c-badge`,12),be(67,`Open`),P(),be(68,`
                `),P(),be(69,`
              `),P(),be(70,`
            `),P(),be(71,`
          `),P(),be(72,`
        `),P(),be(73,`
      `),P(),be(74,`
    `),P(),be(75,`

    `),L(76,`c-card`,2),be(77,`
      `),L(78,`c-card-header`),be(79,`
        `),L(80,`strong`),be(81,`Angular Search Button`),P(),be(82,` `),L(83,`small`),be(84,`Custom shortcut`),P(),be(85,`
      `),P(),be(86,`
      `),L(87,`c-card-body`),be(88,`
        `),L(89,`p`,3),be(90,`
          Configure `),L(91,`code`),be(92,`shortcut`),P(),be(93,` to match your command palette or product conventions, and
          customize the `),L(94,`code`),be(95,`placeholder`),P(),be(96,` text.
        `),P(),be(97,`
        `),L(98,`app-docs-example`,13),be(99,`
          `),L(100,`div`),be(101,`
            `),L(102,`c-search-button`,14),_e(`trigger`,function(){return i.triggerCount.update(a=>a+1)}),P(),be(103,`
            `),L(104,`c-alert`,15),be(105),P(),be(106,`
          `),P(),be(107,`
        `),P(),be(108,`
      `),P(),be(109,`
    `),P(),be(110,`

    `),L(111,`c-card`,2),be(112,`
      `),L(113,`c-card-header`),be(114,`
        `),L(115,`strong`),be(116,`Angular Search Button`),P(),be(117,` `),L(118,`small`),be(119,`Launch an offcanvas`),P(),be(120,`
      `),P(),be(121,`
      `),L(122,`c-card-body`),be(123,`
        `),L(124,`p`,3),be(125,`
          `),L(126,`code`),be(127,`c-search-button`),P(),be(128,` is a trigger only — pair it with a `),L(129,`code`),be(130,`c-offcanvas`),P(),be(131,`
          instead of a modal when you want a docked panel for quick navigation or command results.
        `),P(),be(132,`
        `),L(133,`app-docs-example`,16),be(134,`
          `),L(135,`c-search-button`,17),_e(`trigger`,function(){return i.offcanvasVisible.set(!0)}),P(),be(136,`
          `),L(137,`c-offcanvas`,18),P0(`visibleChange`,function(a){return mA(i.offcanvasVisible,a)||(i.offcanvasVisible=a),a}),be(138,`
            `),L(139,`c-offcanvas-header`),be(140,`
              `),L(141,`h5`,19),be(142,`Search panel`),P(),be(143,`
              `),L(144,`button`,20),_e(`click`,function(){return i.offcanvasVisible.set(!1)}),P(),be(145,`
            `),P(),be(146,`
            `),L(147,`c-offcanvas-body`),be(148,`
              `),ke(149,`input`,21),be(150,`
              `),L(151,`p`,22),be(152,`Use this space for filters, recent searches, or command shortcuts.`),P(),be(153,`
            `),P(),be(154,`
          `),P(),be(155,`
        `),P(),be(156,`
      `),P(),be(157,`
    `),P(),be(158,`
  `),P(),be(159,`
`),P()),l&2&&(C(35),L0(`visible`,i.basicVisible),C(70),k0(`
              Triggered `,i.triggerCount(),` `,i.triggerCount()===1?`time`:`times`,` with click
              or shortcut.
            `),C(32),L0(`visible`,i.offcanvasVisible))},dependencies:[Ste,dP,ua,rP,da,E,c,tne,Wte,Ute,zte,Hte,yte,Rte,Ote,Zee,Gte,Kte,Qte,qte,Sw,Uee],encapsulation:2})}};export{G as AppSearchButtonComponent};