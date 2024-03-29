const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const { getSection } = require("./pkg/config/index");
const {
    createNewUser,
    login,
    refreshToken,
    resetPassword,
    forgotPassword,
    getAllUserEmailsSorted,
} = require("./handlers/auth");

const { 
    createNewRecepie,
    updateNewRecepie,
    getRecepieById,
    deleteRecepie,
    getAllRecepiesSortedByName,
 } = require("./handlers/recepies");


require("./pkg/db/index");

const app = express();

app.use(express.json());
app.use(
    jwt({
        secret: getSection("development").jwt_secret,
        algorithms: ["HS256"],
    }).unless({
        path: [
// we add the rouths we dont want to be authenticated
"/api/user/register",
"/api/user/login",
"/api/user/reset_password",
"/api/user/forgot_password",
        ],
    })
);
app.post("/api/user/register", createNewUser);
app.post("/api/user/login", login);
app.post("/api/user/reset_password", resetPassword);
app.post("/api/user/forgot_password", forgotPassword);




app.get("/api/user/sortedEmails", getAllUserEmailsSorted);
app.post("/api/recepies/create", createNewRecepie);
app.put("/api/recepies/update/:id",updateNewRecepie);
app.get("/api/recepie/id/:id", getRecepieById);
app.delete("/api/recepie/id/:id", deleteRecepie);
app.get("/api/recepie/name", getAllRecepiesSortedByName);



// we form the rouths here


app.listen(getSection("development").PORT, () => {
    console.log(`Server is listening on port ${getSection("development").PORT}`)
});
