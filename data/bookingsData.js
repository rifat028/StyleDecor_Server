const { getCachedSeedData } = require("../scripts/seedEngine/cache");

module.exports = {
  get bookingsData() {
    return getCachedSeedData().bookings;
  },
};
