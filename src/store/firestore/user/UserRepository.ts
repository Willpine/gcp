import FirestoreClient from '../FirestoreClient.ts';

const database = new FirestoreClient().database();

// A more convenient way to save
 export const create = async (path: String, data) => {
  const docRef = database.doc(path);
  await docRef.set(data);
}

export const update = async (path: String, data) => {
  const docRef = database.doc(path);
  await docRef.update(data);
}

export const find = async (path: String, userId: String) => {

}

export const listAll = async () => {
  let docs = await (await (await database.collection('user').get()).docs)
  console.log(docs.map(doc => doc.data()));
}

// Delete the document or subcollection, but not a Root collection
export const remove = async (path: String) => {
  const docRef = database.doc(path);
  await docRef.delete();
  console.log('Deleted the document ');
}

export const loginUser = async (username: String, password: String) => {
  const users = await database.collection('user').get()
  let user;
  const isMatch = users.docs.map(doc => {
      user = doc.data();
      if(user.name !== username)
        throw new Error('Usuário não encontrado!');
      if(user.password !== password)
        throw new Error('Senha incorreta!');
  })
}
