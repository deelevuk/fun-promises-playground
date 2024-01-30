const fs = require("fs/promises");

function findPet(catName) {
  return fs
    .readFile(`./data/${catName}.json`, "utf8")
    .then((fileContents) => {
      return JSON.parse(fileContents);
    })
    .catch((error) => {
      return `soz couldnt find ${catName} :(`;
    });
}

module.exports = findPet;
