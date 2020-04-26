import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'competitivo_fila'}}
})
export class CompetitivoFila extends Entity {
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
    mysql: {columnName: 'NICK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nick: string;

  @property({
    type: 'string',
    required: true,
    length: 5,
    mysql: {columnName: 'MODO', dataType: 'varchar', dataLength: 5, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  modo: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'TIMESTAMP', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timestamp: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CompetitivoFila>) {
    super(data);
  }
}

export interface CompetitivoFilaRelations {
  // describe navigational properties here
}

export type CompetitivoFilaWithRelations = CompetitivoFila & CompetitivoFilaRelations;
