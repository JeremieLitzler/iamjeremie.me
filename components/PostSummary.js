import Link from 'next/link';

import sortBy from '@functions/sortBy';
import uriPath from '@enums/uriPath';

export default function PostSummary({ post }) {
  if (post === 'undefined') return null;

  return (
    <>
      <Link href={{ pathname: `${uriPath.post}${post.slug}` }}>
        <a>{post?.frontmatter?.title}</a>
      </Link>
      <span className='post-date'>
        {post.frontmatter.date} {` `}
      </span>
    </>
  );
}
