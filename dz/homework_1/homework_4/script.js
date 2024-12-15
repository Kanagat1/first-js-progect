//Part 1
//task 1
document.title = "Бекмаганбетов Канагат Егинбаевич"; 

//task 2
let headerElement = document.getElementById("header");
let h1Element = headerElement.querySelector("h1");
h1Element.textContent = "Изучение JavaScript";

//task 3
let menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(link => {
  console.log(link.textContent);
});

//task 4
let featuresListItems = document.querySelectorAll(".features-list li");

if (featuresListItems.length > 1) {
  featuresListItems[1].innerHTML = 'Поддержка <strong>API</strong>';
}



