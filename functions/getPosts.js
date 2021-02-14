import matter from 'gray-matter';
import groupBy from '@functions/groupBy';

const dateSeperator = ' ';
const metaSeperator = ',';
/**
 * Extract the data for the markdown files.
 * @param {Object} context The NextJS context
 * @returns {Array} The post raw data
 */
const parsePostData = (context) => {
  //console.log('extracting data from markdown...');
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
};
/**
 * chunk the post.frontmatter.date into a
 *   - dayNumber
 *   - day (month + day number)
 *   - month
 *   - year
 * @param {Array} posts List of posts
 * @returns {Array} The updated posts the date chunks
 */
const chunckPostsDate = (posts) => {
  //console.log('chunk post dates...');
  const chunkedPosts = posts.map((post) => {
    const [postDay, postMonth, postYear] = post.frontmatter.date.split(
      dateSeperator,
    );
    // post.frontmatter.day = postDay;
    // post.frontmatter.month = postMonth;
    post.frontmatter.year = postYear.trim();
    post.frontmatter.timestamp = Date.parse(post.frontmatter.date);
    //console.log(post.title, post.frontmatter.timestamp, post.frontmatter.date);
  });
  return chunkedPosts;
};

/**
 * Chunk the posts's attributes given
 * @param {Array} posts List of posts
 * @param {Array} keys The attributes to chunk
 * @returns {Array} The updated posts
 */
const chunckPostsBy = (posts, keys) => {
  //console.log('chunk post dates...');
  const chunkedPosts = posts.map((post) => {
    for (const key of keys) {
      if (!post.frontmatter[key]) continue;
      const values = post.frontmatter[key].split(metaSeperator);
      post.frontmatter[`${key}Chunks`] = values;
    }
  });
  return chunkedPosts;
};

const getPosts = (context) => {
  const rawPosts = parsePostData(context);
  chunckPostsDate(rawPosts);
  chunckPostsBy(rawPosts, ['category', 'tag']);
  return rawPosts;
};

export default getPosts;
