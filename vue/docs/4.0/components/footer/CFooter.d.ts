declare const CFooter: import("vue").DefineComponent<{
    /**
     * Place footer in non-static positions.
     */
    position: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    position?: unknown;
} & {} & {
    position?: string | undefined;
}> & {}, {
    position: string;
}>;
export { CFooter };
