declare const CListGroup: import("vue").DefineComponent<{
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
     * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`)
     */
    flush: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Specify a layout type.
     *
     * @value 'horizontal', 'horizontal-sm', 'horizontal-md', 'horizontal-lg', 'horizontal-xl', 'horizontal-xxl',
     */
    layout: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    component?: unknown;
    flush?: unknown;
    layout?: unknown;
} & {
    flush: boolean;
    component: string;
} & {
    layout?: string | undefined;
}> & {}, {
    flush: boolean;
    component: string;
    layout: string;
}>;
export { CListGroup };
