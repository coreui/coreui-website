declare const CContainer: import("vue").DefineComponent<{
    /**
     * Set container 100% wide until small breakpoint.
     */
    sm: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set container 100% wide until medium breakpoint.
     */
    md: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set container 100% wide until large breakpoint.
     */
    lg: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set container 100% wide until X-large breakpoint.
     */
    xl: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set container 100% wide until XX-large breakpoint.
     */
    xxl: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set container 100% wide, spanning the entire width of the viewport.
     */
    fluid: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    sm?: unknown;
    md?: unknown;
    lg?: unknown;
    xl?: unknown;
    xxl?: unknown;
    fluid?: unknown;
} & {
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    xxl: boolean;
    fluid: boolean;
} & {}> & {}, {
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    xxl: boolean;
    fluid: boolean;
}>;
export { CContainer };
