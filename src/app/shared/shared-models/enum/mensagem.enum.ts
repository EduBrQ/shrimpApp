export enum MensagemEnum {
    CONFIRMAR_LIMPAR_REGISTROS = "Tem certeza que deseja limpar todos os registros?",
    CONFIRMAR_LIMPAR_CAMPOS = "Tem certeza que deseja limpar os campos?",
    CONFIRMAR_CANCELAR = "As alterações não foram salvas. Deseja fechar sem salvá-las?",
    CONFIRMAR_EXCLUSAO = "Deseja excluir o(s) registro(s)?",
    CONFIRMAR_ALTERAR_SITUACAO = "Deseja inativar o(s) registro(s)?",
    ERRO_DESCONHECIDO = "Erro desconhecido, verifique o console.",
    ERRO_NO_SERVICO = 'Erro ao consumir o serviço "{VALUE}".',
    ERRO_AO_FORMATAR_MENSAGEM = "Erro ao formatar a mensagem do serviço.",
    SERVICO_INDISPONIVEL = "Serviço indisponível no momento.",
    CAMPO_OBRIGATORIO_SUB = "Este campo é obrigatório!",
    VARIAVEL_PARAM_NULL = "Erro ao recuperar variável [{VALUE}] da URL",
    INFORMAR_IPTU = "Por favor informe o IPTU",
    ID_REQUERIMENTO_INDISPONIVEL = "ID do requerimento indisponível para consulta.",
    DADOS_SALVOS_COM_SUCESSO = "Dados salvos com sucesso!",
    DADOS_ATUALIZADO_SUCESSO = "Atualizado com sucesso!",
    CONFIRMAR_EXCLUSAO_ITEM = "Confirma a exclusão do {VALUE}?",
    CONFIRMAR_TERMOS = "Você deve concordar com os termos de uso.",
    ERRO_INTERNO = "Erro inesperado ao consumir serviço, \nverifique o console.",
    SERVICO_NAO_EXISTE = "O serviço solicitado não existe. \nVerifique o console.",
    ERRO_AO_REALIZAR_PARSE_JSON = "Erro ao realizar análise de mensagem recebida do serviço para a aplicação.",
    ERRO_AO_MAPEAR_OBJETO = "Erro ao mapear informações para o serviço. \nVerifique o console.",
    LOGIN_EFETUADO = "Login Efetuado",
    DOCUMENTO_INVALIDO = "CPF/CNPJ não encontrado na Receita Federal do Brasil.",
    ERRO_AO_MONTAR_LISTA_FORMULARIOS = "Erro ao montar a lista de formulários para o requerimento.",
    ERRO_AO_MAPEAR_OBJETO_SIMPLES = "Erro ao preencher dados no formulário após verificar disponibilidade de cadastro para o CPF/CNPJ informado.",
    // tslint:disable-next-line:max-line-length
    NECESSARIO_OLEI = 'Área parcelada é maior ou igual a 150.000 m² (15 hectares). Deve-se providenciar OLEI. Após a obtenção de Licença de Implantação válida, o requerente deverá alterar o presente cadastro respondendo “Sim” à seguinte pergunta: “Existe Licença de Implantação válida para o empreendimento?” <a href="http://olei-hm.pbh.gov.br" target="_blank">http://olei-hm.pbh.gov.br/</a>',
    PLACEHOLDER_SENHA = "Digite uma senha entre 6 e 12 caracteres.",
    CAMPOS_FALTANTES = "Existe(m) campo(s) obrigatório(s) não preenchido(s)!",
    SESSAO_EXPIRADA = "Sua sessão expirou. Faça login novamente",
    ERRO_SIURBE = "Houve um problema ao conectar com o serviço do Siurbe, tente novamente mais tarde.",
    ANEXO_TAMANHO_FORMATO_INVALIDO = "Tamanho do formato inválido!",
    DOCUMENTO_JA_ANEXADO = "Já existe um documento anexado com esse tipo.",
    ANEXO_FORMATO_INVALIDO = "Os tipos válidos são XLS-XLSX, JPEG-JPG, PNG, DWG, PDF.",
    // tslint:disable-next-line:max-line-length
    PROPRIETARIO_NAO_CADASTRADO = 'Proprietário não cadastrado no sistema. O cidadão deve realizar seu cadastramento através do link a seguir antes de ser vinculado a um requerimento: <a href="https://urbano-hm.pbh.gov.br/parcsolo/cadastro-proprietario" target="_blank">https://urbano-hm.pbh.gov.br/parcsolo/cadastro-proprietario</a>',
    // tslint:disable-next-line: max-line-length
    ISENCAO_TAXA = "Em função de deferimento de pedido de isenção, não será exigido pagamento de taxas de exame. O requerimento prosseguirá, mas poderá ser requerido reembolso do valor pago seguindo os passos descritos no link a seguir: http://portaldeservicos.pbh.gov.br/portalservicos/view/paginas/apresentaServico.jsf",
    TECNICO_JA_ASSOCIADO = "Este técnico já está associado ao requerimento, para alterar técnico, favor selecionar outro.",
    CHECK_ANALISE_OBRIGATORIO = "Para salvar essa análise documental, é necessário informar se aceita ou recusa o documento.",
    USUARIO_NAO_ATUALIZADO = "Usuário não atualizado.",
    CONFIRMAR_VOLTAR = "Tem certeza que deseja voltar? Todos as informações que não foram salvas serão perdidas.",
    CONCLUSAO_ACATADA = "Análise de isenção concluída e aceita. A guia de requerimento será isentada",
    ACEITA_RECUSA_NULL = "Para salvar a análise de isenção, é necessário informar se aceita ou recusa a isenção da guia",
    CONCLUSAO_NAO_ACATADA = "Análise de isenção concluída e recusada. A guia de requerimento não será isentada e deverá ser paga",
    REQ_PRIORITARIO = "Para enquadramento em atendimento prioritário o requerente deve atender a um dos requisitos abaixo: ",
    REQ_PRIORITARIO_FULL = "Para enquadramento em atendimento prioritário o requerente deve atender a um dos requisitos: \n - Ter acima de 60 anos \n - Ser portador de deficiência física ou mental \n - Ser portador de doença grave \n ** As condições acima deverão ser comprovadas através de documento juntado ao requerimento",
    TERMOS_DIRETRIZES = "<p> A) DECLARO ESTAR CIENTE DA LEGISLAÇÃO EM VIGOR E QUE SÃO VERDADEIRAS AS INFORMAÇÕES PRESTADAS, BEM COMO DE POSSÍVEL RESPONSABILIZAÇÃO CIVIL E CRIMINAL EM CASO DE OMISSÃO E/OU FORNECIMENTO DE INFORMAÇÕES INVERÍDICAS OU DE DESCUMPRIMENTO DA LEI;</p> <p> B) DECLARO ESTAR CIENTE DE QUE DEVERÁ SER PROTOCOLADO O PROJETO DE PARCELAMENTO NO PRAZO DE VALIDADE DAS DIRETRIZES PARA PARCELAMENTO DO SOLO SOB PENA DE ABERTURA DE NOVO PROCESSO DE DIRETRIZES; <p> C) QUANDO SOLICITADO, DEVERÁ SER APRESENTADA DOCUMENTAÇÃO COMPLEMENTAR, SOB PENA DE INDEFERIMENTO DO PROCESSO. <p> D) DECLARO ESTAR CIENTE DE QUE DEVERÁ SER PROVIDENCIADO O REGISTRO DO PARCELAMENTO APROVADO NO CARTÓRIO DE REGISTRO DE IMÓVEIS PARA OS CASOS DE LOTEAMENTO E DESMEMBRAMENTO, EM ATÉ 180 (CENTO E OITENTA) DIAS CONTADOS A PARTIR DA APROVAÇÃO DO PROJETO, SOB PENA DE CADUCIDADE DA APROVAÇÃO, CONFORME ARTIGO 18 DA LEI FEDERAL N° 6.766/1979 E ART. 127 DA LEI MUNICIPAL N° 11.181/2019; <p> E) DECLARO ESTAR CIENTE DE QUE O LICENCIAMENTO/REGULARIZAÇÃO DO PARCELAMENTO DO SOLO NÃO IMPLICA NO RECONHECIMENTO DE DIREITOS QUANTO À POSSE E AO DOMÍNIO DO IMÓVEL OBJETO DE PARCELAMENTO; <p> F) DECLARO ESTAR CIENTE DA OBRIGAÇÃO DE IMPLANTAÇÃO DE OBRAS DE INFRAESTRUTURA, SE HOUVER; <p> G) DECLARO ESTAR CIENTE DE QUE DEVERÁ SER EXECUTADO O PLANTIO DE ÁRVORES NO PASSEIO E IMPLANTAÇÃO DO PROJETO PAISAGÍSTICO, NO CASO DE TRANSFERÊNCIA DE ELUP AO MUNICÍPIO, NO PRAZO ESTABELECIDO NO CRONOGRAMA, SOB PENA DE APLICAÇÃO DAS PENALIDADES PREVISTAS EM LEI; <p> H) DECLARO NÃO TER SIDO OMITIDO FATO IMPEDITIVO À APROVAÇÃO DO(A) REFERIDO(A) LICENCIAMENTO/REGULARIZAÇÃO DE PARCELAMENTO DO SOLO, ASSUMINDO, DESDE JÁ, TOTAL RESPONSABILIDADE PELA ELUCIDAÇÃO DO DOCUMENTO CARTORIAL QUANTO À LOCALIZAÇÃO, AO FORMATO, ÀS DIMENSÕES E À ÀREA DO IMÓVEL, CONFORME PREVISTO NO §2º DO ART. 4º DO DECRETO MUNICIPAL 17.273/20 E ALTERAÇÕES POSTERIORES. FICA EXONERADA A PREFEITURA MUNICIPAL DE BELO HORIZONTE, DESTA FORMA, DE QUALQUER RESPONSABILIDADE EM RELAÇÃO A SI OU A TERCEIROS, CABENDO À SERVENTIA IMOBILIÁRIA COMPETENTE A ANÁLISE DE PERTINÊNCIA QUANTO AO REGISTRO DO PARCELAMENTO APROVADO COM BASE NA ELUCIDAÇÃO APRESENTADA. <p> I) DECLARO TER CIÊNCIA DO TEOR DO ART. 117, §2º, INCISO I, DA LEI 11.181/2019, QUE DIZ QUE: O EXAME DA REGULARIDADE DOMINIAL OU POSSESSÓRIA NÃO COMPETE AO EXECUTIVO, CABENDO À SERVENTIA IMOBILIÁRIA PRÓPRIA A ANÁLISE DE PERTINÊNCIA QUANTO AO REGISTRO DO PARCELAMENTO APROVADO. DESTA FORMA A PBH NÃO AVALIA A REGULARIDADE DOMINIAL DO IMÓVEL, EXIGINDO, NO ENTANTO, A MATRÍCULA PARA FIM DE RECONHECIMENTO DO OBJETO DO PARCELAMENTO DO SOLO QUE CORRESPONDE À LOCALIZAÇÃO, FORMATO, DIMENSÃO E CARACTERIZAÇÃO DO MESMO. A MATRÍCULA DEVE SER ATUALIZADA (90 DIAS) CONFORME PREVÊEM OS ARTIGOS 9º E 10º CAPUT DA LEI FEDERAL Nº 6.766/79 E DEVE CORRESPONDER AO OBJETO DE PARCELAMENTO, CONFORME PREVÊ O §3º DO ART. 9º DA MESMA LEI. <p> J) DECLARO AINDA QUE, PELA AUSÊNCIA DE REGULARIDADE DOMINIAL, A TRANSFERÊNCIA DE ÁREA AO MUNICÍPIO PODE FICAR PREJUDICADA, IMPEDINDO A APROVAÇÃO DO PARCELAMENTO, NO CASO DE A MESMA SER EXIGIDA NA GLEBA, BEM COMO O REGISTRO DA PLANTA APROVADA JUNTO À SERVENTIA IMOBILIÁRIA COMPETENTE. <p> K) DECLARO ESTAR CIENTE QUE DEVEREI SANAR TODAS AS PENDÊNCIAS EM COMUNICADO DE EXAME NO PRAZO DETERMINADO SOB PENA DE INDEFERIMENTO DO PROCESSO; <p> L) DECLARO QUE OS PROJETOS COMPLEMENTARES, E SEUS RESPECTIVOS ORÇAMENTOS, CASO NECESSÁRIOS, DEVERÃO SER ELABORADOS DENTRO DAS ESPECIFICAÇÕES E NORMAS ADOTADAS PELA SUPERINTENDÊNCIA DE DESENVOLVIMENTO DA CAPITAL - SUDECAP - E SÃO DE TOTAL RESPONSABILIDADE DOS RESPECTIVOS RESPONSÁVEIS TÉCNICOS, ESTANDO O PODER PÚBLICO ISENTO DE RESPONDER POR DANOS FUTUROS À MUNICIPALIDADE, BEM COMO A TERCEIROS, ATÉ A ACEITAÇÃO DEFINITIVA DO PARCELAMENTO PELO MUNICÍPIO. <p> M) DECLARO SER O RESPONSÁVEL LEGAL PELA CONDUÇÃO DO PRESENTE REQUERIMENTO, CONFORME DOCUMENTO DE REPRESENTAÇÃO ANEXO, CABENDO A MIM CIENTIFICAR OS REQUERENTES A RESPEITO DAS OBRIGAÇÕES ACIMA LISTADAS E DE QUALQUER QUESTÃO ADVINDA DO PROCESSAMENTO ADMINISTRATIVO DO PEDIDO, RESPONDENDO CIVIL E CRIMINALMENTE POR NÃO FAZÊ-LO.",
    TERMOS_MODIFICACAO = "<p> A) DECLARO ESTAR CIENTE DE QUE DEVERÁ SER PROVIDENCIADO O REGISTRO DA MODIFICAÇÃO DE PARCELAMENTO APROVADA, NO CARTÓRIO DE REGISTRO DE IMÓVEIS, EM ATÉ 180 (CENTO E OITENTA) DIAS CONTADOS A PARTIR DA APROVAÇÃO DO PROJETO, SOB PENA DE CADUCIDADE DA APROVAÇÃO CONFORME ARTIGO 8º DO DECRETO MUNICIPAL Nº 17.273/20;</p> <p> B) DECLARO ESTAR CIENTE DE QUE O LICENCIAMENTO/REGULARIZAÇÃO DA MODIFICAÇÃO DE PARCELAMENTO DO SOLO NÃO IMPLICA NO RECONHECIMENTO DE DIREITOS QUANTO À POSSE E AO DOMÍNIO DO IMÓVEL OBJETO DE PARCELAMENTO; <p> C) DECLARO QUE SÃO VERDADEIRAS AS INFORMAÇÕES PRESTADAS, BEM COMO DE POSSÍVEL RESPONSABILIZAÇÃO CIVIL E CRIMINAL EM CASO DE OMISSÃO E/OU FORNECIMENTO DE INFORMAÇÕES INVERÍDICAS OU DE DESCUMPRIMENTO DA LEI; <p> D) DECLARO NÃO TER SIDO OMITIDO FATO IMPEDITIVO À APROVAÇÃO DO(A) REFERIDO(A) LICENCIAMENTO/REGULARIZAÇÃO DE MODIFICAÇÃO DE PARCELAMENTO DO SOLO, ASSUMINDO, DESDE JÁ, TOTAL RESPONSABILIDADE PELA ELUCIDAÇÃO DO DOCUMENTO CARTORIAL QUANTO À LOCALIZAÇÃO, AO FORMATO, ÀS DIMENSÕES E À ÀREA DO IMÓVEL, CONFORME PREVISTO NO §2º DO ART. 4º DO DECRETO MUNICIPAL 17.273/20 E ALTERAÇÕES POSTERIORES. FICA EXONERADA A PREFEITURA MUNICIPAL DE BELO HORIZONTE, DESTA FORMA, DE QUALQUER RESPONSABILIDADE EM RELAÇÃO A SI OU A TERCEIROS, CABENDO À SERVENTIA IMOBILIÁRIA COMPETENTE A ANÁLISE DE PERTINÊNCIA QUANTO AO REGISTRO DA MODIFICAÇÃO DE PARCELAMENTO APROVADA COM BASE NA ELUCIDAÇÃO APRESENTADA. <p> E) DECLARO TER CIÊNCIA DO TEOR DO ART. 117, §2º, INCISO I, DA LEI 11.181/2019, QUE DIZ QUE: O EXAME DA REGULARIDADE DOMINIAL OU POSSESSÓRIA NÃO COMPETE AO EXECUTIVO, CABENDO À SERVENTIA IMOBILIÁRIA PRÓPRIA A ANÁLISE DE PERTINÊNCIA QUANTO AO REGISTRO DA MODIFICAÇÃO DE PARCELAMENTO APROVADA. DESTA FORMA A PBH NÃO AVALIA A REGULARIDADE DOMINIAL DO IMÓVEL, EXIGINDO, NO ENTANTO, A MATRÍCULA PARA FIM DE RECONHECIMENTO DO OBJETO DA MODIFICAÇÃO DE PARCELAMENTO DO SOLO QUE CORRESPONDE À LOCALIZAÇÃO, FORMATO, DIMENSÃO E CARACTERIZAÇÃO DO MESMO. A MATRÍCULA DEVE SER ATUALIZADA (90 DIAS) E DEVE CORRESPONDER AO OBJETO DA MODIFICAÇÃO DE PARCELAMENTO; <p> F) DECLARO AINDA QUE, PELA AUSÊNCIA DE REGULARIDADE DOMINIAL, O REGISTRO DA PLANTA APROVADA JUNTO À SERVENTIA IMOBILIÁRIA COMPETENTE PODE FICAR PREJUDICADO. <p> G) DECLARO ESTAR CIENTE QUE DEVEREI SANAR TODAS AS PENDÊNCIAS EM COMUNICADO DE EXAME NO PRAZO DETERMINADO SOB PENA DE INDEFERIMENTO DO PROCESSO; <p> H) DECLARO SER O RESPONSÁVEL LEGAL PELA CONDUÇÃO DO PRESENTE REQUERIMENTO, CONFORME DOCUMENTO DE REPRESENTAÇÃO ANEXO, CABENDO A MIM CIENTIFICAR OS REQUERENTES A RESPEITO DAS OBRIGAÇÕES ACIMA LISTADAS E DE QUALQUER QUESTÃO ADVINDA DO PROCESSAMENTO ADMINISTRATIVO DO PEDIDO, RESPONDENDO CIVIL E CRIMINALMENTE POR NÃO FAZÊ-LO. <p> I) QUANDO SOLICITADO, DEVERÁ SER APRESENTADA DOCUMENTAÇÃO COMPLEMENTAR, SOB PENA DE INDEFERIMENTO DO PROCESSO. ",
    TERMOS_VERIFICACAO = "<p> A)  DECLARO ESTAR CIENTE DA LEGISLAÇÃO EM VIGOR E QUE SÃO VERDADEIRAS AS INFORMAÇÕES PRESTADAS, BEM COMO DE POSSÍVEL RESPONSABILIZAÇÃO CIVIL E CRIMINAL EM CASO DE OMISSÃO E/OU FORNECIMENTO DE INFORMAÇÕES INVERÍDICAS OU DE DESCUMPRIMENTO DA LEI.</p><p>B) QUANDO SOLICITADO, DEVERÁ SER APRESENTADA DOCUMENTAÇÃO COMPLEMENTAR, SOB PENA DE INDEFERIMENTO DO PROCESSO.</p><p>C) DECLARO ESTAR CIENTE DE QUE O DEFERIMENTO DO PEDIDO DE VERIFICAÇÃO DE ORIGEM DE LOTE NÃO IMPLICA NO RECONHECIMENTO DE DIREITOS QUANTO À POSSE E AO DOMÍNIO DO IMÓVEL OBJETO DO REQUERIMENTO.</p><p>D) DECLARO ESTAR CIENTE DE QUE O DEFERIMENTO DO PEDIDO DE VERIFICAÇÃO DE ORIGEM DE LOTE NÃO IMPLICA NO RECONHECIMENTO DE DIREITOS QUANTO À POSSE E AO DOMÍNIO DO IMÓVEL OBJETO DO REQUERIMENTO.</p><p>E) DECLARO ESTAR CIENTE QUE DEVEREI SANAR TODAS AS PENDÊNCIAS APONTADAS AO LONGO DO PROCESSO, NO PRAZO DETERMINADO, SOB PENA DE INDEFERIMENTO.</p><p>F) DECLARO SER O RESPONSÁVEL LEGAL PELA CONDUÇÃO DO PRESENTE REQUERIMENTO, CONFORME DOCUMENTO DE REPRESENTAÇÃO ANEXO, CABENDO A MIM CIENTIFICAR OS REQUERENTES A RESPEITO DAS OBRIGAÇÕES ACIMA LISTADAS E DE QUALQUER QUESTÃO ADVINDA DO PROCESSAMENTO ADMINISTRATIVO DO PEDIDO, RESPONDENDO CIVIL E CRIMINALMENTE POR NÃO FAZÊ-LO.</p>",
}
