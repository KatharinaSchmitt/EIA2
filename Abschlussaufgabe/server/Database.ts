import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "test";
let db: Mongo.Db;
let spielerData: Mongo.Collection;

if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://Katharina:schmitt@eia2db-aru8k.mongodb.net/Hogwarts";
    databaseName = "Hogwarts";
}

Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        spielerData = db.collection("highscoreFische ");
    }
}

export function insert(_doc: SpielerDaten): void {
    spielerData.insertOne(_doc, handleInsert);
}

function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

export function findAll(_callback: Function): void {
    var cursor: Mongo.Cursor = spielerData.find();
    cursor.toArray(prepareAnswer);

    function prepareAnswer(_e: Mongo.MongoError, spielerArray: SpielerDaten[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(spielerArray));
    }
}