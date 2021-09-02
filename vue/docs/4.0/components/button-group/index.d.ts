import { App } from 'vue';
import { CButtonToolbar } from './CButtonToolbar';
import { CButtonGroup } from './CButtonGroup';
declare const CButtonGroupPlugin: {
    install: (app: App) => void;
};
export { CButtonGroupPlugin, CButtonToolbar, CButtonGroup };
