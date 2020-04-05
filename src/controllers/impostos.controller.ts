// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { repository } from "@loopback/repository";
import { ImpostosRepository } from "../repositories";
import { get } from "@loopback/rest";
import { Impostos } from "../models";

export class ImpostosController {
  constructor(@repository(ImpostosRepository) public impostosRepository: ImpostosRepository) {
  }

  @get('/info/impostos')
  async impostos(): Promise<Impostos | null> {
    return this.impostosRepository.findOne({where: {__UID: "impostos"}});
  }
}
