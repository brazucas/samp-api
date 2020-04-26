import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'TP_MINIGAMES'}}
})
export class TpMinigames extends Entity {
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
    mysql: {columnName: 'NM_MINIGAME', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nmMinigame: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ID_MINIGAME', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idMinigame: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TP_MINIGAME', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  tpMinigame: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'NM_EQUIPE1', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nmEquipe1?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'NM_EQUIPE2', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nmEquipe2?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'NM_EQUIPE3', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nmEquipe3?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'NM_EQUIPE4', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nmEquipe4?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TpMinigames>) {
    super(data);
  }
}

export interface TpMinigamesRelations {
  // describe navigational properties here
}

export type TpMinigamesWithRelations = TpMinigames & TpMinigamesRelations;
