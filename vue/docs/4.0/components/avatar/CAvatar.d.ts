declare const CAvatar: import("vue").DefineComponent<{
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Select the shape of the component.
     *
     * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
     */
    shape: {
        type: StringConstructor;
        validator: (value: string) => boolean; /**
         * Select the shape of the component.
         *
         * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
         */
    };
    /**
     * Size the component small, large, or extra large.
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * The src attribute for the img element.
     */
    src: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Sets the color context of the status indicator to one of CoreUI’s themed colors.
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    status: {
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
    shape?: unknown;
    size?: unknown;
    src?: unknown;
    status?: unknown;
    textColor?: unknown;
} & {} & {
    color?: string | undefined;
    shape?: string | undefined;
    size?: string | undefined;
    src?: string | undefined;
    status?: string | undefined;
    textColor?: string | undefined;
}> & {}, {
    size: string;
    src: string;
    status: string;
}>;
export { CAvatar };
