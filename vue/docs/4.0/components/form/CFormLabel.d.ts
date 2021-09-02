declare const CFormLabel: import("vue").DefineComponent<{
    /**
     * A string of all className you want to be applied to the component, and override standard className value.
     */
    customClassName: {
        type: (StringConstructor | ArrayConstructor)[];
        default: undefined;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    customClassName?: unknown;
} & {} & {
    customClassName?: string | unknown[] | undefined;
}> & {}, {
    customClassName: string | unknown[];
}>;
export { CFormLabel };
