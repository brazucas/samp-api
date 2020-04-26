import {DefaultCrudRepository} from '@loopback/repository';
import {Profissoes, ProfissoesRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProfissoesRepository extends DefaultCrudRepository<
  Profissoes,
  typeof Profissoes.prototype._id,
  ProfissoesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MongoDataSource,
  ) {
    super(Profissoes, dataSource);
  }
}
