//1task
console.log(document.title);
document.title = "Мой новый загаловок!";

//2 task
const divBlock = document.getElementById("main");
console.log(divBlock);

const firstParagraf = document.querySelector(".text");
console.log(firstParagraf);

const allItems = document.querySelectorAll("li")
console.log(allItems);

for (let i = 0; i < allItems.length; i++) {
    console.log(allItems[i].textContent);
    
}

