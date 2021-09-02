declare const CProgressBar: import("vue").DefineComponent<{
    /**
     * Use to animate the stripes right to left via CSS3 animations.
     */
    animated: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    /**
     * The percent to progress the ProgressBar.
     *
     * @default 0
     */
    value: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    /**
     * Set the progress bar variant to optional striped.
     *
     * @values 'striped'
     */
    variant: {
        type: StringConstructor;
        default: undefined;
        require: boolean;
        validator: (value: string) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    animated?: unknown;
    color?: unknown;
    value?: unknown;
    variant?: unknown;
} & {
    value: number;
    animated: boolean;
} & {
    color?: string | undefined;
    variant?: string | undefined;
}> & {}, {
    value: number;
    variant: string;
    animated: boolean;
}>;
export { CProgressBar };
