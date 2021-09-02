declare const CCardLink: import("vue").DefineComponent<{
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    href?: unknown;
} & {
    href: string;
} & {}> & {}, {
    href: string;
}>;
export { CCardLink };
