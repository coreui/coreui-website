import { defineComponent, h as h$1, Transition, withDirectives, vShow, ref, reactive, onBeforeMount, toRefs, watch, provide, onMounted, onUnmounted, inject, onUpdated, computed, onBeforeUnmount, nextTick, resolveComponent } from 'vue';

const CAccordion = defineComponent({
    name: 'CAccordion',
    props: {
        /**
         * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
         */
        flush: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1('div', { class: ['accordion', { ['accordion-flush']: props.flush }] }, slots.default && slots.default());
    },
});

const CAccordionBody = defineComponent({
    name: 'CAccordionBody',
    setup(_, { slots }) {
        return () => h$1('div', { class: ['accordion-body'] }, slots.default && slots.default());
    },
});

const CAccordionButton = defineComponent({
    name: 'CAccordionButton',
    props: {
        /**
         * Set button state to collapsed.
         */
        collapsed: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1('button', { class: ['accordion-button', { ['collapsed']: props.collapsed }] }, slots.default && slots.default());
    },
});

const CCollapse = defineComponent({
    name: 'CCollapse',
    props: {
        /**
         * Toggle the visibility of component.
         */
        visible: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots }) {
        const handleBeforeEnter = (el) => {
            el.classList.remove('collapse');
            el.classList.add('collapsing');
        };
        const handleEnter = (el, done) => {
            el.addEventListener('transitionend', () => {
                el.classList.add('collapse', 'show');
                done();
            });
            el.style.height = `${el.scrollHeight}px`;
        };
        // TODO: find solution how to remove height
        const handleAfterEnter = (el) => {
            el.classList.remove('collapsing');
            el.style.height = 'auto';
        };
        const handleBeforeLeave = (el) => {
            el.classList.add('show');
            el.style.height = `${el.scrollHeight}px`;
        };
        const handleLeave = (el, done) => {
            el.classList.remove('collapse', 'show');
            el.classList.add('collapsing');
            el.addEventListener('transitionend', () => {
                done();
            });
            el.style.height = '0px';
        };
        const handleAfterLeave = (el) => {
            el.classList.remove('collapsing');
            el.classList.add('collapse');
        };
        return () => h$1(Transition, {
            name: 'fade',
            onBeforeEnter: (el) => handleBeforeEnter(el),
            onEnter: (el, done) => handleEnter(el, done),
            onAfterEnter: (el) => handleAfterEnter(el),
            onBeforeLeave: (el) => handleBeforeLeave(el),
            onLeave: (el, done) => handleLeave(el, done),
            onAfterLeave: (el) => handleAfterLeave(el),
        }, () => withDirectives(h$1('div', {
            class: [
                'collapse',
                {
                    show: props.visible,
                },
            ],
        }, slots.default && slots.default()), [[vShow, props.visible]]));
    },
});

const CAccordionCollapse = defineComponent({
    name: 'CAccordionCollapse',
    props: {
        /**
         * Toggle the visibility of component.
         */
        visible: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1(CCollapse, {
            class: 'accordion-collapse',
            visible: props.visible,
        }, {
            default: () => slots.default && slots.default(),
        });
    },
});

const CAccordionHeader = defineComponent({
    name: 'CAccordionHeader',
    setup(_, { slots }) {
        return () => h$1('div', { class: ['accordion-header'] }, slots.default && slots.default());
    },
});

const CAccordionItem = defineComponent({
    name: 'CAccordionItem',
    setup(_, { slots }) {
        return () => h$1('div', { class: ['accordion-item'] }, slots.default && slots.default());
    },
});

const CAccordionPlugin = {
    install: (app) => {
        app.component(CAccordion.name, CAccordion);
        app.component(CAccordionBody.name, CAccordionBody);
        app.component(CAccordionButton.name, CAccordionButton);
        app.component(CAccordionCollapse.name, CAccordionCollapse);
        app.component(CAccordionHeader.name, CAccordionHeader);
        app.component(CAccordionItem.name, CAccordionItem);
    },
};

const Shape = {
    type: String,
    validator: (value) => {
        // The value must match one of these strings
        return [
            'rounded',
            'rounded-top',
            'rounded-end',
            'rounded-bottom',
            'rounded-start',
            'rounded-circle',
            'rounded-pill',
            'rounded-0',
            'rounded-1',
            'rounded-2',
            'rounded-3',
        ].includes(value);
    },
};
const Color = {
    type: String,
    validator: (value) => {
        // The value must match one of these strings
        return [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'dark',
            'light',
            'link',
            'transparent',
            'primary-gradient',
            'secondary-gradient',
            'success-gradient',
            'danger-gradient',
            'warning-gradient',
            'info-gradient',
            'dark-gradient',
            'light-gradient',
        ].includes(value);
    },
};
const TextColor = {
    type: String,
    validator: (value) => {
        return [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'dark',
            'light',
            'white',
            'muted',
        ].includes(value);
    },
};

const CCloseButton = defineComponent({
    name: 'CCloseButton',
    props: {
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * Change the default color to white.
         */
        white: {
            type: Boolean,
            required: false,
        },
    },
    emits: ['click'],
    setup(props, { emit }) {
        const handleClick = () => {
            emit('click');
        };
        return () => h$1('button', {
            class: [
                'btn',
                'btn-close',
                {
                    ['btn-close-white']: props.white,
                },
                props.disabled,
            ],
            'aria-label': 'Close',
            disabled: props.disabled,
            onClick: handleClick,
        });
    },
});

const CAlert = defineComponent({
    name: 'CAlert',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         */
        color: Color,
        /**
         * Optionally add a close button to alert and allow it to self dismisss.
         */
        dismissible: {
            type: Boolean,
            default: false,
            required: false,
        },
        /**
         * Set the alert variant to a solid.
         */
        variant: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return value === 'solid';
            },
        },
        /**
         * Toggle the visibility of alert component.
         */
        visible: {
            type: Boolean,
            default: true,
            required: false,
        },
    },
    emits: [
        /**
         * Event called before the dissmiss animation has started.
         */
        'dismiss',
    ],
    setup(props, { slots, emit }) {
        const visible = ref(props.visible);
        const handleDismiss = () => {
            visible.value = false;
            emit('dismiss');
        };
        return () => h$1(Transition, {
            name: 'fade',
            duration: 200,
            enterActiveClass: 'fade show',
            leaveActiveClass: 'fade',
        }, {
            default: () => visible.value &&
                h$1('div', {
                    class: [
                        'alert',
                        props.variant === 'solid'
                            ? `bg-${props.color} text-white`
                            : `alert-${props.color}`,
                        {
                            [`alert-${props.color}`]: props.color,
                            'alert-dismissible': props.dismissible,
                        },
                    ],
                }, [
                    slots.default && slots.default(),
                    props.dismissible &&
                        h$1(CCloseButton, {
                            onClick: () => {
                                handleDismiss();
                            },
                        }),
                ]),
        });
    },
});

const CAlertHeading = defineComponent({
    name: 'CAlertHeading',
    props: {
        /**
         * 	Component used for the root node. Either a string to use a HTML element or a component.
         */
        component: {
            type: String,
            default: 'h4',
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: 'alert-heading',
        }, slots);
    },
});

const CAlertLink = defineComponent({
    name: 'CAlertLink',
    setup(_, { slots }) {
        return () => h$1('a', {
            class: 'alert-link',
        }, slots);
    },
});

const CAlertPlugin = {
    install: (app) => {
        app.component(CAlert.name, CAlert);
        app.component(CAlertHeading.name, CAlertHeading);
        app.component(CAlertLink.name, CAlertLink);
    },
};

const CAvatar = defineComponent({
    name: 'CAvatar',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
         */
        color: Color,
        /**
         * Select the shape of the component.
         *
         * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
         */
        shape: Shape,
        /**
         * Size the component small, large, or extra large.
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['sm', 'md', 'lg', 'xl'].includes(value);
            },
        },
        /**
         * The src attribute for the img element.
         */
        src: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Sets the color context of the status indicator to one of CoreUI’s themed colors.
         *
         * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
         */
        status: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'dark',
                    'light',
                ].includes(value);
            },
        },
        /**
         * Sets the text color of the component to one of CoreUI’s themed colors.
         *
         * @value 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
         */
        textColor: TextColor,
    },
    setup(props, { slots }) {
        return () => h$1('div', {
            class: [
                'avatar',
                {
                    [`bg-${props.color}`]: props.color,
                    [`avatar-${props.size}`]: props.size,
                    [`text-${props.textColor}`]: props.textColor,
                },
                `${props.shape}`,
            ],
        }, [
            props.src
                ? h$1('img', { src: props.src, class: 'avatar-img' })
                : slots.default && slots.default(),
            props.status && h$1('span', { class: ['avatar-status', `bg-${props.status}`] }),
        ]);
    },
});

const CAvatarPlugin = {
    install: (app) => {
        app.component(CAvatar.name, CAvatar);
    },
};

const CBackdrop = defineComponent({
    name: 'CBackdrop',
    props: {
        /**
         * Toggle the visibility of modal component.
         */
        visible: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    setup(props) {
        const handleBeforeEnter = (el) => {
            el.classList.remove('d-none');
        };
        const handleEnter = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            setTimeout(() => {
                el.style.visibility = 'visible';
                el.classList.add('show');
            }, 1);
        };
        const handleLeave = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            el.classList.remove('show');
        };
        const handleAfterLeave = (el) => {
            el.classList.add('d-none');
        };
        return () => h$1(Transition, {
            onBeforeEnter: (el) => handleBeforeEnter(el),
            onEnter: (el, done) => handleEnter(el, done),
            onLeave: (el, done) => handleLeave(el, done),
            onAfterLeave: (el) => handleAfterLeave(el),
        }, () => props.visible &&
            h$1('div', {
                class: 'fade',
            }));
    },
});

const CBackdropPlugin = {
    install: (app) => {
        app.component(CBackdrop.name, CBackdrop);
    },
};

const CBadge = defineComponent({
    name: 'CBadge',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
         */
        color: Color,
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'span'
         */
        component: {
            type: String,
            required: false,
            default: 'span',
        },
        /**
         * Select the shape of the component.
         *
         * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
         */
        shape: Shape,
        /**
         * Size the component small.
         *
         * @type 'sm'
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return value === 'sm';
            },
        },
        /**
         * Sets the text color of the component to one of CoreUI’s themed colors.
         *
         * @value 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
         */
        textColor: TextColor,
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: [
                'badge',
                {
                    [`bg-${props.color}`]: props.color,
                    [`text-${props.textColor}`]: props.textColor,
                    [`badge-${props.size}`]: props.size,
                },
                props.shape,
            ],
        }, slots.default && slots.default());
    },
});

const CBadgePlugin = {
    install: (app) => {
        app.component(CBadge.name, CBadge);
    },
};

const CBreadcrumbItem = defineComponent({
    name: 'CBreadcrumbItem',
    props: {
        /**
         * Toggle the active state for the component.
         */
        active: {
            type: Boolean,
            required: false,
        },
        /**
         * The `href` attribute for the inner link component.
         */
        href: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1('li', {
            class: [
                'breadcrumb-item',
                {
                    active: props.active,
                },
            ],
            ...(props.active && { 'aria-current': 'page' }),
        }, props.href
            ? h$1('a', { href: props.href }, slots.default && slots.default())
            : slots.default && slots.default());
    },
});

const CBreadcrumb = defineComponent({
    name: 'CBreadcrumb',
    setup(_, { slots, attrs }) {
        return () => h$1('nav', {
            'aria-label': 'breadcrumb',
        }, h$1('ol', { class: ['breadcrumb', attrs.class] }, slots.default && slots.default()));
    },
});

const CBreadcrumbPlugin = {
    install: (app) => {
        app.component(CBreadcrumb.name, CBreadcrumb);
        app.component(CBreadcrumbItem.name, CBreadcrumbItem);
    },
};

const CButton = defineComponent({
    name: 'CButton',
    props: {
        /**
         * Toggle the active state for the component.
         */
        active: {
            type: Boolean,
            default: false,
            required: false,
        },
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         */
        color: Color,
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         */
        component: {
            type: String,
            default: 'button',
            required: false,
        },
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * The href attribute specifies the URL of the page the link goes to.
         */
        href: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Select the shape of the component.
         */
        shape: Shape,
        /**
         * Size the component small or large.
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['sm', 'lg'].includes(value);
            },
        },
        /**
         * Set the button variant to an outlined button or a ghost button.
         */
        variant: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['ghost', 'outline'].includes(value);
            },
        },
    },
    setup(props, { slots, attrs }) {
        return () => h$1(props.component, {
            ...attrs,
            class: [
                'btn',
                props.variant ? `btn-${props.variant}-${props.color}` : `btn-${props.color}`,
                {
                    [`btn-${props.size}`]: props.size,
                    active: props.active,
                    disabled: props.disabled,
                },
                props.shape,
            ],
            disabled: props.disabled && props.component !== 'a',
            ...(props.component === 'a' && props.disabled && { 'aria-disabled': true, tabIndex: -1 }),
        }, slots.default && slots.default());
    },
});

const CButtonPlugin = {
    install: (app) => {
        app.component(CButton.name, CButton);
    },
};

const CButtonToolbar = defineComponent({
    name: 'CButtonToolbar',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'btn-toolbar' }, slots.default && slots.default());
    },
});

const CButtonGroup = defineComponent({
    name: 'CButtonGroup',
    props: {
        /**
         * Size the component small or large.
         *
         * @type {'sm' | 'lg'}
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['sm', 'lg'].includes(value);
            },
        },
        /**
         * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
         */
        vertical: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1('div', {
            class: [
                props.vertical ? 'btn-group-vertical' : 'btn-group',
                { [`btn-group-${props.size}`]: props.size },
            ],
        }, slots.default && slots.default());
    },
});

const CButtonGroupPlugin = {
    install: (app) => {
        app.component(CButtonToolbar.name, CButtonToolbar);
        app.component(CButtonGroup.name, CButtonGroup);
    },
};

const CCallout = defineComponent({
    name: 'CCallout',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
         */
        color: Color,
    },
    setup(props, { slots }) {
        return () => h$1('div', {
            class: [
                'callout',
                {
                    [`callout-${props.color}`]: props.color,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CCalloutPlugin = {
    install: (app) => {
        app.component(CCallout.name, CCallout);
    },
};

const CCard = defineComponent({
    name: 'CCard',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
         */
        color: Color,
        /**
         * Sets the text color context of the component to one of CoreUI’s themed colors.
         *
         * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
         */
        textColor: TextColor,
    },
    setup(props, { slots }) {
        return () => h$1('div', {
            class: [
                'card',
                {
                    [`bg-${props.color}`]: props.color,
                    [`text-${props.textColor}`]: props.textColor,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CCardBody = defineComponent({
    name: 'CCardBody',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'card-body' }, slots.default && slots.default());
    },
});

const CCardFooter = defineComponent({
    name: 'CCardFooter',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'card-footer' }, slots.default && slots.default());
    },
});

const CCardGroup = defineComponent({
    name: 'CCardGroup',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'card-group' }, slots.default && slots.default());
    },
});

const CCardHeader = defineComponent({
    name: 'CCardHeader',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'div'
         */
        component: {
            type: String,
            required: false,
            default: 'div',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, { class: 'card-header' }, slots.default && slots.default());
    },
});

const CCardImage = defineComponent({
    name: 'CCardImage',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'img'
         */
        component: {
            type: String,
            required: false,
            default: 'img',
        },
        /**
         * Optionally orientate the image to the top, bottom, or make it overlaid across the card.
         */
        orientation: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['top', 'bottom'].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: [props.orientation ? `card-img-${props.orientation}` : 'card-img'],
        }, slots.default && slots.default());
    },
});

const CCardImageOverlay = defineComponent({
    name: 'CCardImageOverlay',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'card-img-overlay' }, slots.default && slots.default());
    },
});

const CLink = defineComponent({
    name: 'CLink',
    props: {
        /**
         * Toggle the active state for the component.
         */
        active: {
            type: Boolean,
            required: false,
        },
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         */
        component: {
            type: String,
            required: false,
            default: 'a',
        },
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * The href attribute specifies the URL of the page the link goes to.
         */
        href: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    emits: ['click'],
    setup(props, { slots, emit }) {
        const handleClick = () => {
            emit('click', props.href);
        };
        return () => h$1(props.component, {
            class: [{ active: props.active, disabled: props.disabled }],
            ...(props.active && { 'aria-current': 'page' }),
            ...(props.component === 'a' && props.disabled && { 'aria-disabled': true, tabIndex: -1 }),
            ...((props.component === 'a' || props.component === 'button') && {
                onClick: handleClick,
            }),
            href: props.href,
        }, slots.default && slots.default());
    },
});

const CCLinkPlugin = {
    install: (app) => {
        app.component(CLink.name, CLink);
    },
};

const CCardLink = defineComponent({
    name: 'CCardLink',
    props: {
        /**
         * The href attribute specifies the URL of the page the link goes to.
         */
        href: {
            type: String,
            default: '#',
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1(CLink, { class: 'card-link', href: props.href }, { default: () => slots.default && slots.default() });
    },
});

const CCardSubtitle = defineComponent({
    name: 'CCardSubtitle',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'h6'
         */
        component: {
            type: String,
            required: false,
            default: 'h6',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, { class: 'card-subtitle' }, slots.default && slots.default());
    },
});

const CCardText = defineComponent({
    name: 'CCardText',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'p'
         */
        component: {
            type: String,
            required: false,
            default: 'p',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, { class: 'card-text' }, slots.default && slots.default());
    },
});

const CCardTitle = defineComponent({
    name: 'CCardTitle',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'h5'
         */
        component: {
            type: String,
            required: false,
            default: 'h5',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, { class: 'card-title' }, slots.default && slots.default());
    },
});

const CCardPlugin = {
    install: (app) => {
        app.component(CCard.name, CCard);
        app.component(CCardBody.name, CCardBody);
        app.component(CCardFooter.name, CCardFooter);
        app.component(CCardGroup.name, CCardGroup);
        app.component(CCardHeader.name, CCardHeader);
        app.component(CCardImage.name, CCardImage);
        app.component(CCardImageOverlay.name, CCardImageOverlay);
        app.component(CCardLink.name, CCardLink);
        app.component(CCardSubtitle.name, CCardSubtitle);
        app.component(CCardText.name, CCardText);
        app.component(CCardTitle.name, CCardTitle);
    },
};

// TODO:
const CCarousel = defineComponent({
    name: 'CCarousel',
    props: {
        /**
         * Adding in the previous and next controls.
         */
        controls: Boolean,
        /**
         * Add darker controls, indicators, and captions.
         */
        dark: Boolean,
        /**
         * index of the active item.
         *
         * @default 0
         */
        index: {
            type: Number,
            default: 0,
            required: false,
        },
        /**
         * Adding indicators at the bottom of the carousel for each item.
         */
        indicators: Boolean,
        /**
         * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
         */
        interval: {
            type: [Boolean, Number],
            default: 5000,
            required: false,
        },
        /**
         * Adding indicators at the bottom of the carousel for each item.
         *
         * @values 'crossfade', 'slide'
         * @default 'slide'
         */
        transition: {
            type: String,
            default: 'slide',
            required: false,
            validator: (value) => {
                return ['crossfade', 'slide'].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        const timeout = ref();
        const pause = () => timeout.value && clearInterval(timeout.value);
        const cycle = () => {
            pause();
            if (typeof props.interval === 'number') {
                timeout.value = setInterval(() => nextItem(), props.interval);
            }
        };
        const state = reactive({
            items: [],
            active: props.index,
            direction: 'next',
        });
        onBeforeMount(() => {
            if (slots.default) {
                // @ts-expect-error TODO: fix types
                state.items = slots.default().filter((child) => child.type.name === 'CCarouselItem');
            }
        });
        const handleControlClick = (direction) => {
            state.direction = direction;
            if (direction === 'next') {
                state.active === state.items.length - 1 ? (state.active = 0) : state.active++;
            }
            else {
                state.active === 0 ? (state.active = state.items.length - 1) : state.active--;
            }
        };
        const nextItem = () => {
            handleControlClick('next');
        };
        const handleIndicatorClick = (index) => {
            if (state.active === index) {
                return;
            }
            if (state.active < index) {
                state.direction = 'next';
                state.active = index;
                return;
            }
            if (state.active > index) {
                state.direction = 'prev';
                state.active = index;
            }
        };
        cycle();
        return () => h$1('div', {
            class: [
                'carousel slide',
                props.transition === 'crossfade' && 'carousel-fade',
                props.dark && 'carousel-dark',
            ],
            onmouseover: () => pause(),
            onmouseleave: () => cycle(),
        }, [
            props.indicators &&
                h$1('div', {
                    class: 'carousel-indicators',
                }, state.items.map((_, index) => {
                    return h$1('button', {
                        type: 'button',
                        id: index,
                        'data-coreui-target': '',
                        ...(state.active === index && { class: 'active' }),
                        onClick: () => handleIndicatorClick(index),
                    });
                })),
            h$1('div', { class: 'carousel-inner' }, state.items.map((item, index) => {
                return h$1(item, {
                    active: state.active === index ? true : false,
                    direction: state.direction,
                });
            })),
            props.controls && [
                h$1('button', {
                    type: 'button',
                    class: 'carousel-control-prev',
                    'data-coreui-target': '',
                    onClick: () => handleControlClick('prev'),
                }, [
                    h$1('span', { class: 'carousel-control-prev-icon', ariaHidden: 'true' }),
                    h$1('span', { class: 'visually-hidden' }, 'Previous'),
                ]),
                h$1('button', {
                    type: 'button',
                    class: 'carousel-control-next',
                    'data-coreui-target': '',
                    onClick: () => handleControlClick('next'),
                }, [
                    h$1('span', { class: 'carousel-control-next-icon', ariaHidden: 'true' }),
                    h$1('span', { class: 'visually-hidden' }, 'Next'),
                ]),
            ],
        ]);
    },
});

const CCarouselCaption = defineComponent({
    name: 'CCarouselCaption',
    setup(_, { slots }) {
        return () => h$1('div', {
            class: 'carousel-caption',
        }, slots.default && slots.default());
    },
});

const CCarouselItem = defineComponent({
    name: 'CCarouselItem',
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        direction: {
            type: String,
            default: 'next',
            required: false,
        },
    },
    setup(props, { slots }) {
        const carouselItemRef = ref();
        const { active } = toRefs(props);
        const directionClassName = ref();
        const orderClassName = ref();
        const activeClassName = ref(active.value && 'active');
        watch(active, (active, prevActive) => {
            if (!prevActive && active) {
                orderClassName.value = `carousel-item-${props.direction}`;
            }
            setTimeout(() => {
                if (prevActive && !active) {
                    activeClassName.value = 'active';
                }
                directionClassName.value = `carousel-item-${props.direction === 'next' ? 'start' : 'end'}`;
            }, 1);
            carouselItemRef.value.addEventListener('transitionend', () => {
                if (active) {
                    directionClassName.value = '';
                    orderClassName.value = '';
                    activeClassName.value = 'active';
                }
                if (!active) {
                    directionClassName.value = '';
                    orderClassName.value = '';
                    activeClassName.value = '';
                }
            });
        });
        return () => h$1('div', {
            class: [
                'carousel-item',
                activeClassName.value,
                directionClassName.value,
                orderClassName.value,
            ],
            ref: carouselItemRef,
        }, slots.default && slots.default());
    },
});

const CCarouselPlugin = {
    install: (app) => {
        app.component(CCarousel.name, CCarousel);
        app.component(CCarouselCaption.name, CCarouselCaption);
        app.component(CCarouselItem.name, CCarouselItem);
    },
};

const CCloseButtonPlugin = {
    install: (app) => {
        app.component(CCloseButton.name, CCloseButton);
    },
};

const CCollapsePlugin = {
    install: (app) => {
        app.component(CCollapse.name, CCollapse);
    },
};

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var round$1 = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    // Fallback to 1 in case both values are `0`
    scaleX = rect.width / element.offsetWidth || 1;
    scaleY = rect.height / element.offsetHeight || 1;
  }

  return {
    width: round$1(rect.width / scaleX),
    height: round$1(rect.height / scaleY),
    top: round$1(rect.top / scaleY),
    right: round$1(rect.right / scaleX),
    bottom: round$1(rect.bottom / scaleY),
    left: round$1(rect.left / scaleX),
    x: round$1(rect.left / scaleX),
    y: round$1(rect.top / scaleY)
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle$1(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

const CDropdown = defineComponent({
    name: 'CDropdown',
    props: {
        /**
         * @values { 'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'} }
         */
        alignment: {
            type: [String, Object],
            default: undefined,
            required: false,
            validator: (value) => {
                if (value === 'start' || value === 'end') {
                    return true;
                }
                else {
                    if (typeof value.xs !== 'undefined' && (value.xs === 'start' || value.xs === 'end')) {
                        return true;
                    }
                    if (typeof value.sm !== 'undefined' && (value.sm === 'start' || value.sm === 'end')) {
                        return true;
                    }
                    if (typeof value.md !== 'undefined' && (value.md === 'start' || value.md === 'end')) {
                        return true;
                    }
                    if (typeof value.lg !== 'undefined' && (value.lg === 'start' || value.lg === 'end')) {
                        return true;
                    }
                    if (typeof value.xl !== 'undefined' && (value.xl === 'start' || value.xl === 'end')) {
                        return true;
                    }
                    if (typeof value.xxl !== 'undefined' && (value.xxl === 'start' || value.xxl === 'end')) {
                        return true;
                    }
                    return false;
                }
            },
        },
        /**
         * Enables pseudo element caret on toggler.
         *
         * @default true
         */
        caret: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * Sets a darker color scheme to match a dark navbar.
         */
        dark: {
            type: Boolean,
            required: false,
        },
        /**
         * Sets a specified  direction and location of the dropdown menu.
         *
         * @values 'dropup' | 'dropend' | 'dropstart'
         */
        direction: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['dropup', 'dropend', 'dropstart'].includes(value);
            },
        },
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
         *
         * @values 'auto' | 'top-end' | 'top' | 'top-start' | 'bottom-end' | 'bottom' | 'bottom-start' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left' | 'left-end'
         * @default 'bottom-start'
         */
        placement: {
            type: String,
            default: 'bottom-start',
            required: false,
        },
        /**
         * If you want to disable dynamic positioning set this property to `true`.
         */
        popper: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
         */
        trigger: {
            type: [String, Array],
            required: false,
            default: 'click',
        },
        /**
         * Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item.
         */
        variant: {
            type: String,
            default: 'btn-group',
            required: false,
            validator: (value) => {
                return ['btn-group', 'dropdown', 'input-group', 'nav-item'].includes(value);
            },
        },
        /**
         * Toggle the visibility of dropdown menu component.
         *
         * @default false
         */
        visible: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots }) {
        const dropdownRef = ref();
        const dropdownMenuRef = ref();
        const placement = ref(props.placement);
        const popper = ref();
        const config = reactive({
            alignment: props.alignment,
            dark: props.dark,
            popper: props.popper,
            visible: props.visible,
        });
        const { visible } = toRefs(config);
        provide('config', config);
        provide('variant', props.variant);
        provide('visible', visible);
        provide('dropdownRef', dropdownRef);
        provide('dropdownMenuRef', dropdownMenuRef);
        if (props.direction === 'dropup') {
            placement.value = 'top-start';
        }
        if (props.direction === 'dropend') {
            placement.value = 'right-start';
        }
        if (props.direction === 'dropstart') {
            placement.value = 'left-start';
        }
        if (props.alignment === 'end') {
            placement.value = 'bottom-end';
        }
        const initPopper = () => {
            // Disable popper if responsive aligment is set.
            if (typeof props.alignment === 'object') {
                return;
            }
            if (dropdownRef.value) {
                popper.value = createPopper(dropdownRef.value, dropdownMenuRef.value, {
                    placement: placement.value,
                });
            }
        };
        const destroyPopper = () => {
            if (popper.value) {
                popper.value.destroy();
            }
            popper.value = undefined;
        };
        // const togglePopper = () => {
        //   visible.value ? initPopper() : destroyPopper()
        // }
        const toggleMenu = function () {
            if (props.disabled === false) {
                if (visible.value === true) {
                    visible.value = false;
                }
                else {
                    visible.value = true;
                }
            }
        };
        provide('toggleMenu', toggleMenu);
        const hideMenu = function () {
            if (props.disabled === false) {
                visible.value = false;
            }
        };
        const handleKeyup = (event) => {
            if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
                hideMenu();
            }
        };
        const handleClickOutside = (event) => {
            if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
                hideMenu();
            }
        };
        onMounted(() => {
            window.addEventListener('click', handleClickOutside);
            window.addEventListener('keyup', handleKeyup);
        });
        onUnmounted(() => {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('keyup', handleKeyup);
        });
        watch(visible, () => props.popper && (visible.value ? initPopper() : destroyPopper()));
        return () => props.variant === 'input-group'
            ? [slots.default && slots.default()]
            : h$1('div', {
                class: [
                    props.variant === 'nav-item' ? 'nav-item dropdown' : props.variant,
                    props.direction,
                ],
            }, slots.default && slots.default());
    },
});

