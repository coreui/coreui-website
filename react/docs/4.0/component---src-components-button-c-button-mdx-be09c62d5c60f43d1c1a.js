(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{hurw:function(t,o,n){"use strict";n.r(o),n.d(o,"_frontmatter",(function(){return l})),n.d(o,"default",(function(){return p}));var e=n("Fcif"),a=n("+I+c"),r=(n("IFzZ"),n("/FXl")),i=n("BIGe"),u=n("ZFoC"),c=n("758a"),l=(n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/button/CButton.mdx"}});var d={_frontmatter:l},s=i.a;function p(t){var o,n,p,b,m,y,C,B,g,h,O,j,f,_,x=t.components,v=Object(a.a)(t,["components"]);return Object(r.b)(s,Object(e.a)({},d,v,{components:x,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience."),Object(r.b)(u.c,{__position:0,__code:'<CButton color="primary" disabled>\n  Primary\n</CButton>\n<CButton color="secondary">Secondary</CButton>\n<CButton color="success">Success</CButton>\n<CButton color="danger">Danger</CButton>\n<CButton color="warning">Warning</CButton>\n<CButton color="info">Info</CButton>\n<CButton color="light">Light</CButton>\n<CButton color="dark">Dark</CButton>\n<CButton color="link">Link</CButton>',__scope:(o={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},o.DefaultLayout=i.a,o._frontmatter=l,o),mdxType:"Playground"},Object(r.b)(c.a,{color:"primary",disabled:!0,mdxType:"CButton"},"Primary"),Object(r.b)(c.a,{color:"secondary",mdxType:"CButton"},"Secondary"),Object(r.b)(c.a,{color:"success",mdxType:"CButton"},"Success"),Object(r.b)(c.a,{color:"danger",mdxType:"CButton"},"Danger"),Object(r.b)(c.a,{color:"warning",mdxType:"CButton"},"Warning"),Object(r.b)(c.a,{color:"info",mdxType:"CButton"},"Info"),Object(r.b)(c.a,{color:"light",mdxType:"CButton"},"Light"),Object(r.b)(c.a,{color:"dark",mdxType:"CButton"},"Dark"),Object(r.b)(c.a,{color:"link",mdxType:"CButton"},"Link")),Object(r.b)("div",{className:"callout callout-info"},Object(r.b)("h5",null,"Conveying meaning to assistive technologies"),Object(r.b)("p",null,"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.")),Object(r.b)("h2",{id:"disable-text-wrapping"},"Disable text wrapping"),Object(r.b)("p",null,"If you don't want the button text to wrap, you can add the ",Object(r.b)("inlineCode",{parentName:"p"},".text-nowrap")," className to the ",Object(r.b)("inlineCode",{parentName:"p"},"<CButton>"),". In Sass, you can set ",Object(r.b)("inlineCode",{parentName:"p"},"$btn-white-space: nowrap")," to disable text wrapping for each button."),Object(r.b)("h2",{id:"button-components"},"Button components"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<CButton>")," component are designed for ",Object(r.b)("inlineCode",{parentName:"p"},"<button>")," ,  ",Object(r.b)("inlineCode",{parentName:"p"},"<a>"),"  or  ",Object(r.b)("inlineCode",{parentName:"p"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),Object(r.b)("p",null,"If you're using ",Object(r.b)("inlineCode",{parentName:"p"},"<CButton>")," component as ",Object(r.b)("inlineCode",{parentName:"p"},"<a>")," elements that are used to trigger functionality ex. collapsing content, these links should be given a ",Object(r.b)("inlineCode",{parentName:"p"},'role="button"')," to adequately communicate their meaning to assistive technologies such as screen readers."),Object(r.b)(u.c,{__position:2,__code:'<CButton component="a" color="primary" href="#" role="button">\n  Link\n</CButton>\n<CButton type="submit" color="primary">\n  Button\n</CButton>\n<CButton component="input" type="button" color="primary" value="Input" />\n<CButton component="input" type="submit" color="primary" value="Submit" />\n<CButton component="input" type="reset" color="primary" value="Reset" />',__scope:(n={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},n.DefaultLayout=i.a,n._frontmatter=l,n),mdxType:"Playground"},Object(r.b)(c.a,{component:"a",color:"primary",href:"#",role:"button",mdxType:"CButton"},"Link"),Object(r.b)(c.a,{type:"submit",color:"primary",mdxType:"CButton"},"Button"),Object(r.b)(c.a,{component:"input",type:"button",color:"primary",value:"Input",mdxType:"CButton"}),Object(r.b)(c.a,{component:"input",type:"submit",color:"primary",value:"Submit",mdxType:"CButton"}),Object(r.b)(c.a,{component:"input",type:"reset",color:"primary",value:"Reset",mdxType:"CButton"})),Object(r.b)("h2",{id:"outline-buttons"},"Outline buttons"),Object(r.b)("p",null,"If you need a button, but without the strong background colors. Set ",Object(r.b)("inlineCode",{parentName:"p"},'variant="outline"')," prop to remove all background colors."),Object(r.b)(u.c,{__position:3,__code:'<CButton color="primary" variant="outline">\n  Primary\n</CButton>\n<CButton color="secondary" variant="outline">\n  Secondary\n</CButton>\n<CButton color="success" variant="outline">\n  Success\n</CButton>\n<CButton color="danger" variant="outline">\n  Danger\n</CButton>\n<CButton color="warning" variant="outline">\n  Warning\n</CButton>\n<CButton color="info" variant="outline">\n  Info\n</CButton>\n<CButton color="light" variant="outline">\n  Light\n</CButton>\n<CButton color="dark" variant="outline">\n  Dark\n</CButton>',__scope:(p={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},p.DefaultLayout=i.a,p._frontmatter=l,p),mdxType:"Playground"},Object(r.b)(c.a,{color:"primary",variant:"outline",mdxType:"CButton"},"Primary"),Object(r.b)(c.a,{color:"secondary",variant:"outline",mdxType:"CButton"},"Secondary"),Object(r.b)(c.a,{color:"success",variant:"outline",mdxType:"CButton"},"Success"),Object(r.b)(c.a,{color:"danger",variant:"outline",mdxType:"CButton"},"Danger"),Object(r.b)(c.a,{color:"warning",variant:"outline",mdxType:"CButton"},"Warning"),Object(r.b)(c.a,{color:"info",variant:"outline",mdxType:"CButton"},"Info"),Object(r.b)(c.a,{color:"light",variant:"outline",mdxType:"CButton"},"Light"),Object(r.b)(c.a,{color:"dark",variant:"outline",mdxType:"CButton"},"Dark")),Object(r.b)("h2",{id:"ghost-buttons"},"Ghost buttons"),Object(r.b)("p",null,"If you need a ghost variant of button, set ",Object(r.b)("inlineCode",{parentName:"p"},'variant="ghost"')," prop to remove all background colors."),Object(r.b)(u.c,{__position:4,__code:'<CButton color="primary" variant="ghost">\n  Primary\n</CButton>\n<CButton color="secondary" variant="ghost">\n  Secondary\n</CButton>\n<CButton color="success" variant="ghost">\n  Success\n</CButton>\n<CButton color="danger" variant="ghost">\n  Danger\n</CButton>\n<CButton color="warning" variant="ghost">\n  Warning\n</CButton>\n<CButton color="info" variant="ghost">\n  Info\n</CButton>\n<CButton color="light" variant="ghost">\n  Light\n</CButton>\n<CButton color="dark" variant="ghost">\n  Dark\n</CButton>',__scope:(b={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},b.DefaultLayout=i.a,b._frontmatter=l,b),mdxType:"Playground"},Object(r.b)(c.a,{color:"primary",variant:"ghost",mdxType:"CButton"},"Primary"),Object(r.b)(c.a,{color:"secondary",variant:"ghost",mdxType:"CButton"},"Secondary"),Object(r.b)(c.a,{color:"success",variant:"ghost",mdxType:"CButton"},"Success"),Object(r.b)(c.a,{color:"danger",variant:"ghost",mdxType:"CButton"},"Danger"),Object(r.b)(c.a,{color:"warning",variant:"ghost",mdxType:"CButton"},"Warning"),Object(r.b)(c.a,{color:"info",variant:"ghost",mdxType:"CButton"},"Info"),Object(r.b)(c.a,{color:"light",variant:"ghost",mdxType:"CButton"},"Light"),Object(r.b)(c.a,{color:"dark",variant:"ghost",mdxType:"CButton"},"Dark")),Object(r.b)("p",null,"CALLOUT: Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast."),Object(r.b)("h2",{id:"sizes"},"Sizes"),Object(r.b)("p",null,"Larger or smaller buttons? Add ",Object(r.b)("inlineCode",{parentName:"p"},'size="lg"')," or ",Object(r.b)("inlineCode",{parentName:"p"},'size="sm"')," for additional sizes."),Object(r.b)(u.c,{__position:5,__code:'<CButton color="primary" size="lg">\n  Large button\n</CButton>\n<CButton color="secondary" size="lg">\n  Large button\n</CButton>',__scope:(m={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},m.DefaultLayout=i.a,m._frontmatter=l,m),mdxType:"Playground"},Object(r.b)(c.a,{color:"primary",size:"lg",mdxType:"CButton"},"Large button"),Object(r.b)(c.a,{color:"secondary",size:"lg",mdxType:"CButton"},"Large button")),Object(r.b)(u.c,{__position:6,__code:'<CButton color="primary" size="sm">\n  Small button\n</CButton>\n<CButton color="secondary" size="sm">\n  Small button\n</CButton>',__scope:(y={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},y.DefaultLayout=i.a,y._frontmatter=l,y),mdxType:"Playground"},Object(r.b)(c.a,{color:"primary",size:"sm",mdxType:"CButton"},"Small button"),Object(r.b)(c.a,{color:"secondary",size:"sm",mdxType:"CButton"},"Small button")),Object(r.b)("h2",{id:"shapes"},"Shapes"),Object(r.b)("h3",{id:"pill-buttons"},"Pill buttons"),Object(r.b)(u.c,{__position:7,__code:'<CButton color="primary" shape="rounded-pill">\n  Primary\n</CButton>\n<CButton color="secondary" shape="rounded-pill">\n  Secondary\n</CButton>\n<CButton color="success" shape="rounded-pill">\n  Success\n</CButton>\n<CButton color="danger" shape="rounded-pill">\n  Danger\n</CButton>\n<CButton color="warning" shape="rounded-pill">\n  Warning\n</CButton>\n<CButton color="info" shape="rounded-pill">\n  Info\n</CButton>\n<CButton color="light" shape="rounded-pill">\n  Light\n</CButton>\n<CButton color="dark" shape="rounded-pill">\n  Dark\n</CButton>\n<CButton color="link" shape="rounded-pill">\n  Link\n</CButton>',__scope:(C={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},C.DefaultLayout=i.a,C._frontmatter=l,C),mdxType:"Playground"},Object(r.b)(c.a,{color:"primary",shape:"rounded-pill",mdxType:"CButton"},"Primary"),Object(r.b)(c.a,{color:"secondary",shape:"rounded-pill",mdxType:"CButton"},"Secondary"),Object(r.b)(c.a,{color:"success",shape:"rounded-pill",mdxType:"CButton"},"Success"),Object(r.b)(c.a,{color:"danger",shape:"rounded-pill",mdxType:"CButton"},"Danger"),Object(r.b)(c.a,{color:"warning",shape:"rounded-pill",mdxType:"CButton"},"Warning"),Object(r.b)(c.a,{color:"info",shape:"rounded-pill",mdxType:"CButton"},"Info"),Object(r.b)(c.a,{color:"light",shape:"rounded-pill",mdxType:"CButton"},"Light"),Object(r.b)(c.a,{color:"dark",shape:"rounded-pill",mdxType:"CButton"},"Dark"),Object(r.b)(c.a,{color:"link",shape:"rounded-pill",mdxType:"CButton"},"Link")),Object(r.b)("h3",{id:"square-buttons"},"Square buttons"),Object(r.b)(u.c,{__position:8,__code:'<CButton color="primary" shape="rounded-0">\n  Primary\n</CButton>\n<CButton color="secondary" shape="rounded-0">\n  Secondary\n</CButton>\n<CButton color="success" shape="rounded-0">\n  Success\n</CButton>\n<CButton color="danger" shape="rounded-0">\n  Danger\n</CButton>\n<CButton color="warning" shape="rounded-0">\n  Warning\n</CButton>\n<CButton color="info" shape="rounded-0">\n  Info\n</CButton>\n<CButton color="light" shape="rounded-0">\n  Light\n</CButton>\n<CButton color="dark" shape="rounded-0">\n  Dark\n</CButton>\n<CButton color="link" shape="rounded-0">\n  Link\n</CButton>',__scope:(B={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},B.DefaultLayout=i.a,B._frontmatter=l,B),mdxType:"Playground"},Object(r.b)(c.a,{color:"primary",shape:"rounded-0",mdxType:"CButton"},"Primary"),Object(r.b)(c.a,{color:"secondary",shape:"rounded-0",mdxType:"CButton"},"Secondary"),Object(r.b)(c.a,{color:"success",shape:"rounded-0",mdxType:"CButton"},"Success"),Object(r.b)(c.a,{color:"danger",shape:"rounded-0",mdxType:"CButton"},"Danger"),Object(r.b)(c.a,{color:"warning",shape:"rounded-0",mdxType:"CButton"},"Warning"),Object(r.b)(c.a,{color:"info",shape:"rounded-0",mdxType:"CButton"},"Info"),Object(r.b)(c.a,{color:"light",shape:"rounded-0",mdxType:"CButton"},"Light"),Object(r.b)(c.a,{color:"dark",shape:"rounded-0",mdxType:"CButton"},"Dark"),Object(r.b)(c.a,{color:"link",shape:"rounded-0",mdxType:"CButton"},"Link")),Object(r.b)("h2",{id:"disabled-state"},"Disabled state"),Object(r.b)("p",null,"Add the ",Object(r.b)("inlineCode",{parentName:"p"},"disabled")," boolean prop to any ",Object(r.b)("inlineCode",{parentName:"p"},"<CButton>")," component to make buttons look inactive. Disabled button has ",Object(r.b)("inlineCode",{parentName:"p"},"pointer-events: none")," applied to, disabling hover and active states from triggering."),Object(r.b)(u.c,{__position:9,__code:'<CButton color="primary" size="lg" disabled>\n  Primary button\n</CButton>\n<CButton color="secondary" size="lg" disabled>\n  Button\n</CButton>',__scope:(g={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},g.DefaultLayout=i.a,g._frontmatter=l,g),mdxType:"Playground"},Object(r.b)(c.a,{color:"primary",size:"lg",disabled:!0,mdxType:"CButton"},"Primary button"),Object(r.b)(c.a,{color:"secondary",size:"lg",disabled:!0,mdxType:"CButton"},"Button")),Object(r.b)("p",null,"Disabled buttons using the ",Object(r.b)("inlineCode",{parentName:"p"},"<a>")," component act a little different:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"<a>"),"s don't support the ",Object(r.b)("inlineCode",{parentName:"p"},"disabled")," attribute, so CoreUI has to add ",Object(r.b)("inlineCode",{parentName:"p"},".disabled")," className to make buttons look inactive. CoreUI also has to add to the disabled button component ",Object(r.b)("inlineCode",{parentName:"p"},'aria-disabled="true"')," attribute to show the state of the component to assistive technologies."),Object(r.b)(u.c,{__position:10,__code:'<CButton component="a" href="#" color="primary" size="lg" disabled>\n  Primary link\n</CButton>\n<CButton component="a" href="#" color="secondary" size="lg" disabled>\n  Link\n</CButton>',__scope:(h={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},h.DefaultLayout=i.a,h._frontmatter=l,h),mdxType:"Playground"},Object(r.b)(c.a,{component:"a",href:"#",color:"primary",size:"lg",disabled:!0,mdxType:"CButton"},"Primary link"),Object(r.b)(c.a,{component:"a",href:"#",color:"secondary",size:"lg",disabled:!0,mdxType:"CButton"},"Link")),Object(r.b)("p",null,"TODO: callout callout-warning"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},".disabled")," class uses ",Object(r.b)("inlineCode",{parentName:"p"},"pointer-events: none")," to try to disable the link functionality of ",Object(r.b)("inlineCode",{parentName:"p"},"<a>"),"s, but that CSS property is not yet standardized. Besides, even in browsers that do support ",Object(r.b)("inlineCode",{parentName:"p"},"pointer-events: none"),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, we automatically add a ",Object(r.b)("inlineCode",{parentName:"p"},'tabindex="-1"')," attribute on disabled links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality."),Object(r.b)("h2",{id:"block-buttons"},"Block buttons"),Object(r.b)("p",null,"Create buttons that span the full width of a parent—by using utilities."),Object(r.b)(u.c,{__position:11,__code:'<div className="d-grid gap-2">\n  <CButton color="primary">Button</CButton>\n  <CButton color="primary">Button</CButton>\n</div>',__scope:(O={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},O.DefaultLayout=i.a,O._frontmatter=l,O),mdxType:"Playground"},Object(r.b)("div",{className:"d-grid gap-2"},Object(r.b)(c.a,{color:"primary",mdxType:"CButton"},"Button"),Object(r.b)(c.a,{color:"primary",mdxType:"CButton"},"Button"))),Object(r.b)("p",null,"Here we create a responsive variation, starting with vertically stacked buttons until the ",Object(r.b)("inlineCode",{parentName:"p"},"md")," breakpoint, where ",Object(r.b)("inlineCode",{parentName:"p"},".d-md-block")," replaces the ",Object(r.b)("inlineCode",{parentName:"p"},".d-grid")," class, thus nullifying the ",Object(r.b)("inlineCode",{parentName:"p"},"gap-2")," utility. Resize your browser to see them change."),Object(r.b)(u.c,{__position:12,__code:'<div className="d-grid gap-2 d-md-block">\n  <CButton color="primary">Button</CButton>\n  <CButton color="primary">Button</CButton>\n</div>',__scope:(j={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},j.DefaultLayout=i.a,j._frontmatter=l,j),mdxType:"Playground"},Object(r.b)("div",{className:"d-grid gap-2 d-md-block"},Object(r.b)(c.a,{color:"primary",mdxType:"CButton"},"Button"),Object(r.b)(c.a,{color:"primary",mdxType:"CButton"},"Button"))),Object(r.b)("p",null,'You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use ',Object(r.b)("inlineCode",{parentName:"p"},".col-6"),". Center it horizontally with ",Object(r.b)("inlineCode",{parentName:"p"},".mx-auto"),", too."),Object(r.b)(u.c,{__position:13,__code:'<div className="d-grid gap-2 col-6 mx-auto">\n  <CButton color="primary">Button</CButton>\n  <CButton color="primary">Button</CButton>\n</div>',__scope:(f={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},f.DefaultLayout=i.a,f._frontmatter=l,f),mdxType:"Playground"},Object(r.b)("div",{className:"d-grid gap-2 col-6 mx-auto"},Object(r.b)(c.a,{color:"primary",mdxType:"CButton"},"Button"),Object(r.b)(c.a,{color:"primary",mdxType:"CButton"},"Button"))),Object(r.b)("p",null,"Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked."),Object(r.b)(u.c,{__position:14,__code:'<div className="d-grid gap-2 d-md-flex justify-content-md-end">\n  <CButton color="primary" className="me-md-2">\n    Button\n  </CButton>\n  <CButton color="primary">Button</CButton>\n</div>',__scope:(_={props:v,DefaultLayout:i.a,Playground:u.c,Props:u.d,CButton:c.a},_.DefaultLayout=i.a,_._frontmatter=l,_),mdxType:"Playground"},Object(r.b)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end"},Object(r.b)(c.a,{color:"primary",className:"me-md-2",mdxType:"CButton"},"Button"),Object(r.b)(c.a,{color:"primary",mdxType:"CButton"},"Button"))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"cbutton"},"CButton"),Object(r.b)(u.d,{of:c.a,mdxType:"Props"}))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/button/CButton.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-button-c-button-mdx-be09c62d5c60f43d1c1a.js.map