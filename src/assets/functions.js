const formatDate = (date) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

export { formatDate };
