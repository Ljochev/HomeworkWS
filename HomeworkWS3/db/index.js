const mongoose = require("mongoose");

const { getSelection } = require("../pkg/config/index");

const {MONGO_USER_NAME, MONGO_PASSWORD, PORT} = getSelection("development");

const uri = `mongodb+srv://${MONGO_USER_NAME}:${MONGO_PASSWORD}@cluster0.coopvs9.mongodb.net/semos?retryWrites=true&w=majority&appName=Cluster0`

async function connect() {
    try{
        await mongoose.connect(uri);
        console.log("Mongoose is connected!")
    } catch(err) {
        console.error(err.message);
    }
};

connect();