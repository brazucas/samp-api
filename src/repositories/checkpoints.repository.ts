import {DefaultCrudRepository} from '@loopback/repository';
import {Checkpoints, CheckpointsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CheckpointsRepository extends DefaultCrudRepository<
  Checkpoints,
  typeof Checkpoints.prototype.id,
  CheckpointsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Checkpoints, dataSource);
  }
}