const CDropdownItem = defineComponent({
    name: 'CDropdownItem',
    props: {
        /**
         * Toggle the active state for the component.
         */
        active: {
            type: Boolean,
            required: false,
        },
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         */
        component: {
            type: String,
            default: 'a',
            required: false,
        },
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * The href attribute specifies the URL of the page the link goes to.
         */
        href: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1(CLink, {
            class: 'dropdown-item',
            active: props.active,
            component: props.component,
            disabled: props.disabled,
            href: props.href,
        }, {
            default: () => slots.default && slots.default(),
        });
    },
});

const CDropdownHeader = defineComponent({
    name: 'CDropdownHeader',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'h6'
         */
        component: {
            type: String,
            default: 'h6',
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: 'dropdown-header',
        }, slots.default && slots.default());
    },
});

const CDropdownDivider = defineComponent({
    name: 'CDropdownDivider',
    setup() {
        return () => h$1('hr', {
            class: 'dropdown-divider',
        });
    },
});

const CDropdownMenu = defineComponent({
    name: 'CDropdownMenu',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @values 'div', 'ul'
         */
        component: {
            type: String,
            default: 'div',
            required: false,
        },
    },
    setup(props, { slots }) {
        const dropdownMenuRef = inject('dropdownMenuRef');
        const config = inject('config');
        const { alignment, dark, popper, visible } = toRefs(config);
        // eslint-disable-next-line @typescript-eslint/ban-types
        const alignmentClassNames = (alignment) => {
            const classNames = [];
            if (typeof alignment === 'object') {
                Object.keys(alignment).map((key) => {
                    classNames.push(`dropdown-menu${key === 'xs' ? '' : `-${key}`}-${alignment[key]}`);
                });
            }
            if (typeof alignment === 'string') {
                classNames.push(`dropdown-menu-${alignment}`);
            }
            return classNames;
        };
        return () => h$1(props.component, {
            class: [
                'dropdown-menu',
                { 'dropdown-menu-dark': dark.value, show: visible.value },
                alignmentClassNames(alignment.value),
            ],
            ...((typeof alignment.value === 'object' || !popper.value) && {
                'data-coreui-popper': 'static',
            }),
            ref: dropdownMenuRef,
        }, props.component === 'ul'
            ? slots.default && slots.default().map((vnode) => h$1('li', {}, vnode))
            : slots.default && slots.default());
    },
});

const CDropdownToggle = defineComponent({
    name: 'CDropdownToggle',
    props: {
        /**
         * Toggle the active state for the component.
         */
        active: {
            type: Boolean,
            default: false,
            required: false,
        },
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
         */
        color: Color,
        /**
         * Enables pseudo element caret on toggler.
         *
         * @default true
         */
        caret: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         */
        component: {
            type: String,
            default: 'button',
            require: false,
        },
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * Select the shape of the component.
         */
        shape: Shape,
        /**
         * Size the component small or large.
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['sm', 'lg'].includes(value);
            },
        },
        /**
         * Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret.
         */
        split: {
            type: Boolean,
            required: false,
        },
        /**
         * Set the button variant to an outlined button or a ghost button.
         */
        variant: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['ghost', 'outline'].includes(value);
            },
        },
        togglerVariant: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, { slots }) {
        const dropdownRef = inject('dropdownRef');
        const dropdownVariant = inject('variant');
        const visible = inject('visible');
        const toggleMenu = inject('toggleMenu');
        const className = [
            {
                'dropdown-toggle': props.caret,
                'dropdown-toggle-split': props.split,
                show: visible,
                active: props.active,
                disabled: props.disabled,
            },
        ];
        const buttonClassName = [
            'btn',
            props.variant ? `btn-${props.variant}-${props.color}` : `btn-${props.color}`,
            {
                [`btn-${props.size}`]: props.size,
            },
            props.shape,
        ];
        return () => dropdownVariant === 'nav-item'
            ? h$1('a', {
                active: props.active,
                class: ['nav-link', className],
                disabled: props.disabled,
                href: '#',
                onClick: (event) => {
                    event.preventDefault();
                    return toggleMenu();
                },
                ref: dropdownRef,
            }, { default: () => slots.default && slots.default() })
            : h$1(
            // TODO: check how to use CButton component
            props.component, {
                class: [...className, ...buttonClassName],
                active: props.active,
                disabled: props.disabled,
                onClick: () => toggleMenu(),
                ref: dropdownRef,
            }, {
                default: () => props.split
                    ? h$1('span', { class: 'visually-hidden' }, 'Toggle Dropdown')
                    : slots.default && slots.default(),
            });
    },
});

const CDropdownPlugin = {
    install: (app) => {
        app.component(CDropdown.name, CDropdown);
        app.component(CDropdownItem.name, CDropdownItem);
        app.component(CDropdownHeader.name, CDropdownHeader);
        app.component(CDropdownDivider.name, CDropdownDivider);
        app.component(CDropdownMenu.name, CDropdownMenu);
        app.component(CDropdownToggle.name, CDropdownToggle);
    },
};

const CFooter = defineComponent({
    name: 'CFooter',
    props: {
        /**
         * Place footer in non-static positions.
         */
        position: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['fixed', 'sticky'].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1('div', { class: ['footer', { [`footer-${props.position}`]: props.position }] }, slots.default && slots.default());
    },
});

const CFooterPlugin = {
    install: (app) => {
        app.component(CFooter.name, CFooter);
    },
};

const CForm = defineComponent({
    name: 'CForm',
    props: {
        /**
         * Mark a form as validated. If you set it `true`, all validation styles will be applied to the forms component.
         */
        validated: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1('form', { class: [{ ['was-validated']: props.validated }] }, slots.default && slots.default());
    },
});

