import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{B as Gn,C as Cle,Ci as rU,Ct as Nae,Fn as _r,M as F$1,Mt as Oe,Nt as Oi,P as Fae,Qt as Sf,V as Gr,Vr as jd,Wi as uU,Zt as S,ba as zn,c as AU,d as Ae,hi as pe,kn as Zn,mt as L,ni as mn,o as A,ot as Ka,pi as p,pn as Wr,rn as U$1,sa as x,ua as xae,un as Wa,x as Ce,zn as ae}from"./main-VQBM3OGL.js";function N(t,a){if(t&1){let o=_r();Ce(0,`
                `),F$1(1,`button`,19),pe(`click`,function(){zn(o),A();let y=Ae(24);return Gn(y.toggleItem())}),Ce(2,`
                  Accordion item #0
                `),L(),Ce(3,`
              `)}if(t&2){A();let o=Ae(24);S(),U$1(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(Ce(0,`
                `),Oe(1,`div`,20),Ce(2,`
              `)),t&2){let o=A();S(),U$1(`innerHTML`,o.getAccordionBodyText(`first`),jd)(`gradient`,!0)}}function j(t,a){if(t&1){let o=_r();Ce(0,`
                `),F$1(1,`button`,21),pe(`click`,function(){zn(o),A();let y=Ae(32);return Gn(y.toggleItem())}),Ce(2,`
                  Accordion item #1
                `),L(),Ce(3,`
              `)}if(t&2){A();let o=Ae(32);S(),U$1(`collapsed`,!o.visible)}}function P(t,a){t&1&&(Ce(0,`
                `),F$1(1,`div`,22),Ce(2,`
                  `),F$1(3,`strong`),Ce(4,`This is the
                    `),F$1(5,`mark`),Ce(6,`#second`),L(),Ce(7,`
                    item accordion body.`),L(),Ce(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),F$1(9,`code`),Ce(10,`.accordion-body`),L(),Ce(11,`,
                  though the transition does limit overflow.
                `),L(),Ce(12,`
              `))}function Y(t,a){if(t&1){let o=_r();Ce(0,`
                `),F$1(1,`button`,21),pe(`click`,function(){zn(o),A();let y=Ae(40);return Gn(y.toggleItem())}),Ce(2,`
                  Accordion item #2
                `),L(),Ce(3,`
              `)}if(t&2){A();let o=Ae(40);S(),U$1(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(Ce(0,`
                `),F$1(1,`div`,22),Ce(2,`
                  `),Oe(3,`span`,23),Ce(4,`
                `),L(),Ce(5,`
              `)),t&2){let o=A();S(3),U$1(`innerHTML`,o.getAccordionBodyText(`third`),jd)}}function q(t,a){t&1&&Ce(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(Ce(0,`
                `),Oe(1,`span`,23),Ce(2,`
              `)),t&2){let o=A();S(),U$1(`innerHTML`,o.getAccordionBodyText(`first`),jd)}}function J(t,a){t&1&&Ce(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(Ce(0,`
                `),Oe(1,`span`,23),Ce(2,`
              `)),t&2){let o=A();S(),U$1(`innerHTML`,o.getAccordionBodyText(`second`),jd)}}function Q(t,a){t&1&&Ce(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(Ce(0,`
                `),Oe(1,`span`,23),Ce(2,`
              `)),t&2){let o=A();S(),U$1(`innerHTML`,o.getAccordionBodyText(`third`),jd)}}function W(t,a){if(t&1&&Ce(0),t&2){let o=A().$index;Zn(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(Ce(0,`
                  `),F$1(1,`small`)(2,`i`),Ce(3),L()(),Ce(4,`
                  `),Oe(5,`span`,23),Ce(6,`
                `)),t&2){let o=A().$index,x=A();S(3),Zn(``,o,`.`),S(2),U$1(`innerHTML`,x.getAccordionBodyText(o),jd)}}function Z(t,a){if(t&1&&(Ce(0,`
              `),F$1(1,`c-accordion-item`,9),Ce(2,`
                `),ae(3,W,1,1,`ng-template`,15),Ce(4,`
                `),ae(5,X,7,2,`ng-template`,16),Ce(6,`
              `),L(),Ce(7,`
            `)),t&2){let o=a.$index;S(),U$1(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=p(Sf);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=x({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(F$1(0,`c-row`),Ce(1,`
  `),F$1(2,`c-col`,3),Ce(3,`
    `),Oe(4,`app-docs-components`,4),Ce(5,`
    `),F$1(6,`c-card`,5),Ce(7,`
      `),F$1(8,`c-card-header`),Ce(9,`
        `),F$1(10,`strong`),Ce(11,`Angular Accordion`),L(),Ce(12,`
      `),L(),Ce(13,`
      `),F$1(14,`c-card-body`),Ce(15,`
        `),F$1(16,`p`,6),Ce(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),L(),Ce(18,`
        `),F$1(19,`app-docs-example`,7),Ce(20,`
          `),F$1(21,`c-accordion`,8),Ce(22,`
            `),F$1(23,`c-accordion-item`,9,0),Ce(25,`
              `),ae(26,N,4,1,`ng-template`,10),Ce(27,`
              `),ae(28,F,3,2,`ng-template`,11),Ce(29,`
            `),L(),Ce(30,`
            `),F$1(31,`c-accordion-item`,9,1),Ce(33,`
              `),ae(34,j,4,1,`ng-template`,10),Ce(35,`
              `),ae(36,P,13,0,`ng-template`,11),Ce(37,`
            `),L(),Ce(38,`
            `),F$1(39,`c-accordion-item`,9,2),Ce(41,`
              `),ae(42,Y,4,1,`ng-template`,10),Ce(43,`
              `),ae(44,R,6,1,`ng-template`,11),Ce(45,`
            `),L(),Ce(46,`
          `),L(),Ce(47,`
        `),L(),Ce(48,`
      `),L(),Ce(49,`
    `),L(),Ce(50,`
    `),F$1(51,`c-card`,5),Ce(52,`
      `),F$1(53,`c-card-header`),Ce(54,`
        `),F$1(55,`strong`),Ce(56,`Angular Accordion`),L(),Ce(57,` flush
      `),L(),Ce(58,`
      `),F$1(59,`c-card-body`),Ce(60,`
        `),F$1(61,`p`,6),Ce(62,`
          Add `),F$1(63,`code`),Ce(64,`flush`),L(),Ce(65,` to remove the default `),F$1(66,`code`),Ce(67,`background-color`),L(),Ce(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),L(),Ce(69,`
        `),F$1(70,`app-docs-example`,12),Ce(71,`
          `),F$1(72,`c-accordion`,13),Ce(73,`
            `),F$1(74,`c-accordion-item`,14),Ce(75,`
              `),ae(76,q,1,0,`ng-template`,15),Ce(77,`
              `),ae(78,G,3,1,`ng-template`,16),Ce(79,`
            `),L(),Ce(80,`
            `),F$1(81,`c-accordion-item`),Ce(82,`
              `),ae(83,J,1,0,`ng-template`,15),Ce(84,`
              `),ae(85,K,3,1,`ng-template`,16),Ce(86,`
            `),L(),Ce(87,`
            `),F$1(88,`c-accordion-item`),Ce(89,`
              `),ae(90,Q,1,0,`ng-template`,15),Ce(91,`
              `),ae(92,U,3,1,`ng-template`,16),Ce(93,`
            `),L(),Ce(94,`
          `),L(),Ce(95,`
        `),L(),Ce(96,`
      `),L(),Ce(97,`
    `),L(),Ce(98,`
    `),F$1(99,`c-card`,5),Ce(100,`
      `),F$1(101,`c-card-header`),Ce(102,`
        `),F$1(103,`strong`),Ce(104,`Angular Accordion`),L(),Ce(105,` alwaysOpen
      `),L(),Ce(106,`
      `),F$1(107,`c-card-body`),Ce(108,`
        `),F$1(109,`p`,6),Ce(110,`
          Add `),F$1(111,`code`),Ce(112,`alwaysOpen`),L(),Ce(113,` property to make accordion items stay open when another
          item is opened.
        `),L(),Ce(114,`
        `),F$1(115,`app-docs-example`,17),Ce(116,`
          `),F$1(117,`c-accordion`,18),Ce(118,`
            `),Gr(119,Z,8,1,null,null,Oi),L(),Ce(121,`
        `),L(),Ce(122,`
      `),L(),Ce(123,`
    `),L(),Ce(124,`
  `),L(),Ce(125,`
`),L()),o&2&&(S(21),U$1(`alwaysOpen`,!1),S(2),U$1(`visible`,!1),S(8),U$1(`visible`,!1),S(8),U$1(`visible`,!1),S(33),U$1(`flush`,!0),S(47),Wr(x.items))},dependencies:[Cle,AU,Wa,uU,Ka,E,Nae,xae,mn,rU,Fae,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};