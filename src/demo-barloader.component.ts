import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-barloader.styles';
import template from './demo-barloader.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { BarLoader } from '@spectrum/sp-barloader';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-barloader')
export class DemoBarLoader extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-barloader': DemoBarLoader;
  }
}
