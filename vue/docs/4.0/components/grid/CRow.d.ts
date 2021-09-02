export declare type BPObject = {
    cols?: 'auto' | number | string | null;
    gutter?: number | string | null;
    gutterX?: number | string | null;
    gutterY?: number | string | null;
};
declare const CRow: import("vue").DefineComponent<{
    /**
     * The number of columns/offset/order on extra small devices (<576px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    xs: {
        type: () => BPObject;
        default: undefined;
        required: false;
    };
    /**
     * The number of columns/offset/order on small devices (<768px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    sm: {
        type: () => BPObject;
        default: undefined;
        required: false;
    };
    md: {
        type: () => BPObject;
        default: undefined;
        required: false;
    };
    /**
     * The number of columns/offset/order on large devices (<1200px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    lg: {
        type: () => BPObject;
        default: undefined;
        required: false;
    };
    /**
     * The number of columns/offset/order on X-Large devices (<1400px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    xl: {
        type: () => BPObject;
        default: undefined;
        required: false;
    };
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    xxl: {
        type: () => BPObject;
        default: undefined;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    xs?: unknown;
    sm?: unknown;
    md?: unknown;
    lg?: unknown;
    xl?: unknown;
    xxl?: unknown;
} & {} & {
    sm?: BPObject | undefined;
    md?: BPObject | undefined;
    lg?: BPObject | undefined;
    xl?: BPObject | undefined;
    xs?: BPObject | undefined;
    xxl?: BPObject | undefined;
}> & {}, {
    sm: BPObject;
    md: BPObject;
    lg: BPObject;
    xl: BPObject;
    xs: BPObject;
    xxl: BPObject;
}>;
export { CRow };
