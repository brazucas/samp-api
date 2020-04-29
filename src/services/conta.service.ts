import { bind, BindingScope, inject, Provider } from '@loopback/core';
import { ContasMgs, ContasRpg } from "../models";
import { mapObject } from "../helpers/common";
import { HttpErrors } from "@loopback/rest/dist";
import { PasswordHasherBindings } from "../keys";
import { PasswordHasher } from "./hash.password.bcryptjs";
import { repository } from "@loopback/repository";
import { ContasRpgRepository } from "../repositories";

export type Conta = ContaProvider;

export type Credentials = {
  nick: string;
  password: string;
};

@bind({scope: BindingScope.TRANSIENT})
export class ContaProvider implements Provider<Conta> {
  constructor(@inject(PasswordHasherBindings.PASSWORD_HASHER) public passwordHasher: PasswordHasher,
              @repository(ContasRpgRepository) public contasRpgRepository: ContasRpgRepository) {
  }

  value() {
    // Add your implementation here
    return this;
  }

  contaRpgPublica(contaRpg: ContasRpg): Partial<ContasRpg> {
    return mapObject<ContasRpg>(contaRpg, ContasRpg.variaveisPublicas);
  }

  contaMgsPublica(contaMgs: ContasMgs): Partial<ContasMgs> {
    return mapObject<ContasMgs>(contaMgs, ContasMgs.variaveisPublicas);
  }

  async verifyCredentials(credentials: Credentials): Promise<ContasRpg> {
    const foundUser = await this.contasRpgRepository.findOne({
      where: {nome: credentials.nick},
    });

    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `User with nick ${credentials.nick} not found.`,
      );
    }
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('The credentials are not correct.');
    }

    return foundUser;
  }

  convertToUserProfile(user: ContasRpg) {
    // since first name and lastName are optional, no error is thrown if not provided
    let userName = '';
    if (user.firstName) userName = `${user.nome}`;
    return {id: user.id, name: userName};
  }
}
