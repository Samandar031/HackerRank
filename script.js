"use stric";

let a = [4, 3, 2, 9, 0, 2, 6];
let b = [];
let c = [];
console.log(Math.max(...a));

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (Math.max(...a) == a[i]) {
      b.push(a[i]);
    } else {
      c.push(a[i]);
    }
    break;
  }
}
console.log(b.length);

// let max = Math.max(...a);
// let ali = a.filter((el) => el === max);
// console.log(ali);

// console.log(max);
// console.log(a.length);
console.log(c);
console.log(b);
