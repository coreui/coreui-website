(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"9Wns":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return h})),t.d(a,"default",(function(){return y}));var s=t("Fcif"),l=t("+I+c"),o=(t("IFzZ"),t("/FXl")),r=t("BIGe"),n=t("ZFoC"),i=t("/12F"),c=t("8HGR"),d=t("Xrba"),C=t("wohR"),b=t("smkq"),m=t("C0fk"),u=t("5Dpj"),p=t("xzJ9"),h=(t("aD51"),{});void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/carousel/CCarousel.mdx"}});var O={_frontmatter:h},j=r.a;function y(e){var a,t,y,f,I,w,g=e.components,k=Object(l.a)(e,["components"]);return Object(o.b)(j,Object(s.a)({},O,k,{components:g,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,"The React carousel is a slideshow for cycling within a group of content. It runs with a group of images, text, or html elements. It also incorporates support for previous/next buttons."),Object(o.b)("p",null,"In browsers where the ",Object(o.b)("a",{parentName:"p",href:"https://www.w3.org/TR/page-visibility/"},"Page Visibility API")," is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.)."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Carousels don't automatically normalize slide dimensions. As such, you may want to use extra utilities or custom methods to properly size content. While carousels support previous/next controls and indicators, they're not explicitly expected. Add and customize as you see fit."),Object(o.b)("h3",{id:"slides-only"},"Slides only"),Object(o.b)(n.c,{__position:0,__code:'() => {\n  return (\n    <CCarousel>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[0]} alt="slide 1" />\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[1]} alt="slide 2" />\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[2]} alt="slide 3" />\n      </CCarouselItem>\n    </CCarousel>\n  )\n}',__scope:(a={props:k,DefaultLayout:r.a,Playground:n.c,Props:n.d,CCallout:i.a,CCarousel:c.a,CCarouselCaption:d.a,CCarouselControl:C.a,CCarouselIndicators:b.a,CCarouselInner:m.a,CCarouselItem:u.a,slides:p.a,slidesLight:p.b},a.DefaultLayout=r.a,a._frontmatter=h,a),mdxType:"Playground"},(function(){return Object(o.b)(c.a,{mdxType:"CCarousel"},Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[0],alt:"slide 1"})),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[1],alt:"slide 2"})),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[2],alt:"slide 3"})))})),Object(o.b)("h3",{id:"with-controls"},"With controls"),Object(o.b)("p",null,"Adding in the previous and next controls by ",Object(o.b)("inlineCode",{parentName:"p"},"controls")," property."),Object(o.b)(n.c,{__position:1,__code:'() => {\n  return (\n    <CCarousel controls>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[0]} alt="slide 1" />\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[1]} alt="slide 2" />\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[2]} alt="slide 3" />\n      </CCarouselItem>\n    </CCarousel>\n  )\n}',__scope:(t={props:k,DefaultLayout:r.a,Playground:n.c,Props:n.d,CCallout:i.a,CCarousel:c.a,CCarouselCaption:d.a,CCarouselControl:C.a,CCarouselIndicators:b.a,CCarouselInner:m.a,CCarouselItem:u.a,slides:p.a,slidesLight:p.b},t.DefaultLayout=r.a,t._frontmatter=h,t),mdxType:"Playground"},(function(){return Object(o.b)(c.a,{controls:!0,mdxType:"CCarousel"},Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[0],alt:"slide 1"})),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[1],alt:"slide 2"})),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[2],alt:"slide 3"})))})),Object(o.b)("h3",{id:"with-indicators"},"With indicators"),Object(o.b)("p",null,"You can attach the indicators to the carousel, lengthwise the controls, too."),Object(o.b)(n.c,{__position:2,__code:'() => {\n  return (\n    <CCarousel controls indicators>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[0]} alt="slide 1" />\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[1]} alt="slide 2" />\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[2]} alt="slide 3" />\n      </CCarouselItem>\n    </CCarousel>\n  )\n}',__scope:(y={props:k,DefaultLayout:r.a,Playground:n.c,Props:n.d,CCallout:i.a,CCarousel:c.a,CCarouselCaption:d.a,CCarouselControl:C.a,CCarouselIndicators:b.a,CCarouselInner:m.a,CCarouselItem:u.a,slides:p.a,slidesLight:p.b},y.DefaultLayout=r.a,y._frontmatter=h,y),mdxType:"Playground"},(function(){return Object(o.b)(c.a,{controls:!0,indicators:!0,mdxType:"CCarousel"},Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[0],alt:"slide 1"})),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[1],alt:"slide 2"})),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[2],alt:"slide 3"})))})),Object(o.b)("h3",{id:"with-captions"},"With captions"),Object(o.b)("p",null,"You can add captions to slides with the ",Object(o.b)("inlineCode",{parentName:"p"},"<CCarouselCaption>")," element within any ",Object(o.b)("inlineCode",{parentName:"p"},"<CCarouselItem>"),". They can be immediately hidden on smaller viewports, as shown below, with optional ",Object(o.b)("a",{parentName:"p",href:"https://coreui.io/4.0/utilities/display"},"display utilities"),". We hide them with ",Object(o.b)("inlineCode",{parentName:"p"},".d-none")," and draw them back on medium-sized devices with ",Object(o.b)("inlineCode",{parentName:"p"},".d-md-block"),"."),Object(o.b)(n.c,{__position:3,__code:'() => {\n  return (\n    <CCarousel controls indicators>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[0]} alt="slide 1" />\n        <CCarouselCaption className="d-none d-md-block">\n          <h5>First slide label</h5>\n          <p>Some representative placeholder content for the first slide.</p>\n        </CCarouselCaption>\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[1]} alt="slide 2" />\n        <CCarouselCaption className="d-none d-md-block">\n          <h5>Second slide label</h5>\n          <p>Some representative placeholder content for the first slide.</p>\n        </CCarouselCaption>\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[2]} alt="slide 3" />\n        <CCarouselCaption className="d-none d-md-block">\n          <h5>Third slide label</h5>\n          <p>Some representative placeholder content for the first slide.</p>\n        </CCarouselCaption>\n      </CCarouselItem>\n    </CCarousel>\n  )\n}',__scope:(f={props:k,DefaultLayout:r.a,Playground:n.c,Props:n.d,CCallout:i.a,CCarousel:c.a,CCarouselCaption:d.a,CCarouselControl:C.a,CCarouselIndicators:b.a,CCarouselInner:m.a,CCarouselItem:u.a,slides:p.a,slidesLight:p.b},f.DefaultLayout=r.a,f._frontmatter=h,f),mdxType:"Playground"},(function(){return Object(o.b)(c.a,{controls:!0,indicators:!0,mdxType:"CCarousel"},Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[0],alt:"slide 1"}),Object(o.b)(d.a,{className:"d-none d-md-block",mdxType:"CCarouselCaption"},Object(o.b)("h5",null,"First slide label"),Object(o.b)("p",null,"Some representative placeholder content for the first slide."))),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[1],alt:"slide 2"}),Object(o.b)(d.a,{className:"d-none d-md-block",mdxType:"CCarouselCaption"},Object(o.b)("h5",null,"Second slide label"),Object(o.b)("p",null,"Some representative placeholder content for the first slide."))),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[2],alt:"slide 3"}),Object(o.b)(d.a,{className:"d-none d-md-block",mdxType:"CCarouselCaption"},Object(o.b)("h5",null,"Third slide label"),Object(o.b)("p",null,"Some representative placeholder content for the first slide."))))})),Object(o.b)("h3",{id:"crossfade"},"Crossfade"),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},'transition="crossfade"')," to your carousel to animate slides with a fade transition instead of a slide."),Object(o.b)(n.c,{__position:4,__code:'() => {\n  return (\n    <CCarousel controls transition="crossfade">\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[0]} alt="slide 1" />\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[1]} alt="slide 2" />\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slides[2]} alt="slide 3" />\n      </CCarouselItem>\n    </CCarousel>\n  )\n}',__scope:(I={props:k,DefaultLayout:r.a,Playground:n.c,Props:n.d,CCallout:i.a,CCarousel:c.a,CCarouselCaption:d.a,CCarouselControl:C.a,CCarouselIndicators:b.a,CCarouselInner:m.a,CCarouselItem:u.a,slides:p.a,slidesLight:p.b},I.DefaultLayout=r.a,I._frontmatter=h,I),mdxType:"Playground"},(function(){return Object(o.b)(c.a,{controls:!0,transition:"crossfade",mdxType:"CCarousel"},Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[0],alt:"slide 1"})),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[1],alt:"slide 2"})),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.a[2],alt:"slide 3"})))})),Object(o.b)("h2",{id:"dark-variant"},"Dark variant"),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"dark")," property to the ",Object(o.b)("inlineCode",{parentName:"p"},"CCarousel")," for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the ",Object(o.b)("inlineCode",{parentName:"p"},"filter")," CSS property. Captions and controls have additional Sass variables that customize the ",Object(o.b)("inlineCode",{parentName:"p"},"color")," and ",Object(o.b)("inlineCode",{parentName:"p"},"background-color"),"."),Object(o.b)(n.c,{__position:5,__code:'() => {\n  return (\n    <CCarousel controls indicators dark>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slidesLight[0]} alt="slide 1" />\n        <CCarouselCaption className="d-none d-md-block">\n          <h5>First slide label</h5>\n          <p>Some representative placeholder content for the first slide.</p>\n        </CCarouselCaption>\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slidesLight[1]} alt="slide 2" />\n        <CCarouselCaption className="d-none d-md-block">\n          <h5>Second slide label</h5>\n          <p>Some representative placeholder content for the first slide.</p>\n        </CCarouselCaption>\n      </CCarouselItem>\n      <CCarouselItem>\n        <img className="d-block w-100" src={slidesLight[2]} alt="slide 3" />\n        <CCarouselCaption className="d-none d-md-block">\n          <h5>Third slide label</h5>\n          <p>Some representative placeholder content for the first slide.</p>\n        </CCarouselCaption>\n      </CCarouselItem>\n    </CCarousel>\n  )\n}',__scope:(w={props:k,DefaultLayout:r.a,Playground:n.c,Props:n.d,CCallout:i.a,CCarousel:c.a,CCarouselCaption:d.a,CCarouselControl:C.a,CCarouselIndicators:b.a,CCarouselInner:m.a,CCarouselItem:u.a,slides:p.a,slidesLight:p.b},w.DefaultLayout=r.a,w._frontmatter=h,w),mdxType:"Playground"},(function(){return Object(o.b)(c.a,{controls:!0,indicators:!0,dark:!0,mdxType:"CCarousel"},Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.b[0],alt:"slide 1"}),Object(o.b)(d.a,{className:"d-none d-md-block",mdxType:"CCarouselCaption"},Object(o.b)("h5",null,"First slide label"),Object(o.b)("p",null,"Some representative placeholder content for the first slide."))),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.b[1],alt:"slide 2"}),Object(o.b)(d.a,{className:"d-none d-md-block",mdxType:"CCarouselCaption"},Object(o.b)("h5",null,"Second slide label"),Object(o.b)("p",null,"Some representative placeholder content for the first slide."))),Object(o.b)(u.a,{mdxType:"CCarouselItem"},Object(o.b)("img",{className:"d-block w-100",src:p.b[2],alt:"slide 3"}),Object(o.b)(d.a,{className:"d-none d-md-block",mdxType:"CCarouselCaption"},Object(o.b)("h5",null,"Third slide label"),Object(o.b)("p",null,"Some representative placeholder content for the first slide."))))})),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"ccarousel"},"CCarousel"),Object(o.b)(n.d,{of:c.a,mdxType:"Props"}),Object(o.b)("h3",{id:"ccarouselcaption"},"CCarouselCaption"),Object(o.b)(n.d,{of:d.a,mdxType:"Props"}),Object(o.b)("h3",{id:"ccarouselcontrol"},"CCarouselControl"),Object(o.b)(n.d,{of:C.a,mdxType:"Props"}),Object(o.b)("h3",{id:"ccarouselindicators"},"CCarouselIndicators"),Object(o.b)(n.d,{of:b.a,mdxType:"Props"}),Object(o.b)("h3",{id:"ccarouselinner"},"CCarouselInner"),Object(o.b)(n.d,{of:m.a,mdxType:"Props"}),Object(o.b)("h3",{id:"ccarouselitem"},"CCarouselItem"),Object(o.b)(n.d,{of:u.a,mdxType:"Props"}))}void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/carousel/CCarousel.mdx"}}),y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-carousel-c-carousel-mdx-177cd069a4a9e31a9903.js.map