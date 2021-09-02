export declare const CButton: import("vue").DefineComponent<{
    /**
     * Toggle the active state for the component.
     */
    active: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Select the shape of the component.
     */
    shape: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Size the component small or large.
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Set the button variant to an outlined button or a ghost button.
     */
    variant: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active?: unknown;
    color?: unknown;
    component?: unknown;
    disabled?: unknown;
    href?: unknown;
    shape?: unknown;
    size?: unknown;
    variant?: unknown;
} & {
    disabled: boolean;
    component: string;
    active: boolean;
} & {
    color?: string | undefined;
    variant?: string | undefined;
    shape?: string | undefined;
    size?: string | undefined;
    href?: string | undefined;
}> & {}, {
    disabled: boolean;
    variant: string;
    component: string;
    size: string;
    active: boolean;
    href: string;
}>;
