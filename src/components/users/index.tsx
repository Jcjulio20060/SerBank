const users = [
  {
    nome: "João",
    sobrenome: "Silva",
    cpf: "123.456.789-00",
    dataNascimento: "1990-05-15",
    email: "joao.silva@example.com",
    senha: "senha123",
    transacoesRecentes: [
      { descricao: "Compra no Mercado", valor: -50.0, data: "2025-04-20" },
      { descricao: "Transferência Recebida", valor: 200.0, data: "2025-04-18" },
      { descricao: "Pagamento de Conta", valor: -100.0, data: "2025-04-15" },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Oliveira",
    cpf: "987.654.321-00",
    dataNascimento: "1995-10-22",
    email: "maria.oliveira@example.com",
    senha: "senha456",
    transacoesRecentes: [
      { descricao: "Compra Online", valor: -120.0, data: "2025-04-21" },
      { descricao: "Depósito", valor: 500.0, data: "2025-04-19" },
      { descricao: "Saque", valor: -200.0, data: "2025-04-17" },
    ],
  },
  {
    nome: "Carlos",
    sobrenome: "Santos",
    cpf: "456.789.123-00",
    dataNascimento: "1988-03-10",
    email: "carlos.santos@example.com",
    senha: "senha789",
    transacoesRecentes: [
      { descricao: "Assinatura de Streaming", valor: -30.0, data: "2025-04-20" },
      { descricao: "Transferência Enviada", valor: -150.0, data: "2025-04-18" },
      { descricao: "Bônus Recebido", valor: 300.0, data: "2025-04-16" },
    ],
  },
];

export default users;