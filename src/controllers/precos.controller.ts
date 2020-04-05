// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { repository } from "@loopback/repository";
import { PrecosRepository } from "../repositories";
import { get } from "@loopback/rest";
import { Precos } from "../models";

export class PrecosController {
  constructor(@repository(PrecosRepository) public precosRepository: PrecosRepository) {
  }

  @get('/info/precos')
  async precos(): Promise<Precos | null> {
    return this.precosRepository.findOne({where: {__UID: "precos"}});
  }
}
