import{A as F,Br as jse,D as E,Dt as Poe,E as Dw,G as Hse,Gt as T,Hr as ke,Jn as bw,Kt as Tse,Lr as ja,Mn as Zse,Ot as Pse,Pn as _,Si as qse,Vr as k,Xt as Uoe,Z as Iw,Zt as Use,ba as zse,cn as XF,d as Ba,fa as ye,hr as fe,ht as Mse,mi as pse,nn as Vse,o as $se,q as IH,qt as UH,wi as rA,yt as Nse}from"./main-U5YNMN7V.js";import{t as E$1}from"./chunk-XCt8LgbN.js";import{t as c}from"./chunk-B_o4dmI3.js";var G=class u{constructor(){this.basicVisible=T(!1);this.offcanvasVisible=T(!1);this.triggerCount=T(0)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=E({type:u,selectors:[[`app-search-button`]],decls:160,vars:4,consts:[[`xs`,`12`],[`href`,`components/search-button`,`title`,`Search Button`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/search-button#basic-example`],[`aria-label`,`Open search dialog`,`aria-controls`,`search-button-basic-example`,3,`trigger`],[`id`,`search-button-basic-example`,`aria-labelledby`,`search-button-basic-example-title`,3,`visibleChange`,`visible`],[`cModalTitle`,``,`id`,`search-button-basic-example-title`,1,`w-100`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search`,`aria-label`,`Search`],[1,`text-body-secondary`,`small`,`mb-2`],[`cListGroup`,``,`flush`,``],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`],[`color`,`secondary`,`shape`,`rounded-pill`],[`href`,`components/search-button#custom-shortcut`],[`placeholder`,`Command palette`,`shortcut`,`meta+i,ctrl+i`,`aria-label`,`Open command palette`,3,`trigger`],[`color`,`info`,1,`mt-3`,`mb-0`],[`href`,`components/search-button#launch-an-offcanvas`],[`shortcut`,`meta+shift+o,ctrl+shift+o`,`aria-label`,`Open search panel`,`aria-controls`,`search-button-offcanvas-example`,3,`trigger`],[`id`,`search-button-offcanvas-example`,`placement`,`end`,3,`visibleChange`,`visible`],[`cOffcanvasTitle`,``],[`cButtonClose`,``,1,`text-reset`,3,`click`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search...`,`aria-label`,`Search in panel`,1,`mb-3`],[1,`mb-0`]],template:function(l,i){l&1&&(k(0,`c-row`),ye(1,`
  `),k(2,`c-col`,0),ye(3,`
    `),ke(4,`app-docs-components`,1),ye(5,`
    `),k(6,`c-card`,2),ye(7,`
      `),k(8,`c-card-header`),ye(9,`
        `),k(10,`strong`),ye(11,`Angular Search Button`),F(),ye(12,` `),k(13,`small`),ye(14,`Basic example`),F(),ye(15,`
      `),F(),ye(16,`
      `),k(17,`c-card-body`),ye(18,`
        `),k(19,`p`,3),ye(20,`
          Use `),k(21,`code`),ye(22,`c-search-button`),F(),ye(23,` as the entry point for a controlled search dialog. Listen
          for `),k(24,`code`),ye(25,`(trigger)`),F(),ye(26,` \u2014 emitted on click or on the keyboard shortcut \u2014 to open a
          `),k(27,`code`),ye(28,`c-modal`),F(),ye(29,` you own.
        `),F(),ye(30,`
        `),k(31,`app-docs-example`,4),ye(32,`
          `),k(33,`c-search-button`,5),fe(`trigger`,function(){return i.basicVisible.set(!0)}),F(),ye(34,`
          `),k(35,`c-modal`,6),Iw(`visibleChange`,function(a){return XF(i.basicVisible,a)||(i.basicVisible=a),a}),ye(36,`
            `),k(37,`c-modal-header`),ye(38,`
              `),k(39,`h5`,7),ye(40,`
                `),ke(41,`input`,8),ye(42,`
              `),F(),ye(43,`
            `),F(),ye(44,`
            `),k(45,`c-modal-body`),ye(46,`
              `),k(47,`p`,9),ye(48,`Recent searches`),F(),ye(49,`
              `),k(50,`div`,10),ye(51,`
                `),k(52,`button`,11),ye(53,`
                  CoreUI components overview
                  `),k(54,`c-badge`,12),ye(55,`Open`),F(),ye(56,`
                `),F(),ye(57,`
                `),k(58,`button`,11),ye(59,`
                  Modal dialog examples
                  `),k(60,`c-badge`,12),ye(61,`Open`),F(),ye(62,`
                `),F(),ye(63,`
                `),k(64,`button`,11),ye(65,`
                  Sidebar navigation customization
                  `),k(66,`c-badge`,12),ye(67,`Open`),F(),ye(68,`
                `),F(),ye(69,`
              `),F(),ye(70,`
            `),F(),ye(71,`
          `),F(),ye(72,`
        `),F(),ye(73,`
      `),F(),ye(74,`
    `),F(),ye(75,`

    `),k(76,`c-card`,2),ye(77,`
      `),k(78,`c-card-header`),ye(79,`
        `),k(80,`strong`),ye(81,`Angular Search Button`),F(),ye(82,` `),k(83,`small`),ye(84,`Custom shortcut`),F(),ye(85,`
      `),F(),ye(86,`
      `),k(87,`c-card-body`),ye(88,`
        `),k(89,`p`,3),ye(90,`
          Configure `),k(91,`code`),ye(92,`shortcut`),F(),ye(93,` to match your command palette or product conventions, and
          customize the `),k(94,`code`),ye(95,`placeholder`),F(),ye(96,` text.
        `),F(),ye(97,`
        `),k(98,`app-docs-example`,13),ye(99,`
          `),k(100,`div`),ye(101,`
            `),k(102,`c-search-button`,14),fe(`trigger`,function(){return i.triggerCount.update(a=>a+1)}),F(),ye(103,`
            `),k(104,`c-alert`,15),ye(105),F(),ye(106,`
          `),F(),ye(107,`
        `),F(),ye(108,`
      `),F(),ye(109,`
    `),F(),ye(110,`

    `),k(111,`c-card`,2),ye(112,`
      `),k(113,`c-card-header`),ye(114,`
        `),k(115,`strong`),ye(116,`Angular Search Button`),F(),ye(117,` `),k(118,`small`),ye(119,`Launch an offcanvas`),F(),ye(120,`
      `),F(),ye(121,`
      `),k(122,`c-card-body`),ye(123,`
        `),k(124,`p`,3),ye(125,`
          `),k(126,`code`),ye(127,`c-search-button`),F(),ye(128,` is a trigger only — pair it with a `),k(129,`code`),ye(130,`c-offcanvas`),F(),ye(131,`
          instead of a modal when you want a docked panel for quick navigation or command results.
        `),F(),ye(132,`
        `),k(133,`app-docs-example`,16),ye(134,`
          `),k(135,`c-search-button`,17),fe(`trigger`,function(){return i.offcanvasVisible.set(!0)}),F(),ye(136,`
          `),k(137,`c-offcanvas`,18),Iw(`visibleChange`,function(a){return XF(i.offcanvasVisible,a)||(i.offcanvasVisible=a),a}),ye(138,`
            `),k(139,`c-offcanvas-header`),ye(140,`
              `),k(141,`h5`,19),ye(142,`Search panel`),F(),ye(143,`
              `),k(144,`button`,20),fe(`click`,function(){return i.offcanvasVisible.set(!1)}),F(),ye(145,`
            `),F(),ye(146,`
            `),k(147,`c-offcanvas-body`),ye(148,`
              `),ke(149,`input`,21),ye(150,`
              `),k(151,`p`,22),ye(152,`Use this space for filters, recent searches, or command shortcuts.`),F(),ye(153,`
            `),F(),ye(154,`
          `),F(),ye(155,`
        `),F(),ye(156,`
      `),F(),ye(157,`
    `),F(),ye(158,`
  `),F(),ye(159,`
`),F()),l&2&&(_(35),Dw(`visible`,i.basicVisible),_(70),bw(`
              Triggered `,i.triggerCount(),` `,i.triggerCount()===1?`time`:`times`,` with click
              or shortcut.
            `),_(32),Dw(`visible`,i.offcanvasVisible))},dependencies:[Mse,UH,Ba,IH,ja,E$1,c,Zse,Hse,jse,Vse,Pse,pse,Tse,Nse,Uoe,$se,qse,zse,Use,rA,Poe],encapsulation:2})}};export{G as AppSearchButtonComponent};