/**
 *
 * @param {Object} element The object to parse for the attribute
 * @param {String} groupingKey The attribute name to find in the element
 */
const getGroup = (element, groupingKey) => {
  const group = element[groupingKey];
  if (group === undefined || group === null)
    throw new Error(`
        <${groupingKey}> doesn't exist. 
        Object contains these attributes: 
        ${Object.keys(element)
          .map((key) => `${key}`)
          .join(', ')}`);

  return group;
};

/**
 * Group by year the posts
 * @param {Array} array The array of values to group
 * @param {string} groupingKey The attribute of the elements to use to
 * create the grouping
 * @returns {Array} The grouped array with the related elements as children.
 */
const groupBy = (array, groupingKey) => {
  console.log(`group elements by ${groupingKey}...`);
  const groups = array.reduce((output, element) => {
    const group = getGroup(element, groupingKey);
    output[group] = output[group] || [];
    output[group].push(element);
    return output;
  }, {});
  //console.log(yearGroups);
  return groups;
};

export default groupBy;
