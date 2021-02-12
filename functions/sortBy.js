/**
 *
 * @param {Array} array The array to verify
 * @param {String} sortingKeys The attribute names to find in each element
 */
const checkArray = (array, sortingKeys) => {
  array.map((element) => {
    sortingKeys.map((key) => {
      if (element[key] === undefined || element[key] === null)
        throw new Error(`
                  <${key}> doesn't exist. 
                  Object contains these attributes: 
                  ${Object.keys(element)
                    .map((key) => `${key}`)
                    .join(', ')}`);
    });
  });
};
/**
 * Sort elements according to criteria
 * @param {Array} array List of elements
 * @param {String} sortingKeys The attribute names to find in the element
 * @returns {Array} The sorted array of elements
 */
const sortBy = (array, sortingKeys, newestOrdering = false) => {
  checkArray(array, sortingKeys);
  if (newestOrdering) {
    console.log('sorting newest to oldest...');
    return array.sort((currentEl, nextEl) =>
      currentEl.timestamp < nextEl.timestamp ? 1 : -1,
    );
  }
  console.log('sorting oldest to newest...');
  return array.sort((currentEl, nextEl) =>
    currentEl.timestamp > nextEl.timestamp ? 1 : -1,
  );
};
export default sortBy;
