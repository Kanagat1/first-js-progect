// const username = "user";
// const user = {
//     name: "Aigerim",
//     age: 25,
//     position: "Project manager",
//     "text text": 0,
// };

// const keyOfObj = "text text";
// console.log(username.length);
// console.log(user.name);
// console.log(user["name"]);
// console.log(user[keyOfObj]);

                     //Добавление и изменение свойства также удаление
// const user = {
//         name: "Aigerim",
//         age: 25,
//         position: "Project manager",
// }

// user.name = "Dinara";
// user["city"] = "Astana";
// user.country = "Kazakhstan";
// console.log(user);
// console.log(user.city);
// console.log(user.country);
// delete user.position;
// console.log(user);

const user = {
    name: "Aigerim",
    age: 25,
    position: "Project manager",
    loc: {
        city: "Astana",
        country: "KZ",
    }
};
console.log(user);
console.log(user.loc.city);
                               //деструктиризация 
const {name, loc:{city}} = user;
// console.log(loc);
console.log(city);
