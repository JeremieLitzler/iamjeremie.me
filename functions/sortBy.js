/**
 *
 * @param {Array} array The array to verify
 * @param {String} sortingKeys The attribute names to find in each element
 */
const checkArray = (array, sortingKeys) => {
  array.map((element) => {
    sortingKeys.map((key) => {
      if (
        element.frontmatter[key] === undefined ||
        element.frontmatter[key] === null
      )
        throw new Error(`
                  <${key}> doesn't exist to sort by. 
                  Object contains these attributes: 
                  ${Object.keys(element.frontmatter)
                    .map((key) => `${key}`)
                    .join(', ')}`);
    });
  });
};
/**
 * Sort elements according to criteria
 * @param {Array} posts List of elements
 * @param {String} sortingKeys The attribute names to find in the element
 * @returns {Array} The sorted array of elements
 */
const sortBy = (posts, sortingKeys, newestOrdering = false) => {
  checkArray(posts, sortingKeys);
  if (newestOrdering) {
    //console.log('sorting newest to oldest...');
    return posts.sort((currentPost, nextPost) =>
      currentPost.frontmatter.timestamp < nextPost.frontmatter.timestamp
        ? 1
        : -1,
    );
  }
  //console.log('sorting oldest to newest...');
  return posts.sort((currentEl, nextEl) =>
    currentEl.frontmatter.timestamp > nextEl.frontmatter.timestamp ? 1 : -1,
  );
};
export default sortBy;
