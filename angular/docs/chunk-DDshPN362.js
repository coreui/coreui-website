import{$t as Uv,Br as kw,Fi as v$1,G as Ht,N as Ev,Nt as Rs,T as D_,Ut as Td,Wr as lN,d as BM,gn as Yv,i as $v,jn as aN,kt as RM,nt as KM,qn as cv,qr as lv,rt as Kv,ur as gd}from"./chunk-D4QfcjgQ.js";import{c as It}from"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ui as nr,Xi as y$1,ni as xi,pr as nn}from"./main-CRW2IFLY.js";import{t as ie$1}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";import{t as m}from"./chunk-BSCFwVWW.js";var C=class o{constructor(){this.startDate=new Date}static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar01`]],decls:2,vars:1,consts:[[1,`d-flex`,`justify-content-center`],[`locale`,`en-US`,1,`border`,`rounded`,3,`startDate`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd()),a&2&&(kw(),cv(`startDate`,l.startDate))},dependencies:[xi],encapsulation:2})}};var v=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar02`]],decls:2,vars:0,consts:[[1,`d-flex`,`justify-content-center`],[`selectionType`,`week`,`showWeekNumber`,``,`startDate`,`2024W42`,`calendarDate`,`2024W42`,1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var g=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar03`]],decls:2,vars:0,consts:[[1,`d-flex`,`justify-content-center`],[`selectionType`,`month`,1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var b=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar04`]],decls:2,vars:0,consts:[[1,`d-flex`,`justify-content-center`],[`selectionType`,`year`,1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var y=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar05`]],decls:2,vars:0,consts:[[1,`d-flex`,`justify-content-center`],[`calendars`,`2`,1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var D=class o{constructor(){this.startDate=Ht(new Date);this.endDate=Ht(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+7))}handleClear(){this.endDate.set(null),this.startDate.set(null)}static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar06`]],decls:8,vars:8,consts:[[1,`d-flex`,`justify-content-center`],[`calendars`,`2`,`range`,``,1,`border`,`rounded`,3,`endDateChange`,`startDateChange`,`endDate`,`startDate`],[`cButton`,``,3,`click`]],template:function(a,l){a&1&&(Rs(0,`div`,0)(1,`c-calendar`,1),Kv(`endDateChange`,function(h){return BM(l.endDate,h)||(l.endDate=h),h})(`startDateChange`,function(h){return BM(l.startDate,h)||(l.startDate=h),h}),gd()(),lv(2,`hr`),Rs(3,`button`,2),Ev(`click`,function(){return l.handleClear()}),RM(4,`Clear`),gd(),RM(5),aN(6,`date`),aN(7,`date`)),a&2&&(kw(),Yv(`endDate`,l.endDate)(`startDate`,l.startDate),kw(4),$v(` `,lN(6,4,l.startDate()),` - `,lN(7,6,l.endDate()),` `))},dependencies:[xi,nn,It],encapsulation:2})}};var x=class o{constructor(){this.calendarDate=new Date(2024,2,1);this.disabledDates=[[new Date(2024,2,4),new Date(2024,2,7)],new Date(2024,2,16),new Date(2024,3,16),[new Date(2024,4,2),new Date(2024,4,8)]];this.maxDate=new Date(2024,5,0);this.minDate=new Date(2024,0,1);this.dateFilter=i=>i?.getDay()!==0}static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar07`]],decls:2,vars:5,consts:[[1,`d-flex`,`justify-content-center`],[`calendars`,`2`,1,`border`,`rounded`,3,`calendarDate`,`dateFilter`,`disabledDates`,`maxDate`,`minDate`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd()),a&2&&(kw(),cv(`calendarDate`,l.calendarDate)(`dateFilter`,l.dateFilter)(`disabledDates`,l.disabledDates)(`maxDate`,l.maxDate)(`minDate`,l.minDate))},dependencies:[xi],encapsulation:2})}};var w=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar08`]],decls:2,vars:0,consts:[[1,`d-flex`,`justify-content-center`],[1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var S=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar09`]],decls:2,vars:0,consts:[[1,`d-flex`,`justify-content-center`],[`locale`,`zh-CN`,1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var _=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar10`]],decls:2,vars:0,consts:[[1,`d-flex`,`justify-content-center`],[`locale`,`ja`,1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var E=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar11`]],decls:2,vars:0,consts:[[1,`d-flex`,`justify-content-center`],[`locale`,`ko`,1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var $=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar12`]],decls:2,vars:0,consts:[[`dir`,`rtl`,1,`d-flex`,`justify-content-center`],[`locale`,`he-IL`,`weekdayFormat`,`narrow`,1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var k=class o{static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar13`]],decls:2,vars:0,consts:[[`dir`,`rtl`,1,`d-flex`,`justify-content-center`],[`locale`,`fa-IR`,`weekdayFormat`,`narrow`,1,`border`,`rounded`]],template:function(a,l){a&1&&(Rs(0,`div`,0),lv(1,`c-calendar`,1),gd())},dependencies:[xi],encapsulation:2})}};var V=`\`\`\`ts
// standalone components
import { CalendarComponent } from '@coreui/angular';

@Component({
    standalone: true,
    imports: [CalendarComponent]
    // ...   
})
export class ...
\`\`\`

\`\`\`typescript
// ng modules
import { CalendarModule } from '@coreui/angular';

@NgModule({
    imports: [CalendarModule]
    // ...
})
export class ...
\`\`\`
`;var Q=()=>[`components/calendar/examples/calendar01.component.html`];var X=()=>[`components/calendar/examples/calendar02.component.html`];var Z=()=>[`components/calendar/examples/calendar03.component.html`];var ee=()=>[`components/calendar/examples/calendar04.component.html`];var ne=()=>[`components/calendar/examples/calendar05.component.html`];var ae=()=>[`components/calendar/examples/calendar06.component.html`,`components/calendar/examples/calendar06.component.ts`];var te=()=>[`components/calendar/examples/calendar07.component.html`,`components/calendar/examples/calendar07.component.ts`];var oe=()=>[`components/calendar/examples/calendar08.component.html`];var re=()=>[`components/calendar/examples/calendar09.component.html`];var le=()=>[`components/calendar/examples/calendar10.component.html`];var ie=()=>[`components/calendar/examples/calendar11.component.html`];var ce=()=>[`components/calendar/examples/calendar12.component.html`];var de=()=>[`components/calendar/examples/calendar13.component.html`];var q=class o{constructor(){this.usage=V;this.headService=v$1(y$1);this.name=`Calendar`;this.title=`Angular Calendar Component`;this.description=`The Angular Calendar Component is a versatile, customizable tool for creating responsive calendars in Angular, supporting day, month, and year selection, with global locales.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description,pro:!0})}static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-calendar`]],decls:84,vars:30,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[3,`files`],[`markdown`,``,1,`highlight`],[1,`api-table`]],template:function(a,l){a&1&&(lv(0,`docs-banner-pro`),Rs(1,`h1`,0),RM(2),gd(),Rs(3,`p`,1),RM(4),gd(),lv(5,`docs-ads-carbon-loader`),Rs(6,`markdown`),RM(7,`

  ---

  ## Example

  Explore the Angular Calendar basic usage through sample code snippets demonstrating its core functionality.

  ### Days

  Select specific days using the Angular Calendar component. The example below shows basic usage.

`),gd(),Rs(8,`docs-example`,2),lv(9,`docs-calendar01`),gd(),lv(10,`hr`),Rs(11,`markdown`),RM(12,`

  ---

  ### Weeks

  Set the \`selectionType\` to \`week\` to enable selection of entire week. You can also add \`showWeekNumber\` to show week numbers.
`),gd(),Rs(13,`docs-example`,2),lv(14,`docs-calendar02`),gd(),lv(15,`hr`),Rs(16,`markdown`),RM(17,`

  ---

  ### Months

  Set the \`selectionType\` property to \`month\` to enable selection of entire months.
`),gd(),Rs(18,`docs-example`,2),lv(19,`docs-calendar03`),gd(),Rs(20,`markdown`),RM(21,`

  ---

  ### Years

  Set the \`selectionType\` property to \`year\` to enable years range selection.
`),gd(),Rs(22,`docs-example`,2),lv(23,`docs-calendar04`),gd(),Rs(24,`markdown`),RM(25,`

  ---

  ## Multiple calendar panels

  Display multiple calendar panels side by side by setting the \`calendars\` property. This can be useful for selecting ranges or comparing dates across different months.
`),gd(),Rs(26,`docs-example`,2),lv(27,`docs-calendar05`),gd(),Rs(28,`markdown`),RM(29,`

  ---

  ## Range selection

  Enable \`range\` selection to allow users to pick a start and end date. This example shows how to configure the Angular Calendar component to handle date ranges.
`),gd(),Rs(30,`docs-example`,2),lv(31,`docs-calendar06`),gd(),Rs(32,`markdown`),RM(33,`

  ---

  ## Disabled dates

  The Calendar component includes functionality to disable specific dates, such as weekends or holidays, using the \`disabledDates\` prop. This prop takes an array of dates to determine which dates should be disabled.
  Other useful props include \`minDate\` and \`maxDate\` to set the minimum and maximum selectable dates. The \`dateFilter\` prop can be used to apply custom logic to determine which dates are selectable.
`),gd(),Rs(34,`docs-example`,2),lv(35,`docs-calendar07`),gd(),Rs(36,`markdown`),RM(37,`

  ---

  ## Non-english locale

  The CoreUI Angular Calendar allows users to display dates in non-English locales, making it suitable for international applications.

  ### Auto
  By default, the Calendar component uses the browser's default locale. However, you can easily configure it to use a different locale supported by the JavaScript Internationalization API. This feature helps create inclusive and accessible applications for a diverse audience.

`),gd(),Rs(38,`docs-example`,2),lv(39,`docs-calendar08`),gd(),Rs(40,`markdown`),RM(41,`

  ---

  ### Chinese

  Here is an example of the Angular Calendar component with Chinese locale settings.


`),gd(),Rs(42,`docs-example`,2),lv(43,`docs-calendar09`),gd(),Rs(44,`markdown`),RM(45,`

  ---

  ### Japanese

  Below is an example of the Angular Calendar component with Japanese locale settings.


`),gd(),Rs(46,`docs-example`,2),lv(47,`docs-calendar10`),gd(),Rs(48,`markdown`),RM(49,`

  ---

  ### Korean

  Here is an example of the Angular Calendar component with Korean locale settings.


`),gd(),Rs(50,`docs-example`,2),lv(51,`docs-calendar11`),gd(),Rs(52,`markdown`),RM(53,`

  ---

  ## Right to left support

  RTL support is built-in and can be explicitly controlled through the \`$enable-rtl\` variables in scss.

  ### Hebrew
  Example of the Angular Calendar component with RTL support, using the Hebrew locale.


`),gd(),Rs(54,`docs-example`,2),lv(55,`docs-calendar12`),gd(),Rs(56,`markdown`),RM(57,`

  ---

  ### Persian
  Example of the Angular Calendar component with Persian locale settings.


`),gd(),Rs(58,`docs-example`,2),lv(59,`docs-calendar13`),gd(),Rs(60,`markdown`),RM(61,`

  ---

  ## Customizing

  ### CSS variables

  The Angular Calendar uses local CSS variables on \`.calendar\` for real-time customization. Values for these CSS variables are set via Sass, but they can also be overridden directly in the component for dynamic styling.

`),gd(),Rs(62,`pre`,3),RM(63,`  \`\`\`scss
  --cui-calendar-table-margin: #{$calendar-table-margin};
  --cui-calendar-table-cell-size: #{$calendar-table-cell-size};
  --cui-calendar-nav-padding: #{$calendar-nav-padding};
  --cui-calendar-nav-border-color: #{$calendar-nav-border-color};
  --cui-calendar-nav-border: #{$calendar-nav-border-width} solid var(--cui-calendar-nav-border-color);
  --cui-calendar-nav-date-color: #{$calendar-nav-date-color};
  --cui-calendar-nav-date-hover-color: #{$calendar-nav-date-hover-color};
  --cui-calendar-nav-icon-width: #{$calendar-nav-icon-width};
  --cui-calendar-nav-icon-height: #{$calendar-nav-icon-height};
  --cui-calendar-nav-icon-double-next: #{escape-svg($calendar-nav-icon-double-next)};
  --cui-calendar-nav-icon-double-prev: #{escape-svg($calendar-nav-icon-double-prev)};
  --cui-calendar-nav-icon-next: #{escape-svg($calendar-nav-icon-next)};
  --cui-calendar-nav-icon-prev: #{escape-svg($calendar-nav-icon-prev)};
  --cui-calendar-nav-icon-color: #{$calendar-nav-icon-color};
  --cui-calendar-nav-icon-hover-color: #{$calendar-nav-icon-hover-color};
  --cui-calendar-cell-header-inner-color: #{$calendar-cell-header-inner-color};
  --cui-calendar-cell-week-number-color: #{$calendar-cell-week-number-color};
  --cui-calendar-cell-hover-color: #{$calendar-cell-hover-color};
  --cui-calendar-cell-hover-bg: #{$calendar-cell-hover-bg};
  --cui-calendar-cell-focus-box-shadow: #{$calendar-cell-focus-box-shadow};
  --cui-calendar-cell-disabled-color: #{$calendar-cell-disabled-color};
  --cui-calendar-cell-selected-color: #{$calendar-cell-selected-color};
  --cui-calendar-cell-selected-bg: #{$calendar-cell-selected-bg};
  --cui-calendar-cell-range-bg: #{$calendar-cell-range-bg};
  --cui-calendar-cell-range-hover-bg: #{$calendar-cell-range-hover-bg};
  --cui-calendar-cell-range-hover-border-color: #{$calendar-cell-range-hover-border-color};
  --cui-calendar-cell-today-color: #{$calendar-cell-today-color};
  --cui-calendar-cell-week-number-color: #{$calendar-cell-week-number-color};
  \`\`\`
`),gd(),Rs(64,`markdown`),RM(65,`
  #### How to use CSS variables
`),gd(),Rs(66,`pre`,3),RM(67),gd(),Rs(68,`markdown`),RM(69,`
  ### SASS variables
`),gd(),Rs(70,`pre`,3),RM(71,`  \`\`\`scss
  $calendar-table-margin:                      .5rem !default;
  $calendar-table-cell-size:                   2.75rem !default;

  $calendar-nav-padding:                       .5rem !default;
  $calendar-nav-border-width:                  1px !default;
  $calendar-nav-border-color:                  var(--cui-border-color) !default;
  $calendar-nav-date-color:                    var(--cui-body-color) !default;
  $calendar-nav-date-hover-color:              var(--cui-primary) !default;
  $calendar-nav-icon-width:                    1rem !default;
  $calendar-nav-icon-height:                   1rem !default;
  $calendar-nav-icon-color:                    var(--cui-tertiary-color) !default;
  $calendar-nav-icon-hover-color:              var(--cui-body-color) !default;

  $calendar-nav-icon-double-next:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='95.314 447.313 72.686 424.687 245.373 252 72.686 79.313 95.314 56.687 290.627 252 95.314 447.313'></polygon><polygon fill='#000' points='255.314 447.313 232.686 424.687 405.373 252 232.686 79.313 255.314 56.687 450.627 252 255.314 447.313'></polygon></svg>") !default;
  $calendar-nav-icon-double-prev:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='416.686 447.313 221.373 252 416.686 56.687 439.314 79.313 266.627 252 439.314 424.687 416.686 447.313'></polygon><polygon fill='#000' points='256.686 447.313 61.373 252 256.686 56.687 279.314 79.313 106.627 252 279.314 424.687 256.686 447.313'></polygon></svg>") !default;
  $calendar-nav-icon-next:                     url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='179.313 451.313 156.687 428.687 329.372 256 156.687 83.313 179.313 60.687 374.627 256 179.313 451.313'></polygon></svg>") !default;
  $calendar-nav-icon-prev:                     url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='324.687 451.313 129.373 256 324.687 60.687 347.313 83.313 174.628 256 347.313 428.687 324.687 451.313'></polygon></svg>") !default;

  $calendar-cell-header-inner-color:           var(--cui-secondary-color) !default;
  $calendar-cell-week-number-color:            var(--cui-secondary-color) !default;

  $calendar-cell-hover-color:                  var(--cui-body-color) !default;
  $calendar-cell-hover-bg:                     var(--cui-tertiary-bg) !default;
  $calendar-cell-disabled-color:               var(--cui-tertiary-color) !default;

  $calendar-cell-focus-box-shadow:             $focus-ring-box-shadow !default;

  $calendar-cell-selected-color:               $white !default;
  $calendar-cell-selected-bg:                  var(--cui-primary) !default;

  $calendar-cell-range-bg:                     rgba(var(--cui-primary-rgb), .125) !default;
  $calendar-cell-range-hover-bg:               rgba(var(--cui-primary-rgb), .25) !default;
  $calendar-cell-range-hover-border-color:     var(--cui-primary) !default;

  $calendar-cell-today-color:                  var(--cui-danger) !default;

  $calendar-cell-week-number-color:            var(--cui-tertiary-color) !default;
  \`\`\`
`),gd(),Rs(72,`markdown`),RM(73,`

  ---

  ## API

  ### Import

`),gd(),Rs(74,`div`,3),RM(75),gd(),Rs(76,`markdown`),RM(77,`
  ---

  ### c-calendar
  _component_

  #### Inputs

  `),Rs(78,`div`,4),RM(79,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `ariaNextMonthLabel` | A string that provides an accessible label for the button that navigates to the next month in the calendar. This label is read by screen readers to describe the action associated with the button. | `string` | _Next month_ |\n    | `ariaNextYearLabel` | A string that provides an accessible label for the button that navigates to the next year in the calendar. This label is intended for screen readers to help users understand the button's functionality. | `string` | _Next year_ |\n    | `ariaPrevMonthLabel` | A string that provides an accessible label for the button that navigates to the previous month in the calendar. Screen readers will use this label to explain the purpose of the button. | `string` | _Previous month_ |\n    | `ariaPrevYearLabel` | A string that provides an accessible label for the button that navigates to the previous year in the calendar. This label helps screen reader users understand the button's function. | `string` | _Previous year_ |\n    | `calendarDate` | Default date month of the component. | `Date` | _undefined_ |\n    | `calendars` | The number of calendars that render on desktop devices. | `number` | _1_ |\n    | `dateFilter` | Custom function to determine selectable dates. | `(date: Date) => boolean`) | _undefined_ |\n    | `dayFormat` | Set the format of day number. | `numeric` \\| `2-digit` \\| `(date: Date) => string \\| number` | _numeric_ |\n    | `disabledDates` | List of dates that cannot be selected. | `(Date` \\| `Date[])[]` | _undefined_ |\n    | `endDate` | Initial selected start date. | `Date` | _undefined_ |\n    | `firstDayOfWeek` | Sets the first day of a week. | `number` | _1_ (Monday) |\n    | `locale` | Sets the default locale for components. If not set, it is inherited from the browser. | `string` | _default_ |\n    | `maxDate` | Max selectable date. | `Date` | _undefined_ |\n    | `minDate` | Min selectable date. | `Date` | _undefined_ |\n    | `navYearFirst` | Reorder year-month navigation, and render year first. | `boolean` | _false_ |\n    | `navigation` | Show arrows navigation. | `boolean` | _true_ |\n    | `range` | Allow range selection. | `boolean` | _undefined_ |\n    | `selectAdjacentDays` | Days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacentDays` option is set to `true`. | `boolean` | _false_ |\n    | `selectionType` | Specify the type of date selection as day, week, month, or year. | `day` \\| `week` \\| `month` \\| `year` | _day_ |\n    | `showAdjacentDays` | Display dates in adjacent months (non-selectable) at the start/end of the current month. | `boolean` | _true_ |\n    | `showWeekNumber` | Display ISO week numbers in month view. | `boolean` | _undefined_ |\n    | `startDate` | Initial selected start date. | `Date` | _undefined_ |\n    | `weekNumbersLabel` | Label displayed over week numbers in the calendar. | `string` | _undefined_ |\n    | `weekdayFormat` | Set length or format of day name. | `number` \\| `long` \\| `narrow` \\| `short` | _2_ |\n\n  "),gd(),RM(80,`

  ##### Outputs

  `),Rs(81,`div`,4),RM(82,"\n\n    | name | description | type |\n    | ---- | ----------- | ---- |\n    | `startDateChange` | Event emitted on `startDate` change | `Date` |\n    | `endDateChange` | Event emitted on `startDate` change | `Date` |\n    | `dateHover` | Event emitted on calendar cell hover | `Date` |\n    | `calendarDateChange` | Event emitted on calendar month change | `Date` |\n    | `viewChange` | Event emitted on `view` change | `days \\| months \\| years` |\n\n  "),gd(),RM(83,`

  ---

`),gd()),a&2&&(kw(2),Uv(l.title),kw(2),Uv(l.description),kw(4),cv(`files`,KM(17,Q)),kw(5),cv(`files`,KM(18,X)),kw(5),cv(`files`,KM(19,Z)),kw(4),cv(`files`,KM(20,ee)),kw(4),cv(`files`,KM(21,ne)),kw(4),cv(`files`,KM(22,ae)),kw(4),cv(`files`,KM(23,te)),kw(4),cv(`files`,KM(24,oe)),kw(4),cv(`files`,KM(25,re)),kw(4),cv(`files`,KM(26,le)),kw(4),cv(`files`,KM(27,ie)),kw(4),cv(`files`,KM(28,ce)),kw(4),cv(`files`,KM(29,de)),kw(9),Td("  ```ts\n  const vars = ",`{`,`
  '--my-css-var': 10,
  '--my-another-css-var': "red"
  }
  \`\`\`

  \`\`\`html
  <c-calendar [ngStyle]="vars" />
  \`\`\`
`),kw(8),Td(` `,l.usage,`
`))},dependencies:[f,nr,ie$1,m,C,v,g,b,y,D,x,w,S,_,E,$,k],encapsulation:2})}};export{q as CalendarComponent};