declare const CSmartPagination: import("vue").DefineComponent<{
    /**
     * Horizontall align
     *
     * @default 'start'
     */
    align: {
        type: StringConstructor;
        default: string;
        require: boolean;
        validator: (value: string) => boolean;
    };
    /**
     * Current page number
     *
     * @default 1
     */
    activePage: {
        type: NumberConstructor;
        default: number;
        require: boolean;
    };
    /**
     * Show/hide arrows
     *
     * @default true
     */
    arrows: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
    };
    /**
     * Show/hide dots
     *
     * @default true
     */
    dots: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
    };
    /**
     * Show double arrows buttons
     *
     * @default true
     */
    doubleArrows: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
    };
    /**
     * The content of 'firstButton' button
     *
     * @default '&laquo;'
     */
    firstButton: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    /**
     * The content of 'lastButton' button
     *
     * @default '&raquo;'
     */
    lastButton: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    /**
     * Maximum items number
     *
     * @default 5
     */
    limit: {
        type: NumberConstructor;
        default: number;
        require: boolean;
    };
    /**
     * The content of 'nextButton' button
     *
     * @default '&rsaquo;'
     */
    nextButton: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    /**
     * Number of pages
     */
    pages: {
        type: NumberConstructor;
        default: number;
        require: boolean;
    };
    /**
     * The content of 'previousButton' button
     *
     * @default '&lsaquo;'
     */
    previousButton: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    /**
     * Size of pagination, valid values: 'sm', 'lg'
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "activePageChange"[], "activePageChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    align?: unknown;
    activePage?: unknown;
    arrows?: unknown;
    dots?: unknown;
    doubleArrows?: unknown;
    firstButton?: unknown;
    lastButton?: unknown;
    limit?: unknown;
    nextButton?: unknown;
    pages?: unknown;
    previousButton?: unknown;
    size?: unknown;
} & {
    align: string;
    activePage: number;
    arrows: boolean;
    dots: boolean;
    doubleArrows: boolean;
    firstButton: string;
    lastButton: string;
    limit: number;
    nextButton: string;
    pages: number;
    previousButton: string;
} & {
    size?: string | undefined;
}> & {
    onActivePageChange?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    align: string;
    activePage: number;
    arrows: boolean;
    dots: boolean;
    doubleArrows: boolean;
    firstButton: string;
    lastButton: string;
    limit: number;
    nextButton: string;
    pages: number;
    previousButton: string;
}>;
export { CSmartPagination };
