import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'MORTES_MGS'}}
})
export class MortesMgs extends Entity {
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
    mysql: {columnName: 'MG', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  mg: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'MORREDOR', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  morredor: string;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'MORREDOR_ALTURA', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  morredorAltura: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'MATADOR', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  matador: string;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'MATADOR_ALTURA', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  matadorAltura: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'DISTANCIA', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  distancia: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ARMA', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  arma: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ANIMACAO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  animacao: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'CLASSE', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  classe: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'FIGHT_STYLE', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  fightStyle: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'JOGADORES_ONLINE', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  jogadoresOnline: number;

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

  constructor(data?: Partial<MortesMgs>) {
    super(data);
  }
}

export interface MortesMgsRelations {
  // describe navigational properties here
}

export type MortesMgsWithRelations = MortesMgs & MortesMgsRelations;
