// logika koja ke komunicira so openweathermap api-to
// Primitivni podatocni tipovi
// string, number, boolean

const { getSection } = require("../config");

// Ne primitvni tipovi
// functions, objects, arrays

const CACHE = {};
const CACHE2 = {};


// CACHE = {
//     skopje: {
//         timestamp: 1800,
//         data: {}
//     },
//     strumica: {

//     },
//     stip: {

//     }
// }

// skopje: {
//   timestamp: 1800, //21:00 -> 5 minutes passed
//   data: {},
// },

const getCityWeather = async (city) => {
  console.log("CACHE", CACHE);

  let now = new Date().getTime() / 1000; // vremeto od 1 januari 1970 vo sekundi

  // console.log("now", now);

  // console.log(CACHE[city].timestamp + getSection("weather").cache_expiery);

  if (
    CACHE[city] &&
    now < CACHE[city].timestamp + getSection("weather").cache_expiery
  ) {
    return CACHE[city];
  }

  const URL = `${
    getSection("weather").API_URL
  }/forecast/hourly?q=${city}&appid=${getSection("weather").api_key}`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    CACHE[city] = {
      timestamp: new Date().getTime() / 1000,
      data: data,
    };
  } catch (err) {
    throw err;
  }
};

const getCityWeatherHourly = async (city) => {
  console.log("CACHE2", CACHE2);

  let now = new Date().getTime() / 1000; // vremeto od 1vi January 1970 godina vo sekundi

  if (
    CACHE2[city] && now < CACHE2[city].timestamp + getSection("weather").cache_expiery_hour
    // current time < time of caching + time of cash expiery
  ) {
    return CACHE2[city];
  }
  const URL = `${getSection("weather").API_URL_HOUR}/forecast/hourly?q=${city}&appid=${getSection("weather").api_key}`;
  // https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}

  console.log(URL);

  try {
    const res = await fetch(URL);
    const data = await res.json();

    CACHE2[city] = {
      timestamp: new Date().getTime() / 1000,
      data: data,
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getCityWeather,
  getCityWeatherHourly,
};
