declare const CSmartTableFilter: import("vue").DefineComponent<{
    filterLabel: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    filterPlaceholder: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        require: boolean;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("filterInput" | "filterChange")[], "filterInput" | "filterChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    filterLabel?: unknown;
    filterPlaceholder?: unknown;
    value?: unknown;
} & {
    value: string | number;
    filterLabel: string;
    filterPlaceholder: string;
} & {}> & {
    onFilterInput?: ((...args: any[]) => any) | undefined;
    onFilterChange?: ((...args: any[]) => any) | undefined;
}, {
    value: string | number;
    filterLabel: string;
    filterPlaceholder: string;
}>;
export { CSmartTableFilter };
