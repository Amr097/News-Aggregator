import queryString from "query-string";

/**
 * Adds or updates a single key-value pair in the current URL query string.
 * @param {string} params - The current query string (e.g., from useSearchParams).
 * @param {string} key - The query key to update or add.
 * @param {string} value - The value to assign to the key.
 * @returns {string} A new URL with the updated query string.
 */

export const formUrlQuery = ({ params, key, value }) => {
  const qs = queryString.parse(params);

  qs[key] = value;

  return queryString.stringifyUrl({
    url: window.location.pathname,
    query: qs,
  });
};

/**
 * Removes one or more keys from the query string.
 * @param {string} params - The current query string.
 * @param {string[]} keysToRemove - An array of keys to remove from the query.
 * @returns {string} A new URL with the specified keys removed from the query string.
 */

export const removeKeysFromQuery = ({ params, keysToRemove }) => {
  const qs = queryString.parse(params);

  keysToRemove.forEach((key) => {
    delete qs[key];
  });

  return queryString.stringifyUrl(
    {
      url: window.location.pathname,
      query: qs,
    },
    { skipNull: true }
  );
};

/**
 * Extracts the query object from a full URL.
 * @param {string} url - A full URL (e.g., from window.location.href).
 * @returns {Object} The parsed query object (key-value pairs).
 */

export const getQueryFromUrl = (url) => {
  return queryString.parseUrl(url).query;
};
