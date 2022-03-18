"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facturacion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Facturacion = class Facturacion extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Facturacion.prototype, "idfactura", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Facturacion.prototype, "idorden", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Facturacion.prototype, "total", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        default: "Efectivo",
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Facturacion.prototype, "metodopago", void 0);
Facturacion = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Facturacion);
exports.Facturacion = Facturacion;
//# sourceMappingURL=facturacion.model.js.map