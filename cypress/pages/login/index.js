import { elements as el } from "./elements";
//exportando arquivos elements
//Encurtei e criei um apelido para esse objeto "el"

class Login {
  visitarPagina() {
    cy.visit("https://www.saucedemo.com/v1/");
  }
  //Metodo da class Login

  preencherCredenciaisValidas() {
    cy.get(el.username).type("standard_user");
    //para nao ficar usando o tempo todo  elements.
    //Encurtei e criei um apelido para esse objeto "el"

    cy.get(el.password).type("secret_sauce");
    cy.get(el.loginButton).click();
  }

  preencherCredenciaisInvalidas() {
    cy.get(el.username).type("user.invalid");
    cy.get(el.password).type("fdsfdsfsd");
    cy.get(el.loginButton).click();
  }

  validarErroCredenciaisInvalidas() {
    cy.get(el.errorMessage)
      .should("contain.text", "Epic sadface: Username and password do not match any user in this service");

    cy.url().should("eq", "https://www.saucedemo.com/v1/");
    cy.screenshot("erro credenciais inválidas");
  }
}

// Definicao da classe

export default new Login();
//Dessa maneira exporta a class
//Poderia deixar na mesma linha da class, mas por questao de didatica optei para o final