const book = {
    title:"Abay zholy",
    author: "Mukhtar Auezov"
};

book.year = 1942;
console.log(book);

book.title = "Bakytsyz Zhamal";
console.log(book);

delete book.author;
console.log(book);

//Задание 2
const user = {};
user.name = prompt("Введите  Ваше Имя?").trim();
user.age = +prompt("Введите Ваш возраст:");
user.email = prompt("Введите Ваш email:").trim();
console.log(user);
user.isAdmin = false;
console.log(user);
user.age += 1;
console.log(user);
delete user.email
console.log(user);