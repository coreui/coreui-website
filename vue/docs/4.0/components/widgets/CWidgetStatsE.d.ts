declare const CWidgetStatsE: import("vue").DefineComponent<{
    /**
     * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
     */
    title: {
        type: StringConstructor;
        default: undefined;
        require: boolean;
    };
    /**
     * Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>`
     */
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        require: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    value?: unknown;
} & {
    value: string | number;
} & {
    title?: string | undefined;
}> & {}, {
    value: string | number;
    title: string;
}>;
export { CWidgetStatsE };
