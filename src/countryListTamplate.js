export default function countryListTemplate(response) {
  return response
    .map(el => {
      return `<li class='country-list_item'><img src='${el.flags.svg}' width='30' height='30' alt='${el.name.official} flag'><span>${el.name.official}</span></li>`;
    })
    .join('');
}
