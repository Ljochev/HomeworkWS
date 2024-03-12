const makeId = (lenght) => {
    let result = "";
    const characters = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLenght = characters.length;

    for( let i = 0;i < lenght; i++) {
        result += characters[Math.floor(Math.random() * charactersLenght)];
    }
    // console.log("This is the encoded string of 6: ", result);
    return result;
};


module.exports = makeId;