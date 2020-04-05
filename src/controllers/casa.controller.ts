import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where, } from '@loopback/repository';
import { get, getModelSchemaRef, param, } from '@loopback/rest';
import { Casas } from '../models';
import { CasasRepository } from '../repositories';
import { service } from "@loopback/core";
import { CasaProvider } from "../services";

export class CasaController {
  constructor(
    @repository(CasasRepository) public casasRepository: CasasRepository,
    @service(CasaProvider) public casaProvider: CasaProvider,
  ) {
  }

  @get('/casas/count', {
    responses: {
      '200': {
        description: 'Casas model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Casas) where?: Where<Casas>,
  ): Promise<Count> {
    return this.casasRepository.count(where);
  }

  @get('/casas', {
    responses: {
      '200': {
        description: 'Array of Casas model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Casas, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Casas) filter?: Filter<Casas>,
  ): Promise<Partial<Casas>[]> {
    const casas = await this.casasRepository.find(filter);
    return casas.map(casa => this.casaProvider.publico(casa));
  }

  @get('/casas/{id}', {
    responses: {
      '200': {
        description: 'Casas model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Casas, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Casas, {exclude: 'where'}) filter?: FilterExcludingWhere<Casas>
  ): Promise<Partial<Casas>> {
    const casa = await this.casasRepository.findById(id, filter);
    return this.casaProvider.publico(casa);
  }
}
