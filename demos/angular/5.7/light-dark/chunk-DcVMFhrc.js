import{$ as JT,$n as eb,Ii as zw,In as b,Ir as nm,K as Ib,Pn as au,Rr as nu,Yn as db,_i as vD,ct as Kd,fn as Yd,g as Cg,kr as mE,on as XT,qr as qg,ri as rs,rn as Wg,tn as Wb,ur as ib}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$n as ux,Et as V2,H as Jo,O as Ge,R as JS,Vn as rS,an as fF,bt as T2,ht as Ro,lt as Po,or as x2}from"./main-AD2Y5VJE.js";import{t as I}from"./chunk-Y32HznYM.js";import"./chunk-CHo8zYa-.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-DOxS8IGk.js";function N(t,a){if(t&1){let o=ib();Wb(0,`
                `),rs(1,`button`,19),nm(`click`,function(){Yd(o),db();return Kd(Ib(24).toggleItem())}),Wb(2,`
                  Accordion item #0
                `),nu(),Wb(3,`
              `)}if(t&2){db();let o=Ib(24);vD(),Wg(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(Wb(0,`
                `),qg(1,`div`,20),Wb(2,`
              `)),t&2){let o=db();vD(),Wg(`innerHTML`,o.getAccordionBodyText(`first`),mE)(`gradient`,!0)}}function j(t,a){if(t&1){let o=ib();Wb(0,`
                `),rs(1,`button`,21),nm(`click`,function(){Yd(o),db();return Kd(Ib(32).toggleItem())}),Wb(2,`
                  Accordion item #1
                `),nu(),Wb(3,`
              `)}if(t&2){db();let o=Ib(32);vD(),Wg(`collapsed`,!o.visible)}}function P(t,a){t&1&&(Wb(0,`
                `),rs(1,`div`,22),Wb(2,`
                  `),rs(3,`strong`),Wb(4,`This is the
                    `),rs(5,`mark`),Wb(6,`#second`),nu(),Wb(7,`
                    item accordion body.`),nu(),Wb(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),rs(9,`code`),Wb(10,`.accordion-body`),nu(),Wb(11,`,
                  though the transition does limit overflow.
                `),nu(),Wb(12,`
              `))}function Y(t,a){if(t&1){let o=ib();Wb(0,`
                `),rs(1,`button`,21),nm(`click`,function(){Yd(o),db();return Kd(Ib(40).toggleItem())}),Wb(2,`
                  Accordion item #2
                `),nu(),Wb(3,`
              `)}if(t&2){db();let o=Ib(40);vD(),Wg(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(Wb(0,`
                `),rs(1,`div`,22),Wb(2,`
                  `),qg(3,`span`,23),Wb(4,`
                `),nu(),Wb(5,`
              `)),t&2){let o=db();vD(3),Wg(`innerHTML`,o.getAccordionBodyText(`third`),mE)}}function q(t,a){t&1&&Wb(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(Wb(0,`
                `),qg(1,`span`,23),Wb(2,`
              `)),t&2){let o=db();vD(),Wg(`innerHTML`,o.getAccordionBodyText(`first`),mE)}}function J(t,a){t&1&&Wb(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(Wb(0,`
                `),qg(1,`span`,23),Wb(2,`
              `)),t&2){let o=db();vD(),Wg(`innerHTML`,o.getAccordionBodyText(`second`),mE)}}function Q(t,a){t&1&&Wb(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(Wb(0,`
                `),qg(1,`span`,23),Wb(2,`
              `)),t&2){let o=db();vD(),Wg(`innerHTML`,o.getAccordionBodyText(`third`),mE)}}function W(t,a){if(t&1&&Wb(0),t&2){let o=db().$index;au(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(Wb(0,`
                  `),rs(1,`small`)(2,`i`),Wb(3),nu()(),Wb(4,`
                  `),qg(5,`span`,23),Wb(6,`
                `)),t&2){let o=db().$index,x=db();vD(3),au(``,o,`.`),vD(2),Wg(`innerHTML`,x.getAccordionBodyText(o),mE)}}function Z(t,a){if(t&1&&(Wb(0,`
              `),rs(1,`c-accordion-item`,9),Wb(2,`
                `),Cg(3,W,1,1,`ng-template`,15),Wb(4,`
                `),Cg(5,X,7,2,`ng-template`,16),Wb(6,`
              `),nu(),Wb(7,`
            `)),t&2){let o=a.$index;vD(),Wg(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=b(Jo);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=zw({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,3),Wb(3,`
    `),qg(4,`app-docs-components`,4),Wb(5,`
    `),rs(6,`c-card`,5),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Accordion`),nu(),Wb(12,`
      `),nu(),Wb(13,`
      `),rs(14,`c-card-body`),Wb(15,`
        `),rs(16,`p`,6),Wb(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),nu(),Wb(18,`
        `),rs(19,`app-docs-example`,7),Wb(20,`
          `),rs(21,`c-accordion`,8),Wb(22,`
            `),rs(23,`c-accordion-item`,9,0),Wb(25,`
              `),Cg(26,N,4,1,`ng-template`,10),Wb(27,`
              `),Cg(28,F,3,2,`ng-template`,11),Wb(29,`
            `),nu(),Wb(30,`
            `),rs(31,`c-accordion-item`,9,1),Wb(33,`
              `),Cg(34,j,4,1,`ng-template`,10),Wb(35,`
              `),Cg(36,P,13,0,`ng-template`,11),Wb(37,`
            `),nu(),Wb(38,`
            `),rs(39,`c-accordion-item`,9,2),Wb(41,`
              `),Cg(42,Y,4,1,`ng-template`,10),Wb(43,`
              `),Cg(44,R,6,1,`ng-template`,11),Wb(45,`
            `),nu(),Wb(46,`
          `),nu(),Wb(47,`
        `),nu(),Wb(48,`
      `),nu(),Wb(49,`
    `),nu(),Wb(50,`
    `),rs(51,`c-card`,5),Wb(52,`
      `),rs(53,`c-card-header`),Wb(54,`
        `),rs(55,`strong`),Wb(56,`Angular Accordion`),nu(),Wb(57,` flush
      `),nu(),Wb(58,`
      `),rs(59,`c-card-body`),Wb(60,`
        `),rs(61,`p`,6),Wb(62,`
          Add `),rs(63,`code`),Wb(64,`flush`),nu(),Wb(65,` to remove the default `),rs(66,`code`),Wb(67,`background-color`),nu(),Wb(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),nu(),Wb(69,`
        `),rs(70,`app-docs-example`,12),Wb(71,`
          `),rs(72,`c-accordion`,13),Wb(73,`
            `),rs(74,`c-accordion-item`,14),Wb(75,`
              `),Cg(76,q,1,0,`ng-template`,15),Wb(77,`
              `),Cg(78,G,3,1,`ng-template`,16),Wb(79,`
            `),nu(),Wb(80,`
            `),rs(81,`c-accordion-item`),Wb(82,`
              `),Cg(83,J,1,0,`ng-template`,15),Wb(84,`
              `),Cg(85,K,3,1,`ng-template`,16),Wb(86,`
            `),nu(),Wb(87,`
            `),rs(88,`c-accordion-item`),Wb(89,`
              `),Cg(90,Q,1,0,`ng-template`,15),Wb(91,`
              `),Cg(92,U,3,1,`ng-template`,16),Wb(93,`
            `),nu(),Wb(94,`
          `),nu(),Wb(95,`
        `),nu(),Wb(96,`
      `),nu(),Wb(97,`
    `),nu(),Wb(98,`
    `),rs(99,`c-card`,5),Wb(100,`
      `),rs(101,`c-card-header`),Wb(102,`
        `),rs(103,`strong`),Wb(104,`Angular Accordion`),nu(),Wb(105,` alwaysOpen
      `),nu(),Wb(106,`
      `),rs(107,`c-card-body`),Wb(108,`
        `),rs(109,`p`,6),Wb(110,`
          Add `),rs(111,`code`),Wb(112,`alwaysOpen`),nu(),Wb(113,` property to make accordion items stay open when another
          item is opened.
        `),nu(),Wb(114,`
        `),rs(115,`app-docs-example`,17),Wb(116,`
          `),rs(117,`c-accordion`,18),Wb(118,`
            `),XT(119,Z,8,1,null,null,JT),nu(),Wb(121,`
        `),nu(),Wb(122,`
      `),nu(),Wb(123,`
    `),nu(),Wb(124,`
  `),nu(),Wb(125,`
`),nu()),o&2&&(vD(21),Wg(`alwaysOpen`,!1),vD(2),Wg(`visible`,!1),vD(8),Wg(`visible`,!1),vD(8),Wg(`visible`,!1),vD(33),Wg(`flush`,!0),vD(47),eb(x.items))},dependencies:[fF,ux,Ro,JS,Po,I,x2,T2,Ge,rS,V2,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};