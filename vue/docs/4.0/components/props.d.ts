declare const Shape: {
    type: StringConstructor;
    validator: (value: string) => boolean;
};
declare const Align: {
    type: StringConstructor;
    validator: (value: string) => boolean;
};
declare const Color: {
    type: StringConstructor;
    validator: (value: string) => boolean;
};
declare const TextColor: {
    type: StringConstructor;
    validator: (value: string) => boolean;
};
declare const Breakpoint: {
    validator: (value: boolean | number) => boolean;
};
export { Align, Breakpoint, Color, Shape, TextColor };
