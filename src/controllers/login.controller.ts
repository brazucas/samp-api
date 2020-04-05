// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { inject } from "@loopback/context";
import { HttpErrors, post, Request, requestBody, RestBindings } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { ContasMgsRepository } from "../repositories";
import { ContasRpgRepository } from "../repositories/contas-rpg.repository";

export class LoginController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request,
              @repository(ContasMgsRepository) public contasMgsRepository: ContasMgsRepository,
              @repository(ContasRpgRepository) public contasRpgRepository: ContasRpgRepository) {
  }

  @post('/login')
  async login(@requestBody() payload: {
    nickname: string,
    password: string,
  }): Promise<null> {
    const contaMgs = await this.contasMgsRepository.findOne({where: {__UID: payload.nickname}});
    const contaRpg = await this.contasRpgRepository.findOne({where: {__UID: payload.nickname}});

    if (!((contaMgs && contaMgs.Senha === payload.password) || (contaRpg && contaRpg.Senha === payload.password))) {
      throw new HttpErrors.Forbidden("Usuário e/ou senha inválidos");
    }

    return null;
  }
}
