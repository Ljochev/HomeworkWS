
const { getCharacter } = require("./../pkg/rick_and_morty/index");


const getCharacterRickMorty = async (req, res) => {
    try {
        console.log("I'm in getCharacterRickMorty", req.params.id);
      const data = await getCharacter(req.params.id);
      return res.status(200).send(data);
    } catch (err) {
      return res.status(500).send("Internal Server Error");
    }
  };

module.exports = {
    getCharacterRickMorty,
};