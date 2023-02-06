import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/galacticAge.js';

function createGalacticAge() {
  const userAge = parseInt(document.querySelector('#userAgeInput').value);
  const userGalacticAge = new GalacticAge(userAge);
  return userGalacticAge;
}

function clearResult(element) { // clears the innerText of the element;
  document.querySelector(element).innerText = null;
}

function planetsArr() { // create a function which returns an array of planets
  return ['mercury', 'venus', 'mars', 'jupiter'];
}

function appendTofunction(selectedElement, elementToAppend) {
  return document.querySelector(selectedElement).append(elementToAppend);
}


function hanldeGalacticAgeForm() {
  event.preventDefault();

  let ageOnPlanetsFuncArr = [createGalacticAge().ageOnMercury(), createGalacticAge().ageOnVenus(), createGalacticAge().ageOnMars(), createGalacticAge().ageOnJupiter()]; // creating an array of planets and functions was the only way I found to loop through each and match them up with the correct name and HTML elements.

  for (let i = 0; i <= planetsArr().length - 1; i++) {
    clearResult(`#${planetsArr()[i]}Age`); //calls the clearResults function to clear the innerText of the specified HTML element so when the submit button is pressed another value is not stakced onto the existing text.
    const userAgeOnX = ageOnPlanetsFuncArr[i]; // loops through the array functions which calculate age on each planet
    const pTag = document.createElement("p");
    pTag.append(`Your age is: on ${planetsArr()[i]} is: ${userAgeOnX}.`); // itterate through each planet and function, writing the correlating values to the innerText of the newly created 'p' element.
    appendTofunction(`#${planetsArr()[i]}Age`, pTag); // appends the new p element to the specified HTML tag.
  }
}



function handleGalacticYearsPastForm() {
  event.preventDefault();

  const youngerAge = parseInt(document.querySelector('#userEarlierAgeInput').value);
  let yearsPastOnPlanetsFuncArr = [createGalacticAge().yearsSinceMercury(youngerAge), createGalacticAge().yearsSinceVenus(youngerAge), createGalacticAge().yearsSinceMars(youngerAge), createGalacticAge().yearsSinceJupiter(youngerAge)]; // I have not found away to iterate through the array of functions, passing in the value of youngerAge each time through the loop.  ESlint would not allow this.

  for (let i = 0; i <= planetsArr().length - 1; i++) {
    clearResult(`#${planetsArr()[i]}YearsPast`);
    const yearsPastOnX = yearsPastOnPlanetsFuncArr[i];
    const pTag = document.createElement("p");
    pTag.append(`${yearsPastOnX} years have passed on ${planetsArr()[i]} since you were ${youngerAge} on Earth.`);
    appendTofunction(`#${planetsArr()[i]}YearsPast`, pTag);
  }
}


function handleGalacticYearsYetToPassForm() {
  event.preventDefault();

  const futureAge = parseInt(document.querySelector('#userFutureAgeInput').value);
  let yearsYetToPassFuncArr = [createGalacticAge().yearsYetToPassOnMercury(futureAge), createGalacticAge().yearsYetToPassOnVenus(futureAge), createGalacticAge().yearsYetToPassOnMars(futureAge), createGalacticAge().yearsYetToPassOnJupiter(futureAge)];

  for (let i = 0; i <= planetsArr().length - 1; i++) {
    clearResult(`#${planetsArr()[i]}YearsYet`);
    const yearsYetToPass = yearsYetToPassFuncArr[i];
    const pTag = document.createElement("p");
    pTag.append(`${yearsYetToPass} years will pass on ${planetsArr()[i]} before you are ${futureAge} on Earth.`);
    appendTofunction(`#${planetsArr()[i]}YearsYet`, pTag);
  }
}

window.addEventListener("load", function () {
  document.querySelector("#galactic-age-form").addEventListener("submit", hanldeGalacticAgeForm);

  document.querySelector("#galactic-years-past-form").addEventListener("submit", handleGalacticYearsPastForm);

  document.querySelector("#galactic-years-yet-to-come-form").addEventListener("submit", handleGalacticYearsYetToPassForm);
});