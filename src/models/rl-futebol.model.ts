import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'rl_futebol'}}
})
export class RlFutebol extends Entity {
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
    length: 40,
    mysql: {columnName: 'STATUS', dataType: 'varchar', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  status: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TIMECASA_PLACAR', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  timecasaPlacar: number;

  @property({
    type: 'string',
    required: true,
    length: 10,
    mysql: {columnName: 'TIMECASA_SIGLA', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timecasaSigla: string;

  @property({
    type: 'string',
    required: true,
    length: 250,
    mysql: {columnName: 'TIMECASA_ESCUDO', dataType: 'varchar', dataLength: 250, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timecasaEscudo: string;

  @property({
    type: 'string',
    required: true,
    length: 40,
    mysql: {columnName: 'TIMECASA_NOME', dataType: 'varchar', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timecasaNome: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'CAMPEONATO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  campeonato: string;

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
    length: 10,
    mysql: {columnName: 'TIMEVISIT_SIGLA', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timevisitSigla: string;

  @property({
    type: 'string',
    required: true,
    length: 250,
    mysql: {columnName: 'TIMEVISIT_ESCUDO', dataType: 'varchar', dataLength: 250, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timevisitEscudo: string;

  @property({
    type: 'string',
    required: true,
    length: 40,
    mysql: {columnName: 'TIMEVISIT_NOME', dataType: 'varchar', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timevisitNome: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'JOGO_HORA', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  jogoHora: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'DATA', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  data: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RlFutebol>) {
    super(data);
  }
}

export interface RlFutebolRelations {
  // describe navigational properties here
}

export type RlFutebolWithRelations = RlFutebol & RlFutebolRelations;
