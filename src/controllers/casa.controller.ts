import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where, } from '@loopback/repository';
import { get, getModelSchemaRef, HttpErrors, param, post } from '@loopback/rest';
import { Casas } from '../models';
import { CasasRepository } from '../repositories';
import { service } from "@loopback/core";
import { CasaProvider, ComandoProvider, TipoBem } from "../services";
import { authenticate } from "@loopback/authentication";
import { inject } from "@loopback/context";
import { SecurityBindings, UserProfile } from '@loopback/security';

export class CasaController {
  constructor(
    @repository(CasasRepository) public casasRepository: CasasRepository,
    @service(CasaProvider) public casaProvider: CasaProvider,
    @service(ComandoProvider) public comandoProvider: ComandoProvider,
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
    const casa = await this.casasRepository.findOne({where: {numero: id}}, filter);

    if (!casa) {
      throw new HttpErrors.NotFound("Casa não encontrada");
    }

    return this.casaProvider.publico(casa);
  }

  @post('/casas/{id}/buy', {
    responses: {
      '200': {
        content: {
          'application/json': {
            schema: getModelSchemaRef(Casas, {includeRelations: true}),
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async buy(
    @inject(SecurityBindings.USER) currentUser: UserProfile,
    @param.path.string('id') id: string,
  ): Promise<Partial<Casas>> {
    const casa = await this.casasRepository.findOne({where: {numero: id}});

    if (!casa) {
      throw new HttpErrors.NotFound("Casa não encontrada");
    }

    if (!casa.valorDeVenda || !casa.av || casa.av !== '1') {
      throw new HttpErrors.Forbidden("Esta casa não está a venda");
    }

    try {
      const contaBancariaRequest = await this.comandoProvider.getFileValue(`contas_rpg/${currentUser.name}.txt`, 'ContaBancaria');
      const valorCasaRequest = await this.comandoProvider.getFileValue(`casas/${id}.ini`, 'ValorDeVenda');

      console.log('>>>> contaBancariaRequest ', contaBancariaRequest);
      console.log('>>>> valorCasaRequest ', valorCasaRequest);

      if (!contaBancariaRequest || !valorCasaRequest) {
        throw new HttpErrors.BadRequest("Um erro ocorreu ao obter o valor da casa");
      }

      const contaBancaria = parseInt(contaBancariaRequest);
      const valorCasa = parseInt(valorCasaRequest);

      if (valorCasa > contaBancaria) {
        throw new HttpErrors.BadRequest(`Você não possui valor em conta suficiente para finalizar esta compra. (Dinheiro em conta: ${contaBancaria}, Valor da casa: ${valorCasa})`);
      }

      await this.comandoProvider.adicionarDinheiro(currentUser.name, -valorCasa);
      await this.comandoProvider.atribuirBem(TipoBem.CASA, currentUser.name, id, (casa.especial === '1') ? 1 : 0, valorCasa, parseInt(casa.av));
    } catch (err) {
      console.error(err);
      throw err;
    }

    return this.casaProvider.publico(casa);
  }
}
