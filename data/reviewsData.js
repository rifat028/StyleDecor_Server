const { getCachedSeedData } = require("../scripts/seedEngine/cache");

module.exports = {
  get reviewsData() {
    return getCachedSeedData().reviews;
  },
};
