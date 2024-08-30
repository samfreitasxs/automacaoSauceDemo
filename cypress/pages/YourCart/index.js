class Header {
   
    validarProduto() {
        cy.get('.fa-layers-counter').click()
        cy.get('.btn_action').click()
    }

    preencherCampos() {
        cy.get('[data-test="firstName"]').type('teste')
        cy.get('[data-test="lastName"]').type('teste')
        cy.get('[data-test="postalCode"]').type('87030-123')
    }

    finalizarCompra() {
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click()
        cy.contains('THANK YOU FOR YOUR ORDER' )
    }
}

export default new Header