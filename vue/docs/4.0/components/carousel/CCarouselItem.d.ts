declare const CCarouselItem: import("vue").DefineComponent<{
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active?: unknown;
    direction?: unknown;
} & {
    active: boolean;
    direction: string;
} & {}> & {}, {
    active: boolean;
    direction: string;
}>;
export { CCarouselItem };
