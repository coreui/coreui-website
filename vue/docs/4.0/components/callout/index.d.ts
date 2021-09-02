import { App } from 'vue';
import { CCallout } from './CCallout';
declare const CCalloutPlugin: {
    install: (app: App) => void;
};
export { CCalloutPlugin, CCallout };
