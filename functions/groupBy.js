/**
 *
 * @param {Object} post The object to parse for the attribute
 * @param {String} groupingKey The attribute of the post's frontmatter to use to
 * @returns {Object} The group found
 */
const getGroup = (post, groupingKey) => {
  const group = post.frontmatter[groupingKey];
  if (group === undefined || group === null) {
    console.warn(`
        <${groupingKey}> doesn't exist. 
        Object contains these attributes: 
        ${Object.keys(post)
          .map((key) => `${key}`)
          .join(', ')}`);
    return false;
  }
  return group;
};

/**
 * Group by year the posts
 * @param {Array} posts The array of posts to group
 * @param {String} groupingKey The attribute of the post's frontmatter to use to
 * create the grouping
 * @returns {Array} The grouped array with the related posts as children.
 */
const groupBy = (posts, groupingKey) => {
  //console.log(`group elements by ${groupingKey}...`);
  const groups = posts.reduce((output, post) => {
    const group = getGroup(post, groupingKey);
    if (!group) return output; //current post doesn't have the groupingKey
    if (Array.isArray(group)) {
      console.log('group is array!');
      group.map((value) => {
        output[value] = output[value] || [];
        output[value].push(post);
      });
      return output;
    }

    output[group] = output[group] || [];
    output[group].push(post);
    return output;
  }, {});
  //console.log(yearGroups);
  return groups;
};

export default groupBy;
