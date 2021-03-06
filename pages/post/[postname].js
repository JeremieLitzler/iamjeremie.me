import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { render } from 'react-dom';

import Layout from '@components/Layout';
import getSlugs from '@functions/getSlugs';
import getSlug from '@functions/getSlug';
import uriPath from '@enums/uriPath';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import gfm from 'remark-gfm';
import postAttributes from '@enums/postAttributes';
import MetaBlock from '@components/MetaBlock';

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={irBlack} language={language} children={value} />
    );
  },
};
export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <>
      <Layout
        pageTitle={`${siteTitle} | ${frontmatter.title}`}
        description={frontmatter[postAttributes.frontmatter.subtitle]}
      >
        <div className='back' role='button'>
          ←{' '}
          <Link href='/'>
            <a>Back to post list</a>
          </Link>
        </div>
        <article>
          <h1 className='title post-title'>{frontmatter.title}</h1>
          <MetaBlock
            blockTitle={'Found in: '}
            frontmatter={frontmatter}
            frontmatterAttr={postAttributes.frontmatter.category}
            blockClass={'categories'}
            elementClass={'category'}
            uriRoot={uriPath.category}
          />
          <hr></hr>
          {frontmatter.hero_image && (
            <img
              src={frontmatter.hero_image}
              className='hero'
              alt={frontmatter.title}
            />
          )}
          <div>
            <ReactMarkdown
              renderers={renderers}
              plugins={[gfm]}
              source={markdownBody}
            />
          </div>
          <MetaBlock
            blockTitle={'Tagged: '}
            frontmatter={frontmatter}
            frontmatterAttr={postAttributes.frontmatter.tag}
            blockClass={'tags'}
            elementClass={'tag'}
            uriRoot={uriPath.tag}
          />
        </article>
      </Layout>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context);
  })(require.context('../../posts', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  };
}
