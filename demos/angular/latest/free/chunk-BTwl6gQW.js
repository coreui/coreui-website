import{Ci as qi,Dt as O,Ft as Pa,Jr as le,Lt as Pv,Q as Ii,Qt as Sr,Rt as Qn,Tt as Nm,Wt as Re,Yt as S,_a as zi,_n as VV,a as $re,ai as nH,di as oe,ea as we,en as T,gn as V,gr as fn,gt as La,j as F$1,kt as OV,pn as Un,q as Hre,qt as Roe,ua as ye,wi as qn,wn as Wre,wr as h,wt as N$1}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";function N(t,a){if(t&1){let o=Ii();ye(0,`
                `),O(1,`button`,19),le(`click`,function(){Un(o),N$1();let y=we(24);return qn(y.toggleItem())}),ye(2,`
                  Accordion item #0
                `),F$1(),ye(3,`
              `)}if(t&2){N$1();let o=we(24);S(),V(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(ye(0,`
                `),Re(1,`div`,20),ye(2,`
              `)),t&2){let o=N$1();S(),V(`innerHTML`,o.getAccordionBodyText(`first`),Nm)(`gradient`,!0)}}function j(t,a){if(t&1){let o=Ii();ye(0,`
                `),O(1,`button`,21),le(`click`,function(){Un(o),N$1();let y=we(32);return qn(y.toggleItem())}),ye(2,`
                  Accordion item #1
                `),F$1(),ye(3,`
              `)}if(t&2){N$1();let o=we(32);S(),V(`collapsed`,!o.visible)}}function P(t,a){t&1&&(ye(0,`
                `),O(1,`div`,22),ye(2,`
                  `),O(3,`strong`),ye(4,`This is the
                    `),O(5,`mark`),ye(6,`#second`),F$1(),ye(7,`
                    item accordion body.`),F$1(),ye(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),O(9,`code`),ye(10,`.accordion-body`),F$1(),ye(11,`,
                  though the transition does limit overflow.
                `),F$1(),ye(12,`
              `))}function Y(t,a){if(t&1){let o=Ii();ye(0,`
                `),O(1,`button`,21),le(`click`,function(){Un(o),N$1();let y=we(40);return qn(y.toggleItem())}),ye(2,`
                  Accordion item #2
                `),F$1(),ye(3,`
              `)}if(t&2){N$1();let o=we(40);S(),V(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(ye(0,`
                `),O(1,`div`,22),ye(2,`
                  `),Re(3,`span`,23),ye(4,`
                `),F$1(),ye(5,`
              `)),t&2){let o=N$1();S(3),V(`innerHTML`,o.getAccordionBodyText(`third`),Nm)}}function q(t,a){t&1&&ye(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(ye(0,`
                `),Re(1,`span`,23),ye(2,`
              `)),t&2){let o=N$1();S(),V(`innerHTML`,o.getAccordionBodyText(`first`),Nm)}}function J(t,a){t&1&&ye(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(ye(0,`
                `),Re(1,`span`,23),ye(2,`
              `)),t&2){let o=N$1();S(),V(`innerHTML`,o.getAccordionBodyText(`second`),Nm)}}function Q(t,a){t&1&&ye(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(ye(0,`
                `),Re(1,`span`,23),ye(2,`
              `)),t&2){let o=N$1();S(),V(`innerHTML`,o.getAccordionBodyText(`third`),Nm)}}function W(t,a){if(t&1&&ye(0),t&2){let o=N$1().$index;Qn(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(ye(0,`
                  `),O(1,`small`)(2,`i`),ye(3),F$1()(),ye(4,`
                  `),Re(5,`span`,23),ye(6,`
                `)),t&2){let o=N$1().$index,x=N$1();S(3),Qn(``,o,`.`),S(2),V(`innerHTML`,x.getAccordionBodyText(o),Nm)}}function Z(t,a){if(t&1&&(ye(0,`
              `),O(1,`c-accordion-item`,9),ye(2,`
                `),oe(3,W,1,1,`ng-template`,15),ye(4,`
                `),oe(5,X,7,2,`ng-template`,16),ye(6,`
              `),F$1(),ye(7,`
            `)),t&2){let o=a.$index;S(),V(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=h(Pv);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=T({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,3),ye(3,`
    `),Re(4,`app-docs-components`,4),ye(5,`
    `),O(6,`c-card`,5),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Accordion`),F$1(),ye(12,`
      `),F$1(),ye(13,`
      `),O(14,`c-card-body`),ye(15,`
        `),O(16,`p`,6),ye(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),F$1(),ye(18,`
        `),O(19,`app-docs-example`,7),ye(20,`
          `),O(21,`c-accordion`,8),ye(22,`
            `),O(23,`c-accordion-item`,9,0),ye(25,`
              `),oe(26,N,4,1,`ng-template`,10),ye(27,`
              `),oe(28,F,3,2,`ng-template`,11),ye(29,`
            `),F$1(),ye(30,`
            `),O(31,`c-accordion-item`,9,1),ye(33,`
              `),oe(34,j,4,1,`ng-template`,10),ye(35,`
              `),oe(36,P,13,0,`ng-template`,11),ye(37,`
            `),F$1(),ye(38,`
            `),O(39,`c-accordion-item`,9,2),ye(41,`
              `),oe(42,Y,4,1,`ng-template`,10),ye(43,`
              `),oe(44,R,6,1,`ng-template`,11),ye(45,`
            `),F$1(),ye(46,`
          `),F$1(),ye(47,`
        `),F$1(),ye(48,`
      `),F$1(),ye(49,`
    `),F$1(),ye(50,`
    `),O(51,`c-card`,5),ye(52,`
      `),O(53,`c-card-header`),ye(54,`
        `),O(55,`strong`),ye(56,`Angular Accordion`),F$1(),ye(57,` flush
      `),F$1(),ye(58,`
      `),O(59,`c-card-body`),ye(60,`
        `),O(61,`p`,6),ye(62,`
          Add `),O(63,`code`),ye(64,`flush`),F$1(),ye(65,` to remove the default `),O(66,`code`),ye(67,`background-color`),F$1(),ye(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),F$1(),ye(69,`
        `),O(70,`app-docs-example`,12),ye(71,`
          `),O(72,`c-accordion`,13),ye(73,`
            `),O(74,`c-accordion-item`,14),ye(75,`
              `),oe(76,q,1,0,`ng-template`,15),ye(77,`
              `),oe(78,G,3,1,`ng-template`,16),ye(79,`
            `),F$1(),ye(80,`
            `),O(81,`c-accordion-item`),ye(82,`
              `),oe(83,J,1,0,`ng-template`,15),ye(84,`
              `),oe(85,K,3,1,`ng-template`,16),ye(86,`
            `),F$1(),ye(87,`
            `),O(88,`c-accordion-item`),ye(89,`
              `),oe(90,Q,1,0,`ng-template`,15),ye(91,`
              `),oe(92,U,3,1,`ng-template`,16),ye(93,`
            `),F$1(),ye(94,`
          `),F$1(),ye(95,`
        `),F$1(),ye(96,`
      `),F$1(),ye(97,`
    `),F$1(),ye(98,`
    `),O(99,`c-card`,5),ye(100,`
      `),O(101,`c-card-header`),ye(102,`
        `),O(103,`strong`),ye(104,`Angular Accordion`),F$1(),ye(105,` alwaysOpen
      `),F$1(),ye(106,`
      `),O(107,`c-card-body`),ye(108,`
        `),O(109,`p`,6),ye(110,`
          Add `),O(111,`code`),ye(112,`alwaysOpen`),F$1(),ye(113,` property to make accordion items stay open when another
          item is opened.
        `),F$1(),ye(114,`
        `),O(115,`app-docs-example`,17),ye(116,`
          `),O(117,`c-accordion`,18),ye(118,`
            `),qi(119,Z,8,1,null,null,Sr),F$1(),ye(121,`
        `),F$1(),ye(122,`
      `),F$1(),ye(123,`
    `),F$1(),ye(124,`
  `),F$1(),ye(125,`
`),F$1()),o&2&&(S(21),V(`alwaysOpen`,!1),S(2),V(`visible`,!1),S(8),V(`visible`,!1),S(8),V(`visible`,!1),S(33),V(`flush`,!0),S(47),zi(x.items))},dependencies:[Roe,nH,Pa,VV,La,E,Hre,$re,fn,OV,Wre,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};