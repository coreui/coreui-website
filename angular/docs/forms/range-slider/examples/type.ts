import { NgCssClass } from '@coreui/angular';

export type Label =
  | {
      label: number | string;
      value: number;
      class?: NgCssClass;
      style?: Partial<CSSStyleDeclaration>;
    }
  | string;
