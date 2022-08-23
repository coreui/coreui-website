"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[622],{3622:(S,T,i)=>{i.r(T),i.d(T,{ModalDocsModule:()=>_e});var Z=i(6895),v=i(5432),_=i(674),D=i(2349),M=i(1950),e=i(8256),C=i(1481),J=i(4217),H=i(6971),c=i(3463),p=i(1817);const P=["*"];let r=(()=>{class t{get hostClasses(){return{"modal-body":!0}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["c-modal-body"]],hostVars:2,hostBindings:function(o,n){2&o&&e.Tol(n.hostClasses)},ngContentSelectors:P,decls:1,vars:0,template:function(o,n){1&o&&(e.F$t(),e.Hsn(0))},styles:["[_nghost-%COMP%]{display:block}"]}),t})();const Q=["*"];let g=(()=>{class t{get hostClasses(){return{"modal-footer":!0}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["c-modal-footer"]],hostVars:2,hostBindings:function(o,n){2&o&&e.Tol(n.hostClasses)},ngContentSelectors:Q,decls:1,vars:0,template:function(o,n){1&o&&(e.F$t(),e.Hsn(0))},encapsulation:2}),t})();const F=["*"];let d=(()=>{class t{get hostClasses(){return{"modal-header":!0}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["c-modal-header"]],hostVars:2,hostBindings:function(o,n){2&o&&e.Tol(n.hostClasses)},ngContentSelectors:F,decls:1,vars:0,template:function(o,n){1&o&&(e.F$t(),e.Hsn(0))},encapsulation:2}),t})(),u=(()=>{class t{get hostClasses(){return{"modal-title":!0}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=e.lG2({type:t,selectors:[["","cModalTitle",""]],hostVars:2,hostBindings:function(o,n){2&o&&e.Tol(n.hostClasses)}}),t})();var b=i(7340),A=i(1281),y=i(2575);const E=["*"];let q=(()=>{class t{constructor(o,n){this.hostElement=o,this.interactivityChecker=n}get hostClasses(){return{"modal-content":!0}}onClickHandler(o){o.stopPropagation();const n=o.target;return this.hostElement?.nativeElement?.contains(n)&&this.interactivityChecker.isFocusable(n)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(e.SBq),e.Y36(y.ic))},t.\u0275cmp=e.Xpm({type:t,selectors:[["c-modal-content"]],hostVars:2,hostBindings:function(o,n){1&o&&e.NdJ("click",function(s){return n.onClickHandler(s)}),2&o&&e.Tol(n.hostClasses)},ngContentSelectors:E,decls:1,vars:0,template:function(o,n){1&o&&(e.F$t(),e.Hsn(0))},encapsulation:2}),t})();var U=i(7073),z=i(5319);const L=["*"];let X=(()=>{class t{get hostClasses(){return{"modal-dialog":!0,"modal-dialog-centered":"center"===this.alignment,"modal-fullscreen":!0===this.fullscreen,[`modal-fullscreen-${this.fullscreen}-down`]:this.fullscreen,"modal-dialog-scrollable":this.scrollable,[`modal-${this.size}`]:this.size}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["c-modal-dialog"]],hostVars:2,hostBindings:function(o,n){2&o&&e.Tol(n.hostClasses)},inputs:{alignment:"alignment",fullscreen:"fullscreen",scrollable:"scrollable",size:"size"},ngContentSelectors:L,decls:1,vars:0,template:function(o,n){1&o&&(e.F$t(),e.Hsn(0))},styles:["[_nghost-%COMP%]{display:block}.modal-dialog-centered[_nghost-%COMP%]{display:flex}"]}),t})();const W=["*"];let m=(()=>{class t{constructor(o,n,a,s,f){this.document=o,this.renderer=n,this.hostElement=a,this.modalService=s,this.backdropService=f,this.alignment="top",this.backdrop=!0,this.keyboard=!0,this.transition=!0,this.role="dialog",this.ariaModal=!0,this._scrollable=!1,this.visibleChange=new e.vpe,this._show=!0,this.mouseDownTarget=null}set scrollable(o){this._scrollable=(0,A.Ig)(o)}get scrollable(){return this._scrollable}set visible(o){const n=(0,A.Ig)(o);this._visible!==n&&(this._visible=n,this.setBackdrop(!1!==this.backdrop&&n),this.setBodyStyles(n),this.visibleChange.emit(n))}get visible(){return this._visible}get hostClasses(){return{modal:!0,fade:this.transition,show:this.show}}get ariaHidden(){return!this.visible||null}get tabIndex(){return"-1"}get animateTrigger(){return this.visible?"visible":"hidden"}get show(){return this.visible&&this._show}set show(o){this._show=o}get scrollbarWidth(){const o=this.document.documentElement.clientWidth;return`${Math.abs((window?.innerWidth??o)-o)}px`}animateStart(o){this.renderer.setStyle(this.hostElement.nativeElement,"overflow-y","hidden"),this.show=this.visible}animateDone(o){const n=this.scrollbarWidth;setTimeout(()=>{"visible"===o.toState&&(this.inBoundingClientRect=this.modalContent?.nativeElement?.getBoundingClientRect().height<=this.document?.documentElement.clientHeight,this.inBoundingClientRect?(this.renderer.removeStyle(this.document.body,"overflow-y"),this.renderer.removeStyle(this.document.body,"padding-right")):(this.renderer.setStyle(this.document.body,"overflow-y","hidden"),this.renderer.setStyle(this.document.body,"padding-right",n)),!0===this.fullscreen&&this.renderer.setStyle(this.document.body,"overflow-y","hidden"),this.renderer.removeStyle(this.hostElement.nativeElement,"overflow-y"))})}onKeyDownHandler(o){"Escape"===o.key&&this.keyboard&&this.visible&&("static"===this.backdrop?this.setStaticBackdrop():this.modalService.toggle({show:!1,modal:this}))}onMouseDownHandler(o){this.mouseDownTarget=o.target}onClickHandler(o){o.stopPropagation(),this.mouseDownTarget===o.target?"static"!==this.backdrop?this.modalService.toggle({show:!1,modal:this}):this.setStaticBackdrop():this.mouseDownTarget=null}ngOnInit(){this.stateToggleSubscribe()}ngOnDestroy(){this.modalService.toggle({show:!1,modal:this}),this.stateToggleSubscribe(!1)}stateToggleSubscribe(o=!0){o?this.stateToggleSubscription=this.modalService.modalState$.subscribe(n=>{this===n.modal||this.id===n.id?"show"in n&&(this.visible="toggle"===n?.show?!this.visible:n.show):this.visible&&(this.visible=!1)}):this.stateToggleSubscription.unsubscribe()}setBackdrop(o){this.activeBackdrop=o?this.backdropService.setBackdrop("modal"):this.backdropService.clearBackdrop(this.activeBackdrop)}setBodyStyles(o){o?(!0===this.fullscreen&&this.renderer.setStyle(this.document.body,"overflow-y","hidden"),!0===this.backdrop&&this.renderer.addClass(this.document.body,"modal-open")):(this.renderer.removeClass(this.document.body,"modal-open"),this.renderer.removeStyle(this.document.body,"overflow-y"),this.renderer.removeStyle(this.document.body,"padding-right"))}setStaticBackdrop(){this.transition&&(this.renderer.addClass(this.hostElement.nativeElement,"modal-static"),this.renderer.setStyle(this.hostElement.nativeElement,"overflow-y","hidden"),setTimeout(()=>{this.renderer.removeClass(this.hostElement.nativeElement,"modal-static"),this.renderer.removeStyle(this.hostElement.nativeElement,"overflow-y")},400))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(Z.K0),e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(U.Z),e.Y36(z.Q))},t.\u0275cmp=e.Xpm({type:t,selectors:[["c-modal"]],viewQuery:function(o,n){if(1&o&&e.Gf(q,5,e.SBq),2&o){let a;e.iGM(a=e.CRH())&&(n.modalContent=a.first)}},hostVars:7,hostBindings:function(o,n){1&o&&(e.WFA("@showHide.start",function(s){return n.animateStart(s)})("@showHide.done",function(s){return n.animateDone(s)}),e.NdJ("keydown",function(s){return n.onKeyDownHandler(s)},!1,e.evT)("mousedown",function(s){return n.onMouseDownHandler(s)})("click",function(s){return n.onClickHandler(s)})),2&o&&(e.uIk("role",n.role)("aria-modal",n.ariaModal)("aria-hidden",n.ariaHidden)("tabindex",n.tabIndex),e.d8E("@showHide",n.animateTrigger),e.Tol(n.hostClasses))},inputs:{alignment:"alignment",backdrop:"backdrop",fullscreen:"fullscreen",keyboard:"keyboard",id:"id",size:"size",transition:"transition",role:"role",ariaModal:"ariaModal",scrollable:"scrollable",visible:"visible"},outputs:{visibleChange:"visibleChange"},exportAs:["cModal"],ngContentSelectors:W,decls:4,vars:6,consts:[[3,"alignment","fullscreen","scrollable","size"],[2,"display","contents",3,"cdkTrapFocus","cdkTrapFocusAutoCapture"]],template:function(o,n){1&o&&(e.F$t(),e.TgZ(0,"c-modal-dialog",0)(1,"c-modal-content")(2,"div",1),e.Hsn(3),e.qZA()()()),2&o&&(e.Q6J("alignment",n.alignment)("fullscreen",n.fullscreen)("scrollable",n.scrollable)("size",n.size),e.xp6(2),e.Q6J("cdkTrapFocus",n.visible)("cdkTrapFocusAutoCapture",n.visible))},dependencies:[y.mK,q,X],data:{animation:[(0,b.X$)("showHide",[(0,b.SB)("visible",(0,b.oB)({display:"block"})),(0,b.SB)("hidden",(0,b.oB)({display:"none"})),(0,b.eR)("visible <=> *",[(0,b.jt)("300ms")])])]}}),t})(),O=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal01"]],decls:12,vars:2,consts:[["backdrop","static","id","modalStatic",1,"position-static","d-block","show",3,"keyboard","transition"],["cModalTitle",""],["cButtonClose",""],["cButton","","color","secondary"],["cButton","","color","primary"]],template:function(o,n){1&o&&(e.TgZ(0,"c-modal",0)(1,"c-modal-header")(2,"h5",1),e._uU(3,"Modal title"),e.qZA(),e._UZ(4,"button",2),e.qZA(),e.TgZ(5,"c-modal-body"),e._uU(6,"Modal body text goes here."),e.qZA(),e.TgZ(7,"c-modal-footer")(8,"button",3),e._uU(9,"Close"),e.qZA(),e.TgZ(10,"button",4),e._uU(11,"Save changes"),e.qZA()()()),2&o&&e.Q6J("keyboard",!1)("transition",!1)},dependencies:[c.H,p.P,r,g,d,u,m],encapsulation:2}),t})(),V=(()=>{class t{constructor(){this.visible=!1}toggleLiveDemo(){this.visible=!this.visible}handleLiveDemoChange(o){this.visible=o}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal02"]],decls:14,vars:1,consts:[["cButton","",3,"click"],["id","liveDemoModal",3,"visible","visibleChange"],["cModalTitle",""],["cButtonClose","",3,"click"],["cButton","","color","secondary",3,"click"],["cButton","","color","primary"]],template:function(o,n){1&o&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return n.toggleLiveDemo()}),e._uU(1,"Launch demo modal"),e.qZA(),e.TgZ(2,"c-modal",1),e.NdJ("visibleChange",function(s){return n.handleLiveDemoChange(s)}),e.TgZ(3,"c-modal-header")(4,"h5",2),e._uU(5,"Modal title"),e.qZA(),e.TgZ(6,"button",3),e.NdJ("click",function(){return n.toggleLiveDemo()}),e.qZA()(),e.TgZ(7,"c-modal-body"),e._uU(8,"Woohoo, you are reading this text in a modal!"),e.qZA(),e.TgZ(9,"c-modal-footer")(10,"button",4),e.NdJ("click",function(){return n.toggleLiveDemo()}),e._uU(11," Close "),e.qZA(),e.TgZ(12,"button",5),e._uU(13,"Save changes"),e.qZA()()()),2&o&&(e.xp6(2),e.Q6J("visible",n.visible))},dependencies:[c.H,p.P,r,g,d,u,m],encapsulation:2}),t})(),h=(()=>{class t{constructor(o){this.modalService=o}dismiss(o){o.preventDefault(),this.modalService.toggle({show:"toggle",id:this.id})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(U.Z))},t.\u0275dir=e.lG2({type:t,selectors:[["","cModalToggle",""]],hostBindings:function(o,n){1&o&&e.NdJ("click",function(s){return n.dismiss(s)})},inputs:{id:["cModalToggle","id"]}}),t})(),j=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal03"]],decls:15,vars:3,consts:[["cButton","",3,"cModalToggle"],["backdrop","static","id","staticBackdropModal"],["staticBackdropModal",""],["cModalTitle",""],["cButtonClose","",3,"cModalToggle"],["cButton","","color","secondary",3,"cModalToggle"],["cButton","","color","primary"]],template:function(o,n){if(1&o&&(e.TgZ(0,"button",0),e._uU(1,"Launch static backdrop modal"),e.qZA(),e.TgZ(2,"c-modal",1,2)(4,"c-modal-header")(5,"h5",3),e._uU(6,"Modal title"),e.qZA(),e._UZ(7,"button",4),e.qZA(),e.TgZ(8,"c-modal-body"),e._uU(9,"Woohoo, you're reading this text in a modal!"),e.qZA(),e.TgZ(10,"c-modal-footer")(11,"button",5),e._uU(12," Close "),e.qZA(),e.TgZ(13,"button",6),e._uU(14,"Understood"),e.qZA()()()),2&o){const a=e.MAs(3);e.Q6J("cModalToggle",a.id),e.xp6(7),e.Q6J("cModalToggle",a.id),e.xp6(4),e.Q6J("cModalToggle",a.id)}},dependencies:[c.H,p.P,r,h,g,d,u,m],encapsulation:2}),t})();function Y(t,l){1&t&&e.GkF(0)}function I(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(2,"p"),e._uU(3," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(4,"p"),e._uU(5," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(6,"p"),e._uU(7," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(8,"p"),e._uU(9," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(10,"p"),e._uU(11," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(12,"p"),e._uU(13," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(14,"p"),e._uU(15," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(16,"p"),e._uU(17," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(18,"p"),e._uU(19," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(20,"p"),e._uU(21," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(22,"p"),e._uU(23," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(24,"p"),e._uU(25," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(26,"p"),e._uU(27," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(28,"p"),e._uU(29," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(30,"p"),e._uU(31," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(32,"p"),e._uU(33," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(34,"p"),e._uU(35," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA())}let N=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal04"]],decls:17,vars:4,consts:[["cButton","",3,"cModalToggle"],["id","scrollingLongContentModal"],["scrollingLongContentModal",""],["cModalTitle",""],["cButtonClose","",3,"cModalToggle"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"cModalToggle"],["cButton","","color","primary"],["longContent",""]],template:function(o,n){if(1&o&&(e.TgZ(0,"button",0),e._uU(1,"Scrolling long content"),e.qZA(),e.TgZ(2,"c-modal",1,2)(4,"c-modal-header")(5,"h5",3),e._uU(6,"Modal title"),e.qZA(),e._UZ(7,"button",4),e.qZA(),e.TgZ(8,"c-modal-body"),e.YNc(9,Y,1,0,"ng-container",5),e.qZA(),e.TgZ(10,"c-modal-footer")(11,"button",6),e._uU(12," Close "),e.qZA(),e.TgZ(13,"button",7),e._uU(14,"Save changes"),e.qZA()()(),e.YNc(15,I,36,0,"ng-template",null,8,e.W1O)),2&o){const a=e.MAs(3),s=e.MAs(16);e.Q6J("cModalToggle",a.id),e.xp6(7),e.Q6J("cModalToggle",a.id),e.xp6(2),e.Q6J("ngTemplateOutlet",s),e.xp6(2),e.Q6J("cModalToggle",a.id)}},dependencies:[c.H,p.P,Z.tP,r,h,g,d,u,m],encapsulation:2}),t})();function R(t,l){1&t&&e.GkF(0)}function $(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(2,"p"),e._uU(3," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(4,"p"),e._uU(5," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(6,"p"),e._uU(7," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(8,"p"),e._uU(9," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(10,"p"),e._uU(11," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(12,"p"),e._uU(13," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(14,"p"),e._uU(15," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(16,"p"),e._uU(17," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(18,"p"),e._uU(19," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(20,"p"),e._uU(21," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(22,"p"),e._uU(23," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(24,"p"),e._uU(25," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(26,"p"),e._uU(27," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(28,"p"),e._uU(29," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA(),e.TgZ(30,"p"),e._uU(31," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),e.qZA(),e.TgZ(32,"p"),e._uU(33," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),e.qZA(),e.TgZ(34,"p"),e._uU(35," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. "),e.qZA())}let K=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal05"]],decls:17,vars:4,consts:[["cButton","",3,"cModalToggle"],["id","scrollableLongContentModal","scrollable",""],["scrollableLongContentModal",""],["cModalTitle",""],["cButtonClose","",3,"cModalToggle"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"cModalToggle"],["cButton","","color","primary"],["longContent",""]],template:function(o,n){if(1&o&&(e.TgZ(0,"button",0),e._uU(1,"Scrollable long content"),e.qZA(),e.TgZ(2,"c-modal",1,2)(4,"c-modal-header")(5,"h5",3),e._uU(6,"Modal title"),e.qZA(),e._UZ(7,"button",4),e.qZA(),e.TgZ(8,"c-modal-body"),e.YNc(9,R,1,0,"ng-container",5),e.qZA(),e.TgZ(10,"c-modal-footer")(11,"button",6),e._uU(12," Close "),e.qZA(),e.TgZ(13,"button",7),e._uU(14,"Save changes"),e.qZA()()(),e.YNc(15,$,36,0,"ng-template",null,8,e.W1O)),2&o){const a=e.MAs(3),s=e.MAs(16);e.Q6J("cModalToggle",a.id),e.xp6(7),e.Q6J("cModalToggle",a.id),e.xp6(2),e.Q6J("ngTemplateOutlet",s),e.xp6(2),e.Q6J("cModalToggle",a.id)}},dependencies:[c.H,p.P,Z.tP,r,h,g,d,u,m],encapsulation:2}),t})(),G=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal06"]],decls:15,vars:3,consts:[["cButton","",3,"cModalToggle"],["alignment","center","id","verticallyCenteredModal"],["verticallyCenteredModal",""],["cModalTitle",""],["cButtonClose","",3,"cModalToggle"],["cButton","","color","secondary",3,"cModalToggle"],["cButton","","color","primary"]],template:function(o,n){if(1&o&&(e.TgZ(0,"button",0),e._uU(1,"Centered modal"),e.qZA(),e.TgZ(2,"c-modal",1,2)(4,"c-modal-header")(5,"h5",3),e._uU(6,"Modal title"),e.qZA(),e._UZ(7,"button",4),e.qZA(),e.TgZ(8,"c-modal-body"),e._uU(9," Woohoo, you are reading this text in a modal! "),e.qZA(),e.TgZ(10,"c-modal-footer")(11,"button",5),e._uU(12," Close "),e.qZA(),e.TgZ(13,"button",6),e._uU(14,"Understood"),e.qZA()()()),2&o){const a=e.MAs(3);e.Q6J("cModalToggle",a.id),e.xp6(7),e.Q6J("cModalToggle",a.id),e.xp6(4),e.Q6J("cModalToggle",a.id)}},dependencies:[c.H,p.P,r,h,g,d,u,m],encapsulation:2}),t})(),ee=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal07"]],decls:48,vars:4,consts:[["cButton","",3,"cModalToggle"],["alignment","center","id","verticallyCenteredScrollableModal",3,"scrollable"],["verticallyCenteredScrollableModal",""],["cModalTitle",""],["cButtonClose","",3,"cModalToggle"],["cButton","","color","secondary",3,"cModalToggle"],["cButton","","color","primary"]],template:function(o,n){if(1&o&&(e.TgZ(0,"button",0),e._uU(1,"Centered scrollable modal"),e.qZA(),e.TgZ(2,"c-modal",1,2)(4,"c-modal-header")(5,"h5",3),e._uU(6,"Modal title"),e.qZA(),e._UZ(7,"button",4),e.qZA(),e.TgZ(8,"c-modal-body")(9,"p"),e._uU(10," This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. "),e.qZA(),e._UZ(11,"br")(12,"br")(13,"br")(14,"br")(15,"br")(16,"br")(17,"br")(18,"br")(19,"br")(20,"br")(21,"br")(22,"br")(23,"br")(24,"br")(25,"br")(26,"br")(27,"br")(28,"br")(29,"br")(30,"br")(31,"br")(32,"br")(33,"br")(34,"br")(35,"br")(36,"br")(37,"br")(38,"br")(39,"br")(40,"br"),e.TgZ(41,"p"),e._uU(42,"Just like that."),e.qZA()(),e.TgZ(43,"c-modal-footer")(44,"button",5),e._uU(45," Close "),e.qZA(),e.TgZ(46,"button",6),e._uU(47,"Understood"),e.qZA()()()),2&o){const a=e.MAs(3);e.Q6J("cModalToggle",a.id),e.xp6(2),e.Q6J("scrollable",!0),e.xp6(5),e.Q6J("cModalToggle",a.id),e.xp6(37),e.Q6J("cModalToggle",a.id)}},dependencies:[c.H,p.P,r,h,g,d,u,m],encapsulation:2}),t})();var oe=i(1394),te=i(910);function ne(t,l){1&t&&(e.TgZ(0,"h3",11),e._uU(1," Popover title "),e.qZA(),e.TgZ(2,"div",12),e._uU(3," And here\u2019s some amazing content. It\u2019s very engaging. Right? "),e.qZA())}const w=function(){return{strategy:"fixed"}};let le=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal08"]],decls:32,vars:9,consts:[["cButton","",3,"cModalToggle"],["alignment","center","id","withPopoverModal"],["withPopoverModal",""],["cModalTitle",""],["cButtonClose","",3,"cModalToggle"],["cButton","",3,"cPopoverTrigger","cPopover","cPopoverOptions"],["popoverHtml",""],["cTooltip","Tooltip text",3,"routerLink"],["cTooltip","Tooltip text","cTooltipPlacement","bottom",3,"cTooltipOptions","routerLink"],["cButton","","color","secondary",3,"cModalToggle"],["cButton","","color","primary"],[1,"popover-header"],["id","",1,"popover-body"]],template:function(o,n){if(1&o&&(e.TgZ(0,"button",0),e._uU(1,"Modal with Popover"),e.qZA(),e.TgZ(2,"c-modal",1,2)(4,"c-modal-header")(5,"h5",3),e._uU(6,"Modal title"),e.qZA(),e._UZ(7,"button",4),e.qZA(),e.TgZ(8,"c-modal-body")(9,"h5"),e._uU(10,"Popover in a modal"),e.qZA(),e._uU(11," This "),e.TgZ(12,"button",5),e._uU(13,"button"),e.qZA(),e._uU(14," triggers a popover on click. "),e.YNc(15,ne,4,0,"ng-template",null,6,e.W1O),e._UZ(17,"hr"),e.TgZ(18,"h5"),e._uU(19,"Tooltips in a modal"),e.qZA(),e.TgZ(20,"p")(21,"a",7),e._uU(22,"This link"),e.qZA(),e._uU(23," and "),e.TgZ(24,"a",8),e._uU(25,"that link"),e.qZA(),e._uU(26," have tooltips on hover. "),e.qZA()(),e.TgZ(27,"c-modal-footer")(28,"button",9),e._uU(29," Close "),e.qZA(),e.TgZ(30,"button",10),e._uU(31,"Understood"),e.qZA()()()),2&o){const a=e.MAs(3),s=e.MAs(16);e.Q6J("cModalToggle",a.id),e.xp6(7),e.Q6J("cModalToggle",a.id),e.xp6(5),e.Q6J("cPopoverTrigger","click")("cPopover",s)("cPopoverOptions",e.DdM(7,w)),e.xp6(12),e.Q6J("cTooltipOptions",e.DdM(8,w)),e.xp6(4),e.Q6J("cModalToggle",a.id)}},dependencies:[c.H,p.P,r,h,g,d,u,m,M.yS,oe.k,te.i],encapsulation:2}),t})(),ae=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal09"]],decls:27,vars:3,consts:[["cButton","",3,"cModalToggle"],["id","modalXl","size","xl"],["modalXl",""],["cModalTitle",""],["id","modalLg","size","lg"],["modalLg",""],["id","modalSm","size","sm"],["modalSm",""]],template:function(o,n){if(1&o&&(e.TgZ(0,"button",0),e._uU(1,"Extra large modal"),e.qZA(),e.TgZ(2,"button",0),e._uU(3,"Large modal"),e.qZA(),e.TgZ(4,"button",0),e._uU(5,"Small modal"),e.qZA(),e.TgZ(6,"c-modal",1,2)(8,"c-modal-header")(9,"h5",3),e._uU(10,"Extra large modal"),e.qZA()(),e.TgZ(11,"c-modal-body"),e._uU(12,"..."),e.qZA()(),e.TgZ(13,"c-modal",4,5)(15,"c-modal-header")(16,"h5",3),e._uU(17,"Large modal"),e.qZA()(),e.TgZ(18,"c-modal-body"),e._uU(19,"..."),e.qZA()(),e.TgZ(20,"c-modal",6,7)(22,"c-modal-header")(23,"h5",3),e._uU(24,"Small modal"),e.qZA()(),e.TgZ(25,"c-modal-body"),e._uU(26,"..."),e.qZA()()),2&o){const a=e.MAs(7),s=e.MAs(14),f=e.MAs(21);e.Q6J("cModalToggle",a.id),e.xp6(2),e.Q6J("cModalToggle",s.id),e.xp6(2),e.Q6J("cModalToggle",f.id)}},dependencies:[c.H,r,h,d,u,m],encapsulation:2}),t})(),se=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal10"]],decls:63,vars:14,consts:[["cButton","",3,"cModalToggle"],["id","fullScreen",3,"fullscreen"],["fullScreen",""],["cModalTitle",""],["cButtonClose","",3,"cModalToggle"],["fullscreen","sm","id","fullScreenSm"],["fullScreenSm",""],["fullscreen","md","id","fullScreenMd"],["fullScreenMd",""],["fullscreen","lg","id","fullScreenLg"],["fullScreenLg",""],["fullscreen","xl","id","fullScreenXl"],["fullScreenXl",""],["fullscreen","xxl","id","fullScreen2Xl"],["fullScreen2Xl",""]],template:function(o,n){if(1&o&&(e.TgZ(0,"button",0),e._uU(1,"Full screen"),e.qZA(),e.TgZ(2,"button",0),e._uU(3,"Full screen below sm"),e.qZA(),e.TgZ(4,"button",0),e._uU(5,"Full screen below md"),e.qZA(),e.TgZ(6,"button",0),e._uU(7,"Full screen below lg"),e.qZA(),e.TgZ(8,"button",0),e._uU(9,"Full screen below xl"),e.qZA(),e.TgZ(10,"button",0),e._uU(11,"Full screen below xxl"),e.qZA(),e.TgZ(12,"c-modal",1,2)(14,"c-modal-header")(15,"h5",3),e._uU(16,"Full screen"),e.qZA(),e._UZ(17,"button",4),e.qZA(),e.TgZ(18,"c-modal-body"),e._uU(19,"..."),e.qZA(),e.TgZ(20,"c-modal-footer")(21,"button",0),e._uU(22,"Close"),e.qZA()()(),e.TgZ(23,"c-modal",5,6)(25,"c-modal-header")(26,"h5",3),e._uU(27,"Full screen below sm"),e.qZA(),e._UZ(28,"button",4),e.qZA(),e.TgZ(29,"c-modal-body"),e._uU(30,"..."),e.qZA()(),e.TgZ(31,"c-modal",7,8)(33,"c-modal-header")(34,"h5",3),e._uU(35,"Full screen below md"),e.qZA(),e._UZ(36,"button",4),e.qZA(),e.TgZ(37,"c-modal-body"),e._uU(38,"..."),e.qZA()(),e.TgZ(39,"c-modal",9,10)(41,"c-modal-header")(42,"h5",3),e._uU(43,"Full screen below lg"),e.qZA(),e._UZ(44,"button",4),e.qZA(),e.TgZ(45,"c-modal-body"),e._uU(46,"..."),e.qZA()(),e.TgZ(47,"c-modal",11,12)(49,"c-modal-header")(50,"h5",3),e._uU(51,"Full screen below xl"),e.qZA(),e._UZ(52,"button",4),e.qZA(),e.TgZ(53,"c-modal-body"),e._uU(54,"..."),e.qZA()(),e.TgZ(55,"c-modal",13,14)(57,"c-modal-header")(58,"h5",3),e._uU(59,"Full screen below xxl"),e.qZA(),e._UZ(60,"button",4),e.qZA(),e.TgZ(61,"c-modal-body"),e._uU(62,"..."),e.qZA()()),2&o){const a=e.MAs(13),s=e.MAs(24),f=e.MAs(32),x=e.MAs(40),B=e.MAs(48),k=e.MAs(56);e.Q6J("cModalToggle",a.id),e.xp6(2),e.Q6J("cModalToggle",s.id),e.xp6(2),e.Q6J("cModalToggle",f.id),e.xp6(2),e.Q6J("cModalToggle",x.id),e.xp6(2),e.Q6J("cModalToggle",B.id),e.xp6(2),e.Q6J("cModalToggle",k.id),e.xp6(2),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("cModalToggle",a.id),e.xp6(4),e.Q6J("cModalToggle",a.id),e.xp6(7),e.Q6J("cModalToggle",s.id),e.xp6(8),e.Q6J("cModalToggle",f.id),e.xp6(8),e.Q6J("cModalToggle",x.id),e.xp6(8),e.Q6J("cModalToggle",B.id),e.xp6(8),e.Q6J("cModalToggle",k.id)}},dependencies:[c.H,p.P,r,h,g,d,u,m],encapsulation:2}),t})();const ie=function(){return["components/modal/examples/modal01.component.html"]},ce=function(){return["components/modal/examples/modal02.component.html","components/modal/examples/modal02.component.ts"]},re=function(){return["components/modal/examples/modal03.component.html"]},de=function(){return["components/modal/examples/modal04.component.html"]},ue=function(){return["components/modal/examples/modal05.component.html"]},me=function(){return["components/modal/examples/modal06.component.html"]},pe=function(){return["components/modal/examples/modal07.component.html"]},ge=function(){return["components/modal/examples/modal08.component.html"]},he=function(){return["components/modal/examples/modal09.component.html"]},be=function(){return["components/modal/examples/modal10.component.html"]},Ze=[{path:"",component:(()=>{class t{constructor(o,n){this.metaService=o,this.titleService=n,this.usage=i(2303).Z,this.title="Angular Modal Component",this.description="Angular Modal component offers a lightweight, multi-purpose popup to add dialogs to yours. Learn how to customize Angular CoreUI Modals easily. Multiple examples and tutorial."}ngOnInit(){this.titleService.setTitle(this.title),this.metaService.updateTag({name:"description",content:this.description})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(C.h_),e.Y36(C.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-modal"]],decls:62,vars:22,consts:[["id","getting-started"],[1,"docs-lead","fs-4","fw-light"],[3,"files"],[1,"api-table"]],template:function(o,n){1&o&&(e.TgZ(0,"h1",0),e._uU(1,"Angular Modal Component"),e.qZA(),e.TgZ(2,"p",1),e._uU(3),e.qZA(),e._UZ(4,"docs-ads-carbon"),e.TgZ(5,"markdown"),e._uU(6,"\n  ## Examples\n\n  ### Modal components\n\n  Below is a static modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.\n"),e.qZA(),e.TgZ(7,"docs-example",2),e._UZ(8,"docs-modal01"),e.qZA(),e.TgZ(9,"markdown"),e._uU(10,"\n  ### Live demo\n\n  Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.\n"),e.qZA(),e.TgZ(11,"docs-example",2),e._UZ(12,"docs-modal02"),e.qZA(),e.TgZ(13,"markdown"),e._uU(14,"\n  ### Static backdrop\n\n  If you set a `backdrop` to `static`, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it.\n"),e.qZA(),e.TgZ(15,"docs-example",2),e._UZ(16,"docs-modal03"),e.qZA(),e.TgZ(17,"markdown"),e._uU(18,"\n  ### Scrolling long content\n\n  When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.\n"),e.qZA(),e.TgZ(19,"docs-example",2),e._UZ(20,"docs-modal04"),e.qZA(),e.TgZ(21,"markdown"),e._uU(22,"\n  ### Scrollable\n\n  You can also create a scrollable modal that allows scroll the modal body by adding `scrollable` prop.\n"),e.qZA(),e.TgZ(23,"docs-example",2),e._UZ(24,"docs-modal05"),e.qZA(),e.TgZ(25,"markdown"),e._uU(26,'\n  ### Vertically centered\n\n  Add `alignment="center` to `c-modal` for vertically centered modal.\n'),e.qZA(),e.TgZ(27,"docs-example",2),e._UZ(28,"docs-modal06"),e.qZA(),e.TgZ(29,"markdown"),e._uU(30,"\n  Centered scrollable\n"),e.qZA(),e.TgZ(31,"docs-example",2),e._UZ(32,"docs-modal07"),e.qZA(),e.TgZ(33,"markdown"),e._uU(34,"\n  ### Tooltips and popovers\n\n  `cTooltips` and `cPopovers` can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.\n"),e.qZA(),e.TgZ(35,"docs-example",2),e._UZ(36,"docs-modal08"),e.qZA(),e.TgZ(37,"markdown"),e._uU(38,"\n  ### Optional sizes\n\n  Modals have three optional sizes, available via modifier props be placed on a `c-modal`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.\n\n  "),e.TgZ(39,"div",3),e._uU(40,"\n\n    | Size | Property value | Modal max-width |\n    | ---- | ----------- | ---- |\n    | Small | `sm` | `300px` |\n    | Default | _none_ | `500px` |\n    | Large | `lg` | `800px` |\n    | Extra Large | `xl` | `1140px` |\n\n  "),e.qZA(),e._uU(41,"\n"),e.qZA(),e.TgZ(42,"docs-example",2),e._UZ(43,"docs-modal09"),e.qZA(),e.TgZ(44,"markdown"),e._uU(45,"\n  ### Fullscreen Modal\n\n  Another override is the option to pop up a modal that covers the user viewport, available via property `fullscreen`.\n\n  "),e.TgZ(46,"div",3),e._uU(47,"\n\n    | `fullscreen` value | Availability |\n    | ---- | ----------- |\n    | `true` | _Always_ |\n    | `sm` | _Below_ `576px` |\n    | `md` | _Below_ `768px` |\n    | `lg` | _Below_ `992px` |\n    | `xl` | _Below_ `1200px` |\n    | `xxl` | _Below_ `1400px` |\n\n  "),e.qZA(),e._uU(48,"\n"),e.qZA(),e.TgZ(49,"docs-example",2),e._UZ(50,"docs-modal10"),e.qZA(),e.TgZ(51,"markdown"),e._uU(52),e.TgZ(53,"div",3),e._uU(54,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `alignment` | Align the modal in the center or top of the screen. | `top` \\| `center` | _top_ |\n    | `backdrop` | Apply a backdrop on body while modal is open. | `boolean` \\| `static` | _true_ |\n    | `fullscreen` | Set modal to cover the entire user viewport. | `boolean` \\| `sm` \\| `md` \\| `lg` \\| `xl` \\| `xxl` |_undefined_|\n    | `id` | Html id attr, required for programmatic modal visibility change. | `string` | **required** |\n    | `keyboard` | Closes the modal when escape key is pressed. | `boolean` |_true_|\n    | `size` | Size the component small, large, or extra large. | `sm` \\| `lg` \\| `xl` |_undefined_|\n    | `transition` | Remove animation to create modal that simply appear rather than fade in to view. | `boolean` |_true_|\n    | `scrollable` | Create a scrollable modal that allows scrolling the modal body. | `boolean` |_false_|\n    | `visible` | Toggle the visibility of modal component. | `boolean` |_undefined_|\n    | `role` | Html role for modal | `string` |_dialog_|\n    | `aria-modal` | Set aria-modal html attr for modal. | `string` |_true_|\n\n  "),e.qZA(),e._uU(55,"\n\n  ##### Outputs\n  "),e.TgZ(56,"div",3),e._uU(57,"\n\n    | name | description | type |\n    | ---- | ----------- | ---- |\n    | `visibleChange` | Event emitted on `visible` change. | `boolean` |\n\n  "),e.qZA(),e._uU(58,"\n\n  ### c-modal-body\n  _component_\n\n  ### c-modal-footer\n  _component_\n\n  ### c-modal-header\n  _component_\n\n  ### cModalTittle\n  _directive_\n\n  ### cModalToggle\n  _directive_\n\n  ##### Inputs\n  "),e.TgZ(59,"div",3),e._uU(60,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `cModalToggle` | Html element id attr of modal to dismiss. | `string` | **required** |\n\n  "),e.qZA(),e._uU(61,"\n\n"),e.qZA()),2&o&&(e.xp6(3),e.Oqu(n.description),e.xp6(4),e.Q6J("files",e.DdM(12,ie)),e.xp6(4),e.Q6J("files",e.DdM(13,ce)),e.xp6(4),e.Q6J("files",e.DdM(14,re)),e.xp6(4),e.Q6J("files",e.DdM(15,de)),e.xp6(4),e.Q6J("files",e.DdM(16,ue)),e.xp6(4),e.Q6J("files",e.DdM(17,me)),e.xp6(4),e.Q6J("files",e.DdM(18,pe)),e.xp6(4),e.Q6J("files",e.DdM(19,ge)),e.xp6(7),e.Q6J("files",e.DdM(20,he)),e.xp6(7),e.Q6J("files",e.DdM(21,be)),e.xp6(3),e.hij("\n  ---\n\n  ## API reference\n\n  ### Modal Module\n\n  ",n.usage,"\n\n  ### c-modal\n  _component_\n\n  ##### Inputs\n  "))},dependencies:[J.U,v.lF,H.E,O,V,j,N,K,G,ee,le,ae,se],encapsulation:2}),t})()}];let fe=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[M.Bz.forChild(Ze),M.Bz]}),t})();var Te=i(417);let _e=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.hJ1,Z.ez,_.zkK,fe,_.UUf,_.z8t,D.B,v.JP.forChild(),Te.K]}),t})()},2303:(S,T,i)=>{i.d(T,{Z:()=>Z});const Z="```typescript\nimport { ModalModule } from '@coreui/angular';\n\n@NgModule({\n    imports: [ModalModule,]\n})\nexport class AppModule() { }\n```\n"}}]);