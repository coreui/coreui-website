declare const CCardImage: import("vue").DefineComponent<{
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'img'
     */
    component: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Optionally orientate the image to the top, bottom, or make it overlaid across the card.
     */
    orientation: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    component?: unknown;
    orientation?: unknown;
} & {
    component: string;
} & {
    orientation?: string | undefined;
}> & {}, {
    component: string;
    orientation: string;
}>;
export { CCardImage };
