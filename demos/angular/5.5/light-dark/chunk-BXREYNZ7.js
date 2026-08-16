import{b as O}from"./chunk-DZVFH6A3.js";import"./chunk-PMOGNWGV.js";import{a as $}from"./chunk-ZX4I2AKI.js";import{P as E,Q as H,R as I,T as B,_ as k,cb as D,d as b,eb as V,ma as M,na as L,qa as z}from"./chunk-KA3R4CT6.js";import"./chunk-MQBD4EFB.js";import"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Nb as A,Ob as w,Pb as T,Qb as r,Rb as t,Sb as n,Tb as d,Xb as h,Za as s,bb as a,bc as C,dc as m,fa as y,la as u,ma as f,mb as S,nc as p,sb as l,sc as e,uc as v}from"./chunk-H7BDVHMQ.js";import"./chunk-ZOGHMS73.js";function j(i,c){if(i&1){let o=h();e(0,`
                `),t(1,"button",19),C("click",function(){u(o),m();let g=p(24);return f(g.toggleItem())}),e(2,`
                  Accordion item #0
                `),n(),e(3,`
              `)}if(i&2){m();let o=p(24);a(),r("collapsed",!o.visible)}}function P(i,c){if(i&1&&(e(0,`
                `),d(1,"div",20),e(2,`
              `)),i&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("first"),s)("gradient",!0)}}function N(i,c){if(i&1){let o=h();e(0,`
                `),t(1,"button",21),C("click",function(){u(o),m();let g=p(32);return f(g.toggleItem())}),e(2,`
                  Accordion item #1
                `),n(),e(3,`
              `)}if(i&2){m();let o=p(32);a(),r("collapsed",!o.visible)}}function Y(i,c){i&1&&(e(0,`
                `),t(1,"div",22),e(2,`
                  `),t(3,"strong"),e(4,`This is the
                    `),t(5,"mark"),e(6,"#second"),n(),e(7,`
                    item accordion body.`),n(),e(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),t(9,"code"),e(10,".accordion-body"),n(),e(11,`,
                  though the transition does limit overflow.
                `),n(),e(12,`
              `))}function R(i,c){if(i&1){let o=h();e(0,`
                `),t(1,"button",21),C("click",function(){u(o),m();let g=p(40);return f(g.toggleItem())}),e(2,`
                  Accordion item #2
                `),n(),e(3,`
              `)}if(i&2){m();let o=p(40);a(),r("collapsed",!o.visible)}}function q(i,c){if(i&1&&(e(0,`
                `),t(1,"div",22),e(2,`
                  `),d(3,"span",23),e(4,`
                `),n(),e(5,`
              `)),i&2){let o=m();a(3),r("innerHTML",o.getAccordionBodyText("third"),s)}}function G(i,c){i&1&&e(0,`
                Accordion item #0
              `)}function J(i,c){if(i&1&&(e(0,`
                `),d(1,"span",23),e(2,`
              `)),i&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("first"),s)}}function K(i,c){i&1&&e(0,`
                Accordion item #1
              `)}function Q(i,c){if(i&1&&(e(0,`
                `),d(1,"span",23),e(2,`
              `)),i&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("second"),s)}}function U(i,c){i&1&&e(0,`
                Accordion item #2
              `)}function W(i,c){if(i&1&&(e(0,`
                `),d(1,"span",23),e(2,`
              `)),i&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("third"),s)}}function X(i,c){if(i&1&&e(0),i&2){let o=m().$index;v(`
                  Custom Accordion item #`,o,`
                `)}}function Z(i,c){if(i&1&&(e(0,`
                  `),t(1,"small")(2,"i"),e(3),n()(),e(4,`
                  `),d(5,"span",23),e(6,`
                `)),i&2){let o=m().$index,x=m();a(3),v("",o,"."),a(2),r("innerHTML",x.getAccordionBodyText(o),s)}}function ee(i,c){if(i&1&&(e(0,`
              `),t(1,"c-accordion-item",9),e(2,`
                `),l(3,X,1,1,"ng-template",15),e(4,`
                `),l(5,Z,7,2,"ng-template",16),e(6,`
              `),n(),e(7,`
            `)),i&2){let o=c.$index;a(),r("visible",o===1)}}var _=class _{constructor(){this.sanitizer=y(b);this.items=[1,2,3,4]}getAccordionBodyText(c){let o=`
      <strong>This is the <mark>#${c}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}};_.\u0275fac=function(o){return new(o||_)},_.\u0275cmp=S({type:_,selectors:[["app-accordions"]],decls:126,vars:5,consts:[["item0","cAccordionItem"],["item1","cAccordionItem"],["item2","cAccordionItem"],["xs","12"],["href","components/accordion","title","Accordion"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/accordion"],[1,"shadow","rounded-2",3,"alwaysOpen"],[3,"visible"],["cTemplateId","accordionHeaderTemplate"],["cTemplateId","accordionBodyTemplate"],["href","components/accordion#flush"],[3,"flush"],["visible",""],["cTemplateId","accordionHeader"],["cTemplateId","accordionBody"],["href","components/accordion#always-open"],["alwaysOpen","",1,"shadow","accordion-custom","rounded-2"],["cAccordionButton","","cBgColor","info",3,"click","collapsed"],["cBgColor","info",1,"accordion-body",3,"innerHTML","gradient"],["cAccordionButton","",3,"click","collapsed"],[1,"accordion-body"],[3,"innerHTML"]],template:function(o,x){o&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",3),e(3,`
    `),d(4,"app-docs-components",4),e(5,`
    `),t(6,"c-card",5),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular Accordion"),n(),e(12,`
      `),n(),e(13,`
      `),t(14,"c-card-body"),e(15,`
        `),t(16,"p",6),e(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),n(),e(18,`
        `),t(19,"app-docs-example",7),e(20,`
          `),t(21,"c-accordion",8),e(22,`
            `),t(23,"c-accordion-item",9,0),e(25,`
              `),l(26,j,4,1,"ng-template",10),e(27,`
              `),l(28,P,3,2,"ng-template",11),e(29,`
            `),n(),e(30,`
            `),t(31,"c-accordion-item",9,1),e(33,`
              `),l(34,N,4,1,"ng-template",10),e(35,`
              `),l(36,Y,13,0,"ng-template",11),e(37,`
            `),n(),e(38,`
            `),t(39,"c-accordion-item",9,2),e(41,`
              `),l(42,R,4,1,"ng-template",10),e(43,`
              `),l(44,q,6,1,"ng-template",11),e(45,`
            `),n(),e(46,`
          `),n(),e(47,`
        `),n(),e(48,`
      `),n(),e(49,`
    `),n(),e(50,`
    `),t(51,"c-card",5),e(52,`
      `),t(53,"c-card-header"),e(54,`
        `),t(55,"strong"),e(56,"Angular Accordion"),n(),e(57,` flush
      `),n(),e(58,`
      `),t(59,"c-card-body"),e(60,`
        `),t(61,"p",6),e(62,`
          Add `),t(63,"code"),e(64,"flush"),n(),e(65," to remove the default "),t(66,"code"),e(67,"background-color"),n(),e(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),n(),e(69,`
        `),t(70,"app-docs-example",12),e(71,`
          `),t(72,"c-accordion",13),e(73,`
            `),t(74,"c-accordion-item",14),e(75,`
              `),l(76,G,1,0,"ng-template",15),e(77,`
              `),l(78,J,3,1,"ng-template",16),e(79,`
            `),n(),e(80,`
            `),t(81,"c-accordion-item"),e(82,`
              `),l(83,K,1,0,"ng-template",15),e(84,`
              `),l(85,Q,3,1,"ng-template",16),e(86,`
            `),n(),e(87,`
            `),t(88,"c-accordion-item"),e(89,`
              `),l(90,U,1,0,"ng-template",15),e(91,`
              `),l(92,W,3,1,"ng-template",16),e(93,`
            `),n(),e(94,`
          `),n(),e(95,`
        `),n(),e(96,`
      `),n(),e(97,`
    `),n(),e(98,`
    `),t(99,"c-card",5),e(100,`
      `),t(101,"c-card-header"),e(102,`
        `),t(103,"strong"),e(104,"Angular Accordion"),n(),e(105,` alwaysOpen
      `),n(),e(106,`
      `),t(107,"c-card-body"),e(108,`
        `),t(109,"p",6),e(110,`
          Add `),t(111,"code"),e(112,"alwaysOpen"),n(),e(113,` property to make accordion items stay open when another
          item is opened.
        `),n(),e(114,`
        `),t(115,"app-docs-example",17),e(116,`
          `),t(117,"c-accordion",18),e(118,`
            `),w(119,ee,8,1,null,null,A),n(),e(121,`
        `),n(),e(122,`
      `),n(),e(123,`
    `),n(),e(124,`
  `),n(),e(125,`
`),n()),o&2&&(a(21),r("alwaysOpen",!1),a(2),r("visible",!1),a(8),r("visible",!1),a(8),r("visible",!1),a(33),r("flush",!0),a(47),T(x.items))},dependencies:[V,D,M,z,L,O,I,B,E,H,k,$],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--cui-dark);color:var(--cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]});var F=_;export{F as AccordionsComponent};
