// const lang = "JavaScript";
// let year = 1995;
// year = 2024;
// let isAuth = false;
// console.log(lang, typeof lang);
// console.log(year, typeof year);
// console.log(isAuth, typeof isAuth);

// Преобразование:
// let lang = "JavaScript";
// console.log(lang, typeof lang);
// lang = 190;
// console.log(lang, typeof lang);

// const year = 1995;
// const newYear = year;
// const newYear = String(year);    Явное преобразование
// const newYear = year.toString();
// console.log(newYear);
// console.log(typeof newYear);

// const year = 1995;
// const newYear = "Year:"+ year;   Неявное преобразование
// console.log(newYear);
// console.log(typeof newYear);

let age = "35";
age = +age;
// console.log(age);
// console.log(typeof age);

                                    // boolean  false - '', 0
                                   // true - все остальное
// let isAuth = false;
// isAuth  = "" + isAuth;
// console.log(isAuth);
// console.log(typeof isAuth);

let num = 0;
 boolNum = Boolean(num);           //Явное преобразование
console.log(boolNum, typeof boolNum);

let str = '';
str = !!(str);                       // Неявное преобразование
// console.log(str, typeof str);


//Интерполяция
const year = 1995;
// const message = "JavaScript был создан в "  + year + " году";  
// console.log(message);

const fileName = "data.csv";
const fileSize = 2048;
const message = `Файл ${fileName} успешно загружен.
Размер файла ${fileSize}KB.`;
console.log(message);

