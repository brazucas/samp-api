import { bind, BindingScope, Provider } from '@loopback/core';
import { ContasRpg } from "../models";
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

  contaPublica(contaRpg: ContasRpg): Partial<ContasRpg> {
    return mapObject(contaRpg, ContasRpg.variaveisPublicas);
  }
}