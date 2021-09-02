declare const CHeader: import("vue").DefineComponent<{
    /**
     * Defines optional container wrapping children elements.
     *
     * @values boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'
     */
    container: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
        required: false;
        validator: (value: boolean | string) => boolean;
    };
    /**
     * Place header in non-static positions.
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
    container?: unknown;
    position?: unknown;
} & {} & {
    position?: string | undefined;
    container?: string | boolean | undefined;
}> & {}, {
    position: string;
    container: string | boolean;
}>;
export { CHeader };
