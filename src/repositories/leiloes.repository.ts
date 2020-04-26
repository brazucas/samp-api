import {DefaultCrudRepository} from '@loopback/repository';
import {Leiloes, LeiloesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LeiloesRepository extends DefaultCrudRepository<
  Leiloes,
  typeof Leiloes.prototype.id,
  LeiloesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Leiloes, dataSource);
  }
}
