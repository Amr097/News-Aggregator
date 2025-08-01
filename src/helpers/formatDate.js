export const formatDate = (dateString) => {
  console.log(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
