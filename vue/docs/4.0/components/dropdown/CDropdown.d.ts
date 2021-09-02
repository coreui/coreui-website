import { PropType } from 'vue';
import { Placement } from '@popperjs/core';
declare const CDropdown: import("vue").DefineComponent<{
    /**
     * @values { 'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'} }
     */
    alignment: {
        type: (ObjectConstructor | StringConstructor)[];
        default: undefined;
        required: false;
        validator: (value: string | any) => boolean;
    };
    /**
     * Enables pseudo element caret on toggler.
     *
     * @default true
     */
    caret: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /**
     * Sets a darker color scheme to match a dark navbar.
     */
    dark: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Sets a specified  direction and location of the dropdown menu.
     *
     * @values 'dropup' | 'dropend' | 'dropstart'
     */
    direction: {
        type: StringConstructor;
        default: undefined;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
     *
     * @values 'auto' | 'top-end' | 'top' | 'top-start' | 'bottom-end' | 'bottom' | 'bottom-start' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left' | 'left-end'
     * @default 'bottom-start'
     */
    placement: {
        type: PropType<Placement>;
        default: string;
        required: false;
    };
    /**
     * If you want to disable dynamic positioning set this property to `true`.
     */
    popper: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     */
    trigger: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
    /**
     * Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item.
     */
    variant: {
        type: StringConstructor;
        default: string;
        required: false;
        validator: (value: string) => boolean;
    };
    /**
     * Toggle the visibility of dropdown menu component.
     *
     * @default false
     */
    visible: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    alignment?: unknown;
    caret?: unknown;
    dark?: unknown;
    direction?: unknown;
    disabled?: unknown;
    placement?: unknown;
    popper?: unknown;
    trigger?: unknown;
    variant?: unknown;
    visible?: unknown;
} & {
    visible: boolean;
    dark: boolean;
    disabled: boolean;
    variant: string;
    caret: boolean;
    placement: Placement;
    popper: boolean;
    trigger: string | unknown[];
} & {
    direction?: string | undefined;
    alignment?: undefined;
}> & {}, {
    visible: boolean;
    dark: boolean;
    disabled: boolean;
    variant: string;
    direction: string;
    alignment: undefined;
    caret: boolean;
    placement: Placement;
    popper: boolean;
    trigger: string | unknown[];
}>;
export { CDropdown };