function e(){return (e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e}).apply(this,arguments)}function t(e,t){if(null==e)return {};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}function r(e){return "[object Object]"===Object.prototype.toString.call(e)}const n={silent:!1},o=["validator"],i=Object.prototype,a=i.toString,s=i.hasOwnProperty,u=/^\s*function (\w+)/;function l(e){var t;const r=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(r){const e=r.toString().match(u);return e?e[1]:""}return ""}const c=function(e){var t,n;return !1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))},f=e=>e;let d=f;if("production"!==process.env.NODE_ENV){const e="undefined"!=typeof console;d=e?function(e){!1===n.silent&&console.warn(`[VueTypes warn]: ${e}`);}:f;}const p=(e,t)=>s.call(e,t),y=Number.isInteger||function(e){return "number"==typeof e&&isFinite(e)&&Math.floor(e)===e},v=Array.isArray||function(e){return "[object Array]"===a.call(e)},h=e=>"[object Function]"===a.call(e),b=e=>c(e)&&p(e,"_vueTypes_name"),g=e=>c(e)&&(p(e,"type")||["_vueTypes_name","validator","default","required"].some(t=>p(e,t)));function O(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function m(e,t,r=!1){let n,o=!0,i="";n=c(e)?e:{type:e};const a=b(n)?n._vueTypes_name+" - ":"";if(g(n)&&null!==n.type){if(void 0===n.type||!0===n.type)return o;if(!n.required&&void 0===t)return o;v(n.type)?(o=n.type.some(e=>!0===m(e,t,!0)),i=n.type.map(e=>l(e)).join(" or ")):(i=l(n),o="Array"===i?v(t):"Object"===i?c(t):"String"===i||"Number"===i||"Boolean"===i||"Function"===i?function(e){if(null==e)return "";const t=e.constructor.toString().match(u);return t?t[1]:""}(t)===i:t instanceof n.type);}if(!o){const e=`${a}value "${t}" should be of type "${i}"`;return !1===r?(d(e),!1):e}if(p(n,"validator")&&h(n.validator)){const e=d,i=[];if(d=e=>{i.push(e);},o=n.validator(t),d=e,!o){const e=(i.length>1?"* ":"")+i.join("\n* ");return i.length=0,!1===r?(d(e),o):e}}return o}function j(e,t){const r=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(e){return void 0===e?(p(this,"default")&&delete this.default,this):h(e)||!0===m(this,e,!0)?(this.default=v(e)?()=>[...e]:c(e)?()=>Object.assign({},e):e,this):(d(`${this._vueTypes_name} - invalid default value: "${e}"`),this)}}}),{validator:n}=r;return h(n)&&(r.validator=O(n,r)),r}function _(e,t){const r=j(e,t);return Object.defineProperty(r,"validate",{value(e){return h(this.validator)&&d(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:\n${JSON.stringify(this)}`),this.validator=O(e,this),this}})}function T(e,r,n){const i=function(e){const t={};return Object.getOwnPropertyNames(e).forEach(r=>{t[r]=Object.getOwnPropertyDescriptor(e,r);}),Object.defineProperties({},t)}(r);if(i._vueTypes_name=e,!c(n))return i;const{validator:a}=n,s=t(n,o);if(h(a)){let{validator:e}=i;e&&(e=null!==(l=(u=e).__original)&&void 0!==l?l:u),i.validator=O(e?function(t){return e.call(this,t)&&a.call(this,t)}:a,i);}var u,l;return Object.assign(i,s)}function $(e){return e.replace(/^(?!\s*$)/gm,"  ")}const w=()=>_("any",{}),P=()=>_("function",{type:Function}),x=()=>_("boolean",{type:Boolean}),E=()=>_("string",{type:String}),N=()=>_("number",{type:Number}),q=()=>_("array",{type:Array}),A=()=>_("object",{type:Object}),S=()=>j("integer",{type:Number,validator:e=>y(e)}),V=()=>j("symbol",{validator:e=>"symbol"==typeof e});function k(e,t="custom validation failed"){if("function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return j(e.name||"<<anonymous function>>",{validator(r){const n=e(r);return n||d(`${this._vueTypes_name} - ${t}`),n}})}function D(e){if(!v(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const t=`oneOf - value should be one of "${e.join('", "')}".`,r=e.reduce((e,t)=>{if(null!=t){const r=t.constructor;-1===e.indexOf(r)&&e.push(r);}return e},[]);return j("oneOf",{type:r.length>0?r:void 0,validator(r){const n=-1!==e.indexOf(r);return n||d(t),n}})}function F(e){if(!v(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");let t=!1,r=[];for(let n=0;n<e.length;n+=1){const o=e[n];if(g(o)){if(b(o)&&"oneOf"===o._vueTypes_name&&o.type){r=r.concat(o.type);continue}if(h(o.validator)&&(t=!0),!0!==o.type&&o.type){r=r.concat(o.type);continue}}r.push(o);}return r=r.filter((e,t)=>r.indexOf(e)===t),j("oneOfType",t?{type:r,validator(t){const r=[],n=e.some(e=>{const n=m(b(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return "string"==typeof n&&r.push(n),!0===n});return n||d(`oneOfType - provided value does not match any of the ${r.length} passed-in validators:\n${$(r.join("\n"))}`),n}}:{type:r})}function L(e){return j("arrayOf",{type:Array,validator(t){let r="";const n=t.every(t=>(r=m(e,t,!0),!0===r));return n||d(`arrayOf - value validation error:\n${$(r)}`),n}})}function Y(e){return j("instanceOf",{type:e})}function B(e){return j("objectOf",{type:Object,validator(t){let r="";const n=Object.keys(t).every(n=>(r=m(e,t[n],!0),!0===r));return n||d(`objectOf - value validation error:\n${$(r)}`),n}})}function I(e){const t=Object.keys(e),r=t.filter(t=>{var r;return !(null===(r=e[t])||void 0===r||!r.required)}),n=j("shape",{type:Object,validator(n){if(!c(n))return !1;const o=Object.keys(n);if(r.length>0&&r.some(e=>-1===o.indexOf(e))){const e=r.filter(e=>-1===o.indexOf(e));return d(1===e.length?`shape - required property "${e[0]}" is not defined.`:`shape - required properties "${e.join('", "')}" are not defined.`),!1}return o.every(r=>{if(-1===t.indexOf(r))return !0===this._vueTypes_isLoose||(d(`shape - shape definition does not include a "${r}" property. Allowed keys: "${t.join('", "')}".`),!1);const o=m(e[r],n[r],!0);return "string"==typeof o&&d(`shape - "${r}" property validation error:\n ${$(o)}`),!0===o})}});return Object.defineProperty(n,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(n,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),n}const J=["name","validate","getter"],M=(()=>{var e,r;return r=e=class{static get any(){return w()}static get func(){return P().def(this.defaults.func)}static get bool(){return x().def(this.defaults.bool)}static get string(){return E().def(this.defaults.string)}static get number(){return N().def(this.defaults.number)}static get array(){return q().def(this.defaults.array)}static get object(){return A().def(this.defaults.object)}static get integer(){return S().def(this.defaults.integer)}static get symbol(){return V()}static extend(e){if(v(e))return e.forEach(e=>this.extend(e)),this;const{name:r,validate:n=!1,getter:o=!1}=e,i=t(e,J);if(p(this,r))throw new TypeError(`[VueTypes error]: Type "${r}" already defined`);const{type:a}=i;if(b(a))return delete i.type,Object.defineProperty(this,r,o?{get:()=>T(r,a,i)}:{value(...e){const t=T(r,a,i);return t.validator&&(t.validator=t.validator.bind(t,...e)),t}});let s;return s=o?{get(){const e=Object.assign({},i);return n?_(r,e):j(r,e)},enumerable:!0}:{value(...e){const t=Object.assign({},i);let o;return o=n?_(r,t):j(r,t),t.validator&&(o.validator=t.validator.bind(o,...e)),o},enumerable:!0},Object.defineProperty(this,r,s)}},e.defaults={},e.sensibleDefaults=void 0,e.config=n,e.custom=k,e.oneOf=D,e.instanceOf=Y,e.oneOfType=F,e.arrayOf=L,e.objectOf=B,e.shape=I,e.utils={validate:(e,t)=>!0===m(t,e,!0),toType:(e,t,r=!1)=>r?_(e,t):j(e,t)},r})();function R(t={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var r,n;return n=r=class extends M{static get sensibleDefaults(){return e({},this.defaults)}static set sensibleDefaults(r){this.defaults=!1!==r?e({},!0!==r?r:t):{};}},r.defaults=e({},t),n}class z extends(R()){}

const CFormLabel = defineComponent({
    name: 'CFormLabel',
    props: {
        /**
         * A string of all className you want to be applied to the component, and override standard className value.
         */
        customClassName: {
            type: [Array, String],
            default: undefined,
            required: false,
        },
    },
    setup(props, { attrs, slots }) {
        return () => h$1('label', {
            ...attrs,
            class: props.customClassName ? props.customClassName : 'form-label',
        }, slots.default && slots.default());
    },
});

const CFormCheck = defineComponent({
    name: 'CFormCheck',
    props: {
        /**
         * Create button-like checkboxes and radio buttons.
         */
        button: I({
            /**
             * Sets the color context of the component to one of CoreUI’s themed colors.
             *
             * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
             */
            color: Color,
            /**
             * Select the shape of the component.
             *
             * @values 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
             */
            shape: Shape,
            /**
             * Size the component small or large.
             *
             * @values 'sm' | 'lg'
             */
            size: {
                type: String,
                default: undefined,
                required: false,
                validator: (value) => {
                    return ['sm', 'lg'].includes(value);
                },
            },
            /**
             * Set the button variant to an outlined button or a ghost button.
             */
            variant: {
                type: String,
                default: undefined,
                required: false,
                validator: (value) => {
                    return ['outline', 'ghost'].includes(value);
                },
            },
        }),
        /**
         * The id global attribute defines an identifier (ID) that must be unique in the whole document.
         */
        id: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Group checkboxes or radios on the same horizontal row by adding.
         */
        inline: {
            type: Boolean,
            required: false,
        },
        /**
         * Set component validation state to invalid.
         */
        invalid: {
            type: Boolean,
            required: false,
        },
        /**
         * The element represents a caption for a component.
         */
        label: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Specifies the type of component.
         *
         * @values 'checkbox', 'radio'
         * @default 'checkbox'
         */
        type: {
            type: String,
            default: 'checkbox',
            required: false,
        },
        /**
         * Set component validation state to valid.
         */
        valid: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots, attrs }) {
        const formControl = () => {
            return h$1('input', {
                ...attrs,
                class: [
                    props.button ? 'btn-check' : 'form-check-input',
                    {
                        'is-invalid': props.invalid,
                        'is-valid': props.valid,
                    },
                ],
                id: props.id,
                type: props.type,
            });
        };
        const formLabel = () => {
            return h$1(CFormLabel, {
                customClassName: props.button
                    ? [
                        'btn',
                        props.button.variant
                            ? `btn-${props.button.variant}-${props.button.color}`
                            : `btn-${props.button.color}`,
                        {
                            [`btn-${props.button.size}`]: props.button.size,
                        },
                        `${props.button.shape}`,
                    ]
                    : 'form-check-label',
                ...(props.id && { for: props.id }),
            }, {
                default: () => (slots.label && slots.label()) || props.label,
            });
        };
        return () => props.button
            ? [formControl(), (slots.label || props.label) && formLabel()]
            : props.label
                ? h$1('div', {
                    class: [
                        'form-check',
                        {
                            'form-check-inline': props.inline,
                            'is-invalid': props.invalid,
                            'is-valid': props.valid,
                        },
                    ],
                }, [formControl(), props.label && formLabel()])
                : formControl();
    },
});

const CFormFeedback = defineComponent({
    name: 'CFormFeedback',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'div'
         */
        component: {
            type: String,
            required: false,
            default: 'div',
        },
        /**
         * Method called immediately after the `value` prop changes.
         */
        invalid: Boolean,
        /**
         * If your form layout allows it, you can display validation feedback in a styled tooltip.
         */
        tooltip: Boolean,
        /**
         * Set component validation state to valid.
         */
        valid: Boolean,
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: [
                {
                    [`invalid-${props.tooltip ? 'tooltip' : 'feedback'}`]: props.invalid,
                    [`valid-${props.tooltip ? 'tooltip' : 'feedback'}`]: props.valid,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CFormFloating = defineComponent({
    name: 'CFormFloating',
    setup(_, { slots }) {
        return () => h$1('div', {
            class: 'form-floating',
        }, slots.default && slots.default());
    },
});

const CFormInput = defineComponent({
    name: 'CFormInput',
    props: {
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * Set component validation state to invalid.
         */
        invalid: {
            type: Boolean,
            required: false,
        },
        /**
         * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`.
         */
        plainText: {
            type: Boolean,
            required: false,
        },
        /**
         * Toggle the readonly state for the component.
         */
        readonly: {
            type: Boolean,
            required: false,
        },
        /**
         * Size the component small or large.
         *
         * @values 'sm' | 'lg'
         */
        size: {
            type: String,
            default: undefined,
            require: false,
            validator: (value) => {
                return ['sm', 'lg'].includes(value);
            },
        },
        /**
         * Specifies the type of component.
         *
         * @values 'color' | 'file' | 'text' | string
         * @default 'text'
         */
        type: {
            type: String,
            default: 'text',
            require: false,
        },
        /**
         * Set component validation state to valid.
         */
        valid: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { attrs, slots }) {
        return () => h$1('input', {
            type: props.type,
            ...attrs,
            class: [
                props.plainText ? 'form-control-plaintext' : 'form-control',
                {
                    'form-control-color': props.type === 'color',
                    [`form-control-${props.size}`]: props.size,
                    'is-invalid': props.invalid,
                    'is-valid': props.valid,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CFormRange = defineComponent({
    name: 'CFormRange',
    props: {
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            default: undefined,
            required: false,
        },
        /**
         * Specifies the maximum value for the component.
         */
        max: {
            type: Number,
            default: undefined,
            required: false,
        },
        /**
         * Specifies the minimum value for the component.
         */
        min: {
            type: Number,
            default: undefined,
            required: false,
        },
        //  /**
        //   * Method called immediately after the `value` prop changes.
        //   */
        //  onChange?: ChangeEventHandler<HTMLInputElement>
        /**
         * Toggle the readonly state for the component.
         */
        readonly: {
            type: Boolean,
            required: false,
        },
        /**
         * Specifies the interval between legal numbers in the component.
         */
        steps: {
            type: Number,
            default: undefined,
            required: false,
        },
        /**
         * The `value` attribute of component.
         *
         * @controllable onChange
         * */
        value: {
            type: Number,
            default: undefined,
            required: false,
        },
    },
    setup(props, { attrs, slots }) {
        return () => h$1('input', {
            class: 'form-range',
            type: 'range',
            ...attrs,
            ...props,
        }, slots.default && slots.default());
    },
});

const CFormSelect = defineComponent({
    name: 'CFormSelect',
    props: {
        /**
         * Specifies the number of visible options in a drop-down list.
         */
        htmlSize: {
            type: Number,
            default: undefined,
            required: false,
        },
        /**
         * Set component validation state to invalid.
         */
        invalid: {
            type: Boolean,
            required: false,
        },
        /**
         * Size the component small or large.
         *
         * @values 'sm' | 'lg'
         */
        size: {
            type: String,
            default: undefined,
            require: false,
            validator: (value) => {
                return ['sm', 'lg'].includes(value);
            },
        },
        /**
         * Set component validation state to valid.
         */
        valid: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { attrs, slots }) {
        return () => h$1('select', {
            ...attrs,
            class: [
                'form-select',
                {
                    [`form-select-${props.size}`]: props.size,
                },
            ],
            size: props.htmlSize,
        }, slots.default && slots.default());
    },
});

const CFormSwitch = defineComponent({
    name: 'CFormSwitch',
    props: {
        /**
         * The id global attribute defines an identifier (ID) that must be unique in the whole document
         */
        id: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Set component validation state to invalid.
         */
        invalid: {
            type: Boolean,
            required: false,
        },
        /**
         * The element represents a caption for a component.
         */
        label: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Size the component large or extra large. Works only with `switch`.
         *
         * @values 'lg' | 'xl'
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['lg', 'xl'].includes(value);
            },
        },
        /**
         * Specifies the type of component.
         *
         * @values 'checkbox', 'radio'
         * @default 'checkbox'
         */
        type: {
            type: String,
            default: 'checkbox',
            required: false,
        },
        /**
         * Set component validation state to valid.
         */
        valid: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { attrs }) {
        return () => h$1('div', {
            class: [
                'form-check form-switch',
                {
                    [`form-switch-${props.size}`]: props.size,
                    'is-invalid': props.invalid,
                    'is-valid': props.valid,
                },
            ],
        }, [
            h$1('input', {
                ...attrs,
                id: props.id,
                type: props.type,
                class: [
                    'form-check-input',
                    {
                        'is-invalid': props.invalid,
                        'is-valid': props.valid,
                    },
                ],
            }),
            props.label &&
                h$1(CFormLabel, {
                    ...(props.id && { for: props.id }),
                    class: 'form-check-label',
                }, {
                    default: () => props.label,
                }),
        ]);
    },
});

const CFormText = defineComponent({
    name: 'CFormText',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'div'
         */
        component: {
            type: String,
            required: false,
            default: 'div',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, { class: 'form-text' }, slots.default && slots.default());
    },
});

const CFormTextarea = defineComponent({
    name: 'CFormTextarea',
    props: {
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * Set component validation state to invalid.
         */
        invalid: {
            type: Boolean,
            required: false,
        },
        /**
         * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`.
         */
        plainText: {
            type: Boolean,
            required: false,
        },
        /**
         * Toggle the readonly state for the component.
         */
        readonly: {
            type: Boolean,
            required: false,
        },
        /**
         * Set component validation state to valid.
         */
        valid: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { attrs, slots }) {
        return () => h$1('textarea', {
            ...attrs,
            class: [
                props.plainText ? 'form-control-plaintext' : 'form-control',
                {
                    'is-invalid': props.invalid,
                    'is-valid': props.valid,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CInputGroup = defineComponent({
    name: 'CInputGroup',
    props: {
        /**
         * Size the component small or large.
         *
         * @type 'sm' | 'lg'
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['sm', 'lg'].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1('div', {
            class: [
                'input-group',
                {
                    [`input-group-${props.size}`]: props.size,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CInputGroupText = defineComponent({
    name: 'CInputGroupText',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'span'
         */
        component: {
            type: String,
            required: false,
            default: 'span',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, { class: 'input-group-text' }, slots.default && slots.default());
    },
});

const CFormPlugin = {
    install: (app) => {
        app.component(CForm.name, CForm);
        app.component(CFormCheck.name, CFormCheck);
        // app.component(CFormControl.name, CFormControl)
        app.component(CFormFeedback.name, CFormFeedback);
        app.component(CFormFloating.name, CFormFloating);
        app.component(CFormInput.name, CFormInput);
        app.component(CFormLabel.name, CFormLabel);
        app.component(CFormRange.name, CFormRange);
        app.component(CFormSelect.name, CFormSelect);
        app.component(CFormSwitch.name, CFormSwitch);
        app.component(CFormText.name, CFormText);
        app.component(CFormTextarea.name, CFormTextarea);
        app.component(CInputGroup.name, CInputGroup);
        app.component(CInputGroupText.name, CInputGroupText);
    },
};

const BREAKPOINTS$2 = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
];
const CCol = defineComponent({
    name: 'CCol',
    props: {
        /**
         * The number of columns/offset/order on extra small devices (<576px).
         *
         * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
         */
        xs: {
            type: [Boolean, Number, String, Object],
            default: undefined,
            require: false,
        },
        /**
         * The number of columns/offset/order on small devices (<768px).
         *
         * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
         */
        sm: {
            type: [Boolean, Number, String, Object],
            default: undefined,
            require: false,
        },
        /**
         * The number of columns/offset/order on medium devices (<992px).
         *
         * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
         */
        md: {
            type: [Boolean, Number, String, Object],
            default: undefined,
            require: false,
        },
        /**
         * The number of columns/offset/order on large devices (<1200px).
         *
         * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
         */
        lg: {
            type: [Boolean, Number, String, Object],
            default: undefined,
            require: false,
        },
        /**
         * The number of columns/offset/order on X-Large devices (<1400px).
         *
         * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
         */
        xl: {
            type: [Boolean, Number, String, Object],
            default: undefined,
            require: false,
        },
        /**
         * The number of columns/offset/order on XX-Large devices (≥1400px).
         *
         * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
         */
        xxl: {
            type: [Boolean, Number, String, Object],
            default: undefined,
            require: false,
        },
    },
    setup(props, { slots }) {
        const repsonsiveCLassNames = [];
        BREAKPOINTS$2.forEach((bp) => {
            const breakpoint = props[bp];
            const infix = bp === 'xs' ? '' : `-${bp}`;
            if (breakpoint) {
                if (typeof breakpoint === 'number' || typeof breakpoint === 'string') {
                    repsonsiveCLassNames.push(`col${infix}-${breakpoint}`);
                }
                if (typeof breakpoint === 'boolean') {
                    repsonsiveCLassNames.push(`col${infix}`);
                }
            }
            if (breakpoint && typeof breakpoint === 'object') {
                if (typeof breakpoint.span === 'number' || typeof breakpoint.span === 'string') {
                    repsonsiveCLassNames.push(`col${infix}-${breakpoint.span}`);
                }
                if (typeof breakpoint.span === 'boolean') {
                    repsonsiveCLassNames.push(`col${infix}`);
                }
                if (typeof breakpoint.order === 'number' || typeof breakpoint.order === 'string') {
                    repsonsiveCLassNames.push(`order${infix}-${breakpoint.order}`);
                }
                if (typeof breakpoint.offset === 'number') {
                    repsonsiveCLassNames.push(`offset${infix}-${breakpoint.offset}`);
                }
            }
        });
        return () => h$1('div', {
            class: [repsonsiveCLassNames.length ? repsonsiveCLassNames : 'col'],
        }, slots.default && slots.default());
    },
});

const BREAKPOINTS$1 = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'fluid',
];
const CContainer = defineComponent({
    name: 'CContainer',
    props: {
        /**
         * Set container 100% wide until small breakpoint.
         */
        sm: {
            type: Boolean,
            required: false,
        },
        /**
         * Set container 100% wide until medium breakpoint.
         */
        md: {
            type: Boolean,
            required: false,
        },
        /**
         * Set container 100% wide until large breakpoint.
         */
        lg: {
            type: Boolean,
            required: false,
        },
        /**
         * Set container 100% wide until X-large breakpoint.
         */
        xl: {
            type: Boolean,
            required: false,
        },
        /**
         * Set container 100% wide until XX-large breakpoint.
         */
        xxl: {
            type: Boolean,
            required: false,
        },
        /**
         * Set container 100% wide, spanning the entire width of the viewport.
         */
        fluid: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots }) {
        const repsonsiveCLassNames = [];
        BREAKPOINTS$1.forEach((bp) => {
            const breakpoint = props[bp];
            breakpoint && repsonsiveCLassNames.push(`container-${bp}`);
        });
        return () => h$1('div', {
            class: [repsonsiveCLassNames.length ? repsonsiveCLassNames : 'container'],
        }, slots.default && slots.default());
    },
});

const BREAKPOINTS = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
];
const CRow = defineComponent({
    name: 'CRow',
    props: {
        /**
         * The number of columns/offset/order on extra small devices (<576px).
         *
         * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
         */
        xs: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * The number of columns/offset/order on small devices (<768px).
         *
         * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
         */
        sm: {
            type: Object,
            default: undefined,
            required: false,
            /**
             * The number of columns/offset/order on medium devices (<992px).
             *
             * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
             */
        },
        md: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * The number of columns/offset/order on large devices (<1200px).
         *
         * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
         */
        lg: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * The number of columns/offset/order on X-Large devices (<1400px).
         *
         * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
         */
        xl: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * The number of columns/offset/order on XX-Large devices (≥1400px).
         *
         * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
         */
        xxl: {
            type: Object,
            default: undefined,
            required: false,
        },
    },
    setup(props, { slots }) {
        const repsonsiveCLassNames = [];
        BREAKPOINTS.forEach((bp) => {
            const breakpoint = props[bp];
            const infix = bp === 'xs' ? '' : `-${bp}`;
            if (typeof breakpoint === 'object') {
                if (breakpoint.cols) {
                    repsonsiveCLassNames.push(`row-cols${infix}-${breakpoint.cols}`);
                }
                if (typeof breakpoint.gutter === 'number') {
                    repsonsiveCLassNames.push(`g${infix}-${breakpoint.gutter}`);
                }
                if (typeof breakpoint.gutterX === 'number') {
                    repsonsiveCLassNames.push(`gx${infix}-${breakpoint.gutterX}`);
                }
                if (typeof breakpoint.gutterY === 'number') {
                    repsonsiveCLassNames.push(`gy${infix}-${breakpoint.gutterY}`);
                }
            }
        });
        return () => h$1('div', {
            class: ['row', repsonsiveCLassNames],
        }, slots.default && slots.default());
    },
});

const CGridPlugin = {
    install: (app) => {
        app.component(CCol.name, CCol);
        app.component(CContainer.name, CContainer);
        app.component(CRow.name, CRow);
    },
};

const CHeader = defineComponent({
    name: 'CHeader',
    props: {
        /**
         * Defines optional container wrapping children elements.
         *
         * @values boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'
         */
        container: {
            type: [Boolean, String],
            default: undefined,
            required: false,
            validator: (value) => {
                return (typeof value === 'boolean' || ['sm', 'md', 'lg', 'xl', 'xxl', 'fluid'].includes(value));
            },
        },
        /**
         * Place header in non-static positions.
         */
        position: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['fixed', 'sticky'].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1('div', { class: ['header', { [`header-${props.position}`]: props.position }] }, props.container
            ? h$1('div', { class: `container${props.container !== true ? '-' + props.container : ''}` }, slots.default && slots.default())
            : slots.default && slots.default());
    },
});

const CHeaderBrand = defineComponent({
    name: 'CHeaderBrand',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'a'
         */
        component: {
            type: String,
            required: false,
            default: 'a',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, { class: 'header-brand' }, slots.default && slots.default());
    },
});

const CHeaderDivider = defineComponent({
    name: 'CHeaderDivider',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'header-divider' }, slots.default && slots.default());
    },
});

const CHeaderNav = defineComponent({
    name: 'CHeaderNav',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'ul'
         */
        component: {
            type: String,
            required: false,
            default: 'ul',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: 'header-nav',
            role: 'navigation',
        }, slots.default && slots.default());
    },
});

const CHeaderText = defineComponent({
    name: 'CHeaderText',
    setup(_, { slots }) {
        return () => h$1('span', { class: 'header-text' }, slots.default && slots.default());
    },
});

const CHeaderToggler = defineComponent({
    name: 'CHeaderToggler',
    setup(_, { slots }) {
        return () => h$1('button', {
            class: 'header-toggler',
            type: 'button',
            'aria-label': 'Toggle navigation',
        }, slots.default ? slots.default() : h$1('span', { class: ['header-toggler-icon'] }));
    },
});

const CHeaderPlugin = {
    install: (app) => {
        app.component(CHeader.name, CHeader);
        app.component(CHeaderBrand.name, CHeaderBrand);
        app.component(CHeaderDivider.name, CHeaderDivider);
        app.component(CHeaderNav.name, CHeaderNav);
        app.component(CHeaderText.name, CHeaderText);
        app.component(CHeaderToggler.name, CHeaderToggler);
    },
};

const CImage = defineComponent({
    name: 'CImage',
    props: {
        /**
         * Set the horizontal aligment.
         *
         * @values 'start', 'center', 'end'
         */
        align: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['start', 'center', 'end'].includes(value);
            },
        },
        /**
         * Make image responsive.
         */
        fluid: {
            type: Boolean,
            required: false,
        },
        /**
         * Make image rounded.
         */
        rounded: {
            type: Boolean,
            required: false,
        },
        /**
         * Give an image a rounded 1px border appearance.
         */
        thumbnail: {
            type: Boolean,
            required: false,
        },
    },
    setup(props) {
        return () => h$1('img', {
            class: [
                {
                    [`float-${props.align}`]: props.align && (props.align === 'start' || props.align === 'end'),
                    'd-block mx-auto': props.align && props.align === 'center',
                    'img-fluid': props.fluid,
                    rounded: props.rounded,
                    'img-thumbnail': props.thumbnail,
                },
            ],
        });
    },
});

const CImagePlugin = {
    install: (app) => {
        app.component(CImage.name, CImage);
    },
};

const CListGroup = defineComponent({
    name: 'CListGroup',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'ul'
         */
        component: {
            type: String,
            required: false,
            default: 'ul',
        },
        /**
         * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`)
         */
        flush: {
            type: Boolean,
            required: false,
        },
        /**
         * Specify a layout type.
         *
         * @value 'horizontal', 'horizontal-sm', 'horizontal-md', 'horizontal-lg', 'horizontal-xl', 'horizontal-xxl',
         */
        layout: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return [
                    'horizontal',
                    'horizontal-sm',
                    'horizontal-md',
                    'horizontal-lg',
                    'horizontal-xl',
                    'horizontal-xxl',
                ].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: [
                'list-group',
                {
                    'list-group-flush': props.flush,
                    [`list-group-${props.layout}`]: props.layout,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CListGroupItem = defineComponent({
    name: 'CListGroupItem',
    props: {
        /**
         * Toggle the active state for the component.
         */
        active: {
            type: Boolean,
            required: false,
        },
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'li'
         */
        component: {
            type: String,
            required: false,
            default: 'li',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: [
                'list-group-item',
                {
                    [`list-group-item-${props.color}`]: props.color,
                    'list-group-item-action': props.component === 'a' || props.component === 'button',
                    [`active`]: props.active,
                    [`disabled`]: props.disabled,
                },
            ],
            ...((props.component === 'a' || props.component === 'button') && {
                active: props.active,
                disabled: props.disabled,
            }),
            ...(props.active && { 'aria-current': true }),
            ...(props.disabled && { 'aria-disabled': true }),
        }, slots.default && slots.default());
    },
});

const CListGroupPlugin = {
    install: (app) => {
        app.component(CListGroup.name, CListGroup);
        app.component(CListGroupItem.name, CListGroupItem);
    },
};

const CSpinner = defineComponent({
    name: 'CSpinner',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
         */
        color: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'dark',
                    'light',
                ].includes(value);
            },
        },
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'div'
         */
        component: {
            type: String,
            default: 'div',
            required: false,
        },
        /**
         * Size the component small.
         *
         * @values 'sm'
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return value === 'sm';
            },
        },
        /**
         * Set the button variant to an outlined button or a ghost button.
         *
         * @default 'border'
         * @values 'border', 'grow'
         */
        variant: {
            type: String,
            default: 'border',
            required: false,
            validator: (value) => {
                return ['border', 'grow'].includes(value);
            },
        },
        /**
         * Set visually hidden label for accessibility purposes.
         *
         * @default 'Loading...'
         */
        visuallyHiddenLabel: {
            type: String,
            default: 'Loading...',
            required: false,
        },
    },
    setup(props) {
        return () => h$1(props.component, {
            class: [
                `spinner-${props.variant}`,
                `text-${props.color}`,
                props.size && `spinner-${props.variant}-${props.size}`,
            ],
            role: 'status',
        }, h$1('span', { class: ['visually-hidden'] }, props.visuallyHiddenLabel));
    },
});

const CLoadingButton = defineComponent({
    name: 'CLoadingButton',
    props: {
        /**
         * Makes button disabled when loading.
         */
        disabledOnLoading: Boolean,
        /**
         * Loading state (set to true to start animation).
         */
        loading: {
            type: Boolean,
            default: false,
            required: false,
        },
        /**
         * Sets type of spinner.
         *
         * @values 'border', 'grow'
         * @default 'border'
         */
        spinnerType: {
            type: String,
            default: 'border',
            required: false,
            validator: (value) => {
                return ['border', 'grow'].includes(value);
            },
        },
        /**
         * Automatically starts loading animation and stops after a determined amount of milliseconds.
         */
        timeout: {
            type: Number,
            default: undefined,
            required: false,
        },
        ...CButton.props,
    },
    emits: [
        /**
         * Event called when the user clicks on a component.
         */
        'click',
    ],
    setup(props, { emit, slots }) {
        const loading = ref(props.loading);
        const handleOnClick = () => {
            emit('click');
            if (props.timeout) {
                loading.value = true;
                setTimeout(() => {
                    loading.value = false;
                }, props.timeout);
            }
        };
        return () => h$1(CButton, {
            class: ['btn-loading', { ['is-loading']: loading.value }],
            ...(props.disabledOnLoading && loading.value && { disabled: true }),
            onClick: () => handleOnClick(),
            // TODO: remove non button props
            ...props,
        }, {
            default: () => [
                h$1(CSpinner, { class: 'btn-loading-spinner', size: 'sm', variant: props.spinnerType }),
                slots.default && slots.default(),
            ],
        });
    },
});

const CLoadingButtonPlugin = {
    install: (app) => {
        app.component(CLoadingButton.name, CLoadingButton);
    },
};

const CModal = defineComponent({
    name: 'CModal',
    props: {
        /**
         * Align the modal in the center or top of the screen.
         *
         * @default 'top'
         * @values 'top', 'center'
         */
        alignment: {
            default: 'top',
            required: false,
            validator: (value) => {
                return ['top', 'center'].includes(value);
            },
        },
        /**
         * Apply a backdrop on body while offcanvas is open.
         *
         * @default true
         * @values boolean, 'static'
         */
        backdrop: {
            type: [Boolean, String],
            default: true,
            require: false,
        },
        /**
         * A string of all className you want applied to the modal content component.
         * TODO: Consider if we should change this prop name to describe better its role.
         */
        className: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Set modal to covers the entire user viewport
         *
         * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
         */
        fullscreen: {
            type: [Boolean, String],
            default: undefined,
            required: false,
            validator: (value) => {
                if (typeof value == 'string') {
                    return ['sm', 'md', 'lg', 'xl', 'xxl'].includes(value);
                }
                if (typeof value == 'boolean') {
                    return true;
                }
                return false;
            },
        },
        /**
         * Closes the modal when escape key is pressed.
         *
         * @default true
         */
        keyboard: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * Does the modal dialog itself scroll, or does the whole dialog scroll within the window.
         */
        dismiss: {
            type: Boolean,
            default: false,
            required: false,
        },
        /**
         * Create a scrollable modal that allows scrolling the modal body.
         */
        scrollable: {
            type: Boolean,
            required: false,
        },
        /**
         * Size the component small, large, or extra large.
         *
         * @values 'sm', 'lg', 'xl'
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['sm', 'lg', 'xl'].includes(value);
            },
        },
        /**
         * Remove animation to create modal that simply appear rather than fade in to view.
         */
        transition: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * Toggle the visibility of alert component.
         */
        visible: {
            type: Boolean,
            required: false,
        },
    },
    emits: [
        /**
         * Event called before the dissmiss animation has started.
         */
        'dismiss',
    ],
    setup(props, { slots, attrs, emit }) {
        const modalRef = ref();
        const modalContentRef = ref();
        const handleEnter = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            document.body.classList.add('modal-open');
            el.style.display = 'block';
            setTimeout(() => {
                el.classList.add('show');
            }, 1);
        };
        const handleAfterEnter = () => {
            window.addEventListener('click', handleClickOutside);
            window.addEventListener('keyup', handleKeyUp);
        };
        const handleLeave = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            document.body.classList.remove('modal-open');
            el.classList.remove('show');
        };
        const handleAfterLeave = (el) => {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('keyup', handleKeyUp);
            el.style.display = 'none';
        };
        const handleDismiss = () => {
            emit('dismiss');
        };
        const handleKeyUp = (event) => {
            if (modalContentRef.value && !modalContentRef.value.contains(event.target)) {
                if (props.backdrop !== 'static' && event.key === 'Escape' && props.keyboard) {
                    handleDismiss();
                }
                if (props.backdrop === 'static') {
                    modalRef.value.classList.add('modal-static');
                    setTimeout(() => {
                        modalRef.value.classList.remove('modal-static');
                    }, 300);
                }
            }
        };
        const handleClickOutside = (event) => {
            if (modalContentRef.value && !modalContentRef.value.contains(event.target)) {
                if (props.backdrop !== 'static') {
                    handleDismiss();
                }
                if (props.backdrop === 'static') {
                    modalRef.value.classList.add('modal-static');
                    setTimeout(() => {
                        modalRef.value.classList.remove('modal-static');
                    }, 300);
                }
            }
        };
        return () => [
            h$1(Transition, {
                onEnter: (el, done) => handleEnter(el, done),
                onAfterEnter: () => handleAfterEnter(),
                onLeave: (el, done) => handleLeave(el, done),
                onAfterLeave: (el) => handleAfterLeave(el),
            }, () => props.visible &&
                h$1('div', {
                    class: [
                        'modal',
                        {
                            ['fade']: props.transition,
                        },
                        attrs.class,
                    ],
                    ref: modalRef,
                }, h$1('div', {
                    class: [
                        'modal-dialog',
                        {
                            'modal-dialog-centered': props.alignment === 'center',
                            [`modal-fullscreen-${props.fullscreen}-down`]: props.fullscreen && typeof props.fullscreen === 'string',
                            'modal-fullscreen': props.fullscreen && typeof props.fullscreen === 'boolean',
                            ['modal-dialog-scrollable']: props.scrollable,
                            [`modal-${props.size}`]: props.size,
                        },
                    ],
                }, h$1('div', { class: ['modal-content', props.className], ref: modalContentRef }, slots.default && slots.default())))),
            props.backdrop &&
                h$1(CBackdrop, {
                    class: 'modal-backdrop',
                    visible: props.visible,
                }),
        ];
    },
});

