'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
//-----------------------------------Rotas do Autenticador---------------------------------//
  Route.post('auth/registro', 'UsuarioController.registro')
  Route.post('auth/login', 'UsuarioController.login')
  Route.get('auth/informacoes', 'UsuarioController.informacoes').middleware('auth')
//-----------------------------------Rotas do Projeto------------------------------------//
  Route.get('projetos', 'ProjetoController.index').middleware('auth')
  Route.post('projetos', 'ProjetoController.criar').middleware('auth')
  ///Route.put('projetos/:id', 'ProjetoController.atualizar').middleware('auth')
  Route.patch('projetos/:id', 'ProjetoController.atualizar').middleware('auth')
  Route.delete('projetos/:id', 'ProjetoController.deletar').middleware('auth')
//-----------------------------------Rotas das Tarefas-----------------------------------//
  Route.get('projetos/:id/tarefas', 'TarefaController.index').middleware('auth')
  Route.post('projetos/:id/tarefas', 'TarefaController.criar').middleware('auth')
  Route.patch('tarefas/:id', 'TarefaController.atualizar').middleware('auth')
  Route.delete('tarefas/:id', 'TarefaController.deletar').middleware('auth')

})
  .prefix('api')


