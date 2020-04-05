import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where, } from '@loopback/repository';
import { get, getModelSchemaRef, HttpErrors, param, } from '@loopback/rest';
import { Veiculos } from '../models';
import { VeiculosRepository } from '../repositories';
import { service } from "@loopback/core";
import { VeiculoProvider } from "../services";

export class VeiculoController {
  constructor(
    @repository(VeiculosRepository) public veiculosRepository: VeiculosRepository,
    @service(VeiculoProvider) public veiculoProvider: VeiculoProvider,
  ) {
  }

  @get('/veiculos/count', {
    responses: {
      '200': {
        description: 'Veiculos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Veiculos) where?: Where<Veiculos>,
  ): Promise<Count> {
    return this.veiculosRepository.count(where);
  }

  @get('/veiculos', {
    responses: {
      '200': {
        description: 'Array of Veiculos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Veiculos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Veiculos) filter?: Filter<Veiculos>,
  ): Promise<Partial<Veiculos>[]> {
    const veiculos = await this.veiculosRepository.find(filter);
    return veiculos.map(veiculo => this.veiculoProvider.publico(veiculo));
  }

  @get('/veiculos/{id}', {
    responses: {
      '200': {
        description: 'Veiculos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Veiculos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Veiculos, {exclude: 'where'}) filter?: FilterExcludingWhere<Veiculos>
  ): Promise<Partial<Veiculos>> {
    const veiculo = await this.veiculosRepository.findOne({where: {__UID: id}}, filter);

    if (!veiculo) {
      throw new HttpErrors.NotFound("Casa não encontrada");
    }

    return this.veiculoProvider.publico(veiculo);
  }
}
