'use strict'

const Projeto = use('App/Models/Projeto')
const Tarefa = use('App/Models/Tarefa')
const AuthService = use('App/Services/AuthService')

class TarefaController {

    async index( { auth, request, params }){
        const usuario = await auth.getUser()
        const { id } = params
        const projeto = await Projeto.find(id)
        AuthService.verificaPermissao(projeto,usuario)
        return await projeto.tarefas().fetch()

    }

    async criar( {auth, request, params }){
        const usuario = await auth.getUser()
        const { descricao } = request.all()
        const { id } = params
        const projeto = await Projeto.find(id)
        AuthService.verificaPermissao(projeto,usuario)
        const tarefa = new Tarefa()
        tarefa.fill({
            descricao,
        })
        await projeto.tarefas().save(tarefa)
        return tarefa
    }

    async deletar({ auth, request, params }){
        const usuario = await auth.getUser()
        const { id } = params
        const tarefa = await Tarefa.find(id)
        const projeto = await tarefa.projeto().fetch()
        AuthService.verificaPermissao(projeto,usuario)
        await tarefa.delete()
        return tarefa

    }

    async atualizar({ auth, request, params }){
        const usuario = await auth.getUser()
        const { id } = params
        const tarefa = await Tarefa.find(id)
        const projeto = await tarefa.projeto().fetch()
       
        AuthService.verificaPermissao(projeto,usuario)
        tarefa.merge(request.only([
            'descricao',
            'completa'
        ]))
        return tarefa 

    }
}

module.exports = TarefaController
