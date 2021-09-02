import { App } from 'vue';
import { CProgress } from './CProgress';
import { CProgressBar } from './CProgressBar';
declare const CProgressPlugin: {
    install: (app: App) => void;
};
export { CProgressPlugin, CProgress, CProgressBar };
