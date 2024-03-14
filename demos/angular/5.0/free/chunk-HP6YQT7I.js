import{b as O}from"./chunk-TDRRP4IO.js";import{$ as a,Da as f,Ea as h,Fa as m,I as y,N as u,O as g,Oa as _,Pa as e,Ra as v,Wb as E,Xb as H,Y as p,Ya as A,Yb as I,_b as B,aa as C,cd as V,dd as D,fc as k,la as l,na as r,sc as M,tc as L,ua as S,ub as b,va as T,wa as w,wc as z,xa as n,ya as i,za as x}from"./chunk-B6WIMGH4.js";import"./chunk-RLASGPT3.js";function $(t,c){if(t&1){let o=f();e(0,`
                `),n(1,"button",18),h("click",function(){u(o),m();let d=_(22);return g(d.toggleItem())}),e(2,`
                  Accordion item #0
                `),i(),e(3,`
              `)}if(t&2){m();let o=_(22);a(),r("collapsed",!o.visible)}}function j(t,c){if(t&1&&(e(0,`
                `),x(1,"div",19),e(2,`
              `)),t&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("first"),p)("gradient",!0)}}function P(t,c){if(t&1){let o=f();e(0,`
                `),n(1,"button",20),h("click",function(){u(o),m();let d=_(30);return g(d.toggleItem())}),e(2,`
                  Accordion item #1
                `),i(),e(3,`
              `)}if(t&2){m();let o=_(30);a(),r("collapsed",!o.visible)}}function Y(t,c){t&1&&(e(0,`
                `),n(1,"div",21),e(2,`
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
              `))}function R(t,c){if(t&1){let o=f();e(0,`
                `),n(1,"button",20),h("click",function(){u(o),m();let d=_(38);return g(d.toggleItem())}),e(2,`
                  Accordion item #2
                `),i(),e(3,`
              `)}if(t&2){m();let o=_(38);a(),r("collapsed",!o.visible)}}function q(t,c){if(t&1&&(e(0,`
                `),n(1,"div",21),e(2,`
                  `),x(3,"span",22),e(4,`
                `),i(),e(5,`
              `)),t&2){let o=m();a(3),r("innerHTML",o.getAccordionBodyText("third"),p)}}function G(t,c){t&1&&e(0,`
                Accordion item #0
              `)}function J(t,c){if(t&1&&(e(0,`
                `),x(1,"span",22),e(2,`
              `)),t&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("first"),p)}}function K(t,c){t&1&&e(0,`
                Accordion item #1
              `)}function N(t,c){if(t&1&&(e(0,`
                `),x(1,"span",22),e(2,`
              `)),t&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("second"),p)}}function Q(t,c){t&1&&e(0,`
                Accordion item #2
              `)}function U(t,c){if(t&1&&(e(0,`
                `),x(1,"span",22),e(2,`
              `)),t&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("third"),p)}}function W(t,c){if(t&1&&e(0),t&2){let o=m().$index;v(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,c){if(t&1&&(e(0,`
                  `),n(1,"small")(2,"i"),e(3),i()(),e(4,`
                  `),x(5,"span",22),e(6,`
                `)),t&2){let o=m().$index,s=m();a(3),v("",o,"."),a(2),r("innerHTML",s.getAccordionBodyText(o),p)}}function Z(t,c){if(t&1&&(e(0,`
              `),n(1,"c-accordion-item",8),e(2,`
                `),l(3,W,1,1,"ng-template",14),e(4,`
                `),l(5,X,7,2,"ng-template",15),e(6,`
              `),i(),e(7,`
            `)),t&2){let o=c.$index;a(),r("visible",o===1)}}var ce=(()=>{let c=class c{constructor(s){this.sanitizer=s,this.items=[1,2,3,4]}getAccordionBodyText(s){let d=`
      <strong>This is the <mark>#${s}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(d)}};c.\u0275fac=function(d){return new(d||c)(C(b))},c.\u0275cmp=y({type:c,selectors:[["app-accordions"]],standalone:!0,features:[A],decls:124,vars:7,consts:[["item0","cAccordionItem"],["item1","cAccordionItem"],["item2","cAccordionItem"],["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/accordion"],[1,"shadow","rounded-2",3,"alwaysOpen"],[3,"visible"],["cTemplateId","accordionHeaderTemplate"],["cTemplateId","accordionBodyTemplate"],["href","components/accordion#flush"],[3,"flush"],["visible",""],["cTemplateId","accordionHeader"],["cTemplateId","accordionBody"],["href","components/accordion#always-open"],["alwaysOpen","",1,"shadow","accordion-custom","rounded-2"],["cAccordionButton","","cBgColor","info",3,"click","collapsed"],["cBgColor","info",1,"accordion-body",3,"innerHTML","gradient"],["cAccordionButton","",3,"click","collapsed"],[1,"accordion-body"],[3,"innerHTML"]],template:function(d,F){d&1&&(n(0,"c-row"),e(1,`
  `),n(2,"c-col",3),e(3,`
    `),n(4,"c-card",4),e(5,`
      `),n(6,"c-card-header"),e(7,`
        `),n(8,"strong"),e(9,"Angular Accordion"),i(),e(10,`
      `),i(),e(11,`
      `),n(12,"c-card-body"),e(13,`
        `),n(14,"p",5),e(15,`
          Click the accordions below to expand/collapse the accordion content.
        `),i(),e(16,`
        `),n(17,"app-docs-example",6),e(18,`
          `),n(19,"c-accordion",7),e(20,`
            `),n(21,"c-accordion-item",8,0),e(23,`
              `),l(24,$,4,1,"ng-template",9),e(25,`
              `),l(26,j,3,2,"ng-template",10),e(27,`
            `),i(),e(28,`
            `),n(29,"c-accordion-item",8,1),e(31,`
              `),l(32,P,4,1,"ng-template",9),e(33,`
              `),l(34,Y,13,0,"ng-template",10),e(35,`
            `),i(),e(36,`
            `),n(37,"c-accordion-item",8,2),e(39,`
              `),l(40,R,4,1,"ng-template",9),e(41,`
              `),l(42,q,6,1,"ng-template",10),e(43,`
            `),i(),e(44,`
          `),i(),e(45,`
        `),i(),e(46,`
      `),i(),e(47,`
    `),i(),e(48,`
    `),n(49,"c-card",4),e(50,`
      `),n(51,"c-card-header"),e(52,`
        `),n(53,"strong"),e(54,"Angular Accordion"),i(),e(55,` flush
      `),i(),e(56,`
      `),n(57,"c-card-body"),e(58,`
        `),n(59,"p",5),e(60,`
          Add `),n(61,"code"),e(62,"flush"),i(),e(63," to remove the default "),n(64,"code"),e(65,"background-color"),i(),e(66,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),i(),e(67,`
        `),n(68,"app-docs-example",11),e(69,`
          `),n(70,"c-accordion",12),e(71,`
            `),n(72,"c-accordion-item",13),e(73,`
              `),l(74,G,1,0,"ng-template",14),e(75,`
              `),l(76,J,3,1,"ng-template",15),e(77,`
            `),i(),e(78,`
            `),n(79,"c-accordion-item",8),e(80,`
              `),l(81,K,1,0,"ng-template",14),e(82,`
              `),l(83,N,3,1,"ng-template",15),e(84,`
            `),i(),e(85,`
            `),n(86,"c-accordion-item",8),e(87,`
              `),l(88,Q,1,0,"ng-template",14),e(89,`
              `),l(90,U,3,1,"ng-template",15),e(91,`
            `),i(),e(92,`
          `),i(),e(93,`
        `),i(),e(94,`
      `),i(),e(95,`
    `),i(),e(96,`
    `),n(97,"c-card",4),e(98,`
      `),n(99,"c-card-header"),e(100,`
        `),n(101,"strong"),e(102,"Angular Accordion"),i(),e(103,` alwaysOpen
      `),i(),e(104,`
      `),n(105,"c-card-body"),e(106,`
        `),n(107,"p",5),e(108,`
          Add `),n(109,"code"),e(110,"alwaysOpen"),i(),e(111,` property to make accordion items stay open when another
          item is opened.
        `),i(),e(112,`
        `),n(113,"app-docs-example",16),e(114,`
          `),n(115,"c-accordion",17),e(116,`
            `),T(117,Z,8,1,null,null,S),i(),e(119,`
        `),i(),e(120,`
      `),i(),e(121,`
    `),i(),e(122,`
  `),i(),e(123,`
`),i()),d&2&&(a(19),r("alwaysOpen",!1),a(2),r("visible",!1),a(8),r("visible",!1),a(8),r("visible",!1),a(33),r("flush",!0),a(9),r("visible",!1),a(7),r("visible",!1),a(31),w(F.items))},dependencies:[D,V,M,z,L,O,I,B,E,H,k],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--cui-dark);color:var(--cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]});let t=c;return t})();export{ce as AccordionsComponent};
