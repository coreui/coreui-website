import{$t as Uv,An as aM,Br as kw,Fi as v,Fr as kb,G as Ht,K as Hy,Lr as kp,N as Ev,Nt as Rs,T as D_,Ut as Td,Wr as lN,_t as Op,an as WS,d as BM,gn as Yv,ht as Ob,jn as aN,ki as uN,kt as RM,nt as KM,qn as cv,qr as lv,rt as Kv,ui as pN,un as XS,ur as gd}from"./chunk-D4QfcjgQ.js";import{c as It,m as Tt}from"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{$n as jn,Cn as co,Hn as gu,Kr as vr,Mr as ss,Nr as tO,Q as Mi,Ui as nr,Xi as y,Yt as Xt,Zr as wn,b as Cr,f as Bi,jr as so,or as lm,pr as nn,sr as lo,ti as xg,u as Be$1}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";import{t as m}from"./chunk-BSCFwVWW.js";var L=class n{constructor(){this.time=Ht(new Date)}ngOnInit(){let o=this.time();o.setMilliseconds(0),o.setSeconds(0),o.setMinutes(15),o.setHours(13),this.time.set(o)}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker14`]],decls:11,vars:8,consts:[[`form`,`ngForm`],[`lg`,`4`],[`name`,`timePicker`,3,`ngModelChange`,`ngModel`]],template:function(i,r){if(i&1){let T=WS();Rs(0,`c-row`)(1,`c-col`,1)(2,`form`,null,0)(4,`c-time-picker`,2),Kv(`ngModelChange`,function(P){return Op(T),BM(r.time,P)||(r.time=P),kp(P)}),gd(),Ob(),gd()()(),lv(5,`br`),RM(6),aN(7,`json`),lv(8,`br`),RM(9),aN(10,`date`)}if(i&2){let T=aM(3);kw(4),Yv(`ngModel`,r.time),kb(),kw(2),Td(`
Form value: `,lN(7,3,T.value),`
`),kw(3),Td(`
timePicker value: `,uN(10,5,T.value.timePicker,`H:mm`),`
`)}},dependencies:[lm,ss,Bi,tO,wn,vr,Cr,so,xg,Mi,Tt,It],encapsulation:2})}};var j=class n{constructor(){this.time=new Date}get toLocaleTimeString(){return this.formGroup.value.timePicker?this.formGroup.value.timePicker.toLocaleTimeString():``}ngOnInit(){this.time.setMilliseconds(0),this.time.setSeconds(0),this.time.setMinutes(15),this.time.setHours(11),this.formGroup=new jn({timePicker:new Xt(this.time,{nonNullable:!1})})}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker13`]],decls:9,vars:5,consts:[[`lg`,`4`],[3,`formGroup`],[`formControlName`,`timePicker`,`seconds`,``]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0)(2,`form`,1),lv(3,`c-time-picker`,2),Ob(),gd()()(),lv(4,`br`),RM(5),aN(6,`json`),lv(7,`br`),RM(8)),i&2&&(kw(2),cv(`formGroup`,r.formGroup),kw(),kb(),kw(2),Td(`
Form value: `,lN(6,3,r.formGroup.value),`
`),kw(3),Td(`
timePicker value: `,r.toLocaleTimeString,`
`))},dependencies:[lm,ss,Bi,tO,wn,vr,co,lo,Mi,Tt],encapsulation:2})}};var J=class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker12`]],decls:3,vars:0,consts:[[`lg`,`4`],[`placeholder`,`تاریخ شروع`,`locale`,`fa-IR`,`seconds`,``]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0),lv(2,`c-time-picker`,1),gd()())},dependencies:[lm,ss,Mi],encapsulation:2})}};var K=class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker11`]],decls:3,vars:0,consts:[[`lg`,`4`],[`placeholder`,`בחר תאריך`,`locale`,`he-IL`]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0),lv(2,`c-time-picker`,1),gd()())},dependencies:[lm,ss,Mi],encapsulation:2})}};var U=class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker10`]],decls:3,vars:0,consts:[[`lg`,`4`],[`placeholder`,`날짜 선택`,`locale`,`ko`]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0),lv(2,`c-time-picker`,1),gd()())},dependencies:[lm,ss,Mi],encapsulation:2})}};var q=class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker09`]],decls:3,vars:0,consts:[[`lg`,`4`],[`placeholder`,`日付を選択`,`locale`,`ja`,`seconds`,``]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0),lv(2,`c-time-picker`,1),gd()())},dependencies:[lm,ss,Mi],encapsulation:2})}};var Q=class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker08`]],decls:3,vars:0,consts:[[`lg`,`4`],[`placeholder`,`入住日期`,`locale`,`zh-CN`,`seconds`,``]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0),lv(2,`c-time-picker`,1),gd()())},dependencies:[lm,ss,Mi],encapsulation:2})}};var X=class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker07`]],decls:3,vars:0,consts:[[`lg`,`4`]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0),lv(2,`c-time-picker`),gd()())},dependencies:[lm,ss,Mi],encapsulation:2})}};function be(n,o){if(n&1){let i=WS();Rs(0,`button`,4),Ev(`click`,function(){Op(i),XS();return kp(aM(3).clearTime())}),RM(1,` Cancel `),gd(),Rs(2,`button`,5),RM(3,`OK`),gd()}if(n&2){let i=o.$implicit,r=XS();cv(`dropdownComponent`,i),kw(2),cv(`disabled`,!r.time)(`dropdownComponent`,i)}}var Y=class n{constructor(){this.time=Ht(new Date)}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker06`]],decls:5,vars:1,consts:[[`timePicker`,`cTimePicker`],[`lg`,`4`],[`placeholder`,`-- : --`,3,`timeChange`,`time`],[`cTemplateId`,`timePickerFooter`],[`cButton`,``,`color`,`secondary`,`variant`,`ghost`,`size`,`sm`,`cDropdownClose`,``,3,`click`,`dropdownComponent`],[`cButton`,``,`color`,`primary`,`size`,`sm`,`cDropdownClose`,``,3,`disabled`,`dropdownComponent`]],template:function(i,r){if(i&1){let T=WS();Rs(0,`c-row`)(1,`c-col`,1)(2,`c-time-picker`,2,0),Kv(`timeChange`,function(P){return Op(T),BM(r.time,P)||(r.time=P),kp(P)}),Hy(4,be,4,3,`ng-template`,3),gd()()()}i&2&&(kw(2),Yv(`time`,r.time))},dependencies:[lm,ss,Mi,Be$1,nn,gu],encapsulation:2})}};var Z=class n{constructor(){this.filterHours=o=>o>8&&o<=23;this.filterMinutes=o=>(o%=10)===0;this.filterSeconds=o=>(o%=15)===0;this.time=Ht(new Date)}handleTimeChange(o){o?this.time.set(new Date(o?.getTime())):this.time.set(o)}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker05`]],decls:6,vars:8,consts:[[`lg`,`4`],[`seconds`,``,3,`timeChange`,`filterHours`,`filterMinutes`,`filterSeconds`,`time`],[1,`d-flex`,`align-items-center`]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0)(2,`c-time-picker`,1),Ev(`timeChange`,function(v){return r.handleTimeChange(v)}),Kv(`timeChange`,function(v){return BM(r.time,v)||(r.time=v),v}),gd()(),Rs(3,`c-col`,2),RM(4),aN(5,`date`),gd()()),i&2&&(kw(2),cv(`filterHours`,r.filterHours)(`filterMinutes`,r.filterMinutes)(`filterSeconds`,r.filterSeconds),Yv(`time`,r.time),kw(2),Td(` `,uN(5,5,r.time(),`shortTime`),` `))},dependencies:[lm,ss,Mi,It],encapsulation:2})}};var $=class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker04`]],decls:3,vars:0,consts:[[`lg`,`4`],[`inputReadOnly`,``]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0),lv(2,`c-time-picker`,1),gd()())},dependencies:[lm,ss,Mi],encapsulation:2})}};var ee=class n{constructor(){this.time=new Date}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker03`]],decls:5,vars:1,consts:[[`lg`,`4`],[`disabled`,``],[`disabled`,``,3,`time`]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0),lv(2,`c-time-picker`,1),gd(),Rs(3,`c-col`,0),lv(4,`c-time-picker`,2),gd()()),i&2&&(kw(4),cv(`time`,r.time))},dependencies:[lm,ss,Mi],encapsulation:2})}};var te=class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker02`]],decls:6,vars:0,consts:[[1,`mb-4`],[`lg`,`5`],[`size`,`lg`],[`lg`,`4`],[`size`,`sm`]],template:function(i,r){i&1&&(Rs(0,`c-row`,0)(1,`c-col`,1),lv(2,`c-time-picker`,2),gd()(),Rs(3,`c-row`)(4,`c-col`,3),lv(5,`c-time-picker`,4),gd()())},dependencies:[lm,ss,Mi],encapsulation:2})}};var ne=class n{constructor(){this.time=new Date}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker01`]],decls:5,vars:1,consts:[[`lg`,`4`],[3,`time`]],template:function(i,r){i&1&&(Rs(0,`c-row`)(1,`c-col`,0),lv(2,`c-time-picker`),gd(),Rs(3,`c-col`,0),lv(4,`c-time-picker`,1),gd()()),i&2&&(kw(4),cv(`time`,r.time))},dependencies:[lm,ss,Mi],encapsulation:2})}};var ve=`\`\`\`typescript
import { 
  TimePickerModule,
  DropdownModule,
  SharedModule
} from '@coreui/angular';

@NgModule({
    imports: [
      TimePickerModule,
      DropdownModule,
      SharedModule
    ]
})
export class AppModule() { }
\`\`\`
`;var we=()=>[`forms/time-picker/examples/time-picker01.component.html`,`forms/time-picker/examples/time-picker01.component.ts`];var De=()=>[`forms/time-picker/examples/time-picker02.component.html`];var Se=()=>[`forms/time-picker/examples/time-picker03.component.html`];var Ee=()=>[`forms/time-picker/examples/time-picker04.component.html`];var Me=()=>[`forms/time-picker/examples/time-picker05.component.html`,`forms/time-picker/examples/time-picker05.component.ts`];var Fe=()=>[`forms/time-picker/examples/time-picker06.component.html`,`forms/time-picker/examples/time-picker06.component.ts`];var Ne=()=>[`forms/time-picker/examples/time-picker07.component.html`];var Ie=()=>[`forms/time-picker/examples/time-picker08.component.html`];var Re=()=>[`forms/time-picker/examples/time-picker09.component.html`];var Ae=()=>[`forms/time-picker/examples/time-picker10.component.html`];var Oe=()=>[`forms/time-picker/examples/time-picker11.component.html`];var Ge=()=>[`forms/time-picker/examples/time-picker12.component.html`];var Be=()=>[`forms/time-picker/examples/time-picker13.component.html`,`forms/time-picker/examples/time-picker13.component.ts`];var ze=()=>[`forms/time-picker/examples/time-picker14.component.html`,`forms/time-picker/examples/time-picker14.component.ts`];function He(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker01`),gd())}function Ve(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker02`),gd())}function We(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker03`),gd())}function Le(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker04`),gd())}function je(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker05`),gd())}function Je(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker06`),gd())}function Ke(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker07`),gd())}function Ue(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker08`),gd())}function qe(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker09`),gd())}function Qe(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker10`),gd())}function Xe(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker11`),gd())}function Ye(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker12`),gd())}function Ze(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker13`),gd())}function $e(n,o){n&1&&(Rs(0,`div`,6),lv(1,`docs-time-picker14`),gd())}var Pe=class n{constructor(){this.usage=ve;this.headService=v(y);this.name=`Time Picker`;this.title=`Angular Time Picker Component`;this.description=`Create consistent cross-browser and cross-device Angular time picker.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description,pro:!0})}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-time-picker-docs`]],decls:90,vars:31,consts:[[`docsExample`,``],[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[3,`files`],[`markdown`,``,1,`highlight`],[1,`api-table`],[1,`docs-example`,`p-3`]],template:function(i,r){i&1&&(lv(0,`docs-banner-pro`),Rs(1,`h1`,1),RM(2),gd(),Rs(3,`p`,2),RM(4),gd(),lv(5,`docs-ads-carbon-loader`),Rs(6,`markdown`),RM(7,`

  ## Examples
