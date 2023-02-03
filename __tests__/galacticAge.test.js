import GalacticAge from "../src/js/galacticAge.js";

describe('GalacticAge', () => {

    test("should correctly create a new GalacticAge objec wiht age equal to the input age parameter.", () => {
        const inputAge = new GalacticAge(34);
        expect(inputAge.age).toEqual(34);
    });

    // expect(age.venus).toEqual(4);
    // expect(age.mars).toEqual(5);

    test('should correctly determine age on Mercury using a given age value', () => {
        const ageOnMercury = new GalacticAge(35);
        expect(ageOnMercury.ageMercury()).toEqual(141.66);
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

