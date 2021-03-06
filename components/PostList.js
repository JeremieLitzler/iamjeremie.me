import Link from 'next/link';

import PostSummary from './PostSummary';

import sortBy from '@functions/sortBy';
import uriPath from '@enums/uriPath';

export default function PostList({ posts }) {
  if (posts === 'undefined') return null;

  const sortedPosts = sortBy(posts, ['timestamp'], true);
  //console.table(sortedPosts);
  return (
    <div>
      {!sortedPosts && <div>No posts!</div>}
      <ul className='posts'>
        {sortedPosts &&
          sortedPosts.map((post, index) => {
            return (
              <li key={index} className='post-link' key={post.slug}>
                <PostSummary post={post} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
