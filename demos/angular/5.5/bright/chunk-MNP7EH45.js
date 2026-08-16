import{b as V}from"./chunk-6Y527V6N.js";import"./chunk-PMOGNWGV.js";import{a as h}from"./chunk-ZX4I2AKI.js";import{db as L,fb as T,na as k,nb as v,oa as B,ra as $}from"./chunk-YI43TGSZ.js";import"./chunk-MQBD4EFB.js";import"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Nb as p,Ob as _,Pb as u,Qb as g,Rb as e,Sb as n,Tb as w,Xb as C,bb as c,bc as b,dc as s,la as m,ma as x,mb as S,nc as E,sc as t,uc as y}from"./chunk-H7BDVHMQ.js";import"./chunk-ZOGHMS73.js";function I(a,o){if(a&1){let i=C();t(0,`
              `),e(1,"c-col",8),t(2,`
                `),e(3,"button",9),b("click",function(){let l=m(i).$index,d=s();return x(d.onClick(l))}),t(4,`
                  Submit
                `),n(),t(5,`
              `),n(),t(6,`
            `)}if(a&2){let i=o.$implicit,r=o.$index,l=s();c(3),g("color",i)("loading",l.loading[r])}}function D(a,o){if(a&1){let i=C();t(0,`
              `),e(1,"c-col",8),t(2,`
                `),e(3,"button",10,0),b("click",function(){let l=m(i).$index,d=s();return x(d.onClick(l+6))}),t(5),n(),t(6,`
              `),n(),t(7,`
            `)}if(a&2){let i=o.$implicit,r=o.$index,l=E(4),d=s();c(3),g("color",i)("loading",d.loading[r+6]),c(2),y(`
                  `,l.loading?"Cancel":"Upload",`
                `)}}function A(a,o){if(a&1){let i=C();t(0,`
              `),e(1,"c-col",8),t(2,`
                `),e(3,"button",11),b("click",function(){let l=m(i).$index,d=s();return x(d.onClick(l+12))}),t(4,`
                  Submit
                `),n(),t(5,`
              `),n(),t(6,`
            `)}if(a&2){let i=o.$implicit,r=o.$index,l=s();c(3),g("color",i)("loading",l.loading[r+12])}}function M(a,o){if(a&1){let i=C();t(0,`
              `),e(1,"c-col",8),t(2,`
                `),e(3,"button",12),b("click",function(){let l=m(i).$index,d=s();return x(d.onClick(l+18))}),t(4,`
                  Submit
                `),n(),t(5,`
              `),n(),t(6,`
            `)}if(a&2){let i=o.$implicit,r=o.$index,l=s();c(3),g("color",i)("loading",l.loading[r+18])}}function N(a,o){if(a&1){let i=C();t(0,`
              `),e(1,"c-col",8),t(2,`
                `),e(3,"button",13),b("click",function(){let l=m(i).$index,d=s();return x(d.onClick(l+24))}),t(4,`Submit
                `),n(),t(5,`
              `),n(),t(6,`
            `)}if(a&2){let i=o.$implicit,r=o.$index,l=s();c(3),g("color",i)("loading",l.loading[r+24])}}function O(a,o){if(a&1){let i=C();t(0,`
              `),e(1,"c-col",8),t(2,`
                `),e(3,"button",14),b("click",function(){let l=m(i).$index,d=s();return x(d.onClick(l+30))}),t(4,`Submit
                `),n(),t(5,`
              `),n(),t(6,`
            `)}if(a&2){let i=o.$implicit,r=o.$index,l=s();c(3),g("color",i)("loading",l.loading[r+30])}}var f=class f{constructor(){this.states=["normal","active","disabled"];this.colors=["primary","secondary","success","danger","warning","info"];this.loading=new Array(36)}onClick(o){this.loading[o]?(clearTimeout(this.loading[o]),this.loading[o]=void 0):this.loading[o]=setTimeout(()=>{this.loading[o]=void 0},3e3)}};f.\u0275fac=function(i){return new(i||f)},f.\u0275cmp=S({type:f,selectors:[["app-loading-buttons"]],decls:76,vars:0,consts:[["btn",""],["xs","12"],["href","components/loading-button","title","Loading Button"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/loading-button"],[1,"py-4","text-center"],["href","components/loading-button#grow"],["lg","2","md","4","sm","6","xs","12",1,"mb-1"],["cLoadingButton","","disabledOnLoading","",3,"click","color","loading"],["cLoadingButton","","variant","outline",3,"click","color","loading"],["cLoadingButton","","variant","ghost","disabledOnLoading","",3,"click","color","loading"],["cLoadingButton","","spinnerType","grow",3,"click","color","loading"],["cLoadingButton","","spinnerType","grow","variant","outline",3,"click","color","loading"],["cLoadingButton","","spinnerType","grow","variant","ghost",3,"click","color","loading"]],template:function(i,r){i&1&&(e(0,"c-row"),t(1,`
  `),e(2,"c-col",1),t(3,`
    `),w(4,"app-docs-components",2),t(5,`
    `),e(6,"c-card",3),t(7,`
      `),e(8,"c-card-header"),t(9,`
        `),e(10,"strong"),t(11,"Angular Loading Button"),n(),t(12," "),e(13,"small"),t(14,"border spinner"),n(),t(15,`
      `),n(),t(16,`
      `),e(17,"c-card-body"),t(18,`
        `),e(19,"p",4),t(20,`
          CoreUI includes a buttons with built-in loading indicators. Indicate the loading state
          of the button bridging the gap between action and feedback..
        `),n(),t(21,`
        `),e(22,"app-docs-example",5),t(23,`
          `),e(24,"c-row",6),t(25,`
            `),_(26,I,7,2,null,null,p),n(),t(28,`
          `),e(29,"c-row",6),t(30,`
            `),_(31,D,8,3,null,null,p),n(),t(33,`
          `),e(34,"c-row",6),t(35,`
            `),_(36,A,7,2,null,null,p),n(),t(38,`
        `),n(),t(39,`
      `),n(),t(40,`
    `),n(),t(41,`
    `),e(42,"c-card",3),t(43,`
      `),e(44,"c-card-header"),t(45,`
        `),e(46,"strong"),t(47,"Angular Loading Button"),n(),t(48," "),e(49,"small"),t(50,"grow spinner"),n(),t(51,`
      `),n(),t(52,`
      `),e(53,"c-card-body"),t(54,`
        `),e(55,"app-docs-example",7),t(56,`
          `),e(57,"c-row",6),t(58,`
            `),_(59,M,7,2,null,null,p),n(),t(61,`
          `),e(62,"c-row",6),t(63,`
            `),_(64,N,7,2,null,null,p),n(),t(66,`
          `),e(67,"c-row",6),t(68,`
            `),_(69,O,7,2,null,null,p),n(),t(71,`
        `),n(),t(72,`
      `),n(),t(73,`
    `),n(),t(74,`
  `),n(),t(75,`
`),n()),i&2&&(c(26),u(r.colors),c(5),u(r.colors),c(5),u(r.colors),c(23),u(r.colors),c(5),u(r.colors),c(5),u(r.colors))},dependencies:[T,L,k,$,B,V,v,h],encapsulation:2});var F=f;export{F as LoadingButtonsComponent};
