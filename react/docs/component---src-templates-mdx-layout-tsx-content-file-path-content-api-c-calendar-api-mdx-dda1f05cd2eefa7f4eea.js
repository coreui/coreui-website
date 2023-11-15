"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[7789],{13177:function(e,t,l){l.r(t),l.d(t,{default:function(){return s}});var n=l(45392),r=l(2784);function a(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CCalendar } from '@coreui/react'\n// or\nimport CCalendar from '@coreui/react/src/components/calendar/CCalendar'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"calendarDate")),r.createElement(t.td,null,"Default date of the component"),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"startDate")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"calendars")),r.createElement(t.td,null,"The number of calendars that render on desktop devices."),r.createElement(t.td,null,r.createElement(t.code,null,"number")),r.createElement(t.td,null,"1")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"dayFormat")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Set the format of day name."),r.createElement(t.td,null,r.createElement(t.code,null,"'numeric'")," | ",r.createElement(t.code,null,"'2-digit'")," | ",r.createElement(t.code,null,"((date: Date) => string")," | ",r.createElement(t.code,null,"number)")),r.createElement(t.td,null,"numeric")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"disabledDates")),r.createElement(t.td,null,"Specify the list of dates that cannot be selected."),r.createElement(t.td,null,r.createElement(t.code,null,"Date[]")," | ",r.createElement(t.code,null,"Date[][]")," | ",r.createElement(t.code,null,"(Date")," | ",r.createElement(t.code,null,"Date[])[]")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"endDate")),r.createElement(t.td,null,"Initial selected to date (range)."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"firstDayOfWeek")),r.createElement(t.td,null,"Sets the day of start week.",r.createElement("br"),"- 0 - Sunday,",r.createElement("br"),"- 1 - Monday,",r.createElement("br"),"- 2 - Tuesday,",r.createElement("br"),"- 3 - Wednesday,",r.createElement("br"),"- 4 - Thursday,",r.createElement("br"),"- 5 - Friday,",r.createElement("br"),"- 6 - Saturday,"),r.createElement(t.td,null,r.createElement(t.code,null,"number")),r.createElement(t.td,null,"1")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"locale")),r.createElement(t.td,null,"Sets the default locale for components. If not set, it is inherited from the browser."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"default")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"maxDate")),r.createElement(t.td,null,"Max selectable date."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"minDate")),r.createElement(t.td,null,"Min selectable date."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navNextDoubleIcon")),r.createElement(t.td,null,"The custom next double icon."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navNextIcon")),r.createElement(t.td,null,"The custom next icon."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navPrevDoubleIcon")),r.createElement(t.td,null,"The custom prev double icon."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navPrevIcon")),r.createElement(t.td,null,"The custom prev icon."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navYearFirst")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Reorder year-month navigation, and render year first."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navigation")),r.createElement(t.td,null,"Show arrows navigation."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onCalendarDateChange")),r.createElement(t.td,null,"Callback fired when the calendar date changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(date: string")," | ",r.createElement(t.code,null,"Date) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onDateHover")),r.createElement(t.td,null,"Callback fired when the user hovers over the calendar cell."),r.createElement(t.td,null,r.createElement(t.code,null,"(date: string")," | ",r.createElement(t.code,null,"Date) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onEndDateChange")),r.createElement(t.td,null,"Callback fired when the end date changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(date: string")," | ",r.createElement(t.code,null,"Date, formatedDate?: string) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onSelectEndChange")),r.createElement(t.td,null,"Callback fired when the selection type changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(value: boolean) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onStartDateChange")),r.createElement(t.td,null,"Callback fired when the start date changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(date: string")," | ",r.createElement(t.code,null,"Date, formatedDate?: string) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onViewChanged")),r.createElement(t.td,null,"Callback fired when the view type of calendar changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(view: string) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"range")),r.createElement(t.td,null,"Allow range selection."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"selectAdjacementDays")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.11.0+"))),r.createElement(t.td,null,"Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the ",r.createElement(t.code,null,"showAdjacementDays")," option is set to true."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"false")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"selectEndDate")),r.createElement(t.td,null,"Toggle select mode between start and end date."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"selectionType")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"5.0.0-rc.0+"))),r.createElement(t.td,null,"Specify the type of date selection as day, week, month, or year."),r.createElement(t.td,null,r.createElement(t.code,null,"'day'")," | ",r.createElement(t.code,null,"'week'")," | ",r.createElement(t.code,null,"'month'")," | ",r.createElement(t.code,null,"'year'")),r.createElement(t.td,null,"day")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"showAdjacementDays")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.11.0+"))),r.createElement(t.td,null,"Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"showWeekNumber")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"5.0.0-rc.0+"))),r.createElement(t.td,null,"Set whether to display week numbers in the calendar."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"false")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"startDate")),r.createElement(t.td,null,"Initial selected date."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"weekNumbersLabel")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"5.0.0-rc.0+"))),r.createElement(t.td,null,"Label displayed over week numbers in the calendar."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"weekdayFormat")),r.createElement(t.td,null,"Set length or format of day name."),r.createElement(t.td,null,r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"'long'")," | ",r.createElement(t.code,null,"'narrow'")," | ",r.createElement(t.code,null,"'short'")," | ",r.createElement(t.code,null,"((date: Date) => string")," | ",r.createElement(t.code,null,"number)")),r.createElement(t.td,null,"2")))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},m=l(88038),o=l(53922),d=l(85338);const u=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{ScssDocs:e=>r.createElement(d.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(m.C,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(d.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(o.S,Object.assign({responsive:!0},e,{className:`table ${t&&" table-striped table-api"}`}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(d.UW,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(d.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function s(e){return r.createElement(u,e,r.createElement(c,e))}u.displayName="MdxLayout"},53922:function(e,t,l){l.d(t,{S:function(){return h}});var n=l(2784),r=l(72779),a=l.n(r),c=l(27121),m=l(4246),o=l(5938),d=l(33365),u=l(60420),s=l(69296);const E=(0,n.forwardRef)(((e,t)=>{let{children:l,...r}=e;return n.createElement("caption",Object.assign({},r,{ref:t}),l)}));E.displayName="CTableCaption";const i=e=>{let{children:t,responsive:l,...r}=e;return l?n.createElement("div",Object.assign({className:"boolean"==typeof l?"table-responsive":`table-responsive-${l}`},r),t):n.createElement(n.Fragment,null,t)};i.displayName="CTableResponsiveWrapper";const p=e=>e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),b=e=>Object.keys(e[0]||{}).filter((e=>"_"!==e.charAt(0))),h=(0,n.forwardRef)(((e,t)=>{let{children:l,align:r,borderColor:h,bordered:g,borderless:f,caption:y,captionTop:v,className:w,color:N,columns:C,footer:D,hover:j,items:k,responsive:T,small:_,striped:O,stripedColumns:S,tableFootProps:R,tableHeadProps:$,...P}=e;const x=(0,n.useMemo)((()=>((e,t)=>e?e.map((e=>"object"==typeof e?e.key:e)):t&&b(t))(C,k)),[C,k]);return n.createElement(i,{responsive:T},n.createElement("table",Object.assign({className:a()("table",{[`align-${r}`]:r,[`border-${h}`]:h,"caption-top":v||"top"===y,"table-bordered":g,"table-borderless":f,[`table-${N}`]:N,"table-hover":j,"table-sm":_,"table-striped":O,"table-striped-columns":S},w)},P,{ref:t}),(y&&"top"!==y||v)&&n.createElement(E,null,y||v),C&&n.createElement(c.V,$,n.createElement(u.T,null,C.map(((e,t)=>n.createElement(m.i,Object.assign({},e._props&&{...e._props},e._style&&{style:{...e._style}},{key:t}),(e=>{var t;return"object"==typeof e?null!==(t=e.label)&&void 0!==t?t:p(e.key):p(e)})(e)))))),k&&n.createElement(o.N,null,k.map(((e,t)=>n.createElement(u.T,Object.assign({},e._props&&{...e._props},{key:t}),x&&x.map(((t,l)=>void 0!==e[t]?n.createElement(d.N,Object.assign({},e._cellProps&&{...e._cellProps.all&&{...e._cellProps.all},...e._cellProps[t]&&{...e._cellProps[t]}},{key:l}),e[t]):null)))))),l,D&&n.createElement(s.j,R,n.createElement(u.T,null,D.map(((e,t)=>n.createElement(d.N,Object.assign({},"object"==typeof e&&e._props&&{...e._props},{key:t}),"object"==typeof e?e.label:e)))))))}));h.displayName="CTable"},5938:function(e,t,l){l.d(t,{N:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:r,color:c,...m}=e;return n.createElement("tbody",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},m,{ref:t}),l)}));c.displayName="CTableBody"},33365:function(e,t,l){l.d(t,{N:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,active:r,align:c,className:m,color:o,...d}=e;const u=d.scope?"th":"td";return n.createElement(u,Object.assign({className:a()({[`align-${c}`]:c,"table-active":r,[`table-${o}`]:o},m)||void 0},d,{ref:t}),l)}));c.displayName="CTableDataCell"},69296:function(e,t,l){l.d(t,{j:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:r,color:c,...m}=e;return n.createElement("tfoot",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},m,{ref:t}),l)}));c.displayName="CTableFoot"},27121:function(e,t,l){l.d(t,{V:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:r,color:c,...m}=e;return n.createElement("thead",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},m,{ref:t}),l)}));c.displayName="CTableHead"},4246:function(e,t,l){l.d(t,{i:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:r,color:c,...m}=e;return n.createElement("th",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},m,{ref:t}),l)}));c.displayName="CTableHeaderCell"},60420:function(e,t,l){l.d(t,{T:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,active:r,align:c,className:m,color:o,...d}=e;return n.createElement("tr",Object.assign({className:a()({[`align-${c}`]:c,"table-active":r,[`table-${o}`]:o},m)||void 0},d,{ref:t}),l)}));c.displayName="CTableRow"},45392:function(e,t,l){l.d(t,{Zo:function(){return m},ah:function(){return a}});var n=l(2784);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function m({components:e,children:t,disableParentContext:l}){let m;return m=l?"function"==typeof e?e({}):e||c:a(e),n.createElement(r.Provider,{value:m},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-calendar-api-mdx-dda1f05cd2eefa7f4eea.js.map