declare const CListGroupItem: import("vue").DefineComponent<{
    /**
     * Toggle the active state for the component.
     */
    active: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'li'
     */
    component: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active?: unknown;
    color?: unknown;
    disabled?: unknown;
    component?: unknown;
} & {
    disabled: boolean;
    component: string;
    active: boolean;
} & {
    color?: string | undefined;
}> & {}, {
    disabled: boolean;
    component: string;
    active: boolean;
}>;
export { CListGroupItem };
