const express = require("express");
require("./db/config");
const app = express();
app.use(express.json());



const {
    getOneCar,
    getCarsByBrand,
    getByMileage,
    getByPrice,
    getAllCars,
    createCar,
    updateCar,
    deleteCar,
    deleteAllCars,
} = require("./controllers/cars");


app.get("/cars/ID/:id", getOneCar);

app.get("/cars/make/:make", getCarsByBrand);

app.get("/cars/mileage", getByMileage);

app.get("/cars/price", getByPrice);

app.get("/cars/all", getAllCars);

app.post("/cars", createCar);

app.put("/cars/:id", updateCar);

app.delete("/cars/ID/:id", deleteCar);

app.delete("/cars/all", deleteAllCars);


const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});