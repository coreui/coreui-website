import{$ as JT,$n as eb,Ii as zw,Ir as nm,K as Ib,Pn as au,Rr as nu,Y as Ii,Yn as db,_i as vD,ct as Kd,fn as Yd,on as XT,qr as qg,ri as rs,rn as Wg,tn as Wb,ur as ib}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$n as ux,R as JS,_ as DF,an as fF,ht as Ro,lt as Po}from"./main-Y5RAXDU4.js";import{t as I$1}from"./chunk-R1evmDaG.js";import"./chunk-0pkcKAlv.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-DhE_7l2Q.js";function I(c,r){if(c&1){let t=ib();Wb(0,`
              `),rs(1,`c-col`,8),Wb(2,`
                `),rs(3,`button`,9),nm(`click`,function(){let a=Yd(t).$index;return Kd(db().onClick(a))}),Wb(4,`
                  Submit
                `),nu(),Wb(5,`
              `),nu(),Wb(6,`
            `)}if(c&2){let t=r.$implicit,o=r.$index,a=db();vD(),Wg(`lg`,2)(`md`,4)(`sm`,6)(`xs`,12),vD(2),Wg(`color`,t)(`loading`,a.loading()[o])}}function D(c,r){if(c&1){let t=ib();Wb(0,`
              `),rs(1,`c-col`,8),Wb(2,`
                `),rs(3,`button`,10,0),nm(`click`,function(){let a=Yd(t).$index;return Kd(db().onClick(a+6))}),Wb(5),nu(),Wb(6,`
              `),nu(),Wb(7,`
            `)}if(c&2){let t=r.$implicit,o=r.$index,a=Ib(4),m=db();vD(),Wg(`lg`,2)(`md`,4)(`sm`,6)(`xs`,12),vD(2),Wg(`color`,t)(`loading`,m.loading()[o+6]),vD(2),au(`
                  `,a.loading()?`Cancel`:`Upload`,`
                `)}}function A(c,r){if(c&1){let t=ib();Wb(0,`
              `),rs(1,`c-col`,8),Wb(2,`
                `),rs(3,`button`,11),nm(`click`,function(){let a=Yd(t).$index;return Kd(db().onClick(a+12))}),Wb(4,`
                  Submit
                `),nu(),Wb(5,`
              `),nu(),Wb(6,`
            `)}if(c&2){let t=r.$implicit,o=r.$index,a=db();vD(),Wg(`lg`,2)(`md`,4)(`sm`,6)(`xs`,12),vD(2),Wg(`color`,t)(`loading`,a.loading()[o+12])}}function M(c,r){if(c&1){let t=ib();Wb(0,`
              `),rs(1,`c-col`,8),Wb(2,`
                `),rs(3,`button`,12),nm(`click`,function(){let a=Yd(t).$index;return Kd(db().onClick(a+18))}),Wb(4,`
                  Submit
                `),nu(),Wb(5,`
              `),nu(),Wb(6,`
            `)}if(c&2){let t=r.$implicit,o=r.$index,a=db();vD(),Wg(`lg`,2)(`md`,4)(`sm`,6)(`xs`,12),vD(2),Wg(`color`,t)(`loading`,a.loading()[o+18])}}function N(c,r){if(c&1){let t=ib();Wb(0,`
              `),rs(1,`c-col`,8),Wb(2,`
                `),rs(3,`button`,13),nm(`click`,function(){let a=Yd(t).$index;return Kd(db().onClick(a+24))}),Wb(4,`Submit
                `),nu(),Wb(5,`
              `),nu(),Wb(6,`
            `)}if(c&2){let t=r.$implicit,o=r.$index,a=db();vD(),Wg(`lg`,2)(`md`,4)(`sm`,6)(`xs`,12),vD(2),Wg(`color`,t)(`loading`,a.loading()[o+24])}}function O(c,r){if(c&1){let t=ib();Wb(0,`
              `),rs(1,`c-col`,8),Wb(2,`
                `),rs(3,`button`,14),nm(`click`,function(){let a=Yd(t).$index;return Kd(db().onClick(a+30))}),Wb(4,`Submit
                `),nu(),Wb(5,`
              `),nu(),Wb(6,`
            `)}if(c&2){let t=r.$implicit,o=r.$index,a=db();vD(),Wg(`lg`,2)(`md`,4)(`sm`,6)(`xs`,12),vD(2),Wg(`color`,t)(`loading`,a.loading()[o+30])}}var F=class c$1{constructor(){this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`];this.loading=Ii(new Array(36))}onClick(r){this.loading()[r]?(clearTimeout(this.loading()[r]),this.loading.update(t=>(t[r]=void 0,[...t]))):this.loading.update(t=>(t[r]=setTimeout(()=>{this.loading.update(o=>(o[r]=void 0,[...o]))},3e3),t))}static{this.ɵfac=function(t){return new(t||c$1)}}static{this.ɵcmp=zw({type:c$1,selectors:[[`app-loading-buttons`]],decls:76,vars:1,consts:[[`btn`,``],[3,`xs`],[`href`,`components/loading-button`,`title`,`Loading Button`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/loading-button`],[1,`py-4`,`text-center`],[`href`,`components/loading-button#grow`],[1,`mb-1`,3,`lg`,`md`,`sm`,`xs`],[`cLoadingButton`,``,`disabledOnLoading`,``,3,`click`,`color`,`loading`],[`cLoadingButton`,``,`variant`,`outline`,3,`click`,`color`,`loading`],[`cLoadingButton`,``,`variant`,`ghost`,`disabledOnLoading`,``,3,`click`,`color`,`loading`],[`cLoadingButton`,``,`spinnerType`,`grow`,3,`click`,`color`,`loading`],[`cLoadingButton`,``,`spinnerType`,`grow`,`variant`,`outline`,3,`click`,`color`,`loading`],[`cLoadingButton`,``,`spinnerType`,`grow`,`variant`,`ghost`,3,`click`,`color`,`loading`]],template:function(t,o){t&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,1),Wb(3,`
    `),qg(4,`app-docs-components`,2),Wb(5,`
    `),rs(6,`c-card`,3),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Loading Button`),nu(),Wb(12,` `),rs(13,`small`),Wb(14,`border spinner`),nu(),Wb(15,`
      `),nu(),Wb(16,`
      `),rs(17,`c-card-body`),Wb(18,`
        `),rs(19,`p`,4),Wb(20,`
          CoreUI includes a buttons with built-in loading indicators. Indicate the loading state
          of the button bridging the gap between action and feedback..
        `),nu(),Wb(21,`
        `),rs(22,`app-docs-example`,5),Wb(23,`
          `),rs(24,`c-row`,6),Wb(25,`
            `),XT(26,I,7,6,null,null,JT),nu(),Wb(28,`
          `),rs(29,`c-row`,6),Wb(30,`
            `),XT(31,D,8,7,null,null,JT),nu(),Wb(33,`
          `),rs(34,`c-row`,6),Wb(35,`
            `),XT(36,A,7,6,null,null,JT),nu(),Wb(38,`
        `),nu(),Wb(39,`
      `),nu(),Wb(40,`
    `),nu(),Wb(41,`
    `),rs(42,`c-card`,3),Wb(43,`
      `),rs(44,`c-card-header`),Wb(45,`
        `),rs(46,`strong`),Wb(47,`Angular Loading Button`),nu(),Wb(48,` `),rs(49,`small`),Wb(50,`grow spinner`),nu(),Wb(51,`
      `),nu(),Wb(52,`
      `),rs(53,`c-card-body`),Wb(54,`
        `),rs(55,`app-docs-example`,7),Wb(56,`
          `),rs(57,`c-row`,6),Wb(58,`
            `),XT(59,M,7,6,null,null,JT),nu(),Wb(61,`
          `),rs(62,`c-row`,6),Wb(63,`
            `),XT(64,N,7,6,null,null,JT),nu(),Wb(66,`
          `),rs(67,`c-row`,6),Wb(68,`
            `),XT(69,O,7,6,null,null,JT),nu(),Wb(71,`
        `),nu(),Wb(72,`
      `),nu(),Wb(73,`
    `),nu(),Wb(74,`
  `),nu(),Wb(75,`
`),nu()),t&2&&(vD(2),Wg(`xs`,12),vD(24),eb(o.colors),vD(5),eb(o.colors),vD(5),eb(o.colors),vD(23),eb(o.colors),vD(5),eb(o.colors),vD(5),eb(o.colors))},dependencies:[fF,ux,Ro,JS,Po,I$1,DF,c],encapsulation:2})}};export{F as LoadingButtonsComponent};