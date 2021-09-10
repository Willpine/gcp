// //Importando classe com functions para CRUD
import * as database from './store/firestore/user/UserRepository'
// import { UserProps } from './store/firestore/user/User'

// // Para testar, mudo o caminho conforme o objeto que desejo
// const path = 'user'

// const will = {username: 'willian', password: '123'}

// database.loginUser(will.username, will.password)

import express from 'express'
import { UserProps } from './store/firestore/user/User'

const app = express()

app.use(express.json()); 

app.get('/', (req, res) => {
  return res.send('Hello World in TS')
})

// TODO find out how to only allow a user. At the moment, any object can enter, even null ones.
app.post('/user/create', async (req, res) => {
  const user: UserProps = req.body
  if ("name" in (user as any))
  console.log();
  
  // try {await database.create(user) }
  // catch (error) { return res.status(500).send('Erro ao criar usuário: ' + error)}

  return res.status(200).send('User Created')
})

app.post('/user/login', async (req, res) => {
  try {
    const user: {username: string, password: string} = req.body
    await database.loginUser(user.username, user.password) }
  catch (error) { return res.status(500).send('Erro ao logar usuário: ' + error)}
  return res.status(200).send('Usuário Logado!')
})

app.listen(3333)