import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'RADIO_INFOS'}}
})
export class RadioInfo extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id?: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'RADIO_TITULO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  radioTitulo?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'MUSICA_ATUAL', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  musicaAtual?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'OUVINTES', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ouvintes?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'MAXIMO_OUVINTES', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  maximoOuvintes?: string;

  @property({
    type: 'string',
    length: 2000,
    mysql: {columnName: 'OUVINTES_LISTA', dataType: 'varchar', dataLength: 2000, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ouvintesLista?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'TOTAL_VISITAS', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalVisitas?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'RADIO_LIGADA', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  radioLigada?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'DJ', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dj?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'DJ_IP', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  djIp?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'TIMESTAMP', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  timestamp?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RadioInfo>) {
    super(data);
  }
}

export interface RadioInfoRelations {
  // describe navigational properties here
}

export type RadioInfoWithRelations = RadioInfo & RadioInfoRelations;
