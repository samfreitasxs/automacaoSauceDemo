import login from '../pages/login'
import inventory from '../pages/inventory'
import header from '../pages/header'


describe('Carrinho', () => {

  beforeEach(() => {
    // Arrange
    cy.visit('https://www.saucedemo.com/v1/')
    login.visitarPagina()
    login.preencherCredenciaisValidas()
  })

  it('Adicionar produto ao carrinho com sucesso', () => {
    // Act
    const qtdItensAdicionados = 1
    inventory.adicionarProduto('Sauce Labs Backpack')
    // Assert
    header.validarQuepossuiItens(qtdItensAdicionados)

    header.navegarParaCarrinho()

    cy.contains('Sauce Labs Backpack').should('be.visible')

    cy.screenshot('produto adicionado')
  })

  it('Remover produto do carrinho com sucesso', () => {
    // Arrange
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')

    // Act
    cy.get('.btn_secondary').click()

    // Assert
    cy.get('.shopping_cart_badge')
      .should('not.exist')

    cy.screenshot('produto removido')
  })
})
