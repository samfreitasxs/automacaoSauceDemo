import Login from '../pages/login'
import inventory from '../pages/inventory'


describe('Login', () => {

    beforeEach(() => {
      // Arrange
      Login.visitarPagina()
    })
  
    it('Realizar login com sucesso', () => {
      
      // Act
      Login.preencherCredenciaisValidas()
  
      // Assert
      inventory.validarAcessoaPagina()
    })

    it('Realizar login informando credenciais inválidas', () => {
      
      // Act
      Login.preencherCredenciaisInvalidas()
  
      // Assert
      Login.validarErroCredenciaisInvalidas()
    })
  })
  