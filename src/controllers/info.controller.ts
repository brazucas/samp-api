// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { repository } from "@loopback/repository";
import { BrazucasRepository, LogadosRepository } from "../repositories";
import { get } from "@loopback/rest";
import { Brazucas, Logados } from "../models";

export class InfoController {
  constructor(
    @repository(BrazucasRepository) public brazucasRepository: BrazucasRepository,
    @repository(LogadosRepository) public logadosRepository: LogadosRepository,
  ) {
  }

  @get('/info/brazucas')
  async brazucas(): Promise<Brazucas | null> {
    return this.brazucasRepository.findOne({where: {__UID: "brazucas"}});
  }

  @get('/info/logados')
  async logados(): Promise<Logados[] | null> {
    return this.logadosRepository.find();
  }
}
