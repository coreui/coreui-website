declare const CFormInput: import("vue").DefineComponent<{
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
     * Size the component small or large.
     *
     * @values 'sm' | 'lg'
     */
    size: {
        type: StringConstructor;
        default: undefined;
        require: boolean;
        validator: (value: string) => boolean;
    };
    /**
     * Specifies the type of component.
     *
     * @values 'color' | 'file' | 'text' | string
     * @default 'text'
     */
    type: {
        type: StringConstructor;
        default: string;
        require: boolean;
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
    size?: unknown;
    type?: unknown;
    valid?: unknown;
} & {
    disabled: boolean;
    invalid: boolean;
    type: string;
    valid: boolean;
    plainText: boolean;
    readonly: boolean;
} & {
    size?: string | undefined;
}> & {}, {
    disabled: boolean;
    size: string;
    invalid: boolean;
    type: string;
    valid: boolean;
    plainText: boolean;
    readonly: boolean;
}>;
export { CFormInput };
