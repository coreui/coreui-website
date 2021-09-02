declare const CPaginationItem: import("vue").DefineComponent<{
    /**
     * Toggle the active state for the component.
     */
    active: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
        type: StringConstructor;
        default: undefined;
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
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active?: unknown;
    component?: unknown;
    disabled?: unknown;
    href?: unknown;
} & {
    disabled: boolean;
    active: boolean;
} & {
    component?: string | undefined;
    href?: string | undefined;
}> & {}, {
    disabled: boolean;
    component: string;
    active: boolean;
    href: string;
}>;
export { CPaginationItem };
