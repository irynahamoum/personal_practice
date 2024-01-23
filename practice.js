// function XO(str) {
//   let x = 0;
//   let o = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === "x") {
//       x++;
//     } else if (str[i].toLowerCase() === "o") {
//       o++;
//     }
//   }
//   return x === o;
// }

// console.log(XO("ooxx")); //true
// console.log(XO("xooxx")); // false
// console.log(XO("ooxXm")); //true
// console.log(XO("zpzpzpp")); // true // when no 'x' and 'o' is present should return true
// console.log(XO("zzoo")); //false

//=============================================
//=============================================

//===========================================
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numberArray[0] = 4;
// numberArray[3] = 17;
// numberArray[8] = 45;

// console.log(numberArray);
// function getFileName(file) {
//   const index = file.indexOf(".");
//   if (index === -1) {
//     return file.slice();
//   } else {
//     return file.slice(0, index);
//   }
// }
// console.log(getFileName("app.js"));

//TODO: 10 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// function multiplicity(number) {
//   return number % 3 === 0 && number % 5 == 0 ? "fizzbuzz"
//     : number % 5 === 0 ? "buzz"
//     : number % 3 === 0 ? "fizz";
// }

// function multiplicity(number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "fizzbuzz";
//   } else if (number % 5 === 0) {
//     return "buzz";
//   } else if (number % 3 === 0) {
//     return "fizz";
//   }
// }

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   let sum = [];
//   for (let i = 0; i <= order.length; i++) {
//     sum += [i];
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94]));

// 135
// 503
// 1116

// function past(h, m, s) {
//   const millisecomdsInHour = 1000 * 60 * 60;
//   const millisecondsInMinute = 1000 * 60;
//   const millisecondsInSecond = 1000;

//   const totalMilliseconds =
//     h * millisecomdsInHour +
//     m * millisecondsInMinute +
//     s * millisecondsInSecond;
//   return totalMilliseconds;
// }

// function past(h, m, s) {
//   return (h * 3600 + m * 60 + s) * 1000;
// }

// const past = (h, m, s) => 3600000 * h + 60000 * m + 1000 * s;

// function removeNumbers(start, end) {
//   let amendedArray = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       amendedArray.push(i);
//     } else if (i % 2 !== 0) {
//       amendedArray.unPush(i);
//     }
//   }
// }
