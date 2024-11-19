import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age

        }
    })


    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)


/* -ROTAS:
    1 Tipo de rota / Método HTTP
    2 Endereço
*/

/* -Criar API de usuarios:
    -  Criar um usuário
    -  Listar usuários
    -  Editar um usuário
    -  Deletar um usuário
*/

/*Dados da conta MongoDB:
 - Usuário: alexcosta8007
 - Password: Gremio.313 */