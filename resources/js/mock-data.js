const dadosMockados = {
  "meta": {
    "atualizadoEm": "30/08/2026",
    "fonte": "API de Dados Abertos da Câmara dos Deputados",
    "url": "https://dadosabertos.camara.leg.br/api/v2"
  },
  "deputados": {
    "dados": [
      {
        "id": 101,
        "nome": "Ana Martins",
        "nomeCivil": "Ana Clara Martins",
        "nomeEleitoral": "Ana Martins",
        "siglaPartido": "PSB",
        "siglaUf": "SP",
        "idLegislatura": 57,
        "email": "ana.martins@camara.leg.br",
        "situacao": "Exercício",
        "condicaoEleitoral": "Titular",
        "escolaridade": "Superior completo",
        "gabinete": {
          "nome": "321",
          "predio": "Anexo IV",
          "andar": "3",
          "telefone": "(61) 3215-0001"
        }
      },
      {
        "id": 102,
        "nome": "Bruno Almeida",
        "nomeCivil": "Bruno Henrique Almeida",
        "nomeEleitoral": "Bruno Almeida",
        "siglaPartido": "MDB",
        "siglaUf": "MG",
        "idLegislatura": 57,
        "email": "bruno.almeida@camara.leg.br",
        "situacao": "Exercício",
        "condicaoEleitoral": "Titular",
        "escolaridade": "Pós-graduação",
        "gabinete": {
          "nome": "512",
          "predio": "Anexo IV",
          "andar": "5",
          "telefone": "(61) 3215-0002"
        }
      },
      {
        "id": 103,
        "nome": "Carla Ribeiro",
        "nomeCivil": "Carla de Souza Ribeiro",
        "nomeEleitoral": "Carla Ribeiro",
        "siglaPartido": "PSD",
        "siglaUf": "RJ",
        "idLegislatura": 57,
        "email": "carla.ribeiro@camara.leg.br",
        "situacao": "Exercício",
        "condicaoEleitoral": "Titular",
        "escolaridade": "Superior completo",
        "gabinete": {
          "nome": "226",
          "predio": "Anexo IV",
          "andar": "2",
          "telefone": "(61) 3215-0003"
        }
      },
      {
        "id": 104,
        "nome": "Daniel Ferreira",
        "nomeCivil": "Daniel Augusto Ferreira",
        "nomeEleitoral": "Daniel Ferreira",
        "siglaPartido": "PP",
        "siglaUf": "PR",
        "idLegislatura": 57,
        "email": "daniel.ferreira@camara.leg.br",
        "situacao": "Exercício",
        "condicaoEleitoral": "Titular",
        "escolaridade": "Superior completo",
        "gabinete": {
          "nome": "418",
          "predio": "Anexo IV",
          "andar": "4",
          "telefone": "(61) 3215-0004"
        }
      },
      {
        "id": 105,
        "nome": "Elisa Nascimento",
        "nomeCivil": "Elisa Maria Nascimento",
        "nomeEleitoral": "Elisa Nascimento",
        "siglaPartido": "PT",
        "siglaUf": "BA",
        "idLegislatura": 57,
        "email": "elisa.nascimento@camara.leg.br",
        "situacao": "Exercício",
        "condicaoEleitoral": "Titular",
        "escolaridade": "Mestrado",
        "gabinete": {
          "nome": "134",
          "predio": "Anexo IV",
          "andar": "1",
          "telefone": "(61) 3215-0005"
        }
      },
      {
        "id": 106,
        "nome": "Felipe Costa",
        "nomeCivil": "Felipe Ramos da Costa",
        "nomeEleitoral": "Felipe Costa",
        "siglaPartido": "UNIÃO",
        "siglaUf": "GO",
        "idLegislatura": 57,
        "email": "felipe.costa@camara.leg.br",
        "situacao": "Exercício",
        "condicaoEleitoral": "Suplente",
        "escolaridade": "Superior completo",
        "gabinete": {
          "nome": "625",
          "predio": "Anexo IV",
          "andar": "6",
          "telefone": "(61) 3215-0006"
        }
      },
      {
        "id": 107,
        "nome": "Gabriela Lima",
        "nomeCivil": "Gabriela Santos Lima",
        "nomeEleitoral": "Gabriela Lima",
        "siglaPartido": "REPUBLICANOS",
        "siglaUf": "PE",
        "idLegislatura": 56,
        "email": "gabriela.lima@camara.leg.br",
        "situacao": "Fim de mandato",
        "condicaoEleitoral": "Titular",
        "escolaridade": "Superior completo",
        "gabinete": {
          "nome": "—",
          "predio": "—",
          "andar": "—",
          "telefone": "—"
        }
      },
      {
        "id": 108,
        "nome": "Henrique Oliveira",
        "nomeCivil": "Henrique José Oliveira",
        "nomeEleitoral": "Henrique Oliveira",
        "siglaPartido": "PDT",
        "siglaUf": "CE",
        "idLegislatura": 57,
        "email": "henrique.oliveira@camara.leg.br",
        "situacao": "Exercício",
        "condicaoEleitoral": "Titular",
        "escolaridade": "Doutorado",
        "gabinete": {
          "nome": "344",
          "predio": "Anexo IV",
          "andar": "3",
          "telefone": "(61) 3215-0008"
        }
      },
      {
        "id": 109,
        "nome": "Isabela Rocha",
        "nomeCivil": "Isabela Mendes Rocha",
        "nomeEleitoral": "Isabela Rocha",
        "siglaPartido": "PODE",
        "siglaUf": "SC",
        "idLegislatura": 57,
        "email": "isabela.rocha@camara.leg.br",
        "situacao": "Licença",
        "condicaoEleitoral": "Titular",
        "escolaridade": "Superior completo",
        "gabinete": {
          "nome": "207",
          "predio": "Anexo IV",
          "andar": "2",
          "telefone": "(61) 3215-0009"
        }
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": "/deputados"
      }
    ]
  },
  "proposicoes": {
    "dados": [
      {
        "id": 2001,
        "siglaTipo": "PL",
        "numero": 1842,
        "ano": 2026,
        "ementa": "Estabelece diretrizes para ampliar a transparência e a reutilização de dados produzidos por órgãos públicos.",
        "ementaDetalhada": "Estabelece procedimentos de publicação, documentação e atualização de conjuntos de dados de interesse público.",
        "dataApresentacao": "2026-03-18",
        "descricaoTipo": "Projeto de Lei",
        "descricaoSituacao": "Aguardando parecer",
        "regime": "Ordinário",
        "orgaoAtual": "Comissão de Administração e Serviço Público",
        "despacho": "Às comissões competentes para análise.",
        "temas": [
          "Administração Pública",
          "Transparência"
        ],
        "autorIds": [
          101,
          105
        ],
        "explicacao": "Propõe regras para que órgãos públicos publiquem dados com documentação e atualização mais claras.",
        "tramitacoes": [
          {
            "data": "2026-03-18",
            "descricao": "Apresentação da proposição à Câmara."
          },
          {
            "data": "2026-03-26",
            "descricao": "Distribuição para as comissões competentes."
          },
          {
            "data": "2026-05-14",
            "descricao": "Designação de relatoria na comissão."
          }
        ]
      },
      {
        "id": 2002,
        "siglaTipo": "PL",
        "numero": 963,
        "ano": 2026,
        "ementa": "Institui medidas de acessibilidade digital em serviços públicos disponibilizados pela internet.",
        "ementaDetalhada": "Define requisitos mínimos de acessibilidade, avaliação periódica e linguagem simples nos serviços digitais públicos.",
        "dataApresentacao": "2026-02-11",
        "descricaoTipo": "Projeto de Lei",
        "descricaoSituacao": "Em análise nas comissões",
        "regime": "Prioridade",
        "orgaoAtual": "Comissão de Defesa dos Direitos das Pessoas com Deficiência",
        "despacho": "Distribuída para análise conclusiva.",
        "temas": [
          "Direitos Humanos",
          "Tecnologia"
        ],
        "autorIds": [
          102,
          108
        ],
        "explicacao": "Busca tornar serviços públicos digitais mais fáceis de usar por pessoas com diferentes necessidades de acesso.",
        "tramitacoes": [
          {
            "data": "2026-02-11",
            "descricao": "Apresentação da proposição."
          },
          {
            "data": "2026-02-21",
            "descricao": "Recebimento pela comissão temática."
          },
          {
            "data": "2026-04-08",
            "descricao": "Abertura de prazo para emendas."
          }
        ]
      },
      {
        "id": 2003,
        "siglaTipo": "PEC",
        "numero": 18,
        "ano": 2026,
        "ementa": "Acrescenta princípio de transparência algorítmica ao funcionamento da administração pública.",
        "ementaDetalhada": "Inclui transparência sobre decisões automatizadas que produzam efeitos para os cidadãos.",
        "dataApresentacao": "2026-04-02",
        "descricaoTipo": "Proposta de Emenda à Constituição",
        "descricaoSituacao": "Aguardando admissibilidade",
        "regime": "Especial",
        "orgaoAtual": "Comissão de Constituição e Justiça e de Cidadania",
        "despacho": "À comissão competente.",
        "temas": [
          "Direito Constitucional",
          "Tecnologia"
        ],
        "autorIds": [
          103,
          109
        ],
        "explicacao": "Pretende reconhecer o direito de saber quando uma decisão pública relevante foi apoiada por sistemas automatizados.",
        "tramitacoes": [
          {
            "data": "2026-04-02",
            "descricao": "Apresentação da proposta."
          },
          {
            "data": "2026-04-09",
            "descricao": "Conferência das assinaturas necessárias."
          },
          {
            "data": "2026-04-22",
            "descricao": "Encaminhamento para análise de admissibilidade."
          }
        ]
      },
      {
        "id": 2004,
        "siglaTipo": "PL",
        "numero": 2775,
        "ano": 2025,
        "ementa": "Cria programa nacional de formação cidadã sobre o processo legislativo.",
        "ementaDetalhada": "Prevê materiais educativos abertos e ações de formação sobre elaboração de leis e participação social.",
        "dataApresentacao": "2025-06-09",
        "descricaoTipo": "Projeto de Lei",
        "descricaoSituacao": "Pronta para pauta",
        "regime": "Ordinário",
        "orgaoAtual": "Comissão de Educação",
        "despacho": "Parecer aprovado na comissão temática.",
        "temas": [
          "Educação",
          "Participação Social"
        ],
        "autorIds": [
          104,
          107
        ],
        "explicacao": "Cria ações educativas para explicar como as leis são produzidas e como a sociedade pode participar.",
        "tramitacoes": [
          {
            "data": "2025-06-09",
            "descricao": "Apresentação do projeto."
          },
          {
            "data": "2025-09-16",
            "descricao": "Realização de audiência pública."
          },
          {
            "data": "2026-03-12",
            "descricao": "Aprovação do parecer na comissão."
          }
        ]
      },
      {
        "id": 2005,
        "siglaTipo": "PLP",
        "numero": 74,
        "ano": 2026,
        "ementa": "Regulamenta padrões de interoperabilidade entre sistemas de informação dos entes federativos.",
        "ementaDetalhada": "Define padrões técnicos comuns para o intercâmbio seguro de dados públicos.",
        "dataApresentacao": "2026-05-20",
        "descricaoTipo": "Projeto de Lei Complementar",
        "descricaoSituacao": "Aguardando despacho",
        "regime": "Prioridade",
        "orgaoAtual": "Mesa Diretora",
        "despacho": "Aguardando distribuição.",
        "temas": [
          "Tecnologia",
          "Federação"
        ],
        "autorIds": [
          106,
          109
        ],
        "explicacao": "Busca criar padrões para que sistemas públicos de diferentes governos consigam trocar dados com segurança.",
        "tramitacoes": [
          {
            "data": "2026-05-20",
            "descricao": "Apresentação da proposição."
          }
        ]
      },
      {
        "id": 2006,
        "siglaTipo": "PL",
        "numero": 3310,
        "ano": 2025,
        "ementa": "Dispõe sobre a publicação de relatórios simplificados de execução de políticas públicas.",
        "ementaDetalhada": "Determina a divulgação de objetivos, indicadores e resultados em linguagem compreensível.",
        "dataApresentacao": "2025-08-27",
        "descricaoTipo": "Projeto de Lei",
        "descricaoSituacao": "Aprovada na comissão",
        "regime": "Ordinário",
        "orgaoAtual": "Comissão de Fiscalização Financeira e Controle",
        "despacho": "Encaminhada à comissão seguinte.",
        "temas": [
          "Fiscalização",
          "Transparência"
        ],
        "autorIds": [
          101,
          108
        ],
        "explicacao": "Exige que resultados de políticas públicas também sejam apresentados em relatórios mais simples para a população.",
        "tramitacoes": [
          {
            "data": "2025-08-27",
            "descricao": "Apresentação do projeto."
          },
          {
            "data": "2026-02-03",
            "descricao": "Parecer apresentado na comissão."
          },
          {
            "data": "2026-03-19",
            "descricao": "Parecer aprovado."
          }
        ]
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": "/proposicoes"
      }
    ]
  },
  "votacoes": {
    "dados": [
      {
        "id": "VOT-301",
        "data": "2026-06-18",
        "dataHoraRegistro": "2026-06-18T18:42:00",
        "siglaOrgao": "PLEN",
        "descricao": "Votação do substitutivo ao PL 2775/2025, sobre formação cidadã.",
        "aprovacao": 1,
        "resultado": "Aprovado",
        "placar": {
          "sim": 318,
          "nao": 92,
          "abstencao": 4,
          "outros": 1
        },
        "proposicaoId": 2004,
        "proposicaoObjeto": "PL 2775/2025",
        "votos": [
          {
            "deputadoId": 101,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 102,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 103,
            "tipoVoto": "Não"
          },
          {
            "deputadoId": 104,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 105,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 106,
            "tipoVoto": "Abstenção"
          },
          {
            "deputadoId": 108,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 109,
            "tipoVoto": "Não"
          }
        ]
      },
      {
        "id": "VOT-302",
        "data": "2026-05-07",
        "dataHoraRegistro": "2026-05-07T16:15:00",
        "siglaOrgao": "CASP",
        "descricao": "Votação do parecer ao PL 1842/2026, sobre transparência de dados públicos.",
        "aprovacao": 1,
        "resultado": "Parecer aprovado",
        "placar": {
          "sim": 22,
          "nao": 5,
          "abstencao": 1,
          "outros": 0
        },
        "proposicaoId": 2001,
        "proposicaoObjeto": "PL 1842/2026",
        "votos": [
          {
            "deputadoId": 101,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 102,
            "tipoVoto": "Não"
          },
          {
            "deputadoId": 103,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 105,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 108,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 109,
            "tipoVoto": "Não"
          }
        ]
      },
      {
        "id": "VOT-303",
        "data": "2026-04-23",
        "dataHoraRegistro": "2026-04-23T11:10:00",
        "siglaOrgao": "CPD",
        "descricao": "Votação do parecer ao PL 963/2026, sobre acessibilidade digital.",
        "aprovacao": 1,
        "resultado": "Aprovado",
        "placar": {
          "sim": 17,
          "nao": 0,
          "abstencao": 0,
          "outros": 0
        },
        "proposicaoId": 2002,
        "proposicaoObjeto": "PL 963/2026",
        "votos": [
          {
            "deputadoId": 102,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 103,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 105,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 108,
            "tipoVoto": "Sim"
          },
          {
            "deputadoId": 109,
            "tipoVoto": "Sim"
          }
        ]
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": "/votacoes"
      }
    ]
  },
  "eventos": {
    "dados": [
      {
        "id": 4001,
        "dataHoraInicio": "2026-06-24T10:00:00",
        "dataHoraFim": "2026-06-24T12:30:00",
        "situacao": "Realizada",
        "descricaoTipo": "Audiência Pública",
        "descricao": "Linguagem simples e participação cidadã",
        "localCamara": "Anexo II, Plenário 8",
        "orgaos": [
          "CASP"
        ],
        "deputadoIds": [
          101,
          105,
          108
        ]
      },
      {
        "id": 4002,
        "dataHoraInicio": "2026-06-18T14:00:00",
        "dataHoraFim": "2026-06-18T20:10:00",
        "situacao": "Realizada",
        "descricaoTipo": "Sessão Deliberativa",
        "descricao": "Ordem do Dia do Plenário",
        "localCamara": "Plenário Ulysses Guimarães",
        "orgaos": [
          "PLEN"
        ],
        "deputadoIds": [
          101,
          102,
          103,
          104,
          105,
          106,
          108,
          109
        ]
      },
      {
        "id": 4003,
        "dataHoraInicio": "2026-05-29T09:30:00",
        "dataHoraFim": "2026-05-29T11:40:00",
        "situacao": "Realizada",
        "descricaoTipo": "Reunião Deliberativa",
        "descricao": "Análise de proposições de governo digital",
        "localCamara": "Anexo II, Plenário 5",
        "orgaos": [
          "CCTI"
        ],
        "deputadoIds": [
          102,
          103,
          106,
          109
        ]
      },
      {
        "id": 4004,
        "dataHoraInicio": "2026-05-07T14:00:00",
        "dataHoraFim": "2026-05-07T17:05:00",
        "situacao": "Realizada",
        "descricaoTipo": "Reunião Deliberativa",
        "descricao": "Transparência e modernização administrativa",
        "localCamara": "Anexo II, Plenário 7",
        "orgaos": [
          "CASP"
        ],
        "deputadoIds": [
          101,
          102,
          105,
          108
        ]
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": "/eventos"
      }
    ]
  },
  "orgaos": {
    "dados": [
      {
        "id": 501,
        "sigla": "CASP",
        "nome": "Comissão de Administração e Serviço Público",
        "membros": [
          {
            "deputadoId": 101,
            "titulo": "Titular"
          },
          {
            "deputadoId": 105,
            "titulo": "Suplente"
          },
          {
            "deputadoId": 108,
            "titulo": "Titular"
          }
        ]
      },
      {
        "id": 502,
        "sigla": "CCTI",
        "nome": "Comissão de Ciência, Tecnologia e Inovação",
        "membros": [
          {
            "deputadoId": 102,
            "titulo": "Titular"
          },
          {
            "deputadoId": 103,
            "titulo": "Suplente"
          },
          {
            "deputadoId": 106,
            "titulo": "Titular"
          },
          {
            "deputadoId": 109,
            "titulo": "Titular"
          }
        ]
      },
      {
        "id": 503,
        "sigla": "CFFC",
        "nome": "Comissão de Fiscalização Financeira e Controle",
        "membros": [
          {
            "deputadoId": 101,
            "titulo": "Suplente"
          },
          {
            "deputadoId": 104,
            "titulo": "Titular"
          }
        ]
      },
      {
        "id": 504,
        "sigla": "CE",
        "nome": "Comissão de Educação",
        "membros": [
          {
            "deputadoId": 102,
            "titulo": "Suplente"
          },
          {
            "deputadoId": 104,
            "titulo": "Titular"
          },
          {
            "deputadoId": 105,
            "titulo": "Titular"
          },
          {
            "deputadoId": 107,
            "titulo": "Titular"
          }
        ]
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": "/orgaos"
      }
    ]
  },
  "glossario": [
    {
      "termo": "Proposição",
      "categoria": "Processo legislativo",
      "definicao": "Nome geral dado às matérias submetidas à análise da Câmara, como projetos de lei, PECs, requerimentos e emendas."
    },
    {
      "termo": "Projeto de Lei (PL)",
      "categoria": "Tipos de proposição",
      "definicao": "Proposta destinada a criar ou alterar uma lei ordinária."
    },
    {
      "termo": "PEC",
      "categoria": "Tipos de proposição",
      "definicao": "Proposta de Emenda à Constituição. Segue um processo de aprovação mais rigoroso."
    },
    {
      "termo": "Emenda",
      "categoria": "Processo legislativo",
      "definicao": "Sugestão de alteração feita ao texto de uma proposição durante sua análise."
    },
    {
      "termo": "Tramitação",
      "categoria": "Processo legislativo",
      "definicao": "Conjunto de etapas e decisões pelas quais uma proposição passa dentro da Câmara."
    },
    {
      "termo": "Votação nominal",
      "categoria": "Votações",
      "definicao": "Votação em que o posicionamento de cada parlamentar é registrado individualmente."
    },
    {
      "termo": "Legislatura",
      "categoria": "Organização da Câmara",
      "definicao": "Período de quatro anos de funcionamento parlamentar iniciado após as eleições gerais."
    },
    {
      "termo": "Órgão legislativo",
      "categoria": "Organização da Câmara",
      "definicao": "Estrutura responsável por atividades específicas, como o Plenário e as comissões."
    },
    {
      "termo": "Comissão",
      "categoria": "Organização da Câmara",
      "definicao": "Grupo de parlamentares que analisa temas e proposições."
    },
    {
      "termo": "Presença",
      "categoria": "Participação",
      "definicao": "Registro de comparecimento a uma sessão, reunião ou outro evento legislativo."
    },
    {
      "termo": "Participação parlamentar",
      "categoria": "Participação",
      "definicao": "Atuação registrada em eventos, órgãos, proposições ou votações. Um registro isolado não representa desempenho."
    }
  ]
};

export default dadosMockados;