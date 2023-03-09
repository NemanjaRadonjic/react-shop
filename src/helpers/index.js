export const truncateString = (str, limit = 20) => {
  return str.substring(0, limit) + "...";
};
