import { elements as el } from "./elements"

class Header {
    validarQuepossuiItens(quantidade) {
        cy.get(el.cartBadge)
        .should('be.visible')
        .and('have.text', quantidade.toString())
    }

    navegarParaCarrinho () {
        cy.get(el.cartContainer).click()
    }
}

export default new Header