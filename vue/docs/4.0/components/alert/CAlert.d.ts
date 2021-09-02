export declare const CAlert: import("vue").DefineComponent<{
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * Optionally add a close button to alert and allow it to self dismisss.
     */
    dismissible: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Set the alert variant to a solid.
     */
    variant: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Toggle the visibility of alert component.
     */
    visible: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "dismiss"[], "dismiss", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
    dismissible?: unknown;
    variant?: unknown;
    visible?: unknown;
} & {
    visible: boolean;
    dismissible: boolean;
} & {
    color?: string | undefined;
    variant?: string | undefined;
}> & {
    onDismiss?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    dismissible: boolean;
    variant: string;
}>;
