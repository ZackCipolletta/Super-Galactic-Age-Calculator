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

function clearResponseTest(element) {
  document.querySelector(element).innerText = null;
}

// function userAgeValue(ageInputElement) {
//   return parseInt(document.querySelector(ageInputElement).value);
// }

function hanldeMercuryAgeForm() {
  event.preventDefault();
  clearResponseTest('#mercuryAge');
  let userAgeValue = parseInt(document.querySelector('#mercuryUserAge')).value;
  console.log(userAgeValue);
  const userAgeOnMercury = createGalacticAge(userAgeValue).ageOnMercury();
  const pTag = document.createElement("p");
  pTag.append(`Your age is: on Mercury is: ${userAgeOnMercury}.`);
  document.querySelector('#mercuryAge').append(pTag);
}

// function hanldeVenusAgeForm() {
//   event.preventDefault();
//   clearResponseTest('#venusAge');
//   const userAgeOnVenus = createGalacticAge().ageOnVenus();
//   console.log(userAgeOnVenus);
//   const pTag = document.createElement("p");
//   pTag.append(`Your age is: on Venus is: ${userAgeOnVenus}.`);
//   document.querySelector('#VenusAge').append(pTag);
// }

window.addEventListener("load", function () {
  document.querySelector("#mercury-age-form").addEventListener("submit", hanldeMercuryAgeForm);

  // document.querySelector("#venus-age-form").addEventListener("submit", hanldeVenusAgeForm);
});