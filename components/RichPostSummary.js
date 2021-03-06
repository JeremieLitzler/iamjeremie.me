import Link from 'next/link';

import sortBy from '@functions/sortBy';
import uriPath from '@enums/uriPath';
import postAttributes from '@enums/postAttributes';

export default function RichPostSummary({ post }) {
  if (post === 'undefined') return null;

  return (
    <>
      <span className='post-date'>
        {post.frontmatter[postAttributes.frontmatter.date]} {` `}
      </span>
      <Link href={{ pathname: `${uriPath.post}${post.slug}` }}>
        <a>
          {post.frontmatter[postAttributes.frontmatter.hero_image] && (
            <div className='image-cropped-wrapper'>
              <img
                src={post.frontmatter[postAttributes.frontmatter.hero_image]}
                className='hero'
                alt={post.frontmatter[postAttributes.frontmatter.title]}
              />
            </div>
          )}
          <h2 className='title'>{post?.frontmatter?.title}</h2>
        </a>
      </Link>
      <span className='subtitle'>
        {post.frontmatter[postAttributes.frontmatter.subtitle]} {` `}
      </span>
      <Link href={{ pathname: `${uriPath.post}${post.slug}` }}>
        <a className='continue-reading'>Continue reading &#8594;</a>
      </Link>
    </>
  );
}
