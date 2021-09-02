declare const CTable: import("vue").DefineComponent<{
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
     * Sets the border color of the component to one of CoreUI’s themed colors.
     *
     * @value 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    borderColor: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Add borders on all sides of the table and cells.
     */
    bordered: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Remove borders on all sides of the table and cells.
     */
    borderless: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Put the `<caption>` on the top of the table.
     *
     * @values 'top'
     */
    caption: {
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
    /**
     * Enable a hover state on table rows within a `<CTableBody>`.
     */
    hover: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Make any table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    responsive: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
        required: false;
        validator: (value: boolean | string) => boolean;
    };
    /**
     * Make table more compact by cutting all cell `padding` in half.
     */
    small: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Add zebra-striping to any table row within the `<CTableBody>`.
     */
    striped: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    align?: unknown;
    borderColor?: unknown;
    bordered?: unknown;
    borderless?: unknown;
    caption?: unknown;
    color?: unknown;
    hover?: unknown;
    responsive?: unknown;
    small?: unknown;
    striped?: unknown;
} & {
    striped: boolean;
    small: boolean;
    bordered: boolean;
    borderless: boolean;
    hover: boolean;
} & {
    color?: string | undefined;
    align?: string | undefined;
    caption?: string | undefined;
    borderColor?: string | undefined;
    responsive?: string | boolean | undefined;
}> & {}, {
    align: string;
    striped: boolean;
    caption: string;
    small: boolean;
    bordered: boolean;
    borderless: boolean;
    hover: boolean;
    responsive: string | boolean;
}>;
export { CTable };
