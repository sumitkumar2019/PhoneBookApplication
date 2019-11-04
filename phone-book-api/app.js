const express = require('express');
const app = express();
var router = express.Router();
var bodyParser = require('body-parser')
const cors = require('cors');
const DataSourceManager = require("./src/main/com/phonebook/manager/data-source/DataSourceManager");
const PhoneBookController = require("./src/main/com/phonebook/controller/PhoneBookController");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use("/phonebook/api", router);

app.listen(port, () => {
    new DataSourceManager().createMongoDBDataSource();
    new PhoneBookController(router);
    console.log(`Server running on port: ${port}`);
});
   
module.exports = app;