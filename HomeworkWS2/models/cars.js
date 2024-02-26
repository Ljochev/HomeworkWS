const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
make: String,
model: String,
year: Number,
color: String,
mileage: Number,
price: Number,
createdAT: {
    immutable: true,
    type: Date,
    default: () => Date.now()
},
updatedAT: {
    type: Date,
    default: () => Date.now()
}
// user: {
//     type: mongoose.SchemaTypes.ObjectId,
//     ref: Cars
// }
});


const Car = mongoose.model("Cars", carSchema, "cars");


const getById = async (id) => {
    return await Car.findOne({ _id: id });
}

const getByBrand = async (make) => {
    return await Car.find({ make: make });
    // return await Car.find({});
}

const getAllSortedByMileage = async () => {
    return await Car.find({}).sort({mileage: 1});
}

const getAllSortedByPrice = async () => {
    return await Car.find({}).sort({price: 1});
}

const getAll = async () => {
    return await Car.find({});
}

const create = async (data) => {
    const car = new Car(data);
    return await car.save();
}

const update = async (id, data) => {
    return await Car.updateOne({_id: id}, data);
}

const remove = async (id) => {
    return await Car.deleteOne({ _id: id });
}

const destroy = async () => {
    return await Car.deleteMany({mileage: {$gte: 0}});
}



module.exports = {
    getById,
    getByBrand,
    getAllSortedByMileage,
    getAllSortedByPrice,
    getAll,
    create,
    update,
    remove,
    destroy,
    
}
