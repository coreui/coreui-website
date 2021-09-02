import { PropType } from 'vue';
import { Column, ColumnFilter, ColumnFilterValue, Item, ItemsPerPageSelect, Sorter, SorterValue, TableFilter } from './CSmartTableInterface';
declare const CSmartTable: import("vue").DefineComponent<{
    /**
     * Sets active page. If 'pagination' prop is enabled, activePage is set only initially.
     *
     * @default 1
     */
    activePage: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    /**
     * When set, displays table cleaner above table, next to the table filter (or in place of table filter if `tableFilter` prop is not set)
     * Cleaner resets `tableFilterValue`, `columnFilterValue`, `sorterValue`. If clean is possible it is clickable (`tabIndex="0"` `role="button"`, `color="danger"`), otherwise it is not clickable and transparent. Cleaner can be customized through the `cleaner` slot.
     *
     */
    cleaner: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Style table items as clickable.
     *
     * @type boolean
     */
    clickableRows: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * When set, displays additional filter row between table header and items, allowing filtering by specific column.
     * Column filter can be customized, by passing prop as object with additional options as keys. Available options:
     * - external (Boolean) - Disables automatic filtering inside component.
     * - lazy (Boolean) - Set to true to trigger filter updates only on change event.
     *
     * @type boolean | ColumnFilter
     */
    columnFilter: {
        type: PropType<boolean | ColumnFilter>;
        default: undefined;
        required: false;
    };
    /**
     * Value of table filter. To set pass object where keys are column names and values are filter strings e.g.:
     * { user: 'John', age: 12 }
     * You can track state of this prop by setting .sync modifier.
     */
    columnFilterValue: {
        type: PropType<ColumnFilterValue>;
        default: undefined;
        required: false;
    };
    /**
     * Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. '_classes')
     *
     * In columns prop each array item represents one column. Item might be specified in two ways:
     * String: each item define column name equal to item value.
     * Object: item is object with following keys available as column configuration:
     * - key (required)(String) - define column name equal to item key.
     * - label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word.
     * - _classes (String/Array/Object) - adds classes to all cels in column
     * - _style (String/Array/Object) - adds styles to the column header (useful for defining widths)
     * - sorter (Boolean) - disables sorting of the column when set to false
     * - filter (Boolean) - removes filter from column when set to false.
     */
    columns: {
        type: PropType<string[] | Column[]>;
        default: () => never[];
        required: false;
    };
    /**
     * Enables table sorting by column value. Sorting will be performed corectly only if values in column are of one type: string (case insensitive) or number.
     *
     * Sorter can be customized, by passing prop as object with additional options as keys. Available options:
     * - external (Boolean) - Disables automatic sorting inside component.
     * - resetable (Boolean) - If set to true clicking on sorter have three states: ascending, descending and null. That means that third click on sorter will reset sorting, and restore table to original order.
     *
     * @type boolean | Sorter
     */
    columnSorter: {
        type: PropType<boolean | Sorter>;
        default: undefined;
        required: false;
    };
    /**
     * Displays table footer, which mirrors table header. (without column filter).
     */
    footer: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set to false to remove table header.
     *
     * @default true
     */
    header: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /**
     * Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_classes' key and to single cell by '_cellClasses'.
     */
    items: {
        type: PropType<Item[]>;
        default: () => never[];
        required: false;
    };
    /**
     * Number of items per site, when pagination is enabled.
     *
     * @default 10
     */
    itemsPerPage: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    /**
     * Label for items per page selector.
     *
     * @default 'Items per page:'
     */
    itemsPerPageLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Items per page selector options.
     *
     * @default [5, 10, 20, 50]
     */
    itemsPerPageOptions: {
        type: PropType<number[]>;
        default: () => number[];
        required: false;
    };
    /**
     * Adds select element over table, which is used for control items per page in pagination. If you want to customize this element, pass object with optional values:
     * - label (String) - replaces default label text
     * - values (Array) - custom array of pagination values
     * - external (Boolean) - disables automatic 'itemsPerPage' change (use to change pages externaly by 'pagination-change' event).
     */
    itemsPerPageSelect: {
        type: PropType<boolean | ItemsPerPageSelect>;
        default: undefined;
        required: false;
    };
    /**
     * When set, table will have loading style: loading spinner and reduced opacity. When 'small' prop is enabled spinner will be also smaller.
     */
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * ReactNode or string for passing custom noItemsLabel texts.
     * @default 'No items found'
     */
    noItemsLabel: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    /**
     * Enables default pagination. Set to true for default setup or pass an object with additional CPagination props. Default pagination will always have the computed number of pages that cannot be changed. The number of pages is generated based on the number of passed items and 'itemsPerPage' prop. If this restriction is an obstacle, you can make external CPagination instead.
     */
    pagination: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Properties to `CSmartPagination` component.
     *
     * @link https://coreui.io/vue/docs/4.0/components/smart-pagination#csmartpagination
     */
    paginationProps: {
        type: ObjectConstructor;
        default: undefined;
        required: false;
    };
    /**
     * State of the sorter. Name key is column name, direction can be 'asc' or 'desc'. Set .sync modifier to track changes.
     *
     * @type SorterValue
     */
    sorterValue: {
        type: PropType<SorterValue>;
        default: undefined;
        required: false;
    };
    /**
     * Properties to `CTableBody` component.
     *
     * @link https://coreui.io/vue/docs/4.0/components/table/#ctablebody
     */
    tableBodyProps: {
        type: ObjectConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Properties to `CTableFoot` component.
     *
     * @link https://coreui.io/vue/docs/4.0/components/table/#ctablefoot
     */
    tableFootProps: {
        type: ObjectConstructor;
        default: undefined;
        required: false;
    };
    /**
     * When set, displays table filter above table, allowing filtering by specific column.
     *
     * Column filter can be customized, by passing prop as object with additional options as keys. Available options:
     * - placeholder (String) - Sets custom table filter placeholder.
     * - label (String) - Sets custom table filter label.
     * - external (Boolean) - Disables automatic filtering inside component.
     * - lazy (Boolean) - Set to true to trigger filter updates only on change event.
     */
    tableFilter: {
        type: PropType<boolean | TableFilter>;
        default: undefined;
        required: false;
    };
    /**
     * The element represents a caption for a component.
     */
    tableFilterLabel: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    /**
     * Specifies a short hint that is visible in the search input.
     *
     * @default 'type string...'
     */
    tableFilterPlaceholder: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    /**
     * Value of table filter. Set .sync modifier to track changes.
     *
     * @default 'Filter:'
     */
    tableFilterValue: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Properties to `CTableHead` component.
     *
     * @link https://coreui.io/vue/docs/4.0/components/table/#ctablehead
     */
    tableHeadProps: {
        type: ObjectConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Properties to `CTable` component.
     *
     * @link https://coreui.io/vue/docs/4.0/components/table/#ctable
     */
    tableProps: {
        type: ObjectConstructor;
        default: undefined;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("activePageChange" | "rowClick" | "columnFilterChange" | "filteredItemsChange" | "itemsPerPageChange" | "sorterChange" | "tableFilterChange")[], "activePageChange" | "rowClick" | "columnFilterChange" | "filteredItemsChange" | "itemsPerPageChange" | "sorterChange" | "tableFilterChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    activePage?: unknown;
    cleaner?: unknown;
    clickableRows?: unknown;
    columnFilter?: unknown;
    columnFilterValue?: unknown;
    columns?: unknown;
    columnSorter?: unknown;
    footer?: unknown;
    header?: unknown;
    items?: unknown;
    itemsPerPage?: unknown;
    itemsPerPageLabel?: unknown;
    itemsPerPageOptions?: unknown;
    itemsPerPageSelect?: unknown;
    loading?: unknown;
    noItemsLabel?: unknown;
    pagination?: unknown;
    paginationProps?: unknown;
    sorterValue?: unknown;
    tableBodyProps?: unknown;
    tableFootProps?: unknown;
    tableFilter?: unknown;
    tableFilterLabel?: unknown;
    tableFilterPlaceholder?: unknown;
    tableFilterValue?: unknown;
    tableHeadProps?: unknown;
    tableProps?: unknown;
} & {
    items: Item[];
    footer: boolean;
    header: boolean;
    cleaner: boolean;
    pagination: boolean;
    activePage: number;
    clickableRows: boolean;
    columns: string[] | Column[];
    itemsPerPage: number;
    itemsPerPageLabel: string;
    itemsPerPageOptions: number[];
    loading: boolean;
    noItemsLabel: string;
    tableFilterLabel: string;
    tableFilterPlaceholder: string;
} & {
    columnFilter?: boolean | ColumnFilter | undefined;
    columnSorter?: boolean | Sorter | undefined;
    columnFilterValue?: ColumnFilterValue | undefined;
    itemsPerPageSelect?: boolean | ItemsPerPageSelect | undefined;
    paginationProps?: Record<string, any> | undefined;
    sorterValue?: SorterValue | undefined;
    tableBodyProps?: Record<string, any> | undefined;
    tableFootProps?: Record<string, any> | undefined;
    tableFilter?: boolean | TableFilter | undefined;
    tableFilterValue?: string | undefined;
    tableHeadProps?: Record<string, any> | undefined;
    tableProps?: Record<string, any> | undefined;
}> & {
    onActivePageChange?: ((...args: any[]) => any) | undefined;
    onRowClick?: ((...args: any[]) => any) | undefined;
    onColumnFilterChange?: ((...args: any[]) => any) | undefined;
    onFilteredItemsChange?: ((...args: any[]) => any) | undefined;
    onItemsPerPageChange?: ((...args: any[]) => any) | undefined;
    onSorterChange?: ((...args: any[]) => any) | undefined;
    onTableFilterChange?: ((...args: any[]) => any) | undefined;
}, {
    items: Item[];
    footer: boolean;
    header: boolean;
    cleaner: boolean;
    pagination: boolean;
    activePage: number;
    clickableRows: boolean;
    columns: string[] | Column[];
    columnFilter: boolean | ColumnFilter;
    columnSorter: boolean | Sorter;
    itemsPerPage: number;
    itemsPerPageLabel: string;
    itemsPerPageOptions: number[];
    columnFilterValue: ColumnFilterValue;
    itemsPerPageSelect: boolean | ItemsPerPageSelect;
    loading: boolean;
    noItemsLabel: string;
    paginationProps: Record<string, any>;
    sorterValue: SorterValue;
    tableBodyProps: Record<string, any>;
    tableFootProps: Record<string, any>;
    tableFilter: boolean | TableFilter;
    tableFilterLabel: string;
    tableFilterPlaceholder: string;
    tableFilterValue: string;
    tableHeadProps: Record<string, any>;
    tableProps: Record<string, any>;
}>;
export { CSmartTable };
