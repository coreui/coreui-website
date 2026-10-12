import{Dt as O,En as Xre,Ft as Pa,Ii as sse,Jr as le,Ni as rw,Nn as Zoe,Ri as sw,T as E,Tn as Xoe,Wn as aw,Wt as Re,Y as IF,Yt as S,_n as VV,_t as Loe,ai as nH,dr as ese,en as T,et as Ioe,gt as La,j as F,kn as Yoe,ot as Joe,p as Boe,qt as Roe,rn as TN,ua as ye,ut as Koe,va as zoe,ya as zre,zt as Qoe}from"./main-V43LM6ZM.js";import{t as E$1}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var G=class u{constructor(){this.basicVisible=E(!1);this.offcanvasVisible=E(!1);this.triggerCount=E(0)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=T({type:u,selectors:[[`app-search-button`]],decls:160,vars:4,consts:[[`xs`,`12`],[`href`,`components/search-button`,`title`,`Search Button`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/search-button#basic-example`],[`aria-label`,`Open search dialog`,`aria-controls`,`search-button-basic-example`,3,`trigger`],[`id`,`search-button-basic-example`,`aria-labelledby`,`search-button-basic-example-title`,3,`visibleChange`,`visible`],[`cModalTitle`,``,`id`,`search-button-basic-example-title`,1,`w-100`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search`,`aria-label`,`Search`],[1,`text-body-secondary`,`small`,`mb-2`],[`cListGroup`,``,`flush`,``],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`],[`color`,`secondary`,`shape`,`rounded-pill`],[`href`,`components/search-button#custom-shortcut`],[`placeholder`,`Command palette`,`shortcut`,`meta+i,ctrl+i`,`aria-label`,`Open command palette`,3,`trigger`],[`color`,`info`,1,`mt-3`,`mb-0`],[`href`,`components/search-button#launch-an-offcanvas`],[`shortcut`,`meta+shift+o,ctrl+shift+o`,`aria-label`,`Open search panel`,`aria-controls`,`search-button-offcanvas-example`,3,`trigger`],[`id`,`search-button-offcanvas-example`,`placement`,`end`,3,`visibleChange`,`visible`],[`cOffcanvasTitle`,``],[`cButtonClose`,``,1,`text-reset`,3,`click`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search...`,`aria-label`,`Search in panel`,1,`mb-3`],[1,`mb-0`]],template:function(l,i){l&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Search Button`),F(),ye(12,` `),O(13,`small`),ye(14,`Basic example`),F(),ye(15,`
      `),F(),ye(16,`
      `),O(17,`c-card-body`),ye(18,`
        `),O(19,`p`,3),ye(20,`
          Use `),O(21,`code`),ye(22,`c-search-button`),F(),ye(23,` as the entry point for a controlled search dialog. Listen
          for `),O(24,`code`),ye(25,`(trigger)`),F(),ye(26,` \u2014 emitted on click or on the keyboard shortcut \u2014 to open a
          `),O(27,`code`),ye(28,`c-modal`),F(),ye(29,` you own.
        `),F(),ye(30,`
        `),O(31,`app-docs-example`,4),ye(32,`
          `),O(33,`c-search-button`,5),le(`trigger`,function(){return i.basicVisible.set(!0)}),F(),ye(34,`
          `),O(35,`c-modal`,6),aw(`visibleChange`,function(a){return IF(i.basicVisible,a)||(i.basicVisible=a),a}),ye(36,`
            `),O(37,`c-modal-header`),ye(38,`
              `),O(39,`h5`,7),ye(40,`
                `),Re(41,`input`,8),ye(42,`
              `),F(),ye(43,`
            `),F(),ye(44,`
            `),O(45,`c-modal-body`),ye(46,`
              `),O(47,`p`,9),ye(48,`Recent searches`),F(),ye(49,`
              `),O(50,`div`,10),ye(51,`
                `),O(52,`button`,11),ye(53,`
                  CoreUI components overview
                  `),O(54,`c-badge`,12),ye(55,`Open`),F(),ye(56,`
                `),F(),ye(57,`
                `),O(58,`button`,11),ye(59,`
                  Modal dialog examples
                  `),O(60,`c-badge`,12),ye(61,`Open`),F(),ye(62,`
                `),F(),ye(63,`
                `),O(64,`button`,11),ye(65,`
                  Sidebar navigation customization
                  `),O(66,`c-badge`,12),ye(67,`Open`),F(),ye(68,`
                `),F(),ye(69,`
              `),F(),ye(70,`
            `),F(),ye(71,`
          `),F(),ye(72,`
        `),F(),ye(73,`
      `),F(),ye(74,`
    `),F(),ye(75,`

    `),O(76,`c-card`,2),ye(77,`
      `),O(78,`c-card-header`),ye(79,`
        `),O(80,`strong`),ye(81,`Angular Search Button`),F(),ye(82,` `),O(83,`small`),ye(84,`Custom shortcut`),F(),ye(85,`
      `),F(),ye(86,`
      `),O(87,`c-card-body`),ye(88,`
        `),O(89,`p`,3),ye(90,`
          Configure `),O(91,`code`),ye(92,`shortcut`),F(),ye(93,` to match your command palette or product conventions, and
          customize the `),O(94,`code`),ye(95,`placeholder`),F(),ye(96,` text.
        `),F(),ye(97,`
        `),O(98,`app-docs-example`,13),ye(99,`
          `),O(100,`div`),ye(101,`
            `),O(102,`c-search-button`,14),le(`trigger`,function(){return i.triggerCount.update(a=>a+1)}),F(),ye(103,`
            `),O(104,`c-alert`,15),ye(105),F(),ye(106,`
          `),F(),ye(107,`
        `),F(),ye(108,`
      `),F(),ye(109,`
    `),F(),ye(110,`

    `),O(111,`c-card`,2),ye(112,`
      `),O(113,`c-card-header`),ye(114,`
        `),O(115,`strong`),ye(116,`Angular Search Button`),F(),ye(117,` `),O(118,`small`),ye(119,`Launch an offcanvas`),F(),ye(120,`
      `),F(),ye(121,`
      `),O(122,`c-card-body`),ye(123,`
        `),O(124,`p`,3),ye(125,`
          `),O(126,`code`),ye(127,`c-search-button`),F(),ye(128,` is a trigger only — pair it with a `),O(129,`code`),ye(130,`c-offcanvas`),F(),ye(131,`
          instead of a modal when you want a docked panel for quick navigation or command results.
        `),F(),ye(132,`
        `),O(133,`app-docs-example`,16),ye(134,`
          `),O(135,`c-search-button`,17),le(`trigger`,function(){return i.offcanvasVisible.set(!0)}),F(),ye(136,`
          `),O(137,`c-offcanvas`,18),aw(`visibleChange`,function(a){return IF(i.offcanvasVisible,a)||(i.offcanvasVisible=a),a}),ye(138,`
            `),O(139,`c-offcanvas-header`),ye(140,`
              `),O(141,`h5`,19),ye(142,`Search panel`),F(),ye(143,`
              `),O(144,`button`,20),le(`click`,function(){return i.offcanvasVisible.set(!1)}),F(),ye(145,`
            `),F(),ye(146,`
            `),O(147,`c-offcanvas-body`),ye(148,`
              `),Re(149,`input`,21),ye(150,`
              `),O(151,`p`,22),ye(152,`Use this space for filters, recent searches, or command shortcuts.`),F(),ye(153,`
            `),F(),ye(154,`
          `),F(),ye(155,`
        `),F(),ye(156,`
      `),F(),ye(157,`
    `),F(),ye(158,`
  `),F(),ye(159,`
`),F()),l&2&&(S(35),sw(`visible`,i.basicVisible),S(70),rw(`
              Triggered `,i.triggerCount(),` `,i.triggerCount()===1?`time`:`times`,` with click
              or shortcut.
            `),S(32),sw(`visible`,i.offcanvasVisible))},dependencies:[Roe,nH,Pa,VV,La,E$1,c,sse,Yoe,Koe,Qoe,zoe,Ioe,Loe,Boe,Xre,Zoe,Joe,ese,Xoe,TN,zre],encapsulation:2})}};export{G as AppSearchButtonComponent};