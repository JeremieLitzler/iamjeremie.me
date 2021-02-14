import getSlug from '@functions/getSlug';

const filterBy = (posts, filterKey, filterType = '', filter = '') => {
  if (filterType === '')
    throw new Error(`Cannot filter if the key to filter is not provided...`);
  if (filter === '') return posts;
  //filter is looked up in array
  if (filterType === 'array') {
    const postMatches = [];
    for (const post of posts) {
      if (!post.frontmatter[filterKey]) continue;
      const postIsMatch = post.frontmatter[filterKey].some(
        (element) => getSlug(element) === filter,
      );
      if (!postIsMatch) continue;

      postMatches.push(post);
    }
    return postMatches;
  }

  //filter is a primitive value
  return posts.map((post) => post.frontmatter[filterKey] === filter);
};

export default filterBy;
