

const pirmas: Miestas = {
    'name': 'Kaunas',
    'population': 32500,
    'continent': 'Europe'
}
getFacts(pirmas);

interface Miestas {
    name: string,
    population: number,
    continent: string,
}


function getFacts(myCity: Miestas): void {
    console.log(myCity.name+' has a population of '+myCity.population+' and is situated in '+myCity.continent);
}