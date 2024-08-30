# Desafio Técnico Vox Tecnologia

### Introdução
Este projeto foi desenvolvido como parte do Desafio Técnico da Vox Tecnologia. O objetivo é automatizar testes no site Sauce Demo, uma aplicação web utilizada para demonstração e testes de automação. Utilizamos o framework Cypress para criar e executar os testes automatizados, aplicando boas práticas de desenvolvimento e controle de versão com Git.

# Configuração do Ambiente
### Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar o Node.js.

### Instalação
1. Clone o repositório:
```
git clone https://github.com/usuario/nome-do-repositorio.git
cd nome-do-repositorio
```
2. Instale as dependências:
```
npm install
```
3. Instale o Cypress globalmente:

```
npm install -g cypress@12.17.4
```
4. Abra o Cypress:
```
npx cypress open
```
# Estrutura do Projeto
O projeto segue o padrão Page Object Model (POM) para organizar os testes de forma eficiente e reutilizável. A estrutura das pastas é a seguinte:
```
.github/
  └── workflows/
      └── cypress.yml        # Arquivo de configuração do GitHub Actions para executar testes Cypress
cypress/
  ├── e2e/                   # Testes end-to-end (E2E)
  │   ├── Login.cy.js        # Testes de login
  │   ├── Carrinho.cy.js     # Testes de adição e remoção do carrinho
  │   └── FinalizarCompra.cy.js # Testes de finalização de compra
  ├── pages/                 # Page Object Model (POM)
  │   ├── cart/              # POM para interações com o carrinho
  │   │   ├── elements.js    # Seletores de elementos da página de carrinho
  │   │   └── index.js       # Métodos de interação com a página de carrinho
  │   ├── header/            # POM para interações com o cabeçalho
  │   │   ├── elements.js    # Seletores de elementos do cabeçalho
  │   │   └── index.js       # Métodos de interação com o cabeçalho
  │   ├── inventory/         # POM para interações com a página de inventário/produtos
  │   │   ├── elements.js    # Seletores de elementos da página de inventário
  │   │   └── index.js       # Métodos de interação com a página de inventário
  │   ├── login/             # POM para interações com a página de login
  │   │   ├── elements.js    # Seletores de elementos da página de login
  │   │   └── index.js       # Métodos de interação com a página de login
  │   └── YourCart/          # POM para interações com a página "Your Cart"
  │       ├── elements.js    # Seletores de elementos da página "Your Cart"
  │       └── index.js       # Métodos de interação com a página "Your Cart"
  ├── fixtures/              # Arquivos de dados fixos para uso nos testes
  │   └── example.json       # Exemplo de arquivo de dados fixo
  └── support/               # Arquivos de suporte e configurações adicionais
      └── commands.js        # Comandos personalizados Cypress

```
# Executando os Testes
Para rodar os testes, siga os passos abaixo:

1. Abrir a interface do Cypress:

Execute o seguinte comando para abrir a interface do Cypress e selecionar os testes que deseja executar:

```
npx cypress open
```
2. Rodar todos os testes:

Para rodar todos os testes automaticamente:
```
npx cypress run
```
# Casos de Teste
Os principais cenários de teste implementados são:

1. Login:

 * Testa o login com credenciais válidas e invalidas.
 * Verifica mensagens de erro ao tentar logar com credenciais inválidas.

2. Carrinho:

* Confirma que a lista de produtos é exibida após o login.
* Adição ao Carrinho:

* Testa a adição de um ou mais produtos ao carrinho.
3. Remoção do Carrinho:

* Testa a remoção de produtos do carrinho.
4. Finalização de Compra:

* Testa o fluxo completo de finalização de compra, desde a inserção de dados do cliente até a confirmação do pedido.

# Boas Práticas
#### O projeto adota as seguintes boas práticas:

* Page Object Model (POM): Facilita a manutenção e reutilização de código.
* Controle de Versão: O projeto é versionado com Git, utilizando commits significativos e mensagens claras.
# Documentação do framework
1. Documentação do Cypress:
Consulte a documentação oficial do Cypress para mais detalhes sobre o framework.
2. Comandos personalizados:

* Este projeto não usa comandos Cypress personalizados, mas eles podem ser adicionados em cypress/support/commands.js se necessário.


