describe('string calculator', function () {

  it('should take an empty string', function () {
     let result = calculator('');
     expect(result).toEqual(0);
  });
  it('should take up to two numbers separated by a comma', function () {
     let result = calculator('1,2');
     expect(result).toEqual(3);
  });
  it('should handle unknown amount of numbers', function () {
     let result = calculator('1,1,1,1,17');
     expect(result).toEqual(21);
  });
  it('should handle new lines between numbers', function () {
     let result = calculator('1\n2,3');
     expect(result).toEqual(6);
  });
  it('should read a change in delimiter, where the beginning of the string will contain a separate line ', function () {
     let result = calculator('//;\n1;2');
     expect(result).toEqual(3);
  });
  it('should output negative negative numbers', () => {
     let result = calculator('10, -5');
     expect(result).toBe('negative numbers -5 not allowed')
  })
it('should not add numbers larger than 1000', () => {
  let result = calculator('105747, 5 , 50');
  expect(result).toEqual(55);
})
});