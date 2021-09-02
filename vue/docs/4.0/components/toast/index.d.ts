import { App } from 'vue';
import { CToast } from './CToast';
import { CToastBody } from './CToastBody';
import { CToastClose } from './CToastClose';
import { CToaster } from './CToaster';
import { CToastHeader } from './CToastHeader';
declare const CToastPlugin: {
    install: (app: App) => void;
};
export { CToastPlugin, CToast, CToastBody, CToastClose, CToaster, CToastHeader };
