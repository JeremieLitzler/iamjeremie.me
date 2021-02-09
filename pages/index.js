import Layout from '@components/Layout';
//import PostList from '@components/PostList';
import PostList from '@components/PostListAdvanced';

import getPosts from '@utils/getPosts';

const Index = ({ postsPerYear, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className='title'>My articles!</h1>
        {/* The parameter is the attribute value to use where the component is used.*/}
        <PostList yearPosts={postsPerYear} />
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const postsPerYear = ((context) => {
    return getPosts(context);
  })(require.context('../posts', true, /\.md$/));
  //console.log(postsPerYear);
  return {
    props: {
      postsPerYear,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
