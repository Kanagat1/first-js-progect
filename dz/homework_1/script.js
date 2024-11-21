//Задание 1
const firstName = "Kanagat";
const lastName = "Bekmaganbetov";
const age = 42;
const idName = `Меня зовут ${firstName} ${lastName},и мне 42года.` 
console.log(idName);
//Задание 2
const city = "Жезказган";
const town = "Я родом из города " + city;
console.log(town);
//Задание 3
let password = 'open';
hasAccess = Boolean(password);
console.log(hasAccess);
password = 0;
hasAccess = !!(password);
console.log(hasAccess);
//Задание 4
const isMember = false;
const isStringMember = isMember.toString()
console.log(isStringMember,typeof isStringMember);
//Задание 5
let carItems = 0;
bulCarItems = !!carItems;
console.log(bulCarItems);
//false-считается пустой ведь -"" или 0,если значения 
//carItems поменять будет чем то заполнен!
//Задание 6
const  averageScore = 89.75695;
const roundScore = averageScore.toFixed(1);
console.log(roundScore);
//Задание 7
const  greetingMessage = "    Приветствуем вас в мире программирования!    "
const rightMessage = greetingMessage.trim();
const upperRightMessage = rightMessage.toUpperCase();
const compareMessage = rightMessage.startsWith("программирования");
console.log(rightMessage);
console.log(upperRightMessage);
console.log(compareMessage);
//иcпользовал метод startWith()


