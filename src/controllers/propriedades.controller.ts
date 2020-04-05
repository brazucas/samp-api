import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where, } from '@loopback/repository';
import { get, getModelSchemaRef, HttpErrors, param, } from '@loopback/rest';
import { Propriedades } from '../models';
import { PropriedadesRepository } from '../repositories';
import { PropriedadeProvider } from "../services";
import { service } from "@loopback/core";

export class PropriedadesController {
  constructor(
    @repository(PropriedadesRepository) public propriedadesRepository: PropriedadesRepository,
    @service(PropriedadeProvider) public propriedadeProvider: PropriedadeProvider,
  ) {
  }

  @get('/propriedades/count', {
    responses: {
      '200': {
        description: 'Propriedades model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Propriedades) where?: Where<Propriedades>,
  ): Promise<Count> {
    return this.propriedadesRepository.count(where);
  }

  @get('/propriedades', {
    responses: {
      '200': {
        description: 'Array of Propriedades model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Propriedades, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Propriedades) filter?: Filter<Propriedades>,
  ): Promise<Partial<Propriedades>[]> {
    const propriedades = await this.propriedadesRepository.find(filter);
    return propriedades.map(propriedade => this.propriedadeProvider.publico(propriedade));
  }

  @get('/propriedades/{id}', {
    responses: {
      '200': {
        description: 'Propriedades model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Propriedades, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Propriedades, {exclude: 'where'}) filter?: FilterExcludingWhere<Propriedades>
  ): Promise<Partial<Propriedades>> {
    const propriedade = await this.propriedadesRepository.findOne({where: {__UID: id}}, filter);

    if (!propriedade) {
      throw new HttpErrors.NotFound("Propriedade não encontrada");
    }

    return this.propriedadeProvider.publico(propriedade);
  }
}
