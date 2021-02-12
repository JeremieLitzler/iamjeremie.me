import matter from 'gray-matter';
import boostFrontMatter from '@functions/boostFrontMatter';
import groupBy from '@functions/groupBy';
import sortBy from '@functions/sortBy';

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
    const newFrontMatter = boostFrontMatter(
      document.data,
      postFileName,
      'category',
    );
    const post = {
      frontmatter: newFrontMatter,
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
    const postsPerYear = groupBy(sortBy(rawPosts, ['timestamp'], true), 'year');
    //console.log('postsPerYear', postsPerYear);
    return postsPerYear;
  }
  //console.log('sortedData', sortedData);
  return sortedData;
};

export default getPosts;
