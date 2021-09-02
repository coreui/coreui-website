import { App } from 'vue';
import { CTabContent } from './CTabContent';
import { CTabPane } from './CTabPane';
declare const CTabsPlugin: {
    install: (app: App) => void;
};
export { CTabsPlugin, CTabContent, CTabPane };
