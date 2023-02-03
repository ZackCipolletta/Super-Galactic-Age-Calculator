import GalacticAge from "../src/js/galacticAge.js";

describe('GalacticAge', () => {

    test("should correctly create a triangle object with three lengths", () => {
        const inputAge = new GalacticAge(34);
        expect(inputAge.age).toEqual(34);
    });

    // expect(age.venus).toEqual(4);
    // expect(age.mars).toEqual(5);

    // test('should correctly determine whether three lengths are not a triangle', () => {
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

