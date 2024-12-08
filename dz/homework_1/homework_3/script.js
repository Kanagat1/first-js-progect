//Задание 1

// const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

// while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
// }

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

console.log(`Сумма чисел: ${sum}`); // 253

//задание 2
// const books = [
//     { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
//     { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
//     { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
//     { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
//   ];
  
//   for (let i = 0; i < books.length; i++) {
//     console.log(`Книга: ${books[i].title}, Автор: ${books[i].author},Количество страниц: ${books[i].numberOfPages}, Жанр: ${books[i].genre} `);
//     console.log("Награды:");
//     for (let j = 0; j < books[i].awards.length; j++) {
//     //   console.log(`- ${books[i].awards[j]}`);
//     }
//     // console.log(""); // Пустая строка для разделения книг
//   }
  
  //Задание 3
  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];

  function calculateAveragePages(books) {
    let totalPages = 0;
  
    for (let i = 0; i < books.length; i++) {
      totalPages += books[i].numberOfPages;
    }
  
    let averagePages = totalPages / books.length;
    return averagePages;
  }
//   console.log(`Среднее количество страниц: ${calculateAveragePages(books)}`);

//Задание 4
function repeatString(str, n) {
    let repeatedStr = '';
    for (let i = 0; i < n; i++) {
      repeatedStr += str;
    }
    return repeatedStr;
  }
  
  // Пример использования
  const result = repeatString("hello", 3);
//   console.log(result); 

//Задание 5
function calculateAverage(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    let average = sum / numbers.length;
    return average;
  }
  
  // Пример использования
//   const numbers = [10, 20, 30, 40, 50, 60];
//   const average = calculateAverage(numbers);
//   console.log(`Среднее значение: ${average}`); 
  
  //Задание 6
  function countEvenNumbers(numbers) {
    const evenNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
  
    return evenNumbers;
  }
  
  // Пример использования
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = countEvenNumbers(numbers);
  console.log(evenNumbers); // [2, 4, 6]
  
  
