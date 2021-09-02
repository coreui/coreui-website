declare const CFormCheck: import("vue").DefineComponent<{
    /**
     * Create button-like checkboxes and radio buttons.
     */
    button: import("vue-types").VueTypeShape<{
        color: string;
        shape: string;
        size: string;
        variant: string;
    }>;
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document.
     */
    id: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Group checkboxes or radios on the same horizontal row by adding.
     */
    inline: {
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
     * The element represents a caption for a component.
     */
    label: {
        type: StringConstructor;
        default: undefined;
        required: false;
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
}> | ("" | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | undefined)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    button?: unknown;
    id?: unknown;
    inline?: unknown;
    invalid?: unknown;
    label?: unknown;
    type?: unknown;
    valid?: unknown;
} & {
    invalid: boolean;
    inline: boolean;
    type: string;
    valid: boolean;
} & {
    button?: {
        color: string;
        shape: string;
        size: string;
        variant: string;
    } | undefined;
    label?: string | undefined;
    id?: string | undefined;
}> & {}, {
    invalid: boolean;
    label: string;
    id: string;
    inline: boolean;
    type: string;
    valid: boolean;
}>;
export { CFormCheck };
