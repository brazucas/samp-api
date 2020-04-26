import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'MORTES_RPG'}}
})
export class MortesRpg extends Entity {
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
    mysql: {columnName: 'PlayerName', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  playerName: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'KillerName', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  killerName: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Reason', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  reason: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'PlayerX', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  playerX: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'PlayerY', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  playerY: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'PlayerZ', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  playerZ: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'KillerX', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  killerX: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'KillerY', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  killerY: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'KillerZ', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  killerZ: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'Distancia', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  distancia: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'PlayerHealth', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  playerHealth: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'KillerHealth', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  killerHealth: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'Local_Tipo', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  localTipo: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Local_ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  localId: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'HORA', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  hora: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MortesRpg>) {
    super(data);
  }
}

export interface MortesRpgRelations {
  // describe navigational properties here
}

export type MortesRpgWithRelations = MortesRpg & MortesRpgRelations;
