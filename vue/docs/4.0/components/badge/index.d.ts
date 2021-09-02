import { App } from 'vue';
import { CBadge } from './CBadge';
declare const CBadgePlugin: {
    install: (app: App) => void;
};
export { CBadge, CBadgePlugin };
