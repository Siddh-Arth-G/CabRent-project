const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
    .then( () => console.log('DataBase connected successfully'))
    .catch( (error) => {
        console.error(err);
        console.log(err);
        process.exit(1);
    });
}

module.exports = connectToDb;