const CModalBody = defineComponent({
    name: 'CModalBody',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'modal-body' }, slots.default && slots.default());
    },
});

const CModalFooter = defineComponent({
    name: 'CModalFooter',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'modal-footer' }, slots.default && slots.default());
    },
});

const CModalHeader = defineComponent({
    name: 'CModalHeader',
    props: {
        /**
         * Add a close button component to the header which will call the provided handler when clicked.
         */
        dismiss: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: [
        /**
         * Event called before the dissmiss animation has started.
         */
        'dismiss',
    ],
    setup(props, { slots, emit }) {
        const handleDismiss = function () {
            emit('dismiss');
        };
        return () => h$1('span', { class: 'modal-header' }, [
            slots.default && slots.default(),
            props.dismiss && h$1(CCloseButton, { onClick: handleDismiss }, ''),
        ]);
    },
});

const CModalTitle = defineComponent({
    name: 'CModalTitle',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'h5'
         */
        component: {
            type: String,
            default: 'h5',
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, { class: 'modal-title' }, slots.default && slots.default());
    },
});

const CModalPlugin = {
    install: (app) => {
        app.component(CModal.name, CModal);
        app.component(CModalBody.name, CModalBody);
        app.component(CModalFooter.name, CModalFooter);
        app.component(CModalHeader.name, CModalHeader);
        app.component(CModalTitle.name, CModalTitle);
    },
};

const CMultiSelectNativeSelect = defineComponent({
    name: 'CMultiSelectGroupOption',
    props: {
        /**
         * It specifies that multiple options can be selected at once.
         *
         * @default true
         */
        multiple: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * List of option elements.
         */
        options: {
            type: Array,
            default: () => [],
            required: false,
        },
        value: {
            type: [Number, String, Array],
            default: undefined,
            require: false,
        },
    },
    emits: ['change'],
    setup(props, { emit }) {
        const nativeSelectRef = inject('nativeSelectRef');
        const createNativeOptions = (options) => {
            return options.map((option) => {
                return option.options
                    ? h$1('optgroup', { label: option.label }, createNativeOptions(option.options))
                    : h$1('option', { disabled: option.disabled, value: option.value });
            });
        };
        const handleChange = (event) => {
            const target = event.target;
            emit('change', Number(target.value));
        };
        return () => h$1('select', {
            multiple: props.multiple,
            tabIndex: '-1',
            style: { display: 'none' },
            value: props.value,
            ref: nativeSelectRef,
            onChange: handleChange,
        }, props.options && createNativeOptions(props.options));
    },
});

const CMultiSelectOptions = defineComponent({
    name: 'CMultiSelectOptions',
    props: {
        /**
         * List of option elements.
         */
        options: {
            type: Array,
            default: () => [],
            required: false,
        },
        /**
         * Sets maxHeight of options list.
         *
         * @default 'auto'
         */
        optionsMaxHeight: {
            type: [Number, String],
            default: 'auto',
            required: false,
        },
        /**
         * Sets option style.
         *
         * @values 'checkbox', 'text'
         * @default 'checkbox'
         */
        optionsStyle: {
            type: String,
            default: 'checkbox',
            required: false,
            validator: (value) => {
                return ['checkbox', 'text'].includes(value);
            },
        },
        /**
         * Sets the label for no results when filtering.
         */
        searchNoResultsLabel: {
            type: String,
            default: 'no items',
            required: false,
        },
    },
    emits: ['optionClick'],
    setup(props, { emit }) {
        const handleOptionClick = (option) => {
            emit('optionClick', option);
        };
        const createOptions = (options) => {
            return options.length > 0
                ? options.map((option) => {
                    return option.options
                        ? h$1('div', { class: 'form-multi-select-options' }, [
                            h$1('div', { class: 'form-multi-select-optgroup-label' }, option.label),
                            createOptions(option.options),
                        ])
                        : h$1('div', {
                            class: [
                                'form-multi-select-option',
                                {
                                    'form-multi-select-option-with-checkbox': props.optionsStyle === 'checkbox',
                                    'form-multi-selected': option.selected,
                                    disabled: option.disabled,
                                },
                            ],
                            onClick: () => handleOptionClick(option),
                        }, option.text);
                })
                : h$1('div', { class: 'form-multi-select-options-empty' }, props.searchNoResultsLabel);
        };
        return () => h$1('div', {
            class: 'form-multi-select-options',
            ...(props.optionsMaxHeight !== 'auto' && {
                style: { maxHeight: props.optionsMaxHeight, overflow: 'scroll' },
            }),
        }, createOptions(props.options));
    },
});

const CMultiSelectSelection = defineComponent({
    name: 'CMultiSelectSelection',
    props: {
        /**
         * It specifies that multiple options can be selected at once.
         *
         * @default true
         */
        multiple: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * Enables search input element.
         */
        search: {
            type: Boolean,
            required: false,
            default: false,
        },
        selected: {
            type: Array,
            default: () => [],
            required: false,
        },
        /**
         * Sets the selection style.
         *
         * @values 'counter', 'tags', 'text'
         * @default 'tags'
         */
        selectionType: {
            type: String,
            default: 'tags',
            required: false,
            validator: (value) => {
                return ['counter', 'tags', 'text'].includes(value);
            },
        },
        /**
         * Sets the counter selection label.
         *
         * @default 'item(s) selected'
         */
        selectionTypeCounterText: {
            type: String,
            default: 'item(s) selected',
            required: false,
        },
    },
    emits: ['remove'],
    setup(props, { emit }) {
        const handleRemove = (option) => {
            emit('remove', option);
        };
        return () => h$1('div', {
            class: 'form-multi-select-selection',
        }, [
            props.multiple &&
                props.selectionType === 'counter' &&
                !props.search &&
                `${props.selected.length} ${props.selectionTypeCounterText}`,
            props.multiple &&
                props.selectionType === 'tags' &&
                props.selected.map((option) => {
                    if (props.selectionType === 'tags') {
                        return h$1('span', { class: 'form-multi-select-tag' }, [
                            option.text,
                            !option.disabled &&
                                h$1('button', {
                                    class: 'form-multi-select-tag-delete close',
                                    ariaLabel: 'Close',
                                    onClick: () => handleRemove(option),
                                }, h$1('span', { ariaHidden: 'true' }, 'x')),
                        ]);
                    }
                    return;
                }),
            props.multiple &&
                props.selectionType === 'text' &&
                props.selected.map((option) => option.text).join(', '),
            !props.multiple && !props.search && props.selected.map((option) => option.text)[0],
        ]);
    },
});

const CMultiSelect = defineComponent({
    name: 'CMultiSelect',
    props: {
        /**
         * Enables selection cleaner element.
         *
         * @default true
         */
        cleaner: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * It specifies that multiple options can be selected at once.
         *
         * @default true
         */
        multiple: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * List of option elements.
         */
        options: {
            type: Array,
            default: () => [],
            required: false,
        },
        /**
         * Sets maxHeight of options list.
         *
         * @default 'auto'
         */
        optionsMaxHeight: {
            type: [Number, String],
            default: 'auto',
            required: false,
        },
        /**
         * Sets option style.
         *
         * @values 'checkbox', 'text'
         * @default 'checkbox'
         */
        optionsStyle: {
            type: String,
            default: 'checkbox',
            required: false,
            validator: (value) => {
                return ['checkbox', 'text'].includes(value);
            },
        },
        /**
         * Specifies a short hint that is visible in the search input.
         *
         * @default 'Select...''
         */
        placeholder: {
            type: String,
            default: 'Select...',
            required: false,
        },
        /**
         * Enables search input element.
         */
        search: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * Sets the label for no results when filtering.
         */
        searchNoResultsLabel: {
            type: String,
            default: 'no items',
            required: false,
        },
        /**
         * Enables select all button.
         *
         * @default true
         */
        selectAll: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * Sets the select all button label.
         *
         * @default 'Select all options'
         */
        selectAllLabel: {
            type: String,
            required: false,
            default: 'Select all options',
        },
        /**
         * Sets the selection style.
         *
         * @values 'counter', 'tags', 'text'
         * @default 'tags'
         */
        selectionType: {
            type: String,
            default: 'tags',
            required: false,
            validator: (value) => {
                return ['counter', 'tags', 'text'].includes(value);
            },
        },
        /**
         * Sets the counter selection label.
         *
         * @default 'item(s) selected'
         */
        selectionTypeCounterText: {
            type: String,
            default: 'item(s) selected',
            required: false,
        },
        /**
         * Toggle the visibility of multi select dropdown.
         *
         * @default false
         */
        visible: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    emits: [
        /**
         * Execute a function when a user changes the selected option. [docs]
         */
        'change',
    ],
    setup(props, { emit }) {
        const flattenArray = (options) => {
            return options.reduce((acc, val) => {
                return acc.concat(Array.isArray(val.options) ? flattenArray(val.options) : val);
            }, []);
        };
        const getSelectedOptions = (options) => {
            return flattenArray(options).filter((option) => {
                if (option.selected) {
                    return option;
                }
                return;
            });
        };
        const updateOptions = (value, _options = options.value) => {
            return props.multiple && _options
                ? _options &&
                    _options.map((option) => {
                        count.value = count.value++;
                        return option.options
                            ? { ...option, options: updateOptions(value, option.options) }
                            : option.value == value // TODO: find solution
                                ? { ...option, selected: !option.selected, order: count.value }
                                : { ...option };
                    })
                : _options &&
                    _options.map((option) => {
                        return option.options
                            ? { ...option, options: updateOptions(value, option.options) }
                            : option.value == value // TODO: find solution
                                ? { ...option, selected: true }
                                : { ...option, selected: false };
                    });
        };
        const toggleAllOptions = (options, selected, counter = count.value) => {
            return options.map((option) => {
                !option.selected && counter++;
                count.value = counter;
                if (option.options) {
                    return {
                        ...option,
                        options: toggleAllOptions(option.options, selected, counter),
                    };
                }
                return option.disabled
                    ? { ...option }
                    : selected && !option.selected
                        ? { ...option, selected: selected, order: counter }
                        : { ...option, selected: selected };
            });
        };
        const filterOptionsList = (search, _options = vOptions.value) => {
            return search.length
                ? _options &&
                    _options.reduce((acc, val) => {
                        const options = val.options &&
                            val.options.filter((element) => element.text && element.text.toLowerCase().includes(search.toLowerCase()));
                        if ((val.text && val.text.toLowerCase().includes(search.toLowerCase())) ||
                            (options && options.length)) {
                            acc.push(Object.assign({}, val, options && options.length && { options }));
                        }
                        return acc;
                    }, [])
                : options.value;
        };
        const multiSelectRef = ref();
        const nativeSelectRef = ref();
        provide('nativeSelectRef', nativeSelectRef);
        const searchRef = ref();
        const options = ref(props.options);
        const vOptions = ref(props.options);
        const search = ref('');
        const visible = ref(props.visible);
        const selected = ref(getSelectedOptions(props.options));
        const count = ref(0);
        watch(options, () => {
            const _selected = options.value && getSelectedOptions(options.value);
            _selected.sort((a, b) => {
                if (typeof a.order === 'undefined') {
                    return -1;
                }
                if (b.order && a.order > b.order)
                    return 1;
                if (b.order && a.order < b.order)
                    return -1;
                return 0;
            });
            selected.value = _selected;
        });
        watch([options, search], () => {
            vOptions.value = filterOptionsList(search.value, options.value);
        });
        watch(selected, () => {
            nativeSelectRef.value &&
                nativeSelectRef.value.dispatchEvent(new Event('change', { bubbles: true }));
        });
        onMounted(() => {
            window.addEventListener('click', handleClickOutside);
            window.addEventListener('keyup', handleKeyup);
        });
        onUnmounted(() => {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('keyup', handleKeyup);
        });
        const handleKeyup = (event) => {
            if (multiSelectRef.value && !multiSelectRef.value.contains(event.target)) {
                visible.value = false;
            }
        };
        const handleClickOutside = (event) => {
            if (multiSelectRef.value && !multiSelectRef.value.contains(event.target)) {
                visible.value = false;
            }
        };
        const handleSearchChange = (event) => {
            const target = event.target;
            search.value = target.value.toLowerCase();
        };
        const handleSearchKeyDown = (event) => {
            if (search.value.length)
                return;
            if (event.key === 'Backspace' || event.key === 'Delete') {
                const last = selected.value.filter((option) => !option.disabled).pop();
                if (last) {
                    selected.value = selected.value.filter((option) => option.value !== last.value);
                    options.value = updateOptions(last.value);
                }
            }
        };
        const handleOptionClick = (option) => {
            options.value = updateOptions(option.value);
        };
        const handleSelectAll = () => {
            options.value = toggleAllOptions(options.value, true);
        };
        const handleDeselectAll = () => {
            options.value = toggleAllOptions(options.value, false);
        };
        return () => [
            h$1(CMultiSelectNativeSelect, {
                multiple: props.multiple,
                options: options.value,
                value: props.multiple
                    ? selected.value.map((option) => option.value.toString())
                    : selected.value.map((option) => option.value)[0],
                onChange: () => emit('change', selected.value),
            }),
            h$1('div', {
                class: [
                    'form-multi-select',
                    {
                        show: visible.value,
                        'form-multi-select-selection-tags': props.multiple && props.selectionType === 'tags',
                    },
                ],
                onClick: () => {
                    visible.value = true;
                    props.search && searchRef.value && searchRef.value.focus();
                },
                ref: multiSelectRef,
            }, [
                h$1(CMultiSelectSelection, {
                    multiple: props.multiple,
                    onRemove: (option) => handleOptionClick(option),
                    search: props.search,
                    selected: selected.value,
                    selectionType: props.selectionType,
                    selectionTypeCounterText: props.selectionTypeCounterText,
                }),
                props.multiple &&
                    props.cleaner &&
                    selected.value.length > 0 &&
                    h$1('button', {
                        type: 'button',
                        class: 'form-multi-select-selection-cleaner',
                        onClick: () => handleDeselectAll(),
                    }),
                props.search &&
                    h$1('input', {
                        type: 'text',
                        class: 'form-multi-select-search',
                        autocomplete: 'off',
                        ...(selected.value.length === 0 && { placeholder: props.placeholder }),
                        ...(selected.value.length &&
                            props.selectionType === 'counter' && {
                            placeholder: `${selected.value.length} ${props.selectionTypeCounterText}`,
                        }),
                        ...(selected.value.length &&
                            !props.multiple && { placeholder: selected.value.map((option) => option.text)[0] }),
                        onInput: (event) => handleSearchChange(event),
                        onKeydown: (event) => handleSearchKeyDown(event),
                        ...(props.multiple &&
                            selected.value.length &&
                            props.selectionType !== 'counter' && { size: search.value.length + 2 }),
                        ref: searchRef,
                    }),
                h$1('div', { class: 'form-multi-select-dropdown' }, [
                    props.multiple &&
                        props.selectAll &&
                        h$1('button', { class: 'form-multi-select-all', onClick: () => handleSelectAll() }, props.selectAllLabel),
                    h$1(CMultiSelectOptions, {
                        onOptionClick: (option) => handleOptionClick(option),
                        options: vOptions.value,
                        optionsMaxHeight: props.optionsMaxHeight,
                        optionsStyle: props.optionsStyle,
                        searchNoResultsLabel: props.searchNoResultsLabel,
                    }),
                ]),
            ]),
        ];
    },
});

const CMultiSelectPlugin = {
    install: (app) => {
        app.component(CMultiSelect.name, CMultiSelect);
    },
};

const CNav = defineComponent({
    name: 'CNav',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'ul'
         */
        component: {
            type: String,
            required: false,
            default: 'ul',
        },
        /**
         * Specify a layout type for component.
         *
         * @values 'fill', 'justified'
         */
        layout: {
            type: String,
            required: false,
            default: undefined,
            validator: (value) => {
                return ['fill', 'justified'].includes(value);
            },
        },
        /**
         * Set the nav variant to tabs or pills.
         *
         * @values 'tabs', 'pills', 'underline'
         */
        variant: {
            type: String,
            required: false,
            default: undefined,
            validator: (value) => {
                return ['tabs', 'pills', 'underline'].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: [
                'nav',
                {
                    [`nav-${props.layout}`]: props.layout,
                    [`nav-${props.variant}`]: props.variant,
                },
            ],
            role: 'navigation',
        }, slots.default && slots.default());
    },
});

const CNavGroup = defineComponent({
    name: 'CNavGroup',
    props: {
        /**
         * Make nav group more compact by cutting all `padding` in half.
         */
        compact: Boolean,
        /**
         * Show nav group items.
         */
        visible: Boolean,
    },
    emits: ['visible-change'],
    setup(props, { slots, emit }) {
        const visible = ref(props.visible);
        const navGroupRef = ref();
        const visibleGroup = ref();
        const handleVisibleChange = (visible, index) => {
            if (visible) {
                visibleGroup.value = index;
            }
            else {
                if (visibleGroup.value === index) {
                    visibleGroup.value = 0;
                }
            }
        };
        const isVisible = (index) => Boolean(visibleGroup.value === index);
        onMounted(() => {
            props.visible && navGroupRef.value.classList.add('show');
            emit('visible-change', visible.value);
        });
        onUpdated(() => {
            visible.value = props.visible;
            if (visible.value === false) {
                visibleGroup.value = undefined;
            }
        });
        const handleTogglerClick = function () {
            visible.value = !visible.value;
            emit('visible-change', visible.value);
        };
        const handleBeforeEnter = (el) => {
            el.style.height = '0px';
            navGroupRef.value.classList.add('show');
        };
        const handleEnter = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            el.style.height = `${el.scrollHeight}px`;
        };
        const handleAfterEnter = (el) => {
            el.style.height = 'auto';
        };
        const handleBeforeLeave = (el) => {
            el.style.height = `${el.scrollHeight}px`;
        };
        const handleLeave = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            setTimeout(() => {
                el.style.height = '0px';
            }, 1);
        };
        const handleAfterLeave = () => {
            navGroupRef.value.classList.remove('show');
        };
        return () => h$1('li', {
            class: 'nav-group',
            ref: navGroupRef,
        }, [
            slots.togglerContent &&
                h$1('a', {
                    class: ['nav-link', 'nav-group-toggle'],
                    onClick: handleTogglerClick,
                }, slots.togglerContent && slots.togglerContent()),
            h$1(Transition, {
                css: false,
                onBeforeEnter: (el) => handleBeforeEnter(el),
                onEnter: (el, done) => handleEnter(el, done),
                onAfterEnter: (el) => handleAfterEnter(el),
                onBeforeLeave: (el) => handleBeforeLeave(el),
                onLeave: (el, done) => handleLeave(el, done),
                onAfterLeave: () => handleAfterLeave(),
            }, {
                default: () => visible.value &&
                    h$1('ul', {
                        class: [
                            'nav-group-items',
                            {
                                compact: props.compact,
                            },
                        ],
                    }, slots.default &&
                        slots.default().map((vnode, index) => {
                            // @ts-expect-error name is defined in component
                            if (vnode.type.name === 'CNavGroup') {
                                return h$1(vnode, {
                                    onVisibleChange: (visible) => handleVisibleChange(visible, index + 1),
                                    ...(visibleGroup.value && { visible: isVisible(index + 1) }),
                                });
                            }
                            return vnode;
                        })),
            }),
        ]);
    },
});

// TODO: Consider whether this component is needed
const CNavGroupItems = defineComponent({
    name: 'CNavGroupItems',
    setup(_, { slots }) {
        return () => h$1('ul', { class: 'nav-group-items' }, slots.default && slots.default());
    },
});

const CNavLink = defineComponent({
    name: 'CNavLink',
    props: {
        /**
         * Toggle the active state for the component.
         */
        active: {
            type: Boolean,
            required: false,
        },
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'a'
         */
        component: {
            type: String,
            required: false,
            default: 'a',
        },
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * @ignore
         */
        href: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1(CLink, {
            class: 'nav-link',
            active: props.active,
            component: props.component,
            disabled: props.disabled,
            href: props.href,
        }, {
            default: () => slots.default && slots.default(),
        });
    },
});

const CNavItem = defineComponent({
    name: 'CNavItem',
    props: {
        ...CNavLink.props,
    },
    setup(props, { slots }) {
        return () => h$1('li', {
            class: 'nav-item',
        }, props.href
            ? h$1(CNavLink, {
                active: props.active,
                component: props.component,
                disabled: props.disabled,
                href: props.href,
            }, {
                default: () => slots.default && slots.default(),
            })
            : slots.default && slots.default());
    },
});

const CNavTitle = defineComponent({
    name: 'CNavTitle',
    setup(_, { slots }) {
        return () => h$1('li', { class: 'nav-title' }, slots.default && slots.default());
    },
});

const CNavPlugin = {
    install: (app) => {
        app.component(CNav.name, CNav);
        app.component(CNavGroup.name, CNavGroup);
        app.component(CNavGroupItems.name, CNavGroupItems);
        app.component(CNavItem.name, CNavItem);
        app.component(CNavLink.name, CNavLink);
        app.component(CNavTitle.name, CNavTitle);
    },
};

const CNavbar = defineComponent({
    name: 'CNavbar',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
        /**
         * Sets if the color of text should be colored for a light or dark dark background.
         *
         * @values 'dark', 'light'
         */
        colorScheme: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['dark', 'light'].includes(value);
            },
        },
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'nav'
         */
        component: {
            type: String,
            default: 'nav',
            required: false,
        },
        /**
         * Defines optional container wrapping children elements.
         *
         * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'
         */
        container: {
            type: [Boolean, String],
            default: undefined,
            required: false,
            validator: (value) => {
                return (typeof value === 'boolean' || ['sm', 'md', 'lg', 'xl', 'xxl', 'fluid'].includes(value));
            },
        },
        /**
         * Defines the responsive breakpoint to determine when content collapses.
         *
         * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
         */
        expand: {
            type: [Boolean, String],
            default: undefined,
            required: false,
            validator: (value) => {
                return typeof value === 'boolean' || ['sm', 'md', 'lg', 'xl', 'xxl'].includes(value);
            },
        },
        /**
         * Place component in non-static positions.
         *
         * @values 'fixed-top', 'fixed-bottom', 'sticky-top'
         */
        placement: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['fixed-top', 'fixed-bottom', 'sticky-top'].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: [
                'navbar',
                {
                    [`bg-${props.color}`]: props.color,
                    [`navbar-${props.colorScheme}`]: props.colorScheme,
                    [typeof props.expand === 'boolean'
                        ? 'navbar-expand'
                        : `navbar-expand-${props.expand}`]: props.expand,
                },
                props.placement,
            ],
        }, props.container
            ? h$1('div', { class: [`container${props.container !== true ? '-' + props.container : ''}`] }, slots.default && slots.default())
            : slots.default && slots.default());
    },
});

const CNavbarBrand = defineComponent({
    name: 'CNavbarBrand',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         */
        component: {
            type: String,
            default: 'a',
            required: false,
        },
        /**
         * The href attribute specifies the URL of the page the link goes to.
         */
        href: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component ? props.component : props.href ? 'a' : 'span', {
            class: 'header-brand',
            href: props.href,
        }, slots.default && slots.default());
    },
});

