declare const CNavbarBrand: import("vue").DefineComponent<{
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     */
    component: {
        type: StringConstructor;
        default: string;
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
    component?: unknown;
    href?: unknown;
} & {
    component: string;
} & {
    href?: string | undefined;
}> & {}, {
    component: string;
    href: string;
}>;
export { CNavbarBrand };
