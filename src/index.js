import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/galacticAge.js';

function createGalacticAge() {
  const userAge = parseInt(document.querySelector('#userAge').value);
  const userGalacticAge = new GalacticAge(userAge);
  return userGalacticAge;
}

function clearResponseTest(element) {
  document.querySelector(element).innerText = null;
}

function hanldeMercuryAgeForm() {
    event.preventDefault();
    clearResponseTest('#mercuryAge');
    const userAgeOnMercury = createGalacticAge().ageOnMercury();
    const pTag = document.createElement("p");
    pTag.append(`Your age is: on Mercury is: ${userAgeOnMercury}.`);
    document.querySelector('#mercuryAge').append(pTag);
}


window.addEventListener("load", function() {
  document.querySelector("#mercury-age-form").addEventListener("submit", hanldeMercuryAgeForm);

  document.querySelector("#venus-age-form").addEventListener("submit", createGalacticAge);
});