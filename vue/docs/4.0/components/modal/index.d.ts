import { App } from 'vue';
import { CModal } from './CModal';
import { CModalBody } from './CModalBody';
import { CModalFooter } from './CModalFooter';
import { CModalHeader } from './CModalHeader';
import { CModalTitle } from './CModalTitle';
declare const CModalPlugin: {
    install: (app: App) => void;
};
export { CModalPlugin, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle };
