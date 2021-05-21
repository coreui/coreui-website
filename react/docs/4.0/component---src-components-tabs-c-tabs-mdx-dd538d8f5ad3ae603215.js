(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"4cm8":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return y}));var n=t("Fcif"),i=t("+I+c"),r=t("mXGw"),o=t("/FXl"),s=t("BIGe"),c=t("ZFoC"),l=t("oQeO"),b=t("78lx"),u=t("hepH"),m=t("uwO3"),h=t("DgwX"),p=(t("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/tabs/CTabs.mdx"}});var d={_frontmatter:p},v=s.a;function y(e){var a,t,y=e.components,f=Object(i.a)(e,["components"]);return Object(o.b)(v,Object(n.a)({},d,f,{components:y,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use the tab JavaScript plugin—include it individually or through the compiled ",Object(o.b)("inlineCode",{parentName:"p"},"coreui.js")," file—to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus."),Object(o.b)("p",null,"Dynamic tabbed interfaces, as described in the ",Object(o.b)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices/#tabpanel"},Object(o.b)("abbr",{title:"Web Accessibility Initiative"},"WAI")," ",Object(o.b)("abbr",{title:"Accessible Rich Internet Applications"},"ARIA")," Authoring Practices"),", require ",Object(o.b)("inlineCode",{parentName:"p"},'role="tablist"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'role="tab"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'role="tabpanel"'),", and additional ",Object(o.b)("inlineCode",{parentName:"p"},"aria-")," attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers)."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(c.c,{__position:0,__code:'() => {\n  const [activeKey, setActiveKey] = useState(1)\n  return (\n    <>\n      <CNav variant="tabs">\n        <CNavItem>\n          <CNavLink\n            href="#"\n            active={activeKey === 1}\n            onClick={() => setActiveKey(1)}\n          >\n            Active\n          </CNavLink>\n        </CNavItem>\n        <CNavItem>\n          <CNavLink\n            href="#"\n            active={activeKey === 2}\n            onClick={() => setActiveKey(2)}\n          >\n            Link\n          </CNavLink>\n        </CNavItem>\n        <CNavItem>\n          <CNavLink\n            href="#"\n            active={activeKey === 3}\n            onClick={() => setActiveKey(3)}\n          >\n            Link\n          </CNavLink>\n        </CNavItem>\n      </CNav>\n      <CTabContent>\n        <CTabPane visible={activeKey === 1}>\n          Raw denim you probably haven\'t heard of them jean shorts Austin.\n          Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache\n          cliche tempor, williamsburg carles vegan helvetica. Reprehenderit\n          butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,\n          qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n          iphone. Seitan aliquip quis cardigan american apparel, butcher\n          voluptate nisi qui.\n        </CTabPane>\n        <CTabPane visible={activeKey === 2}>\n          Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla\n          single-origin coffee squid. Exercitation +1 labore velit, blog\n          sartorial PBR leggings next level wes anderson artisan four loko\n          farm-to-table craft beer twee. Qui photo booth letterpress, commodo\n          enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum\n          PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus\n          mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente\n          labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,\n          sustainable jean shorts beard ut DIY ethical culpa terry richardson\n          biodiesel. Art party scenester stumptown, tumblr butcher vero sint\n          qui sapiente accusamus tattooed echo park.\n        </CTabPane>\n        <CTabPane visible={activeKey === 3}>\n          Etsy mixtape wayfarers, ethical wes anderson tofu before they sold\n          out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table\n          readymade. Messenger bag gentrify pitchfork tattooed craft beer,\n          iphone skateboard locavore carles etsy salvia banksy hoodie\n          helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit\n          cred pitchfork. Williamsburg banh mi whatever gluten-free, carles\n          pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester\n          cred you probably haven\'t heard of them, vinyl craft beer blog\n          stumptown. Pitchfork sustainable tofu synth chambray yr.\n        </CTabPane>\n      </CTabContent>\n    </>\n  )\n}',__scope:(a={props:f,DefaultLayout:s.a,Playground:c.c,Props:c.d,useState:r.useState,CNav:l.a,CNavItem:b.a,CNavLink:u.a,CTabContent:m.a,CTabPane:h.a},a.DefaultLayout=s.a,a._frontmatter=p,a),mdxType:"Playground"},(function(){var e=Object(r.useState)(1),a=e[0],t=e[1];return Object(o.b)(r.Fragment,null,Object(o.b)(l.a,{variant:"tabs",mdxType:"CNav"},Object(o.b)(b.a,{mdxType:"CNavItem"},Object(o.b)(u.a,{href:"#",active:1===a,onClick:function(){return t(1)},mdxType:"CNavLink"},"Active")),Object(o.b)(b.a,{mdxType:"CNavItem"},Object(o.b)(u.a,{href:"#",active:2===a,onClick:function(){return t(2)},mdxType:"CNavLink"},"Link")),Object(o.b)(b.a,{mdxType:"CNavItem"},Object(o.b)(u.a,{href:"#",active:3===a,onClick:function(){return t(3)},mdxType:"CNavLink"},"Link"))),Object(o.b)(m.a,{mdxType:"CTabContent"},Object(o.b)(h.a,{visible:1===a,mdxType:"CTabPane"},"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."),Object(o.b)(h.a,{visible:2===a,mdxType:"CTabPane"},"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."),Object(o.b)(h.a,{visible:3===a,mdxType:"CTabPane"},"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.")))})),Object(o.b)("p",null,"The tabs plugin also works with pills."),Object(o.b)(c.c,{__position:1,__code:'() => {\n  const [activeKey, setActiveKey] = useState(1)\n  return (\n    <>\n      <CNav variant="pills">\n        <CNavItem>\n          <CNavLink\n            href="#"\n            active={activeKey === 1}\n            onClick={() => setActiveKey(1)}\n          >\n            Active\n          </CNavLink>\n        </CNavItem>\n        <CNavItem>\n          <CNavLink\n            href="#"\n            active={activeKey === 2}\n            onClick={() => setActiveKey(2)}\n          >\n            Link\n          </CNavLink>\n        </CNavItem>\n        <CNavItem>\n          <CNavLink\n            href="#"\n            active={activeKey === 3}\n            onClick={() => setActiveKey(3)}\n          >\n            Link\n          </CNavLink>\n        </CNavItem>\n      </CNav>\n      <CTabContent>\n        <CTabPane visible={activeKey === 1}>\n          Raw denim you probably haven\'t heard of them jean shorts Austin.\n          Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache\n          cliche tempor, williamsburg carles vegan helvetica. Reprehenderit\n          butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,\n          qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n          iphone. Seitan aliquip quis cardigan american apparel, butcher\n          voluptate nisi qui.\n        </CTabPane>\n        <CTabPane visible={activeKey === 2}>\n          Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla\n          single-origin coffee squid. Exercitation +1 labore velit, blog\n          sartorial PBR leggings next level wes anderson artisan four loko\n          farm-to-table craft beer twee. Qui photo booth letterpress, commodo\n          enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum\n          PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus\n          mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente\n          labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,\n          sustainable jean shorts beard ut DIY ethical culpa terry richardson\n          biodiesel. Art party scenester stumptown, tumblr butcher vero sint\n          qui sapiente accusamus tattooed echo park.\n        </CTabPane>\n        <CTabPane visible={activeKey === 3}>\n          Etsy mixtape wayfarers, ethical wes anderson tofu before they sold\n          out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table\n          readymade. Messenger bag gentrify pitchfork tattooed craft beer,\n          iphone skateboard locavore carles etsy salvia banksy hoodie\n          helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit\n          cred pitchfork. Williamsburg banh mi whatever gluten-free, carles\n          pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester\n          cred you probably haven\'t heard of them, vinyl craft beer blog\n          stumptown. Pitchfork sustainable tofu synth chambray yr.\n        </CTabPane>\n      </CTabContent>\n    </>\n  )\n}',__scope:(t={props:f,DefaultLayout:s.a,Playground:c.c,Props:c.d,useState:r.useState,CNav:l.a,CNavItem:b.a,CNavLink:u.a,CTabContent:m.a,CTabPane:h.a},t.DefaultLayout=s.a,t._frontmatter=p,t),mdxType:"Playground"},(function(){var e=Object(r.useState)(1),a=e[0],t=e[1];return Object(o.b)(r.Fragment,null,Object(o.b)(l.a,{variant:"pills",mdxType:"CNav"},Object(o.b)(b.a,{mdxType:"CNavItem"},Object(o.b)(u.a,{href:"#",active:1===a,onClick:function(){return t(1)},mdxType:"CNavLink"},"Active")),Object(o.b)(b.a,{mdxType:"CNavItem"},Object(o.b)(u.a,{href:"#",active:2===a,onClick:function(){return t(2)},mdxType:"CNavLink"},"Link")),Object(o.b)(b.a,{mdxType:"CNavItem"},Object(o.b)(u.a,{href:"#",active:3===a,onClick:function(){return t(3)},mdxType:"CNavLink"},"Link"))),Object(o.b)(m.a,{mdxType:"CTabContent"},Object(o.b)(h.a,{visible:1===a,mdxType:"CTabPane"},"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."),Object(o.b)(h.a,{visible:2===a,mdxType:"CTabPane"},"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."),Object(o.b)(h.a,{visible:3===a,mdxType:"CTabPane"},"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.")))})),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"ctabcontent"},"CTabContent"),Object(o.b)(c.d,{of:m.a,mdxType:"Props"}),Object(o.b)("h3",{id:"ctabpane"},"CTabPane"),Object(o.b)(c.d,{of:h.a,mdxType:"Props"}))}void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/tabs/CTabs.mdx"}}),y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-tabs-c-tabs-mdx-dd538d8f5ad3ae603215.js.map