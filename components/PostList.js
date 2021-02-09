import Link from 'next/link';

export default function PostList({ posts }) {
  if (posts === 'undefined') return null;

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul className='posts'>
        {posts &&
          posts.map((post) => {
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
    </div>
  );
}
