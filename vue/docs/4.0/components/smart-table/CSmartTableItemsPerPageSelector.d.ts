import { PropType } from 'vue';
declare const CSmartTableItemsPerPageSelector: import("vue").DefineComponent<{
    itemsPerPage: {
        type: NumberConstructor;
        default: undefined;
        require: boolean;
    };
    itemsPerPageLabel: {
        type: StringConstructor;
        default: undefined;
        require: boolean;
    };
    itemsPerPageOptions: {
        type: PropType<number[]>;
        default: () => never[];
        require: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "changeItemsPerPage"[], "changeItemsPerPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    itemsPerPage?: unknown;
    itemsPerPageLabel?: unknown;
    itemsPerPageOptions?: unknown;
} & {
    itemsPerPageOptions: number[];
} & {
    itemsPerPage?: number | undefined;
    itemsPerPageLabel?: string | undefined;
}> & {
    onChangeItemsPerPage?: ((...args: any[]) => any) | undefined;
}, {
    itemsPerPage: number;
    itemsPerPageLabel: string;
    itemsPerPageOptions: number[];
}>;
export { CSmartTableItemsPerPageSelector };
