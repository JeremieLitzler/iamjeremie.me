const dynamicFunc = (func) => {
  this[func].apply(this, Array.prototype.slice.call(arguments, 1));
};

export default dynamicFunc;
