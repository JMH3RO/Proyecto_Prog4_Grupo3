"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orden = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Orden = class Orden extends repository_1.Entity {
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
], Orden.prototype, "idorden", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Orden.prototype, "nummesa", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Orden.prototype, "producto", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Orden.prototype, "subtotal", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Orden.prototype, "isv", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Orden.prototype, "total", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        default: "OrdenPendiente",
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Orden.prototype, "estado", void 0);
Orden = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Orden);
exports.Orden = Orden;
//# sourceMappingURL=orden.model.js.map