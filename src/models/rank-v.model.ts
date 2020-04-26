import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'RankV'}}})
export class RankV extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorMaisRico', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorMaisRico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NomeMaisRico', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nomeMaisRico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorMaisProcurado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorMaisProcurado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NomeMaisProcurado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nomeMaisProcurado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorMaisViolento', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorMaisViolento?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NomeMaisViolento', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nomeMaisViolento?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorMaisExperiente', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorMaisExperiente?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NomeMaisExperiente', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nomeMaisExperiente?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorMaisPresente', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorMaisPresente?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NomeMaisPresente', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nomeMaisPresente?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RankV>) {
    super(data);
  }
}

export interface RankVRelations {
  // describe navigational properties here
}

export type RankVWithRelations = RankV & RankVRelations;
