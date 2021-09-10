import FirestoreClient from '../FirestoreClient';
import { UserProps } from './User';

const database = new FirestoreClient().database
const pathToUser = '/user'

// Tela de registrar usuário
 export const create = async (data: UserProps) => {
   console.log(data);
   
  const docRef = database.collection('user').add(data);
}

export const listAll = async () => {
  let docs = await (await (await database.collection('user').get()).docs)
  console.log(docs.map(doc => doc.data()));
}

export const loginUser = async (username: string, password: string) => {
  const users = await database.collection(pathToUser).get()
  let user, userPassword
  const isMatch = users.docs.some(doc => {
    user = doc.data()
    userPassword = user.password
    return user.username === username
  })
  if (isMatch) {
    if (userPassword === password) {
      return true
    } else { throw new Error('Usuário não encontrado!') }
  } else { throw new Error('Senha Incorreta!') }
}
