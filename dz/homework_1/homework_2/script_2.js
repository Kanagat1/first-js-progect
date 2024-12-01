//Создаем приложение ,которое помогоает пользователю выбирать напиток в зависимости от времени суток:

// let timeOfDay = prompt("Введите время суток (утро, день, вечер):");

if (typeof timeOfDay !== 'string' || timeOfDay.trim() === '') {
    alert("Ошибка: введите корректное время суток.");
} else {
    let drink;
    if (timeOfDay === 'утро') {
        drink = 'кофе';
    } else if (timeOfDay === 'день') {
        drink = 'чай';
    } else if (timeOfDay === 'вечер') {
        drink = 'горячий шоколад';
    } else {
        alert("Ошибка: введите корректное время суток.");
    }
    if (drink) {
        alert(`Вам подойдет ${drink}.`);
    }
}
//Задание 2
// let user = {
//     name: prompt("Введите ваше имя:"),
//     age: parseInt(prompt("Введите ваш возраст:")),
//     subject: prompt("Введите ваш предмет:"),
//     grade: prompt("Введите вашу оценку:")
// };

// console.log(user);

// user.age += 5;

// console.log(user);

// Задание 3
const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "криминал" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия" }
];

// console.log(movies[1].director);
// console.log(movies[3].genre);

let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];

shoppingList.unshift("мандарины");
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

shoppingList.splice(2, 1, "апельсин", "хурма");
console.log(shoppingList);
