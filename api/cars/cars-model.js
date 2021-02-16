// require db, make 'actions'
const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

module.exports = {
  getAll,
};
