const { SEED_CONFIG } = require("../../config/seedConfig");
const { generateAllSeedData } = require("./engine");

// In-memory cache singleton to prevent redundant evaluations
let cachedData = null;

// Returns cached seed data or generates a fresh set if not yet initialized
function getCachedSeedData() {
  if (!cachedData) {
    cachedData = generateAllSeedData(SEED_CONFIG);
  }
  return cachedData;
}

// Re-evaluates seed generation with updated configuration and refreshes the in-memory cache
function refreshSeedData(customConfig) {
  cachedData = generateAllSeedData(customConfig || SEED_CONFIG);
  return cachedData;
}

module.exports = { getCachedSeedData, refreshSeedData };
