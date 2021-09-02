declare const CFormSelect: import("vue").DefineComponent<{
    /**
     * Specifies the number of visible options in a drop-down list.
     */
    htmlSize: {
        type: NumberConstructor;
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
     * Set component validation state to valid.
     */
    valid: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    htmlSize?: unknown;
    invalid?: unknown;
    size?: unknown;
    valid?: unknown;
} & {
    invalid: boolean;
    valid: boolean;
} & {
    size?: string | undefined;
    htmlSize?: number | undefined;
}> & {}, {
    size: string;
    invalid: boolean;
    valid: boolean;
    htmlSize: number;
}>;
export { CFormSelect };
