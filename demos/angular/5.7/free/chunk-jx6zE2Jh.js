import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{$t as Sle,Bt as Ple,C as Cle,G as Hle,Hr as jle,Ki as ule,Li as tE,M as F,Mt as Oe,Pt as Ole,Si as rL,Wi as uU,Zt as S,aa as wle,c as AU,cn as Vae,cr as eE,gt as Lle,hi as pe,jt as Oae,k as E$1,ln as Vle,lt as Kle,mt as L,ot as Ka,qr as lA,sa as x,sn as Ule,un as Wa,v as Ble,vn as Xw,x as Ce}from"./main-VQBM3OGL.js";var G=class u{constructor(){this.basicVisible=E$1(!1);this.offcanvasVisible=E$1(!1);this.triggerCount=E$1(0)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=x({type:u,selectors:[[`app-search-button`]],decls:160,vars:4,consts:[[`xs`,`12`],[`href`,`components/search-button`,`title`,`Search Button`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/search-button#basic-example`],[`aria-label`,`Open search dialog`,`aria-controls`,`search-button-basic-example`,3,`trigger`],[`id`,`search-button-basic-example`,`aria-labelledby`,`search-button-basic-example-title`,3,`visibleChange`,`visible`],[`cModalTitle`,``,`id`,`search-button-basic-example-title`,1,`w-100`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search`,`aria-label`,`Search`],[1,`text-body-secondary`,`small`,`mb-2`],[`cListGroup`,``,`flush`,``],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`],[`color`,`secondary`,`shape`,`rounded-pill`],[`href`,`components/search-button#custom-shortcut`],[`placeholder`,`Command palette`,`shortcut`,`meta+i,ctrl+i`,`aria-label`,`Open command palette`,3,`trigger`],[`color`,`info`,1,`mt-3`,`mb-0`],[`href`,`components/search-button#launch-an-offcanvas`],[`shortcut`,`meta+shift+o,ctrl+shift+o`,`aria-label`,`Open search panel`,`aria-controls`,`search-button-offcanvas-example`,3,`trigger`],[`id`,`search-button-offcanvas-example`,`placement`,`end`,3,`visibleChange`,`visible`],[`cOffcanvasTitle`,``],[`cButtonClose`,``,1,`text-reset`,3,`click`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search...`,`aria-label`,`Search in panel`,1,`mb-3`],[1,`mb-0`]],template:function(l,i){l&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular Search Button`),L(),Ce(12,` `),F(13,`small`),Ce(14,`Basic example`),L(),Ce(15,`
      `),L(),Ce(16,`
      `),F(17,`c-card-body`),Ce(18,`
        `),F(19,`p`,3),Ce(20,`
          Use `),F(21,`code`),Ce(22,`c-search-button`),L(),Ce(23,` as the entry point for a controlled search dialog. Listen
          for `),F(24,`code`),Ce(25,`(trigger)`),L(),Ce(26,` \u2014 emitted on click or on the keyboard shortcut \u2014 to open a
          `),F(27,`code`),Ce(28,`c-modal`),L(),Ce(29,` you own.
        `),L(),Ce(30,`
        `),F(31,`app-docs-example`,4),Ce(32,`
          `),F(33,`c-search-button`,5),pe(`trigger`,function(){return i.basicVisible.set(!0)}),L(),Ce(34,`
          `),F(35,`c-modal`,6),tE(`visibleChange`,function(a){return rL(i.basicVisible,a)||(i.basicVisible=a),a}),Ce(36,`
            `),F(37,`c-modal-header`),Ce(38,`
              `),F(39,`h5`,7),Ce(40,`
                `),Oe(41,`input`,8),Ce(42,`
              `),L(),Ce(43,`
            `),L(),Ce(44,`
            `),F(45,`c-modal-body`),Ce(46,`
              `),F(47,`p`,9),Ce(48,`Recent searches`),L(),Ce(49,`
              `),F(50,`div`,10),Ce(51,`
                `),F(52,`button`,11),Ce(53,`
                  CoreUI components overview
                  `),F(54,`c-badge`,12),Ce(55,`Open`),L(),Ce(56,`
                `),L(),Ce(57,`
                `),F(58,`button`,11),Ce(59,`
                  Modal dialog examples
                  `),F(60,`c-badge`,12),Ce(61,`Open`),L(),Ce(62,`
                `),L(),Ce(63,`
                `),F(64,`button`,11),Ce(65,`
                  Sidebar navigation customization
                  `),F(66,`c-badge`,12),Ce(67,`Open`),L(),Ce(68,`
                `),L(),Ce(69,`
              `),L(),Ce(70,`
            `),L(),Ce(71,`
          `),L(),Ce(72,`
        `),L(),Ce(73,`
      `),L(),Ce(74,`
    `),L(),Ce(75,`

    `),F(76,`c-card`,2),Ce(77,`
      `),F(78,`c-card-header`),Ce(79,`
        `),F(80,`strong`),Ce(81,`Angular Search Button`),L(),Ce(82,` `),F(83,`small`),Ce(84,`Custom shortcut`),L(),Ce(85,`
      `),L(),Ce(86,`
      `),F(87,`c-card-body`),Ce(88,`
        `),F(89,`p`,3),Ce(90,`
          Configure `),F(91,`code`),Ce(92,`shortcut`),L(),Ce(93,` to match your command palette or product conventions, and
          customize the `),F(94,`code`),Ce(95,`placeholder`),L(),Ce(96,` text.
        `),L(),Ce(97,`
        `),F(98,`app-docs-example`,13),Ce(99,`
          `),F(100,`div`),Ce(101,`
            `),F(102,`c-search-button`,14),pe(`trigger`,function(){return i.triggerCount.update(a=>a+1)}),L(),Ce(103,`
            `),F(104,`c-alert`,15),Ce(105),L(),Ce(106,`
          `),L(),Ce(107,`
        `),L(),Ce(108,`
      `),L(),Ce(109,`
    `),L(),Ce(110,`

    `),F(111,`c-card`,2),Ce(112,`
      `),F(113,`c-card-header`),Ce(114,`
        `),F(115,`strong`),Ce(116,`Angular Search Button`),L(),Ce(117,` `),F(118,`small`),Ce(119,`Launch an offcanvas`),L(),Ce(120,`
      `),L(),Ce(121,`
      `),F(122,`c-card-body`),Ce(123,`
        `),F(124,`p`,3),Ce(125,`
          `),F(126,`code`),Ce(127,`c-search-button`),L(),Ce(128,` is a trigger only — pair it with a `),F(129,`code`),Ce(130,`c-offcanvas`),L(),Ce(131,`
          instead of a modal when you want a docked panel for quick navigation or command results.
        `),L(),Ce(132,`
        `),F(133,`app-docs-example`,16),Ce(134,`
          `),F(135,`c-search-button`,17),pe(`trigger`,function(){return i.offcanvasVisible.set(!0)}),L(),Ce(136,`
          `),F(137,`c-offcanvas`,18),tE(`visibleChange`,function(a){return rL(i.offcanvasVisible,a)||(i.offcanvasVisible=a),a}),Ce(138,`
            `),F(139,`c-offcanvas-header`),Ce(140,`
              `),F(141,`h5`,19),Ce(142,`Search panel`),L(),Ce(143,`
              `),F(144,`button`,20),pe(`click`,function(){return i.offcanvasVisible.set(!1)}),L(),Ce(145,`
            `),L(),Ce(146,`
            `),F(147,`c-offcanvas-body`),Ce(148,`
              `),Oe(149,`input`,21),Ce(150,`
              `),F(151,`p`,22),Ce(152,`Use this space for filters, recent searches, or command shortcuts.`),L(),Ce(153,`
            `),L(),Ce(154,`
          `),L(),Ce(155,`
        `),L(),Ce(156,`
      `),L(),Ce(157,`
    `),L(),Ce(158,`
  `),L(),Ce(159,`
`),L()),l&2&&(S(35),eE(`visible`,i.basicVisible),S(70),Xw(`
              Triggered `,i.triggerCount(),` `,i.triggerCount()===1?`time`:`times`,` with click
              or shortcut.
            `),S(32),eE(`visible`,i.offcanvasVisible))},dependencies:[Cle,AU,Wa,uU,Ka,E,c,Kle,Ble,Ple,Lle,Ole,ule,Sle,wle,Vae,jle,Hle,Ule,Vle,lA,Oae],encapsulation:2})}};export{G as AppSearchButtonComponent};