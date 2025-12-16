// Chapter: 17-20

// Chapter: 17-20 / (Q:1)
var multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(multiArray);

// Chapter: 17-20 / (Q:2)
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Chapter: 17-20 / (Q:3)
var tableNum = 5;
var tableLength = 10;
console.log("Multiplication Table of " + tableNum);
console.log("Length " + tableLength);
for (var i = 1; i <= tableLength; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

// Chapter: 17-20 / (Q:4)
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("Element at index 0 is " + fruits[0]);
console.log("Element at index 1 is " + fruits[1]);
console.log("Element at index 2 is " + fruits[2]);
console.log("Element at index 3 is " + fruits[3]);
console.log("Element at index 4 is " + fruits[4]);

// Chapter: 17-20 / (Q:5)
console.log("Counting:");
for (var i = 1; i <= 15; i++) {
    console.log(i);
}
console.log("Reverse Counting:");
for (var i = 15; i >= 1; i--) {
    console.log(i);
}
console.log("Even:");
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}
console.log("Odd:");
for (var i = 1; i < 20; i += 2) {
    console.log(i);
}
console.log("Series:");
for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}

// Chapter: 17-20 / (Q:6)
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchItem.toLowerCase()) {
        found = true;
        alert(searchItem + " is available at index " + i + " in our bakery.");
        break;
    }
}
if (!found) {
    alert("We are sorry. " + searchItem + " is not available in our bakery.");
}

// Chapter: 17-20 / (Q:7)
var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
console.log("The largest number is " + largest);

// Chapter: 17-20 / (Q:8)
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
console.log("The smallest number is " + smallest);

// Chapter: 17-20 / (Q:9)
for (var i = 1; i <= 20; i++) {
    console.log(i * 5);
}

// Chapter: 17-20 / (Q:10)
for (var i = 5; i <= 100; i += 5) {
    console.log(i);
}