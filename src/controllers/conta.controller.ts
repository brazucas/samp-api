// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { inject } from "@loopback/context";
import { get, HttpErrors, param, Request, RestBindings } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { ContasMgsRepository } from "../repositories";
import { ContasRpgRepository } from "../repositories/contas-rpg.repository";
import { ContasRpg } from "../models";
import { service } from "@loopback/core";
import { ContaProvider } from "../services";

export class ContaController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request,
              @repository(ContasMgsRepository) public contasMgsRepository: ContasMgsRepository,
              @repository(ContasRpgRepository) public contasRpgRepository: ContasRpgRepository,
              @service(ContaProvider) public contaProvider: ContaProvider) {
  }

  @get('/conta/rpg/{nick}')
  async contaRpg(
    @param.path.string('nick') nick: string
  ): Promise<Partial<ContasRpg>> {
    const contaRpg = await this.contasRpgRepository.findOne({where: {__UID: nick}});

    if (!contaRpg) {
      throw new HttpErrors.NotFound("Jogador não encontrado");
    }

    return this.contaProvider.contaPublica(contaRpg);
  }
}
