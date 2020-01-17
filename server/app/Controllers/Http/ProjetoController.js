'use strict'

const Projeto = use('App/Models/Projeto')
const Tarefa = use('App/Models/Tarefa')
const AuthService = use('App/Services/AuthService')

class ProjetoController {
    async index( {auth} ){
        const usuario = await auth.getUser()
        return await usuario.projetos().fetch()
    }

    async criar( {auth, request }){
        const usuario = await auth.getUser()
        const { titulo } = request.all()
        const projeto = new Projeto()
        projeto.fill ({
            titulo,
        })
        await usuario.projetos().save(projeto)
        return projeto
    }

    async deletar({ auth, request, params }){
        const usuario = await auth.getUser()
        const { id } = params
        const projeto = await Projeto.find(id)
        AuthService.verificaPermissao(projeto,usuario)
        await projeto.delete()
        return projeto

    }

    async atualizar({ auth, request, params }){
        const usuario = await auth.getUser()
        const { id } = params
        const projeto = await Projeto.find(id)
        AuthService.verificaPermissao(projeto,usuario)
        projeto.merge(request.only('titulo'))
        await projeto.save()
        return projeto

    }
}

module.exports = ProjetoController
