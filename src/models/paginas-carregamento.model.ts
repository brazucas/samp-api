import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'paginas_carregamento'}}
})
export class PaginasCarregamento extends Entity {
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
    mysql: {columnName: 'NICK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nick?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'TIMESTAMP', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  timestamp?: string;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_login_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  loginPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_principal_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaPrincipalPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_webchat_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaWebchatPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_ranking_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaRankingPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_partida_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaPartidaPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_mensagens_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaMensagensPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_faq_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaFaqPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_halldafama_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaHalldafamaPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_widgets_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaWidgetsPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_veiculo_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaVeiculoPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_servidor_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaServidorPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_proezas_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaProezasPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_registro_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  registroPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_gaia_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaGaiaPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_perfil_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaPerfilPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_loja_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaLojaPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_encomendar_veiculo_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaEncomendarVeiculoPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_carrinho_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaCarrinhoPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_finalizar_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaFinalizarPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_msg_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaMsgPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_yt_vincular_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaYtVincularPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_skin_mgs_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaSkinMgsPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_profissoes_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaProfissoesPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_prefeitura_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaPrefeituraPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_denuncia_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaDenunciaPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_config_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaConfigPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_atualizar_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaAtualizarPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_jogar_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  jogarPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_mapa_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaMapaPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_convites_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaConvitesPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_objetos_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaObjetosPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_leiloes_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaLeiloesPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_recuperar_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  recuperarPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_banners_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaBannersPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_creditos_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  creditosPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_status_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaStatusPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_casa_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaCasaPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_desempenho_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaDesempenhoPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_minigames_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaMinigamesPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_escrever_mensagem_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaEscreverMensagemPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_propriedade_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaPropriedadePhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_suporte_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaSuportePhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_resgate_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaResgatePhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_futebol_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaFutebolPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_mg_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaMgPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_minha_radio_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaMinhaRadioPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_enviar_mapa_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaEnviarMapaPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_familias_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaFamiliasPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_download_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaDownloadPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_conversor_mapa_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaConversorMapaPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_leiloes_novo_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaLeiloesNovoPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_yt_videos_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaYtVideosPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_season2_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaSeason2Php?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '__v0_7_login_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  v0_7LoginPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '__v0_7_conta_principal_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  v0_7ContaPrincipalPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '__v0_7_conta_mensagens_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  v0_7ContaMensagensPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '__v0_7_conta_msg_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  v0_7ContaMsgPhp?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: '_conta_banners_lista_php', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  contaBannersListaPhp?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PaginasCarregamento>) {
    super(data);
  }
}

export interface PaginasCarregamentoRelations {
  // describe navigational properties here
}

export type PaginasCarregamentoWithRelations = PaginasCarregamento & PaginasCarregamentoRelations;
