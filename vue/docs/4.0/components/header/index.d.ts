import { App } from 'vue';
import { CHeader } from './CHeader';
import { CHeaderBrand } from './CHeaderBrand';
import { CHeaderDivider } from './CHeaderDivider';
import { CHeaderNav } from './CHeaderNav';
import { CHeaderText } from './CHeaderText';
import { CHeaderToggler } from './CHeaderToggler';
declare const CHeaderPlugin: {
    install: (app: App) => void;
};
export { CHeaderPlugin, CHeader, CHeaderBrand, CHeaderDivider, CHeaderNav, CHeaderText, CHeaderToggler, };
