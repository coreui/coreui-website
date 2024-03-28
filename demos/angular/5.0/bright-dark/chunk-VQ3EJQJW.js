import{b}from"./chunk-TDZB25K5.js";import"./chunk-R5ALBHRE.js";import{Fb as c,Fd as E,Gd as g,H as d,Oa as e,Qc as u,Rc as s,Uc as S,Xa as p,Ya as r,Z as i,de as v,ee as y,fe as k,la as a,wa as t,xa as n}from"./chunk-7BIPNRDY.js";import"./chunk-RLASGPT3.js";var l=()=>[],A=(()=>{let m=class m{};m.\u0275fac=function(o){return new(o||m)},m.\u0275cmp=d({type:m,selectors:[["app-paginations"]],standalone:!0,features:[p],decls:411,vars:74,consts:[["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/pagination"],["aria-label","Page navigation example"],["cPageLink","",3,"routerLink"],["href","components/pagination#working-with-icons"],["aria-label","Previous"],["aria-hidden","true"],["aria-label","Next"],["href","components/pagination#disabled-and-active-states"],["aria-label","Previous",3,"disabled"],[3,"active"],["href","components/pagination#sizing"],["aria-label","Page navigation example","size","lg"],["aria-label","Page navigation example","size","sm"],["href","https://coreui.io/docs/utilities/flex/"],["href","components/pagination#aligment"],["align","center","aria-label","Page navigation example"],[3,"disabled"],["align","end","aria-label","Page navigation example"]],template:function(o,f){o&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Angular Pagination"),n(),e(10,`
      `),n(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"p",2),e(15,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),t(16,"code"),e(17,"<nav>"),n(),e(18,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),n(),e(19,`
        `),t(20,"p",2),e(21,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),t(22,"code"),e(23,"aria-label"),n(),e(24,` for the
          `),t(25,"code"),e(26,"<nav>"),n(),e(27,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),t(28,"code"),e(29,'aria-label="Search results pages"'),n(),e(30,`.
        `),n(),e(31,`
        `),t(32,"app-docs-example",3),e(33,`
          `),t(34,"c-pagination",4),e(35,`
            `),t(36,"c-page-item"),e(37,`
              `),t(38,"a",5),e(39,"Previous"),n(),e(40,`
            `),n(),e(41,`
            `),t(42,"c-page-item"),e(43,`
              `),t(44,"a",5),e(45,"1"),n(),e(46,`
            `),n(),e(47,`
            `),t(48,"c-page-item"),e(49,`
              `),t(50,"a",5),e(51,"2"),n(),e(52,`
            `),n(),e(53,`
            `),t(54,"c-page-item"),e(55,`
              `),t(56,"a",5),e(57,"3"),n(),e(58,`
            `),n(),e(59,`
            `),t(60,"c-page-item"),e(61,`
              `),t(62,"a",5),e(63,"Next"),n(),e(64,`
            `),n(),e(65,`
          `),n(),e(66,`
        `),n(),e(67,`
      `),n(),e(68,`
    `),n(),e(69,`
  `),n(),e(70,`
  `),t(71,"c-col",0),e(72,`
    `),t(73,"c-card",1),e(74,`
      `),t(75,"c-card-header"),e(76,`
        `),t(77,"strong"),e(78,"Angular Pagination"),n(),e(79," "),t(80,"small"),e(81,"Working with icons"),n(),e(82,`
      `),n(),e(83,`
      `),t(84,"c-card-body"),e(85,`
        `),t(86,"p",2),e(87,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),t(88,"code"),e(89,"aria"),n(),e(90,` attributes.
        `),n(),e(91,`
        `),t(92,"app-docs-example",6),e(93,`
          `),t(94,"c-pagination",4),e(95,`
            `),t(96,"c-page-item",7),e(97,`
              `),t(98,"a",5)(99,"span",8),e(100,"\xAB"),n()(),e(101,`
            `),n(),e(102,`
            `),t(103,"c-page-item"),e(104,`
              `),t(105,"a",5),e(106,"1"),n(),e(107,`
            `),n(),e(108,`
            `),t(109,"c-page-item"),e(110,`
              `),t(111,"a",5),e(112,"2"),n(),e(113,`
            `),n(),e(114,`
            `),t(115,"c-page-item"),e(116,`
              `),t(117,"a",5),e(118,"3"),n(),e(119,`
            `),n(),e(120,`
            `),t(121,"c-page-item",9),e(122,`
              `),t(123,"a",5)(124,"span",8),e(125,"\xBB"),n()(),e(126,`
            `),n(),e(127,`
          `),n(),e(128,`
        `),n(),e(129,`
      `),n(),e(130,`
    `),n(),e(131,`
  `),n(),e(132,`
  `),t(133,"c-col",0),e(134,`
    `),t(135,"c-card",1),e(136,`
      `),t(137,"c-card-header"),e(138,`
        `),t(139,"strong"),e(140,"Angular Pagination"),n(),e(141," "),t(142,"small"),e(143,"Disabled and active states"),n(),e(144,`
      `),n(),e(145,`
      `),t(146,"c-card-body"),e(147,`
        `),t(148,"p",2),e(149,`
          Pagination links are customizable for different circumstances. Use
          `),t(150,"code"),e(151,"disabled"),n(),e(152," for links that appear un-clickable and "),t(153,"code"),e(154,".active"),n(),e(155,` to
          indicate the current page.
        `),n(),e(156,`
        `),t(157,"p",2),e(158,`
          While the `),t(159,"code"),e(160,"disabled"),n(),e(161," prop uses "),t(162,"code"),e(163,"pointer-events: none"),n(),e(164,` to
          `),t(165,"em"),e(166,"try"),n(),e(167," to disable the link functionality of "),t(168,"code"),e(169,"<a>"),n(),e(170,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),t(171,"code"),e(172,'tabindex="-1"'),n(),e(173,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),n(),e(174,`
        `),t(175,"app-docs-example",10),e(176,`
          `),t(177,"c-pagination",4),e(178,`
            `),t(179,"c-page-item",11),e(180,`
              `),t(181,"a",5)(182,"span",8),e(183,"\xAB"),n()(),e(184,`
            `),n(),e(185,`
            `),t(186,"c-page-item",12),e(187,`
              `),t(188,"a",5),e(189,"1"),n(),e(190,`
            `),n(),e(191,`
            `),t(192,"c-page-item"),e(193,`
              `),t(194,"a",5),e(195,"2"),n(),e(196,`
            `),n(),e(197,`
            `),t(198,"c-page-item"),e(199,`
              `),t(200,"a",5),e(201,"3"),n(),e(202,`
            `),n(),e(203,`
            `),t(204,"c-page-item",9),e(205,`
              `),t(206,"a",5)(207,"span",8),e(208,"\xBB"),n()(),e(209,`
            `),n(),e(210,`
          `),n(),e(211,`
        `),n(),e(212,`
      `),n(),e(213,`
    `),n(),e(214,`
  `),n(),e(215,`
  `),t(216,"c-col",0),e(217,`
    `),t(218,"c-card",1),e(219,`
      `),t(220,"c-card-header"),e(221,`
        `),t(222,"strong"),e(223,"Angular Pagination"),n(),e(224," "),t(225,"small"),e(226,"Sizing"),n(),e(227,`
      `),n(),e(228,`
      `),t(229,"c-card-body"),e(230,`
        `),t(231,"p",2),e(232,`
          Fancy larger or smaller pagination? Add `),t(233,"code"),e(234,'sizing="lg"'),n(),e(235,` or
          `),t(236,"code"),e(237,'sizing="sm"'),n(),e(238,` for additional sizes.
        `),n(),e(239,`
        `),t(240,"app-docs-example",13),e(241,`
          `),t(242,"c-pagination",14),e(243,`
            `),t(244,"c-page-item"),e(245,`
              `),t(246,"a",5),e(247,"Previous"),n(),e(248,`
            `),n(),e(249,`
            `),t(250,"c-page-item"),e(251,`
              `),t(252,"a",5),e(253,"1"),n(),e(254,`
            `),n(),e(255,`
            `),t(256,"c-page-item"),e(257,`
              `),t(258,"a",5),e(259,"2"),n(),e(260,`
            `),n(),e(261,`
            `),t(262,"c-page-item"),e(263,`
              `),t(264,"a",5),e(265,"3"),n(),e(266,`
            `),n(),e(267,`
            `),t(268,"c-page-item"),e(269,`
              `),t(270,"a",5),e(271,"Next"),n(),e(272,`
            `),n(),e(273,`
          `),n(),e(274,`
        `),n(),e(275,`
        `),t(276,"app-docs-example",13),e(277,`
          `),t(278,"c-pagination",15),e(279,`
            `),t(280,"c-page-item"),e(281,`
              `),t(282,"a",5),e(283,"Previous"),n(),e(284,`
            `),n(),e(285,`
            `),t(286,"c-page-item"),e(287,`
              `),t(288,"a",5),e(289,"1"),n(),e(290,`
            `),n(),e(291,`
            `),t(292,"c-page-item"),e(293,`
              `),t(294,"a",5),e(295,"2"),n(),e(296,`
            `),n(),e(297,`
            `),t(298,"c-page-item"),e(299,`
              `),t(300,"a",5),e(301,"3"),n(),e(302,`
            `),n(),e(303,`
            `),t(304,"c-page-item"),e(305,`
              `),t(306,"a",5),e(307,"Next"),n(),e(308,`
            `),n(),e(309,`
          `),n(),e(310,`
        `),n(),e(311,`
      `),n(),e(312,`
    `),n(),e(313,`
  `),n(),e(314,`
  `),t(315,"c-col",0),e(316,`
    `),t(317,"c-card",1),e(318,`
      `),t(319,"c-card-header"),e(320,`
        `),t(321,"strong"),e(322,"Angular Pagination"),n(),e(323," "),t(324,"small"),e(325,"Alignment"),n(),e(326,`
      `),n(),e(327,`
      `),t(328,"c-card-body"),e(329,`
        `),t(330,"p",2),e(331,`
          Change the alignment of pagination components with
          `),t(332,"a",16),e(333,"flexbox utilities"),n(),e(334,`.
        `),n(),e(335,`
        `),t(336,"app-docs-example",17),e(337,`
          `),t(338,"c-pagination",18),e(339,`
            `),t(340,"c-page-item",19),e(341,`
              `),t(342,"a",5),e(343,"Previous"),n(),e(344,`
            `),n(),e(345,`
            `),t(346,"c-page-item"),e(347,`
              `),t(348,"a",5),e(349,"1"),n(),e(350,`
            `),n(),e(351,`
            `),t(352,"c-page-item"),e(353,`
              `),t(354,"a",5),e(355,"2"),n(),e(356,`
            `),n(),e(357,`
            `),t(358,"c-page-item"),e(359,`
              `),t(360,"a",5),e(361,"3"),n(),e(362,`
            `),n(),e(363,`
            `),t(364,"c-page-item"),e(365,`
              `),t(366,"a",5),e(367,"Next"),n(),e(368,`
            `),n(),e(369,`
          `),n(),e(370,`
        `),n(),e(371,`
        `),t(372,"app-docs-example",17),e(373,`
          `),t(374,"c-pagination",20),e(375,`
            `),t(376,"c-page-item",19),e(377,`
              `),t(378,"a",5),e(379,"Previous"),n(),e(380,`
            `),n(),e(381,`
            `),t(382,"c-page-item"),e(383,`
              `),t(384,"a",5),e(385,"1"),n(),e(386,`
            `),n(),e(387,`
            `),t(388,"c-page-item"),e(389,`
              `),t(390,"a",5),e(391,"2"),n(),e(392,`
            `),n(),e(393,`
            `),t(394,"c-page-item"),e(395,`
              `),t(396,"a",5),e(397,"3"),n(),e(398,`
            `),n(),e(399,`
            `),t(400,"c-page-item"),e(401,`
              `),t(402,"a",5),e(403,"Next"),n(),e(404,`
            `),n(),e(405,`
          `),n(),e(406,`
        `),n(),e(407,`
      `),n(),e(408,`
    `),n(),e(409,`
  `),n(),e(410,`
`),n()),o&2&&(i(38),a("routerLink",r(39,l)),i(6),a("routerLink",r(40,l)),i(6),a("routerLink",r(41,l)),i(6),a("routerLink",r(42,l)),i(6),a("routerLink",r(43,l)),i(36),a("routerLink",r(44,l)),i(7),a("routerLink",r(45,l)),i(6),a("routerLink",r(46,l)),i(6),a("routerLink",r(47,l)),i(6),a("routerLink",r(48,l)),i(56),a("disabled",!0),i(2),a("routerLink",r(49,l)),i(5),a("active",!0),i(2),a("routerLink",r(50,l)),i(6),a("routerLink",r(51,l)),i(6),a("routerLink",r(52,l)),i(6),a("routerLink",r(53,l)),i(40),a("routerLink",r(54,l)),i(6),a("routerLink",r(55,l)),i(6),a("routerLink",r(56,l)),i(6),a("routerLink",r(57,l)),i(6),a("routerLink",r(58,l)),i(12),a("routerLink",r(59,l)),i(6),a("routerLink",r(60,l)),i(6),a("routerLink",r(61,l)),i(6),a("routerLink",r(62,l)),i(6),a("routerLink",r(63,l)),i(34),a("disabled",!0),i(2),a("routerLink",r(64,l)),i(6),a("routerLink",r(65,l)),i(6),a("routerLink",r(66,l)),i(6),a("routerLink",r(67,l)),i(6),a("routerLink",r(68,l)),i(10),a("disabled",!0),i(2),a("routerLink",r(69,l)),i(6),a("routerLink",r(70,l)),i(6),a("routerLink",r(71,l)),i(6),a("routerLink",r(72,l)),i(6),a("routerLink",r(73,l)))},dependencies:[g,E,u,S,s,b,k,y,v,c]});let x=m;return x})();export{A as PaginationsComponent};
