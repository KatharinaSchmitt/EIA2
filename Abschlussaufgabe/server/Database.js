"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "test";
let db;
let spielerData;
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
        spielerData = db.collection("highscoreFische ");
    }
}
function insert(_doc) {
    spielerData.insertOne(_doc, handleInsert);
}
exports.insert = insert;
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function findAll(_callback) {
    var cursor = spielerData.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, spielerArray) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(spielerArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=Database.js.map