const CNavbarNav = defineComponent({
    name: 'CNavbarNav',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'ul'
         */
        component: {
            type: String,
            required: false,
            default: 'ul',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, {
            class: 'navbar-nav',
            role: 'navigation',
        }, slots.default && slots.default());
    },
});

const CNavbarText = defineComponent({
    name: 'CNavbarText',
    setup(_, { slots }) {
        return () => h$1('span', { class: 'navbar-text' }, slots.default && slots.default());
    },
});

const CNavbarToggler = defineComponent({
    name: 'CNavbarToggler',
    setup(_, { slots }) {
        return () => h$1('button', {
            class: 'navbar-toggler',
        }, slots.default ? slots.default() : h$1('span', { class: ['navbar-toggler-icon'] }));
    },
});

const CNavbarPlugin = {
    install: (app) => {
        app.component(CNavbar.name, CNavbar);
        app.component(CNavbarBrand.name, CNavbarBrand);
        app.component(CNavbarNav.name, CNavbarNav);
        app.component(CNavbarText.name, CNavbarText);
        app.component(CNavbarToggler.name, CNavbarToggler);
    },
};

const COffcanvas = defineComponent({
    name: 'COffcanvas',
    props: {
        /**
         * Apply a backdrop on body while offcanvas is open.
         *
         * @default true
         */
        backdrop: {
            type: Boolean,
            default: true,
            require: false,
        },
        /**
         * Closes the offcanvas when escape key is pressed.
         *
         * @default true
         */
        keyboard: {
            type: Boolean,
            default: true,
            require: false,
        },
        /**
         * Components placement, there’s no default placement.
         *
         * @values 'start', 'end', 'top', 'bottom'
         */
        placement: {
            type: String,
            default: undefined,
            require: true,
            validator: (value) => {
                return ['start', 'end', 'top', 'bottom'].includes(value);
            },
        },
        /**
         * Toggle the visibility of offcanvas component.
         */
        visible: {
            type: Boolean,
            require: false,
        },
    },
    emits: [
        /**
         * Event called before the dissmiss animation has started.
         */
        'dismiss',
    ],
    setup(props, { slots, emit }) {
        const offcanvasRef = ref();
        const handleEnter = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            setTimeout(() => {
                el.style.visibility = 'visible';
                el.classList.add('show');
            }, 1);
        };
        const handleAfterEnter = () => {
            window.addEventListener('click', handleClickOutside);
            window.addEventListener('keyup', handleKeyUp);
        };
        const handleLeave = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            el.classList.remove('show');
        };
        const handleAfterLeave = (el) => {
            el.style.visibility = 'hidden';
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('keyup', handleKeyUp);
        };
        const handleDismiss = () => {
            emit('dismiss');
        };
        const handleKeyUp = (event) => {
            if (offcanvasRef.value && !offcanvasRef.value.contains(event.target)) {
                if (event.key === 'Escape' && props.keyboard) {
                    return handleDismiss();
                }
            }
        };
        const handleClickOutside = (event) => {
            if (offcanvasRef.value && !offcanvasRef.value.contains(event.target)) {
                handleDismiss();
            }
        };
        return () => [
            h$1(Transition, {
                onEnter: (el, done) => handleEnter(el, done),
                onAfterEnter: () => handleAfterEnter(),
                onLeave: (el, done) => handleLeave(el, done),
                onAfterLeave: (el) => handleAfterLeave(el),
            }, () => props.visible &&
                h$1('div', {
                    class: [
                        'offcanvas',
                        {
                            [`offcanvas-${props.placement}`]: props.placement,
                        },
                    ],
                    ref: offcanvasRef,
                }, slots.default && slots.default())),
            props.backdrop &&
                h$1(CBackdrop, {
                    class: 'modal-backdrop',
                    visible: props.visible,
                }),
        ];
    },
});

const COffcanvasBody = defineComponent({
    name: 'COffcanvasBody',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'offcanvas-body' }, slots.default && slots.default());
    },
});

const COffcanvasHeader = defineComponent({
    name: 'COffcanvasHeader',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'offcanvas-header' }, slots.default && slots.default());
    },
});

const COffcanvasTitle = defineComponent({
    name: 'COffcanvasTitle',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         *
         * @default 'h5'
         */
        component: {
            type: String,
            required: false,
            default: 'h5',
        },
    },
    setup(props, { slots }) {
        return () => h$1(props.component, { class: 'offcanvas-title' }, slots.default && slots.default());
    },
});

const COffcanvasPlugin = {
    install: (app) => {
        app.component(COffcanvas.name, COffcanvas);
        app.component(COffcanvasBody.name, COffcanvasBody);
        app.component(COffcanvasHeader.name, COffcanvasHeader);
        app.component(COffcanvasTitle.name, COffcanvasTitle);
    },
};

const CPagination = defineComponent({
    name: 'CPagination',
    props: {
        /**
         * Size the component small or large.
         *
         * @values 'sm', 'lg'
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['sm', 'lg'].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1('nav', {}, h$1('ul', { class: ['pagination', { [`pagination-${props.size}`]: props.size }] }, slots.default && slots.default()));
    },
});

const CPaginationItem = defineComponent({
    name: 'CPaginationItem',
    props: {
        /**
         * Toggle the active state for the component.
         */
        active: {
            type: Boolean,
            required: false,
        },
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         */
        component: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Toggle the disabled state for the component.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
        /**
         * The href attribute specifies the URL of the page the link goes to.
         */
        href: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, { slots }) {
        return () => {
            const component = props.component ? props.component : props.active ? 'span' : 'a';
            return h$1('li', {
                class: [
                    'page-item',
                    {
                        ['active']: props.active,
                        ['disabled']: props.disabled,
                    },
                ],
                ...(props.active && { active: props.active, 'aria-current': 'page' }),
            }, component === 'a'
                ? h$1(CLink, {
                    class: ['page-link'],
                    component: component,
                    href: props.href,
                }, {
                    default: () => slots.default && slots.default(),
                })
                : h$1(component, { class: ['page-link'] }, slots.default && slots.default()));
        };
    },
});

const CSmartPagination = defineComponent({
    name: 'CSmartPagination',
    props: {
        /**
         * Horizontall align
         *
         * @default 'start'
         */
        align: {
            type: String,
            default: 'start',
            require: false,
            validator: (value) => {
                return ['start', 'center', 'end'].includes(value);
            },
        },
        /**
         * Current page number
         *
         * @default 1
         */
        activePage: {
            type: Number,
            default: 1,
            require: false,
        },
        /**
         * Show/hide arrows
         *
         * @default true
         */
        arrows: {
            type: Boolean,
            default: true,
            require: false,
        },
        /**
         * Show/hide dots
         *
         * @default true
         */
        dots: {
            type: Boolean,
            default: true,
            require: false,
        },
        /**
         * Show double arrows buttons
         *
         * @default true
         */
        doubleArrows: {
            type: Boolean,
            default: true,
            require: false,
        },
        /**
         * The content of 'firstButton' button
         *
         * @default '&laquo;'
         */
        firstButton: {
            type: String,
            default: '&laquo;',
            require: false,
        },
        /**
         * The content of 'lastButton' button
         *
         * @default '&raquo;'
         */
        lastButton: {
            type: String,
            default: '&raquo;',
            require: false,
        },
        /**
         * Maximum items number
         *
         * @default 5
         */
        limit: {
            type: Number,
            default: 5,
            require: false,
        },
        /**
         * The content of 'nextButton' button
         *
         * @default '&rsaquo;'
         */
        nextButton: {
            type: String,
            default: '&rsaquo;',
            require: false,
        },
        /**
         * Number of pages
         */
        pages: {
            type: Number,
            default: 1000,
            require: true,
        },
        /**
         * The content of 'previousButton' button
         *
         * @default '&lsaquo;'
         */
        previousButton: {
            type: String,
            default: '&lsaquo;',
            require: false,
        },
        /**
         * Size of pagination, valid values: 'sm', 'lg'
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['sm', 'lg'].includes(value);
            },
        },
    },
    emits: [
        /**
         * On active page change callback.
         */
        'activePageChange',
    ],
    setup(props, { emit }) {
        const activePage = ref(props.activePage);
        const limit = ref(props.limit);
        const pages = ref(props.pages);
        watch(props, () => {
            activePage.value = props.activePage;
            limit.value = props.limit;
            pages.value = props.pages;
        });
        const showDots = computed(() => {
            return props.dots && limit.value > 4 && limit.value < pages.value;
        });
        const maxPrevItems = computed(() => {
            return Math.floor((limit.value - 1) / 2);
        });
        const maxNextItems = computed(() => {
            return Math.ceil((limit.value - 1) / 2);
        });
        const beforeDots = computed(() => {
            return showDots.value && activePage.value > maxPrevItems.value + 1;
        });
        const afterDots = computed(() => {
            return showDots.value && activePage.value < pages.value - maxNextItems.value;
        });
        const computedLimit = computed(() => {
            return limit.value - (afterDots.value ? 1 : 0) - (beforeDots.value ? 1 : 0);
        });
        const range = computed(() => {
            return activePage.value + maxNextItems.value;
        });
        const lastItem = computed(() => {
            return range.value >= pages.value ? pages.value : range.value - (afterDots.value ? 1 : 0);
        });
        const itemsAmount = computed(() => {
            return pages.value < computedLimit.value ? pages.value : computedLimit.value;
        });
        const items = computed(() => {
            if (activePage.value - maxPrevItems.value <= 1) {
                return Array.from({
                    length: itemsAmount.value,
                }, (_v, i) => i + 1);
            }
            else {
                return Array.from({
                    length: itemsAmount.value,
                }, (_v, i) => {
                    return lastItem.value - i;
                }).reverse();
            }
        });
        const setPage = (number) => {
            if (number !== activePage.value) {
                activePage.value = number;
                emit('activePageChange', number);
            }
        };
        return () => h$1(CPagination, {
            class: [`justify-content-${props.align}`],
            'aria-label': 'pagination',
            size: props.size,
        }, {
            default: () => [
                props.doubleArrows &&
                    h$1(CPaginationItem, {
                        onClick: () => {
                            setPage(1);
                        },
                        'aria-label': 'Go to first page',
                        ...(activePage.value === 1 && {
                            'aria-disabled': true,
                            disabled: true,
                        }),
                    }, {
                        default: () => typeof props.firstButton === 'string'
                            ? h$1('span', {
                                innerHTML: props.firstButton,
                            })
                            : props.firstButton,
                    }),
                props.arrows &&
                    h$1(CPaginationItem, {
                        onClick: () => {
                            setPage(activePage.value - 1);
                        },
                        'aria-label': 'Go to previous page',
                        ...(activePage.value === 1 && {
                            'aria-disabled': true,
                            disabled: true,
                        }),
                    }, {
                        default: () => typeof props.previousButton === 'string'
                            ? h$1('span', {
                                innerHTML: props.previousButton,
                            })
                            : props.previousButton,
                    }),
                beforeDots.value &&
                    h$1(CPaginationItem, {
                        role: 'separator',
                        disabled: true,
                    }, {
                        default: () => '...',
                    }),
                items.value.map((i) => {
                    return h$1(CPaginationItem, {
                        onClick: () => setPage(i),
                        'aria-label': activePage.value === i ? `Current page ${i}` : `Go to page ${i}`,
                        active: activePage.value === i,
                    }, {
                        default: () => i,
                    });
                }),
                afterDots.value &&
                    h$1(CPaginationItem, {
                        role: 'separator',
                        disabled: true,
                    }, {
                        default: () => '...',
                    }),
                props.arrows &&
                    h$1(CPaginationItem, {
                        onClick: () => {
                            setPage(activePage.value + 1);
                        },
                        'aria-label': 'Go to next page',
                        ...(activePage.value === pages.value && {
                            'aria-disabled': true,
                            disabled: true,
                        }),
                    }, {
                        default: () => typeof props.nextButton === 'string'
                            ? h$1('span', {
                                innerHTML: props.nextButton,
                            })
                            : props.nextButton,
                    }),
                props.doubleArrows &&
                    h$1(CPaginationItem, {
                        onClick: () => {
                            setPage(pages.value);
                        },
                        'aria-label': 'Go to last page',
                        ...(activePage.value === pages.value && {
                            'aria-disabled': true,
                            disabled: true,
                        }),
                    }, {
                        default: () => typeof props.lastButton === 'string'
                            ? h$1('span', {
                                innerHTML: props.lastButton,
                            })
                            : props.lastButton,
                    }),
            ],
        });
    },
});

const CPaginationPlugin = {
    install: (app) => {
        app.component(CPagination.name, CPagination);
        app.component(CPaginationItem.name, CPaginationItem);
        app.component(CSmartPagination.name, CSmartPagination);
    },
};

const CProgressBar = defineComponent({
    name: 'CProgressBar',
    props: {
        /**
         * Use to animate the stripes right to left via CSS3 animations.
         */
        animated: {
            type: Boolean,
            required: false,
        },
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
         */
        color: Color,
        /**
         * The percent to progress the ProgressBar.
         *
         * @default 0
         */
        value: {
            type: Number,
            required: false,
            default: 0,
        },
        /**
         * Set the progress bar variant to optional striped.
         *
         * @values 'striped'
         */
        variant: {
            type: String,
            default: undefined,
            require: false,
            validator: (value) => {
                return value === 'striped';
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1('div', {
            class: [
                'progress-bar',
                `bg-${props.color}`,
                {
                    [`progress-bar-${props.variant}`]: props.variant,
                    ['progress-bar-animated']: props.animated,
                },
            ],
            role: 'progressbar',
            style: `width: ${props.value}%`,
            'aria-valuenow': props.value,
            'aria-valuemin': '0',
            'aria-valuemax': '100',
        }, slots.default && slots.default());
    },
});

const CProgress = defineComponent({
    name: 'CProgress',
    props: {
        /**
         * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
         *
         * @default 'undefined'
         */
        height: {
            type: Number,
            default: undefined,
            required: false,
        },
        /**
         * Makes progress bar thinner.
         */
        thin: Boolean,
        /**
         * Change the default color to white.
         */
        white: Boolean,
        ...CProgressBar.props,
    },
    setup(props, { slots }) {
        return () => h$1('div', {
            class: [
                'progress',
                {
                    'progress-thin': props.thin,
                    'progress-white': props.white,
                },
            ],
            ...(props.height, { style: `height: ${props.height}px` }),
        }, props.value
            ? h$1(CProgressBar, {
                value: props.value,
                animated: props.animated,
                color: props.color,
                variant: props.variant,
            }, slots.default && slots.default())
            : slots.default && slots.default());
    },
});

const CProgressPlugin = {
    install: (app) => {
        app.component(CProgress.name, CProgress);
        app.component(CProgressBar.name, CProgressBar);
    },
};

const CSidebar = defineComponent({
    name: 'CSidebar',
    props: {
        /**
         * Sets if the color of text should be colored for a light or dark dark background.
         *
         * @values 'dark', light'
         */
        colorScheme: {
            type: String,
            default: undefined,
            validator: (value) => {
                return ['dark', 'light'].includes(value);
            },
        },
        /**
         * Hide sidebar.
         */
        hide: Boolean,
        /**
         * Make sidebar narrow.
         */
        narrow: {
            type: Boolean,
            required: false,
        },
        /**
         * Set sidebar to overlaid variant.
         */
        overlaid: {
            type: Boolean,
            required: false,
        },
        /**
         * Components placement, there’s no default placement.
         * @values 'start', 'end'
         */
        placement: {
            type: String,
            default: undefined,
            validator: (value) => {
                return ['start', 'end'].includes(value);
            },
        },
        /**
         * Place sidebar in non-static positions.
         */
        position: {
            type: String,
            default: undefined,
            validator: (value) => {
                return ['fixed'].includes(value);
            },
        },
        /**
         * Make any sidebar self hiding across all viewports or pick a maximum breakpoint with which to have a self hiding up to.
         *
         * @values 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
         */
        selfHiding: {
            type: [Boolean, String],
            default: undefined,
            validator: (value) => {
                if (typeof value === 'string') {
                    return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(value);
                }
                else if (typeof value === 'boolean') {
                    return true;
                }
                else {
                    return false;
                }
            },
        },
        /**
         * Size the component small, large, or extra large.
         */
        size: {
            type: String,
            default: undefined,
            validator: (value) => {
                return ['sm', 'lg', 'xl'].includes(value);
            },
        },
        /**
         * Expand narrowed sidebar on hover.
         */
        unfoldable: Boolean,
        /**
         * Toggle the visibility of sidebar component.
         */
        visible: Boolean,
    },
    emits: ['visible-change'],
    setup(props, { attrs, slots, emit }) {
        const mobile = ref();
        const inViewport = ref();
        const sidebarRef = ref();
        const visible = ref();
        const handleClick = (event) => {
            const target = event.target;
            target.closest('a.nav-link:not(.nav-group-toggle)')
                ? (visible.value = false)
                : (visible.value = true);
        };
        const options = {
            rootMargin: '0px',
            threshold: 1.0,
        };
        let observer;
        onMounted(() => {
            const callback = (entries) => {
                entries.forEach((entry) => {
                    inViewport.value = entry.isIntersecting;
                    emit('visible-change', entry.isIntersecting);
                });
            };
            observer = new IntersectionObserver(callback, options);
            observer.observe(sidebarRef.value);
            mobile.value = Boolean(getComputedStyle(sidebarRef.value).getPropertyValue('--cui-is-mobile'));
        });
        onUpdated(() => {
            mobile.value = Boolean(getComputedStyle(sidebarRef.value).getPropertyValue('--cui-is-mobile'));
            if (mobile.value) {
                window.addEventListener('click', handleClick);
            }
            else {
                window.removeEventListener('click', handleClick);
            }
        });
        onBeforeUnmount(() => {
            observer.disconnect();
        });
        watch(() => props.visible, () => {
            if (props.visible === true && inViewport.value === false) {
                visible.value = true;
            }
            if (props.visible === false && inViewport.value === true) {
                visible.value = false;
            }
        });
        return () => [
            h$1('div', {
                class: [
                    'sidebar',
                    {
                        [`sidebar-${props.colorScheme}`]: props.colorScheme,
                        'sidebar-narrow': props.narrow,
                        'sidebar-overlaid': props.overlaid,
                        [`sidebar-${props.placement}`]: props.placement,
                        [`sidebar-${props.position}`]: props.position,
                        [`sidebar-self-hiding${typeof props.selfHiding !== 'boolean' && '-' + props.selfHiding}`]: props.selfHiding,
                        [`sidebar-${props.size}`]: props.size,
                        'sidebar-narrow-unfoldable': props.unfoldable,
                        show: visible.value === true,
                        hide: visible.value === false,
                    },
                    attrs.class,
                ],
                ref: sidebarRef,
            }, slots.default && slots.default()),
            mobile.value &&
                h$1(CBackdrop, {
                    class: 'sidebar-backdrop d-none',
                    visible: props.visible,
                    onClick: () => {
                        visible.value = false;
                    },
                }),
        ];
    },
});

const CSidebarBrand = defineComponent({
    name: 'CSidebarBrand',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'sidebar-brand' }, slots.default && slots.default());
    },
});

const CSidebarFooter = defineComponent({
    name: 'CSidebarFooter',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'sidebar-footer' }, slots.default && slots.default());
    },
});

const CSidebarHeader = defineComponent({
    name: 'CSidebarHeader',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'sidebar-header' }, slots.default && slots.default());
    },
});

const CSidebarNav = defineComponent({
    name: 'CSidebarNav',
    setup(_, { slots }) {
        const visibleGroup = ref();
        const handleVisibleChange = (visible, index) => {
            if (visible) {
                visibleGroup.value = index;
            }
            else {
                if (visibleGroup.value === index) {
                    visibleGroup.value = 0;
                }
            }
        };
        const isVisible = (index) => Boolean(visibleGroup.value === index);
        return () => h$1('ul', {
            class: 'sidebar-nav',
        }, slots.default &&
            slots.default().map((vnode, index) => {
                // @ts-expect-error name is defined in component
                if (vnode.type.name === 'CNavGroup') {
                    return h$1(vnode, {
                        onVisibleChange: (visible) => handleVisibleChange(visible, index + 1),
                        ...(visibleGroup.value && { visible: isVisible(index + 1) }),
                    });
                }
                return vnode;
            }));
    },
});

const CSidebarToggler = defineComponent({
    name: 'CSidebarToggler',
    setup(_, { slots }) {
        return () => h$1('button', { class: 'sidebar-toggler' }, slots.default && slots.default());
    },
});

const CSidebarPlugin = {
    install: (app) => {
        app.component(CSidebar.name, CSidebar);
        app.component(CSidebarBrand.name, CSidebarBrand);
        app.component(CSidebarFooter.name, CSidebarFooter);
        app.component(CSidebarHeader.name, CSidebarHeader);
        app.component(CSidebarNav.name, CSidebarNav);
        app.component(CSidebarToggler.name, CSidebarToggler);
    },
};

const CSpinnerPlugin = {
    install: (app) => {
        app.component(CSpinner.name, CSpinner);
    },
};

const CElementCover = defineComponent({
    name: 'CElementCover',
    props: {
        /**
         * Array of custom boundaries. Use to create custom cover area (instead of parent element area). Area is defined by four sides: 'top', 'bottom', 'right', 'left'. If side is not defined by any custom boundary it is equal to parent element boundary. Each custom boundary is object with keys:
         * - sides (array) - select boundaries of element to define boundaries. Sides names: 'top', 'bottom', 'right', 'left'.
         * - query (string) - query used to get element which define boundaries. Search will be done only inside parent element, by parent.querySelector(query) function. [docs]
         *
         * @type {sides: string[], query: string}[]
         */
        boundaries: {
            // TODO: check if this is correct, TJ
            type: Array,
            require: true,
        },
        /**
         * Opacity of the cover. [docs]
         *
         * @type number
         */
        opacity: {
            type: Number,
            require: false,
        },
    },
    setup(props) {
        let containerCoords = {};
        const elementRef = ref();
        const getCustomBoundaries = () => {
            if (!props.boundaries || elementRef === null) {
                return {};
            }
            const parent = elementRef.value.parentElement;
            if (!parent) {
                return {};
            }
            const parentCoords = parent.getBoundingClientRect();
            const customBoundaries = {};
            props.boundaries.forEach((value) => {
                const element = parent.querySelector(value.query);
                if (!element || !value.sides) {
                    return;
                }
                const coords = element.getBoundingClientRect();
                value.sides.forEach((side) => {
                    const sideMargin = Math.abs(coords[side] - parentCoords[side]);
                    customBoundaries[side] = `${sideMargin}px`;
                });
            });
            return customBoundaries;
        };
        onMounted(function () {
            nextTick(function () {
                containerCoords = getCustomBoundaries();
            });
        });
        return () => h$1('div', {
            style: {
                ...containerCoords,
                position: 'absolute',
                'background-color': `rgb(255,255,255,${props.opacity})`,
            },
            ref: elementRef,
        }, h$1('div', // TODO: use slot to override this
        {
            style: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
            },
        }, h$1(CSpinner, {
            variant: 'grow',
            color: 'primary',
        })));
    },
});

