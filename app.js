// 1
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2
let colors = ["red", "green", "blue"];
let para2 = document.querySelector("#output");
for (let i = 0; i < colors.length; i++) {
  para2.innerHTML += colors[i] + " ";
}

// 3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4
let n = 5;
while (n >= 1) {
  console.log(n);
  n--;
}

// 5
let names = ["Ali", "Sara", "Ahmed"];
document.querySelector("#names").innerHTML = names.join(", ");

// 6
document.querySelector("#status").textContent = "Loading...";

// 7
let nums1 = [5, 10, 15];
let sum1 = 0;
for (let i = 0; i < nums1.length; i++) {
  sum1 += nums1[i];
}
document.querySelector("#sum").textContent = sum1;

// 8
let cities = ["Karachi", "Lahore", "Quetta"];
document.querySelector("#cities").textContent = cities.join(" ");

// 9
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// 10
let numbers10 = [45, 22, 89, 100];
let maxNum = numbers10[0];
for (let i = 1; i < numbers10.length; i++) {
  if (numbers10[i] > maxNum) maxNum = numbers10[i];
}
document.querySelector("#max").textContent = maxNum;

// 11
document.querySelector("#result").textContent = "Task Complete";

// 12
let temps = [30, 35, 32, 40];
let totalT = 0;
for (let i = 0; i < temps.length; i++) totalT += temps[i];
let avg = totalT / temps.length;
document.querySelector("#averageTemp").textContent = avg;

// 13
let total = 0;
for (let i = 1; i <= 100; i++) total += i;
document.querySelector("#totalSum").textContent = total;

// 14
let animals = ["dog", "cat", "bird"];
document.querySelector("#animals").textContent = animals.join(", ");

// 15
document.querySelector("#title").textContent = "Welcome to JavaScript!";

// 16
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) console.log(i);
}

// 17
let scores = [80, 60, 90, 70];
let countHigh = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 75) countHigh++;
}
document.querySelector("#highScores").textContent = countHigh;

// 18
document.querySelector("#message").textContent = "Updated successfully";

// 19
let subjects = ["Math", "Science", "English"];
document.querySelector("#subjectsList").textContent = subjects.join(", ");

// 20
let nums20 = [5, 10, 15, 20];
let sum20 = 0;
for (let i = 0; i < nums20.length; i++) sum20 += nums20[i];
console.log("Sum =", sum20);

// 21
let arr21 = [45, 67, 12, 89, 34];
let largest21 = arr21[0];
for (let i = 1; i < arr21.length; i++) {
  if (arr21[i] > largest21) largest21 = arr21[i];
}
console.log(largest21);

// 22
let arr22 = [3, 8, 6, 1, 9, 2];
let evenCount = 0;
for (let i = 0; i < arr22.length; i++) {
  if (arr22[i] % 2 === 0) evenCount++;
}
console.log(evenCount);

// 23
let arr23 = [20, 30, 40, 50];
let sum23 = 0;
for (let i = 0; i < arr23.length; i++) sum23 += arr23[i];
console.log(sum23 / arr23.length);

// 24
let arr24 = [2, 4, 6, 8, 10];
let newArr24 = [];
for (let i = 0; i < arr24.length; i++) {
  newArr24.push(arr24[i] * 3);
}
console.log(newArr24);

// 25
let arr25 = [1, 3, 5, 7, 9];
let count25 = 0;
for (let i = 0; i < arr25.length; i++) {
  if (arr25[i] > 4) count25++;
}
console.log(count25);

// 26
let arr26 = [10, 15, 20, 25, 30];
let sum26 = 0;
for (let i = 0; i < arr26.length; i++) {
  if (arr26[i] % 5 === 0) sum26 += arr26[i];
}
console.log(sum26);

// 27
let arr27 = [10, 20, 30, 40, 25];
let found = false;
for (let i = 0; i < arr27.length; i++) {
  if (arr27[i] === 25) found = true;
}
console.log("Found:", found);

// 28
let a1 = [1, 2, 3], a2 = [4, 5, 6], a3 = [];
for (let i = 0; i < a1.length; i++) {
  a3.push(a1[i] + a2[i]);
}
console.log(a3);

// 29
let arr29 = [10, 99, 23, 87, 56];
let largest = arr29[0], second = arr29[0];
for (let i = 0; i < arr29.length; i++) {
  if (arr29[i] > largest) {
    second = largest;
    largest = arr29[i];
  } else if (arr29[i] > second && arr29[i] < largest) {
    second = arr29[i];
  }
}
console.log("Second Largest:", second);

// 30
let arr30 = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = arr30.length - 1; i >= 0; i--) reversed.push(arr30[i]);
console.log(reversed);

// 31
for (let i = 2; i <= 50; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}

// 32
let arr32 = [11, 4, 99, 2, 47];
let max32 = arr32[0], min32 = arr32[0];
for (let i = 1; i < arr32.length; i++) {
  if (arr32[i] > max32) max32 = arr32[i];
  if (arr32[i] < min32) min32 = arr32[i];
}
console.log("Difference:", max32 - min32);

// 33
let arr33 = [0, -1, -5, 6, 8, -3];
let negCount = 0;
for (let i = 0; i < arr33.length; i++) {
  if (arr33[i] < 0) negCount++;
}
console.log(negCount);

// 34
let arr34 = [1, 2, 3, 4, 5, 6];
let oddArr = [];
for (let i = 0; i < arr34.length; i++) {
  if (arr34[i] % 2 !== 0) oddArr.push(arr34[i]);
}
console.log(oddArr);

// 35
let arr35 = [0, 1, 0, 3, 0, 5];
let nonZero = [];
for (let i = 0; i < arr35.length; i++) {
  if (arr35[i] !== 0) nonZero.push(arr35[i]);
}
console.log(nonZero);

// 36
let arr36 = [1, 2, 3, 4, 5, 6];
let temp = arr36[0];
arr36[0] = arr36[arr36.length - 1];
arr36[arr36.length - 1] = temp;
console.log(arr36);

// 37
let arr37 = [2, 4, 6, 8];
let allEven = true;
for (let i = 0; i < arr37.length; i++) {
  if (arr37[i] % 2 !== 0) allEven = false;
}
console.log(allEven);

// 38
let arr38 = [5, 10, 15, 20, 25];
let sum38 = 0;
for (let i = 0; i < arr38.length; i++) sum38 += arr38[i];
let avg38 = sum38 / arr38.length;
let count38 = 0;
for (let i = 0; i < arr38.length; i++) {
  if (arr38[i] >= avg38) count38++;
}
console.log(count38);

// 39
let arr39 = [2, 2, 2, 2, 2];
let allSame = true;
for (let i = 1; i < arr39.length; i++) {
  if (arr39[i] !== arr39[0]) allSame = false;
}
console.log(allSame);