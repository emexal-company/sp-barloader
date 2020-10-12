import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import barloaderStyles from './barloader.styles';
import template from './barloader.template';

@customElement('sp-barloader')
export class BarLoader extends Base {
  public static componentStyles = [barloaderStyles];

  @property({ type: Boolean }) standard=false;
  @property({ type: Boolean }) small=false;
  @property({ type: Boolean }) overBackground=false;
  @property({ type: Boolean }) sideLabel = false;
  @property({ type: Boolean }) indeterminate = false;
  @property({ type: Number }) value=0;
  @property({ type: String }) label = "";
  @property({ type: Boolean }) positive = false;
  @property({ type: Boolean }) warning = false;
  @property({ type: Boolean }) critical = false;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-barloader': BarLoader;
  }
}
