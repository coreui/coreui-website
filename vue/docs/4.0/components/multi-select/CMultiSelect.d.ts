import { PropType } from 'vue';
export interface Option {
    disabled?: boolean;
    label?: string;
    options?: Option[];
    order?: number;
    selected?: boolean;
    text: string;
    value: number | string;
}
declare const CMultiSelect: import("vue").DefineComponent<{
    /**
     * Enables selection cleaner element.
     *
     * @default true
     */
    cleaner: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /**
     * It specifies that multiple options can be selected at once.
     *
     * @default true
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * List of option elements.
     */
    options: {
        type: PropType<Option[]>;
        default: () => never[];
        required: false;
    };
    /**
     * Sets maxHeight of options list.
     *
     * @default 'auto'
     */
    optionsMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
        required: false;
    };
    /**
     * Sets option style.
     *
     * @values 'checkbox', 'text'
     * @default 'checkbox'
     */
    optionsStyle: {
        type: StringConstructor;
        default: string;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Specifies a short hint that is visible in the search input.
     *
     * @default 'Select...''
     */
    placeholder: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    /**
     * Enables search input element.
     */
    search: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Sets the label for no results when filtering.
     */
    searchNoResultsLabel: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    /**
     * Enables select all button.
     *
     * @default true
     */
    selectAll: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /**
     * Sets the select all button label.
     *
     * @default 'Select all options'
     */
    selectAllLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Sets the selection style.
     *
     * @values 'counter', 'tags', 'text'
     * @default 'tags'
     */
    selectionType: {
        type: StringConstructor;
        default: string;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Sets the counter selection label.
     *
     * @default 'item(s) selected'
     */
    selectionTypeCounterText: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    /**
     * Toggle the visibility of multi select dropdown.
     *
     * @default false
     */
    visible: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    cleaner?: unknown;
    multiple?: unknown;
    options?: unknown;
    optionsMaxHeight?: unknown;
    optionsStyle?: unknown;
    placeholder?: unknown;
    search?: unknown;
    searchNoResultsLabel?: unknown;
    selectAll?: unknown;
    selectAllLabel?: unknown;
    selectionType?: unknown;
    selectionTypeCounterText?: unknown;
    visible?: unknown;
} & {
    visible: boolean;
    multiple: boolean;
    options: Option[];
    optionsMaxHeight: string | number;
    optionsStyle: string;
    searchNoResultsLabel: string;
    search: boolean;
    selectionType: string;
    selectionTypeCounterText: string;
    cleaner: boolean;
    placeholder: string;
    selectAll: boolean;
    selectAllLabel: string;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    multiple: boolean;
    options: Option[];
    optionsMaxHeight: string | number;
    optionsStyle: string;
    searchNoResultsLabel: string;
    search: boolean;
    selectionType: string;
    selectionTypeCounterText: string;
    cleaner: boolean;
    placeholder: string;
    selectAll: boolean;
    selectAllLabel: string;
}>;
export { CMultiSelect };
