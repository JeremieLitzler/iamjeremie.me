const getSlugs = (context) => {
  const filenames = context.keys();

  const slugs = filenames.map((filename, index) => {
    let slug = filename.replace(/^.*[\\\/]/, '').slice(0, -3);

    return slug;
  });
  return slugs;
};

export default getSlugs;
