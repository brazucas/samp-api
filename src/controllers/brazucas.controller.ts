// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { repository } from "@loopback/repository";
import { BrazucasRepository } from "../repositories";
import { get } from "@loopback/rest";
import { Brazucas } from "../models";

export class BrazucasController {
  constructor(@repository(BrazucasRepository) public brazucasRepository: BrazucasRepository) {
  }

  @get('/info/brazucas')
  async contaRpg(): Promise<Brazucas | null> {
    return this.brazucasRepository.findOne({where: {__UID: "brazucas"}});
  }
}
