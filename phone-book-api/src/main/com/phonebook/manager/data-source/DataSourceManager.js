const mongoose = require('mongoose');
const dbConfig = require("../../configuration/DBConfig");
class DataSourceManager {

    constructor() {
        mongoose.Promise = global.Promise;
    }

    createMongoDBDataSource() {
        mongoose.connect(dbConfig.url, {
            useNewUrlParser: true
        }).then(() => {
            console.log("Connected to the MongoDb database......Listening for data request");    
        }).catch(err => {
            console.log("No Database Connection", err);
            process.exit();
        });
    }

    getMongoDBDataSorce(){
        return mongoose;
    }
}

module.exports = DataSourceManager;

