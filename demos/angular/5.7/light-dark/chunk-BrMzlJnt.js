import{Bt as Tm,Ci as wi,Gi as zm,Ni as yT,U as Ib,Zn as hm,gn as as,in as ZD,nn as Ym,on as Zm,y as DT,yr as lu}from"./chunk-DYvmxcZi.js";import{$ as PF,B as LF,C as FF,Dt as YF,Kn as ro,Mt as _F,O as HF,Pn as oo,Un as r0,_t as VF,et as PP,f as BF,g as DF,in as fF,pr as xc,st as RF,tr as uI,xt as WM,y as EF,yn as jP}from"./main-PH3H2PHZ.js";import{t as $}from"./chunk-NR_cKXUo.js";import"./chunk-Ysi4WkbN.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-Dx86lBYf.js";var G=class u{constructor(){this.basicVisible=wi(!1);this.offcanvasVisible=wi(!1);this.triggerCount=wi(0)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=Ib({type:u,selectors:[[`app-search-button`]],decls:160,vars:4,consts:[[`xs`,`12`],[`href`,`components/search-button`,`title`,`Search Button`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/search-button#basic-example`],[`aria-label`,`Open search dialog`,`aria-controls`,`search-button-basic-example`,3,`trigger`],[`id`,`search-button-basic-example`,`aria-labelledby`,`search-button-basic-example-title`,3,`visibleChange`,`visible`],[`cModalTitle`,``,`id`,`search-button-basic-example-title`,1,`w-100`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search`,`aria-label`,`Search`],[1,`text-body-secondary`,`small`,`mb-2`],[`cListGroup`,``,`flush`,``],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`],[`color`,`secondary`,`shape`,`rounded-pill`],[`href`,`components/search-button#custom-shortcut`],[`placeholder`,`Command palette`,`shortcut`,`meta+i,ctrl+i`,`aria-label`,`Open command palette`,3,`trigger`],[`color`,`info`,1,`mt-3`,`mb-0`],[`href`,`components/search-button#launch-an-offcanvas`],[`shortcut`,`meta+shift+o,ctrl+shift+o`,`aria-label`,`Open search panel`,`aria-controls`,`search-button-offcanvas-example`,3,`trigger`],[`id`,`search-button-offcanvas-example`,`placement`,`end`,3,`visibleChange`,`visible`],[`cOffcanvasTitle`,``],[`cButtonClose`,``,1,`text-reset`,3,`click`],[`cFormControl`,``,`type`,`search`,`placeholder`,`Search...`,`aria-label`,`Search in panel`,1,`mb-3`],[1,`mb-0`]],template:function(l,i){l&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Search Button`),lu(),yT(12,` `),as(13,`small`),yT(14,`Basic example`),lu(),yT(15,`
      `),lu(),yT(16,`
      `),as(17,`c-card-body`),yT(18,`
        `),as(19,`p`,3),yT(20,`
          Use `),as(21,`code`),yT(22,`c-search-button`),lu(),yT(23,` as the entry point for a controlled search dialog. Listen
          for `),as(24,`code`),yT(25,`(trigger)`),lu(),yT(26,` \u2014 emitted on click or on the keyboard shortcut \u2014 to open a
          `),as(27,`code`),yT(28,`c-modal`),lu(),yT(29,` you own.
        `),lu(),yT(30,`
        `),as(31,`app-docs-example`,4),yT(32,`
          `),as(33,`c-search-button`,5),Tm(`trigger`,function(){return i.basicVisible.set(!0)}),lu(),yT(34,`
          `),as(35,`c-modal`,6),Ym(`visibleChange`,function(a){return DT(i.basicVisible,a)||(i.basicVisible=a),a}),yT(36,`
            `),as(37,`c-modal-header`),yT(38,`
              `),as(39,`h5`,7),yT(40,`
                `),hm(41,`input`,8),yT(42,`
              `),lu(),yT(43,`
            `),lu(),yT(44,`
            `),as(45,`c-modal-body`),yT(46,`
              `),as(47,`p`,9),yT(48,`Recent searches`),lu(),yT(49,`
              `),as(50,`div`,10),yT(51,`
                `),as(52,`button`,11),yT(53,`
                  CoreUI components overview
                  `),as(54,`c-badge`,12),yT(55,`Open`),lu(),yT(56,`
                `),lu(),yT(57,`
                `),as(58,`button`,11),yT(59,`
                  Modal dialog examples
                  `),as(60,`c-badge`,12),yT(61,`Open`),lu(),yT(62,`
                `),lu(),yT(63,`
                `),as(64,`button`,11),yT(65,`
                  Sidebar navigation customization
                  `),as(66,`c-badge`,12),yT(67,`Open`),lu(),yT(68,`
                `),lu(),yT(69,`
              `),lu(),yT(70,`
            `),lu(),yT(71,`
          `),lu(),yT(72,`
        `),lu(),yT(73,`
      `),lu(),yT(74,`
    `),lu(),yT(75,`

    `),as(76,`c-card`,2),yT(77,`
      `),as(78,`c-card-header`),yT(79,`
        `),as(80,`strong`),yT(81,`Angular Search Button`),lu(),yT(82,` `),as(83,`small`),yT(84,`Custom shortcut`),lu(),yT(85,`
      `),lu(),yT(86,`
      `),as(87,`c-card-body`),yT(88,`
        `),as(89,`p`,3),yT(90,`
          Configure `),as(91,`code`),yT(92,`shortcut`),lu(),yT(93,` to match your command palette or product conventions, and
          customize the `),as(94,`code`),yT(95,`placeholder`),lu(),yT(96,` text.
        `),lu(),yT(97,`
        `),as(98,`app-docs-example`,13),yT(99,`
          `),as(100,`div`),yT(101,`
            `),as(102,`c-search-button`,14),Tm(`trigger`,function(){return i.triggerCount.update(a=>a+1)}),lu(),yT(103,`
            `),as(104,`c-alert`,15),yT(105),lu(),yT(106,`
          `),lu(),yT(107,`
        `),lu(),yT(108,`
      `),lu(),yT(109,`
    `),lu(),yT(110,`

    `),as(111,`c-card`,2),yT(112,`
      `),as(113,`c-card-header`),yT(114,`
        `),as(115,`strong`),yT(116,`Angular Search Button`),lu(),yT(117,` `),as(118,`small`),yT(119,`Launch an offcanvas`),lu(),yT(120,`
      `),lu(),yT(121,`
      `),as(122,`c-card-body`),yT(123,`
        `),as(124,`p`,3),yT(125,`
          `),as(126,`code`),yT(127,`c-search-button`),lu(),yT(128,` is a trigger only — pair it with a `),as(129,`code`),yT(130,`c-offcanvas`),lu(),yT(131,`
          instead of a modal when you want a docked panel for quick navigation or command results.
        `),lu(),yT(132,`
        `),as(133,`app-docs-example`,16),yT(134,`
          `),as(135,`c-search-button`,17),Tm(`trigger`,function(){return i.offcanvasVisible.set(!0)}),lu(),yT(136,`
          `),as(137,`c-offcanvas`,18),Ym(`visibleChange`,function(a){return DT(i.offcanvasVisible,a)||(i.offcanvasVisible=a),a}),yT(138,`
            `),as(139,`c-offcanvas-header`),yT(140,`
              `),as(141,`h5`,19),yT(142,`Search panel`),lu(),yT(143,`
              `),as(144,`button`,20),Tm(`click`,function(){return i.offcanvasVisible.set(!1)}),lu(),yT(145,`
            `),lu(),yT(146,`
            `),as(147,`c-offcanvas-body`),yT(148,`
              `),hm(149,`input`,21),yT(150,`
              `),as(151,`p`,22),yT(152,`Use this space for filters, recent searches, or command shortcuts.`),lu(),yT(153,`
            `),lu(),yT(154,`
          `),lu(),yT(155,`
        `),lu(),yT(156,`
      `),lu(),yT(157,`
    `),lu(),yT(158,`
  `),lu(),yT(159,`
`),lu()),l&2&&(ZD(35),Zm(`visible`,i.basicVisible),ZD(70),zm(`
              Triggered `,i.triggerCount(),` `,i.triggerCount()===1?`time`:`times`,` with click
              or shortcut.
            `),ZD(32),Zm(`visible`,i.offcanvasVisible))},dependencies:[fF,uI,oo,WM,ro,$,c,YF,FF,RF,PF,EF,xc,_F,DF,jP,LF,BF,HF,VF,r0,PP],encapsulation:2})}};export{G as AppSearchButtonComponent};