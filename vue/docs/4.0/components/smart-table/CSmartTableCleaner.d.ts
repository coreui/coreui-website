declare const CSmartTableCleaner: import("vue").DefineComponent<{
    isFiltered: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "tableCleanerClick"[], "tableCleanerClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isFiltered?: unknown;
} & {} & {
    isFiltered?: string | undefined;
}> & {
    onTableCleanerClick?: ((...args: any[]) => any) | undefined;
}, {
    isFiltered: string;
}>;
export { CSmartTableCleaner };
