import { App } from 'vue';
import { CNavbar } from './CNavbar';
import { CNavbarBrand } from './CNavbarBrand';
import { CNavbarNav } from './CNavbarNav';
import { CNavbarText } from './CNavbarText';
import { CNavbarToggler } from './CNavbarToggler';
declare const CNavbarPlugin: {
    install: (app: App) => void;
};
export { CNavbarPlugin, CNavbar, CNavbarBrand, CNavbarNav, CNavbarText, CNavbarToggler };
