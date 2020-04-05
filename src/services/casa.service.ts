import { bind, BindingScope, Provider } from '@loopback/core';
import { Casas } from "../models";
import { mapObject } from "../helpers/common";

/*
 * Fix the service type. Possible options can be:
 * - import {Casa} from 'your-module';
 * - export type Casa = string;
 * - export interface Casa {}
 */
export type Casa = unknown;

@bind({scope: BindingScope.TRANSIENT})
export class CasaProvider implements Provider<Casa> {
  constructor() {
  }

  value() {
    // Add your implementation here
    return this;
  }

  publico(casa: Casas): Partial<Casas> {
    return mapObject<Casas>(casa, Casas.variaveisPublicas);
  }
}
