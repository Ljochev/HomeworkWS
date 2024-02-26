const fs = require("fs");

const CONFIG_SOURCE = `${__dirname}/../../config.json`;

let config = null ;

if(config === null) {
    const file = fs.readFileSync(CONFIG_SOURCE, "utf-8");
    config = JSON.parse(file);
};




const getSelection = (section) => {
    // console.log(config[section]);
    if(!config[section])
    throw `Configuration section ${section} does not exist`;
return config[section];
};

module.exports = { getSelection }