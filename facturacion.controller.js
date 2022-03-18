"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturacionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FacturacionController = class FacturacionController {
    constructor(facturacionRepository) {
        this.facturacionRepository = facturacionRepository;
    }
    async create(facturacion) {
        return this.facturacionRepository.create(facturacion);
    }
    async count(where) {
        return this.facturacionRepository.count(where);
    }
    async find(filter) {
        return this.facturacionRepository.find(filter);
    }
    async updateAll(facturacion, where) {
        return this.facturacionRepository.updateAll(facturacion, where);
    }
    async findById(id, filter) {
        return this.facturacionRepository.findById(id, filter);
    }
    async updateById(id, facturacion) {
        await this.facturacionRepository.updateById(id, facturacion);
    }
    async replaceById(id, facturacion) {
        await this.facturacionRepository.replaceById(id, facturacion);
    }
    async deleteById(id) {
        await this.facturacionRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/facturacions'),
    (0, rest_1.response)(200, {
        description: 'Facturacion model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Facturacion) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Facturacion, {
                    title: 'NewFacturacion',
                    exclude: ['idfactura'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FacturacionController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/facturacions/count'),
    (0, rest_1.response)(200, {
        description: 'Facturacion model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Facturacion)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FacturacionController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/facturacions'),
    (0, rest_1.response)(200, {
        description: 'Array of Facturacion model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Facturacion, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Facturacion)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FacturacionController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/facturacions'),
    (0, rest_1.response)(200, {
        description: 'Facturacion PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Facturacion, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Facturacion)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Facturacion, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FacturacionController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/facturacions/{id}'),
    (0, rest_1.response)(200, {
        description: 'Facturacion model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Facturacion, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Facturacion, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FacturacionController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/facturacions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Facturacion PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Facturacion, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Facturacion]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FacturacionController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/facturacions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Facturacion PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Facturacion]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FacturacionController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/facturacions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Facturacion DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FacturacionController.prototype, "deleteById", null);
FacturacionController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.FacturacionRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.FacturacionRepository])
], FacturacionController);
exports.FacturacionController = FacturacionController;
//# sourceMappingURL=facturacion.controller.js.map