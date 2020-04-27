import { Entity, model, property } from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'casas'}}})
export class Casas extends Entity {
  static variaveisPublicas = [
    "__UID", "px", "py", "pz", "pa", "av", "numero", "especial", "proprietario", "referencia", "valorOriginal", "valorDeVenda", "vila", "interior"
  ];

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
    mysql: {
      columnName: 'ULTIMA_ATUALIZACAO',
      dataType: 'int',
      dataLength: null,
      dataPrecision: 10,
      dataScale: 0,
      nullable: 'N'
    },
  })
  ultimaAtualizacao: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'NUMERO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  numero: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'px', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  px?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'py', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  py?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'pz', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'pa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'AV', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  av?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Proprietario',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  proprietario?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Referencia',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  referencia?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'ValorOriginal',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  valorOriginal?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'ValorDeVenda',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  valorDeVenda?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Chave1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  chave1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Chave2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  chave2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Chave3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  chave3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Saidax',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  saidax?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Saiday',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  saiday?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Saidaz',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  saidaz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Saidaa',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  saidaa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'PortaEntradax',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  portaEntradax?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'PortaEntraday',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  portaEntraday?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'PortaEntradaz',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  portaEntradaz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'VirtualWorld',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  virtualWorld?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Entradax',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  entradax?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Entraday',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  entraday?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Entradaz',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  entradaz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Entradaa',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  entradaa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'PortaSaidax',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  portaSaidax?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'PortaSaiday',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  portaSaiday?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'PortaSaidaz',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  portaSaidaz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Interior',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  interior?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'ComInterior',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  comInterior?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Skin_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  skin_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Trancada',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  trancada?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Prancha',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  prancha?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Especial',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  especial?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Vila',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  vila?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'CasaDaPropriedade',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  casaDaPropriedade?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Dinheiro',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  dinheiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Skin_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  skin_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Skin_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  skin_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Skin_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  skin_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Skin_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  skin_2?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Casas>) {
    super(data);
  }
}

export interface CasasRelations {
  // describe navigational properties here
}

export type CasasWithRelations = Casas & CasasRelations;
