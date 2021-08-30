//Importando classe com functions para CRUD
const FirestoreClient = require('./FirestoreClient');

// Criando objetos para popular o banco
const cc8p68 = {
    docName: 'CC8P68',
    campus: 'Paraíso'
}

const alunoWill = {
    docName: 'AlunoWill',
    location: 'SP',
    status: 'Active'
};

const alunoCleitinho = {
    docName: 'Cleitinho',
    location: 'SP',
    status: 'Active'
}

// Caminho que aponta para o recurso desejado
const path = 'turmas/CC8P68/Alunos/Marcos'

// Para testar, mudo o caminho conforme o objeto que desejo

// Cria um documento cc8p68 na collection turmas
const save = async () => {
    await FirestoreClient.saveInCollection('turmas', cc8p68);
}

// Cria uma subcollection dentro do doc cc8p68 chamada Alunos, e nela salva o doc alunoWill
const saveInCollection = async () => {
    await FirestoreClient.saveInSubCollection('turmas',cc8p68.docName,'Alunos',alunoWill);
}

// Salva o json alunoCleitinho como um documento no caminho especificado
const saveByPath = async () => {
    await FirestoreClient.saveByPath(path, alunoCleitinho);
}

const updateByPath = async () => {
    await FirestoreClient.update(path, alunoCleitinho)
}

const readByPath = async () => {
    await FirestoreClient.read(path);
}

const deleteByPath = async () => {
    await FirestoreClient.delete(path);
}

// As funções anteriores estão apenas declaradas, para rodá-las, chame-as aqui
readByPath();