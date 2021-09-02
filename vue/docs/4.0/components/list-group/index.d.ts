import { App } from 'vue';
import { CListGroup } from './CListGroup';
import { CListGroupItem } from './CListGroupItem';
declare const CListGroupPlugin: {
    install: (app: App) => void;
};
export { CListGroupPlugin, CListGroup, CListGroupItem };
