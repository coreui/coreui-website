import { App } from 'vue';
import { CCard } from './CCard';
import { CCardBody } from './CCardBody';
import { CCardFooter } from './CCardFooter';
import { CCardGroup } from './CCardGroup';
import { CCardHeader } from './CCardHeader';
import { CCardImage } from './CCardImage';
import { CCardImageOverlay } from './CCardImageOverlay';
import { CCardLink } from './CCardLink';
import { CCardSubtitle } from './CCardSubtitle';
import { CCardText } from './CCardText';
import { CCardTitle } from './CCardTitle';
declare const CCardPlugin: {
    install: (app: App) => void;
};
export { CCardPlugin, CCard, CCardBody, CCardFooter, CCardGroup, CCardHeader, CCardImage, CCardImageOverlay, CCardLink, CCardSubtitle, CCardText, CCardTitle, };
