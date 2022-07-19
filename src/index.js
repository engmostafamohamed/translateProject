var express = require('express');
var cors = require('cors');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();

//this writen when name the file config.env not .env only
dotenv.config({
    path: "./config.env"
});
//Route
var router = require('./route/terms.js')
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(cors());

//middleware
app.use('/api', router)

const PORT = process.env.PORT || 3300;
//connect to database
(async () => {
    try {
        const db = mongoose.connect(
            `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        );
        console.log(`database is connected to:${process.env.PORT}`);
    } catch (error) {
        console.error(`Database Error:${error}`);
        process.exit(1);
    }
})();
app.listen(3300, function () {
    console.log(`app running on port ${PORT}`);
    // console.log('app running on port :' + app.get('port'));
});