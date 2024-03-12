const { getSection } = require("../config");

const CACHE_WEEKLY = {};
// New episode ( potential character) every week
const getCharacter = async (character_id) => {
    console.log("CACHE_HOURLY", CACHE_WEEKLY);
    let now = new Date().getTime() / 1000;

    if (
      CACHE_WEEKLY[character_id] &&
        now < CACHE_WEEKLY[character_id].timestamp + getSection("rick_morty").cache_expiery_week
      ) {
        console.log(CACHE_WEEKLY[character_id],"From CACHE!");
        return CACHE_WEEKLY[character_id];
      }

      const URL = `${getSection("rick_morty").RICK_MORTY_CHARACTERS}/${character_id}`;
      console.log(URL);
      try {
        const res = await fetch(URL);
        const data = await res.json();

        CACHE_WEEKLY[character_id] = {
            timestamp: new Date().getTime() / 1000,
            data: data,
        };
        console.log(CACHE_WEEKLY[character_id],"From WEB!");

        return CACHE_WEEKLY[character_id];
      } catch (err) {
    throw err;
      }
};

module.exports = {
    getCharacter,
};