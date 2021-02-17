import Link from 'next/link';
import { render } from 'react-dom';

import getSlug from '@functions/getSlug';
import chunkMetada from '@functions/chunkMetadata';

export default function MetaBlock({
  frontmatter,
  frontmatterAttr,
  blockClass,
  elementClass,
  uriRoot,
  filter,
}) {
  console.log(frontmatter);
  const chunkedMetadata = chunkMetada(frontmatter[frontmatterAttr]);
  console.log(chunkedMetadata);
  if (!chunkedMetadata) return <></>;

  return (
    <>
      <p className={blockClass}>
        <span className='meta-block-title'>Found in: </span>
        {chunkedMetadata.map((element, index) => [
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
