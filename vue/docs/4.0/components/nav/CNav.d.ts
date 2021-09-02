declare const CNav: import("vue").DefineComponent<{
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'ul'
     */
    component: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Specify a layout type for component.
     *
     * @values 'fill', 'justified'
     */
    layout: {
        type: StringConstructor;
        required: false;
        default: undefined;
        validator: (value: string) => boolean;
    };
    /**
     * Set the nav variant to tabs or pills.
     *
     * @values 'tabs', 'pills', 'underline'
     */
    variant: {
        type: StringConstructor;
        required: false;
        default: undefined;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    component?: unknown;
    layout?: unknown;
    variant?: unknown;
} & {
    component: string;
} & {
    variant?: string | undefined;
    layout?: string | undefined;
}> & {}, {
    variant: string;
    component: string;
    layout: string;
}>;
export { CNav };
