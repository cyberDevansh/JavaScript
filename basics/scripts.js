// ......................Difference between == and === in JavaScript...........................//

// == checks for value equality with type coercion
// === checks for both value and type equality without type coercion

5 == "5"   // true  (string "5" converted to number 5)
0 == false // true  (false converted to 0)
null == undefined // true



5 === "5"   // false (number vs string)
0 === false // false (number vs boolean)
null === undefined // false (different types)
5 === 5     // true

alert("JS Tutorial")
prompt("Enter your name")
confirm("Are you sure?")



// ..............................Difference between var, let and const in JavaScript......................//

// var: function-scoped, can be redeclared and updated
// let: block-scoped, can be updated but not redeclared in the same scope
// const: block-scoped, cannot be updated or redeclared, must be initialized at declaration


//................................JavaScript Data Types......................//

// Primitive Data Types
let num = 42;               // Number
let str = "Hello";       // String
let bool = true;         // Boolean
let undef;          // Undefined
let nul = null;         // Null
let sym = Symbol("id"); // Symbol

// Non-Primitive Data Types
let obje = { name: "Alice", age: 30 }; // Object
let arra = [1, 2, 3];                  // Array
let func = function() { return "Hi"; } // Function

// ........for-of loop vs for-in loop in JavaScript...........//

// for-of loop: iterates over iterable objects (arrays, strings, etc.)  
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value); // Outputs: 10, 20, 30
}
// for-in loop: iterates over enumerable properties of an object
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key); // Outputs: a, b, c
}


// ......................Template Literals in JavaScript......................//
//  backticks (``) allow for multi-line strings and embedded expressions
let msg = `This is
a multi-line
string`;
console.log(msg);



// other uses of 
let name = "Guppe";
let age = 20;

console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`);


// .................Object Methods in JavaScript......................//

let person = {
  name: "Guppe",
  age: 20,
  city: "Rohtak"
};

// Get all keys
console.log(Object.keys(person));   
// → ["name", "age", "city"]

// Get all values
console.log(Object.values(person)); 
// → ["Guppe", 20, "Rohtak"]

// Get both (like dict.items() in Python)
console.log(Object.entries(person));
// → [["name", "Guppe"], ["age", 20], ["city", "Rohtak"]]



//............string methods in JavaScript............................//
let text = "Hello, World!";

console.log(text.length);

// 
let stri = "Hello"
let str2 = " World"
let searchValue = "World"
let newValue = "JavaScript"
let index = 1
let separator = ", "


Stri.slice(start, end)
stri.concat(str2)
stri.replace( searchValue, newValue)
stri.charAt(index)
stri.toUpperCase()
stri.toLowerCase()
stri.trim()
stri.split(separator)
stri.indexOf(substring)

// .................array push ..................
let arry = [1, 2, 3];
arry.push(4);  
console.log(arry); // [1, 2, 3, 4]

// .................array pop ..................
let arrt = [1, 2, 3];
let removed = arrt.pop();

console.log(arrt);     // [1, 2]
console.log(removed); // 3


// .................array toString ..................
let arrr = [1, 2, 3];
let strr = arrr.toString();

console.log(strr); // "1,2,3"
console.log(arrr); // [1, 2, 3]  (unchanged)


// .................array join ..................
let arrj = [1, 2, 3];
let strj = arrj.join(" - ");
console.log(strj); // "1 - 2 - 3"


// .................array shift ..................
let arri = [10, 20, 30];
let removedd = arri.shift();

console.log(arri);     // [20, 30]
console.log(removedd); // 10


// .................array unshift ..................
let ar = [20, 30];
ar.unshift(10);

console.log(ar); // [10, 20, 30]


// .................array unshift ..................

let arryy = [10, 20, 30];
arryy.unshift(0, 5);
console.log(arryy); // [0, 5, 10, 20, 30]

// .................array concat ..................
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);

console.log(result); // [1, 2, 3, 4]
console.log(arr1);   // [1, 2]  (unchanged)


// .................array splice ..................
let arrs = [1, 2, 3, 4, 5];
arrs.splice(2, 1, 99, 100); // At index 2, remove 1 element, add 99 and 100


// .................array splice ..................
let arrayss=[1,2,3,4,5];
arrayss.splice(2,0,100);
arrayss.splice(4,1);
console.log(arrs); // [1, 2, 99, 100, 4, 5]


// .................array slice ..................
let arrsl = [1, 2, 3, 4, 5];
let newArr = arrsl.slice(1, 4);

// Arrow function to add two numbers
const sum = (a, b) => a + b;
console.log(sum(5, 7)); // 12

const arrowsum=(a,b)=>{
  console.log(a+b);
};
arrowsum(5,7); //12

// .................Default Parameters in JavaScript..................//
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet("alixe");


//................forEach Method in JavaScript..................//
let arrey = [1, 2, 3, 4, 5, 6];

// Here, the function `printVal` is a CALLBACK FUNCTION
// Why? Because we are passing this function to forEach(),
// and forEach() will "call it back" for each element in the array.
arrey.forEach(function printVal(val) {
  console.log(val);
});


// Shorter arrow function version
// This arrow function is ALSO a callback function.
// forEach() automatically executes it once for every element.
arrey.forEach((val) => {
  console.log(val);
});


// ----------------...........map Method in JavaScript..................//
let arrmap = [1, 2, 3, 4, 5];
let squared = arrmap.map(x => x * x);
console.log(squared); // [1, 4, 9, 16, 25]
console.log(arrmap); // [1, 2, 3, 4, 5] (original array unchanged)

// ..................prototype in JavaScript..................//
const student ={
  fullName:"guppe",
  rollNo:20,
  marks:95,
  printMarks:function(){
    console.log(this.fullName);
    console.log(this.marks);
  }
};
student.printMarks();

const student2=Object.create(student);


// synchronous vs asynchronous in JavaScript..................//
// Synchronous: Code is executed line by line, blocking further execution until the current operation completes.
console.log("Start");
for (let i = 0; i < 4; i++) {
  // Simulating a time-consuming task
  console.log(i);
}
console.log("End");


// Asynchronous: Code can execute without blocking the main thread, allowing other operations to run concurrently.
console.log("Start");
setTimeout(() => {
  console.log("This runs after 5 seconds");
  for (let i = 0; i < 4; i++) {
  // Simulating a time-consuming task
  console.log(i);
}
}, 5000);
console.log("End");
// Output:
// Start
// End
// This runs after 2 seconds


// ..................Callback Hell in JavaScript..................//

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log(`Data = ${dataId}`);
    if (getNextData) getNextData();  // only call if provided
  }, 2000);
}

getData(1, () => {
  getData(2);
});


getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});


getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});


// better formatted version
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log(`Data = ${dataId}`);
    if (getNextData) getNextData();
  }, 2000);
}

getData(1, () => {
  console.log("getting data 2");
  getData(2, () => {
    console.log("getting data 3");
    getData(3, () => {
      console.log("getting data 4");
      getData(4);
    });
  });
});
