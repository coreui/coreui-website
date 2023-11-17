"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[5918],{87024:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(45392),r=l(2784);function a(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em",a:"a"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CDatePicker } from '@coreui/react-pro'\n// or\nimport CDatePicker from '@coreui/react-pro/src/components/date-picker/CDatePicker'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"calendarDate")),r.createElement(t.td,null,"Default date of the component"),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cancelButton")),r.createElement(t.td,null,"Toggle visibility or set the content of cancel button."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"'Cancel'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cancelButtonColor")),r.createElement(t.td,null,"Sets the color context of the cancel button to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"'primary'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cancelButtonSize")),r.createElement(t.td,null,"Size the cancel button small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"'sm'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cancelButtonVariant")),r.createElement(t.td,null,"Set the cancel button variant to an outlined button or a ghost button."),r.createElement(t.td,null,r.createElement(t.code,null,"'outline'")," | ",r.createElement(t.code,null,"'ghost'")),r.createElement(t.td,null,"'ghost'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cleaner")),r.createElement(t.td,null,"Toggle visibility or set the content of the cleaner button."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"closeOnSelect")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.8.0+"))),r.createElement(t.td,null,"If true the dropdown will be immediately closed after submitting the full date."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"confirmButton")),r.createElement(t.td,null,"Toggle visibility or set the content of confirm button."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"'OK'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"confirmButtonColor")),r.createElement(t.td,null,"Sets the color context of the confirm button to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"'primary'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"confirmButtonSize")),r.createElement(t.td,null,"Size the confirm button small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"'sm'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"confirmButtonVariant")),r.createElement(t.td,null,"Set the confirm button variant to an outlined button or a ghost button."),r.createElement(t.td,null,r.createElement(t.code,null,"'outline'")," | ",r.createElement(t.code,null,"'ghost'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"container")),r.createElement(t.td,null,"Set container type for the component."),r.createElement(t.td,null,r.createElement(t.code,null,"'dropdown'")," | ",r.createElement(t.code,null,"'inline'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"date")),r.createElement(t.td,null,"Initial selected date."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"dayFormat")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Set the format of day name."),r.createElement(t.td,null,r.createElement(t.code,null,"'numeric'")," | ",r.createElement(t.code,null,"'2-digit'")," | ",r.createElement(t.code,null,"((date: Date) => string")," | ",r.createElement(t.code,null,"number)")),r.createElement(t.td,null,"'numeric'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"disabled")),r.createElement(t.td,null,"Toggle the disabled state for the component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"disabledDates")),r.createElement(t.td,null,"Specify the list of dates that cannot be selected."),r.createElement(t.td,null,r.createElement(t.code,null,"Date[]")," | ",r.createElement(t.code,null,"Date[][]")," | ",r.createElement(t.code,null,"(Date")," | ",r.createElement(t.code,null,"Date[])[]")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"dropdownClassNames")),r.createElement(t.td,null,"A string of all className you want applied to the dropdown menu."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"feedback")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Provide valuable, actionable feedback."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"feedbackInvalid")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Provide valuable, actionable feedback."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"feedbackValid")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",r.createElement(t.code,null,":invalid")," and ",r.createElement(t.code,null,":valid"),"."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"firstDayOfWeek")),r.createElement(t.td,null,"Sets the day of start week.",r.createElement("br"),"- 0 - Sunday,",r.createElement("br"),"- 1 - Monday,",r.createElement("br"),"- 2 - Tuesday,",r.createElement("br"),"- 3 - Wednesday,",r.createElement("br"),"- 4 - Thursday,",r.createElement("br"),"- 5 - Friday,",r.createElement("br"),"- 6 - Saturday,"),r.createElement(t.td,null,r.createElement(t.code,null,"number")),r.createElement(t.td,null,"1")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"floatingClassName")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.5.0+"))),r.createElement(t.td,null,"A string of all className you want applied to the floating label wrapper."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"footer")),r.createElement(t.td,null,"Toggle visibility of footer element or set the content of footer."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"footerContent")),r.createElement(t.td,null,"Add custom elements to the footer."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"format")),r.createElement(t.td,null,"Set date format.",r.createElement("br"),"We use date-fns to format dates. Visit ",r.createElement(t.a,{href:"https://date-fns.org/v2.28.0/docs/format",target:"_blank",rel:"nofollow"},"https://date-fns.org/v2.28.0/docs/format")," to check accepted patterns."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"id")),r.createElement(t.td,null,"The id global attribute defines an identifier (ID) that must be unique in the whole document.",r.createElement("br"),r.createElement("br"),"The name attribute for the input element is generated based on the ",r.createElement(t.code,null,"id")," property:",r.createElement("br"),"- {id}-date"),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"indicator")),r.createElement(t.td,null,"Toggle visibility or set the content of the input indicator."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"inputDateFormat")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"v4.14.0+"))),r.createElement(t.td,null,"Custom function to format the selected date into a string according to a custom format."),r.createElement(t.td,null,r.createElement(t.code,null,"(date: Date) => string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"inputDateParse")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"v4.14.0+"))),r.createElement(t.td,null,"Custom function to parse the input value into a valid Date object."),r.createElement(t.td,null,r.createElement(t.code,null,"(date: string")," | ",r.createElement(t.code,null,"Date) => Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"inputOnChangeDelay")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"v4.14.0+"))),r.createElement(t.td,null,"Defines the delay (in milliseconds) for the input field's onChange event."),r.createElement(t.td,null,r.createElement(t.code,null,"number")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"inputReadOnly")),r.createElement(t.td,null,"Toggle the readonly state for the component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"invalid")),r.createElement(t.td,null,"Set component validation state to invalid."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"label")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Add a caption for a component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"locale")),r.createElement(t.td,null,"Sets the default locale for components. If not set, it is inherited from the browser."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"'default'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"maxDate")),r.createElement(t.td,null,"Max selectable date."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"minDate")),r.createElement(t.td,null,"Min selectable date."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navNextDoubleIcon")),r.createElement(t.td,null,"The custom next double icon."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navNextIcon")),r.createElement(t.td,null,"The custom next icon."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navPrevDoubleIcon")),r.createElement(t.td,null,"The custom prev double icon."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navPrevIcon")),r.createElement(t.td,null,"The custom prev icon."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navYearFirst")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Reorder year-month navigation, and render year first."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"navigation")),r.createElement(t.td,null,"Show arrows navigation."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onDateChange")),r.createElement(t.td,null,"Callback fired when the date changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(date: Date, formatedDate?: string) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onHide")),r.createElement(t.td,null,"Callback fired when the component requests to be hidden."),r.createElement(t.td,null,r.createElement(t.code,null,"() => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onSelectEndChange")),r.createElement(t.td,null,"Callback fired when the selection type changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(value: boolean) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onShow")),r.createElement(t.td,null,"Callback fired when the component requests to be shown."),r.createElement(t.td,null,r.createElement(t.code,null,"() => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onViewChanged")),r.createElement(t.td,null,"Callback fired when the view type of calendar changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(view: string) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"placeholder")),r.createElement(t.td,null,"Specifies short hints that are visible in start date and end date inputs."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"string[]")),r.createElement(t.td,null,"Select date")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"rangesButtonsColor")),r.createElement(t.td,null,"Sets the color context of the cancel button to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"rangesButtonsSize")),r.createElement(t.td,null,"Size the ranges button small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"rangesButtonsVariant")),r.createElement(t.td,null,"Set the ranges button variant to an outlined button or a ghost button."),r.createElement(t.td,null,r.createElement(t.code,null,"'outline'")," | ",r.createElement(t.code,null,"'ghost'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"required")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.10.0+"))),r.createElement(t.td,null,"When present, it specifies that date must be filled out before submitting the form."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"selectAdjacementDays")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.11.0+"))),r.createElement(t.td,null,"Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the ",r.createElement(t.code,null,"showAdjacementDays")," option is set to true."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"separator")),r.createElement(t.td,null,"Default icon or character character that separates two dates."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"showAdjacementDays")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.11.0+"))),r.createElement(t.td,null,"Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"size")),r.createElement(t.td,null,"Size the component small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"text")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Add helper text to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"timepicker")),r.createElement(t.td,null,"Provide an additional time selection by adding select boxes to choose times."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"todayButton")),r.createElement(t.td,null,"Toggle visibility or set the content of today button."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"'Today'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"todayButtonColor")),r.createElement(t.td,null,"Sets the color context of the today button to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"'primary'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"todayButtonSize")),r.createElement(t.td,null,"Size the today button small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"'sm'")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"todayButtonVariant")),r.createElement(t.td,null,"Set the today button variant to an outlined button or a ghost button."),r.createElement(t.td,null,r.createElement(t.code,null,"'outline'")," | ",r.createElement(t.code,null,"'ghost'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"toggler")),r.createElement(t.td,null,"The content of toggler."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"tooltipFeedback")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Display validation feedback in a styled tooltip."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"valid")),r.createElement(t.td,null,"Set component validation state to valid."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"visible")),r.createElement(t.td,null,"Toggle the visibility of dropdown menu component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"weekdayFormat")),r.createElement(t.td,null,"Set length or format of day name."),r.createElement(t.td,null,r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"'long'")," | ",r.createElement(t.code,null,"'narrow'")," | ",r.createElement(t.code,null,"'short'")," | ",r.createElement(t.code,null,"((date: Date) => string")," | ",r.createElement(t.code,null,"number)")),r.createElement(t.td,null,"2")))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},m=l(70033),u=l(18722);const o=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{ScssDocs:e=>r.createElement(u.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(m.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(u.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(m.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(u.UW,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(u.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(o,e,r.createElement(c,e))}o.displayName="MdxLayout"},45392:function(e,t,l){l.d(t,{Zo:function(){return m},ah:function(){return a}});var n=l(2784);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function m({components:e,children:t,disableParentContext:l}){let m;return m=l?"function"==typeof e?e({}):e||c:a(e),n.createElement(r.Provider,{value:m},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-date-picker-api-mdx-873ffb9b0daf9382a11a.js.map