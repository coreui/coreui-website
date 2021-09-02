import { App } from 'vue';
import { CSmartTable } from './CSmartTable';
declare const CSmartTablePlugin: {
    install: (app: App) => void;
};
export { CSmartTablePlugin, CSmartTable };
