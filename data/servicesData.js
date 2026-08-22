const { getCachedSeedData } = require("../scripts/seedEngine/cache");

module.exports = {
  get servicesData() {
    return getCachedSeedData().services;
  },
};
