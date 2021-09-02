import { App } from 'vue';
import { CPagination } from './CPagination';
import { CPaginationItem } from './CPaginationItem';
import { CSmartPagination } from './CSmartPagination';
declare const CPaginationPlugin: {
    install: (app: App) => void;
};
export { CPaginationPlugin, CPagination, CPaginationItem, CSmartPagination };
