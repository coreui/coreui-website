import{b as k}from"./chunk-T34HXANW.js";import"./chunk-PMOGNWGV.js";import{a as D}from"./chunk-ZX4I2AKI.js";import{Mb as M,O as I,P as R,cb as B,eb as G,ma as w,na as A,qa as V}from"./chunk-KA3R4CT6.js";import"./chunk-MQBD4EFB.js";import{j as T}from"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Gc as b,Nb as u,Ob as v,Pb as S,Qb as o,Rb as t,Sb as n,Tb as r,bb as i,dc as g,mb as C,na as x,sb as s,sc as e,tc as _,va as h,xc as E,yc as y,zc as f}from"./chunk-H7BDVHMQ.js";import"./chunk-ZOGHMS73.js";var z=()=>["Very bad","Bad","Meh","Good","Very good"];function N(a,d){a&1&&(e(0,`
                `),x(),r(1,"svg",20),e(2,`
              `))}function P(a,d){a&1&&(e(0,`
                `),x(),r(1,"svg",21),e(2,`
              `))}function H(a,d){if(a&1&&(e(0,`
                  `),x(),r(1,"svg",23),e(2,`
                `)),a&2){let m=g().$implicit;i(),o("name",m)}}function O(a,d){if(a&1&&(e(0,`
                `),s(1,H,3,1,"ng-template",22),e(2,`
              `)),a&2){let m=d.$implicit;i(),o("cTemplateId",m)}}function q(a,d){if(a&1&&(e(0,`
                  `),x(),r(1,"svg",24),e(2,`
                `)),a&2){let m=g().$index,l=g();i(),o("name",l.icons[m])("ngClass",l.activeClass[m])}}function L(a,d){if(a&1&&(e(0,`
                `),s(1,q,3,2,"ng-template",22),e(2,`
              `)),a&2){let m=d.$implicit;i(),o("cTemplateId",m)}}var p=class p{constructor(){this.value=h(3);this.tooltips=["Very bad","Bad","Meh","Good","Very good"];this.icons=["cilMoodVeryBad","cilMoodBad","cilMeh","cilMoodGood","cilMoodVeryGood"];this.activeIcons=this.icons.map(d=>`active_${d}`);this.activeClass=["text-dark","text-danger","text-warning","text-info","text-success"]}};p.\u0275fac=function(m){return new(m||p)},p.\u0275cmp=C({type:p,selectors:[["app-ratings"]],decls:246,vars:17,consts:[["xs","12"],["href","forms/rating/"],[1,"mb-4"],[1,"text-body-secondary","small"],[1,"bg-body","border","rounded","p-3"],[3,"value"],["href","forms/rating/#read-only"],["readOnly","",3,"value"],["disabled","",3,"value"],["href","forms/rating/#tooltips"],[3,"tooltips","value"],["href","forms/rating/#precision"],["precision","0.25",3,"valueChange","value"],["itemCount","20",3,"value"],["itemCount","3",3,"value"],["href","forms/rating/#custom-icons"],["icon","iconTemplate","activeIcon","activeIconTemplate",3,"value"],["cTemplateId","iconTemplate"],["cTemplateId","activeIconTemplate"],["highlightOnlySelected","",3,"valueChange","value","activeIcon","icon","tooltips"],["cIcon","","name","cilHeart","size","lg"],["cIcon","","name","cilHeart","size","lg",1,"text-danger"],[3,"cTemplateId"],["cIcon","","size","xxl",3,"name"],["cIcon","","size","xxl",3,"name","ngClass"]],template:function(m,l){m&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),r(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular Rating Component"),n(),e(12,`
      `),n(),e(13,`
      `),t(14,"c-card-body"),e(15,`
        `),t(16,"p",3),e(17,`
          Embed the Rating component in your Angular application like this:
        `),n(),e(18,`
        `),t(19,"app-docs-example",1),e(20,`
          `),t(21,"div",4),e(22,`
            `),r(23,"c-rating",5),e(24,`
          `),n(),e(25,`
        `),n(),e(26,`
      `),n(),e(27,`
    `),n(),e(28,`
    `),t(29,"c-card",2),e(30,`
      `),t(31,"c-card-header"),e(32,`
        `),t(33,"strong"),e(34,"Angular Rating Component"),n(),e(35," "),t(36,"small"),e(37,"Readonly"),n(),e(38,`
      `),n(),e(39,`
      `),t(40,"c-card-body"),e(41,`
        `),t(42,"p",3),e(43,`
          Set the Angular Rating component to read-only by adding `),t(44,"code"),e(45,"readOnly"),n(),e(46,` property. This disables interaction, preventing users from changing the displayed rating value.
        `),n(),e(47,`
        `),t(48,"app-docs-example",6),e(49,`
          `),t(50,"div",4),e(51,`
            `),r(52,"c-rating",7),e(53,`
          `),n(),e(54,`
        `),n(),e(55,`
      `),n(),e(56,`
    `),n(),e(57,`
    `),t(58,"c-card",2),e(59,`
      `),t(60,"c-card-header"),e(61,`
        `),t(62,"strong"),e(63,"Angular Rating Component"),n(),e(64," "),t(65,"small"),e(66,"Disabled"),n(),e(67,`
      `),n(),e(68,`
      `),t(69,"c-card-body"),e(70,`
        `),t(71,"p",3),e(72,`
          Add the `),t(73,"code"),e(74,"disabled"),n(),e(75,` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.
        `),n(),e(76,`
        `),t(77,"app-docs-example",6),e(78,`
          `),t(79,"div",4),e(80,`
            `),r(81,"c-rating",8),e(82,`
          `),n(),e(83,`
        `),n(),e(84,`
      `),n(),e(85,`
    `),n(),e(86,`
    `),t(87,"c-card",2),e(88,`
      `),t(89,"c-card-header"),e(90,`
        `),t(91,"strong"),e(92,"Angular Rating Component"),n(),e(93," "),t(94,"small"),e(95,"Tooltips"),n(),e(96,`
      `),n(),e(97,`
      `),t(98,"c-card-body"),e(99,`
        `),t(100,"p",3),e(101,`
          Enable descriptive text on hover by adding `),t(102,"code"),e(103,"tooltips"),n(),e(104,` prop. This provides immediate feedback or guidance as the user interacts with the rating items.
        `),n(),e(105,`
        `),t(106,"app-docs-example",9),e(107,`
          `),t(108,"div",4),e(109,`
            `),r(110,"c-rating",10),e(111,`
          `),n(),e(112,`
        `),n(),e(113,`
        `),t(114,"p",3),e(115,`
          For custom messages, provide an array of labels corresponding to each rating value to enhance the user's understanding of each rating level.
        `),n(),e(116,`
        `),t(117,"app-docs-example",9),e(118,`
          `),t(119,"div",4),e(120,`
            `),r(121,"c-rating",10),e(122,`
          `),n(),e(123,`
        `),n(),e(124,`
      `),n(),e(125,`
    `),n(),e(126,`
    `),t(127,"c-card",2),e(128,`
      `),t(129,"c-card-header"),e(130,`
        `),t(131,"strong"),e(132,"Angular Rating Component"),n(),e(133," "),t(134,"small"),e(135,"Precision"),n(),e(136,`
      `),n(),e(137,`
      `),t(138,"c-card-body"),e(139,`
        `),t(140,"p",3),e(141,`
          Adjust the granularity of the Rating component by setting `),t(142,"code"),e(143,"precision"),n(),e(144,` prop. This attribute allows for fractional ratings, such as quarter values, to provide more precise feedback.
        `),n(),e(145,`
        `),t(146,"app-docs-example",11),e(147,`
          `),t(148,"div",4),e(149,`
            `),t(150,"c-rating",12),f("valueChange",function(c){return y(l.value,c)||(l.value=c),c}),n(),e(151,`
            `),t(152,"div"),e(153),n(),e(154,`
          `),n(),e(155,`
        `),n(),e(156,`
      `),n(),e(157,`
    `),n(),e(158,`
    `),t(159,"c-card",2),e(160,`
      `),t(161,"c-card-header"),e(162,`
        `),t(163,"strong"),e(164,"Angular Rating Component"),n(),e(165," "),t(166,"small"),e(167,"Number of items"),n(),e(168,`
      `),n(),e(169,`
      `),t(170,"c-card-body"),e(171,`
        `),t(172,"p",3),e(173,`
          Control the total number of rating items displayed by using `),t(174,"code"),e(175,"itemCount"),n(),e(176," property. You can create a Angular Rating component with a custom scale, be it larger for detailed assessments or smaller for simplicity. "),n(),e(177,`
        `),t(178,"app-docs-example",11),e(179,`
          `),t(180,"div",4),e(181,`
            `),r(182,"c-rating",13),e(183,`
            `),r(184,"br"),e(185,`
            `),r(186,"c-rating",14),e(187,`
          `),n(),e(188,`
        `),n(),e(189,`
      `),n(),e(190,`
    `),n(),e(191,`
    `),t(192,"c-card",2),e(193,`
      `),t(194,"c-card-header"),e(195,`
        `),t(196,"strong"),e(197,"Angular Rating Component"),n(),e(198," "),t(199,"small"),e(200,"Custom Icons"),n(),e(201,`
      `),n(),e(202,`
      `),t(203,"c-card-body"),e(204,`
        `),t(205,"p",3),e(206,`
          Customize the Angular Rating component with your choice of SVG icons by assigning new values to the `),t(207,"code"),e(208,"activeIcon"),n(),e(209," and "),t(210,"code"),e(211,"icon"),n(),e(212,` properties. This allows for a unique look tailored to the design language of your site or application.
        `),n(),e(213,`
        `),t(214,"app-docs-example",15),e(215,`
          `),t(216,"div",4),e(217,`
            `),t(218,"c-rating",16),e(219,`
              `),s(220,N,3,0,"ng-template",17),e(221,`
              `),s(222,P,3,0,"ng-template",18),e(223,`
            `),n(),e(224,`
          `),n(),e(225,`
        `),n(),e(226,`
        `),t(227,"p",3),e(228,`
          For a more dynamic experience, define different icons for each rating value, enhancing the visual feedback:
        `),n(),e(229,`
        `),t(230,"app-docs-example",15),e(231,`
          `),t(232,"div",4),e(233,`
            `),t(234,"c-rating",19),f("valueChange",function(c){return y(l.value,c)||(l.value=c),c}),e(235,`
              `),v(236,O,3,1,null,null,u),v(238,L,3,1,null,null,u),n(),e(240,`
          `),n(),e(241,`
        `),n(),e(242,`
      `),n(),e(243,`
    `),n(),e(244,`
  `),n(),e(245,`
`),n()),m&2&&(i(23),o("value",3),i(29),o("value",3),i(29),o("value",3),i(29),o("tooltips",!0)("value",3),i(11),o("tooltips",b(16,z))("value",3),i(29),E("value",l.value),i(3),_(l.value()),i(29),o("value",7),i(4),o("value",1),i(32),o("value",3),i(16),E("value",l.value),o("activeIcon",l.activeIcons)("icon",l.icons)("tooltips",l.tooltips),i(2),S(l.icons),i(2),S(l.activeIcons))},dependencies:[A,w,V,B,D,k,G,M,R,I,T],encapsulation:2});var F=p;export{F as RatingsComponent};
