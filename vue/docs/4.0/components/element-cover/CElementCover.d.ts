declare const CElementCover: import("vue").DefineComponent<{
    /**
     * Array of custom boundaries. Use to create custom cover area (instead of parent element area). Area is defined by four sides: 'top', 'bottom', 'right', 'left'. If side is not defined by any custom boundary it is equal to parent element boundary. Each custom boundary is object with keys:
     * - sides (array) - select boundaries of element to define boundaries. Sides names: 'top', 'bottom', 'right', 'left'.
     * - query (string) - query used to get element which define boundaries. Search will be done only inside parent element, by parent.querySelector(query) function. [docs]
     *
     * @type {sides: string[], query: string}[]
     */
    boundaries: {
        type: ArrayConstructor;
        require: boolean;
    };
    /**
     * Opacity of the cover. [docs]
     *
     * @type number
     */
    opacity: {
        type: NumberConstructor;
        require: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    boundaries?: unknown;
    opacity?: unknown;
} & {} & {
    boundaries?: unknown[] | undefined;
    opacity?: number | undefined;
}> & {}, {}>;
export { CElementCover };
