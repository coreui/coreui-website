declare const CSidebar: import("vue").DefineComponent<{
    /**
     * Sets if the color of text should be colored for a light or dark dark background.
     *
     * @values 'dark', light'
     */
    colorScheme: {
        type: StringConstructor;
        default: undefined;
        validator: (value: string) => boolean;
    };
    /**
     * Hide sidebar.
     */
    hide: BooleanConstructor;
    /**
     * Make sidebar narrow.
     */
    narrow: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Set sidebar to overlaid variant.
     */
    overlaid: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Components placement, there’s no default placement.
     * @values 'start', 'end'
     */
    placement: {
        type: StringConstructor;
        default: undefined;
        validator: (value: string) => boolean;
    };
    /**
     * Place sidebar in non-static positions.
     */
    position: {
        type: StringConstructor;
        default: undefined;
        validator: (value: string) => boolean;
    };
    /**
     * Make any sidebar self hiding across all viewports or pick a maximum breakpoint with which to have a self hiding up to.
     *
     * @values 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    selfHiding: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
        validator: (value: boolean | string) => boolean;
    };
    /**
     * Size the component small, large, or extra large.
     */
    size: {
        type: StringConstructor;
        default: undefined;
        validator: (value: string) => boolean;
    };
    /**
     * Expand narrowed sidebar on hover.
     */
    unfoldable: BooleanConstructor;
    /**
     * Toggle the visibility of sidebar component.
     */
    visible: BooleanConstructor;
}, () => any[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "visible-change"[], "visible-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    colorScheme?: unknown;
    hide?: unknown;
    narrow?: unknown;
    overlaid?: unknown;
    placement?: unknown;
    position?: unknown;
    selfHiding?: unknown;
    size?: unknown;
    unfoldable?: unknown;
    visible?: unknown;
} & {
    visible: boolean;
    hide: boolean;
    narrow: boolean;
    overlaid: boolean;
    unfoldable: boolean;
} & {
    size?: string | undefined;
    placement?: string | undefined;
    position?: string | undefined;
    colorScheme?: string | undefined;
    selfHiding?: string | boolean | undefined;
}> & {
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    size: string;
    placement: string;
    position: string;
    colorScheme: string;
    hide: boolean;
    narrow: boolean;
    overlaid: boolean;
    selfHiding: string | boolean;
    unfoldable: boolean;
}>;
export { CSidebar };
