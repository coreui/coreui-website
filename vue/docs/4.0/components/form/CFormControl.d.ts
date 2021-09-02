declare const CFormControlProps: {
    /**
     * A string of all className you want applied to the base component.
     */
    className: {
        type: StringConstructor;
        required: boolean;
    };
    /**
     * A string of all className you want applied to the component.
     */
    classNameParent: {
        type: StringConstructor;
        required: boolean;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'input'
     */
    component: {
        type: StringConstructor;
        required: boolean;
        default: string;
    };
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        required: boolean;
    };
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`.
     */
    plainText: {
        type: BooleanConstructor;
        required: boolean;
    };
    /**
     * Toggle the readonly state for the component.
     */
    readonly: {
        type: BooleanConstructor;
        required: boolean;
    };
    /**
     * Size the component small or large.
     *
     * @type 'sm' | 'lg'
     */
    size: {
        validator(value: string): boolean;
        required: boolean;
    };
    /**
     * Specifies the type of component.
     *
     * @type 'color' | 'file' | 'text' | string
     * @default 'text'
     */
    type: {
        type: StringConstructor;
        required: boolean;
    };
};
declare const CFormControl: import("vue").DefineComponent<{
    /**
     * A string of all className you want applied to the base component.
     */
    className: {
        type: StringConstructor;
        required: boolean;
    };
    /**
     * A string of all className you want applied to the component.
     */
    classNameParent: {
        type: StringConstructor;
        required: boolean;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'input'
     */
    component: {
        type: StringConstructor;
        required: boolean;
        default: string;
    };
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        required: boolean;
    };
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`.
     */
    plainText: {
        type: BooleanConstructor;
        required: boolean;
    };
    /**
     * Toggle the readonly state for the component.
     */
    readonly: {
        type: BooleanConstructor;
        required: boolean;
    };
    /**
     * Size the component small or large.
     *
     * @type 'sm' | 'lg'
     */
    size: {
        validator(value: string): boolean;
        required: boolean;
    };
    /**
     * Specifies the type of component.
     *
     * @type 'color' | 'file' | 'text' | string
     * @default 'text'
     */
    type: {
        type: StringConstructor;
        required: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    className?: unknown;
    classNameParent?: unknown;
    component?: unknown;
    disabled?: unknown;
    plainText?: unknown;
    readonly?: unknown;
    size?: unknown;
    type?: unknown;
} & {
    disabled: boolean;
    component: string;
    plainText: boolean;
    readonly: boolean;
} & {
    size?: unknown;
    type?: string | undefined;
    className?: string | undefined;
    classNameParent?: string | undefined;
}> & {}, {
    disabled: boolean;
    component: string;
    plainText: boolean;
    readonly: boolean;
}>;
export { CFormControl, CFormControlProps };
