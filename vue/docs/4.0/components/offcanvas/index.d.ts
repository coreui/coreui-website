import { App } from 'vue';
import { COffcanvas } from './COffcanvas';
import { COffcanvasBody } from './COffcanvasBody';
import { COffcanvasHeader } from './COffcanvasHeader';
import { COffcanvasTitle } from './COffcanvasTitle';
declare const COffcanvasPlugin: {
    install: (app: App) => void;
};
export { COffcanvasPlugin, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle };
