import postAttributes from '@enums/postAttributes';

const validatePostValueIsNot = (post, value, unExpectedValue) => {
  if (post[value] === unExpectedValue)
    throw new Error(`Expecting ${value} not to be ${unExpectedValue}`);
};
const validatePost = (post) => {
  const unExpectedValues = [undefined, null];
  const requiredAttrs = {
    [postAttributes.mardownBody]: unExpectedValues,
    [postAttributes.slug]: unExpectedValues,
    [postAttributes.frontmatter.title]: unExpectedValues,
    [postAttributes.frontmatter.subtitle]: unExpectedValues,
    [postAttributes.frontmatter.author]: unExpectedValues,
    [postAttributes.frontmatter.date]: unExpectedValues,
    [postAttributes.frontmatter.category]: unExpectedValues,
  };
  console.table(requiredAttrs);
  for (const [attr, requirements] in Object.entries(requiredAttrs)) {
    for (const unExpectedValue of unExpectedValues) {
      console.log(`checking ${attr} against ${unExpectedValue}`);
      validatePostValueIsNot(post, attr, unExpectedValue);
    }
  }
};

export default validatePost;
