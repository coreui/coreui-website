declare const CFormFeedback: import("vue").DefineComponent<{
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'div'
     */
    component: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Method called immediately after the `value` prop changes.
     */
    invalid: BooleanConstructor;
    /**
     * If your form layout allows it, you can display validation feedback in a styled tooltip.
     */
    tooltip: BooleanConstructor;
    /**
     * Set component validation state to valid.
     */
    valid: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    component?: unknown;
    invalid?: unknown;
    tooltip?: unknown;
    valid?: unknown;
} & {
    component: string;
    invalid: boolean;
    valid: boolean;
    tooltip: boolean;
} & {}> & {}, {
    component: string;
    invalid: boolean;
    valid: boolean;
    tooltip: boolean;
}>;
export { CFormFeedback };
