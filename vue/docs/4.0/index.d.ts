import { App } from 'vue';
declare const CoreuiVue: {
    install: (app: App, options: any) => void;
};
export default CoreuiVue;
export * from './components';
export * from './directives';
