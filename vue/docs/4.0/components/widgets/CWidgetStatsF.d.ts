declare const CWidgetStatsF: import("vue").DefineComponent<{
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Set padding of your component. [docs]
     */
    padding: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
     */
    title: {
        type: StringConstructor;
        default: undefined;
        require: boolean;
    };
    /**
     * Helper text for your component. If you want to pass non-string value please use dedicated slot `<template #text>...</template>`
     */
    text: {
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
    color?: unknown;
    padding?: unknown;
    title?: unknown;
    text?: unknown;
    value?: unknown;
} & {
    value: string | number;
    padding: boolean;
} & {
    color?: string | undefined;
    text?: string | undefined;
    title?: string | undefined;
}> & {}, {
    value: string | number;
    text: string;
    title: string;
    padding: boolean;
}>;
export { CWidgetStatsF };
