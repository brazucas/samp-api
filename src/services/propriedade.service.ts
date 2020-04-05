import { bind, BindingScope, Provider } from '@loopback/core';
import { Propriedades } from "../models";
import { mapObject } from "../helpers/common";

/*
 * Fix the service type. Possible options can be:
 * - import {Propriedade} from 'your-module';
 * - export type Propriedade = string;
 * - export interface Propriedade {}
 */
export type Propriedade = unknown;

@bind({scope: BindingScope.TRANSIENT})
export class PropriedadeProvider implements Provider<Propriedade> {
  constructor(/* Add @inject to inject parameters */) {
  }

  value() {
    return this;
  }

  publico(propriedade: Propriedades): Partial<Propriedades> {
    return mapObject<Propriedades>(propriedade, Propriedades.variaveisPublicas);
  }
}
