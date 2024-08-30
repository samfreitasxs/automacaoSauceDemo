import { elements as el } from "./elements";
class Inventory {

validarAcessoaPagina() {
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

    cy.screenshot('Acesso a pagina de inventario')
    }
    adicionarProduto() {
        cy.get(el.addToCart).click();
    }

    removerProduto() {
        cy.get('.btn_secondary').click()
    }
}

export default new Inventory()