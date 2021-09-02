import { App } from 'vue';
import { CBreadcrumbItem } from './CBreadcrumbItem';
import { CBreadcrumb } from './CBreadcrumb';
declare const CBreadcrumbPlugin: {
    install: (app: App) => void;
};
export { CBreadcrumbPlugin, CBreadcrumb, CBreadcrumbItem };
