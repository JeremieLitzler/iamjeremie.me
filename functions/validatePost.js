import postAttributes from '@enums/postAttributes';

const validatePostValueIsNot = (
  object,
  attr,
  postFileName,
  unExpectedValues,
) => {
  unExpectedValues.forEach((unExpectedValue) => {
    if (object[attr] === unExpectedValue)
      throw new Error(
        `Expecting <${attr}> not to be <${unExpectedValue}> in ${postFileName}`,
      );
  });
};
const validatePost = (post, postFileName) => {
  const unExpectedValues = [undefined, null];
  validatePostValueIsNot(
    post,
    postAttributes.markdownBody,
    postFileName,
    unExpectedValues,
  );
  validatePostValueIsNot(post, 'frontmatter', postFileName, unExpectedValues);
  validatePostValueIsNot(
    post.frontmatter,
    postAttributes.frontmatter.author,
    postFileName,
    unExpectedValues,
  );
  validatePostValueIsNot(
    post.frontmatter,
    postAttributes.frontmatter.category,
    postFileName,
    unExpectedValues,
  );
  validatePostValueIsNot(
    post.frontmatter,
    postAttributes.frontmatter.date,
    postFileName,
    unExpectedValues,
  );
  validatePostValueIsNot(
    post.frontmatter,
    postAttributes.frontmatter.subtitle,
    postFileName,
    unExpectedValues,
  );
  validatePostValueIsNot(
    post.frontmatter,
    postAttributes.frontmatter.title,
    postFileName,
    unExpectedValues,
  );
};

export default validatePost;
