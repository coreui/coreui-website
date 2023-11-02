"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[7683],{62174:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(45392),r=l(2784);function c(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CPopover } from '@coreui/react'\n// or\nimport CPopover from '@coreui/react/src/components/popover/CPopover'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"animation")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.9.0+"))),r.createElement(t.td,null,"Apply a CSS fade transition to the popover."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"container")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"v4.11.0+"))),r.createElement(t.td,null,"Appends the react popover to a specific element. You can pass an HTML element or function that returns a single element. By default ",r.createElement(t.code,null,"document.body"),"."),r.createElement(t.td,null,r.createElement(t.code,null,"Element")," | ",r.createElement(t.code,null,"(() => Element)")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"content")),r.createElement(t.td,null,"Content node for your component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"delay")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.9.0+"))),r.createElement(t.td,null,"The delay for displaying and hiding the popover (in milliseconds). When a numerical value is provided, the delay applies to both the hide and show actions. The object structure for specifying the delay is as follows: delay: ",r.createElement(t.code,null,"{ 'show': 500, 'hide': 100 }"),"."),r.createElement(t.td,null,r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"{ show: number; hide: number; }")),r.createElement(t.td,null,"0")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"fallbackPlacements")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.9.0+"))),r.createElement(t.td,null,"Specify the desired order of fallback placements by providing a list of placements as an array. The placements should be prioritized based on preference."),r.createElement(t.td,null,r.createElement(t.code,null,"Placements")," | ",r.createElement(t.code,null,"Placements[]")),r.createElement(t.td,null,"['top', 'right', 'bottom', 'left']")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"offset")),r.createElement(t.td,null,"Offset of the popover relative to its target."),r.createElement(t.td,null,r.createElement(t.code,null,"[number, number]")),r.createElement(t.td,null,"[0, 8]")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onHide")),r.createElement(t.td,null,"Callback fired when the component requests to be hidden."),r.createElement(t.td,null,r.createElement(t.code,null,"() => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onShow")),r.createElement(t.td,null,"Callback fired when the component requests to be shown."),r.createElement(t.td,null,r.createElement(t.code,null,"() => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"placement")),r.createElement(t.td,null,"Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property."),r.createElement(t.td,null,r.createElement(t.code,null,"'auto'")," | ",r.createElement(t.code,null,"'top'")," | ",r.createElement(t.code,null,"'bottom'")," | ",r.createElement(t.code,null,"'right'")," | ",r.createElement(t.code,null,"'left'")),r.createElement(t.td,null,"top")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"title")),r.createElement(t.td,null,"Title node for your component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"trigger")),r.createElement(t.td,null,"Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them."),r.createElement(t.td,null,r.createElement(t.code,null,"'hover'")," | ",r.createElement(t.code,null,"'focus'")," | ",r.createElement(t.code,null,"'click'")),r.createElement(t.td,null,"click")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"visible")),r.createElement(t.td,null,"Toggle the visibility of popover component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")))))}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)},o=l(70033),m=l(18722);const u=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{ScssDocs:e=>r.createElement(m.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(o.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(m.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(o.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(m.UW,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(m.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(u,e,r.createElement(a,e))}u.displayName="MdxLayout"},45392:function(e,t,l){l.d(t,{Zo:function(){return o},ah:function(){return c}});var n=l(2784);const r=n.createContext({});function c(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:l}){let o;return o=l?"function"==typeof e?e({}):e||a:c(e),n.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-popover-api-mdx-cf667f9a1d36492edd4f.js.map