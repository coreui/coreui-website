declare const CTableDataCell: import("vue").DefineComponent<{
    /**
     * Highlight a table row or cell.
     */
    active: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set the vertical aligment.
     *
     * @values 'bottom', 'middle', 'top'
     */
    align: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active?: unknown;
    align?: unknown;
    color?: unknown;
} & {
    active: boolean;
} & {
    color?: string | undefined;
    align?: string | undefined;
}> & {}, {
    active: boolean;
    align: string;
}>;
export { CTableDataCell };
