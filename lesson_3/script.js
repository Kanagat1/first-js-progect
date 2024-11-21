const temp = +prompt("Введите темп");
const isVeryCold = temp < -10;
const isCold = temp >= 10 && temp < 0;
const isWarm = temp >= 0 && temp <= 20;

if (isVeryCold)  {
    alert("оденьтесь тепло,на улице очень холодно");
} else if (isCold) {
    alert('холодно,оденьтесь!');
} else if (isWarm) {
    alert("Прохладно,оденьте свитер!");
} else {
    alert("Больше 20,тепло и комфортно");
}