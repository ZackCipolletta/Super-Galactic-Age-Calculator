import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/galacticAge.js';

function createGalacticAge(userAge) {
  // const userAge = parseInt(document.querySelector(elementID).value);
  const userGalacticAge = new GalacticAge(userAge);
  console.log(userAge);
  return userGalacticAge;
}

function clearResult(element) {
  document.querySelector(element).innerText = null;
}

function getValue(elmentId) {
  return parseInt(document.getElementById(elmentId).value);
}

function hanldeMercuryAgeForm() {
  event.preventDefault();
  clearResult('#mercuryAge');
  let userAge = getValue('mercuryAgeInput');
  console.log(userAge);
  const userAgeOnMercury = createGalacticAge(userAge).ageOnMercury();
  const pTag = document.createElement("p");
  pTag.append(`Your age is: on Mercury is: ${userAgeOnMercury}.`);
  document.querySelector('#mercuryAge').append(pTag);
}

function hanldeVenusAgeForm() {
  event.preventDefault();
  clearResult('#venusAge');
  let userAge = getValue('venusUserAge');
  const userAgeOnVenus = createGalacticAge(userAge).ageOnVenus();
  console.log(userAgeOnVenus);
  const pTag = document.createElement("p");
  pTag.append(`Your age is: on Venus is: ${userAgeOnVenus}.`);
  document.querySelector('#venusAge').append(pTag);
}


function hanldeMarsAgeForm() {
  event.preventDefault();
  clearResult('#marsAge');
  let userAge = getValue('marsUserAge');
  const userAgeOnMars = createGalacticAge(userAge).ageOnMars();
  console.log(userAgeOnMars);
  const pTag = document.createElement("p");
  pTag.append(`Your age is: on Mars is: ${userAgeOnMars}.`);
  document.querySelector('#marsAge').append(pTag);
}

function hanldeJupiterAgeForm() {
  event.preventDefault();
  clearResult('#jupiterAge');
  let userAge = getValue('jupiterUserAge');
  const userAgeOnJupiter = createGalacticAge(userAge).ageOnJupiter();
  console.log(userAgeOnJupiter);
  const pTag = document.createElement("p");
  pTag.append(`Your age is: on Jupiter is: ${userAgeOnJupiter}.`);
  document.querySelector('#jupiterAge').append(pTag);
}

window.addEventListener("load", function () {
  document.querySelector("#mercury-age-form").addEventListener("submit", hanldeMercuryAgeForm);

  document.querySelector("#venus-age-form").addEventListener("submit", hanldeVenusAgeForm);
  
  document.querySelector("#mars-age-form").addEventListener("submit", hanldeMarsAgeForm);

  document.querySelector("#jupiter-age-form").addEventListener("submit", hanldeJupiterAgeForm);
});