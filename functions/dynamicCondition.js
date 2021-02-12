const dynamicCondition = (attr1, operator, attr2) => {
  switch (operator) {
    case '>':
      return attr1 > attr2;
    case '<':
      return attr1 < attr2;
    case '>=':
      return attr1 >= attr2;
    case '<=':
      return attr1 <= attr2;
    case '==':
      return attr1 == attr2;
    case '!=':
      return attr1 != attr2;
    case '===':
      return attr1 === attr2;
    case '!==':
      return attr1 !== attr2;
  }
};
export default dynamicCondition;
