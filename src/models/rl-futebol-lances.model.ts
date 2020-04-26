import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'rl_futebol_lances'}}
})
export class RlFutebolLances extends Entity {
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
    mysql: {columnName: 'TRANSMISSAO_ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  transmissaoId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'STATUS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  status: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'LANCE_ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  lanceId: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'TIME_NOME', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timeNome: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'TIMECASA_NOME', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timecasaNome: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'TIMEVISIT_NOME', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timevisitNome: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TIMECASA_PLACAR', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  timecasaPlacar: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TIMEVISIT_PLACAR', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  timevisitPlacar: number;

  @property({
    type: 'string',
    required: true,
    length: 15,
    mysql: {columnName: 'PERIODO', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  periodo: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'MINUTOS', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  minutos: number;

  @property({
    type: 'string',
    required: true,
    length: 255,
    mysql: {columnName: 'TEXTO', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  texto: string;

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

  constructor(data?: Partial<RlFutebolLances>) {
    super(data);
  }
}

export interface RlFutebolLancesRelations {
  // describe navigational properties here
}

export type RlFutebolLancesWithRelations = RlFutebolLances & RlFutebolLancesRelations;
