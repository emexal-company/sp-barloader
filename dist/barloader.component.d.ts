import { Base } from '@spectrum/sp-base';
export declare class BarLoader extends Base {
    static componentStyles: import("lit-element").CSSResult;
    standard: boolean;
    small: boolean;
    overBackground: boolean;
    sideLabel: boolean;
    indeterminate: boolean;
    value: number;
    label: string;
    positive: boolean;
    warning: boolean;
    critical: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-barloader': BarLoader;
    }
}
