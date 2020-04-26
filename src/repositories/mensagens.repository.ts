import {DefaultCrudRepository} from '@loopback/repository';
import {Mensagens, MensagensRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MensagensRepository extends DefaultCrudRepository<
  Mensagens,
  typeof Mensagens.prototype.id,
  MensagensRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Mensagens, dataSource);
  }
}
