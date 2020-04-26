import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'UCP_PROD', table: 'competitivo_atualizacoes'}
  }
})
export class CompetitivoAtualizacoes extends Entity {
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
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'NICK', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  nick: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'ELEMENTO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  elemento: string;

  @property({
    type: 'string',
    required: true,
    length: 300,
    mysql: {columnName: 'VALOR', dataType: 'varchar', dataLength: 300, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  valor: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'CALLBACK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  callback: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'EXTRA1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra1: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'EXTRA2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra2: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'EXTRA3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra3: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'EXTRA4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra4: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'EXTRA5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra5: string;

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

  constructor(data?: Partial<CompetitivoAtualizacoes>) {
    super(data);
  }
}

export interface CompetitivoAtualizacoesRelations {
  // describe navigational properties here
}

export type CompetitivoAtualizacoesWithRelations = CompetitivoAtualizacoes & CompetitivoAtualizacoesRelations;
