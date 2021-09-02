declare const CModalHeader: import("vue").DefineComponent<{
    /**
     * Add a close button component to the header which will call the provided handler when clicked.
     */
    dismiss: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "dismiss"[], "dismiss", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    dismiss?: unknown;
} & {
    dismiss: boolean;
} & {}> & {
    onDismiss?: ((...args: any[]) => any) | undefined;
}, {
    dismiss: boolean;
}>;
export { CModalHeader };
