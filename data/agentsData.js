const { getCachedSeedData } = require("../scripts/seedEngine/cache");

module.exports = {
  get agentsData() {
    return getCachedSeedData().agents;
  },
};
