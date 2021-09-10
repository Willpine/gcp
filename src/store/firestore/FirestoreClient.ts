import { Firestore } from '@google-cloud/firestore';
import * as path from 'path';

let database: Firestore | null = null
// We setup and export an instance of this class
// so we know only one instance is necessary
export default class FirestoreClient {
    public database: Firestore;
    // We setup auth inside the constructor, so everytime we call firestore, it is authenticated.
    // You have to get the .json from the service account on gcp, and then set the keyFilename
    constructor() {
        if(!database)
        {
        database = new Firestore({
            projectId: 'sapient-rune-324212',
            keyFilename: path.join(__dirname, './db.json')
        })
        }
        this.database = database
    }
}