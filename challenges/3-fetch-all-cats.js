const fetchCatsByOwner = require("./1-fetch-cats-by-owner");
const fetchAllOwners = require("./2-fetch-all-owners");

const fetchAllCats = () => {
  return fetchAllOwners()
    .then((ownersName) => {
      const catArray = ownersName.map((owner) => {
        return fetchCatsByOwner(owner);
      });
      return Promise.all(catArray);
    })
    .then((allCats) => {
      return allCats.flat().sort();
    });
};

// const fetchAllCats = () => {
//   return fetchAllOwners().then((data) => {
//     const catArray = data.map((name) => fetchCatsByOwner(name));
//     console.log(catArray).then((allCats) => {
//       return Promise.all(allCats);
//     });
//   });
// };

module.exports = fetchAllCats;

// owners.map((name) => name.toLowerCase()

/* This function should make use of both fetchAllOwners and fetchCatsByOwner in order to retrieve an array of all the cats from the server
It should return a promise that resolves to an array of all those adorable cats, sorted in alphabetical order
Hint: Promises are objects, which means they can be passed around with ease, pending resolution or rejection. This means that unlike with our earlier examples using callbacks, where most array methods were useless as callbacks don't return anything, they may now be useful. In this instance, you might want to consider using map in conjunction with Promise.all to help you make the multiple calls required to get hold of all the cats */
