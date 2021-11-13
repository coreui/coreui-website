"use strict";(self.webpackChunkangular_v4_dev=self.webpackChunkangular_v4_dev||[]).push([[912],{9912:(u,s,o)=>{o.r(s),o.d(s,{IntroductionModule:()=>h});var i=o(6715),c=o(8457),d=o(5175),l=o(1280),t=o(639);const p=[{path:"",component:(()=>{class n{constructor(r){this.elementRef=r,this.content=o(5130).Z}onLoad(){this.stripContent(),this.setHeadings()}setHeadings(){const r=[];this.elementRef.nativeElement.querySelectorAll("h2").forEach(a=>r.push(a)),this.headings=r}stripContent(){this.elementRef.nativeElement.querySelector("markdown").querySelectorAll("markdown > p:nth-child(-n + 2), #ngx-markdown, #table-of-contents + ul, #table-of-contents").forEach(r=>r.remove())}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(t.SBq))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-introduction"]],decls:4,vars:1,consts:[["id","getting-started"]],template:function(r,a){1&r&&(t.TgZ(0,"h1",0),t._uU(1,"Get Started"),t.qZA(),t.TgZ(2,"markdown"),t._uU(3),t.qZA()),2&r&&(t.xp6(3),t.Oqu(a.content))},directives:[i.lF],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(p)],l.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m,i.JP.forChild(),c.U,d.m]]}),n})()},5130:(u,s,o)=>{o.d(s,{Z:()=>i});const i="---\r\n### Introduction  \r\n\r\n<p>CoreUI for Angular is UI Component library written in TypeScript, and ready for your next Angular project.</p>\r\n<p>Learn how to include CoreUI for Angular in your project.</p>\r\n\r\n---\r\n\r\n## Installation\r\n\r\n### Npm\r\n\r\n```bash\r\nnpm install @coreui/angular@next\r\n```\r\n\r\n### Yarn\r\n\r\n```bash\r\nyarn add @coreui/angular@next\r\n```\r\n\r\n---\r\n\r\n## Using components\r\n\r\n```ts\r\nimport { AlertModule } from '@coreui/angular';\r\n\r\n@NgModule({\r\n  imports: [AlertModule,]\r\n})\r\nexport class AppModule(){}\r\n```\r\n\r\n---\r\n\r\n## Stylesheets\r\n\r\nAngular components are styled using `@coreui/coreui` CSS library, but you can use them also with bootstrap CSS library.\r\nThat is possible because `@coreui/coreui` library is compatible with bootstrap, it just extends its functionalities. The\r\nonly exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem.\r\n\r\n### CoreUI CSS files\r\n\r\n###### Installation\r\n\r\n```bash\r\nnpm install @coreui/coreui\r\n```\r\n\r\n###### Basic usage\r\n\r\n```js\r\nimport '@coreui/dist/css/coreui.min.css'\r\n```\r\n\r\n### Bootstrap CSS files\r\n\r\n###### Installation\r\n\r\n```bash\r\nnpm install bootstrap\r\n```\r\n\r\n###### Basic usage\r\n\r\n```js\r\nimport 'bootstrap/dist/css/bootstrap.min.css'\r\n```\r\n"}}]);