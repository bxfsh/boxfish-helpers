export function numberNotDeleted(array) {
  return _.filter(array, { deleted: false }).length;
};
