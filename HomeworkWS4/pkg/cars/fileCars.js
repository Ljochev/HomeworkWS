const { read, write } = require("./readWrite");
const FILE_NAME = `${__dirname}/../../cars.json`

const addCar = async (document) => {
   const data = await read(FILE_NAME);
   data.push(document);
   await write(FILE_NAME, data);
   return await await read(FILE_NAME);
};

const updateCar = async ( document, index ) => {
    let data = await read(FILE_NAME);
    data = data.map((element, i) => {
        if( i === Number(index)) 
        return {...element,...document};
        return element;
    });
    await write(FILE_NAME, data);
};

const deleteCar = async ( index ) => {
    let data = await read(FILE_NAME);
    data = data.filter((element, i) => {
        if(i !== Number(index)) return element
    });
    await write(FILE_NAME, data);
};

const getCars = async () => {
    return read(FILE_NAME);
};

const getCarIndex = (index) => {
    return read(FILE_NAME, Number(index));
}

module.exports = {
    addCar,
    updateCar,
    deleteCar,
    getCars,
    getCarIndex,
}