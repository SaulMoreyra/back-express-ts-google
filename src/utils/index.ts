const formatParams = (queryParams: {}) => {
  return Object.entries(queryParams)
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .filter((values) => values)
    .join("&");
};

export default { formatParams };
