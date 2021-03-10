import Link from 'next/link';

import RichPostSummary from './RichPostSummary';

import sortBy from '@functions/sortBy';
import uriPath from '@enums/uriPath';

export default function PostList({ posts }) {
  if (posts === 'undefined') return null;

  const sortedPosts = sortBy(posts, ['timestamp'], true);
  //console.table(sortedPosts);
  return (
    <>
      {!sortedPosts && <div>No posts!</div>}
      <section className='rich-posts'>
        {sortedPosts &&
          sortedPosts.map((post, index) => {
            return (
              <article key={index} className='rich-post' key={post.slug}>
                <RichPostSummary post={post} />
              </article>
            );
          })}
      </section>
    </>
  );
}
