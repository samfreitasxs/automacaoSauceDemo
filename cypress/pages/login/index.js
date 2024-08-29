import { elements as el } from "./elements"

class Login {

visitarPagina () {
    cy.visit('https://www.saucedemo.com/v1/')
} 

preencherCredenciaisValidas(){
    cy.get(el.username).type('standard_user')
  
    cy.get(el.password).type('secret_sauce')

    cy.get(el.loginButton).click()
    }

    preencherCredenciaisInvalidas(){
        cy.get(el.username).type('user.invalid')
  
        cy.get(el.password).type('senha')
    
        cy.get(loginButton).click()
    }

    validarErroCredenciaisInvalidas () {
        cy.get(el.errorMessage)
        .should(
          'contain.text',
          'Username and password do not match any user in this service'
        )
  
      cy.url().should('eq', 'https://www.saucedemo.com/v1/')
  
      cy.screenshot('erro credenciais inválidas')
    }
}

export default new Login()