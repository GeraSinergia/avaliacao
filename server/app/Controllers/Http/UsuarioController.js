'use strict'

const Usuario = use('App/Models/User')

class UsuarioController {

    async login({ request, auth }){
        const{ email, password } = request.all()
        const token = await auth.attempt(email, password)
        return token
    }

    async registro({ request }) {
        const { email, password } = request.all()
        const usuario = await Usuario.create({
            email,
            password,
            username: email,
        })
        console.log(email,password)
        //return this.login(...arguments)
        return usuario
    }

    async informacoes({ auth }){
        const usuario = await auth.getUser()
        return usuario.email
    }

}

module.exports = UsuarioController
