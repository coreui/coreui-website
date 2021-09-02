declare const CBadge: import("vue").DefineComponent<{
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'span'
     */
    component: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Select the shape of the component.
     *
     * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
     */
    shape: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Size the component small.
     *
     * @type 'sm'
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Sets the text color of the component to one of CoreUI’s themed colors.
     *
     * @value 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
     */
    textColor: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
    component?: unknown;
    shape?: unknown;
    size?: unknown;
    textColor?: unknown;
} & {
    component: string;
} & {
    color?: string | undefined;
    shape?: string | undefined;
    size?: string | undefined;
    textColor?: string | undefined;
}> & {}, {
    component: string;
    size: string;
}>;
export { CBadge };
