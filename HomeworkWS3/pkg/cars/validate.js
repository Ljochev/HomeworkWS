const { Validator } = require("node-input-validator");

const newCarValidate = {
    make: "required|string",
    model: "required|string",
    year: "required|integer",
    color: "required|string",
    mileage: "required|integer",
    price: "required|integer",
};

const updateCarValidate = {
    make: "string",
    model: "string",
    year: "integer",
    color: "string",
    mileage: "integer",
    price: "integer",
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if(!e) {
        throw v.errors;
    }
};

module.exports = {
    newCarValidate,
    updateCarValidate,
    validate,
};