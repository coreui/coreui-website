declare function setListeners(el: any, binding: any, vnode: any): void;
declare function unsetListeners(el: any, binding: any): void;
declare const _default: {
    beforeMount: typeof setListeners;
    updated: (el: any, binding: any, vnode: any) => void;
    unmounted: typeof unsetListeners;
};
export default _default;
