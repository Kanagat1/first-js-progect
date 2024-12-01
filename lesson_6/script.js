// let a = 5;
// console.log(a); //

//  a = a + 1;
//  a = a  +=  1;
// a = a++;  //increment
// a = a--;  //decrement
// console.log(a); //6 7 8 7

// ++a;//pre inc
// a++;//post inc

// --a;//pre dec
// a--;//post dec


// let b = a++;
// console.log(b, a);// 7 8
// let b = ++a;
// console.log(b, a);//8 8 




for (let i = 0; i < 100; i+= 3) {    //0, 3, 6,  ... 96,99 
    // console.log(i);
}

for (let i = 96; i >= 0; i-= 3) {     //99, 96, 93, ...3,0
    // console.log(i);
}

const users = [
    {
    name: "John",
    age:25
    },
    {
        name:"Jack",
        age: 60
    },
    {
        name:"Susan",
        age:18
    }
];
// let minAge = 20;
let minAge = -20;


//Условия при возрасте больше 20лет и -20
if (minAge > 0)
  for (let i = 0; i < users.length; i ++) {
    // console.log(`Name - ${users[i].name}; Age - ${users[i].age}`);
    if (users[i].age > 20) {
        // console.log(`Name - ${users[i].name}; Age - ${users[i].age}`);
    }
}

const name = "Adil";
// console.log(name[2]);

for (let i = 0; i < name.length; i++) {
    // console.log(name[i]);
}

const skills = ["HTML","CSS","JavaScript"];

   for (let i = 0; i < skills.length; i++) {
    for(let j = 0; j < skills[i].length; j++) {
        // console.log(skills[i][j]);
    }
}

const matrix = [

    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14]
];
for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + " ";
        // console.log(matrix[i][j]);
    }
    console.log(row)
}
    // matrix.length = 3
    // matrix[i].length = 4
