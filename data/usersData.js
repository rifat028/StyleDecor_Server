const { getCachedSeedData } = require("../scripts/seedEngine/cache");

module.exports = {
  get usersData() {
    return getCachedSeedData().users;
  },
};
