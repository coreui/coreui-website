(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{f6ru:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return f})),n.d(a,"default",(function(){return L}));var t=n("Fcif"),i=n("+I+c"),o=(n("mXGw"),n("/FXl")),r=n("BIGe"),d=n("ZFoC"),b=n("N9pd"),v=n("GxEI"),C=n("vXFi"),p=n("CnsJ"),c=n("VFdZ"),m=n("61AP"),l=n("kVip"),N=n("oQeO"),s=n("78lx"),h=n("hepH"),f=(n("aD51"),{});void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/nav/CNav.mdx"}});var y={_frontmatter:f},u=r.a;function L(e){var a,n,L,k,j,O,D,w,I,x,T,g,_=e.components,P=Object(i.a)(e,["components"]);return Object(o.b)(u,Object(t.a)({},y,P,{components:_,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"base-nav"},"Base nav"),Object(o.b)("p",null,"Navigation available in CoreUI for React share general markup and styles, from the base ",Object(o.b)("inlineCode",{parentName:"p"},".nav")," class to the active and disabled states. Swap modifier classes to switch between each style."),Object(o.b)("p",null,"The base ",Object(o.b)("inlineCode",{parentName:"p"},".nav")," component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling."),Object(o.b)(d.c,{__position:0,__code:'<CNav>\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(a={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},a.DefaultLayout=r.a,a._frontmatter=f,a),mdxType:"Playground"},Object(o.b)(N.a,{mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("p",null,"Classes are used throughout, so your markup can be super flexible. Use ",Object(o.b)("inlineCode",{parentName:"p"},"<ul>"),"s like above, ",Object(o.b)("inlineCode",{parentName:"p"},"<ol>")," if the order of your items is important, or roll your own with a ",Object(o.b)("inlineCode",{parentName:"p"},"<nav>")," element. Because the .nav uses display: flex, the nav links behave the same as nav items would, but without the extra markup."),Object(o.b)(d.c,{__position:1,__code:'<CNav component="nav">\n  <CNavLink href="#" active>\n    Active\n  </CNavLink>\n  <CNavLink href="#">Link</CNavLink>\n  <CNavLink href="#">Link</CNavLink>\n  <CNavLink href="#" disabled>\n    Disabled\n  </CNavLink>\n</CNav>',__scope:(n={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},n.DefaultLayout=r.a,n._frontmatter=f,n),mdxType:"Playground"},Object(o.b)(N.a,{component:"nav",mdxType:"CNav"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active"),Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link"),Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link"),Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled"))),Object(o.b)("h2",{id:"available-styles"},"Available styles"),Object(o.b)("p",null,"Change the style of ",Object(o.b)("inlineCode",{parentName:"p"},".nav"),"s component with modifiers and utilities. Mix and match as needed, or build your own."),Object(o.b)("h3",{id:"horizontal-alignment"},"Horizontal alignment"),Object(o.b)("p",null,"Change the horizontal alignment of your nav with ",Object(o.b)("a",{parentName:"p",href:"https://coreui.io/docs/layout/grid/#horizontal-alignment"},"flexbox utilities"),". By default, navs are left-aligned, but you can easily change them to center or right aligned."),Object(o.b)("p",null,"Centered with ",Object(o.b)("inlineCode",{parentName:"p"},".justify-content-center"),":"),Object(o.b)(d.c,{__position:2,__code:'<CNav className="justify-content-center">\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(L={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},L.DefaultLayout=r.a,L._frontmatter=f,L),mdxType:"Playground"},Object(o.b)(N.a,{className:"justify-content-center",mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("p",null,"Right-aligned with ",Object(o.b)("inlineCode",{parentName:"p"},".justify-content-end"),":"),Object(o.b)(d.c,{__position:3,__code:'<CNav className="justify-content-end">\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(k={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},k.DefaultLayout=r.a,k._frontmatter=f,k),mdxType:"Playground"},Object(o.b)(N.a,{className:"justify-content-end",mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("h3",{id:"vertical"},"Vertical"),Object(o.b)("p",null,"Stack your navigation by changing the flex item direction with the ",Object(o.b)("inlineCode",{parentName:"p"},".flex-column")," utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., ",Object(o.b)("inlineCode",{parentName:"p"},".flex-sm-column"),")."),Object(o.b)(d.c,{__position:4,__code:'<CNav className="flex-column">\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(j={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},j.DefaultLayout=r.a,j._frontmatter=f,j),mdxType:"Playground"},Object(o.b)(N.a,{className:"flex-column",mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("h3",{id:"tabs"},"Tabs"),Object(o.b)("p",null,"Takes the basic nav from above and adds the ",Object(o.b)("inlineCode",{parentName:"p"},'variant="tabs"')," class to generate a tabbed interface"),Object(o.b)(d.c,{__position:5,__code:'<CNav variant="tabs">\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(O={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},O.DefaultLayout=r.a,O._frontmatter=f,O),mdxType:"Playground"},Object(o.b)(N.a,{variant:"tabs",mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("h3",{id:"pills"},"Pills"),Object(o.b)("p",null,"Take that same HTML, but use ",Object(o.b)("inlineCode",{parentName:"p"},'variant="pills"')," instead:"),Object(o.b)(d.c,{__position:6,__code:'<CNav variant="pills">\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(D={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},D.DefaultLayout=r.a,D._frontmatter=f,D),mdxType:"Playground"},Object(o.b)(N.a,{variant:"pills",mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("h3",{id:"fill-and-justify"},"Fill and justify"),Object(o.b)("p",null,"Force your ",Object(o.b)("inlineCode",{parentName:"p"},".nav"),"'s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your ",Object(o.b)("inlineCode",{parentName:"p"},".nav-item"),"s, use ",Object(o.b)("inlineCode",{parentName:"p"},'layout="fill"'),". Notice that all horizontal space is occupied, but not every nav item has the same width."),Object(o.b)(d.c,{__position:7,__code:'<CNav variant="pills" layout="fill">\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(w={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},w.DefaultLayout=r.a,w._frontmatter=f,w),mdxType:"Playground"},Object(o.b)(N.a,{variant:"pills",layout:"fill",mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("p",null,"For equal-width elements, use ",Object(o.b)("inlineCode",{parentName:"p"},'layout="justified"'),". All horizontal space will be occupied by nav links, but unlike the .nav-fill above, every nav item will be the same width."),Object(o.b)(d.c,{__position:8,__code:'<CNav variant="pills" layout="justified">\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(I={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},I.DefaultLayout=r.a,I._frontmatter=f,I),mdxType:"Playground"},Object(o.b)(N.a,{variant:"pills",layout:"justified",mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("h2",{id:"working-with-flex-utilities"},"Working with flex utilities"),Object(o.b)("p",null,"If you need responsive nav variations, consider using a series of ",Object(o.b)("a",{parentName:"p",href:"https://coreui.io/docs/utilities/flex"},"flexbox utilities"),". While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint."),Object(o.b)(d.c,{__position:9,__code:'<CNav component="nav" variant="pills" className="flex-column flex-sm-row">\n  <CNavLink href="#" active>\n    Active\n  </CNavLink>\n  <CNavLink href="#">Link</CNavLink>\n  <CNavLink href="#">Link</CNavLink>\n  <CNavLink href="#" disabled>\n    Disabled\n  </CNavLink>\n</CNav>',__scope:(x={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},x.DefaultLayout=r.a,x._frontmatter=f,x),mdxType:"Playground"},Object(o.b)(N.a,{component:"nav",variant:"pills",className:"flex-column flex-sm-row",mdxType:"CNav"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active"),Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link"),Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link"),Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled"))),Object(o.b)("h2",{id:"regarding-accessibility"},"Regarding accessibility"),Object(o.b)("p",null,"If you're using navs to provide a navigation bar, be sure to add a ",Object(o.b)("inlineCode",{parentName:"p"},'role="navigation"')," to the most logical parent container of the ",Object(o.b)("inlineCode",{parentName:"p"},"<ul>"),", or wrap a ",Object(o.b)("inlineCode",{parentName:"p"},"<nav>")," element around the whole navigation. Do not add the role to the ",Object(o.b)("inlineCode",{parentName:"p"},"<ul>")," itself, as this would prevent it from being announced as an actual list by assistive technologies."),Object(o.b)("p",null,"Note that navigation bars, even if visually styled as tabs with the ",Object(o.b)("inlineCode",{parentName:"p"},".nav-tabs")," class, should ",Object(o.b)("strong",{parentName:"p"},"not")," be given ",Object(o.b)("inlineCode",{parentName:"p"},'role="tablist"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'role="tab"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'role="tabpanel"')," attributes. These are only appropriate for dynamic tabbed interfaces, as described in the ",Object(o.b)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices/#tabpanel"},Object(o.b)("abbr",{title:"Web Accessibility Initiative"},"WAI")," ",Object(o.b)("abbr",{title:"Accessible Rich Internet Applications"},"ARIA")," Authoring Practices"),". See ",Object(o.b)("a",{parentName:"p",href:"#javascript-behavior"},"JavaScript behavior")," for dynamic tabbed interfaces in this section for an example. The ",Object(o.b)("inlineCode",{parentName:"p"},"aria-current")," attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding ",Object(o.b)("inlineCode",{parentName:"p"},'aria-selected="true"')," on the active tab."),Object(o.b)("h2",{id:"using-dropdowns"},"Using dropdowns"),Object(o.b)("p",null,"Add dropdown menus with a little extra HTML."),Object(o.b)("h3",{id:"tabs-with-dropdowns"},"Tabs with dropdowns"),Object(o.b)(d.c,{__position:10,__code:'<CNav>\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CDropdown variant="nav-item">\n    <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(T={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},T.DefaultLayout=r.a,T._frontmatter=f,T),mdxType:"Playground"},Object(o.b)(N.a,{mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(b.a,{variant:"nav-item",mdxType:"CDropdown"},Object(o.b)(l.a,{color:"secondary",mdxType:"CDropdownToggle"},"Dropdown button"),Object(o.b)(m.a,{mdxType:"CDropdownMenu"},Object(o.b)(p.a,{href:"#",mdxType:"CDropdownItem"},"Action"),Object(o.b)(p.a,{href:"#",mdxType:"CDropdownItem"},"Another action"),Object(o.b)(p.a,{href:"#",mdxType:"CDropdownItem"},"Something else here"))),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("h3",{id:"pills-with-dropdowns"},"Pills with dropdowns"),Object(o.b)(d.c,{__position:11,__code:'<CNav variant="pills">\n  <CNavItem>\n    <CNavLink href="#" active>\n      Active\n    </CNavLink>\n  </CNavItem>\n  <CDropdown variant="nav-item">\n    <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n  <CNavItem>\n    <CNavLink href="#">Link</CNavLink>\n  </CNavItem>\n  <CNavItem>\n    <CNavLink href="#" disabled>\n      Disabled\n    </CNavLink>\n  </CNavItem>\n</CNav>',__scope:(g={props:P,DefaultLayout:r.a,Playground:d.c,Props:d.d,CDropdown:b.a,CDropdownDivider:v.a,CDropdownHeader:C.a,CDropdownItem:p.a,CDropdownItemPlain:c.a,CDropdownMenu:m.a,CDropdownToggle:l.a,CNav:N.a,CNavItem:s.a,CNavLink:h.a},g.DefaultLayout=r.a,g._frontmatter=f,g),mdxType:"Playground"},Object(o.b)(N.a,{variant:"pills",mdxType:"CNav"},Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",active:!0,mdxType:"CNavLink"},"Active")),Object(o.b)(b.a,{variant:"nav-item",mdxType:"CDropdown"},Object(o.b)(l.a,{color:"secondary",mdxType:"CDropdownToggle"},"Dropdown button"),Object(o.b)(m.a,{mdxType:"CDropdownMenu"},Object(o.b)(p.a,{href:"#",mdxType:"CDropdownItem"},"Action"),Object(o.b)(p.a,{href:"#",mdxType:"CDropdownItem"},"Another action"),Object(o.b)(p.a,{href:"#",mdxType:"CDropdownItem"},"Something else here"))),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",mdxType:"CNavLink"},"Link")),Object(o.b)(s.a,{mdxType:"CNavItem"},Object(o.b)(h.a,{href:"#",disabled:!0,mdxType:"CNavLink"},"Disabled")))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"cnav"},"CNav"),Object(o.b)(d.d,{of:N.a,mdxType:"Props"}),Object(o.b)("h3",{id:"cnavitem"},"CNavItem"),Object(o.b)(d.d,{of:s.a,mdxType:"Props"}),Object(o.b)("h3",{id:"cnavlink"},"CNavLink"),Object(o.b)(d.d,{of:h.a,mdxType:"Props"}))}void 0!==L&&L&&L===Object(L)&&Object.isExtensible(L)&&!L.hasOwnProperty("__filemeta")&&Object.defineProperty(L,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/nav/CNav.mdx"}}),L.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-nav-c-nav-mdx-b904c234ccbee57c3340.js.map