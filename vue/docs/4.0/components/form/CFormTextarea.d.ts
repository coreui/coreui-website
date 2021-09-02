declare const CFormTextarea: import("vue").DefineComponent<{
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set component validation state to invalid.
     */
    invalid: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`.
     */
    plainText: {
        type: BooleanConstructor;
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
     * Set component validation state to valid.
     */
    valid: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    invalid?: unknown;
    plainText?: unknown;
    readonly?: unknown;
    valid?: unknown;
} & {
    disabled: boolean;
    invalid: boolean;
    valid: boolean;
    plainText: boolean;
    readonly: boolean;
} & {}> & {}, {
    disabled: boolean;
    invalid: boolean;
    valid: boolean;
    plainText: boolean;
    readonly: boolean;
}>;
export { CFormTextarea };
