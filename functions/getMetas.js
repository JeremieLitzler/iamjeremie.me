const boostFrontMatter = (
  rawFrontMatter,
  postFileName,
  metaKey = 'no-key-given',
) => {
  const newFrontMatter = Object.assign({}, rawFrontMatter);
  if (rawFrontMatter[metaKey] === undefined) {
    //skip if no meta
    console.warn(
      `Post doesn't contain a <${metaKey}> to boostFrontMatter. See post ${postFileName}`,
    );
    return rawFrontMatter;
  }
  //check category doesn't contain any special character
  //category should be made of alphanumeric characters and space only
  //convert category to lowerCase
  let slug = rawFrontMatter.category.toLowerCase();
  //convert
  // - brakets (\[ and \]),
  // - parantethis (\( and \))
  // - and spaces ( )
  // to dashes (-) in the whole string (/[filter]+/g)
  const regex = /[\[\(\)\]\ ]+/g;
  slug = slug.replace(regex, '-').replace(/-$/, ''); //remove trailing dash if any
  console.log(slug);
  newFrontMatter['categorySlug'] = slug;
  return newFrontMatter;
};

export default boostFrontMatter;
