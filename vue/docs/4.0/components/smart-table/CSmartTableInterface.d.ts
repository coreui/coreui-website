/**
 * @ignore
 */
export interface Column {
    sorter?: boolean;
    key: string;
    label?: string;
    filter?: boolean;
    _style?: any;
    _props?: any;
}
import { VNode } from 'vue';
export interface ColumnFilter {
    lazy?: boolean;
    external?: boolean;
}
export interface ColumnFilterValue {
    [key: string]: number | string | any;
}
export declare type Item = {
    [key: string]: number | string | any;
    _props: Object;
};
export interface ItemsPerPageSelect {
    external?: boolean;
    label?: string;
    values?: Array<number>;
}
export interface Sorter {
    resetable?: boolean;
    external?: boolean;
}
export interface ScopedColumns {
    details?: (a: Item, b: number) => VNode;
}
export interface SorterValue {
    column?: string;
    state?: number | string;
}
export interface TableFilter {
    lazy?: boolean;
    external?: boolean;
    label?: string;
    placeholder?: string;
}
export interface NoItemsView {
    noResults?: string;
    noItems?: string;
}
