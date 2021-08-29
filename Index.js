const FirestoreClient = require('./FirestoreClient');

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

const path = 'turmas/CC8P68/Alunos/Marcos'

const save = async () => {
    await FirestoreClient.saveInCollection('turmas', cc8p68);
}

const saveInCollection = async () => {
    await FirestoreClient.saveInSubCollection('turmas',cc8p68.docName,'Alunos',alunoWill);
}

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

readByPath();