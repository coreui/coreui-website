import{$ as SI,$r as bT,Br as Wv,Dn as xI,Et as bt,Ft as fT,H as Nv,Hn as Ch,Kn as ET,Li as pl,Q as Ri,Qn as IT,Wi as qu,Wn as DT,Xr as aw,Zr as b,b as Gs,br as PT,dr as NT,fa as yD,kn as xi,la as wh,mi as fh,ni as cl,p as EI,q as Pv,vr as Oi,wi as kh,z as Mv,zn as BI,zr as Wu}from"./main-WBU6EW3E.js";import{t as E}from"./chunk-D1ovLIZZ.js";import{t as c}from"./chunk-BNlMJs6j.js";function N(t,a){if(t&1){let o=bT();aw(0,`
                `),Oi(1,`button`,19),kh(`click`,function(){qu(o),NT();return Wu(PT(24).toggleItem())}),aw(2,`
                  Accordion item #0
                `),cl(),aw(3,`
              `)}if(t&2){NT();let o=PT(24);BI(),wh(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(aw(0,`
                `),Ch(1,`div`,20),aw(2,`
              `)),t&2){let o=NT();BI(),wh(`innerHTML`,o.getAccordionBodyText(`first`),Wv)(`gradient`,!0)}}function j(t,a){if(t&1){let o=bT();aw(0,`
                `),Oi(1,`button`,21),kh(`click`,function(){qu(o),NT();return Wu(PT(32).toggleItem())}),aw(2,`
                  Accordion item #1
                `),cl(),aw(3,`
              `)}if(t&2){NT();let o=PT(32);BI(),wh(`collapsed`,!o.visible)}}function P(t,a){t&1&&(aw(0,`
                `),Oi(1,`div`,22),aw(2,`
                  `),Oi(3,`strong`),aw(4,`This is the
                    `),Oi(5,`mark`),aw(6,`#second`),cl(),aw(7,`
                    item accordion body.`),cl(),aw(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),Oi(9,`code`),aw(10,`.accordion-body`),cl(),aw(11,`,
                  though the transition does limit overflow.
                `),cl(),aw(12,`
              `))}function Y(t,a){if(t&1){let o=bT();aw(0,`
                `),Oi(1,`button`,21),kh(`click`,function(){qu(o),NT();return Wu(PT(40).toggleItem())}),aw(2,`
                  Accordion item #2
                `),cl(),aw(3,`
              `)}if(t&2){NT();let o=PT(40);BI(),wh(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(aw(0,`
                `),Oi(1,`div`,22),aw(2,`
                  `),Ch(3,`span`,23),aw(4,`
                `),cl(),aw(5,`
              `)),t&2){let o=NT();BI(3),wh(`innerHTML`,o.getAccordionBodyText(`third`),Wv)}}function q(t,a){t&1&&aw(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(aw(0,`
                `),Ch(1,`span`,23),aw(2,`
              `)),t&2){let o=NT();BI(),wh(`innerHTML`,o.getAccordionBodyText(`first`),Wv)}}function J(t,a){t&1&&aw(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(aw(0,`
                `),Ch(1,`span`,23),aw(2,`
              `)),t&2){let o=NT();BI(),wh(`innerHTML`,o.getAccordionBodyText(`second`),Wv)}}function Q(t,a){t&1&&aw(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(aw(0,`
                `),Ch(1,`span`,23),aw(2,`
              `)),t&2){let o=NT();BI(),wh(`innerHTML`,o.getAccordionBodyText(`third`),Wv)}}function W(t,a){if(t&1&&aw(0),t&2){let o=NT().$index;pl(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(aw(0,`
                  `),Oi(1,`small`)(2,`i`),aw(3),cl()(),aw(4,`
                  `),Ch(5,`span`,23),aw(6,`
                `)),t&2){let o=NT().$index,x=NT();BI(3),pl(``,o,`.`),BI(2),wh(`innerHTML`,x.getAccordionBodyText(o),Wv)}}function Z(t,a){if(t&1&&(aw(0,`
              `),Oi(1,`c-accordion-item`,9),aw(2,`
                `),fh(3,W,1,1,`ng-template`,15),aw(4,`
                `),fh(5,X,7,2,`ng-template`,16),aw(6,`
              `),cl(),aw(7,`
            `)),t&2){let o=a.$index;BI(),wh(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=b(Gs);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=yD({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(Oi(0,`c-row`),aw(1,`
  `),Oi(2,`c-col`,3),aw(3,`
    `),Ch(4,`app-docs-components`,4),aw(5,`
    `),Oi(6,`c-card`,5),aw(7,`
      `),Oi(8,`c-card-header`),aw(9,`
        `),Oi(10,`strong`),aw(11,`Angular Accordion`),cl(),aw(12,`
      `),cl(),aw(13,`
      `),Oi(14,`c-card-body`),aw(15,`
        `),Oi(16,`p`,6),aw(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),cl(),aw(18,`
        `),Oi(19,`app-docs-example`,7),aw(20,`
          `),Oi(21,`c-accordion`,8),aw(22,`
            `),Oi(23,`c-accordion-item`,9,0),aw(25,`
              `),fh(26,N,4,1,`ng-template`,10),aw(27,`
              `),fh(28,F,3,2,`ng-template`,11),aw(29,`
            `),cl(),aw(30,`
            `),Oi(31,`c-accordion-item`,9,1),aw(33,`
              `),fh(34,j,4,1,`ng-template`,10),aw(35,`
              `),fh(36,P,13,0,`ng-template`,11),aw(37,`
            `),cl(),aw(38,`
            `),Oi(39,`c-accordion-item`,9,2),aw(41,`
              `),fh(42,Y,4,1,`ng-template`,10),aw(43,`
              `),fh(44,R,6,1,`ng-template`,11),aw(45,`
            `),cl(),aw(46,`
          `),cl(),aw(47,`
        `),cl(),aw(48,`
      `),cl(),aw(49,`
    `),cl(),aw(50,`
    `),Oi(51,`c-card`,5),aw(52,`
      `),Oi(53,`c-card-header`),aw(54,`
        `),Oi(55,`strong`),aw(56,`Angular Accordion`),cl(),aw(57,` flush
      `),cl(),aw(58,`
      `),Oi(59,`c-card-body`),aw(60,`
        `),Oi(61,`p`,6),aw(62,`
          Add `),Oi(63,`code`),aw(64,`flush`),cl(),aw(65,` to remove the default `),Oi(66,`code`),aw(67,`background-color`),cl(),aw(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),cl(),aw(69,`
        `),Oi(70,`app-docs-example`,12),aw(71,`
          `),Oi(72,`c-accordion`,13),aw(73,`
            `),Oi(74,`c-accordion-item`,14),aw(75,`
              `),fh(76,q,1,0,`ng-template`,15),aw(77,`
              `),fh(78,G,3,1,`ng-template`,16),aw(79,`
            `),cl(),aw(80,`
            `),Oi(81,`c-accordion-item`),aw(82,`
              `),fh(83,J,1,0,`ng-template`,15),aw(84,`
              `),fh(85,K,3,1,`ng-template`,16),aw(86,`
            `),cl(),aw(87,`
            `),Oi(88,`c-accordion-item`),aw(89,`
              `),fh(90,Q,1,0,`ng-template`,15),aw(91,`
              `),fh(92,U,3,1,`ng-template`,16),aw(93,`
            `),cl(),aw(94,`
          `),cl(),aw(95,`
        `),cl(),aw(96,`
      `),cl(),aw(97,`
    `),cl(),aw(98,`
    `),Oi(99,`c-card`,5),aw(100,`
      `),Oi(101,`c-card-header`),aw(102,`
        `),Oi(103,`strong`),aw(104,`Angular Accordion`),cl(),aw(105,` alwaysOpen
      `),cl(),aw(106,`
      `),Oi(107,`c-card-body`),aw(108,`
        `),Oi(109,`p`,6),aw(110,`
          Add `),Oi(111,`code`),aw(112,`alwaysOpen`),cl(),aw(113,` property to make accordion items stay open when another
          item is opened.
        `),cl(),aw(114,`
        `),Oi(115,`app-docs-example`,17),aw(116,`
          `),Oi(117,`c-accordion`,18),aw(118,`
            `),ET(119,Z,8,1,null,null,IT),cl(),aw(121,`
        `),cl(),aw(122,`
      `),cl(),aw(123,`
    `),cl(),aw(124,`
  `),cl(),aw(125,`
`),cl()),o&2&&(BI(21),wh(`alwaysOpen`,!1),BI(2),wh(`visible`,!1),BI(8),wh(`visible`,!1),BI(8),wh(`visible`,!1),BI(33),wh(`flush`,!0),BI(47),DT(x.items))},dependencies:[fT,Pv,xi,Nv,Ri,E,SI,EI,bt,Mv,xI,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};