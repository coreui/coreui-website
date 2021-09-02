declare const _nav: ({
    _component: string;
    anchor: string;
    to?: undefined;
    icon?: undefined;
    route?: undefined;
    items?: undefined;
} | {
    _component: string;
    anchor: string;
    to: string;
    icon: string;
    route?: undefined;
    items?: undefined;
} | {
    _component: string;
    anchor: string;
    route: string;
    icon: string;
    items: ({
        _component: string;
        anchor: string;
        to: string;
        route?: undefined;
        icon?: undefined;
        items?: undefined;
    } | {
        _component: string;
        anchor: string;
        route: string;
        icon: string;
        items: ({
            _component: string;
            anchor: string;
            to: string;
            active?: undefined;
        } | {
            _component: string;
            anchor: string;
            to: string;
            active: boolean;
        })[];
        to?: undefined;
    })[];
    to?: undefined;
})[];
export default _nav;
