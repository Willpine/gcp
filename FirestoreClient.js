const {Firestore} = require('@google-cloud/firestore');
const path = require('path');

// We setup and export an instance of this class
// so we know only one instance is necessary
class FirestoreClient {
    // We setup auth inside the constructor, so everytime we call firestore, it is authenticated.
    // You have to get the .json from the service account on gcp, and then set the keyFilename
    constructor() {
        this.firestore = new Firestore({
            projectId: 'sapient-rune-324212',
            keyFilename: path.join(__dirname, './keys/sapient-rune-324212-35c6737fb034.json')
        })
    }

    async saveInCollection(collection, data) {
        // Gets the document
        const docRef = this.firestore.collection(collection,data).doc(data.docName);
        // Sets the document data
        await docRef.set(data);
    }

    async saveInSubCollection(rootCol, rootDocName, subCol, subColData){
        const docRef = this.firestore.collection(rootCol).doc(rootDocName).collection(subCol).doc(subColData.docName);
        await docRef.set(subColData);
    }

    // A more convenient way to save
    async saveByPath(path, data){
        const docRef = this.firestore.doc(path);
        await docRef.set(data);
    }

    async update(path, data){
        const docRef = this.firestore.doc(path);
        await docRef.update(data);
    }

    async read(path, data){
        const docRef = this.firestore.doc(path);
        const docRead = await docRef.get();
        console.log('docRef ' + docRef);
        console.log('docRead ' + docRead.data());
    }

    // Delete the document or subcollection, but not a Root collection
    async delete(path){
        const docRef = this.firestore.doc(path);
        await docRef.delete();
        console.log('Deleted the document ');
    }
}

module.exports = new FirestoreClient();