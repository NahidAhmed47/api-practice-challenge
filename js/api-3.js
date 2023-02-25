const container = document.getElementById('body-container');
const setTotalCountry = (length) => {
    const id = document.getElementById('found-country-text');
    id.innerText = length;
}
const loadCountryData = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}
// Display data
const displayData = (countries) => {
    container.innerText = '';
    container.classList.add('grid', 'gird-cols-1', 'md:grid-cols-4', 'p-8', 'gap-4');
    setTotalCountry(countries.length)
    countries.forEach((country) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact w-full bg-base-100 shadow h-[400px]">
        <figure><img class="max-h-[100px]" src="${country.flags.png}"/></figure>
        <div class="card-body p-6 mt-2">
          <h2 class="card-title font-bold"><span>${country.name.common}</span></h2>
          <p class="font-semibold">Official: <span>${country.name.official}</span></p>
          <p class="font-semibold">Languages: <span>${country.languages.eng}</span></p>
          <p class="font-semibold">Population: <span>${country.population}</span></p>
          <p class="font-semibold">Region: <span>${country.region}</span></p>
          <p class="font-semibold">Start of Week: <span>${country.startOfWeek}</span></p>
          <p class="font-semibold">Time Zone: <span>${country.timezones[0]}</span></p>
        </div>
      </div>
        `;
        container.appendChild(div);
    })
}
// find value from selected option
const findSelectedValue = () => {
    const selectField = document.getElementById('select-field');
    const value = selectField.value;
    const finalValue = value.toLowerCase();
    if(finalValue === 'america' || finalValue === 'africa' || finalValue === 'asia' || finalValue === 'europe' || finalValue === 'oceania'){
        loadDataByRegion(finalValue);
    }
    else{
        if(finalValue === 'english' || finalValue === 'french' || finalValue === 'arabic' || finalValue === 'spanish' || finalValue === 'german' || finalValue === 'bengali'){
            loadDataByLang(finalValue);
        }
        else{
            loadDataByCity(finalValue);
        }
    }
}
// Load data by region
const loadDataByRegion = (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayRegionData(data))
}
const displayRegionData = (country) => {
    container.innerText = '';
    container.classList.add('grid', 'gird-cols-1', 'md:grid-cols-4', 'p-8', 'gap-4');
    setTotalCountry(country.length)
    country.forEach((country) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact w-full bg-base-100 shadow h-[400px]">
        <figure><img class="max-h-[100px]" src="${country.flags.png}"/></figure>
        <div class="card-body p-6 mt-2">
          <h2 class="card-title font-bold"><span>${country.name.common}</span></h2>
          <p class="font-semibold text-sm"><span class="font-bold">Official:</span> <span>${country.name.official}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Capital:</span> <span>${country.capital[0]}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Population:</span> <span>${country.population}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Region:</span> <span>${country.region}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Start of Week:</span> <span>${country.startOfWeek}</span></p>
          <p class="font-semibold"><span class="font-bold">Time Zone:</span> <span>${country.timezones[0]}</span></p>
        </div>
      </div>
        `;
        container.appendChild(div);
    })
}
// Load data by Capital City
const loadDataByCity = (city) => {
    const url = `https://restcountries.com/v3.1/capital/${city}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayRegionData(data))
}
const displayCityCountry = (country) => {
    container.innerText = '';
    container.classList.add('grid', 'gird-cols-1', 'md:grid-cols-4', 'p-8', 'gap-4');
    setTotalCountry(country.length)
    country.forEach((country) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact w-full bg-base-100 shadow h-[400px]">
        <figure><img class="max-h-[100px]" src="${country.flags.png}"/></figure>
        <div class="card-body p-6 mt-2">
          <h2 class="card-title font-bold"><span>${country.name.common}</span></h2>
          <p class="font-semibold text-sm"><span class="font-bold">Official:</span> <span>${country.name.official}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Capital:</span> <span>${country.capital[0]}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Population:</span> <span>${country.population}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Region:</span> <span>${country.region}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Start of Week:</span> <span>${country.startOfWeek}</span></p>
          <p class="font-semibold"><span class="font-bold">Time Zone:</span> <span>${country.timezones[0]}</span></p>
        </div>
      </div>
        `;
        container.appendChild(div);
    })
}
// Load data by Languages
const loadDataByLang = (city) => {
    const url = `https://restcountries.com/v3.1/lang/${city}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayRegionData(data))
}
const displayLangCountry = (country) => {
    container.innerText = '';
    container.classList.add('grid', 'gird-cols-1', 'md:grid-cols-4', 'p-8', 'gap-4');
    setTotalCountry(country.length)
    country.forEach((country) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact w-full bg-base-100 shadow h-[400px]">
        <figure><img class="max-h-[100px]" src="${country.flags.png}"/></figure>
        <div class="card-body p-6 mt-2">
          <h2 class="card-title font-bold"><span>${country.name.common}</span></h2>
          <p class="font-semibold text-sm"><span class="font-bold">Official:</span> <span>${country.name.official}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Capital:</span> <span>${country.capital[0]}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Population:</span> <span>${country.population}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Region:</span> <span>${country.region}</span></p>
          <p class="font-semibold text-sm"><span class="font-bold">Start of Week:</span> <span>${country.startOfWeek}</span></p>
          <p class="font-semibold"><span class="font-bold">Time Zone:</span> <span>${country.timezones[0]}</span></p>
        </div>
      </div>
        `;
        container.appendChild(div);
    })
}