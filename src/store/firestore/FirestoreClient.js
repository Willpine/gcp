"use strict";
exports.__esModule = true;
var firestore_1 = require("@google-cloud/firestore");
var path = require("path");
var database = null;
// We setup and export an instance of this class
// so we know only one instance is necessary
var FirestoreClient = /** @class */ (function () {
    // We setup auth inside the constructor, so everytime we call firestore, it is authenticated.
    // You have to get the .json from the service account on gcp, and then set the keyFilename
    function FirestoreClient() {
        if (!database) {
            this.database = new firestore_1.Firestore({
                projectId: 'sapient-rune-324212',
                keyFilename: path.join(__dirname, './db.json')
            });
        }
        this.database = database;
    }
    return FirestoreClient;
}());
exports["default"] = FirestoreClient;
