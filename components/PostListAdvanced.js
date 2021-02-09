import Link from 'next/link';

//The parameter is the attribute value to use where the component is used.
export default function PostList({ yearPosts }) {
  if (yearPosts === 'undefined') return <div>No posts at all!</div>;
  return (
    <div>
      <ul className='years'>
        {Object.keys(yearPosts)
          //order years
          .sort((yearN, yearP) => (yearN < yearP ? 1 : -1))
          //render
          .map((year) => {
            return (
              <li className='year'>
                <h2>{year}</h2>
                {/* render list of post if any */}
                {!yearPosts[year] && <div>No posts for that year!</div>}
                <ul className='posts'>
                  {yearPosts[year] &&
                    yearPosts[year].map((post) => {
                      return (
                        <li className='post-link' key={post.slug}>
                          <span className='post-date'>
                            {post.frontmatter.date}: {` `}
                          </span>
                          <Link href={{ pathname: `/post/${post.slug}` }}>
                            <a>{post?.frontmatter?.title}</a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
