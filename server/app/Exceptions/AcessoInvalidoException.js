'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AcessoInvalidoException extends LogicalException {
  /**
   * Handle this exception by itself
   */
   handle (erro, { response }) {
     return response.status(403).json({
       erro: 'Acesso inválido a recurso'
     })
   }
}

module.exports = AcessoInvalidoException
