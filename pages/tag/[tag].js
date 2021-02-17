import Layout from '@components/Layout';
import PostList from '@components/PostList';

import getPosts from '@functions/getPosts';
import getSlugs from '@functions/getSlugs';
import getSlug from '@functions/getSlug';
import filterBy from '@functions/filterBy';
import groupBy from '@functions/groupBy';
import uriPath from '@enums/uriPath';
import postAttributes from '@enums/postAttributes';

const TagPage = ({ title, description, tag, postsPerTag, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className='title'>
          My articles about <span class='emphasis'>{tag}</span>!
        </h1>
        {/* The parameter is the attribute value to use where the component is used.*/}
        <PostList posts={postsPerTag} />
      </Layout>
    </>
  );
};

export default TagPage;

export async function getStaticProps({ ...ctx }) {
  const { tag } = ctx.params;
  const posts = ((context) => {
    return getPosts(context);
  })(require.context('../../posts', true, /\.md$/));

  const postsPerTag = filterBy(posts, 'tagChunks', 'array', tag);
  const config = await import(`../../siteconfig.json`);

  return {
    props: {
      title: config.title,
      description: `Posts of ${tag}`,
      tag,
      postsPerTag,
    },
  };
}

export async function getStaticPaths() {
  const posts = ((context) => {
    return getPosts(context, false);
  })(require.context('../../posts', true, /\.md$/));

  const paths = Object.keys(
    groupBy(posts, postAttributes.frontmatter.tagChunks),
  )
    .filter((tag) => tag !== undefined)
    .map((tag) => `${uriPath.tag}${getSlug(tag)}`);

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  };
}
