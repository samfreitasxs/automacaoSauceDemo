import Login from '../pages/login'
import Inventory from '../pages/invetory'

describe('Login', () => {

    beforeEach(() => {
      // Arrange
      Login.visitarPagina()
    })
  
    it('Realizar login com sucesso', () => {
      // Act
      Login.preencherCredenciaisValidas()
  
      // Assert
      Inventory.validarAcessoaPagina()
    })
  
    it('Realizar login informando credenciais inválidas', () => {
      // Act
      Login.preencherCredenciaisInvalidas()
  
      // Assert
      Login.validarErroCredenciaisInvalidas()
    })
  })
  