import { App } from 'vue';
import { CAccordion } from './CAccordion';
import { CAccordionBody } from './CAccordionBody';
import { CAccordionButton } from './CAccordionButton';
import { CAccordionCollapse } from './CAccordionCollapse';
import { CAccordionHeader } from './CAccordionHeader';
import { CAccordionItem } from './CAccordionItem';
declare const CAccordionPlugin: {
    install: (app: App) => void;
};
export { CAccordionPlugin, CAccordion, CAccordionBody, CAccordionButton, CAccordionCollapse, CAccordionHeader, CAccordionItem, };
