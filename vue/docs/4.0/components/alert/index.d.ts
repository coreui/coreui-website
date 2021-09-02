import { App } from 'vue';
import { CAlert } from './CAlert';
import { CAlertHeading } from './CAlertHeading';
import { CAlertLink } from './CAlertLink';
declare const CAlertPlugin: {
    install: (app: App) => void;
};
export { CAlertPlugin, CAlert, CAlertHeading, CAlertLink };
