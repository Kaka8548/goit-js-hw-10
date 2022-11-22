export default function fetchCountries(name) {
  const searchParams = 'name,capital,population,flags,languages';
  const API_URL = `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`;
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
