export declare const CCloseButton: import("vue").DefineComponent<{
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Change the default color to white.
     */
    white: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    white?: unknown;
} & {
    white: boolean;
    disabled: boolean;
} & {}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    white: boolean;
    disabled: boolean;
}>;
