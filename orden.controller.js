"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrdenController = class OrdenController {
    constructor(ordenRepository) {
        this.ordenRepository = ordenRepository;
    }
    async create(orden) {
        return this.ordenRepository.create(orden);
    }
    async count(where) {
        return this.ordenRepository.count(where);
    }
    async find(filter) {
        return this.ordenRepository.find(filter);
    }
    async updateAll(orden, where) {
        return this.ordenRepository.updateAll(orden, where);
    }
    async findById(id, filter) {
        return this.ordenRepository.findById(id, filter);
    }
    async updateById(id, orden) {
        await this.ordenRepository.updateById(id, orden);
    }
    async replaceById(id, orden) {
        await this.ordenRepository.replaceById(id, orden);
    }
    async deleteById(id) {
        await this.ordenRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/ordens'),
    (0, rest_1.response)(200, {
        description: 'Orden model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Orden) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Orden, {
                    title: 'NewOrden',
                    exclude: ['idorden'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrdenController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ordens/count'),
    (0, rest_1.response)(200, {
        description: 'Orden model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Orden)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrdenController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ordens'),
    (0, rest_1.response)(200, {
        description: 'Array of Orden model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Orden, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Orden)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrdenController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/ordens'),
    (0, rest_1.response)(200, {
        description: 'Orden PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Orden, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Orden)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Orden, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrdenController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ordens/{id}'),
    (0, rest_1.response)(200, {
        description: 'Orden model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Orden, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Orden, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrdenController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/ordens/{id}'),
    (0, rest_1.response)(204, {
        description: 'Orden PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Orden, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Orden]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrdenController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/ordens/{id}'),
    (0, rest_1.response)(204, {
        description: 'Orden PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Orden]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrdenController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/ordens/{id}'),
    (0, rest_1.response)(204, {
        description: 'Orden DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrdenController.prototype, "deleteById", null);
OrdenController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.OrdenRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.OrdenRepository])
], OrdenController);
exports.OrdenController = OrdenController;
//# sourceMappingURL=orden.controller.js.map