declare const CImage: import("vue").DefineComponent<{
    /**
     * Set the horizontal aligment.
     *
     * @values 'start', 'center', 'end'
     */
    align: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Make image responsive.
     */
    fluid: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Make image rounded.
     */
    rounded: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Give an image a rounded 1px border appearance.
     */
    thumbnail: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    align?: unknown;
    fluid?: unknown;
    rounded?: unknown;
    thumbnail?: unknown;
} & {
    rounded: boolean;
    fluid: boolean;
    thumbnail: boolean;
} & {
    align?: string | undefined;
}> & {}, {
    rounded: boolean;
    fluid: boolean;
    align: string;
    thumbnail: boolean;
}>;
export { CImage };
