import Layout from '@components/Layout';
import PostList from '@components/PostList';

import getPosts from '@functions/getPosts';
import getSlugs from '@functions/getSlugs';
import groupBy from '@functions/groupBy';

const categoryPosts = ((context) => {
  return groupBy(getPosts(context, false), 'categorySlug');
})(require.context('../../posts', true, /\.md$/));

const CategoryPage = ({ title, description, category, posts, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className='title'>My articles about {category}!</h1>
        {/* The parameter is the attribute value to use where the component is used.*/}
        <PostList posts={posts} />
      </Layout>
    </>
  );
};

export default CategoryPage;

export async function getStaticProps({ ...ctx }) {
  const { category } = ctx.params;
  let posts = [];
  if (categoryPosts[category]) {
    posts = categoryPosts[category];
  }

  const config = await import(`../../siteconfig.json`);

  return {
    props: {
      title: config.title,
      description: `Posts of ${category}`,
      category,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const posts = ((context) => {
    return getPosts(context, false);
  })(require.context('../../posts', true, /\.md$/));

  const paths = Object.keys(categoryPosts)
    .filter((category) => category !== undefined)
    .map((category) => `/category/${category}`);

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  };
}
