declare const CWidgetStatsB: import("vue").DefineComponent<{
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors
     *
     * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Colors have been inverted from their default dark shade.
     */
    inverse: {
        type: BooleanConstructor;
        default: undefined;
        require: boolean;
    };
    progress: import("vue-types").VueTypeShape<{
        color: string;
        value: number;
    }>;
    /**
     * Helper text for your component. If you want to pass non-string value please use dedicated slot `<template #text>...</template>`
     */
    text: {
        type: StringConstructor;
        default: undefined;
        require: boolean;
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
    inverse?: unknown;
    progress?: unknown;
    text?: unknown;
    title?: unknown;
    value?: unknown;
} & {
    value: string | number;
} & {
    color?: string | undefined;
    progress?: {
        color: string;
        value: number;
    } | undefined;
    text?: string | undefined;
    title?: string | undefined;
    inverse?: boolean | undefined;
}> & {}, {
    value: string | number;
    text: string;
    title: string;
    inverse: boolean;
}>;
export { CWidgetStatsB };
