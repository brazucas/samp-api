import { repository, } from '@loopback/repository';
import { get, getModelSchemaRef, HttpErrors, post, requestBody, } from '@loopback/rest';
import { ContasRpg } from '../models';
import { ContasRpgRepository } from '../repositories';
import { authenticate } from "@loopback/authentication";
import { inject } from "@loopback/context";
import { SecurityBindings, UserProfile } from '@loopback/security';

export class ContaController {
  constructor(
    @repository(ContasRpgRepository)
    public contasRpgRepository: ContasRpgRepository,
  ) {
  }

  @post('/contas', {
    responses: {
      '200': {
        description: 'ContasRpg model instance',
        content: {'application/json': {schema: getModelSchemaRef(ContasRpg)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContasRpg, {
            title: 'NewContasRpg',
            exclude: ['id'],
          }),
        },
      },
    })
      contasRpg: Omit<ContasRpg, 'id'>,
  ): Promise<ContasRpg> {
    return this.contasRpgRepository.create(contasRpg);
  }

  @get('/minha-conta', {
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
  @authenticate('jwt')
  async findById(
    @inject(SecurityBindings.USER) currentUser: UserProfile,
  ): Promise<ContasRpg> {
    const conta = await this.contasRpgRepository.findOne({where: {nick: currentUser.name}});

    if (!conta) {
      throw new HttpErrors.NotFound("Conta não encontrada");
    }

    return conta;
  }
}
