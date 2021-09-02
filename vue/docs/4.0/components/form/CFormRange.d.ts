declare const CFormRange: import("vue").DefineComponent<{
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Specifies the maximum value for the component.
     */
    max: {
        type: NumberConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Specifies the minimum value for the component.
     */
    min: {
        type: NumberConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Toggle the readonly state for the component.
     */
    readonly: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Specifies the interval between legal numbers in the component.
     */
    steps: {
        type: NumberConstructor;
        default: undefined;
        required: false;
    };
    /**
     * The `value` attribute of component.
     *
     * @controllable onChange
     * */
    value: {
        type: NumberConstructor;
        default: undefined;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    max?: unknown;
    min?: unknown;
    readonly?: unknown;
    steps?: unknown;
    value?: unknown;
} & {
    readonly: boolean;
} & {
    value?: number | undefined;
    disabled?: boolean | undefined;
    max?: number | undefined;
    min?: number | undefined;
    steps?: number | undefined;
}> & {}, {
    value: number;
    disabled: boolean;
    readonly: boolean;
    max: number;
    min: number;
    steps: number;
}>;
export { CFormRange };
