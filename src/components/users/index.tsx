const users = [
  {
    nome: "João",
    sobrenome: "Silva",
    cpf: "123.456.789-00",
    dataNascimento: "1990-05-15",
    email: "joao.silva@example.com",
    senha: "senha123",
    saldo: 1500.0, // Saldo atual do usuário
    saldoInvestimento: 500.0, // Saldo de investimento do usuário
    transacoesRecentes: [
      { descricao: "Compra no Mercado", valor: -50.0, data: "2025-04-20" },
      { descricao: "Transferência Recebida", valor: 200.0, data: "2025-04-18" },
      { descricao: "Pagamento de Conta", valor: -100.0, data: "2025-04-15" },
      { descricao: "Compra de Roupas", valor: -150.0, data: "2025-04-14" },
      { descricao: "Depósito", valor: 300.0, data: "2025-04-12" },
      { descricao: "Saque", valor: -200.0, data: "2025-04-10" },
      { descricao: "Pagamento de Academia", valor: -80.0, data: "2025-04-08" },
      { descricao: "Transferência Recebida", valor: 500.0, data: "2025-04-05" },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Oliveira",
    cpf: "987.654.321-00",
    dataNascimento: "1995-10-22",
    email: "maria.oliveira@example.com",
    senha: "senha456",
    saldo: 2500.0, // Saldo atual do usuário
    saldoInvestimento: 1000.0, // Saldo de investimento do usuário
    transacoesRecentes: [
      { descricao: "Compra Online", valor: -120.0, data: "2025-04-21" },
      { descricao: "Depósito", valor: 500.0, data: "2025-04-19" },
      { descricao: "Saque", valor: -200.0, data: "2025-04-17" },
      { descricao: "Pagamento de Conta", valor: -90.0, data: "2025-04-15" },
      { descricao: "Transferência Recebida", valor: 250.0, data: "2025-04-13" },
      { descricao: "Compra de Eletrônicos", valor: -400.0, data: "2025-04-11" },
      { descricao: "Assinatura de Streaming", valor: -30.0, data: "2025-04-09" },
      { descricao: "Transferência Enviada", valor: -150.0, data: "2025-04-07" },
    ],
  },
  {
    nome: "Carlos",
    sobrenome: "Santos",
    cpf: "456.789.123-00",
    dataNascimento: "1988-03-10",
    email: "carlos.santos@example.com",
    senha: "senha789",
    saldo: 3200.0, // Saldo atual do usuário
    saldoInvestimento: 2000.0, // Saldo de investimento do usuário
    transacoesRecentes: [
      { descricao: "Assinatura de Streaming", valor: -30.0, data: "2025-04-20" },
      { descricao: "Transferência Enviada", valor: -150.0, data: "2025-04-18" },
      { descricao: "Bônus Recebido", valor: 300.0, data: "2025-04-16" },
      { descricao: "Compra no Mercado", valor: -70.0, data: "2025-04-14" },
      { descricao: "Depósito", valor: 400.0, data: "2025-04-12" },
      { descricao: "Pagamento de Conta", valor: -120.0, data: "2025-04-10" },
      { descricao: "Transferência Recebida", valor: 200.0, data: "2025-04-08" },
      { descricao: "Compra de Livros", valor: -60.0, data: "2025-04-06" },
    ],
  },
];

export default users;