import { bind, BindingScope, Provider } from '@loopback/core';
import { Veiculos } from "../models";
import { mapObject } from "../helpers/common";

/*
 * Fix the service type. Possible options can be:
 * - import {Veiculo} from 'your-module';
 * - export type Veiculo = string;
 * - export interface Veiculo {}
 */
export type Veiculo = unknown;

@bind({scope: BindingScope.TRANSIENT})
export class VeiculoProvider implements Provider<Veiculo> {
  constructor(/* Add @inject to inject parameters */) {
  }

  value() {
    return this;
  }

  publico(veiculo: Veiculos): Partial<Veiculos> {
    return mapObject<Veiculos>(veiculo, Veiculos.variaveisPublicas);
  }
}
