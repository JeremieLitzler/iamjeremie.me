import getSlug from '@functions/getSlug';
import Link from 'next/link';
import { render } from 'react-dom';

export default function MetaBlock({
  frontmatter,
  frontmatterAttr,
  blockClass,
  elementClass,
  uriRoot,
  filter,
}) {
  return (
    <>
      {!frontmatter[frontmatterAttr] && <></>}
      <p className={blockClass}>
        <span className='title'>Found in: </span>
        {frontmatter[frontmatterAttr].map((element, index) => [
          index > 0 && ', ',
          <Link
            key={index}
            className={elementClass}
            href={{
              pathname: `${uriRoot}${getSlug(element)}`,
            }}
          >
            <a>{element}</a>
          </Link>,
        ])}
      </p>
    </>
  );
}
