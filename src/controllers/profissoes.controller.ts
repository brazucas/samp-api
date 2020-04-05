// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { repository } from "@loopback/repository";
import { ProfissoesRepository } from "../repositories";
import { get } from "@loopback/rest";
import { Profissoes } from "../models";

export class ProfissoesController {
  constructor(@repository(ProfissoesRepository) public profissoesRepository: ProfissoesRepository) {
  }

  @get('/info/profissoes')
  async profissoes(): Promise<Profissoes | null> {
    return this.profissoesRepository.findOne({where: {__UID: "profissoes"}});
  }
}
