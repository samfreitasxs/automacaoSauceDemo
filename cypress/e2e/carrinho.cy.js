import login from "../pages/login"

describe('Carrinho', () => {

  beforeEach(() => {
    // Arrange
    cy.visit('https://www.saucedemo.com/v1/')
    login.visitarPagina()
    login.preencherCredenciaisValidas()
  })

  it('Adicionar produto ao carrinho com sucesso', () => {
    // Act
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()

    // Assert
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1')

    cy.get('#shopping_cart_container').click()

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
