import{Ar as no,Bt as Tm,Ci as wi,Di as xT,Gi as zm,Li as ym,N as GT,Ni as yT,Nr as of,Tt as RC,U as Ib,Ui as zg,Wr as qC,Zn as hm,a as Am,d as CC,gn as as,ii as sf,in as ZD,j as GC,li as uH,ln as _C,nt as MC,sr as jC,tn as YT,v as DC,yn as bC,yr as lu,zn as fm,zr as pm}from"./chunk-DYvmxcZi.js";import{Gn as rF,Kn as ro,Kt as cF,Nn as oF,Pn as oo,Rn as pF,Vr as rn,Xn as t2,Yn as t0,an as g0,er as uF,in as fF,pr as xc,rn as f0,tr as uI,un as h0,xt as WM,yr as zC,zt as ao}from"./main-PMR57QFK.js";import{t as $$1}from"./chunk-C7H7fec3.js";import"./chunk-DeRLTHfv.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-BjxcDeUZ.js";var pe=[`stepTpl`];var $=()=>({$implicit:1});var le=()=>({$implicit:2});function me(r,p){r&1&&ym(0)}function ce(r,p){r&1&&ym(0)}function se(r,p){r&1&&ym(0)}function de(r,p){if(r&1){let n=RC();yT(0,`
              `),as(1,`button`,17),Tm(`click`,function(){of(n),jC();let c=GC(24);return sf(c.reset())}),yT(2,`Reset`),lu(),yT(3,`
            `)}}function ue(r,p){if(r&1){let n=RC();yT(0,`
                `),as(1,`button`,18),Tm(`click`,function(){of(n),jC(2);let c=GC(24);return sf(c.prev())}),yT(2,`Prev`),lu(),yT(3,`
              `)}}function xe(r,p){if(r&1){let n=RC();yT(0,`
                `),as(1,`button`,19),Tm(`click`,function(){of(n),jC(2);let c=GC(24);return sf(c.next())}),yT(2,`Next`),lu(),yT(3,`
              `)}}function ye(r,p){if(r&1){let n=RC();yT(0,`
                `),as(1,`button`,20),Tm(`click`,function(){of(n),jC(2);let c=GC(24);return sf(c.finish())}),yT(2,`Finish`),lu(),yT(3,`
              `)}}function _e(r,p){if(r&1&&(yT(0,`
              `),DC(1,ue,4,0),DC(2,xe,4,0),DC(3,ye,4,0)),r&2){jC();let n=GC(24);ZD(),bC(n.activeStepIndex()>0?1:-1),ZD(),bC(n.activeStepIndex()<n.stepsCount()-1?2:-1),ZD(),bC(n.activeStepIndex()===n.stepsCount()-1?3:-1)}}function fe(r,p){r&1&&yT(0,`
                All steps have been completed.
              `)}function Ce(r,p){if(r&1&&yT(0),r&2){jC();let n=GC(24);zm(`
                current step: `,n.activeStepIndex()+1,` / `,n.stepsCount(),`
              `)}}function Se(r,p){if(r&1&&(yT(0,`
                `),hm(1,`c-stepper-step`,21),yT(2,`
              `)),r&2){let n=p.$implicit;ZD(),pm(`label`,n)}}function ve(r,p){r&1&&ym(0)}function be(r,p){if(r&1&&(yT(0,`
                `),as(1,`c-stepper-step`,21),yT(2,`
                  `),zg(3,ve,1,0,`ng-container`,11),yT(4,`
                `),lu(),yT(5,`
              `)),r&2){let n=p.$implicit;ZD(),pm(`label`,n.label),ZD(2),pm(`ngTemplateOutlet`,n.template)(`ngTemplateOutletContext`,xT(3,le))}}function ge(r,p){if(r&1&&(as(0,`form`,22)(1,`c-row`,23)(2,`c-col`,24)(3,`label`,25),yT(4,`First name`),lu(),hm(5,`input`,26),lu(),as(6,`c-col`,24)(7,`label`,25),yT(8,`Last name`),lu(),hm(9,`input`,26),lu(),as(10,`c-col`,24)(11,`label`,25),yT(12,`Username`),lu(),as(13,`c-input-group`)(14,`span`,27),yT(15,`@`),lu(),hm(16,`input`,28),lu()()()()),r&2){let n=p.$implicit;ZD(2),pm(`md`,4),ZD(),pm(`for`,`userFirstName-0${n}`),ZD(2),pm(`id`,`userFirstName-0${n}`),ZD(),pm(`md`,4),ZD(),pm(`for`,`userLastName-0${n}`),ZD(2),pm(`id`,`userLastName-0${n}`),ZD(),pm(`md`,4),ZD(),pm(`for`,`userName-0${n}`),ZD(3),pm(`id`,`basic-addon-0${n}`),ZD(2),pm(`id`,`userName-0${n}`),fm(`aria-describedby`,`basic-addon-0${n}`)}}function Ee(r,p){if(r&1&&(as(0,`form`,22)(1,`c-row`,23)(2,`c-col`,24)(3,`label`,25),yT(4,`City`),lu(),hm(5,`input`,26),lu(),as(6,`c-col`,24)(7,`label`,25),yT(8,`State`),lu(),as(9,`select`,29)(10,`option`),yT(11,`Choose...`),lu(),as(12,`option`,30),yT(13,`...`),lu()()(),as(14,`c-col`,24)(15,`label`,25),yT(16,`Zip`),lu(),hm(17,`input`,26),lu()()()),r&2){let n=p.$implicit;ZD(2),pm(`md`,6),ZD(),pm(`for`,`userCity-0${n}`),ZD(2),pm(`id`,`userCity-0${n}`),ZD(),pm(`md`,3),ZD(),pm(`for`,`userState-0${n}`),ZD(2),pm(`id`,`userState-0${n}`),ZD(5),pm(`md`,3),ZD(),pm(`for`,`userZip-0${n}`),ZD(2),pm(`id`,`userZip-0${n}`)}}function he(r,p){if(r&1&&(as(0,`form`,22)(1,`c-row`,31)(2,`c-col`,24)(3,`label`,25),yT(4,`Email`),lu(),hm(5,`input`,32),lu(),as(6,`c-col`,24)(7,`label`,25),yT(8,`Password`),lu(),hm(9,`input`,33),lu(),as(10,`c-col`)(11,`c-form-check`),hm(12,`input`,34),as(13,`label`,35),yT(14,`Agree to terms and conditions`),lu()()()()()),r&2){let n=p.$implicit;ZD(2),pm(`md`,6),ZD(),pm(`for`,`userEmail-0${n}`),ZD(2),pm(`id`,`userEmail-0${n}`),ZD(),pm(`md`,6),ZD(),pm(`for`,`userPassword-0${n}`),ZD(2),pm(`id`,`userPassword-0${n}`),ZD(3),pm(`id`,`userAgree-0${n}`),ZD(),pm(`for`,`userAgree-0${n}`)}}var re=class r{constructor(){this.finished=wi(!1);this.labels=[`Step 1`,`Step 2`,`Step 3`];this.stepTemplates=uH(`stepTpl`,{read:no});this.steps=YT(()=>this.stepTemplates().map((n,m)=>({label:`Step ${m+1}`,template:n})))}handleReset(){console.log(`- handleReset`),this.finished.set(!1)}handleFinish(p){console.log(`- handleFinish`,p),this.finished.set(p)}static{this.ɵfac=function(n){return new(n||r)}}static{this.ɵcmp=Ib({type:r,selectors:[[`app-steppers`]],viewQuery:function(n,m){n&1&&Am(m.stepTemplates,pe,5,no),n&2&&qC()},decls:131,vars:11,consts:[[`stepper`,``],[`step1`,``,`stepTpl`,``],[`step2`,``,`stepTpl`,``],[`step3`,``,`stepTpl`,``],[`xs`,`12`],[`href`,`forms/stepper/`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[1,`bg-body`,`border`,`rounded`,`p-3`],[3,`finished`,`onReset`],[`label`,`Step 1`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`label`,`Step 2`],[`href`,`forms/stepper/#vertical-indicator`],[`stepButtonLayout`,`vertical`],[`href`,`forms/stepper/#vertical-layout`],[`layout`,`vertical`],[`cButton`,``,`color`,`danger`,3,`click`],[`cButton`,``,`color`,`secondary`,3,`click`],[`cButton`,``,`color`,`primary`,3,`click`],[`color`,`warning`,`cButton`,``,3,`click`],[3,`label`],[`cForm`,``],[1,`g-3`,`pb-5`],[3,`md`],[`cLabel`,``,3,`for`],[`cFormControl`,``,3,`id`],[`cInputGroupText`,``,3,`id`],[`aria-label`,`Username`,`autocomplete`,`off`,`cFormControl`,``,`placeholder`,`Username`,3,`id`],[`aria-label`,`State select`,`cSelect`,``,3,`id`],[`value`,`1`],[1,`g-3`,`pb-1`],[`cFormControl`,``,`type`,`email`,`autocomplete`,`email`,3,`id`],[`autocomplete`,`new-password`,`cFormPassword`,``,3,`id`],[`cFormCheckInput`,``,`required`,``,`type`,`checkbox`,3,`id`],[`cFormCheckLabel`,``,3,`for`]],template:function(n,m){if(n&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,4),yT(3,`
    `),hm(4,`app-docs-components`,5),yT(5,`
    `),as(6,`c-card`,6),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Stepper Component`),lu(),yT(12,`
      `),lu(),yT(13,`
      `),as(14,`c-card-body`),yT(15,`
        `),as(16,`p`,7),yT(17,`
          The Angular Stepper component helps you build intuitive, multi-step form experiences (Form Wizards) for your Angular applications. It supports horizontal and vertical layouts, built-in form validation, custom indicators, and seamless integration with any Angular forms.
        `),lu(),yT(18,`
        `),as(19,`app-docs-example`,5),yT(20,`
          `),as(21,`div`,8),yT(22,`
            `),as(23,`c-stepper`,9,0),Tm(`finished`,function(E){return m.handleFinish(E)})(`onReset`,function(){return m.handleReset()}),yT(25,`
              `),as(26,`c-stepper-step`,10),yT(27,`
                `),zg(28,me,1,0,`ng-container`,11),yT(29,`
              `),lu(),yT(30,`
              `),as(31,`c-stepper-step`,12),yT(32,`
                `),zg(33,ce,1,0,`ng-container`,11),yT(34,`
              `),lu(),yT(35,`
              `),as(36,`c-stepper-step`,12),yT(37,`
                `),zg(38,se,1,0,`ng-container`,11),yT(39,`
              `),lu(),yT(40,`
            `),lu(),yT(41,`
            `),hm(42,`hr`),yT(43,`
            `),DC(44,de,4,0)(45,_e,4,3),hm(46,`hr`),yT(47,`
            `),as(48,`p`),yT(49,`
              `),DC(50,fe,1,0)(51,Ce,1,2),lu(),yT(52,`
          `),lu(),yT(53,`
        `),lu(),yT(54,`
      `),lu(),yT(55,`
    `),lu(),yT(56,`
    `),as(57,`c-card`,6),yT(58,`
      `),as(59,`c-card-header`),yT(60,`
        `),as(61,`strong`),yT(62,`Angular Stepper Component`),lu(),yT(63,` `),as(64,`small`),yT(65,`Vertical indicator`),lu(),yT(66,`
      `),lu(),yT(67,`
      `),as(68,`c-card-body`),yT(69,`
        `),as(70,`p`,7),yT(71,`
          Display step indicators vertically above the labels using the `),as(72,`code`),yT(73,`stepButtonLayout="vertical"`),lu(),yT(74,` prop.
        `),lu(),yT(75,`
        `),as(76,`app-docs-example`,13),yT(77,`
          `),as(78,`div`,8),yT(79,`
            `),as(80,`c-stepper`,14),yT(81,`
              `),_C(82,Se,3,1,null,null,CC),lu(),yT(84,`
          `),lu(),yT(85,`
        `),lu(),yT(86,`
      `),lu(),yT(87,`
    `),lu(),yT(88,`
    `),as(89,`c-card`,6),yT(90,`
      `),as(91,`c-card-header`),yT(92,`
        `),as(93,`strong`),yT(94,`Angular Stepper Component`),lu(),yT(95,` `),as(96,`small`),yT(97,`Vertical indicator`),lu(),yT(98,`
      `),lu(),yT(99,`
      `),as(100,`c-card-body`),yT(101,`
        `),as(102,`p`,7),yT(103,`
          By using the `),as(104,`code`),yT(105,`layout="vertical"`),lu(),yT(106,` prop, both the step indicators and the step content are stacked vertically. This layout is ideal for mobile devices or designs where vertical flow is preferred in a top-to-bottom progression. `),lu(),yT(107,`
        `),as(108,`app-docs-example`,15),yT(109,`
          `),as(110,`div`,8),yT(111,`
            `),as(112,`c-stepper`,16),yT(113,`
              `),_C(114,be,6,4,null,null,CC),lu(),yT(116,`
          `),lu(),yT(117,`
        `),lu(),yT(118,`
      `),lu(),yT(119,`
    `),lu(),yT(120,`
  `),lu(),yT(121,`
`),lu(),zg(122,ge,17,11,`ng-template`,null,1,GT)(125,Ee,18,9,`ng-template`,null,2,GT)(128,he,15,8,`ng-template`,null,3,GT)),n&2){let c=GC(24),E=GC(123),ae=GC(126),oe=GC(129);ZD(28),pm(`ngTemplateOutlet`,E)(`ngTemplateOutletContext`,xT(8,$)),ZD(5),pm(`ngTemplateOutlet`,ae)(`ngTemplateOutletContext`,xT(9,$)),ZD(5),pm(`ngTemplateOutlet`,oe)(`ngTemplateOutletContext`,xT(10,$)),ZD(6),bC(c.finishing()?44:45),ZD(6),bC(c.finishing()?50:51),ZD(32),MC(m.labels),ZD(32),MC(m.steps())}},dependencies:[t2,t0,ao,fF,uI,h0,xc,uF,f0,cF,rF,g0,zC,oF,rn,pF,ro,oo,WM,c,$$1],encapsulation:2})}};export{re as SteppersComponent};