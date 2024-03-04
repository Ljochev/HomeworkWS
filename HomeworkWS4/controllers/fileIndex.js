const {addCar,
    updateCar,
    deleteCar,
    getCars,
    getCarIndex,
} = require("../pkg/cars/fileCars");


const addCarFile = async ( req, res ) => {
try{
    await addCar(req.body);
    const result =  await getCars();
    res.status(201).send(result);
} catch(err) {
    res.status(500).send("Internal server error!");
}
};

const updateCarFile = async ( req, res ) => {
    try{
        await updateCar(req.body, req.query.index)
        const result =  await getCars();
        res.status(201).send(result);
    } catch(err) {
        res.status(500).send("Internal server error!");
    }
};

const deleteCarFile = async ( req, res ) => {
    try{
        await deleteCar(req.query.index)
        const result =  await getCars();
        res.status(201).send(result);
    } catch(err) {
        res.status(500).send("Internal server error!");
    }
};

const getAllCarsFile = async ( req, res ) => {
    try{
        const result =  await getCars();
        res.status(201).send(result);
    } catch(err) {
        res.status(500).send("Internal server error!");
    }
};

const getCarByIndexFile = async ( req, res ) => {
    try{
        const result =  await getCarIndex(req.query.index);
        res.status(201).send(result);
    } catch(err) {
        res.status(500).send("Internal server error!");
    }
};

module.exports = {
    addCarFile,
    updateCarFile,
    deleteCarFile,
    getAllCarsFile,
    getCarByIndexFile,
    };