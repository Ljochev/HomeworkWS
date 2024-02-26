const {
    getById,
    getByBrand,
    getAllSortedByMileage,
    getAllSortedByPrice,
    getAll,
    create,
    update,
    remove,
    destroy,
} = require("../models/cars");

const getOneCar = async (req, res) => {
    try {
        const myCar = await getById(req.params.id);
        res.status(200).send(myCar);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

const getCarsByBrand = async (req, res) => {
    try {
        const cars = await getByBrand(req.params.make);
        res.status(200).send(cars);
    } catch (err) {
        res.status(500).send("Internal server error!");
    }
};

const getByMileage = async (req, res) => {
    try {
        const myCars = await getAllSortedByMileage();
        res.status(200).send(myCars);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

const getByPrice = async (req, res) => {
    try {
        const myCars = await getAllSortedByPrice();
        res.status(200).send(myCars);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

const getAllCars = async (req, res) => {
    try{
        const allCars = await getAll();
        res.status(200).send(allCars);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

const createCar = async (req, res) => {
    try{
        await create(req.body);
        res.status(201).send("New car was created");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

const updateCar = async (req, res) => {
    
    try{
        await update(req.params.id, req.body);
        res.status(201).send("Car was updated");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

const  deleteCar = async (req, res) => {
    
    try{
        await remove(req.params.id);
        res.status(200).send("Car was deleted");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

const  deleteAllCars = async (req, res) => {
    try{
        await destroy();
        res.status(200).send("All cars are deleted");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

module.exports = {
    getOneCar,
    getCarsByBrand,
    getByMileage,
    getByPrice,
    createCar,
    getAllCars,
    updateCar,
    deleteCar,
    deleteAllCars,
}