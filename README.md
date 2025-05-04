# SerBank

SerBank é um aplicativo bancário moderno projetado para oferecer uma experiência financeira simples, segura e eficiente. Ele foi desenvolvido com foco na Geração Z, proporcionando funcionalidades intuitivas e uma interface amigável.

## Funcionalidades

- **Login Seguro**: Autenticação com CPF e senha.
- **Cadastro de Usuários**: Criação de contas com validações de dados.
- **Saldo Disponível**: Visualização do saldo atualizado.
- **Transações Recentes**: Histórico das últimas transações realizadas.
- **Objetivos Financeiros**: Gerenciamento de metas financeiras.
- **Transferências via Pix**: Envio e recebimento de valores de forma rápida e gratuita.
- **Comprovantes**: Geração de comprovantes para transações realizadas.
- **QR Code**: Leitura e geração de QR Codes para pagamentos.

## Tecnologias Utilizadas

- **Frontend**: React Native
- **Navegação**: React Navigation
- **Armazenamento Local**: AsyncStorage
- **Ícones**: FontAwesome e Material Icons
- **Estilização**: StyleSheet do React Native
- **Outras Bibliotecas**:
  - `react-native-progress` para barras de progresso.
  - `react-native-masked-text` para máscaras de entrada.

## Estrutura do Projeto

```plaintext
.
├── assets/                # Imagens e ícones
├── src/
│   ├── app/               # Arquivo principal do aplicativo
│   ├── components/        # Componentes reutilizáveis
│   ├── screens/           # Telas do aplicativo
│   └── styles/            # Estilos globais
├── .expo/                 # Configurações do Expo
├── [package.json](http://_vscodecontentref_/1)           # Dependências e scripts
├── [tsconfig.json](http://_vscodecontentref_/2)          # Configurações do TypeScript
└── [README.md](http://_vscodecontentref_/3)              # Documentação do projeto
```

## Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/pt) e o [Expo](https://expo.dev) instalados.
2. Clone este repositório:
```
git clone https://github.com/Jcjulio20060/SerBank.git
```

3. Instale as dependências:
```
npm install
```

4. Inicie o aplicativo:
```
npm install
```

5. Escaneie o QR Code no terminal com o aplicativo [Expo GO](https://expo.dev/go) ou executar no emulador Android/iOS.

## Contribuição

Contribuição são bem-vindas! Sinta-se à vontade para abrir isseues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License]().