`),gd(),Rs(8,`docs-example`,3),Hy(9,He,2,0,`ng-template`,null,0,pN),gd(),Rs(11,`markdown`),RM(12,'\n\n  ### Sizing\n  Set heights using `size` property like `size="lg"` and `size="sm"`.\n'),gd(),Rs(13,`docs-example`,3),Hy(14,Ve,2,0,`ng-template`,null,0,pN),gd(),Rs(16,`markdown`),RM(17,`

  ### Disabled
  Add the \`disabled\` boolean attribute on an input to give it a grayed out appearance and remove pointer events.
`),gd(),Rs(18,`docs-example`,3),Hy(19,We,2,0,`ng-template`,null,0,pN),gd(),Rs(21,`markdown`),RM(22,`

  ### Readonly
  Add the \`inputReadOnly\` boolean attribute to prevent modification of the input value.
`),gd(),Rs(23,`docs-example`,3),Hy(24,Le,2,0,`ng-template`,null,0,pN),gd(),Rs(26,`markdown`),RM(27,`

  ### Filtered
  Add filter callback functions to limit selectable values.
`),gd(),Rs(28,`docs-example`,3),Hy(29,je,2,0,`ng-template`,null,0,pN),gd(),Rs(31,`markdown`),RM(32,`

  ### with Footer
`),gd(),Rs(33,`docs-example`,3),Hy(34,Je,2,0,`ng-template`,null,0,pN),gd(),Rs(36,`markdown`),RM(37,`

  ## Non-english locale
  ### Auto
`),gd(),Rs(38,`docs-example`,3),Hy(39,Ke,2,0,`ng-template`,null,0,pN),gd(),Rs(41,`markdown`),RM(42,`

  ### Chinese
`),gd(),Rs(43,`docs-example`,3),Hy(44,Ue,2,0,`ng-template`,null,0,pN),gd(),Rs(46,`markdown`),RM(47,`

  ### Japanese
`),gd(),Rs(48,`docs-example`,3),Hy(49,qe,2,0,`ng-template`,null,0,pN),gd(),Rs(51,`markdown`),RM(52,`

  ### Korean
`),gd(),Rs(53,`docs-example`,3),Hy(54,Qe,2,0,`ng-template`,null,0,pN),gd(),Rs(56,`markdown`),RM(57,`

  `),RM(58,`
  `),RM(59,`

  ### Hebrew
`),gd(),Rs(60,`docs-example`,3),Hy(61,Xe,2,0,`ng-template`,null,0,pN),gd(),Rs(63,`markdown`),RM(64,`

  ### Persian
`),gd(),Rs(65,`docs-example`,3),Hy(66,Ye,2,0,`ng-template`,null,0,pN),gd(),Rs(68,`markdown`),RM(69,`
  ## Forms

  Angular handles user input through reactive and template-driven forms.
  CoreUI Time Picker supports both types.

  ### Reactive
`),gd(),Rs(70,`docs-example`,3),Hy(71,Ze,2,0,`ng-template`,null,0,pN),gd(),Rs(73,`markdown`),RM(74,`

  ### Template-driven
`),gd(),Rs(75,`docs-example`,3),Hy(76,$e,2,0,`ng-template`,null,0,pN),gd(),Rs(78,`markdown`),RM(79,`
  ---

  ## API reference

  ### TimePicker Module

`),gd(),Rs(80,`div`,4),RM(81),gd(),Rs(82,`markdown`),RM(83,`
  ---

  ### c-time-picker
  _component_

  ##### Inputs
  `),Rs(84,`div`,5),RM(85,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `time` | Initial selected time. | `Date` | _undefined_ |\n    | `cleaner` | Toggle visibility or set the content of the cleaner button. | `boolean` | _true_ |\n    | `disabled` | Toggle the disabled state for the component. | `boolean` | _false_ |\n    | `indicator` | Toggle visibility or set the content of the input indicator. | `boolean` | _true_ |\n    | `inputReadOnly` | Toggle the readonly state for the input. | `boolean` | _false_ |\n    | `locale` | Sets the default locale for components. If not set, it is inherited from the browser. | `string` | _default_ |\n    | `placeholder` | Specifies hint visible in time input. | `string` | _Select date_ |\n    | `seconds` | Toggle seconds visibility. | `boolean` | _false_ |\n    | `size` | Size the component input small or large. | `sm` \\| `lg` | _undefined_ |\n    | `valid` | Set input validation visual feedback. | `boolean` | _undefined_ |\n    | `variant` | Set the time picker variant to a roll or select. | `roll` \\| `select` | _roll_ |\n    | `visible` | Toggle the visibility of dropdown menu component. | `boolean` | _false_ |\n    | `filterHours` | Available hours to pick filter function. | `(value: number) => boolean` | _undefined_ |\n    | `filterMinutes` | Available minutes to pick filter function. | `(value: number) => boolean` | _undefined_ |\n    | `filterSeconds` | Available seconds to pick filter function. | `(value: number) => boolean` | _undefined_ |\n\n  "),gd(),RM(86,`

  ##### Outputs
  `),Rs(87,`div`,5),RM(88,"\n\n    | name | description | type |\n    | ---- | ----------- | ---- |\n    | `timeChange` | Event emitted on `time` change | `Date` \\| `undefined` |\n\n\n  "),gd(),RM(89,`

`),gd()),i&2&&(kw(2),Uv(r.title),kw(2),Uv(r.description),kw(4),cv(`files`,KM(17,we)),kw(5),cv(`files`,KM(18,De)),kw(5),cv(`files`,KM(19,Se)),kw(5),cv(`files`,KM(20,Ee)),kw(5),cv(`files`,KM(21,Me)),kw(5),cv(`files`,KM(22,Fe)),kw(5),cv(`files`,KM(23,Ne)),kw(5),cv(`files`,KM(24,Ie)),kw(5),cv(`files`,KM(25,Re)),kw(5),cv(`files`,KM(26,Ae)),kw(7),cv(`files`,KM(27,Oe)),kw(5),cv(`files`,KM(28,Ge)),kw(5),cv(`files`,KM(29,Be)),kw(5),cv(`files`,KM(30,ze)),kw(6),Td(` `,r.usage,`
`))},dependencies:[nr,f,ie,ne,te,ee,$,Z,Y,X,Q,q,U,K,J,j,L,m],encapsulation:2})}};export{Pe as TimePickerDocsComponent};