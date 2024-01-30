const request = require("../utils/request");

const fetchCatsByOwner = (owner) => {
  return request(`/owners/${owner}/cats`)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};



module.exports = fetchCatsByOwner;