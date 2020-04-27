import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'propriedades'}}
})
export class Propriedades extends Entity {
  static variaveisPublicas = [
    "__UID", "numero", "especial", "valorDaPropriedade", "px", "py", "pz", "pa", "propriedadeAVenda", "proprietario", "navila", "tipo", "propriedadeAtiva", "nomeDaPropriedade"
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
    type: 'string',
    length: 50,
    mysql: {columnName: 'ÿULTIMA_ATUALIZACAO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ultimaAtualizacao?: string;

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
    mysql: {columnName: 'ÿpx', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
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
    mysql: {columnName: 'PropriedadeAVenda', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  propriedadeAVenda?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Especial', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  especial?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Proprietario', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  proprietario?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Socio', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  socio?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Gerente', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  gerente?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PropriedadeAtiva', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  propriedadeAtiva?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Tipo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tipo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NomeDaPropriedade', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nomeDaPropriedade?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorDaPropriedade', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorDaPropriedade?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PontosDaPropriedade', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pontosDaPropriedade?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'RendimentosDaPropriedade', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  rendimentosDaPropriedade?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TotalInvestidoNaPropriedade', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalInvestidoNaPropriedade?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorDosSalarios', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorDosSalarios?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SeguradaPor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  seguradaPor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Chave1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chave1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Chave2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chave2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Chave3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chave3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Saidax', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  saidax?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Saiday', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  saiday?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Saidaz', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  saidaz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Saidaa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  saidaa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PortaEntradax', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  portaEntradax?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PortaEntraday', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  portaEntraday?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PortaEntradaz', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  portaEntradaz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Entradax', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  entradax?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Entraday', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  entraday?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Entradaz', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  entradaz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PortaSaidax', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  portaSaidax?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PortaSaiday', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  portaSaiday?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PortaSaidaz', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  portaSaidaz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Interior', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  interior?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Entradaa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  entradaa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'VirtualWorld', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  virtualWorld?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Funcionario10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  funcionario10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorFuncionario10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorFuncionario10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UltimoRendimento', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ultimoRendimento?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UltimasReceitas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ultimasReceitas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UltimasDespesas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ultimasDespesas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UltimoInvestido', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ultimoInvestido?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Despesas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  despesas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Receitas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  receitas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Mercadorias', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mercadorias?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DividendosDaPropriedade', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dividendosDaPropriedade?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'EntraVeiculo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  entraVeiculo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Comissao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  comissao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrecoGasolina', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoGasolina?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrecoAlcool', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoAlcool?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrecoDiesel', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoDiesel?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrecoAditivada', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoAditivada?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrecoQuerosene', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoQuerosene?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PossuiCofre', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  possuiCofre?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'LocalCofreX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  localCofreX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'LocalCofreY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  localCofreY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'LocalCofreZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  localCofreZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'AutoFrete', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  autoFrete?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRevisao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRevisao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTravas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTravas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PEstepes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pEstepes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAlarme', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pAlarme?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTurbo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTurbo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBateria', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBateria?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAntiFurto', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pAntiFurto?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PGPS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pgps?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PLimitador', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pLimitador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRastreador', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRastreador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PABS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pabs?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAutomatico', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pAutomatico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCompressor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCompressor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBlindagem', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBlindagem?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPneus', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPneus?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PFazerMotor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pFazerMotor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin_1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPizza', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPizza?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PQuentinha', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pQuentinha?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCerveja', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCerveja?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRefrigerante', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRefrigerante?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PWhisky', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pWhisky?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRedBull', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRedBull?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSanduiche', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSanduiche?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBigZuca', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBigZuca?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCafe', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCafe?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCaldo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCaldo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PLancaMisseis', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pLancaMisseis?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PLancaChamas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pLancaChamas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PColete', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pColete?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCamuflagem', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCamuflagem?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTeaser', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTeaser?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBarril', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBarril?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PDinamites', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pDinamites?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PMina', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pMina?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PFlash', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pFlash?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSmoke', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSmoke?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSniper', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSniper?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PMolotov', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pMolotov?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PGranadas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pGranadas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRifle', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRifle?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PM4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pm4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAK47', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pak47?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSMG', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  psmg?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'P9mm', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  p9mm?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'P9mmS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  p9mmS?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PDesertEagle', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pDesertEagle?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PUzi', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pUzi?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTec9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTec9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PEscopeta', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pEscopeta?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PEscopetaS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pEscopetaS?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PEscopetaC', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pEscopetaC?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTratamento', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTratamento?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCurativos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCurativos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PKitMedico', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pKitMedico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PGlicose', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pGlicose?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PReanimar', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pReanimar?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPlanoDeSaude', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPlanoDeSaude?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRadio', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRadio?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Rendimentos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  rendimentos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Dinheiro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dinheiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCelular', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCelular?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSocoIngles', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSocoIngles?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PGarra', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pGarra?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PMochila', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pMochila?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PFlores', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pFlores?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPatins', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPatins?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PFaca', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pFaca?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCamera', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCamera?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PParaquedas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pParaquedas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PChapeu', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pChapeu?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PVibrador', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pVibrador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCapacete', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCapacete?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSementes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSementes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PExtintor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pExtintor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PNoteBook', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pNoteBook?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PIscas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pIscas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PVara', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pVara?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PKatana', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pKatana?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBengala', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBengala?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'POculos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pOculos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PMascara', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pMascara?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBalao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBalao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSerraEletrica', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSerraEletrica?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PImunizantes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pImunizantes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPrancha', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPrancha?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista1Valor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista1Valor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionistas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionistas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista1Dividendos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista1Dividendos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlantacaoMinX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  plantacaoMinX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlantacaoMinY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  plantacaoMinY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlantacaoMaxX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  plantacaoMaxX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlantacaoMaxY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  plantacaoMaxY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario0', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PNeon', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pNeon?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorSalarioFuncionario27', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorSalarioFuncionario27?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSeguro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSeguro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAlarmeR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pAlarmeR?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Trancada', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trancada?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Acionista10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acionista10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arma_Slot_1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armaSlot_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balas_Slot_1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balasSlot_1?: string;

  // Define well-known properties here

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
