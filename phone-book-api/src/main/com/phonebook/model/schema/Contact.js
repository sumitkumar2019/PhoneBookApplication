const DataSourceManager = require('../../manager/data-source/DataSourceManager');
const mongoDBDataSource = new DataSourceManager().getMongoDBDataSorce();
const ContactSchema = mongoDBDataSource.Schema({

    name:{
        type:String,
        reqired:true
    },
    address:{
        type:String,
        reqired:true
    },
    city:{
        type:String,
        reqired:true
    },
    state:{
        type:String,
        reqired:true
    },
    phone:{
        type:String,
        reqired:true
    },
    mobile:{
        type:String,
        reqired:true
    }

});

const Contacts = mongoDBDataSource.model('Contacts', ContactSchema);

module.exports = Contacts;