"use strict";(self["webpackChunk_coreui_coreui_pro_vue_admin_template"]=self["webpackChunk_coreui_coreui_pro_vue_admin_template"]||[]).push([[7547],{7547:function(e,a,l){l.r(a),l.d(a,{default:function(){return J}});var t=l(8473);const i=(0,t._)("strong",null,"Validation",-1),d=(0,t._)("small",null,"Custom styles",-1),o=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" For custom CoreUI form validation messages, you'll need to add the "),(0,t._)("code",null,"novalidate"),(0,t.Uk)(" boolean property to your "),(0,t._)("code",null,"<CForm>"),(0,t.Uk)(". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the "),(0,t._)("code",null,":invalid"),(0,t.Uk)(" and "),(0,t._)("code",null,":valid"),(0,t.Uk)(" styles applied to your form controls. ")],-1),u=(0,t._)("p",{class:"text-medium-emphasis small"}," Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. ",-1),m=(0,t._)("option",{disabled:""},"Choose...",-1),r=(0,t._)("option",null,"...",-1),s=(0,t._)("strong",null,"Validation",-1),n=(0,t._)("small",null,"Browser defaults",-1),f=(0,t._)("p",{class:"text-medium-emphasis small"}," Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback. ",-1),v=(0,t._)("p",{class:"text-medium-emphasis small"}," While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript. ",-1),p=(0,t._)("option",{disabled:""},"Choose...",-1),_=(0,t._)("option",null,"...",-1),c=(0,t._)("strong",null,"Validation",-1),W=(0,t._)("small",null,"Server side",-1),w=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with "),(0,t._)("code",null,"invalid"),(0,t.Uk)(" and "),(0,t._)("code",null,"valid"),(0,t.Uk)(" boolean properties. ")],-1),k=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using "),(0,t._)("code",null,"aria-describedby"),(0,t.Uk)(" (noting that this attribute allows more than one "),(0,t._)("code",null,"id"),(0,t.Uk)(" to be referenced, in case the field already points to additional form text). ")],-1),b=(0,t._)("option",{disabled:""},"Choose...",-1),h=(0,t._)("option",null,"...",-1),U=(0,t._)("strong",null,"Validation",-1),y=(0,t._)("small",null,"Supported elements",-1),C=(0,t._)("p",{class:"text-medium-emphasis small"}," Validation styles are available for the following form controls and components: ",-1),g=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("code",null,"<CFormInput>"),(0,t.Uk)("s")]),(0,t._)("li",null,[(0,t._)("code",null,"<CFormSelect>"),(0,t.Uk)("s")]),(0,t._)("li",null,[(0,t._)("code",null,"<CFormCheck>"),(0,t.Uk)("s")])],-1),x={class:"mb-3"},S={class:"mb-3"},q=(0,t._)("option",null,"Open this select menu",-1),T=(0,t._)("option",{value:"1"},"One",-1),P=(0,t._)("option",{value:"2"},"Two",-1),D=(0,t._)("option",{value:"3"},"Three",-1),F={class:"mb-3"},E={class:"mb-3"},G=(0,t._)("strong",null,"Validation",-1),V=(0,t._)("small",null,"Tooltips",-1),L=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with "),(0,t._)("code",null,"position: relative"),(0,t.Uk)(" on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup. ")],-1),I=(0,t._)("option",{disabled:"",value:""},"Choose...",-1),O=(0,t._)("option",null,"...",-1);function z(e,a,l,z,A,M){const B=(0,t.up)("CCardHeader"),J=(0,t.up)("CFormLabel"),Y=(0,t.up)("CFormInput"),j=(0,t.up)("CFormFeedback"),R=(0,t.up)("CCol"),H=(0,t.up)("CInputGroupText"),N=(0,t.up)("CInputGroup"),Z=(0,t.up)("CFormSelect"),K=(0,t.up)("CFormCheck"),Q=(0,t.up)("CButton"),X=(0,t.up)("CForm"),$=(0,t.up)("DocsExample"),ee=(0,t.up)("CCardBody"),ae=(0,t.up)("CCard"),le=(0,t.up)("CFormTextarea"),te=(0,t.up)("CRow");return(0,t.wg)(),(0,t.j4)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(ae,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[i,(0,t.Uk)(),d])),_:1}),(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[o,u,(0,t.Wm)($,{href:"forms/validation.html"},{default:(0,t.w5)((()=>[(0,t.Wm)(X,{class:"row g-3 needs-validation",novalidate:"",validated:e.validatedCustom01,onSubmit:M.handleSubmitCustom01},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{md:4},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationCustom01"},{default:(0,t.w5)((()=>[(0,t.Uk)("Email")])),_:1}),(0,t.Wm)(Y,{id:"validationCustom01",value:"Mark",required:""}),(0,t.Wm)(j,{valid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Looks good! ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:4},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationCustom02"},{default:(0,t.w5)((()=>[(0,t.Uk)("Email")])),_:1}),(0,t.Wm)(Y,{id:"validationCustom02",value:"Otto",required:""}),(0,t.Wm)(j,{valid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Looks good! ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:4},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationCustomUsername"},{default:(0,t.w5)((()=>[(0,t.Uk)("Username")])),_:1}),(0,t.Wm)(N,{class:"has-validation"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{id:"inputGroupPrepend"},{default:(0,t.w5)((()=>[(0,t.Uk)("@")])),_:1}),(0,t.Wm)(Y,{id:"validationCustomUsername",value:"","aria-describedby":"inputGroupPrepend",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please choose a username. ")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(R,{md:6},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationCustom03"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Y,{id:"validationCustom03",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please provide a valid city. ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:3},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationCustom04"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Z,{id:"validationCustom04"},{default:(0,t.w5)((()=>[m,r])),_:1}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please provide a valid city. ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:3},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationCustom05"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Y,{id:"validationCustom05",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please provide a valid zip. ")])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{id:"invalidCheck",type:"checkbox",label:"Agree to terms and conditions",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" You must agree before submitting. ")])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{color:"primary",type:"submit"},{default:(0,t.w5)((()=>[(0,t.Uk)("Submit form")])),_:1})])),_:1})])),_:1},8,["validated","onSubmit"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(ae,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[s,(0,t.Uk)(),n])),_:1}),(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[f,v,(0,t.Wm)($,{href:"forms/validation.html#browser-defaults"},{default:(0,t.w5)((()=>[(0,t.Wm)(X,{class:"row g-3 needs-validation",validated:e.validatedDefault01,onSubmit:M.handleSubmitDefault01},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{md:4},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationDefault01"},{default:(0,t.w5)((()=>[(0,t.Uk)("Email")])),_:1}),(0,t.Wm)(Y,{id:"validationDefault01",value:"Mark",required:""}),(0,t.Wm)(j,{valid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Looks good! ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:4},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationDefault02"},{default:(0,t.w5)((()=>[(0,t.Uk)("Email")])),_:1}),(0,t.Wm)(Y,{id:"validationDefault02",value:"Otto",required:""}),(0,t.Wm)(j,{valid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Looks good! ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:4},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationDefaultUsername"},{default:(0,t.w5)((()=>[(0,t.Uk)("Username")])),_:1}),(0,t.Wm)(N,{class:"has-validation"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{id:"inputGroupPrepend02"},{default:(0,t.w5)((()=>[(0,t.Uk)("@")])),_:1}),(0,t.Wm)(Y,{id:"validationDefaultUsername",value:"","aria-describedby":"inputGroupPrepend02",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please choose a username. ")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(R,{md:6},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationDefault03"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Y,{id:"validationDefault03",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please provide a valid city. ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:3},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationDefault04"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Z,{id:"validationDefault04"},{default:(0,t.w5)((()=>[p,_])),_:1}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please provide a valid city. ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:3},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationDefault05"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Y,{id:"validationDefault05",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please provide a valid zip. ")])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{id:"invalidCheck",type:"checkbox",label:"Agree to terms and conditions",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" You must agree before submitting. ")])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{color:"primary",type:"submit"},{default:(0,t.w5)((()=>[(0,t.Uk)("Submit form")])),_:1})])),_:1})])),_:1},8,["validated","onSubmit"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(ae,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[c,(0,t.Uk)(),W])),_:1}),(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[w,k,(0,t.Wm)($,{href:"forms/validation.html#server-side"},{default:(0,t.w5)((()=>[(0,t.Wm)(X,{class:"row g-3 needs-validation"},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{":md":4},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationServer01"},{default:(0,t.w5)((()=>[(0,t.Uk)("Email")])),_:1}),(0,t.Wm)(Y,{id:"validationServer01",type:"text",value:"Mark",valid:"",required:""}),(0,t.Wm)(j,{valid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Looks good!")])),_:1})])),_:1}),(0,t.Wm)(R,{":md":4},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationServer02"},{default:(0,t.w5)((()=>[(0,t.Uk)("Email")])),_:1}),(0,t.Wm)(Y,{id:"validationServer02",type:"text",value:"Otto",valid:"",required:""}),(0,t.Wm)(j,{valid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Looks good!")])),_:1})])),_:1}),(0,t.Wm)(R,{":md":4},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationServerUsername"},{default:(0,t.w5)((()=>[(0,t.Uk)("Username")])),_:1}),(0,t.Wm)(N,{class:"has-validation"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{id:"inputGroupPrepend03"},{default:(0,t.w5)((()=>[(0,t.Uk)("@")])),_:1}),(0,t.Wm)(Y,{id:"validationServerUsername",type:"text",value:"","aria-describedby":"inputGroupPrepend03",invalid:"",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Please choose a username.")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(R,{md:6},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationServer03"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Y,{id:"validationServer03",type:"text",invalid:"",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Please provide a valid city.")])),_:1})])),_:1}),(0,t.Wm)(R,{md:3},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationServer04"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Z,{id:"validationServer04",invalid:""},{default:(0,t.w5)((()=>[b,h])),_:1}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Please provide a valid city.")])),_:1})])),_:1}),(0,t.Wm)(R,{md:3},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationServer05"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Y,{id:"validationServer05",type:"text",invalid:"",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Please provide a valid zip.")])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{id:"invalidCheck",type:"checkbox",label:"Agree to terms and conditions",invalid:"",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("You must agree before submitting.")])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{color:"primary",type:"submit"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Submit form ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(ae,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[U,(0,t.Uk)(),y])),_:1}),(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[C,g,(0,t.Wm)($,{href:"forms/validation.html#supported-elements"},{default:(0,t.w5)((()=>[(0,t.Wm)(X,{validated:!0},{default:(0,t.w5)((()=>[(0,t._)("div",x,[(0,t.Wm)(J,{for:"validationTextarea",class:"form-label"},{default:(0,t.w5)((()=>[(0,t.Uk)("Textarea")])),_:1}),(0,t.Wm)(le,{id:"validationTextarea",placeholder:"Required example textarea",invalid:"",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please enter a message in the textarea. ")])),_:1})]),(0,t.Wm)(K,{id:"validationFormCheck1",class:"mb-3",label:"Check this checkbox",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Example invalid feedback text")])),_:1}),(0,t.Wm)(K,{id:"validationFormCheck2",type:"radio",name:"radio-stacked",label:"Check this checkbox",required:""}),(0,t.Wm)(K,{id:"validationFormCheck3",class:"mb-3",type:"radio",name:"radio-stacked",label:"Or toggle this other radio",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("More example invalid feedback text")])),_:1}),(0,t._)("div",S,[(0,t.Wm)(Z,{required:"","aria-label":"select example"},{default:(0,t.w5)((()=>[q,T,P,D])),_:1}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Example invalid select feedback")])),_:1})]),(0,t._)("div",F,[(0,t.Wm)(Y,{id:"validationTextarea",type:"file","aria-label":"file example",required:""}),(0,t.Wm)(j,{invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Example invalid form file feedback")])),_:1})]),(0,t._)("div",E,[(0,t.Wm)(Q,{type:"submit",color:"primary",disabled:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Submit form")])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(ae,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[G,(0,t.Uk)(),V])),_:1}),(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[L,(0,t.Wm)($,{href:"forms/validation.html#tooltips"},{default:(0,t.w5)((()=>[(0,t.Wm)(X,{class:"row g-3 needs-validation",novalidate:"",validated:e.validatedTooltip01,onSubmit:M.handleSubmitTooltip01},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{md:4,class:"position-relative"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationTooltip01"},{default:(0,t.w5)((()=>[(0,t.Uk)("Email")])),_:1}),(0,t.Wm)(Y,{id:"validationTooltip01",value:"Mark",required:""}),(0,t.Wm)(j,{tooltip:"",valid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Looks good! ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:4,class:"position-relative"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationTooltip02"},{default:(0,t.w5)((()=>[(0,t.Uk)("Email")])),_:1}),(0,t.Wm)(Y,{id:"validationTooltip02",value:"Otto",required:""}),(0,t.Wm)(j,{tooltip:"",valid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Looks good! ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:4,class:"position-relative"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationTooltipUsername"},{default:(0,t.w5)((()=>[(0,t.Uk)("Username")])),_:1}),(0,t.Wm)(N,{class:"has-validation"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{id:"inputGroupPrepend"},{default:(0,t.w5)((()=>[(0,t.Uk)("@")])),_:1}),(0,t.Wm)(Y,{id:"validationTooltipUsername",value:"","aria-describedby":"inputGroupPrepend",required:""}),(0,t.Wm)(j,{tooltip:"",invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please choose a username. ")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(R,{md:6,class:"position-relative"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationTooltip03"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Y,{id:"validationTooltip03",required:""}),(0,t.Wm)(j,{tooltip:"",invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please provide a valid city. ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:3,class:"position-relative"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationTooltip04"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Z,{id:"validationTooltip04",required:""},{default:(0,t.w5)((()=>[I,O])),_:1}),(0,t.Wm)(j,{tooltip:"",invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please provide a valid city. ")])),_:1})])),_:1}),(0,t.Wm)(R,{md:3,class:"position-relative"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{for:"validationTooltip05"},{default:(0,t.w5)((()=>[(0,t.Uk)("City")])),_:1}),(0,t.Wm)(Y,{id:"validationTooltip05",required:""}),(0,t.Wm)(j,{tooltip:"",invalid:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" Please provide a valid zip. ")])),_:1})])),_:1}),(0,t.Wm)(R,{xs:12,class:"position-relative"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{color:"primary",type:"submit"},{default:(0,t.w5)((()=>[(0,t.Uk)("Submit form")])),_:1})])),_:1})])),_:1},8,["validated","onSubmit"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var A={name:"Validation",data:()=>({validatedCustom01:null,validatedDefault01:null,validatedTooltip01:null}),methods:{handleSubmitCustom01(e){const a=e.currentTarget;!1===a.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.validatedCustom01=!0},handleSubmitDefault01(e){const a=e.currentTarget;!1===a.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.validatedDefault01=!0},handleSubmitTooltip01(e){const a=e.currentTarget;!1===a.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.validatedTooltip01=!0}}},M=l(5312);const B=(0,M.Z)(A,[["render",z]]);var J=B}}]);
//# sourceMappingURL=7547.d16dab63.js.map