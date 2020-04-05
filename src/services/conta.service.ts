import { bind, BindingScope, Provider } from '@loopback/core';
import { ContasMgs, ContasRpg } from "../models";
import { mapObject } from "../helpers/common";

export type Conta = ContaProvider;

@bind({scope: BindingScope.TRANSIENT})
export class ContaProvider implements Provider<Conta> {
  constructor() {
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
