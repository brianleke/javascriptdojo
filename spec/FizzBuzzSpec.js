const fizzBuzzModule = require('../FizzBuzz');

describe("FizzBuzz", function(){
  it("understands that six is divisible by 3", function(){
    var expectedResult = true;
    var actualResult = fizzBuzzModule.isDivisible(6, 3);

    expect(expectedResult).toBe(actualResult);
  });

  it("understands that seven is not divisible by 5", function(){
    var expectedResult = false;
    var actualResult = fizzBuzzModule.isDivisible(7, 5);

    expect(expectedResult).toBe(actualResult);
  });
});
