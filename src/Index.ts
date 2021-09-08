// //Importando classe com functions para CRUD
import * as database from './store/firestore/user/UserRepository'
// import { UserProps } from './store/firestore/user/User'

// // Para testar, mudo o caminho conforme o objeto que desejo
// const path = 'user'

// const will = {username: 'willian', password: '123'}

// database.loginUser(will.username, will.password)

import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send('Hello World in TS')
})

app.listen(3333)