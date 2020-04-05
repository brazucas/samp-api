import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Recordes extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Nome: string;

  @property({
    type: 'number',
    required: true,
  })
  Tempo: number;

  @property({
    type: 'string',
    required: true,
  })
  __UID: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Recordes>) {
    super(data);
  }
}

export interface RecordesRelations {
  // describe navigational properties here
}

export type RecordesWithRelations = Recordes & RecordesRelations;
