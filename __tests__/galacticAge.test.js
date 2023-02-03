import GalacticAge from "../src/js/galacticAge.js";

describe('GalacticAge', () => {

  let inputAge;

  beforeEach(() => {
    inputAge = new GalacticAge(35);
  });

  test("should correctly create a new GalacticAge objec wiht age equal to the input age parameter.", () => {
    expect(inputAge.age).toEqual(35);
  });

  test('should correctly determine age on Mercury using a given age value', () => {
    expect(inputAge.ageOnMercury()).toEqual(145.83);
  });

  test('should correctly determine age on Mercury using a given age value', () => {
    expect(inputAge.ageOnVenus()).toEqual(56.45);
  });

  test('should correctly determine age on Mercury using a given age value', () => {
    expect(inputAge.ageOnMars()).toEqual(18.62);
  });

  test('should correctly determine age on Mercury using a given age value', () => {
    expect(inputAge.ageOnJupiter()).toEqual(2.95);
  });





  //   test('should correctly determine whether three lengths are not a triangle', () => {
  //     const notTriangle = new Triangle(3, 9, 22);
  //     expect(notTriangle.checkType()).toEqual("not a triangle");
  // });

  // test('should correctly determine whether three lengths make a scalene triangle', () => {
  //     const scalTriangle = new Triangle(4, 5, 7)
  //     expect(scalTriangle.checkType()).toEqual("scalene triangle");
  // });

  // test('should correctly determine whether three lengths make an isosceles triangle', () => {
  //     const isoscTriangle = new Triangle(5,5,7)
  //     expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
  //   });
  //   test('should correctly determine whether three lengths make an equilateral triangle', () => {
  //     const equiTriangle = new Triangle(5,5,5)
  //     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
  //   });
});

