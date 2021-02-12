// import Layout from '@components/Layout';
// import PostList from '@components/PostList';

// import getPosts from 'functions/getPosts';

// const Index = ({ posts, title, description, ...props }) => {
//   return (
//     <>
//       <Layout pageTitle={title} description={description}>
//         <h1 className='title'>My articles!</h1>
//         {/* The parameter is the attribute value to use where the component is used.*/}
//         <PostList posts={posts} />
//       </Layout>
//     </>
//   );
// };

// export default Index;

// export async function getStaticProps() {
//   const configData = await import(`../siteconfig.json`);

//   const posts = ((context) => {
//     return getPosts(context, false);
//   })(require.context('../posts', true, /\.md$/));
//   //console.log(posts);
//   const filteredPosts = posts.filter(
//     (post) => post.frontmatter.category === 'Category 1',
//   );
//   return {
//     props: {
//       filteredPosts,
//       title: configData.default.title,
//       description: configData.default.description,
//     },
//   };
// }
