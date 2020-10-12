import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { BarLoader } from './barloader.component';

import '@spectrum/sp-icon';

export default function template(this: BarLoader) {

    const templateLabel = [];
    const templateFillTrack = [];

    const classes = {
        'spectrum-BarLoader--small': this.small,
        'spectrum-BarLoader--indeterminate': this.indeterminate,
        'spectrum-BarLoader--sideLabel': this.sideLabel,
        'spectrum-BarLoader--overBackground': this.overBackground,
        'is-positive': this.positive,
        'is-warning': this.warning,
        'is-critical': this.critical,
    };

    if (!this.standard && !this.indeterminate) {
        templateLabel.push(html`
            <div class="spectrum-BarLoader-percentage">${this.value}%</div>
      `)
    }

    if (this.indeterminate) {
        templateFillTrack.push(html`
            <div class="spectrum-BarLoader-fill"></div>
        `);
    } else {
        templateFillTrack.push(html`
            <div class="spectrum-BarLoader-fill" style="width: ${this.value}%;"></div>
        `);
    }

    return html`
    <div style="margin: 20px 0;">
        <div class="spectrum-BarLoader ${classMap(classes)}" value="${this.value}" role="progressbar" aria-valuenow="${this.value}" aria-valuemin="0" aria-valuemax="100">
            <div class="spectrum-BarLoader-label">${this.label}</div>
            ${templateLabel}
            <div class="spectrum-BarLoader-track">
            ${templateFillTrack}
            </div>
        </div>
    </div>
    `;
}