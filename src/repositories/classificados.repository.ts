import {DefaultCrudRepository} from '@loopback/repository';
import {Classificados, ClassificadosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClassificadosRepository extends DefaultCrudRepository<
  Classificados,
  typeof Classificados.prototype.id,
  ClassificadosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Classificados, dataSource);
  }
}
