// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { repository } from "@loopback/repository";
import { RecordesRepository } from "../repositories";
import { get } from "@loopback/rest";
import { Recordes } from "../models";

export class RecordesController {
  constructor(@repository(RecordesRepository) public recordesRepository: RecordesRepository) {
  }

  @get('/info/recordes')
  async recordes(): Promise<Recordes | null> {
    return this.recordesRepository.findOne({where: {__UID: "recordes"}});
  }
}
