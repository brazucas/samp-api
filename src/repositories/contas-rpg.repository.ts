import { DefaultCrudRepository } from '@loopback/repository';
import { ContasRpg, ContasRpgRelations } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ContasRpgRepository extends DefaultCrudRepository<ContasRpg,
  typeof ContasRpg.prototype.___UID,
  ContasRpgRelations> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ContasRpg, dataSource);
  }
}
