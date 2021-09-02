declare const CFormSwitch: import("vue").DefineComponent<{
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document
     */
    id: {
        type: StringConstructor;
        default: undefined;
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
     * The element represents a caption for a component.
     */
    label: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Size the component large or extra large. Works only with `switch`.
     *
     * @values 'lg' | 'xl'
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Specifies the type of component.
     *
     * @values 'checkbox', 'radio'
     * @default 'checkbox'
     */
    type: {
        type: StringConstructor;
        default: string;
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
    id?: unknown;
    invalid?: unknown;
    label?: unknown;
    size?: unknown;
    type?: unknown;
    valid?: unknown;
} & {
    invalid: boolean;
    type: string;
    valid: boolean;
} & {
    size?: string | undefined;
    label?: string | undefined;
    id?: string | undefined;
}> & {}, {
    size: string;
    invalid: boolean;
    label: string;
    id: string;
    type: string;
    valid: boolean;
}>;
export { CFormSwitch };
