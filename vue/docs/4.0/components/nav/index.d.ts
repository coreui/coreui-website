import { App } from 'vue';
import { CNav } from './CNav';
import { CNavGroup } from './CNavGroup';
import { CNavGroupItems } from './CNavGroupItems';
import { CNavItem } from './CNavItem';
import { CNavLink } from './CNavLink';
import { CNavTitle } from './CNavTitle';
declare const CNavPlugin: {
    install: (app: App) => void;
};
export { CNavPlugin, CNav, CNavGroup, CNavGroupItems, CNavItem, CNavLink, CNavTitle };
