import{$t as Uv,Br as kw,Fi as v,Nt as Rs,T as D_,Ut as Td,kt as RM,nt as KM,qn as cv,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ui as nr,Xi as y$1,jt as Tp}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var c=class i{static{this.ɵfac=function(o){return new(o||i)}}static{this.ɵcmp=D_({type:i,selectors:[[`docs-callout01-example`]],decls:16,vars:0,consts:[[`color`,`primary`],[`color`,`secondary`],[`color`,`success`],[`color`,`danger`],[`color`,`warning`],[`color`,`info`],[`color`,`light`],[`color`,`dark`]],template:function(o,l){o&1&&(Rs(0,`c-callout`,0),RM(1,` New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
`),gd(),Rs(2,`c-callout`,1),RM(3,` New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
`),gd(),Rs(4,`c-callout`,2),RM(5,` New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
`),gd(),Rs(6,`c-callout`,3),RM(7,` New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
`),gd(),Rs(8,`c-callout`,4),RM(9,` New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
`),gd(),Rs(10,`c-callout`,5),RM(11,` New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
`),gd(),Rs(12,`c-callout`,6),RM(13,` New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
`),gd(),Rs(14,`c-callout`,7),RM(15,` New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
`),gd())},dependencies:[Tp],encapsulation:2})}};var y=`\`\`\`typescript
import { CalloutModule } from '@coreui/angular';

@NgModule({
  imports: [CalloutModule,...]
})
export class AppModule(){}
\`\`\`
`;var N=()=>[`components/callout/examples/callout01.component.html`,`components/callout/examples/callout01.component.ts`];var w=class i{constructor(){this.usage=y;this.headService=v(y$1);this.name=`Callout`;this.title=`Angular Callout Component`;this.description=`Angular Callout component provides presentation of content in a visually distinct manner. Includes a heading, icon and typically text-based content.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(o){return new(o||i)}}static{this.ɵcmp=D_({type:i,selectors:[[`ng-component`]],decls:18,vars:6,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`stackblitz`,``,`componentName`,`Callout01Component`,3,`files`,`name`],[`markdown`,``,1,`highlight`],[1,`api-table`]],template:function(o,l){o&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`
  ## Examples

  Callout component is prepared for any length of text, as well as an optional elements like icons, headings, etc. For a styling, use one of the **required**
  contextual props (e.g., \`color="success"\`).
`),gd(),Rs(7,`docs-example`,2),lv(8,`docs-callout01-example`),gd(),Rs(9,`markdown`),RM(10,`

  ---

  ## API

  ### Callout Module

`),gd(),Rs(11,`div`,3),RM(12),gd(),Rs(13,`markdown`),RM(14,`
  ---

  ### c-callout
  _component_

  #### Inputs
  `),Rs(15,`div`,4),RM(16,`

    | name | description | type | default |
    | ---- | ----------- | ---- | ------- |
    | \`color\` | Sets the color context of the component to one of CoreUI\u2019s themed colors.| \`Colors\` | |

  `),gd(),RM(17,`
`),gd()),o&2&&(kw(),Uv(l.title),kw(2),Uv(l.description),kw(4),cv(`files`,KM(5,N))(`name`,l.title),kw(5),Td(` `,l.usage,`
`))},dependencies:[f,nr,ie,c],encapsulation:2})}};export{w as CalloutComponent};