// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { repository } from "@loopback/repository";
import { ConfigsRepository } from "../repositories";
import { get } from "@loopback/rest";
import { Configs } from "../models";

export class ConfigsController {
  constructor(@repository(ConfigsRepository) public configsRepository: ConfigsRepository) {
  }

  @get('/info/configs')
  async configs(): Promise<Configs | null> {
    return this.configsRepository.findOne({where: {__UID: "configs"}});
  }
}
