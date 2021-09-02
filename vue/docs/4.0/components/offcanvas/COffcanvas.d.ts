import { RendererElement } from 'vue';
declare const COffcanvas: import("vue").DefineComponent<{
    /**
     * Apply a backdrop on body while offcanvas is open.
     *
     * @default true
     */
    backdrop: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
    };
    /**
     * Closes the offcanvas when escape key is pressed.
     *
     * @default true
     */
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
    };
    /**
     * Components placement, there’s no default placement.
     *
     * @values 'start', 'end', 'top', 'bottom'
     */
    placement: {
        type: StringConstructor;
        default: undefined;
        require: boolean;
        validator: (value: string) => boolean;
    };
    /**
     * Toggle the visibility of offcanvas component.
     */
    visible: {
        type: BooleanConstructor;
        require: boolean;
    };
}, () => (false | import("vue").VNode<import("vue").RendererNode, RendererElement, {
    [key: string]: any;
}>)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "dismiss"[], "dismiss", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    backdrop?: unknown;
    keyboard?: unknown;
    placement?: unknown;
    visible?: unknown;
} & {
    visible: boolean;
    backdrop: boolean;
    keyboard: boolean;
} & {
    placement?: string | undefined;
}> & {
    onDismiss?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    placement: string;
    backdrop: boolean;
    keyboard: boolean;
}>;
export { COffcanvas };
