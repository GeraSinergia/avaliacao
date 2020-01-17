'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class RecursoNaoExisteException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (erro, { response }) {
    return response.status(404).json({
      erro: 'O recurso não existe'
    })
  }
}

module.exports = RecursoNaoExisteException
