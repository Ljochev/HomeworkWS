const { newCarValidate, updateCarValidate, validate, } = require("../pkg/cars/validate");
const {
    carAdd,
    carUpdate,
    carGetAll,
    carDelete,
    carMiles,
    carPrice,
    carModel,
    carMake,
} = require("./../pkg/cars/dbCars");

const addCar = async ( req, res ) => {
    try{
        await validate(req.body, newCarValidate);
        await carAdd(req.body);
        res.status(201).send(req.body);
    } catch(err) {
        res.status(500).send("Internal server error");
    }
};

const updateCar = async ( req, res ) => {
    try{
        await validate(req.body, updateCarValidate);
        await carUpdate(req.params.id, req.body);
        res.status(201).send(req.body);
    } catch(err) {
        res.status(500).send("Internal server error");
    }
};

const deleteCar = async ( req, res ) => {
    try{
        await carDelete(req.params.id);
        res.status(200).send("Car was removed!");
    } catch(err) {
        res.status(500).send("Internal server error");
    }
};

const getAllCars = async ( req, res ) => {
    try{
        const myData = await carGetAll();
        res.status(200).send(myData);
    } catch(err) {
        res.status(500).send("Internal server error");
    }
};

const getAllCarsMilesSorted = async ( req, res ) => {
    try{
        const myData = await carMiles();
        res.status(200).send(myData);
    } catch(err) {
        res.status(500).send("Internal server error");
    }
};

const getAllCarsPriceSorted = async ( req, res ) => {
    try{
        const myData = await carPrice();
        res.status(200).send(myData);
    } catch(err) {
        res.status(500).send("Internal server error");
    }
};

const getCarsModel = async ( req, res ) => {
    try{
        const myData = await carModel(req.params.model);
        res.status(200).send(myData);
    } catch(err) {
        res.status(500).send("Internal server error");
    }
};

const getCarsMake = async ( req, res ) => {
    try{
        const myData = await carMake(req.params.make);
        res.status(200).send(myData);
    } catch(err) {
        res.status(500).send("Internal server error");
    }
};

module.exports = {
addCar,
updateCar,
deleteCar,
getAllCars,
getAllCarsMilesSorted,
getAllCarsPriceSorted,
getCarsModel,
getCarsMake,
};