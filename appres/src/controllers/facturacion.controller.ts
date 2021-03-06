import { authenticate } from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Facturacion} from '../models';
import {FacturacionRepository} from '../repositories';
@authenticate('jwt')
export class FacturacionController {
  constructor(
    @repository(FacturacionRepository)
    public facturacionRepository : FacturacionRepository,
  ) {}

  @post('/facturacions')
  @response(200, {
    description: 'Facturacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Facturacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturacion, {
            title: 'NewFacturacion',
            exclude: ['idfactura'],
          }),
        },
      },
    })
    facturacion: Omit<Facturacion, 'idfactura'>,
  ): Promise<Facturacion> {
    return this.facturacionRepository.create(facturacion);
  }

  @get('/facturacions/count')
  @response(200, {
    description: 'Facturacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Facturacion) where?: Where<Facturacion>,
  ): Promise<Count> {
    return this.facturacionRepository.count(where);
  }

  @get('/facturacions')
  @response(200, {
    description: 'Array of Facturacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Facturacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Facturacion) filter?: Filter<Facturacion>,
  ): Promise<Facturacion[]> {
    return this.facturacionRepository.find(filter);
  }

  @patch('/facturacions')
  @response(200, {
    description: 'Facturacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturacion, {partial: true}),
        },
      },
    })
    facturacion: Facturacion,
    @param.where(Facturacion) where?: Where<Facturacion>,
  ): Promise<Count> {
    return this.facturacionRepository.updateAll(facturacion, where);
  }

  @get('/facturacions/{id}')
  @response(200, {
    description: 'Facturacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Facturacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Facturacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Facturacion>
  ): Promise<Facturacion> {
    return this.facturacionRepository.findById(id, filter);
  }

  @patch('/facturacions/{id}')
  @response(204, {
    description: 'Facturacion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturacion, {partial: true}),
        },
      },
    })
    facturacion: Facturacion,
  ): Promise<void> {
    await this.facturacionRepository.updateById(id, facturacion);
  }

  @put('/facturacions/{id}')
  @response(204, {
    description: 'Facturacion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() facturacion: Facturacion,
  ): Promise<void> {
    await this.facturacionRepository.replaceById(id, facturacion);
  }

  @del('/facturacions/{id}')
  @response(204, {
    description: 'Facturacion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.facturacionRepository.deleteById(id);
  }
}
