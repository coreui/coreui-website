declare const CSpinner: import("vue").DefineComponent<{
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'div'
     */
    component: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    /**
     * Size the component small.
     *
     * @values 'sm'
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Set the button variant to an outlined button or a ghost button.
     *
     * @default 'border'
     * @values 'border', 'grow'
     */
    variant: {
        type: StringConstructor;
        default: string;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Set visually hidden label for accessibility purposes.
     *
     * @default 'Loading...'
     */
    visuallyHiddenLabel: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
    component?: unknown;
    size?: unknown;
    variant?: unknown;
    visuallyHiddenLabel?: unknown;
} & {
    variant: string;
    component: string;
    visuallyHiddenLabel: string;
} & {
    color?: string | undefined;
    size?: string | undefined;
}> & {}, {
    color: string;
    variant: string;
    component: string;
    size: string;
    visuallyHiddenLabel: string;
}>;
export { CSpinner };
