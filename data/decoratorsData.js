const { getCachedSeedData } = require("../scripts/seedEngine/cache");

module.exports = {
  get decoratorsData() {
    return getCachedSeedData().decorators;
  },
};
