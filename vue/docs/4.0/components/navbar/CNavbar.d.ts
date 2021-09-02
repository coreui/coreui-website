declare const CNavbar: import("vue").DefineComponent<{
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Sets if the color of text should be colored for a light or dark dark background.
     *
     * @values 'dark', 'light'
     */
    colorScheme: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'nav'
     */
    component: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    /**
     * Defines optional container wrapping children elements.
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'
     */
    container: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
        required: false;
        validator: (value: boolean | string) => boolean;
    };
    /**
     * Defines the responsive breakpoint to determine when content collapses.
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    expand: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
        required: false;
        validator: (value: boolean | string) => boolean;
    };
    /**
     * Place component in non-static positions.
     *
     * @values 'fixed-top', 'fixed-bottom', 'sticky-top'
     */
    placement: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
    colorScheme?: unknown;
    component?: unknown;
    container?: unknown;
    expand?: unknown;
    placement?: unknown;
} & {
    component: string;
} & {
    color?: string | undefined;
    placement?: string | undefined;
    container?: string | boolean | undefined;
    colorScheme?: string | undefined;
    expand?: string | boolean | undefined;
}> & {}, {
    component: string;
    placement: string;
    container: string | boolean;
    colorScheme: string;
    expand: string | boolean;
}>;
export { CNavbar };
