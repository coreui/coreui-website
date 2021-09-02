declare const CLink: import("vue").DefineComponent<{
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
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    component: string;
    active: boolean;
    href: string;
}>;
export { CLink };
