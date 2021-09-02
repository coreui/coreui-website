import { RendererElement } from 'vue';
declare const CModal: import("vue").DefineComponent<{
    /**
     * Align the modal in the center or top of the screen.
     *
     * @default 'top'
     * @values 'top', 'center'
     */
    alignment: {
        default: string;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Apply a backdrop on body while offcanvas is open.
     *
     * @default true
     * @values boolean, 'static'
     */
    backdrop: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
        require: boolean;
    };
    /**
     * A string of all className you want applied to the modal content component.
     * TODO: Consider if we should change this prop name to describe better its role.
     */
    className: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    /**
     * Set modal to covers the entire user viewport
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    fullscreen: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
        required: false;
        validator: (value: boolean | string) => boolean;
    };
    /**
     * Closes the modal when escape key is pressed.
     *
     * @default true
     */
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Does the modal dialog itself scroll, or does the whole dialog scroll within the window.
     */
    dismiss: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Create a scrollable modal that allows scrolling the modal body.
     */
    scrollable: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Size the component small, large, or extra large.
     *
     * @values 'sm', 'lg', 'xl'
     */
    size: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Remove animation to create modal that simply appear rather than fade in to view.
     */
    transition: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Toggle the visibility of alert component.
     */
    visible: {
        type: BooleanConstructor;
        required: false;
    };
}, () => (false | "" | import("vue").VNode<import("vue").RendererNode, RendererElement, {
    [key: string]: any;
}>)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "dismiss"[], "dismiss", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    alignment?: unknown;
    backdrop?: unknown;
    className?: unknown;
    fullscreen?: unknown;
    keyboard?: unknown;
    dismiss?: unknown;
    scrollable?: unknown;
    size?: unknown;
    transition?: unknown;
    visible?: unknown;
} & {
    visible: boolean;
    dismiss: boolean;
    transition: boolean;
    alignment: string;
    backdrop: string | boolean;
    keyboard: boolean;
    scrollable: boolean;
} & {
    size?: string | undefined;
    className?: string | undefined;
    fullscreen?: string | boolean | undefined;
}> & {
    onDismiss?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    dismiss: boolean;
    size: string;
    transition: boolean;
    alignment: string;
    backdrop: string | boolean;
    className: string;
    fullscreen: string | boolean;
    keyboard: boolean;
    scrollable: boolean;
}>;
export { CModal };
