const fs = require("fs")
const { resolve } = require("path")

const findUsersByCompany = async (name) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response)
        const data = await response.json()
        data.forEach(ob => {
            
            if(ob.company.name === name){
                console.log(ob.name)
          
            }
        })
    }
    catch(error) {
        console.log(error);
    }
} 

const findUserCityByUsername = async (userName) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response)
        const data = await response.json()
        data.forEach(ob => {
            
            if(ob.username === userName){
                console.log(ob.address.city)
            }
        })
    }
    catch(error) {
        console.log(error);
    }
} 

findUsersByCompany("Romaguera-Jacobson")
findUserCityByUsername("Bret")


const read = async (fileName) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) return reject(err);
        data = JSON.parse(data);
        return resolve(data);
      });
    });
  };

jsonData = read("users.json")
console.log(jsonData)