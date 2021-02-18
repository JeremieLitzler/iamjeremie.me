import Layout from '@components/Layout';
import PostList from '@components/PostList';

import getPosts from '@functions/getPosts';
import getSlugs from '@functions/getSlugs';
import getSlug from '@functions/getSlug';
import filterBy from '@functions/filterBy';
import groupBy from '@functions/groupBy';
import uriPath from '@enums/uriPath';
import postAttributes from '@enums/postAttributes';

const CategoryPage = ({
  title,
  description,
  category,
  categoryPosts,
  ...props
}) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className='title'>
          My articles about <span className='emphasis'>{category}</span>!
        </h1>
        {/* The parameter is the attribute value to use where the component is used.*/}
        <PostList posts={categoryPosts} />
      </Layout>
    </>
  );
};

export default CategoryPage;

export async function getStaticProps({ ...ctx }) {
  const { category } = ctx.params;
  const posts = ((context) => {
    return getPosts(context);
  })(require.context('../../posts', true, /\.md$/));

  const categoryPosts = filterBy(
    posts,
    postAttributes.frontmatter.category,
    'array',
    category,
  );
  const config = await import(`../../siteconfig.json`);

  return {
    props: {
      title: config.title,
      description: `Posts of ${category}`,
      category,
      categoryPosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = ((context) => {
    return getPosts(context, false);
  })(require.context('../../posts', true, /\.md$/));

  const paths = Object.keys(
    groupBy(posts, postAttributes.frontmatter.category, true),
  )
    .filter((category) => category !== undefined)
    .map((category) => `${uriPath.category}${getSlug(category)}`);

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  };
}
