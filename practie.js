// console.log(typeof ("Hello")); //string
// console.log(typeof (42)); // number
// console.log(typeof (true)); // boolean
// console.log(typeof (undefined));  //undefined
// console.log(typeof (null));  //object

// const arr = [1, 2, 3];
// console.log(Array.isArray(arr)); // true
// console.log(Array.isArray({})); // false

// const str = "123"

// // console.log(typeof(String(Number(str))));
// console.log(str);

// const checkType = (value)=>{
//     console.log(typeof(value));
// }

// let a ="sonu"
// checkType(++a)

// console.log(checkType("sonu"))
// typeof(value)

// console.log( NaN==undefined );

// You have a variable that can hold multiple types of data. Write a function that handles each data type differently. For example:

// If it's a number, return its square.
// If it's a string, return its length.
// If it's an array, return its first element.

// const checkMultipleTypes = (value)=>{
//     if(typeof value=== 'number'){
//         return value*value
//     }else if
//     (typeof value==='string'){
//         return value.length
//     }else
//     if( Array.isArray(value)){
//         return value[0]
//     }
//     else{
//         return undefined
//     }
// }

// console.log(checkMultipleTypes([1]));
// let input = "sonu";

// console.log((function (input){
//     if (typeof input ==='number'){
//         return input+input
//     }else if(typeof input === 'string'){
//         let convert = Number(input)
//         return convert+convert
//     }else{
//         return undefined
//     }

// })(input))


// (function (input) {
//   if (typeof input === "number") {
//     console.log(input + input);
//   } else if (typeof input === "string") {
//     let convert = Number(input);
//     console.log(convert + convert);
//   } else {
//     console.log(undefined);
//   }
// })(input);

// let input = 1234; // Define input variable

// (function (input) {
//     if (typeof input === 'number') {
//         console.log(input + input); // Output the sum of the number with itself
//     } else if (typeof input === 'string') {
//         let convert = Number(input); // Convert the string to a number
//         console.log(convert + convert); // Output the sum of the converted number with itself
//     } else {
//         console.log(undefined); // Output undefined for other types
//     }
// })(input);

// console.log(result);


// Array Manipulation: Given an array of mixed data types, write a function to separate them into two arrays: one for numbers and one for non-numbers.


// let mixedArray = [1,,2,4,undefined,'sonu',"hen",true]

// const mixedArraySplit = (arry)=>{
//     let numArry=[]
//     let nonArray=[]

//     arry.map((item)=>{
//         if(typeof item==='number'){
//              numArry.push(item)
//         }else {
//            nonArray.push(item)
//         }
//     })

//     console.log(numArry)
//     console.log(nonArray);
    
// }

// mixedArraySplit(mixedArray)

// Object Properties: Given an object, write a function that returns an array of the keys that have string values.

const obj = {
    name:"sonu",
    marks : 70,
    collage : "UOM",
    job : "FED"
}

const keyofstringObj = function(obj){
    let keyofstringObg=[]

    Object.keys(obj).map((key)=>{

      if(typeof  obj[key]==='string'){
        keyofstringObg.push(key)
      }
       
    })
    console.log(keyofstringObg)

}

// keyofstringObj(obj)

let x = 10;
let y = x;
y = 20;
x=y
// console.log(x);

let a = 4;
let b = a;
b =! 5;
// console.log(b); // 5

let str1 = "Hello";
let str2 = str1;
str2 =+ " World";
// console.log(str2); // 


let obj1 = { value: 1 };

// let obj2 = obj1;
// obj2.value = 2;
// console.log(obj1); // 

let copyobj=Object.assign({},obj1)


copyobj.value=5

// console.log(copyobj);
// console.log(obj1)

let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr2);

let coArr=[...arr1]
coArr.push(20)

// console.log(coArr);
// console.log(arr1);


function greet() {
    return "Hello!";
}
let sayHello = greet;
sayHello = function() {
    return "Hi!";
}
// console.log(greet()); 
// console.log(sayHello()); 


let person = { name: "Alice", address: { city: "Wonderland" } };
let anotherPerson = person;
anotherPerson.address.city = "New Wonderland";
// console.log(person.address.city);

let num = 10;
let anotherNum = num;
num = 15;
// console.log(num); 

const car = { brand: "Toyota" };
const myCar = car;
myCar.brand = "Honda";
// console.log(car.brand);



let h = 5;
let yg= h;
yg++ 
// console.log(h===yg); 

let count = 1;
const increment = function() {
    console.log(count++);
};
// increment();
// increment();
// increment();
// increment();

let arrc1 = new Array(1,3)
// console.log(arrc1);

let arr = Array.from("1,3,8")
// console.log(arr);
let arrn = Array.of("1, 2, 3");
// console.log(arrn);

let arrent = ['a', 'b', 'c'];
// let iterator = arrent.entries();
// console.log(iterator.next().value); // [0, 'a']
// console.log(iterator.next().value); // [0, 'a']
// console.log(iterator.next().value); // [0, 'a']
// console.log(iterator.next().value); // [0, 'a']


let arrrev = [6789,0,1,"sonu",true];
; // [3, 2, 1]
// console.log(arrrev.reverse());

let sortarr = [1,3,8,64]
// console.log(sortarr.reverse());
// console.log(sortarr);

let arrsl = [1, 2, 3, 4,90];
let sliced = arrsl.slice(1,3); // [2, 3]
// console.log(arrsl);
// console.log(sliced);

let arrd = [3, 1, 2,78,97];
// (console.log(arrd.sort()))

let arrsa = [1, 2, 3];
let reversed = arrsa.toReversed(); // [3, 2, 1]

// console.log(reversed);
// console.log(arrsa);

let obg= new Object()

// console.log(obg);

const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign( source,target);
// console.log("source",source.b=90,source);  // { a: 1, b: 2, c: 3 }
// console.log("newobj",newobj,newobj.b=100,newobj.c=500);
// console.log("target",target,target.a=400);

// console.log(target+source)

const objent = { a: 1, b: 2 };
// console.log(Object.entries(objent))

const objfr = { a: 1 };
Object.freeze(objfr);
objfr.a = 2;  // TypeError in strict mode
objfr.b=100
// console.log(Object.isFrozen(objfr));  // 1
// console.log(objfr);  // 1

const entries = [ ['a', 1], ['b', 2] ];
const objfrarr = Object.fromEntries(entries);
// console.log(objfrarr);  // { a: 1, b: 2 }

const objget = { a: 1,
    b:7
 };
const descriptor = Object.getOwnPropertyDescriptor(objget,"b");
// console.log(descriptor);\

const date = new Date();
// console.log(date.toLocaleString());

const obstrj = {};
// console.log(obstrj.toString()); 

const objva = { a: 1,b:80,c:90 };

// console.log(objva.valueOf()); 






// Bitwise


let q = 5;  // binary: 0101
let w = 3;  // binary: 0011
console.log(q & w);  // binary: 0001 => output: 1


let ab = 5;  // binary: 0101
let bc = 3;  // binary: 0011
console.log(ab | bc);  // binary: 0111 => output: 7



