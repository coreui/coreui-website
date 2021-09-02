declare const CToastHeader: import("vue").DefineComponent<{
    /**
     * Automatically add a close button to the header.
     */
    close: {
        type: BooleanConstructor;
        require: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    close?: unknown;
} & {
    close: boolean;
} & {}> & {}, {
    close: boolean;
}>;
export { CToastHeader };