const CTable = defineComponent({
    name: 'CTable',
    props: {
        /**
         * Set the vertical aligment.
         *
         * @values 'bottom', 'middle', 'top'
         */
        align: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['bottom', 'middle', 'top'].includes(value);
            },
        },
        /**
         * Sets the border color of the component to one of CoreUI’s themed colors.
         *
         * @value 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
         */
        borderColor: Color,
        /**
         * Add borders on all sides of the table and cells.
         */
        bordered: {
            type: Boolean,
            required: false,
        },
        /**
         * Remove borders on all sides of the table and cells.
         */
        borderless: {
            type: Boolean,
            required: false,
        },
        /**
         * Put the `<caption>` on the top of the table.
         *
         * @values 'top'
         */
        caption: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return value === 'top';
            },
        },
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
        /**
         * Enable a hover state on table rows within a `<CTableBody>`.
         */
        hover: {
            type: Boolean,
            required: false,
        },
        /**
         * Make any table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
         *
         * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
         */
        responsive: {
            type: [Boolean, String],
            default: undefined,
            required: false,
            validator: (value) => {
                if (typeof value == 'string') {
                    return ['sm', 'md', 'lg', 'xl', 'xxl'].includes(value);
                }
                if (typeof value == 'boolean') {
                    return true;
                }
                return false;
            },
        },
        /**
         * Make table more compact by cutting all cell `padding` in half.
         */
        small: {
            type: Boolean,
            required: false,
        },
        /**
         * Add zebra-striping to any table row within the `<CTableBody>`.
         */
        striped: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, { slots, attrs }) {
        const table = () => h$1('table', {
            class: [
                'table',
                {
                    [`align-${props.align}`]: props.align,
                    [`caption-${props.caption}`]: props.caption,
                    [`border-${props.borderColor}`]: props.borderColor,
                    'table-bordered': props.bordered,
                    'table-borderless': props.borderless,
                    [`table-${props.color}`]: props.color,
                    'table-hover': props.hover,
                    'table-sm': props.small,
                    'table-striped': props.striped,
                },
                attrs.class,
            ],
        }, slots.default && slots.default());
        return () => [
            props.responsive
                ? h$1('div', {
                    class: typeof props.responsive === 'boolean'
                        ? 'table-responsive'
                        : `table-responsive-${props.responsive}`,
                }, table())
                : table(),
        ];
    },
});

