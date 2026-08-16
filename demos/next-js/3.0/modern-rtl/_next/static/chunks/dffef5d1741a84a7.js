(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,233525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},153642,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(155487),s=e.i(514084),a=e.i(161822);let o=`
  (function() {
    const userMode = localStorage.getItem('coreui-pro-next-js-admin-template-theme-modern');
    const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userMode === 'dark' || (userMode !== 'light' && systemDarkMode)) {
      document.documentElement.dataset.coreuiTheme = 'dark';
    }
  })();
`;function d({children:e}){let{isColorModeSet:d,setColorMode:i}=(0,s.useColorModes)("coreui-pro-next-js-admin-template-theme-modern");return(0,r.useEffect)(()=>{let e=new URLSearchParams(window.location.href.split("?")[1]),t=e?.get("theme")?.match(/^[A-Za-z0-9\s]+/)?.[0];if(t&&i(t),d())return},[]),(0,t.jsxs)("html",{lang:"en",dir:"rtl",suppressHydrationWarning:!0,children:[(0,t.jsxs)("head",{children:[(0,t.jsx)("title",{children:"CoreUI PRO Next.js Admin Template"}),(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:o}}),(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KX4JH47');`}})]}),(0,t.jsx)("body",{children:(0,t.jsx)(n.Provider,{store:a.default,children:e})})]})}e.s(["default",()=>d])}]);