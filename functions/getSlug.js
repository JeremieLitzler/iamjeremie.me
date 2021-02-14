const getSlug = (metaKey = 'no-key-given') => {
  //check category doesn't contain any special character
  //category should be made of alphanumeric characters and space only
  //convert category to lowerCase
  let slug = metaKey.toLowerCase().trim();
  //convert
  // - brakets (\[ and \]),
  // - parantethis (\( and \))
  // - and spaces ( )
  // to dashes (-) in the whole string (/[filter]+/g)
  const regex = /[\[\(\)\]\ ]+/g;
  slug = slug.replace(regex, '-').replace(/-$/, ''); //remove trailing dash if any
  //console.log(slug);
  return slug;
};

export default getSlug;
