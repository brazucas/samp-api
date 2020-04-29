import { inject } from '@loopback/core';
import { ContasRpg } from "../models";
import { HttpErrors } from "@loopback/rest/dist";
import { PasswordHasherBindings } from "../keys";
import { PasswordHasher } from "./hash.password.bcryptjs";
import { repository } from "@loopback/repository";
import { ContasMgsRepository, ContasRpgRepository } from "../repositories";
import { UserService } from "@loopback/authentication";
import { securityId, UserProfile } from '@loopback/security';

export type Credentials = {
  nick: string;
  password: string;
};

export class BrzUserService implements UserService<ContasRpg, Credentials> {
  constructor(
    @inject(PasswordHasherBindings.PASSWORD_HASHER) public passwordHasher: PasswordHasher,
    @repository(ContasRpgRepository) public contasRpgRepository: ContasRpgRepository,
    @repository(ContasMgsRepository) public contasMgsRepository: ContasMgsRepository
  ) {
  }

  async verifyCredentials(credentials: Credentials): Promise<ContasRpg> {
    const contaMgs = await this.contasMgsRepository.findOne({where: {nome: credentials.nick}});
    const contaRpg = await this.contasRpgRepository.findOne({where: {nick: credentials.nick}});

    console.log(credentials);

    if (!contaRpg) {
      throw new HttpErrors.NotFound(
        `É necessário ter uma conta no RPG.`,
      );
    }

    if (contaMgs) {
      const passwordMatchedMgs = await this.passwordHasher.comparePassword(
        credentials.password,
        contaMgs.senha,
      );

      if (passwordMatchedMgs) {
        return contaRpg;
      }
    }

    const passwordMatched = (contaRpg.senha === credentials.password);

    if (!contaRpg) {
      throw new HttpErrors.NotFound(
        `User with nick ${credentials.nick} not found.`,
      );
    }

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('The credentials are not correct.');
    }

    return contaRpg;
  }

  convertToUserProfile(user: ContasRpg): UserProfile {
    // since first name and lastName are optional, no error is thrown if not provided
    const userName = user.nick;

    return {
      [securityId]: userName + '',
      id: user.id,
      name: userName
    };
  }
}
