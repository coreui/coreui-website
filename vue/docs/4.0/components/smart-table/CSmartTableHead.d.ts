import { PropType } from 'vue';
import { Column, ColumnFilter, Sorter, SorterValue } from './CSmartTableInterface';
declare const CSmartTableHead: import("vue").DefineComponent<{
    columnFilter: {
        type: PropType<boolean | ColumnFilter>;
        default: undefined;
        require: boolean;
    };
    columnSorter: {
        type: PropType<boolean | Sorter>;
        default: undefined;
        require: boolean;
    };
    component: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    columns: {
        type: PropType<string[] | Column[]>;
        default: () => never[];
        required: false;
    };
    sorterState: {
        type: PropType<SorterValue>;
        default: undefined;
        require: boolean;
    };
    clearSorterAndFilter: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("filterInput" | "filterChange" | "sortClick")[], "filterInput" | "filterChange" | "sortClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    columnFilter?: unknown;
    columnSorter?: unknown;
    component?: unknown;
    columns?: unknown;
    sorterState?: unknown;
    clearSorterAndFilter?: unknown;
} & {
    component: string;
    columns: string[] | Column[];
    clearSorterAndFilter: string;
} & {
    columnFilter?: boolean | ColumnFilter | undefined;
    columnSorter?: boolean | Sorter | undefined;
    sorterState?: SorterValue | undefined;
}> & {
    onFilterInput?: ((...args: any[]) => any) | undefined;
    onFilterChange?: ((...args: any[]) => any) | undefined;
    onSortClick?: ((...args: any[]) => any) | undefined;
}, {
    component: string;
    columns: string[] | Column[];
    columnFilter: boolean | ColumnFilter;
    columnSorter: boolean | Sorter;
    sorterState: SorterValue;
    clearSorterAndFilter: string;
}>;
export { CSmartTableHead };
