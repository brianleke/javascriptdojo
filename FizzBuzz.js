
isDivisible = function(numerator, denominator) {
  if (numerator % denominator == 0) {
    return true;
  } else {
    return false;
  }
};

module.exports.isDivisible = isDivisible;