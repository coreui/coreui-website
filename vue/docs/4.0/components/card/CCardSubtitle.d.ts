declare const CCardSubtitle: import("vue").DefineComponent<{
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'h6'
     */
    component: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    component?: unknown;
} & {
    component: string;
} & {}> & {}, {
    component: string;
}>;
export { CCardSubtitle };
