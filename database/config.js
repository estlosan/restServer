const mongoose = require('mongoose');



const dbConexion = async () => {

    try {
        await mongoose.connect(process.env.MONGO_API_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    } catch (error) {
        console.error(error);
    }

    console.log('Database online!!!');
}

module.exports = {
    dbConexion
}