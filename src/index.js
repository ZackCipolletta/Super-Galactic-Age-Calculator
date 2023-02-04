import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/galacticAge.js';

function createGalacticAge() {
  const userAge = parseInt(document.querySelector('#userAgeInput').value);
  const userGalacticAge = new GalacticAge(userAge);
  console.log(userAge);
  return userGalacticAge;
}

function clearResult(element) {
  document.querySelector(element).innerText = null;
}


function hanldeMercuryAgeForm() {
  event.preventDefault();
  clearResult('#mercuryAge');

  let planetsArr = ['mercury', 'venus', 'mars', 'jupiter'];
  let ageOnPlanetsFuncArr = [createGalacticAge().ageOnMercury(), createGalacticAge().ageOnVenus(), createGalacticAge().ageOnMars(), createGalacticAge().ageOnJupiter()];

  for (let i = 0; i <= planetsArr.length - 1; i++) {
    clearResult(`#${planetsArr[i]}Age`);
    const userAgeOnX = ageOnPlanetsFuncArr[i];
    const pTag = document.createElement("p");
    pTag.append(`Your age is: on ${planetsArr[i]} is: ${userAgeOnX}.`);
    document.querySelector(`#${planetsArr[i]}Age`).append(pTag);
  }
}

window.addEventListener("load", function () {
  document.querySelector("#galactic-age-form").addEventListener("submit", hanldeMercuryAgeForm);
});