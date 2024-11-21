//1 задание
const isLoggedIn = true;
const strIsLoggenIn = "" + isLoggedIn;
console.log(strIsLoggenIn, typeof strIsLoggenIn);
//2 задание
let itemsInCart = 5;
itemsInCart = !!itemsInCart;
console.log(itemsInCart, typeof itemsInCart);
//3задание
const message = "  Welcome to JavaScript World  ";
const trimmedMessage = message.trim();
const upperMessage = trimmedMessage.toUpperCase();
const includeMessage = trimmedMessage.includes('JavaScript');
console.log(message);
console.log(trimmedMessage);
console.log(upperMessage);
console.log(includeMessage);
//4задание
const score = "100";
const num = +score;
const summanum = 100 +20;
console.log(summanum);
const stringSumNum = summanum.toString();
console.log(stringSumNum, typeof(stringSumNum));