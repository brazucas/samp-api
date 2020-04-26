import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'SAMP_OBJETOS'}}
})
export class SampObjetos extends Entity {
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
    mysql: {columnName: 'NR_OBJETO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  nrObjeto: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'CT_OBJETO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ctObjeto: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'NM_OBJETO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nmObjeto: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SampObjetos>) {
    super(data);
  }
}

export interface SampObjetosRelations {
  // describe navigational properties here
}

export type SampObjetosWithRelations = SampObjetos & SampObjetosRelations;
