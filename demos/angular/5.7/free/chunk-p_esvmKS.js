import{$ as SI,$r as dl,En as xI,Er as Uu,Et as bt,Fi as sl,Ft as fT,H as Nv,Hn as Dh,Hr as b,In as $u,Ln as $v,Lr as _T,On as xi,Q as Ri,Wi as vT,Yi as wT,b as Gs,di as hD,fr as Oi,ki as ow,mi as kT,p as EI,pi as jI,q as Pv,ra as yT,xi as mT,xr as Th,z as Mv,zi as uh,zn as Ah}from"./main-5IL4V6AK.js";import{i as w}from"./chunk-DoEIP2nP.js";import{t as c}from"./chunk-bmXPd0og.js";function N(t,a){if(t&1){let o=wT();ow(0,`
                `),Oi(1,`button`,19),Ah(`click`,function(){$u(o),_T();return Uu(kT(24).toggleItem())}),ow(2,`
                  Accordion item #0
                `),sl(),ow(3,`
              `)}if(t&2){_T();let o=kT(24);jI(),Dh(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(ow(0,`
                `),Th(1,`div`,20),ow(2,`
              `)),t&2){let o=_T();jI(),Dh(`innerHTML`,o.getAccordionBodyText(`first`),$v)(`gradient`,!0)}}function j(t,a){if(t&1){let o=wT();ow(0,`
                `),Oi(1,`button`,21),Ah(`click`,function(){$u(o),_T();return Uu(kT(32).toggleItem())}),ow(2,`
                  Accordion item #1
                `),sl(),ow(3,`
              `)}if(t&2){_T();let o=kT(32);jI(),Dh(`collapsed`,!o.visible)}}function P(t,a){t&1&&(ow(0,`
                `),Oi(1,`div`,22),ow(2,`
                  `),Oi(3,`strong`),ow(4,`This is the
                    `),Oi(5,`mark`),ow(6,`#second`),sl(),ow(7,`
                    item accordion body.`),sl(),ow(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),Oi(9,`code`),ow(10,`.accordion-body`),sl(),ow(11,`,
                  though the transition does limit overflow.
                `),sl(),ow(12,`
              `))}function Y(t,a){if(t&1){let o=wT();ow(0,`
                `),Oi(1,`button`,21),Ah(`click`,function(){$u(o),_T();return Uu(kT(40).toggleItem())}),ow(2,`
                  Accordion item #2
                `),sl(),ow(3,`
              `)}if(t&2){_T();let o=kT(40);jI(),Dh(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(ow(0,`
                `),Oi(1,`div`,22),ow(2,`
                  `),Th(3,`span`,23),ow(4,`
                `),sl(),ow(5,`
              `)),t&2){let o=_T();jI(3),Dh(`innerHTML`,o.getAccordionBodyText(`third`),$v)}}function q(t,a){t&1&&ow(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(ow(0,`
                `),Th(1,`span`,23),ow(2,`
              `)),t&2){let o=_T();jI(),Dh(`innerHTML`,o.getAccordionBodyText(`first`),$v)}}function J(t,a){t&1&&ow(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(ow(0,`
                `),Th(1,`span`,23),ow(2,`
              `)),t&2){let o=_T();jI(),Dh(`innerHTML`,o.getAccordionBodyText(`second`),$v)}}function Q(t,a){t&1&&ow(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(ow(0,`
                `),Th(1,`span`,23),ow(2,`
              `)),t&2){let o=_T();jI(),Dh(`innerHTML`,o.getAccordionBodyText(`third`),$v)}}function W(t,a){if(t&1&&ow(0),t&2){let o=_T().$index;dl(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(ow(0,`
                  `),Oi(1,`small`)(2,`i`),ow(3),sl()(),ow(4,`
                  `),Th(5,`span`,23),ow(6,`
                `)),t&2){let o=_T().$index,x=_T();jI(3),dl(``,o,`.`),jI(2),Dh(`innerHTML`,x.getAccordionBodyText(o),$v)}}function Z(t,a){if(t&1&&(ow(0,`
              `),Oi(1,`c-accordion-item`,9),ow(2,`
                `),uh(3,W,1,1,`ng-template`,15),ow(4,`
                `),uh(5,X,7,2,`ng-template`,16),ow(6,`
              `),sl(),ow(7,`
            `)),t&2){let o=a.$index;jI(),Dh(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=b(Gs);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=hD({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(Oi(0,`c-row`),ow(1,`
  `),Oi(2,`c-col`,3),ow(3,`
    `),Th(4,`app-docs-components`,4),ow(5,`
    `),Oi(6,`c-card`,5),ow(7,`
      `),Oi(8,`c-card-header`),ow(9,`
        `),Oi(10,`strong`),ow(11,`Angular Accordion`),sl(),ow(12,`
      `),sl(),ow(13,`
      `),Oi(14,`c-card-body`),ow(15,`
        `),Oi(16,`p`,6),ow(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),sl(),ow(18,`
        `),Oi(19,`app-docs-example`,7),ow(20,`
          `),Oi(21,`c-accordion`,8),ow(22,`
            `),Oi(23,`c-accordion-item`,9,0),ow(25,`
              `),uh(26,N,4,1,`ng-template`,10),ow(27,`
              `),uh(28,F,3,2,`ng-template`,11),ow(29,`
            `),sl(),ow(30,`
            `),Oi(31,`c-accordion-item`,9,1),ow(33,`
              `),uh(34,j,4,1,`ng-template`,10),ow(35,`
              `),uh(36,P,13,0,`ng-template`,11),ow(37,`
            `),sl(),ow(38,`
            `),Oi(39,`c-accordion-item`,9,2),ow(41,`
              `),uh(42,Y,4,1,`ng-template`,10),ow(43,`
              `),uh(44,R,6,1,`ng-template`,11),ow(45,`
            `),sl(),ow(46,`
          `),sl(),ow(47,`
        `),sl(),ow(48,`
      `),sl(),ow(49,`
    `),sl(),ow(50,`
    `),Oi(51,`c-card`,5),ow(52,`
      `),Oi(53,`c-card-header`),ow(54,`
        `),Oi(55,`strong`),ow(56,`Angular Accordion`),sl(),ow(57,` flush
      `),sl(),ow(58,`
      `),Oi(59,`c-card-body`),ow(60,`
        `),Oi(61,`p`,6),ow(62,`
          Add `),Oi(63,`code`),ow(64,`flush`),sl(),ow(65,` to remove the default `),Oi(66,`code`),ow(67,`background-color`),sl(),ow(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),sl(),ow(69,`
        `),Oi(70,`app-docs-example`,12),ow(71,`
          `),Oi(72,`c-accordion`,13),ow(73,`
            `),Oi(74,`c-accordion-item`,14),ow(75,`
              `),uh(76,q,1,0,`ng-template`,15),ow(77,`
              `),uh(78,G,3,1,`ng-template`,16),ow(79,`
            `),sl(),ow(80,`
            `),Oi(81,`c-accordion-item`),ow(82,`
              `),uh(83,J,1,0,`ng-template`,15),ow(84,`
              `),uh(85,K,3,1,`ng-template`,16),ow(86,`
            `),sl(),ow(87,`
            `),Oi(88,`c-accordion-item`),ow(89,`
              `),uh(90,Q,1,0,`ng-template`,15),ow(91,`
              `),uh(92,U,3,1,`ng-template`,16),ow(93,`
            `),sl(),ow(94,`
          `),sl(),ow(95,`
        `),sl(),ow(96,`
      `),sl(),ow(97,`
    `),sl(),ow(98,`
    `),Oi(99,`c-card`,5),ow(100,`
      `),Oi(101,`c-card-header`),ow(102,`
        `),Oi(103,`strong`),ow(104,`Angular Accordion`),sl(),ow(105,` alwaysOpen
      `),sl(),ow(106,`
      `),Oi(107,`c-card-body`),ow(108,`
        `),Oi(109,`p`,6),ow(110,`
          Add `),Oi(111,`code`),ow(112,`alwaysOpen`),sl(),ow(113,` property to make accordion items stay open when another
          item is opened.
        `),sl(),ow(114,`
        `),Oi(115,`app-docs-example`,17),ow(116,`
          `),Oi(117,`c-accordion`,18),ow(118,`
            `),yT(119,Z,8,1,null,null,mT),sl(),ow(121,`
        `),sl(),ow(122,`
      `),sl(),ow(123,`
    `),sl(),ow(124,`
  `),sl(),ow(125,`
`),sl()),o&2&&(jI(21),Dh(`alwaysOpen`,!1),jI(2),Dh(`visible`,!1),jI(8),Dh(`visible`,!1),jI(8),Dh(`visible`,!1),jI(33),Dh(`flush`,!0),jI(47),vT(x.items))},dependencies:[fT,Pv,xi,Nv,Ri,w,SI,EI,bt,Mv,xI,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};