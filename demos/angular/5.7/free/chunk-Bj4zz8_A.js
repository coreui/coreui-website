import{Cn as YL,D as Do,Dt as P$1,Jn as bo,Jt as Si,Kt as Se,Nn as _e,Si as rP,Vr as ke,Wn as be,X as I,Yt as Ste,ai as oe,an as V,ar as dP,bn as Xt,bt as N$1,fi as pg,gt as Mi,h as Bee,hi as pr,or as da,pn as Wee,q as Hee,sa as ym,ua as yo,un as Vn,ut as L,v as C,vr as f,zi as ua}from"./main-JT3YLBAZ.js";import{t as E}from"./chunk-S_NItMQM.js";import{t as c}from"./chunk-BnIj8_pR.js";function N(t,a){if(t&1){let o=pr();be(0,`
                `),L(1,`button`,19),_e(`click`,function(){Mi(o),N$1();return Si(Se(24).toggleItem())}),be(2,`
                  Accordion item #0
                `),P$1(),be(3,`
              `)}if(t&2){N$1();let o=Se(24);C(),V(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(be(0,`
                `),ke(1,`div`,20),be(2,`
              `)),t&2){let o=N$1();C(),V(`innerHTML`,o.getAccordionBodyText(`first`),pg)(`gradient`,!0)}}function j(t,a){if(t&1){let o=pr();be(0,`
                `),L(1,`button`,21),_e(`click`,function(){Mi(o),N$1();return Si(Se(32).toggleItem())}),be(2,`
                  Accordion item #1
                `),P$1(),be(3,`
              `)}if(t&2){N$1();let o=Se(32);C(),V(`collapsed`,!o.visible)}}function P(t,a){t&1&&(be(0,`
                `),L(1,`div`,22),be(2,`
                  `),L(3,`strong`),be(4,`This is the
                    `),L(5,`mark`),be(6,`#second`),P$1(),be(7,`
                    item accordion body.`),P$1(),be(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),L(9,`code`),be(10,`.accordion-body`),P$1(),be(11,`,
                  though the transition does limit overflow.
                `),P$1(),be(12,`
              `))}function Y(t,a){if(t&1){let o=pr();be(0,`
                `),L(1,`button`,21),_e(`click`,function(){Mi(o),N$1();return Si(Se(40).toggleItem())}),be(2,`
                  Accordion item #2
                `),P$1(),be(3,`
              `)}if(t&2){N$1();let o=Se(40);C(),V(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(be(0,`
                `),L(1,`div`,22),be(2,`
                  `),ke(3,`span`,23),be(4,`
                `),P$1(),be(5,`
              `)),t&2){let o=N$1();C(3),V(`innerHTML`,o.getAccordionBodyText(`third`),pg)}}function q(t,a){t&1&&be(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(be(0,`
                `),ke(1,`span`,23),be(2,`
              `)),t&2){let o=N$1();C(),V(`innerHTML`,o.getAccordionBodyText(`first`),pg)}}function J(t,a){t&1&&be(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(be(0,`
                `),ke(1,`span`,23),be(2,`
              `)),t&2){let o=N$1();C(),V(`innerHTML`,o.getAccordionBodyText(`second`),pg)}}function Q(t,a){t&1&&be(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(be(0,`
                `),ke(1,`span`,23),be(2,`
              `)),t&2){let o=N$1();C(),V(`innerHTML`,o.getAccordionBodyText(`third`),pg)}}function W(t,a){if(t&1&&be(0),t&2){let o=N$1().$index;Vn(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(be(0,`
                  `),L(1,`small`)(2,`i`),be(3),P$1()(),be(4,`
                  `),ke(5,`span`,23),be(6,`
                `)),t&2){let o=N$1().$index,x=N$1();C(3),Vn(``,o,`.`),C(2),V(`innerHTML`,x.getAccordionBodyText(o),pg)}}function Z(t,a){if(t&1&&(be(0,`
              `),L(1,`c-accordion-item`,9),be(2,`
                `),oe(3,W,1,1,`ng-template`,15),be(4,`
                `),oe(5,X,7,2,`ng-template`,16),be(6,`
              `),P$1(),be(7,`
            `)),t&2){let o=a.$index;C(),V(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=f(ym);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=I({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,3),be(3,`
    `),ke(4,`app-docs-components`,4),be(5,`
    `),L(6,`c-card`,5),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular Accordion`),P$1(),be(12,`
      `),P$1(),be(13,`
      `),L(14,`c-card-body`),be(15,`
        `),L(16,`p`,6),be(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),P$1(),be(18,`
        `),L(19,`app-docs-example`,7),be(20,`
          `),L(21,`c-accordion`,8),be(22,`
            `),L(23,`c-accordion-item`,9,0),be(25,`
              `),oe(26,N,4,1,`ng-template`,10),be(27,`
              `),oe(28,F,3,2,`ng-template`,11),be(29,`
            `),P$1(),be(30,`
            `),L(31,`c-accordion-item`,9,1),be(33,`
              `),oe(34,j,4,1,`ng-template`,10),be(35,`
              `),oe(36,P,13,0,`ng-template`,11),be(37,`
            `),P$1(),be(38,`
            `),L(39,`c-accordion-item`,9,2),be(41,`
              `),oe(42,Y,4,1,`ng-template`,10),be(43,`
              `),oe(44,R,6,1,`ng-template`,11),be(45,`
            `),P$1(),be(46,`
          `),P$1(),be(47,`
        `),P$1(),be(48,`
      `),P$1(),be(49,`
    `),P$1(),be(50,`
    `),L(51,`c-card`,5),be(52,`
      `),L(53,`c-card-header`),be(54,`
        `),L(55,`strong`),be(56,`Angular Accordion`),P$1(),be(57,` flush
      `),P$1(),be(58,`
      `),L(59,`c-card-body`),be(60,`
        `),L(61,`p`,6),be(62,`
          Add `),L(63,`code`),be(64,`flush`),P$1(),be(65,` to remove the default `),L(66,`code`),be(67,`background-color`),P$1(),be(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),P$1(),be(69,`
        `),L(70,`app-docs-example`,12),be(71,`
          `),L(72,`c-accordion`,13),be(73,`
            `),L(74,`c-accordion-item`,14),be(75,`
              `),oe(76,q,1,0,`ng-template`,15),be(77,`
              `),oe(78,G,3,1,`ng-template`,16),be(79,`
            `),P$1(),be(80,`
            `),L(81,`c-accordion-item`),be(82,`
              `),oe(83,J,1,0,`ng-template`,15),be(84,`
              `),oe(85,K,3,1,`ng-template`,16),be(86,`
            `),P$1(),be(87,`
            `),L(88,`c-accordion-item`),be(89,`
              `),oe(90,Q,1,0,`ng-template`,15),be(91,`
              `),oe(92,U,3,1,`ng-template`,16),be(93,`
            `),P$1(),be(94,`
          `),P$1(),be(95,`
        `),P$1(),be(96,`
      `),P$1(),be(97,`
    `),P$1(),be(98,`
    `),L(99,`c-card`,5),be(100,`
      `),L(101,`c-card-header`),be(102,`
        `),L(103,`strong`),be(104,`Angular Accordion`),P$1(),be(105,` alwaysOpen
      `),P$1(),be(106,`
      `),L(107,`c-card-body`),be(108,`
        `),L(109,`p`,6),be(110,`
          Add `),L(111,`code`),be(112,`alwaysOpen`),P$1(),be(113,` property to make accordion items stay open when another
          item is opened.
        `),P$1(),be(114,`
        `),L(115,`app-docs-example`,17),be(116,`
          `),L(117,`c-accordion`,18),be(118,`
            `),bo(119,Z,8,1,null,null,yo),P$1(),be(121,`
        `),P$1(),be(122,`
      `),P$1(),be(123,`
    `),P$1(),be(124,`
  `),P$1(),be(125,`
`),P$1()),o&2&&(C(21),V(`alwaysOpen`,!1),C(2),V(`visible`,!1),C(8),V(`visible`,!1),C(8),V(`visible`,!1),C(33),V(`flush`,!0),C(47),Do(x.items))},dependencies:[Ste,dP,ua,rP,da,E,Bee,Hee,Xt,YL,Wee,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};