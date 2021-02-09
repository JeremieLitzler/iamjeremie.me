import matter from 'gray-matter';

/**
 * Extract the data for the markdown files.
 * @param {Object} context The NextJS context
 * @returns {Array} The post raw data
 */
function extractPostData(context) {
  console.log('extracting data from markdown...');
  const postFileNames = context.keys();
  const postsContent = postFileNames.map(context);

  return postFileNames.map((postFileName, postIndex) => {
    let slug = postFileName.replace(/^.*[\\\/]/, '').slice(0, -3);
    const postContent = postsContent[postIndex];
    const document = matter(postContent.default);
    const post = {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    };
    return post;
  });
}
/**
 * chunk the post.frontmatter.date into a
 *   - dayNumber
 *   - day (month + day number)
 *   - month
 *   - year
 * @param {Array} posts List of posts
 * @returns {Array} The updated posts the date chunks
 */
function chunckPosts(posts) {
  console.log('chunk post dates...');
  const chunkedPosts = posts.map((post) => {
    const [postDay, postYear] = post.frontmatter.date.split(',');
    const [postDayNumber, postMonth] = postDay.split(' ');
    post.dayNumber = postDayNumber;
    post.month = postMonth;
    post.year = postYear.trim();
    post.day = postDay;
  });
  return chunkedPosts;
}

/**
 * Sort chronologically the posts on post.year
 * @param {Array} posts List of posts
 * @returns {Array} The sorted array of posts
 */
function sortPosts(posts) {
  console.log('sorting...');
  const sortedPosts = posts.sort((currentPost, nextPost) =>
    currentPost.year < nextPost.year ? 1 : -1,
  );
  return sortedPosts;
}

/**
 * Group by year the posts
 * @param {Array} posts The posts
 * @returns {Array} The years array with the related posts as children.
 */
function groupPosts(posts) {
  console.log('group posts by year...');
  const yearKey = 'year';
  const monthKey = 'month';
  const yearGroups = posts.reduce((output, element) => {
    const group = element[yearKey];
    output[group] = output[group] || [];
    output[group].push(element);
    return output;
  }, {});
  //console.log(yearGroups);
  return yearGroups;
}

const getPosts = (context) => {
  const rawPosts = extractPostData(context);
  chunckPosts(rawPosts);
  const sortedData = sortPosts(rawPosts);
  const postsPerYear = groupPosts(sortedData);
  //console.log('postsPerYear', postsPerYear);
  return postsPerYear;
  //console.log('sortedData', sortedData);
  //return sortedData;
};

export default getPosts;
