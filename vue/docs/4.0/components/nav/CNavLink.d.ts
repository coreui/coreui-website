declare const CNavLink: import("vue").DefineComponent<{
    /**
     * Toggle the active state for the component.
     */
    active: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'a'
     */
    component: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * @ignore
     */
    href: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active?: unknown;
    component?: unknown;
    disabled?: unknown;
    href?: unknown;
} & {
    disabled: boolean;
    component: string;
    active: boolean;
} & {
    href?: string | undefined;
}> & {}, {
    disabled: boolean;
    component: string;
    active: boolean;
    href: string;
}>;
export { CNavLink };
