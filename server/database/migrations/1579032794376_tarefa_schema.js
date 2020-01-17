'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TarefaSchema extends Schema {
  up () {
    this.create('tarefas', (table) => {
      table.increments()

      table.integer('projeto_id').unsigned().references('id').inTable('projeto')
      table.string('descricao', 255)
      table.boolean('completa')
      table.timestamps()
    })
  }

  down () {
    this.drop('tarefas')
  }
}

module.exports = TarefaSchema
