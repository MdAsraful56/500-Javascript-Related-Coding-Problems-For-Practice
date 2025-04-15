//তোর কাছে একটা স্ট্রিং আছে, “hello”! এটা রিভার্স করে কি আউটপুট আসে সেটার জন্য একটা প্রোগ্রাম লিখে দেখ।
const string1 = "hello";
let reverse1 = "";
for (const letter of string1) {
  reverse1 = letter + reverse1;
}
console.log("Problem 1:", reverse1); // Output: "olleh"


const object = 'Hello World';
let reversel = "";
for (const element of object) {
  reversel = element + reversel;
}
console.log("Problem 2:", reversel); 