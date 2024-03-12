const express = require("express");
const { getSection } = require("./pkg/config/index");
const { getForCity, getForCityHourly, } = require("./handlers/weather");
const { getCharacterRickMorty } = require("./handlers/rick_andMorty");

const app = express();

app.get("/api/weather/:city", getForCity);
app.get("/api/hourly/weather/:city", getForCityHourly);

app.get("/api/rick_morty/:id", getCharacterRickMorty);

// server startup for openweather
// app.listen(getSection("weather").port, () => {
//   console.log(`Server started at port ${getSection("weather").port}`);
// });

// server startup for Rick and Morty
app.listen(getSection("rick_morty").port, () => {
  console.log(`Server started at port ${getSection("rick_morty").port}`);
});
