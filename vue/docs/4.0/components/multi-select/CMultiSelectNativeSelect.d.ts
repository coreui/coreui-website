import { PropType, VNode } from 'vue';
import { Option } from './CMultiSelect';
declare const CMultiSelectNativeSelect: import("vue").DefineComponent<{
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
    value: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
        require: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    multiple?: unknown;
    options?: unknown;
    value?: unknown;
} & {
    multiple: boolean;
    options: Option[];
} & {
    value?: string | number | unknown[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    value: string | number | unknown[];
    multiple: boolean;
    options: Option[];
}>;
export { CMultiSelectNativeSelect };
