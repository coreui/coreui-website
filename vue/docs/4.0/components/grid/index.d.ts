import { App } from 'vue';
import { CCol } from './CCol';
import { CContainer } from './CContainer';
import { CRow } from './CRow';
declare const CGridPlugin: {
    install: (app: App) => void;
};
export { CGridPlugin, CCol, CContainer, CRow };
