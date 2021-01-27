import matter from 'gray-matter';

function sortPosts(posts, chronologically = true) {
  console.log('sorting...');
}
const getPosts = (context) => {
  const postFileNames = context.keys();
  const postsContent = postFileNames.map(context);
  //console.log('values:', postsContent);
  const data = postFileNames.map((postFileName, postIndex) => {
    let slug = postFileName.replace(/^.*[\\\/]/, '').slice(0, -3);
    //console.log('slug >', slug);
    const postContent = postsContent[postIndex];
    const document = matter(postContent.default);
    const post = {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    };
    //console.log(post.frontmatter);

    return post;
  });
  sortPosts(data);
  return data;
};

export default getPosts;
