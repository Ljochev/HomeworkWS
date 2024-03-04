const mongoose = require("mongoose");



const carSchema = new mongoose.Schema({
        make: String,
        model: String,
        year: Number,
        color: String,
        miles: Number,
        price: Number,
});

const Car = mongoose.model("Car", carSchema, "cars1");

const carAdd = async (data) => {
const newCar = new Car(data);
return await newCar.save();
};

const carUpdate = async (id, data) => {
return await Car.updateOne( {_id: id}, data );
};

const carDelete = async (id) => {
return await Car.deleteOne({_id: id});
};

const carGetAll = async () => {
return await Car.find();
};


const carMiles = async () => {
        return await Car.find().sort({miles: 1});
};

const carPrice = async () => {
        return await Car.find().sort({price: 1});
};

const carModel = async (model) => {
        return await Car.find({model: model});
};

const carMake = async (make) => {
        return await Car.find({make: make});
};

module.exports = {
        carAdd,
        carUpdate,
        carGetAll,
        carDelete,
        carMiles,
        carPrice,
        carModel,
        carMake,
}