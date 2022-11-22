export default function countryInfo(response) {
  const country = response[0];
  const languageList = Object.values(country.languages);

  return `<div class='country-info_wrapper'><img src='${country.flags.svg}' width='40' height='40' alt='${country.name.official}flag'>
  <span class='country-info_title'>${country.name.official}</span></div>
  <ul><li class='country-info_item'><span class='country-info_subtitle'>Capital: </span>${country.capital}</li>
  <li class='country-info_item'><span class='country-info_subtitle'>Population: </span>${country.population}</li>
  <li class='country-info_item'><span class='country-info_subtitle'>Languages: </span>${languageList}</li></ul>`;
}
