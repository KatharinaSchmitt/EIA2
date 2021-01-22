"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "test";
let db;
let opferData;
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://Katharina:schmitt@eia2db-aru8k.mongodb.net/Hogwarts";
    databaseName = "Hogwarts";
}
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        opferData = db.collection("voodoo");
    }
}
function insert(_doc) {
    opferData.insertOne(_doc, handleInsert);
}
exports.insert = insert;
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function findAll(_callback) {
    var cursor = opferData.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, opferArray) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(opferArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=Database.js.map