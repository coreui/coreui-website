declare const CTabPane: import("vue").DefineComponent<{
    /**
     * Toggle the visibility of component.
     */
    visible: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible?: unknown;
} & {
    visible: boolean;
} & {}> & {}, {
    visible: boolean;
}>;
export { CTabPane };
