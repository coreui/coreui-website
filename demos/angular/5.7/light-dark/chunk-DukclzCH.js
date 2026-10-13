import{Bt as Tm,It as TC,Ni as yT,Nr as of,Tt as RC,U as Ib,Ui as zg,Zn as hm,er as hu,gn as as,ii as sf,in as ZD,j as GC,ln as _C,nt as MC,sr as jC,t as $E,vn as b,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{J as No,Kn as ro,Pn as oo,in as fF,ir as vt,j as IP,sr as wP,tn as eM,tr as uI,w as FP,xt as WM}from"./main-PH3H2PHZ.js";import{t as $$1}from"./chunk-NR_cKXUo.js";import"./chunk-Ysi4WkbN.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-Dx86lBYf.js";function N(t,a){if(t&1){let o=RC();yT(0,`
                `),as(1,`button`,19),Tm(`click`,function(){of(o),jC();let y=GC(24);return sf(y.toggleItem())}),yT(2,`
                  Accordion item #0
                `),lu(),yT(3,`
              `)}if(t&2){jC();let o=GC(24);ZD(),pm(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(yT(0,`
                `),hm(1,`div`,20),yT(2,`
              `)),t&2){let o=jC();ZD(),pm(`innerHTML`,o.getAccordionBodyText(`first`),$E)(`gradient`,!0)}}function j(t,a){if(t&1){let o=RC();yT(0,`
                `),as(1,`button`,21),Tm(`click`,function(){of(o),jC();let y=GC(32);return sf(y.toggleItem())}),yT(2,`
                  Accordion item #1
                `),lu(),yT(3,`
              `)}if(t&2){jC();let o=GC(32);ZD(),pm(`collapsed`,!o.visible)}}function P(t,a){t&1&&(yT(0,`
                `),as(1,`div`,22),yT(2,`
                  `),as(3,`strong`),yT(4,`This is the
                    `),as(5,`mark`),yT(6,`#second`),lu(),yT(7,`
                    item accordion body.`),lu(),yT(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),as(9,`code`),yT(10,`.accordion-body`),lu(),yT(11,`,
                  though the transition does limit overflow.
                `),lu(),yT(12,`
              `))}function Y(t,a){if(t&1){let o=RC();yT(0,`
                `),as(1,`button`,21),Tm(`click`,function(){of(o),jC();let y=GC(40);return sf(y.toggleItem())}),yT(2,`
                  Accordion item #2
                `),lu(),yT(3,`
              `)}if(t&2){jC();let o=GC(40);ZD(),pm(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(yT(0,`
                `),as(1,`div`,22),yT(2,`
                  `),hm(3,`span`,23),yT(4,`
                `),lu(),yT(5,`
              `)),t&2){let o=jC();ZD(3),pm(`innerHTML`,o.getAccordionBodyText(`third`),$E)}}function q(t,a){t&1&&yT(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(yT(0,`
                `),hm(1,`span`,23),yT(2,`
              `)),t&2){let o=jC();ZD(),pm(`innerHTML`,o.getAccordionBodyText(`first`),$E)}}function J(t,a){t&1&&yT(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(yT(0,`
                `),hm(1,`span`,23),yT(2,`
              `)),t&2){let o=jC();ZD(),pm(`innerHTML`,o.getAccordionBodyText(`second`),$E)}}function Q(t,a){t&1&&yT(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(yT(0,`
                `),hm(1,`span`,23),yT(2,`
              `)),t&2){let o=jC();ZD(),pm(`innerHTML`,o.getAccordionBodyText(`third`),$E)}}function W(t,a){if(t&1&&yT(0),t&2){let o=jC().$index;hu(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(yT(0,`
                  `),as(1,`small`)(2,`i`),yT(3),lu()(),yT(4,`
                  `),hm(5,`span`,23),yT(6,`
                `)),t&2){let o=jC().$index,x=jC();ZD(3),hu(``,o,`.`),ZD(2),pm(`innerHTML`,x.getAccordionBodyText(o),$E)}}function Z(t,a){if(t&1&&(yT(0,`
              `),as(1,`c-accordion-item`,9),yT(2,`
                `),zg(3,W,1,1,`ng-template`,15),yT(4,`
                `),zg(5,X,7,2,`ng-template`,16),yT(6,`
              `),lu(),yT(7,`
            `)),t&2){let o=a.$index;ZD(),pm(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=b(No);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=Ib({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,3),yT(3,`
    `),hm(4,`app-docs-components`,4),yT(5,`
    `),as(6,`c-card`,5),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Accordion`),lu(),yT(12,`
      `),lu(),yT(13,`
      `),as(14,`c-card-body`),yT(15,`
        `),as(16,`p`,6),yT(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),lu(),yT(18,`
        `),as(19,`app-docs-example`,7),yT(20,`
          `),as(21,`c-accordion`,8),yT(22,`
            `),as(23,`c-accordion-item`,9,0),yT(25,`
              `),zg(26,N,4,1,`ng-template`,10),yT(27,`
              `),zg(28,F,3,2,`ng-template`,11),yT(29,`
            `),lu(),yT(30,`
            `),as(31,`c-accordion-item`,9,1),yT(33,`
              `),zg(34,j,4,1,`ng-template`,10),yT(35,`
              `),zg(36,P,13,0,`ng-template`,11),yT(37,`
            `),lu(),yT(38,`
            `),as(39,`c-accordion-item`,9,2),yT(41,`
              `),zg(42,Y,4,1,`ng-template`,10),yT(43,`
              `),zg(44,R,6,1,`ng-template`,11),yT(45,`
            `),lu(),yT(46,`
          `),lu(),yT(47,`
        `),lu(),yT(48,`
      `),lu(),yT(49,`
    `),lu(),yT(50,`
    `),as(51,`c-card`,5),yT(52,`
      `),as(53,`c-card-header`),yT(54,`
        `),as(55,`strong`),yT(56,`Angular Accordion`),lu(),yT(57,` flush
      `),lu(),yT(58,`
      `),as(59,`c-card-body`),yT(60,`
        `),as(61,`p`,6),yT(62,`
          Add `),as(63,`code`),yT(64,`flush`),lu(),yT(65,` to remove the default `),as(66,`code`),yT(67,`background-color`),lu(),yT(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),lu(),yT(69,`
        `),as(70,`app-docs-example`,12),yT(71,`
          `),as(72,`c-accordion`,13),yT(73,`
            `),as(74,`c-accordion-item`,14),yT(75,`
              `),zg(76,q,1,0,`ng-template`,15),yT(77,`
              `),zg(78,G,3,1,`ng-template`,16),yT(79,`
            `),lu(),yT(80,`
            `),as(81,`c-accordion-item`),yT(82,`
              `),zg(83,J,1,0,`ng-template`,15),yT(84,`
              `),zg(85,K,3,1,`ng-template`,16),yT(86,`
            `),lu(),yT(87,`
            `),as(88,`c-accordion-item`),yT(89,`
              `),zg(90,Q,1,0,`ng-template`,15),yT(91,`
              `),zg(92,U,3,1,`ng-template`,16),yT(93,`
            `),lu(),yT(94,`
          `),lu(),yT(95,`
        `),lu(),yT(96,`
      `),lu(),yT(97,`
    `),lu(),yT(98,`
    `),as(99,`c-card`,5),yT(100,`
      `),as(101,`c-card-header`),yT(102,`
        `),as(103,`strong`),yT(104,`Angular Accordion`),lu(),yT(105,` alwaysOpen
      `),lu(),yT(106,`
      `),as(107,`c-card-body`),yT(108,`
        `),as(109,`p`,6),yT(110,`
          Add `),as(111,`code`),yT(112,`alwaysOpen`),lu(),yT(113,` property to make accordion items stay open when another
          item is opened.
        `),lu(),yT(114,`
        `),as(115,`app-docs-example`,17),yT(116,`
          `),as(117,`c-accordion`,18),yT(118,`
            `),_C(119,Z,8,1,null,null,TC),lu(),yT(121,`
        `),lu(),yT(122,`
      `),lu(),yT(123,`
    `),lu(),yT(124,`
  `),lu(),yT(125,`
`),lu()),o&2&&(ZD(21),pm(`alwaysOpen`,!1),ZD(2),pm(`visible`,!1),ZD(8),pm(`visible`,!1),ZD(8),pm(`visible`,!1),ZD(33),pm(`flush`,!0),ZD(47),MC(x.items))},dependencies:[fF,uI,oo,WM,ro,$$1,IP,wP,vt,eM,FP,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};