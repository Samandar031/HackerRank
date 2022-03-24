"use stric";

// let a = [4, 3, 2, 9, 0, 2, 6];
// let b = [];
// let c = [];
// console.log(Math.max(...a));

// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a.length; j++) {
//     if (Math.max(...a) == a[i]) {
//       b.push(a[i]);
//     } else {
//       c.push(a[i]);
//     }
//     break;
//   }
// }
// console.log(b.length);

// let max = Math.max(...a);
// let ali = a.filter((el) => el === max);
// console.log(ali);

// console.log(max);
// console.log(a.length);
// console.log(c);
// console.log(b);

// 2 - masala

let arr = [1, 2, 3, 4, 5];
let b = 0;

let max = Math.max(...arr);
let min = Math.min(...arr);
for (let i = 0; i < arr.length; i++) {
  b = b + arr[i];
}

let a = b - max;
let d = b - min;
let c = [a, d];
console.log(a);
console.log(typeof c);

arr.sort((a, b) => a - b);
console.log(
  String(arr.slice(0, 4).reduce((a, b) => a + b)) +
    " " +
    String(arr.slice(1, 5).reduce((a, b) => a + b))
);
