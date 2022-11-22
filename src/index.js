import './css/styles.css';
import fetchCountries from './fetchCountries';
import countryInfo from './countryInfoTemplate';
import countryListTemplate from './countryListTamplate';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

function showInform() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function showError() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

function showCountriesList(response) {
  countryListEl.innerHTML = countryListTemplate(response);
}

function showCountryInfo(response) {
  countryInfoEl.innerHTML = countryInfo(response);
}

function showRussiaDirection() {
  countryInfoEl.innerHTML = 'За руським кораблем 💩';
}

function clearArea() {
  countryListEl.innerHTML = '';
  countryInfoEl.innerHTML = '';
}

function onInputElInput(event) {
  event.preventDefault();
  const { target } = event;
  const name = target.value.trim().toLowerCase();
  if (name === '') {
    clearArea();
    return;
  } else if (name === 'russia') {
    clearArea();
    showRussiaDirection();
    return;
  }

  fetchCountries(name)
    .then(response => {
      if (response.length > 10) {
        clearArea();
        showInform();
        return;
      } else if (response.length <= 10 && response.length >= 2) {
        clearArea();
        showCountriesList(response);
        return;
      }
      clearArea();
      showCountryInfo(response);
    })
    .catch(() => {
      showError();
    });
}

inputEl.addEventListener('input', debounce(onInputElInput, DEBOUNCE_DELAY));
