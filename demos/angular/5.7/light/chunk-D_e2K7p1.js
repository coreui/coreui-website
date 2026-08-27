import{$n as eb,Gn as cm,Ii as zw,Ir as nm,Jt as Ug,K as Ib,Ot as Qg,Rn as bm,Rr as nu,Ut as TV,Vt as TC,W as IC,Y as Ii,Yn as db,Yr as rC,_i as vD,bi as vb,ct as Kd,fn as Yd,g as Cg,on as XT,ot as KT,qr as qg,ri as rs,rn as Wg,tn as Wb,un as YT,ur as ib,ut as Kr,vn as ZT}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$n as ux,$t as dF,An as oF,Bn as rF,Mr as Zt,Mt as Ws,Ot as Vm,Qn as uf,R as JS,St as Tm,Yn as uF,Zt as cf,an as fF,bn as lF,ht as Ro,lt as Po,qn as tV,tn as df,yn as ko}from"./main-RXY3QHRW.js";import{t as I}from"./chunk-qhKdfsh5.js";import"./chunk-CK1Hsjt6.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-Bnx73FUd.js";var pe=[`stepTpl`];var $=()=>({$implicit:1});var le=()=>({$implicit:2});function me(r,p){r&1&&Qg(0)}function ce(r,p){r&1&&Qg(0)}function se(r,p){r&1&&Qg(0)}function de(r,p){if(r&1){let n=ib();Wb(0,`
              `),rs(1,`button`,17),nm(`click`,function(){Yd(n),db();return Kd(Ib(24).reset())}),Wb(2,`Reset`),nu(),Wb(3,`
            `)}}function ue(r,p){if(r&1){let n=ib();Wb(0,`
                `),rs(1,`button`,18),nm(`click`,function(){Yd(n),db(2);return Kd(Ib(24).prev())}),Wb(2,`Prev`),nu(),Wb(3,`
              `)}}function xe(r,p){if(r&1){let n=ib();Wb(0,`
                `),rs(1,`button`,19),nm(`click`,function(){Yd(n),db(2);return Kd(Ib(24).next())}),Wb(2,`Next`),nu(),Wb(3,`
              `)}}function _e(r,p){if(r&1){let n=ib();Wb(0,`
                `),rs(1,`button`,20),nm(`click`,function(){Yd(n),db(2);return Kd(Ib(24).finish())}),Wb(2,`Finish`),nu(),Wb(3,`
              `)}}function ye(r,p){if(r&1&&(Wb(0,`
              `),ZT(1,ue,4,0),ZT(2,xe,4,0),ZT(3,_e,4,0)),r&2){db();let n=Ib(24);vD(),YT(n.activeStepIndex()>0?1:-1),vD(),YT(n.activeStepIndex()<n.stepsCount()-1?2:-1),vD(),YT(n.activeStepIndex()===n.stepsCount()-1?3:-1)}}function fe(r,p){r&1&&Wb(0,`
                All steps have been completed.
              `)}function Ce(r,p){if(r&1&&Wb(0),r&2){db();let n=Ib(24);bm(`
                current step: `,n.activeStepIndex()+1,` / `,n.stepsCount(),`
              `)}}function Se(r,p){if(r&1&&(Wb(0,`
                `),qg(1,`c-stepper-step`,21),Wb(2,`
              `)),r&2){let n=p.$implicit;vD(),Wg(`label`,n)}}function ve(r,p){r&1&&Qg(0)}function be(r,p){if(r&1&&(Wb(0,`
                `),rs(1,`c-stepper-step`,21),Wb(2,`
                  `),Cg(3,ve,1,0,`ng-container`,11),Wb(4,`
                `),nu(),Wb(5,`
              `)),r&2){let n=p.$implicit;vD(),Wg(`label`,n.label),vD(2),Wg(`ngTemplateOutlet`,n.template)(`ngTemplateOutletContext`,rC(3,le))}}function ge(r,p){if(r&1&&(rs(0,`form`,22)(1,`c-row`,23)(2,`c-col`,24)(3,`label`,25),Wb(4,`First name`),nu(),qg(5,`input`,26),nu(),rs(6,`c-col`,24)(7,`label`,25),Wb(8,`Last name`),nu(),qg(9,`input`,26),nu(),rs(10,`c-col`,24)(11,`label`,25),Wb(12,`Username`),nu(),rs(13,`c-input-group`)(14,`span`,27),Wb(15,`@`),nu(),qg(16,`input`,28),nu()()()()),r&2){let n=p.$implicit;vD(2),Wg(`md`,4),vD(),Wg(`for`,`userFirstName-0${n}`),vD(2),Wg(`id`,`userFirstName-0${n}`),vD(),Wg(`md`,4),vD(),Wg(`for`,`userLastName-0${n}`),vD(2),Wg(`id`,`userLastName-0${n}`),vD(),Wg(`md`,4),vD(),Wg(`for`,`userName-0${n}`),vD(3),Wg(`id`,`basic-addon-0${n}`),vD(2),Wg(`id`,`userName-0${n}`),Ug(`aria-describedby`,`basic-addon-0${n}`)}}function Ee(r,p){if(r&1&&(rs(0,`form`,22)(1,`c-row`,23)(2,`c-col`,24)(3,`label`,25),Wb(4,`City`),nu(),qg(5,`input`,26),nu(),rs(6,`c-col`,24)(7,`label`,25),Wb(8,`State`),nu(),rs(9,`select`,29)(10,`option`),Wb(11,`Choose...`),nu(),rs(12,`option`,30),Wb(13,`...`),nu()()(),rs(14,`c-col`,24)(15,`label`,25),Wb(16,`Zip`),nu(),qg(17,`input`,26),nu()()()),r&2){let n=p.$implicit;vD(2),Wg(`md`,6),vD(),Wg(`for`,`userCity-0${n}`),vD(2),Wg(`id`,`userCity-0${n}`),vD(),Wg(`md`,3),vD(),Wg(`for`,`userState-0${n}`),vD(2),Wg(`id`,`userState-0${n}`),vD(5),Wg(`md`,3),vD(),Wg(`for`,`userZip-0${n}`),vD(2),Wg(`id`,`userZip-0${n}`)}}function he(r,p){if(r&1&&(rs(0,`form`,22)(1,`c-row`,31)(2,`c-col`,24)(3,`label`,25),Wb(4,`Email`),nu(),qg(5,`input`,32),nu(),rs(6,`c-col`,24)(7,`label`,25),Wb(8,`Password`),nu(),qg(9,`input`,33),nu(),rs(10,`c-col`)(11,`c-form-check`),qg(12,`input`,34),rs(13,`label`,35),Wb(14,`Agree to terms and conditions`),nu()()()()()),r&2){let n=p.$implicit;vD(2),Wg(`md`,6),vD(),Wg(`for`,`userEmail-0${n}`),vD(2),Wg(`id`,`userEmail-0${n}`),vD(),Wg(`md`,6),vD(),Wg(`for`,`userPassword-0${n}`),vD(2),Wg(`id`,`userPassword-0${n}`),vD(3),Wg(`id`,`userAgree-0${n}`),vD(),Wg(`for`,`userAgree-0${n}`)}}var re=class r{constructor(){this.finished=Ii(!1);this.labels=[`Step 1`,`Step 2`,`Step 3`];this.stepTemplates=TV(`stepTpl`,{read:Kr});this.steps=TC(()=>this.stepTemplates().map((n,m)=>({label:`Step ${m+1}`,template:n})))}handleReset(){console.log(`- handleReset`),this.finished.set(!1)}handleFinish(p){console.log(`- handleFinish`,p),this.finished.set(p)}static{this.ɵfac=function(n){return new(n||r)}}static{this.ɵcmp=zw({type:r,selectors:[[`app-steppers`]],viewQuery:function(n,m){n&1&&cm(m.stepTemplates,pe,5,Kr),n&2&&vb()},decls:131,vars:11,consts:[[`stepper`,``],[`step1`,``,`stepTpl`,``],[`step2`,``,`stepTpl`,``],[`step3`,``,`stepTpl`,``],[`xs`,`12`],[`href`,`forms/stepper/`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[1,`bg-body`,`border`,`rounded`,`p-3`],[3,`finished`,`onReset`],[`label`,`Step 1`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`label`,`Step 2`],[`href`,`forms/stepper/#vertical-indicator`],[`stepButtonLayout`,`vertical`],[`href`,`forms/stepper/#vertical-layout`],[`layout`,`vertical`],[`cButton`,``,`color`,`danger`,3,`click`],[`cButton`,``,`color`,`secondary`,3,`click`],[`cButton`,``,`color`,`primary`,3,`click`],[`color`,`warning`,`cButton`,``,3,`click`],[3,`label`],[`cForm`,``],[1,`g-3`,`pb-5`],[3,`md`],[`cLabel`,``,3,`for`],[`cFormControl`,``,3,`id`],[`cInputGroupText`,``,3,`id`],[`aria-label`,`Username`,`autocomplete`,`off`,`cFormControl`,``,`placeholder`,`Username`,3,`id`],[`aria-label`,`State select`,`cSelect`,``,3,`id`],[`value`,`1`],[1,`g-3`,`pb-1`],[`cFormControl`,``,`type`,`email`,`autocomplete`,`email`,3,`id`],[`autocomplete`,`new-password`,`cFormPassword`,``,3,`id`],[`cFormCheckInput`,``,`required`,``,`type`,`checkbox`,3,`id`],[`cFormCheckLabel`,``,3,`for`]],template:function(n,m){if(n&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,4),Wb(3,`
    `),qg(4,`app-docs-components`,5),Wb(5,`
    `),rs(6,`c-card`,6),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Stepper Component`),nu(),Wb(12,`
      `),nu(),Wb(13,`
      `),rs(14,`c-card-body`),Wb(15,`
        `),rs(16,`p`,7),Wb(17,`
          The Angular Stepper component helps you build intuitive, multi-step form experiences (Form Wizards) for your Angular applications. It supports horizontal and vertical layouts, built-in form validation, custom indicators, and seamless integration with any Angular forms.
        `),nu(),Wb(18,`
        `),rs(19,`app-docs-example`,5),Wb(20,`
          `),rs(21,`div`,8),Wb(22,`
            `),rs(23,`c-stepper`,9,0),nm(`finished`,function(E){return m.handleFinish(E)})(`onReset`,function(){return m.handleReset()}),Wb(25,`
              `),rs(26,`c-stepper-step`,10),Wb(27,`
                `),Cg(28,me,1,0,`ng-container`,11),Wb(29,`
              `),nu(),Wb(30,`
              `),rs(31,`c-stepper-step`,12),Wb(32,`
                `),Cg(33,ce,1,0,`ng-container`,11),Wb(34,`
              `),nu(),Wb(35,`
              `),rs(36,`c-stepper-step`,12),Wb(37,`
                `),Cg(38,se,1,0,`ng-container`,11),Wb(39,`
              `),nu(),Wb(40,`
            `),nu(),Wb(41,`
            `),qg(42,`hr`),Wb(43,`
            `),ZT(44,de,4,0)(45,ye,4,3),qg(46,`hr`),Wb(47,`
            `),rs(48,`p`),Wb(49,`
              `),ZT(50,fe,1,0)(51,Ce,1,2),nu(),Wb(52,`
          `),nu(),Wb(53,`
        `),nu(),Wb(54,`
      `),nu(),Wb(55,`
    `),nu(),Wb(56,`
    `),rs(57,`c-card`,6),Wb(58,`
      `),rs(59,`c-card-header`),Wb(60,`
        `),rs(61,`strong`),Wb(62,`Angular Stepper Component`),nu(),Wb(63,` `),rs(64,`small`),Wb(65,`Vertical indicator`),nu(),Wb(66,`
      `),nu(),Wb(67,`
      `),rs(68,`c-card-body`),Wb(69,`
        `),rs(70,`p`,7),Wb(71,`
          Display step indicators vertically above the labels using the `),rs(72,`code`),Wb(73,`stepButtonLayout="vertical"`),nu(),Wb(74,` prop.
        `),nu(),Wb(75,`
        `),rs(76,`app-docs-example`,13),Wb(77,`
          `),rs(78,`div`,8),Wb(79,`
            `),rs(80,`c-stepper`,14),Wb(81,`
              `),XT(82,Se,3,1,null,null,KT),nu(),Wb(84,`
          `),nu(),Wb(85,`
        `),nu(),Wb(86,`
      `),nu(),Wb(87,`
    `),nu(),Wb(88,`
    `),rs(89,`c-card`,6),Wb(90,`
      `),rs(91,`c-card-header`),Wb(92,`
        `),rs(93,`strong`),Wb(94,`Angular Stepper Component`),nu(),Wb(95,` `),rs(96,`small`),Wb(97,`Vertical indicator`),nu(),Wb(98,`
      `),nu(),Wb(99,`
      `),rs(100,`c-card-body`),Wb(101,`
        `),rs(102,`p`,7),Wb(103,`
          By using the `),rs(104,`code`),Wb(105,`layout="vertical"`),nu(),Wb(106,` prop, both the step indicators and the step content are stacked vertically. This layout is ideal for mobile devices or designs where vertical flow is preferred in a top-to-bottom progression. `),nu(),Wb(107,`
        `),rs(108,`app-docs-example`,15),Wb(109,`
          `),rs(110,`div`,8),Wb(111,`
            `),rs(112,`c-stepper`,16),Wb(113,`
              `),XT(114,be,6,4,null,null,KT),nu(),Wb(116,`
          `),nu(),Wb(117,`
        `),nu(),Wb(118,`
      `),nu(),Wb(119,`
    `),nu(),Wb(120,`
  `),nu(),Wb(121,`
`),nu(),Cg(122,ge,17,11,`ng-template`,null,1,IC)(125,Ee,18,9,`ng-template`,null,2,IC)(128,he,15,8,`ng-template`,null,3,IC)),n&2){let c=Ib(24),E=Ib(123),oe=Ib(126),ae=Ib(129);vD(28),Wg(`ngTemplateOutlet`,E)(`ngTemplateOutletContext`,rC(8,$)),vD(5),Wg(`ngTemplateOutlet`,oe)(`ngTemplateOutletContext`,rC(9,$)),vD(5),Wg(`ngTemplateOutlet`,ae)(`ngTemplateOutletContext`,rC(10,$)),vD(6),YT(c.finishing()?44:45),vD(6),YT(c.finishing()?50:51),vD(32),eb(m.labels),vD(32),eb(m.steps())}},dependencies:[tV,Vm,ko,fF,ux,df,Ws,dF,uf,lF,rF,cf,Tm,oF,Zt,uF,Po,Ro,JS,c,I],encapsulation:2})}};export{re as SteppersComponent};