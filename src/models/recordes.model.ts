import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'recordes'}}})
export class Recordes extends Entity {
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
    required: true,
    length: 45,
    mysql: {columnName: 'Nome', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'MINIGAME', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  minigame: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'Tempo', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tempo: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'TEMPO_ANTIGO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tempoAntigo: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'NICK_ANTIGO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nickAntigo?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'TS', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ts?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Recordes>) {
    super(data);
  }
}

export interface RecordesRelations {
  // describe navigational properties here
}

export type RecordesWithRelations = Recordes & RecordesRelations;
