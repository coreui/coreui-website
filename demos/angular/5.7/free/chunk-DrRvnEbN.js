import{$t as V,A as F$1,B as Gv,C as Di,D as E,Hr as ke,Ht as Sr,I as Gn,Lr as ja,Lt as Roe,On as Zn,Pn as _,St as Ooe,Vr as k,_a as zi,_t as N$1,br as gH,d as Ba,en as Vm,f as Boe,fa as ye,hr as fe,ht as Mse,ii as oe,li as p,pi as pn,q as IH,qt as UH,va as zn,vi as qi,vt as Ne}from"./main-U5YNMN7V.js";import{t as E$1}from"./chunk-XCt8LgbN.js";import{t as c}from"./chunk-B_o4dmI3.js";function N(t,a){if(t&1){let o=Di();ye(0,`
                `),k(1,`button`,19),fe(`click`,function(){zn(o),N$1();let y=Ne(24);return Gn(y.toggleItem())}),ye(2,`
                  Accordion item #0
                `),F$1(),ye(3,`
              `)}if(t&2){N$1();let o=Ne(24);_(),V(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(ye(0,`
                `),ke(1,`div`,20),ye(2,`
              `)),t&2){let o=N$1();_(),V(`innerHTML`,o.getAccordionBodyText(`first`),Vm)(`gradient`,!0)}}function j(t,a){if(t&1){let o=Di();ye(0,`
                `),k(1,`button`,21),fe(`click`,function(){zn(o),N$1();let y=Ne(32);return Gn(y.toggleItem())}),ye(2,`
                  Accordion item #1
                `),F$1(),ye(3,`
              `)}if(t&2){N$1();let o=Ne(32);_(),V(`collapsed`,!o.visible)}}function P(t,a){t&1&&(ye(0,`
                `),k(1,`div`,22),ye(2,`
                  `),k(3,`strong`),ye(4,`This is the
                    `),k(5,`mark`),ye(6,`#second`),F$1(),ye(7,`
                    item accordion body.`),F$1(),ye(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),k(9,`code`),ye(10,`.accordion-body`),F$1(),ye(11,`,
                  though the transition does limit overflow.
                `),F$1(),ye(12,`
              `))}function Y(t,a){if(t&1){let o=Di();ye(0,`
                `),k(1,`button`,21),fe(`click`,function(){zn(o),N$1();let y=Ne(40);return Gn(y.toggleItem())}),ye(2,`
                  Accordion item #2
                `),F$1(),ye(3,`
              `)}if(t&2){N$1();let o=Ne(40);_(),V(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(ye(0,`
                `),k(1,`div`,22),ye(2,`
                  `),ke(3,`span`,23),ye(4,`
                `),F$1(),ye(5,`
              `)),t&2){let o=N$1();_(3),V(`innerHTML`,o.getAccordionBodyText(`third`),Vm)}}function q(t,a){t&1&&ye(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(ye(0,`
                `),ke(1,`span`,23),ye(2,`
              `)),t&2){let o=N$1();_(),V(`innerHTML`,o.getAccordionBodyText(`first`),Vm)}}function J(t,a){t&1&&ye(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(ye(0,`
                `),ke(1,`span`,23),ye(2,`
              `)),t&2){let o=N$1();_(),V(`innerHTML`,o.getAccordionBodyText(`second`),Vm)}}function Q(t,a){t&1&&ye(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(ye(0,`
                `),ke(1,`span`,23),ye(2,`
              `)),t&2){let o=N$1();_(),V(`innerHTML`,o.getAccordionBodyText(`third`),Vm)}}function W(t,a){if(t&1&&ye(0),t&2){let o=N$1().$index;Zn(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(ye(0,`
                  `),k(1,`small`)(2,`i`),ye(3),F$1()(),ye(4,`
                  `),ke(5,`span`,23),ye(6,`
                `)),t&2){let o=N$1().$index,x=N$1();_(3),Zn(``,o,`.`),_(2),V(`innerHTML`,x.getAccordionBodyText(o),Vm)}}function Z(t,a){if(t&1&&(ye(0,`
              `),k(1,`c-accordion-item`,9),ye(2,`
                `),oe(3,W,1,1,`ng-template`,15),ye(4,`
                `),oe(5,X,7,2,`ng-template`,16),ye(6,`
              `),F$1(),ye(7,`
            `)),t&2){let o=a.$index;_(),V(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=p(Gv);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=E({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(k(0,`c-row`),ye(1,`
  `),k(2,`c-col`,3),ye(3,`
    `),ke(4,`app-docs-components`,4),ye(5,`
    `),k(6,`c-card`,5),ye(7,`
      `),k(8,`c-card-header`),ye(9,`
        `),k(10,`strong`),ye(11,`Angular Accordion`),F$1(),ye(12,`
      `),F$1(),ye(13,`
      `),k(14,`c-card-body`),ye(15,`
        `),k(16,`p`,6),ye(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),F$1(),ye(18,`
        `),k(19,`app-docs-example`,7),ye(20,`
          `),k(21,`c-accordion`,8),ye(22,`
            `),k(23,`c-accordion-item`,9,0),ye(25,`
              `),oe(26,N,4,1,`ng-template`,10),ye(27,`
              `),oe(28,F,3,2,`ng-template`,11),ye(29,`
            `),F$1(),ye(30,`
            `),k(31,`c-accordion-item`,9,1),ye(33,`
              `),oe(34,j,4,1,`ng-template`,10),ye(35,`
              `),oe(36,P,13,0,`ng-template`,11),ye(37,`
            `),F$1(),ye(38,`
            `),k(39,`c-accordion-item`,9,2),ye(41,`
              `),oe(42,Y,4,1,`ng-template`,10),ye(43,`
              `),oe(44,R,6,1,`ng-template`,11),ye(45,`
            `),F$1(),ye(46,`
          `),F$1(),ye(47,`
        `),F$1(),ye(48,`
      `),F$1(),ye(49,`
    `),F$1(),ye(50,`
    `),k(51,`c-card`,5),ye(52,`
      `),k(53,`c-card-header`),ye(54,`
        `),k(55,`strong`),ye(56,`Angular Accordion`),F$1(),ye(57,` flush
      `),F$1(),ye(58,`
      `),k(59,`c-card-body`),ye(60,`
        `),k(61,`p`,6),ye(62,`
          Add `),k(63,`code`),ye(64,`flush`),F$1(),ye(65,` to remove the default `),k(66,`code`),ye(67,`background-color`),F$1(),ye(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),F$1(),ye(69,`
        `),k(70,`app-docs-example`,12),ye(71,`
          `),k(72,`c-accordion`,13),ye(73,`
            `),k(74,`c-accordion-item`,14),ye(75,`
              `),oe(76,q,1,0,`ng-template`,15),ye(77,`
              `),oe(78,G,3,1,`ng-template`,16),ye(79,`
            `),F$1(),ye(80,`
            `),k(81,`c-accordion-item`),ye(82,`
              `),oe(83,J,1,0,`ng-template`,15),ye(84,`
              `),oe(85,K,3,1,`ng-template`,16),ye(86,`
            `),F$1(),ye(87,`
            `),k(88,`c-accordion-item`),ye(89,`
              `),oe(90,Q,1,0,`ng-template`,15),ye(91,`
              `),oe(92,U,3,1,`ng-template`,16),ye(93,`
            `),F$1(),ye(94,`
          `),F$1(),ye(95,`
        `),F$1(),ye(96,`
      `),F$1(),ye(97,`
    `),F$1(),ye(98,`
    `),k(99,`c-card`,5),ye(100,`
      `),k(101,`c-card-header`),ye(102,`
        `),k(103,`strong`),ye(104,`Angular Accordion`),F$1(),ye(105,` alwaysOpen
      `),F$1(),ye(106,`
      `),k(107,`c-card-body`),ye(108,`
        `),k(109,`p`,6),ye(110,`
          Add `),k(111,`code`),ye(112,`alwaysOpen`),F$1(),ye(113,` property to make accordion items stay open when another
          item is opened.
        `),F$1(),ye(114,`
        `),k(115,`app-docs-example`,17),ye(116,`
          `),k(117,`c-accordion`,18),ye(118,`
            `),qi(119,Z,8,1,null,null,Sr),F$1(),ye(121,`
        `),F$1(),ye(122,`
      `),F$1(),ye(123,`
    `),F$1(),ye(124,`
  `),F$1(),ye(125,`
`),F$1()),o&2&&(_(21),V(`alwaysOpen`,!1),_(2),V(`visible`,!1),_(8),V(`visible`,!1),_(8),V(`visible`,!1),_(33),V(`flush`,!0),_(47),zi(x.items))},dependencies:[Mse,UH,Ba,IH,ja,E$1,Roe,Ooe,pn,gH,Boe,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};