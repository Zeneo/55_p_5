"use strict";
const pirmas = {
    'name': 'Kaunas',
    'population': 32500,
    'continent': 'Europe'
};
getFacts(pirmas);
function getFacts(myCity) {
    console.log(myCity.name + ' has a population of ' + myCity.population + ' and is situated in ' + myCity.continent);
}
