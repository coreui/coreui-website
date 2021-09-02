import { RendererElement } from 'vue';
declare const CToast: import("vue").DefineComponent<{
    /**
     * Auto hide the toast.
     *
     * @default true
     */
    autohide: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @default 'primary'
     * @value 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Delay hiding the toast (ms).
     */
    delay: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    /**
     * Optionally add a close button to component and allow it to self dismiss.
     *
     * @default true
     */
    dismissible: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    key: {
        type: NumberConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Title node for your component.
     */
    title: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Toggle the visibility of component.
     *
     * @default true
     */
    visible: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "dismiss"[], "dismiss", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    autohide?: unknown;
    color?: unknown;
    delay?: unknown;
    dismissible?: unknown;
    key?: unknown;
    title?: unknown;
    visible?: unknown;
} & {
    visible: boolean;
    dismissible: boolean;
    autohide: boolean;
    delay: number;
} & {
    key?: number | undefined;
    color?: string | undefined;
    title?: string | undefined;
}> & {
    onDismiss?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    key: number;
    dismissible: boolean;
    title: string;
    autohide: boolean;
    delay: number;
}>;
export { CToast };
