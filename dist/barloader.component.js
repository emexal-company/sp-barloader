import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import barloaderStyles from './barloader.styles';
import template from './barloader.template';
let BarLoader = class BarLoader extends Base {
    constructor() {
        super(...arguments);
        this.standard = false;
        this.small = false;
        this.overBackground = false;
        this.sideLabel = false;
        this.indeterminate = false;
        this.value = 0;
        this.label = "";
        this.positive = false;
        this.warning = false;
        this.critical = false;
    }
    render() {
        return template.call(this);
    }
};
BarLoader.componentStyles = barloaderStyles;
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], BarLoader.prototype, "standard", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], BarLoader.prototype, "small", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], BarLoader.prototype, "overBackground", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], BarLoader.prototype, "sideLabel", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], BarLoader.prototype, "indeterminate", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], BarLoader.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], BarLoader.prototype, "label", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], BarLoader.prototype, "positive", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], BarLoader.prototype, "warning", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], BarLoader.prototype, "critical", void 0);
BarLoader = __decorate([
    customElement('sp-barloader')
], BarLoader);
export { BarLoader };
//# sourceMappingURL=barloader.component.js.map