"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[103],{6103:(v,m,a)=>{a.r(m),a.d(m,{SmartTableDocsModule:()=>K});var i=a(6895),u=a(5432),l=a(674),T=a(2349),p=a(1950),e=a(8256),b=a(1481),y=a(4217),S=a(6971);const g=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active",_props:{color:"success",align:"middle"}},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned",_cellProps:{name:{color:"info",active:!0}}},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive",_cellProps:{_all:{color:"danger"},role:{active:!0}}},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending",_selected:!0},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!",_cellProps:{role:{active:!0}}}];var f=a(8405),P=a(8243),C=a(3463),w=a(8049),A=a(1980),x=a(3907),D=a(6545),Z=a(8015);function F(t,o){if(1&t&&(e.TgZ(0,"div")(1,"div",4)(2,"h5"),e._uU(3),e.qZA(),e.TgZ(4,"p",5),e._uU(5),e.qZA(),e.TgZ(6,"button",6),e._uU(7," User Settings "),e.qZA(),e.TgZ(8,"button",7),e._uU(9," Delete "),e.qZA()()()),2&t){const n=o.item,s=e.oxw();e.xp6(1),e.Q6J("visible",!0===s.details_visible[n._id]),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.hij("User since: ",n.registered,"")}}function I(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"c-badge",13),e._uU(2),e.qZA(),e.BQk()),2&t){const n=e.oxw(),s=n.tdContent,r=n.item,c=n.columnName,d=e.oxw();e.xp6(1),e.Q6J("color",d.getBadge(s)),e.xp6(1),e.hij(" ",r[c]," ")}}function M(t,o){if(1&t){const n=e.EpF();e.ynx(0,14),e.TgZ(1,"button",15),e.NdJ("click",function(){e.CHM(n);const r=e.oxw().item,c=e.oxw();return e.KtG(c.toggleDetails(r._id))}),e._uU(2," Show "),e.qZA(),e.BQk()}}function B(t,o){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const n=e.oxw().tdContent;e.xp6(1),e.hij(" ",n," ")}}function k(t,o){if(1&t&&(e.TgZ(0,"td",8),e.ynx(1,9),e.YNc(2,I,3,2,"ng-container",10),e.YNc(3,M,3,0,"ng-container",11),e.YNc(4,B,2,1,"ng-container",12),e.BQk(),e.qZA()),2&t){const n=o.columnName,s=o.item;e.oxw();const r=e.MAs(1);let c,d,_;e.Q6J("cTableActive",null==(c=r.tableDataCellProps(s,n))?null:c.active)("cTableColor",null==(d=r.tableDataCellProps(s,n))?null:d.color)("cAlign",null==(_=r.tableDataCellProps(s,n))?null:_.align)("ngClass",r.tableDataCellClasses(s,n)),e.xp6(1),e.Q6J("ngSwitch",n),e.xp6(1),e.Q6J("ngSwitchCase","status"),e.xp6(1),e.Q6J("ngSwitchCase","show")}}const U=function(){return{column:"name",state:"asc"}},E=function(){return{align:"middle"}},h=function(){return{color:"warning"}},J=function(){return{hover:!0,striped:!0,responsive:!0}};let j=(()=>{class t{constructor(){this.usersData=g,this.columns=[{key:"name",_style:{width:"40%"},_props:{color:"danger",class:"fw-bold"}},"registered",{key:"role",filter:!1,sorter:!1,_style:{width:"15%"},_classes:"text-muted small"},{key:"status",_style:{width:"15%"}},{key:"show",label:"",_style:{width:"5%"},filter:!1,sorter:!1}],this.details_visible=Object.create({})}getBadge(n){switch(n){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}}getItem(n){return Object.keys(n)}toggleDetails(n){this.details_visible[n]=!this.details_visible[n]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-smart-table01"]],decls:4,vars:17,consts:[["activePage","2","cleaner","","clickableRows","","footer","","header","","pagination","","selectable","",3,"columnFilter","columnSorter","columns","itemsPerPageSelect","itemsPerPage","items","sorterValue","tableBodyProps","tableFilter","tableFootProps","tableHeadProps","tableProps"],["smartTable","cSmartTable"],["cTemplateId","tableDetails"],["cTemplateId","tableData"],["cCollapse","",1,"card-body",3,"visible"],[1,"text-muted"],["cButton","","color","info","size","sm"],["cButton","","color","danger","size","sm",1,"ms-1"],[3,"cTableActive","cTableColor","cAlign","ngClass"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","py-2",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"color"],[1,"py-2"],["cButton","","color","primary","size","sm","variant","outline",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"c-smart-table",0,1),e.YNc(2,F,10,3,"ng-template",2),e.YNc(3,k,5,7,"ng-template",3),e.qZA()),2&n&&e.Q6J("columnFilter",!0)("columnSorter",!0)("columns",s.columns)("itemsPerPageSelect",!0)("itemsPerPage",5)("items",s.usersData)("sorterValue",e.DdM(12,U))("tableBodyProps",e.DdM(13,E))("tableFilter",!0)("tableFootProps",e.DdM(14,h))("tableHeadProps",e.DdM(15,h))("tableProps",e.DdM(16,J))},dependencies:[i.mk,i.RF,i.n9,i.ED,f.L,P.F,C.H,w.Y,A.i,x.Z,D.i,Z.y]}),t})();const N=function(){return{hover:!0,striped:!0,responsive:!0}};let V=(()=>{class t{constructor(){this.usersData=g}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-smart-table02"]],decls:1,vars:6,consts:[["activePage","2","header","","pagination","",3,"columnFilter","columnSorter","itemsPerPage","items","tableProps"]],template:function(n,s){1&n&&e._UZ(0,"c-smart-table",0),2&n&&e.Q6J("columnFilter",!0)("columnSorter",!0)("itemsPerPage",10)("items",s.usersData)("tableProps",e.DdM(5,N))},dependencies:[f.L]}),t})();function Q(t,o){1&t&&(e.TgZ(0,"div",5),e._UZ(1,"docs-smart-table01"),e.qZA())}function z(t,o){1&t&&(e.TgZ(0,"div",5),e._UZ(1,"docs-smart-table02"),e.qZA())}const Y=function(){return["components/smart-table/examples/smart-table01.component.html","components/smart-table/examples/smart-table01.component.ts","components/smart-table/examples/_data.ts"]},R=function(){return["components/smart-table/examples/smart-table02.component.html","components/smart-table/examples/smart-table02.component.ts"]},W=[{path:"",component:(()=>{class t{constructor(n,s){this.metaService=n,this.titleService=s,this.usage=a(1287).Z,this.title="Angular Smart Table Component",this.description="Dynamic Angular table component."}ngOnInit(){this.titleService.setTitle(this.title),this.metaService.updateTag({name:"description",content:this.description})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(b.h_),e.Y36(b.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["docs-smart-table"]],decls:23,vars:17,consts:[["id","getting-started"],["markdown","",1,"docs-lead","fs-4","fw-light"],[3,"files"],["docsExample",""],[1,"api-table"],[1,"docs-example","p-3"]],template:function(n,s){1&n&&(e.TgZ(0,"h1",0),e._uU(1,"Angular Smart Table Component"),e.qZA(),e.TgZ(2,"p",1),e._uU(3),e.qZA(),e._UZ(4,"docs-ads-carbon"),e.TgZ(5,"markdown"),e._uU(6,"\n    ## Features\n\n    - Filter items by one or all columns\n    - Sort items by column\n    - Integrated with CPagination component by default\n    - Customize style of specific rows, columns and cells\n    - Customize display of columns\n    - Load with initial filters and sorter state\n    - Loading state visualization\n    - Default header labels generation based on column names\n\n    ## Examples\n\n    ### Basic usage\n\n"),e.qZA(),e.TgZ(7,"docs-example",2),e.YNc(8,Q,2,0,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(10,"markdown"),e._uU(11,"\n    ### Default header\n    - labels generation based on column names\n\n"),e.qZA(),e.TgZ(12,"docs-example",2),e.YNc(13,z,2,0,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(15,"markdown"),e._uU(16),e.TgZ(17,"div",4),e._uU(18),e.qZA(),e._uU(19),e.TgZ(20,"div",4),e._uU(21,"\n\n      | name | description | type |\n      | ---- | ----------- | ---- |\n      | `activePageChange` | Event emitted on `activePage` change | `number` |\n      | `columnFilterValueChange` | Event emitted on `columnFilterValue` change |  |\n      | `filteredItemsChange` | Event emitted on `filteredItems` change |  |\n      | `itemsPerPageChange` | Event emitted on `itemsPerPage` change |  |\n      | `rowClick` | Event emitted on row click |  |\n      | `selectedItemsChange` | Event emitted on `selectedItems` change |  |\n      | `sorterValueChange` | Event emitted on `sorterValue` change |  |\n      | `tableFilterValueChange` | Event emitted on `tableFilterValue` change | |\n\n    "),e.qZA(),e._uU(22,"\n\n\n"),e.qZA()),2&n&&(e.xp6(3),e.Oqu(s.description),e.xp6(4),e.Q6J("files",e.DdM(15,Y)),e.xp6(5),e.Q6J("files",e.DdM(16,R)),e.xp6(4),e.hij("\n\n    ---\n\n    ## API\n\n    ### SmartTable Module\n\n    ",s.usage,"\n\n    ---\n\n    ### c-smart-table\n    _component_\n\n    #### Inputs\n\n    "),e.xp6(2),e.Q0o("\n\n      | name | description | type | default |\n      | ---- | ----------- | ---- | ------- |\n      | `activePage` | Current page number | `number` | _1_ |\n      | `cleaner` | Displays table cleaner above table. Cleaner resets `tableFilterValue`, `columnFilterValue`, `sorterValue`. If clean is possible it is clickable, otherwise it is not clickable and transparent. Cleaner can be customized through the cleaner slot. | `boolean` | _false_ |\n      | `clickableRows` | Style table items as clickable. | `boolean` | _false_ |\n      | `columnFilter` | Displays additional filter row between table header and items, allowing filtering by specific column. | `boolean \\| IColumnFilter`  | _undefined_ |\n      | `columnFilterValue` | Value of table filter. To set pass object where keys are column names and values are filter strings e.g.: `","{"," user: 'John', age: 12 }`. | `IColumnFilterValue`  | _","{"," }_ |\n      | `columns` |  (1) Table columns configuration. If not defined, table displays columns based on the first item keys, omitting keys that begins with underscore (e.g. '_classes')  | `(string \\| IColumn)[]`  | _undefined_ |\n      | `columnSorter` |  (2) Enables table sorting by column value. Sorting will be performed corectly only if values in column are of one type: `string` (case insensitive) or `number`.  | `boolean \\| ISorter`  | _undefined_ |\n      | `footer` | Displays table footer, which mirrors table header. (without column filter). | `boolean` | _false_ |\n      | `header` | Displays table header. | `boolean` | _false_ |\n      | `items` | (3) Array of objects, where each object represents one item - row in table. | `IItem[]` | _[]_ |\n      | `itemsPerPage` | Number of items per site, when pagination is enabled. | `number` | _10_ |\n      | `itemsPerPageLabel` | Label for items per page selector. | `string` | _Items per page:_ |\n      | `itemsPerPageOptions` | Items per page selector options. | `number[]` | _[5, 10, 20, 50]_ |\n      | `itemsPerPageSelect` | Adds select element over table, which is used for control items per page in pagination. | `boolean \\| ItemsPerPageSelect` | _undefined_ |\n      | `loading` | When set, table will have loading style: loading spinner and reduced opacity. When 'small' prop is enabled spinner will be also smaller. | `boolean` | _undefined_ |\n      | `noItemsLabel` | String for passing custom noItemsLabel text. | `string` | _No items found_ |\n      | `pagination` | Enables default pagination. Default pagination will always have the computed number of pages that cannot be changed. The number of pages is generated based on the number of passed items and 'itemsPerPage' prop. If this restriction is an obstacle, you can make external pagination instead. | `boolean` | _false_ |\n      | `selectable` | Add checkboxes to make table rows selectable. | `boolean` | _false_ |\n      | `sorterValue` | State of the sorter. Name key is column name, direction can be 'asc' or 'desc'. | `ISorterValue` | _","{"," }_ |\n      | `tableFilter` | (4) When set, displays table filter above table, allowing filtering by specific column. | `boolean \\| ITableFilter` | _undefined_ |\n      | `tableFilterLabel` | A label for a tableFilter input. | `string` | _Filter:_ |\n      | `tableFilterPlaceholder` | Specifies a short hint that is visible in the search input. | `string` | _Type string..._ |\n      | `tableFilterValue` | Value of table filter. | `string` | _''_ |\n      | `tableBodyProps` | Properties for tbody | `ITableGroupProps` | _","{"," }_ |\n      | `tableFootProps` | Properties for tfoot. | `ITableGroupProps` | _","{"," }_ |\n      | `tableHeadProps` | Properties for thead. | `ITableGroupProps` | _","{"," }_ |\n      | `tableProps` | Properties for cTable. | `ITable` | _","{"," }_ |\n\n    "),e.xp6(1),e.HOy("\n\n    ---\n\n\n   (1) In `columns` array each item represents one column. Item might be specified in two ways:\n    - String: each item define column name equal to item value.\n    - Object: item is object with following keys available as column configuration:\n      - `key` (required)(String) - define column name equal to item key.\n      - `label` (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word.\n      - `_classes` (String/Array/Object) - adds classes to all cells in a column\n      - `_style` (String/Array/Object) - adds styles to the column header (useful for defining widths)\n      - `_props` - (Object) - adds props for a column header\n      - `sorter` (Boolean) - disables sorting of the column when set to false\n      - `filter` (Boolean) - removes filter from column when set to false\n\n    (2) Sorter can be customized, by passing prop as object with additional options as keys. Available options:\n    - external (Boolean) - Disables automatic sorting inside component.\n    - resetable (Boolean) - If set to true clicking on sorter have three states: ascending, descending and null. That means that third click on sorter will reset sorting, and restore table to original order.\n\n    (3) Example item:\n    `","{"," name: 'John' , age: 12, _props: ","{"," color: 'success' }, _cellProps: ","{"," age: ","{"," active: true, align: 'middle'}}}`\n    For column generation description see columns prop.\n\n    (4) Column filter can be customized, by passing prop as object with additional options as keys. Available options:\n    - placeholder (String) - Sets custom table filter placeholder.\n    - label (String) - Sets custom table filter label.\n    - external (Boolean) - Disables automatic filtering inside component.\n    - lazy (Boolean) - Set to true to trigger filter updates only on change event.\n\n    ---\n\n    #### Outputs\n    "))},dependencies:[y.U,u.lF,S.E,j,V],encapsulation:2}),t})()}];let X=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(W),p.Bz]}),t})();var q=a(417);let K=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,T.B,X,u.JP.forChild(),l.s2N,l.TXv,l.hJ1,l.fwJ,l.U$I,l.gzQ,l.m81,l.HUy,q.K]}),t})()},1287:(v,m,a)=>{a.d(m,{Z:()=>i});const i="```typescript\nimport { SmartTableModule } from '@coreui/angular';\n\n@NgModule({\n        imports: [SmartTableModule,]\n})\nexport class AppModule() { }\n```\n"}}]);