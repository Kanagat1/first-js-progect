// let i = 1;

// while (i <= 10) {
//     // console.log(i);
//     i++;
// }

// let balance  = 100;
// while (balance > 0 ) {
//   const input = +prompt(`Остаток: ${balance}. Введите любое число:`);
  
//   if (isNaN(input)) {
//     alert("Вы ввели некорректное значение!");
//     continue;
//   }


//   balance -= input;
//   console.log(`Остаток баланса: ${balance}`);
// }
// alert("Ваш баланс отрицательный. Игра окончена!");

// const grades = {
//     math: 5,
//     phisics: 4,
//     history: 3,
//     english: 4,
// };

// for (const key in grades) {
//     console.log(`${key}:${grades[key]}`);
        
    // }

const countries = ["Kazakhstan", "Great Britain", "France", "Italy"];

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);;
    
}

for (const country of countries) {
    console.log(country);
}