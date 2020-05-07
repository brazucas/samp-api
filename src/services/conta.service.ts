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
}