const CTableBody = defineComponent({
    name: 'CTableBody',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
    },
    setup(props, { slots }) {
        return () => h$1('tbody', {
            class: [
                {
                    [`table-${props.color}`]: props.color,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CTableCaption = defineComponent({
    name: 'CTableCaption',
    props: {},
    setup(_, { slots }) {
        return () => h$1('caption', {}, slots.default && slots.default());
    },
});

const CTableDataCell = defineComponent({
    name: 'CTableDataCell',
    props: {
        /**
         * Highlight a table row or cell.
         */
        active: {
            type: Boolean,
            required: false,
        },
        /**
         * Set the vertical aligment.
         *
         * @values 'bottom', 'middle', 'top'
         */
        align: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['bottom', 'middle', 'top'].includes(value);
            },
        },
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
    },
    setup(props, { slots }) {
        return () => h$1('td', {
            class: [
                {
                    [`align-${props.align}`]: props.align,
                    'table-active': props.active,
                    [`table-${props.color}`]: props.color,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CTableFoot = defineComponent({
    name: 'CTableFoot',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
    },
    setup(props, { slots }) {
        return () => h$1('tfoot', {
            class: [
                {
                    [`table-${props.color}`]: props.color,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CTableHead = defineComponent({
    name: 'CTableHead',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
    },
    setup(props, { slots }) {
        return () => h$1('thead', {
            class: [
                {
                    [`table-${props.color}`]: props.color,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CTableHeaderCell = defineComponent({
    name: 'CTableHeaderCell',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
    },
    setup(props, { slots }) {
        return () => h$1('th', {
            class: [
                {
                    [`table-${props.color}`]: props.color,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CTableRow = defineComponent({
    name: 'CTableRow',
    props: {
        /**
         * Highlight a table row or cell..
         */
        active: {
            type: Boolean,
            required: false,
        },
        /**
         * Set the vertical aligment.
         *
         * @values 'bottom', 'middle', 'top'
         */
        align: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return ['bottom', 'middle', 'top'].includes(value);
            },
        },
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
    },
    setup(props, { slots }) {
        return () => h$1('tr', {
            class: [
                {
                    [`align-${props.align}`]: props.align,
                    'table-active': props.active,
                    [`table-${props.color}`]: props.color,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CTablePlugin = {
    install: (app) => {
        app.component(CTable.name, CTable);
        app.component(CTableBody.name, CTableBody);
        app.component(CTableCaption.name, CTableCaption);
        app.component(CTableDataCell.name, CTableDataCell);
        app.component(CTableFoot.name, CTableFoot);
        app.component(CTableHead.name, CTableHead);
        app.component(CTableHeaderCell.name, CTableHeaderCell);
        app.component(CTableRow.name, CTableRow);
    },
};

const CSmartTableBody = defineComponent({
    name: 'CSmartTableBody',
    props: {
        clickableRows: {
            type: Boolean,
            require: false,
        },
        currentItems: {
            type: Array,
            default: () => [],
            required: false,
        },
        firstItemOnActivePageIndex: {
            type: Number,
            require: true,
            default: 0,
        },
        noItemLabel: {
            type: String,
            default: undefined,
            require: false,
        },
        columns: {
            type: Array,
            default: () => [],
            require: true,
        },
        rawColumnNames: {
            type: Array,
            default: () => [],
            require: true,
        },
        scopedSlots: {
            type: Object,
            default: undefined,
            require: false,
        },
    },
    emits: ['rowClick'],
    setup(props, { emit }) {
        const handleRowClick = (item, index, columnName, event) => {
            emit('rowClick', item, index, columnName, event);
        };
        const tableDataCellProps = (item, colName) => {
            const props = item._cellProps && {
                ...(item._cellProps['all'] && { ...item._cellProps['all'] }),
                ...(item._cellProps[colName] && { ...item._cellProps[colName] }),
            };
            return props;
        };
        const getColumnName = (event) => {
            const target = event.target;
            const closest = target.closest('tr');
            const children = closest ? Array.from(closest.children) : [];
            const clickedCell = children.filter((child) => child.contains(target))[0];
            return props.rawColumnNames[children.indexOf(clickedCell)];
        };
        return () => h$1(CTableBody, {
            ...(props.clickableRows && { style: 'cursor:pointer;' }),
        }, {
            default: () => props.currentItems.map((item, trIndex) => [
                h$1(CTableRow, {
                    ...(item._props && { ...item._props }),
                    ...(props.clickableRows && { tabindex: 0 }),
                    onClick: (event) => handleRowClick(item, trIndex + props.firstItemOnActivePageIndex, getColumnName(event), event),
                }, {
                    default: () => props.rawColumnNames.map((colName) => props.scopedSlots &&
                        props.scopedSlots[colName] &&
                        typeof props.scopedSlots[colName] === 'function'
                        ? h$1(props.scopedSlots[colName], { item: item })
                        : h$1(CTableDataCell, {
                            ...tableDataCellProps(item, colName),
                        }, {
                            default: () => String(item[colName]),
                        })),
                }),
                props.scopedSlots &&
                    props.scopedSlots['details'] && [
                    h$1(CTableRow, {
                        colspan: props.rawColumnNames.length,
                        class: 'p-0',
                        style: { 'border-bottom-width': '0' },
                        tabindex: '-1',
                    }),
                    h$1(CTableRow, {
                        class: 'p-0',
                        key: `details${trIndex}`,
                        onClick: (event) => handleRowClick(item, trIndex + props.firstItemOnActivePageIndex, getColumnName(event), true),
                    }, {
                        default: () => h$1(CTableDataCell, {
                            colspan: props.rawColumnNames.length,
                            class: 'p-0',
                            style: { border: 0 },
                        }, {
                            default: () => props.scopedSlots &&
                                props.scopedSlots['details'] &&
                                h$1(props.scopedSlots['details'], {
                                    item: item,
                                    onClick: (event) => handleRowClick(item, trIndex + props.firstItemOnActivePageIndex, getColumnName(event), true),
                                }),
                        }),
                    }),
                ],
            ]),
        });
    },
});

const CSmartTableHead = defineComponent({
    name: 'CSmartTableHead',
    props: {
        columnFilter: {
            type: [Boolean, Object],
            default: undefined,
            require: false,
        },
        columnSorter: {
            type: [Boolean, Object],
            default: undefined,
            require: false,
        },
        component: {
            type: String,
            default: 'head',
            require: false,
        },
        columns: {
            type: Array,
            default: () => [],
            required: false,
        },
        sorterState: {
            type: Object,
            default: undefined,
            require: false,
        },
        clearSorterAndFilter: {
            type: String,
            require: false,
            default: '',
        },
    },
    emits: ['filterInput', 'filterChange', 'sortClick'],
    setup(props, { slots, emit }) {
        const handleSortClick = (key, index) => {
            emit('sortClick', key, index);
        };
        const tableHeaderCellProps = (column) => {
            if (typeof column === 'object' && column._props) {
                return column._props;
            }
            return {};
        };
        const tableHeaderCellStyles = (column) => {
            const style = { verticalAlign: 'middle', overflow: 'hidden', cursor: '' };
            if (props.columnSorter &&
                (typeof column !== 'object' ||
                    (typeof column === 'object' && (typeof column.sorter === 'undefined' || column.sorter)))) {
                style.cursor = 'pointer';
            }
            if (typeof column === 'object' && column._props) {
                return { ...style, ...column._style };
            }
            return style;
        };
        const pretifyName = (name) => {
            return name
                .replace(/[-_.]/g, ' ')
                .replace(/ +/g, ' ')
                .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        };
        const label = (column) => typeof column === 'object'
            ? column.label !== undefined
                ? column.label
                : pretifyName(column.key)
            : pretifyName(column);
        const key = (column) => (typeof column === 'object' ? column.key : column);
        const getColumnSorterState = (key) => {
            if (props.sorterState && props.sorterState.column === key) {
                if (props.sorterState.state) {
                    return props.sorterState.state;
                }
                return 0;
            }
            return 0;
        };
        const columnSorterIcon = (column) => {
            if (getColumnSorterState(key(column)) === 0) {
                return h$1('span', { class: 'opacity-25 float-end me-1' }, slots.sortingIcon && slots.sortingIcon());
            }
            if (getColumnSorterState(key(column)) === 'asc') {
                return h$1('span', { class: 'float-end me-1' }, slots.sortingIconAscending && slots.sortingIconAscending());
            }
            if (getColumnSorterState(key(column)) === 'desc') {
                return h$1('span', { class: 'float-end me-1' }, slots.sortingIconDescending && slots.sortingIconDescending());
            }
            return;
        };
        const handleFilterInput = (key, value) => {
            emit('filterInput', key, value);
        };
        const handleFilterChange = (key, value) => {
            emit('filterChange', key, value);
        };
        return () => h$1(props.component === 'head' ? CTableHead : CTableFoot, {}, {
            default: () => [
                h$1(CTableRow, {}, {
                    default: () => props.columns.map((column, index) => h$1(CTableHeaderCell, {
                        ...tableHeaderCellProps(column),
                        onClick: () => handleSortClick(key(column), index),
                        style: tableHeaderCellStyles(column),
                    }, {
                        default: () => [
                            h$1('div', {
                                class: 'd-inline',
                            }, label(column)),
                            props.columnSorter &&
                                (typeof column !== 'object'
                                    ? true
                                    : typeof column.sorter === 'undefined'
                                        ? true
                                        : column.sorter) &&
                                columnSorterIcon(column),
                        ],
                    })),
                }),
                h$1(CTableRow, {}, {
                    default: () => props.columns.map((column) => h$1(CTableHeaderCell, {
                        ...tableHeaderCellProps(column),
                    }, {
                        default: () => (typeof column !== 'object'
                            ? true
                            : typeof column.filter === 'undefined'
                                ? true
                                : column.filter) &&
                            h$1(CFormInput, {
                                size: 'sm',
                                onInput: (event) => handleFilterInput(key(column), event.target.value),
                                onChange: (event) => handleFilterChange(key(column), event.target.value),
                                'aria-label': `column name: '${label(column)}' filter input`,
                                ...(props.columnFilter &&
                                    props.columnFilter[key(column)] && {
                                    value: props.columnFilter[key(column)],
                                }),
                            }),
                    })),
                }),
            ],
        });
    },
});

const CSmartTableFilterProps = {
    filterLabel: {
        type: String,
        require: false,
        default: 'Filter:',
    },
    filterPlaceholder: {
        type: String,
        require: false,
        default: 'type string...',
    },
    value: {
        type: [String, Number],
        require: false,
        default: '',
    },
};
const CSmartTableFilter = defineComponent({
    name: 'CSmartTableFilter',
    props: CSmartTableFilterProps,
    emits: ['filterInput', 'filterChange'],
    setup(props, { emit }) {
        const handleFilterInput = (event) => {
            const target = event.target;
            emit('filterInput', target.value);
        };
        const handleFilterChange = (event) => {
            const target = event.target;
            emit('filterChange', target.value);
        };
        return () => h$1('div', {
            class: 'row mb-2',
        }, {
            default: () => [
                h$1(CFormLabel, {
                    class: 'col-sm-auto col-form-label',
                }, {
                    default: () => props.filterLabel,
                }),
                h$1('div', {
                    class: 'col-sm-auto',
                }, h$1(CFormInput, {
                    placeholder: props.filterPlaceholder,
                    value: props.value,
                    onInput: handleFilterInput,
                    onChange: handleFilterChange,
                })),
            ],
        });
    },
});

const CSmartTableCleaner = defineComponent({
    name: 'CSmartTableCleaner',
    props: {
        isFiltered: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    emits: ['tableCleanerClick'],
    setup(props, { emit, slots }) {
        const handleClick = () => {
            emit('tableCleanerClick');
        };
        return () => h$1('button', {
            type: 'button',
            class: 'btn btn-transparent',
            ...(!props.isFiltered && { disabled: true, tabIndex: -1 }),
            onClick: handleClick,
        }, slots.cleanerIcon && slots.cleanerIcon());
    },
});

const CSmartTableItemsPerPageSelector = defineComponent({
    name: 'CSmartTableItemsPerPageSelector',
    props: {
        itemsPerPage: {
            type: Number,
            default: undefined,
            require: false,
        },
        itemsPerPageLabel: {
            type: String,
            default: undefined,
            require: false,
        },
        itemsPerPageOptions: {
            type: Array,
            default: () => [],
            require: false,
        },
    },
    emits: ['changeItemsPerPage'],
    setup(props, { emit }) {
        const handleChange = (event) => {
            const target = event.target;
            emit('changeItemsPerPage', Number(target.value));
        };
        return () => h$1('div', {
            class: 'row',
        }, {
            default: () => [
                h$1(CFormLabel, {
                    class: 'col-auto col-form-label',
                }, {
                    default: () => props.itemsPerPageLabel,
                }),
                h$1('div', {
                    class: 'col-auto',
                }, h$1(CFormSelect, {
                    defaultValue: props.itemsPerPage,
                    onChange: handleChange,
                }, {
                    default: () => props.itemsPerPageOptions &&
                        props.itemsPerPageOptions.map((number, index) => {
                            return h$1('option', {
                                value: number,
                                key: index,
                            }, number);
                        }),
                })),
            ],
        });
    },
});

const CIcon = defineComponent({
    name: 'CIcon',
    props: {
        /**
         * Use `:icon="..."` instead of
         *
         * @deprecated since version 3.0
         */
        content: {
            type: [String, Array],
            default: undefined,
            required: false,
        },
        /**
         * Use for replacing default CIcon component classes. Prop is overriding the 'size' prop.
         */
        customClassName: {
            type: [String, Array, Object],
            default: undefined,
            required: false,
        },
        /**
         * Name of the icon placed in React object or SVG content.
         */
        icon: {
            type: [String, Array],
            default: undefined,
            required: false,
        },
        /**
         * Use `icon="..."` instead of
         *
         * @deprecated since version 3.0
         */
        name: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Size of the icon. Available sizes: 'sm', 'lg', 'xl', 'xxl', '3xl...9xl', 'custom', 'custom-size'.
         */
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (value) => {
                return [
                    'custom',
                    'custom-size',
                    'sm',
                    'lg',
                    'xl',
                    '2xl',
                    '3xl',
                    '4xl',
                    '5xl',
                    '6xl',
                    '7xl',
                    '8xl',
                    '9xl',
                ].includes(value);
            },
        },
        /**
         * Title tag content.
         */
        title: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * If defined component will be rendered using 'use' tag.
         */
        use: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, { attrs }) {
        const icons = inject('icons');
        const _icon = props.icon || props.content || props.name;
        // if (props.content) {
        //   process &&
        //     process.env &&
        //     process.env.NODE_ENV === 'development' &&
        //     console.warn(
        //       '[CIcon] The `content` property is deprecated and will be removed in v3, please use `icon={...}` instead of.',
        //     )
        // }
        // if (props.name) {
        //   process &&
        //     process.env &&
        //     process.env.NODE_ENV === 'development' &&
        //     console.warn(
        //       '[CIcon] The `name` property is deprecated and will be removed in v3, please use `icon="..."` instead of.',
        //     )
        // }
        const toCamelCase = (str) => {
            return str
                .replace(/([-_][a-z0-9])/gi, ($1) => {
                return $1.toUpperCase();
            })
                .replace(/-/gi, '');
        };
        const iconName = computed(() => _icon && typeof _icon === 'string' ? (_icon.includes('-') ? toCamelCase(_icon) : _icon) : '');
        const titleCode = props.title ? `<title>${props.title}</title>` : 'undefined';
        const code = computed(() => Array.isArray(_icon)
            ? _icon
            : typeof _icon === 'string' && iconName.value && icons[iconName.value]
                ? icons[iconName.value]
                : 'undefined');
        const iconCode = Array.isArray(code.value) ? code.value[1] || code.value[0] : code.value;
        const scale = Array.isArray(code.value) && code.value.length > 1 ? code.value[0] : '64 64';
        const viewBox = attrs.viewBox || `0 0 ${scale}`;
        const size = () => {
            const addCustom = !props.size && (attrs.width || attrs.height);
            return props.size === 'custom' || addCustom ? 'custom-size' : props.size;
        };
        const classNames = (() => {
            return [props.customClassName || ['icon', { [`icon-${size()}`]: size() }], attrs.class];
        })();
        return () => props.use
            ? h$1('svg', {
                ...attrs,
                xmlns: 'http://www.w3.org/2000/svg',
                class: classNames,
                role: 'img',
            }, h$1('use', { href: props.use }))
            : h$1('svg', {
                ...attrs,
                xmlns: 'http://www.w3.org/2000/svg',
                class: classNames,
                viewBox: viewBox,
                innerHTML: `${titleCode}${iconCode}`,
                role: 'img',
            });
        // return () => [
        //   !props.src &&
        //     !props.use &&
        //     h('svg', {
        //       ...attrs,
        //       xmlns: 'http://www.w3.org/2000/svg',
        //       class: classNames,
        //       viewBox: viewBox,
        //       innerHTML: `${titleCode}${iconCode}`,
        //       role: 'img',
        //     }),
        //   props.src &&
        //     !props.use &&
        //     h('img', {
        //       ...attrs,
        //       class: classNames,
        //       src: props.src,
        //       role: 'img',
        //     }),
        //   !props.src &&
        //     props.use &&
        //     h(
        //       'svg',
        //       {
        //         ...attrs,
        //         xmlns: 'http://www.w3.org/2000/svg',
        //         class: classNames,
        //         role: 'img',
        //       },
        //       h('use', { href: props.use }),
        //     ),
        // ]
    },
});

const cilArrowBottom = ["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75' class='ci-primary'/>"];

const cilArrowTop = ["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625' class='ci-primary'/>"];

const cilFilterX = ["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='40 16 40 53.828 109.024 136 150.815 136 76.896 48 459.51 48 304 242.388 304 401.373 241.373 464 240 464 240 368 208 368 208 496 254.627 496 336 414.627 336 253.612 496 53.612 496 16 40 16' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='166.403 248.225 226.864 187.763 204.237 165.135 143.775 225.597 83.313 165.135 60.687 187.763 121.148 248.225 60.687 308.687 83.313 331.314 143.775 270.852 204.237 331.314 226.864 308.687 166.403 248.225' class='ci-primary'/>"];

const cilSwapVertical = ["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='384 433.373 384 160 352 160 352 434.51 282.177 364.687 259.55 387.313 367.432 495.196 475.313 387.313 452.687 364.687 384 433.373' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='159.432 17.372 51.55 125.255 74.177 147.882 144 78.059 144 352 176 352 176 79.195 244.687 147.882 267.313 125.255 159.432 17.372' class='ci-primary'/>"];

const CSmartTable = defineComponent({
    name: 'CSmartTable',
    props: {
        /**
         * Sets active page. If 'pagination' prop is enabled, activePage is set only initially.
         *
         * @default 1
         */
        activePage: {
            type: Number,
            default: 1,
            required: false,
        },
        /**
         * When set, displays table cleaner above table, next to the table filter (or in place of table filter if `tableFilter` prop is not set)
         * Cleaner resets `tableFilterValue`, `columnFilterValue`, `sorterValue`. If clean is possible it is clickable (`tabIndex="0"` `role="button"`, `color="danger"`), otherwise it is not clickable and transparent. Cleaner can be customized through the `cleaner` slot.
         *
         */
        cleaner: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * Style table items as clickable.
         *
         * @type boolean
         */
        clickableRows: {
            type: Boolean,
            required: false,
        },
        /**
         * When set, displays additional filter row between table header and items, allowing filtering by specific column.
         * Column filter can be customized, by passing prop as object with additional options as keys. Available options:
         * - external (Boolean) - Disables automatic filtering inside component.
         * - lazy (Boolean) - Set to true to trigger filter updates only on change event.
         *
         * @type boolean | ColumnFilter
         */
        columnFilter: {
            type: [Boolean, Object],
            default: undefined,
            required: false,
        },
        /**
         * Value of table filter. To set pass object where keys are column names and values are filter strings e.g.:
         * { user: 'John', age: 12 }
         * You can track state of this prop by setting .sync modifier.
         */
        columnFilterValue: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. '_classes')
         *
         * In columns prop each array item represents one column. Item might be specified in two ways:
         * String: each item define column name equal to item value.
         * Object: item is object with following keys available as column configuration:
         * - key (required)(String) - define column name equal to item key.
         * - label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word.
         * - _classes (String/Array/Object) - adds classes to all cels in column
         * - _style (String/Array/Object) - adds styles to the column header (useful for defining widths)
         * - sorter (Boolean) - disables sorting of the column when set to false
         * - filter (Boolean) - removes filter from column when set to false.
         */
        columns: {
            type: Array,
            default: () => [],
            required: false,
        },
        /**
         * Enables table sorting by column value. Sorting will be performed corectly only if values in column are of one type: string (case insensitive) or number.
         *
         * Sorter can be customized, by passing prop as object with additional options as keys. Available options:
         * - external (Boolean) - Disables automatic sorting inside component.
         * - resetable (Boolean) - If set to true clicking on sorter have three states: ascending, descending and null. That means that third click on sorter will reset sorting, and restore table to original order.
         *
         * @type boolean | Sorter
         */
        columnSorter: {
            type: [Boolean, Object],
            default: undefined,
            required: false,
        },
        /**
         * Displays table footer, which mirrors table header. (without column filter).
         */
        footer: {
            type: Boolean,
            required: false,
        },
        /**
         * Set to false to remove table header.
         *
         * @default true
         */
        header: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_classes' key and to single cell by '_cellClasses'.
         */
        items: {
            type: Array,
            default: () => [],
            required: false,
        },
        /**
         * Number of items per site, when pagination is enabled.
         *
         * @default 10
         */
        itemsPerPage: {
            type: Number,
            default: 10,
            required: false,
        },
        /**
         * Label for items per page selector.
         *
         * @default 'Items per page:'
         */
        itemsPerPageLabel: {
            type: String,
            required: false,
            default: 'Items per page:',
        },
        /**
         * Items per page selector options.
         *
         * @default [5, 10, 20, 50]
         */
        itemsPerPageOptions: {
            type: Array,
            default: () => [5, 10, 20, 50],
            required: false,
        },
        /**
         * Adds select element over table, which is used for control items per page in pagination. If you want to customize this element, pass object with optional values:
         * - label (String) - replaces default label text
         * - values (Array) - custom array of pagination values
         * - external (Boolean) - disables automatic 'itemsPerPage' change (use to change pages externaly by 'pagination-change' event).
         */
        itemsPerPageSelect: {
            type: [Boolean, Object],
            default: undefined,
            required: false,
        },
        /**
         * When set, table will have loading style: loading spinner and reduced opacity. When 'small' prop is enabled spinner will be also smaller.
         */
        loading: {
            type: Boolean,
            required: false,
        },
        /**
         * ReactNode or string for passing custom noItemsLabel texts.
         * @default 'No items found'
         */
        noItemsLabel: {
            type: String,
            default: 'No items found',
            required: false,
        },
        /**
         * Enables default pagination. Set to true for default setup or pass an object with additional CPagination props. Default pagination will always have the computed number of pages that cannot be changed. The number of pages is generated based on the number of passed items and 'itemsPerPage' prop. If this restriction is an obstacle, you can make external CPagination instead.
         */
        pagination: {
            type: Boolean,
            required: false,
        },
        /**
         * Properties to `CSmartPagination` component.
         *
         * @link https://coreui.io/vue/docs/4.0/components/smart-pagination#csmartpagination
         */
        paginationProps: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * State of the sorter. Name key is column name, direction can be 'asc' or 'desc'. Set .sync modifier to track changes.
         *
         * @type SorterValue
         */
        sorterValue: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * Properties to `CTableBody` component.
         *
         * @link https://coreui.io/vue/docs/4.0/components/table/#ctablebody
         */
        tableBodyProps: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * Properties to `CTableFoot` component.
         *
         * @link https://coreui.io/vue/docs/4.0/components/table/#ctablefoot
         */
        tableFootProps: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * When set, displays table filter above table, allowing filtering by specific column.
         *
         * Column filter can be customized, by passing prop as object with additional options as keys. Available options:
         * - placeholder (String) - Sets custom table filter placeholder.
         * - label (String) - Sets custom table filter label.
         * - external (Boolean) - Disables automatic filtering inside component.
         * - lazy (Boolean) - Set to true to trigger filter updates only on change event.
         */
        tableFilter: {
            type: [Boolean, Object],
            default: undefined,
            required: false,
        },
        /**
         * The element represents a caption for a component.
         */
        tableFilterLabel: {
            type: String,
            default: 'Filter:',
            required: false,
        },
        /**
         * Specifies a short hint that is visible in the search input.
         *
         * @default 'type string...'
         */
        tableFilterPlaceholder: {
            type: String,
            default: 'type string...',
            required: false,
        },
        /**
         * Value of table filter. Set .sync modifier to track changes.
         *
         * @default 'Filter:'
         */
        tableFilterValue: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Properties to `CTableHead` component.
         *
         * @link https://coreui.io/vue/docs/4.0/components/table/#ctablehead
         */
        tableHeadProps: {
            type: Object,
            default: undefined,
            required: false,
        },
        /**
         * Properties to `CTable` component.
         *
         * @link https://coreui.io/vue/docs/4.0/components/table/#ctable
         */
        tableProps: {
            type: Object,
            default: undefined,
            required: false,
        },
    },
    emits: [
        /**
         * Page change callback.
         *
         * @property {number} page - active page number
         */
        'activePageChange',
        /**
         * Column filter change callback.
         *
         * @property {object} ColumnFilterValue {[key: string]: string | number}
         */
        'columnFilterChange',
        /**
         * Filtered items change callback.
         *
         * @property {array} items
         */
        'filteredItemsChange',
        /**
         * Pagination change callback.
         *
         * @property {number} itemsPerPageNumber - items per page number
         */
        'itemsPerPageChange',
        /**
         * Row click callback.
         *
         * @property {object} item
         * @property {number} index
         * @property {string} columnName
         * @property {event} event
         */
        'rowClick',
        /**
         * Sorter value change callback.
         *
         * @property {object} SorterValue { column?: string, state?: number | string}
    }
         */
        'sorterChange',
        /**
         * Table filter change callback.
         *
         * @property {string} tableFilterValue
         */
        'tableFilterChange',
    ],
    setup(props, { emit, slots }) {
        // reactive data
        const itemsPerPage = ref(props.itemsPerPage);
        const activePage = ref(props.activePage);
        const sorterState = reactive(props.sorterValue || {});
        const columnFilterState = ref(props.columnFilterValue ? props.columnFilterValue : {});
        const tableFilterState = ref(props.tableFilterValue ? props.tableFilterValue : '');
        // functions
        const isSortable = (i) => {
            const isDataColumn = itemsDataColumns.value.includes(rawColumnNames[i]);
            let column;
            if (props.columns)
                column = props.columns[i];
            return (props.columnSorter &&
                (!props.columns ||
                    typeof column !== 'object' ||
                    (typeof column === 'object' &&
                        (typeof column.sorter === 'undefined' || column.sorter))) &&
                isDataColumn);
        };
        const sorterChange = (column, index) => {
            if (!isSortable(index)) {
                return;
            }
            //if column changed or sort was descending change asc to true
            const state = sorterState;
            if (state.column === column) {
                if (state.state === 0) {
                    state.state = 'asc';
                }
                else if (state.state === 'asc') {
                    state.state = 'desc';
                }
                else {
                    state.state = 0;
                }
            }
            else {
                state.column = column;
                state.state = 'asc';
            }
            sorterState.column = state.column;
            sorterState.state = state.state;
            emit('sorterChange', sorterState);
        };
        const handleActivePageChange = (page) => {
            activePage.value = page;
            // currentItems.value = updatePage(sortedItems)
            emit('activePageChange', page);
        };
        const handleItemsPerPageChange = (itemsPerPageNumber) => {
            itemsPerPage.value = itemsPerPageNumber;
            handleActivePageChange(1);
            emit('itemsPerPageChange', itemsPerPageNumber);
        };
        const handleRowClick = (item, index, columnName, event) => {
            emit('rowClick', item, index, columnName, event);
        };
        const columnFilterChange = (colName, value, type) => {
            const isLazy = props.columnFilter &&
                typeof props.columnFilter === 'object' &&
                props.columnFilter.lazy === true;
            if ((isLazy && type === 'input') || (!isLazy && type === 'change')) {
                return;
            }
            columnFilterState.value = { ...columnFilterState.value, [`${colName}`]: value };
            emit('columnFilterChange', columnFilterState.value);
        };
        const tableFilterChange = (value, type) => {
            const isLazy = props.columnFilter &&
                typeof props.columnFilter === 'object' &&
                props.columnFilter.lazy === true;
            if ((isLazy && type === 'input') || (!isLazy && type === 'change')) {
                return;
            }
            tableFilterState.value = value;
            emit('tableFilterChange', tableFilterState);
        };
        const clean = () => {
            tableFilterState.value = '';
            columnFilterState.value = {};
            sorterState.column = '';
            sorterState.state = '';
        };
        // computed
        const genCols = Object.keys(props.items[0] || {}).filter((el) => el.charAt(0) !== '_');
        const rawColumnNames = props.columns
            ? props.columns.map((column) => {
                if (typeof column === 'object')
                    return column.key;
                else
                    return column;
            })
            : genCols; //! || el
        const itemsDataColumns = computed(() => rawColumnNames.filter((name) => genCols.includes(name)));
        // variables
        const columnFiltered = () => {
            let items = props.items;
            if (props.columnFilter &&
                typeof props.columnFilter === 'object' &&
                props.columnFilter.external) {
                return items;
            }
            Object.entries(columnFilterState.value).forEach(([key, value]) => {
                const columnFilter = String(value).toLowerCase();
                if (columnFilter && itemsDataColumns.value.includes(key)) {
                    items = items.filter((item) => {
                        return String(item[key]).toLowerCase().includes(columnFilter);
                    });
                }
            });
            return items;
        };
        const tableFiltered = computed(() => {
            let items = columnFiltered();
            if (!tableFilterState.value ||
                (props.tableFilter && typeof props.tableFilter === 'object' && props.tableFilter.external)) {
                return items;
            }
            const filter = tableFilterState.value.toLowerCase();
            const valueContainFilter = (val) => String(val).toLowerCase().includes(filter);
            items = items.filter((item) => {
                return !!itemsDataColumns.value.find((key) => valueContainFilter(item[key]));
            });
            emit('filteredItemsChange', items);
            return items;
        });
        const sortedItems = computed(() => {
            const col = sorterState.column;
            if (!col ||
                !itemsDataColumns.value.includes(col) ||
                (props.columnSorter &&
                    typeof props.columnSorter === 'object' &&
                    props.columnSorter.external)) {
                return tableFiltered.value;
            }
            //if values in column are to be sorted by numeric value they all have to be type number
            // const flip = sorterState.asc ? 1 : -1
            const flip = sorterState.state === 'asc' ? 1 : sorterState.state === 'desc' ? -1 : 0;
            const sorted = tableFiltered.value.slice().sort((item, item2) => {
                const value = item[col];
                const value2 = item2[col];
                const a = typeof value === 'number' ? value : String(value).toLowerCase();
                const b = typeof value2 === 'number' ? value2 : String(value2).toLowerCase();
                return a > b ? 1 * flip : b > a ? -1 * flip : 0;
            });
            return sorted;
        });
        const numberOfPages = computed(() => itemsPerPage.value ? Math.ceil(sortedItems.value.length / itemsPerPage.value) : 1); //!ok ||
        const firstItemOnActivePageIndex = computed(() => activePage.value ? (activePage.value - 1) * itemsPerPage.value : 0); //!ok
        const itemsOnActivePage = computed(() => sortedItems.value.slice(firstItemOnActivePageIndex.value, firstItemOnActivePageIndex.value + itemsPerPage.value));
        const currentItems = computed(() => activePage.value ? itemsOnActivePage.value : sortedItems.value);
        const isFiltered = computed(() => {
            return (tableFilterState.value ||
                sorterState.column ||
                Object.values(columnFilterState.value).join(''));
        });
        return () => h$1('div', {}, [
            h$1('div', {
                class: 'row my-2 mx-0',
            }, {
                default: () => (props.tableFilter || props.cleaner) && [
                    h$1('div', {
                        class: 'col-auto p-0',
                    }, props.tableFilter &&
                        h$1(CSmartTableFilter, {
                            onFilterInput: (value) => tableFilterChange(value, 'input'),
                            onFilterChange: (value) => tableFilterChange(value, 'change'),
                            value: tableFilterState.value,
                        })),
                    h$1('div', {
                        class: 'col-auto p-0',
                    }, props.cleaner &&
                        h$1(CSmartTableCleaner, {
                            onClick: () => clean(),
                            isFiltered: isFiltered.value,
                        }, {
                            // @slot Cleaner icon.
                            cleanerIcon: () => slots.cleanerIcon
                                ? slots.cleanerIcon()
                                : h$1(CIcon, { width: '18', content: cilFilterX }),
                        })),
                ],
            }),
            h$1('div', {
                class: 'position-relative',
            }, {
                default: () => [
                    h$1(CTable, {
                        ...props.tableProps,
                    }, {
                        default: () => [
                            props.header &&
                                h$1(CSmartTableHead, {
                                    component: 'head',
                                    ...props.tableHeadProps,
                                    columnFilter: columnFilterState.value,
                                    columns: props.columns,
                                    columnSorter: props.columnSorter,
                                    sorterState: sorterState,
                                    onFilterInput: (key, value) => columnFilterChange(key, value, 'input'),
                                    onFilterChange: (key, value) => columnFilterChange(key, value, 'change'),
                                    onSortClick: (key, index) => sorterChange(key, index),
                                }, {
                                    // @slot Sorter icon when items are unsorted.
                                    sortingIcon: () => slots.sortingIcon
                                        ? slots.sortingIcon()
                                        : h$1('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            class: 'icon',
                                            viewBox: '0 0 512 512',
                                            role: 'img',
                                            innerHTML: cilSwapVertical[1],
                                        }),
                                    // @slot Sorter icon when items are sorted ascending.
                                    sortingIconAscending: () => slots.sortingIconAscending
                                        ? slots.sortingIconAscending()
                                        : // : h(CIcon, { content: cilArrowBottom }, 'b'),
                                            h$1('svg', {
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                class: 'icon',
                                                viewBox: '0 0 512 512',
                                                role: 'img',
                                                innerHTML: cilArrowBottom[1],
                                            }),
                                    // @slot  Sorter icon when items are sorted descending.
                                    sortingIconDescending: () => slots.sortingIconDescending
                                        ? slots.sortingIconDescending()
                                        : // : h(CIcon, { content: cilArrowTop }, 'c'),
                                            h$1('svg', {
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                class: 'icon',
                                                viewBox: '0 0 512 512',
                                                role: 'img',
                                                innerHTML: cilArrowTop[1],
                                            }),
                                }),
                            h$1(CSmartTableBody, {
                                currentItems: currentItems.value,
                                firstItemOnActivePageIndex: firstItemOnActivePageIndex.value,
                                noItemsLabel: props.noItemsLabel,
                                columns: props.columns,
                                scopedSlots: slots,
                                onRowClick: (item, index, columnName, event) => handleRowClick(item, index, columnName, event),
                                rawColumnNames: rawColumnNames,
                                clickableRows: props.clickableRows,
                                ...props.tableBodyProps,
                            }),
                            props.footer &&
                                h$1(CSmartTableHead, {
                                    component: 'footer',
                                    ...props.tableFootProps,
                                    columnFilter: false,
                                    columnSorter: false,
                                    columns: props.columns,
                                    onFilterInput: (key, value) => columnFilterChange(key, value, 'input'),
                                    onFilterChange: (key, value) => columnFilterChange(key, value, 'change'),
                                }),
                        ],
                    }),
                    props.loading &&
                        h$1(CElementCover, {
                            boundaries: [
                                { sides: ['top'], query: 'td' },
                                { sides: ['bottom'], query: 'tbody' },
                            ],
                        }),
                ],
            }),
            (props.pagination || props.itemsPerPageSelect) &&
                h$1('div', {
                    class: 'row',
                }, [
                    h$1('div', {
                        class: 'col-auto',
                    }, props.pagination && numberOfPages.value > 1
                        ? h$1(CSmartPagination, {
                            ...props.paginationProps,
                            pages: numberOfPages.value,
                            activePage: 1,
                            onActivePageChange: handleActivePageChange,
                            limit: itemsPerPage.value,
                        })
                        : ''),
                    h$1('div', {
                        class: 'col-auto ms-auto',
                    }, props.itemsPerPageSelect &&
                        h$1(CSmartTableItemsPerPageSelector, {
                            itemsPerPage: itemsPerPage.value,
                            itemsPerPageLabel: props.itemsPerPageLabel,
                            itemsPerPageOptions: props.itemsPerPageOptions,
                            onChangeItemsPerPage: handleItemsPerPageChange,
                        })),
                ]),
        ]); //h
    },
});

const CSmartTablePlugin = {
    install: (app) => {
        app.component(CSmartTable.name, CSmartTable);
    },
};

const CTabContent = defineComponent({
    name: 'CNavGroupItems',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'tab-content' }, slots.default && slots.default());
    },
});

const CTabPane = defineComponent({
    name: 'CTabPane',
    props: {
        /**
         * Toggle the visibility of component.
         */
        visible: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    setup(props, { slots }) {
        const { visible } = toRefs(props);
        return () => h$1('div', {
            class: [
                'tab-pane',
                'fade',
                {
                    'show active': visible.value,
                },
            ],
        }, slots.default && slots.default());
    },
});

const CTabsPlugin = {
    install: (app) => {
        app.component(CTabContent.name, CTabContent);
        app.component(CTabPane.name, CTabPane);
    },
};

const CToast = defineComponent({
    name: 'CToast',
    props: {
        /**
         * Auto hide the toast.
         *
         * @default true
         */
        autohide: {
            type: Boolean,
            default: true,
            required: false,
        },
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @default 'primary'
         * @value 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
         */
        color: Color,
        /**
         * Delay hiding the toast (ms).
         */
        delay: {
            type: Number,
            default: 5000,
            required: false,
        },
        /**
         * Optionally add a close button to component and allow it to self dismiss.
         *
         * @default true
         */
        dismissible: {
            type: Boolean,
            default: true,
            required: false,
        },
        key: {
            type: Number,
            default: undefined,
            required: false,
        },
        /**
         * Title node for your component.
         */
        title: {
            type: String,
            default: undefined,
            required: false,
        },
        /**
         * Toggle the visibility of component.
         *
         * @default true
         */
        visible: {
            type: Boolean,
            default: true,
            required: false,
        },
    },
    emits: [
        /**
         * Event called before the dissmiss animation has started.
         */
        'dismiss',
    ],
    setup(props, { slots, emit }) {
        const visible = ref(props.visible);
        let timeout = 0;
        const updateVisible = (v) => {
            visible.value = v;
        };
        provide('updateVisible', updateVisible);
        const handleEnter = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            setTimeout(() => {
                el.classList.add('show');
            }, 1);
        };
        const handleBeforeLeave = (el) => {
            el.classList.remove('show');
        };
        const handleLeave = (el, done) => {
            el.addEventListener('transitionend', () => {
                done();
            });
            el.classList.remove('show');
        };
        const handleAfterLeave = (el) => {
            el.classList.add('hide');
            if (props.key) {
                emit('dismiss', props.key);
            }
            else {
                emit('dismiss');
            }
        };
        onMounted(() => {
            if (props.autohide) {
                clearTimeout(timeout);
                timeout = window.setTimeout(() => {
                    visible.value = false;
                }, props.delay);
            }
        });
        return () => h$1(Transition, {
            appear: true,
            onEnter: (el, done) => handleEnter(el, done),
            onBeforeLeave: (el) => handleBeforeLeave(el),
            onLeave: (el, done) => handleLeave(el, done),
            onAfterLeave: (el) => handleAfterLeave(el),
        }, () => visible.value &&
            h$1('div', {
                class: [
                    'toast fade',
                    {
                        [`bg-${props.color}`]: props.color,
                    },
                ],
                'aria-live': 'assertive',
                'aria-atomic': true,
                role: 'alert',
                ref: 'toastRef',
            }, slots.default && slots.default()));
    },
});

const CToastBody = defineComponent({
    name: 'CToastBody',
    setup(_, { slots }) {
        return () => h$1('div', { class: 'toast-body' }, slots.default && slots.default());
    },
});

const CToastClose = defineComponent({
    name: 'CToastClose',
    props: {
        /**
         * Component used for the root node. Either a string to use a HTML element or a component.
         */
        component: {
            type: String,
            default: undefined,
            required: false,
        },
        ...CCloseButton.props,
    },
    emits: ['dismiss'],
    setup(props, { slots, emit }) {
        const updateVisible = inject('updateVisible');
        const handleClose = () => {
            emit('dismiss');
            updateVisible(false);
        };
        return () => props.component
            ? h$1(resolveComponent(props.component), {
                onClick: () => {
                    handleClose();
                },
            }, slots.default && slots.default())
            : h$1(CCloseButton, {
                ...props,
                onClick: () => {
                    handleClose();
                },
            });
    },
});

const CToaster = defineComponent({
    name: 'CToaster',
    props: {
        /**
         * Describes the placement of component.
         *
         * @values 'top-start', 'top', 'top-end', 'middle-start', 'middle', 'middle-end', 'bottom-start', 'bottom', 'bottom-end'
         * @default 'top-end'
         */
        placement: {
            type: String,
            default: undefined,
            require: false,
            validator: (value) => {
                return [
                    'top-start',
                    'top-center',
                    'top-end',
                    'middle-start',
                    'middle-center',
                    'middle-end',
                    'bottom-start',
                    'bottom-center',
                    'bottom-end',
                ].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        return () => h$1('div', {
            class: [
                'toaster toast-container p-3',
                {
                    'position-fixed': props.placement,
                    'top-0': props.placement && props.placement.includes('top'),
                    'top-50 translate-middle-y': props.placement && props.placement.includes('middle'),
                    'bottom-0': props.placement && props.placement.includes('bottom'),
                    'start-0': props.placement && props.placement.includes('start'),
                    'start-50 translate-middle-x': props.placement && props.placement.includes('center'),
                    'end-0': props.placement && props.placement.includes('end'),
                },
            ],
        }, slots.default && slots.default());
    },
});

const CToastHeader = defineComponent({
    name: 'CToastHeader',
    props: {
        /**
         * Automatically add a close button to the header.
         */
        close: {
            type: Boolean,
            require: false,
        },
    },
    setup(props, { slots, emit }) {
        const handleClose = () => {
            /**
             * Event called after clicking the close button.
             */
            emit('close');
        };
        return () => h$1('div', { class: 'toast-header' }, [
            slots.default && slots.default(),
            props.close &&
                h$1(CToastClose, {
                    onClose: () => handleClose(),
                }),
        ]);
    },
});

const CToastPlugin = {
    install: (app) => {
        app.component(CToast.name, CToast);
        app.component(CToastBody.name, CToastBody);
        app.component(CToastClose.name, CToastClose);
        app.component(CToaster.name, CToaster);
        app.component(CToastHeader.name, CToastHeader);
    },
};

const CWidgetStatsA = defineComponent({
    name: 'CWidgetStatsA',
    props: {
        color: {
            type: String,
            default: undefined,
            require: false,
        },
        /**
         * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
         */
        title: {
            type: String,
            default: undefined,
            require: false,
        },
        /**
         * Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>`
         */
        value: {
            type: [Number, String],
            default: 0,
            require: false,
        },
    },
    /**
     * Location for action component, ex. `<CDropdown>`.
     *
     * @slot action
     */
    /**
     * Location for chart component.
     *
     * @slot chart
     */
    setup(props, { slots }) {
        return () => h$1(CCard, {
            class: [
                { [`bg-${props.color}`]: props.color, 'text-high-emphasis-inverse': props.color },
            ],
        }, () => [
            h$1(CCardBody, {
                class: 'pb-0 d-flex justify-content-between align-items-start',
            }, () => [
                h$1('div', {}, [
                    (props.value || slots.value) &&
                        h$1('div', { class: 'fs-4 fw-semibold' }, {
                            default: () => (slots.value && slots.value()) || props.value,
                        }),
                    (props.title || slots.title) &&
                        h$1('div', {}, {
                            default: () => (slots.title && slots.title()) || props.title,
                        }),
                ]),
                /**
                 * @slot Location for action component, ex. `<CDropdown>`.
                 */
                slots.action && slots.action(),
            ]),
            /**
             * @slot Location for chart component.
             */
            slots.chart && slots.chart(),
            slots.default && slots.default(),
        ]);
    },
});

const CWidgetStatsB = defineComponent({
    name: 'CWidgetStatsB',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors
         *
         * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
         */
        color: Color,
        /**
         * Colors have been inverted from their default dark shade.
         */
        inverse: {
            type: Boolean,
            default: undefined,
            require: false,
        },
        progress: I({
            /**
             * Sets the color context of the progress bar to one of CoreUI’s themed colors
             *
             * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
             */
            color: Color,
            /**
             * The percent to progress the ProgressBar (out of 100).
             * @default 0
             */
            value: {
                type: Number,
                default: 0,
            },
        }),
        /**
         * Helper text for your component. If you want to pass non-string value please use dedicated slot `<template #text>...</template>`
         */
        text: {
            type: String,
            default: undefined,
            require: false,
        },
        /**
         * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
         */
        title: {
            type: String,
            default: undefined,
            require: false,
        },
        /**
         * Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>`
         */
        value: {
            type: [Number, String],
            default: 0,
            require: false,
        },
    },
    setup(props, { slots }) {
        return () => h$1(CCard, {
            class: [
                {
                    ['text-high-emphasis-inverse']: props.inverse,
                },
            ],
            color: props.color,
        }, () => h$1(CCardBody, {
            class: 'card-body',
        }, () => [
            (props.value || slots.value) &&
                h$1('div', {
                    class: 'fs-4 fw-semibold',
                }, {
                    default: () => (slots.value && slots.value()) || props.value,
                }),
            (props.title || slots.title) &&
                h$1('div', {}, {
                    default: () => (slots.title && slots.title()) || props.title,
                }),
            h$1(CProgress, {
                class: 'my-2',
                ...(props.progress && props.progress.color && { color: props.progress.color }),
                height: 4,
                ...(props.progress && props.progress.value && { value: props.progress.value }),
                white: props.inverse,
            }),
            (props.text || slots.text) &&
                h$1('small', {
                    class: [
                        props.inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis',
                    ],
                }, {
                    default: () => (slots.text && slots.text()) || props.text,
                }),
        ]));
    },
});

const CWidgetStatsC = defineComponent({
    name: 'CWidgetStatsC',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
         *
         * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
         */
        color: Color,
        /**
         * Colors have been inverted from their default dark shade.
         */
        inverse: {
            type: Boolean,
            default: undefined,
            require: false,
        },
        progress: I({
            /**
             * Sets the color context of the progress bar to one of CoreUI’s themed colors
             *
             * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
             */
            color: Color,
            /**
             * The percent to progress the ProgressBar (out of 100).
             * @default 0
             */
            value: {
                type: Number,
                default: 0,
            },
        }),
        /**
         * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
         */
        title: {
            type: String,
            default: undefined,
            require: false,
        },
        /**
         * Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>`
         */
        value: {
            type: [Number, String],
            default: 0,
            require: false,
        },
    },
    /**
     * Location for icon component.
     *
     * @slot icon
     */
    setup(props, { slots }) {
        return () => h$1(CCard, {
            class: [
                {
                    ['text-white']: props.inverse,
                },
            ],
            color: props.color,
        }, () => h$1(CCardBody, {
            class: 'card-body',
        }, () => [
            slots.icon &&
                h$1('div', {
                    class: [
                        'text-end mb-4',
                        props.inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis',
                    ],
                }, slots.icon && slots.icon()),
            (props.value || slots.value) &&
                h$1('div', {
                    class: 'fs-4 fw-semibold',
                }, {
                    default: () => (slots.value && slots.value()) || props.value,
                }),
            (props.title || slots.title) &&
                h$1('div', {
                    class: [
                        'text-uppercase fw-semibold small',
                        props.inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis',
                    ],
                }, {
                    default: () => (slots.title && slots.title()) || props.title,
                }),
            h$1(CProgress, {
                class: 'my-2',
                ...(props.progress && props.progress.color && { color: props.progress.color }),
                height: 4,
                ...(props.progress && props.progress.value && { value: props.progress.value }),
                white: props.inverse,
            }),
        ]));
    },
});

const CWidgetStatsD = defineComponent({
    name: 'CWidgetStatsD',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
         *
         * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
         */
        color: Color,
        /**
         * Values and titles for your component.
         */
        values: {
            type: Array,
            default: () => [],
            require: false,
        },
    },
    /**
     * Location for icon component, ex. `<CDropdown>`.
     *
     * @slot icon
     */
    /**
     * Location for chart component.
     *
     * @slot chart
     */
    setup(props, { slots }) {
        return () => h$1(CCard, {}, {
            default: () => [
                h$1(CCardHeader, {
                    class: [
                        'position-relative d-flex justify-content-center align-items-center',
                        {
                            [`bg-${props.color}`]: props.color,
                        },
                    ],
                }, () => [slots.icon && slots.icon(), slots.chart && slots.chart()]),
                h$1(CCardBody, {
                    class: 'row text-center',
                }, {
                    default: () => props.values &&
                        props.values.map((value, index) => [
                            index % 2 !== 0 && h$1('div', { class: 'vr' }),
                            h$1(CCol, {}, {
                                default: () => [
                                    h$1(CCol, { class: 'fs-5 fw-semibold' }, () => value.value),
                                    h$1(CCol, { class: 'text-uppercase text-medium-emphasis small' }, () => value.title),
                                ],
                            }),
                        ]),
                }),
            ],
        });
    },
});

const CWidgetStatsE = defineComponent({
    name: 'CWidgetStatsE',
    props: {
        /**
         * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
         */
        title: {
            type: String,
            default: undefined,
            require: false,
        },
        /**
         * Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>`
         */
        value: {
            type: [Number, String],
            default: 0,
            require: false,
        },
    },
    /**
     * Location for chart component.
     *
     * @slot chart
     */
    setup(props, { slots }) {
        return () => h$1(CCard, {}, () => h$1(CCardBody, {
            class: 'text-center',
        }, () => [
            (props.title || slots.title) &&
                h$1('div', {
                    class: 'text-muted small text-uppercase font-weight-bold',
                }, {
                    default: () => (slots.title && slots.title()) || props.title,
                }),
            (props.value || slots.value) &&
                h$1('div', {
                    class: 'h2 py-3',
                }, {
                    default: () => (slots.value && slots.value()) || props.value,
                }),
            slots.chart && slots.chart(),
            slots.default && slots.default(),
        ]));
    },
});

const CWidgetStatsF = defineComponent({
    name: 'CWidgetStatsF',
    props: {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
         *
         * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
         */
        color: Color,
        /**
         * Set padding of your component. [docs]
         */
        padding: {
            type: Boolean,
            default: true,
        },
        /**
         * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
         */
        title: {
            type: String,
            default: undefined,
            require: false,
        },
        /**
         * Helper text for your component. If you want to pass non-string value please use dedicated slot `<template #text>...</template>`
         */
        text: {
            type: String,
            default: undefined,
            require: false,
        },
        /**
         * Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>`
         */
        value: {
            type: [Number, String],
            default: 0,
            require: false,
        },
    },
    /**
     * Location for icon component.
     *
     * @slot icon
     */
    setup(props, { slots }) {
        return () => h$1(CCard, {}, {
            default: () => [
                h$1(CCardBody, {
                    class: ['d-flex align-items-center', props.padding === false && 'p-0'],
                }, () => [
                    h$1('div', {
                        class: [
                            'me-3',
                            'text-white',
                            `bg-${props.color}`,
                            props.padding ? 'p-3' : 'p-4',
                        ],
                    }, (slots.default && slots.default()) || (slots.icon && slots.icon())),
                    h$1('div', {}, [
                        (props.value || slots.value) &&
                            h$1('div', {
                                class: [`fs-6 fw-semibold text-${props.color}`],
                            }, {
                                default: () => (slots.value && slots.value()) || props.value,
                            }),
                        (props.title || slots.title) &&
                            h$1('div', {
                                class: 'text-medium-emphasis text-uppercase fw-semibold small',
                            }, {
                                default: () => (slots.title && slots.title()) || props.title,
                            }),
                    ]),
                ]),
                slots.footer && h$1(CCardFooter, {}, () => slots.footer && slots.footer()),
            ],
        });
    },
});

const CWidgetsStatsPlugin = {
    install: (app) => {
        app.component(CWidgetStatsA.name, CWidgetStatsA);
        app.component(CWidgetStatsB.name, CWidgetStatsB);
        app.component(CWidgetStatsC.name, CWidgetStatsC);
        app.component(CWidgetStatsD.name, CWidgetStatsD);
        app.component(CWidgetStatsE.name, CWidgetStatsE);
        app.component(CWidgetStatsF.name, CWidgetStatsF);
    },
};

var Components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CAccordionPlugin: CAccordionPlugin,
    CAccordion: CAccordion,
    CAccordionBody: CAccordionBody,
    CAccordionButton: CAccordionButton,
    CAccordionCollapse: CAccordionCollapse,
    CAccordionHeader: CAccordionHeader,
    CAccordionItem: CAccordionItem,
    CAlertPlugin: CAlertPlugin,
    CAlert: CAlert,
    CAlertHeading: CAlertHeading,
    CAlertLink: CAlertLink,
    CAvatarPlugin: CAvatarPlugin,
    CAvatar: CAvatar,
    CBackdropPlugin: CBackdropPlugin,
    CBackdrop: CBackdrop,
    CBadge: CBadge,
    CBadgePlugin: CBadgePlugin,
    CBreadcrumbPlugin: CBreadcrumbPlugin,
    CBreadcrumb: CBreadcrumb,
    CBreadcrumbItem: CBreadcrumbItem,
    CButtonPlugin: CButtonPlugin,
    CButton: CButton,
    CButtonGroupPlugin: CButtonGroupPlugin,
    CButtonToolbar: CButtonToolbar,
    CButtonGroup: CButtonGroup,
    CCalloutPlugin: CCalloutPlugin,
    CCallout: CCallout,
    CCardPlugin: CCardPlugin,
    CCard: CCard,
    CCardBody: CCardBody,
    CCardFooter: CCardFooter,
    CCardGroup: CCardGroup,
    CCardHeader: CCardHeader,
    CCardImage: CCardImage,
    CCardImageOverlay: CCardImageOverlay,
    CCardLink: CCardLink,
    CCardSubtitle: CCardSubtitle,
    CCardText: CCardText,
    CCardTitle: CCardTitle,
    CCarouselPlugin: CCarouselPlugin,
    CCarousel: CCarousel,
    CCarouselCaption: CCarouselCaption,
    CCarouselItem: CCarouselItem,
    CCloseButtonPlugin: CCloseButtonPlugin,
    CCloseButton: CCloseButton,
    CCollapsePlugin: CCollapsePlugin,
    CCollapse: CCollapse,
    CDropdownPlugin: CDropdownPlugin,
    CDropdown: CDropdown,
    CDropdownItem: CDropdownItem,
    CDropdownHeader: CDropdownHeader,
    CDropdownDivider: CDropdownDivider,
    CDropdownMenu: CDropdownMenu,
    CDropdownToggle: CDropdownToggle,
    CFooterPlugin: CFooterPlugin,
    CFooter: CFooter,
    CFormPlugin: CFormPlugin,
    CForm: CForm,
    CFormCheck: CFormCheck,
    CFormFeedback: CFormFeedback,
    CFormFloating: CFormFloating,
    CFormInput: CFormInput,
    CFormLabel: CFormLabel,
    CFormRange: CFormRange,
    CFormSelect: CFormSelect,
    CFormSwitch: CFormSwitch,
    CFormText: CFormText,
    CFormTextarea: CFormTextarea,
    CInputGroup: CInputGroup,
    CInputGroupText: CInputGroupText,
    CGridPlugin: CGridPlugin,
    CCol: CCol,
    CContainer: CContainer,
    CRow: CRow,
    CHeaderPlugin: CHeaderPlugin,
    CHeader: CHeader,
    CHeaderBrand: CHeaderBrand,
    CHeaderDivider: CHeaderDivider,
    CHeaderNav: CHeaderNav,
    CHeaderText: CHeaderText,
    CHeaderToggler: CHeaderToggler,
    CImagePlugin: CImagePlugin,
    CImage: CImage,
    CCLinkPlugin: CCLinkPlugin,
    CLink: CLink,
    CListGroupPlugin: CListGroupPlugin,
    CListGroup: CListGroup,
    CListGroupItem: CListGroupItem,
    CLoadingButtonPlugin: CLoadingButtonPlugin,
    CLoadingButton: CLoadingButton,
    CModalPlugin: CModalPlugin,
    CModal: CModal,
    CModalBody: CModalBody,
    CModalFooter: CModalFooter,
    CModalHeader: CModalHeader,
    CModalTitle: CModalTitle,
    CMultiSelectPlugin: CMultiSelectPlugin,
    CMultiSelect: CMultiSelect,
    CNavPlugin: CNavPlugin,
    CNav: CNav,
    CNavGroup: CNavGroup,
    CNavGroupItems: CNavGroupItems,
    CNavItem: CNavItem,
    CNavLink: CNavLink,
    CNavTitle: CNavTitle,
    CNavbarPlugin: CNavbarPlugin,
    CNavbar: CNavbar,
    CNavbarBrand: CNavbarBrand,
    CNavbarNav: CNavbarNav,
    CNavbarText: CNavbarText,
    CNavbarToggler: CNavbarToggler,
    COffcanvasPlugin: COffcanvasPlugin,
    COffcanvas: COffcanvas,
    COffcanvasBody: COffcanvasBody,
    COffcanvasHeader: COffcanvasHeader,
    COffcanvasTitle: COffcanvasTitle,
    CPaginationPlugin: CPaginationPlugin,
    CPagination: CPagination,
    CPaginationItem: CPaginationItem,
    CSmartPagination: CSmartPagination,
    CProgressPlugin: CProgressPlugin,
    CProgress: CProgress,
    CProgressBar: CProgressBar,
    CSidebarPlugin: CSidebarPlugin,
    CSidebar: CSidebar,
    CSidebarBrand: CSidebarBrand,
    CSidebarFooter: CSidebarFooter,
    CSidebarHeader: CSidebarHeader,
    CSidebarNav: CSidebarNav,
    CSidebarToggler: CSidebarToggler,
    CSmartTablePlugin: CSmartTablePlugin,
    CSmartTable: CSmartTable,
    CSpinnerPlugin: CSpinnerPlugin,
    CSpinner: CSpinner,
    CTablePlugin: CTablePlugin,
    CTable: CTable,
    CTableBody: CTableBody,
    CTableCaption: CTableCaption,
    CTableDataCell: CTableDataCell,
    CTableFoot: CTableFoot,
    CTableHead: CTableHead,
    CTableHeaderCell: CTableHeaderCell,
    CTableRow: CTableRow,
    CTabsPlugin: CTabsPlugin,
    CTabContent: CTabContent,
    CTabPane: CTabPane,
    CToastPlugin: CToastPlugin,
    CToast: CToast,
    CToastBody: CToastBody,
    CToastClose: CToastClose,
    CToaster: CToaster,
    CToastHeader: CToastHeader,
    CWidgetsStatsPlugin: CWidgetsStatsPlugin,
    CWidgetStatsA: CWidgetStatsA,
    CWidgetStatsB: CWidgetStatsB,
    CWidgetStatsC: CWidgetStatsC,
    CWidgetStatsD: CWidgetStatsD,
    CWidgetStatsE: CWidgetStatsE,
    CWidgetStatsF: CWidgetStatsF
});

const getUID$1 = (prefix) => {
    do {
        prefix += Math.floor(Math.random() * 1000000);
    } while (document.getElementById(prefix));
    return prefix;
};
const createTooltipElement = (id, content) => {
    const tooltip = document.createElement('div');
    tooltip.id = id;
    tooltip.classList.add('tooltip', 'bs-tooltip-auto', 'fade');
    tooltip.setAttribute('role', 'tooltip');
    tooltip.innerHTML = `<div class="tooltip-arrow" data-popper-arrow></div>
     <div class="tooltip-inner" id="">${content}</div>`;
    return tooltip;
};
const addTooltipElement = (tooltip, el, popperOptions) => {
    document.body.appendChild(tooltip);
    createPopper(el, tooltip, popperOptions);
    setTimeout(() => {
        tooltip.classList.add('show');
    }, 1);
};
const removeTooltipElement = (tooltip) => {
    tooltip.classList.remove('show');
    setTimeout(() => {
        document.body.removeChild(tooltip);
    }, 300);
};
const toggleTooltipElement = (tooltip, el, popperOptions) => {
    const popperElement = document.getElementById(tooltip.id);
    if (popperElement && popperElement.classList.contains('show')) {
        removeTooltipElement(tooltip);
        return;
    }
    addTooltipElement(tooltip, el, popperOptions);
};
const CTooltip = {
    name: 'c-tooltip',
    uid: '',
    mounted(el, binding) {
        const value = binding.value;
        const content = typeof value === 'string' ? value : value.content ? value.content : '';
        const trigger = value.trigger ? value.trigger : 'hover';
        // Popper Config
        const offset = value.offset ? value.offset : [0, 0];
        const placement = value.placement ? value.placement : 'top';
        const popperOptions = {
            placement: placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: offset,
                    },
                },
            ],
        };
        const tooltipUID = getUID$1('tooltip');
        binding.dir.uid = tooltipUID;
        const tooltip = createTooltipElement(tooltipUID, content);
        trigger.includes('click') &&
            el.addEventListener('click', () => {
                toggleTooltipElement(tooltip, el, popperOptions);
            });
        if (trigger.includes('focus')) {
            el.addEventListener('focus', () => {
                addTooltipElement(tooltip, el, popperOptions);
            });
            el.addEventListener('blur', () => {
                removeTooltipElement(tooltip);
            });
        }
        if (trigger.includes('hover')) {
            el.addEventListener('mouseenter', () => {
                addTooltipElement(tooltip, el, popperOptions);
            });
            el.addEventListener('mouseleave', () => {
                removeTooltipElement(tooltip);
            });
        }
    },
    unmounted(binding) {
        const tooltip = document.getElementById(binding.dir.uid);
        tooltip && tooltip.remove();
    },
};

const getUID = (prefix) => {
    do {
        prefix += Math.floor(Math.random() * 1000000);
    } while (document.getElementById(prefix));
    return prefix;
};
const createPopoverElement = (id, header, content) => {
    const popover = document.createElement('div');
    popover.id = id;
    popover.classList.add('popover', 'bs-popover-auto', 'fade');
    popover.setAttribute('role', 'popover');
    popover.innerHTML = `<div class="popover-arrow" data-popper-arrow></div>
     <div class="popover-header">${header}</div>
     <div class="popover-body" id="">${content}</div>`;
    return popover;
};
const addPopoverElement = (popover, el, popperOptions) => {
    document.body.appendChild(popover);
    createPopper(el, popover, popperOptions);
    setTimeout(() => {
        popover.classList.add('show');
    }, 1);
};
const removePopoverElement = (popover) => {
    popover.classList.remove('show');
    setTimeout(() => {
        document.body.removeChild(popover);
    }, 300);
};
const togglePopoverElement = (popover, el, popperOptions) => {
    const popperElement = document.getElementById(popover.id);
    if (popperElement && popperElement.classList.contains('show')) {
        removePopoverElement(popover);
        return;
    }
    addPopoverElement(popover, el, popperOptions);
};
const CPopover = {
    name: 'c-popover',
    uid: '',
    mounted(el, binding) {
        const value = binding.value;
        const content = typeof value === 'string' ? value : value.content ? value.content : '';
        const header = value.header ? value.header : '';
        const trigger = value.trigger ? value.trigger : 'click';
        // Popper Config
        const offset = value.offset ? value.offset : [0, 8];
        const placement = value.placement ? value.placement : 'top';
        const popperOptions = {
            placement: placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: offset,
                    },
                },
            ],
        };
        const popoverUID = getUID('popover');
        binding.dir.uid = popoverUID;
        const popover = createPopoverElement(popoverUID, header, content);
        trigger.includes('click') &&
            el.addEventListener('click', () => {
                togglePopoverElement(popover, el, popperOptions);
            });
        if (trigger.includes('focus')) {
            el.addEventListener('focus', () => {
                addPopoverElement(popover, el, popperOptions);
            });
            el.addEventListener('blur', () => {
                removePopoverElement(popover);
            });
        }
        if (trigger.includes('hover')) {
            el.addEventListener('mouseenter', () => {
                addPopoverElement(popover, el, popperOptions);
            });
            el.addEventListener('mouseleave', () => {
                removePopoverElement(popover);
            });
        }
    },
    unmounted(binding) {
        const popover = document.getElementById(binding.dir.uid);
        popover && popover.remove();
    },
};

const HANDLER = 'c_clickaway_handler';
function setListeners(el, binding, vnode) {
    const callback = binding.value;
    if (typeof callback !== 'function') {
        return;
    }
    el[HANDLER] = (e) => el.contains(e.target) || callback.call(vnode.context, e);
    document.documentElement.addEventListener(binding.arg || 'click', el[HANDLER]);
}
function unsetListeners(el, binding) {
    document.documentElement.removeEventListener(binding.arg || 'click', el[HANDLER]);
    delete el[HANDLER];
}
var CClickaway = {
    beforeMount: setListeners,
    updated: (el, binding, vnode) => {
        if (binding.value !== binding.oldValue) {
            unsetListeners(el, binding);
            setListeners(el, binding, vnode);
        }
    },
    unmounted: unsetListeners
};

var Directives = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CTooltip: CTooltip,
    CPopover: CPopover,
    CClickaway: CClickaway
});

const removeKeysFromObject = (object, keys) => {
    return Object.entries(object).reduce((obj, [key, value]) => {
        if (!keys.includes(key) && !keys.includes(value.name)) {
            obj[key] = value;
        }
        return obj;
    }, {});
};
const CoreuiVue = {
    install: (app, options) => {
        let pluginComponents = Components;
        let pluginDirectives = Directives;
        const toRemove = options && options.remove ? options.remove : null;
        if (toRemove && Array.isArray(toRemove)) {
            pluginComponents = removeKeysFromObject(Components, toRemove);
            pluginDirectives = removeKeysFromObject(Directives, toRemove);
        }
        for (const plugin in pluginComponents) {
            app.component(plugin, Components[plugin]);
        }
        for (const directive in pluginDirectives) {
            app.directive(directive, Directives[directive]);
        }
    },
};

export { CAccordion, CAccordionBody, CAccordionButton, CAccordionCollapse, CAccordionHeader, CAccordionItem, CAccordionPlugin, CAlert, CAlertHeading, CAlertLink, CAlertPlugin, CAvatar, CAvatarPlugin, CBackdrop, CBackdropPlugin, CBadge, CBadgePlugin, CBreadcrumb, CBreadcrumbItem, CBreadcrumbPlugin, CButton, CButtonGroup, CButtonGroupPlugin, CButtonPlugin, CButtonToolbar, CCLinkPlugin, CCallout, CCalloutPlugin, CCard, CCardBody, CCardFooter, CCardGroup, CCardHeader, CCardImage, CCardImageOverlay, CCardLink, CCardPlugin, CCardSubtitle, CCardText, CCardTitle, CCarousel, CCarouselCaption, CCarouselItem, CCarouselPlugin, CClickaway, CCloseButton, CCloseButtonPlugin, CCol, CCollapse, CCollapsePlugin, CContainer, CDropdown, CDropdownDivider, CDropdownHeader, CDropdownItem, CDropdownMenu, CDropdownPlugin, CDropdownToggle, CFooter, CFooterPlugin, CForm, CFormCheck, CFormFeedback, CFormFloating, CFormInput, CFormLabel, CFormPlugin, CFormRange, CFormSelect, CFormSwitch, CFormText, CFormTextarea, CGridPlugin, CHeader, CHeaderBrand, CHeaderDivider, CHeaderNav, CHeaderPlugin, CHeaderText, CHeaderToggler, CImage, CImagePlugin, CInputGroup, CInputGroupText, CLink, CListGroup, CListGroupItem, CListGroupPlugin, CLoadingButton, CLoadingButtonPlugin, CModal, CModalBody, CModalFooter, CModalHeader, CModalPlugin, CModalTitle, CMultiSelect, CMultiSelectPlugin, CNav, CNavGroup, CNavGroupItems, CNavItem, CNavLink, CNavPlugin, CNavTitle, CNavbar, CNavbarBrand, CNavbarNav, CNavbarPlugin, CNavbarText, CNavbarToggler, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasPlugin, COffcanvasTitle, CPagination, CPaginationItem, CPaginationPlugin, CPopover, CProgress, CProgressBar, CProgressPlugin, CRow, CSidebar, CSidebarBrand, CSidebarFooter, CSidebarHeader, CSidebarNav, CSidebarPlugin, CSidebarToggler, CSmartPagination, CSmartTable, CSmartTablePlugin, CSpinner, CSpinnerPlugin, CTabContent, CTabPane, CTable, CTableBody, CTableCaption, CTableDataCell, CTableFoot, CTableHead, CTableHeaderCell, CTablePlugin, CTableRow, CTabsPlugin, CToast, CToastBody, CToastClose, CToastHeader, CToastPlugin, CToaster, CTooltip, CWidgetStatsA, CWidgetStatsB, CWidgetStatsC, CWidgetStatsD, CWidgetStatsE, CWidgetStatsF, CWidgetsStatsPlugin, CoreuiVue as default };
//# sourceMappingURL=index.esm.js.map
