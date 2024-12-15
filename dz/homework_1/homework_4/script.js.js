//task 1
let infoSection = document.getElementById("info");
let ulElement = document.createElement("ul");

let li1 = document.createElement("li");
li1.textContent = "Введение в DOM";
ulElement.appendChild(li1);

let li2 = document.createElement("li");
li2.textContent = "Создание элементов";
ulElement.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = "Изменение атрибутов";
ulElement.appendChild(li3);

infoSection.appendChild(ulElement);

//task 2
let headerElement = document.getElementById("header");
let newLink = document.createElement("a");
newLink.textContent = "Мой профиль в Linkedin/Instagram/другая любая соц.сеть";
newLink.href = "https://www.linkedin.com/in/ваш-профиль"; // Замените на ссылку на ваш профиль
newLink.target = "_blank";
headerElement.appendChild(newLink);

//task 3
let mainElement = document.getElementById("main");
let dynamicSection = document.createElement("section");
dynamicSection.className = "dynamic";

let h2Element = document.createElement("h2");
h2Element.textContent = "Обучение JavaScript";
dynamicSection.appendChild(h2Element);

let pElement = document.createElement("p");
pElement.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";
dynamicSection.appendChild(pElement);

mainElement.insertBefore(dynamicSection, mainElement.firstChild);

//task 4
let infoSections = document.getElementById("info");
let firstParagraph = infoSection.querySelector("p");
infoSection.removeChild(firstParagraph);

//task 5
let footerElement = document.getElementById("footer");
footerElement.innerHTML = "";
