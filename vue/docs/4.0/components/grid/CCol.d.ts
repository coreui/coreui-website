import { PropType } from 'vue';
declare type Span = 'auto' | number | string | boolean | null;
declare type BPObject = {
    span?: Span;
    offset?: number | string | null;
    order?: 'first' | 'last' | number | string | null;
};
declare type Col = Span | BPObject;
declare const CCol: import("vue").DefineComponent<{
    /**
     * The number of columns/offset/order on extra small devices (<576px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    xs: {
        type: PropType<Col>;
        default: undefined;
        require: boolean;
    };
    /**
     * The number of columns/offset/order on small devices (<768px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    sm: {
        type: PropType<Col>;
        default: undefined;
        require: boolean;
    };
    /**
     * The number of columns/offset/order on medium devices (<992px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    md: {
        type: PropType<Col>;
        default: undefined;
        require: boolean;
    };
    /**
     * The number of columns/offset/order on large devices (<1200px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    lg: {
        type: PropType<Col>;
        default: undefined;
        require: boolean;
    };
    /**
     * The number of columns/offset/order on X-Large devices (<1400px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    xl: {
        type: PropType<Col>;
        default: undefined;
        require: boolean;
    };
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    xxl: {
        type: PropType<Col>;
        default: undefined;
        require: boolean;
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
    sm?: Col | undefined;
    md?: Col | undefined;
    lg?: Col | undefined;
    xl?: Col | undefined;
    xs?: Col | undefined;
    xxl?: Col | undefined;
}> & {}, {
    sm: Col;
    md: Col;
    lg: Col;
    xl: Col;
    xs: Col;
    xxl: Col;
}>;
export { CCol };
