const allOperations = {
  sum: function (a, b) {
    console.log(a + b);
    return a + b;
  },

  diff: function (a, b) {
    return a - b;
  },

  product: function (a, b) {
    return a * b;
  },
};

module.exports = allOperations;
