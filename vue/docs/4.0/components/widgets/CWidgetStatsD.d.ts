import { PropType } from 'vue';
declare type Value = {
    title?: string;
    value?: number | string;
};
declare const CWidgetStatsD: import("vue").DefineComponent<{
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
     * Values and titles for your component.
     */
    values: {
        type: PropType<Value[]>;
        default: () => never[];
        require: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
    values?: unknown;
} & {
    values: Value[];
} & {
    color?: string | undefined;
}> & {}, {
    values: Value[];
}>;
export { CWidgetStatsD };
