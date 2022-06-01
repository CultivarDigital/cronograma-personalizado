const statusList = {
  created: { label: 'Aguardando confirmação pagamento', progress: 25 },
  paid: { label: 'Aguardando análise', progress: 50 },
  analyzed: { label: 'Aguardando resposta', progress: 75 },
  answered: { label: 'Acompanhamento finalizado', progress: 100 },
}

export default statusList
