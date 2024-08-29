class Inventory {

validarAcessoaPagina() {
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
  
    cy.screenshot('Acesso a pagina de inventario')

    }
}

export default new Inventory