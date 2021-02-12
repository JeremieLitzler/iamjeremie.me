import matter from 'gray-matter';
import getCategorySlug from '@functions/getCategorySlug';
import groupBy from '@functions/groupBy';

const dateSeperator = ' ';
/**
 * Extract the data for the markdown files.
 * @param {Object} context The NextJS context
 * @returns {Array} The post raw data
 */
const extractPostData = (context) => {
  console.log('extracting data from markdown...');
  const postFileNames = context.keys();
  const postsContent = postFileNames.map(context);

  return postFileNames.map((postFileName, postIndex) => {
    let slug = postFileName.replace(/^.*[\\\/]/, '').slice(0, -3);
    const postContent = postsContent[postIndex];
    const document = matter(postContent.default);
    const categorySlug = getCategorySlug(
      document.data,
      postFileName,
      'category',
    );
    const post = {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
      categorySlug,
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
const chunckDatePosts = (posts) => {
  console.log('chunk post dates...');
  const chunkedPosts = posts.map((post) => {
    const [postDay, postMonth, postYear] = post.frontmatter.date.split(
      dateSeperator,
    );
    // post.day = postDay;
    // post.month = postMonth;
    post.year = postYear.trim();
    post.timestamp = Date.parse(post.frontmatter.date);
    console.log(post.title, post.timestamp, post.frontmatter.date);
  });
  return chunkedPosts;
};

const getPosts = (context, doGroupBy = true) => {
  const rawPosts = extractPostData(context);
  chunckDatePosts(rawPosts);

  if (doGroupBy) {
    const postsPerYear = groupBy(rawPosts, 'year');
    //console.log('postsPerYear', postsPerYear);
    return postsPerYear;
  }
  //console.log('sortedData', sortedData);
  return rawPosts;
};

export default getPosts;
