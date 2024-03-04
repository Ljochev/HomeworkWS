const fs = require("fs");

const read = async (fileName, index = null) => {
    return new Promise((resolve, reject) =>{
    fs.readFile(fileName, "utf-8", (err, data) => {
        if(err) return reject(err);
        data = JSON.parse(data);
        if(index !== null)
        return resolve(data[index]);
        return resolve(data);
    });
});
};

const write = async (filename, data) => {
    return new Promise((resolve, reject) => {
        const myData = JSON.stringify(data);
        fs.writeFile(filename, myData, (err) => {
            if(err) return reject(err)
            return resolve();
        });
    });
};



module.exports = { read, write };