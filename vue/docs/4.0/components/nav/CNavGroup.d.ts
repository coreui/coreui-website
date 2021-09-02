import { RendererElement } from 'vue';
declare const CNavGroup: import("vue").DefineComponent<{
    /**
     * Make nav group more compact by cutting all `padding` in half.
     */
    compact: BooleanConstructor;
    /**
     * Show nav group items.
     */
    visible: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "visible-change"[], "visible-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    compact?: unknown;
    visible?: unknown;
} & {
    visible: boolean;
    compact: boolean;
} & {}> & {
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    compact: boolean;
}>;
export { CNavGroup };
