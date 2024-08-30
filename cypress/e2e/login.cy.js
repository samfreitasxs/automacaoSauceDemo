import Login from '../pages/login'
//importanto o arquivo index.js e a class login
import inventory from '../pages/inventory'



describe('Login', () => {

    beforeEach(() => {
      // Arrange
      Login.visitarPagina()
      //O sistema reconhece que dentro da class Login tem um metodo visitar pagina
    })
  
    it('Realizar login com sucesso', () => {
      // Act
      Login.preencherCredenciaisValidas()
      // 
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
  