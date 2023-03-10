import GalacticAge from "../src/js/galacticAge.js";

describe('GalacticAge', () => {

  let inputAge;

  beforeEach(() => {
    inputAge = new GalacticAge(35);
  });

  test("should correctly create a new GalacticAge objec wiht age equal to the input age parameter.", () => {
    expect(inputAge.age).toEqual(35);
  });

  test('should correctly calculate age on Mercury using a given age value', () => {
    expect(inputAge.ageOnMercury()).toEqual(145.83);
  });

  test('should correctly calculate age on Venus using a given age value', () => {
    expect(inputAge.ageOnVenus()).toEqual(56.45);
  });

  test('should correctly calculate age on Mars using a given age value', () => {
    expect(inputAge.ageOnMars()).toEqual(18.62);
  });

  test('should correctly calculate age on Jupiter using a given age value', () => {
    expect(inputAge.ageOnJupiter()).toEqual(2.95);
  });

  test('should correctly calculate age on Jupiter using a given age value', () => {
    expect(inputAge.ageOnJupiter()).toEqual(2.95);
  });

  test('should correctly calculate the number of years which have past since a given age value', () => {
    expect(inputAge.yearsSince(25)).toEqual(10);
  });

  test('should correctly calculate the number of years which have past on Mercury since a given age value', () => {
    expect(inputAge.yearsSinceMercury(25)).toEqual(41.67);
  });

  test('should correctly calculate the number of years which have past on Venus since a given age value', () => {
    expect(inputAge.yearsSinceVenus(25)).toEqual(16.13);
  });

  test('should correctly calculate the number of years which have past on Mars since a given age value', () => {
    expect(inputAge.yearsSinceMars(25)).toEqual(5.32);
  });

  test('should correctly calculate the number of years which have past on Jupiter since a given age value', () => {
    expect(inputAge.yearsSinceJupiter(25)).toEqual(.84);
  });

  test('should correctly calculate the number of years which have yet to pass until a given age value', () => {
    expect(inputAge.yearsYetToPass(46)).toEqual(11);
  });

  test('should correctly calculate the number of years which have yet to pass on Mercury until a given age value', () => {
    expect(inputAge.yearsYetToPassOnMercury(46)).toEqual(45.83);
  });

  test('should correctly calculate the number of years which have yet to pass on Venus until a given age value', () => {
    expect(inputAge.yearsYetToPassOnVenus(46)).toEqual(17.74);
  });

  test('should correctly calculate the number of years which have yet to pass on Mars until a given age value', () => {
    expect(inputAge.yearsYetToPassOnMars(46)).toEqual(5.85);
  });

  test('should correctly calculate the number of years which have yet to pass on Jupiter until a given age value', () => {
    expect(inputAge.yearsYetToPassOnJupiter(46)).toEqual(.93);
  });
