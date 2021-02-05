const getSlugs = (context) => {
  console.log('getting slugs...');
  const filenames = context.keys();
  const slugs = filenames.map((filename, index) => {
    //Remove the ./ and the file extension
    const slug = filename.replace(/^.*[\\\/]/, '').slice(0, -3);
    return slug;
  });
  console.log(slugs);
  return slugs;
};

export default getSlugs;
