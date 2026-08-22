const { getCachedSeedData } = require("../scripts/seedEngine/cache");

module.exports = {
  get paymentsData() {
    return getCachedSeedData().payments;
  },
};
