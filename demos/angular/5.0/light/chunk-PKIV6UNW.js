import{b as Q}from"./chunk-ZWRF5SGE.js";import"./chunk-UBKFDT4A.js";import{$ as m,Ac as O,Ba as R,Ca as _,Da as d,Ed as W,Fd as K,I as b,Ic as P,M as k,N,Na as r,Oa as j,Pa as f,Pc as H,Qc as J,Ta as S,Tc as L,Ua as g,V as U,aa as z,eb as w,fb as E,gb as D,ja as C,la as c,rc as T,uc as G,va as a,vb as V,ve as h,wa as i,xa as y,ya as p,yc as I,za as u}from"./chunk-BOJJVPWL.js";import{a as F,b as M}from"./chunk-RLASGPT3.js";var X=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xE1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xE9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xE1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xE1sp\xE1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xE9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011Bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}],x=X;var $=()=>({hover:!0,responsive:!0}),Y=(()=>{let t=class t{get currentItems(){return this._currentItems}set currentItems(n){this._currentItems=n}get csvContent(){return this.currentItems.map(n=>Object.values(n).join(",")).join(`
`)}get csvCode(){let n="data:text/csv;charset=utf-8,SEP=,%0A"+encodeURIComponent(this.csvContent);return this.sanitizer.bypassSecurityTrustResourceUrl(n)}constructor(n){this.sanitizer=n,this.usersData=x,this._currentItems=[...this.usersData],this.columns=["name","registered","role","status"]}ngOnInit(){}handleFilteredItems(n){this.currentItems=[...n]}};t.\u0275fac=function(s){return new(s||t)(z(V))},t.\u0275cmp=b({type:t,selectors:[["app-smart-tables-downloadable-example"]],standalone:!0,features:[S],decls:3,vars:9,consts:[["cButton","","color","primary","download","coreui-table-data.csv","target","_blank",1,"mb-2",3,"disabled","href"],["cleaner","","header","","pagination","",3,"columnFilter","columnSorter","itemsPerPage","items","tableFilter","tableProps","filteredItemsChange"]],template:function(s,l){s&1&&(a(0,"a",0),r(1,` Download current items (.csv)
`),i(),a(2,"c-smart-table",1),_("filteredItemsChange",function(B){return l.handleFilteredItems(B)}),i()),s&2&&(c("disabled",!l.currentItems.length)("href",l.csvCode,U),m(2),c("columnFilter",!0)("columnSorter",!1)("itemsPerPage",5)("items",l.usersData)("tableFilter",!0)("tableProps",g(8,$)))},dependencies:[I,h]});let e=t;return e})();function ee(e,t){if(e&1&&(p(0),a(1,"c-badge",6),r(2),i(),u()),e&2){let o=d(),n=o.tdContent,s=o.item,l=o.columnName,v=d();m(),c("color",v.getBadge(n)),m(),f(" ",s[l]," ")}}function te(e,t){if(e&1&&(p(0),r(1),u()),e&2){let o=d().tdContent;m(),f(" ",o," ")}}function ne(e,t){if(e&1&&(a(0,"td"),p(1,3),C(2,ee,3,2,"ng-container",4)(3,te,2,1,"ng-container",5),u(),i()),e&2){let o=t.columnName;m(),c("ngSwitch",o),m(),c("ngSwitchCase","status")}}var ae=()=>({align:"middle"}),ie=()=>({hover:!0,striped:!0,responsive:!0}),Z=(()=>{let t=class t{constructor(){this.usersData=x,this.selectedItems=[2,3],this.columns=[{key:"name",_style:{width:"10vw",minWidth:"10vw",maxWidth:"10vw"}},"registered","role","status"],this.checkSelected=n=>{this.selectedItems=n.map(s=>s.id)}}ngOnInit(){this.usersData=this.usersData.map((n,s)=>{let l=this.selectedItems.includes(s);return M(F({},n),{_selected:l})})}getBadge(n){switch(n){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=b({type:t,selectors:[["app-smart-tables-selectable-example"]],standalone:!0,features:[S],decls:4,vars:10,consts:[["color","secondary"],["clickableRows","","header","","pagination","","selectable","",3,"columnSorter","columns","itemsPerPageSelect","itemsPerPage","items","tableBodyProps","tableProps","selectedItemsChange"],["cTemplateId","tableData"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"color"]],template:function(s,l){s&1&&(a(0,"c-alert",0),r(1),i(),a(2,"c-smart-table",1),_("selectedItemsChange",function(B){return l.checkSelected(B)}),C(3,ne,4,2,"ng-template",2),i()),s&2&&(m(),f("Selected: ",l.selectedItems,""),m(),c("columnSorter",!0)("columns",l.columns)("itemsPerPageSelect",!0)("itemsPerPage",5)("items",l.usersData)("tableBodyProps",g(8,ae))("tableProps",g(9,ie)))},dependencies:[O,h,T,w,E,P,D]});let e=t;return e})();function re(e,t){if(e&1&&(a(0,"div")(1,"div",3)(2,"div",4)(3,"h5"),r(4),i(),a(5,"p",5),r(6),i(),a(7,"button",6),r(8," User Settings "),i(),a(9,"button",7),r(10," Delete "),i()()()()),e&2){let o=t.item,n=d();m(),c("visible",n.details_visible[o.id]===!0),m(3),j(o.name),m(2),f("User since: ",o.registered,"")}}function se(e,t){if(e&1&&(p(0),a(1,"c-badge",12),r(2),i(),u()),e&2){let o=d(),n=o.tdContent,s=o.item,l=o.columnName,v=d();m(),c("color",v.getBadge(n)),m(),f(" ",s[l]," ")}}function oe(e,t){if(e&1){let o=R();p(0,13),a(1,"button",14),_("click",function(){k(o);let s=d().item,l=d();return N(l.toggleDetails(s.id))}),r(2," Show "),i(),u()}}function le(e,t){if(e&1&&(p(0),r(1),u()),e&2){let o=d().tdContent;m(),f(" ",o," ")}}function me(e,t){if(e&1&&(a(0,"td"),p(1,8),C(2,se,3,2,"ng-container",9)(3,oe,3,0,"ng-container",10)(4,le,2,1,"ng-container",11),u(),i()),e&2){let o=t.columnName;m(),c("ngSwitch",o),m(),c("ngSwitchCase","status"),m(),c("ngSwitchCase","show")}}var ce=()=>({column:"name",state:"asc"}),de=()=>({hover:!0,striped:!0,responsive:!0}),pe=()=>({align:"middle"}),q=(()=>{let t=class t{constructor(){this.usersData=x,this.columns=[{key:"name"},{key:"registered",label:"Date Registered",_props:{class:"text-truncate"}},{key:"role",_style:{width:"20%"}},{key:"status",_style:{width:"15%"}},{key:"show",label:"",_style:{width:"5%"},filter:!1,sorter:!1}],this.details_visible=Object.create({})}getBadge(n){switch(n){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}}toggleDetails(n){this.details_visible[n]=!this.details_visible[n]}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=b({type:t,selectors:[["app-smart-tables-basic-example"]],standalone:!0,features:[S],decls:3,vars:14,consts:[["cleaner","","clickableRows","","footer","","header","","pagination","",3,"activePage","columnSorter","columns","columnFilter","itemsPerPageSelect","itemsPerPage","items","sorterValue","tableFilter","tableProps","tableBodyProps"],["cTemplateId","tableDetails"],["cTemplateId","tableData"],["cCollapse","",3,"visible"],[1,"card-body"],[1,"text-muted"],["cButton","","color","info","size","sm"],["cButton","","color","danger","size","sm",1,"ms-1"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","py-2",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"color"],[1,"py-2"],["cButton","","color","primary","size","sm","variant","outline",3,"click"]],template:function(s,l){s&1&&(a(0,"c-smart-table",0),C(1,re,11,3,"ng-template",1)(2,me,5,3,"ng-template",2),i()),s&2&&c("activePage",3)("columnSorter",!0)("columns",l.columns)("columnFilter",!0)("itemsPerPageSelect",!0)("itemsPerPage",5)("items",l.usersData)("sorterValue",g(11,ce))("tableFilter",!0)("tableProps",g(12,de))("tableBodyProps",g(13,pe))},dependencies:[h,T,G,I,w,E,P,D]});let e=t;return e})();var Ne=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=b({type:t,selectors:[["app-smart-tables"]],standalone:!0,features:[S],decls:40,vars:0,consts:[["xs","12"],[1,"mb-4"],["href","components/smart-table"]],template:function(s,l){s&1&&(a(0,"c-row")(1,"c-col",0)(2,"c-card",1)(3,"c-card-header"),r(4,`
        `),a(5,"strong"),r(6,"CoreUI Smart Table"),i(),r(7," "),a(8,"small"),r(9,"Angular Table Component"),i(),r(10,`
      `),i(),a(11,"c-card-body")(12,"app-docs-example",2),y(13,"app-smart-tables-basic-example"),i()()()(),a(14,"c-col",0)(15,"c-card",1)(16,"c-card-header"),r(17,`
        `),a(18,"strong"),r(19,"CoreUI Smart Table"),i(),r(20," "),a(21,"small"),r(22,"Angular Table with selectable rows"),i(),r(23,`
      `),i(),a(24,"c-card-body")(25,"app-docs-example",2),y(26,"app-smart-tables-selectable-example"),i()()()(),a(27,"c-col",0)(28,"c-card",1)(29,"c-card-header"),r(30,`
        `),a(31,"strong"),r(32,"CoreUI Smart Table"),i(),r(33," "),a(34,"small"),r(35,"Angular Table Component"),i(),r(36,`
      `),i(),a(37,"c-card-body")(38,"app-docs-example",2),y(39,"app-smart-tables-downloadable-example"),i()()()()())},dependencies:[K,W,H,L,J,Q,q,Z,Y]});let e=t;return e})();export{Ne as SmartTablesComponent};
