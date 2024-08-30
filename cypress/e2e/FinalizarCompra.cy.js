import login from '../pages/login'
import inventory from '../pages/inventory'
import header from '../pages/header'
import cart from '../pages/cart'
import YourCart from '../pages/YourCart'


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

    cart.validarprodutonoCarrinho('Sauce Labs Backpack')
  })

  it('Finalizar Compra', () => {
    // Arrange
    inventory.adicionarProduto()
    // Act
    YourCart.validarProduto()

    YourCart.preencherCampos()
    // Assert
    YourCart.finalizarCompra()
    
  })
})
