declare const CAccordionButton: import("vue").DefineComponent<{
    /**
     * Set button state to collapsed.
     */
    collapsed: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    collapsed?: unknown;
} & {
    collapsed: boolean;
} & {}> & {}, {
    collapsed: boolean;
}>;
export { CAccordionButton };
