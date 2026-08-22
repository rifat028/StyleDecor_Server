const { getCachedSeedData } = require("../scripts/seedEngine/cache");

module.exports = {
  get categoriesData() {
    return getCachedSeedData().categories;
  },
};
