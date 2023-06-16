"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[837],{71385:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(45392),r=l(2784);function c(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CTable } from '@coreui/react'\n// or\nimport CTable from '@coreui/react/src/components/table/CTable'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"align")),r.createElement(t.td,null,"Set the vertical aligment."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"borderColor")),r.createElement(t.td,null,"Sets the border color of the component to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"bordered")),r.createElement(t.td,null,"Add borders on all sides of the table and cells."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"borderless")),r.createElement(t.td,null,"Remove borders on all sides of the table and cells."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"caption")),r.createElement(t.td,null,"Put the caption on the top if you set ",r.createElement(t.code,null,'caption="top"')," of the table or set the text of the table caption."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"captionTop")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Set the text of the table caption and the caption on the top of the table."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"color")),r.createElement(t.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"columns")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. '_props')",r.createElement("br"),r.createElement("br"),"In columns prop each array item represents one column. Item might be specified in two ways:",r.createElement("br"),"String: each item define column name equal to item value.",r.createElement("br"),"Object: item is object with following keys available as column configuration:",r.createElement("br"),"- key (required)(String) - define column name equal to item key.",r.createElement("br"),"- label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word.",r.createElement("br"),"- _props (Object) - adds classes to all cels in column, ex. ",r.createElement(t.code,null,"_props: { scope: 'col', className: 'custom-class' }"),",",r.createElement("br"),"- _style (Object) - adds styles to the column header (useful for defining widths)"),r.createElement(t.td,null,r.createElement(t.code,null,"(string")," | ",r.createElement(t.code,null,"Column)[]")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"footer")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Array of objects or strings, where each element represents one cell in the table footer.",r.createElement("br"),r.createElement("br"),"Example items:",r.createElement("br"),r.createElement(t.code,null,"['FooterCell', 'FooterCell', 'FooterCell']"),r.createElement("br"),"or",r.createElement("br"),r.createElement(t.code,null,"[{ label: 'FooterCell', _props: { color: 'success' }, ...]")),r.createElement(t.td,null,r.createElement(t.code,null,"(string")," | ",r.createElement(t.code,null,"FooterItem)[]")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"hover")),r.createElement(t.td,null,"Enable a hover state on table rows within a ",r.createElement(t.code,null,"<CTableBody>"),"."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"items")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_props' key and to single cell by '_cellProps'.",r.createElement("br"),r.createElement("br"),"Example item:",r.createElement("br"),r.createElement(t.code,null,"{ name: 'John' , age: 12, _props: { color: 'success' }, _cellProps: { age: { className: 'fw-bold'}}}")),r.createElement(t.td,null,r.createElement(t.code,null,"Item[]")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"responsive")),r.createElement(t.td,null,"Make any table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'md'")," | ",r.createElement(t.code,null,"'lg'")," | ",r.createElement(t.code,null,"'xl'")," | ",r.createElement(t.code,null,"'xxl'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"small")),r.createElement(t.td,null,"Make table more compact by cutting all cell ",r.createElement(t.code,null,"padding")," in half."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"striped")),r.createElement(t.td,null,"Add zebra-striping to any table row within the ",r.createElement(t.code,null,"<CTableBody>"),"."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"stripedColumns")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Add zebra-striping to any table column."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"tableFootProps")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Properties that will be passed to the table footer component."),r.createElement(t.td,null,r.createElement(t.code,null,"CTableFootProps")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"tableHeadProps")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.3.0+"))),r.createElement(t.td,null,"Properties that will be passed to the table head component."),r.createElement(t.td,null,r.createElement(t.code,null,"CTableHeadProps")),r.createElement(t.td,null,"-")))))}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)},o=l(18910),m=l(18722);const u=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{ScssDocs:e=>r.createElement(m.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(o.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(m.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(o.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(m.UW,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(m.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(u,e,r.createElement(a,e))}u.displayName="MdxLayout"},45392:function(e,t,l){l.d(t,{Zo:function(){return o},ah:function(){return c}});var n=l(2784);const r=n.createContext({});function c(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:l}){let o;return o=l?"function"==typeof e?e({}):e||a:c(e),n.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-table-api-mdx-56aaefde2b30048e5336.js.map