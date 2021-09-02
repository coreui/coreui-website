import { App } from 'vue';
import { CCarousel } from './CCarousel';
import { CCarouselCaption } from './CCarouselCaption';
import { CCarouselItem } from './CCarouselItem';
declare const CCarouselPlugin: {
    install: (app: App) => void;
};
export { CCarouselPlugin, CCarousel, CCarouselCaption, CCarouselItem };
