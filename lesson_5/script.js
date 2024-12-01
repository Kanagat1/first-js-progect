// const obj = {name:"John"};
// const arr = ["Astana", "Almaty"];

// console.log(obj, typeof obj);
// console.log(arr, typeof arr);

// console.log(Array.isArray(obj), typeof obj);
// console.log(Array.isArray(arr), typeof arr);

//Добавить в конец список стран(массив ) значение France
// const countries = ["Qazaqstan", "China", "Russia"];
// countries.push("France");
// console.log(countries);
//Добавить в еачало список стран(массив ) значение France
// countries.unshift("Germany");
// console.log(countries);
//Удалить последний элемент 
//Удалить посл элемент и добавить в начало списка
// countries.pop()
// console.log(countries);
// const removedCountry = countries.pop();
// console.log(removedCountry);
// countries.unshift(removedCountry);
// console.log(countries);
// countries.shift();
// console.log(countries);

// countries.shift(countries.pop())
// console.log(countries);

const fruits = "apple,banana,orange";
console.log(fruits.split(",").join(", "));