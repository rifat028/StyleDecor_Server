// =========================================================================
// Reusable Date Range & Time Filtering Utilities
// =========================================================================

/**
 * Resolves a friendly timeFilter key or custom dates into an { start, end, isMax } object
 *
 * @param {string} timeFilter - today | yesterday | last 7 days | this week | last 30 days | this month | last 365 days | this year | max | custom
 * @param {string|Date} [startDate] - Optional start date for custom filter
 * @param {string|Date} [endDate] - Optional end date for custom filter
 * @returns {{ start: Date|null, end: Date|null, isMax: boolean }}
 */
const resolveDateRange = (timeFilter = "max", startDate, endDate) => {
  const filterKey = (timeFilter || "max").toLowerCase().trim().replace(/[-_]/g, " ");

  if (filterKey === "max" || filterKey === "all") {
    return { start: null, end: null, isMax: true };
  }

  const now = new Date();
  let start = null;
  let end = new Date(now);

  switch (filterKey) {
    case "today": {
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
      end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
      break;
    }
    case "yesterday": {
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 0, 0, 0, 0);
      end = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 23, 59, 59, 999);
      break;
    }
    case "last 7 days":
    case "last7days":
    case "7 days": {
      start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
    }
    case "this week":
    case "thisweek": {
      const day = now.getDay();
      const diff = now.getDate() - day + (day === 0 ? -6 : 1);
      start = new Date(now.getFullYear(), now.getMonth(), diff, 0, 0, 0, 0);
      break;
    }
    case "last 30 days":
    case "last30days":
    case "30 days": {
      start = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      break;
    }
    case "this month":
    case "thismonth": {
      start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
      break;
    }
    case "last 365 days":
    case "last365days":
    case "365 days": {
      start = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      break;
    }
    case "this year":
    case "thisyear": {
      start = new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);
      break;
    }
    case "custom": {
      if (startDate) {
        start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
      }
      if (endDate) {
        end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
      }
      break;
    }
    default: {
      return { start: null, end: null, isMax: true };
    }
  }

  return { start, end, isMax: false };
};

/**
 * Checks if a MongoDB document timestamp falls within the resolved range
 *
 * @param {Object} doc - Document to inspect
 * @param {{ start: Date|null, end: Date|null, isMax: boolean }} range
 * @param {string[]} [dateFields] - Array of field names to check in sequence
 * @returns {boolean}
 */
const isInDateRange = (
  doc,
  range,
  dateFields = ["createdAt", "paidAt", "date", "eventDate", "updatedAt"]
) => {
  if (!doc) return false;
  if (range.isMax || (!range.start && !range.end)) return true;

  let docDate = null;
  for (const field of dateFields) {
    if (doc[field]) {
      docDate = new Date(doc[field]);
      break;
    }
  }

  // Fallback to ObjectId generation timestamp if available
  if (!docDate || isNaN(docDate.getTime())) {
    if (doc._id && typeof doc._id.getTimestamp === "function") {
      docDate = doc._id.getTimestamp();
    }
  }

  if (!docDate || isNaN(docDate.getTime())) return false;

  if (range.start && docDate < range.start) return false;
  if (range.end && docDate > range.end) return false;
  return true;
};

/**
 * Pretty-formats raw status strings (e.g. "out_for_destination" -> "Out For Destination")
 */
const formatStatusLabel = (status = "") => {
  if (!status) return "Unknown";
  return status
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

/**
 * Constructs a MongoDB query condition for filtering documents by date fields
 * Handles both BSON Date objects and ISO string timestamps.
 *
 * @param {string|string[]} dateFields - Field or array of fields to check
 * @param {{ start: Date|null, end: Date|null, isMax: boolean }} range
 * @returns {Object|null} MongoDB condition or null if max/unbounded
 */
const buildDateQuery = (dateFields = ["createdAt"], range) => {
  if (!range || range.isMax || (!range.start && !range.end)) return null;

  const fields = Array.isArray(dateFields) ? dateFields : [dateFields];
  const orConditions = [];

  for (const field of fields) {
    const dateCond = {};
    const strCond = {};
    if (range.start) {
      dateCond.$gte = range.start;
      strCond.$gte = range.start.toISOString();
    }
    if (range.end) {
      dateCond.$lte = range.end;
      strCond.$lte = range.end.toISOString();
    }
    orConditions.push({ [field]: dateCond });
    orConditions.push({ [field]: strCond });
  }

  return orConditions.length === 1 ? orConditions[0] : { $or: orConditions };
};

module.exports = {
  resolveDateRange,
  isInDateRange,
  formatStatusLabel,
  buildDateQuery,
};
