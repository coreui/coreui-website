declare const CPagination: import("vue").DefineComponent<{
    /**
     * Size the component small or large.
     *
     * @values 'sm', 'lg'
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
} & {} & {
    size?: string | undefined;
}> & {}, {
    size: string;
}>;
export { CPagination };
