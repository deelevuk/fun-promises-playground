const request = require("../utils/request");

const fetchAllOwners = () => {
  return request(`/owners`)
    .then((owners) => {
      const lowerCaseNames = owners.map((name) => name.toLowerCase());
        return lowerCaseNames;
      })
      .catch((error) => {
        return error;
      });
};

module.exports = fetchAllOwners;
