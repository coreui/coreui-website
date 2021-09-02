declare const CButtonGroup: import("vue").DefineComponent<{
    /**
     * Size the component small or large.
     *
     * @type {'sm' | 'lg'}
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
     */
    vertical: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    vertical?: unknown;
} & {
    vertical: boolean;
} & {
    size?: string | undefined;
}> & {}, {
    size: string;
    vertical: boolean;
}>;
export { CButtonGroup };
