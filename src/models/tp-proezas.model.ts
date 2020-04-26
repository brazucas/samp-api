import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'TP_PROEZAS'}}
})
export class TpProezas extends Entity {
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
    length: 45,
    mysql: {columnName: 'ID_PROEZA', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  idProeza?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'NM_PROEZA', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nmProeza?: string;

  @property({
    type: 'string',
    length: 300,
    mysql: {columnName: 'DS_PROEZA', dataType: 'varchar', dataLength: 300, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dsProeza?: string;

  @property({
    type: 'string',
    length: 300,
    mysql: {columnName: 'RS_PROEZA', dataType: 'varchar', dataLength: 300, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  rsProeza?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TpProezas>) {
    super(data);
  }
}

export interface TpProezasRelations {
  // describe navigational properties here
}

export type TpProezasWithRelations = TpProezas & TpProezasRelations;
