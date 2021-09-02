import { App } from 'vue';
import { CSidebar } from './CSidebar';
import { CSidebarBrand } from './CSidebarBrand';
import { CSidebarFooter } from './CSidebarFooter';
import { CSidebarHeader } from './CSidebarHeader';
import { CSidebarNav } from './CSidebarNav';
import { CSidebarToggler } from './CSidebarToggler';
declare const CSidebarPlugin: {
    install: (app: App) => void;
};
export { CSidebarPlugin, CSidebar, CSidebarBrand, CSidebarFooter, CSidebarHeader, CSidebarNav, CSidebarToggler, };
