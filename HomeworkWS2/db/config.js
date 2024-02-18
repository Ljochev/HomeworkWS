const mongoose = require("mongoose");

const uri = `mongodb+srv://ljochev:<Password>@cluster0.coopvs9.mongodb.net/semos?retryWrites=true&w=majority`;

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("mongoose connected!");
    } catch (err) {
        console.log(err.message);
    }
} 

connect();