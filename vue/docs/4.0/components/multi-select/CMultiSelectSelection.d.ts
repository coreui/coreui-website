import { PropType } from 'vue';
import { Option } from './CMultiSelect';
declare const CMultiSelectSelection: import("vue").DefineComponent<{
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
     * Enables search input element.
     */
    search: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selected: {
        type: PropType<Option[]>;
        default: () => never[];
        required: false;
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
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    multiple?: unknown;
    search?: unknown;
    selected?: unknown;
    selectionType?: unknown;
    selectionTypeCounterText?: unknown;
} & {
    multiple: boolean;
    search: boolean;
    selected: Option[];
    selectionType: string;
    selectionTypeCounterText: string;
} & {}> & {
    onRemove?: ((...args: any[]) => any) | undefined;
}, {
    multiple: boolean;
    search: boolean;
    selected: Option[];
    selectionType: string;
    selectionTypeCounterText: string;
}>;
export { CMultiSelectSelection };
