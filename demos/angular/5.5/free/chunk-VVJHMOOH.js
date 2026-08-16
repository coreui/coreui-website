import{b as V}from"./chunk-LD7KIRSH.js";import{a as O}from"./chunk-N4KRKZ3T.js";import{$ as k,D as b,E,F as H,H as I,Ka as z,Ma as D,O as B,aa as M,da as L,k as T}from"./chunk-JWVWN3RB.js";import{Cb as S,Db as A,Eb as w,Fb as r,Gb as n,Hb as i,Ib as d,Qa as s,Sb as f,Ua as a,Vb as h,Yb as m,Z as v,ca as g,da as u,gc as p,hb as y,lc as e,nb as l,nc as C}from"./chunk-32CID2Q6.js";import"./chunk-JKOY2XUY.js";function F(t,c){if(t&1){let o=f();e(0,`
                `),n(1,"button",19),h("click",function(){g(o),m();let _=p(24);return u(_.toggleItem())}),e(2,`
                  Accordion item #0
                `),i(),e(3,`
              `)}if(t&2){m();let o=p(24);a(),r("collapsed",!o.visible)}}function j(t,c){if(t&1&&(e(0,`
                `),d(1,"div",20),e(2,`
              `)),t&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("first"),s)("gradient",!0)}}function P(t,c){if(t&1){let o=f();e(0,`
                `),n(1,"button",21),h("click",function(){g(o),m();let _=p(32);return u(_.toggleItem())}),e(2,`
                  Accordion item #1
                `),i(),e(3,`
              `)}if(t&2){m();let o=p(32);a(),r("collapsed",!o.visible)}}function N(t,c){t&1&&(e(0,`
                `),n(1,"div",22),e(2,`
                  `),n(3,"strong"),e(4,`This is the
                    `),n(5,"mark"),e(6,"#second"),i(),e(7,`
                    item accordion body.`),i(),e(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),n(9,"code"),e(10,".accordion-body"),i(),e(11,`,
                  though the transition does limit overflow.
                `),i(),e(12,`
              `))}function Y(t,c){if(t&1){let o=f();e(0,`
                `),n(1,"button",21),h("click",function(){g(o),m();let _=p(40);return u(_.toggleItem())}),e(2,`
                  Accordion item #2
                `),i(),e(3,`
              `)}if(t&2){m();let o=p(40);a(),r("collapsed",!o.visible)}}function R(t,c){if(t&1&&(e(0,`
                `),n(1,"div",22),e(2,`
                  `),d(3,"span",23),e(4,`
                `),i(),e(5,`
              `)),t&2){let o=m();a(3),r("innerHTML",o.getAccordionBodyText("third"),s)}}function q(t,c){t&1&&e(0,`
                Accordion item #0
              `)}function G(t,c){if(t&1&&(e(0,`
                `),d(1,"span",23),e(2,`
              `)),t&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("first"),s)}}function J(t,c){t&1&&e(0,`
                Accordion item #1
              `)}function K(t,c){if(t&1&&(e(0,`
                `),d(1,"span",23),e(2,`
              `)),t&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("second"),s)}}function Q(t,c){t&1&&e(0,`
                Accordion item #2
              `)}function U(t,c){if(t&1&&(e(0,`
                `),d(1,"span",23),e(2,`
              `)),t&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("third"),s)}}function W(t,c){if(t&1&&e(0),t&2){let o=m().$index;C(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,c){if(t&1&&(e(0,`
                  `),n(1,"small")(2,"i"),e(3),i()(),e(4,`
                  `),d(5,"span",23),e(6,`
                `)),t&2){let o=m().$index,x=m();a(3),C("",o,"."),a(2),r("innerHTML",x.getAccordionBodyText(o),s)}}function Z(t,c){if(t&1&&(e(0,`
              `),n(1,"c-accordion-item",9),e(2,`
                `),l(3,W,1,1,"ng-template",15),e(4,`
                `),l(5,X,7,2,"ng-template",16),e(6,`
              `),i(),e(7,`
            `)),t&2){let o=c.$index;a(),r("visible",o===1)}}var $=class t{constructor(){this.sanitizer=v(T);this.items=[1,2,3,4]}getAccordionBodyText(c){let o=`
      <strong>This is the <mark>#${c}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=y({type:t,selectors:[["app-accordions"]],decls:126,vars:5,consts:[["item0","cAccordionItem"],["item1","cAccordionItem"],["item2","cAccordionItem"],["xs","12"],["href","components/accordion","title","Accordion"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/accordion"],[1,"shadow","rounded-2",3,"alwaysOpen"],[3,"visible"],["cTemplateId","accordionHeaderTemplate"],["cTemplateId","accordionBodyTemplate"],["href","components/accordion#flush"],[3,"flush"],["visible",""],["cTemplateId","accordionHeader"],["cTemplateId","accordionBody"],["href","components/accordion#always-open"],["alwaysOpen","",1,"shadow","accordion-custom","rounded-2"],["cAccordionButton","","cBgColor","info",3,"click","collapsed"],["cBgColor","info",1,"accordion-body",3,"innerHTML","gradient"],["cAccordionButton","",3,"click","collapsed"],[1,"accordion-body"],[3,"innerHTML"]],template:function(o,x){o&1&&(n(0,"c-row"),e(1,`
  `),n(2,"c-col",3),e(3,`
    `),d(4,"app-docs-components",4),e(5,`
    `),n(6,"c-card",5),e(7,`
      `),n(8,"c-card-header"),e(9,`
        `),n(10,"strong"),e(11,"Angular Accordion"),i(),e(12,`
      `),i(),e(13,`
      `),n(14,"c-card-body"),e(15,`
        `),n(16,"p",6),e(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),i(),e(18,`
        `),n(19,"app-docs-example",7),e(20,`
          `),n(21,"c-accordion",8),e(22,`
            `),n(23,"c-accordion-item",9,0),e(25,`
              `),l(26,F,4,1,"ng-template",10),e(27,`
              `),l(28,j,3,2,"ng-template",11),e(29,`
            `),i(),e(30,`
            `),n(31,"c-accordion-item",9,1),e(33,`
              `),l(34,P,4,1,"ng-template",10),e(35,`
              `),l(36,N,13,0,"ng-template",11),e(37,`
            `),i(),e(38,`
            `),n(39,"c-accordion-item",9,2),e(41,`
              `),l(42,Y,4,1,"ng-template",10),e(43,`
              `),l(44,R,6,1,"ng-template",11),e(45,`
            `),i(),e(46,`
          `),i(),e(47,`
        `),i(),e(48,`
      `),i(),e(49,`
    `),i(),e(50,`
    `),n(51,"c-card",5),e(52,`
      `),n(53,"c-card-header"),e(54,`
        `),n(55,"strong"),e(56,"Angular Accordion"),i(),e(57,` flush
      `),i(),e(58,`
      `),n(59,"c-card-body"),e(60,`
        `),n(61,"p",6),e(62,`
          Add `),n(63,"code"),e(64,"flush"),i(),e(65," to remove the default "),n(66,"code"),e(67,"background-color"),i(),e(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),i(),e(69,`
        `),n(70,"app-docs-example",12),e(71,`
          `),n(72,"c-accordion",13),e(73,`
            `),n(74,"c-accordion-item",14),e(75,`
              `),l(76,q,1,0,"ng-template",15),e(77,`
              `),l(78,G,3,1,"ng-template",16),e(79,`
            `),i(),e(80,`
            `),n(81,"c-accordion-item"),e(82,`
              `),l(83,J,1,0,"ng-template",15),e(84,`
              `),l(85,K,3,1,"ng-template",16),e(86,`
            `),i(),e(87,`
            `),n(88,"c-accordion-item"),e(89,`
              `),l(90,Q,1,0,"ng-template",15),e(91,`
              `),l(92,U,3,1,"ng-template",16),e(93,`
            `),i(),e(94,`
          `),i(),e(95,`
        `),i(),e(96,`
      `),i(),e(97,`
    `),i(),e(98,`
    `),n(99,"c-card",5),e(100,`
      `),n(101,"c-card-header"),e(102,`
        `),n(103,"strong"),e(104,"Angular Accordion"),i(),e(105,` alwaysOpen
      `),i(),e(106,`
      `),n(107,"c-card-body"),e(108,`
        `),n(109,"p",6),e(110,`
          Add `),n(111,"code"),e(112,"alwaysOpen"),i(),e(113,` property to make accordion items stay open when another
          item is opened.
        `),i(),e(114,`
        `),n(115,"app-docs-example",17),e(116,`
          `),n(117,"c-accordion",18),e(118,`
            `),A(119,Z,8,1,null,null,S),i(),e(121,`
        `),i(),e(122,`
      `),i(),e(123,`
    `),i(),e(124,`
  `),i(),e(125,`
`),i()),o&2&&(a(21),r("alwaysOpen",!1),a(2),r("visible",!1),a(8),r("visible",!1),a(8),r("visible",!1),a(33),r("flush",!0),a(47),w(x.items))},dependencies:[D,z,k,L,M,V,H,I,b,E,B,O],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--cui-dark);color:var(--cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};
