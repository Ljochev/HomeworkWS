const express = require("express");
require("./db/index")

const app = express();
app.use(express.json());


const { getSelection } = require("./pkg/config/index");
const {PORT} = getSelection("development");




const {
    addCarFile,
    updateCarFile,
    deleteCarFile,
    getAllCarsFile,
    getCarByIndexFile,
} = require("./controllers/fileIndex")

const {
    addCar,
    updateCar,
    deleteCar,
    getAllCars,
    getAllCarsMilesSorted,
    getAllCarsPriceSorted,
    getCarsModel,
    getCarsMake,
    } = require("./controllers/dbIndex");

app.post("/cars/file", addCarFile);
app.patch("/cars/file", updateCarFile);
app.delete("/cars/file", deleteCarFile);
app.get("/cars/file", getAllCarsFile);
app.get("/cars/file/index", getCarByIndexFile);

app.post("/cars/database", addCar);
app.patch("/cars/database/:id", updateCar);
app.delete("/cars/database/:id", deleteCar);
app.get("/cars/database", getAllCars);
app.get("/cars/database/miles", getAllCarsMilesSorted);
app.get("/cars/database/price", getAllCarsPriceSorted);
app.get("/cars/database/model/:model", getCarsModel);
app.get("/cars/database/make/:make", getCarsMake);

app.listen(PORT, () => {
console.log(`Server is live on port ${PORT}`);
});