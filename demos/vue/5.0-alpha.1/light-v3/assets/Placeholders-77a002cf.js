import{V as b}from"./vue-77e69036.js";import{_ as y,a,s as P,n as h,w as l,f as m,d as e,e as o,g as n,v as u}from"./index-972d7b18.js";const v={name:"Placeholders",setup(){return{VueImg:b}}},V=o("strong",null,"Vue Placeholder",-1),z=o("p",{class:"text-body-secondary small"},' In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two. ',-1),B={class:"d-flex justify-content-around"},T=o("title",null,"Placeholder",-1),k=o("rect",{width:"100%",height:"100%",fill:"#868e96"},null,-1),I=o("strong",null,"Vue Placeholder",-1),D=o("p",null,[n(" Create placeholders with the "),o("code",null,"<CPlaceholder>"),n(" component and a grid column propx (e.g., "),o("code",null,':xs="6"'),n(") to set the "),o("code",null,"width"),n(". They can replace the text inside an element or be added as a modifier class to an existing component. ")],-1),A={"aria-hidden":"true"},N=o("strong",null,"Vue Placeholder",-1),R=o("small",null," Width",-1),S=o("p",null,[n(" You can change the "),o("code",null,"width"),n(" through grid column classes, width utilities, or inline styles. ")],-1),$=o("strong",null,"Vue Placeholder",-1),E=o("small",null," Color",-1),H=o("p",null,[n(" By default, the "),o("code",null,"<CPlaceholder>"),n(" uses "),o("code",null,"currentColor"),n(". This can be overridden with a custom color or utility class. ")],-1),M=o("strong",null,"Vue Placeholder",-1),Y=o("small",null," Sizing",-1),j=o("p",null,[n(" The size of "),o("code",null,"<CPlaceholder>"),n("s are based on the typographic style of the parent element. Customize them with "),o("code",null,"size"),n(" prop: "),o("code",null,"lg"),n(", "),o("code",null,"sm"),n(", or "),o("code",null,"xs"),n(". ")],-1),q=o("strong",null,"Vue Placeholder",-1),G=o("small",null," Animation",-1),W=o("p",null,[n(" Animate placeholders with "),o("code",null,'animation="glow"'),n(" or "),o("code",null,'animation="wave"'),n(" to better convey the perception of something being "),o("em",null,"actively"),n(" loaded. ")],-1);function F(J,K,L,C,O,Q){const c=a("CCardHeader"),p=a("CCardImage"),f=a("CCardTitle"),x=a("CCardText"),_=a("CButton"),s=a("CCardBody"),d=a("CCard"),t=a("CPlaceholder"),r=a("DocsExample"),g=a("CCol"),w=a("CRow"),i=P("c-placeholder");return m(),h(w,null,{default:l(()=>[e(g,{xs:12},{default:l(()=>[e(d,{class:"mb-4"},{default:l(()=>[e(c,null,{default:l(()=>[V]),_:1}),e(s,null,{default:l(()=>[z,e(r,{href:"components/placeholder.html"},{default:l(()=>[o("div",B,[e(d,{style:{width:"18rem"}},{default:l(()=>[e(p,{orientation:"top",src:C.VueImg},null,8,["src"]),e(s,null,{default:l(()=>[e(f,null,{default:l(()=>[n("Card title")]),_:1}),e(x,null,{default:l(()=>[n(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),_:1}),e(_,{color:"primary",href:"#"},{default:l(()=>[n("Go somewhere")]),_:1})]),_:1})]),_:1}),e(d,{style:{width:"18rem"}},{default:l(()=>[e(p,{component:"svg",orientation:"top",width:"100%",height:"162",role:"img","aria-label":"Placeholder",preserveAspectRatio:"xMidYMid slice",focusable:"false"},{default:l(()=>[T,k]),_:1}),e(s,null,{default:l(()=>[u((m(),h(f,null,{default:l(()=>[e(t,{xs:6})]),_:1})),[[i,{animation:"glow",xs:7}]]),u((m(),h(x,null,{default:l(()=>[e(t,{xs:7}),e(t,{xs:4}),e(t,{xs:4}),e(t,{xs:6}),e(t,{xs:8})]),_:1})),[[i,{animation:"glow"}]]),u(e(_,{color:"primary","aria-hidden":"true",disabled:"",href:"#",tabindex:"-1"},null,512),[[i,{xs:6}]])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-4"},{default:l(()=>[e(c,null,{default:l(()=>[I]),_:1}),e(s,null,{default:l(()=>[D,e(r,{href:"components/placeholder.html"},{default:l(()=>[o("p",A,[e(t,{xs:6})]),u(e(_,{color:"primary","aria-hidden":"true",disabled:"",href:"#",tabindex:"-1"},null,512),[[i,{xs:4}]])]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-4"},{default:l(()=>[e(c,null,{default:l(()=>[N,n(),R]),_:1}),e(s,null,{default:l(()=>[S,e(r,{href:"components/placeholder.html#width"},{default:l(()=>[e(t,{xs:6}),e(t,{class:"w-75"}),e(t,{style:{width:"30%"}})]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-4"},{default:l(()=>[e(c,null,{default:l(()=>[$,n(),E]),_:1}),e(s,null,{default:l(()=>[H,e(r,{href:"components/placeholder.html#color"},{default:l(()=>[e(t,{xs:12}),e(t,{color:"primary",xs:12}),e(t,{color:"secondary",xs:12}),e(t,{color:"success",xs:12}),e(t,{color:"danger",xs:12}),e(t,{color:"warning",xs:12}),e(t,{color:"info",xs:12}),e(t,{color:"light",xs:12}),e(t,{color:"dark",xs:12})]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-4"},{default:l(()=>[e(c,null,{default:l(()=>[M,n(),Y]),_:1}),e(s,null,{default:l(()=>[j,e(r,{href:"components/placeholder.html#color"},{default:l(()=>[e(t,{xs:12,size:"lg"}),e(t,{xs:12}),e(t,{xs:12,size:"sm"}),e(t,{xs:12,size:"xs"})]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-4"},{default:l(()=>[e(c,null,{default:l(()=>[q,n(),G]),_:1}),e(s,null,{default:l(()=>[W,e(r,{href:"components/placeholder.html#animation"},{default:l(()=>[e(t,{component:"p",animation:"glow"},{default:l(()=>[e(t,{xs:12})]),_:1}),e(t,{component:"p",animation:"wave"},{default:l(()=>[e(t,{xs:12})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Z=y(v,[["render",F]]);export{Z as default};
