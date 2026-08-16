import{b as k}from"./chunk-XV3ZXLSP.js";import"./chunk-PMOGNWGV.js";import{a as b}from"./chunk-ZX4I2AKI.js";import{Eb as g,Fb as v,Gb as y,db as S,fb as E,k as p,na as c,oa as s,ra as u}from"./chunk-YI43TGSZ.js";import"./chunk-MQBD4EFB.js";import"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Gc as r,Qb as a,Rb as t,Sb as n,Tb as d,bb as i,mb as x,sc as e}from"./chunk-H7BDVHMQ.js";import"./chunk-ZOGHMS73.js";var l=()=>[],m=class m{};m.\u0275fac=function(o){return new(o||m)},m.\u0275cmp=x({type:m,selectors:[["app-paginations"]],decls:413,vars:74,consts:[["xs","12"],["href","components/pagination","title","Pagination"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/pagination"],["aria-label","Page navigation example"],["cPageLink","",3,"routerLink"],["href","components/pagination#working-with-icons"],["aria-label","Previous"],["aria-hidden","true"],["aria-label","Next"],["href","components/pagination#disabled-and-active-states"],["aria-label","Previous",3,"disabled"],[3,"active"],["href","components/pagination#sizing"],["aria-label","Page navigation example","size","lg"],["aria-label","Page navigation example","size","sm"],["href","https://coreui.io/docs/utilities/flex/"],["href","components/pagination#aligment"],["align","center","aria-label","Page navigation example"],[3,"disabled"],["align","end","aria-label","Page navigation example"]],template:function(o,L){o&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),d(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular Pagination"),n(),e(12,`
      `),n(),e(13,`
      `),t(14,"c-card-body"),e(15,`
        `),t(16,"p",3),e(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),t(18,"code"),e(19,"<nav>"),n(),e(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),n(),e(21,`
        `),t(22,"p",3),e(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),t(24,"code"),e(25,"aria-label"),n(),e(26,` for the
          `),t(27,"code"),e(28,"<nav>"),n(),e(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),t(30,"code"),e(31,'aria-label="Search results pages"'),n(),e(32,`.
        `),n(),e(33,`
        `),t(34,"app-docs-example",4),e(35,`
          `),t(36,"c-pagination",5),e(37,`
            `),t(38,"c-page-item"),e(39,`
              `),t(40,"a",6),e(41,"Previous"),n(),e(42,`
            `),n(),e(43,`
            `),t(44,"c-page-item"),e(45,`
              `),t(46,"a",6),e(47,"1"),n(),e(48,`
            `),n(),e(49,`
            `),t(50,"c-page-item"),e(51,`
              `),t(52,"a",6),e(53,"2"),n(),e(54,`
            `),n(),e(55,`
            `),t(56,"c-page-item"),e(57,`
              `),t(58,"a",6),e(59,"3"),n(),e(60,`
            `),n(),e(61,`
            `),t(62,"c-page-item"),e(63,`
              `),t(64,"a",6),e(65,"Next"),n(),e(66,`
            `),n(),e(67,`
          `),n(),e(68,`
        `),n(),e(69,`
      `),n(),e(70,`
    `),n(),e(71,`
  `),n(),e(72,`
  `),t(73,"c-col",0),e(74,`
    `),t(75,"c-card",2),e(76,`
      `),t(77,"c-card-header"),e(78,`
        `),t(79,"strong"),e(80,"Angular Pagination"),n(),e(81," "),t(82,"small"),e(83,"Working with icons"),n(),e(84,`
      `),n(),e(85,`
      `),t(86,"c-card-body"),e(87,`
        `),t(88,"p",3),e(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),t(90,"code"),e(91,"aria"),n(),e(92,` attributes.
        `),n(),e(93,`
        `),t(94,"app-docs-example",7),e(95,`
          `),t(96,"c-pagination",5),e(97,`
            `),t(98,"c-page-item",8),e(99,`
              `),t(100,"a",6)(101,"span",9),e(102,"\xAB"),n()(),e(103,`
            `),n(),e(104,`
            `),t(105,"c-page-item"),e(106,`
              `),t(107,"a",6),e(108,"1"),n(),e(109,`
            `),n(),e(110,`
            `),t(111,"c-page-item"),e(112,`
              `),t(113,"a",6),e(114,"2"),n(),e(115,`
            `),n(),e(116,`
            `),t(117,"c-page-item"),e(118,`
              `),t(119,"a",6),e(120,"3"),n(),e(121,`
            `),n(),e(122,`
            `),t(123,"c-page-item",10),e(124,`
              `),t(125,"a",6)(126,"span",9),e(127,"\xBB"),n()(),e(128,`
            `),n(),e(129,`
          `),n(),e(130,`
        `),n(),e(131,`
      `),n(),e(132,`
    `),n(),e(133,`
  `),n(),e(134,`
  `),t(135,"c-col",0),e(136,`
    `),t(137,"c-card",2),e(138,`
      `),t(139,"c-card-header"),e(140,`
        `),t(141,"strong"),e(142,"Angular Pagination"),n(),e(143," "),t(144,"small"),e(145,"Disabled and active states"),n(),e(146,`
      `),n(),e(147,`
      `),t(148,"c-card-body"),e(149,`
        `),t(150,"p",3),e(151,`
          Pagination links are customizable for different circumstances. Use
          `),t(152,"code"),e(153,"disabled"),n(),e(154," for links that appear un-clickable and "),t(155,"code"),e(156,".active"),n(),e(157,` to
          indicate the current page.
        `),n(),e(158,`
        `),t(159,"p",3),e(160,`
          While the `),t(161,"code"),e(162,"disabled"),n(),e(163," prop uses "),t(164,"code"),e(165,"pointer-events: none"),n(),e(166,` to
          `),t(167,"em"),e(168,"try"),n(),e(169," to disable the link functionality of "),t(170,"code"),e(171,"<a>"),n(),e(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),t(173,"code"),e(174,'tabindex="-1"'),n(),e(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),n(),e(176,`
        `),t(177,"app-docs-example",11),e(178,`
          `),t(179,"c-pagination",5),e(180,`
            `),t(181,"c-page-item",12),e(182,`
              `),t(183,"a",6)(184,"span",9),e(185,"\xAB"),n()(),e(186,`
            `),n(),e(187,`
            `),t(188,"c-page-item",13),e(189,`
              `),t(190,"a",6),e(191,"1"),n(),e(192,`
            `),n(),e(193,`
            `),t(194,"c-page-item"),e(195,`
              `),t(196,"a",6),e(197,"2"),n(),e(198,`
            `),n(),e(199,`
            `),t(200,"c-page-item"),e(201,`
              `),t(202,"a",6),e(203,"3"),n(),e(204,`
            `),n(),e(205,`
            `),t(206,"c-page-item",10),e(207,`
              `),t(208,"a",6)(209,"span",9),e(210,"\xBB"),n()(),e(211,`
            `),n(),e(212,`
          `),n(),e(213,`
        `),n(),e(214,`
      `),n(),e(215,`
    `),n(),e(216,`
  `),n(),e(217,`
  `),t(218,"c-col",0),e(219,`
    `),t(220,"c-card",2),e(221,`
      `),t(222,"c-card-header"),e(223,`
        `),t(224,"strong"),e(225,"Angular Pagination"),n(),e(226," "),t(227,"small"),e(228,"Sizing"),n(),e(229,`
      `),n(),e(230,`
      `),t(231,"c-card-body"),e(232,`
        `),t(233,"p",3),e(234,`
          Fancy larger or smaller pagination? Add `),t(235,"code"),e(236,'sizing="lg"'),n(),e(237,` or
          `),t(238,"code"),e(239,'sizing="sm"'),n(),e(240,` for additional sizes.
        `),n(),e(241,`
        `),t(242,"app-docs-example",14),e(243,`
          `),t(244,"c-pagination",15),e(245,`
            `),t(246,"c-page-item"),e(247,`
              `),t(248,"a",6),e(249,"Previous"),n(),e(250,`
            `),n(),e(251,`
            `),t(252,"c-page-item"),e(253,`
              `),t(254,"a",6),e(255,"1"),n(),e(256,`
            `),n(),e(257,`
            `),t(258,"c-page-item"),e(259,`
              `),t(260,"a",6),e(261,"2"),n(),e(262,`
            `),n(),e(263,`
            `),t(264,"c-page-item"),e(265,`
              `),t(266,"a",6),e(267,"3"),n(),e(268,`
            `),n(),e(269,`
            `),t(270,"c-page-item"),e(271,`
              `),t(272,"a",6),e(273,"Next"),n(),e(274,`
            `),n(),e(275,`
          `),n(),e(276,`
        `),n(),e(277,`
        `),t(278,"app-docs-example",14),e(279,`
          `),t(280,"c-pagination",16),e(281,`
            `),t(282,"c-page-item"),e(283,`
              `),t(284,"a",6),e(285,"Previous"),n(),e(286,`
            `),n(),e(287,`
            `),t(288,"c-page-item"),e(289,`
              `),t(290,"a",6),e(291,"1"),n(),e(292,`
            `),n(),e(293,`
            `),t(294,"c-page-item"),e(295,`
              `),t(296,"a",6),e(297,"2"),n(),e(298,`
            `),n(),e(299,`
            `),t(300,"c-page-item"),e(301,`
              `),t(302,"a",6),e(303,"3"),n(),e(304,`
            `),n(),e(305,`
            `),t(306,"c-page-item"),e(307,`
              `),t(308,"a",6),e(309,"Next"),n(),e(310,`
            `),n(),e(311,`
          `),n(),e(312,`
        `),n(),e(313,`
      `),n(),e(314,`
    `),n(),e(315,`
  `),n(),e(316,`
  `),t(317,"c-col",0),e(318,`
    `),t(319,"c-card",2),e(320,`
      `),t(321,"c-card-header"),e(322,`
        `),t(323,"strong"),e(324,"Angular Pagination"),n(),e(325," "),t(326,"small"),e(327,"Alignment"),n(),e(328,`
      `),n(),e(329,`
      `),t(330,"c-card-body"),e(331,`
        `),t(332,"p",3),e(333,`
          Change the alignment of pagination components with
          `),t(334,"a",17),e(335,"flexbox utilities"),n(),e(336,`.
        `),n(),e(337,`
        `),t(338,"app-docs-example",18),e(339,`
          `),t(340,"c-pagination",19),e(341,`
            `),t(342,"c-page-item",20),e(343,`
              `),t(344,"a",6),e(345,"Previous"),n(),e(346,`
            `),n(),e(347,`
            `),t(348,"c-page-item"),e(349,`
              `),t(350,"a",6),e(351,"1"),n(),e(352,`
            `),n(),e(353,`
            `),t(354,"c-page-item"),e(355,`
              `),t(356,"a",6),e(357,"2"),n(),e(358,`
            `),n(),e(359,`
            `),t(360,"c-page-item"),e(361,`
              `),t(362,"a",6),e(363,"3"),n(),e(364,`
            `),n(),e(365,`
            `),t(366,"c-page-item"),e(367,`
              `),t(368,"a",6),e(369,"Next"),n(),e(370,`
            `),n(),e(371,`
          `),n(),e(372,`
        `),n(),e(373,`
        `),t(374,"app-docs-example",18),e(375,`
          `),t(376,"c-pagination",21),e(377,`
            `),t(378,"c-page-item",20),e(379,`
              `),t(380,"a",6),e(381,"Previous"),n(),e(382,`
            `),n(),e(383,`
            `),t(384,"c-page-item"),e(385,`
              `),t(386,"a",6),e(387,"1"),n(),e(388,`
            `),n(),e(389,`
            `),t(390,"c-page-item"),e(391,`
              `),t(392,"a",6),e(393,"2"),n(),e(394,`
            `),n(),e(395,`
            `),t(396,"c-page-item"),e(397,`
              `),t(398,"a",6),e(399,"3"),n(),e(400,`
            `),n(),e(401,`
            `),t(402,"c-page-item"),e(403,`
              `),t(404,"a",6),e(405,"Next"),n(),e(406,`
            `),n(),e(407,`
          `),n(),e(408,`
        `),n(),e(409,`
      `),n(),e(410,`
    `),n(),e(411,`
  `),n(),e(412,`
`),n()),o&2&&(i(40),a("routerLink",r(39,l)),i(6),a("routerLink",r(40,l)),i(6),a("routerLink",r(41,l)),i(6),a("routerLink",r(42,l)),i(6),a("routerLink",r(43,l)),i(36),a("routerLink",r(44,l)),i(7),a("routerLink",r(45,l)),i(6),a("routerLink",r(46,l)),i(6),a("routerLink",r(47,l)),i(6),a("routerLink",r(48,l)),i(56),a("disabled",!0),i(2),a("routerLink",r(49,l)),i(5),a("active",!0),i(2),a("routerLink",r(50,l)),i(6),a("routerLink",r(51,l)),i(6),a("routerLink",r(52,l)),i(6),a("routerLink",r(53,l)),i(40),a("routerLink",r(54,l)),i(6),a("routerLink",r(55,l)),i(6),a("routerLink",r(56,l)),i(6),a("routerLink",r(57,l)),i(6),a("routerLink",r(58,l)),i(12),a("routerLink",r(59,l)),i(6),a("routerLink",r(60,l)),i(6),a("routerLink",r(61,l)),i(6),a("routerLink",r(62,l)),i(6),a("routerLink",r(63,l)),i(34),a("disabled",!0),i(2),a("routerLink",r(64,l)),i(6),a("routerLink",r(65,l)),i(6),a("routerLink",r(66,l)),i(6),a("routerLink",r(67,l)),i(6),a("routerLink",r(68,l)),i(10),a("disabled",!0),i(2),a("routerLink",r(69,l)),i(6),a("routerLink",r(70,l)),i(6),a("routerLink",r(71,l)),i(6),a("routerLink",r(72,l)),i(6),a("routerLink",r(73,l)))},dependencies:[E,S,c,u,s,k,y,v,g,p,b],encapsulation:2});var f=m;export{f as PaginationsComponent};
