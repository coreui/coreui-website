import { VNode } from 'vue';
declare const CCarousel: import("vue").DefineComponent<{
    /**
     * Adding in the previous and next controls.
     */
    controls: BooleanConstructor;
    /**
     * Add darker controls, indicators, and captions.
     */
    dark: BooleanConstructor;
    /**
     * index of the active item.
     *
     * @default 0
     */
    index: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    /**
     * Adding indicators at the bottom of the carousel for each item.
     */
    indicators: BooleanConstructor;
    /**
     * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
     */
    interval: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: number;
        required: false;
    };
    /**
     * Adding indicators at the bottom of the carousel for each item.
     *
     * @values 'crossfade', 'slide'
     * @default 'slide'
     */
    transition: {
        type: StringConstructor;
        default: string;
        required: false;
        validator: (value: string) => boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    controls?: unknown;
    dark?: unknown;
    index?: unknown;
    indicators?: unknown;
    interval?: unknown;
    transition?: unknown;
} & {
    dark: boolean;
    controls: boolean;
    index: number;
    indicators: boolean;
    interval: number | boolean;
    transition: string;
} & {}> & {}, {
    dark: boolean;
    controls: boolean;
    index: number;
    indicators: boolean;
    interval: number | boolean;
    transition: string;
}>;
export { CCarousel };
