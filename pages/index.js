import Layout from '@components/Layout';
//import PostList from '@components/PostList';
import GroupedPostList from '@components/GroupedPostList';

import getPosts from 'functions/getPosts';
import groupBy from '@functions/groupBy';

const Index = ({ years, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        {/* The parameter is the attribute value to use where the component is used.*/}
        <GroupedPostList groups={years} />
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const years = ((context) => {
    return groupBy(getPosts(context), 'year');
  })(require.context('../posts', true, /\.md$/));
  //console.log(postsPerYear);
  return {
    props: {
      years,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
