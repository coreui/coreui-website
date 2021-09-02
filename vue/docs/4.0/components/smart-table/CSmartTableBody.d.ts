import { PropType } from 'vue';
import { Item } from './CSmartTableInterface';
declare const CSmartTableBody: import("vue").DefineComponent<{
    clickableRows: {
        type: BooleanConstructor;
        require: boolean;
    };
    currentItems: {
        type: PropType<Item[]>;
        default: () => never[];
        required: false;
    };
    firstItemOnActivePageIndex: {
        type: NumberConstructor;
        require: boolean;
        default: number;
    };
    noItemLabel: {
        type: StringConstructor;
        default: undefined;
        require: boolean;
    };
    columns: {
        type: ArrayConstructor;
        default: () => never[];
        require: boolean;
    };
    rawColumnNames: {
        type: PropType<string[]>;
        default: () => never[];
        require: boolean;
    };
    scopedSlots: {
        type: ObjectConstructor;
        default: undefined;
        require: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "rowClick"[], "rowClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    clickableRows?: unknown;
    currentItems?: unknown;
    firstItemOnActivePageIndex?: unknown;
    noItemLabel?: unknown;
    columns?: unknown;
    rawColumnNames?: unknown;
    scopedSlots?: unknown;
} & {
    clickableRows: boolean;
    currentItems: Item[];
    firstItemOnActivePageIndex: number;
    columns: unknown[];
    rawColumnNames: string[];
} & {
    noItemLabel?: string | undefined;
    scopedSlots?: Record<string, any> | undefined;
}> & {
    onRowClick?: ((...args: any[]) => any) | undefined;
}, {
    clickableRows: boolean;
    currentItems: Item[];
    firstItemOnActivePageIndex: number;
    noItemLabel: string;
    columns: unknown[];
    rawColumnNames: string[];
    scopedSlots: Record<string, any>;
}>;
export { CSmartTableBody };
