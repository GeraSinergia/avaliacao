const AcessoInvalidoException = use ('App/Exceptions/AcessoInvalidoException')
const RecursoNaoExisteException = use ('App/Exceptions/RecursoNaoExisteException')
class AuthService{
    verificaPermissao( idProjeto , usuario ){
        if(!idProjeto){
            throw new RecursoNaoExisteException()
        }

        if( idProjeto .user_id !== usuario.id){ 
           console.log('Usuario Invalido')
           throw new AcessoInvalidoException() //cria uma excessão durante a validação
       }
    }
}


module.exports = new AuthService()