const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse requests of content-type - application/json
app.use(bodyParser.json())

//get post method imported
require('./Routes/routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
    require('./dbConfig/dbConfig');
});