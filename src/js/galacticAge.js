export default class GalacticAge {
  constructor(age) {
    this.age = age;
  }

  ageOnMercury() {
    return Number((this.age / .24).toFixed(2));
  }

  ageOnVenus() {
    return Number((this.age / .62).toFixed(2));
  }

  ageOnMars() {
    return Number((this.age / 1.88).toFixed(2));
  }

  ageOnJupiter() {
    return Number((this.age / 11.86).toFixed(2));
  }

  yearsSince(earlierAge) {
    return Number((this.age - earlierAge).toFixed(2));
  }

  yearsSinceMercury(earlierAge) {
    let yearsSince = this.yearsSince(earlierAge);
     let ageSinceMercury = new GalacticAge(yearsSince);
     return ageSinceMercury.ageOnMercury();
  } 

  yearsSinceVenus(earlierAge) {
    let yearsSince = this.age - earlierAge;
    return Number((yearsSince / .62).toFixed(2));
  } 

  yearsSinceMars(earlierAge) {
    let yearsSince = this.age - earlierAge;
    return Number((yearsSince / 1.88).toFixed(2));
  } 




//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }
//   }
}