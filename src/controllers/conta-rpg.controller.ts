import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where, } from '@loopback/repository';
import { get, getModelSchemaRef, HttpErrors, param } from '@loopback/rest';
import { ContasRpg } from '../models';
import { ContasRpgRepository } from "../repositories/contas-rpg.repository";
import { ContaProvider } from "../services";
import { service } from "@loopback/core";

export class ContaRpgController {
  constructor(
    @repository(ContasRpgRepository) public contasRpgRepository: ContasRpgRepository,
    @service(ContaProvider) public contaProvider: ContaProvider,
  ) {
  }

  @get('/contas-rpg/count', {
    responses: {
      '200': {
        description: 'ContasRpg model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ContasRpg) where?: Where<ContasRpg>,
  ): Promise<Count> {
    return this.contasRpgRepository.count(where);
  }

  @get('/contas-rpg', {
    responses: {
      '200': {
        description: 'Array of ContasRpg model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ContasRpg, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ContasRpg) filter?: Filter<ContasRpg>,
  ): Promise<Partial<ContasRpg>[]> {
    const contas = await this.contasRpgRepository.find(filter);
    return contas.map(conta => this.contaProvider.contaRpgPublica(conta));
  }

  @get('/contas-rpg/{id}', {
    responses: {
      '200': {
        description: 'ContasRpg model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ContasRpg, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ContasRpg, {exclude: 'where'}) filter?: FilterExcludingWhere<ContasRpg>
  ): Promise<Partial<ContasRpg>> {
    const conta = await this.contasRpgRepository.findOne({where: {__UID: id}}, filter);

    if (!conta) {
      throw new HttpErrors.NotFound("Conta não encontrada");
    }

    return this.contaProvider.contaRpgPublica(conta);
  }
}
