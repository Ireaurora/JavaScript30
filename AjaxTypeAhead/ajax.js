//city json file 
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//we need an empty array to put our data in 
const cities = []; 
//fetch returns a promise
// .then returns a blob of data without knowing the type of data 
// blob.json returns another blob of data hence we need then() twice
fetch(endpoint)
        .then(blob => blob.json())
        // ... indicates the spreading so it doesn't create an array into an array
        .then(data => cities.push(...data)); 

function findMatches(word, cities){
    return cities.filter(place => {
        //cities or state matches what was searched
        //g looks for the entire string, i matches lower and uppercase
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const suggestions = document.querySelector('.suggestions');
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }

window.onload = function () {
    const searchInput = document.querySelector('.search');
    
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
}