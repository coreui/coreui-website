import{B as N1,C as GT,Cn as s1,Fn as y1,Gn as Ch,I as Li,Mn as wT,Mt as a1,Nt as b1,Oi as ki,Or as Rh,R as M1,Ri as og,Sn as rb,X as Pi,Zi as rg,ai as cw,ia as tg,ii as cl,jn as w1,kn as vT,kt as _1,la as vD,ln as m1,mi as ei,p as D1,q as Ou,u as C1,vi as fw,wn as t1,xt as Xv,zn as $E}from"./main-JGD5BDHO.js";import{t as E}from"./chunk-BETohCFL.js";import{t as c}from"./chunk-INd7ktdd.js";var G=class u{constructor(){this.basicVisible=ei(!1);this.offcanvasVisible=ei(!1);this.triggerCount=ei(0)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=vD({type:u,selectors:[[`app-search-button`]],decls:160,vars:4,consts:[[`xs`,`12`],[`href`,`components/search-button`,`title`,`Search Button`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/search-button#basic-example`],[`aria-label`,`Open search dialog`,`aria-controls`,`search-button-basic-example`,3,`trigger`],[`id`,`search-button-basic-example`,`aria-labelledby`,`search-button-basic-example-title`,3,`visibleChange`,`visible`],[`cModalTitle`,``,`id`,`search-button-basic-example-title`,1,`w-100`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search`,`aria-label`,`Search`],[1,`text-body-secondary`,`small`,`mb-2`],[`cListGroup`,``,`flush`,``],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`],[`color`,`secondary`,`shape`,`rounded-pill`],[`href`,`components/search-button#custom-shortcut`],[`placeholder`,`Command palette`,`shortcut`,`meta+i,ctrl+i`,`aria-label`,`Open command palette`,3,`trigger`],[`color`,`info`,1,`mt-3`,`mb-0`],[`href`,`components/search-button#launch-an-offcanvas`],[`shortcut`,`meta+shift+o,ctrl+shift+o`,`aria-label`,`Open search panel`,`aria-controls`,`search-button-offcanvas-example`,3,`trigger`],[`id`,`search-button-offcanvas-example`,`placement`,`end`,3,`visibleChange`,`visible`],[`cOffcanvasTitle`,``],[`cButtonClose`,``,1,`text-reset`,3,`click`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search...`,`aria-label`,`Search in panel`,1,`mb-3`],[1,`mb-0`]],template:function(l,i){l&1&&(ki(0,`c-row`),cw(1,`
  `),ki(2,`c-col`,0),cw(3,`
    `),Ch(4,`app-docs-components`,1),cw(5,`
    `),ki(6,`c-card`,2),cw(7,`
      `),ki(8,`c-card-header`),cw(9,`
        `),ki(10,`strong`),cw(11,`Angular Search Button`),cl(),cw(12,` `),ki(13,`small`),cw(14,`Basic example`),cl(),cw(15,`
      `),cl(),cw(16,`
      `),ki(17,`c-card-body`),cw(18,`
        `),ki(19,`p`,3),cw(20,`
          Use `),ki(21,`code`),cw(22,`c-search-button`),cl(),cw(23,` as the entry point for a controlled search dialog. Listen
          for `),ki(24,`code`),cw(25,`(trigger)`),cl(),cw(26,` \u2014 emitted on click or on the keyboard shortcut \u2014 to open a
          `),ki(27,`code`),cw(28,`c-modal`),cl(),cw(29,` you own.
        `),cl(),cw(30,`
        `),ki(31,`app-docs-example`,4),cw(32,`
          `),ki(33,`c-search-button`,5),Rh(`trigger`,function(){return i.basicVisible.set(!0)}),cl(),cw(34,`
          `),ki(35,`c-modal`,6),og(`visibleChange`,function(a){return fw(i.basicVisible,a)||(i.basicVisible=a),a}),cw(36,`
            `),ki(37,`c-modal-header`),cw(38,`
              `),ki(39,`h5`,7),cw(40,`
                `),Ch(41,`input`,8),cw(42,`
              `),cl(),cw(43,`
            `),cl(),cw(44,`
            `),ki(45,`c-modal-body`),cw(46,`
              `),ki(47,`p`,9),cw(48,`Recent searches`),cl(),cw(49,`
              `),ki(50,`div`,10),cw(51,`
                `),ki(52,`button`,11),cw(53,`
                  CoreUI components overview
                  `),ki(54,`c-badge`,12),cw(55,`Open`),cl(),cw(56,`
                `),cl(),cw(57,`
                `),ki(58,`button`,11),cw(59,`
                  Modal dialog examples
                  `),ki(60,`c-badge`,12),cw(61,`Open`),cl(),cw(62,`
                `),cl(),cw(63,`
                `),ki(64,`button`,11),cw(65,`
                  Sidebar navigation customization
                  `),ki(66,`c-badge`,12),cw(67,`Open`),cl(),cw(68,`
                `),cl(),cw(69,`
              `),cl(),cw(70,`
            `),cl(),cw(71,`
          `),cl(),cw(72,`
        `),cl(),cw(73,`
      `),cl(),cw(74,`
    `),cl(),cw(75,`

    `),ki(76,`c-card`,2),cw(77,`
      `),ki(78,`c-card-header`),cw(79,`
        `),ki(80,`strong`),cw(81,`Angular Search Button`),cl(),cw(82,` `),ki(83,`small`),cw(84,`Custom shortcut`),cl(),cw(85,`
      `),cl(),cw(86,`
      `),ki(87,`c-card-body`),cw(88,`
        `),ki(89,`p`,3),cw(90,`
          Configure `),ki(91,`code`),cw(92,`shortcut`),cl(),cw(93,` to match your command palette or product conventions, and
          customize the `),ki(94,`code`),cw(95,`placeholder`),cl(),cw(96,` text.
        `),cl(),cw(97,`
        `),ki(98,`app-docs-example`,13),cw(99,`
          `),ki(100,`div`),cw(101,`
            `),ki(102,`c-search-button`,14),Rh(`trigger`,function(){return i.triggerCount.update(a=>a+1)}),cl(),cw(103,`
            `),ki(104,`c-alert`,15),cw(105),cl(),cw(106,`
          `),cl(),cw(107,`
        `),cl(),cw(108,`
      `),cl(),cw(109,`
    `),cl(),cw(110,`

    `),ki(111,`c-card`,2),cw(112,`
      `),ki(113,`c-card-header`),cw(114,`
        `),ki(115,`strong`),cw(116,`Angular Search Button`),cl(),cw(117,` `),ki(118,`small`),cw(119,`Launch an offcanvas`),cl(),cw(120,`
      `),cl(),cw(121,`
      `),ki(122,`c-card-body`),cw(123,`
        `),ki(124,`p`,3),cw(125,`
          `),ki(126,`code`),cw(127,`c-search-button`),cl(),cw(128,` is a trigger only — pair it with a `),ki(129,`code`),cw(130,`c-offcanvas`),cl(),cw(131,`
          instead of a modal when you want a docked panel for quick navigation or command results.
        `),cl(),cw(132,`
        `),ki(133,`app-docs-example`,16),cw(134,`
          `),ki(135,`c-search-button`,17),Rh(`trigger`,function(){return i.offcanvasVisible.set(!0)}),cl(),cw(136,`
          `),ki(137,`c-offcanvas`,18),og(`visibleChange`,function(a){return fw(i.offcanvasVisible,a)||(i.offcanvasVisible=a),a}),cw(138,`
            `),ki(139,`c-offcanvas-header`),cw(140,`
              `),ki(141,`h5`,19),cw(142,`Search panel`),cl(),cw(143,`
              `),ki(144,`button`,20),Rh(`click`,function(){return i.offcanvasVisible.set(!1)}),cl(),cw(145,`
            `),cl(),cw(146,`
            `),ki(147,`c-offcanvas-body`),cw(148,`
              `),Ch(149,`input`,21),cw(150,`
              `),ki(151,`p`,22),cw(152,`Use this space for filters, recent searches, or command shortcuts.`),cl(),cw(153,`
            `),cl(),cw(154,`
          `),cl(),cw(155,`
        `),cl(),cw(156,`
      `),cl(),cw(157,`
    `),cl(),cw(158,`
  `),cl(),cw(159,`
`),cl()),l&2&&($E(35),rg(`visible`,i.basicVisible),$E(70),tg(`
              Triggered `,i.triggerCount(),` `,i.triggerCount()===1?`time`:`times`,` with click
              or shortcut.
            `),$E(32),rg(`visible`,i.offcanvasVisible))},dependencies:[t1,rb,Pi,Xv,Li,E,c,N1,D1,b1,y1,m1,GT,s1,a1,wT,C1,M1,w1,_1,Ou,vT],encapsulation:2})}};export{G as AppSearchButtonComponent};