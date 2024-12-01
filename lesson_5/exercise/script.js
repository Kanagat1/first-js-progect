const countries = ["Qazaqstan", "China", "Italy"];
countries.push("Spain");
console.log(countries);

const deletedCountries = [];
const firstDeletedCountry = countries.shift();
deletedCountries.push(firstDeletedCountry);
console.log(countries);
console.log(deletedCountries);

const secondDeletedCountry = countries.shift();
deletedCountries.push(secondDeletedCountry);
console.log(countries);
console.log(deletedCountries);

console.log(countries.join(", "));

const participants = ["Ернар", "Канат", "Ерлан"];
participants.splice(1, 0, "Ерболат");
console.log(participants);

participants.splice(3, 1);
console.log(participants);

participants.splice(2, 1, "Еркен");
console.log(participants);