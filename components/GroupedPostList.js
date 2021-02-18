import Link from 'next/link';
import PostList from 'components/PostList';
//The parameter is the attribute value to use where the component is used.
export default function GroupedPostList({ groups }) {
  if (groups === 'undefined') return <div>No posts at all!</div>;
  return (
    <div>
      <ul className='years'>
        {Object.keys(groups)
          //order years
          .sort((yearN, yearP) => (yearN < yearP ? 1 : -1))
          //render
          .map((year, index) => {
            return (
              <li key={index} className='year'>
                <h2>{year}</h2>
                {!groups[year] && <div>No posts for that year!</div>}
                <PostList posts={groups[year]} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
