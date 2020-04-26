import {DefaultCrudRepository} from '@loopback/repository';
import {Configs, ConfigsRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ConfigsRepository extends DefaultCrudRepository<
  Configs,
  typeof Configs.prototype._id,
  ConfigsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MongoDataSource,
  ) {
    super(Configs, dataSource);
  }
}
