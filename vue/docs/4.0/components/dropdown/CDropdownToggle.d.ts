declare const CDropdownToggle: import("vue").DefineComponent<{
    /**
     * Toggle the active state for the component.
     */
    active: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Enables pseudo element caret on toggler.
     *
     * @default true
     */
    caret: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Select the shape of the component.
     */
    shape: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Size the component small or large.
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret.
     */
    split: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set the button variant to an outlined button or a ghost button.
     */
    variant: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    togglerVariant: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active?: unknown;
    color?: unknown;
    caret?: unknown;
    component?: unknown;
    disabled?: unknown;
    shape?: unknown;
    size?: unknown;
    split?: unknown;
    variant?: unknown;
    togglerVariant?: unknown;
} & {
    disabled: boolean;
    component: string;
    active: boolean;
    caret: boolean;
    split: boolean;
} & {
    color?: string | undefined;
    variant?: string | undefined;
    shape?: string | undefined;
    size?: string | undefined;
    togglerVariant?: string | undefined;
}> & {}, {
    disabled: boolean;
    variant: string;
    component: string;
    size: string;
    active: boolean;
    caret: boolean;
    split: boolean;
    togglerVariant: string;
}>;
export { CDropdownToggle };
