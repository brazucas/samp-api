import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}, name: "propriedades"})
export class Propriedades extends Entity {
  // Define well-known properties here

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
    type: 'number',
  })
  px?: number;

  @property({
    type: 'number',
  })
  py?: number;

  @property({
    type: 'number',
  })
  pz?: number;

  @property({
    type: 'number',
  })
  pa?: number;

  @property({
    type: 'number',
  })
  PropriedadeAVenda?: number;

  @property({
    type: 'number',
  })
  Especial?: number;

  @property({
    type: 'string',
  })
  Proprietario?: string;

  @property({
    type: 'string',
  })
  Socio?: string;

  @property({
    type: 'string',
  })
  Gerente?: string;

  @property({
    type: 'number',
  })
  Tipo?: number;

  @property({
    type: 'string',
  })
  NomeDaPropriedade?: string;

  @property({
    type: 'number',
  })
  ValorDaPropriedade?: number;

  @property({
    type: 'number',
  })
  PontosDaPropriedade?: number;

  @property({
    type: 'number',
  })
  RendimentosDaPropriedade?: number;

  @property({
    type: 'number',
  })
  TotalInvestidoNaPropriedade?: number;

  @property({
    type: 'number',
  })
  ValorDosSalarios?: number;

  @property({
    type: 'number',
  })
  SeguradaPor?: number;

  @property({
    type: 'number',
  })
  Saidax?: number;

  @property({
    type: 'number',
  })
  Saiday?: number;

  @property({
    type: 'number',
  })
  Saidaz?: number;

  @property({
    type: 'number',
  })
  Saidaa?: number;

  @property({
    type: 'number',
  })
  PortaEntradax?: number;

  @property({
    type: 'number',
  })
  PortaEntraday?: number;

  @property({
    type: 'number',
  })
  PortaEntradaz?: number;

  @property({
    type: 'number',
  })
  Entradax?: number;

  @property({
    type: 'number',
  })
  Entraday?: number;

  @property({
    type: 'number',
  })
  Entradaz?: number;

  @property({
    type: 'number',
  })
  PortaSaidax?: number;

  @property({
    type: 'number',
  })
  PortaSaiday?: number;

  @property({
    type: 'number',
  })
  PortaSaidaz?: number;

  @property({
    type: 'number',
  })
  Interior?: number;

  @property({
    type: 'number',
  })
  VirtualWorld?: number;

  @property({
    type: 'string',
  })
  Funcionario1?: string;

  @property({
    type: 'string',
  })
  Funcionario2?: string;

  @property({
    type: 'string',
  })
  Funcionario3?: string;

  @property({
    type: 'string',
  })
  Funcionario4?: string;

  @property({
    type: 'string',
  })
  Funcionario5?: string;

  @property({
    type: 'string',
  })
  Funcionario6?: string;

  @property({
    type: 'string',
  })
  Funcionario7?: string;

  @property({
    type: 'string',
  })
  Funcionario8?: string;

  @property({
    type: 'string',
  })
  Funcionario9?: string;

  @property({
    type: 'string',
  })
  Funcionario10?: string;

  @property({
    type: 'number',
  })
  ValorFuncionario1?: number;

  @property({
    type: 'number',
  })
  ValorFuncionario2?: number;

  @property({
    type: 'number',
  })
  ValorFuncionario3?: number;

  @property({
    type: 'number',
  })
  ValorFuncionario4?: number;

  @property({
    type: 'number',
  })
  ValorFuncionario5?: number;

  @property({
    type: 'number',
  })
  ValorFuncionario6?: number;

  @property({
    type: 'number',
  })
  ValorFuncionario7?: number;

  @property({
    type: 'number',
  })
  ValorFuncionario8?: number;

  @property({
    type: 'number',
  })
  ValorFuncionario9?: number;

  @property({
    type: 'number',
  })
  ValorFuncionario10?: number;

  @property({
    type: 'number',
  })
  PropriedadeAtiva?: number;

  @property({
    type: 'number',
  })
  Chave1?: string;

  @property({
    type: 'string',
  })
  Chave2?: string;

  @property({
    type: 'string',
  })
  Chave3?: string;

  @property({
    type: 'number',
  })
  Entradaa?: number;

  @property({
    type: 'number',
  })
  NaVila?: number;

    // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Propriedades>) {
    super(data);
  }
}

export interface PropriedadesRelations {
  // describe navigational properties here
}

export type PropriedadesWithRelations = Propriedades & PropriedadesRelations;
