import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}, name: "contas_mgs"})
export class ContasMgs extends Entity {
  @property({
    type: 'number',
    generated: true,
    required: true,
    id: true,
  })
  _id: string;

  @property({
    type: 'string',
    generated: false,
    required: true,
  })
  __UID: string;

  @property({
    type: 'string',
    required: true,
  })
  Senha: string;

  @property({
    type: 'number',
  })
  CamMode?: number;

  @property({
    type: 'number',
  })
  UltimoLogin?: number;

  @property({
    type: 'number',
  })
  Pontos?: number;

  @property({
    type: 'number',
  })
  Matou?: number;

  @property({
    type: 'number',
  })
  Morreu?: number;

  @property({
    type: 'string',
  })
  IP?: string;

  @property({
    type: 'number',
  })
  TempoConectado?: number;

  @property({
    type: 'number',
  })
  PROEZAS?: number;

  @property({
    type: 'number',
  })
  Score?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ContasMgs>) {
    super(data);
  }
}

export interface ContasMgsRelations {
  // describe navigational properties here
}

export type ContasMgsWithRelations = ContasMgs & ContasMgsRelations;
