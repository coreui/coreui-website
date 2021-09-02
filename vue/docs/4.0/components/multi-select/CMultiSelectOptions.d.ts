import { PropType, VNode } from 'vue';
import { Option } from './CMultiSelect';
declare const CMultiSelectOptions: import("vue").DefineComponent<{
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
     * Sets the label for no results when filtering.
     */
    searchNoResultsLabel: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "optionClick"[], "optionClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options?: unknown;
    optionsMaxHeight?: unknown;
    optionsStyle?: unknown;
    searchNoResultsLabel?: unknown;
} & {
    options: Option[];
    optionsMaxHeight: string | number;
    optionsStyle: string;
    searchNoResultsLabel: string;
} & {}> & {
    onOptionClick?: ((...args: any[]) => any) | undefined;
}, {
    options: Option[];
    optionsMaxHeight: string | number;
    optionsStyle: string;
    searchNoResultsLabel: string;
}>;
export { CMultiSelectOptions };
