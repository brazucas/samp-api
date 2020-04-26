import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where, } from '@loopback/repository';
import { get, getModelSchemaRef, HttpErrors, param, } from '@loopback/rest';
import { ContasMgs } from '../models';
import { ContasMgsRepository } from '../repositories';
import { ContaProvider } from "../services";
import { service } from "@loopback/core";

export class ContaMgsController {
  constructor(
    @repository(ContasMgsRepository) public contasMgsRepository: ContasMgsRepository,
    @service(ContaProvider) public contaProvider: ContaProvider,
  ) {
  }

  @get('/contas-mgs/count', {
    responses: {
      '200': {
        description: 'ContasMgs model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ContasMgs) where?: Where<ContasMgs>,
  ): Promise<Count> {
    return this.contasMgsRepository.count(where);
  }

  @get('/contas-mgs', {
    responses: {
      '200': {
        description: 'Array of ContasMgs model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ContasMgs, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ContasMgs) filter?: Filter<ContasMgs>,
  ): Promise<Partial<ContasMgs>[]> {
    const contas = await this.contasMgsRepository.find(filter);
    return contas.map(casa => this.contaProvider.contaMgsPublica(casa));
  }

  @get('/contas-mgs/{id}', {
    responses: {
      '200': {
        description: 'ContasMgs model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ContasMgs, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ContasMgs, {exclude: 'where'}) filter?: FilterExcludingWhere<ContasMgs>
  ): Promise<Partial<ContasMgs>> {
    const conta = await this.contasMgsRepository.findOne({where: {__UID: id}}, filter);

    if (!conta) {
      throw new HttpErrors.NotFound("Conta não encontrada");
    }

    return this.contaProvider.contaMgsPublica(conta);
  }

  @get('/contas-mgs/ranking-short', {
    responses: {
      '200': {
        description: 'ContasMgs model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ContasMgs, {includeRelations: true}),
          },
        },
      },
    },
  })
  async rankingShort(
    @param.filter(ContasMgs, {exclude: 'where'}) filter?: FilterExcludingWhere<ContasMgs>
  ): Promise<Partial<ContasMgs>> {
    const ranking = await this.contasMgsRepository.find({order: ['pontos desc'], limit: 3}, filter);

    return ranking.map(conta => this.contaProvider.contaMgsPublica(conta));
  }
}
