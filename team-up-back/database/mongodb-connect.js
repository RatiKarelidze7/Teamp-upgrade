const mongoose = require('mongoose');

const connectMongoDatabase = async () => {
    mongoose.set('strictQuery', true);

    const connected = await mongoose.connect(
        'mongodb+srv://admin:admin@team-up-upgrade.2uohldt.mongodb.net/'
    );

    console.log((`Mongo Connected: ${connected.connection.host}`));
};

module.exports = connectMongoDatabase;