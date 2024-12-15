//1 task
function add(num1, num2) {
    return num1 + num2;
    
}
console.log(add(5, 9))

//2 task
function convertToCelsius(f)  {
    return ((f - 32) * 5/9).toFixed(2);
}
console.log(convertToCelsius(200));

//3 task
function compareAges(age1, age2)  {
    if (age1 > age2) {
        return "Первый человек старше!";
    }else if (age1 < age2) {
        return "Второй человек старше!";
    }else 
    return "Оба равны!";
}
console.log(compareAges(25, 45))
console.log(compareAges(31, 23));
console.log(compareAges(23, 23));

//4 task
function sumArray(arr) {
    let sum = 0;

    // for (let i = 0; i < arr.length; i++) {
    // sum += arr[i];
    // }
    for (const num of arr) {
        sum += num;
    }
    return sum;
    
}
console.log(sumArray([5, 9, 25, 14]));
console.log(sumArray([10, 20, 30, 40, 50, 60]));

//5 task
function findMin(arr) {
    // let max  = arr[0];
    let min = arr[0]
    // for (const num of arr) {
    //     if (num > max) {
    //         max = num;
    //     }
    // } 
    for (const num of arr) {
        if (num < min) {
                min = num;
        }
    }
    return min
    
}
// console.log("Найбольшее число:" + findMax([9, 5, 25, 14]));
console.log("Наименьшее число:" + findMin([9, 5, 25, 14]));

//6 task
function countEventOdd(arr) {
    let obj = {even:0, odd:0};

    for (let i = 0; i < arr.length; i++)  {
        const num = arr[i];

        if (num % 2 === 0)  {
            obj.even += num;
        } else {
            obj.odd += num;
        }
    }

    return obj
}
console.log(countEventOdd([9, 5, 38, 7, 25, 14]));