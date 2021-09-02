declare const CBreadcrumbItem: import("vue").DefineComponent<{
    /**
     * Toggle the active state for the component.
     */
    active: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * The `href` attribute for the inner link component.
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
    href?: unknown;
} & {
    active: boolean;
} & {
    href?: string | undefined;
}> & {}, {
    active: boolean;
    href: string;
}>;
export { CBreadcrumbItem };
