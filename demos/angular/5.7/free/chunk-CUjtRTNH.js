import{Gn as Ch,I as Li,In as yT,Ir as TT,Ji as qu,Jn as DT,Kr as Wu,Mr as ST,Oi as ki,Or as Rh,Qr as _,Sn as rb,Vi as pl,X as Pi,Zn as FT,Zt as hT,ai as cw,en as ia,ga as wh,gi as fh,gn as pT,ii as cl,la as vD,nn as it,pr as MT,qr as Wv,tr as IT,vt as Wv$1,wn as t1,xt as Xv,zn as $E}from"./main-JGD5BDHO.js";import{t as E}from"./chunk-BETohCFL.js";import{t as c}from"./chunk-INd7ktdd.js";function N(t,a){if(t&1){let o=ST();cw(0,`
                `),ki(1,`button`,19),Rh(`click`,function(){qu(o),MT();return Wu(FT(24).toggleItem())}),cw(2,`
                  Accordion item #0
                `),cl(),cw(3,`
              `)}if(t&2){MT();let o=FT(24);$E(),wh(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(cw(0,`
                `),Ch(1,`div`,20),cw(2,`
              `)),t&2){let o=MT();$E(),wh(`innerHTML`,o.getAccordionBodyText(`first`),Wv)(`gradient`,!0)}}function j(t,a){if(t&1){let o=ST();cw(0,`
                `),ki(1,`button`,21),Rh(`click`,function(){qu(o),MT();return Wu(FT(32).toggleItem())}),cw(2,`
                  Accordion item #1
                `),cl(),cw(3,`
              `)}if(t&2){MT();let o=FT(32);$E(),wh(`collapsed`,!o.visible)}}function P(t,a){t&1&&(cw(0,`
                `),ki(1,`div`,22),cw(2,`
                  `),ki(3,`strong`),cw(4,`This is the
                    `),ki(5,`mark`),cw(6,`#second`),cl(),cw(7,`
                    item accordion body.`),cl(),cw(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),ki(9,`code`),cw(10,`.accordion-body`),cl(),cw(11,`,
                  though the transition does limit overflow.
                `),cl(),cw(12,`
              `))}function Y(t,a){if(t&1){let o=ST();cw(0,`
                `),ki(1,`button`,21),Rh(`click`,function(){qu(o),MT();return Wu(FT(40).toggleItem())}),cw(2,`
                  Accordion item #2
                `),cl(),cw(3,`
              `)}if(t&2){MT();let o=FT(40);$E(),wh(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(cw(0,`
                `),ki(1,`div`,22),cw(2,`
                  `),Ch(3,`span`,23),cw(4,`
                `),cl(),cw(5,`
              `)),t&2){let o=MT();$E(3),wh(`innerHTML`,o.getAccordionBodyText(`third`),Wv)}}function q(t,a){t&1&&cw(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(cw(0,`
                `),Ch(1,`span`,23),cw(2,`
              `)),t&2){let o=MT();$E(),wh(`innerHTML`,o.getAccordionBodyText(`first`),Wv)}}function J(t,a){t&1&&cw(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(cw(0,`
                `),Ch(1,`span`,23),cw(2,`
              `)),t&2){let o=MT();$E(),wh(`innerHTML`,o.getAccordionBodyText(`second`),Wv)}}function Q(t,a){t&1&&cw(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(cw(0,`
                `),Ch(1,`span`,23),cw(2,`
              `)),t&2){let o=MT();$E(),wh(`innerHTML`,o.getAccordionBodyText(`third`),Wv)}}function W(t,a){if(t&1&&cw(0),t&2){let o=MT().$index;pl(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(cw(0,`
                  `),ki(1,`small`)(2,`i`),cw(3),cl()(),cw(4,`
                  `),Ch(5,`span`,23),cw(6,`
                `)),t&2){let o=MT().$index,x=MT();$E(3),pl(``,o,`.`),$E(2),wh(`innerHTML`,x.getAccordionBodyText(o),Wv)}}function Z(t,a){if(t&1&&(cw(0,`
              `),ki(1,`c-accordion-item`,9),cw(2,`
                `),fh(3,W,1,1,`ng-template`,15),cw(4,`
                `),fh(5,X,7,2,`ng-template`,16),cw(6,`
              `),cl(),cw(7,`
            `)),t&2){let o=a.$index;$E(),wh(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=_(ia);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=vD({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(ki(0,`c-row`),cw(1,`
  `),ki(2,`c-col`,3),cw(3,`
    `),Ch(4,`app-docs-components`,4),cw(5,`
    `),ki(6,`c-card`,5),cw(7,`
      `),ki(8,`c-card-header`),cw(9,`
        `),ki(10,`strong`),cw(11,`Angular Accordion`),cl(),cw(12,`
      `),cl(),cw(13,`
      `),ki(14,`c-card-body`),cw(15,`
        `),ki(16,`p`,6),cw(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),cl(),cw(18,`
        `),ki(19,`app-docs-example`,7),cw(20,`
          `),ki(21,`c-accordion`,8),cw(22,`
            `),ki(23,`c-accordion-item`,9,0),cw(25,`
              `),fh(26,N,4,1,`ng-template`,10),cw(27,`
              `),fh(28,F,3,2,`ng-template`,11),cw(29,`
            `),cl(),cw(30,`
            `),ki(31,`c-accordion-item`,9,1),cw(33,`
              `),fh(34,j,4,1,`ng-template`,10),cw(35,`
              `),fh(36,P,13,0,`ng-template`,11),cw(37,`
            `),cl(),cw(38,`
            `),ki(39,`c-accordion-item`,9,2),cw(41,`
              `),fh(42,Y,4,1,`ng-template`,10),cw(43,`
              `),fh(44,R,6,1,`ng-template`,11),cw(45,`
            `),cl(),cw(46,`
          `),cl(),cw(47,`
        `),cl(),cw(48,`
      `),cl(),cw(49,`
    `),cl(),cw(50,`
    `),ki(51,`c-card`,5),cw(52,`
      `),ki(53,`c-card-header`),cw(54,`
        `),ki(55,`strong`),cw(56,`Angular Accordion`),cl(),cw(57,` flush
      `),cl(),cw(58,`
      `),ki(59,`c-card-body`),cw(60,`
        `),ki(61,`p`,6),cw(62,`
          Add `),ki(63,`code`),cw(64,`flush`),cl(),cw(65,` to remove the default `),ki(66,`code`),cw(67,`background-color`),cl(),cw(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),cl(),cw(69,`
        `),ki(70,`app-docs-example`,12),cw(71,`
          `),ki(72,`c-accordion`,13),cw(73,`
            `),ki(74,`c-accordion-item`,14),cw(75,`
              `),fh(76,q,1,0,`ng-template`,15),cw(77,`
              `),fh(78,G,3,1,`ng-template`,16),cw(79,`
            `),cl(),cw(80,`
            `),ki(81,`c-accordion-item`),cw(82,`
              `),fh(83,J,1,0,`ng-template`,15),cw(84,`
              `),fh(85,K,3,1,`ng-template`,16),cw(86,`
            `),cl(),cw(87,`
            `),ki(88,`c-accordion-item`),cw(89,`
              `),fh(90,Q,1,0,`ng-template`,15),cw(91,`
              `),fh(92,U,3,1,`ng-template`,16),cw(93,`
            `),cl(),cw(94,`
          `),cl(),cw(95,`
        `),cl(),cw(96,`
      `),cl(),cw(97,`
    `),cl(),cw(98,`
    `),ki(99,`c-card`,5),cw(100,`
      `),ki(101,`c-card-header`),cw(102,`
        `),ki(103,`strong`),cw(104,`Angular Accordion`),cl(),cw(105,` alwaysOpen
      `),cl(),cw(106,`
      `),ki(107,`c-card-body`),cw(108,`
        `),ki(109,`p`,6),cw(110,`
          Add `),ki(111,`code`),cw(112,`alwaysOpen`),cl(),cw(113,` property to make accordion items stay open when another
          item is opened.
        `),cl(),cw(114,`
        `),ki(115,`app-docs-example`,17),cw(116,`
          `),ki(117,`c-accordion`,18),cw(118,`
            `),DT(119,Z,8,1,null,null,IT),cl(),cw(121,`
        `),cl(),cw(122,`
      `),cl(),cw(123,`
    `),cl(),cw(124,`
  `),cl(),cw(125,`
`),cl()),o&2&&($E(21),wh(`alwaysOpen`,!1),$E(2),wh(`visible`,!1),$E(8),wh(`visible`,!1),$E(8),wh(`visible`,!1),$E(33),wh(`flush`,!0),$E(47),TT(x.items))},dependencies:[t1,rb,Pi,Xv,Li,E,pT,hT,it,Wv$1,yT,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};