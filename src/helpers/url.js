import queryString from "query-string";

export const formUrlQuery = ({ params, key, value }) => {
  const qs = queryString.parse(params);

  qs[key] = value;

  return queryString.stringifyUrl({
    url: window.location.pathname,
    query: qs,
  });
};

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

export const getQueryFromUrl = (url) => {
  return queryString.parseUrl(url).query;
};
