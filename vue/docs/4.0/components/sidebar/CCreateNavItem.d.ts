declare const CCreateNavItem: import("vue").DefineComponent<{
    /**
     * A string of all className you want applied to the base component.
     */
    className: {
        type: StringConstructor;
        required: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    className?: unknown;
} & {} & {
    className?: string | undefined;
}>, {}>;
export { CCreateNavItem };
